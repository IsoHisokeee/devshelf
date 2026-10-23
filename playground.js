import './reference-data.js';
import './preview-engine.js';
import { getRecipePrerequisites } from './recipe-knowledge.js';

// DevShelf Studio: Interactive Sandbox (All/HTML/CSS/JS tabs + live search), 8 Visual CSS Generators, and UI Templates

const allTopics = Array.isArray(window.DEVSHELF_REFERENCE_TOPICS)
  ? window.DEVSHELF_REFERENCE_TOPICS
  : [];

const topicsById = new Map(allTopics.map((t) => [t.id, t]));

// DOM Elements — Sandbox
const topicSearchInput = document.getElementById('topic-search-input');
const langSelect = document.getElementById('lang-select');
const topicSelect = document.getElementById('topic-select');
const topicCountBadge = document.getElementById('topic-count-badge');
const briefTitle = document.getElementById('brief-title');
const briefSummary = document.getElementById('brief-summary');
const codeEditor = document.getElementById('code-editor');
const editorBackdrop = document.getElementById('editor-backdrop');
const codeHighlightLayer = document.getElementById('code-highlight-layer');
const livePreview = document.getElementById('live-preview');
const previewStatus = document.getElementById('preview-status');
const runBtn = document.getElementById('run-btn');
const resetBtn = document.getElementById('reset-btn');
const copyAllBtn = document.getElementById('copy-all-btn');
const editorTabs = document.querySelectorAll('.editor-tab');

let activeLang = 'all';
let searchQuery = '';
let activeTopic = null;
let activeEditorTab = 'combined'; // 'combined' | 'html' | 'css' | 'js'
const codeState = { combined: '', html: '', css: '', js: '' };

function rebuildCombinedFromParts() {
  const parts = [];
  if (codeState.html && codeState.html.trim()) {
    parts.push(`<!-- ==================== HTML ==================== -->\n${codeState.html.trim()}`);
  }
  if (codeState.css && codeState.css.trim()) {
    parts.push(`<style>\n/* ==================== CSS ==================== */\n${codeState.css.trim()}\n</style>`);
  }
  if (codeState.js && codeState.js.trim()) {
    parts.push(`<script>\n// ==================== JS ====================\n${codeState.js.trim()}\n<\/script>`);
  }
  codeState.combined = parts.join('\n\n');
}

function parseCombinedIntoParts(rawCombined) {
  let rest = String(rawCombined || '');
  const styleMatches = [...rest.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
  if (styleMatches.length) {
    codeState.css = styleMatches
      .map((m) => m[1].replace(/\/\* ===+ CSS ===+ \*\/\n?/g, '').trim())
      .join('\n\n');
    rest = rest.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').trim();
  }
  const scriptMatches = [...rest.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
  if (scriptMatches.length) {
    codeState.js = scriptMatches
      .map((m) => m[1].replace(/\/\/ ===+ JS ===+\n?/g, '').trim())
      .join('\n\n');
    rest = rest.replace(/<script(?![^>]*src=)[^>]*>[\s\S]*?<\/script>/gi, '').trim();
  }
  codeState.html = rest.replace(/<!-- ===+ HTML ===+ -->\n?/g, '').trim();
}

function populateSandboxStateFromTopic(topic) {
  if (!topic) return;
  if (window.DevShelfPreview && window.DevShelfPreview.splitTopicIntoCodeParts) {
    const split = window.DevShelfPreview.splitTopicIntoCodeParts(topic);
    codeState.combined = split.combined;
    codeState.html = split.html;
    codeState.css = split.css;
    codeState.js = split.js;
    return;
  }
  codeState.html = topic.code || '';
  codeState.css = '';
  codeState.js = '';
  rebuildCombinedFromParts();
}

function getFilteredSandboxTopics() {
  const q = searchQuery.toLowerCase().trim();
  return allTopics.filter((t) => {
    const byLang = activeLang === 'all' || t.lang === activeLang;
    if (!byLang) return false;
    if (!q) return true;
    const hay = [
      t.id,
      t.title,
      t.summary,
      (t.tags || []).join(' '),
      t.code || ''
    ]
      .join(' ')
      .toLowerCase();
    return q.split(/\s+/).every((word) => hay.includes(word));
  });
}

function populateTopicOptions(selectedId) {
  if (!topicSelect) return;
  const list = getFilteredSandboxTopics();
  if (topicCountBadge) {
    topicCountBadge.textContent = String(list.length);
  }

  if (!list.length) {
    topicSelect.innerHTML = `<option value="">Ничего не найдено по запросу "${searchQuery}"</option>`;
    return;
  }

  topicSelect.innerHTML = list
    .map((t, i) => `<option value="${t.id}">#${String(i + 1).padStart(3, '0')} [${t.lang.toUpperCase()}] ${t.title}</option>`)
    .join('');

  const target = selectedId && list.some((t) => t.id === selectedId) ? selectedId : list[0].id;
  topicSelect.value = target;
  loadTopicIntoSandbox(target);
}

function loadTopicIntoSandbox(topicId) {
  const topic = topicsById.get(topicId);
  if (!topic) return;
  activeTopic = topic;

  if (briefTitle) briefTitle.textContent = topic.title;
  if (briefSummary) briefSummary.textContent = topic.summary || '';

  populateSandboxStateFromTopic(topic);
  syncEditorView();
  runSandboxPreview();
}

function getActiveEditorHighlightMode() {
  if (activeEditorTab === 'html') return 'html';
  if (activeEditorTab === 'css') return 'css';
  if (activeEditorTab === 'js') return 'javascript';
  return activeTopic ? activeTopic.lang : 'html';
}

function updateEditorHighlight() {
  if (!codeHighlightLayer || !codeEditor) return;
  const raw = codeEditor.value || '';
  const mode = getActiveEditorHighlightMode();
  // Trailing newline ensures the pre/code height matches textarea when the last line ends with \n
  const safeRaw = raw.endsWith('\n') ? raw + ' ' : raw;
  if (window.DevShelfPreview && typeof window.DevShelfPreview.highlightCode === 'function') {
    codeHighlightLayer.innerHTML = window.DevShelfPreview.highlightCode(safeRaw, mode);
  } else {
    codeHighlightLayer.textContent = safeRaw;
  }
}

function syncEditorView() {
  editorTabs.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.tab === activeEditorTab);
  });
  if (codeEditor) {
    codeEditor.value = codeState[activeEditorTab] || '';
    updateEditorHighlight();
  }
}

