const path = 'https://20essentials.github.io';

const bands = [
  /* ======================= A ======================= */
  ['Alessia Cara', `${path}/alessia-cara`],
  ['Ariana Grande', `${path}/ariana-grande`],
  ['A-ha', `${path}/a-ha`],
  ['Artic Monkeys', `${path}/artic-monkeys`],
  ['Alphaville', `${path}/alphaville`],
  ['Arena Hash', `${path}/arena-hash`],
  ['AC - DC', `${path}/ac--dc`],
  ['Aerosmith', `${path}/aerosmith-ost/`],
  ['Ahrix', `${path}/ahrix-ost/`],
  ['Blur', `${path}/blur-ost/`],
  ['Alabama 3', `${path}/alabama3-ost/`],
  ['Audioslave', `${path}/audioslave-ost`],
  ['Adieu Aru', `${path}/adieu-4ru`],
  ['Akiaura', `${path}/akiaura-ost`],
  ['Alan Walker', `${path}/alan--walker`],
  ['Asian Kung Fu Generation', `${path}/akfg`],
  ['AKFG', `${path}/akfg`],

  /* ======================= B ======================= */
  ['Butterfly Boucher', `${path}/butterfly-boucher/`],
  ['Barbie - Soundtrack', `${path}/barbie/`],
  ['Beauz', `${path}/beauz/`],
  ['Blueberry', `${path}/blueberry/`],
  ['Blackbear', `${path}/blackbear/`],
  ['Bastille', `${path}/bastille/`],
  ['Bruce Springsteen', `${path}/bruce-springsteen/`],
  ['Blondie', `${path}/blondie-ost/`],
  ['Beach Weather', `${path}/beach-weather-ost/`],
  ['Black Sabbath', `${path}/black-sabbath/`],
  ['Bad Bunny', `${path}/bad-bunny/`],
  ['Billy Idol', `${path}/billy-idol/`],
  ['Børns', `${path}/borns-ost/`],
  ['Blink 182', `${path}/blink-182-ost/`],

  /* ======================= C ======================= */
  ['Cnco', `${path}/cnco/`],
  ['Charly Black', `${path}/charly-black/`],
  ['Cartoon', `${path}/cartoon-ost/`],
  ['Calvin Harris', `${path}/calvin-harris/`],
  ['Carl Duglas', `${path}/carl-douglas/`],
  ['Cindy Lauper', `${path}/cindy-lauper/`],
  ['Coldplay', `${path}/coldplay/`],
  ['Carpenter Brut', `${path}/carpenter-brut/`],
  ['Chino y Nacho', `${path}/chino-y-nacho/`],
  ['Culture Code', `${path}/culture-code-ost`],
  ['Crystal Castles', `${path}/crystal-castles-ost`],
  ['Cage the Elephant', `${path}/cage-the-elephant-ost/`],
  ['Chromeo', `${path}/chromeo-ost/`],
  ['Culture Beat', `${path}/culture-beat-ost/`],
  ['Chvrches', `${path}/chvrches-ost/`],

  /* ======================= D ======================= */
  ['Different Heaven', `${path}/different-heaven-ost/`],
  ['Diviners', `${path}/diviners-ost/`],
  ['Dj Snake', `${path}/dj--snake/`],
  ['Daft Punk', `${path}/daft-punk-ost/`],
  ['David Guetta', `${path}/david-guetta/`],
  ['Dua Lipa', `${path}/dua-lipa/`],
  ['Dj Bobo', `${path}/dj-bobo-ost/`],
  ['DLS 2016 - Soundtrack', `${path}/dream-league-soccer-2016/`],
  ['Depeche Mode', `${path}/depeche-mode/`],
  ['DLS 2020 - Soundtrack', `${path}/dream-league-soccer-2020/`],
  [
    'Dream League Soccer 2016 - Soundtrack',
    `${path}/dream-league-soccer-2016/`
  ],
  [
    'Dream League Soccer 2020 - Soundtrack',
    `${path}/dream-league-soccer-2020/`
  ],
  ['Duncan Laurence', `${path}/duncan-laurence/`],
  ['Daughter', `${path}/daughter/`],
  ['Dire Straits', `${path}/dire-straits/`],
  ['Dead or Alive', `${path}/dead-or-alive/`],
  ['Duncan Dhu', `${path}/duncan-dhu/`],
  ['Danza Invisible', `${path}/danza-invisible/`],
  ['Dominic Fike', `${path}/dominic-fike/`],

  /* ======================= E ======================= */
  ['Electric Light Orchestra', `${path}/electric-light-orchestra/`],
  ['ELO', `${path}/electric-light-orchestra/`],
  ['Enrique Iglesias', `${path}/enrique-iglesias-ost/`],
  ['Elton John', `${path}/elton-john-ost/`],
  ['Erasure', `${path}/erasure-ost/`],
  ['Edd Sheeran', `${path}/edd-sheeran-ost/`],
  ['Eva Ayllón', `${path}/eva-ayllon-ost/`],
  ['Enigma', `${path}/enigma-ost/`],
  ['El Último De La Fila', `${path}/el-ultimo-de-la-fila-ost/`],
  ['Earth Wind and Fire', `${path}/earth-wind-and-fire/`],

  /* ======================= F ======================= */
  ['Frágil', `${path}/fragil/`],
  ['Flow', `${path}/flow-ost/`],
  ['FleetWood Mac', `${path}/fleetwood/`],
  ['Flume', `${path}/flume-ost/`],
  ['Franz Ferdinand', `${path}/franz-ferdinand-ost/`],
  ['Fitz and the Tantrums', `${path}/fitz-and-the-tantrums-ost/`],
  ['Fantom 87', `${path}/fantom-87-ost/`],
  ['French Montana', `${path}/french-montana-ost/`],
  ['Final Fantasy VII', `${path}/final-fantasy-7/`],
  ['Fatboy Slim', `${path}/fatboy-slim-ost/`],
  ['Fkj', `${path}/fkj/`],
  ['Fuego', `${path}/fuego-ost/`],
  ['Free Fire', `${path}/free-fire/`],
  ["Fool's Garden", `${path}/fools-garden/`],

  /* ======================= G ======================= */
  ['Glude', `${path}/glude/`],
  ['Geolier', `${path}/geolier/`],
  ['Good Charlotte', `${path}/good-charlotte/`],
  ['Gesaffelstein', `${path}/gesaffelstein/`],
  ['Galantis', `${path}/galantis-ost/`],
  ['Glass Animals', `${path}/glass-animals-ost/`],
  [`Guns N' Roses`, `${path}/guns-n-roses-ost/`],
  [`GLHF`, `${path}/glhf`],

  /* ======================= H ======================= */
  ['Hippie Sabotage', `${path}/hippie-sabotage/`],
  ['Hibou', `${path}/hibou-ost/`],
  ['Harry Styles', `${path}/harry-styles-ost/`],
  ['Hoodie Forester', `${path}/hoodie-forester/`],
  ['Hiroyuki Sawano', `${path}/hiroyuki-sawano/`],
  ['Hardwell', `${path}/hardwell-ost/`],
  ['Him', `${path}/him/`],
  ['Hans Zimmer', `${path}/hans-zimmer/`],
  ['Hozier', `${path}/hozier/`],
  ['Hot Chip', `${path}/hot-chip/`],
  ['How To Train Your Dragon', `${path}/how-to-train-your-dragon/`],
  ['Home', `${path}/home/`],
  ['Hikaru Utada', `${path}/hikaru-utada-ost/`],

  /* ======================= I ======================= */
  ['Indochine', `${path}/indochine/`],
  ['Inner Circle', `${path}/inner--circle/`],
  ['Imagine Dragons', `${path}/imagine--dragons/`],
  ['Izecold', `${path}/izecold/`],
  ['Incubus', `${path}/incubus/`],
  ['Iracundos', `${path}/los-iracundos/`],

  /* ======================= J ======================= */
  ['Jack Black', `${path}/jack-black/`],
  ['Jimi Hendrix', `${path}/jimi-hendrix/`],
  ['Jutty Ranx', `${path}/jutty-ranx/`],
  ['Jim Yosef', `${path}/jim-yosef/`],
  ['John Newman', `${path}/john-newman/`],
  ['Joan Jett And The Blackhearts', `${path}/joan-jett-and-the-blackhearts/`],
  ['Jefferson Tadeo', `${path}/jefferson-tadeo/`],
  ['Journey', `${path}/journey-ost/`],
  ['JJD', `${path}/jjd-ost/`],
  ['Justice', `${path}/justice-ost/`],

  /* ======================= K ======================= */
  ['Kanye West', `${path}/kanye-west-ost`],
  ['Kaleo', `${path}/kaleo/`],
  ['Kike Jiménez', `${path}/kike-jimenez/`],
  ['K-391', `${path}/k-391/`],
  ['Kings of Leon', `${path}/kings-of--leon/`],
  ['Kasabian', `${path}/kasabian-ost/`],
  ['Katy Perry', `${path}/katy-perry/`],
  ['Kana-Boon', `${path}/kana-boon-ost/`],

  /* ======================= L ======================= */
  ['Los Prisioneros', `${path}/los-prisioneros/`],
  ['Los Violadores', `${path}/los-vi0ladores/`],
  ['Linkin Park', `${path}/linkin-park-ost/`],
  ['La Unión', `${path}/la-union/`],
  ['La Ley', `${path}/la-ley/`],
  ['Luis Fonsi', `${path}/luis-fonsi/`],
  ['Leeandlie', `${path}/leeandlie/`],
  ['La Bouche', `${path}/la-bouche-ost/`],
  ['Legend of Zelda', `${path}/legend-of-zelda/`],
  ['Lost Sky', `${path}/lost-sky/`],
  ['Los Enanitos Verdes', `${path}/los-enanitos-verdes/`],
  ['Little Dragon', `${path}/little-dragon/`],
  ['Left 4 Dead 2', `${path}/left-4-dead/`],
  ['Libido', `${path}/libido/`],
  ['Los Iracundos', `${path}/los-iracundos/`],

  /* ======================= M ======================= */
  ['Memorex Memories', `${path}/memorex-memories/`],
  ['Martin Garrix', `${path}/martin-garrix/`],
  ['Mazemirror', `${path}/mazemirror/`],
  ['Men At Work', `${path}/men-at-work/`],
  ['Madonna', `${path}/madonna/`],
  ['Myke Towers', `${path}/myke-towers/`],
  ['Marilyn Manson', `${path}/marilyn-manson/`],
  ['Mutiny On The Bounty', `${path}/mutiny-on-the-bounty/`],
  ['Matrix', `${path}/matrix/`],
  ['Mgmt', `${path}/mgmt/`],
  ['Maná', `${path}/mana/`],
  ['Michel Teló', `${path}/michel-telo/`],

  /* ======================= N ======================= */
  ['Neffex', `${path}/neffex/`],
  ['Nuages', `${path}/nuages/`],
  ['Neon Rox', `${path}/neon-rox/`],
  ['Neon Genesis Evangelion', `${path}/neon-genesis-evangelion/`],
  ['Neon Trees', `${path}/neon-trees/`],
  ['Narvent', `${path}/narvent-ost/`],
  ['No mercy', `${path}/no-mercy/`],
  ['Nicky Jam', `${path}/nicky-jam/`],
  ['New Radicals', `${path}/new-radicals-ost/`],

  /* ======================= O ======================= */
  ["Oscar D'león", `${path}/oscar-d-leon/`],
  ['Oasis', `${path}/oasis/`],
  ['Outkast', `${path}/outkast/`],
  ['Omar Cabán', `${path}/omar-caban/`],
  ['Ofdream', `${path}/ofdream/`],
  ['Orbital', `${path}/orbital/`],
  ['One Republic', `${path}/one-republic/`],
  ['Outlaws', `${path}/outlaws-ost/`],

  /* ======================= P ======================= */
  ['Propellerheads', `${path}/propellerheads/`],
  ['Petit Biscuit', `${path}/petit-biscuit/`],
  ['Pitbull', `${path}/pitbull/`],
  ['Pink Floyd', `${path}/pink-floyd/`],
  ['Piano Deuss', `${path}/piano-deuss/`],
  ['Pet Shop Boys', `${path}/pet-shop-boys/`],
  ['Pimpinela', `${path}/pimpinela/`],
  ['Panic at the Disco', `${path}/panic-at-the-disco-ost/`],
  ['Portwave', `${path}/portwave-ost/`],
  ['Pixies', `${path}/pixies-ost/`],
  ['Penguin Research', `${path}/penguin-research/`],

  /* ======================= Q ======================= */
  ['Queen Latifah', `${path}/queen-latifah/`],
  ['Queensrÿche', `${path}/queensryche/`],
  ['Queen', `${path}/queen-ost/`],
  ['Quiet Riot', `${path}/quiet-riot-ost/`],
  ['Quicksilver', `${path}/quicksilver-ost/`],
  ['Queens Of The Stop Age', `${path}/queens-of-the-stop-age-ost/`],

  /* ======================= R ======================= */
  ['Rauf & faik', `${path}/rauf-and-faik/`],
  ['Roxette (version English)', `${path}/roxette-ost/`],
  ['Roxette (version Spanish)', `${path}/roxette-in-spanish/`],
  ['Rage Against The Machine', `${path}/rage-against-the-machine/`],
  ['Rihanna', `${path}/rihanna/`],
  ['Red Hot Chilli Peppers', `${path}/red-hot-chilli-peppers/`],
  ['Rauw Alejandro', `${path}/rauw-alejandro/`],
  ['Rata Blanca', `${path}/rata-blanca/`],
  ['Remy Zero', `${path}/remy-zero/`],
  ['Rhcp', `${path}/red-hot-chilli-peppers/`],
  ['Rick Astley', `${path}/rick-astley/`],
  ['Royal Blood', `${path}/royal-blood/`],
  ['Rocio Durcal', `${path}/rocio-durcal/`],
  ['Rammstein', `${path}/rammstein/`],
  ['Rio', `${path}/rio-ost/`],

  /* ======================= S ======================= */
  ['Sad Puppy', `${path}/sad-puppy/`],
  ['Snap!', `${path}/snap/`],
  ['Selena Gomez', `${path}/selena-gomez/`],
  ['Sawano Hiroyuki', `${path}/sawano-hiroyuki-ost/`],
  ['September 87', `${path}/september-87-ost/`],
  ['St. Vincent', `${path}/st-vincent/`],
  ['Succession', `${path}/succession/`],
  ['Sidewalks and Skeletons', `${path}/sidewalks-and-skeletons-ost/`],

  ['Sandra', `${path}/sandra/`],
  ['Soda Stereo', `${path}/soda-stereo/`],
  ['Ship Wrek', `${path}/ship-wrek-ost/`],
  ['Spin Doctors', `${path}/spin-doctors/`],
  ['Serena', `${path}/serena/`],
  [
    'Star vs. The Forces Of Evil - Soundtrack',
    `${path}/star-vs-the-forces-of-evil-soundtrack/`
  ],
  ['Shakira', `${path}/shakira/`],

  /* ======================= T ======================= */
  ['Tony Igy', `${path}/tony-igy/`],
  ['Timbaland', `${path}/timbaland/`],
  ['Toto', `${path}/toto-ost/`],
  ['The Script', `${path}/the-script-ost/`],
  ['The Smiths', `${path}/the-smiths-ost/`],
  ['The Rare Occasions', `${path}/the-rare-occasions/`],
  ['The Rasmus', `${path}/the-rasmus/`],
  ['Two Door Cinema Club', `${path}/two-door-cinema-club/`],
  ['The Neighbourhood', `${path}/the-neighbourhood/`],
  ['The Killers', `${path}/the-killers/`],
  ['Thirty Seconds To Mars', `${path}/30-seconds-to-mars/`],
  ['Tame Impala', `${path}/tame-impala/`],
  ['Tears For Fears', `${path}/tears-for-fears/`],
  ['Tron - Soundtrack', `${path}/tron/`],
  ['The Outfield', `${path}/the-outfield-ost/`],

  /* ======================= U ======================= */
  ['U2', `${path}/u2/`],
  ['Unknown Brain', `${path}/unknown-brain-ost/`],
  ['Undertale', `${path}/undertale/`],
  ['Underworld', `${path}/underworld-ost/`],
  ['Ulver', `${path}/ulver-ost/`],
  ['UB40', `${path}/ub40-ost/`],
  ['Urge Overkill', `${path}/urge-overkill-ost/`],

  /* ======================= V ======================= */
  ['Virus', `${path}/virus/`],
  ['Vnv Nation', `${path}/vnv-nation/`],
  ['Vxllain', `${path}/vxllain/`],
  ['Vilma Palma', `${path}/vilma-palma/`],

  /* ======================= W ======================= */
  ['Wiguez & Vizzen', `${path}/wiguez-and-vizzen/`],
  ['Warriyo', `${path}/warriyo/`],
  ['Weezer', `${path}/weezer/`],
  ['Warpaint', `${path}/warpaint/`],
  ['Wolfmother', `${path}/wolfmother/`],

  /* ======================= X ======================= */
  ['Xerath', `${path}/xerath/`],
  ['Xiu Xiu', `${path}/xiu-xiu-ost/`],
  ['Xtc', `${path}/xtc-ost/`],
  ['Xray Spex', `${path}/xray-spex-ost/`],
  ['Xotox', `${path}/xotox-ost`],
  ['Xmal Deutschland', `${path}/xmal-deutschland-ost`],

  /* ======================= Y ======================= */
  ['Yandel', `${path}/yandel/`],
  ['Yoshiki', `${path}/yoshiki/`],
  ["Yousou N'dour", `${path}/youssou-ndour/`],
  ['Yazoo', `${path}/yazoo/`],
  ['Yardbirds', `${path}/yardbirds/`],
  ['Your Favorite Enemies', `${path}/your-favorite-enemies/`],
  ['Yeah Yeah Yeahs', `${path}/yeah-yeah-yeahs/`],
  ['Yellow Magic Orchestra', `${path}/yellow-magic-orchestra-ost/`],
  ['Yonderboi', `${path}/yonderboi-ost/`],

  /* ======================= Z ======================= */
  ['Zara Larsson', `${path}/zara-larsson/`],
  ['Zoé', `${path}/zoe/`],
  ['Zoids Chaotic Century', `${path}/zoids-chaotic-century/`],
  ['Zoids Guardian Force', `${path}/zoids-guardian-force/`],

  /* ======================= 0 ======================= */
  /* ======================= 1 ======================= */
  /* ======================= 2 ======================= */
  /* ======================= 3 ======================= */
  ['30 Seconds To Mars', `${path}/30-seconds-to-mars/`],
  /* ======================= 4 ======================= */
  /* ======================= 4 ======================= */
  ['4 Non Blondes', `${path}/4-non-blondes`]
  /* ======================= 5 ======================= */
  /* ======================= 6 ======================= */
  /* ======================= 7 ======================= */
  /* ======================= 8 ======================= */
  /* ======================= 9 ======================= */
];

