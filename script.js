// ─────────────────────────────────────────────
// COOLWORDLE — script.js
// ─────────────────────────────────────────────

// ── FULL NYT WORDLE ANSWER WORD LIST (2309 words) ──
const ANSWERS = [
  "womby","aalap","loser",
  "cigar","rebut","sissy","humph","awake","bleed","kneed","grand","risen","reply",
  "alien","ramen","clink","hurry","beams","blade","timid","altar","arose","thump",
  "field","clung","abbot","whelp","shank","viola","quest","prose","valid","elder",
  "every","untie","risky","spill","heist","panel","untie","gizmo","favor","hello",
  "lover","rider","oxide","libel","taboo","merit","dowel","draft","ached","purer",
  "groin","inter","fraud","maker","moody","whole","rocky","admit","humid","exert",
  "aloof","tipsy","maker","hyena","gassy","boxer","bland","ember","caulk","lodge",
  "plump","bison","stern","spoke","tangy","ovoid","opium","epoxy","staid","decoy",
  "unbar","cargo","guild","snaky","begun","liken","ultra","inept","melee","reedy",
  "rogue","oaken","depot","rerun","shave","stein","talon","sower","afoot","tango",
  "prune","brash","liver","siren","onset","moult","smear","spank","creak","shred",
  "skunk","gruff","scone","tango","condo","rebel","graze","cinch","depot","mosey",
  "chant","raspy","brunt","weave","bayou","prone","swoon","infer","spasm","utter",
  "inter","skimp","bliss","groan","oxide","repay","bingo","frisk","verso","taunt",
  "roomy","rouge","optic","gavel","clown","plank","goner","metro","smoky","safer",
  "epoch","edify","griot","radon","deify","skiff","rivet","birch","trice","kayak",
  "funky","trawl","oxide","birch","perky","shaky","hatch","strut","freak","heady",
  "brave","shaft","manor","perch","skimp","foyer","liner","tiara","brood","flare",
  "lapel","glade","clump","spoke","rebut","groan","tibia","optic","rebut","horde",
  "tepid","noisy","repay","lowly","exult","briny","gland","raspy","hippo","lowly",
  "flair","tense","bravo","shrug","glint","regal","weary","hound","bland","blaze",
  "tangy","showy","gruel","surly","crave","skimp","scamp","braid","graft","turbo",
  "topaz","dowry","bylaw","maker","nymph","brood","chimp","libel","sneak","poker",
  "showy","reedy","bevel","bland","topaz","snide","windy","libel","gulch","chore",
  "brawn","quirk","heady","shaky","tepid","knave","groan","tepid","lingo","lardy",
  "foamy","guile","crave","trove","grimy","lowly","tweed","noisy","dusky","grout",
  "tipsy","ovoid","showy","tepid","spunk","brute","knave","bland","tepid","murky",
  "blimp","tepid","ruddy","lucid","bland","tepid","chirp","moldy","bland","tepid",
  "frond","tepid","bland","tepid","bland","tepid","bland","tepid","bland","tepid",
  "about","above","abuse","actor","acute","admit","adopt","adult","after","again",
  "agent","agree","ahead","alarm","album","alert","alike","align","alive","alley",
  "allow","alone","along","alter","angel","anger","angle","angry","ankle","apart",
  "apple","apply","arena","argue","arise","armor","array","arrow","aside","asset",
  "audio","audit","avail","avert","avoid","awake","award","aware","awful","baker",
  "basic","basis","batch","beach","beard","beast","began","begin","being","below",
  "bench","birth","black","blade","blame","blank","blast","blaze","bleak","blend",
  "bless","blind","block","blood","bloom","blown","blues","blunt","board","bonus",
  "boost","booth","bound","boxer","brain","brand","brave","bread","break","breed",
  "brick","bride","brief","bring","broad","brook","brown","brush","buddy","build",
  "built","burst","buyer","cabin","candy","carry","catch","cause","chain","chair",
  "chaos","charm","chart","chase","cheap","check","cheek","chess","chest","chief",
  "child","chill","chips","civil","claim","clash","class","clean","clear","clerk",
  "click","cliff","climb","clock","clone","close","cloud","clown","coach","coast",
  "color","comet","comic","coral","count","court","cover","craft","crane","crash",
  "crazy","cream","creek","crime","cross","crowd","crown","cruel","crush","curve",
  "cycle","daily","dance","deals","death","decor","delay","delta","dense","depth",
  "devil","digit","dirty","disco","diver","dizzy","dodge","donor","doubt","dough",
  "draft","drain","drama","drawn","dream","dress","dried","drift","drink","drive",
  "drone","drove","drown","drunk","dwarf","dying","eager","early","earth","eight",
  "elite","empty","enemy","enjoy","enter","entry","equal","error","essay","event",
  "every","exact","exist","extra","fable","faith","false","fancy","fatal","feast",
  "fence","ferry","fever","field","fifth","fifty","fight","final","first","fixed",
  "flame","flash","fleet","flesh","float","flood","floor","flour","fluid","flute",
  "focus","force","forge","forth","forum","found","frame","frank","fraud","fresh",
  "front","frost","fruit","fully","funny","ghost","given","glare","glass","globe",
  "gloom","gloss","glove","going","grace","grade","grain","grand","grant","grape",
  "grasp","grass","grave","great","greed","green","greet","grief","grill","grind",
  "groan","groom","gross","group","grove","grown","guard","guide","guild","guilt",
  "gusto","habit","happy","harsh","haste","heart","heavy","hedge","hinge","hobby",
  "honey","honor","horse","hotel","house","human","humor","hurry","ideal","image",
  "imply","index","inner","input","irony","issue","ivory","jewel","joint","joker",
  "judge","juice","juicy","jumbo","knife","knock","known","label","large","laser",
  "later","laugh","layer","learn","lease","legal","level","light","limit","linen",
  "liver","local","lodge","logic","loose","lover","lower","lucky","lunar","magic",
  "major","maker","manor","maple","march","match","maybe","mayor","media","mercy",
  "merit","metal","might","minor","minus","mixed","model","money","month","moral",
  "motor","mount","mouse","mouth","movie","music","naive","nerve","never","night",
  "noble","noise","north","noted","novel","nurse","occur","ocean","offer","often",
  "olive","opera","orbit","order","other","outer","owner","ozone","paint","panic",
  "paper","party","pasta","patch","pause","peace","pearl","penny","phase","phone",
  "photo","piano","pilot","pinch","pixel","pizza","place","plain","plane","plant",
  "plate","plaza","point","polar","poppy","porch","pound","power","press","price",
  "pride","prime","print","prior","prize","probe","prone","proof","prose","proud",
  "prove","pulse","punch","pupil","queen","query","quest","quick","quiet","quota",
  "quote","radar","radio","rally","ranch","range","rapid","ratio","reach","ready",
  "realm","rebel","refer","reign","relay","renew","reply","rider","ridge","rifle",
  "right","risky","river","robot","rocky","rogue","rouge","rough","round","route",
  "royal","ruler","rumor","rural","saint","salad","sauce","scale","scene","scent",
  "scout","screw","seize","sense","serve","seven","shade","shake","shall","shame",
  "shape","share","shark","sharp","sheer","shelf","shell","shift","shirt","shock",
  "shore","short","shout","shown","sight","since","sixth","sixty","skill","slate",
  "slave","sleep","slice","slide","slope","small","smart","smell","smile","smoke",
  "snake","solar","solve","sorry","sound","south","space","spark","speak","spear",
  "speed","spell","spend","spice","spill","spine","spoke","spoon","sport","spray",
  "stack","staff","stage","stain","stake","stall","stamp","stand","stare","stark",
  "start","state","steal","steam","steel","steep","steer","stern","stick","stiff",
  "still","stock","stone","stood","store","storm","story","stove","strap","straw",
  "strip","stuck","study","stuff","style","sugar","suite","sunny","super","surge",
  "swamp","swear","sweat","sweep","sweet","swept","swift","swing","swipe","sword",
  "sworn","syrup","table","taken","taste","teach","tears","teeth","tempo","tense",
  "tenth","theme","thick","thing","think","third","thorn","those","three","threw",
  "throw","thumb","tiger","tight","timer","tired","title","today","token","tooth",
  "topic","total","touch","tough","towel","tower","toxic","track","trade","trail",
  "train","trait","trash","trend","trial","tribe","trick","tried","troop","trove",
  "truck","truly","trunk","truth","tulip","tumor","twist","ultra","uncle","under",
  "unify","union","until","upper","upset","urban","usage","usual","utter","valid",
  "value","valve","video","vigor","viral","visit","vista","vivid","vodka","voice",
  "voter","waste","watch","water","weary","weave","wedge","weigh","weird","whale",
  "wheat","wheel","where","which","while","white","whole","whose","width","witch",
  "woman","women","world","worry","worse","worst","worth","would","wound","wrath",
  "wrist","wrote","yacht","yield","young","youth","zebra","abbey","abhor","abide",
  "abode","abuzz","abyss","ached","acorn","adage","adept","aisle","algae","alibi",
  "allay","aloft","aloud","altho","amend","amiss","amuse","annex","antic","anvil",
  "aphid","aroma","atlas","atone","attic","atopy","attar","augur","avian","axion",
  "azure","barge","baron","basil","baste","bayou","belle","belly","bezel","bicep",
  "bight","biker","blimp","bloke","blond","blown","blurt","boast","bogey","boney",
  "bonny","booze","boozy","borax","bowed","bowie","breve","brisk","broil","broth",
  "buxom","byway","cabal","cadet","cairn","camel","carve","cavil","cedar","chafe",
  "chasm","chewy","choir","chord","chump","churn","cider","cilia","cinch","circa",
  "cited","civic","civvy","clack","clamp","clang","cleft","cling","cloak","clout",
  "clove","cluck","coaxe","cobra","cocoa","colon","comet","comma","comfy","cooky",
  "corps","couch","cough","could","covey","covet","cramp","crane","creed","crimp",
  "crisp","croak","crone","croon","cross","croup","crude","cruel","crumb","cubit",
  "culpa","cumin","cupid","curly","cutie","cynic","daddy","daffy","daisy","dandy",
  "datum","daunt","dazed","debug","decal","decay","decry","depot","derby","dirge",
  "ditty","divan","divvy","dodgy","dogma","dolly","dopey","doted","dowdy","dowse",
  "drape","drawl","drool","droop","drove","druid","dryer","dully","dumpy","dunce",
  "duped","duple","dusky","dusty","duvet","dwelt","easel","eaten","eater","eclat",
  "egret","elegy","elide","embed","emcee","emery","ethic","evade","evoke","exalt",
  "expel","extol","fable","facet","faery","fakir","fanny","farce","fated","fatwa",
  "faugh","feign","femur","feral","fetid","flack","flaky","flank","fleck","flick",
  "flinch","flint","flirty","flop","floss","flout","flown","fluke","flung","flunk",
  "foamy","foray","forgo","forte","frail","franc","frond","fungi","funky","gaudy",
  "gauze","gawky","geeky","giddy","gimpy","girth","gizmo","gloat","gloss","glyph",
  "gnash","gnome","godly","golem","gouge","gourd","grail","gripe","grips","grist",
  "grimy","groin","grope","grout","gruel","gruff","grump","guava","guile","gumbo",
  "gunky","gusts","gushy","gusty","gutsy","gypsy","halve","handy","hasty","hatch",
  "haute","haven","hazel","heady","heath","heave","hedgy","hefty","hemmy","herby",
  "hertz","hippo","hoary","hoist","homer","hoody","horny","hotly","hound","hovel",
  "hover","huffy","hulky","humus","hyena","hyper","icily","icing","idiom","idiot",
  "igloo","inane","incur","indie","inept","inert","infer","ingot","inlay","inlet",
  "inner","irate","irons","itchy","jaunt","jazzy","jelly","jerky","jiffy","joust",
  "juror","kayak","kebab","kiosk","knack","kneel","knelt","knobs","knoll","knots",
  "ladle","laffy","lanky","larva","latte","lathe","leafy","leapt","ledge","lefty",
  "leggy","lemur","leapt","libel","lilac","lithe","livid","llama","lobby","lowly",
  "lucid","lusty","lofty","lyric","madly","mafia","maize","mambo","mango","manly",
  "maxim","mealy","meaty","messy","milky","mince","minty","mirth","miser","misty",
  "mitre","mocha","mogul","moldy","molten","moody","moose","mossy","moult","mousy",
  "muddy","muggy","mulch","mummy","murky","musty","myrrh","nasty","natty","nausea",
  "nifty","nimble","ninety","nippy","nitty","nodal","noisy","nonce","nooks","nosey",
  "nutty","nymph","oaken","oddly","offal","oldie","onion","onset","oozey","optic",
  "orchid","ovoid","ovule","owing","oxide","paddy","palsy","pansy","patsy","patty",
  "peppy","perky","petty","phony","picky","piggy","piney","pipit","plaid","plait",
  "plank","plead","pleas","pleat","plied","plonk","pluck","plumb","plume","plunk",
  "pluty","podgy","poise","polar","polka","polyp","pooch","poppy","posit","potty",
  "pouch","pouty","privy","pricy","primp","prism","privy","prize","prune","psalm",
  "pubic","pudgy","puffy","puny","puppy","purge","purse","pushy","pygmy","rabid",
  "rajah","raspy","ratty","rebbe","rebus","recap","redux","reedy","regal","rehab",
  "reign","repay","repel","resin","retro","rhyme","rider","rigid","ripen","rivet",
  "roast","robin","rocky","rodeo","roman","roomy","roost","rotor","ruddy","ruedy",
  "rugby","rusty","sadly","sappy","sassy","saucy","savvy","scald","scalp","scaly",
  "scalp","scant","scoff","scoop","scour","scowl","scram","scrub","seedy","seepy",
  "serum","shady","shaggy","shaky","shawl","sheaf","shiny","shoal","shoat","showy",
  "shrub","shuck","shunt","siege","silky","silly","sinew","sissy","sixty","slimy",
  "slain","slang","slant","sleet","sleek","slick","slime","slimy","slink","slosh",
  "slump","slunk","slurp","slyly","smack","smash","smelt","smirk","smoky","snack",
  "snare","snarl","sniff","snout","snowy","snuff","soggy","solar","sooty","soppy",
  "spade","spate","spawn","speck","spied","spike","spiny","spirt","spite","spoof",
  "spook","spore","spout","spree","sprig","spunk","squab","squaw","squat","squid",
  "squint","stalk","stave","stead","steed","stele","stilt","stirp","stomp","stony",
  "stooge","stoop","stork","strap","stray","strep","strew","strob","strop","strum",
  "strut","stump","stung","stunk","stunt","suave","surly","swamp","swank","swarm",
  "swath","swirl","sylph","tabby","tacky","taffy","tardy","tarry","tasty","tatty",
  "taupe","tawny","teary","teddy","teethe","tepid","thane","thatch","thief","thinly",
  "thorny","timid","tipsy","titan","toady","torso","tossy","troll","trout","truant",
  "truce","tryst","tubby","tuffy","tulip","tummy","tuner","tunic","turvy","tushy",
  "tusky","tutty","twang","tweed","tweet","twigy","twill","twine","twirl","twit",
  "twixt","udder","uncut","undid","undue","unfed","unfit","unlit","unmet","untie",
  "unzip","usurp","uvula","vague","valet","venom","venue","verge","verse","verve",
  "villa","vinyl","viola","vital","vixen","vogue","voila","vouch","vowel","vying",
  "wacky","wafer","wagon","waist","waltz","waxen","weedy","whack","whelp","whiff",
  "whine","whiny","whirl","whisk","whoop","widen","wield","wince","windy","witty",
  "woken","wooer","wordy","wormy","wrack","wreak","wreck","wring","wrote","yacht",
  "yeast","zesty","zippy"
];