function buildCombinedHtml() {
  // Only PHP and XML need server/config simulation; HTML, CSS, JS, Recipes, and Frameworks execute their live HTML+CSS+JS!
  if (activeTopic && (activeTopic.lang === 'php' || activeTopic.lang === 'xml')) {
    if (window.DevShelfPreview) {
      return window.DevShelfPreview.buildTopicPreviewDoc(activeTopic, codeState.html);
    }
  }

  return `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 16px;
    background: #101216;
    color: #f4f4f6;
    font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
    font-size: 14px;
    line-height: 1.5;
  }
  a { color: #facc15; }
  button:not([class]) {
    background: #facc15;
    color: #09090b;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    font-weight: 800;
    cursor: pointer;
  }
  input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="color"]):not([class]), select:not([class]), textarea:not([class]) {
    background: #181b22;
    color: #f4f4f6;
    border: 1px solid #3f3f46;
    border-radius: 4px;
    padding: 8px 12px;
  }
  #sandbox-console {
    margin-top: 14px;
    padding: 10px 12px;
    border-radius: 4px;
    background: #08090b;
    border: 1px solid #272b33;
    border-left: 3px solid #facc15;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 12px;
    color: #fef08a;
    display: none;
  }
  ${codeState.css}
</style>
</head>
<body>
  ${codeState.html}
  <div id="sandbox-console"></div>
  <script>
    (function() {
      const box = document.getElementById('sandbox-console');
      function logToBox(prefix, args) {
        if (!box) return;
        box.style.display = 'block';
        const line = document.createElement('div');
        line.style.padding = '3px 0';
        line.textContent = prefix + Array.from(args).map(v => typeof v === 'object' ? JSON.stringify(v) : String(v)).join(' ');
        box.appendChild(line);
      }
      console.log = function() { logToBox('> ', arguments); };
      console.warn = function() { logToBox('WARN: ', arguments); };
      console.error = function() { logToBox('ERR: ', arguments); };
      try {
        ${codeState.js}
      } catch (e) {
        logToBox('Ошибка JS: ', [e.message]);
      }
    })();
  <\/script>
</body>
</html>`;
}

function runSandboxPreview() {
  if (!livePreview) return;
  livePreview.srcdoc = buildCombinedHtml();
  if (previewStatus) {
    previewStatus.textContent = 'LIVE // OK';
  }
}

// Sandbox Events
if (topicSearchInput) {
  topicSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    populateTopicOptions();
  });
}

if (langSelect) {
  langSelect.addEventListener('change', (e) => {
    activeLang = e.target.value;
    populateTopicOptions();
  });
}

