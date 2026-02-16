/* =========================
   ENGTEST.COM - app.js
   Clean rebuild (no crashes)
   ========================= */

/* ---------- CONFIG ---------- */
const CONFIG = {
  // If false: other people cannot add/remove vocab/irregular from the site
  // They can only favorite + search.
  ALLOW_SITE_EDITING: false,

  // If true: show add/remove UI (only if you add it later).
  // For now UI is not present in HTML anyway.
};

/* ---------- CONTENT: EDIT EVERYTHING HERE ---------- */
const CONTENT = {
  createdBy: "ENGTEST Team",

  readingTests: [
    { title: "Reading Test 1", href: "reading-tests/test1.html" },
    { title: "Reading Test 2", href: "reading-tests/test2.html" },
    { title: "Reading Test 3", href: "reading-tests/test3.html" },
  ],

  listeningTests: [
    { title: "Listening Test 1", href: "listening-tests/test1.html" },
    { title: "Listening Test 2", href: "listening-tests/test2.html" },
    { title: "Listening Test 3", href: "listening-tests/test3.html" },
  ],

  vocab: [
    { id: "v_meticulous", word: "meticulous", meaning: "very careful and precise", example: "She kept meticulous notes." },
    { id: "v_ambiguous", word: "ambiguous", meaning: "unclear; having more than one meaning", example: "His answer was ambiguous." },
    { id: "v_consolidate", word: "consolidate", meaning: "to combine into one", example: "They consolidated the files." },
    { id: "v_bewildered", word: "bewildered", meaning: "confused", example: "I was bewildered by the instructions." },
    { id: "v_reproach", word: "reproach", meaning: "to criticize", example: "He reproached me for being late." },
{ id: "v_ephemeral", word: "ephemeral", meaning: "lasting for a very short time", example: "The morning mist was ephemeral." },
{ id: "v_venerable", word: "venerable", meaning: "respected because of age or wisdom", example: "The venerable professor retired today." },
{ id: "v_pragmatic", word: "pragmatic", meaning: "dealing with things sensibly and realistically", example: "We need a pragmatic solution to the leak." },
{ id: "v_oblivious", word: "oblivious", meaning: "not aware of what is happening around one", example: "She was oblivious to the noise outside." },
{ id: "v_resilient", word: "resilient", meaning: "able to withstand or recover quickly from difficulties", example: "Children are often more resilient than adults." },
{ id: "v_superfluous", word: "superfluous", meaning: "unnecessary, especially through being more than enough", example: "Avoid superfluous words in your essay." },
{ id: "v_mitigate", word: "mitigate", meaning: "to make less severe or painful", example: "He took aspirin to mitigate the headache." },
{ id: "v_adversity", word: "adversity", meaning: "difficulties; misfortune", example: "She showed courage in the face of adversity." },
{ id: "v_benevolent", word: "benevolent", meaning: "well-meaning and kindly", example: "The benevolent neighbor donated her old clothes." },
{ id: "v_placate", word: "placate", meaning: "to make someone less angry or hostile", example: "They tried to placate the crying child with a toy." },
{ id: "v_scrutinize", word: "scrutinize", meaning: "to examine or inspect closely", example: "The detective scrutinized the fingerprints." },
{ id: "v_tenacious", word: "tenacious", meaning: "not readily letting go of something; persistent", example: "He was a tenacious negotiator." },
{ id: "v_redundant", word: "redundant", meaning: "not or no longer needed or useful", example: "The extra wheels made the vehicle redundant." },
{ id: "v_eloquent", word: "eloquent", meaning: "fluent or persuasive in speaking or writing", example: "Her eloquent speech moved the audience to tears." },
{ id: "v_fastidious", word: "fastidious", meaning: "very attentive to and concerned about accuracy and detail", example: "He is fastidious about his appearance." },
{ id: "v_clandestine", word: "clandestine", meaning: "kept secret or done secretively", example: "They had a clandestine meeting in the park." },
{ id: "v_capricious", word: "capricious", meaning: "given to sudden changes of mood or behavior", example: "The weather in April is often capricious." },
{ id: "v_equivocal", word: "equivocal", meaning: "open to more than one interpretation; uncertain", example: "The results of the study were equivocal." },
{ id: "v_frugal", word: "frugal", meaning: "simple, plain, and costing little", example: "He led a frugal lifestyle to save money." },
{ id: "v_garrulous", word: "garrulous", meaning: "excessively talkative, especially on trivial matters", example: "The garrulous driver told us his whole life story." },
{ id: "v_gregarious", word: "gregarious", meaning: "fond of company; sociable", example: "He was a gregarious person who loved parties." },
{ id: "v_haughty", word: "haughty", meaning: "arrogantly superior and disdainful", example: "She gave a haughty look to the waiter." },
{ id: "v_impetuous", word: "impetuous", meaning: "acting or done quickly and without thought or care", example: "His impetuous decision led to many problems." },
{ id: "v_indigenous", word: "indigenous", meaning: "originating or occurring naturally in a particular place", example: "The kangaroo is indigenous to Australia." },
{ id: "v_insipid", word: "insipid", meaning: "lacking flavor or interest", example: "The soup was rather insipid." },
{ id: "v_loquacious", word: "loquacious", meaning: "tending to talk a great deal; talkative", example: "The loquacious student was asked to be quiet." },
{ id: "v_magnanimous", word: "magnanimous", meaning: "very generous or forgiving", example: "She was magnanimous in victory." },
{ id: "v_mercurial", word: "mercurial", meaning: "subject to sudden or unpredictable changes of mood", example: "His mercurial temperament made him hard to work with." },
{ id: "v_nefarious", word: "nefarious", meaning: "wicked or criminal", example: "The hacker had nefarious intentions." },
{ id: "v_obsequious", word: "obsequious", meaning: "obedient or attentive to an excessive degree", example: "The waiter was almost obsequious in his service." },
{ id: "v_ostentatious", word: "ostentatious", meaning: "characterized by vulgar or pretentious display", example: "He wore an ostentatious gold watch." },
{ id: "v_perfidious", word: "perfidious", meaning: "deceitful and untrustworthy", example: "She was betrayed by a perfidious friend." },
{ id: "v_pervasive", word: "pervasive", meaning: "spreading widely throughout an area or a group", example: "The smell of baking bread was pervasive." },
{ id: "v_precarious", word: "precarious", meaning: "not securely held or in position; dangerous", example: "The ladder was in a precarious position." },
{ id: "v_prodigal", word: "prodigal", meaning: "spending money or resources freely and recklessly", example: "The prodigal son wasted his inheritance." },
{ id: "v_quiescent", word: "quiescent", meaning: "in a state or period of inactivity or dormancy", example: "The volcano has been quiescent for centuries." },
{ id: "v_reticent", word: "reticent", meaning: "not revealing one's thoughts or feelings readily", example: "She was reticent about her past." },
{ id: "v_soporific", word: "soporific", meaning: "tending to induce drowsiness or sleep", example: "The lecture had a soporific effect." },
{ id: "v_taciturn", word: "taciturn", meaning: "reserved or uncommunicative in speech", example: "He was a taciturn man who rarely spoke." },
{ id: "v_ubiquitous", word: "ubiquitous", meaning: "present, appearing, or found everywhere", example: "Cell phones are ubiquitous these days." },
{ id: "v_venerate", word: "venerate", meaning: "regard with great respect; revere", example: "Many people venerate historical figures." },
{ id: "v_vociferous", word: "vociferous", meaning: "vehement or clamorous", example: "There were vociferous objections to the plan." },
{ id: "v_wary", word: "wary", meaning: "feeling or showing caution about possible dangers", example: "Be wary of strangers asking for money." },
{ id: "v_zealous", word: "zealous", meaning: "having or showing great energy or enthusiasm", example: "She is a zealous supporter of the charity." },
{ id: "v_aberration", word: "aberration", meaning: "a departure from what is normal or expected", example: "The snow in July was an aberration." },
{ id: "v_alacrity", word: "alacrity", meaning: "brisk and cheerful readiness", example: "He accepted the invitation with alacrity." },
{ id: "v_anomaly", word: "anomaly", meaning: "something that deviates from what is standard", example: "The test result was an anomaly." },
{ id: "v_candid", word: "candid", meaning: "truthful and straightforward; frank", example: "I look forward to your candid opinion." },
{ id: "v_deference", word: "deference", meaning: "humble submission and respect", example: "He bowed his head in deference to the king." },
{ id: "v_enigma", word: "enigma", meaning: "a person or thing that is mysterious or difficult to understand", example: "His disappearance remains an enigma." },
{ id: "v_abscond", word: "abscond", meaning: "to leave hurriedly and secretly", example: "The suspect tried to abscond with the money." },
{ id: "v_acquiesce", word: "acquiesce", meaning: "to accept something reluctantly but without protest", example: "He finally acquiesced to their demands." },
{ id: "v_altruism", word: "altruism", meaning: "disinterested and selfless concern for others", example: "Many charities rely on the altruism of strangers." },
{ id: "v_ambivalent", word: "ambivalent", meaning: "having mixed feelings or contradictory ideas", example: "I am ambivalent about the new job offer." },
{ id: "v_ameliorate", word: "ameliorate", meaning: "to make something bad better", example: "Strategies were put in place to ameliorate the poverty." },
{ id: "v_anachronism", word: "anachronism", meaning: "something out of its proper time", example: "The sword in the sci-fi movie was an anachronism." },
{ id: "v_antipathy", word: "antipathy", meaning: "a deep-seated feeling of dislike", example: "There is a natural antipathy between the two rivals." },
{ id: "v_archaic", word: "archaic", meaning: "very old or old-fashioned", example: "The company still uses an archaic filing system." },
{ id: "v_arduous", word: "arduous", meaning: "involving or requiring strenuous effort", example: "It was an arduous climb to the summit." },
{ id: "v_articulate", word: "articulate", meaning: "having the ability to speak fluently and coherently", example: "She is an articulate defender of civil rights." },
{ id: "v_assuage", word: "assuage", meaning: "to make an unpleasant feeling less intense", example: "The letter helped assuage her fears." },
{ id: "v_audacious", word: "audacious", meaning: "showing a willingness to take surprisingly bold risks", example: "He made an audacious attempt to break the record." },
{ id: "v_austere", word: "austere", meaning: "severe or strict in manner or appearance", example: "The monk lived an austere life in the mountains." },
{ id: "v_autonomous", word: "autonomous", meaning: "having the freedom to govern itself or control its own affairs", example: "The local council is an autonomous body." },
{ id: "v_banal", word: "banal", meaning: "so lacking in originality as to be obvious and boring", example: "The plot of the movie was rather banal." },
{ id: "v_belie", word: "belie", meaning: "to fail to give a true notion or impression of", example: "His lively tone belied his physical tiredness." },
{ id: "v_belligerent", word: "belligerent", meaning: "hostile and aggressive", example: "The drunk man became belligerent when asked to leave." },
{ id: "v_bolster", word: "bolster", meaning: "to support or strengthen", example: "They used props to bolster the falling wall." },
{ id: "v_bombastic", word: "bombastic", meaning: "high-sounding but with little meaning; inflated", example: "No one was impressed by his bombastic speech." },
{ id: "v_cacophony", word: "cacophony", meaning: "a harsh, discordant mixture of sounds", example: "A cacophony of car horns filled the street." },
{ id: "v_castigate", word: "castigate", meaning: "to reprimand someone severely", example: "The director castigated the staff for their lateness." },
{ id: "v_caustic", word: "caustic", meaning: "sarcastic in a scathing and bitter way", example: "She made a caustic remark about his new suit." },
{ id: "v_chicanery", word: "chicanery", meaning: "the use of trickery to achieve a legal or political purpose", example: "The election was marked by financial chicanery." },
{ id: "v_cogent", word: "cogent", meaning: "clear, logical, and convincing", example: "The lawyer presented a cogent argument." },
{ id: "v_condone", word: "condone", meaning: "to accept and allow offensive behavior to continue", example: "The college does not condone cheating." },
{ id: "v_connoisseur", word: "connoisseur", meaning: "an expert judge in matters of taste", example: "He is a connoisseur of fine wines." },
{ id: "v_conundrum", word: "conundrum", meaning: "a confusing and difficult problem or question", example: "How to reduce the deficit is a major conundrum." },
{ id: "v_corroborate", word: "corroborate", meaning: "to confirm or give support to a statement or theory", example: "The witness was able to corroborate her story." },
{ id: "v_credulous", word: "credulous", meaning: "too ready to believe things; gullible", example: "A credulous person is easily deceived by scams." },
{ id: "v_decorum", word: "decorum", meaning: "behavior in keeping with good taste and propriety", example: "The students were expected to maintain decorum." },
{ id: "v_denigrate", word: "denigrate", meaning: "to criticize unfairly; disparage", example: "You shouldn't denigrate his achievements." },
{ id: "v_deride", word: "deride", meaning: "to express contempt for; ridicule", example: "Critics derided the film as a waste of time." },
{ id: "v_desiccate", word: "desiccate", meaning: "to remove the moisture from; cause to dry up", example: "The sun will desiccate the soil." },
{ id: "v_desultory", word: "desultory", meaning: "lacking a plan, purpose, or enthusiasm", example: "They had a desultory conversation about the weather." },
{ id: "v_diatribe", word: "diatribe", meaning: "a forceful and bitter verbal attack", example: "The article was a diatribe against the government." },
{ id: "v_diffident", word: "diffident", meaning: "modest or shy because of a lack of self-confidence", example: "He was too diffident to speak in public." },
{ id: "v_dilatory", word: "dilatory", meaning: "slow to act; intended to cause delay", example: "He used dilatory tactics to stay the execution." },
{ id: "v_disabuse", word: "disabuse", meaning: "to persuade someone that an idea or belief is mistaken", example: "I must disabuse you of that notion." },
{ id: "v_disparate", word: "disparate", meaning: "essentially different in kind; not allowing comparison", example: "The group was made up of disparate individuals." },
{ id: "v_dissemble", word: "dissemble", meaning: "to conceal one's true motives, feelings, or beliefs", example: "She smiled, unable to dissemble her annoyance." },
{ id: "v_dogmatic", word: "dogmatic", meaning: "inclined to lay down principles as undeniably true", example: "He was very dogmatic about his political views." },
{ id: "v_eclectic", word: "eclectic", meaning: "deriving ideas or style from a diverse range of sources", example: "The museum has an eclectic collection of art." },
{ id: "v_efficacy", word: "efficacy", meaning: "the ability to produce a desired or intended result", example: "The drug’s efficacy has been proven in trials." },
{ id: "v_enervate", word: "enervate", meaning: "to cause someone to feel drained of energy", example: "The hot sun seemed to enervate the runners." },
{ id: "v_engender", word: "engender", meaning: "to cause or give rise to a feeling or situation", example: "The issue engendered much controversy." },
{ id: "v_esoteric", word: "esoteric", meaning: "intended for or understood by only a small number of people", example: "The debate was about an esoteric point of law." },
{ id: "v_euphemism", word: "euphemism", meaning: "a mild word used in place of one considered too harsh", example: "Passed away is a euphemism for died." },
{ id: "v_exacerbate", word: "exacerbate", meaning: "to make a problem or bad situation worse", example: "The humidity will only exacerbate your asthma." },
{ id: "v_exculpate", word: "exculpate", meaning: "to show or declare that someone is not guilty of wrongdoing", example: "The DNA evidence served to exculpate the defendant." },
{ id: "v_exigency", word: "exigency", meaning: "an urgent need or demand", example: "The exigencies of the war required sacrifice." },
{ id: "v_facetious", word: "facetious", meaning: "treating serious issues with inappropriate humor", example: "Stop being facetious; this is a serious matter." },
{ id: "v_foment", word: "foment", meaning: "to instigate or stir up an undesirable course of action", example: "They were accused of trying to foment a rebellion." },
{ id: "v_frivolous", word: "frivolous", meaning: "not having any serious purpose or value", example: "She spent her money on frivolous things." },
{ id: "v_guile", word: "guile", meaning: "sly or cunning intelligence", example: "He used guile to get what he wanted." },
{ id: "v_harangue", word: "harangue", meaning: "a lengthy and aggressive speech", example: "The boss gave us a harangue about productivity." },
{ id: "v_homogenous", word: "homogenous", meaning: "of the same kind; alike", example: "The population of the village is very homogenous." },
{ id: "v_hyperbole", word: "hyperbole", meaning: "exaggerated statements not meant to be taken literally", example: "I’ve told you a million times is a hyperbole." },
{ id: "v_iconoclast", word: "iconoclast", meaning: "a person who attacks cherished beliefs or institutions", example: "The young artist was seen as an iconoclast." },
{ id: "v_immutable", word: "immutable", meaning: "unchanging over time or unable to be changed", example: "The laws of physics are considered immutable." },
{ id: "v_impassive", word: "impassive", meaning: "not feeling or showing emotion", example: "She remained impassive throughout the trial." },
{ id: "v_impecunious", word: "impecunious", meaning: "having little or no money", example: "The impecunious student lived on noodles." },
{ id: "v_implacable", word: "implacable", meaning: "unable to be placated; relentless", example: "He was an implacable enemy of the regime." },
{ id: "v_inchoate", word: "inchoate", meaning: "just begun and so not fully formed or developed", example: "She had an inchoate idea for a novel." },
{ id: "v_ingenuous", word: "ingenuous", meaning: "innocent and unsuspecting", example: "It was rather ingenuous of him to trust them." },
{ id: "v_inimical", word: "inimical", meaning: "tending to obstruct or harm; unfriendly", example: "Excessive noise is inimical to a good night's sleep." },
{ id: "v_innocuous", word: "innocuous", meaning: "not harmful or offensive", example: "It was an innocuous remark, but he took offense." },
{ id: "v_intransigent", word: "intransigent", meaning: "unwilling or refusing to change one's views", example: "The two sides remained intransigent." },
{ id: "v_inundate", word: "inundate", meaning: "to overwhelm someone with things to be dealt with", example: "We were inundated with complaints." },
{ id: "v_irascible", word: "irascible", meaning: "having a tendency to be easily angered", example: "He was an irascible old man." },
{ id: "v_laconic", word: "laconic", meaning: "using very few words", example: "His laconic reply suggested he was busy." },
{ id: "v_lethargic", word: "lethargic", meaning: "affected by lethargy; sluggish and apathetic", example: "The heat made everyone feel lethargic." },
{ id: "v_lucid", word: "lucid", meaning: "expressed clearly; easy to understand", example: "She gave a lucid explanation of the process." },
{ id: "v_malleable", word: "malleable", meaning: "easily influenced; pliable", example: "The minds of young children are very malleable." },
{ id: "v_misanthrope", word: "misanthrope", meaning: "a person who dislikes humankind", example: "The hermit was a confirmed misanthrope." },
{ id: "v_mollify", word: "mollify", meaning: "to appease the anger or anxiety of someone", example: "Nature sounds helped to mollify her stress." },
{ id: "v_monotony", word: "monotony", meaning: "lack of variety and interest; tedious repetition", example: "He hated the monotony of office work." },
{ id: "v_obdurate", word: "obdurate", meaning: "stubbornly refusing to change one's opinion", example: "The president remained obdurate on the tax issue." },
{ id: "v_obviate", word: "obviate", meaning: "to remove a need or difficulty", example: "The new bridge will obviate the need for a ferry." },
{ id: "v_occlude", word: "occlude", meaning: "to stop, close up, or obstruct", example: "A blood clot can occlude a major artery." },
{ id: "v_onerous", word: "onerous", meaning: "involving an amount of effort that is oppressively burdensome", example: "He found the task of cleaning the attic onerous." },
{ id: "v_opaque", word: "opaque", meaning: "not able to be seen through; not transparent", example: "The windows were covered with an opaque film." },
{ id: "v_opprobrium", word: "opprobrium", meaning: "harsh criticism or censure", example: "The criminal faced public opprobrium." },
{ id: "v_paragon", word: "paragon", meaning: "a person or thing viewed as a model of excellence", example: "She is a paragon of virtue." },
{ id: "v_pedantic", word: "pedantic", meaning: "excessively concerned with minor details or rules", example: "His pedantic corrections annoyed his friends." },
{ id: "v_perennial", word: "perennial", meaning: "lasting or existing for a long or apparently infinite time", example: "The lack of money is a perennial problem." },
{ id: "v_prevaricate", word: "prevaricate", meaning: "to speak or act in an evasive way", example: "He seemed to prevaricate when asked about his past." },
{ id: "v_pristine", word: "pristine", meaning: "in its original condition; unspoiled", example: "The snow was white and pristine." },
{ id: "v_proliferate", word: "proliferate", meaning: "to increase rapidly in numbers; multiply", example: "Rumors about the merger began to proliferate." },
{ id: "v_propitiate", word: "propitiate", meaning: "to win or regain the favor of a god or person", example: "The pagans offered sacrifices to propitiate the gods." },
{ id: "v_propriety", word: "propriety", meaning: "the state or quality of conforming to conventionally accepted standards", example: "He always behaved with the utmost propriety." },
{ id: "v_recondite", word: "recondite", meaning: "little known; abstruse", example: "The book is full of recondite information." },
{ id: "v_refute", word: "refute", meaning: "to prove a statement or theory to be wrong", example: "Scientists were able to refute the old theory." },
{ id: "v_salubrious", word: "salubrious", meaning: "health-giving; healthy", example: "The sea air is very salubrious." },
{ id: "v_sanction", word: "sanction", meaning: "a threatened penalty for disobeying a law or rule", example: "The UN imposed trade sanctions on the country." },
{ id: "v_satiate", word: "satiate", meaning: "to satisfy a desire or appetite to the full", example: "He was satiated after the seven-course meal." },
{ id: "v_solicitous", word: "solicitous", meaning: "showing interest or concern", example: "She was always solicitous about her welfare." },
{ id: "v_specious", word: "specious", meaning: "superficially plausible, but actually wrong", example: "The politician made a specious argument." },
{ id: "v_stigma", word: "stigma", meaning: "a mark of disgrace associated with a particular circumstance", example: "There is still a stigma attached to mental illness." },
{ id: "v_stolid", word: "stolid", meaning: "calm, dependable, and showing little emotion", example: "He was a stolid man who never complained." },
{ id: "v_substantiate", word: "substantiate", meaning: "to provide evidence to support or prove the truth of", example: "They had enough evidence to substantiate the claim." }
,{ id: "v_abandon", word: "abandon", meaning: "to leave behind or give up a practice", example: "Many people abandon their traditional habits in big cities." },
{ id: "v_abstract", word: "abstract", meaning: "existing in thought but not having a physical existence", example: "The concept of beauty is often very abstract." },
{ id: "v_accumulate", word: "accumulate", meaning: "to gather or build up over time", example: "Dust and debris tend to accumulate in abandoned buildings." },
{ id: "v_adjacent", word: "adjacent", meaning: "next to or adjoining something else", example: "The parking lot is adjacent to the main entrance." },
{ id: "v_advocate", word: "advocate", meaning: "to publicly recommend or support", example: "Environmentalists advocate for stricter carbon laws." },
{ id: "v_aggregate", word: "aggregate", meaning: "a whole formed by combining several separate elements", example: "The aggregate score of the two games was 4-2." },
{ id: "v_albeit", word: "albeit", meaning: "although", example: "He was making progress, albeit very slowly." },
{ id: "v_allocate", word: "allocate", meaning: "to distribute resources for a particular purpose", example: "The government must allocate more funds to education." },
{ id: "v_ambiguity", word: "ambiguity", meaning: "uncertainty or inexactness of meaning", example: "We must avoid ambiguity in legal documents." },
{ id: "v_amend", word: "amend", meaning: "to make minor changes to a text or piece of legislation", example: "The committee voted to amend the policy." },
{ id: "v_analogy", word: "analogy", meaning: "a comparison between one thing and another", example: "The lecturer used an analogy to explain the cell's structure." },
{ id: "v_appalling", word: "appalling", meaning: "causing shock or dismay; horrific", example: "The living conditions in the slums were appalling." },
{ id: "v_arbitrary", word: "arbitrary", meaning: "based on random choice rather than reason", example: "The decision to close the library seemed arbitrary." },
{ id: "v_ascertain", word: "ascertain", meaning: "to find something out for certain", example: "It is difficult to ascertain the exact cause of the crash." },
{ id: "v_attain", word: "attain", meaning: "to succeed in achieving something", example: "Clarissa worked hard to attain her degree." },
{ id: "v_attribute", word: "attribute", meaning: "to regard something as being caused by someone or something", example: "Experts attribute the warming to greenhouse gases." },
{ id: "v_augment", word: "augment", meaning: "to make something greater by adding to it", example: "He took a second job to augment his income." },
{ id: "v_bias", word: "bias", meaning: "prejudice in favor of or against one thing", example: "The researcher was accused of gender bias." },
{ id: "v_breach", word: "breach", meaning: "an act of breaking a law, agreement, or code of conduct", example: "The leak was a major breach of security." },
{ id: "v_capacity", word: "capacity", meaning: "the maximum amount that something can contain", example: "The stadium has a seating capacity of 50,000." },
{ id: "v_chronological", word: "chronological", meaning: "starting with the earliest and following the order in time", example: "The book lists the events in chronological order." },
{ id: "v_circumvent", word: "circumvent", meaning: "to find a way around an obstacle", example: "They tried to circumvent the new tax laws." },
{ id: "v_cite", word: "cite", meaning: "to quote a passage or book as evidence", example: "You must cite your sources in the bibliography." },
{ id: "v_clasp", word: "clasp", meaning: "to grasp something tightly with one's hand", example: "She clasped the handrail as the bus turned." },
{ id: "v_coherent", word: "coherent", meaning: "logical and consistent", example: "The essay lacked a coherent argument." },
{ id: "v_coincide", word: "coincide", meaning: "to occur at or during the same time", example: "The festival will coincide with the national holiday." },
{ id: "v_commodity", word: "commodity", meaning: "a raw material or primary agricultural product", example: "Oil is the world's most traded commodity." },
{ id: "v_compensate", word: "compensate", meaning: "to give someone something, typically money, in recognition of loss", example: "The company will compensate workers for overtime." },
{ id: "v_comprise", word: "comprise", meaning: "to consist of; be made up of", example: "The country comprises twenty separate states." },
{ id: "v_concede", word: "concede", meaning: "to admit that something is true after first denying it", example: "He finally conceded that his theory was flawed." },
{ id: "v_conclusive", word: "conclusive", meaning: "serving to settle an issue; convincing", example: "The DNA results provided conclusive evidence." },
{ id: "v_concur", word: "concur", meaning: "to be of the same opinion; to agree", example: "Most economists concur with this assessment." },
{ id: "v_confine", word: "confine", meaning: "to keep or restrict someone or something within certain limits", example: "Please confine your remarks to the topic." },
{ id: "v_consequently", word: "consequently", meaning: "as a result", example: "She slept late and, consequently, missed her flight." },
{ id: "v_constitute", word: "constitute", meaning: "to be a part of a whole", example: "Single parents constitute a large part of the population." },
{ id: "v_contradict", word: "contradict", meaning: "to deny the truth of a statement by asserting the opposite", example: "The witness's testimony seemed to contradict the facts." },
{ id: "v_controversy", word: "controversy", meaning: "disagreement, typically when prolonged or public", example: "The new design sparked a lot of controversy." },
{ id: "v_convene", word: "convene", meaning: "to come or bring together for a meeting or activity", example: "The committee will convene next Tuesday." },
{ id: "v_counteract", word: "counteract", meaning: "to act against something in order to reduce its force", example: "Exercise can help counteract the effects of stress." },
{ id: "v_crucial", word: "crucial", meaning: "of great importance", example: "Vitamins are crucial for maintaining good health." },
{ id: "v_cumulative", word: "cumulative", meaning: "increasing or increased in quantity by successive additions", example: "The cumulative effect of the rain caused flooding." },
{ id: "v_curtail", word: "curtail", meaning: "to reduce in extent or quantity; to impose a restriction", example: "School activities were curtailed due to budget cuts." },
{ id: "v_decline", word: "decline", meaning: "a gradual and continuous loss of strength, numbers, or quality", example: "There has been a sharp decline in fish stocks." },
{ id: "v_depict", word: "depict", meaning: "to show or represent by a drawing or other art form", example: "The painting depicts a scene from the war." },
{ id: "v_derive", word: "derive", meaning: "to obtain something from a specified source", example: "Many medicines are derived from plants." },
{ id: "v_deteriorate", word: "deteriorate", meaning: "to become progressively worse", example: "The weather began to deteriorate in the afternoon." },
{ id: "v_deviate", word: "deviate", meaning: "to depart from an established course or standard", example: "Do not deviate from the original plan." },
{ id: "v_diffusion", word: "diffusion", meaning: "the spreading of something more widely", example: "The diffusion of ideas occurs faster via the internet." },
{ id: "v_diminish", word: "diminish", meaning: "to make or become less", example: "Our resources will diminish if we don't act now." },
{ id: "v_discrepancy", word: "discrepancy", meaning: "a lack of compatibility or similarity between two or more facts", example: "There was a discrepancy between the two reports." },
{ id: "v_disposable", word: "disposable", meaning: "intended to be used once and then thrown away", example: "Plastic straws are often disposable." },
{ id: "v_disseminate", word: "disseminate", meaning: "to spread or disperse widely", example: "Health authorities disseminate information about vaccines." },
{ id: "v_distort", word: "distort", meaning: "to pull or twist out of shape", example: "The media can sometimes distort the truth." },
{ id: "v_diverse", word: "diverse", meaning: "showing a great deal of variety; very different", example: "The university has a very diverse student body." },
{ id: "v_domestic", word: "domestic", meaning: "relating to the running of a home or a family", example: "Domestic chores are often shared by the family." },
{ id: "v_dominant", word: "dominant", meaning: "most important, powerful, or influential", example: "English is the dominant language of international business." },
{ id: "v_drain", word: "drain", meaning: "to cause liquid to run out; to exhaust resources", example: "High taxes can drain a person's savings." },
{ id: "v_drastic", word: "drastic", meaning: "likely to have a strong or far-reaching effect; extreme", example: "The city took drastic measures to reduce pollution." },
{ id: "v_duration", word: "duration", meaning: "the time during which something continues", example: "The duration of the flight is ten hours." },
{ id: "v_dwell", word: "dwell", meaning: "to live in or at a specified place", example: "Many rare animals dwell in this forest." },
{ id: "v_eliminate", word: "eliminate", meaning: "to completely remove or get rid of", example: "We must eliminate poverty in our society." },
{ id: "v_emerge", word: "emerge", meaning: "to move out of or away from something and become visible", example: "New evidence began to emerge during the trial." },
{ id: "v_emphasize", word: "emphasize", meaning: "to give special importance or prominence to something", example: "I must emphasize the need for punctuality." },
{ id: "v_empirical", word: "empirical", meaning: "based on observation or experience rather than theory", example: "There is no empirical evidence to support his claim." },
{ id: "v_enable", word: "enable", meaning: "to give someone the authority or means to do something", example: "The grant will enable her to finish her research." },
{ id: "v_encounter", word: "encounter", meaning: "to unexpectedly experience or be faced with", example: "We may encounter some resistance to the new plan." },
{ id: "v_enforce", word: "enforce", meaning: "to compel observance of a law, rule, or obligation", example: "The police are here to enforce the law." },
{ id: "v_enhance", word: "enhance", meaning: "to intensify, increase, or further improve the quality of", example: "The new lighting will enhance the room's atmosphere." },
{ id: "v_enormous", word: "enormous", meaning: "very large in size, quantity, or extent", example: "An enormous amount of money was spent on the project." },
{ id: "v_ensure", word: "ensure", meaning: "to make certain that something shall occur or be the case", example: "Please ensure that all windows are closed." },
{ id: "v_entity", word: "entity", meaning: "a thing with distinct and independent existence", example: "Each department is a separate legal entity." },
{ id: "v_equate", word: "equate", meaning: "to consider one thing to be the same as or equivalent to another", example: "You cannot equate wealth with happiness." },
{ id: "v_erode", word: "erode", meaning: "to gradually wear away", example: "The coastline is starting to erode due to storms." },
{ id: "v_erroneous", word: "erroneous", meaning: "wrong; incorrect", example: "The newspaper apologized for the erroneous report." },
{ id: "v_ethical", word: "ethical", meaning: "relating to moral principles", example: "The company has strict ethical standards." },
{ id: "v_evacuate", word: "evacuate", meaning: "to remove from a place of danger to a safe place", example: "Residents were told to evacuate the building." },
{ id: "v_evade", word: "evade", meaning: "to escape or avoid, especially by cleverness", example: "He tried to evade the tax collector." },
{ id: "v_evolve", word: "evolve", meaning: "to develop gradually", example: "Language continues to evolve over time." },
{ id: "v_exceed", word: "exceed", meaning: "to be greater in number or size than a quantity", example: "The cost must not exceed the budget." },
{ id: "v_exclude", word: "exclude", meaning: "to deny someone access to a place or group", example: "The price of the tour excludes lunch." },
{ id: "v_exemplify", word: "exemplify", meaning: "to be a typical example of", example: "His work exemplifies the style of the period." },
{ id: "v_exert", word: "exert", meaning: "to apply or bring to bear a force, influence, or quality", example: "He had to exert all his strength to move the rock." },
{ id: "v_expend", word: "expend", meaning: "to spend or use up a resource such as money or energy", example: "Athletes expend a lot of energy during training." },
{ id: "v_explicit", word: "explicit", meaning: "stated clearly and in detail", example: "The speaker gave explicit instructions." },
{ id: "v_exploit", word: "exploit", meaning: "to make full use of and derive benefit from a resource", example: "We should exploit the potential of solar energy." },
{ id: "v_external", word: "external", meaning: "belonging to or forming the outer surface or structure", example: "The drug is for external use only." },
{ id: "v_extinct", word: "extinct", meaning: "having no living members", example: "The dodo is an extinct bird." },
{ id: "v_extract", word: "extract", meaning: "to remove or take out by effort or force", example: "The dentist had to extract the decayed tooth." },
{ id: "v_facilitate", word: "facilitate", meaning: "to make an action or process easy or easier", example: "Modern technology can facilitate communication." },
{ id: "v_fluctuate", word: "fluctuate", meaning: "to rise and fall irregularly in number or amount", example: "Stock prices tend to fluctuate daily." },
{ id: "v_fundamental", word: "fundamental", meaning: "forming a necessary base or core; of central importance", example: "Freedom of speech is a fundamental right." },
{ id: "v_gauge", word: "gauge", meaning: "to estimate or determine the magnitude or amount of", example: "It is difficult to gauge the success of the project." },
{ id: "v_generate", word: "generate", meaning: "to produce or create", example: "Wind turbines generate electricity." },
{ id: "v_grant", word: "grant", meaning: "to agree to give or allow something requested", example: "The bank decided to grant him a loan." },
{ id: "v_guarantee", word: "guarantee", meaning: "a formal promise or assurance that certain conditions will be fulfilled", example: "The product comes with a two-year guarantee." },
{ id: "v_hierarchy", word: "hierarchy", meaning: "a system in which members are ranked according to status", example: "There is a clear hierarchy within the company." },
{ id: "v_hinder", word: "hinder", meaning: "to create difficulties for someone, resulting in delay", example: "Heavy rain can hinder the rescue efforts." },
{ id: "v_hypothesis", word: "hypothesis", meaning: "a proposed explanation based on limited evidence", example: "The researchers tested their hypothesis with an experiment." },
{ id: "v_identical", word: "identical", meaning: "similar in every detail; exactly alike", example: "The two cars are almost identical." },
{ id: "v_ideology", word: "ideology", meaning: "a system of ideas and ideals", example: "He disagreed with the political ideology of the party." }

],

  irregular: [
  { "id": "i_arise", "base": "arise", "past": "arose", "pp": "arisen"},
  { "id": "i_awake", "base": "awake", "past": "awoke", "pp": "awoken" },
  { "id": "i_be", "base": "be", "past": "was/were", "pp": "been" },
  { "id": "i_bear", "base": "bear", "past": "bore", "pp": "born" },
  { "id": "i_beat", "base": "beat", "past": "beat", "pp": "beaten" },
  { "id": "i_become", "base": "become", "past": "became", "pp": "become" },
  { "id": "i_begin", "base": "begin", "past": "began", "pp": "begun" },
  { "id": "i_bend", "base": "bend", "past": "bent", "pp": "bent" },
  { "id": "i_bet", "base": "bet", "past": "bet", "pp": "bet" },
  { "id": "i_bid", "base": "bid", "past": "bid", "pp": "bid" },
  { "id": "i_bind", "base": "bind", "past": "bound", "pp": "bound" },
  { "id": "i_bite", "base": "bite", "past": "bit", "pp": "bitten" },
  { "id": "i_bleed", "base": "bleed", "past": "bled", "pp": "bled" },
  { "id": "i_blow", "base": "blow", "past": "blew", "pp": "blown" },
  { "id": "i_break", "base": "break", "past": "broke", "pp": "broken" },
  { "id": "i_breed", "base": "breed", "past": "bred", "pp": "bred" },
  { "id": "i_bring", "base": "bring", "past": "brought", "pp": "brought" },
  { "id": "i_broadcast", "base": "broadcast", "past": "broadcast", "pp": "broadcast" },
  { "id": "i_build", "base": "build", "past": "built", "pp": "built" },
  { "id": "i_burn", "base": "burn", "past": "burnt", "pp": "burnt" },
  { "id": "i_burst", "base": "burst", "past": "burst", "pp": "burst" },
  { "id": "i_buy", "base": "buy", "past": "bought", "pp": "bought" },
  { "id": "i_cast", "base": "cast", "past": "cast", "pp": "cast" },
  { "id": "i_catch", "base": "catch", "past": "caught", "pp": "caught" },
  { "id": "i_choose", "base": "choose", "past": "chose", "pp": "chosen" },
  { "id": "i_cling", "base": "cling", "past": "clung", "pp": "clung" },
  { "id": "i_come", "base": "come", "past": "came", "pp": "come" },
  { "id": "i_cost", "base": "cost", "past": "cost", "pp": "cost" },
  { "id": "i_creep", "base": "creep", "past": "crept", "pp": "crept" },
  { "id": "i_cut", "base": "cut", "past": "cut", "pp": "cut" },
  { "id": "i_deal", "base": "deal", "past": "dealt", "pp": "dealt" },
  { "id": "i_dig", "base": "dig", "past": "dug", "pp": "dug" },
  { "id": "i_do", "base": "do", "past": "did", "pp": "done" },
  { "id": "i_draw", "base": "draw", "past": "drew", "pp": "drawn" },
  { "id": "i_dream", "base": "dream", "past": "dreamt", "pp": "dreamt" },
  { "id": "i_drink", "base": "drink", "past": "drank", "pp": "drunk" },
  { "id": "i_drive", "base": "drive", "past": "drove", "pp": "driven" },
  { "id": "i_eat", "base": "eat", "past": "ate", "pp": "eaten" },
  { "id": "i_fall", "base": "fall", "past": "fell", "pp": "fallen" },
  { "id": "i_feed", "base": "feed", "past": "fed", "pp": "fed" },
  { "id": "i_feel", "base": "feel", "past": "felt", "pp": "felt" },
  { "id": "i_fight", "base": "fight", "past": "fought", "pp": "fought" },
  { "id": "i_find", "base": "find", "past": "found", "pp": "found" },
  { "id": "i_flee", "base": "flee", "past": "fled", "pp": "fled" },
  { "id": "i_fling", "base": "fling", "past": "flung", "pp": "flung" },
  { "id": "i_fly", "base": "fly", "past": "flew", "pp": "flown" },
  { "id": "i_forbid", "base": "forbid", "past": "forbad", "pp": "forbidden" },
  { "id": "i_forget", "base": "forget", "past": "forgot", "pp": "forgotten" },
  { "id": "i_forgive", "base": "forgive", "past": "forgave", "pp": "forgiven" },
  { "id": "i_freeze", "base": "freeze", "past": "froze", "pp": "frozen" },
  { "id": "i_get", "base": "get", "past": "got", "pp": "gotten" },
  { "id": "i_give", "base": "give", "past": "gave", "pp": "given" },
  { "id": "i_go", "base": "go", "past": "went", "pp": "gone" },
  { "id": "i_grind", "base": "grind", "past": "ground", "pp": "ground" },
  { "id": "i_grow", "base": "grow", "past": "grew", "pp": "grown" },
  { "id": "i_hang", "base": "hang", "past": "hung", "pp": "hung" },
  { "id": "i_have", "base": "have", "past": "had", "pp": "had" },
  { "id": "i_hear", "base": "hear", "past": "heard", "pp": "heard" },
  { "id": "i_hide", "base": "hide", "past": "hid", "pp": "hidden" },
  { "id": "i_hit", "base": "hit", "past": "hit", "pp": "hit" },
  { "id": "i_hold", "base": "hold", "past": "held", "pp": "held" },
  { "id": "i_hurt", "base": "hurt", "past": "hurt", "pp": "hurt" },
  { "id": "i_keep", "base": "keep", "past": "kept", "pp": "kept" },
  { "id": "i_kneel", "base": "kneel", "past": "knelt", "pp": "knelt" },
  { "id": "i_know", "base": "know", "past": "knew", "pp": "known" },
  { "id": "i_lay", "base": "lay", "past": "laid", "pp": "laid" },
  { "id": "i_lead", "base": "lead", "past": "led", "pp": "led" },
  { "id": "i_lean", "base": "lean", "past": "leant", "pp": "leant" },
  { "id": "i_leap", "base": "leap", "past": "leapt", "pp": "leapt" },
  { "id": "i_learn", "base": "learn", "past": "learnt", "pp": "learnt" },
  { "id": "i_leave", "base": "leave", "past": "left", "pp": "left" },
  { "id": "i_lend", "base": "lend", "past": "lent", "pp": "lent" },
  { "id": "i_let", "base": "let", "past": "let", "pp": "let" },
  { "id": "i_lie", "base": "lie", "past": "lay", "pp": "lain" },
  { "id": "i_light", "base": "light", "past": "lit", "pp": "lit" },
  { "id": "i_lose", "base": "lose", "past": "lost", "pp": "lost" },
  { "id": "i_make", "base": "make", "past": "made", "pp": "made" },
  { "id": "i_mean", "base": "mean", "past": "meant", "pp": "meant" },
  { "id": "i_meet", "base": "meet", "past": "met", "pp": "met" },
  { "id": "i_mow", "base": "mow", "past": "mowed", "pp": "mown" },
  { "id": "i_pay", "base": "pay", "past": "paid", "pp": "paid" },
  { "id": "i_put", "base": "put", "past": "put", "pp": "put" },
  { "id": "i_quit", "base": "quit", "past": "quit", "pp": "quit" },
  { "id": "i_read", "base": "read", "past": "read", "pp": "read" },
  { "id": "i_ride", "base": "ride", "past": "rode", "pp": "ridden" },
  { "id": "i_ring", "base": "ring", "past": "rang", "pp": "rung" },
  { "id": "i_rise", "base": "rise", "past": "rose", "pp": "risen" },
  { "id": "i_run", "base": "run", "past": "ran", "pp": "run" },
  { "id": "i_say", "base": "say", "past": "said", "pp": "said" },
  { "id": "i_see", "base": "see", "past": "saw", "pp": "seen" },
  { "id": "i_sell", "base": "sell", "past": "sold", "pp": "sold" },
  { "id": "i_send", "base": "send", "past": "sent", "pp": "sent" },
  { "id": "i_set", "base": "set", "past": "set", "pp": "set" },
  { "id": "i_shake", "base": "shake", "past": "shook", "pp": "shaken" },
  { "id": "i_shed", "base": "shed", "past": "shed", "pp": "shed" },
  { "id": "i_shine", "base": "shine", "past": "shone", "pp": "shone" },
  { "id": "i_shoot", "base": "shoot", "past": "shot", "pp": "shot" },
  { "id": "i_show", "base": "show", "past": "showed", "pp": "shown" },
  { "id": "i_shrink", "base": "shrink", "past": "shrank", "pp": "shrunk" },
  { "id": "i_shut", "base": "shut", "past": "shut", "pp": "shut" },
  { "id": "i_sing", "base": "sing", "past": "sang", "pp": "sung" },
  { "id": "i_sink", "base": "sink", "past": "sank", "pp": "sunk" },
  { "id": "i_sit", "base": "sit", "past": "sat", "pp": "sat" },
  { "id": "i_sleep", "base": "sleep", "past": "slept", "pp": "slept" },
  { "id": "i_slide", "base": "slide", "past": "slid", "pp": "slid" },
  { "id": "i_smell", "base": "smell", "past": "smelt", "pp": "smelt" },
  { "id": "i_speak", "base": "speak", "past": "spoke", "pp": "spoken" },
  { "id": "i_speed", "base": "speed", "past": "sped", "pp": "sped" },
  { "id": "i_spell", "base": "spell", "past": "spelt", "pp": "spelt" },
  { "id": "i_spend", "base": "spend", "past": "spent", "pp": "spent" },
  { "id": "i_spill", "base": "spill", "past": "spilt", "pp": "spilt" },
  { "id": "i_spin", "base": "spin", "past": "spun", "pp": "spun" },
  { "id": "i_spit", "base": "spit", "past": "spat", "pp": "spat" },
  { "id": "i_split", "base": "split", "past": "split", "pp": "split" },
  { "id": "i_spoil", "base": "spoil", "past": "spoilt", "pp": "spoilt" },
  { "id": "i_spread", "base": "spread", "past": "spread", "pp": "spread" },
  { "id": "i_spring", "base": "spring", "past": "sprang", "pp": "sprung" },
  { "id": "i_stand", "base": "stand", "past": "stood", "pp": "stood" },
  { "id": "i_steal", "base": "steal", "past": "stole", "pp": "stolen" },
  { "id": "i_stick", "base": "stick", "past": "stuck", "pp": "stuck" },
  { "id": "i_sting", "base": "sting", "past": "stung", "pp": "stung" },
  { "id": "i_stink", "base": "stink", "past": "stank", "pp": "stunk" },
  { "id": "i_strike", "base": "strike", "past": "struck", "pp": "struck" },
  { "id": "i_sweep", "base": "sweep", "past": "swept", "pp": "swept" },
  { "id": "i_swim", "base": "swim", "past": "swam", "pp": "swum" },
  { "id": "i_swing", "base": "swing", "past": "swung", "pp": "swung" },
  { "id": "i_take", "base": "take", "past": "took", "pp": "taken" },
  { "id": "i_teach", "base": "teach", "past": "taught", "pp": "taught" },
  { "id": "i_tear", "base": "tear", "past": "tore", "pp": "torn" },
  { "id": "i_tell", "base": "tell", "past": "told", "pp": "told" },
  { "id": "i_think", "base": "think", "past": "thought", "pp": "thought" },
  { "id": "i_throw", "base": "throw", "past": "threw", "pp": "thrown" },
  { "id": "i_understand", "base": "understand", "past": "understood", "pp": "understood" },
  { "id": "i_wake", "base": "wake", "past": "woke", "pp": "woken" },
  { "id": "i_wear", "base": "wear", "past": "wore", "pp": "worn" },
  { "id": "i_win", "base": "win", "past": "won", "pp": "won" },
  { "id": "i_write", "base": "write", "past": "wrote", "pp": "written" }
  ],

  grammarRules: [
   
  { 
    "title": "Present Simple", 
    "text": "Usage: For permanent states, general truths, and habits. Structure: [S + V1(s/es)]. Neg: [S + do/does not + V1]. Ques: [Do/Does + S + V1?]. Key Words: Always, usually, every day, often. Example: 'He studies physics.' / 'Does he study physics?'" 
  },
  { 
    "title": "Present Continuous", 
    "text": "Usage: Actions happening right now, temporary situations, or annoying habits with 'always'. Structure: [S + am/is/are + V-ing]. Neg: [S + am/is/are not + V-ing]. Ques: [Am/Is/Are + S + V-ing?]. Key Words: Now, at the moment, currently. Example: 'I am working on the report.' / 'Are you working?'" 
  },
  { 
    "title": "Present Perfect", 
    "text": "Usage: Actions that happened at an unspecified time, or past actions with a result in the present. Structure: [S + have/has + V3]. Neg: [S + have/has not + V3]. Ques: [Have/Has + S + V3?]. Key Words: Just, already, yet, ever, never, since, for. Example: 'I have lost my keys (so I can't enter now).'" 
  },
  { 
    "title": "Present Perfect Continuous", 
    "text": "Usage: To emphasize the duration of an action that started in the past and is still continuing. Structure: [S + have/has + been + V-ing]. Neg: [S + have/has not + been + V-ing]. Ques: [Have/Has + S + been + V-ing?]. Key Words: For, since, all day, lately. Example: 'She has been waiting for two hours.'" 
  }
  ,{ 
    "title": "Past Simple", 
    "text": "Usage: Completed actions at a specific time in the past. Structure: [S + V2/V-ed]. Neg: [S + did not + V1]. Ques: [Did + S + V1?]. Key Words: Yesterday, ago, last week, in 1999. Example: 'They visited London in 2010.' / 'Did they visit London?'" 
  },
  { 
    "title": "Past Continuous", 
    "text": "Usage: Actions in progress at a specific past moment or interrupted actions. Structure: [S + was/were + V-ing]. Neg: [S + was/were not + V-ing]. Ques: [Was/Were + S + V-ing?]. Key Words: While, when, at that time. Example: 'I was sleeping when the phone rang.'" 
  },
  { 
    "title": "Past Perfect", 
    "text": "Usage: The 'past of the past'—an action completed before another past action. Structure: [S + had + V3]. Neg: [S + had not + V3]. Ques: [Had + S + V3?]. Key Words: Before, after, by the time. Example: 'The train had left before I reached the station.'" 
  },
  { 
    "title": "Past Perfect Continuous", 
    "text": "Usage: An ongoing action in the past that continued up until another past point. Structure: [S + had + been + V-ing]. Neg: [S + had not + been + V-ing]. Ques: [Had + S + been + V-ing?]. Key Words: For, since, before. Example: 'He had been driving for six hours before he stopped for a break.'" 
  }
  ,{ 
    "title": "Future Simple", 
    "text": "Usage: Predictions, promises, spontaneous decisions, or future facts. Structure: [S + will + V1]. Neg: [S + will not (won't) + V1]. Ques: [Will + S + V1?]. Key Words: Tomorrow, next year, probably, soon. Example: 'It will rain tomorrow.' / 'I will help you with that.'" 
  },
  { 
    "title": "Future Continuous", 
    "text": "Usage: Actions that will be in progress at a specific time in the future. Structure: [S + will be + V-ing]. Neg: [S + will not be + V-ing]. Ques: [Will + S + be + V-ing?]. Key Words: At this time tomorrow, in five years. Example: 'At 10 PM tonight, I will be flying to Tokyo.'" 
  },
  { 
    "title": "Future Perfect", 
    "text": "Usage: Actions that will be completed by a specific future deadline. Structure: [S + will have + V3]. Neg: [S + will not have + V3]. Ques: [Will + S + have + V3?]. Key Words: By, by the time, in two months. Example: 'I will have finished my degree by June.'" 
  },
  { 
    "title": "Future Perfect Continuous", 
    "text": "Usage: Shows the duration of a continuous action up to a specific future point. Structure: [S + will have been + V-ing]. Neg: [S + will not have been + V-ing]. Ques: [Will + S + have been + V-ing?]. Key Words: By... for..., by next year. Example: 'By 5 PM, I will have been working for nine hours straight.'" 
  }
  ,{ 
    "title": "Past Future Simple", 
    "text": "Usage: Future actions viewed from a past perspective or reported speech. Structure: [S + would + V1]. Neg: [S + would not + V1]. Ques: [Would + S + V1?]. Key Words: Said that, thought that. Example: 'She said she would call me.' / 'I knew they would win.'" 
  },
  { 
    "title": "Past Future Continuous", 
    "text": "Usage: An action that was expected to be in progress at a certain point in the past future. Structure: [S + would be + V-ing]. Neg: [S + would not be + V-ing]. Ques: [Would + S + be + V-ing?]. Example: 'He told me he would be waiting at the airport.'" 
  },
  { 
    "title": "Past Future Perfect", 
    "text": "Usage: Hypothetical finished actions (often in 3rd conditionals) or past expectations. Structure: [S + would have + V3]. Neg: [S + would not have + V3]. Ques: [Would + S + have + V3?]. Example: 'If I had known, I would have helped you.'" 
  },
  { 
    "title": "Past Future Perfect Continuous", 
    "text": "Usage: Hypothetical duration of an action that would have been happening. Structure: [S + would have been + V-ing]. Neg: [S + would not have been + V-ing]. Ques: [Would + S + have been + V-ing?]. Example: 'I would have been working there for ten years if I hadn't quit.'" 
  }
  ],

  grammarQuestions: [
    { q: "If I ___ enough time, I will finish the project.", choices: ["have","had","will have","having"], answer: 0, ruleHint: "1st conditional: If + present, will + verb." },
    { q: "She ___ to school every day.", choices: ["go","goes","going","gone"], answer: 1, ruleHint: "Present Simple: he/she/it + -s/-es." },
    { q: "They ___ the movie last night.", choices: ["watch","watched","have watched","watching"], answer: 1, ruleHint: "Past Simple for finished time." },
    { q: "I have lived here ___ 2020.", choices: ["for","since","from","during"], answer: 1, ruleHint: "Since + point in time." },
    { q: "There isn’t ___ milk left.", choices: ["many","much","few","some"], answer: 1, ruleHint: "Much for uncountable." },
    { q: "If I ___ you, I would apologize.", choices: ["am","was","were","be"], answer: 2, ruleHint: "2nd conditional uses were." },
    { q: "She’s interested ___ learning Spanish.", choices: ["on","in","at","for"], answer: 1, ruleHint: "Interested in + noun/gerund." },
    { q: "Neither of the answers ___ correct.", choices: ["are","is","were","be"], answer: 1, ruleHint: "Neither = singular (formal)." },
{ q: "She ___ to work by bus every day.", choices: ["go","goes","going","gone"], answer: 1, ruleHint: "Present Simple: Subject + verb(s) for 3rd person singular." },
{ q: "The sun ___ in the east.", choices: ["rise","rises","is rising","risen"], answer: 1, ruleHint: "Present Simple: Used for universal facts." },
{ q: "I ___ usually drink coffee in the evening.", choices: ["not","doesn't","don't","am not"], answer: 2, ruleHint: "Present Simple Negative: Do/Does + not + base verb." },
{ q: "___ they live in this neighborhood?", choices: ["Do","Does","Are","Have"], answer: 0, ruleHint: "Present Simple Question: Do/Does + subject + base verb." },
{ q: "The flight ___ at 10:00 AM tomorrow.", choices: ["leave","leaves","leaving","will left"], answer: 1, ruleHint: "Present Simple: Used for fixed schedules/timetables." },
{ q: "He ___ a very talented musician.", choices: ["be","am","is","are"], answer: 2, ruleHint: "Present Simple: 'To be' conjugation for 'he'." },
{ q: "Look! It ___ outside right now.", choices: ["snows","is snowing","snowed","is snow"], answer: 1, ruleHint: "Present Continuous: am/is/are + verb-ing for current actions." },
{ q: "We ___ a new project this week.", choices: ["start","starts","are starting","starting"], answer: 2, ruleHint: "Present Continuous: Used for temporary situations." },
{ q: "Why ___ you wearing a coat indoors?", choices: ["do","is","are","have"], answer: 2, ruleHint: "Present Continuous Question: Am/Is/Are + subject + verb-ing." },
{ q: "I ___ meeting my boss at 3 PM.", choices: ["am","is","are","be"], answer: 0, ruleHint: "Present Continuous: Used for definite future arrangements." },
{ q: "They ___ watching the game at the moment.", choices: ["isn't","don't","aren't","not"], answer: 2, ruleHint: "Present Continuous Negative: Am/Is/Are + not + verb-ing." },
{ q: "Listen! The birds .", choices: ["sing","sings","are singing","sang"], answer: 2, ruleHint: "Present Continuous: Action happening at the time of speaking." },
{ q: "I ___ my keys. I can't find them anywhere.", choices: ["lose","lost","have lost","has lost"], answer: 2, ruleHint: "Present Perfect: have/has + past participle for recent actions with present results." },
{ q: "She ___ to Japan several times.", choices: ["was","has been","is","have been"], answer: 1, ruleHint: "Present Perfect: Experience in the past without a specific time." },
{ q: " you ever eaten snails?", choices: ["Did","Do","Have","Has"], answer: 2, ruleHint: "Present Perfect Question: Have/Has + subject + past participle." },
{ q: "We ___ not finished the report yet.", choices: ["have","has","did","do"], answer: 0, ruleHint: "Present Perfect: Used with 'yet' in negatives." },
{ q: "He ___ just finished his lunch.", choices: ["have","is","has","was"], answer: 2, ruleHint: "Present Perfect: Used with 'just' for very recent actions." },
{ q: "They ___ lived here since 2010.", choices: ["have","has","were","are"], answer: 0, ruleHint: "Present Perfect: Action starting in past and continuing to now." },
{ q: "I ___ for you for over an hour!", choices: ["wait","have waited","have been waiting","am waiting"], answer: 2, ruleHint: "Present Perfect Continuous: have/has been + verb-ing for duration up to now." },
{ q: "It ___ all morning and the ground is soaked.", choices: ["is raining","was raining","has been raining","rained"], answer: 2, ruleHint: "Present Perfect Continuous: Past action with visible present effect." },
{ q: "How long ___ she been studying French?", choices: ["do","is","has","have"], answer: 2, ruleHint: "Present Perfect Continuous Question: Have/Has + subject + been + verb-ing." },
{ q: "They ___ been working on that car all day.", choices: ["has","have","are","were"], answer: 1, ruleHint: "Present Perfect Continuous: Ongoing action with emphasis on duration." },
{ q: "I'm tired because I ___ running.", choices: ["am","was","have been","had been"], answer: 2, ruleHint: "Present Perfect Continuous: Recent continuous activity." },
{ q: "He ___ been feeling well lately.", choices: ["hasn't","haven't","isn't","doesn't"], answer: 0, ruleHint: "Present Perfect Continuous Negative." },
{ q: "I ___ to the cinema last night.", choices: ["go","went","gone","was going"], answer: 1, ruleHint: "Past Simple: Completed action at a specific past time." },
{ q: "They ___ a new house two years ago.", choices: ["buy","bought","buying","have bought"], answer: 1, ruleHint: "Past Simple: Finished past action with 'ago'." },
{ q: "___ you see that car accident yesterday?", choices: ["Do","Did","Have","Was"], answer: 1, ruleHint: "Past Simple Question: Did + subject + base verb." },
{ q: "She ___ not answer my call yesterday.", choices: ["did","does","was","has"], answer: 0, ruleHint: "Past Simple Negative: Did + not + base verb." },
{ q: "When ___ you finish your degree?", choices: ["do","did","have","were"], answer: 1, ruleHint: "Past Simple: Asking about a completed past time." },
{ q: "We ___ very happy to see you last week.", choices: ["are","was","were","be"], answer: 2, ruleHint: "Past Simple: 'To be' past plural form." },
{ q: "I ___ a book when the lights went out.", choices: ["read","reads","was reading","were reading"], answer: 2, ruleHint: "Past Continuous: was/were + verb-ing for interrupted action." },
{ q: "What ___ they doing at 10 PM last night?", choices: ["did","was","were","are"], answer: 2, ruleHint: "Past Continuous Question: Was/Were + subject + verb-ing." },
{ q: "She ___ playing the piano while I was cooking.", choices: ["was","were","is","did"], answer: 0, ruleHint: "Past Continuous: Parallel actions in the past." },
{ q: "They ___ not paying attention during the lecture.", choices: ["did","was","were","are"], answer: 2, ruleHint: "Past Continuous Negative." },
{ q: "The phone rang while I ___ a shower.", choices: ["took","was taking","am taking","had taken"], answer: 1, ruleHint: "Past Continuous: Action in progress at a specific past moment." },
{ q: "It ___ raining when we left the house.", choices: ["is","was","were","did"], answer: 1, ruleHint: "Past Continuous: Background state in the past." },
{ q: "The movie ___ already started when we arrived.", choices: ["has","have","had","was"], answer: 2, ruleHint: "Past Perfect: had + past participle (action before another past action)." },
{ q: "I realized I ___ my phone at the cafe.", choices: ["leave","left","had left","have left"], answer: 2, ruleHint: "Past Perfect: Action completed before the moment of realization." },
{ q: "___ she finished the test before the bell rang?", choices: ["Had","Has","Did","Was"], answer: 0, ruleHint: "Past Perfect Question: Had + subject + past participle." },
{ q: "They ___ not seen each other for years before they met again.", choices: ["have","had","did","were"], answer: 1, ruleHint: "Past Perfect Negative." },
{ q: "If I ___ known you were coming, I would have baked a cake.", choices: ["have","had","did","would"], answer: 1, ruleHint: "3rd Conditional: If + Past Perfect." },
{ q: "By the time I reached the station, the train .", choices: ["left","had left","has left","was left"], answer: 1, ruleHint: "Past Perfect: Action before a past point in time." },
{ q: "I ___ for two hours when he finally showed up.", choices: ["had been waiting","was waiting","have been waiting","waited"], answer: 0, ruleHint: "Past Perfect Continuous: had been + verb-ing (duration before a past point)." },
{ q: "She was out of breath because she .", choices: ["runs","has been running","had been running","was running"], answer: 2, ruleHint: "Past Perfect Continuous: Cause of a past state." },
{ q: "How long ___ they been living there before they moved?", choices: ["had","have","did","were"], answer: 0, ruleHint: "Past Perfect Continuous Question." },
{ q: "The road was muddy because it ___ for days.", choices: ["had been raining","rained","is raining","has been raining"], answer: 0, ruleHint: "Past Perfect Continuous: Ongoing past action before another past event." },
{ q: "He ___ been studying all night, so he was exhausted.", choices: ["has","had","was","did"], answer: 1, ruleHint: "Past Perfect Continuous: Past duration with a past result." },
{ q: "They ___ not been talking to each other for a month.", choices: ["had","have","were","did"], answer: 0, ruleHint: "Past Perfect Continuous Negative." },
{ q: "I ___ help you with those bags.", choices: ["will","shall","going to","am"], answer: 0, ruleHint: "Future Simple: 'will' for spontaneous offers." },
{ q: "It ___ probably rain tomorrow.", choices: ["is","will","shall","was"], answer: 1, ruleHint: "Future Simple: Prediction based on opinion." },
{ q: " you open the window, please?", choices: ["Will","Do","Are","Shall"], answer: 0, ruleHint: "Future Simple Question: Polite request." },
{ q: "I ___ not forget your birthday.", choices: ["will","won't","am not","don't"], answer: 1, ruleHint: "Future Simple Negative: won't + base verb." },
{ q: "Scientists ___ find a cure for the disease one day.", choices: ["will","is","going to","shall"], answer: 0, ruleHint: "Future Simple: General prediction." },
{ q: "If you study hard, you ___ pass the exam.", choices: ["will","shall","are","would"], answer: 0, ruleHint: "1st Conditional: Will + verb." },
{ q: "This time next week, I ___ on a beach.", choices: ["will sit","am sitting","will be sitting","will been sitting"], answer: 2, ruleHint: "Future Continuous: will be + verb-ing for future progress." },
{ q: "They ___ be sleeping when we arrive.", choices: ["will","shall","are","will have"], answer: 0, ruleHint: "Future Continuous: Action in progress at a future point." },
{ q: " you be using the printer this afternoon?", choices: ["Will","Shall","Are","Do"], answer: 0, ruleHint: "Future Continuous Question: Inquiring about future plans." },
{ q: "I ___ not be working on Sunday.", choices: ["will","won't","don't","am not"], answer: 1, ruleHint: "Future Continuous Negative." },
{ q: "Will you ___ seeing her later?", choices: ["be","been","is","being"], answer: 0, ruleHint: "Future Continuous: Question structure." },
{ q: "At 8 PM, we ___ having dinner.", choices: ["will","are","will be","going to"], answer: 2, ruleHint: "Future Continuous: Action in progress at a specific future time." },
{ q: "I ___ finished this book by the end of the day.", choices: ["will","will have","will be","have"], answer: 1, ruleHint: "Future Perfect: will have + past participle (completed before future point)." },
{ q: "She ___ graduated by next June.", choices: ["will","will have","has","will been"], answer: 1, ruleHint: "Future Perfect: Completion by a certain future time." },
{ q: "___ you have retired by the age of 60?", choices: ["Will","Shall","Do","Have"], answer: 0, ruleHint: "Future Perfect Question." },
{ q: "The construction ___ not have finished by next month.", choices: ["will","won't","haven't","don't"], answer: 1, ruleHint: "Future Perfect Negative." },
{ q: "By next year, they ___ been married for 50 years.", choices: ["will","will have","have","am"], answer: 1, ruleHint: "Future Perfect: State completed by a future date." },
{ q: "Will he ___ completed the task by then?", choices: ["have","has","be","been"], answer: 0, ruleHint: "Future Perfect Question structure." },
{ q: "By midnight, I ___ been studying for six hours.", choices: ["will have","will","will have been","have been"], answer: 2, ruleHint: "Future Perfect Continuous: will have been + verb-ing (duration up to future point)." },
{ q: "She ___ have been working here for 5 years this July.", choices: ["will","shall","is","would"], answer: 0, ruleHint: "Future Perfect Continuous: Emphasis on duration in the future." },
{ q: "How long ___ you have been driving by the time we arrive?", choices: ["will","shall","do","have"], answer: 0, ruleHint: "Future Perfect Continuous Question." },
{ q: "They ___ not have been living here for long by next week.", choices: ["will","have","are","be"], answer: 0, ruleHint: "Future Perfect Continuous Negative." },
{ q: "In an hour, I ___ have been waiting for two hours.", choices: ["will","shall","would","am"], answer: 0, ruleHint: "Future Perfect Continuous: Duration until a future time." },
{ q: "By the end of this tour, we ___ have been traveling for a month.", choices: ["will","shall","do","have"], answer: 0, ruleHint: "Future Perfect Continuous." },
{ q: "I knew he ___ succeed.", choices: ["will","would","is","was"], answer: 1, ruleHint: "Future in the Past: would + base verb (past prediction)." },
{ q: "She promised she ___ call me as soon as she arrived.", choices: ["will","would","shall","is going to"], answer: 1, ruleHint: "Future in the Past: Reported promise." },
{ q: "I thought it ___ be a sunny day.", choices: ["will","would","is","was"], answer: 1, ruleHint: "Future in the Past: Past expectation." },
{ q: "We ___ not go unless they invited us.", choices: ["will","would","shall","did"], answer: 1, ruleHint: "2nd Conditional: would + base verb." },
{ q: "___ they help us if we asked them?", choices: ["Would","Will","Did","Do"], answer: 0, ruleHint: "Future in the Past Question (Hypothetical)." },
{ q: "I ___ not be happy if I failed.", choices: ["will","would","won't","shall"], answer: 1, ruleHint: "2nd Conditional: result clause." },
{ q: "He said he ___ meet us at the station.", choices: ["will","would","won't","shall"], answer: 1, ruleHint: "Future in the Past: Reported speech." },
{ q: "I knew that at this time, I ___ be flying to Paris.", choices: ["will","would","was","am"], answer: 1, ruleHint: "Future in the Past Continuous: would be + verb-ing." },
{ q: "She said she ___ be working late that night.", choices: ["will","would","was","is"], answer: 1, ruleHint: "Future in the Past Continuous: Reported future progress." },
{ q: "I thought they ___ be having a party.", choices: ["will","would","are","were"], answer: 1, ruleHint: "Future in the Past Continuous: Past assumption of progress." },
{ q: "___ you be staying with us? (asked my mother yesterday)", choices: ["Would","Will","Did","Do"], answer: 0, ruleHint: "Future in the Past Continuous Question." },
{ q: "He said he ___ not be attending the seminar.", choices: ["would","will","was","is"], answer: 0, ruleHint: "Future in the Past Continuous Negative." },
{ q: "I suspected the weather ___ be getting worse.", choices: ["will","would","was","is"], answer: 1, ruleHint: "Future in the Past Continuous." },
{ q: "They promised they ___ be helping us with the move.", choices: ["will","would","shall","are"], answer: 1, ruleHint: "Future in the Past Continuous." },
{ q: "I thought I ___ have finished the work by then.", choices: ["will","would","had","have"], answer: 1, ruleHint: "Future in the Past Perfect: would have + past participle." },
{ q: "She said she ___ have arrived before the show started.", choices: ["will","would","had","has"], answer: 1, ruleHint: "Future in the Past Perfect: Reported future completion." },
{ q: "If you had told me, I ___ have helped you.", choices: ["will","would","shall","had"], answer: 1, ruleHint: "3rd Conditional: would have + past participle." },
{ q: "I knew that by 6 PM, they ___ have left the office.", choices: ["will","would","had","have"], answer: 1, ruleHint: "Future in the Past Perfect." },
{ q: "___ you have finished the race if you hadn't tripped?", choices: ["Would","Will","Had","Did"], answer: 0, ruleHint: "Future in the Past Perfect Question." },
{ q: "He ___ not have known the answer without the book.", choices: ["will","would","shall","had"], answer: 1, ruleHint: "Future in the Past Perfect Negative." },
{ q: "I assumed the report ___ have been submitted by Friday.", choices: ["will","would","had","was"], answer: 1, ruleHint: "Future in the Past Perfect." },
{ q: "I knew she ___ have been waiting for a long time.", choices: ["will","would","had","is"], answer: 1, ruleHint: "Future in the Past Perfect Continuous: would have been + verb-ing." },
{ q: "He said he ___ have been living there for a decade by 2022.", choices: ["will","would","had","has"], answer: 1, ruleHint: "Future in the Past Perfect Continuous: Reported duration." },
{ q: "I thought they ___ have been traveling for months by the time we met.", choices: ["will","would","had","are"], answer: 1, ruleHint: "Future in the Past Perfect Continuous." },
{ q: "___ she have been studying all day before the exam?", choices: ["Would","Will","Had","Did"], answer: 0, ruleHint: "Future in the Past Perfect Continuous Question." },
{ q: "If he hadn't quit, he ___ have been working here for years.", choices: ["will","would","had","shall"], answer: 1, ruleHint: "Future in the Past Perfect Continuous." },
{ q: "I suspected he ___ have been hiding the truth the whole time.", choices: ["will","would","had","is"], answer: 1, ruleHint: "Future in the Past Perfect Continuous." },
{ q: "They ___ not have been expecting us so soon.", choices: ["will","would","shall","had"], answer: 1, ruleHint: "Future in the Past Perfect Continuous Negative." }
  ],
};

