/******************** DINAMICO LOCAL STORAGE ********************/

let nameSongs = [];
let arraySongs = [];
let lastNameCard = null;
let listNumbersSongs = [];
let arrayPosters = [];

const MAXIMUM_LENGTH_OF_PLAYLIST = 20;
function updateRowsModalAndButtonActive() {
  setTimeout(() => {
    updateButtonNavActive($('.am-button-nav-modal.order'), 'button-nav-selected');
    scrollToBottomContainerModal();
  }, 50);
}

if (localStorage.getItem('lastNameCardClicked')) {
  lastNameCard = localStorage.getItem('lastNameCardClicked');
  let listNameCards = JSON.parse(localStorage.getItem('listname-cards'));
  let currentArray = listNameCards[lastNameCard];
  if (currentArray.length > 0) {
    nameSongs = currentArray.map(el => {
      let name = el[0].replace(/\&amp\;/g, '&');
      return name?.trim();
    });

    arraySongs = currentArray.map(el => el[1]);
    arrayPosters = arraySongs.map((linkPoster, i) => {
      const numPhoto = (i % 4) + 1;
      return linkPoster.replace(
        /\/songs\/n\d+\.mp3/,
        `/assets/n${numPhoto}.avif`
      );
    });
  }
}

document.addEventListener('visibilitychange', function () {
  if (!document.hidden) {
    localStorage.setItem('playbackUrl', location.href);
  } else {
    history.replaceState(null, '', location.pathname + location.search);
  }
});

localStorage.setItem('iframeUrl', location.href);

/******************** MEDIA SESSION CONFIG ********************/
const playlist = nameSongs.map((song, i) => ({
  title: song,
  artist: lastNameCard,
  url: arraySongs[i]
}));

function toCapitalize(text = '') {
  return text
    .split(' ')
    .map(el => {
      if (el.length === 0) return '';
      if (el.length < 2)
        return `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`;
      let secondLetter =
        el[0] === '(' ? el[1].toUpperCase() : el[1].toLowerCase();
      return `${el[0].toUpperCase()}${secondLetter}${el.slice(2).toLowerCase()}`;
    })
    .join(' ')
    .replace(/\s+/g, ' ');
}

function updateMetadata(currentIndex = 0) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: `${toCapitalize(playlist[currentIndex].title)}`,
    artist: `${toCapitalize(playlist[currentIndex].artist)}`,
    artwork: [
      {
        src: arrayPosters[currentIndex],
        sizes: '128x128',
        type: 'image/avif'
      }
    ]
  });
}

navigator.mediaSession.setActionHandler('play', () => {
  $audio.play();
  navigator.mediaSession.playbackState = 'playing';
});

navigator.mediaSession.setActionHandler('pause', () => {
  $audio.pause();
  navigator.mediaSession.playbackState = 'paused';
});

navigator.mediaSession.setActionHandler('seekbackward', details => {
  $audio.currentTime = Math.max($audio.currentTime - 10, 0);
});

navigator.mediaSession.setActionHandler('seekforward', details => {
  $audio.currentTime = Math.min($audio.currentTime + 10, $audio.duration);
});

function previousTrack(currentIndex) {
  navigator.mediaSession.setActionHandler('previoustrack', () => {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    updateMetadata(currentIndex);
    $audio.pause();
    $audio.currentTime = 0;
    $audio.src = arraySongs[currentIndex];
    $audio.loop = false;
    actualButtonPlayActive(currentIndex);
    nextTrack(currentIndex);
    showTitle(currentIndex);
  });
}

function nextTrack(currentIndex) {
  navigator.mediaSession.setActionHandler('nexttrack', () => {
    currentIndex = (currentIndex + 1) % playlist.length;
    updateMetadata(currentIndex);
    $audio.pause();
    $audio.currentTime = 0;
    $audio.src = arraySongs[currentIndex];
    $audio.loop = false;
    actualButtonPlayActive(currentIndex);
    previousTrack(currentIndex);
    showTitle(currentIndex);
  });
}

/******************** GLOBAL  ********************/
const d = document;
const $ = el => d.querySelector(el);
const $$ = el => d.querySelectorAll(el);
let regExP = /^(?![\s0-9\-_])[\w\s\-]{1,20}(?<![\-])$/;

(function lastLogoClicked() {
  $('.myHeader img').src =
    localStorage?.getItem('lastLogoPlaylistClicked') ?? 'assets/favicon.png';
})();

const nameBand = lastNameCard ?? 'Without name';
$('.namePlaylist').innerHTML = nameBand;
const $audio = d.createElement('audio');

const navRandomButton = '.nav-random-button';
const navMomentaryListButton = '.nav-list-momentary';
const navPlayButton = '.nav-play-button';
const navArrowDownButton = '.nav-arrow-down';

