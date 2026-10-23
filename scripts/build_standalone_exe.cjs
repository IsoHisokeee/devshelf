const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');
const vm = require('vm');

console.log('=== [DEVSHELF] STANDALONE EXE & CORE HTML COMPILER ===');

// 1. Read topics from reference-data.js
const dataCode = fs.readFileSync(path.join(__dirname, '../reference-data.js'), 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dataCode, sandbox);
const topics = sandbox.window.DEVSHELF_REFERENCE_TOPICS || [];
console.log(`Loaded ${topics.length} topics from reference-data.js`);

if (topics.length < 50) {
  console.error('ERROR: Too few topics found in reference-data.js!');
  process.exit(1);
}

// 2. Generate self-contained HTML payload (devshelf-core.html)
const safeTopicsJson = JSON.stringify(topics).replace(/</g, '\\u003c');
const coreHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DEVSHELF // Автономная инженерная база (${topics.length} тем)</title>
  <style>
    :root {
      --bg: #09090b;
      --panel: #111317;
      --card: #15181f;
      --border: #27272a;
      --yellow: #facc15;
      --yellow-glow: rgba(250, 204, 21, 0.15);
      --text: #f4f4f5;
      --text-muted: #a1a1aa;
      --font-mono: 'JetBrains Mono', Consolas, 'Courier New', monospace;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      background-image:
        linear-gradient(to right, rgba(250, 204, 21, 0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(250, 204, 21, 0.02) 1px, transparent 1px);
      background-size: 28px 28px;
      color: var(--text);
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.5;
      padding: 20px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid var(--yellow);
      padding-bottom: 14px;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 12px;
    }
    .logo { display: flex; align-items: center; gap: 12px; }
    .logo-badge {
      background: var(--yellow);
      color: #000;
      font-weight: 900;
      font-size: 14px;
      padding: 6px 10px;
      border-radius: 4px;
      font-family: var(--font-mono);
      letter-spacing: -0.5px;
    }
    .logo-title { font-size: 20px; font-weight: 900; letter-spacing: -0.5px; }
    .logo-sub { font-size: 12px; color: var(--text-muted); font-family: var(--font-mono); }
    .search-bar { width: 100%; max-width: 520px; display: flex; gap: 8px; }
    .search-input {
      flex: 1;
      background: var(--panel);
      border: 1px solid var(--border);
      color: #fff;
      padding: 10px 14px;
      border-radius: 6px;
      font-size: 14px;
      outline: none;
      transition: border-color .15s;
    }
    .search-input:focus { border-color: var(--yellow); box-shadow: 0 0 0 2px var(--yellow-glow); }
    .cats { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
    .cat-btn {
      background: var(--panel);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 7px 14px;
      border-radius: 6px;
      font-size: 13px;
      cursor: pointer;
      transition: all .15s;
      font-weight: 600;
    }
    .cat-btn:hover { border-color: var(--yellow); color: #fff; }
    .cat-btn.active { background: var(--yellow); color: #000; border-color: var(--yellow); font-weight: 800; }
    .count-stat { font-family: var(--font-mono); font-size: 13px; color: var(--yellow); font-weight: 700; margin-bottom: 14px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 14px; }
    .item {
      background: var(--card);
      border: 1px solid var(--border);
      padding: 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: all .15s;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
    }
    .item:hover { border-color: var(--yellow); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.5); }
    .item-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
    .item h4 { font-size: 15px; color: #fff; font-weight: 700; line-height: 1.3; }
    .tag {
      background: var(--yellow-glow);
      color: var(--yellow);
      border: 1px solid rgba(250, 204, 21, 0.35);
      font-size: 11px;
      padding: 2px 7px;
      border-radius: 4px;
      font-family: var(--font-mono);
      font-weight: 700;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .item p {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    /* Modal */
    .modal-bg {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.85);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999;
      padding: 16px;
    }
    .modal-bg[hidden] { display: none !important; }
    .modal {
      background: #111317;
      border: 1px solid var(--yellow);
      width: 100%;
      max-width: 1200px;
      max-height: 92vh;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.85);
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 20px;
      border-bottom: 1px solid var(--border);
      background: #161920;
    }
    .modal-header h2 { font-size: 18px; color: #fff; font-weight: 800; }
    .close-btn {
      background: var(--yellow);
      border: none;
      color: #000;
      font-weight: 800;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
    }
    .modal-body {
      padding: 18px 20px;
      overflow-y: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    @media(max-width: 900px) { .modal-body { grid-template-columns: 1fr; } }
    .info-box {
      background: #090a0d;
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 12px 14px;
      margin-bottom: 12px;
    }
    .info-box h5 {
      font-family: var(--font-mono);
      font-size: 11px;
      text-transform: uppercase;
      color: var(--yellow);
      margin-bottom: 6px;
      letter-spacing: 0.5px;
    }
    .info-box p, .info-box ul { font-size: 13px; color: #d4d4d8; line-height: 1.5; }
    .info-box ul { padding-left: 18px; }
    .code-panel { display: flex; flex-direction: column; gap: 8px; }
    .code-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #090a0d;
      border: 1px solid var(--border);
      border-bottom: none;
      padding: 6px 10px;
      border-radius: 6px 6px 0 0;
      flex-wrap: wrap;
      gap: 6px;
    }
    .tabs { display: flex; gap: 4px; }
    .tab-btn {
      background: #161920;
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 11px;
      font-family: var(--font-mono);
      cursor: pointer;
    }
    .tab-btn.active { background: var(--yellow); color: #000; border-color: var(--yellow); font-weight: 800; }
    .copy-btn {
      background: #161920;
      border: 1px solid var(--border);
      color: var(--yellow);
      font-size: 11px;
      padding: 5px 10px;
      border-radius: 4px;
      font-family: var(--font-mono);
      cursor: pointer;
    }
    pre {
      background: #090a0d;
      border: 1px solid var(--border);
      border-radius: 0 0 6px 6px;
      padding: 14px;
      color: #facc15;
      font-family: var(--font-mono);
      font-size: 12.5px;
      line-height: 1.5;
      overflow-x: auto;
      max-height: 280px;
      white-space: pre-wrap;
    }
    .preview-box {
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
      margin-top: 10px;
      background: #090a0d;
    }
    .preview-label {
      background: #161920;
      padding: 6px 12px;
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--text-muted);
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
    }
    iframe { width: 100%; height: 240px; border: none; display: block; background: #101216; }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">
      <div class="logo-badge">&lt;/&gt;</div>
      <div>
        <div class="logo-title">DEVSHELF // DESKTOP STANDALONE</div>
        <div class="logo-sub">Инженерный справочник &bull; ${topics.length} тем &bull; Автономный режим</div>
      </div>
    </div>
    <div class="search-bar">
      <input id="q" class="search-input" type="search" placeholder="Поиск по ${topics.length} темам (border-radius, вход, tailwind, react, fetch, flex)...">
    </div>
  </div>

  <div class="cats" id="cats">
    <button class="cat-btn active" data-c="all">Все (${topics.length})</button>
    <button class="cat-btn" data-c="html">HTML5</button>
    <button class="cat-btn" data-c="css">CSS3</button>
    <button class="cat-btn" data-c="javascript">JavaScript</button>
    <button class="cat-btn" data-c="frameworks">Фреймворки</button>
    <button class="cat-btn" data-c="recipes">Рецепты</button>
    <button class="cat-btn" data-c="php">PHP &amp; MySQL</button>
    <button class="cat-btn" data-c="xml">XML &amp; SEO</button>
  </div>

  <div class="count-stat" id="stat"></div>
  <div class="grid" id="grid"></div>

  <div class="modal-bg" id="modal" hidden>
    <div class="modal">
      <div class="modal-header">
        <h2 id="modal-title"></h2>
        <button class="close-btn" onclick="document.getElementById('modal').hidden = true">✕ Закрыть</button>
      </div>
      <div class="modal-body">
        <div>
          <div class="info-box"><h5>Назначение</h5><p id="modal-desc"></p></div>
          <div class="info-box"><h5>Когда применять</h5><p id="modal-when"></p></div>
          <div class="info-box"><h5>Альтернативы</h5><p id="modal-alt"></p></div>
          <div class="info-box"><h5>Ключевые инженерные правила</h5><ul id="modal-points"></ul></div>
        </div>
        <div class="code-panel">
          <div class="code-header">
            <div class="tabs" id="tabs">
              <button class="tab-btn active" data-p="combined">Все вместе</button>
              <button class="tab-btn" data-p="html">HTML</button>
              <button class="tab-btn" data-p="css">CSS</button>
              <button class="tab-btn" data-p="js">JS</button>
            </div>
            <button class="copy-btn" id="copy-btn">Копировать</button>
          </div>
          <pre><code id="modal-code"></code></pre>
          <div class="preview-box">
            <div class="preview-label">
              <span>ИНТЕРАКТИВНЫЙ ПРЕДПРОСМОТР</span>
              <span>LIVE RENDER</span>
            </div>
            <iframe id="modal-frame" sandbox="allow-scripts"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    const TOPICS = ${safeTopicsJson};
    let activeCat = 'all';
    let currentTopic = null;
    let currentPart = 'combined';

    const q = document.getElementById('q');
    const grid = document.getElementById('grid');
    const stat = document.getElementById('stat');

    function splitCode(t) {
      const raw = t.code || '';
      const ex = t.example || '';
      const lang = (t.lang || '').toLowerCase();
      let html = '', css = '', js = '';

      if (lang === 'html') {
        html = raw;
        const sm = [...raw.matchAll(/<style[^>]*>([\\s\\S]*?)<\\/style>/gi)];
        if (sm.length) css = sm.map(m => m[1].trim()).join('\\n\\n');
        const jm = [...raw.matchAll(/<script[^>]*>([\\s\\S]*?)<\\/script>/gi)];
        if (jm.length) js = jm.map(m => m[1].trim()).join('\\n\\n');
      } else if (lang === 'css') {
        css = raw;
        html = ex.startsWith('<') ? ex : '<div class="card box item" style="padding:16px;border:1px solid #facc15;">CSS Демо</div>';
        js = '// Без JS';
      } else if (lang === 'javascript') {
        js = raw;
        html = ex.startsWith('<') ? ex : '<div id="app">JS Демо</div>';
        css = '/* Базовые стили */';
      } else {
        let rest = raw.includes('<') ? raw : (ex.includes('<') ? ex : raw);
        const sm = [...rest.matchAll(/<style[^>]*>([\\s\\S]*?)<\\/style>/gi)];
        if (sm.length) { css = sm.map(m => m[1].trim()).join('\\n'); rest = rest.replace(/<style[^>]*>[\\s\\S]*?<\\/style>/gi, '').trim(); }
        const jm = [...rest.matchAll(/<script[^>]*>([\\s\\S]*?)<\\/script>/gi)];
        if (jm.length) { js = jm.map(m => m[1].trim()).join('\\n'); rest = rest.replace(/<script[^>]*>[\\s\\S]*?<\\/script>/gi, '').trim(); }
        html = rest;
      }
      return { combined: raw, html: html || raw, css: css || '/* Стили не требуются */', js: js || '// JS не требуется' };
    }

    function buildPreview(t) {
      const base = '<style>*{box-sizing:border-box}body{margin:0;padding:14px;background:#101216;color:#f4f4f6;font-family:system-ui,sans-serif;font-size:14px}button:not([class]){background:#facc15;color:#09090b;border:none;padding:8px 14px;border-radius:4px;font-weight:800}</style>';
      if (t.lang === 'css') {
        const h = (t.example && t.example.startsWith('<')) ? t.example : '<div class="card box item" style="padding:16px;border:1px solid #facc15;">' + t.title + '</div>';
        return '<!doctype html><html><head><meta charset="utf-8">' + base + '<style>' + t.code + '</style></head><body>' + h + '</body></html>';
      }
      if (t.lang === 'javascript') {
        return '<!doctype html><html><head><meta charset="utf-8">' + base + '</head><body><div id="out" style="font-family:monospace;color:#fef08a;white-space:pre-wrap;"></div><script>const o=document.getElementById("out");console.log=(...a)=>{o.textContent+="> "+a.map(x=>typeof x==="object"?JSON.stringify(x):x).join(" ")+"\\\\n"};try{' + t.code + '}catch(e){o.textContent+="Error: "+e.message}<\\/script></body></html>';
      }
      const body = (t.example && t.example.startsWith('<')) ? t.example : t.code;
      return '<!doctype html><html><head><meta charset="utf-8">' + base + '</head><body>' + body + '</body></html>';
    }

    function renderCode() {
      if (!currentTopic) return;
      const parts = splitCode(currentTopic);
      document.getElementById('modal-code').textContent = parts[currentPart] || parts.combined;
      document.querySelectorAll('#tabs .tab-btn').forEach(b => b.classList.toggle('active', b.dataset.p === currentPart));
    }

    window.openItem = (id) => {
      const t = TOPICS.find(x => x.id === id);
      if (!t) return;
      currentTopic = t;
      currentPart = 'combined';
      document.getElementById('modal-title').textContent = t.title;
      document.getElementById('modal-desc').textContent = t.summary;
      document.getElementById('modal-when').textContent = t.when || 'Повсеместно в веб-разработке.';
      document.getElementById('modal-alt').textContent = t.alternatives || 'Изучите смежные функции в DevShelf.';
      document.getElementById('modal-points').innerHTML = (t.points || []).map(p => '<li>' + p + '</li>').join('');
      renderCode();
      document.getElementById('modal-frame').srcdoc = buildPreview(t);
      document.getElementById('modal').hidden = false;
    };

    function render() {
      const s = q.value.toLowerCase().trim();
      const filtered = TOPICS.filter(t => (activeCat === 'all' || t.lang === activeCat) && (!s || (t.title + ' ' + t.summary + ' ' + (t.tags||[]).join(' ')).toLowerCase().includes(s)));
      stat.textContent = 'НАЙДЕНО: ' + filtered.length + ' / ' + TOPICS.length;
      grid.innerHTML = filtered.map((t, idx) => '<div class="item" onclick="openItem(\\'' + t.id + '\\')"><div class="item-top"><h4>#' + String(idx+1).padStart(3, '0') + ' ' + t.title.replace(/</g,'&lt;') + '</h4><span class="tag">' + t.lang + '</span></div><p>' + t.summary.replace(/</g,'&lt;') + '</p></div>').join('');
    }

    document.getElementById('cats').addEventListener('click', (e) => {
      const b = e.target.closest('.cat-btn');
      if (!b) return;
      document.querySelectorAll('.cat-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      activeCat = b.dataset.c;
      render();
    });

    document.getElementById('tabs').addEventListener('click', (e) => {
      const b = e.target.closest('.tab-btn');
      if (b && b.dataset.p) { currentPart = b.dataset.p; renderCode(); }
    });

    document.getElementById('copy-btn').addEventListener('click', () => {
      navigator.clipboard.writeText(document.getElementById('modal-code').textContent || '');
      document.getElementById('copy-btn').textContent = '✓ Скопировано';
      setTimeout(() => document.getElementById('copy-btn').textContent = 'Копировать', 1200);
    });

    q.oninput = render;
    render();
  </script>
</body>
</html>`;

const coreHtmlPath = '/tmp/devshelf-core.html';
fs.writeFileSync(coreHtmlPath, coreHtml, 'utf8');
console.log(`devshelf-core.html created (${fs.statSync(coreHtmlPath).size} bytes)`);

// 3. Generate Windows icon
console.log('Generating Windows multi-resolution icon...');
try {
  execSync('convert public/pwa-192x192.png -define icon:auto-resize=64,48,32,16 /tmp/devshelf.ico');
  console.log('devshelf.ico created successfully');
} catch (e) {
  console.warn('Could not generate ico with convert, continuing without icon resource');
}

// 4. Create resource definition
let rcContent = `101 10 "${coreHtmlPath}"\n`;
if (fs.existsSync('/tmp/devshelf.ico')) {
  rcContent = `1 ICON "/tmp/devshelf.ico"\n` + rcContent;
}
fs.writeFileSync('/tmp/res.rc', rcContent, 'utf8');

console.log('Compiling Windows resources with windres...');
execSync('x86_64-w64-mingw32-windres -i /tmp/res.rc -o /tmp/res.o');

// 5. Compile launcher.c with mingw
console.log('Compiling DevShelf.exe launcher...');
const launcherPath = path.join(__dirname, 'launcher.c');
execSync(`x86_64-w64-mingw32-gcc -O2 -mwindows -municode -s "${launcherPath}" /tmp/res.o -o /tmp/DevShelf.exe -ladvapi32 -lshell32`);
const exeSize = fs.statSync('/tmp/DevShelf.exe').size;
console.log(`DevShelf.exe successfully compiled! Size: ${exeSize} bytes`);

// 6. Copy output files to root and public
fs.copyFileSync('/tmp/DevShelf.exe', 'DevShelf.exe');
fs.copyFileSync('/tmp/devshelf-core.html', 'devshelf-core.html');
if (fs.existsSync('public')) {
  fs.copyFileSync('/tmp/DevShelf.exe', 'public/DevShelf.exe');
  fs.copyFileSync('/tmp/devshelf-core.html', 'public/devshelf-core.html');
}

console.log('=== DevShelf.exe & devshelf-core.html compiled and copied to workspace and public/! ===');
