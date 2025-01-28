const path = 'https://20essentials.github.io';

const bands = [
  /* ======================= A ======================= */
  ['Asian Kung Fu Generation', `${path}/akfg`],
  ['Ahrix', `${path}/ahrix-ost/`],
  ['Axol', `${path}/axol`],
  ['Alessia Cara', `${path}/alessia-cara`],
  ['Akiaura', `${path}/akiaura-ost`],
  ['AC - DC', `${path}/ac--dc`],
  ['Ariana Grande', `${path}/ariana-grande`],
  ['A-ha', `${path}/a-ha`],
  ['Adieu Aru', `${path}/adieu-4ru`],
  ['Artic Monkeys', `${path}/artic-monkeys`],
  ['Alphaville', `${path}/alphaville`],
  ['Arena Hash', `${path}/arena-hash`],
  ['Aerosmith', `${path}/aerosmith-ost/`],
  ['Alabama 3', `${path}/alabama3-ost/`],
  ['Audioslave', `${path}/audioslave-ost`],
  ['Alan Walker', `${path}/alan--walker`],
  ['AKFG', `${path}/akfg`],
  ['Agnes Obel', `${path}/agnes-obel`],
  ['Autechre', `${path}/autechre`],
  ['Alex Bueno', `${path}/alex-bueno/`],
  ['Alexander Rybak', `${path}/alexander-rybak/`],
  ['Akassuna', `${path}/akassuna/`],

  /* ======================= B ======================= */
  ['Beyonce', `${path}/beyonce/`],
  ['Barbie', `${path}/barbie-soundtrack/`],
  ['Børns', `${path}/borns-ost/`],
  ['Boston', `${path}/boston/`],
  ['Blur', `${path}/blur-ost/`],
  ['Benson Boone', `${path}/benson-boone/`],
  ['Bojack Horseman', `${path}/bojack-horseman/`],
  ['Beach Weather', `${path}/beach-weather-ost/`],
  ['Butterfly Boucher', `${path}/butterfly-boucher/`],
  ['Bob Dylan', `${path}/bob-dylan/`],
  ['Ben 10', `${path}/ben-10/`],
  ['Beauz', `${path}/beauz/`],
  ['Blueberry', `${path}/blueberry/`],
  ['Blackbear', `${path}/blackbear/`],
  ['Bastille', `${path}/bastille/`],
  ['Bruce Springsteen', `${path}/bruce-springsteen/`],
  ['Blondie', `${path}/blondie-ost/`],
  ['Black Sabbath', `${path}/black-sabbath/`],
  ['Bad Bunny', `${path}/bad-bunny/`],
  ['Billy Idol', `${path}/billy-idol/`],
  ['Blink 182', `${path}/blink-182-ost/`],
  ['Bonobo', `${path}/bonobo/`],
  ['Bruno Mars', `${path}/bruno-mars/`],
  ['Bag Raiders', `${path}/bag-raiders/`],

  /* ======================= C ======================= */
  ['Cage the Elephant', `${path}/cage-the-elephant-ost/`],
  ['Culture Code', `${path}/culture-code-ost`],
  ['Cartoon', `${path}/cartoon-ost/`],
  ['Clint Mansell', `${path}/clint-mansell/`],
  ['Crim3s', `${path}/crim3s`],
  ['Cadmium', `${path}/cadmium/`],
  ['Counting Crows', `${path}/counting-crows/`],
  ['Craspore', `${path}/craspore/`],
  ['Clovis Reyes', `${path}/clovis-reyes/`],
  ['Cigarettes After Sex', `${path}/cigarettes-after-sex/`],
  ['Calvin Harris', `${path}/calvin-harris/`],
  ['Crystal Castles', `${path}/crystal-castles-ost`],
  ['Carl Duglas', `${path}/carl-douglas/`],
  ['Cindy Lauper', `${path}/cindy-lauper/`],
  ['Coldplay', `${path}/coldplay/`],
  ['Charly Black', `${path}/charly-black/`],
  ['Cnco', `${path}/cnco/`],
  ['Carpenter Brut', `${path}/carpenter-brut/`],
  ['Chino y Nacho', `${path}/chino-y-nacho/`],
  ['Chromeo', `${path}/chromeo-ost/`],
  ['Culture Beat', `${path}/culture-beat-ost/`],
  ['Chvrches', `${path}/chvrches-ost/`],
  ['Can', `${path}/can/`],

  /* ======================= D ======================= */
  ['Deep Purple', `${path}/deep-purple-ost/`],
  ['Disfigure', `${path}/disfigure/`],
  ['Drake', `${path}/drake/`],
  ['Def Leppard', `${path}/def-leppard-ost/`],
  ['Daft Punk', `${path}/daft-punk-ost/`],
  ['Don Omar', `${path}/don-omar/`],
  ['Different Heaven', `${path}/different-heaven-ost/`],
  ['Diviners', `${path}/diviners-ost/`],
  ['David Guetta', `${path}/david-guetta/`],
  ['Dj Snake', `${path}/dj--snake/`],
  ['Dua Lipa', `${path}/dua-lipa/`],
  ['Dj Bobo', `${path}/dj-bobo-ost/`],
  ['DLS 2016 - Soundtrack', `${path}/dream-league-soccer-2016/`],
  ['Depeche Mode', `${path}/depeche-mode/`],
  ['DLS 2020 - Soundtrack', `${path}/dream-league-soccer-2020/`],
  ['Dream League Soccer 2016 - Soundtrack', `${path}/dream-league-soccer-2016/`],
  ['Dream League Soccer 2020 - Soundtrack', `${path}/dream-league-soccer-2020/`],
  ['Duncan Laurence', `${path}/duncan-laurence/`],
  ['Daughter', `${path}/daughter/`],
  ['Dire Straits', `${path}/dire-straits/`],
  ['Dead or Alive', `${path}/dead-or-alive/`],
  ['Duncan Dhu', `${path}/duncan-dhu/`],
  ['Dominic Fike', `${path}/dominic-fike/`],
  ['Danza Invisible', `${path}/danza-invisible/`],

  /* ======================= E ======================= */
  ['Eagles', `${path}/eagles-ost/`],
  ['Eurythmics', `${path}/eurythmics/`],
  ['Elton John', `${path}/elton-john-ost/`],
  ['Evanescence', `${path}/evanescence/`],
  ['Erasure', `${path}/erasure-ost/`],
  ['Edd Sheeran', `${path}/edd-sheeran-ost/`],
  ['Eva Ayllón', `${path}/eva-ayllon-ost/`],
  ['Enrique Iglesias', `${path}/enrique-iglesias-ost/`],
  ['Enigma', `${path}/enigma-ost/`],
  ['Electric Light Orchestra', `${path}/electric-light-orchestra/`],
  ['El Último De La Fila', `${path}/el-ultimo-de-la-fila-ost/`],
  ['Earth Wind and Fire', `${path}/earth-wind-and-fire/`],
  ['Elo', `${path}/electric-light-orchestra/`],

  /* ======================= F ======================= */
  ['Foo Fighters', `${path}/foo-fighters/`],
  ['Flow', `${path}/flow-ost/`],
  ['FleetWood Mac', `${path}/fleetwood/`],
  ['Foreigner', `${path}/foreigner/`],
  ['Flume', `${path}/flume-ost/`],
  ['Foster The People', `${path}/foster-the-people/`],
  ['Forhill', `${path}/forhill/`],
  ['Franz Ferdinand', `${path}/franz-ferdinand-ost/`],
  ['Fitz and the Tantrums', `${path}/fitz-and-the-tantrums-ost/`],
  ['Frágil', `${path}/fragil/`],
  ['Fantom 87', `${path}/fantom-87-ost/`],
  ['French Montana', `${path}/french-montana-ost/`],
  ['Final Fantasy VII', `${path}/final-fantasy-7/`],
  ['Fatboy Slim', `${path}/fatboy-slim-ost/`],
  ['Fkj', `${path}/fkj/`],
  ['Fuego', `${path}/fuego-ost/`],
  ['Free Fire', `${path}/free-fire/`],
  ["Fool's Garden", `${path}/fools-garden/`],
  ["Faithless", `${path}/faithless/`],
  ["Florence + The Machine", `${path}/florence-more-machine/`],

  /* ======================= G ======================= */
  ['Green Day', `${path}/green-day-ost/`],
  ['Good Charlotte', `${path}/good-charlotte/`],
  ['Grouplove', `${path}/grouplove/`],
  [`Guns N' Roses`, `${path}/guns-n-roses-ost/`],
  ['Gorillaz', `${path}/gorillaz-ost/`],
  ['Garbage', `${path}/garbage/`],
  [`Glhf`, `${path}/glhf`],
  ['Galantis', `${path}/galantis-ost/`],
  ['Gesaffelstein', `${path}/gesaffelstein/`],
  ['Glass Animals', `${path}/glass-animals-ost/`],
  ['Glwzbll', `${path}/glwzbll/`],
  ['Glude', `${path}/glude/`],
  ['Geolier', `${path}/geolier/`],
  ['Gaitán Castro', `${path}/gaitan-castro/`],
  ['Grimes', `${path}/grimes-ost/`],

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
  ['Interpol', `${path}/interpol/`],
  ['Imagine Dragons', `${path}/imagine--dragons/`],
  ['Izecold', `${path}/izecold/`],
  ['Incubus', `${path}/incubus/`],
  ['Iracundos', `${path}/los-iracundos/`],
  ['Icona Pop', `${path}/icona-pop/`],
  ['Iced Earth', `${path}/iced-earth`],

  /* ======================= J ======================= */
  ['Jack Black', `${path}/jack-black/`],
  ['Jet', `${path}/jet/`],
  ['JJD', `${path}/jjd-ost/`],
  ['Joy Division', `${path}/joy-division/`],
  ['Justice', `${path}/justice-ost/`],
  ['Jim Yosef', `${path}/jim-yosef/`],
  ['JCole', `${path}/j-cole/`],
  ['Jo Cohen', `${path}/jo-cohen`],
  ['Janji', `${path}/janji`],
  ['Jutty Ranx', `${path}/jutty-ranx/`],
  ['Jimi Hendrix', `${path}/jimi-hendrix/`],
  ['John Newman', `${path}/john-newman/`],
  ['Joan Jett And The Blackhearts', `${path}/joan-jett-and-the-blackhearts/`],
  ['Jefferson Tadeo', `${path}/jefferson-tadeo/`],
  ['Journey', `${path}/journey-ost/`],
  ['Jamiroquai', `${path}/jamiroquai/`],
  ['Jackson 5', `${path}/jackson-5/`],
  ['Jungle', `${path}/jungle-ost/`],

  /* ======================= K ======================= */
  ['Kanye West', `${path}/kanye-west-ost`],
  ['Keane', `${path}/keane`],
  ['Kid cudi', `${path}/kid-cudi`],
  ['Kamatte', `${path}/kamatte`],
  ['Kike Jiménez', `${path}/kike-jimenez/`],
  ['Kana-Boon', `${path}/kana-boon-ost/`],
  ['K-391', `${path}/k-391/`],
  ['Kings of Leon', `${path}/kings-of--leon/`],
  ['Kasabian', `${path}/kasabian-ost/`],
  ['Katy Perry', `${path}/katy-perry/`],
  ['Kaleo', `${path}/kaleo/`],
  ['Kohta Yamamoto', `${path}/kohta-yamamoto/`],
  ['Kmfdm', `${path}/kmfdm/`],

  /* ======================= L ======================= */
  ['Lisa', `${path}/lisa/`],
  ['LazerPunk', `${path}/lazerpunk`],
  ['Linkin Park', `${path}/linkin-park-ost/`],
  ['La Roux', `${path}/la-roux/`],
  ['Lynyrd Skynyrd', `${path}/lynyrd-skynyrd-ost/`],
  ['Luis Enrique', `${path}/luis-enrique//`],
  ['League of Legends', `${path}/league-of-legends`],
  ['Linked Horizon', `${path}/linked-horizon-ost/`],
  ['Lol', `${path}/league-of-legends`],
  ['Lana del Rey', `${path}/lana-del-rey/`],
  ['Los Violadores', `${path}/los-vi0ladores/`],
  ['Left 4 Dead 2', `${path}/left-4-dead/`],
  ['Led Zepellin', `${path}/led-zepellin//`],
  ['Lost Frequencies', `${path}/lost-frequencies-ost/`],
  ['La Unión', `${path}/la-union/`],
  ['La Ley', `${path}/la-ley/`],
  ['Los Prisioneros', `${path}/los-prisioneros/`],
  ['Luis Fonsi', `${path}/luis-fonsi/`],
  ['Leeandlie', `${path}/leeandlie/`],
  ['La Bouche', `${path}/la-bouche-ost/`],
  ['Legend of Zelda', `${path}/legend-of-zelda/`],
  ['Lost Sky', `${path}/lost-sky/`],
  ['Los Enanitos Verdes', `${path}/los-enanitos-verdes/`],
  ['Little Dragon', `${path}/little-dragon/`],
  ['Libido', `${path}/libido/`],
  ['Los Iracundos', `${path}/los-iracundos/`],
  ['Los Morrochucos', `${path}/los-morrochucos/`],
  ['Luther Vandross', `${path}/luther-vandross`],
  ['Lucha Reyes', `${path}/lucha-reyes/`],
  ['Lcd', `${path}/lcd/`],

  /* ======================= M ======================= */
  ['M83', `${path}/m83/`],
  ['Macklemore', `${path}/macklemore/`],
  ['Miguel Bosé', `${path}/miguel-bose/`],
  ['Mr Kitty', `${path}/mr-kitty/`],
  ['Mgmt', `${path}/mgmt/`],
  ['Marlon Roudette', `${path}/marlon-roudette/`],
  ['Modest Mouse', `${path}/modest-mouse/`],
  ['Mazemirror', `${path}/mazemirror/`],
  ['Magneto', `${path}/magneto/`],
  ['Men At Work', `${path}/men-at-work/`],
  ['Miki González', `${path}/miki-gonzales/`],
  ['Madonna', `${path}/madonna/`],
  ['Masterboy', `${path}/masterboy/`],
  ['Martin Garrix', `${path}/martin-garrix/`],
  ['Memorex Memories', `${path}/memorex-memories/`],
  ['Marwa Loud', `${path}/marwa-loud//`],
  ['Myke Towers', `${path}/myke-towers/`],
  ['Marilyn Manson', `${path}/marilyn-manson/`],
  ['Mutiny On The Bounty', `${path}/mutiny-on-the-bounty/`],
  ['Matrix', `${path}/matrix/`],
  ['Maná', `${path}/mana/`],
  ['Michel Teló', `${path}/michel-telo/`],
  ['Major Lazer', `${path}/major-lazer-ost/`],
  ['Maroon 5', `${path}/maroon5/`],

  /* ======================= N ======================= */
  ['Neffex', `${path}/neffex/`],
  ['New Found Glory', `${path}/new-found-glory/`],
  ['Neon Rox', `${path}/neon-rox/`],
  ['Neon Genesis Evangelion', `${path}/neon-genesis-evangelion/`],
  ['Neon Trees', `${path}/neon-trees/`],
  ['Narvent', `${path}/narvent-ost/`],
  ['No mercy', `${path}/no-mercy/`],
  ['Nicky Jam', `${path}/nicky-jam/`],
  ['New Radicals', `${path}/new-radicals-ost/`],
  ['Nuages', `${path}/nuages/`],
  ['Nickelback', `${path}/nickelback/`],
  ['Nxcre', `${path}/nxcre/`],

  /* ======================= O ======================= */
  ["Oscar D'león", `${path}/oscar-d-leon/`],
  ['Oasis', `${path}/oasis/`],
  ['Outkast', `${path}/outkast/`],
  ['Omar Cabán', `${path}/omar-caban/`],
  ['Ofdream', `${path}/ofdream/`],
  ['Oneheart', `${path}/oneheart/`],
  ['Orbital', `${path}/orbital/`],
  ['One Republic', `${path}/one-republic/`],
  ['Outlaws', `${path}/outlaws-ost/`],
  ['Opeth', `${path}/opeth/`],
  ['Ocean Colour Scene', `${path}/ocean-colour-scene/`],

  /* ======================= P ======================= */
  ['Penguin Research', `${path}/penguin-research/`],
  ['Pedro Capo', `${path}/pedro-capo`],
  ['Prismo', `${path}/prismo/`],
  ['Project X', `${path}/project-x/`],
  ['Pixies', `${path}/pixies-ost/`],
  ['Portwave', `${path}/portwave-ost/`],
  ['Phillip Phillips', `${path}/phillip-phillips/`],
  ['Pastel Ghost', `${path}/pastel-ghost/`],
  ['Phantogram', `${path}/phantogram/`],
  ['Piano Deuss', `${path}/piano-deuss/`],
  ['Panic at the Disco', `${path}/panic-at-the-disco-ost/`],
  ['Pitbull', `${path}/pitbull/`],
  ['Pink Floyd', `${path}/pink-floyd/`],
  ['Pet Shop Boys', `${path}/pet-shop-boys/`],
  ['Pimpinela', `${path}/pimpinela/`],
  ['Pachelbel', `${path}/pachelbel/`],
  ['Propellerheads', `${path}/propellerheads/`],
  ['Petit Biscuit', `${path}/petit-biscuit/`],
  ['Pepe Vasquez', `${path}/pepe-vasquez/`],
  ['Placebo', `${path}/placebo/`],
  ['Pantera', `${path}/pantera/`],

  /* ======================= Q ======================= */
  ['Queen Latifah', `${path}/queen-latifah/`],
  ['Queensrÿche', `${path}/queensryche/`],
  ['Queen', `${path}/queen-ost/`],
  ['Quiet Riot', `${path}/quiet-riot-ost/`],
  ['Quicksilver', `${path}/quicksilver-ost/`],
  ['Queens Of The Stop Age', `${path}/queens-of-the-stop-age-ost/`],

  /* ======================= R ======================= */
  ['Resident Evil', `${path}/resident-evil/`],
  ['Red Swam', `${path}/red-swam//`],
  ['Roxette (version English)', `${path}/roxette-ost/`],
  ['Red Hot Chilli Peppers', `${path}/red-hot-chilli-peppers/`],
  ['Rupert Holmes', `${path}/rupert-holmes/`],
  ['Rage Against The Machine', `${path}/rage-against-the-machine/`],
  ['Royal Blood', `${path}/royal-blood/`],
  ['Rihanna', `${path}/rihanna/`],
  ['Roxette (version Spanish)', `${path}/roxette-in-spanish/`],
  ['Rauw Alejandro', `${path}/rauw-alejandro/`],
  ['Rata Blanca', `${path}/rata-blanca/`],
  ['Remy Zero', `${path}/remy-zero/`],
  ['Robert Miles', `${path}/robert-miles/`],
  ['Rhcp', `${path}/red-hot-chilli-peppers/`],
  ['Rauf & faik', `${path}/rauf-and-faik/`],
  ['Rick Astley', `${path}/rick-astley/`],
  ['Rocio Durcal', `${path}/rocio-durcal/`],
  ['Rammstein', `${path}/rammstein/`],
  ['Rio', `${path}/rio-ost/`],
  ['Rafaga', `${path}/rafaga/`],
  ['Ryan Gosling', `${path}/ryan-gosling/`],
  ['Ramones', `${path}/ramones/`],

  /* ======================= S ======================= */
  ['Spandau Ballet', `${path}/spandau-ballet/`],
  ['Surf Curse', `${path}/surf-curse/`],
  ['Sia', `${path}/sia/`],
  ['Sawano Hiroyuki', `${path}/sawano-hiroyuki-ost/`],
  ['Spin Doctors', `${path}/spin-doctors/`],
  ['September 87', `${path}/september-87-ost/`],
  ['Succession', `${path}/succession/`],
  ['St. Vincent', `${path}/st-vincent/`],
  ['Snap!', `${path}/snap/`],
  ['Sim', `${path}/sim/`],
  ['Sidewalks and Skeletons', `${path}/sidewalks-and-skeletons-ost/`],
  ['Sandra', `${path}/sandra/`],
  ['Skrillex', `${path}/skrillex/`],
  ['Stevie Wonder', `${path}/stevie-wonder//`],
  ['Skyrim', `${path}/skyrim/`],
  ['Ship Wrek', `${path}/ship-wrek-ost/`],
  ['Shrek 2', `${path}/shrek-2/`],
  ['Serena', `${path}/serena/`],
  [
    'Star vs. The Forces Of Evil - Soundtrack',
    `${path}/star-vs-the-forces-of-evil-soundtrack/`
  ],
  ['Shakira', `${path}/shakira/`],
  ['Selena Gomez', `${path}/selena-gomez/`],
  ['Soda Stereo', `${path}/soda-stereo/`],
  ['Sad Puppy', `${path}//sad-puppy-ost/`],
  ['Savage Garden', `${path}/savage-garden/`],

  /* ======================= T ======================= */
  ['The Score', `${path}/the-score/`],
  ['Twisted Sister', `${path}/twisted-sister/`],
  ['The Rare Occasions', `${path}/the-rare-occasions/`],
  ['The Rolling Stones', `${path}/the-rolling-stones/`],
  ['Torbellino', `${path}/torbellino/`],
  ['The Beach Boys', `${path}/the-beach-boys/`],
  ['The Black Eyed Peas', `${path}/the-black-eyed-peas/`],
  ['The Weeknd', `${path}/the-weeknd/`],
  ['The Script', `${path}/the-script-ost/`],
  ['Tony Igy', `${path}/tony-igy/`],
  ['The Smiths', `${path}/the-smiths-ost/`],
  ['Toto', `${path}/toto-ost/`],
  ['Timbaland', `${path}/timbaland/`],
  ['The Rasmus', `${path}/the-rasmus/`],
  ['Two Door Cinema Club', `${path}/two-door-cinema-club/`],
  ['The Neighbourhood', `${path}/the-neighbourhood/`],
  ['The Killers', `${path}/the-killers/`],
  ['Thirty Seconds To Mars', `${path}/30-seconds-to-mars/`],
  ['Tame Impala', `${path}/tame-impala/`],
  ['Tears For Fears', `${path}/tears-for-fears/`],
  ['Tron - Soundtrack', `${path}/tron/`],
  ['The Outfield', `${path}/the-outfield-ost/`],
  ['Tyler Bates', `${path}/tyler-bates/`],
  ['The Jackson 5', `${path}/jackson-5/`],

  /* ======================= U ======================= */
  ['U2', `${path}/u2/`],
  ['Unknown Brain', `${path}/unknown-brain-ost/`],
  ['Undertale', `${path}/undertale/`],
  ['Underworld', `${path}/underworld-ost/`],
  ['Ulver', `${path}/ulver-ost/`],
  ['UB40', `${path}/ub40-ost/`],
  ['Urge Overkill', `${path}/urge-overkill-ost/`],

  /* ======================= V ======================= */
  ['Vicetone', `${path}/vicetone-ost/`],
  ['Vanze', `${path}/vanze-ost/`],
  ['Vnv Nation', `${path}/vnv-nation/`],
  ['Vxllain', `${path}/vxllain/`],
  ['Vilma Palma', `${path}/vilma-palma/`],
  ['Van Halen', `${path}/van--halen/`],
  ['Village People', `${path}/village-people-ost/`],
  ['Velvet Revolver', `${path}/velvet-revolver-ost/`],
  ['Virus', `${path}/virus/`],
  ['Vitalic', `${path}/vitalic-ost/`],
  ['Vampire Weekend', `${path}/vampire-weekend-ost/`],
  ['Viti Ruiz', `${path}/viti-ruiz-ost/`],

  /* ======================= W ======================= */
  ['Will I Am', `${path}/william-james/`],
  ['Wasted Time', `${path}/wasted-time/`],
  ['Weezer', `${path}/weezer/`],
  ['Wilco', `${path}/wilco-ost/`],
  ['Warpaint', `${path}/warpaint/`],
  ['Wolfmother', `${path}/wolfmother/`],
  ['War', `${path}/war`],
  ['Warriyo', `${path}/warriyo/`],
  ['Wiguez & Vizzen', `${path}/wiguez-and-vizzen/`],
  ['Wafia', `${path}/wafia`],
  ['Wutang Clan', `${path}/wutang-ost/`],
  ['Woodkid', `${path}/woodkid-ost/`],

  /* ======================= X ======================= */
  ['Xerath', `${path}/xerath/`],
  ['Xiu Xiu', `${path}/xiu-xiu-ost/`],
  ['Xtc', `${path}/xtc-ost/`],
  ['Xray Spex', `${path}/xray-spex-ost/`],
  ['Xotox', `${path}/xotox-ost`],
  ['Xmal Deutschland', `${path}/xmal-deutschland-ost`],

  /* ======================= Y ======================= */
  ['Yoshiki', `${path}/yoshiki/`],
  ['Yamamoto Kohta', `${path}/kohta-yamamoto/`],
  ["Yousou N'dour", `${path}/youssou-ndour/`],
  ['Yazoo', `${path}/yazoo/`],
  ['Yardbirds', `${path}/yardbirds/`],
  ['Your Favorite Enemies', `${path}/your-favorite-enemies/`],
  ['Yeah Yeah Yeahs', `${path}/yeah-yeah-yeahs/`],
  ['Yandel', `${path}/yandel/`],
  ['Yellow Magic Orchestra', `${path}/yellow-magic-orchestra-ost/`],
  ['Yonderboi', `${path}/yonderboi-ost/`],

  /* ======================= Z ======================= */
  ['Zara Larsson', `${path}/zara-larsson/`],
  ['Zoé', `${path}/zoe/`],
  ['Zoids Chaotic Century', `${path}/zoids-chaotic-century/`],
  ['Zoids Guardian Force', `${path}/zoids-guardian-force/`],
  ['Zaza', `${path}/zaza/`],
  ['Zambo Cavero', `${path}/zambo-cavero/`],
  ['Zoot Woman', `${path}/zoot-woman/`],
  ['Zero 7', `${path}/zero-7/`],
  ['Zorken', `${path}/zorken/`],

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
  $$ = el => document.querySelectorAll(el),
  maxItemsInInput = 5;

let $inputPlaylist = $('.playlist-container-form .playlist-input');
let $inputPlaylist2 = $('.playlist-container-form-2 .playlist-input');
let regExP = /^(?![\s0-9\-_])[\w\s\-]{1,20}(?<![\s\-])$/;

function updateMaxItems() {
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;
  const isLessThan1000px = window.matchMedia('(max-width: 1000px)').matches;

  maxItemsInInput = isPortrait && isLessThan1000px ? 10 : 5;
  console.log(`maxItemsInInput: ${maxItemsInInput}`);
}

updateMaxItems();
window.addEventListener('resize', updateMaxItems);
window.addEventListener('orientationchange', updateMaxItems);

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

    for (i = 0; i < elArray.length && miContador < maxItemsInInput; i++) {
      if (
        elArray[i][0].substr(0, val.length).toUpperCase() === val.toUpperCase()
      ) {
        b = document.createElement('a');
        b.setAttribute('href', elArray[i][1]);
        b.translate = false;
        b.innerHTML = `<strong>${elArray[i][0].substr(0, val.length)}</strong>`;
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
const LOADER_CLASSNAME = [
  'cube',
  'pyramid',
  'star',
  'tetraPyramid',
  'multiFaces',
  'triangPre',
  'rombo3d',
  'sticks8',
  'sixlaps',
  'tuplas',
  'vasilisco',
  'pentagonal',
  'hexagonal',
  'octagonal',
  'pid',
  'frutr',
  'sphere',
  'pentaIn',
  'prismSquare',
  'trom',
  'miniPent',
  'pyramiDuplex'
];

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

      if (!regExP.test(input.value) || comprobeExistThisProperty(input.value)) {
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
      let objectCardNames = JSON.parse(localStorage.getItem('listname-cards'));
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

      if (!regExP.test(input.value) || comprobeExistThisProperty(input.value)) {
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
      let objectCardNames = JSON.parse(localStorage.getItem('listname-cards'));
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
    let textareaHermana = e.target.nextElementSibling?.firstElementChild ?? '';
    if (!textareaHermana) return;
    let valor = e.target.nextElementSibling.firstElementChild.value ?? '';
    if (!localStorage.getItem('listname-cards')) {
      textareaHermana.value = 'There are not playlists, you need at least one.';
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
    let textareaHermana = e.target.nextElementSibling?.firstElementChild ?? '';
    if (!textareaHermana) return;
    let valor = e.target.nextElementSibling.firstElementChild.value ?? '';
    if (!localStorage.getItem('listname-cards')) {
      textareaHermana.value = 'There are not playlists, you need at least one.';
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
      textareaHermana.value = 'There are not playlists, you need at least one.';
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
      textareaHermana.value = 'There are not playlists, you need at least one.';
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
    let textareaHermana = e.target.nextElementSibling?.firstElementChild ?? '';
    if (!textareaHermana) return;
    let valor = e.target.nextElementSibling.firstElementChild.value ?? '';
    if (!localStorage.getItem('listname-cards')) {
      textareaHermana.value = 'There are not playlists, you need at least one.';
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
  e.target.parentElement.querySelector('.max-length-input output').textContent =
    e.target.value.length;

  if (e.target.value.length === 0) {
    e.target.classList.remove('valid', 'invalid');
    return;
  }

  if (regExP.test(e.target.value) && !comprobeExistThisProperty(e.target.value)) {
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

  if (regExP.test(e.target.value) && !comprobeExistThisProperty(e.target.value)) {
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

document.addEventListener('contextmenu', function (e) {
  if (e.target.matches('.card-single-right h3')) {
    let h3Title = e.target.textContent;
    localStorage.setItem('lastNameCardClicked', h3Title);
  }
  if (e.target.matches('.card-single-right p')) {
    let h3Title = e.target.previousElementSibling.textContent;
    localStorage.setItem('lastNameCardClicked', h3Title);
  }
});