/* ---------- i18n (minimal) ---------- */
const I18N = {
  en: { Home:"Home", Reading:"Reading", Listening:"Listening", Vocab:"Vocab", Grammar:"Grammar", Settings:"Settings", Guest:"Guest", LoggedIn:(u)=>`Logged in: ${u}` },
  ru: { Home:"Главная", Reading:"Чтение", Listening:"Аудирование", Vocab:"Слова", Grammar:"Грамматика", Settings:"Настройки", Guest:"Гость", LoggedIn:(u)=>`Вход: ${u}` },
  uz: { Home:"Bosh sahifa", Reading:"Reading", Listening:"Listening", Vocab:"Lug‘at", Grammar:"Grammatika", Settings:"Sozlamalar", Guest:"Mehmon", LoggedIn:(u)=>`Kirdi: ${u}` },
};

/* ---------- Storage ---------- */
const LS_KEY = "engtest_data_clean_v1";
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function todayKey(){
  const d=new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function seedFromString(str){
  let h=2166136261;
  for(let i=0;i<str.length;i++){
    h^=str.charCodeAt(i);
    h=Math.imul(h,16777619);
  }
  return h>>>0;
}
function mulberry32(seed){
  return function(){
    let t=(seed+=0x6D2B79F5);
    t=Math.imul(t^(t>>>15),t|1);
    t^=t+Math.imul(t^(t>>>7),t|61);
    return ((t^(t>>>14))>>>0)/4294967296;
  };
}
function shuffleWithSeed(arr, seedStr){
  const seed=seedFromString(seedStr);
  const rand=mulberry32(seed);
  const copy=[...arr];
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(rand()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}

function defaultData(){
  return {
    settings:{ lang:"en", sound:true, dark:false, createdBy: CONTENT.createdBy },
profile:{ name:"Student", avatarDataUrl:"", sticker:"⭐" },
    auth:{ currentUser:null },
    users:[],
    progress:{}, // by date
    fav_vocab_ids:[], // favorites by ID
    fav_irregular_ids:[]
  };
}
let DATA = loadData();

// Pagination state
let vocabPage = 1;
let irrPage = 1;
let grammarPage = 1;

const PAGE_SIZE_VOCAB = 15;
const PAGE_SIZE_GRAMMAR = 5;

function loadData(){
  try{
    const raw=localStorage.getItem(LS_KEY);
    if(!raw) return defaultData();
    const parsed=JSON.parse(raw);
    return { ...defaultData(), ...parsed,
      settings:{...defaultData().settings, ...(parsed.settings||{})},
      profile:{...defaultData().profile, ...(parsed.profile||{})},
      auth:{...defaultData().auth, ...(parsed.auth||{})},
      progress:{...(parsed.progress||{})},
      users:Array.isArray(parsed.users)?parsed.users:[],
      fav_vocab_ids:Array.isArray(parsed.fav_vocab_ids)?parsed.fav_vocab_ids:[],
      fav_irregular_ids:Array.isArray(parsed.fav_irregular_ids)?parsed.fav_irregular_ids:[]
    };
  }catch{
    return defaultData();
  }
}
function saveData(){ localStorage.setItem(LS_KEY, JSON.stringify(DATA)); }

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")
    .replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

/* ---------- Favorites ---------- */
function getFavSet(key){ return new Set(DATA[key] || []); }
function toggleFav(key, id){
  const set=getFavSet(key);
  if(set.has(id)) set.delete(id); else set.add(id);
  DATA[key]=Array.from(set);
  saveData();
}

/* ---------- Views ---------- */
function t(key){
  const lang=DATA.settings.lang || "en";
  const pack=I18N[lang] || I18N.en;
  return pack[key] ?? I18N.en[key] ?? key;
}
function showView(view){
  const titles={ home:t("Home"), reading:t("Reading"), listening:t("Listening"), vocab:t("Vocab"), grammar:t("Grammar"), settings:t("Settings") };
  $("#pageTitle").textContent = titles[view] || "Home";
  $$(".view").forEach(v=>v.classList.add("hidden"));
  const target = $(`#view-${view}`);
  if(target) target.classList.remove("hidden");
}

/* ---------- Clock ---------- */
function startClock(){
  const update = () => {
    const d = new Date();

    // Force local time formatting reliably
    const hh = String((d.getHours() % 12) || 12).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    const ap = d.getHours() >= 12 ? "PM" : "AM";
    $("#clock").textContent = `${hh}:${mm}:${ss} ${ap}`;


    // Date (local)
    $("#clockDate").textContent = d.toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit"
    });
  };

  update();
  setInterval(update, 1000);
}