if (topicSelect) {
  topicSelect.addEventListener('change', (e) => {
    if (e.target.value) {
      loadTopicIntoSandbox(e.target.value);
    }
  });
}

editorTabs.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (codeEditor) {
      const val = codeEditor.value;
      codeState[activeEditorTab] = val;
      if (activeEditorTab === 'combined') {
        parseCombinedIntoParts(val);
      } else {
        rebuildCombinedFromParts();
      }
    }
    activeEditorTab = btn.dataset.tab || 'combined';
    syncEditorView();
  });
});

let debounceTimer = null;
if (codeEditor) {
  codeEditor.addEventListener('input', () => {
    const val = codeEditor.value;
    codeState[activeEditorTab] = val;
    if (activeEditorTab === 'combined') {
      parseCombinedIntoParts(val);
    } else {
      rebuildCombinedFromParts();
    }
    updateEditorHighlight();
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(runSandboxPreview, 240);
  });

  codeEditor.addEventListener('scroll', () => {
    if (!editorBackdrop) return;
    editorBackdrop.scrollTop = codeEditor.scrollTop;
    editorBackdrop.scrollLeft = codeEditor.scrollLeft;
  });
}

if (runBtn) runBtn.addEventListener('click', runSandboxPreview);
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    if (activeTopic) loadTopicIntoSandbox(activeTopic.id);
  });
}
if (copyAllBtn) {
  copyAllBtn.addEventListener('click', async () => {
    const textToCopy = codeState[activeEditorTab] || codeState.combined;
    await navigator.clipboard.writeText(textToCopy);
    copyAllBtn.textContent = '✓ Скопировано!';
    setTimeout(() => {
      copyAllBtn.textContent = 'Копировать код';
    }, 1400);
  });
}

// ============================================================================
// 2. 8 VISUAL CSS GENERATORS (WITH SMART GAP & LIGHTER READABLE STAGE)
// ============================================================================
const genTabs = document.getElementById('gen-tabs');
const genControls = document.getElementById('gen-controls');
const genStage = document.getElementById('gen-stage');
const genCssOutput = document.getElementById('gen-css-output');
const genCopyBtn = document.getElementById('gen-copy-btn');

// Stage background switcher (Инженерный средний / Светлый / Тёмный)
document.querySelectorAll('.stage-bg-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.stage-bg-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    if (!genStage) return;
    const mode = btn.dataset.stageBg;
    genStage.classList.remove('stage-light', 'stage-dark');
    if (mode === 'light') genStage.classList.add('stage-light');
    if (mode === 'dark') genStage.classList.add('stage-dark');
  });
});

let activeGenerator = 'flexbox';