const cardPlayButtonClass = '.card-playbutton';
const cardPauseButtonClass = '.card-pausebutton';
const cardStopButtonClass = '.card-stopbutton';
const cardLoopButtonClass = '.card-infinitybutton';
const cardPlayListButton = '.card-playlistbutton';

const headerColors = {
  0: ['#ee82ee', '#87ceeb', '#00ff7f', '#ffd700'],
  1: ['#ffd700', '#20b2aa', '#87cefa', '#ff1b6b'],
  2: ['#ff1b6b', '#ff00ff', '#32cd32', '#f5ccd9'],
  3: ['#e81cff', '#f5ccd9', '#7fffd4', '#05c9fa'],
  4: ['#05c9fa', '#adff2f', '#dda0dd', '#f0e68c'],
  5: ['#f0e68c', '#ff5858', '#00bfff', '#00ff7f'],
  6: ['#50c878', '#e4f61e', '#ff1493', '#ff5858'],
  7: ['#e4f61e', '#87ceeb', '#00ff7f', '#ffeda0'],
  8: ['#ffeda0', '#4169e1', '#98ff98', '#f4762d'],
  9: ['#ff00ff', '#fff44f', '#50c878', '#0061ff'],
  10: ['#00ff87', '#0061ff', '#60efff', '#ff1b6b'],
  11: ['#84ffc9', '#4169e1', '#eca0ff', '#00ff7f'],
  12: ['#e9d022', '#f86594', '#fffbaf', '#f4762d'],
  13: ['#f4762d', '#ede342', '#5b6cf9', '#60efff'],
  14: ['#3d05dd', '#e0a9bb', '#f40752', '#84ffc9'],
  15: ['#b429f9', '#e0a9bb', '#26c5f3', '#4169e1']
};

function firstPhotoUrl(urlParameter) {
  const newUrl = urlParameter.replace(/n\d{1,2}\.avif/gi, 'n1.avif');
  return newUrl;
}

/******************** FUNCTIONS ********************/
(function generaCardImages() {
  const { length } = arrayPosters;
  const $cards = $$('.card');
  for (let index = 0; index < length; index++) {
    const card = $cards[index];
    const imageUrl = arrayPosters[index];
    const fallbackImage = firstPhotoUrl(imageUrl);

    const testImg = new Image();

    testImg.onload = function () {
      card.style.setProperty(
        '--image-bg',
        `url('${imageUrl}'), linear-gradient(90deg, #ffffff33, #ffffff80, #ffffff33)`
      );
    };

    testImg.onerror = function () {
      card.style.setProperty(
        '--image-bg',
        `url('${fallbackImage}'), linear-gradient(90deg, #ffffff33, #ffffff80, #ffffff33)`
      );
    };

    testImg.src = imageUrl;
  }
})();

const blockPlayPauseStopBUTTON = () => {
  [...$$('.card-pausebutton')].forEach(el => el.classList.add('blocked'));
  [...$$('.card-stopbutton')].forEach(el => el.classList.add('blocked'));
  [...$$('.card-infinitybutton')].forEach(el => el.classList.add('blocked'));
};

const generateStars = (totalStars, selector, size, duration) => {
  const shadowLayers = [];

  for (let i = 0; i < totalStars; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    shadowLayers.push(`
      ${x}vw ${y}vh 0 #fff,
      ${x}vw ${y + 100}vh 0 #fff
    `);
  }

  const star = document.querySelector(selector);
  star.style.setProperty('--shadow-layer', shadowLayers.join(','));
  star.style.setProperty('--size', size);
  star.style.setProperty('--duration', duration);
};

const removeClassBlockedButtonNextSiblings = el => {
  [...el.closest('.card-right-buttons').querySelectorAll('button')].forEach(btn =>
    btn.classList.remove('blocked')
  );
};

const _removeClassBlockedButtonNextSiblings = index => {
  [
    ...$$('.card')
      [index].querySelector('.card-right-buttons')
      .querySelectorAll('button')
  ].forEach(btn => btn.classList.remove('blocked'));
};

const actualButtonPlayActive = (index = 0) => {
  let element = $$('.card')[index].querySelector(cardPlayButtonClass);

  [...$$('.card-btn-active')].forEach(el => {
    el.classList.remove('card-btn-active');
  });
  element.classList.add('card-btn-active');

  [...$$('.input-range')].forEach(el => {
    el.style.display = 'none';
  });
  const $inputRange = element.closest('.card').querySelector('.img input');
  $inputRange.style.display = 'block';

  setTimeout(() => {
    $audio.play();
  }, 30);

  $audio.ontimeupdate = function () {
    $inputRange.max = Math.floor(this.duration);
    $inputRange.value = this.currentTime;
  };

  d.addEventListener('input', e => {
    if (e.target === $inputRange) {
      $audio.currentTime = e.target.value;
      $audio.play();
    }
  });
};