let d = document,
  $borrar = d.querySelector('.borrar'),
  $ = el => document.querySelector(el),
  $$ = el => document.querySelectorAll(el);

let $inputPlaylist = $('.playlist-container-form .playlist-input');
let $inputPlaylist2 = $('.playlist-container-form-2 .playlist-input');
let regExP = /^(?![\s0-9\-_])[\w\s\-]{1,20}(?<![\s\-])$/;

console.group('Reference');
console.log('Switch ->', 'https://uiverse.io/csemszepp/soft-pug-40');
console.log('Rain ->', 'https://youtu.be/YhXxBhInJMI?si=Ib56mu0h76sQz9WJ');
console.groupEnd();

const headerColors = {
  0: ['#ff00ff', '#00ffff', '#39ff14'],
  1: ['#ffbf00', '#00ffd0', '#007fff'],
  2: ['#ff00ff', '#ff007f', '#00ff9f'],
  3: ['#ff073a', '#ff77ff', '#0aff00'],
  4: ['#00f7ff', '#ff7eff', '#ff4500'],
  5: ['#ff1493', '#00ff00', '#ff00ff'],
  6: ['#ffff00', '#00ffcc', '#ff6347'],
  7: ['#adff2f', '#ff69b4', '#7cfc00'],
  8: ['#ff00ff', '#00ff7f', '#ffbf00'],
  9: ['#ff8c00', '#00ffcc', '#ff0099']
};

