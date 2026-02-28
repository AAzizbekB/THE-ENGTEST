/* =========================
   app.js
   Premium Offline IELTS Hub
   ========================= */

(function(){
  function pad2(n){ return String(n).padStart(2,"0"); }

function formatClockDate(d){
  // Example: Sat, Feb 28
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
}

function startClock(){
  const elTime = document.getElementById("clockTime");
  const elDate = document.getElementById("clockDate");
  if(!elTime || !elDate) return;

  const tick = ()=>{
    const d = new Date();
    elTime.textContent = `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
    elDate.textContent = formatClockDate(d);
  };

  tick();
  setInterval(tick, 1000);
}
// ---------- Leaderboard (offline deterministic) ----------
function lbMetricValue(metric){
  if(metric === "daily5") return (state.progress.stats.bestDaily5 || 0);     // 0..5
  if(metric === "quiz100") return (state.progress.stats.bestQuiz100 || 0);   // 0..100
  if(metric === "streak") return (state.progress.streak || 0);              // 0..N
  return 0;
}

// deterministically generate "global-ish" scores so rank can be 4449 etc.
function pseudoScore(seed, metric){
  // metric scaling
  let max = 100;
  if(metric === "daily5") max = 5;
  if(metric === "quiz100") max = 100;
  if(metric === "streak") max = 365;

  // LCG-ish
  let x = seed >>> 0;
  x = (x * 1664525 + 1013904223) >>> 0;
  x = (x * 1664525 + 1013904223) >>> 0;

  // skew a bit so top looks competitive
  const r = (x % 100000) / 100000; // 0..1
  const skew = Math.pow(r, 0.55);  // more high values
  return Math.floor(skew * max);
}

function buildLeaderboard(metric){
  // Build top100 list with names from DATA + pseudo scores
 const list = DATA.leaderboardNames.slice(0, 100).map((name, i)=>{
  const seed = hash(metric + "|" + name + "|" + i);
  const emojiPool = ["🙂","😎","🧠","🔥","⚡","🚀","🎧","📚","⭐","👑"];
  const avatarEmoji = emojiPool[seed % emojiPool.length];
  return { name, score: pseudoScore(seed, metric), avatarEmoji };
});

  // Insert YOU with real score
  const me = {
  name: state.profile.name || "You",
  score: lbMetricValue(metric),
  me: true,
  photoDataUrl: state.profile.photoDataUrl || ""
};

  list.push(me);

  // sort desc, then name
  list.sort((a,b)=> (b.score - a.score) || a.name.localeCompare(b.name));

  // compute your rank in a "big universe"
  // We simulate many players beyond top100 using pseudo distribution
  // So you can be #4449 even if not in top100
  const myScore = me.score;
  const universeN = 5000; // enough to get large ranks like 4449
  let better = 0;

  for(let i=0;i<universeN;i++){
    const seed = hash(metric + "|U|" + i);
    const sc = pseudoScore(seed, metric);
    if(sc > myScore) better++;
    // tie-break: if equal score, assume some are ahead
    else if(sc === myScore && i % 3 === 0) better++;
  }

  // now compute rank (1-based)
  const myRank = better + 1;

  // find my index in displayed list (top100+me)
  const myIndex = list.findIndex(x=>x.me);

  return { list, myRank, myIndex, metric };
}

function metricLabel(metric){
  if(metric === "daily5") return "Daily 5";
  if(metric === "quiz100") return "Quiz100";
  if(metric === "streak") return "Streak";
  return metric;
}
  // ---------- Helpers ----------
  const $ = (q, el=document) => el.querySelector(q);
  const $$ = (q, el=document) => Array.from(el.querySelectorAll(q));
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const nowISO = () => new Date().toISOString();
  const todayKey = () => new Date().toISOString().slice(0,10);

  function toast(msg){
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(()=>t.remove(), 2600);
  }

  // ---------- Storage ----------
  const STORE_KEY = "engtest_state_v2";

  const defaultState = () => ({
    theme: "dark",
    lang: "uz",
    route: "home",
    sidebarCollapsed: false,
    

    profile: {
      name: "Azizbek",
      bio: "IELTS grind mode 🔥",
      photoDataUrl: "",

      nicknameId: "n1",
      nameCardId: "c1",

      // DEFAULTS YOU REQUESTED:
      stickerIds: ["s_fire","s_star","s_smile"], // default 3
      frameId: "f_none",
      badgeIds: []
    },

    progress: {
      xp: 0,
      level: 1,
      streak: 0,
      lastVisit: "",
      milestonesDone: {},
      stats: {
        grammarDailyDoneDates: {},
        grammarQuizAttempts: 0,
        // ✅ best scores for leaderboard
        bestDaily5: 0,      // 0..5
  bestQuiz100: 0,     // 0..100
        vocabOpened: 0,
        readingOpened: 0,
        listeningOpened: 0
      }
    },

    favorites: {
      grammarRules: {},
      grammarQuestions: {},
      vocab: {},
      irregular: {},
      reading: {},
      listening: {}
    },

    settings: {
      rating: { stars: 0, feedback: "" },
      music: { trackId: "m1", volume: 35, playing: false },

      // NEW:
      examDate: "",     // YYYY-MM-DD
      dailyGoalXP: 40,  // editable
    },

    // NEW HOME MODULE
    home: {
      home: {
  lbMetric: "daily5",
  lbExpanded: false
},
      todo: [], // [{id,text,done,ts}]
      daily: { date:"", goalXP:0 },
      best: { daily5Best:0, quiz100Best:0, bestStreak:0 }
    }
  });

  function deepMerge(base, patch){
    const out = Array.isArray(base) ? [...base] : {...base};
    for(const k in patch){
      if(patch[k] && typeof patch[k] === "object" && !Array.isArray(patch[k])){
        out[k] = deepMerge(base[k] ?? {}, patch[k]);
      }else{
        out[k] = patch[k];
      }
    }
    return out;
  }

  function loadState(){
    try{
      const raw = localStorage.getItem(STORE_KEY);
      if(!raw) return defaultState();
      const s = JSON.parse(raw);
      return deepMerge(defaultState(), s);
    }catch(e){
      return defaultState();
    }
  }
  function saveState(){
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  }

  let state = loadState();

  // ---------- i18n (UI labels) ----------
  const I18N = {
    uz: {
      ieltsHub:"IELTS Hub",
      home:"Bosh sahifa",
      grammar:"Grammatika",
      vocab:"Lug'at",
      reading:"Reading",
      listening:"Listening",
      profile:"Profil",
      settings:"Sozlamalar",
      offlineNote:"Hammasi brauzeringizda saqlanadi",
      level:"Daraja",
      streak:"Kunlik seriya",
      dark:"Tungi",
      light:"Kunduzgi",

      heroTitle:"IELTS Hub — hammasi bitta joyda",
      heroSub:"Grammar + Vocab + Reading + Listening. Tez va chiroyli.",
      quickStart:"Tez boshlash",
      open:"Ochish",
      daily5:"Kunlik 5 savol",
      fullTest:"100 ta test",
      rules:"Qoidalar",
      favorites:"Sevimlilar",
      milestones:"Milestones",
      progress:"Progress",

      dailyTitle:"Kunlik 5 Grammar",
      dailySub:"Har kuni 5 ta savol — streak + XP uchun.",
      startDaily:"Boshlash",
      quizTitle:"Grammar Test (100)",
      quizSub:"100 savol — IELTS uslubida.",
      startQuiz:"Testni boshlash",
      rulesTitle:"Grammatika qoidalari",
      search:"Qidirish",
      showFav:"Faqat sevimlilar",

      vocabTitle:"Lug'at (Search + Favorites)",
      vocabSub:"So‘zlar, sinonim, misol, va tarjima.",
      irregularBtn:"Irregular Verbs",
      word:"So'z",
      meaning:"Ma'no",
      synonym:"Sinonim",
      example:"Misol",
      uzbek:"Uzbekcha",
      addFav:"Sevimliga",
      removeFav:"O‘chirish",

      readingTitle:"Reading testlar",
      listeningTitle:"Listening testlar",
      openTest:"Testni ochish",

      profileTitle:"Profil",
      uploadPhoto:"Rasm yuklash",
      frame:"Ramka",
      stickers:"Stikerlar",
      badges:"Badge’lar",

      settingsTitle:"Sozlamalar",
      language:"Til",
      theme:"Tema",
      rateUs:"Baholash",
      policy:"Policy",
      terms:"Terms",
      privacy:"Privacy",
      feedback:"Izoh",
      save:"Saqlash",
      music:"Fon musiqasi",
      musicLocked:"(locked)",
    },

    ru: {
      ieltsHub:"IELTS Hub",
      home:"Главная",
      grammar:"Грамматика",
      vocab:"Словарь",
      reading:"Reading",
      listening:"Listening",
      profile:"Профиль",
      settings:"Настройки",
      offlineNote:"Всё хранится в браузере",
      level:"Уровень",
      streak:"Серия дней",
      dark:"Тёмная",
      light:"Светлая",

      heroTitle:"IELTS Hub — всё в одном месте",
      heroSub:"Grammar + Vocab + Reading + Listening. Быстро и красиво.",
      quickStart:"Быстрый старт",
      open:"Открыть",
      daily5:"Ежедневно 5",
      fullTest:"Тест 100",
      rules:"Правила",
      favorites:"Избранное",
      milestones:"Достижения",
      progress:"Прогресс",

      dailyTitle:"Ежедневные 5 (Grammar)",
      dailySub:"5 вопросов в день — серия + XP.",
      startDaily:"Начать",
      quizTitle:"Тест по грамматике (100)",
      quizSub:"100 вопросов — стиль IELTS.",
      startQuiz:"Начать тест",
      rulesTitle:"Правила грамматики",
      search:"Поиск",
      showFav:"Только избранное",

      vocabTitle:"Словарь (Поиск + Избранное)",
      vocabSub:"Слова, синонимы, примеры, перевод.",
      irregularBtn:"Неправильные глаголы",
      word:"Слово",
      meaning:"Значение",
      synonym:"Синоним",
      example:"Пример",
      uzbek:"Узбекский",
      addFav:"В избранное",
      removeFav:"Удалить",

      readingTitle:"Тесты Reading",
      listeningTitle:"Тесты Listening",
      openTest:"Открыть тест",

      profileTitle:"Профиль",
      uploadPhoto:"Загрузить фото",
      frame:"Рамка",
      stickers:"Стикеры",
      badges:"Значки",

      settingsTitle:"Настройки",
      language:"Язык",
      theme:"Тема",
      rateUs:"Оценка",
      policy:"Policy",
      terms:"Terms",
      privacy:"Privacy",
      feedback:"Комментарий",
      save:"Сохранить",
      music:"Фоновая музыка",
      musicLocked:"(закрыто)",
    },

    kk: {
      ieltsHub:"IELTS Hub",
      home:"Басты бет",
      grammar:"Грамматика",
      vocab:"Сөздік",
      reading:"Reading",
      listening:"Listening",
      profile:"Профиль",
      settings:"Баптаулар",
      offlineNote:"Барлығы браузерде сақталады",
      level:"Деңгей",
      streak:"Күндік серия",
      dark:"Қараңғы",
      light:"Жарық",

      heroTitle:"IELTS Hub — бәрі бір жерде",
      heroSub:"Grammar + Vocab + Reading + Listening. Жылдам әрі әдемі.",
      quickStart:"Жылдам бастау",
      open:"Ашу",
      daily5:"Күнделікті 5",
      fullTest:"100 тест",
      rules:"Ережелер",
      favorites:"Таңдаулы",
      milestones:"Мақсаттар",
      progress:"Прогресс",

      dailyTitle:"Күнделікті 5 Grammar",
      dailySub:"Күніне 5 сұрақ — серия + XP.",
      startDaily:"Бастау",
      quizTitle:"Grammar Test (100)",
      quizSub:"100 сұрақ — IELTS стилі.",
      startQuiz:"Тестті бастау",
      rulesTitle:"Грамматика ережелері",
      search:"Іздеу",
      showFav:"Тек таңдаулы",

      vocabTitle:"Сөздік (Іздеу + Таңдаулы)",
      vocabSub:"Сөздер, синоним, мысал, аударма.",
      irregularBtn:"Irregular Verbs",
      word:"Сөз",
      meaning:"Мағына",
      synonym:"Синоним",
      example:"Мысал",
      uzbek:"Өзбекше",
      addFav:"Таңдаулыға",
      removeFav:"Өшіру",

      readingTitle:"Reading тесттері",
      listeningTitle:"Listening тесттері",
      openTest:"Тестті ашу",

      profileTitle:"Профиль",
      uploadPhoto:"Фото жүктеу",
      frame:"Жиек",
      stickers:"Стикер",
      badges:"Белгілер",

      settingsTitle:"Баптаулар",
      language:"Тіл",
      theme:"Тақырып",
      rateUs:"Бағалау",
      policy:"Policy",
      terms:"Terms",
      privacy:"Privacy",
      feedback:"Пікір",
      save:"Сақтау",
      music:"Фон музыкасы",
      musicLocked:"(жабық)",
    },

    tj: {
      ieltsHub:"IELTS Hub",
      home:"Саҳифаи асосӣ",
      grammar:"Грамматика",
      vocab:"Луғат",
      reading:"Reading",
      listening:"Listening",
      profile:"Профил",
      settings:"Танзимот",
      offlineNote:"Ҳама чиз дар браузер нигоҳ мешавад",
      level:"Сатҳ",
      streak:"Силсилаи рӯзҳо",
      dark:"Торӣ",
      light:"Рӯшан",

      heroTitle:"IELTS Hub — ҳамааш дар як ҷо",
      heroSub:"Grammar + Vocab + Reading + Listening. Тез ва зебо.",
      quickStart:"Оғози зуд",
      open:"Кушодан",
      daily5:"Ҳаррӯз 5",
      fullTest:"100 тест",
      rules:"Қоидаҳо",
      favorites:"Дӯстдоштаҳо",
      milestones:"Милстоунҳо",
      progress:"Пешрафт",

      dailyTitle:"Ҳаррӯза 5 Grammar",
      dailySub:"5 савол дар рӯз — streak + XP.",
      startDaily:"Оғоз",
      quizTitle:"Grammar Test (100)",
      quizSub:"100 савол — услуби IELTS.",
      startQuiz:"Оғози тест",
      rulesTitle:"Қоидаҳои грамматика",
      search:"Ҷустуҷӯ",
      showFav:"Танҳо дӯстдошта",

      vocabTitle:"Луғат (Ҷустуҷӯ + Дӯстдошта)",
      vocabSub:"Калимаҳo, синоним, мисол, тарҷума.",
      irregularBtn:"Irregular Verbs",
      word:"Калима",
      meaning:"Маъно",
      synonym:"Синоним",
      example:"Мисол",
      uzbek:"Ӯзбекӣ",
      addFav:"Ба дӯстдошта",
      removeFav:"Ҳазф",

      readingTitle:"Reading тестҳо",
      listeningTitle:"Listening тестҳо",
      openTest:"Кушодани тест",

      profileTitle:"Профил",
      uploadPhoto:"Бор кардани акс",
      frame:"Чаҳорчӯба",
      stickers:"Стикерҳо",
      badges:"Нишонаҳо",

      settingsTitle:"Танзимот",
      language:"Забон",
      theme:"Мавзӯъ",
      rateUs:"Баҳо",
      policy:"Policy",
      terms:"Terms",
      privacy:"Privacy",
      feedback:"Шарҳ",
      save:"Нигоҳ доштан",
      music:"Мусиқии замина",
      musicLocked:"(баста)",
    }
  };

  function t(key){
    const lang = state.lang || "uz";
    return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : (I18N.uz[key] || key);
  }

  function applyUILang(){
    const map = [
      ["t_ieltsHub","ieltsHub"],
      ["t_home","home"], ["t_grammar","grammar"], ["t_vocab","vocab"],
      ["t_reading","reading"], ["t_listening","listening"],
      ["t_profile","profile"], ["t_settings","settings"],
      ["t_offlineNote","offlineNote"],
      ["t_level","level"], ["t_streak","streak"],
      ["t_dark","dark"],
    ];
    map.forEach(([id,key])=>{
      const el = document.getElementById(id);
      if(el) el.textContent = t(key);
    });
  }

  // ---------- Progress system ----------
  function xpToNext(level){
    return Math.round(100 + (level-1)*18 + Math.floor((level-1)/5)*30);
  }

  function shouldRewardLevel(lvl){
    if(lvl <= 10) return true;
    return (lvl % 2 === 0) && (lvl <= 50);
  }

  function grantLevelRewards(lvl){
    if(!shouldRewardLevel(lvl)) return;

    // Auto-upgrade nickname to newest unlocked (still selectable in Profile)
    const unlockedN = DATA.nicknames.filter(isUnlocked);
    const newest = unlockedN[unlockedN.length - 1];
    if(newest) state.profile.nicknameId = newest.id;

    toast(`Rewards unlocked for level ${lvl} 🎁`);
    saveState();
  }

  function recalcLevel(){
    let xp = state.progress.xp;
    let lvl = state.progress.level;

    while(lvl < 50){
      const need = xpToNext(lvl);
      if(xp >= need){
        xp -= need;
        lvl += 1;
        toast(`Level up! → ${lvl} 🚀`);

        grantLevelRewards(lvl);

        if(lvl === 10) unlockMilestone("level_10");
        if(lvl === 25) unlockMilestone("level_25");
        if(lvl === 50) unlockMilestone("level_50");
      }else break;
    }

    state.progress.level = lvl;
    state.progress.xp = xp;
  }

  function addXP(amount, reason=""){
    amount = Math.max(0, Math.floor(amount));
    if(amount === 0) return;

    state.progress.xp += amount;

    // Daily goal progress
    state.home.daily.goalXP = (state.home.daily.goalXP || 0) + amount;

    recalcLevel();
    saveState();
    renderSideStats();
    if(reason) toast(`+${amount} XP — ${reason}`);
  }

  function unlockMilestone(id){
    if(state.progress.milestonesDone[id]) return;
    state.progress.milestonesDone[id] = true;
    const m = DATA.milestones.find(x=>x.id===id);
    if(m){
      addXP(m.xp, `Milestone: ${m.title}`);
      toast(`Milestone unlocked: ${m.title} ✅`);
    }else{
      toast(`Milestone unlocked ✅`);
    }
    saveState();
    refreshMusicOptions();
  }

  function updateStreak(){
    const today = todayKey();
    const last = state.progress.lastVisit;
    if(!last){
      state.progress.streak = 1;
      state.progress.lastVisit = today;
      return;
    }
    if(last === today) return;

    const d1 = new Date(last);
    const d2 = new Date(today);
    const diffDays = Math.round((d2 - d1) / (1000*60*60*24));

    if(diffDays === 1){
      state.progress.streak += 1;
      if(state.progress.streak === 3) unlockMilestone("streak_3");
      if(state.progress.streak === 7) unlockMilestone("streak_7");
    }else{
      state.progress.streak = 1;
    }
    state.progress.lastVisit = today;

    // best streak leaderboard
    state.home.best.bestStreak = Math.max(state.home.best.bestStreak || 0, state.progress.streak);
  }

  // ---------- Favorites ----------
  function isFav(section, id){
    return !!state.favorites[section]?.[id];
  }
  function toggleFav(section, id){
    state.favorites[section] = state.favorites[section] || {};
    const now = !state.favorites[section][id];
    if(now){
      state.favorites[section][id] = true;
      unlockMilestone("first_favorite");
      addXP(2, "Favorite saved");
    }else{
      delete state.favorites[section][id];
    }
    saveState();
  }

  // ---------- UI Elements ----------
  const view = document.getElementById("view");
  const crumb = document.getElementById("crumb");

  function setRoute(route){
    state.route = route;
    saveState();
    render();
    $$(".navItem").forEach(b=>{
      b.classList.toggle("active", b.dataset.route === route);
    });
  }

  function renderSideStats(){
    document.getElementById("levelPill").textContent = state.progress.level;
    document.getElementById("streakPill").textContent = state.progress.streak;

    const need = xpToNext(state.progress.level);
    const xp = state.progress.xp;
    const pct = clamp((xp/need)*100, 0, 100);
    document.getElementById("xpBar").style.width = pct.toFixed(1) + "%";
    document.getElementById("xpHint").textContent = `${xp} / ${need} XP`;
    document.getElementById("streakHint").textContent = state.progress.streak >= 3 ? "You’re on fire 🔥" : "Keep going 🔥";
  }

  // ---------- Theme ----------
  function applyTheme(){
    if(state.theme === "light"){
      document.body.classList.add("light");
      document.getElementById("themeIcon").textContent = "☀️";
      document.getElementById("t_dark").textContent = t("light");
    }else{
      document.body.classList.remove("light");
      document.getElementById("themeIcon").textContent = "🌙";
      document.getElementById("t_dark").textContent = t("dark");
    }
  }

  // ---------- Sidebar collapse ----------
  function applySidebar(){
    const sb = document.getElementById("sidebar");
    sb.classList.toggle("collapsed", !!state.sidebarCollapsed);
  }

  // ---------- Music ----------
  const audio = document.getElementById("bgAudio");
  const btnMusic = document.getElementById("btnMusic");
  const musicIcon = document.getElementById("musicIcon");
  const musicSelect = document.getElementById("musicSelect");
  const musicVol = document.getElementById("musicVol");

  function isUnlocked(item){
    const u = item.unlock;
    if(!u) return true;
    if(u.type === "level") return state.progress.level >= u.value;
    if(u.type === "streak") return state.progress.streak >= u.value;
    if(u.type === "milestone") return !!state.progress.milestonesDone[u.value];
    return false;
  }

  function refreshMusicOptions(){
    musicSelect.innerHTML = "";
    DATA.musicTracks.forEach(track=>{
      const opt = document.createElement("option");
      const ok = isUnlocked(track);
      opt.value = track.id;
      opt.textContent = ok ? track.title : `${track.title} ${t("musicLocked")}`;
      opt.disabled = !ok;
      musicSelect.appendChild(opt);
    });

    let current = state.settings.music.trackId || "m1";
    const currentObj = DATA.musicTracks.find(x=>x.id===current);
    if(!currentObj || !isUnlocked(currentObj)){
      const first = DATA.musicTracks.find(isUnlocked);
      current = first ? first.id : "m1";
      state.settings.music.trackId = current;
      saveState();
    }
    musicSelect.value = current;

    const vol = clamp(state.settings.music.volume ?? 35, 0, 100);
    musicVol.value = vol;
    audio.volume = vol/100;
  }

  function loadTrack(trackId){
    const track = DATA.musicTracks.find(x=>x.id===trackId);
    if(!track || !isUnlocked(track)) return;
    audio.src = track.src;
    audio.loop = true;
    state.settings.music.trackId = trackId;
    saveState();
  }

  function setPlaying(isPlaying){
    state.settings.music.playing = !!isPlaying;
    saveState();
    if(isPlaying){
      audio.play().catch(()=>{});
      musicIcon.textContent = "⏸";
    }else{
      audio.pause();
      musicIcon.textContent = "▶";
    }
  }

  // ---------- Daily deterministic picks ----------
  function pickDeterministic(list, salt){
    const day = todayKey();
    const seed = hash(day + "|" + salt);
    if(!list || !list.length) return null;
    const idx = seed % list.length;
    return list[idx];
  }
  function dayVocab(){ return pickDeterministic(DATA.vocab, "vocab"); }
  function dayRule(){ return pickDeterministic(DATA.grammarRules, "rule"); }

  function daysLeftToExam(){
    const d = state.settings.examDate;
    if(!d) return null;
    const now = new Date(todayKey());
    const exam = new Date(d);
    const diff = Math.ceil((exam - now) / (1000*60*60*24));
    return diff;
  }

  // ---------- Todo ----------
  function addTodo(text){
    const t = (text||"").trim();
    if(!t) return;
    state.home.todo.unshift({ id: "td_"+nowISO(), text: t, done:false, ts: nowISO() });
    saveState();
  }
  function toggleTodo(id){
    const item = state.home.todo.find(x=>x.id===id);
    if(!item) return;
    item.done = !item.done;
    saveState();
  }
  function deleteTodo(id){
    state.home.todo = state.home.todo.filter(x=>x.id!==id);
    saveState();
  }
  function editTodo(id, text){
    const t = (text||"").trim();
    if(!t) return;
    const item = state.home.todo.find(x=>x.id===id);
    if(!item) return;
    item.text = t;
    saveState();
  }

  // ---------- Views ----------
  function cardHTML(title, sub, innerHTML){
    return `
      <div class="card">
        <div class="cardTitle">${title}</div>
        <div class="cardSub">${sub}</div>
        ${innerHTML}
      </div>
    `;
  }

  function renderHome(){
    crumb.textContent = t("home");

    const lvl = state.progress.level;
    const need = xpToNext(lvl);
    const xp = state.progress.xp;

    const milestonesDoneCount = Object.keys(state.progress.milestonesDone).filter(k=>state.progress.milestonesDone[k]).length;
    const milestonesTotal = DATA.milestones.length;

    const dLeft = daysLeftToExam();
    const dv = dayVocab();
    const dr = dayRule();

    const goal = clamp(Number(state.settings.dailyGoalXP || 40), 10, 999);
    const goalNow = Number(state.home.daily.goalXP || 0);
    const goalPct = clamp((goalNow/goal)*100, 0, 100);

    const todoHTML = (state.home.todo || []).slice(0,8).map(item=>`
      <div class="card" style="padding:12px; margin:10px 0">
        <div class="cardRow">
          <button class="smallBtn ${item.done?"primary":""}" data-tdtoggle="${item.id}">${item.done?"✅":"⬜"}</button>
          <div style="flex:1; min-width:0">
            <div class="cardTitle" style="font-size:14px; margin:0; ${item.done?"opacity:0.75; text-decoration:line-through":""}">
              ${escapeHTML(item.text)}
            </div>
          </div>
          <button class="smallBtn" data-tdedit="${item.id}">✏️</button>
          <button class="smallBtn danger" data-tddel="${item.id}">🗑</button>
        </div>
      </div>
    `).join("");

    view.innerHTML = `

      <div class="grid cols2">
        ${cardHTML(
          t("heroTitle"),
          t("heroSub"),
          `
          <div class="hr"></div>
          <div class="grid cols3">
            <div class="card" style="padding:14px">
              <div class="cardSub">${t("progress")}</div>
              <div class="kpi">
                <div class="kpiBig">${lvl}</div>
                <div class="kpiLabel">${t("level")}</div>
              </div>
              <div class="progress"><div class="progressBar" style="width:${clamp((xp/need)*100,0,100)}%"></div></div>
              <div class="miniHint">${xp} / ${need} XP</div>
            </div>

            <div class="card" style="padding:14px">
              <div class="cardSub">${t("streak")}</div>
              <div class="kpi">
                <div class="kpiBig">${state.progress.streak}</div>
                <div class="kpiLabel">days</div>
              </div>
              <div class="miniHint">Daily 5 = streak power 🔥</div>
            </div>

            <div class="card" style="padding:14px">
              <div class="cardSub">${t("milestones")}</div>
              <div class="kpi">
                <div class="kpiBig">${milestonesDoneCount}/${milestonesTotal}</div>
                <div class="kpiLabel">done</div>
              </div>
              <div class="miniHint">Unlock music + cosmetics ✨</div>
            </div>
          </div>
          `
        )}

        ${cardHTML(
          t("quickStart"),
          "Jump into the sections instantly.",
          `
          <div class="grid cols2">
            <div class="card" style="padding:14px">
              <div class="cardRow">
                <div>
                  <div class="cardTitle" style="font-size:16px">${t("grammar")}</div>
                  <div class="cardSub">${t("daily5")} • ${t("fullTest")} • ${t("rules")}</div>
                </div>
                <button class="smallBtn primary" data-go="grammar">${t("open")}</button>
              </div>
            </div>
            <div class="card" style="padding:14px">
              <div class="cardRow">
                <div>
                  <div class="cardTitle" style="font-size:16px">${t("vocab")}</div>
                  <div class="cardSub">Search • ${t("favorites")} • Irregular</div>
                </div>
                <button class="smallBtn primary" data-go="vocab">${t("open")}</button>
              </div>
            </div>
            <div class="card" style="padding:14px">
              <div class="cardRow">
                <div>
                  <div class="cardTitle" style="font-size:16px">${t("reading")}</div>
                  <div class="cardSub">Your HTML tests</div>
                </div>
                <button class="smallBtn primary" data-go="reading">${t("open")}</button>
              </div>
            </div>
            <div class="card" style="padding:14px">
              <div class="cardRow">
                <div>
                  <div class="cardTitle" style="font-size:16px">${t("listening")}</div>
                  <div class="cardSub">Your HTML tests</div>
                </div>
                <button class="smallBtn primary" data-go="listening">${t("open")}</button>
              </div>
            </div>
          </div>
          <div class="hr"></div>
          <div class="row">
            <span class="chip">🎯 IELTS-style</span>
            <span class="chip">❤️ Favorites</span>
            <span class="chip">🎵 Unlock music</span>
            <span class="chip">🎁 Cosmetics</span>
          </div>
          `
        )}
      </div>

      <div class="grid cols2" style="margin-top:14px">

        <div class="card">
          <div class="cardTitle">⏳ Exam countdown</div>
          <div class="cardSub">Set exam date in Settings.</div>
          <div class="hr"></div>
          <div class="kpi">
            <div class="kpiBig">${dLeft===null ? "—" : dLeft}</div>
            <div class="kpiLabel">days left</div>
          </div>
          <div class="miniHint">${state.settings.examDate ? escapeHTML(state.settings.examDate) : "No exam date yet"}</div>
        </div>

        <div class="card">
          <div class="cardTitle">🏆 Leaderboard (local)</div>
          <div class="cardSub">Best scores saved on this device.</div>
          <div class="hr"></div>
          <div class="row">
            <span class="badge">Daily5 best: <b>${state.home.best.daily5Best||0}/5</b></span>
            <span class="badge">Quiz100 best: <b>${state.home.best.quiz100Best||0}/100</b></span>
            <span class="badge">Best streak: <b>${state.home.best.bestStreak||0}</b></span>
          </div>
        </div>

        <div class="card">
          <div class="cardTitle">📊 Trackers</div>
          <div class="cardSub">Your activity counters.</div>
          <div class="hr"></div>
          <div class="row">
            <span class="badge">Quiz attempts: <b>${state.progress.stats.grammarQuizAttempts||0}</b></span>
            <span class="badge">Vocab opens: <b>${state.progress.stats.vocabOpened||0}</b></span>
            <span class="badge">Reading opens: <b>${state.progress.stats.readingOpened||0}</b></span>
            <span class="badge">Listening opens: <b>${state.progress.stats.listeningOpened||0}</b></span>
          </div>
        </div>

        <div class="card">
          <div class="cardTitle">🎯 Daily goal XP</div>
          <div class="cardSub">Editable in Settings.</div>
          <div class="hr"></div>
          <div class="progress"><div class="progressBar" style="width:${goalPct}%"></div></div>
          <div class="miniHint"><b>${goalNow}</b> / ${goal} XP today</div>
        </div>

        <div class="card">
          <div class="cardTitle">🧠 Day grammar rule</div>
          <div class="cardSub">Daily deterministic pick.</div>
          <div class="hr"></div>
          <div class="cardTitle" style="font-size:16px">${dr ? escapeHTML(dr.title) : "—"}</div>
          <div class="cardSub">${dr ? escapeHTML(dr.blocks?.[0]?.p || "") : "No rules"}</div>
          <button class="smallBtn primary" data-go="grammar" style="margin-top:10px">${t("open")}</button>
        </div>

        <div class="card">
          <div class="cardTitle">📗 Day vocab</div>
          <div class="cardSub">Daily deterministic pick.</div>
          <div class="hr"></div>
          <div class="cardTitle" style="font-size:16px">${dv ? escapeHTML(dv.word) : "—"}</div>
          <div class="cardSub">${dv ? escapeHTML(dv.meaning_uz || dv.meaning || "") : "No vocab"}</div>
          <div class="cardSub" style="margin-top:8px">${dv ? "Syn: " + escapeHTML(dv.synonym || "—") : ""}</div>
          <button class="smallBtn primary" data-go="vocab" style="margin-top:10px">${t("open")}</button>
        </div>

        <div class="card" style="grid-column:1/-1">
          <div class="cardRow">
            <div>
              <div class="cardTitle">✅ Daily to-do</div>
              <div class="cardSub">Add / edit / delete / check.</div>
            </div>
            <div class="row">
              <input class="input" id="todoInput" placeholder="New task..." style="max-width:360px"/>
              <button class="smallBtn primary" id="btnTodoAdd">Add</button>
            </div>
          </div>
          <div class="hr"></div>
          <div id="todoList">${todoHTML || `<div class="cardSub">No tasks yet.</div>`}</div>
        </div>

      </div>
    `;
// ---------- Leaderboard UI (Top10 / Top100 + Your place + Avatars) ----------
state.home = state.home || { lbMetric:"daily5", lbExpanded:false };

const metric = state.home.lbMetric || "daily5";
const expanded = !!state.home.lbExpanded;

const lb = buildLeaderboard(metric);
const topN = expanded ? 100 : 10;
const topList = lb.list.slice(0, topN);

const myRank = lb.myRank;
const showMyBlock = myRank > 10;

const lbRows = topList.map((p, idx)=>{
  const rank = idx + 1;
  const meTag = p.me ? ` <span class="badge">YOU</span>` : "";

  let avatarHTML = "";
  if(p.me){
    if(p.photoDataUrl){
      avatarHTML = `<div class="lbAvatar"><img src="${escapeAttr(p.photoDataUrl)}" alt="avatar"/></div>`;
    }else{
      avatarHTML = `<div class="lbAvatar">👤</div>`;
    }
  }else{
    avatarHTML = `<div class="lbAvatar">${escapeHTML(p.avatarEmoji || "🙂")}</div>`;
  }

  return `
    <div class="lbRow">
      <div class="lbLeft">
        <span class="badge">#${rank}</span>
        ${avatarHTML}
        <div class="lbName">${escapeHTML(p.name)}${meTag}</div>
      </div>
      <span class="badge">${p.score}</span>
    </div>
  `;
}).join("");

const myBlockHTML = showMyBlock ? `
  <div class="hr"></div>
  <div class="card" style="padding:14px; border-color: rgba(255,59,71,0.25); background: rgba(255,59,71,0.06)">
    <div class="cardRow">
      <div>
        <div class="cardTitle" style="font-size:16px">Your place</div>
        <div class="cardSub">Even if you're not Top 100, you're still on the map.</div>
      </div>
      <span class="badge">#${myRank}</span>
    </div>
    <div class="hr"></div>
    <div class="row" style="justify-content:space-between">
      <span class="badge">${metricLabel(metric)}</span>
      <span class="badge">Score: ${lbMetricValue(metric)}</span>
    </div>
  </div>
` : "";

const leaderboardCard = `
  <div class="card" style="margin-top:14px">
    <div class="cardRow">
      <div>
        <div class="cardTitle">Leaderboard</div>
        <div class="cardSub">Top ${topN} by <b>${metricLabel(metric)}</b></div>
      </div>
      <div class="row">
        <button class="smallBtn ${metric==="daily5"?"primary":""}" data-lbm="daily5">Daily5</button>
        <button class="smallBtn ${metric==="quiz100"?"primary":""}" data-lbm="quiz100">Quiz100</button>
        <button class="smallBtn ${metric==="streak"?"primary":""}" data-lbm="streak">Streak</button>
        <button class="smallBtn" id="btnLbExpand">${expanded ? "Show Top 10" : "Show Top 100"}</button>
      </div>
    </div>

    <div class="hr"></div>
    ${lbRows || `<div class="cardSub">No data.</div>`}
    ${myBlockHTML}
  </div>
`;

view.innerHTML += leaderboardCard;

// bind leaderboard buttons (must be after HTML exists)
$$("[data-lbm]").forEach(b=>{
  b.addEventListener("click", ()=>{
    state.home.lbMetric = b.dataset.lbm;
    saveState();
    renderHome();
  });
});
const btnExp = document.getElementById("btnLbExpand");
if(btnExp){
  btnExp.addEventListener("click", ()=>{
    state.home.lbExpanded = !state.home.lbExpanded;
    saveState();
    renderHome();
  });
}
    $$("[data-go]").forEach(b=>{
      b.addEventListener("click", ()=>setRoute(b.dataset.go));
    });

    // todo events
    $("#btnTodoAdd").addEventListener("click", ()=>{
      addTodo($("#todoInput").value);
      $("#todoInput").value = "";
      renderHome();
    });
    $("#todoInput").addEventListener("keydown", (e)=>{
      if(e.key === "Enter"){
        addTodo($("#todoInput").value);
        $("#todoInput").value = "";
        renderHome();
      }
    });
    $$("[data-tdtoggle]").forEach(b=>b.addEventListener("click", ()=>{
      toggleTodo(b.dataset.tdtoggle);
      renderHome();
    }));
    $$("[data-tddel]").forEach(b=>b.addEventListener("click", ()=>{
      deleteTodo(b.dataset.tddel);
      renderHome();
    }));
    $$("[data-tdedit]").forEach(b=>b.addEventListener("click", ()=>{
      const id = b.dataset.tdedit;
      const item = state.home.todo.find(x=>x.id===id);
      if(!item) return;
      const next = prompt("Edit task:", item.text);
      if(next !== null) editTodo(id, next);
      renderHome();
    }));
  }

  function renderGrammar(){
    crumb.textContent = t("grammar");

    view.innerHTML = `
      <div class="grid cols2">
        <div class="card">
          <div class="cardTitle">${t("dailyTitle")}</div>
          <div class="cardSub">${t("dailySub")}</div>
          <div class="cardActions">
            <button class="smallBtn primary" id="btnDailyStart">${t("startDaily")}</button>
            <span class="chip">+XP • +Streak</span>
          </div>
          <div class="hr"></div>
          <div id="dailyBox"></div>
        </div>

        <div class="card">
          <div class="cardTitle">${t("quizTitle")}</div>
          <div class="cardSub">${t("quizSub")}</div>
          <div class="cardActions">
            <button class="smallBtn primary" id="btnQuizStart">${t("startQuiz")}</button>
            <span class="chip">Score • XP</span>
          </div>
          <div class="hr"></div>
          <div id="quizBox"></div>
        </div>
      </div>

      <div class="card" style="margin-top:14px">
        <div class="cardRow">
          <div>
            <div class="cardTitle">${t("rulesTitle")}</div>
            <div class="cardSub">Tap ⭐ to favorite rules. Search is instant.</div>
          </div>
          <div class="row">
            <input class="input" id="ruleSearch" placeholder="${t("search")}..." style="max-width:320px"/>
            <button class="smallBtn" id="btnRulesFav">${t("showFav")}</button>
          </div>
        </div>
        <div class="hr"></div>
        <div id="rulesList"></div>
      </div>
    `;

    $("#btnDailyStart").addEventListener("click", startDaily5);
    $("#btnQuizStart").addEventListener("click", startFullQuiz);

    const ruleSearch = $("#ruleSearch");
    const btnRulesFav = $("#btnRulesFav");
    let showFav = false;

    function drawRules(){
      const q = (ruleSearch.value || "").trim().toLowerCase();
      const items = DATA.grammarRules.filter(r=>{
        const text = (r.title + " " + r.blocks.map(b=>b.h+" "+b.p).join(" ")).toLowerCase();
        const okSearch = !q || text.includes(q);
        const okFav = !showFav || isFav("grammarRules", r.id);
        return okSearch && okFav;
      });

      $("#rulesList").innerHTML = items.map(r=>{
        const fav = isFav("grammarRules", r.id);
        const blocks = r.blocks.map(b=>{
          const p = escapeHTML(b.p).replace(/\n/g,"<br/>");
          return `<div style="margin:10px 0">
            <div class="badge">• ${escapeHTML(b.h)}</div>
            <div class="cardSub" style="margin-top:6px">${p}</div>
          </div>`;
        }).join("");

        return `
          <div class="card" style="margin:12px 0; padding:14px">
            <div class="cardRow">
              <div class="cardTitle" style="font-size:16px">${escapeHTML(r.title)}</div>
              <button class="smallBtn ${fav ? "primary" : ""}" data-rulefav="${r.id}">⭐</button>
            </div>
            ${blocks}
          </div>
        `;
      }).join("") || `<div class="cardSub">No rules found.</div>`;

      $$("[data-rulefav]").forEach(b=>{
        b.addEventListener("click", ()=>{
          toggleFav("grammarRules", b.dataset.rulefav);
          drawRules();
        });
      });
    }

    btnRulesFav.addEventListener("click", ()=>{
      showFav = !showFav;
      btnRulesFav.classList.toggle("primary", showFav);
      drawRules();
    });

    ruleSearch.addEventListener("input", drawRules);
    drawRules();
  }

  // Daily 5 logic: deterministic selection per date
  function dailyPick(){
    const day = todayKey();
    const seed = hash(day);
    const total = DATA.grammarQuestions.length;
    const picks = [];
    let x = seed;
    while(picks.length < 5 && picks.length < total){
      x = (x * 1103515245 + 12345) & 0x7fffffff;
      const idx = x % total;
      if(!picks.includes(idx)) picks.push(idx);
    }
    return picks.map(i=>({ ...DATA.grammarQuestions[i], _idx:i }));
  }

  function startDaily5(){
    const doneToday = !!state.progress.stats.grammarDailyDoneDates[todayKey()];
    if(doneToday){
      toast("Daily 5 already completed today ✅");
      return;
    }
    const questions = dailyPick();
    runQuizUI({
      mount: $("#dailyBox"),
      title: t("daily5"),
      questions,
      onFinish: (score)=>{
        state.progress.stats.grammarDailyDoneDates[todayKey()] = true;
// ✅ update best daily score for leaderboard
  state.progress.stats.bestDaily5 = Math.max(state.progress.stats.bestDaily5 || 0, score);

  unlockMilestone("daily5_done");
  addXP(20 + score*2, "Daily 5 completed");
  saveState();
        // leaderboard best (Daily5)
        state.home.best.daily5Best = Math.max(state.home.best.daily5Best || 0, score);

        unlockMilestone("daily5_done");
        addXP(20 + score*2, "Daily 5 completed");
        saveState();
      }
    });
  }

  function startFullQuiz(){
    const questions = DATA.grammarQuestions.slice(0, 100).map((q, i)=>({ ...q, _idx:i }));
    runQuizUI({
      mount: $("#quizBox"),
      title: t("fullTest"),
      questions,
      onFinish: (score)=>{
        state.progress.stats.grammarQuizAttempts += 1;
// ✅ update best quiz score for leaderboard
  state.progress.stats.bestQuiz100 = Math.max(state.progress.stats.bestQuiz100 || 0, score);

  unlockMilestone("first_quiz");
  addXP(35 + score*1, `Quiz score ${score}/${questions.length}`);
  saveState();
        // leaderboard best (Quiz100)
        state.home.best.quiz100Best = Math.max(state.home.best.quiz100Best || 0, score);

        unlockMilestone("first_quiz");
        addXP(35 + score*1, `Quiz score ${score}/${questions.length}`);
        saveState();
      }
    });
  }

  function runQuizUI({mount, title, questions, onFinish}){
    let i = 0;
    let score = 0;
    let locked = false;

    mount.innerHTML = `
      <div class="card" style="padding:14px">
        <div class="cardRow">
          <div class="badge">🧪 ${escapeHTML(title)}</div>
          <div class="badge" id="quizStep"></div>
        </div>
        <div class="hr"></div>
        <div class="quizQ" id="quizQ"></div>
        <div class="choices" id="quizChoices"></div>
        <div class="hr"></div>
        <div class="row">
          <div class="badge" id="quizScore"></div>
          <div class="spacer"></div>
          <button class="smallBtn" id="btnQuizFavQ">⭐</button>
          <button class="smallBtn primary" id="btnQuizNext">Next</button>
        </div>
      </div>
    `;

    const elStep = $("#quizStep", mount);
    const elQ = $("#quizQ", mount);
    const elChoices = $("#quizChoices", mount);
    const elScore = $("#quizScore", mount);
    const btnNext = $("#btnQuizNext", mount);
    const btnFavQ = $("#btnQuizFavQ", mount);

    function draw(){
      locked = false;
      const q = questions[i];
      elStep.textContent = `${i+1} / ${questions.length}`;
      elScore.textContent = `Score: ${score}`;
      elQ.textContent = q.q;

      const fav = isFav("grammarQuestions", "gq_"+q._idx);
      btnFavQ.classList.toggle("primary", fav);

      elChoices.innerHTML = q.choices.map((c, idx)=>`
        <button class="choice" data-ch="${idx}">${escapeHTML(c)}</button>
      `).join("");

      $$("[data-ch]", elChoices).forEach(b=>{
        b.addEventListener("click", ()=>{
          if(locked) return;
          locked = true;

          const pick = Number(b.dataset.ch);
          const correct = q.answer === pick;

          $$("[data-ch]", elChoices).forEach(x=>{
            x.classList.add("disabled");
            const ix = Number(x.dataset.ch);
            if(ix === q.answer) x.classList.add("correct");
            if(ix === pick && !correct) x.classList.add("wrong");
          });

          if(correct){
            score += 1;
            addXP(1, "Correct");
          }
          elScore.textContent = `Score: ${score}`;
        });
      });
    }

    btnFavQ.addEventListener("click", ()=>{
      const q = questions[i];
      toggleFav("grammarQuestions", "gq_"+q._idx);
      const fav = isFav("grammarQuestions", "gq_"+q._idx);
      btnFavQ.classList.toggle("primary", fav);
    });

    btnNext.addEventListener("click", ()=>{
      if(i < questions.length - 1){
        i += 1;
        draw();
      }else{
        mount.innerHTML = `
          <div class="card" style="padding:14px">
            <div class="cardTitle">Finished ✅</div>
            <div class="cardSub">Score: <b>${score}</b> / ${questions.length}</div>
            <div class="hr"></div>
            <div class="row">
              <span class="chip">XP added</span>
              <span class="chip">Progress saved</span>
              <span class="chip">Favorites kept</span>
            </div>
          </div>
        `;
        onFinish && onFinish(score);
      }
    });

    draw();
  }

  function renderVocab(){
    crumb.textContent = t("vocab");

    view.innerHTML = `
      <div class="card">
        <div class="cardRow">
          <div>
            <div class="cardTitle">${t("vocabTitle")}</div>
            <div class="cardSub">${t("vocabSub")}</div>
          </div>
          <div class="row">
            <input class="input" id="vSearch" placeholder="${t("search")}..." style="max-width:340px"/>
            <button class="smallBtn" id="btnVFav">${t("showFav")}</button>
            <button class="smallBtn primary" id="btnIrregular">${t("irregularBtn")}</button>
          </div>
        </div>
        <div class="hr"></div>
        <div id="vList"></div>
      </div>

      <div class="card" id="irregularSection" style="margin-top:14px">
        <div class="cardRow">
          <div>
            <div class="cardTitle">Irregular Verbs</div>
            <div class="cardSub">Searchable + Favorite + Uzbek meaning</div>
          </div>
          <div class="row">
            <input class="input" id="iSearch" placeholder="${t("search")}..." style="max-width:340px"/>
            <button class="smallBtn" id="btnIFav">${t("showFav")}</button>
          </div>
        </div>
        <div class="hr"></div>
        <div id="iList"></div>
      </div>
    `;

    state.progress.stats.vocabOpened += 1;
    saveState();

    const vSearch = $("#vSearch");
    const btnVFav = $("#btnVFav");
    let showFavV = false;

    const iSearch = $("#iSearch");
    const btnIFav = $("#btnIFav");
    let showFavI = false;

    $("#btnIrregular").addEventListener("click", ()=>{
      $("#irregularSection").scrollIntoView({behavior:"smooth", block:"start"});
    });

    btnVFav.addEventListener("click", ()=>{
      showFavV = !showFavV;
      btnVFav.classList.toggle("primary", showFavV);
      drawVocab();
    });

    btnIFav.addEventListener("click", ()=>{
      showFavI = !showFavI;
      btnIFav.classList.toggle("primary", showFavI);
      drawIrregular();
    });

    vSearch.addEventListener("input", drawVocab);
    iSearch.addEventListener("input", drawIrregular);

    function meaningForV(v){
      const lang = state.lang;
      if(lang === "uz") return v.meaning_uz || v.meaning;
      if(lang === "ru") return v.meaning_ru || v.meaning_uz || v.meaning;
      if(lang === "kk") return v.meaning_kk || v.meaning_uz || v.meaning;
      if(lang === "tj") return v.meaning_tj || v.meaning_uz || v.meaning;
      return v.meaning;
    }

    function drawVocab(){
      const q = (vSearch.value||"").trim().toLowerCase();
      const items = DATA.vocab.filter(v=>{
        const text = (v.word+" "+(v.meaning||"")+" "+(v.meaning_uz||"")+" "+(v.synonym||"")+" "+(v.example||"")).toLowerCase();
        const okSearch = !q || text.includes(q);
        const okFav = !showFavV || isFav("vocab", v.id);
        return okSearch && okFav;
      });

      const rows = items.map(v=>{
        const fav = isFav("vocab", v.id);
        return `
          <div class="card" style="margin:12px 0; padding:14px">
            <div class="cardRow">
              <div class="cardTitle" style="font-size:16px">${escapeHTML(v.word)}</div>
              <button class="smallBtn ${fav ? "primary":""}" data-vfav="${v.id}">⭐</button>
            </div>
            <div class="hr"></div>
            <div class="grid cols2">
              <div>
                <div class="badge">• ${t("meaning")}</div>
                <div class="cardSub" style="margin-top:6px">${escapeHTML(meaningForV(v))}</div>
              </div>
              <div>
                <div class="badge">• ${t("synonym")}</div>
                <div class="cardSub" style="margin-top:6px">${escapeHTML(v.synonym || "—")}</div>
              </div>
            </div>
            <div style="margin-top:10px">
              <div class="badge">• ${t("example")}</div>
              <div class="cardSub" style="margin-top:6px">${escapeHTML(v.example || "—")}</div>
            </div>
          </div>
        `;
      }).join("");

      $("#vList").innerHTML = rows || `<div class="cardSub">No vocab found.</div>`;

      $$("[data-vfav]").forEach(b=>{
        b.addEventListener("click", ()=>{
          toggleFav("vocab", b.dataset.vfav);
          drawVocab();
        });
      });
    }

    function drawIrregular(){
      const q = (iSearch.value||"").trim().toLowerCase();
      const items = DATA.irregular.filter(v=>{
        const text = (v.base+" "+v.past+" "+v.pp+" "+(v.meaning_uz||"")).toLowerCase();
        const okSearch = !q || text.includes(q);
        const okFav = !showFavI || isFav("irregular", v.id);
        return okSearch && okFav;
      });

      $("#iList").innerHTML = `
        <table class="table">
          <thead>
            <tr>
              <th>Base</th><th>Past</th><th>PP</th><th>${t("uzbek")}</th><th>⭐</th>
            </tr>
          </thead>
          <tbody>
            ${items.map(v=>{
              const fav = isFav("irregular", v.id);
              return `
                <tr>
                  <td><b>${escapeHTML(v.base)}</b></td>
                  <td>${escapeHTML(v.past)}</td>
                  <td>${escapeHTML(v.pp)}</td>
                  <td>${escapeHTML(v.meaning_uz || "—")}</td>
                  <td>
                    <button class="smallBtn ${fav ? "primary":""}" data-ifav="${v.id}">⭐</button>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      `;

      $$("[data-ifav]").forEach(b=>{
        b.addEventListener("click", ()=>{
          toggleFav("irregular", b.dataset.ifav);
          drawIrregular();
        });
      });
    }

    drawVocab();
    drawIrregular();
  }

  function renderReading(){
    crumb.textContent = t("reading");
    view.innerHTML = `
      <div class="card">
        <div class="cardTitle">${t("readingTitle")}</div>
        <div class="cardSub">Your test links from /reading-tests/ folder.</div>
        <div class="hr"></div>
        <div class="grid cols2">
          ${DATA.readingTests.map(x=>`
            <div class="card" style="padding:14px">
              <div class="cardRow">
                <div>
                  <div class="cardTitle" style="font-size:16px">${escapeHTML(x.title)}</div>
                  <div class="cardSub">${escapeHTML(x.href)}</div>
                </div>
                <a class="smallBtn primary" href="${escapeAttr(x.href)}" target="_blank" rel="noopener" data-openreading="1">${t("openTest")}</a>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    $$("[data-openreading]").forEach(a=>{
      a.addEventListener("click", ()=>{
        state.progress.stats.readingOpened += 1;
        saveState();
        unlockMilestone("first_reading");
        addXP(2, "Reading opened");
      });
    });
  }

  function renderListening(){
    crumb.textContent = t("listening");
    view.innerHTML = `
      <div class="card">
        <div class="cardTitle">${t("listeningTitle")}</div>
        <div class="cardSub">Your test links from /listening-tests/ folder.</div>
        <div class="hr"></div>
        <div class="grid cols2">
          ${DATA.listeningTests.map(x=>`
            <div class="card" style="padding:14px">
              <div class="cardRow">
                <div>
                  <div class="cardTitle" style="font-size:16px">${escapeHTML(x.title)}</div>
                  <div class="cardSub">${escapeHTML(x.href)}</div>
                </div>
                <a class="smallBtn primary" href="${escapeAttr(x.href)}" target="_blank" rel="noopener" data-openlistening="1">${t("openTest")}</a>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    $$("[data-openlistening]").forEach(a=>{
      a.addEventListener("click", ()=>{
        state.progress.stats.listeningOpened += 1;
        saveState();
        unlockMilestone("first_listening");
        addXP(2, "Listening opened");
      });
    });
  }

  function renderProfile(){
    crumb.textContent = t("profile");

    const p = state.profile;
    const unlockedStickers = DATA.stickers.filter(isUnlocked);
    const unlockedFrames = DATA.frames.filter(isUnlocked);
    const unlockedNick = DATA.nicknames.filter(isUnlocked);
    const unlockedCards = DATA.nameCards.filter(isUnlocked);

    // Ensure selections are valid
    if(!unlockedNick.find(x=>x.id===p.nicknameId)) p.nicknameId = unlockedNick[0]?.id || "n1";
    if(!unlockedCards.find(x=>x.id===p.nameCardId)) p.nameCardId = unlockedCards[0]?.id || "c1";
    if(!unlockedFrames.find(x=>x.id===p.frameId)) p.frameId = unlockedFrames[0]?.id || "f_none";
    saveState();

    const nickName = (DATA.nicknames.find(x=>x.id===p.nicknameId)?.name) || "Starter";
    const cardName = (DATA.nameCards.find(x=>x.id===p.nameCardId)?.name) || "Classic";

    view.innerHTML = `
      <div class="grid cols2">
        <div class="card">
          <div class="cardTitle">${t("profileTitle")}</div>
          <div class="cardSub">Photo + nickname + name card + stickers + frame.</div>

          <div class="hr"></div>

          <div class="row">
            <div class="avatarWrap ${frameClass(p.frameId)}" id="avatarWrap" style="width:96px;height:96px;border-radius:22px;border:1px solid rgba(255,255,255,0.14);overflow:hidden;background:rgba(0,0,0,0.25);display:grid;place-items:center">
              ${p.photoDataUrl ? `<img src="${escapeAttr(p.photoDataUrl)}" style="width:100%;height:100%;object-fit:cover"/>` : `<div style="font-weight:900;font-size:32px">👤</div>`}
            </div>
            <div class="spacer"></div>
            <label class="smallBtn">
              ${t("uploadPhoto")}
              <input id="photoInput" type="file" accept="image/*" style="display:none"/>
            </label>
            <button class="smallBtn danger" id="btnPhotoClear">Clear</button>
          </div>

          <div class="hr"></div>

          <div class="row">
            <input class="input" id="nameInput" value="${escapeAttr(p.name)}" placeholder="Name" style="max-width:240px"/>
            <input class="input" id="bioInput" value="${escapeAttr(p.bio)}" placeholder="Bio" />
          </div>

          <div class="hr"></div>

          <div class="row">
            <span class="badge">🏷 Nickname: <b>${escapeHTML(nickName)}</b></span>
            <span class="badge">🪪 Card: <b>${escapeHTML(cardName)}</b></span>
          </div>

          <div class="hr"></div>

          <div class="cardRow">
            <div>
              <div class="badge">🎯 ${t("level")}: ${state.progress.level}</div>
              <div class="badge">🔥 ${t("streak")}: ${state.progress.streak}</div>
            </div>
            <button class="smallBtn primary" id="btnProfileSave">${t("save")}</button>
          </div>
        </div>

        <div class="card">
          <div class="cardTitle">${t("milestones")}</div>
          <div class="cardSub">Complete actions to unlock music + cosmetics.</div>
          <div class="hr"></div>
          <div id="milestoneList"></div>
        </div>
      </div>

      <div class="grid cols2" style="margin-top:14px">
        <div class="card">
          <div class="cardTitle">🏷 Nicknames</div>
          <div class="cardSub">Unlock by levels. Select any unlocked.</div>
          <div class="hr"></div>
          <div class="row" id="nickRow"></div>
        </div>

        <div class="card">
          <div class="cardTitle">🪪 Name cards</div>
          <div class="cardSub">Unlock by levels. Select any unlocked.</div>
          <div class="hr"></div>
          <div class="row" id="cardRow"></div>
        </div>
      </div>

      <div class="grid cols2" style="margin-top:14px">
        <div class="card">
          <div class="cardTitle">${t("stickers")}</div>
          <div class="cardSub">Select up to 6 stickers.</div>
          <div class="hr"></div>
          <div class="row" id="stickerRow"></div>
          <div class="cardSub" style="margin-top:12px">Selected: <b id="stickerSelected"></b></div>
        </div>

        <div class="card">
          <div class="cardTitle">${t("frame")}</div>
          <div class="cardSub">Higher level = higher quality.</div>
          <div class="hr"></div>
          <div class="row" id="frameRow"></div>
        </div>
      </div>

      <div class="card" style="margin-top:14px">
        <div class="cardTitle">${t("badges")}</div>
        <div class="cardSub">Badges auto-award by milestones and levels.</div>
        <div class="hr"></div>
        <div id="badgeRow" class="row"></div>
      </div>
    `;

    $("#milestoneList").innerHTML = DATA.milestones.map(m=>{
      const done = !!state.progress.milestonesDone[m.id];
      return `
        <div class="card" style="margin:10px 0; padding:14px">
          <div class="cardRow">
            <div>
              <div class="cardTitle" style="font-size:16px">${escapeHTML(m.title)} ${done ? "✅" : ""}</div>
              <div class="cardSub">${escapeHTML(m.desc)} • <b>+${m.xp} XP</b></div>
            </div>
            <span class="badge">${done ? "Done" : "Locked"}</span>
          </div>
        </div>
      `;
    }).join("");

    // nicknames
    $("#nickRow").innerHTML = unlockedNick.map(n=>{
      const active = state.profile.nicknameId === n.id;
      return `<button class="smallBtn ${active?"primary":""}" data-nick="${n.id}">${escapeHTML(n.name)}</button>`;
    }).join("");
    $$("[data-nick]").forEach(b=>b.addEventListener("click", ()=>{
      state.profile.nicknameId = b.dataset.nick;
      saveState();
      renderProfile();
    }));

    // name cards
    $("#cardRow").innerHTML = unlockedCards.map(c=>{
      const active = state.profile.nameCardId === c.id;
      return `<button class="smallBtn ${active?"primary":""}" data-card="${c.id}">${escapeHTML(c.name)}</button>`;
    }).join("");
    $$("[data-card]").forEach(b=>b.addEventListener("click", ()=>{
      state.profile.nameCardId = b.dataset.card;
      saveState();
      renderProfile();
    }));

    // stickers
    $("#stickerRow").innerHTML = unlockedStickers.map(s=>{
      const active = state.profile.stickerIds.includes(s.id);
      return `<button class="smallBtn ${active ? "primary":""}" data-st="${s.id}">${s.label}</button>`;
    }).join("");
    $("#stickerSelected").textContent = state.profile.stickerIds.map(id=>{
      const s = DATA.stickers.find(x=>x.id===id);
      return s ? s.label : "";
    }).join(" ");

    $$("[data-st]").forEach(b=>{
      b.addEventListener("click", ()=>{
        const id = b.dataset.st;
        const list = state.profile.stickerIds;
        const ix = list.indexOf(id);
        if(ix >= 0) list.splice(ix,1);
        else{
          if(list.length >= 6){ toast("Max 6 stickers"); return; }
          list.push(id);
        }
        saveState();
        renderProfile();
      });
    });

    // frames
    $("#frameRow").innerHTML = unlockedFrames.map(f=>{
      const active = state.profile.frameId === f.id;
      return `<button class="smallBtn ${active ? "primary":""}" data-fr="${f.id}">${escapeHTML(f.name)}</button>`;
    }).join("");
    $$("[data-fr]").forEach(b=>{
      b.addEventListener("click", ()=>{
        state.profile.frameId = b.dataset.fr;
        saveState();
        renderProfile();
      });
    });

    // badges
    const badges = [];
    if(state.progress.milestonesDone.first_quiz) badges.push("🧪 Quiz Starter");
    if(state.progress.milestonesDone.daily5_done) badges.push("🔥 Daily Grinder");
    if(state.progress.milestonesDone.streak_7) badges.push("🏆 Week Streak");
    if(state.progress.level >= 10) badges.push("🚀 Level 10");
    if(state.progress.level >= 25) badges.push("👑 Level 25");
    if(state.progress.level >= 50) badges.push("🧠 Legend 50");

    $("#badgeRow").innerHTML = badges.length
      ? badges.map(b=>`<span class="badge">${escapeHTML(b)}</span>`).join("")
      : `<div class="cardSub">No badges yet — finish quizzes and Daily 5.</div>`;

    // profile save
    $("#btnProfileSave").addEventListener("click", ()=>{
      state.profile.name = $("#nameInput").value.trim() || "Azizbek";
      state.profile.bio = $("#bioInput").value.trim() || "";
      saveState();
      toast("Saved ✅");
    });

    // photo upload
    $("#photoInput").addEventListener("change", async (e)=>{
      const file = e.target.files?.[0];
      if(!file) return;
      const url = await fileToDataURL(file, 520);
      state.profile.photoDataUrl = url;
      saveState();
      toast("Photo updated ✅");
      renderProfile();
    });

    $("#btnPhotoClear").addEventListener("click", ()=>{
      state.profile.photoDataUrl = "";
      saveState();
      renderProfile();
    });
  }

  function renderSettings(){
    crumb.textContent = t("settings");

    const rating = state.settings.rating || { stars:0, feedback:"" };

    view.innerHTML = `
      <div class="grid cols2">
        <div class="card">
          <div class="cardTitle">${t("settingsTitle")}</div>
          <div class="cardSub">Language • Theme • Music • Exam date • Daily goal • Rating</div>
          <div class="hr"></div>

          <div class="cardTitle" style="font-size:16px">${t("theme")}</div>
          <div class="row">
            <button class="smallBtn ${state.theme==="dark" ? "primary":""}" id="setDark">${t("dark")}</button>
            <button class="smallBtn ${state.theme==="light" ? "primary":""}" id="setLight">${t("light")}</button>
          </div>

          <div class="hr"></div>

          <div class="cardTitle" style="font-size:16px">Exam date</div>
          <div class="cardSub">Used for countdown on Home.</div>
          <div class="row">
            <input class="input" id="examDate" type="date" value="${escapeAttr(state.settings.examDate||"")}" style="max-width:220px"/>
            <button class="smallBtn primary" id="saveExamDate">${t("save")}</button>
          </div>

          <div class="hr"></div>

          <div class="cardTitle" style="font-size:16px">Daily goal (XP)</div>
          <div class="cardSub">How much XP you aim to earn per day.</div>
          <div class="row">
            <input class="input" id="dailyGoalXP" type="number" min="10" max="999" value="${escapeAttr(state.settings.dailyGoalXP||40)}" style="max-width:160px"/>
            <button class="smallBtn primary" id="saveDailyGoal">${t("save")}</button>
          </div>

          <div class="hr"></div>

          <div class="cardTitle" style="font-size:16px">${t("music")}</div>
          <div class="cardSub">More tracks unlock by milestones/levels. Put mp3 in <b>assets/music/</b>.</div>

          <div class="hr"></div>

          <div class="cardTitle" style="font-size:16px">${t("rateUs")}</div>
          <div class="cardSub">Bahongiz va izohingiz shu brauzerda saqlanadi.</div>
          <div class="row" id="starsRow"></div>
          <textarea class="input" id="rateFeedback" placeholder="${t("feedback")}..." style="min-height:90px">${escapeHTML(rating.feedback||"")}</textarea>
          <div class="row" style="margin-top:10px">
            <button class="smallBtn primary" id="btnSaveRating">${t("save")}</button>
            <span class="chip">⭐ Saved locally</span>
          </div>
        </div>

        <div class="card">
          <div class="cardTitle">${t("policy")}</div>
          <div class="cardSub">${t("terms")} • ${t("privacy")}</div>
          <div class="hr"></div>

          <div class="card" style="padding:14px; margin:10px 0">
            <div class="cardTitle" style="font-size:16px">${t("policy")}</div>
            <div class="cardSub">
              This version stores progress in your browser (LocalStorage). Clear browser data = reset progress.
            </div>
          </div>

          <div class="card" style="padding:14px; margin:10px 0">
            <div class="cardTitle" style="font-size:16px">${t("terms")}</div>
            <div class="cardSub">
              Use for learning. Add your own tests and materials anytime.
            </div>
          </div>

          <div class="card" style="padding:14px; margin:10px 0">
            <div class="cardTitle" style="font-size:16px">${t("privacy")}</div>
            <div class="cardSub">
              No tracking in this version. Your data stays on your device.
            </div>
          </div>

          <div class="hr"></div>
          <div class="cardTitle" style="font-size:16px">${t("milestones")}</div>
          <div class="cardSub">Milestones unlock music & cosmetics.</div>
          <div class="hr"></div>
          <div id="settingsMilestones"></div>
        </div>
      </div>
    `;

    $("#setDark").addEventListener("click", ()=>{
      state.theme = "dark";
      saveState();
      applyTheme();
      renderSettings();
    });
    $("#setLight").addEventListener("click", ()=>{
      state.theme = "light";
      saveState();
      applyTheme();
      renderSettings();
    });

    $("#saveExamDate").addEventListener("click", ()=>{
      state.settings.examDate = $("#examDate").value || "";
      saveState();
      toast("Saved ✅");
    });

    $("#saveDailyGoal").addEventListener("click", ()=>{
      const v = clamp(Number($("#dailyGoalXP").value || 40), 10, 999);
      state.settings.dailyGoalXP = v;
      saveState();
      toast("Saved ✅");
    });

    // rating stars
    const starsRow = $("#starsRow");
    starsRow.innerHTML = [1,2,3,4,5].map(n=>{
      const active = (rating.stars||0) >= n;
      return `<button class="smallBtn ${active?"primary":""}" data-star="${n}">⭐</button>`;
    }).join("");

    $$("[data-star]").forEach(b=>{
      b.addEventListener("click", ()=>{
        state.settings.rating.stars = Number(b.dataset.star);
        saveState();
        renderSettings();
      });
    });

    $("#btnSaveRating").addEventListener("click", ()=>{
      state.settings.rating.feedback = $("#rateFeedback").value.trim();
      saveState();
      toast("Saved ✅");
      addXP(3, "Feedback saved");
    });

    $("#settingsMilestones").innerHTML = DATA.milestones.map(m=>{
      const done = !!state.progress.milestonesDone[m.id];
      return `<div class="row" style="margin:10px 0">
        <span class="badge">${done?"✅":"🔒"} ${escapeHTML(m.title)}</span>
        <span class="cardSub">${escapeHTML(m.desc)}</span>
      </div>`;
    }).join("");
  }

  // ---------- Router ----------
  function render(){
    applyTheme();
    applyUILang();
    applySidebar();
    renderSideStats();
    refreshMusicOptions();

    const r = state.route || "home";
    if(r === "home") renderHome();
    else if(r === "grammar") renderGrammar();
    else if(r === "vocab") renderVocab();
    else if(r === "reading") renderReading();
    else if(r === "listening") renderListening();
    else if(r === "profile") renderProfile();
    else if(r === "settings") renderSettings();
    else renderHome();
  }

  // ---------- Events ----------
  function bindEvents(){
    $$(".navItem").forEach(btn=>{
      btn.addEventListener("click", ()=>setRoute(btn.dataset.route));
    });

    $("#btnSideToggle").addEventListener("click", ()=>{
      state.sidebarCollapsed = !state.sidebarCollapsed;
      saveState();
      applySidebar();
    });

    $("#btnTheme").addEventListener("click", ()=>{
      state.theme = (state.theme === "light") ? "dark" : "light";
      saveState();
      applyTheme();
      render();
    });

    $("#langSelect").value = state.lang || "uz";
    $("#langSelect").addEventListener("change", (e)=>{
      state.lang = e.target.value;
      saveState();
      applyUILang();
      render();
    });

    musicSelect.addEventListener("change", ()=>{
      loadTrack(musicSelect.value);
      if(state.settings.music.playing) setPlaying(true);
    });

    musicVol.addEventListener("input", ()=>{
      const v = clamp(Number(musicVol.value), 0, 100);
      audio.volume = v/100;
      state.settings.music.volume = v;
      saveState();
    });

    btnMusic.addEventListener("click", ()=>{
      const playing = !!state.settings.music.playing;
      setPlaying(!playing);
    });

    audio.addEventListener("ended", ()=>setPlaying(false));
  }

  // ---------- Utilities ----------
  function escapeHTML(s){
    return String(s ?? "")
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }
  function escapeAttr(s){ return escapeHTML(s); }

  function hash(str){
    let h = 2166136261;
    for(let i=0;i<str.length;i++){
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0);
  }

  async function fileToDataURL(file, maxSize=520){
    const img = await loadImage(file);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const {w,h} = fit(img.width, img.height, maxSize);
    canvas.width = w; canvas.height = h;
    ctx.drawImage(img, 0, 0, w, h);
    return canvas.toDataURL("image/jpeg", 0.86);
  }

  function loadImage(file){
    return new Promise((res, rej)=>{
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = ()=>{ URL.revokeObjectURL(url); res(img); };
      img.onerror = rej;
      img.src = url;
    });
  }

  function fit(w,h,max){
    const scale = Math.min(1, max / Math.max(w,h));
    return { w: Math.round(w*scale), h: Math.round(h*scale) };
  }

  function frameClass(frameId){
    return frameId ? `frame-${frameId}` : "";
  }

  function injectFrameStyles(){
    const style = document.createElement("style");
    style.textContent = `
      .frame-f_none{ box-shadow:none; }

      .frame-f_red{ box-shadow: 0 0 0 3px rgba(255,59,71,0.35), 0 18px 55px rgba(0,0,0,0.55); }
      .frame-f_ice{ box-shadow: 0 0 0 3px rgba(120,200,255,0.28), 0 0 26px rgba(120,200,255,0.14); }
      .frame-f_neon{ box-shadow: 0 0 0 3px rgba(255,107,115,0.40), 0 0 30px rgba(255,59,71,0.20); }
      .frame-f_shadow{ box-shadow: 0 0 0 3px rgba(0,0,0,0.35), 0 18px 55px rgba(0,0,0,0.65); }
      .frame-f_gold{ box-shadow: 0 0 0 3px rgba(255,210,80,0.26), 0 0 28px rgba(255,210,80,0.12); }
      .frame-f_matrix{ box-shadow: 0 0 0 3px rgba(80,255,150,0.20), 0 0 30px rgba(80,255,150,0.10); }
      .frame-f_royal{ box-shadow: 0 0 0 3px rgba(255,255,255,0.22), 0 0 0 6px rgba(255,59,71,0.18), 0 18px 55px rgba(0,0,0,0.55); }
      .frame-f_diamond{ box-shadow: 0 0 0 3px rgba(180,220,255,0.26), 0 0 36px rgba(180,220,255,0.16); }
      .frame-f_inferno{ box-shadow: 0 0 0 3px rgba(255,90,40,0.28), 0 0 40px rgba(255,90,40,0.18); }
    `;
    document.head.appendChild(style);
  }

  // ---------- Boot ----------
  function boot(){
    // Require login
if(!localStorage.getItem("engtest_auth")){
  window.location.href = "auth.html";
  return;
}
    injectFrameStyles();
    updateStreak();

    // daily reset
    const tk = todayKey();
    if(state.home.daily.date !== tk){
      state.home.daily.date = tk;
      state.home.daily.goalXP = 0;
    }

    saveState();

    $("#langSelect").value = state.lang || "uz";
    applySidebar();

    refreshMusicOptions();
    loadTrack(state.settings.music.trackId || "m1");
    audio.volume = clamp(state.settings.music.volume ?? 35, 0, 100) / 100;
    if(state.settings.music.playing){
      setPlaying(true);
    }else{
      setPlaying(false);
    }

    bindEvents();
    startClock(); 
    render();
  }

  boot();
})();