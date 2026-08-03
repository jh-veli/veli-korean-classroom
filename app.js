const CHO = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ',
  'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ',
  'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

const JUNG = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ',
  'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ',
  'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ',
  'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ',
  'ㅣ'
];

const JONG = [
  '',
  'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ',
  'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ',
  'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ',
  'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
  'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ',
  'ㅍ', 'ㅎ'
];

const consonants = [
  { j: 'ㄱ', name: '기역', on: 'g/k', fin: 'k' },
  { j: 'ㄲ', name: '쌍기역', on: 'kk', fin: 'k' },
  { j: 'ㄴ', name: '니은', on: 'n', fin: 'n' },
  { j: 'ㄷ', name: '디귿', on: 'd/t', fin: 't' },
  { j: 'ㄸ', name: '쌍디귿', on: 'tt', fin: '' },
  { j: 'ㄹ', name: '리을', on: 'r/l', fin: 'l' },
  { j: 'ㅁ', name: '미음', on: 'm', fin: 'm' },
  { j: 'ㅂ', name: '비읍', on: 'b/p', fin: 'p' },
  { j: 'ㅃ', name: '쌍비읍', on: 'pp', fin: '' },
  { j: 'ㅅ', name: '시옷', on: 's/sh', fin: 't' },
  { j: 'ㅆ', name: '쌍시옷', on: 'ss', fin: 't' },
  { j: 'ㅇ', name: '이응', on: '–/ng', fin: 'ng' },
  { j: 'ㅈ', name: '지읒', on: 'j', fin: 't' },
  { j: 'ㅉ', name: '쌍지읒', on: 'jj', fin: '' },
  { j: 'ㅊ', name: '치읓', on: 'ch', fin: 't' },
  { j: 'ㅋ', name: '키읔', on: 'k', fin: 'k' },
  { j: 'ㅌ', name: '티읕', on: 't', fin: 't' },
  { j: 'ㅍ', name: '피읖', on: 'p', fin: 'p' },
  { j: 'ㅎ', name: '히읗', on: 'h', fin: 't' }
];

const vowels = [
  { j: 'ㅏ', r: 'a' },
  { j: 'ㅐ', r: 'ae' },
  { j: 'ㅑ', r: 'ya' },
  { j: 'ㅒ', r: 'yae' },
  { j: 'ㅓ', r: 'eo' },
  { j: 'ㅔ', r: 'e' },
  { j: 'ㅕ', r: 'yeo' },
  { j: 'ㅖ', r: 'ye' },
  { j: 'ㅗ', r: 'o' },
  { j: 'ㅘ', r: 'wa' },
  { j: 'ㅙ', r: 'wae' },
  { j: 'ㅚ', r: 'oe' },
  { j: 'ㅛ', r: 'yo' },
  { j: 'ㅜ', r: 'u' },
  { j: 'ㅝ', r: 'wo' },
  { j: 'ㅞ', r: 'we' },
  { j: 'ㅟ', r: 'wi' },
  { j: 'ㅠ', r: 'yu' },
  { j: 'ㅡ', r: 'eu' },
  { j: 'ㅢ', r: 'ui' },
  { j: 'ㅣ', r: 'i' }
];

const finals = [
  { j: 'ㄱ', r: 'k' },
  { j: 'ㄲ', r: 'k' },
  { j: 'ㄳ', r: 'k' },
  { j: 'ㄴ', r: 'n' },
  { j: 'ㄵ', r: 'n' },
  { j: 'ㄶ', r: 'n' },
  { j: 'ㄷ', r: 't' },
  { j: 'ㄹ', r: 'l' },
  { j: 'ㄺ', r: 'k' },
  { j: 'ㄻ', r: 'm' },
  { j: 'ㄼ', r: 'l' },
  { j: 'ㄽ', r: 'l' },
  { j: 'ㄾ', r: 'l' },
  { j: 'ㄿ', r: 'p' },
  { j: 'ㅀ', r: 'l' },
  { j: 'ㅁ', r: 'm' },
  { j: 'ㅂ', r: 'p' },
  { j: 'ㅄ', r: 'p' },
  { j: 'ㅅ', r: 't' },
  { j: 'ㅆ', r: 't' },
  { j: 'ㅇ', r: 'ng' },
  { j: 'ㅈ', r: 't' },
  { j: 'ㅊ', r: 't' },
  { j: 'ㅋ', r: 'k' },
  { j: 'ㅌ', r: 't' },
  { j: 'ㅍ', r: 'p' },
  { j: 'ㅎ', r: 't' }
];