const toKebabCase = (sentence = '') => {
  let words = sentence.trim().split(' ');
  return words.length === 1
    ? words.join('').toLowerCase()
    : words.join('-').toLowerCase();
};

const putTitle = title => (d.title = `${title}`);

const showTitle = elIndex => {
  putTitle(nameSongs[elIndex]);
};

const playAllSongs = (songs, selector) => {
  if (listNumbersSongs?.length > 0) {
    let arrayCards = listNumbersSongs.map(i => $$('.card')[i]);
    let arrayColors = listNumbersSongs.map(i => $$('.card')[i].dataset.colorCard);
    arrayCards.forEach((card, i) => (card.style.color = arrayColors[i]));
    listNumbersSongs = [];
  }

  let index = 0;
  const $btnsPlay = $$(selector);

  const nextSong = () => {
    blockPlayPauseStopBUTTON();

    if (index < songs.length) {
      if ($audio.src) {
        $audio.pause();
        $audio.currentTime = 0;
      }
      $audio.src = songs[index];
      removeClassBlockedButtonNextSiblings($btnsPlay[index]);
      showTitle(index);

      actualButtonPlayActive(index);
      updateMetadata(index);

      function actualAudio(currentIndex) {
        updateMetadata(currentIndex);
        blockPlayPauseStopBUTTON();
        _removeClassBlockedButtonNextSiblings(currentIndex);
        $audio.pause();
        $audio.currentTime = 0;
        $audio.src = arraySongs[currentIndex];
        $audio.loop = false;
        actualButtonPlayActive(currentIndex);
        showTitle(currentIndex);
      }

      function previousTrack(currentIndex) {
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          index--;
          currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
          if (index === -1) index = currentIndex + 1;

          nextTrack(currentIndex);
          actualAudio(currentIndex);
        });
      }

      function nextTrack(currentIndex) {
        navigator.mediaSession.setActionHandler('nexttrack', () => {
          index++;
          currentIndex = (currentIndex + 1) % playlist.length;
          previousTrack(currentIndex);
          actualAudio(currentIndex);
        });
      }

      previousTrack(index);
      nextTrack(index);

      showTitle(index);
      index++;
      $audio.onended = nextSong;
    } else {
      location.reload();
    }
  };

  nextSong();
};

const playRandomSongs = (songs, selector) => {
  if (listNumbersSongs?.length > 0) {
    let arrayCards = listNumbersSongs.map(i => $$('.card')[i]);
    let arrayColors = listNumbersSongs.map(i => $$('.card')[i].dataset.colorCard);
    arrayCards.forEach((card, i) => (card.style.color = arrayColors[i]));
    listNumbersSongs = [];
  }

  let unArray = [],
    valor;

  for (let i = 0; i < songs.length; i++) {
    do {
      valor = Math.floor(Math.random() * songs.length);
    } while (unArray.includes(valor));

    unArray.push(valor);
  }

  let index = 0;
  const $btnsPlay = $$(selector);
  const nextSong = () => {
    blockPlayPauseStopBUTTON();

    if (index < songs.length) {
      if ($audio.src) {
        $audio.pause();
        $audio.currentTime = 0;
      }
      $audio.src = songs[unArray[index]];
      removeClassBlockedButtonNextSiblings($btnsPlay[unArray[index]]);
      showTitle(unArray[index]);

      actualButtonPlayActive(unArray[index]);
      updateMetadata(unArray[index]);

      function actualAudio(currentIndex) {
        $audio.pause();
        blockPlayPauseStopBUTTON();
        _removeClassBlockedButtonNextSiblings(unArray[currentIndex]);
        $audio.currentTime = 0;
        $audio.src = arraySongs[unArray[currentIndex]];
        $audio.loop = false;
        updateMetadata(unArray[currentIndex]);
        actualButtonPlayActive(unArray[currentIndex]);
        showTitle(unArray[currentIndex]);
      }

      function previousTrackOfRandomSongs(currentIndex) {
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          index--;
          currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
          if (index === -1) index = currentIndex + 1;
          nextTrackOfRandomSongs(currentIndex);
          actualAudio(currentIndex);
        });
      }

      function nextTrackOfRandomSongs(currentIndex) {
        navigator.mediaSession.setActionHandler('nexttrack', () => {
          index++;
          currentIndex = (currentIndex + 1) % playlist.length;
          previousTrackOfRandomSongs(currentIndex);
          actualAudio(currentIndex);
        });
      }

      previousTrackOfRandomSongs(index);
      nextTrackOfRandomSongs(index);
      index++;
      $audio.onended = nextSong;
    } else {
      location.reload();
    }
  };

  nextSong();
};