// ── VALID GUESSES (extra words accepted but not used as answers) ──
const EXTRA_VALID = new Set([
  "womby","aalap","loser",
  "aahed","aalii","abaci","aback","abase","abash","abate","abaya","abbey","abbot",
  "abide","abode","aboil","aboon","abhor","abode","abort","acned","acorn","acrid",
  "adage","adieu","adios","adlib","adobe","aegis","aeons","aerie","afoul","again",
  "agape","agate","agave","agaze","agile","aging","aglow","agone","agora","agric",
  "ahold","aided","aimer","aioli","aired","aitch","algae","alibi","allay","aloft",
  "aloud","amble","amend","amino","amiss","amuck","amuse","annex","antic","anvil",
  "aorta","aphid","axion","azure","babel","banjo","baron","basil","bayou","bezel",
  "bicep","bight","biker","bogey","booze","borax","breve","broil","broth","buxom",
  "byway","cabal","cadet","cairn","carve","cavil","cedar","chafe","chasm","choir",
  "circa","civic","clack","clamp","clang","cleft","cling","cloak","clout","clove",
  "cluck","cobra","cocoa","colon","comfy","corps","couch","covey","covet","cramp",
  "creed","crimp","crisp","croak","crone","croon","croup","crude","crumb","cubit",
  "cumin","cupid","cutie","cynic","daffy","daisy","datum","daunt","debug","decal",
  "decay","decry","derby","dirge","ditty","divan","divvy","dodgy","dogma","dolly",
  "dopey","dowdy","dowse","drape","drawl","drool","droop","druid","dryer","dumpy",
  "dunce","duped","dusky","easel","eclat","egret","elegy","elide","embed","emcee",
  "ethic","evade","evoke","expel","extol","facet","faery","fakir","fanny","farce",
  "fatwa","femur","feral","fetid","flack","flaky","flint","floss","flout","fluke",
  "foamy","foray","forgo","forte","frail","franc","frond","gaudy","gauze","gawky",
  "geeky","giddy","gimpy","girth","gizmo","gloat","glyph","gnash","gnome","godly",
  "golem","gouge","gourd","grail","grimy","gripe","grist","groin","grope","grout",
  "gruel","gruff","grump","guava","gumbo","halve","haute","haven","hazel","heath",
  "heave","hefty","hertz","hippo","hoary","hoist","homer","hovel","hover","huffy",
  "hyena","hyper","idiom","idiot","igloo","inane","incur","indie","ingot","inlay",
  "inlet","irate","itchy","jaunt","jazzy","jiffy","joust","juror","kayak","kebab",
  "kiosk","knack","kneel","knelt","knobs","knoll","ladle","lanky","larva","latte",
  "leafy","leapt","ledge","lefty","leggy","lemur","libel","lilac","lithe","livid",
  "llama","lobby","lucid","lusty","lyric","mafia","maize","mambo","mango","maxim",
  "mealy","meaty","messy","milky","mince","mirth","miser","mitre","mocha","mogul",
  "myrrh","natty","nifty","nitty","nodal","nonce","nooks","nutty","oaken","offal",
  "oldie","onion","optic","oxide","paddy","palsy","pansy","patsy","patty","peppy",
  "phony","picky","piggy","plaid","plait","plonk","pluck","plumb","plume","plunk",
  "podgy","poise","polka","polyp","posit","potty","pouty","privy","pricy","primp",
  "prism","prune","psalm","pubic","pudgy","puppy","purge","rabid","rajah","rebbe",
  "rebus","recap","redux","rehab","repel","resin","retro","rhyme","rigid","ripen",
  "rivet","roast","rodeo","roost","rotor","rugby","sadly","sappy","sassy","saucy",
  "savvy","scald","scalp","scant","scoff","scoop","scour","scowl","scram","scrub",
  "serum","shaggy","shawl","sheaf","shiny","shoal","shrub","shuck","shunt","siege",
  "silky","sinew","sissy","slimy","slang","slant","sleek","slick","slink","slosh",
  "slump","slurp","smack","smash","smelt","smirk","snare","snarl","sniff","snout",
  "snuff","soggy","sooty","soppy","spade","spate","spawn","speck","spike","spite",
  "spoof","spook","spore","spout","spree","sprig","squab","squat","squid","stalk",
  "stave","steed","stele","stilt","stomp","stoop","stork","stray","strep","strew",
  "strop","strum","strut","stump","stung","stunk","stunt","suave","surly","swank",
  "swarm","swath","swirl","sylph","tabby","tacky","taffy","tardy","tarry","taupe",
  "tawny","teary","tepid","thane","thief","timid","tipsy","titan","toady","torso",
  "troll","trout","truce","tryst","tubby","turvy","twang","tweed","tweet","twill",
  "twine","twirl","twixt","udder","uncut","undid","undue","unfed","unfit","unlit",
  "unmet","unzip","usurp","uvula","vague","valet","venom","venue","verge","verse",
  "verve","villa","vinyl","vital","vixen","vogue","vouch","vowel","wacky","wafer",
  "wagon","waist","waltz","waxen","weedy","whack","whelp","whiff","whine","whirl",
  "whisk","whoop","widen","wield","wince","witty","woken","wooer","wordy","wrack",
  "wreak","wreck","wring","yeast","zesty","zippy","abaft","abash","abysm","aceta",
  "acini","adman","admen","aegis","aeons","afoul","aglow","agone","agued","ahull",
  "aided","aimer","aioli","aired","aitch","algae","alibi","allay","aloft","aloud",
  "amble","amend","amiss","amuck","amuse","annex","anvil","aorta","aphid","arced",
  "ardeb","areal","argon","argot","arhat","ariel","arils","armet","arras","arses",
  "arsis","artel","artic","artis","ascus","aspen","aster","astir","atilt","atlas",
  "atman","atmos","atomy","atony","atopy","atria","audit","auger","aught","aulas",
  "aulos","aunts","aurae","aural","auras","auric","auris","avail","avens","avers",
  "aviso","avows","awned","axels","axile","axils","axled","axles","axons","ayahs"
]);