/* ---------- Home ---------- */
function renderDailyHome(){
  const day=todayKey();

  // recommended test
  const allTests=[
    ...CONTENT.readingTests.map(x=>({...x,type:"Reading"})),
    ...CONTENT.listeningTests.map(x=>({...x,type:"Listening"})),
  ];
  const dailyOrder = shuffleWithSeed(allTests, `rec-${day}`);
  let cursor = 0;

  const applyRec=()=>{
    const pick=dailyOrder[cursor % dailyOrder.length];
    $("#recommendedTitle").textContent = `${pick.type}: ${pick.title}`;
    $("#recommendedSub").textContent = pick.href;
    $("#recommendedLink").href = pick.href;
  };
  applyRec();
  $("#reshuffleBtn").onclick=()=>{ cursor++; applyRec(); };

  // daily 3 vocab
  const dailyVocab = shuffleWithSeed(CONTENT.vocab, `vocab-${day}`).slice(0,3);
  const list=$("#dailyVocabList");
  list.innerHTML="";
  dailyVocab.forEach(v=>{
    const item=document.createElement("div");
    item.className="listItem";
    item.innerHTML=`<b>${escapeHtml(v.word)}</b> — ${escapeHtml(v.meaning)}
      ${v.example ? `<div class="muted smallText">Example: ${escapeHtml(v.example)}</div>` : ""}`;
    list.appendChild(item);
  });

  // daily grammar rule
  const rulePick = shuffleWithSeed(CONTENT.grammarRules, `rule-${day}`)[0];
  $("#dailyRule").innerHTML = `<div style="font-weight:1000">${escapeHtml(rulePick.title)}</div><div style="margin-top:8px">${escapeHtml(rulePick.text)}</div>`;
}