const removeClassNavButtonActive = () => {
  [...$$('.nav-btn-active')].forEach(el => el.classList.remove('nav-btn-active'));
};

const playSelectedSongs = (songs, selector, listNumber) => {
  let index = 0;
  const $btnsPlay = $$(selector);

  const nextSong = () => {
    blockPlayPauseStopBUTTON();

    if (index < songs.length) {
      if ($audio.src) {
        $audio.pause();
        $audio.currentTime = 0;
      }
      $audio.src = songs[index];
      removeClassBlockedButtonNextSiblings($btnsPlay[listNumber[index]]);
      showTitle(listNumber[index]);

      actualButtonPlayActive(listNumber[index]);
      updateMetadata(listNumber[index]);

      function actualAudio(currentIndex) {
        $audio.pause();
        blockPlayPauseStopBUTTON();
        _removeClassBlockedButtonNextSiblings(listNumber[currentIndex]);
        $audio.currentTime = 0;
        $audio.src = arraySongs[listNumber[currentIndex]];
        $audio.loop = false;
        updateMetadata(listNumber[currentIndex]);
        actualButtonPlayActive(listNumber[currentIndex]);
        showTitle(listNumber[currentIndex]);
      }

      function previousTrackOfSelectedSongs(currentIndex) {
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          index--;
          currentIndex =
            (currentIndex - 1 + listNumber.length) % listNumber.length;

          if (index === -1) index = currentIndex + 1;
          nextTrackOfSelectedSongs(currentIndex);
          actualAudio(currentIndex);
        });
      }

      function nextTrackOfSelectedSongs(currentIndex) {
        navigator.mediaSession.setActionHandler('nexttrack', () => {
          index++;
          currentIndex = (currentIndex + 1) % listNumber.length;
          previousTrackOfSelectedSongs(currentIndex);
          actualAudio(currentIndex);
        });
      }

      previousTrackOfSelectedSongs(index);
      nextTrackOfSelectedSongs(index);

      index++;
      $audio.onended = nextSong;
    } else {
      window.history.replaceState(null, null, window.location.pathname);
      location.reload();
    }
  };

  nextSong();
};

/******************** EXECUTING FUNCTIONS ********************/
generateStars(200, '.star-1', '2px', '20s');

(function headerCustomProperties() {
  const { body } = document;
  let numberRandom = Math.floor(Math.random() * Object.keys(headerColors).length);
  const [color1, color2, color3, color4] = headerColors[numberRandom];
  body.style.setProperty('--color1', color1);
  body.style.setProperty('--color2', color2);
  body.style.setProperty('--color3', color3);
  body.style.setProperty('--color4', color4);
})();

(function addTitlesToCards() {
  [...$$('.card-right-top')].forEach((title, index) => {
    if (!nameSongs[index]) {
      $$('.card')[index].style.pointerEvents = 'none';
      $$('.card')[index].style.opacity = '0.3';
      let buttons = $$('.card')[index].querySelector(
        '.card-right .card-right-buttons'
      );
      [...buttons.querySelectorAll('button')].forEach(
        el => (el.style.pointerEvents = 'none')
      );
      [...buttons.querySelectorAll('a')].forEach(el =>
        el.classList.remove('pointerEventsActivo')
      );
      [...buttons.querySelectorAll('.buttonConPointerEvents')].forEach(el =>
        el.classList.remove('buttonConPointerEvents')
      );
    }
    title.innerHTML = nameSongs[index] || '';
    title.closest('.card').dataset.url = arraySongs[index];
  });
})();

(function addHrefAndDownloads() {
  [...$$('.anchor-download')].forEach((el, i) => {
    el.href = arraySongs[i] || '';
    let nameBandFirstChar = nameBand[0].toUpperCase();
    let nameBandComplete = nameBand.substring(1).toLowerCase();
    el.download = `${nameBandFirstChar}${nameBandComplete} - ${toCapitalize(
      nameSongs[i]
    )}.mp3`;
  });
})();

(function getHref() {
  localStorage.setItem('formUrl', location.href);
})();