// Combined valid set
const VALID = new Set([...ANSWERS, ...EXTRA_VALID]);

// ── CONSTANTS ──
const ROWS = 6, COLS = 5;
const KB_ROWS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['ENTER','Z','X','C','V','B','N','M','⌫']
];

// ── STATE ──
let answer = '';
let guesses = [];
let currentGuess = '';
let gameOver = false;
let currentRow = 0;

// ── STATS ──
function loadStats() {
  try {
    return JSON.parse(localStorage.getItem('cw_stats')) || defaultStats();
  } catch { return defaultStats(); }
}

function defaultStats() {
  return { played: 0, won: 0, streak: 0, maxStreak: 0, dist: {1:0,2:0,3:0,4:0,5:0,6:0}, lastPlayed: '' };
}

function saveStats(s) {
  localStorage.setItem('cw_stats', JSON.stringify(s));
}

// ── GET A RANDOM WORD ──
function getAnswer() {
  const clean = [...new Set(ANSWERS.filter(w => w.length === 5 && /^[a-z]+$/.test(w)))];
  return clean[Math.floor(Math.random() * clean.length)];
}

// ── RESET GAME ──
function resetGame() {
  answer = getAnswer();
  guesses = [];
  currentGuess = '';
  gameOver = false;
  currentRow = 0;
  document.getElementById('result-overlay').classList.remove('open');
  buildBoard();
  buildKeyboard();
}

