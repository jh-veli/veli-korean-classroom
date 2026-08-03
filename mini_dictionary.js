(() => {
  'use strict';

  let entries = [];
  let entriesByWord = new Map();
  let selectedWord = '';
  let dictionaryReady = false;

  function normalize(value) {
    return String(value || '')
      .trim()
      .replace(/\s+/g, ' ');
  }

  function getElements() {
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

  function buildPanel() {
    const oldPanel = document.querySelector('#clickMode .dictionary');

    if (!oldPanel) {
      console.error('Mini dictionary panel location was not found.');
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
              inputmode="text"
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

  function rebuildIndex() {
    entriesByWord = new Map();

    entries.forEach((entry) => {
      const word = normalize(entry.word);
      if (!word) return;

      if (!entriesByWord.has(word)) {
        entriesByWord.set(word, []);
      }

      entriesByWord.get(word).push(entry);
    });
  }

  function fallbackRoman(word) {
    if (typeof romanizeText === 'function') {
      return romanizeText(word);
    }

    return '';
  }

  function getCurrentBuilderWord() {
    try {
      if (!Array.isArray(wordTokens)) return '';

      return wordTokens
        .map((token) => {
          if (token.type === 'space') return ' ';

          if (
            token.type === 'syllable' &&
            typeof assemble === 'function'
          ) {
            return assemble(token.cho, token.jung, token.jong || '');
          }

          return '';
        })
        .join('')
        .replace(/\s+/g, ' ')
        .trim();
    } catch (error) {
      return '';
    }
  }

  function showMissing(word) {
    const el = getElements();
    const normalized = normalize(word);

    selectedWord = normalized;
    el.word.textContent = normalized || '단어를 선택하거나 검색해 주세요.';
    el.meaning.textContent = normalized
      ? '미니사전에 등록되지 않은 표현입니다.'
      : '';
    el.meta.textContent = '';
    el.roman.textContent = normalized ? fallbackRoman(normalized) : '';
    el.note.textContent = normalized
      ? '자세한 뜻, 예문과 발음은 외부 사전에서 확인할 수 있습니다.'
      : 'A1 기본 어휘 982개를 검색할 수 있습니다.';
  }

  function showEntry(word) {
    const normalized = normalize(word);
    const el = getElements();

    if (!dictionaryReady) {
      selectedWord = normalized;
      return;
    }

    const matches = entriesByWord.get(normalized) || [];
    selectedWord = normalized;

    if (!normalized) {
      showMissing('');
      return;
    }

    if (!matches.length) {
      showMissing(normalized);
      return;
    }

    const first = matches[0];
    const meanings = [
      ...new Set(matches.map((item) => item.meaning).filter(Boolean))
    ];
    const senses = [
      ...new Set(
        matches
          .map((item) => {
            const pos = item.pos_ko || item.pos || '';
            const level = item.level || 'A1';
            return pos ? `${pos} · ${level}` : level;
          })
          .filter(Boolean)
      )
    ];

    el.word.textContent = first.word;
    el.meaning.textContent = meanings.join(' / ') || '영어 뜻 정보 없음';
    el.meta.textContent = senses.join(' / ');
    el.roman.textContent = first.roman || fallbackRoman(first.word);
    el.note.textContent = matches.length > 1
      ? `같은 표기의 품사·뜻 항목이 ${matches.length}개 있습니다. 자세한 내용은 외부 사전에서 확인하세요.`
      : '자세한 뜻, 예문과 발음은 외부 사전에서 확인할 수 있습니다.';

    if (document.activeElement !== el.search) {
      el.search.value = first.word;
    }
  }

  function getSuggestions(query, limit = 8) {
    const q = normalize(query);
    if (!q) return [];

    const starts = [];
    const contains = [];

    entries.forEach((entry) => {
      if (entry.word.startsWith(q)) {
        starts.push(entry);
      } else if (entry.word.includes(q)) {
        contains.push(entry);
      }
    });

    const unique = new Map();

    [...starts, ...contains].forEach((entry) => {
      if (!unique.has(entry.word)) {
        unique.set(entry.word, entry);
      }
    });

    return [...unique.values()].slice(0, limit);
  }

  function renderSuggestions(query) {
    const el = getElements();
    const results = getSuggestions(query);

    el.suggestions.innerHTML = '';

    if (!normalize(query) || !results.length) {
      el.suggestions.classList.remove('open');
      return;
    }

    results.forEach((entry) => {
      const button = document.createElement('button');
      const word = document.createElement('strong');
      const meaning = document.createElement('span');
      const meta = document.createElement('small');

      button.type = 'button';
      button.className = 'mini-suggestion';
      word.textContent = entry.word;
      meaning.textContent = entry.meaning || '';
      meta.textContent = `${entry.pos_ko || entry.pos || ''} · ${entry.level || 'A1'}`;

      button.append(word, meaning, meta);

      button.addEventListener('click', () => {
        el.search.value = entry.word;
        el.suggestions.classList.remove('open');
        showEntry(entry.word);
      });

      el.suggestions.appendChild(button);
    });

    el.suggestions.classList.add('open');
  }

  function setBuilderWord(word) {
    const normalized = normalize(word);

    if (!normalized || typeof decompose !== 'function') return;

    const newTokens = decompose(normalized);
    if (!newTokens.length) return;

    try {
      wordTokens = newTokens;
      activeIndex = Math.max(
        0,
        wordTokens.findIndex((token) => token.type === 'syllable')
      );
      wordSlot = 'con';
      edited = true;
      loadedPreset = '';
    } catch (error) {
      console.error('Word Builder state could not be updated.', error);
      return;
    }

    document.querySelectorAll('.mode-btn').forEach((button) => {
      button.classList.toggle('active', button.dataset.mode === 'click');
    });

    const clickPanel = document.getElementById('clickMode');
    const typePanel = document.getElementById('typeMode');

    if (clickPanel) clickPanel.style.display = 'block';
    if (typePanel) typePanel.classList.remove('active');

    if (typeof renderWord === 'function') {
      renderWord();
    }

    clickPanel?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  function openExternal(buttonId) {
    const el = getElements();
    const word = normalize(
      el.search.value || selectedWord || getCurrentBuilderWord()
    );
    const externalInput = document.getElementById('externalDictInput');

    if (externalInput) {
      externalInput.value = word;
    }

    document.getElementById(buttonId)?.click();
  }

  function setupControls() {
    const el = getElements();

    el.search.addEventListener('input', () => {
      renderSuggestions(el.search.value);
    });

    el.search.addEventListener('focus', () => {
      renderSuggestions(el.search.value);
    });

    el.search.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        showEntry(el.search.value);
        el.suggestions.classList.remove('open');
      }

      if (event.key === 'Escape') {
        el.suggestions.classList.remove('open');
      }
    });

    document
      .getElementById('miniDictSearchButton')
      ?.addEventListener('click', () => {
        showEntry(el.search.value);
        el.suggestions.classList.remove('open');
      });

    document
      .getElementById('miniSendToBuilder')
      ?.addEventListener('click', () => {
        setBuilderWord(el.search.value || selectedWord);
      });

    document
      .getElementById('miniOpenKrdict')
      ?.addEventListener('click', () => {
        openExternal('openKrdict');
      });

    document
      .getElementById('miniOpenNaver')
      ?.addEventListener('click', () => {
        openExternal('openNaverDict');
      });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.mini-search-wrap')) {
        el.suggestions.classList.remove('open');
      }
    });
  }

  function connectWordBuilder() {
    if (typeof renderWord !== 'function') return;

    const originalRenderWord = renderWord;

    renderWord = function (...args) {
      const result = originalRenderWord.apply(this, args);
      showEntry(getCurrentBuilderWord());
      return result;
    };

    document.getElementById('sendToBuilder')?.addEventListener('click', () => {
      window.setTimeout(() => {
        showEntry(getCurrentBuilderWord());
      }, 0);
    });
  }

  async function loadDictionary() {
    const el = getElements();

    try {
      const response = await fetch('./mini_dictionary.json', {
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      entries = Array.isArray(data) ? data : (data.entries || []);
      rebuildIndex();
      dictionaryReady = true;

      const currentWord = getCurrentBuilderWord() || selectedWord || '안녕하세요';
      showEntry(currentWord);
    } catch (error) {
      console.error('Mini dictionary load failed:', error);
      el.word.textContent = '미니사전을 불러오지 못했습니다.';
      el.meaning.textContent = '';
      el.meta.textContent = '';
      el.roman.textContent = '';
      el.note.textContent =
        'mini_dictionary.json이 index.html과 같은 위치에 있는지 확인해 주세요.';
    }
  }

  function init() {
    if (!buildPanel()) return;

    setupControls();
    connectWordBuilder();
    loadDictionary();
  }

  init();
})();