(function headerCustomProperties() {
  const { body } = document;
  let numberRandom = Math.floor(Math.random() * 10);
  const [color1, color2, color3] = headerColors[numberRandom];
  body.style.setProperty('--color1', color1);
  body.style.setProperty('--color2', color2);
  body.style.setProperty('--color3', color3);
})();

function autocomplete(inpt, elArray) {
  let currentFocus;

  inpt.addEventListener('input', function (e) {
    let a,
      b,
      i,
      val = this.value;

    if (val.length >= 1) {
      const $buscar = $('.buscar');
      $buscar.textContent === '🔍' && ($buscar.textContent = '❌');
    }

    if (val.length === 0) {
      const $buscar = $('.buscar');
      $buscar.textContent = '🔍';
    }

    closeAllLists();
    if (!val) return false;
    currentFocus = -1;

    a = document.createElement('div');
    a.setAttribute('class', 'autocomplete-items');
    a.setAttribute('id', 'autocomplete-list');

    let miContador = 0;
    this.parentNode.appendChild(a);

    for (i = 0; i < elArray.length && miContador < 6; i++) {
      if (
        elArray[i][0].substr(0, val.length).toUpperCase() ===
        val.toUpperCase()
      ) {
        b = document.createElement('a');
        b.setAttribute('href', elArray[i][1]);
        b.translate = false;
        b.innerHTML = `<strong>${elArray[i][0].substr(
          0,
          val.length
        )}</strong>`;
        b.innerHTML += elArray[i][0].substr(val.length);
        b.innerHTML += `<input type='hidden' value="${elArray[i][0]}"></input>`;

        b.addEventListener('click', function (e) {
          inpt.value = this.querySelector('input').value;
          closeAllLists();
        });

        a.appendChild(b);
        miContador++;
      }
    }
  });

  inpt.addEventListener('keydown', function (e) {
    let x = document.getElementById('autocomplete-list');
    if (x) x = x.querySelectorAll('a');
    if (e.key === 'ArrowDown') {
      currentFocus++;
      addActive(x);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentFocus--;
      addActive(x);
    } else if (e.key === 'Enter') {
      e.preventDefault();

      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;

    removeActive(x);

    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;

    x[currentFocus].classList.add('autocomplete-active');
  }

  function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('autocomplete-active');
    }
  }

  function closeAllLists(elm) {
    let $autocompletes = $$('.autocomplete-items');

    for (let i = 0; i < $autocompletes.length; i++) {
      if (elm !== $autocompletes[i] && elm !== inpt) {
        $autocompletes[i].parentNode.removeChild($autocompletes[i]);
      }
    }
  }

  document.addEventListener('click', e => {
    if (e.target.matches('.buscar')) {
      e.preventDefault();
      if (e.target.innerHTML === '❌') {
        e.target.classList.add('dlt-active');
        setTimeout(() => e.target.classList.remove('dlt-active'), 150);
      }
      closeAllLists();
      const $input = document.getElementById('myInput');
      $input.value = '';
      $input.focus();
    }
  });
}