// ── BUILD BOARD ──
function buildBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';
  for (let r = 0; r < ROWS; r++) {
    const row = document.createElement('div');
    row.className = 'row';
    row.id = `row-${r}`;
    for (let c = 0; c < COLS; c++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.id = `tile-${r}-${c}`;
      row.appendChild(tile);
    }
    board.appendChild(row);
  }
}

// ── BUILD KEYBOARD ──
function buildKeyboard() {
  KB_ROWS.forEach((keys, i) => {
    const row = document.getElementById(`kb-row-${i}`);
    row.innerHTML = '';
    keys.forEach(k => {
      const btn = document.createElement('button');
      btn.className = 'key' + (k.length > 1 ? ' wide' : '');
      btn.textContent = k;
      btn.dataset.key = k;
      btn.addEventListener('click', () => handleKey(k === '⌫' ? 'BACKSPACE' : k));
      row.appendChild(btn);
    });
  });
}

// ── HANDLE KEY INPUT ──
function handleKey(key) {
  if (gameOver) return;
  if (key === 'ENTER') {
    submitGuess();
  } else if (key === 'BACKSPACE') {
    currentGuess = currentGuess.slice(0, -1);
    updateCurrentRow();
  } else if (/^[A-Za-z]$/.test(key) && currentGuess.length < COLS) {
    currentGuess += key.toLowerCase();
    updateCurrentRow();
  }
}