const generatorsConfig = {
  flexbox: {
    state: {
      direction: 'row',
      justify: 'flex-start',
      align: 'center',
      wrap: 'wrap',
      gap: 14,
      count: 4
    },
    renderControls(st, update) {
      const isSpaceDistribution = ['space-between', 'space-around', 'space-evenly'].includes(st.justify);

      return `
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Направление (flex-direction)</span><strong>${st.direction}</strong></div>
          <select data-key="direction">
            <option value="row" ${st.direction === 'row' ? 'selected' : ''}>row (в строку)</option>
            <option value="row-reverse" ${st.direction === 'row-reverse' ? 'selected' : ''}>row-reverse</option>
            <option value="column" ${st.direction === 'column' ? 'selected' : ''}>column (в колонку)</option>
          </select>
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Главная ось (justify-content)</span><strong>${st.justify}</strong></div>
          <select data-key="justify">
            <option value="flex-start" ${st.justify === 'flex-start' ? 'selected' : ''}>flex-start</option>
            <option value="center" ${st.justify === 'center' ? 'selected' : ''}>center</option>
            <option value="flex-end" ${st.justify === 'flex-end' ? 'selected' : ''}>flex-end</option>
            <option value="space-between" ${st.justify === 'space-between' ? 'selected' : ''}>space-between (авто-интервал)</option>
            <option value="space-around" ${st.justify === 'space-around' ? 'selected' : ''}>space-around (авто-интервал)</option>
            <option value="space-evenly" ${st.justify === 'space-evenly' ? 'selected' : ''}>space-evenly (авто-интервал)</option>
          </select>
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Поперечная ось (align-items)</span><strong>${st.align}</strong></div>
          <select data-key="align">
            <option value="stretch" ${st.align === 'stretch' ? 'selected' : ''}>stretch</option>
            <option value="center" ${st.align === 'center' ? 'selected' : ''}>center</option>
            <option value="flex-start" ${st.align === 'flex-start' ? 'selected' : ''}>flex-start</option>
            <option value="flex-end" ${st.align === 'flex-end' ? 'selected' : ''}>flex-end</option>
          </select>
        </div>
        ${
          isSpaceDistribution
            ? `<div class="gen-ctrl-note">При режиме <strong>${st.justify}</strong> свободное пространство распределяется автоматически между элементами, поэтому фиксированный ползунок <code>gap</code> скрыт.</div>`
            : `<div class="gen-ctrl-row">
                <div class="gen-ctrl-head"><span>Отступ между блоками (gap)</span><strong>${st.gap}px</strong></div>
                <input type="range" min="0" max="48" value="${st.gap}" data-key="gap">
              </div>`
        }
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Количество блоков</span><strong>${st.count}</strong></div>
          <input type="range" min="2" max="8" value="${st.count}" data-key="count">
        </div>
      `;
    },
    renderStage(st) {
      const isSpaceDistribution = ['space-between', 'space-around', 'space-evenly'].includes(st.justify);
      const gapRule = isSpaceDistribution ? '' : `\n  gap: ${st.gap}px;`;
      const css = `.flex-container {\n  display: flex;\n  flex-direction: ${st.direction};\n  justify-content: ${st.justify};\n  align-items: ${st.align};\n  flex-wrap: ${st.wrap};${gapRule}\n}`;

      const items = Array.from({ length: Number(st.count) })
        .map(
          (_, i) =>
            `<div style="padding:16px 22px;border-radius:4px;background:#14161a;border:2px solid #facc15;color:#facc15;font-weight:800;font-family:monospace;box-shadow:3px 3px 0 rgba(0,0,0,0.45);">БЛОК #${i + 1}</div>`
        )
        .join('');

      const html = `<div style="width:100%;min-height:210px;padding:16px;border-radius:6px;border:1px dashed rgba(250,204,21,0.65);background:rgba(15,17,22,0.55);display:flex;flex-direction:${st.direction};justify-content:${st.justify};align-items:${st.align};flex-wrap:${st.wrap};${isSpaceDistribution ? '' : `gap:${st.gap}px;`}">${items}</div>`;
      return { css, html };
    }
  },

  grid: {
    state: { cols: 3, gap: 14, minWidth: 110, count: 6 },
    renderControls(st) {
      return `
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Число колонок (repeat)</span><strong>${st.cols}</strong></div>
          <input type="range" min="1" max="6" value="${st.cols}" data-key="cols">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Отступ сетки (gap)</span><strong>${st.gap}px</strong></div>
          <input type="range" min="0" max="40" value="${st.gap}" data-key="gap">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Количество ячеек</span><strong>${st.count}</strong></div>
          <input type="range" min="2" max="12" value="${st.count}" data-key="count">
        </div>
      `;
    },
    renderStage(st) {
      const css = `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(${st.cols}, minmax(0, 1fr));\n  gap: ${st.gap}px;\n}`;
      const cells = Array.from({ length: Number(st.count) })
        .map(
          (_, i) =>
            `<div style="padding:18px;border-radius:4px;background:#14161a;border:2px solid #facc15;text-align:center;font-weight:800;color:#ffffff;font-family:monospace;">ЯЧЕЙКА ${i + 1}</div>`
        )
        .join('');
      const html = `<div style="width:100%;display:grid;grid-template-columns:repeat(${st.cols},minmax(0,1fr));gap:${st.gap}px;">${cells}</div>`;
      return { css, html };
    }
  },

  shadow: {
    state: { x: 6, y: 6, blur: 0, spread: 0, color: '#facc15', opacity: 90, inset: 'no' },
    renderControls(st) {
      return `
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Смещение X</span><strong>${st.x}px</strong></div>
          <input type="range" min="-40" max="40" value="${st.x}" data-key="x">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Смещение Y</span><strong>${st.y}px</strong></div>
          <input type="range" min="-40" max="40" value="${st.y}" data-key="y">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Размытие (Blur — 0 для жёсткой тени)</span><strong>${st.blur}px</strong></div>
          <input type="range" min="0" max="80" value="${st.blur}" data-key="blur">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Растяжение (Spread)</span><strong>${st.spread}px</strong></div>
          <input type="range" min="-20" max="30" value="${st.spread}" data-key="spread">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Цвет тени</span><strong>${st.color}</strong></div>
          <input type="color" value="${st.color}" data-key="color">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Прозрачность</span><strong>${st.opacity}%</strong></div>
          <input type="range" min="5" max="100" value="${st.opacity}" data-key="opacity">
        </div>
      `;
    },
    renderStage(st) {
      const r = parseInt(st.color.slice(1, 3), 16);
      const g = parseInt(st.color.slice(3, 5), 16);
      const b = parseInt(st.color.slice(5, 7), 16);
      const alpha = (Number(st.opacity) / 100).toFixed(2);
      const shadowVal = `${st.x}px ${st.y}px ${st.blur}px ${st.spread}px rgba(${r}, ${g}, ${b}, ${alpha})`;
      const css = `.shadow-card {\n  box-shadow: ${shadowVal};\n}`;
      const html = `<div style="width:270px;padding:24px;border-radius:6px;background:#14161a;border:1px solid #facc15;box-shadow:${shadowVal};text-align:center;">
        <strong style="display:block;margin-bottom:6px;color:#facc15;font-size:15px;">BOX-SHADOW PREVIEW</strong>
        <span style="font-size:12.5px;color:#f4f4f6;">Карточка с настраиваемой тенью</span>
      </div>`;
      return { css, html };
    }
  },

  gradient: {
    state: { type: 'linear', angle: 135, c1: '#facc15', c2: '#ea580c' },
    renderControls(st) {
      return `
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Тип градиента</span><strong>${st.type}</strong></div>
          <select data-key="type">
            <option value="linear" ${st.type === 'linear' ? 'selected' : ''}>linear-gradient</option>
            <option value="radial" ${st.type === 'radial' ? 'selected' : ''}>radial-gradient</option>
          </select>
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Угол наклона</span><strong>${st.angle}deg</strong></div>
          <input type="range" min="0" max="360" value="${st.angle}" data-key="angle">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Начальный цвет</span><strong>${st.c1}</strong></div>
          <input type="color" value="${st.c1}" data-key="c1">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Конечный цвет</span><strong>${st.c2}</strong></div>
          <input type="color" value="${st.c2}" data-key="c2">
        </div>
      `;
    },
    renderStage(st) {
      const bg =
        st.type === 'linear'
          ? `linear-gradient(${st.angle}deg, ${st.c1}, ${st.c2})`
          : `radial-gradient(circle, ${st.c1}, ${st.c2})`;
      const css = `.gradient-banner {\n  background: ${bg};\n}`;
      const html = `<div style="width:100%;max-width:390px;height:175px;border-radius:6px;background:${bg};display:grid;place-items:center;border:2px solid #09090b;box-shadow:4px 4px 0 rgba(0,0,0,0.45);">
        <span style="padding:8px 16px;border-radius:4px;background:rgba(11,12,14,0.88);color:#facc15;font-weight:800;font-family:monospace;border:1px solid #facc15;">${bg}</span>
      </div>`;
      return { css, html };
    }
  },

  glass: {
    state: { blur: 12, alpha: 65, borderAlpha: 45 },
    renderControls(st) {
      return `
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Размытие фона (backdrop-filter)</span><strong>${st.blur}px</strong></div>
          <input type="range" min="0" max="32" value="${st.blur}" data-key="blur">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Плотность подложки</span><strong>${st.alpha}%</strong></div>
          <input type="range" min="10" max="95" value="${st.alpha}" data-key="alpha">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Яркость жёлтой рамки</span><strong>${st.borderAlpha}%</strong></div>
          <input type="range" min="10" max="100" value="${st.borderAlpha}" data-key="borderAlpha">
        </div>
      `;
    },
    renderStage(st) {
      const a = (Number(st.alpha) / 100).toFixed(2);
      const ba = (Number(st.borderAlpha) / 100).toFixed(2);
      const css = `.glass-panel {\n  background: rgba(20, 22, 27, ${a});\n  backdrop-filter: blur(${st.blur}px);\n  -webkit-backdrop-filter: blur(${st.blur}px);\n  border: 1px solid rgba(250, 204, 21, ${ba});\n  border-radius: 8px;\n}`;
      const html = `<div style="position:relative;width:100%;max-width:390px;height:200px;display:grid;place-items:center;background:linear-gradient(125deg,#facc15 0%,#ea580c 50%,#18181b 100%);border-radius:8px;padding:20px;">
        <div style="padding:20px 24px;border-radius:8px;background:rgba(20,22,27,${a});backdrop-filter:blur(${st.blur}px);-webkit-backdrop-filter:blur(${st.blur}px);border:1px solid rgba(250,204,21,${ba});text-align:center;color:#ffffff;">
          <strong style="display:block;margin-bottom:4px;color:#facc15;">GLASSMORPHISM UI</strong>
          <span style="font-size:12.5px;color:#f4f4f6;">backdrop-filter: blur(${st.blur}px)</span>
        </div>
      </div>`;
      return { css, html };
    }
  },

  radius: {
    state: { tl: 16, tr: 4, br: 16, bl: 4, bw: 2, bc: '#facc15', style: 'solid' },
    renderControls(st) {
      return `
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Верхний левый угол</span><strong>${st.tl}px</strong></div>
          <input type="range" min="0" max="80" value="${st.tl}" data-key="tl">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Верхний правый угол</span><strong>${st.tr}px</strong></div>
          <input type="range" min="0" max="80" value="${st.tr}" data-key="tr">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Нижний правый угол</span><strong>${st.br}px</strong></div>
          <input type="range" min="0" max="80" value="${st.br}" data-key="br">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Нижний левый угол</span><strong>${st.bl}px</strong></div>
          <input type="range" min="0" max="80" value="${st.bl}" data-key="bl">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Толщина рамки (border-width)</span><strong>${st.bw}px</strong></div>
          <input type="range" min="1" max="12" value="${st.bw}" data-key="bw">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Стиль рамки (border-style)</span><strong>${st.style}</strong></div>
          <select data-key="style">
            <option value="solid" ${st.style === 'solid' ? 'selected' : ''}>solid (сплошная)</option>
            <option value="dashed" ${st.style === 'dashed' ? 'selected' : ''}>dashed (пунктирная)</option>
            <option value="dotted" ${st.style === 'dotted' ? 'selected' : ''}>dotted (точечная)</option>
            <option value="double" ${st.style === 'double' ? 'selected' : ''}>double (двойная)</option>
          </select>
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Цвет рамки</span><strong>${st.bc}</strong></div>
          <input type="color" value="${st.bc}" data-key="bc">
        </div>
      `;
    },
    renderStage(st) {
      const rVal = `${st.tl}px ${st.tr}px ${st.br}px ${st.bl}px`;
      const css = `.shaped-box {\n  border-radius: ${rVal};\n  border: ${st.bw}px ${st.style} ${st.bc};\n}`;
      const html = `<div style="width:270px;height:165px;border-radius:${rVal};border:${st.bw}px ${st.style} ${st.bc};background:#14161a;display:grid;place-items:center;padding:16px;text-align:center;box-shadow:4px 4px 0 rgba(0,0,0,0.4);">
        <div>
          <strong style="display:block;color:#facc15;margin-bottom:4px;">BORDER &amp; RADIUS</strong>
          <code style="font-size:12px;color:#ffffff;">${rVal}</code>
        </div>
      </div>`;
      return { css, html };
    }
  },

  transform: {
    state: { scale: 100, rotate: -4, skewX: 0, translateY: 0 },
    renderControls(st) {
      return `
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Масштаб (scale)</span><strong>${(st.scale / 100).toFixed(2)}</strong></div>
          <input type="range" min="50" max="140" value="${st.scale}" data-key="scale">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Поворот (rotate)</span><strong>${st.rotate}deg</strong></div>
          <input type="range" min="-45" max="45" value="${st.rotate}" data-key="rotate">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Наклон (skewX)</span><strong>${st.skewX}deg</strong></div>
          <input type="range" min="-30" max="30" value="${st.skewX}" data-key="skewX">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Сдвиг по Y (translateY)</span><strong>${st.translateY}px</strong></div>
          <input type="range" min="-40" max="40" value="${st.translateY}" data-key="translateY">
        </div>
      `;
    },
    renderStage(st) {
      const sc = (Number(st.scale) / 100).toFixed(2);
      const tVal = `translateY(${st.translateY}px) scale(${sc}) rotate(${st.rotate}deg) skewX(${st.skewX}deg)`;
      const css = `.transformed-card {\n  transform: ${tVal};\n  transition: transform 0.2s ease;\n}`;
      const html = `<div style="padding:22px 28px;border-radius:6px;background:#14161a;border:2px solid #facc15;box-shadow:4px 4px 0 #facc15;transform:${tVal};text-align:center;">
        <strong style="display:block;color:#facc15;">CSS TRANSFORM</strong>
        <span style="font-size:12px;color:#ffffff;font-family:monospace;">${tVal}</span>
      </div>`;
      return { css, html };
    }
  },

  filter: {
    state: { brightness: 105, contrast: 110, saturate: 120, hue: 0, blur: 0 },
    renderControls(st) {
      return `
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Яркость (brightness)</span><strong>${st.brightness}%</strong></div>
          <input type="range" min="40" max="180" value="${st.brightness}" data-key="brightness">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Контрастность (contrast)</span><strong>${st.contrast}%</strong></div>
          <input type="range" min="40" max="200" value="${st.contrast}" data-key="contrast">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Насыщенность (saturate)</span><strong>${st.saturate}%</strong></div>
          <input type="range" min="0" max="250" value="${st.saturate}" data-key="saturate">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Сдвиг оттенка (hue-rotate)</span><strong>${st.hue}deg</strong></div>
          <input type="range" min="0" max="360" value="${st.hue}" data-key="hue">
        </div>
        <div class="gen-ctrl-row">
          <div class="gen-ctrl-head"><span>Размытие (blur)</span><strong>${st.blur}px</strong></div>
          <input type="range" min="0" max="12" value="${st.blur}" data-key="blur">
        </div>
      `;
    },
    renderStage(st) {
      const fVal = `brightness(${st.brightness}%) contrast(${st.contrast}%) saturate(${st.saturate}%) hue-rotate(${st.hue}deg) blur(${st.blur}px)`;
      const css = `.filtered-media {\n  filter: ${fVal};\n}`;
      const html = `<div style="width:310px;padding:22px;border-radius:6px;background:linear-gradient(135deg,#facc15,#ea580c,#7c2d12);filter:${fVal};text-align:center;border:2px solid #09090b;box-shadow:4px 4px 0 rgba(0,0,0,0.45);">
        <strong style="display:block;font-size:16px;margin-bottom:4px;color:#09090b;background:#facc15;padding:3px 8px;border-radius:3px;">CSS FILTER PREVIEW</strong>
        <span style="font-size:12.5px;color:#ffffff;font-weight:700;display:block;margin-top:8px;">Настройте яркость, контраст и оттенок</span>
      </div>`;
      return { css, html };
    }
  }
};

