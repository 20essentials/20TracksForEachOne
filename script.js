const path = 'https://20essentials.github.io';

const bands = [
  /* ======================= A ======================= */
  ['Asian Kung Fu Generation', `${path}/akfg-band/`],
  ['Alice Deejay', `${path}/alice-deejay/`],
  ['Al Bano e Romina Power', `${path}/al-bano-e-romina-power/`],
  ['Avenida Larco', `${path}/avenida-larco/`],
  ['Alphex Twin', `${path}/alphex-twin-ost/`],
  ['Ana Gabriel', `${path}/ana-gabriel-ost/`],
  ['Ahrix', `${path}/ahrix-soundtrack/`],
  ['Arcángel', `${path}/arcangel-ost/`],
  ['Arcade Fire', `${path}/arcade-fire/`],
  ['Axol', `${path}/axol-soundtrack/`],
  ['Adam Goldman', `${path}/adam-goldman-album/`],
  ['Akassuna', `${path}/akassuna-album/`],
  ['Ac/Dc', `${path}/ac-dc-band/`],
  ['Alessia Cara', `${path}/alessia-cara-ost/`],
  ['Ariana Grande', `${path}/ariana-grande-ost/`],
  ['Akiaura', `${path}/akiaura-ost/`],
  ['A-ha', `${path}/a-ha/`],
  ['Adieu Aru', `${path}/adieu-aru/`],
  ['Artic Monkeys', `${path}/artic-monkeys-ost`],
  ['Alphaville', `${path}/alphaville-ost/`],
  ['Arena Hash', `${path}/arena-hash-band/`],
  ['Aerosmith', `${path}/aerosmith-band/`],
  ['Alabama 3', `${path}/alabama-3-soundtrack/`],
  ['Audioslave', `${path}/audioslave-band/`],
  ['Alan Walker', `${path}/alan-walker-ost/`],
  ['AKFG', `${path}/akfg-band/`],
  ['Agnes Obel', `${path}/agnes-obel-album/`],
  ['Autechre', `${path}/autechre-band`],
  ['Alex Bueno', `${path}/alex-bueno-album/`],
  ['Alexander Rybak', `${path}/alexander-rybak-album/`],

  /* ======================= B ======================= */
  ['Beyonce', `${path}/beyonce-album/`],
  ['Bob Marley', `${path}/bob-marley-album/`],
  ['Blackpink', `${path}/blackpink/`],
  ['Barbie', `${path}/barbie-album/`],
  ['Barnard', `${path}/barnard/`],
  ['Belle and Sebastian', `${path}/belle-and-sebastian/`],
  ['Breaking Bad', `${path}/breaking-bad/`],
  ['Barren Gates', `${path}/barren-gates-ost/`],
  ['Børns', `${path}/borns-band/`],
  ['Borns', `${path}/borns-band/`],
  ['Boston', `${path}/boston-band/`],
  ['Blur', `${path}/blur-band/`],
  ['Benson Boone', `${path}/benson-boone-band/`],
  ['Bojack Horseman', `${path}/bojack-horseman-soundtrack/`],
  ['Beach Weather', `${path}/beach-weather-soundtrack/`],
  ['Butterfly Boucher', `${path}/butterfly-boucher-ost/`],
  ['Bob Dylan', `${path}/bob-dylan-album/`],
  ['Ben 10', `${path}/ben-10-album/`],
  ['Beauz', `${path}/beauz-ost/`],
  ['Blueberry', `${path}/blueberry-ost/`],
  ['Blackbear', `${path}/blackbear-ost/`],
  ['Bastille', `${path}/bastille-ost/`],
  ['Bruce Springsteen', `${path}/bruce-springsteen-ost/`],
  ['Blondie', `${path}/blondie-soundtrack/`],
  ['Black Sabbath', `${path}/black-sabbath-band/`],
  ['Bad Bunny', `${path}/bad-bunny-ost/`],
  ['Billy Idol', `${path}/billy-idol-soundtrack/`],
  ['Blink 182', `${path}/blink-182-band/`],
  ['Bonobo', `${path}/bonobo-band/`],
  ['Bon Iver', `${path}/bon-iver/`],
  ['Bruno Mars', `${path}/bruno-mars-album`],
  ['Bag Raiders', `${path}/bag-raiders-band/`],
  ['Bonnie Tyler', `${path}/bonnie-tyler/`],

  /* ======================= C ======================= */
  ['Cher', `${path}/cher-album/`],
  ['Cat Stevens', `${path}/cat-stevens-album/`],
  ['Chill Lofi', `${path}/chill-lofi`],
  ['Code Fi', `${path}/code-fi/`],
  ['Cnco', `${path}/cnco-band/`],
  ['Croixx', `${path}/croixx-album/`],
  ['Coez', `${path}/coez-album/`],
  ['Camilo Sesto', `${path}/camilo-sesto-album/`],
  ['Chuck Berry', `${path}/chuck-berry-album/`],
  ['Cartoon', `${path}/cartoon-soundtrack/`],
  ['Counting Crows', `${path}/counting-crows-band/`],
  ['Cadmium', `${path}/cadmium-band/`],
  ['Crim3s', `${path}/crimes-band/`],
  ['Cage the Elephant', `${path}/cage-the-elephant-band/`],
  ['Craspore', `${path}/craspore-album/`],
  ['Clint Mansell', `${path}/clint-mansell-band/`],
  ['Culture Code', `${path}/culture-code-album/`],
  ['Clovis Reyes', `${path}/clovis-reyes-album/`],
  ['Cigarettes After Sex', `${path}/cigarretes-after-sex-band/`],
  ['Calvin Harris', `${path}/calvin-harris-ost/`],
  ['Crystal Castles', `${path}/crystal-castles-band/`],
  ['Carl Duglas', `${path}/carl-douglas-ost/`],
  ['Cindy Lauper', `${path}/cindy-lauper/`],
  ['Coldplay', `${path}/coldplay/`],
  ['Charly Black', `${path}/charly-black-ost/`],
  ['Charly Garcia', `${path}/charly-garcia/`],
  ['Carpenter Brut', `${path}/carpenter-brut/`],
  ['Chino y Nacho', `${path}/chino-y-nacho-duo/`],
  ['Chromeo', `${path}/chromeo-soundrack/`],
  ['Culture Beat', `${path}/culture-beat-band/`],
  ['Chvrches', `${path}/chvrches-band/`],
  ['Can', `${path}/can-band/`],

  /* ======================= D ======================= */
  ['Deep Purple', `${path}/deep-purple-band/`],
  ['Develop Frame', `${path}/develop-frame-band/`],
  ['Dan Dan (オーロラ)', `${path}/dan-dan-album/`],
  ['Disfigure', `${path}/disfigure-band/`],
  ['Defqwop', `${path}/defqwop-album/`],
  ['Deorro', `${path}/deorro-band/`],
  ['Deaft Keav', `${path}/de4ft-keav-album/`],
  ['Drake', `${path}/drake-album/`],
  ['Def Leppard', `${path}/def-leppard-band/`],
  ['Daft Punk', `${path}/daft-punk-band/`],
  ['Don Omar', `${path}/don-omar-album/`],
  ['Dinosaur Jr', `${path}/dinosaur-jr/`],
  ['Different Heaven', `${path}/different-heaven-album/`],
  ['Diviners', `${path}/diviners-band/`],
  ['David Guetta', `${path}/david-guetta-ost/`],
  ['Dj Snake', `${path}/dj-snake-album/`],
  ['Dua Lipa', `${path}/dua-lipa-ost/`],
  ['Dj Bobo', `${path}/dj-bobo/`],
  ['Depeche Mode', `${path}/depeche-mode-band/`],
  ['DLS 2016', `${path}/dls-2016/`],
  ['DLS 2020', `${path}/dls-2020/`],
  ['Dream League Soccer 2016', `${path}/dls-2016/`],
  ['Dream League Soccer 2020', `${path}/dls-2020/`],
  ['Duncan Laurence', `${path}/duncan-laurence-ost/`],
  ['Daughter', `${path}/daughter-ost/`],
  ['Dire Straits', `${path}/dire-straits-ost/`],
  ['Dead or Alive', `${path}/dead-or-alive-band/`],
  ['Duncan Dhu', `${path}/duncan-dhu-ost/`],
  ['Dominic Fike', `${path}/dominic-fike-ost/`],
  ['Danza Invisible', `${path}/danza-invisible-band/`],
  ['Danny Ocean', `${path}/danny-ocean-album/`],
  ['Daddy Yankee', `${path}/daddy-yankee-band/`],
  ['David Kushner', `${path}/david-kushner-album/`],
  ['David Lyme', `${path}/david-lyme-band/`],

  /* ======================= E ======================= */
  ['Eagles', `${path}/eagles-album/`],
  ['Elvis Presley', `${path}/elvis-presley/`],
  ['Earth', `${path}/earth-band/`],
  ['Electro Light', `${path}/electro-light-album/`],
  ['Eurythmics', `${path}/eurythmics-album/`],
  ['Elton John', `${path}/elton-john-album/`],
  ['Evanescence', `${path}/evanescence-album/`],
  ['Erasure', `${path}/erasure-album/`],
  ['Elektronomia', `${path}/elektronomia/`],
  ['Ed Sheeran', `${path}/ed-sheeran-album`],
  ['Eva Ayllón', `${path}/eva-ayllon-album/`],
  ['Enrique Iglesias', `${path}/enrique-iglesias-album/`],
  ['Enigma', `${path}/enigma-band/`],
  ['Electric Light Orchestra', `${path}/elo-album/`],
  ['El Último De La Fila', `${path}/el-ultimo-de-la-fila-band/`],
  ['El Ultimo De La Fila', `${path}/el-ultimo-de-la-fila-band/`],
  ['Earth Wind and Fire', `${path}/earth-wind-and-fire-band/`],

  /* ======================= F ======================= */
  ['Fatboy Slim', `${path}/fatboy-slim/`],
  ['Fryderyk Chopin', `${path}/fryderyk-chopin/`],
  ['Fiona Apple', `${path}/fiona-apple/`],
  ['Foo Fighters', `${path}/foo-fighters-band/`],
  ['Flora Cash', `${path}/flora-cash/`],
  ['Fleet Foxes', `${path}/fleet-foxes/`],
  ['Foals', `${path}/foals/`],
  ['Five Finger Death Punch', `${path}/five-finger-death-band/`],
  ['Flow', `${path}/flow/`],
  ['Folder 5', `${path}/folder-5-band/`],
  ['Foreigner', `${path}/foreigner-band/`],
  ['Flume', `${path}/flume/`],
  ['Foster The People', `${path}/foster-the-people-band/`],
  ['Forhill', `${path}/forhill-band/`],
  ['Franz Ferdinand', `${path}/franz-ferdinand-ost/`],
  ['Fitz and the Tantrums', `${path}/fitz-and-the-tantrums-ost/`],
  ['Frágil', `${path}/fragil-band/`],
  ['Fragil', `${path}/fragil-band/`],
  ['FleetWood Mac', `${path}/fleetwood-mac-album/`],
  ['Fantom 87', `${path}/fantom-87-album/`],
  ['French Montana', `${path}/french-montana-album/`],
  ['Final Fantasy 7', `${path}/final-fantasy-7-album/`],
  ['Fkj', `${path}/fkj-album/`],
  ['Fuego', `${path}/fuego-album/`],
  ['Free Fire', `${path}/free-fire-album/`],
  ["Fool's Garden", `${path}/fools-garden-album/`],
  ['Faithless', `${path}/faithless-band/`],
  ['Florence + The Machine', `${path}/florence-and-the-machine/`],

  /* ======================= G ======================= */
  ['Green Day', `${path}/green-day-band/`],
  ['Grizzly', `${path}/grizzly-bear-ost/`],
  ['Good Charlotte', `${path}/good-charlote-band/`],
  ['Grouplove', `${path}/grouplove-band/`],
  [`Guns N' Roses`, `${path}/guns-n-roses-band`],
  ['Gorillaz', `${path}/gorillaz-band/`],
  ['Garbage', `${path}/garbage-band/`],
  [`Glhf`, `${path}/glhf-band/`],
  ['Galantis', `${path}/galantis-band/`],
  ['Gesaffelstein', `${path}/gesaffelstein-band/`],
  ['Glass Animals', `${path}/glass-animals-band/`],
  ['Glwzbll', `${path}/glwzbll-band/`],
  ['Glude', `${path}/glude-ost/`],
  ['Guru Josh', `${path}/guru-josh/`],
  ['Geolier', `${path}/geolier-band/`],
  ['Gaitán Castro', `${path}/gaitan-castro-band/`],
  ['Grimes', `${path}/grimes-band/`],

  /* ======================= H ======================= */
  ['Hippie Sabotage', `${path}/hippie-sabotage-ost/`],
  ['Hollow Coves', `${path}/hollow-coves/`],
  ['Hello Fiasco', `${path}/hello-fiasco/`],
  ['Hibou', `${path}/hibou-band/`],
  ['Harry Styles', `${path}/harry-styles-album/`],
  ['Hoodie Forester', `${path}/hoodie-forester-ost/`],
  ['Hiroyuki Sawano', `${path}/sawano-hiro/`],
  ['Hardwell', `${path}/hardwell-band/`],
  ['Him', `${path}/him/`],
  ['Hombres G', `${path}/hombres-g/`],
  ['Hans Zimmer', `${path}/hans-zimmer-ost/`],
  ['Hozier', `${path}/hozier-band/`],
  ['Hot Chip', `${path}/hot-chip-ost/`],
  ['How To Train Your Dragon', `${path}/how-to-train-your-dragon-soundtrack/`],
  ['Home', `${path}/home-band/`],
  ['Hikaru Utada', `${path}/hikaru-utada-album/`],
  ['Ha-Ash', `${path}/ha-ash-band/`],
  ['Hilary Cousins', `${path}/hilary-cousins/`],

  /* ======================= I ======================= */
  ['Indochine', `${path}/indochine-band/`],
  ['Ivan', `${path}/ivan-album/`],
  ['Inner Circle ', `${path}/inner-circle/`],
  ['Interpol', `${path}/interpol-band/`],
  ['Imagine Dragons', `${path}/imagine--dragons/`],
  ['Izecold', `${path}/izecold-band/`],
  ['Incubus', `${path}/incubus-band/`],
  ['Iracundos', `${path}/iracundos-album/`],
  ['Icona Pop', `${path}/icona-pop-band/`],
  ['Iced Earth', `${path}/iced-earth-band/`],

  /* ======================= J ======================= */
  ['Juan Gabriel', `${path}/juan-gabriel-album/`],
  ['Jarabe de Palo', `${path}/jarabe-de-palo/`],
  ['Johnny Cash', `${path}/johnny-cash/`],
  ['John Williams', `${path}/john-williams-ost/`],
  ['James Young', `${path}/jaymes-young-album/`],
  ['Jet', `${path}/jet-ost/`],
  ['JJD', `${path}/jjd/`],
  ['Joy Division', `${path}/joy-division-band/`],
  ['Justice', `${path}/justice-band/`],
  ['Jim Yosef', `${path}/jim-yosef-ost/`],
  ['JCole', `${path}/j-cole-band/`],
  ['Jack Black', `${path}/jack-black-album/`],
  ['Jo Cohen', `${path}/jo-cohen-band/`],
  ['Janji', `${path}/janji-band/`],
  ['JPB', `${path}/jpb/`],
  ['Joji', `${path}/joji`],
  ['Johan Sebastian Bach', `${path}/johan-sebastian-bach/`],
  ['Bach', `${path}/johan-sebastian-bach/`],
  ['Janelle Monae', `${path}/janelle-monae/`],
  ['Jutty Ranx', `${path}/jutty-ranx/`],
  ['Jimi Hendrix', `${path}/jimi-hendrix-album/`],
  ['John Newman', `${path}/john-newman-album/`],
  [
    'Joan Jett And The Blackhearts',
    `${path}/joan-jett-and-the-blackhearts-band/`
  ],
  ['Jefferson Tadeo', `${path}/jefferson-tadeo-album/`],
  ['Journey', `${path}/journey-band/`],
  ['Jamiroquai', `${path}/jamiroquia-band/`],
  ['Jackson 5', `${path}/jackson-5-album/`],
  ['The Jackson 5', `${path}/jackson-5-album/`],
  ['Jungle', `${path}/jungle-band/`],

  /* ======================= K ======================= */
  ['Kung Fu Panda', `${path}/kung-fu-panda/`],
  ['Kina', `${path}/kina-ost/`],
  ['Kavinsky', `${path}/kavinsky-album/`],
  ['Keane', `${path}/keane-band/`],
  ['Kid cudi', `${path}/kid-cudi-album/`],
  ['Kamatte', `${path}/kamatte-band/`],
  ['Ksb Studio', `${path}/ksb-studio-band/`],
  ['Kike Jiménez', `${path}/kike-jimenez-album/`],
  ['Kana-Boon', `${path}/kana-boon-band/`],
  ['K-391', `${path}/k391-album/`],
  ['Kings of Leon', `${path}/kings-of-leon-band/`],
  ['Kasabian', `${path}/kasabian-band/`],
  ['Katy Perry', `${path}/katy-perry-ost/`],
  ['Kaleo', `${path}/kaleo-ost/`],
  ['Kimbra', `${path}/kimbra`],
  ['Kmfdm', `${path}/kmfdm-band/`],
  ['Kaiser Chiefs', `${path}/kaiser-chiefs-ost/`],
  ['Kanye West', `${path}/kanye-west/`],

  /* ======================= L ======================= */
  ['Lisa', `${path}/lisa-album/`],
  ['Liue', `${path}/liue/`],
  ['Ludwig Van Beethoven', `${path}/beethoven/`],
  ['La India', `${path}/la-india/`],
  ['Loreen', `${path}/loreen/`],
  ['Le Castlevania', `${path}/le-castle-vania-ost-/`],
  ['Lady Gaga', `${path}/lady-gaga-ost/`],
  ['Lenny Kravitz', `${path}/lenny-kravitz-album/`],
  ['LazerPunk', `${path}/lazerpunk-band/`],
  ['Linkin Park', `${path}/linkin-park-band/`],
  ['Lensko', `${path}/lensko-album/`],
  ['Lykke Li', `${path}/lykke-li-album/`],
  ['Lord Huron', `${path}/lord-huron/`],
  ['Laura Branigan', `${path}/laura-branigan-ost/`],
  ['La Roux', `${path}/la-roux-band/`],
  ['Lynyrd Skynyrd', `${path}/lynird-skynyrd-band/`],
  ['Luis Enrique', `${path}/luis-enrique-album/`],
  ['League of Legends', `${path}/league-of-legends-band/`],
  ['Lol', `${path}/league-of-legends-band/`],
  ['Linked Horizon', `${path}/linked-horizon-album/`],
  ['Lana del Rey', `${path}/lana-del-rey-album/`],
  ['Los Violadores', `${path}/los-violadores-band/`],
  ['Left 4 Dead', `${path}/left-4-dead-album/`],
  ['Led Zepellin', `${path}/led-zepellin-album/`],
  ['Lost Frequencies', `${path}/lost-frequencies-band/`],
  ['La Unión', `${path}/la-union-band/`],
  ['La Ley', `${path}/la-ley-band/`],
  ['Los Prisioneros', `${path}/los-prisioneros-band/`],
  ['Luis Fonsi', `${path}/luis-fonsi-album/`],
  ['Leeandlie', `${path}/leeandlie-album/`],
  ['La Bouche', `${path}/la-bouche-album/`],
  ['Legend of Zelda', `${path}/legend-of-zelda-album/`],
  ['Lost Sky', `${path}/lost-sky-album/`],
  ['Los Enanitos Verdes', `${path}/los-enanitos-verdes-band/`],
  ['Little Dragon', `${path}/little-dragon-album/`],
  ['Libido', `${path}/libido-album/`],
  ['Los Iracundos', `${path}/los-iracundos/`],
  ['Los Morrochucos', `${path}/los-morrochucos-album/`],
  ['Luther Vandross', `${path}/luther-vandross-album/`],
  ['Lucha Reyes', `${path}/lucha-reyes-album/`],
  ['Lcd', `${path}/lcd-soundsystem-album/`],

  /* ======================= M ======================= */
  ['M83', `${path}/m83-band/`],
  ['Moses Sumney', `${path}/moses-sumney/`],
  ['Manz', `${path}/manz/`],
  ['Metric', `${path}/metric-album/`],
  ['Mazzy Star', `${path}/mazzy-star/`],
  ['Marracash', `${path}/marracash/`],
  ['Mon Laferte', `${path}/mon-laferte/`],
  ['Modern Talking', `${path}/modern-talking-band/`],
  ['Mike Menna', `${path}/mike-menna-band/`],
  ['Miguel Bosé', `${path}/miguel-bose-ost/`],
  ['Mr Kitty', `${path}/mr-kitty-ost/`],
  ['Mgmt', `${path}/mgmt-band/`],
  ['Marlon Roudette', `${path}/marlon-roudette-band/`],
  ['Modest Mouse', `${path}/modest-mouse-soundtrack/`],
  ['Mazemirror', `${path}/mazemirror-band/`],
  ['Magneto', `${path}/magneto-band/`],
  ['Manu Guix', `${path}/manu-guix-album/`],
  ['Macklemore', `${path}/macklemore-soundtrack/`],
  ['Men At Work', `${path}/men-at-work-band/`],
  ['Miki González', `${path}/miki-gonzales-ost/`],
  ['Madonna', `${path}/madonna-album/`],
  ['Masterboy', `${path}/masterboy-soundtrack/`],
  ['Martin Garrix', `${path}/martin-garrix-soundtrack/`],
  ['Maki Otsuki', `${path}/m4ki-otsuki/`],
  ['MacDemarco', `${path}/macdemarco/`],
  ['Memorex Memories', `${path}/memorex-memories/`],
  ['Marwa Loud', `${path}/marwa-loud-soundtrack/`],
  ['Myke Towers', `${path}/myke-towers-soundtrack/`],
  ['Marilyn Manson', `${path}/marilyn-manson-soundtrack/`],
  ['Mutiny On The Bounty', `${path}/mutiny-on-the-bounty-band/`],
  ['Matrix', `${path}/matrix-soundtrack/`],
  ['Mana', `${path}/mana-band/`],
  ['Michel Teló', `${path}/michel-telo-album/`],
  ['Major Lazer', `${path}/major-lazer-band/`],
  ['Maroon 5', `${path}/maroon-5-album/`],
  ['Mecano', `${path}/mecano-band/`],
  ['Metallica', `${path}/metallica-band/`],
  ['My Chemical Romance', `${path}/my-chemical-romance-album/`],
  ['Melanconia', `${path}/melancolia-band/`],
  ['Muse', `${path}/muse-band/`],

  /* ======================= N ======================= */
  ['Nirvana', `${path}/nirvana-band/`],
  ['Nino Bravo', `${path}/nino-bravo/`],
  ['Noemi', `${path}/noemi/`],
  ['Noisestorm', `${path}/noisestorm-band/`],
  ['New Found Glory', `${path}/new-found-glory-band/`],
  ['Neon Genesis Evangelion', `${path}/neon-genesis-evangelion-album/`],
  ['New Order', `${path}/new-order-band/`],
  ['Neon Trees', `${path}/neon-trees-album/`],
  ['Narvent', `${path}/narvent-album/`],
  ['No mercy', `${path}/no-mercy-band/`],
  ['Neon Rox', `${path}/neon-rox-album/`],
  ['Nicky Jam', `${path}/nicky-jam-soundtrack/`],
  ['Neffex', `${path}/neffex-soundtrack/`],
  ['Nick Cave', `${path}/nick-cave/`],
  ['New Radicals', `${path}/new-radicals-band/`],
  ['Nuages', `${path}/nuages-album/`],
  ['Nickelback', `${path}/nickelback-hits/`],
  ['Nxcre', `${path}/nxcre-band/`],
  ['Nostalghia', `${path}/nostalghia-band/`],
  ['Noisettes', `${path}/noisettes-band/`],

  /* ======================= O ======================= */
  ["Oscar D'león", `${path}/oscar-d-leon-album/`],
  ['Oasis', `${path}/oasis-ost/`],
  ['Outkast', `${path}/outkast-band/`],
  ['Omar Cabán', `${path}/omar-caban-ost/`],
  ['Ofdream', `${path}/ofdream/`],
  ['Oneheart', `${path}/oneheart-album/`],
  ['Orbital', `${path}/orbital-album/`],
  ['One Republic', `${path}/one-republic-band/`],
  ['Outlaws', `${path}/outlaws-band/`],
  ['Opeth', `${path}/opeth-album/`],
  ['Ocean Colour Scene', `${path}/ocean-colour-scene-band/`],
  ['Of Monsters and Men', `${path}/of-monsters-and-men-album/`],

  /* ======================= P ======================= */
  ['Penguin Research', `${path}/penguin-research-band/`],
  ['Phineas and Ferb', `${path}/phineas-and-ferb/`],
  ['Prince Royce', `${path}/prince-royce-ost/`],
  ['Pearl Jam', `${path}/pearl-jam-ost/`],
  ['Pat Benatar', `${path}/pat-benatar-ost/`],
  ['Paul Mccartney', `${path}/paul-mccartney-ost/`],
  ['Pedro Capo', `${path}/pedro-capo-album/`],
  ['Prismo', `${path}/prismo-band/`],
  ['Project X', `${path}/proyecto-x/`],
  ['Pixies', `${path}/pixies-band/`],
  ['Portwave', `${path}/portwave-album/`],
  ['Phillip Phillips', `${path}/phillip-phillips-album/`],
  ['Pastel Ghost', `${path}/pastel-ghost-album/`],
  ['Phantogram', `${path}/phantogram-band/`],
  ['Piano Deuss', `${path}/pianodeuss-album/`],
  ['Panic at the Disco', `${path}/panic-at-the-disco-album/`],
  ['Pitbull', `${path}/pitbull-album/`],
  ['Pink Floyd', `${path}/pink-floyd-band/`],
  ['Pxlish Beatz', `${path}/pxlish-beatz/`],
  ['Pet Shop Boys', `${path}/pet-shop-boys-band/`],
  ['Pimpinela', `${path}/pimpinela-band/`],
  ['Pantaleo', `${path}/pantaleo/`],
  ['Pachelbel', `${path}/pachelbel-band/`],
  ['Propellerheads', `${path}/propellerheaads/`],
  ['Petit Biscuit', `${path}/petit-biscuit-band/`],
  ['Pepe Vasquez', `${path}/pepe-vazquez/`],
  ['Placebo', `${path}/placebo-band/`],
  ['Pantera', `${path}/pantera-band/`],
  ['Pedro Suárez-Vértiz', `${path}/pedro-suarez-vertiz-ost/`],
  ['Power Rangers Wild Force', `${path}/power-rangers-wild-force-ost/`],
  ['Power Rangers Jungle Fury', `${path}/power-rangers-jungle-fury-ost/`],

  /* ======================= Q ======================= */
  ['Queen Latifah', `${path}/queen-latifah-band/`],
  ['Queensrÿche', `${path}/queensryche-band/`],
  ['Queen', `${path}/queen-band/`],
  ['Quiet Riot', `${path}/quiet-riot-band/`],
  ['Quicksilver', `${path}/quicksilver-band/`],
  ['Queens Of The Stop Age', `${path}/queens-of-the-stop-of-the-age-band/`],

  /* ======================= R ======================= */
  ['Resident Evil', `${path}/resident-evil-album/`],
  ['Raven Felix', `${path}/raven-felix/`],
  ['Revel 9', `${path}/revel-9/`],
  ['Rush', `${path}/rush-ost/`],
  ['Rancid', `${path}/rancid-ost/`],
  ['Rocio jurado', `${path}/rocio-jurado-ost/`],
  ['Rude', `${path}/rude-ost/`],
  ['Ray Sepulveda', `${path}/ray-sepulveda-ost/`],
  ['Romeo Santos', `${path}/romeo-santos-ost/`],
  ['Red Swam Versions', `${path}/red-swam-versions/`],
  ['Roxette', `${path}/roxette-in-english/`],
  ['Roxette (in Spanish)', `${path}/roxette-in-spanish-album/`],
  ['Red Hot Chilli Peppers', `${path}/rhcp-album/`],
  ['Robin Hustin', `${path}/robin-hustin/`],
  ['Rupert Holmes', `${path}/rupert-holmes-album/`],
  ['Rage Against The Machine', `${path}/rage-against-the-machine-album/`],
  ['Royal Blood', `${path}/royal-blood-album/`],
  ['Rihanna', `${path}/rihanna-ost/`],
  ['Rauw Alejandro', `${path}/rauw-alejandro-album/`],
  ['Rata Blanca', `${path}/rata-blanca-album/`],
  ['Rhcp Lives', `${path}/rhcp-lives-album/`],
  ['Remy Zero', `${path}/remy-zero-album/`],
  ['Robert Miles', `${path}/robert-miles-album/`],
  ['Rhcp', `${path}/red-hot-chilli-peppers/`],
  ['Rauf and faik', `${path}/rauf-and-faik-band/`],
  ['Rick Astley', `${path}/rick-astley-album/`],
  ['Rocio Durcal', `${path}/rocio-durcal-album/`],
  ['Rammstein', `${path}/ramnstein-album/`],
  ['Rio', `${path}/rio-band/`],
  ['Rafaga', `${path}/rafaga-album/`],
  ['Ryan Gosling', `${path}/ryan-gosling-album/`],
  ['Ramones', `${path}/ramones-band/`],
  ['Real Mccoy', `${path}/real-mccoy-album/`],
  ['Radiohead', `${path}/radiohead-album/`],

  /* ======================= S ======================= */
  ['Spandau Ballet', `${path}/spandau-ballet-album/`],
  ['Sarah Cothran', `${path}/sarah-cothran/`],
  ['Spider Man', `${path}/spider-man-soundtrack/`],
  ['The Amazing Spider-Man', `${path}/the-amazing-spiderman/`],
  ['Steve Lacy', `${path}/steve-lacy-ost/`],
  ['Sigur Rós', `${path}/sigur-ros-os/`],
  ['Studio Killers', `${path}/studio-killers-ost`],
  ['Surf Curse', `${path}/surf-curse-album/`],
  ['Sia', `${path}/sia-album/`],
  ['Sawano Hiroyuki', `${path}/sawano-hiro/`],
  ['Sunstroke Project', `${path}/sunstroke-project-album/`],
  ['Spin Doctors', `${path}/spin-doctors-ost/`],
  ['September 87', `${path}/september-87-album/`],
  ['Succession', `${path}/succession-soundtrack/`],
  ['St. Vincent', `${path}/st-vincent-band/`],
  ['Swedish House Mafia', `${path}/swedish-house-mafia-album/`],
  ['Soundgarden', `${path}/soundgarden-album/`],
  ['Snap!', `${path}/snap-ost/`],
  ['Sim', `${path}/sim-album/`],
  ['Silversun Pickups', `${path}/silversun-pickups-album/`],
  ['Sidewalks and Skeletons', `${path}/sidewalks-and-skeletons-band/`],
  ['SAS', `${path}/sidewalks-and-skeletons-band/`],
  ['Sandra', `${path}/sandra-album/`],
  ['Sandro', `${path}/sandro/`],
  ['Snoop Dogg', `${path}/sn00p-dogg/`],
  ['Skrillex', `${path}/skrillex-album/`],
  ['Stevie Wonder', `${path}/stevie-wonder-album/`],
  ['Skyrim', `${path}/skyrim-album/`],
  ['Ship Wrek', `${path}/ship-wrek-soundtrack/`],
  ['Shrek', `${path}/shrek/`],
  ['Serena', `${path}/serena-album/`],
  ['Star vs. The Forces Of Evil', `${path}/star-butterfly-album/`],
  ['Shakira', `${path}/shakira-album/`],
  ['Selena Gomez', `${path}/selena-gomez-ost/`],
  ['Soda Stereo', `${path}/soda-stereo-album/`],
  ['Syn Cole', `${path}/syn-cole-album`],
  ['Sebastian Palma', `${path}/sebastian-palma-ost/`],
  ['Sad Puppy', `${path}/sad-puppy-band/`],
  ['Savage Garden', `${path}/savage-garden-album/`],
  ['Skyfall Beats', `${path}/skyfall-beats-album/`],
  ['Sur Andino', `${path}/sur-andino-album/`],
  ['Saint Motel', `${path}/saint-motel-band/`],
  ['Sangiovanni', `${path}/sangiovanni-album/`],
  ['System of a Down', `${path}/system-of-a-down-album/`],
  ['Stone Template Pilots', `${path}/stone-temple-pilots-album/`],
  ['Stp', `${path}/stone-template-pilots-ost/`],

  /* ======================= T ======================= */
  ['Twenty One Pilots', `${path}/twenty-one-pilots-album/`],
  ['The Wombats', `${path}/the-wombats-album/`],
  ['The Oral Cigarretes', `${path}/the-oral-cigarretes/`],
  ['The Black Keys', `${path}/the-black-keys-band/`],
  ['The Dark Knight', `${path}/the-dark-knight-album/`],
  ['The Foundations', `${path}/the-foundations-album/`],
  ['The Chemical Brothers', `${path}/the-chemical-brothers-album/`],
  ['The Knack', `${path}/the-knack-album/`],
  ['The Kooks', `${path}/the-kooks/`],
  ['The Beatles', `${path}/the-beatles-album/`],
  ['Transtic Nerve', `${path}/transtic-nerve-album/`],
  ['The Score', `${path}/the-score-album/`],
  ['The Heavy', `${path}/the-heavy-ost/`],
  ['Terrence Mann', `${path}/johnny-steele-album/`],
  ['Johnny Steele', `${path}/johnny-steele-album/`],
  ['The Rare Occasions', `${path}/the-rare-occasions-album/`],
  ['The Rolling Stones', `${path}/the-rolling-stones-album/`],
  ['Tomandandy', `${path}/tomandandy-album/`],
  ['The Beach Boys', `${path}/the-beach-boys-album/`],
  ['Twisted Sister', `${path}/twisted-sister-album/`],
  ['The Black Eyed Peas', `${path}/the-black-eyed-peas-album/`],
  ['Torbellino', `${path}/torbellino-album/`],
  ['The Weeknd', `${path}/the-weeknd-album/`],
  ['The Script', `${path}/the-script-band/`],
  ['Tony Igy', `${path}/tony-igy-soundtrack/`],
  ['The Smiths', `${path}/the-smiths-album/`],
  ['Toto', `${path}/toto-band/`],
  ['The Kinks', `${path}/the-kinks-album/`],
  ['Timbaland', `${path}/timbaland-album/`],
  ['Tobu', `${path}/tobu`],
  ['The Rasmus', `${path}/the-rasmus-band/`],
  ['Two Door Cinema Club', `${path}/two-door-cinema-club-band/`],
  ['The Neighbourhood', `${path}/the-neighbourhood-ost/`],
  ['The Killers', `${path}/the-killers-ost/`],
  ['Thirty Seconds To Mars', `${path}/thirty-seconds-to-mars-band/`],
  ['Tame Impala', `${path}/tame-impala-ost/`],
  ['Tears For Fears', `${path}/tears-for-fears-band/`],
  ['Tron', `${path}/tron-soundtrack/`],
  ['The Outfield', `${path}/the-outfield-album/`],
  ['Tyler Bates', `${path}/tyler-bates-album/`],
  ['The Walters', `${path}/the-walters-album/`],

  /* ======================= U ======================= */
  ['U2', `${path}/u2-band/`],
  ['Unknown Brain', `${path}/unknown-brain-soundtrack/`],
  ['Undertale', `${path}/undertale-album//`],
  ['Underworld', `${path}/underworld-album/`],
  ['Ulver', `${path}/ulver-album/`],
  ['UB40', `${path}/ub40-album/`],
  ['Urge Overkill', `${path}/urge-overkill-album/`],

  /* ======================= V ======================= */
  ['Vicetone', `${path}/vicetone-band/`],
  ['Vanze', `${path}/vanze-album/`],
  ['Vnv Nation', `${path}/vnv-nation-ost/`],
  ['Vxllain', `${path}/vxllain-band/`],
  ['Vilma Palma', `${path}/vilma-palma-band/`],
  ['Van Halen', `${path}/van-halen-band/`],
  ['Village People', `${path}/village-people-band/`],
  ['Velvet Revolver', `${path}/velvet-revolver-band/`],
  ['Virus', `${path}/virus-band/`],
  ['Vitalic', `${path}/vitalic-band/`],
  ['Vampire Weekend', `${path}/vampire-weekend-band/`],
  ['Viti Ruiz', `${path}/viti-ruiz-album/`],

  /* ======================= W ======================= */
  ['Will I Am', `${path}/will-i-am-album/`],
  ['Westworld', `${path}/westworld/`],
  ['WWE Opening Themes', `${path}/wwe-opening-themes/`],
  ['Wasted Time', `${path}/wasted-time/`],
  ['The Who', `${path}/the-who-album/`],
  ['Weezer', `${path}/weezer-band/`],
  ['Wasted Time', `${path}/ted-time-album/`],
  ['Wilco', `${path}/wilco-album/`],
  ['Warpaint', `${path}/warpaint-band/`],
  ['Wolfmother', `${path}/wolfmother-band/`],
  ['War', `${path}/war-album/`],
  ['Warriyo', `${path}/warriyo-ost/`],
  ['Wiguez & Vizzen', `${path}/wiguez-and-vizzen/`],
  ['Wafia', `${path}/wafia`],
  ['Wutang Clan', `${path}/wutang-album/`],
  ['Woodkid', `${path}/woodkid-album/`],

  /* ======================= X ======================= */
  ['Xerath', `${path}/xerath-band/`],
  ['Xiu Xiu', `${path}/xiu-xiu-band/`],
  ['Xtc', `${path}/xtc-band/`],
  ['Xray Spex', `${path}/x-ray-spex-album`],
  ['Xotox', `${path}/xotox-album/`],
  ['Xmal Deutschland', `${path}/xmal-deutschland-album/`],

  /* ======================= Y ======================= */
  ['Yoshiki', `${path}/yoshiki-album/`],
  ['Yamamoto Kohta', `${path}/kohta-yamamoto-band/`],
  ['Kohta Yamamoto', `${path}/kohta-yamamoto-band/`],
  ['Yoasobi', `${path}/yoasobi`],
  ["Yousou N'dour", `${path}/youssou-ndour-album/`],
  ['Your Lie In April', `${path}/your-lie-in-april-album/`],
  ['Your the Giant', `${path}/your-the-giant/`],
  ['Yazoo', `${path}/yazoo-band/`],
  ['Yardbirds', `${path}/yardbirds-band/`],
  ['Your Favorite Enemies', `${path}/your-favorite-enemies-band/`],
  ['Yeah Yeah Yeahs', `${path}/yeah-yeah-yeahs-band/`],
  ['Yandel', `${path}/yandel-album/`],
  ['Yellow Magic Orchestra', `${path}/yellow-magic-orchestra-album/`],
  ['Yonderboi', `${path}/yonderboi-album/`],
  ['Yatashigang', `${path}/yatashigang-album/`],
  ['Yasuharu Takanashi', `${path}/yasuharu-takanashi-album/`],

  /* ======================= Z ======================= */
  ['Zz Top', `${path}/zz-top-album/`],
  ['Zwan', `${path}/zw4n-album/`],
  ['Zeromancer', `${path}/zerom4ncer-album/`],
  ['Zoé', `${path}/zoe-album/`],
  ['Zoe', `${path}/zoe-album/`],
  ['Zoids Chaotic Century', `${path}/zoids-chaotic-century-ost/`],
  ['Zoids Guardian Force', `${path}/zoids-guardian-force-ost/`],
  ['Zaza', `${path}/zaza-album/`],
  ['Zambo Cavero', `${path}/zambo-cavero-album/`],
  ['Zoot Woman', `${path}/zoot-woman-album/`],
  ['Zero 7', `${path}/zero-7-album/`],
  ['Zorken', `${path}/zorken-album/`],
  ['Zara Larsson', `${path}/zara-larsson-soundtrack/`],

  /* ======================= 0 ======================= */
  /* ======================= 1 ======================= */
  /* ======================= 2 ======================= */
  ['2 Unlimited', `${path}/2-unlimited-album/`],
  ['2 Raff', `${path}/2-raff-album/`],
  [
    '2 Brothers On The 4th Floor',
    `${path}/2-brothers-on-the-fourth-floor-album/`
  ],
  /* ======================= 3 ======================= */
  ['30 Seconds To Mars', `${path}/thirty-seconds-to-mars-band/`],
  /* ======================= 4 ======================= */
  /* ======================= 4 ======================= */
  ['4 Non Blondes', `${path}/4-non-blond3s/`]
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

let playlistCards = [];
let playlistCardsOriginal = [];
let $inputPlaylist = $('.playlist-container-form .playlist-input');
let $inputPlaylist2 = $('.playlist-container-form-2 .playlist-input');
let regExP = /^(?![\s0-9\-_])[\w\s\-]{1,20}(?<![\s\-])$/;

function updateMaxItems() {
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;
  const isLessThan1000px = window.matchMedia('(max-width: 1000px)').matches;

  maxItemsInInput = isPortrait && isLessThan1000px ? 10 : 5;
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
      anchor,
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
      let bandName = elArray[i][0].substr(0, val.length).toUpperCase();
      let fullNameBand = elArray[i][0].toUpperCase();
      let inputValue = val.toUpperCase();
      if (bandName === inputValue) {
        anchor = document.createElement('a');
        anchor.setAttribute('href', elArray[i][1]);
        anchor.translate = false;
        anchor.innerHTML = `<strong>${elArray[i][0].substr(
          0,
          val.length
        )}</strong>`;
        anchor.innerHTML += elArray[i][0].substr(val.length);
        anchor.innerHTML += `<input type='hidden' value="${elArray[i][0]}"></input>`;

        anchor.addEventListener('click', function (e) {
          inpt.value = this.querySelector('input').value;
          closeAllLists();
        });

        a.appendChild(anchor);
        miContador++;
      } else if (fullNameBand.includes(inputValue)) {
        const start = fullNameBand.indexOf(inputValue);
        anchor = document.createElement('a');
        anchor.setAttribute('href', elArray[i][1]);
        anchor.translate = false;
        anchor.innerHTML = `${elArray[i][0].slice(0, start)}<strong>${elArray[
          i
        ][0].substr(start, val.length)}</strong>${elArray[i][0].slice(
          start + val.length
        )}`;
        anchor.innerHTML += `<input type='hidden' value="${elArray[i][0]}"></input>`;

        anchor.addEventListener('click', function (e) {
          inpt.value = this.querySelector('input').value;
          closeAllLists();
        });

        a.appendChild(anchor);
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
      } else {
        x[0].click();
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
        `url('assets/stars/star-${(i % 50) + 1}.webp')`
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

  function returnUrlFromBgProperty(img) {
    let url = '';
    let matchSrc = img.replace(
      /.*url\((['"]?)(.*?)\1\).*/,
      (m, _, capturedUrl) => (url = capturedUrl)
    );
    return `../${url}`;
  }

  if (e.target.matches('.card-single-left a')) {
    let currenPlaylistName =
      e.target.parentElement.nextElementSibling.querySelector('h3').innerHTML;
    localStorage.setItem('lastNameCardClicked', currenPlaylistName);
    let imgBgProperty = e.target.firstElementChild.getAttribute('style');
    const url = returnUrlFromBgProperty(imgBgProperty);
    localStorage.setItem('lastLogoPlaylistClicked', url);
  }
  if (e.target.matches('.card-single-right h3')) {
    let h3Title = e.target.textContent;
    localStorage.setItem('lastNameCardClicked', h3Title);
    let imgBgProperty = e.target
      .closest('.card-single')
      .querySelector('.img')
      .getAttribute('style');
    const url = returnUrlFromBgProperty(imgBgProperty);
    localStorage.setItem('lastLogoPlaylistClicked', url);
  }
  if (e.target.matches('.card-single-right p')) {
    let h3Title = e.target.previousElementSibling.textContent;
    localStorage.setItem('lastNameCardClicked', h3Title);
    let imgBgProperty = e.target
      .closest('.card-single')
      .querySelector('.img')
      .getAttribute('style');
    const url = returnUrlFromBgProperty(imgBgProperty);
    localStorage.setItem('lastLogoPlaylistClicked', url);
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

  let playListSection = d.querySelector('.playlist-section-articles');
  playlistCards = [...playListSection.querySelectorAll('.card-single')];
  playlistCardsOriginal = [...playlistCards];
  addFotoStars();
}

renderPlaylistCards();

$inputPlaylist.addEventListener('input', e => {
  const inputLength = e.target.value.length;
  e.target.parentElement.querySelector('.max-length-input output').textContent =
    inputLength;

  if (inputLength.length === 0) {
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

/* ===========================MODAL ALL ARTISTS========================= */
const $modalAllArtists = $('.modal-all-artist');
const $buttonShowAllArtists = $('.open-all-artists');
const amFragment = document.createDocumentFragment();

function generarColorHex() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return '#' + hex.padStart(6, '0');
}

document.addEventListener('click', e => {
  if (e.target.matches('.open-all-artists')) {
    $modalAllArtists.classList.add('modal-all-artist-open');
  }
});

bands.forEach(band => {
  const [nameBand, hrefBand] = band;
  const anchor = document.createElement('a');
  anchor.href = hrefBand;
  anchor.textContent = nameBand;
  anchor.classList.add('artist-link');
  anchor.style.setProperty('--colorin', `${generarColorHex()}88`);
  amFragment.appendChild(anchor);
});

$modalAllArtists.append(amFragment);
let lastbuttonNavActive = $('.am-button-nav-modal');

/* ===========================Navbar of Buttons Playlist========================= */
document.addEventListener('click', e => {
  if (!e.target.matches('.am-button-nav-modal')) return;
  if (!playlistCards || playlistCards.length === 0) return;
  if (lastbuttonNavActive) {
    lastbuttonNavActive.classList.remove('button-nav-selected');
    lastbuttonNavActive = null;
  }
  if (!lastbuttonNavActive) {
    e.target.classList.add('button-nav-selected');
    lastbuttonNavActive = e.target;
  }

  let playListSection = d.querySelector('.playlist-section-articles');

  if (e.target.matches('.order')) {
    playlistCards = [...playlistCardsOriginal];
  }

  if (e.target.matches('.unorder')) {
    playlistCards = [...playlistCardsOriginal];
    playlistCards.reverse();
  }

  if (e.target.matches('.random')) {
    playlistCards.sort(() => Math.random() - 0.5);
  }

  if (e.target.matches('.a-to-z')) {
    playlistCards.sort((a, b) => {
      let nameA = a
        .querySelector('.card-single-right h3')
        .textContent.toLowerCase();
      let nameB = b
        .querySelector('.card-single-right h3')
        .textContent.toLowerCase();
      return nameA.localeCompare(nameB);
    });
  }

  if (e.target.matches('.z-to-a')) {
    playlistCards.sort((a, b) => {
      let nameA = a
        .querySelector('.card-single-right h3')
        .textContent.toLowerCase();
      let nameB = b
        .querySelector('.card-single-right h3')
        .textContent.toLowerCase();
      return nameB.localeCompare(nameA);
    });
  }

  playListSection.innerHTML = '';
  playlistCards.forEach(card => playListSection.append(card));
});