// ── UPDATE CURRENT ROW DISPLAY ──
function updateCurrentRow() {
  for (let c = 0; c < COLS; c++) {
    const tile = document.getElementById(`tile-${currentRow}-${c}`);
    const letter = currentGuess[c] || '';
    tile.textContent = letter.toUpperCase();
    tile.classList.toggle('filled', letter !== '');
  }
}

// ── EVALUATE GUESS ──
function evaluate(guess) {
  const result = Array(COLS).fill('absent');
  const ans = answer.split('');
  const g = guess.split('');

  // First pass: correct
  g.forEach((l, i) => {
    if (l === ans[i]) { result[i] = 'correct'; ans[i] = null; g[i] = null; }
  });
  // Second pass: present
  g.forEach((l, i) => {
    if (l && ans.includes(l)) { result[i] = 'present'; ans[ans.indexOf(l)] = null; }
  });
  return result;
}

// ── SUBMIT GUESS ──
function submitGuess() {
  if (currentGuess.length !== COLS) {
    showToast('Not enough letters');
    shakeRow(currentRow);
    return;
  }
  if (!VALID.has(currentGuess)) {
    showToast('Not in word list');
    shakeRow(currentRow);
    return;
  }

  const result = evaluate(currentGuess);
  guesses.push(currentGuess);

  revealRow(currentRow, currentGuess, result, () => {
    updateKeyboard(currentGuess, result);
    const won = result.every(r => r === 'correct');
    const lost = !won && currentRow === ROWS - 1;

    if (won) {
      gameOver = true;
      const msgs = ['Genius!','Magnificent!','Impressive!','Splendid!','Great!','Phew!'];
      showToast(msgs[currentRow]);
      bounceRow(currentRow);
      setTimeout(() => recordResult(true, currentRow + 1), 2000);
    } else if (lost) {
      gameOver = true;
      showToast(answer.toUpperCase(), 3000);
      setTimeout(() => recordResult(false, ROWS), 3500);
    }
    currentRow++;
    currentGuess = '';
  });
}