function addFotoStars() {
  setTimeout(() => {
    const $images = $$('.card-single-left .img');
    $images.forEach((img, i) => {
      img.style.setProperty(
        '--bg-img-playlist',
        `url('stars/star-${(i % 50) + 1}.webp')`
      );
    });
  }, 5);
}

addFotoStars();

autocomplete(document.getElementById('myInput'), bands);
d.querySelector('.nBands').innerHTML = bands.length;
d.querySelector('.nSongs').innerHTML = bands.length * 20;
d.getElementById('myInput').focus();

const $myINput = $('.theForm input[type=text]');
const $centrar = $('.centrar');

/* ======================= LLUVIA ======================= */
let amount = 100;

function rain() {
  let pantalla = $('.html-scheme'),
    i = 0;

  while (i < amount && amount <= 109) {
    let drop = document.createElement('i');
    drop.classList.add('gota');

    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * 100);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;

    drop.style.width = 0.2 + size + 'px';
    drop.style.left = posX + 'vw';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = 1 + duration + 's';

    pantalla.appendChild(drop);
    i++;
  }
}

rain();

/* ======================= SWITCH CHECK  ======================= */
let $checkBoxSwitch = d.getElementById('switch1');
d.addEventListener('input', e => {
  if (e.target === $checkBoxSwitch) {
    if (e.target.checked) {
      amount += 1;
      rain();
    } else {
      amount += 1;
      rain();
    }
  }

  if (e.target.matches('.indent-total-object')) {
    let textarea = e.target?.parentElement?.previousElementSibling;
    if (textarea) {
      textarea.dataset.indentation = e.target.value;
      return;
    }
  }
});

/* ======================= RANDOM LOADERS  ======================= */
let $elementerCentrar = $('.centrar');
const LOADER_CLASSNAME = ['cube', 'pyramid', 'star', 'tetraPyramid', 'multiFaces', 'triangPre', 'rombo3d', 'sticks8', 'sixlaps', 'tuplas', 'vasilisco','pentagonal', 'hexagonal', 'octagonal', 'pid', 'frutr', 'sphere', 'pentaIn', 'prismSquare', 'trom', 'miniPent', 'pyramiDuplex'];

