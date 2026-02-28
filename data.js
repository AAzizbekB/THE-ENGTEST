/* =========================
   data.js
   Put your tests/vocab here.
   ========================= */

const DATA = {
  readingTests: [
    { title: "Reading Test 1", href: "reading-tests/test1.html" },
    { title: "Reading Test 2", href: "reading-tests/test2.html" },
    { title: "Reading Test 3", href: "reading-tests/test3.html" },
    { title: "Reading Test 4", href: "reading-tests/test4.html" },
  ],
  listeningTests: [
    { title: "Listening Test 1", href: "listening-tests/test1.html" },
    { title: "Listening Test 2", href: "listening-tests/test2.html" },
    { title: "Listening Test 3", href: "listening-tests/test3.html" },
    { title: "Listening Test 4", href: "listening-tests/test4.html" },
  ],

  // 5 music tracks (2 default unlocked)
  musicTracks: [
    { id:"m1", title:"Neon Drift (Starter)", src:"assets/music/neon-drift.mp3", unlock:{ type:"level", value:1 } },
    { id:"m2", title:"Midnight Focus (Starter)", src:"assets/music/midnight-focus.mp3", unlock:{ type:"level", value:1 } },
    { id:"m3", title:"Red Skyline", src:"assets/music/red-skyline.mp3", unlock:{ type:"level", value:7 } },
    { id:"m4", title:"Calm Reactor", src:"assets/music/calm-reactor.mp3", unlock:{ type:"milestone", value:"first_quiz" } },
    { id:"m5", title:"Storm Study", src:"assets/music/storm-study.mp3", unlock:{ type:"level", value:15 } },
  ],

  // 10 nicknames
  nicknames: [
    { id:"n1", name:"Starter", unlock:{type:"level", value:1} },
    { id:"n2", name:"Streak Kid", unlock:{type:"level", value:2} },
    { id:"n3", name:"Grammar Hunter", unlock:{type:"level", value:3} },
    { id:"n4", name:"Vocab Collector", unlock:{type:"level", value:4} },
    { id:"n5", name:"Quiz Warrior", unlock:{type:"level", value:5} },
    { id:"n6", name:"Focus Mode", unlock:{type:"level", value:7} },
    { id:"n7", name:"Night Grinder", unlock:{type:"level", value:10} },
    { id:"n8", name:"Red Neon", unlock:{type:"level", value:14} },
    { id:"n9", name:"IELTS Beast", unlock:{type:"level", value:20} },
    { id:"n10", name:"Legend", unlock:{type:"level", value:30} },
  ],

  // name cards (default 1)
  nameCards: [
    { id:"c1", name:"Classic", unlock:{type:"level", value:1} },
    { id:"c2", name:"Neon Split", unlock:{type:"level", value:8} },
    { id:"c3", name:"Royal Grid", unlock:{type:"level", value:16} },
    { id:"c4", name:"Night Glass", unlock:{type:"level", value:24} },
    { id:"c5", name:"Legend Card", unlock:{type:"level", value:40} },
  ],

  // Grammar Rules (expanded)
  grammarRules: [
    {
      id:"gr_ps",
      title:"Present Simple",
      blocks:[
        { h:"When to use", p:"Use it for habits, routines, general truths, permanent situations, and timetables (trains, lessons, schedules)." },
        { h:"Structure", p:"Affirmative: S + V1(s/es)\nNegative: S + do/does not + V1\nQuestion: Do/Does + S + V1?" },
        { h:"Key words", p:"always, usually, often, sometimes, never, every day/week, on Mondays" },
        { h:"Examples", p:"He studies physics.\nShe doesn’t like noise.\nDo they live here?" },
        { h:"Common mistakes", p:"❌ He go to school. ✅ He goes to school.\n❌ She don’t know. ✅ She doesn’t know." },
      ]
    },
    {
      id:"gr_pc",
      title:"Present Continuous",
      blocks:[
        { h:"When to use", p:"Actions happening now, temporary actions, changes over time, and planned near-future arrangements." },
        { h:"Structure", p:"Affirmative: S + am/is/are + V-ing\nNegative: S + am/is/are not + V-ing\nQuestion: Am/Is/Are + S + V-ing?" },
        { h:"Key words", p:"now, right now, currently, at the moment, today, this week" },
        { h:"Examples", p:"I’m studying right now.\nThey aren’t working today.\nAre you coming tonight?" },
        { h:"Common mistakes", p:"State verbs: know, like, love, believe usually NOT in continuous.\n❌ I’m knowing him. ✅ I know him." },
      ]
    },
    {
      id:"gr_pp",
      title:"Present Perfect",
      blocks:[
        { h:"When to use", p:"Past action with present result, life experience (no exact time), unfinished time (today/this week), and with just/already/yet." },
        { h:"Structure", p:"Affirmative: S + have/has + V3\nNegative: S + have/has not + V3\nQuestion: Have/Has + S + V3?" },
        { h:"Key words", p:"just, already, yet, ever, never, since, for, recently, lately" },
        { h:"Examples", p:"I’ve lost my keys (so I can’t enter now).\nShe has been to Japan.\nHave you ever tried sushi?" },
        { h:"Common mistakes", p:"Don’t use specific past time.\n❌ I have seen him yesterday. ✅ I saw him yesterday." },
      ]
    },
    {
      id:"gr_ppc",
      title:"Present Perfect Continuous",
      blocks:[
        { h:"When to use", p:"Emphasize duration of an action that started in the past and continues now (or just finished with visible effect)." },
        { h:"Structure", p:"Affirmative: S + have/has been + V-ing\nNegative: S + have/has not been + V-ing\nQuestion: Have/Has + S + been + V-ing?" },
        { h:"Key words", p:"for, since, all day, lately, recently" },
        { h:"Examples", p:"She has been waiting for two hours.\nIt has been raining, the ground is wet." },
      ]
    },
    {
      id:"gr_pastS",
      title:"Past Simple",
      blocks:[
        { h:"When to use", p:"Finished actions in the past, with a clear past time (yesterday, last year, in 2012, two days ago)." },
        { h:"Structure", p:"Affirmative: S + V2/V-ed\nNegative: S + did not + V1\nQuestion: Did + S + V1?" },
        { h:"Examples", p:"They visited London in 2010.\nDid you see it?\nI didn’t call her." },
      ]
    },
    {
      id:"gr_pastC",
      title:"Past Continuous",
      blocks:[
        { h:"When to use", p:"Action in progress at a specific past time, background actions, or interrupted actions (while/when)." },
        { h:"Structure", p:"S + was/were + V-ing\nNeg: was/were not + V-ing\nQ: Was/Were + S + V-ing?" },
        { h:"Examples", p:"I was sleeping when the phone rang.\nWhat were they doing at 10 PM?" },
      ]
    },
    {
      id:"gr_pastP",
      title:"Past Perfect",
      blocks:[
        { h:"When to use", p:"The past of the past — an earlier action before another past action." },
        { h:"Structure", p:"S + had + V3\nNeg: had not + V3\nQ: Had + S + V3?" },
        { h:"Examples", p:"The train had left before I arrived.\nHad she finished before the bell rang?" },
      ]
    },
    {
      id:"gr_pastPC",
      title:"Past Perfect Continuous",
      blocks:[
        { h:"When to use", p:"Duration of an action continuing up to another past moment." },
        { h:"Structure", p:"S + had been + V-ing\nNeg: had not been + V-ing\nQ: Had + S + been + V-ing?" },
        { h:"Examples", p:"He had been driving for six hours before he stopped.\nThe road was muddy because it had been raining." },
      ]
    },
    {
      id:"gr_fs",
      title:"Future Simple (Will)",
      blocks:[
        { h:"When to use", p:"Predictions (opinion), promises, offers, spontaneous decisions, future facts." },
        { h:"Structure", p:"S + will + V1\nNeg: won’t + V1\nQ: Will + S + V1?" },
        { h:"Examples", p:"I will help you.\nIt will probably rain." },
      ]
    },
    {
      id:"gr_fc",
      title:"Future Continuous",
      blocks:[
        { h:"When to use", p:"Action in progress at a specific future time." },
        { h:"Structure", p:"S + will be + V-ing" },
        { h:"Examples", p:"At 8 PM, I will be studying." },
      ]
    },
    {
      id:"gr_fp",
      title:"Future Perfect",
      blocks:[
        { h:"When to use", p:"Action completed by a future deadline." },
        { h:"Structure", p:"S + will have + V3" },
        { h:"Examples", p:"By June, I will have finished my degree." },
      ]
    },
    {
      id:"gr_fpc",
      title:"Future Perfect Continuous",
      blocks:[
        { h:"When to use", p:"Duration up to a future time." },
        { h:"Structure", p:"S + will have been + V-ing" },
        { h:"Examples", p:"By 5 PM, I will have been working for 9 hours." },
      ]
    },
    {
      id:"gr_fip",
      title:"Future in the Past",
      blocks:[
        { h:"What it is", p:"Future actions viewed from a past point (reported speech, past expectations)." },
        { h:"Core structures", p:"would + V1\nwould be + V-ing\nwould have + V3\nwould have been + V-ing" },
        { h:"Examples", p:"She said she would call.\nI thought they would be waiting." },
      ]
    },
  ],

  // Grammar Questions (100)
  grammarQuestions: [
    { q: "If I ___ enough time, I will finish the project.", choices: ["have","had","will have","having"], answer: 0 },
    { q: "She ___ to school every day.", choices: ["go","goes","going","gone"], answer: 1 },
    { q: "They ___ the movie last night.", choices: ["watch","watched","have watched","watching"], answer: 1 },
    { q: "I have lived here ___ 2020.", choices: ["for","since","from","during"], answer: 1 },
    { q: "There isn’t ___ milk left.", choices: ["many","much","few","some"], answer: 1 },
    { q: "If I ___ you, I would apologize.", choices: ["am","was","were","be"], answer: 2 },
    { q: "She’s interested ___ learning Spanish.", choices: ["on","in","at","for"], answer: 1 },
    { q: "Neither of the answers ___ correct.", choices: ["are","is","were","be"], answer: 1 },
    { q: "The sun ___ in the east.", choices: ["rise","rises","is rising","risen"], answer: 1 },
    { q: "I ___ usually drink coffee in the evening.", choices: ["not","doesn't","don't","am not"], answer: 2 },

    { q: "___ they live in this neighborhood?", choices: ["Do","Does","Are","Have"], answer: 0 },
    { q: "The flight ___ at 10:00 AM tomorrow.", choices: ["leave","leaves","leaving","will left"], answer: 1 },
    { q: "He ___ a very talented musician.", choices: ["be","am","is","are"], answer: 2 },
    { q: "Look! It ___ outside right now.", choices: ["snows","is snowing","snowed","is snow"], answer: 1 },
    { q: "We ___ a new project this week.", choices: ["start","starts","are starting","starting"], answer: 2 },
    { q: "Why ___ you wearing a coat indoors?", choices: ["do","is","are","have"], answer: 2 },
    { q: "I ___ meeting my boss at 3 PM.", choices: ["am","is","are","be"], answer: 0 },
    { q: "They ___ watching the game at the moment.", choices: ["isn't","don't","aren't","not"], answer: 2 },
    { q: "Listen! The birds ___.", choices: ["sing","sings","are singing","sang"], answer: 2 },
    { q: "I ___ my keys. I can't find them anywhere.", choices: ["lose","lost","have lost","has lost"], answer: 2 },

    { q: "She ___ to Japan several times.", choices: ["was","has been","is","have been"], answer: 1 },
    { q: "___ you ever eaten snails?", choices: ["Did","Do","Have","Has"], answer: 2 },
    { q: "We ___ not finished the report yet.", choices: ["have","has","did","do"], answer: 0 },
    { q: "He ___ just finished his lunch.", choices: ["have","is","has","was"], answer: 2 },
    { q: "They ___ lived here since 2010.", choices: ["have","has","were","are"], answer: 0 },
    { q: "I ___ for you for over an hour!", choices: ["wait","have waited","have been waiting","am waiting"], answer: 2 },
    { q: "It ___ all morning and the ground is soaked.", choices: ["is raining","was raining","has been raining","rained"], answer: 2 },
    { q: "How long ___ she been studying French?", choices: ["do","is","has","have"], answer: 2 },
    { q: "They ___ been working on that car all day.", choices: ["has","have","are","were"], answer: 1 },
    { q: "I'm tired because I ___ running.", choices: ["am","was","have been","had been"], answer: 2 },

    { q: "He ___ been feeling well lately.", choices: ["hasn't","haven't","isn't","doesn't"], answer: 0 },
    { q: "I ___ to the cinema last night.", choices: ["go","went","gone","was going"], answer: 1 },
    { q: "They ___ a new house two years ago.", choices: ["buy","bought","buying","have bought"], answer: 1 },
    { q: "___ you see that car accident yesterday?", choices: ["Do","Did","Have","Was"], answer: 1 },
    { q: "She ___ not answer my call yesterday.", choices: ["did","does","was","has"], answer: 0 },
    { q: "When ___ you finish your degree?", choices: ["do","did","have","were"], answer: 1 },
    { q: "We ___ very happy to see you last week.", choices: ["are","was","were","be"], answer: 2 },
    { q: "I ___ a book when the lights went out.", choices: ["read","reads","was reading","were reading"], answer: 2 },
    { q: "What ___ they doing at 10 PM last night?", choices: ["did","was","were","are"], answer: 2 },
    { q: "She ___ playing the piano while I was cooking.", choices: ["was","were","is","did"], answer: 0 },

    { q: "They ___ not paying attention during the lecture.", choices: ["did","was","were","are"], answer: 2 },
    { q: "The phone rang while I ___ a shower.", choices: ["took","was taking","am taking","had taken"], answer: 1 },
    { q: "It ___ raining when we left the house.", choices: ["is","was","were","did"], answer: 1 },
    { q: "The movie ___ already started when we arrived.", choices: ["has","have","had","was"], answer: 2 },
    { q: "I realized I ___ my phone at the cafe.", choices: ["leave","left","had left","have left"], answer: 2 },
    { q: "___ she finished the test before the bell rang?", choices: ["Had","Has","Did","Was"], answer: 0 },
    { q: "They ___ not seen each other for years before they met again.", choices: ["have","had","did","were"], answer: 1 },
    { q: "If I ___ known you were coming, I would have baked a cake.", choices: ["have","had","did","would"], answer: 1 },
    { q: "By the time I reached the station, the train ___.", choices: ["left","had left","has left","was left"], answer: 1 },
    { q: "I ___ for two hours when he finally showed up.", choices: ["had been waiting","was waiting","have been waiting","waited"], answer: 0 },

    { q: "She was out of breath because she ___.", choices: ["runs","has been running","had been running","was running"], answer: 2 },
    { q: "How long ___ they been living there before they moved?", choices: ["had","have","did","were"], answer: 0 },
    { q: "The road was muddy because it ___ for days.", choices: ["had been raining","rained","is raining","has been raining"], answer: 0 },
    { q: "He ___ been studying all night, so he was exhausted.", choices: ["has","had","was","did"], answer: 1 },
    { q: "They ___ not been talking to each other for a month.", choices: ["had","have","were","did"], answer: 0 },
    { q: "I ___ help you with those bags.", choices: ["will","shall","going to","am"], answer: 0 },
    { q: "It ___ probably rain tomorrow.", choices: ["is","will","shall","was"], answer: 1 },
    { q: "___ you open the window, please?", choices: ["Will","Do","Are","Shall"], answer: 0 },
    { q: "I ___ not forget your birthday.", choices: ["will","won't","am not","don't"], answer: 1 },
    { q: "Scientists ___ find a cure for the disease one day.", choices: ["will","is","going to","shall"], answer: 0 },

    { q: "If you study hard, you ___ pass the exam.", choices: ["will","shall","are","would"], answer: 0 },
    { q: "This time next week, I ___ on a beach.", choices: ["will sit","am sitting","will be sitting","will been sitting"], answer: 2 },
    { q: "They ___ be sleeping when we arrive.", choices: ["will","shall","are","will have"], answer: 0 },
    { q: "___ you be using the printer this afternoon?", choices: ["Will","Shall","Are","Do"], answer: 0 },
    { q: "I ___ not be working on Sunday.", choices: ["will","won't","don't","am not"], answer: 1 },
    { q: "Will you ___ seeing her later?", choices: ["be","been","is","being"], answer: 0 },
    { q: "At 8 PM, we ___ having dinner.", choices: ["will","are","will be","going to"], answer: 2 },
    { q: "I ___ finished this book by the end of the day.", choices: ["will","will have","will be","have"], answer: 1 },
    { q: "She ___ graduated by next June.", choices: ["will","will have","has","will been"], answer: 1 },
    { q: "___ you have retired by the age of 60?", choices: ["Will","Shall","Do","Have"], answer: 0 },

    { q: "The construction ___ not have finished by next month.", choices: ["will","won't","haven't","don't"], answer: 1 },
    { q: "By midnight, I ___ been studying for six hours.", choices: ["will have","will","will have been","have been"], answer: 2 },
    { q: "I knew he ___ succeed.", choices: ["will","would","is","was"], answer: 1 },
    { q: "She promised she ___ call me as soon as she arrived.", choices: ["will","would","shall","is going to"], answer: 1 },
    { q: "I thought it ___ be a sunny day.", choices: ["will","would","is","was"], answer: 1 },
    { q: "We ___ not go unless they invited us.", choices: ["will","would","shall","did"], answer: 1 },
    { q: "___ they help us if we asked them?", choices: ["Would","Will","Did","Do"], answer: 0 },
    { q: "I ___ not be happy if I failed.", choices: ["will","would","won't","shall"], answer: 1 },
    { q: "He said he ___ meet us at the station.", choices: ["will","would","won't","shall"], answer: 1 },
    { q: "She said she ___ be working late that night.", choices: ["will","would","was","is"], answer: 1 },

    { q: "If he ___ harder, he would pass.", choices: ["study","studied","studies","had studied"], answer: 1 },
    { q: "By the time we arrive, they ___ dinner.", choices: ["have","will have had","had","will be"], answer: 1 },
    { q: "I wish I ___ more time.", choices: ["have","had","will have","am having"], answer: 1 },
    { q: "He speaks English ___ than I do.", choices: ["good","better","best","well"], answer: 1 },
    { q: "Not only ___ late, but he also forgot the documents.", choices: ["he was","was he","he is","is he"], answer: 1 },
    { q: "Neither Sam nor Tom ___ available today.", choices: ["are","is","were","be"], answer: 1 },
    { q: "Hardly ___ the meeting started when the fire alarm rang.", choices: ["had","has","did","was"], answer: 0 },
    { q: "The report must ___ by Friday.", choices: ["finish","be finished","finished","finishing"], answer: 1 },
    { q: "I’d rather you ___ me the truth.", choices: ["tell","told","will tell","telling"], answer: 1 },
    { q: "She suggested that he ___ earlier.", choices: ["leave","left","leaves","leaving"], answer: 0 },

    { q: "The book, along with the notes, ___ on the table.", choices: ["are","is","were","be"], answer: 1 },
    { q: "If I had seen you, I ___ hello.", choices: ["say","would say","would have said","said"], answer: 2 },
    { q: "He denied ___ the money.", choices: ["take","to take","taking","took"], answer: 2 },
    { q: "This is the first time I ___ this place.", choices: ["visit","visited","have visited","am visiting"], answer: 2 },
    { q: "She ___ be at home now; her car is outside.", choices: ["must","might","can’t","would"], answer: 0 },
    { q: "The sooner you start, the ___ you finish.", choices: ["quick","quicker","quickest","more quick"], answer: 1 },
    { q: "I ___ here since morning.", choices: ["am","was","have been","had been"], answer: 2 },
    { q: "He behaves as if he ___ everything.", choices: ["know","knew","knows","had known"], answer: 1 },
    { q: "Had I known, I ___ differently.", choices: ["would act","acted","would have acted","act"], answer: 2 },
    { q: "She is used to ___ early.", choices: ["get up","to get up","getting up","got up"], answer: 2 },

    { q: "I’m looking forward to ___ from you.", choices: ["hear","to hear","hearing","heard"], answer: 2 },
    { q: "He stopped ___ because he was tired.", choices: ["run","to run","running","ran"], answer: 2 },
    { q: "He stopped ___ a phone call.", choices: ["run","to run","running","ran"], answer: 1 },
    { q: "If you ___ a seat, I’ll explain.", choices: ["take","took","taking","will take"], answer: 0 },
    { q: "A number of students ___ absent.", choices: ["is","are","was","be"], answer: 1 },
    { q: "The number of students ___ increasing.", choices: ["is","are","were","be"], answer: 0 },
    { q: "He’s the man ___ I told you about.", choices: ["which","who","whom","where"], answer: 1 },
    { q: "This is the house ___ I was born.", choices: ["which","who","where","when"], answer: 2 },
    { q: "I prefer tea ___ coffee.", choices: ["than","to","from","over"], answer: 1 },
    { q: "She’s responsible ___ the project.", choices: ["to","for","with","on"], answer: 1 },

    { q: "He apologized ___ being late.", choices: ["for","to","with","on"], answer: 0 },
    { q: "The meeting was canceled ___ the storm.", choices: ["because","because of","although","despite"], answer: 1 },
    { q: "___ being tired, he continued working.", choices: ["Although","Despite","Because","Since"], answer: 1 },
    { q: "I’ll call you when I ___ home.", choices: ["get","will get","got","getting"], answer: 0 },
    { q: "If he ___ earlier, he wouldn’t miss the bus.", choices: ["leaves","left","had left","will leave"], answer: 1 },
    { q: "She asked me where I ___.", choices: ["live","lived","am living","will live"], answer: 1 },
    { q: "It’s important that he ___ on time.", choices: ["arrive","arrives","arrived","arriving"], answer: 0 },
    { q: "I can’t stand ___ in long queues.", choices: ["wait","to wait","waiting","waited"], answer: 2 },
    { q: "We had our car ___ yesterday.", choices: ["repair","repaired","repairing","to repair"], answer: 1 },
    { q: "The task is too hard ___ alone.", choices: ["do","to do","doing","done"], answer: 1 },
  ],

  // Vocab (your big list can be pasted later)
  vocab: [
    { id:"v_meticulous", word:"meticulous", meaning:"very careful and precise", meaning_uz:"juda sinchkov va aniq", synonym:"careful", example:"She kept meticulous notes." },
    { id:"v_ambiguous", word:"ambiguous", meaning:"unclear; having more than one meaning", meaning_uz:"noaniq; bir nechta ma’noga ega", synonym:"unclear", example:"His answer was ambiguous." },
    { id:"v_consolidate", word:"consolidate", meaning:"to combine into one", meaning_uz:"birlashtirmoq, jamlamoq", synonym:"merge", example:"They consolidated the files." },
    { id:"v_bewildered", word:"bewildered", meaning:"confused", meaning_uz:"hayron, adashgan", synonym:"confused", example:"I was bewildered by the instructions." },
    { id:"v_reproach", word:"reproach", meaning:"to criticize", meaning_uz:"tanqid qilmoq, koyimoq", synonym:"criticize", example:"He reproached me for being late." },
  ],

  irregular: [
    { id:"i_arise", base:"arise", past:"arose", pp:"arisen", meaning_uz:"paydo bo‘lmoq, yuzaga kelmoq" },
    { id:"i_awake", base:"awake", past:"awoke", pp:"awoken", meaning_uz:"uyg‘onmoq" },
    { id:"i_be", base:"be", past:"was/were", pp:"been", meaning_uz:"bo‘lmoq" },
    { id:"i_bear", base:"bear", past:"bore", pp:"born", meaning_uz:"chidamoq; tug‘moq" },
    { id:"i_beat", base:"beat", past:"beat", pp:"beaten", meaning_uz:"urmoq, yengmoq" },
    { id:"i_become", base:"become", past:"became", pp:"become", meaning_uz:"bo‘lib qolmoq" },
    { id:"i_begin", base:"begin", past:"began", pp:"begun", meaning_uz:"boshlamoq" },
    { id:"i_bend", base:"bend", past:"bent", pp:"bent", meaning_uz:"egmoq" },
    { id:"i_bite", base:"bite", past:"bit", pp:"bitten", meaning_uz:"tishlamoq" },
    { id:"i_blow", base:"blow", past:"blew", pp:"blown", meaning_uz:"puflamoq" },
    { id:"i_break", base:"break", past:"broke", pp:"broken", meaning_uz:"sindirmoq" },
    { id:"i_bring", base:"bring", past:"brought", pp:"brought", meaning_uz:"olib kelmoq" },
    { id:"i_build", base:"build", past:"built", pp:"built", meaning_uz:"qurmoq" },
    { id:"i_buy", base:"buy", past:"bought", pp:"bought", meaning_uz:"sotib olmoq" },
    { id:"i_choose", base:"choose", past:"chose", pp:"chosen", meaning_uz:"tanlamoq" },
    { id:"i_come", base:"come", past:"came", pp:"come", meaning_uz:"kelmoq" },
    { id:"i_do", base:"do", past:"did", pp:"done", meaning_uz:"qilmoq" },
    { id:"i_drink", base:"drink", past:"drank", pp:"drunk", meaning_uz:"ichmoq" },
    { id:"i_drive", base:"drive", past:"drove", pp:"driven", meaning_uz:"haydamoq" },
    { id:"i_eat", base:"eat", past:"ate", pp:"eaten", meaning_uz:"yemoq" },
    { id:"i_fall", base:"fall", past:"fell", pp:"fallen", meaning_uz:"yiqilmoq" },
    { id:"i_find", base:"find", past:"found", pp:"found", meaning_uz:"topmoq" },
    { id:"i_forget", base:"forget", past:"forgot", pp:"forgotten", meaning_uz:"unutmoq" },
    { id:"i_get", base:"get", past:"got", pp:"gotten", meaning_uz:"olmoq; yetib bormoq" },
    { id:"i_give", base:"give", past:"gave", pp:"given", meaning_uz:"bermoq" },
    { id:"i_go", base:"go", past:"went", pp:"gone", meaning_uz:"bormoq" },
    { id:"i_have", base:"have", past:"had", pp:"had", meaning_uz:"ega bo‘lmoq" },
    { id:"i_know", base:"know", past:"knew", pp:"known", meaning_uz:"bilmoq" },
    { id:"i_make", base:"make", past:"made", pp:"made", meaning_uz:"yasamoq" },
    { id:"i_read", base:"read", past:"read", pp:"read", meaning_uz:"o‘qimoq" },
    { id:"i_run", base:"run", past:"ran", pp:"run", meaning_uz:"yugurmoq" },
    { id:"i_see", base:"see", past:"saw", pp:"seen", meaning_uz:"ko‘rmoq" },
    { id:"i_sing", base:"sing", past:"sang", pp:"sung", meaning_uz:"kuylamoq" },
    { id:"i_sit", base:"sit", past:"sat", pp:"sat", meaning_uz:"o‘tirmoq" },
    { id:"i_sleep", base:"sleep", past:"slept", pp:"slept", meaning_uz:"uxlamoq" },
    { id:"i_speak", base:"speak", past:"spoke", pp:"spoken", meaning_uz:"gapirmoq" },
    { id:"i_take", base:"take", past:"took", pp:"taken", meaning_uz:"olmoq" },
    { id:"i_think", base:"think", past:"thought", pp:"thought", meaning_uz:"o‘ylamoq" },
    { id:"i_write", base:"write", past:"wrote", pp:"written", meaning_uz:"yozmoq" },
  ],

  // 10 stickers (default 3 will be set in state)
  stickers: [
    { id:"s_fire", label:"🔥", unlock:{type:"level", value:1} },
    { id:"s_star", label:"⭐", unlock:{type:"level", value:1} },
    { id:"s_smile", label:"😄", unlock:{type:"level", value:1} },

    { id:"s_brain", label:"🧠", unlock:{type:"milestone", value:"first_favorite"} },
    { id:"s_headphones", label:"🎧", unlock:{type:"milestone", value:"first_listening"} },
    { id:"s_book", label:"📚", unlock:{type:"milestone", value:"first_reading"} },

    { id:"s_rocket", label:"🚀", unlock:{type:"level", value:10} },
    { id:"s_lightning", label:"⚡", unlock:{type:"level", value:15} },
    { id:"s_crown", label:"👑", unlock:{type:"level", value:25} },
    { id:"s_gem", label:"💎", unlock:{type:"level", value:35} },
  ],

  // 10 frames (higher level = higher quality)
  frames: [
    { id:"f_none", name:"None", unlock:{type:"level", value:1} },
    { id:"f_red", name:"Red Glow", unlock:{type:"level", value:5} },
    { id:"f_ice", name:"Ice Edge", unlock:{type:"level", value:8} },
    { id:"f_neon", name:"Neon Ring", unlock:{type:"level", value:12} },
    { id:"f_shadow", name:"Shadow", unlock:{type:"level", value:14} },
    { id:"f_gold", name:"Gold Line", unlock:{type:"level", value:18} },
    { id:"f_matrix", name:"Matrix", unlock:{type:"level", value:22} },
    { id:"f_royal", name:"Royal", unlock:{type:"level", value:30} },
    { id:"f_diamond", name:"Diamond", unlock:{type:"level", value:40} },
    { id:"f_inferno", name:"Inferno", unlock:{type:"level", value:50} },
  ],

  // Milestones
  milestones: [
    { id:"first_quiz", title:"First Quiz", desc:"Finish any quiz once.", xp: 40 },
    { id:"daily5_done", title:"Daily 5 Complete", desc:"Complete Daily 5 Grammar questions.", xp: 30 },
    { id:"first_favorite", title:"First Favorite", desc:"Save your first favorite item.", xp: 15 },
    { id:"first_reading", title:"Reading Explorer", desc:"Open your first reading test.", xp: 10 },
    { id:"first_listening", title:"Listening Explorer", desc:"Open your first listening test.", xp: 10 },
    { id:"streak_3", title:"3-Day Streak", desc:"Use the site 3 days in a row.", xp: 25 },
    { id:"streak_7", title:"7-Day Streak", desc:"Use the site 7 days in a row.", xp: 50 },
    { id:"level_10", title:"Level 10", desc:"Reach level 10.", xp: 60 },
    { id:"level_25", title:"Level 25", desc:"Reach level 25.", xp: 120 },
    { id:"level_50", title:"Level 50", desc:"Reach level 50 — legend status.", xp: 250 },
  ],
  leaderboardNames: [
  "Nova","Raven","Orion","Mira","Atlas","Zara","Kai","Luna","Aria","Theo",
  "Iris","Ezra","Nico","Sage","Milo","Ayla","Juno","Kian","Elif","Noah",
  "Vera","Leo","Maya","Odin","Nina","Ari","Lia","Rami","Tara","Eden",
  "Hana","Omar","Sami","Lily","Adam","Sara","Zayn","Nora","Ilya","Dina",
  "Anya","Maks","Ali","Amina","Rustam","Bekzod","Aziza","Dilshod","Timur","Jasur",
  "Sofia","Maria","Daria","Nikita","Roman","Yusuf","Fatima","Hasan","Zahid","Asad",
  "Layla","Amir","Bilal","Farida","Kamila","Madina","Shirin","Rahmat","Sardor","Umid",
  "Samir","Nargiza","Karim","Sultan","Yasmina","Murat","Islom","Jamshid","Shohruh","Malika",
  "Diyor","Iskandar","Navruz","Sabina","Azamat","Sherzod","Farruh","Komron","Shaxzoda","Zebo",
  "Nigora","Otabek","Bobur","Shahnoza","Sanjar","Mansur","Javohir","Gulbahor","Humoyun","Zulfiyа"
],
};