let activeGeneratorRawCss = '';

function formatControlValue(key, val) {
  if (key === 'scale') return (Number(val) / 100).toFixed(2);
  if (['angle', 'rotate', 'skewX', 'hue'].includes(key)) return `${val}deg`;
  if (['opacity', 'alpha', 'borderAlpha', 'brightness', 'contrast', 'saturate'].includes(key)) return `${val}%`;
  if (['gap', 'x', 'y', 'blur', 'spread', 'tl', 'tr', 'br', 'bl', 'bw', 'translateY'].includes(key)) return `${val}px`;
  return String(val);
}

function updateGeneratorStageAndOutput(gen) {
  if (!gen || !genStage || !genCssOutput) return;
  const { css, html } = gen.renderStage(gen.state);
  genStage.innerHTML = html;
  activeGeneratorRawCss = css;
  if (window.DevShelfPreview && typeof window.DevShelfPreview.highlightCode === 'function') {
    genCssOutput.innerHTML = window.DevShelfPreview.highlightCode(css, 'css');
  } else {
    genCssOutput.textContent = css;
  }
}

function renderActiveGenerator() {
  const gen = generatorsConfig[activeGenerator];
  if (!gen || !genControls || !genStage || !genCssOutput) return;

  genControls.innerHTML = gen.renderControls(gen.state);
  updateGeneratorStageAndOutput(gen);

  genControls.querySelectorAll('[data-key]').forEach((input) => {
    input.addEventListener('input', (e) => {
      const target = e.target;
      const key = target.dataset.key;
      if (!key) return;
      gen.state[key] = target.value;

      // Only re-render controls DOM if flexbox justify-content select changes (to toggle gap slider visibility)
      if (activeGenerator === 'flexbox' && key === 'justify') {
        renderActiveGenerator();
        return;
      }

      // Otherwise keep the range slider DOM node intact so continuous dragging never loses focus!
      const row = target.closest('.gen-ctrl-row');
      const strongEl = row ? row.querySelector('.gen-ctrl-head strong') : null;
      if (strongEl) {
        strongEl.textContent = formatControlValue(key, target.value);
      }
      updateGeneratorStageAndOutput(gen);
    });
  });
}