const batchimGroups = [
  {
    sound: 'ㄱ /k/',
    desc: 'Mouth closes — no air release',
    class: 'purple',
    items: ['ㄱ', 'ㄲ', 'ㄳ', 'ㄺ', 'ㅋ'],
    example: '부엌 (kitchen)'
  },
  {
    sound: 'ㄴ /n/',
    desc: 'Tongue to roof — nasal release through nose',
    class: 'green',
    items: ['ㄴ', 'ㄵ', 'ㄶ'],
    example: '산 (mountain)'
  },
  {
    sound: 'ㄷ /t/',
    desc: 'Tongue at teeth — no air release',
    class: 'gray',
    items: ['ㄷ', 'ㅅ', 'ㅆ', 'ㅈ', 'ㅊ', 'ㅌ', 'ㅎ'],
    example: '옷 (clothes)'
  },
  {
    sound: 'ㄹ /l/',
    desc: 'Tongue to roof — air releases out the sides',
    class: 'orange',
    items: ['ㄹ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㅀ'],
    example: '물 (water)'
  },
  {
    sound: 'ㅁ /m/',
    desc: 'Lips close — nasal release',
    class: 'red',
    items: ['ㅁ', 'ㄻ'],
    example: '밤 (night)'
  },
  {
    sound: 'ㅂ /p/',
    desc: 'Lips press shut — no air release',
    class: 'blue',
    items: ['ㅂ', 'ㅄ', 'ㄿ', 'ㅍ'],
    example: '밥 (rice / meal)'
  },
  {
    sound: 'ㅇ /ng/',
    desc: 'Sound resonates at the back of the mouth',
    class: 'gold',
    items: ['ㅇ'],
    example: '방 (room)'
  }
];

const presets = [
  {
    word: '안녕하세요',
    rom: 'an·nyeong·ha·se·yo',
    en: 'hello',
    meaning: '안녕하세요 · Hello',
    desc: '가장 널리 쓰이는 정중한 한국어 인사말입니다.'
  },
  {
    word: '한글',
    rom: 'han·geul',
    en: 'hangeul',
    meaning: '한글 · Hangeul',
    desc: '한국어를 적는 고유 문자 체계입니다.'
  },
  {
    word: '안녕',
    rom: 'an·nyeong',
    en: 'annyeong',
    meaning: '안녕 · Hi / Bye',
    desc: '가까운 사이에서 인사하거나 헤어질 때 사용합니다.'
  },
  {
    word: '사랑',
    rom: 'sa·rang',
    en: 'sarang',
    meaning: '사랑 · Love',
    desc: '사람이나 존재를 아끼고 소중히 여기는 마음입니다.'
  },
  {
    word: '감사',
    rom: 'gam·sa',
    en: 'gamsa',
    meaning: '감사 · Thanks',
    desc: '고마운 마음을 뜻하는 말입니다.'
  },
  {
    word: '밥',
    rom: 'bap',
    en: 'bap',
    meaning: '밥 · Rice / Meal',
    desc: '익힌 쌀밥 또는 식사를 뜻합니다.'
  },
  {
    word: '물',
    rom: 'mul',
    en: 'mul',
    meaning: '물 · Water',
    desc: '사람과 생명체의 생활에 꼭 필요한 액체입니다.'
  },
  {
    word: '한국',
    rom: 'han·guk',
    en: 'hanguk',
    meaning: '한국 · Korea',
    desc: '동아시아 한반도에 위치한 나라입니다.'
  },
  {
    word: '친구',
    rom: 'chin·gu',
    en: 'chingu',
    meaning: '친구 · Friend',
    desc: '가깝게 사귀는 사람을 뜻합니다.'
  },
  {
    word: '엄마',
    rom: 'eom·ma',
    en: 'eomma',
    meaning: '엄마 · Mom',
    desc: '어머니를 친근하게 부르는 말입니다.'
  },
  {
    word: '아빠',
    rom: 'a·ppa',
    en: 'appa',
    meaning: '아빠 · Dad',
    desc: '아버지를 친근하게 부르는 말입니다.'
  }
];