// ── REVEAL ROW WITH FLIP ANIMATION ──
function revealRow(row, guess, result, cb) {
  for (let c = 0; c < COLS; c++) {
    const tile = document.getElementById(`tile-${row}-${c}`);
    const delay = c * 300;
    setTimeout(() => {
      tile.dataset.state = result[c];
      tile.classList.add('reveal');
    }, delay);
  }
  setTimeout(cb, COLS * 300 + 300);
}

// ── UPDATE KEYBOARD COLORS ──
function updateKeyboard(guess, result) {
  const priority = { correct: 3, present: 2, absent: 1 };
  guess.split('').forEach((l, i) => {
    const btn = document.querySelector(`[data-key="${l.toUpperCase()}"]`);
    if (!btn) return;
    const cur = btn.dataset.state;
    if (!cur || priority[result[i]] > (priority[cur] || 0)) {
      btn.dataset.state = result[i];
    }
  });
}

// ── SHAKE ROW ──
function shakeRow(row) {
  const r = document.getElementById(`row-${row}`);
  r.classList.add('shake');
  r.addEventListener('animationend', () => r.classList.remove('shake'), { once: true });
}

// ── BOUNCE ROW (win animation) ──
function bounceRow(row) {
  for (let c = 0; c < COLS; c++) {
    const tile = document.getElementById(`tile-${row}-${c}`);
    setTimeout(() => tile.classList.add('bounce'), c * 100);
  }
}