const LOADER_HTML = {
  pyramid: `<div class="pyramid-loader">
      <div class="wrapper">
        <span class="side side1"></span>
        <span class="side side2"></span>
        <span class="side side3"></span>
        <span class="side side4"></span>
        <span class="shadow"></span>
      </div>
    </div>`,
  cube: ` <div class="container-cube">
        <article class="side front"></article>
        <article class="side behind"></article>
        <article class="side top"></article>
        <article class="side bottom"></article>
        <article class="side right"></article>
        <article class="side left"></article>
        <article class="shadow"></article>
      </div>`,
  star: `<div class="container-star">
      <article class="side front"></article>
      <article class="side behind"></article>
      <article class="side top-left">
        <div class="triangle-behind"></div>
        <div class="triangle-left"></div>
        <div class="triangle-right"></div>
        <div class="triangle-front"></div>
      </article>
      <article class="side top-right">
        <div class="triangle-behind"></div>
        <div class="triangle-left"></div>
        <div class="triangle-right"></div>
        <div class="triangle-front"></div>
      </article>
      <article class="side bottom-right">
        <div class="triangle-behind"></div>
        <div class="triangle-left"></div>
        <div class="triangle-right"></div>
        <div class="triangle-front"></div>
      </article>
      <article class="side bottom-left">
        <div class="triangle-behind"></div>
        <div class="triangle-left"></div>
        <div class="triangle-right"></div>
        <div class="triangle-front"></div>
      </article>
      <div class="side bottom-center">
        <div class="triangle-behind"></div>
        <div class="triangle-left"></div>
        <div class="triangle-right"></div>
        <div class="triangle-front"></div>
      </div>
    </div>`,
  tetraPyramid: `<div class="container-tetra">
      <aside class="triangle triangle-top">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side bottom"></div>
      </aside>
      <aside class="cube">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side top"></div>
        <div class="side bottom"></div>
      </aside>
      <aside class="triangle triangle-bottom">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side bottom"></div>
      </aside>
      <aside class="triangle triangle-left">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side bottom"></div>
      </aside>
      <aside class="triangle triangle-right">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side bottom"></div>
      </aside>
      <aside class="triangle triangle-frontend">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side bottom"></div>
      </aside>
      <aside class="triangle triangle-backend">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side bottom"></div>
      </aside>
    </div>`,
  multiFaces: `<article class="container-multi">
    <div class="lado" style="--d:1"></div>
    <div class="lado" style="--d:2"></div>
    <div class="lado" style="--d:3"></div>
    <div class="lado" style="--d:4"></div>
    <div class="lado" style="--d:5"></div>
    <div class="lado" style="--d:6"></div>
    <div class="lado" style="--d:7"></div>
    <div class="lado" style="--d:8"></div>
    <div class="lado" style="--d:9"></div>
    <div class="lado" style="--d:10"></div>
    <div class="lado" style="--d:11"></div>
    <div class="lado" style="--d:12"></div>
    <div class="lado" style="--d:13"></div>
    <div class="lado" style="--d:14"></div>
    <div class="lado" style="--d:15"></div>
    <div class="lado" style="--d:16"></div>
    <div class="lado" style="--d:17"></div>
    <div class="lado" style="--d:18"></div>
    <div class="lado" style="--d:19"></div>
    <div class="lado" style="--d:20"></div>
    <div class="lado" style="--d:21"></div>
    <div class="lado" style="--d:22"></div>
    <div class="lado" style="--d:23"></div>
    <div class="lado" style="--d:24"></div>
    <div class="lado" style="--d:25"></div>
    <div class="lado" style="--d:26"></div>
    <div class="lado" style="--d:27"></div>
    <div class="lado" style="--d:28"></div>
    <div class="lado" style="--d:29"></div>
    <div class="lado" style="--d:30"></div>
    <div class="lado" style="--d:31"></div>
    <div class="lado" style="--d:32"></div>
    <div class="lado" style="--d:33"></div>
    <div class="lado" style="--d:34"></div>
    <div class="lado" style="--d:35"></div>
    <div class="lado" style="--d:36"></div>
    <div class="lado" style="--d:37"></div>
    <div class="lado" style="--d:38"></div>
    <div class="lado" style="--d:39"></div>
    <div class="lado" style="--d:40"></div>
    <div class="lado" style="--d:41"></div>
    <div class="lado" style="--d:42"></div>
    <div class="lado" style="--d:43"></div>
    <div class="lado" style="--d:44"></div>
    <div class="lado" style="--d:45"></div>
  </article>`,
  triangPre: `<aside class="container-pretriang">
    <main class="container-cube">
      <div class="side front"></div>
      <div class="side top"></div>
      <div class="side bottom"></div>
      <div class="side behind"></div>
      <div class="side left"></div>
      <div class="side right"></div>
    </main>
  </aside>`,
  rombo3d: ` <footer class="container-rombo">
    <div class="container-octa">
      <div class="side base"></div>

      <div class="side front"></div>
      <div class="side back"></div>
      <div class="side right"></div>
      <div class="side left"></div>

      <div class="side side-btn front-bottom"></div>
      <div class="side side-btn back-bottom"></div>
      <div class="side side-btn right-bottom"></div>
      <div class="side side-btn left-bottom"></div>
    </div>
  </footer>`,
  sticks8: ` <article class="container-8-sticks">
    <aside class="block first-block">
      <section class="rectangle rectangle-1">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>  
      </section>
      <section class="rectangle rectangle-2">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>  
      </section>
      <section class="rectangle rectangle-3">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>  
      </section>
      <section class="rectangle rectangle-4">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>  
      </section>
    </aside>
    <aside class="block second-block">
      <section class="rectangle rectangle-1">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>  
      </section>
      <section class="rectangle rectangle-2">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>  
      </section>
      <section class="rectangle rectangle-3">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>  
      </section>
      <section class="rectangle rectangle-4">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>  
      </section>
    </aside>
    <aside class="block third-block">
      <section class="rectangle rectangle-1">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>  
      </section>
      <section class="rectangle rectangle-2">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>  
      </section>
      <section class="rectangle rectangle-3">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>  
      </section>
      <section class="rectangle rectangle-4">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>  
      </section>
    </aside>
  </article>`,
  sixlaps: `<section class="container-six-laps">
      <aside class="block first-block">
        <section class="rectangle rectangle-1">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-2">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-3">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-4">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
      </aside>
      <aside class="block second-block">
        <section class="rectangle rectangle-1">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-2">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-3">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-4">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
      </aside>
      <aside class="block third-block">
        <section class="rectangle rectangle-1">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-2">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-3">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-4">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
      </aside>
      <aside class="block fourth-block">
        <section class="rectangle rectangle-1">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-2">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-3">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-4">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
      </aside>
      <aside class="block fifth-block">
        <section class="rectangle rectangle-1">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-2">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-3">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-4">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
      </aside>
      <aside class="block sixth-block">
        <section class="rectangle rectangle-1">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-2">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-3">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
        <section class="rectangle rectangle-4">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </section>
      </aside>
    </section>`,
  tuplas: `  <aside class="container-tuplas">
      <aside class="triangle triangle-top">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side bottom"></div>
      </aside>
      <aside class="cube">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side top"></div>
        <div class="side bottom"></div>
      </aside>
      <aside class="triangle triangle-bottom">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side bottom"></div>
      </aside>
      <aside class="triangle triangle-left">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side bottom"></div>
      </aside>
      <aside class="triangle triangle-right">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side bottom"></div>
      </aside>
      <aside class="triangle triangle-frontend">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side bottom"></div>
      </aside>
      <aside class="triangle triangle-backend">
        <div class="side front"></div>
        <div class="side behind"></div>
        <div class="side right"></div>
        <div class="side left"></div>
        <div class="side bottom"></div>
      </aside>
    </aside>`,
  vasilisco: `<article class="container-vasilisco">
    <aside class="triangle triangle-top">
      <div class="side front"></div>
      <div class="side behind"></div>
      <div class="side right"></div>
      <div class="side left"></div>
      <div class="side bottom"></div>
    </aside>
    <aside class="cube">
      <div class="side front"></div>
      <div class="side behind"></div>
      <div class="side right"></div>
      <div class="side left"></div>
      <div class="side top"></div>
      <div class="side bottom"></div>
    </aside>
    <aside class="triangle triangle-bottom">
      <div class="side front"></div>
      <div class="side behind"></div>
      <div class="side right"></div>
      <div class="side left"></div>
      <div class="side bottom"></div>
    </aside>
  </article>`,
  pentagonal: `<section class="container-pentagonal">
      <div class="base top"></div>
      <div class="side side1"></div>
      <div class="side side2"></div>
      <div class="side side3"></div>
      <div class="side side4"></div>
      <div class="side side5"></div>
      <div class="base bottom"></div>
    </section>`,
  hexagonal: `<article class="container-hexagonal">
      <div class="base base-top"></div>
      <div class="side side-1"></div>
      <div class="side side-2"></div>
      <div class="side side-3"></div>
      <div class="side side-4"></div>
      <div class="side side-5"></div>
      <div class="side side-6"></div>
      <div class="base base-bottom"></div>
    </article>`,
  octagonal: `<section class="container-octagonal">
      <div class="base base-top"></div>
      <div class="side side-1"></div>
      <div class="side side-2"></div>
      <div class="side side-3"></div>
      <div class="side side-4"></div>
      <div class="side side-5"></div>
      <div class="side side-6"></div>
      <div class="side side-7"></div>
      <div class="side side-8"></div>
      <div class="base base-bottom"></div>
    </section>`,
  pid: `<article class="container-pid">
      <div class="base base-top"></div>
      <div class="side side-1"></div>
      <div class="side side-2"></div>
      <div class="side side-3"></div>
      <div class="side side-4"></div>
      <div class="side side-5"></div>
      <div class="side side-6"></div>
    </article>  `,
  frutr: `<article class="container">
      <div class="base base-top"></div>
      <div class="side side-1"></div>
      <div class="side side-2"></div>
      <div class="side side-3"></div>
      <div class="side side-4"></div>
      <div class="side side-5"></div>
      <div class="side side-6"></div>

      <article class="container container-bottom container-2">
        <div class="base base-top"></div>
        <div class="side side-1"></div>
        <div class="side side-2"></div>
        <div class="side side-3"></div>
        <div class="side side-4"></div>
        <div class="side side-5"></div>
        <div class="side side-6"></div>
      </article>
    </article>`,
  sphere: `<aside class="container-sphere">
      <div class="aro" style="--r: 1"></div>
      <div class="aro" style="--r: 2"></div>
      <div class="aro" style="--r: 3"></div>
      <div class="aro" style="--r: 4"></div>
      <div class="aro" style="--r: 5"></div>
      <div class="aro" style="--r: 6"></div>
      <div class="aro" style="--r: 7"></div>
      <div class="aro" style="--r: 8"></div>
      <div class="aro" style="--r: 9"></div>
      <div class="aro" style="--r: 10"></div>
      <div class="aro" style="--r: 11"></div>
      <div class="aro" style="--r: 12"></div>
      <div class="aro" style="--r: 13"></div>
      <div class="aro" style="--r: 14"></div>
      <div class="aro" style="--r: 15"></div>
      <div class="aro" style="--r: 16"></div>
      <div class="aro" style="--r: 17"></div>
      <div class="aro" style="--r: 18"></div>
    </aside>`,
  pentaIn: `<article class="container-penta-in">
      <div class="base base-bottom">
        <div class="side side-1"></div>
        <div class="side side-2"></div>
        <div class="side side-3"></div>
        <div class="side side-4"></div>
        <div class="side side-5"></div>
      </div>
      <div class="base center">
        <div class="side side-1"></div>
        <div class="side side-2"></div>
        <div class="side side-3"></div>
        <div class="side side-4"></div>
        <div class="side side-5"></div>
      </div>
      <div class="base center-top">
        <div class="side side-1"></div>
        <div class="side side-2"></div>
        <div class="side side-3"></div>
        <div class="side side-4"></div>
        <div class="side side-5"></div>
      </div>
      <div class="base base-top">
        <div class="side side-1"></div>
        <div class="side side-2"></div>
        <div class="side side-3"></div>
        <div class="side side-4"></div>
        <div class="side side-5"></div>
      </div>
    </article>`,
  prismSquare: `<div class="container">
      <div class="side side-bottom"></div>
      <div class="side side-top"></div>
      <div class="side side-right"></div>
      <div class="side side-left"></div>
      <div class="side side-front"></div>
      <div class="side side-behind"></div>
    </div>`,
  trom: `<article class="container-trom">
      <div class="triangle triangle-top">
        <div class="side side-front"></div>
        <div class="side side-behind"></div>
        <div class="side side-right"></div>
        <div class="side side-left"></div>
        <div class="side side-bottom"></div>
      </div>
      <div class="triangle triangle-bottom">
        <div class="side side-front"></div>
        <div class="side side-behind"></div>
        <div class="side side-right"></div>
        <div class="side side-left"></div>
        <div class="side side-bottom"></div>
      </div>
      <div class="triangle-three-sides tts-top-front">
        <div class="side side-front"></div>
        <div class="side side-left"></div>
        <div class="side side-right"></div>
        <div class="side side-bottom"></div>
      </div>
      <div class="triangle-three-sides tts-top-behind">
        <div class="side side-front"></div>
        <div class="side side-left"></div>
        <div class="side side-right"></div>
        <div class="side side-bottom"></div>
      </div>
      <div class="triangle-three-sides tts-top-right">
        <div class="side side-front"></div>
        <div class="side side-left"></div>
        <div class="side side-right"></div>
        <div class="side side-bottom"></div>
      </div>
      <div class="triangle-three-sides tts-top-left">
        <div class="side side-front"></div>
        <div class="side side-left"></div>
        <div class="side side-right"></div>
        <div class="side side-bottom"></div>
      </div>
      <div class="triangle-three-sides tts-bottom-front">
        <div class="side side-front"></div>
        <div class="side side-left"></div>
        <div class="side side-right"></div>
        <div class="side side-bottom"></div>
      </div>
      <div class="triangle-three-sides tts-bottom-behind">
        <div class="side side-front"></div>
        <div class="side side-left"></div>
        <div class="side side-right"></div>
        <div class="side side-bottom"></div>
      </div>
      <div class="triangle-three-sides tts-bottom-right">
        <div class="side side-front"></div>
        <div class="side side-left"></div>
        <div class="side side-right"></div>
        <div class="side side-bottom"></div>
      </div>
      <div class="triangle-three-sides tts-bottom-left">
        <div class="side side-front"></div>
        <div class="side side-left"></div>
        <div class="side side-right"></div>
        <div class="side side-bottom"></div>
      </div>
    </article>`,
    miniPent: ` <aside class="container-mini-pent">
      <article class="side front"></article>
      <article class="side behind"></article>
      <article class="side top-left"></article>
      <article class="side top-right"></article>
      <article class="side bottom-right"></article>
      <article class="side bottom-left"></article>
    </aside>`,
  pyramiDuplex: `<div class="pyramid pyramid-top">
      <div class="side side-front"></div>
      <div class="side side-right"></div>
      <div class="side side-left"></div>
      <div class="side side-bottom"></div>

      <div class="pyramid pyramid-bottom">
        <div class="side side-front"></div>
        <div class="side side-right"></div>
        <div class="side side-left"></div>
        <div class="side side-bottom"></div>
      </div>
    </div>`
};