function assemble(cho, jung, jong = '') {
  const choIndex = CHO.indexOf(cho);
  const jungIndex = JUNG.indexOf(jung);
  const jongIndex = JONG.indexOf(jong);

  if (
    choIndex < 0 ||
    jungIndex < 0 ||
    jongIndex < 0
  ) {
    return `${cho || ''}${jung || ''}${jong || ''}`;
  }

  return String.fromCharCode(
    44032 +
    choIndex * 588 +
    jungIndex * 28 +
    jongIndex
  );
}

function decompose(text) {
  const result = [];

  for (const char of text) {
    if (char === ' ') {
      result.push({
        type: 'space'
      });

      continue;
    }

    const code = char.charCodeAt(0);

    if (
      code >= 44032 &&
      code <= 55203
    ) {
      const base = code - 44032;

      result.push({
        type: 'syllable',
        cho: CHO[Math.floor(base / 588)],
        jung: JUNG[Math.floor((base % 588) / 28)],
        jong: JONG[base % 28]
      });
    }
  }

  return result;
}

function romanSyl(syllable) {
  const onset =
    consonants
      .find(item => item.j === syllable.cho)
      ?.on
      .split('/')[0] || '';

  const vowel =
    vowels
      .find(item => item.j === syllable.jung)
      ?.r || '';

  const finalSound =
    finals
      .find(item => item.j === syllable.jong)
      ?.r || '';

  return (
    onset === '–'
      ? ''
      : onset
  ) + vowel + finalSound;
}

function romanizeText(text) {
  const tokens = decompose(text);

  let output = '';
  let previousWasSyllable = false;

  tokens.forEach(token => {
    if (token.type === 'space') {
      output =
        output.replace(/\s+$/, '') + ' ';

      previousWasSyllable = false;
      return;
    }

    if (previousWasSyllable) {
      output += '·';
    }

    output += romanSyl(token);
    previousWasSyllable = true;
  });

  return output.trim();
}

function createCharacterCard(
  item,
  detailId,
  type
) {
  const button =
    document.createElement('button');

  button.className = 'char-card';

  button.innerHTML = `
    <span class="big">${item.j}</span>
    <span class="sound">${item.sound}</span>
  `;

  button.addEventListener('click', () => {
    document
      .querySelectorAll('.char-card')
      .forEach(card => {
        card.classList.remove('active');
      });

    button.classList.add('active');

    const detail =
      document.getElementById(detailId);

    if (type === 'con') {
      detail.innerHTML = `
        <div class="hero">${item.j}</div>

        <div>
          <div class="name">
            ${item.name}
          </div>

          <div class="explain">
            Initial sound: ${item.sound}
          </div>
        </div>
      `;
    } else {
      detail.innerHTML = `
        <div class="hero">${item.j}</div>

        <div>
          <div class="name">
            ${item.r}
          </div>

          <div class="explain">
            Vowel sound: ${item.r}
          </div>
        </div>
      `;
    }
  });

  return button;
}

const basicConsonants = consonants.filter(
  item =>
    ![
      'ㄲ',
      'ㄸ',
      'ㅃ',
      'ㅆ',
      'ㅉ'
    ].includes(item.j)
);

const doubleConsonants = consonants.filter(
  item =>
    [
      'ㄲ',
      'ㄸ',
      'ㅃ',
      'ㅆ',
      'ㅉ'
    ].includes(item.j)
);