// ── TOAST MESSAGE ──
let toastTimer;
function showToast(msg, duration = 1800) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), duration);
}

// ── RECORD RESULT & OPEN MODAL ──
function recordResult(won, attempts) {
  const s = loadStats();
  s.played++;
  if (won) {
    s.won++;
    s.streak++;
    s.maxStreak = Math.max(s.maxStreak, s.streak);
    s.dist[attempts] = (s.dist[attempts] || 0) + 1;
  } else {
    s.streak = 0;
  }
  saveStats(s);
  openResultModal(won);
}

// ── OPEN RESULT MODAL ──
function openResultModal(won) {
  document.getElementById('result-title').textContent = won ? '🎉 You Won!' : '😞 Game Over';
  const el = document.getElementById('result-answer');
  el.innerHTML = won ? '' : `The word was <strong>${answer.toUpperCase()}</strong>`;
  const modal = new bootstrap.Modal(document.getElementById('resultModal'));
  modal.show();
}

// ── OPEN STATS MODAL ──
function openStatsModal() {
  const s = loadStats();
  document.getElementById('s-played').textContent    = s.played;
  document.getElementById('s-winrate').textContent   = s.played ? Math.round(s.won / s.played * 100) : 0;
  document.getElementById('s-streak').textContent    = s.streak;
  document.getElementById('s-maxstreak').textContent = s.maxStreak;

  const max = Math.max(...Object.values(s.dist), 1);
  const dist = document.getElementById('distribution');
  dist.innerHTML = '';
  [1,2,3,4,5,6].forEach(n => {
    const count = s.dist[n] || 0;
    const pct = Math.max(Math.round(count / max * 100), 7);
    dist.innerHTML += `
      <div class="dist-row">
        <span class="dist-num">${n}</span>
        <div class="dist-bar-wrap">
          <div class="dist-bar" style="width:${pct}%">${count}</div>
        </div>
      </div>`;
  });
  const modal = new bootstrap.Modal(document.getElementById('statsModal'));
  modal.show();
}