/* ---------- Tracker ---------- */
function initTracker(){
  const day=todayKey();
  if(!DATA.progress[day]){
    DATA.progress[day]={doneVocab:false,doneGrammar:false,doneReading:false,doneListening:false};
    saveData();
  }
  const map=[["doneVocab","#doneVocab"],["doneGrammar","#doneGrammar"],["doneReading","#doneReading"],["doneListening","#doneListening"]];
  map.forEach(([k,sel])=>{
    const el=$(sel);
    if(!el) return;
    el.checked=!!DATA.progress[day][k];
    el.onchange=()=>{ DATA.progress[day][k]=el.checked; saveData(); renderProgress(); };
  });
  renderProgress();
}
function renderProgress(){
  const day=todayKey();
  const p=DATA.progress[day] || {};
  const done=["doneVocab","doneGrammar","doneReading","doneListening"].reduce((a,k)=>a+(p[k]?1:0),0);
  $("#progressFill").style.width = `${Math.round((done/4)*100)}%`;
  $("#progressText").textContent = `${done}/4 completed`;
}

/* ---------- Tests ---------- */
function renderTestLinks(){
  const r=$("#readingLinks");
  const l=$("#listeningLinks");
  r.innerHTML=""; l.innerHTML="";

  function card(test){
    const div=document.createElement("div");
    div.className="linkCard";
    div.innerHTML=`
      <div class="title">${escapeHtml(test.title)}</div>
      <div class="sub">${escapeHtml(test.href)}</div>
      <a class="btn ghost" href="${test.href}" target="_blank" rel="noopener">Open</a>
    `;
    return div;
  }

  CONTENT.readingTests.forEach(x=>r.appendChild(card(x)));
  CONTENT.listeningTests.forEach(x=>l.appendChild(card(x)));
}