basicConsonants.forEach(item => {
  document
    .getElementById('basicConsonants')
    .appendChild(
      createCharacterCard(
        {
          j: item.j,
          name: item.name,
          sound: item.on
        },
        'consonantDetail',
        'con'
      )
    );
});

doubleConsonants.forEach(item => {
  document
    .getElementById('doubleConsonants')
    .appendChild(
      createCharacterCard(
        {
          j: item.j,
          name: item.name,
          sound: item.on
        },
        'consonantDetail',
        'con'
      )
    );
});

const basicVowelList = [
  'ㅏ',
  'ㅑ',
  'ㅓ',
  'ㅕ',
  'ㅗ',
  'ㅛ',
  'ㅜ',
  'ㅠ',
  'ㅡ',
  'ㅣ'
];

vowels
  .filter(item =>
    basicVowelList.includes(item.j)
  )
  .forEach(item => {
    document
      .getElementById('basicVowels')
      .appendChild(
        createCharacterCard(
          {
            ...item,
            sound: item.r
          },
          'vowelDetail',
          'vow'
        )
      );
  });

vowels
  .filter(item =>
    !basicVowelList.includes(item.j)
  )
  .forEach(item => {
    document
      .getElementById('combinedVowels')
      .appendChild(
        createCharacterCard(
          {
            ...item,
            sound: item.r
          },
          'vowelDetail',
          'vow'
        )
      );
  });

const batchimAccordion =
  document.getElementById(
    'batchimAccordion'
  );

batchimGroups.forEach((group, index) => {
  const item =
    document.createElement('div');

  item.className =
    `acc-item ${group.class}` +
    (
      index === 0
        ? ' open'
        : ''
    );

  item.innerHTML = `
    <button class="acc-head">
      <span>${group.sound}</span>

      <span class="desc">
        ${group.desc}
      </span>

      <span>
        ${index === 0 ? '▲' : '▼'}
      </span>
    </button>

    <div class="acc-body">
      <div class="grid"></div>
    </div>
  `;

  const grid =
    item.querySelector('.grid');

  group.items.forEach(character => {
    const finalInfo =
      finals.find(
        finalItem =>
          finalItem.j === character
      );

    const button =
      document.createElement('button');

    button.className = 'char-card';

    button.innerHTML = `
      <span class="big">
        ${character}
      </span>

      <span class="sound">
        /${finalInfo?.r || ''}/
      </span>
    `;

    button.addEventListener('click', () => {
      document
        .getElementById('batchimSelected')
        .innerHTML = `
          <div class="symbol">
            ${character}
          </div>

          <div>
            <strong>
              받침 ${character}
            </strong>

            <span>
              대표 끝소리 /${finalInfo?.r || ''}/
              · 예시 ${group.example}
            </span>
          </div>
        `;
    });

    grid.appendChild(button);
  });

  const header =
    item.querySelector('.acc-head');

  header.addEventListener('click', () => {
    item.classList.toggle('open');

    header
      .querySelector('span:last-child')
      .textContent =
        item.classList.contains('open')
          ? '▲'
          : '▼';
  });

  batchimAccordion.appendChild(item);
});

let demo = {
  cho: 'ㄱ',
  jung: 'ㅏ',
  jong: ''
};

let demoSlot = 'con';

function renderDemo() {
  document
    .getElementById('demoCon')
    .textContent = demo.cho;

  document
    .getElementById('demoVow')
    .textContent = demo.jung;

  document
    .getElementById('demoFin')
    .textContent = demo.jong;

  document
    .getElementById('slotConSymbol')
    .textContent = demo.cho;

  document
    .getElementById('slotVowSymbol')
    .textContent = demo.jung;

  document
    .getElementById('slotFinSymbol')
    .textContent = demo.jong;

  document
    .getElementById('demoResult')
    .textContent =
      assemble(
        demo.cho,
        demo.jung,
        demo.jong
      );

  document
    .getElementById('demoRoman')
    .textContent =
      romanSyl(demo);

  document
    .querySelectorAll('[data-demo-slot]')
    .forEach(element => {
      element.classList.toggle(
        'active',
        element.dataset.demoSlot ===
          demoSlot
      );
    });

  document
    .querySelectorAll('[data-demo-tab]')
    .forEach(element => {
      const slot =
        element.dataset.demoTab;

      element.className =
        `tab ${slot}` +
        (
          slot === demoSlot
            ? ` active ${slot}`
            : ''
        );
    });

  renderDemoKeys();
}