if (genTabs) {
  genTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.gen-tab');
    if (!btn) return;
    genTabs.querySelectorAll('.gen-tab').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeGenerator = btn.dataset.gen || 'flexbox';
    renderActiveGenerator();
  });
}

if (genCopyBtn) {
  genCopyBtn.addEventListener('click', async () => {
    if (!genCssOutput) return;
    await navigator.clipboard.writeText(activeGeneratorRawCss || genCssOutput.textContent || '');
    genCopyBtn.textContent = '✓ CSS скопирован!';
    setTimeout(() => {
      genCopyBtn.textContent = 'Копировать CSS';
    }, 1400);
  });
}

// ============================================================================
// 3. UI TEMPLATES WITH WORKING LIVE IFRAME PREVIEWS & STUDY TOPICS
// ============================================================================
const uiTemplates = [
  {
    id: 'tpl-login',
    title: 'Форма входа с показом пароля',
    desc: 'Авторизация с переключением видимости пароля и валидацией полей.',
    topicId: 'recipe-login-form'
  },
  {
    id: 'tpl-modal',
    title: 'Модальное окно на <dialog>',
    desc: 'Всплывающее окно на нативном теге с затемнением ::backdrop и закрытием по Esc.',
    topicId: 'recipe-modal-dialog'
  },
  {
    id: 'tpl-cart',
    title: 'Корзина заказа с пересчётом',
    desc: 'Динамический расчёт количества и суммы по стандарту ru-RU через reduce() и Intl.',
    topicId: 'recipe-shopping-cart'
  },
  {
    id: 'tpl-otp',
    title: 'Ввод 2FA / SMS пин-кода (OTP)',
    desc: 'Автоматический переход фокуса по цифрам и обработка Backspace.',
    topicId: 'recipe-otp-verification'
  },
  {
    id: 'tpl-register',
    title: 'Регистрация + надёжность пароля',
    desc: 'Индикатор силы пароля в реальном времени с проверкой через RegExp.',
    topicId: 'recipe-register-form'
  },
  {
    id: 'tpl-dropzone',
    title: 'Drag-and-Drop загрузка файлов',
    desc: 'Перетаскивание файлов мышью, проверка размера и генерация превью.',
    topicId: 'recipe-file-dropzone'
  },
  {
    id: 'tpl-toast',
    title: 'Всплывающие уведомления (Toast)',
    desc: 'Система лёгких уведомлений со стеком, таймером автоудаления и анимацией.',
    topicId: 'recipe-toast-notifications'
  },
  {
    id: 'tpl-burger',
    title: 'Адаптивное бургер-меню',
    desc: 'Мобильная навигация со шторкой, анимацией линий и WAI-ARIA доступностью.',
    topicId: 'recipe-burger-menu'
  }
];