/* ---------- Vocab (locked by default) ---------- */
function initVocab(){
  const search=$("#vocabSearch");
  const favOnly=$("#onlyFavorites");
  if(search) search.addEventListener("input", renderVocabTables);
  if(favOnly) favOnly.addEventListener("change", renderVocabTables);
  renderVocabTables();
}

function renderVocabTables(){
  const raw = ($("#vocabSearch")?.value || "").toLowerCase().trim();
  const tokens = raw ? raw.split(/\s+/).filter(Boolean) : [];
  const onlyFav = $("#onlyFavorites")?.checked || false;

  const matchAll = (text) => tokens.every(t => text.includes(t));

  const favV = getFavSet("fav_vocab_ids");
  const favI = getFavSet("fav_irregular_ids");

  /* -------- VOCAB -------- */
  let vocab = CONTENT.vocab.map(v=>({ ...v, fav: favV.has(v.id) }));

  if(tokens.length){
    vocab = vocab.filter(v=>{
      const blob = `${v.word} ${v.meaning} ${v.example||""}`.toLowerCase();
      return matchAll(blob);
    });
  }

  if(onlyFav) vocab = vocab.filter(v=>v.fav);

  const vTotalPages = Math.max(1, Math.ceil(vocab.length / PAGE_SIZE_VOCAB));
  vocabPage = Math.min(vocabPage, vTotalPages);

  const vStart = (vocabPage - 1) * PAGE_SIZE_VOCAB;
  const vSlice = vocab.slice(vStart, vStart + PAGE_SIZE_VOCAB);

  const vWrap = $("#vocabList");
  vWrap.innerHTML = "";

  vSlice.forEach(v=>vWrap.appendChild(vocabRow(v)));

  addPager(vWrap, vocabPage, vTotalPages, (p)=>{
    vocabPage = p;
    renderVocabTables();
  });


  /* -------- IRREGULAR -------- */
  let irr = CONTENT.irregular.map(v=>({ ...v, fav: favI.has(v.id) }));

  if(tokens.length){
    irr = irr.filter(v=>{
      const blob = `${v.base} ${v.past} ${v.pp}`.toLowerCase();
      return matchAll(blob);
    });
  }

  if(onlyFav) irr = irr.filter(v=>v.fav);

  const iTotalPages = Math.max(1, Math.ceil(irr.length / PAGE_SIZE_VOCAB));
  irrPage = Math.min(irrPage, iTotalPages);

  const iStart = (irrPage - 1) * PAGE_SIZE_VOCAB;
  const iSlice = irr.slice(iStart, iStart + PAGE_SIZE_VOCAB);

  const iWrap = $("#irregularList");
  iWrap.innerHTML = "";

  iSlice.forEach(v=>iWrap.appendChild(irregularRow(v)));

  addPager(iWrap, irrPage, iTotalPages, (p)=>{
    irrPage = p;
    renderVocabTables();
  });
}
function vocabRow(v){
  const row = document.createElement("div");
  row.className = "tableRow";
  row.innerHTML = `
    <div class="left">
      <div><b>${escapeHtml(v.word)}</b> — ${escapeHtml(v.meaning)}</div>
      ${v.example ? `<div class="muted smallText">Example: ${escapeHtml(v.example)}</div>` : ""}
    </div>
    <div class="right">
      <button class="btn small ghost" title="Favorite">${v.fav ? "★" : "☆"}</button>
    </div>
  `;
  row.querySelector("button").onclick = () => {
    toggleFav("fav_vocab_ids", v.id);
    renderVocabTables();
  };
  return row;
}