function renderDemoKeys() {
  const demoKeys =
    document.getElementById('demoKeys');

  demoKeys.innerHTML = '';

  let items;
  let selected;

  if (demoSlot === 'con') {
    items = consonants.map(item => ({
      j: item.j,
      r: item.on
    }));

    selected = demo.cho;
  } else if (demoSlot === 'vow') {
    items = vowels;
    selected = demo.jung;
  } else {
    items = [
      {
        j: '',
        r: 'none',
        none: true
      },
      ...finals
    ];

    selected = demo.jong;
  }

  items.forEach(item => {
    const button =
      document.createElement('button');

    button.className =
      'key' +
      (
        item.none
          ? ' none'
          : ''
      ) +
      (
        selected === item.j
          ? ' active'
          : ''
      );

    button.innerHTML =
      item.none
        ? `
          받침 없음
          <span>none</span>
        `
        : `
          ${item.j}
          <span>${item.r}</span>
        `;

    button.addEventListener('click', () => {
      if (demoSlot === 'con') {
        demo.cho = item.j;
      } else if (demoSlot === 'vow') {
        demo.jung = item.j;
      } else {
        demo.jong = item.j;
      }

      renderDemo();
    });

    demoKeys.appendChild(button);
  });
}

document
  .querySelectorAll('[data-demo-slot]')
  .forEach(element => {
    element.addEventListener('click', () => {
      demoSlot =
        element.dataset.demoSlot;

      renderDemo();
    });
  });

document
  .querySelectorAll('[data-demo-tab]')
  .forEach(element => {
    element.addEventListener('click', () => {
      demoSlot =
        element.dataset.demoTab;

      renderDemo();
    });
  });

document
  .getElementById('demoReset')
  .addEventListener('click', () => {
    demo = {
      cho: 'ㄱ',
      jung: 'ㅏ',
      jong: ''
    };

    demoSlot = 'con';
    renderDemo();
  });

document
  .getElementById('demoRemoveFinal')
  .addEventListener('click', () => {
    demo.jong = '';
    demoSlot = 'fin';
    renderDemo();
  });

renderDemo();

document
  .querySelectorAll('.mode-btn')
  .forEach(button => {
    button.addEventListener('click', () => {
      document
        .querySelectorAll('.mode-btn')
        .forEach(item => {
          item.classList.remove('active');
        });

      button.classList.add('active');

      const isClickMode =
        button.dataset.mode === 'click';

      document
        .getElementById('clickMode')
        .style.display =
          isClickMode
            ? 'block'
            : 'none';

      document
        .getElementById('typeMode')
        .classList.toggle(
          'active',
          !isClickMode
        );
    });
  });

let wordTokens = [];
let activeIndex = 0;
let wordSlot = 'con';
let loadedPreset = '안녕하세요';
let edited = false;

function markEdited() {
  edited = true;
  loadedPreset = '';

  document
    .getElementById('dictMain')
    .textContent =
      '사용자 조립 표현 · Custom phrase';

  document
    .getElementById('dictDesc')
    .textContent =
      '직접 초성, 중성, 받침을 조합하고 있습니다.';
}

function loadPreset(word) {
  const preset =
    presets.find(item =>
      item.word === word
    );

  if (!preset) {
    return;
  }

  wordTokens = decompose(word);

  activeIndex = Math.max(
    0,
    wordTokens.findIndex(
      item =>
        item.type === 'syllable'
    )
  );

  wordSlot = 'con';
  loadedPreset = word;
  edited = false;

  document
    .getElementById('dictMain')
    .textContent =
      preset.meaning;

  document
    .getElementById('dictDesc')
    .textContent =
      preset.desc;

  renderWord();
}