function renderTemplatesShowcase() {
  const grid = document.getElementById('templates-grid');
  if (!grid) return;

  grid.innerHTML = uiTemplates
    .map((tpl) => {
      const prereq = getRecipePrerequisites(tpl.topicId);
      const funcsHtml = prereq && Array.isArray(prereq.functions)
        ? `
          <div class="tpl-prereq-box">
            <span class="tpl-prereq-label">💡 Что изучить, чтобы написать из головы:</span>
            <div class="tpl-prereq-pills">
              ${prereq.functions.slice(0, 3).map((f) => `<code class="tpl-prereq-pill">${f}</code>`).join('')}
            </div>
          </div>
        `
        : '';

      return `
        <article class="tpl-card">
          <iframe class="tpl-preview" data-tpl-topic="${tpl.topicId}" title="${tpl.title}" sandbox="allow-scripts"></iframe>
          <div class="tpl-info">
            <div class="tpl-header-row">
              <span class="tpl-tag">РЕЦЕПТ С РАЗБОРОМ</span>
              <h3>${tpl.title}</h3>
            </div>
            <p>${tpl.desc}</p>
            ${funcsHtml}
            <div class="tpl-actions">
              <button type="button" class="btn btn-primary" data-load-tpl="${tpl.topicId}">
                Загрузить в песочницу ↑
              </button>
              <a href="./index.html?topic=${encodeURIComponent(tpl.topicId)}" class="btn" style="text-decoration:none; text-align:center;">
                Изучить разбор →
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  grid.querySelectorAll('iframe[data-tpl-topic]').forEach((frame) => {
    const tId = frame.getAttribute('data-tpl-topic');
    const topic = topicsById.get(tId);
    if (topic && window.DevShelfPreview) {
      frame.srcdoc = window.DevShelfPreview.buildTopicPreviewDoc(topic);
    }
  });

  grid.querySelectorAll('[data-load-tpl]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tId = btn.getAttribute('data-load-tpl');
      const topic = topicsById.get(tId);
      if (!topic) return;
      activeLang = 'all';
      if (langSelect) langSelect.value = 'all';
      populateTopicOptions(tId);
      document.getElementById('sandbox')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Initial boot
const urlTopicId = new URLSearchParams(window.location.search).get('topic');
populateTopicOptions(urlTopicId || 'recipe-login-form');
renderActiveGenerator();
renderTemplatesShowcase();