function irregularRow(v){
  const row = document.createElement("div");
  row.className = "tableRow";
  row.innerHTML = `
    <div class="left">
      <div><b>${escapeHtml(v.base)}</b> — ${escapeHtml(v.past)}</b> — ${escapeHtml(v.pp)}</div>
      <div class="muted smallText">Base • Past • Past Participle</div>
    </div>
    <div class="right">
      <button class="btn small ghost" title="Favorite">${v.fav ? "★" : "☆"}</button>
    </div>
  `;
  row.querySelector("button").onclick = () => {
    toggleFav("fav_irregular_ids", v.id);
    renderVocabTables();
  };
  return row;
}

/* ---------- Grammar ---------- */
function initGrammar(){
  renderGrammarRules();
  renderDailyQuiz();

  $("#gradeQuizBtn").onclick = gradeQuiz;
  $("#resetQuizBtn").onclick = () => {
    renderDailyQuiz();
    $("#quizResult").classList.add("hidden");
  };
}
function renderGrammarRules(){
  const wrap = $("#grammarRules");
  wrap.innerHTML = "";

  const totalPages = Math.max(
    1,
    Math.ceil(CONTENT.grammarRules.length / PAGE_SIZE_GRAMMAR)
  );

  grammarPage = Math.min(grammarPage, totalPages);

  const start = (grammarPage - 1) * PAGE_SIZE_GRAMMAR;
  const slice = CONTENT.grammarRules.slice(start, start + PAGE_SIZE_GRAMMAR);

  slice.forEach(r=>{
    const div = document.createElement("div");
    div.className = "ruleBox";
    div.innerHTML = `
      <div style="font-weight:1000">${escapeHtml(r.title)}</div>
      <div style="margin-top:8px">${escapeHtml(r.text)}</div>
    `;
    wrap.appendChild(div);
  });

  addPager(wrap, grammarPage, totalPages, (p)=>{
    grammarPage = p;
    renderGrammarRules();
  });
}