let numberRandom = Math.floor(Math.random() * LOADER_CLASSNAME.length);
let classNameRandom = LOADER_CLASSNAME[numberRandom];
$elementerCentrar.classList.add(classNameRandom);
$elementerCentrar.querySelector('.container-loader').innerHTML =
  LOADER_HTML[classNameRandom] || '';

/* ======================= MEDIA  ======================= */

let w = window;

let currentOrientation = screen.orientation.type;

function handleOrientationChange() {
  const newOrientation = screen.orientation.type;

  if (
    newOrientation.startsWith('portrait') &&
    !currentOrientation.startsWith('portrait')
  ) {
    currentOrientation = newOrientation;
    location.reload();
  } else if (
    newOrientation.startsWith('landscape') &&
    !currentOrientation.startsWith('landscape')
  ) {
    currentOrientation = newOrientation;
    location.reload();
  }
}

screen.orientation.addEventListener('change', handleOrientationChange);

handleOrientationChange();

/* ======================= OTHER  ======================= */

function comprobeExistThisProperty(nameProperty) {
  if (localStorage.getItem('listname-cards')) {
    let object = JSON.parse(localStorage.getItem('listname-cards'));
    return object.hasOwnProperty(nameProperty) ? true : false;
  }
}

d.addEventListener('keydown', e => {
  if (e.target === $inputPlaylist || e.target === $inputPlaylist2) {
    if (e.key !== 'Enter') return;
    let padreForm = e.target.closest('.myForm');
    let input = padreForm.querySelector('input[type=text]');
    let arrayCancionesPlaylist = '';

    if (padreForm.classList.contains('playlist-container-form')) {
      if (comprobeExistThisProperty(input.value)) {
        input.classList.remove('valid');
        input.classList.add('invalid');
      }

      if (
        !regExP.test(input.value) ||
        comprobeExistThisProperty(input.value)
      ) {
        return;
      }

      let cardName = input.value.trim();

      if (!localStorage.getItem('listname-cards')) {
        localStorage.setItem(
          'listname-cards',
          JSON.stringify({
            [`${cardName}`]: arrayCancionesPlaylist
          })
        );
      }

      let stringCardNames = localStorage.getItem('listname-cards');
      let objectCardsName = JSON.parse(stringCardNames);
      let objectCardNamesString = JSON.stringify({
        ...objectCardsName,
        [`${cardName}`]: arrayCancionesPlaylist
      });
      localStorage.setItem('listname-cards', objectCardNamesString);
      input.value = '';
      renderPlaylistCards();
      $('.playlist-section').scrollTop = $('.playlist-section').scrollHeight;
      return;
    }

    if (comprobeExistThisProperty(input.value)) {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }

    if (!regExP.test(input.value) || comprobeExistThisProperty(input.value)) {
      return;
    }

    let index = localStorage.getItem('last-index');
    let currentCard = $$('.card-single')[index];

    if (currentCard) {
      let lastIndex = localStorage.getItem('last-index');
      let cardName = input.value.trim();
      let objectCardNames = JSON.parse(
        localStorage.getItem('listname-cards')
      );
      let currentCard = [...$$('.card-single')][lastIndex].querySelector(
        '.card-single-right h3'
      );
      let valorProperty = currentCard.innerHTML;
      objectCardNames[cardName] = objectCardNames[valorProperty];
      currentCard.innerHTML = cardName;
      delete objectCardNames[valorProperty];
      localStorage.setItem('listname-cards', JSON.stringify(objectCardNames));
      renderPlaylistCards();
      let $form1 = $('.playlist-container-form');
      let $form2 = $('.playlist-container-form-2');
      $form1.classList.remove('goUp');
      $form2.classList.remove('goDown');
      input.value = '';
      renderPlaylistCards();
      return;
    }

    if ($$('.card-single').length === 0) {
      location.reload();
      return;
    }
  }
});

