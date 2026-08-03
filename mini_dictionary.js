(() => {
  'use strict';

  let dictionaryEntries = [];
  let entriesByWord = new Map();
  let selectedDictionaryWord = '';

  function normalizeText(value) {
    return String(value || '')
      .trim()
      .replace(/\s+/g, ' ');
  }

  function getUi() {
    return {
      panel: document.getElementById('miniDictionaryPanel'),
      search: document.getElementById('miniDictSearch'),
      suggestions: document.getElementById('miniDictSuggestions'),
      word: document.getElementById('miniDictWord'),
      meaning: document.getElementById('miniDictMeaning'),
      meta: document.getElementById('miniDictMeta'),
      roman: document.getElementById('miniDictRoman'),
      note: document.getElementById('miniDictNote')
    };
  }

  function createDictionaryPanel() {
    const oldPanel = document.querySelector('#clickMode .dictionary');

    if (!oldPanel) {
      console.error('Mini dictionary panel was not found.');
      return false;
    }

    oldPanel.outerHTML = `
      <div class="mini-dictionary-panel" id="miniDictionaryPanel">
        <div class="mini-dictionary-title">
          📖 내장 미니 단어장 · MINI DICTIONARY
        </div>

        <div class="mini-search-wrap">
          <div class="mini-search-row">
            <input
              id="miniDictSearch"
              class="mini-search-input"
              type="text"
              placeholder="단어 검색 · Search a Korean word"
              autocomplete="off"
            >

            <button
              class="btn primary"
              id="miniDictSearchButton"
              type="button"
            >
              검색
            </button>
          </div>

          <div
            class="mini-suggestions"
            id="miniDictSuggestions"
          ></div>
        </div>

        <div class="mini-result">
          <div class="mini-result-word" id="miniDictWord">
            사전을 불러오는 중입니다.
          </div>

          <div class="mini-result-meaning" id="miniDictMeaning"></div>
          <div class="mini-result-meta" id="miniDictMeta"></div>
          <div class="mini-result-roman" id="miniDictRoman"></div>

          <div class="mini-result-note" id="miniDictNote">
            mini_dictionary.json을 읽고 있습니다.
          </div>
        </div>

        <div class="actions mini-dictionary-actions">
          <button class="btn primary" id="miniSendToBuilder" type="button">
            카드로 보내기
          </button>

          <button class="btn" id="miniOpenKrdict" type="button">
            한국어기초사전
          </button>

          <button class="btn" id="miniOpenNaver" type="button">
            네이버 국어사전
          </button>
        </div>
      </div>
    `;

    return true;
  }

  function buildDictionaryIndex() {
    entriesByWord = new Map();

    dictionaryEntries.forEach((entry) => {
      const word = normalizeText(entry.word);

      if (!word) {
        return;
      }

      if (!entriesByWord.has(word)) {
        entriesByWord.set(word, []);
      }

      entriesByWord.get(word).push(entry);
    });
  }

  function tokensToWord(tokens) {
    if (!Array.isArray(tokens)) {
      return '';
    }

    return tokens.map((token) => {
      if (token.type === 'space') {
        return ' ';
      }

      if (token.type === 'syllable' && typeof assemble === 'function') {
        return assemble(token.cho, token.jung, token.jong || '');
      }

      return '';
    }).join('').trim();
  }

  function getCurrentBuilderWord() {
    try {
      if (typeof wordTokens !== 'undefined') {
        return tokensToWord(wordTokens);
      }
    } catch (error) {
      console.warn('Could not read wordTokens:', error);
    }

    return '';
  }

  function displayMissingWord(word) {
    const ui = getUi();
    const normalizedWord = normalizeText(word);

    selectedDictionaryWord = normalizedWord;

    ui.word.textContent =
      normalizedWord || '단어를 선택하거나 검색해 주세요.';

    ui.meaning.textContent = normalizedWord
      ? '미니사전에 등록되지 않은 표현입니다.'
      : '';

    ui.meta.textContent = '';

    ui.roman.textContent =
      normalizedWord && typeof romanizeText === 'function'
        ? romanizeText(normalizedWord)
        : '';

    ui.note.textContent = normalizedWord
      ? '자세한 뜻과 발음은 외부 사전에서 확인할 수 있습니다.'
      : 'A1 기본 어휘 982개를 검색할 수 있습니다.';
  }

  function displayDictionaryEntry(word) {
    const ui = getUi();
    const normalizedWord = normalizeText(word);
    const matches = entriesByWord.get(normalizedWord) || [];

    selectedDictionaryWord = normalizedWord;

    if (!normalizedWord) {
      displayMissingWord('');
      return;
    }

    if (!matches.length) {
      displayMissingWord(normalizedWord);
      return;
    }

    const firstEntry = matches[0];

    const meanings = [...new Set(
      matches
        .map((entry) => normalizeText(entry.meaning))
        .filter(Boolean)
    )];

    const metaItems = [...new Set(
      matches.map((entry) => {
        const pos = entry.pos_ko || entry.pos || '';
        const level = entry.level || 'A1';
        return [pos, level].filter(Boolean).join(' · ');
      }).filter(Boolean)
    )];

    ui.word.textContent = firstEntry.word;
    ui.meaning.textContent = meanings.join(' / ') || '영어 뜻 정보 없음';
    ui.meta.textContent = metaItems.join(' / ');

    ui.roman.textContent =
      firstEntry.roman ||
      (
        typeof romanizeText === 'function'
          ? romanizeText(firstEntry.word)
          : ''
      );

    ui.note.textContent =
      matches.length > 1
        ? `같은 표기의 항목이 ${matches.length}개 있습니다. 자세한 내용은 외부 사전에서 확인하세요.`
        : '자세한 뜻, 예문과 발음은 외부 사전에서 확인할 수 있습니다.';

    if (document.activeElement !== ui.search) {
      ui.search.value = firstEntry.word;
    }
  }

  function findSuggestions(query, limit = 8) {
    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) {
      return [];
    }

    const beginsWith = [];
    const contains = [];

    dictionaryEntries.forEach((entry) => {
      const word = normalizeText(entry.word);

      if (word.startsWith(normalizedQuery)) {
        beginsWith.push(entry);
      } else if (word.includes(normalizedQuery)) {
        contains.push(entry);
      }
    });

    const uniqueEntries = new Map();

    [...beginsWith, ...contains].forEach((entry) => {
      if (!uniqueEntries.has(entry.word)) {
        uniqueEntries.set(entry.word, entry);
      }
    });

    return [...uniqueEntries.values()].slice(0, limit);
  }

  function renderSuggestions(query) {
    const ui = getUi();
    const results = findSuggestions(query);

    ui.suggestions.innerHTML = '';

    if (!normalizeText(query) || !results.length) {
      ui.suggestions.classList.remove('open');
      return;
    }

    results.forEach((entry) => {
      const button = document.createElement('button');

      button.type = 'button';
      button.className = 'mini-suggestion';

      button.innerHTML = `
        <strong>${entry.word}</strong>
        <span>${entry.meaning || ''}</span>
        <small>
          ${entry.pos_ko || entry.pos || ''} · ${entry.level || 'A1'}
        </small>
      `;

      button.addEventListener('click', () => {
        ui.search.value = entry.word;
        ui.suggestions.classList.remove('open');
        displayDictionaryEntry(entry.word);
      });

      ui.suggestions.appendChild(button);
    });

    ui.suggestions.classList.add('open');
  }

  function sendWordToBuilder(word) {
    const normalizedWord = normalizeText(word);

    if (!normalizedWord || typeof decompose !== 'function') {
      return;
    }

    const newTokens = decompose(normalizedWord);

    if (!newTokens.length) {
      return;
    }

    try {
      wordTokens = newTokens;
      activeIndex = Math.max(
        0,
        wordTokens.findIndex((token) => token.type === 'syllable')
      );
      wordSlot = 'con';
      edited = true;
      loadedPreset = '';

      const clickModeElement = document.getElementById('clickMode');
      const typeModeElement = document.getElementById('typeMode');

      document.querySelectorAll('.mode-btn').forEach((button) => {
        button.classList.toggle(
          'active',
          button.dataset.mode === 'click'
        );
      });

      if (clickModeElement) {
        clickModeElement.style.display = 'block';
      }

      if (typeModeElement) {
        typeModeElement.classList.remove('active');
      }

      if (typeof renderWord === 'function') {
        renderWord();
      }

      if (clickModeElement) {
        clickModeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } catch (error) {
      console.error('Could not send the word to the card builder:', error);
    }
  }

  function openExternalDictionary(buttonId) {
    const ui = getUi();
    const word = normalizeText(
      ui.search.value ||
      selectedDictionaryWord ||
      getCurrentBuilderWord()
    );

    const externalInput = document.getElementById('externalDictInput');

    if (externalInput) {
      externalInput.value = word;
    }

    document.getElementById(buttonId)?.click();
  }

  function setupDictionaryControls() {
    const ui = getUi();

    ui.search.addEventListener('input', () => {
      renderSuggestions(ui.search.value);
    });

    ui.search.addEventListener('focus', () => {
      renderSuggestions(ui.search.value);
    });

    ui.search.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        displayDictionaryEntry(ui.search.value);
        ui.suggestions.classList.remove('open');
      }

      if (event.key === 'Escape') {
        ui.suggestions.classList.remove('open');
      }
    });

    document
      .getElementById('miniDictSearchButton')
      ?.addEventListener('click', () => {
        displayDictionaryEntry(ui.search.value);
        ui.suggestions.classList.remove('open');
      });

    document
      .getElementById('miniSendToBuilder')
      ?.addEventListener('click', () => {
        sendWordToBuilder(ui.search.value || selectedDictionaryWord);
      });

    document
      .getElementById('miniOpenKrdict')
      ?.addEventListener('click', () => {
        openExternalDictionary('openKrdict');
      });

    document
      .getElementById('miniOpenNaver')
      ?.addEventListener('click', () => {
        openExternalDictionary('openNaverDict');
      });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.mini-search-wrap')) {
        ui.suggestions.classList.remove('open');
      }
    });
  }

  function connectToWordBuilder() {
    if (typeof renderWord !== 'function') {
      return;
    }

    const originalRenderWord = renderWord;

    renderWord = function (...args) {
      const result = originalRenderWord.apply(this, args);
      displayDictionaryEntry(getCurrentBuilderWord());
      return result;
    };
  }

  async function loadMiniDictionary() {
    const ui = getUi();

    try {
      const response = await fetch('./mini_dictionary.json', {
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      dictionaryEntries = Array.isArray(data)
        ? data
        : (data.entries || []);

      buildDictionaryIndex();

      const initialWord = getCurrentBuilderWord() || '안녕하세요';
      displayDictionaryEntry(initialWord);
    } catch (error) {
      console.error('Mini dictionary load failed:', error);

      ui.word.textContent = '미니사전을 불러오지 못했습니다.';
      ui.meaning.textContent = '';
      ui.meta.textContent = '';
      ui.roman.textContent = '';
      ui.note.textContent =
        'mini_dictionary.json이 index.html과 같은 위치에 있는지 확인해 주세요.';
    }
  }

  function initializeMiniDictionary() {
    if (!createDictionaryPanel()) {
      return;
    }

    setupDictionaryControls();
    connectToWordBuilder();
    loadMiniDictionary();
  }

  initializeMiniDictionary();
})();