function renderDailyQuiz(){
  const day=todayKey();
  const picked=shuffleWithSeed(CONTENT.grammarQuestions, `quiz-${day}`).slice(0,5);

  const form=$("#dailyGrammarForm");
  form.innerHTML="";
  picked.forEach((item, idx)=>{
    const q=document.createElement("div");
    q.className="q";
    q.innerHTML=`
      <div class="qTitle">${idx+1}) ${escapeHtml(item.q)}</div>
      ${item.choices.map((c,i)=>`
        <label class="choice">
          <input type="radio" name="q_${idx}" value="${i}">
          <span>${escapeHtml(c)}</span>
        </label>
      `).join("")}
      <div class="muted smallText">Hint: ${escapeHtml(item.ruleHint || "")}</div>
    `;
    form.appendChild(q);
  });
  form.dataset.quiz = JSON.stringify(picked);
}

function gradeQuiz(){
  const form=$("#dailyGrammarForm");
  const picked=JSON.parse(form.dataset.quiz || "[]");
  let correct=0;

  picked.forEach((item, idx)=>{
    const chosen=form.querySelector(`input[name="q_${idx}"]:checked`);
    const val=chosen ? Number(chosen.value) : -1;
    if(val===item.answer) correct++;
  });

  const box=$("#quizResult");
  box.classList.remove("hidden");
  box.textContent = `Score: ${correct}/5`;

  // mark tracker grammar done
  const day=todayKey();
  if(!DATA.progress[day]) DATA.progress[day]={doneVocab:false,doneGrammar:false,doneReading:false,doneListening:false};
  DATA.progress[day].doneGrammar = true;
  saveData();
  if($("#doneGrammar")) $("#doneGrammar").checked=true;
  renderProgress();
}