d.addEventListener('click', e => {
  if (e.target.matches('.button-playlist')) {
    e.target.classList.toggle('button-playlist-active');
    return;
  }
  if (e.target.matches('.input-button-playlist')) {
    let padreForm = e.target.closest('.myForm');
    let input = padreForm.querySelector('input[type=text]');
    let arrayCancionesPlaylist = '';

    if (padreForm.classList.contains('playlist-container-form')) {
      if (comprobeExistThisProperty(input.value)) {
        input.classList.remove('valid');
        input.classList.add('invalid');
      }

      if (
        !regExP.test(input.value) ||
        comprobeExistThisProperty(input.value)
      ) {
        return;
      }

      let cardName = input.value.trim();

      if (!localStorage.getItem('listname-cards')) {
        localStorage.setItem(
          'listname-cards',
          JSON.stringify({
            [`${cardName}`]: arrayCancionesPlaylist
          })
        );
      }

      let stringCardNames = localStorage.getItem('listname-cards');
      let objectCardsName = JSON.parse(stringCardNames);
      let objectCardNamesString = JSON.stringify({
        ...objectCardsName,
        [`${cardName}`]: arrayCancionesPlaylist
      });
      localStorage.setItem('listname-cards', objectCardNamesString);
      input.value = '';
      renderPlaylistCards();
      $('.playlist-section').scrollTop = $('.playlist-section').scrollHeight;
      return;
    }

    if (comprobeExistThisProperty(input.value)) {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }

    if (!regExP.test(input.value) || comprobeExistThisProperty(input.value)) {
      return;
    }

    let index = localStorage.getItem('last-index');
    let currentCard = $$('.card-single')[index];

    if (currentCard) {
      let lastIndex = localStorage.getItem('last-index');
      let cardName = input.value.trim();
      let objectCardNames = JSON.parse(
        localStorage.getItem('listname-cards')
      );
      let currentCard = [...$$('.card-single')][lastIndex].querySelector(
        '.card-single-right h3'
      );
      let valorProperty = currentCard.innerHTML;
      objectCardNames[cardName] = objectCardNames[valorProperty];
      currentCard.innerHTML = cardName;
      delete objectCardNames[valorProperty];
      localStorage.setItem('listname-cards', JSON.stringify(objectCardNames));
      renderPlaylistCards();
      let $form1 = $('.playlist-container-form');
      let $form2 = $('.playlist-container-form-2');
      $form1.classList.remove('goUp');
      $form2.classList.remove('goDown');
      input.value = '';
      return;
    }

    if ($$('.card-single').length === 0) {
      location.reload();
      return;
    }
  }
  if (e.target.matches('.three-points')) {
    let $options = e.target.querySelector('.options');
    $options.classList.toggle('options-active');
    let arrayThreePoints = [...d.querySelectorAll('.three-points')];
    let index = arrayThreePoints.indexOf(e.target);
    localStorage.setItem('last-index', index);
    return;
  }
  if (e.target.matches('.options .item-1')) {
    if (localStorage.getItem('listname-cards')) {
      let lastIndex = localStorage.getItem('last-index');
      let currentCard = [...$$('.card-single')][lastIndex];
      let currentCardName = currentCard
        .querySelector('.card-single-right h3')
        .textContent.trim();
      let objectListnameCards = JSON.parse(
        localStorage.getItem('listname-cards')
      );
      delete objectListnameCards[currentCardName];
      let nuevoObjeto = structuredClone(objectListnameCards);
      localStorage.setItem('listname-cards', JSON.stringify(nuevoObjeto));
      renderPlaylistCards();
    }

    return;
  }
  if (e.target.matches('.options .item-2')) {
    e.target.parentElement.classList.remove('options-active');
    let $form1 = d.querySelector('.playlist-container-form');
    let $form2 = d.querySelector('.playlist-container-form-2');
    $form1.classList.add('goUp');
    $form2.classList.add('goDown');
    $('.playlist-section').scrollTop = 0;
    return;
  }
  if (e.target.matches('.card-single-left a')) {
    let currenPlaylistName =
      e.target.parentElement.nextElementSibling.querySelector('h3').innerHTML;
    localStorage.setItem('lastNameCardClicked', currenPlaylistName);
  }
  if (e.target.matches('.card-single-right h3')) {
    let h3Title = e.target.textContent;
    localStorage.setItem('lastNameCardClicked', h3Title);
  }
  if (e.target.matches('.card-single-right p')) {
    let h3Title = e.target.previousElementSibling.textContent;
    localStorage.setItem('lastNameCardClicked', h3Title);
  }
  if (e.target.matches('.playlist-section')) {
    let firsForm = $('.playlist-container-form');
    let secondForm = $('.playlist-container-form-2');
    if (secondForm.classList.contains('goDown')) {
      secondForm.classList.remove('goDown');
      secondForm.classList.add('goUp');
      firsForm.classList.remove('goUp');
      firsForm.classList.add('goDown');
    }
  }
  if (e.target.matches('.settings-backup')) {
    $('.container-backup').classList.add('container-backup-open');
  }
  if (e.target.matches('.go-back')) {
    $('.container-backup').classList.remove('container-backup-open');
    renderPlaylistCards();
  }
  if (e.target.classList.contains('add-one-playlist')) {
    [...$$('.container-backup-centrado .btn-backup-active')].forEach(el => {
      el.classList.remove('btn-backup-active');
    });
    e.target.classList.add('btn-backup-active');
    let textareaHermana =
      e.target.nextElementSibling?.firstElementChild ?? '';
    if (!textareaHermana) return;
    let valor = e.target.nextElementSibling.firstElementChild.value ?? '';
    if (!localStorage.getItem('listname-cards')) {
      textareaHermana.value =
        'There are not playlists, you need at least one.';
      localStorage.setItem('listname-cards', '');
      return;
    }
    let listNameCards = JSON.parse(localStorage.getItem('listname-cards'));
    if (!valor) textareaHermana.value = 'Write something';
    const completeRegExp =
      /^\s*"([^0-9\-_][\w\s\-]{0,20})":\s*\[\s*(\[\s*"[^"]+"\s*,\s*"(https:\/\/20essentials\.github\.io\/[^"]+\/songs\/n\d+\.\w{2,5})"\s*\](\s*,\s*)?)*\s*\],?\s*$/;

    if (completeRegExp.test(valor)) {
      textareaHermana.classList.remove('non-valid');
      textareaHermana.classList.add('valid');

      let listNameCardsString = JSON.stringify(listNameCards, null, 2).slice(
        1,
        -1
      );

      let texto = valor.replace(/\\"\;/g, '');
      let textoString = JSON.stringify(texto, null, 2);
      const newText = texto.replace(/,\s*(?=\])/g, '');

      let concatenacion = `{
        ${listNameCardsString},${newText}
      }`;

      let parseado = JSON.parse(`${concatenacion}`);
      localStorage.setItem('listname-cards', JSON.stringify(parseado));

      setTimeout(() => {
        textareaHermana.value = 'Added successfully';
      }, 1000);

      return;
    }
    textareaHermana.classList.remove('valid');
    textareaHermana.classList.add('non-valid');

    return;
  }
  if (e.target.classList.contains('add-multiple-playlists')) {
    [...$$('.container-backup-centrado .btn-backup-active')].forEach(el => {
      el.classList.remove('btn-backup-active');
    });
    e.target.classList.add('btn-backup-active');
    let textareaHermana =
      e.target.nextElementSibling?.firstElementChild ?? '';
    if (!textareaHermana) return;
    let valor = e.target.nextElementSibling.firstElementChild.value ?? '';
    if (!localStorage.getItem('listname-cards')) {
      textareaHermana.value =
        'There are not playlists, you need at least one.';
      localStorage.setItem('listname-cards', '');
      return;
    }
    let listNameCards = JSON.parse(localStorage.getItem('listname-cards'));
    if (!valor) textareaHermana.value = 'Write something';
    const completeRegExp =
      /^\s*(("[^0-9\-_][\w\s\-]{0,19}"\s*:\s*\[\s*(\[\s*"[^"]+"\s*,\s*"(https:\/\/20essentials\.github\.io\/[^"]+\/songs\/n\d+\.\w{1,10})"\s*\](\s*,\s*)?)*\s*\]\s*,?\s*)+)\s*$/;

    if (completeRegExp.test(valor)) {
      textareaHermana.classList.remove('non-valid');
      textareaHermana.classList.add('valid');

      let listNameCardsString = JSON.stringify(listNameCards, null, 2).slice(
        1,
        -1
      );
      let texto = valor.replace(/\\"\;/g, '"');
      let textoString = JSON.stringify(texto, null, 2);
      let newText = texto.replace(/,\s*(?=\])/g, '');

      if (newText.trim().at(-1) === ',') {
        newText = newText.trim().slice(0, -1);
      }

      let concatenacion = `{
        ${listNameCardsString},${newText}
      }`;
      let parseado = JSON.parse(concatenacion);
      localStorage.setItem('listname-cards', JSON.stringify(parseado));

      setTimeout(() => {
        textareaHermana.value = 'Agregado correctamente';
      }, 1000);

      return;
    }
    textareaHermana.classList.remove('valid');
    textareaHermana.classList.add('non-valid');

    return;
  }
  if (e.target.classList.contains('btn-get-one-array')) {
    [...$$('.container-backup-centrado .btn-backup-active')].forEach(el =>
      el.classList.remove('btn-backup-active')
    );
    e.target.classList.add('btn-backup-active');

    let textareaHermana = e.target.nextElementSibling?.firstElementChild;
    if (!textareaHermana) return;

    let valor = textareaHermana.value || '';
    let listNameCards = JSON.parse(
      localStorage.getItem('listname-cards') || '""'
    );
    if (!listNameCards) {
      textareaHermana.value =
        'There are not playlists, you need at least one.';
      localStorage.setItem('listname-cards', '');
      return;
    }

    let arrayPlaylist = valor.split(',').map(el => el.trim());
    const textareOuput = document.getElementById('textarea-output');
    const valorIndentacion = Number(textareOuput.dataset.indentation) || 0;

    if (arrayPlaylist.length === 1) {
      textareOuput.value = listNameCards[arrayPlaylist[0]]
        ? `"${arrayPlaylist[0]}": ${JSON.stringify(
            listNameCards[arrayPlaylist[0]],
            null,
            valorIndentacion
          )}`
        : 'Not found';
      return;
    }

    textareOuput.value = arrayPlaylist
      .map(
        name =>
          `${name}: ${
            listNameCards[name]
              ? JSON.stringify(listNameCards[name], null, valorIndentacion)
              : 'Not found'
          },\n`
      )
      .join('');
  }
  if (e.target.classList.contains('btn-get-many-arrays')) {
    [...$$('.container-backup-centrado .btn-backup-active')].forEach(el =>
      el.classList.remove('btn-backup-active')
    );
    e.target.classList.add('btn-backup-active');

    let textareaHermana = e.target.nextElementSibling?.firstElementChild;
    if (!textareaHermana) return;

    let valor = textareaHermana.value || '';
    let listNameCards = JSON.parse(
      localStorage.getItem('listname-cards') || '""'
    );
    if (!listNameCards) {
      textareaHermana.value =
        'There are not playlists, you need at least one.';
      localStorage.setItem('listname-cards', '');
      return;
    }

    let arrayPlaylist = valor.split(',').map(el => el.trim());
    const textareOuput = document.getElementById('textarea-output-2');
    const valorIndentacion = Number(textareOuput.dataset.indentation) || 0;

    if (arrayPlaylist.length === 1) {
      textareOuput.value = listNameCards[arrayPlaylist[0]]
        ? `"${arrayPlaylist[0]}": ${JSON.stringify(
            listNameCards[arrayPlaylist[0]],
            null,
            valorIndentacion
          )}`
        : 'Not found';
      return;
    }

    textareOuput.value = arrayPlaylist
      .map(
        name =>
          `${name}: ${
            listNameCards[name]
              ? JSON.stringify(listNameCards[name], null, valorIndentacion)
              : 'Not found'
          },\n`
      )
      .join('');
  }
  if (e.target.matches('.container-backup-centrado .btn-get-total-object')) {
    [...$$('.container-backup-centrado .btn-backup-active')].forEach(el => {
      el.classList.remove('btn-backup-active');
    });
    e.target.classList.add('btn-backup-active');
    let textareaHermana =
      e.target.nextElementSibling?.firstElementChild ?? '';
    if (!textareaHermana) return;
    let valor = e.target.nextElementSibling.firstElementChild.value ?? '';
    if (!localStorage.getItem('listname-cards')) {
      textareaHermana.value =
        'There are not playlists, you need at least one.';
      localStorage.setItem('listname-cards', '');
      return;
    }
    let listNameCards = JSON.parse(localStorage.getItem('listname-cards'));

    if (!valor) textareaHermana.value = 'Write something';
    const completeRegExp =
      /^\s*"([^0-9\-_][\w\s\-]{0,20})":\s*\[\s*(\[\s*"[^"]+"\s*,\s*"(https:\/\/20essentials\.github\.io\/[^"]+\/songs\/n\d+\.\w{2,5})"\s*\](\s*,\s*)?)*\s*\],?\s*$/;

    if (completeRegExp.test(valor)) {
      textareaHermana.classList.remove('non-valid');
      textareaHermana.classList.add('valid');

      let listNameCardsString = JSON.stringify(listNameCards, null, 2).slice(
        1,
        -1
      );

      let texto = valor.replace(/\\"\;/g, '');
      let textoString = JSON.stringify(texto, null, 2);
      const newText = texto.replace(/,\s*(?=\])/g, '');

      let concatenacion = `{
        ${listNameCardsString},${newText}
      }`;

      let parseado = JSON.parse(`${concatenacion}`);
      localStorage.setItem('listname-cards', JSON.stringify(parseado));

      setTimeout(() => {
        textareaHermana.value = 'Added successfully';
      }, 1000);

      return;
    }
    textareaHermana.classList.remove('valid');
    textareaHermana.classList.add('non-valid');

    return;
  }
  if (e.target.matches('.copiar')) {
    let currentTextarea = e.target.closest(
      '.textarea-container'
    ).firstElementChild;
    currentTextarea.select();
    currentTextarea.setSelectionRange(0, 10000000);
    navigator.clipboard.writeText(currentTextarea.value);
    return;
  }
  if (e.target.matches('.tachito')) {
    let currentTextarea = e.target.closest(
      '.textarea-container'
    ).firstElementChild;
    currentTextarea.value = '';
    return;
  }
  if (e.target.matches('.btn-delete')) {
    [...$$('.container-backup-centrado .btn-backup-active')].forEach(el => {
      el.classList.remove('btn-backup-active');
    });
    e.target.classList.add('btn-backup-active');
    localStorage.clear();
    renderPlaylistCards();
  }
});

function renderPlaylistCards() {
  if (localStorage.getItem('listname-cards')) {
    let objectDeCards = JSON.parse(localStorage.getItem('listname-cards'));
    let playListSection = d.querySelector('.playlist-section-articles');
    playListSection.innerHTML = '';
    let $template = d.querySelector('.template-card-single').content;
    let fragmento = document.createDocumentFragment();

    for (let property in objectDeCards) {
      $template.querySelector('.card-single-right h3').textContent = property;
      let cancionesLength = objectDeCards[property].length;
      $template.querySelector(
        '.card-single-right p'
      ).textContent = `${cancionesLength} 
      ${cancionesLength === 1 ? 'song' : 'songs'}`;
      let $cardSingleClon = $template.cloneNode(true);
      fragmento.append($cardSingleClon);
    }
    playListSection.append(fragmento);
  }

  addFotoStars();
}

renderPlaylistCards();

$inputPlaylist.addEventListener('input', e => {
  e.target.parentElement.querySelector(
    '.max-length-input output'
  ).textContent = e.target.value.length;

  if (e.target.value.length === 0) {
    e.target.classList.remove('valid', 'invalid');
    return;
  }

  if (
    regExP.test(e.target.value) &&
    !comprobeExistThisProperty(e.target.value)
  ) {
    e.target.classList.remove('invalid');
    e.target.classList.add('valid');
  } else {
    e.target.classList.remove('valid');
    e.target.classList.add('invalid');
  }
});

$inputPlaylist2.addEventListener('input', e => {
  e.target.parentElement.querySelector('.max-length-input output').innerHTML =
    $inputPlaylist2.value.length;

  if (e.target.value.length === 0) {
    e.target.classList.remove('valid', 'invalid');
    return;
  }

  if (
    regExP.test(e.target.value) &&
    !comprobeExistThisProperty(e.target.value)
  ) {
    e.target.classList.remove('invalid');
    e.target.classList.add('valid');
  } else {
    e.target.classList.remove('valid');
    e.target.classList.add('invalid');
  }
});

window.addEventListener('storage', e => {
  if (localStorage.getItem('listname-cards')) {
    if (e.key === 'listname-cards') {
      localStorage.setItem('listname-cards', e.newValue);
      renderPlaylistCards();
    }
  }
});

(function addOptionsToTheDataList() {
  let $dataList = $('.am-datalist');
  let listOfNameCard = localStorage?.getItem('listname-cards');
  if (listOfNameCard) {
    let html = '';
    let listOfNames = JSON.parse(localStorage.getItem('listname-cards'));
    for (let key in listOfNames) {
      html += `<option value="${key.trim()}"></option>`;
    }

    $dataList.innerHTML = html;
  }
})();