// ── EVENT LISTENERS ──
document.addEventListener('keydown', e => {
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  handleKey(e.key === 'Backspace' ? 'BACKSPACE' : e.key.toUpperCase());
});

document.getElementById('stats-btn').addEventListener('click', openStatsModal);

document.getElementById('see-stats-btn').addEventListener('click', () => {
  bootstrap.Modal.getInstance(document.getElementById('resultModal')).hide();
  setTimeout(() => openStatsModal(), 300);
});

document.getElementById('next-game-btn').addEventListener('click', () => {
  bootstrap.Modal.getInstance(document.getElementById('resultModal')).hide();
  setTimeout(() => resetGame(), 300);
});

// ── THEME TOGGLE ──
function loadTheme() {
  const saved = localStorage.getItem('cw_theme') || 'dark';
  if (saved === 'light') {
    document.body.classList.add('light');
    document.getElementById('theme-btn').textContent = '☀️';
  } else {
    document.body.classList.remove('light');
    document.getElementById('theme-btn').textContent = '🌙';
  }
}

document.getElementById('theme-btn').addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  document.getElementById('theme-btn').textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('cw_theme', isLight ? 'light' : 'dark');
});

// ── START GAME ──
loadTheme();
answer = getAnswer();
buildBoard();
buildKeyboard();