/* ---------- Settings ---------- */
function initSettings(){
  $("#createdByName").textContent = DATA.settings.createdBy || CONTENT.createdBy;
  $("#langSelect").value = DATA.settings.lang || "en";
  $("#langSelect").onchange=(e)=>{
    DATA.settings.lang=e.target.value;
    saveData();
    const active=$(".navItem.active")?.dataset.view || "home";
    showView(active);
    updateAuthUI();
  };

  $("#soundToggle").checked = !!DATA.settings.sound;
  $("#soundToggle").onchange=(e)=>{ DATA.settings.sound=!!e.target.checked; saveData(); };

  // Dark mode (works no matter where the toggle is)
document.body.classList.toggle("dark", !!DATA.settings.dark);

const darkToggle = $("#darkToggle");
if (darkToggle) {
  darkToggle.checked = !!DATA.settings.dark;
  darkToggle.onchange = (e) => {
    DATA.settings.dark = !!e.target.checked;
    saveData();
    document.body.classList.toggle("dark", !!DATA.settings.dark);
  };
}
else {
  // If you forgot the HTML toggle, still apply saved value
  document.body.classList.toggle("dark", !!DATA.settings.dark);
}

  $("#exportBtn").onclick=()=>{
    const blob=new Blob([JSON.stringify(DATA,null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;
    a.download=`engtest-export-${todayKey()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  $("#importFile").onchange=async(e)=>{
    const f=e.target.files?.[0];
    if(!f) return;
    try{
      const txt=await f.text();
      const imported=JSON.parse(txt);
      localStorage.setItem(LS_KEY, JSON.stringify({ ...defaultData(), ...imported }));
      location.reload();
    }catch{
      alert("Import failed. Please use a JSON export from this site.");
    }
  };

  $("#resetAllBtn").onclick=()=>{
    if(!confirm("Reset everything?")) return;
    localStorage.removeItem(LS_KEY);
    location.reload();
  };
}

/* ---------- Auth (optional local) ---------- */
function initAuth(){
  $("#openLoginBtn").onclick=()=>openAuthModal("login");
  $("#openSignupBtn").onclick=()=>openAuthModal("signup");
  $("#closeAuthModal").onclick=closeAuthModal;

  $("#authModal").onclick=(e)=>{ if(e.target.id==="authModal") closeAuthModal(); };

  $$(".tab").forEach(tab=>{
    tab.onclick=()=>{
      $$(".tab").forEach(t=>t.classList.remove("active"));
      tab.classList.add("active");
      const which=tab.dataset.tab;
      $("#tab-login").classList.toggle("hidden", which!=="login");
      $("#tab-signup").classList.toggle("hidden", which!=="signup");
      $("#authMsg").classList.add("hidden");
    };
  });

  $("#signupForm").onsubmit=(e)=>{
    e.preventDefault();
    const u=$("#signupUser").value.trim();
    const p=$("#signupPass").value;
    if(!u||!p) return;
    if(DATA.users.some(x=>x.username.toLowerCase()===u.toLowerCase())){
      authMessage("Username already exists.", true); return;
    }
    DATA.users.push({username:u, pass:p});
    DATA.auth.currentUser={username:u};
    saveData();
    authMessage("Account created. Logged in.", false);
    updateAuthUI();
    setTimeout(closeAuthModal, 500);
  };

  $("#loginForm").onsubmit=(e)=>{
    e.preventDefault();
    const u=$("#loginUser").value.trim();
    const p=$("#loginPass").value;
    const found=DATA.users.find(x=>x.username.toLowerCase()===u.toLowerCase() && x.pass===p);
    if(!found){ authMessage("Wrong username or password.", true); return; }
    DATA.auth.currentUser={username:found.username};
    saveData();
    authMessage("Logged in.", false);
    updateAuthUI();
    setTimeout(closeAuthModal, 500);
  };

  $("#logoutBtn").onclick=()=>{
    DATA.auth.currentUser=null;
    saveData();
    updateAuthUI();
  };

  updateAuthUI();
}

function updateAuthUI(){
  const user=DATA.auth.currentUser?.username || null;
  if(!user){
    $("#authStatus").textContent = t("Guest");
    $("#authGuest").classList.remove("hidden");
    $("#authUser").classList.add("hidden");
  }else{
    const pack=I18N[DATA.settings.lang] || I18N.en;
    $("#authStatus").textContent = pack.LoggedIn ? pack.LoggedIn(user) : `Logged in: ${user}`;
    $("#authGuest").classList.add("hidden");
    $("#authUser").classList.remove("hidden");
  }
}
function openAuthModal(tab){
  $("#authModal").classList.remove("hidden");
  const btn=$(`.tab[data-tab="${tab}"]`);
  if(btn) btn.click();
}
function closeAuthModal(){ $("#authModal").classList.add("hidden"); }
function authMessage(msg,isError){
  const box=$("#authMsg");
  box.classList.remove("hidden");
  box.textContent=msg;
  box.style.borderColor = isError ? "rgba(214,31,42,0.45)" : "rgba(0,0,0,0.12)";
}

/* ---------- Profile + stickers ---------- */
const STICKERS=["⭐","🔥","👑","📚","💪","🎯","🧠","⚡","🦅","🏆","🧩","🛡️"];

function initStickers(){
  const row=$("#stickerRow");
  row.innerHTML="";
  STICKERS.forEach(s=>{
    const b=document.createElement("button");
    b.type="button";
    b.className="stickerBtn" + (DATA.profile.sticker===s ? " active" : "");
    b.textContent=s;
    b.onclick=()=>{
      DATA.profile.sticker=s;
      saveData();
      $$(".stickerBtn").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      renderProfile();
    };
    row.appendChild(b);
  });
}

function renderProfile(){
  $("#profileName").value = DATA.profile.name || "Student";
  $("#profileSticker").textContent = DATA.profile.sticker || "⭐";
  const avatar=$("#profileAvatar");
  if(DATA.profile.avatarDataUrl){
    avatar.src=DATA.profile.avatarDataUrl;
  }else{
    const initials=(DATA.profile.name || "S").trim().slice(0,1).toUpperCase();
    avatar.src = makeInitialAvatar(initials);
  }
}
function makeInitialAvatar(letter){
  const svg=`
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#ffd1d4"/>
    </linearGradient></defs>
    <rect width="200" height="200" rx="36" fill="url(#g)"/>
    <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
      font-family="Arial" font-size="96" font-weight="900" fill="#0b0b0f">${escapeHtml(letter)}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg.trim());
}
function initProfile(){
  const upload = document.querySelector("#avatarUpload");
if (upload) {
  upload.onchange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;

    if (!f.type.startsWith("image/")) {
      alert("Please select an image file.");
      upload.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      DATA.profile.avatarDataUrl = String(reader.result || "");
      saveData();
      renderProfile();
    };
    reader.readAsDataURL(f);
  };
}

  renderProfile();
  $("#saveProfileBtn").onclick=()=>{
    DATA.profile.name = ($("#profileName").value || "Student").trim();
    saveData();
    renderProfile();
  };
  
  $("#clearAvatarBtn").onclick=()=>{
    DATA.profile.avatarDataUrl="";
    saveData();
    renderProfile();
  };
}

/* ---------- Init ---------- */
function init(){
  document.body.classList.toggle("dark", !!DATA.settings.dark);
  
  $("#yearNow").textContent = new Date().getFullYear();
  $("#createdByName").textContent = DATA.settings.createdBy || CONTENT.createdBy;

  // nav buttons
  $$(".navItem").forEach(btn=>{
    btn.onclick=()=>{
      $$(".navItem").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      showView(btn.dataset.view);
    };
  });

  startClock();
  initStickers();
  initProfile();
  initAuth();
  initSettings();

  renderTestLinks();
  renderDailyHome();
  initTracker();
  initVocab();
  initGrammar();

  showView("home");
}

init();
function addPager(container, page, total, onChange){
  if(total <= 1) return;

  const nav = document.createElement("div");
  nav.className = "pager";

  nav.innerHTML = `
    <button class="btn small ghost" ${page===1?"disabled":""}>Prev</button>
    <span class="pagerText">${page} / ${total}</span>
    <button class="btn small ghost" ${page===total?"disabled":""}>Next</button>
  `;

  const [prev, , next] = nav.children;

  prev.onclick = ()=> page>1 && onChange(page-1);
  next.onclick = ()=> page<total && onChange(page+1);

  container.appendChild(nav);
}