function getRomanText() {
  if (!edited) {
    const preset =
      presets.find(item =>
        item.word === loadedPreset
      );

    if (preset) {
      return preset.rom;
    }
  }

  let output = '';
  let previousWasSyllable = false;

  wordTokens.forEach(token => {
    if (token.type === 'space') {
      output =
        output.replace(/\s+$/, '') + ' ';

      previousWasSyllable = false;
      return;
    }

    if (previousWasSyllable) {
      output += '·';
    }

    output += romanSyl(token);
    previousWasSyllable = true;
  });

  return output.trim();
}

function renderPresets() {
  const presetRow =
    document.getElementById('presetRow');

  presetRow.innerHTML = '';

  presets.forEach(preset => {
    const button =
      document.createElement('button');

    button.className =
      'preset' +
      (
        !edited &&
        loadedPreset === preset.word
          ? ' active'
          : ''
      );

    button.innerHTML = `
      ${preset.word}
      <span>${preset.en}</span>
    `;

    button.addEventListener('click', () => {
      loadPreset(preset.word);
    });

    presetRow.appendChild(button);
  });
}

function renderWordCards() {
  const wordCards =
    document.getElementById('wordCards');

  wordCards.innerHTML = '';

  let syllableCount = 0;

  wordTokens.forEach((token, index) => {
    if (token.type === 'space') {
      const spaceButton =
        document.createElement('button');

      spaceButton.className =
        'space-card' +
        (
          index === activeIndex
            ? ' active'
            : ''
        );

      spaceButton.textContent = 'SPACE';

      spaceButton.addEventListener(
        'click',
        () => {
          activeIndex = index;
          renderWord();
        }
      );

      wordCards.appendChild(spaceButton);
      return;
    }

    syllableCount += 1;

    const card =
      document.createElement('button');

    card.className =
      'syllable-card' +
      (
        index === activeIndex
          ? ' active'
          : ''
      );

    card.innerHTML = `
      <span class="num">
        ${syllableCount}
      </span>

      <span class="ko">
        ${assemble(
          token.cho,
          token.jung,
          token.jong
        )}
      </span>

      <span class="ro">
        ${romanSyl(token)}
      </span>
    `;

    card.addEventListener('click', () => {
      activeIndex = index;
      renderWord();
    });

    wordCards.appendChild(card);
  });

  const addButton =
    document.createElement('button');

  addButton.className = 'add-card';
  addButton.textContent = '+';

  addButton.addEventListener(
    'click',
    addSyllable
  );

  wordCards.appendChild(addButton);

  document
    .getElementById('fullRoman')
    .textContent =
      getRomanText() || '—';
}