/******************** EVENT DELEGATION ********************/
d.addEventListener('click', e => {
  /******************** EVENT DELEGATION CARDS ********************/
  if (e.target.matches(cardPlayButtonClass)) {
    if (listNumbersSongs?.length > 0) {
      let arrayCards = listNumbersSongs.map(i => $$('.card')[i]);
      let arrayColors = listNumbersSongs.map(
        i => $$('.card')[i].dataset.colorCard
      );
      arrayCards.forEach((card, i) => (card.style.color = arrayColors[i]));
      listNumbersSongs = [];
    }
    const arrayPlayButtons = [...$$(cardPlayButtonClass)];

    blockPlayPauseStopBUTTON();
    let index = arrayPlayButtons.indexOf(e.target);
    _removeClassBlockedButtonNextSiblings(index);

    let audioActual = d.createElement('audio');
    audioActual.src = arraySongs[index];

    if (!$audio.src) {
      $audio.src = arraySongs[index];
    }

    if ($audio.src !== audioActual.src) {
      $audio.pause();
      $audio.currentTime = 0;
      $audio.src = arraySongs[index];
      $audio.loop = false;
    }

    actualButtonPlayActive(index);
    updateMetadata(index);
    previousTrack(index);
    nextTrack(index);
    showTitle(index);

    if ($audio.loop) {
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle(
        'card-btn-active'
      );
      return;
    }

    $audio.onended = () => {
      index = index = (index + 1) % playlist.length;
      const btnPlayNew = arrayPlayButtons[index];
      if (index === 0) return;
      btnPlayNew.click();
    };

    return;
  }

  if (e.target.matches(cardPauseButtonClass)) {
    $audio.pause();
    e.target.previousElementSibling.classList.remove('card-btn-active');
    e.target.classList.add('card-btn-active');
    return;
  }

  if (e.target.matches(cardStopButtonClass)) {
    $audio.pause();
    $audio.currentTime = 0;
    blockPlayPauseStopBUTTON();
    e.target.previousElementSibling.previousElementSibling.classList.remove(
      'card-btn-active'
    );
    return;
  }

  if (e.target.matches(cardLoopButtonClass)) {
    if ($audio.loop) {
      $audio.loop = false;
      e.target.classList.remove('card-btn-active');
      return;
    }
    $audio.loop = true;
    e.target.classList.add('card-btn-active');
  }

  if (e.target.matches(cardPlayListButton)) {
    let index = [...$$('.card')].indexOf(e.target.closest('.card'));
    let currentNameSong = [...$$('.card')][index].querySelector(
      '.card-right-top'
    ).innerHTML;
    localStorage.setItem('lastCurrentNameSong', currentNameSong);
    localStorage.setItem('ultimoCardIndex', index);
    RenderPlaylistItems();
    $('.am-modal').showModal();
    let $tituloModal = $('.tituto-modal');
    $tituloModal.innerHTML = `Save ${currentNameSong} in..`;
    return;
  }

  if (e.target.matches('.cerrar')) {
    e.target.parentElement.close();
    setTimeout(() => {
      $('.am-modal')
        .querySelector('.container-add-playlist')
        .classList.remove('mode-active');
    }, 500);
    $('#agregarPlaylistInput').value = '';
    updateButtonNavActive($('.am-button-nav-modal.order'), 'button-nav-selected');
    return;
  }

  if (e.target.matches('.container-add-playlist')) {
    e.target.classList.add('mode-active');
    d.getElementById('agregarPlaylistInput').focus();
    return;
  }

  if (e.target.matches('.container-inputs input[type=submit]')) {
    let input = e.target.previousElementSibling.previousElementSibling;
    let inputValor =
      e.target.previousElementSibling.previousElementSibling.value.trim();

    if (comprobeExistThisProperty(inputValor)) {
      input.classList.remove('valid');
      input.classList.add('invalid');
      return;
    }

    if (!regExP.test(inputValor) || comprobeExistThisProperty(input)) {
      return;
    }

    if (!localStorage.getItem('listname-cards')) {
      localStorage.setItem(
        'listname-cards',
        JSON.stringify({
          [`${inputValor}`]: ''
        })
      );
      RenderPlaylistItems();
      updateRowsModalAndButtonActive();
      input.value = '';
      return;
    }

    let objectListNameCards = JSON.parse(localStorage.getItem('listname-cards'));
    let newObjectListNameCards = JSON.stringify({
      ...objectListNameCards,
      [`${inputValor}`]: ''
    });

    localStorage.setItem('listname-cards', newObjectListNameCards);
    RenderPlaylistItems();
    updateRowsModalAndButtonActive();
    input.value = '';
  }

  /******************** EVENT DELEGATION NAV ********************/
  if (e.target.matches(navPlayButton)) {
    removeClassNavButtonActive();
    e.target.classList.add('nav-btn-active');
    playAllSongs(arraySongs, cardPlayButtonClass);
    return;
  }
  if (e.target.matches(navRandomButton)) {
    removeClassNavButtonActive();
    e.target.classList.add('nav-btn-active');
    playRandomSongs(arraySongs, cardPlayButtonClass);
    return;
  }
  if (e.target.matches(navMomentaryListButton)) {
    listNumbersSongs = [];
    $('.tooltip').classList.toggle('tooltip-active');
    e.target.classList.add('nav-btn-active');

    if (e.target.classList.contains('nav-btn-active')) {
      let allCards = [...$$('.card')];

      removeClassNavButtonActive();
      e.target.classList.add('nav-btn-active');
      pickCards(allCards, listNumbersSongs);
      return;
    }

    return;
  }
  if (e.target.matches(navArrowDownButton)) {
    if ($audio.src) {
      e.target.classList.add('nav-btn-active');
      let arrayButtons = [...$$('.card-playbutton')];
      let $btnPlayActive = $('.card-playbutton.card-btn-active');
      if (!$btnPlayActive?.closest('.card')) {
        return;
      }
      let indexActual = arrayButtons.indexOf($btnPlayActive) + 1;
      e.target.href = `#song-${indexActual}`;

      $btnPlayActive.closest('.card').classList.add('targeado');
      setTimeout(() => {
        $btnPlayActive.closest('.card').classList.remove('targeado');
        e.target.classList.remove('nav-btn-active');
        history.replaceState(null, '', location.pathname);
      }, 3000);
    }
    return;
  }
});