function renderWordEditor() {
  const wordEditor =
    document.getElementById('wordEditor');

  const token =
    wordTokens[activeIndex];

  if (!token) {
    wordEditor.innerHTML = `
      <div class="detail">
        + 버튼으로 음절을 추가하세요.
      </div>
    `;

    return;
  }

  if (token.type === 'space') {
    wordEditor.innerHTML = `
      <div class="detail">
        띄어쓰기가 선택되어 있습니다.
      </div>
    `;

    return;
  }

  wordEditor.innerHTML = `
    <div class="demo-layout">
      <div>
        <div class="visual-stack">
          <div class="cell con">
            <small>자음 (CON)</small>
            ${token.cho}
          </div>

          <div class="cell vow">
            <small>모음 (VOW)</small>
            ${token.jung}
          </div>

          <div class="cell fin">
            <small>받침 (FINAL)</small>
            ${token.jong}
          </div>
        </div>

        <div class="result">
          <div class="ko">
            ${assemble(
              token.cho,
              token.jung,
              token.jong
            )}
          </div>

          <div class="ro">
            ${romanSyl(token)}
          </div>
        </div>
      </div>

      <div class="slots">
        <div
          class="slot con ${
            wordSlot === 'con'
              ? 'active'
              : ''
          }"
          data-word-slot="con"
        >
          <div class="symbol">
            ${token.cho}
          </div>

          <div>
            <b>자음</b>
            <span>Click to change</span>
          </div>
        </div>

        <div
          class="slot vow ${
            wordSlot === 'vow'
              ? 'active'
              : ''
          }"
          data-word-slot="vow"
        >
          <div class="symbol">
            ${token.jung}
          </div>

          <div>
            <b>모음</b>
            <span>Click to change</span>
          </div>
        </div>

        <div
          class="slot fin ${
            wordSlot === 'fin'
              ? 'active'
              : ''
          }"
          data-word-slot="fin"
        >
          <div class="symbol">
            ${token.jong}
          </div>

          <div>
            <b>받침</b>
            <span>Optional</span>
          </div>
        </div>
      </div>
    </div>

    <div class="tabs">
      <button
        class="tab con ${
          wordSlot === 'con'
            ? 'active con'
            : ''
        }"
        data-word-tab="con"
      >
        자음
      </button>

      <button
        class="tab vow ${
          wordSlot === 'vow'
            ? 'active vow'
            : ''
        }"
        data-word-tab="vow"
      >
        모음
      </button>

      <button
        class="tab fin ${
          wordSlot === 'fin'
            ? 'active fin'
            : ''
        }"
        data-word-tab="fin"
      >
        받침
      </button>
    </div>

    <div
      class="keypad"
      id="wordKeys"
    ></div>
  `;

  wordEditor
    .querySelectorAll('[data-word-slot]')
    .forEach(element => {
      element.addEventListener('click', () => {
        wordSlot =
          element.dataset.wordSlot;

        renderWordEditor();
      });
    });

  wordEditor
    .querySelectorAll('[data-word-tab]')
    .forEach(element => {
      element.addEventListener('click', () => {
        wordSlot =
          element.dataset.wordTab;

        renderWordEditor();
      });
    });

  renderWordKeys();
}

function renderWordKeys() {
  const wordKeys =
    document.getElementById('wordKeys');

  const token =
    wordTokens[activeIndex];

  wordKeys.innerHTML = '';

  let items;
  let selected;

  if (wordSlot === 'con') {
    items = consonants.map(item => ({
      j: item.j,
      r: item.on
    }));

    selected = token.cho;
  } else if (wordSlot === 'vow') {
    items = vowels;
    selected = token.jung;
  } else {
    items = [
      {
        j: '',
        r: 'none',
        none: true
      },
      ...finals
    ];

    selected = token.jong;
  }

  items.forEach(item => {
    const button =
      document.createElement('button');

    button.className =
      'key' +
      (
        item.none
          ? ' none'
          : ''
      ) +
      (
        selected === item.j
          ? ' active'
          : ''
      );

    button.innerHTML =
      item.none
        ? `
          받침 없음
          <span>none</span>
        `
        : `
          ${item.j}
          <span>${item.r}</span>
        `;

    button.addEventListener('click', () => {
      if (wordSlot === 'con') {
        token.cho = item.j;
      } else if (wordSlot === 'vow') {
        token.jung = item.j;
      } else {
        token.jong = item.j;
      }

      markEdited();
      renderWord();
    });

    wordKeys.appendChild(button);
  });
}

function addSyllable() {
  const newToken = {
    type: 'syllable',
    cho: 'ㅇ',
    jung: 'ㅏ',
    jong: ''
  };

  const insertIndex =
    wordTokens.length
      ? Math.min(
          activeIndex + 1,
          wordTokens.length
        )
      : 0;

  wordTokens.splice(
    insertIndex,
    0,
    newToken
  );

  activeIndex = insertIndex;
  wordSlot = 'con';

  markEdited();
  renderWord();
}

function renderWord() {
  renderPresets();
  renderWordCards();
  renderWordEditor();
}

document
  .getElementById('wordReset')
  .addEventListener('click', () => {
    loadPreset('안녕하세요');
  });