d.addEventListener('change', e => {
  if (e.target.matches(`input[type=checkbox]`)) {
    let currentNameSong = localStorage.getItem('lastCurrentNameSong');
    let cardCorriente = [...$$('.card')][localStorage.getItem('ultimoCardIndex')];
    let url = cardCorriente.dataset.url;
    let currentId = e.target.id;
    let objectListNameCards = JSON.parse(localStorage.getItem('listname-cards'));
    if (!objectListNameCards) return;
    let clase = e.target.getAttribute('data-clase');
    let $output = $(`.${clase}`);

    if (e.target.checked) {
      let newObject = {
        ...objectListNameCards,
        [`${currentId}`]: [
          ...objectListNameCards[currentId],
          [currentNameSong, url]
        ]
      };

      localStorage.setItem('listname-cards', JSON.stringify(newObject));

      $output.innerHTML = Number($output.innerHTML) + 1;
      /* RenderPlaylistItems(); */
      return;
    }

    let indiceReal = null;
    for (let i = 0; i < objectListNameCards[currentId].length; i++) {
      if (objectListNameCards[currentId][i][0] === currentNameSong) {
        indiceReal = i;
        break;
      }
    }

    let newArrray = objectListNameCards[`${currentId}`].toSpliced(indiceReal, 1);

    let newObject = {
      ...objectListNameCards,
      [`${currentId}`]: [...newArrray]
    };

    localStorage.setItem('listname-cards', JSON.stringify(newObject));
    $output.innerHTML = Number($output.innerHTML) - 1;
    RenderPlaylistItems();
    return;
  }
});

d.addEventListener('input', e => {
  if (e.target.matches('#agregarPlaylistInput')) {
    let $output = $('.container-inputs output');
    $output.innerHTML = e.target.value.length;

    if (e.target.value.length === 0) {
      e.target.classList.remove('valid');
      e.target.classList.remove('invalid');
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
  }
});

d.addEventListener('keydown', e => {
  if (e.target.matches('#agregarPlaylistInput')) {
    if (e.key !== 'Enter') return;
    let input = e.target;
    let inputValor = e.target.value.trim();

    if (comprobeExistThisProperty(inputValor)) {
      input.classList.remove('valid');
      input.classList.add('invalid');
      return;
    }

    if (!regExP.test(inputValor) || comprobeExistThisProperty(input)) {
      return;
    }

    if (!localStorage.getItem('listname-cards')) {
      localStorage.setItem(
        'listname-cards',
        JSON.stringify({
          [`${inputValor}`]: ''
        })
      );
      RenderPlaylistItems();
      updateRowsModalAndButtonActive();
      input.value = '';
      return;
    }

    let objectListNameCards = JSON.parse(localStorage.getItem('listname-cards'));
    let newObjectListNameCards = JSON.stringify({
      ...objectListNameCards,
      [`${inputValor}`]: ''
    });

    localStorage.setItem('listname-cards', newObjectListNameCards);
    RenderPlaylistItems();
    updateRowsModalAndButtonActive();
    input.value = '';
  }
});

/******************** MODAL FUNCTIONS ********************/

function existThisSongInSomePlaylist(currentName) {
  let nameCurrent = currentName ?? '';
  if (localStorage.getItem('listname-cards')) {
    let objetoNamePlaylists = JSON.parse(localStorage.getItem('listname-cards'));
    let playlistsWhereExistsCurrenName = [];
    let namesPlaylists = [];

    for (let property in objetoNamePlaylists) {
      namesPlaylists = [...namesPlaylists, property];
    }

    for (let i = 0; i < namesPlaylists.length; i++) {
      let currentPlaylist = namesPlaylists[i];
      let multiArrayCurrent = objetoNamePlaylists[currentPlaylist];

      for (let j = 0; j < multiArrayCurrent.length; j++) {
        if (multiArrayCurrent[j].includes(nameCurrent.toString())) {
          playlistsWhereExistsCurrenName.push(currentPlaylist);
          break;
        }
      }
    }

    return playlistsWhereExistsCurrenName;
  }
}

function RenderPlaylistItems() {
  if (localStorage.getItem('listname-cards')) {
    let currentName = localStorage.getItem('lastCurrentNameSong');
    let objectNames = JSON.parse(localStorage.getItem('listname-cards'));
    let $template = $('.template-modal-fila').content;
    let $tituloModal = $('.tituto-modal');
    $tituloModal.innerHTML = `Save ${currentName} in..`;
    let myFragment = d.createDocumentFragment();
    let $containerModal = $('.container-modal');
    $containerModal.innerHTML = '';
    let arrayCorriente = existThisSongInSomePlaylist(currentName);
    let guardarKey = null;

    for (let key in objectNames) {
      let clon = $template.cloneNode(true);
      clon.querySelector('input').id = key;
      clon.querySelector('input').dataset.clase = toKebabCase(key);
      clon.querySelector('label').setAttribute('for', key);
      clon.querySelector('label').innerHTML = key;
      clon.querySelector('output').setAttribute('class', toKebabCase(key));
      clon.querySelector('output').innerHTML = objectNames[key].length;
      if (objectNames[key].length === MAXIMUM_LENGTH_OF_PLAYLIST) {
        clon.querySelector('input[type=checkbox]').disabled = 'true';
        guardarKey = key;
      }
      myFragment.appendChild(clon);
    }

    $containerModal.appendChild(myFragment);

    if (currentName === objectNames?.[guardarKey]?.[19][0]) {
      setTimeout(() => {
        let dataclase = toKebabCase(guardarKey);
        $containerModal.querySelector(
          `input[data-clase=${dataclase}`
        ).disabled = false;
      }, 100);
    }

    for (let i = 0; i < arrayCorriente.length; i++) {
      let checkboxCurrent = toKebabCase(arrayCorriente[i]);
      let checkboxActual = $containerModal.querySelector(
        `[data-clase='${checkboxCurrent}']`
      );
      checkboxActual.checked = true;
      checkboxActual.disabled = false;
    }
  }
}

function comprobeExistThisProperty(nameProperty) {
  if (localStorage.getItem('listname-cards')) {
    let object = JSON.parse(localStorage.getItem('listname-cards'));
    return object.hasOwnProperty(nameProperty) ? true : false;
  }
}

d.addEventListener('DOMContentLoaded', () => {
  blockPlayPauseStopBUTTON();
  putTitle(nameBand);
  updateMetadata();
});

function findDuplicates(array, element) {
  let filterArray = array.filter(el => el === element);
  return filterArray.length;
}

(function addDataAttributeColor() {
  [...$$('.card')].forEach(el => {
    el.dataset.colorCard = getComputedStyle(el).getPropertyValue('color');
  });
})();

function pickCards(allCards, listNumbersSongs) {
  d.addEventListener('click', e => {
    if (e.target.matches('.card *')) {
      let actualCard = e.target.closest('.card');
      let index = allCards.indexOf(actualCard);

      if ($('.tooltip').classList.contains('tooltip-active')) {
        listNumbersSongs.push(index);

        if (findDuplicates(listNumbersSongs, index) > 1) {
          actualCard.style.color = actualCard.dataset.colorCard;
          let newArray = listNumbersSongs.filter(el => el !== index);
          listNumbersSongs = newArray;
          return;
        }

        actualCard.style.color = '#fff';
      }
    }

    if (e.target.matches('.tooltip')) {
      e.target.classList.remove('tooltip-active');
      $('.nav-list-momentary').classList.remove('nav-btn-active');
      let canciones = listNumbersSongs.map(el => arraySongs[el]);
      playSelectedSongs(canciones, cardPlayButtonClass, listNumbersSongs);

      [...$$('.card')].forEach(el => (el.style.color = el.dataset.colorCard));
      listNumbersSongs.forEach(el => {
        [...$$('.card')][el].style.color = '#fff';
      });
    }
  });
}

/******************** REMOVE ANIMATION VIEW() OF CARDS ********************/
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('stopped-animation');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

cards.forEach(card => observer.observe(card));

/******************** BUTTON NAV MODAL ********************/

let containerModal = document.querySelector('.container-modal');

function RenderPlaylistItemsOfTheContainerBottom(objectOfCards) {
  const currentName = localStorage.getItem('lastCurrentNameSong');

  if (!currentName) return;

  const objectNames =
    objectOfCards ?? JSON.parse(localStorage.getItem('listname-cards'));
  const template = $('.template-modal-fila').content;
  const tituloModal = $('.tituto-modal');
  const containerModal = $('.container-modal');

  tituloModal.textContent = `Save ${currentName} in..`;
  containerModal.innerHTML = '';

  const fragment = d.createDocumentFragment();
  const currentPlaylists = existThisSongInSomePlaylist(currentName);

  for (const name in objectNames) {
    const kebabName = toKebabCase(name);
    const playlist = objectNames[name];
    const clone = template.cloneNode(true);

    const input = clone.querySelector('input');
    const label = clone.querySelector('label');
    const output = clone.querySelector('output');

    input.id = name;
    input.dataset.clase = kebabName;
    input.disabled = playlist.length === MAXIMUM_LENGTH_OF_PLAYLIST;

    label.htmlFor = name;
    label.textContent = name;

    output.className = kebabName;
    output.textContent = playlist.length;

    fragment.appendChild(clone);
  }

  containerModal.appendChild(fragment);

  currentPlaylists.forEach(name => {
    const checkbox = containerModal.querySelector(
      `[data-clase="${toKebabCase(name)}"]`
    );
    if (checkbox) {
      checkbox.checked = true;
      checkbox.disabled = false;
    }
  });
}

function updateButtonNavActive(target, classNameToAdd) {
  if (!target.classList.contains(classNameToAdd)) {
    $(`.${classNameToAdd}`).classList.remove(classNameToAdd);
    let timer = setTimeout(() => {
      target.classList.add(classNameToAdd);
      clearTimeout(timer);
    }, 20);
  }
}

function scrollToTopContainerModal() {
  $('.container-modal').scrollTop = 0;
}

function scrollToBottomContainerModal() {
  $('.container-modal').scrollTop = $('.container-modal').scrollHeight;
}

document.addEventListener('click', e => {
  const target = e.target;
  if (target.matches('.am-button-nav-modal')) {
    if (target.matches('.order')) {
      containerModal.innerHTML = '';

      updateButtonNavActive(target, 'button-nav-selected');
      scrollToTopContainerModal();
      RenderPlaylistItemsOfTheContainerBottom();
      return;
    }

    if (target.matches('.unorder')) {
      containerModal.innerHTML = '';
      updateButtonNavActive(target, 'button-nav-selected');
      scrollToTopContainerModal();

      const objectNames = JSON.parse(localStorage.getItem('listname-cards'));
      if (!objectNames) return;
      const reversedObj = Object.entries(objectNames)
        .reverse()
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});

      RenderPlaylistItemsOfTheContainerBottom(reversedObj);
      return;
    }

    if (target.matches('.random')) {
      containerModal.innerHTML = '';
      updateButtonNavActive(target, 'button-nav-selected');
      scrollToTopContainerModal();

      const objectNames = JSON.parse(localStorage.getItem('listname-cards'));
      if (!objectNames) return;
      const shuffledEntries = Object.entries(objectNames).sort(
        () => Math.random() - 0.5
      );

      const shuffledObj = Object.fromEntries(shuffledEntries);
      RenderPlaylistItemsOfTheContainerBottom(shuffledObj);
      return;
    }

    if (target.matches('.a-to-z')) {
      containerModal.innerHTML = '';
      updateButtonNavActive(target, 'button-nav-selected');
      scrollToTopContainerModal();

      const objectNames = JSON.parse(localStorage.getItem('listname-cards'));
      if (!objectNames) return;
      const sortedEntries = Object.entries(objectNames).sort((a, b) =>
        a[0].localeCompare(b[0])
      );

      const sortedObj = Object.fromEntries(sortedEntries);
      RenderPlaylistItemsOfTheContainerBottom(sortedObj);
      return;
    }

    if (target.matches('.z-to-a')) {
      containerModal.innerHTML = '';
      updateButtonNavActive(target, 'button-nav-selected');
      scrollToTopContainerModal();

      const objectNames = JSON.parse(localStorage.getItem('listname-cards'));
      if (!objectNames) return;
      const sortedEntries = Object.entries(objectNames).sort((a, b) =>
        b[0].localeCompare(a[0])
      );

      const sortedObj = Object.fromEntries(sortedEntries);
      RenderPlaylistItemsOfTheContainerBottom(sortedObj);
      return;
    }
  }
});