document
  .getElementById('addSpace')
  .addEventListener('click', () => {
    if (!wordTokens.length) {
      return;
    }

    const insertIndex =
      Math.min(
        activeIndex + 1,
        wordTokens.length
      );

    if (
      wordTokens[insertIndex - 1]
        ?.type === 'space' ||
      wordTokens[insertIndex]
        ?.type === 'space'
    ) {
      return;
    }

    wordTokens.splice(
      insertIndex,
      0,
      {
        type: 'space'
      }
    );

    activeIndex = insertIndex;

    markEdited();
    renderWord();
  });

document
  .getElementById('removeWordFinal')
  .addEventListener('click', () => {
    const token =
      wordTokens[activeIndex];

    if (
      token &&
      token.type === 'syllable'
    ) {
      token.jong = '';
      wordSlot = 'fin';

      markEdited();
      renderWord();
    }
  });

document
  .getElementById('deleteSelected')
  .addEventListener('click', () => {
    if (!wordTokens[activeIndex]) {
      return;
    }

    wordTokens.splice(
      activeIndex,
      1
    );

    activeIndex = Math.max(
      0,
      Math.min(
        activeIndex,
        wordTokens.length - 1
      )
    );

    markEdited();
    renderWord();
  });

loadPreset('안녕하세요');

function renderTypedCards(text) {
  const typedCards =
    document.getElementById('typedCards');

  typedCards.innerHTML = '';

  if (!text) {
    return;
  }

  const typedTokens = decompose(text);

  typedTokens.forEach(token => {
    if (token.type === 'space') {
      const space =
        document.createElement('div');

      space.className = 'typed-space';
      space.textContent = 'SPACE';

      typedCards.appendChild(space);
      return;
    }

    const card =
      document.createElement('div');

    card.className = 'typed-card';

    card.innerHTML = `
      <div class="ko">
        ${assemble(
          token.cho,
          token.jung,
          token.jong
        )}
      </div>

      <div class="ro">
        ${romanSyl(token)}
      </div>
    `;

    typedCards.appendChild(card);
  });
}

function applyTypedText() {
  const typeInput =
    document.getElementById('typeInput');

  const text =
    typeInput.value.trim();

  document
    .getElementById('typedKorean')
    .textContent =
      text || '한글을 입력해 보세요.';

  document
    .getElementById('typedRoman')
    .textContent =
      text
        ? romanizeText(text)
        : '';

  renderTypedCards(text);
}

document
  .getElementById('applyTyped')
  .addEventListener(
    'click',
    applyTypedText
  );

document
  .getElementById('typeInput')
  .addEventListener(
    'input',
    applyTypedText
  );

document
  .getElementById('typeInput')
  .addEventListener(
    'keydown',
    event => {
      if (event.key === 'Enter') {
        applyTypedText();
      }
    }
  );

document
  .getElementById('sendToBuilder')
  .addEventListener('click', () => {
    const text =
      document
        .getElementById('typeInput')
        .value
        .trim();

    if (!text) {
      return;
    }

    wordTokens = decompose(text);

    activeIndex = Math.max(
      0,
      wordTokens.findIndex(
        token =>
          token.type === 'syllable'
      )
    );

    wordSlot = 'con';

    markEdited();

    document
      .querySelectorAll('.mode-btn')
      .forEach(button => {
        button.classList.toggle(
          'active',
          button.dataset.mode === 'click'
        );
      });

    document
      .getElementById('clickMode')
      .style.display = 'block';

    document
      .getElementById('typeMode')
      .classList.remove('active');

    renderWord();

    document
      .getElementById('clickMode')
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  });

document
  .getElementById('clearTyped')
  .addEventListener('click', () => {
    document
      .getElementById('typeInput')
      .value = '';

    document
      .getElementById('typedKorean')
      .textContent =
        '한글을 입력해 보세요.';

    document
      .getElementById('typedRoman')
      .textContent = '';

    document
      .getElementById('typedCards')
      .innerHTML = '';
  });
