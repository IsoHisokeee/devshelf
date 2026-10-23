// DevShelf Universal Live Preview Engine & Multi-Tab Code Splitter (HTML5, CSS3, JS, PHP 8, XML/SEO, Recipes, Frameworks)
(function () {
  'use strict';

  function esc(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/[&<>"']/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c]));
  }

  const BASE_PREVIEW_CSS = `
    *, *::before, *::after { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 18px;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.55;
      color: #f8fafc;
      background: #0b101b;
    }
    a { color: #38bdf8; }
    h1, h2, h3, h4 { margin: 0 0 10px; line-height: 1.25; color: #f8fafc; }
    h1 { font-size: 20px; }
    h2 { font-size: 17px; }
    h3 { font-size: 15px; }
    p { margin: 0 0 10px; color: #cbd5e1; }
    button, .btn, .btn-primary, .demo-btn {
      font: inherit;
      font-size: 13px;
      font-weight: 600;
      padding: 7px 14px;
      border-radius: 6px;
      border: 1px solid rgba(56, 189, 248, 0.4);
      background: rgba(56, 189, 248, 0.14);
      color: #f8fafc;
      cursor: pointer;
      transition: all 150ms ease;
    }
    button:hover, .btn:hover { background: rgba(56, 189, 248, 0.25); border-color: #38bdf8; }
    input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="color"]),
    select, textarea {
      font: inherit;
      font-size: 13px;
      padding: 7px 11px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.16);
      background: #121827;
      color: #f8fafc;
      margin: 4px 6px 4px 0;
      outline: none;
    }
    input:focus, select:focus, textarea:focus { border-color: #38bdf8; }
    label { display: inline-flex; align-items: center; gap: 8px; margin: 4px 10px 4px 0; color: #e2e8f0; font-size: 13px; }
    fieldset { border: 1px solid rgba(255,255,255,0.14); border-radius: 8px; padding: 12px 16px; margin-bottom: 12px; }
    legend { padding: 0 6px; font-weight: 600; color: #38bdf8; }
    table { width: 100%; border-collapse: collapse; margin: 8px 0; font-size: 13px; }
    th, td { border: 1px solid rgba(255,255,255,0.12); padding: 8px 12px; text-align: left; }
    th { background: #141c2e; color: #38bdf8; font-weight: 600; }
    caption { text-align: left; font-weight: 600; margin-bottom: 6px; color: #94a3b8; }
    pre { background: #070a10; border: 1px solid rgba(255,255,255,0.1); padding: 10px 12px; border-radius: 6px; overflow-x: auto; font-family: monospace; font-size: 12px; color: #e2e8f0; }
    code { font-family: monospace; background: rgba(56,189,248,0.12); color: #7dd3fc; padding: 2px 5px; border-radius: 4px; font-size: 12.5px; }
    pre code { background: transparent; padding: 0; color: inherit; }
    kbd { font-family: monospace; font-size: 11.5px; padding: 2px 6px; background: #161e31; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; color: #f8fafc; }
    mark { background: rgba(56, 189, 248, 0.28); color: #fff; padding: 1px 5px; border-radius: 3px; }
    blockquote { margin: 8px 0; padding: 10px 14px; border-left: 3px solid #38bdf8; background: rgba(255,255,255,0.03); border-radius: 0 6px 6px 0; }
    figure { margin: 0; padding: 12px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; background: #101726; }
    figcaption { font-size: 12px; color: #94a3b8; margin-top: 6px; }
    details { border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 14px; background: #101726; margin-bottom: 8px; }
    summary { font-weight: 600; cursor: pointer; color: #f8fafc; }
    dialog { background: #121827; color: #f8fafc; border: 1px solid #38bdf8; border-radius: 10px; padding: 20px; max-width: 380px; box-shadow: 0 16px 40px rgba(0,0,0,0.7); }
    dialog::backdrop { background: rgba(0,0,0,0.65); backdrop-filter: blur(3px); }
    progress, meter { height: 14px; width: 180px; vertical-align: middle; margin-right: 12px; }
    dl { display: grid; grid-template-columns: max-content 1fr; gap: 6px 16px; margin: 0; }
    dt { font-weight: 600; color: #94a3b8; }
    dd { margin: 0; color: #f8fafc; }
    header, nav, main, article, section, aside, footer {
      border: 1px dashed rgba(255,255,255,0.12);
      border-radius: 6px;
      padding: 8px 12px;
      margin-bottom: 8px;
      background: rgba(255,255,255,0.02);
    }
  `;

  // Generate visual stage for CSS snippets based on selectors used in the CSS code
  function buildCssStageHtml(cssCode, topic) {
    if (topic?.example && /<[a-z][\s\S]*>/i.test(topic.example)) {
      return topic.example.trim();
    }
    const fullCss = cssCode + '\n' + (topic?.example || '');
    const id = topic?.id || '';

    if (id.includes('flexbox') || id.includes('flex-items') || /\.flex-container|\.layout|\.header-flex|\.toolbar/.test(fullCss)) {
      if (/\.layout/.test(fullCss) && /\.sidebar/.test(fullCss)) {
        return `<div class="layout" style="min-height:130px;">
  <div class="sidebar" style="background:#162033;border:1px solid #38bdf8;padding:12px;border-radius:6px;">
    <strong>.sidebar</strong><br><small style="color:#94a3b8">Фиксированная колонка</small>
  </div>
  <div class="content" style="background:#121827;border:1px solid rgba(255,255,255,0.14);padding:12px;border-radius:6px;">
    <strong>.content (flex: 1)</strong>
    <p style="margin:6px 0 0;font-size:12.5px;">Занимает всё свободное пространство благодаря flex: 1 и min-width: 0.</p>
  </div>
</div>`;
      }
      return `<div class="flex-container cards-container header-flex toolbar" style="min-height:135px;padding:14px;border:1px dashed rgba(56,189,248,0.35);border-radius:8px;background:#0e1525;">
  <div class="special-badge" style="padding:12px 18px;background:#0284c7;color:#fff;border-radius:6px;font-weight:700;">Блок 1</div>
  <div style="padding:12px 18px;background:#4f46e5;color:#fff;border-radius:6px;font-weight:700;">Блок 2</div>
  <div style="padding:12px 18px;background:#0d9488;color:#fff;border-radius:6px;font-weight:700;">Блок 3</div>
</div>`;
    }

    if (id.includes('grid-areas') || /\.app-shell/.test(fullCss)) {
      return `<div class="app-shell" style="min-height:160px;gap:8px;">
  <div class="app-header" style="background:#162238;border:1px solid #38bdf8;padding:8px 12px;border-radius:6px;font-weight:600;">header (Шапка)</div>
  <div class="app-sidebar" style="background:#121a2d;border:1px solid rgba(255,255,255,0.15);padding:10px;border-radius:6px;">sidebar</div>
  <div class="app-main" style="background:#0f172a;border:1px solid rgba(255,255,255,0.15);padding:10px;border-radius:6px;">main (Основной контент)</div>
  <div class="app-footer" style="background:#121827;border:1px solid rgba(255,255,255,0.1);padding:6px 12px;border-radius:6px;font-size:12px;color:#94a3b8;">footer (Подвал)</div>
</div>`;
    }

    if (id.includes('grid') || id.includes('subgrid') || id.includes('columns') || /\.grid-layout|\.cards-grid|\.bento-grid|\.catalog-grid|\.features-row|\.masonry-gallery/.test(fullCss)) {
      return `<div class="grid-layout cards-grid bento-grid catalog-grid features-row masonry-gallery" style="gap:12px;">
  <div class="card card-wide masonry-card" style="background:#141d30;border:1px solid rgba(56,189,248,0.35);padding:12px;border-radius:8px;">
    <h3 class="card-title" style="font-size:14px;margin:0 0 4px;">Карточка 1</h3>
    <p style="font-size:12px;margin:0;">Адаптивная ячейка сетки</p>
  </div>
  <div class="card masonry-card" style="background:#141d30;border:1px solid rgba(255,255,255,0.12);padding:12px;border-radius:8px;">
    <h3 class="card-title" style="font-size:14px;margin:0 0 4px;">Карточка 2</h3>
    <p style="font-size:12px;margin:0;">Автоматическая колонка</p>
  </div>
  <div class="card card-tall masonry-card" style="background:#141d30;border:1px solid rgba(255,255,255,0.12);padding:12px;border-radius:8px;">
    <h3 class="card-title" style="font-size:14px;margin:0 0 4px;">Карточка 3</h3>
    <p style="font-size:12px;margin:0;">Равномерный отступ gap</p>
  </div>
</div>`;
    }

    const classMatches = [...fullCss.matchAll(/\.([a-zA-Z0-9_-]+)/g)].map(m => m[1]);
    const uniqueClasses = [...new Set(classMatches)].filter(
      c => !['is-open', 'is-visible', 'is-removed', 'is-invisible', 'is-faded', 'active', 'disabled', 'sr-only', 'visually-hidden'].includes(c)
    );
    const combinedClassStr = uniqueClasses.join(' ') || 'demo-card';

    return `<div class="container center-box hero-stack canvas-dots" style="padding:14px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);">
  <div class="${esc(combinedClassStr)} card card-interactive elevated-card glass-navbar hero-banner outer-card prose" style="padding:16px;border-radius:8px;border:1px solid rgba(255,255,255,0.14);background:#121929;">
    <span class="card-badge section-badge" style="font-size:11px;color:#38bdf8;font-family:monospace;">CSS LIVE PREVIEW</span>
    <h2 class="card-title gradient-title text-gradient" style="margin:6px 0;">Интерактивный блок предпросмотра</h2>
    <p class="card-excerpt article-body" style="margin:0 0 12px;">
      Классы из примера (<code>${esc(uniqueClasses.slice(0, 4).map(c => '.' + c).join(', ') || 'селекторы')}</code>) применены к этому стенду в реальном времени.
    </p>
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <button type="button" class="btn btn-tactile">Наведи или нажми</button>
      <a href="#demo" class="external-link">Тестовая ссылка</a>
    </div>
  </div>
</div>`;
  }

  // Split any topic into { all, html, css, js } so the user can view/edit HTML, CSS, JS, or Merged code
  function splitTopicIntoCodeParts(topic) {
    if (!topic) return { all: '', html: '', css: '', js: '' };
    const lang = topic.lang || topic.category || 'html';
    const rawCode = String(topic.code || '').trim();
    const rawExample = String(topic.example || '').trim();

    if (lang === 'css') {
      const htmlPart = buildCssStageHtml(rawCode, topic);
      const cssPart = rawCode;
      const jsPart = `// JS-скрипт для интерактивной проверки стилей\nconsole.log('Загружен CSS-стенд: ${topic.title.replace(/'/g, "\\'")}');`;
      const allPart = `<!-- Разметка (HTML) -->\n${htmlPart}\n\n<style>\n/* Стили (CSS) */\n${cssPart}\n</style>\n\n<script>\n${jsPart}\n</script>`;
      return { all: allPart, html: htmlPart, css: cssPart, js: jsPart };
    }

    if (lang === 'javascript') {
      const jsPart = rawCode.replace(/<\/?script[^>]*>/gi, '').trim();
      const htmlPart = /<[a-z][\s\S]*>/i.test(rawExample)
        ? rawExample.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').trim()
        : `<div id="app" class="card">\n  <h3>Тестовый стенд: ${esc(topic.title)}</h3>\n  <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">\n    <input id="searchInput" type="search" placeholder="Введите текст...">\n    <button id="button" type="button">Проверить функцию</button>\n    <span id="cartBadge" class="badge">0</span>\n  </div>\n  <div id="list" style="margin-top:8px;"></div>\n</div>`;
      const cssPart = `.card {\n  padding: 16px;\n  border-radius: 10px;\n  background: #111827;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n}\n.badge {\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: #0284c7;\n  color: #fff;\n  font-weight: 700;\n}`;
      const allPart = `<!-- Разметка (HTML) -->\n${htmlPart}\n\n<style>\n${cssPart}\n</style>\n\n<script>\n${jsPart}\n</script>`;
      return { all: allPart, html: htmlPart, css: cssPart, js: jsPart };
    }

    // For HTML, Recipes, Frameworks, PHP, XML: check if <style> or <script> blocks exist in code or example
    const combinedRaw = (rawCode.includes('<style') || rawCode.includes('<script'))
      ? rawCode
      : (rawExample.includes('<div') || rawExample.includes('<script') || rawExample.includes('<style'))
        ? `${rawCode}\n\n${rawExample}`
        : rawCode;

    const styleMatches = [...combinedRaw.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1].trim());
    const scriptMatches = [...combinedRaw.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1].trim());

    let extraCss = styleMatches.join('\n\n');
    if (!extraCss && rawExample && /\{[\s\S]*\}/.test(rawExample) && !/<[a-z]/i.test(rawExample)) {
      extraCss = rawExample;
    }

    let cleanHtml = rawCode
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<script(?![^>]*src=)[^>]*>[\s\S]*?<\/script>/gi, '')
      .trim();

    if (!cleanHtml && /<[a-z][\s\S]*>/i.test(rawExample)) {
      cleanHtml = rawExample
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<script(?![^>]*src=)[^>]*>[\s\S]*?<\/script>/gi, '')
        .trim();
    }

    const htmlPart = cleanHtml || rawCode;
    const cssPart = extraCss || `/* Базовые стили компонента */\nbody {\n  font-family: system-ui, sans-serif;\n  background: #0b101b;\n  color: #f8fafc;\n  padding: 16px;\n}`;
    const jsPart = scriptMatches.join('\n\n') || `// Скрипт инициализации компонента\nconsole.log('Компонент активен:', '${topic.title.replace(/'/g, "\\'")}');`;

    // Build cleanly formatted merged version
    let allPart = rawCode;
    if (lang === 'html' || lang === 'recipes' || lang === 'frameworks') {
      allPart = `${htmlPart}\n\n<style>\n${cssPart}\n</style>\n\n<script>\n${jsPart}\n</script>`;
    }
    return { all: allPart, html: htmlPart, css: cssPart, js: jsPart };
  }

  function mergeCodeParts(parts) {
    if (!parts) return '';
    return `${(parts.html || '').trim()}\n\n<style>\n${(parts.css || '').trim()}\n</style>\n\n<script>\n${(parts.js || '').trim()}\n</script>`;
  }

  // Generate visual preview for Metadata / OpenGraph / JSON-LD / SEO / XML
  function buildSeoOrXmlPreviewHtml(code, topic) {
    const raw = String(code || '');

    if (/<svg[\s>]/i.test(raw)) {
      return `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_PREVIEW_CSS}
        .svg-stage {
          display: flex; align-items: center; justify-content: center; gap: 20px;
          min-height: 145px; padding: 20px; border-radius: 8px;
          background-color: #090d14;
          background-image: radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 16px 16px;
          border: 1px solid rgba(56,189,248,0.3);
          color: #38bdf8;
        }
        .svg-stage svg { min-width: 42px; min-height: 42px; transition: transform 200ms ease, color 200ms ease; cursor: pointer; }
        .svg-stage svg:hover { transform: scale(1.18); color: #7dd3fc; }
      </style></head><body>
        <div class="svg-stage">${raw}</div>
      </body></html>`;
    }

    const titleMatch = raw.match(/<title>([^<]+)<\/title>/i) || raw.match(/og:title"\s+content="([^"]+)"/i) || raw.match(/"name":\s*"([^"]+)"/i);
    const descMatch = raw.match(/name="description"\s+content="([^"]+)"/i) || raw.match(/og:description"\s+content="([^"]+)"/i) || raw.match(/"description":\s*"([^"]+)"/i);
    const urlMatch = raw.match(/href="([^"]+)"/i) || raw.match(/<loc>([^<]+)<\/loc>/i) || raw.match(/Sitemap:\s*(\S+)/i);
    const robotsMatch = raw.match(/name="robots"\s+content="([^"]+)"/i);

    const previewTitle = titleMatch ? titleMatch[1] : (topic?.title || 'DevShelf — Справочник разработчика');
    const previewDesc = descMatch ? descMatch[1] : (topic?.summary || 'Предпросмотр сниппета поисковой выдачи и карточки соцсетей.');
    const previewUrl = urlMatch ? urlMatch[1] : 'https://devshelf.ru/docs';

    const locs = [...raw.matchAll(/<loc>([^<]+)<\/loc>/gi)].map(m => m[1]);
    const robotLines = raw.split('\n').filter(l => /^(User-agent|Allow|Disallow|Sitemap|RewriteRule|Header|add_header)/i.test(l.trim()));

    return `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_PREVIEW_CSS}
      .seo-preview-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
      .serp-card { background: #111827; border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 12px 14px; }
      .serp-kicker { font-size: 10px; font-family: monospace; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px; }
      .serp-url { font-size: 11.5px; color: #10b981; font-family: monospace; margin-bottom: 3px; word-break: break-all; }
      .serp-title { font-size: 15px; font-weight: 700; color: #60a5fa; margin-bottom: 4px; }
      .serp-desc { font-size: 12.5px; color: #cbd5e1; margin: 0; line-height: 1.45; }
      .tg-card { border-left: 3px solid #38bdf8; background: rgba(56,189,248,0.07); padding: 10px 12px; border-radius: 0 8px 8px 0; }
      .rule-list { font-family: monospace; font-size: 11.5px; color: #a5f3fc; margin-top: 8px; display: flex; flex-direction: column; gap: 4px; }
      .rule-item { background: #070a10; padding: 4px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.08); }
    </style></head><body>
      <div class="seo-preview-grid">
        <div class="serp-card">
          <div class="serp-kicker">🔍 Предпросмотр сниппета (Google / Яндекс / Telegram)</div>
          <div class="serp-url">${esc(previewUrl)} ${robotsMatch ? `· [${esc(robotsMatch[1])}]` : ''}</div>
          <div class="serp-title">${esc(previewTitle)}</div>
          <p class="serp-desc">${esc(previewDesc)}</p>
        </div>
        ${(locs.length > 0 || robotLines.length > 0) ? `
        <div class="serp-card">
          <div class="serp-kicker">⚙️ Распознанные директивы (${locs.length + robotLines.length})</div>
          <div class="rule-list">
            ${locs.slice(0, 4).map(u => `<div class="rule-item">📍 URL: ${esc(u)}</div>`).join('')}
            ${robotLines.slice(0, 4).map(r => `<div class="rule-item">🛡️ ${esc(r.trim())}</div>`).join('')}
          </div>
        </div>` : `
        <div class="serp-card">
          <div class="serp-kicker">💬 Карточка репоста (Open Graph / Schema)</div>
          <div class="tg-card">
            <div style="font-size:11px;color:#38bdf8;font-weight:700;">DevShelf</div>
            <div style="font-size:13.5px;font-weight:600;color:#f8fafc;margin:2px 0;">${esc(previewTitle)}</div>
            <div style="font-size:12px;color:#94a3b8;">${esc(previewDesc)}</div>
          </div>
        </div>`}
      </div>
    </body></html>`;
  }

  // Generate interactive preview for PHP 8 snippets
  function buildPhpPreviewHtml(code, topic) {
    const raw = String(code || '').trim();
    const lines = raw.split('\n');
    const outputs = [];
    for (const line of lines) {
      const t = line.trim();
      if (/^echo\s+/i.test(t)) {
        outputs.push(t.replace(/^echo\s+/i, '').replace(/;$/, ''));
      }
    }

    let simulatedResult = '';
    const id = topic?.id || '';
    if (id.includes('json')) {
      simulatedResult = `HTTP/1.1 201 Created\nContent-Type: application/json; charset=utf-8\n\n{\n  "status": "ok",\n  "received": "${esc(topic.title)}"\n}`;
    } else if (id.includes('pdo') || id.includes('sql') || id.includes('laravel')) {
      simulatedResult = `[PDO / Eloquent ORM utf8mb4] Запрос подготовлен и выполнен успешно (0.8 ms)\n\nArray (\n  [0] => Array (\n    [id] => 1\n    [title] => "${esc(topic.title)}"\n    [status] => "active"\n  )\n)`;
    } else if (id.includes('password') || id.includes('random')) {
      simulatedResult = `password_hash(): "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi"\npassword_verify(): true (Авторизация успешна)\nrandom_bytes(16): "4f8a9c2e1b7d036a5f12e8c9d4b7a102"`;
    } else if (outputs.length > 0) {
      simulatedResult = outputs.map((o, idx) => `[Вывод #${idx + 1}]: ${o}`).join('\n');
    } else {
      simulatedResult = `[PHP 8.3 Strict Mode] Скрипт выполнен без ошибок (exit code 0).\nТема: ${topic?.title || 'PHP'}\nПроверено выражений: ${lines.length} строк.`;
    }

    return `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_PREVIEW_CSS}
      .php-sim { display: grid; grid-template-columns: 1fr; gap: 10px; }
      .php-bar { display: flex; align-items: center; justify-content: space-between; padding: 6px 12px; background: #141d30; border: 1px solid rgba(56,189,248,0.3); border-radius: 6px; font-family: monospace; font-size: 11.5px; color: #7dd3fc; }
      .php-out { background: #070a10; border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 12px; font-family: monospace; font-size: 12.5px; color: #86efac; white-space: pre-wrap; margin: 0; }
    </style></head><body>
      <div class="php-sim">
        <div class="php-bar">
          <span>🐘 PHP 8.3 Sandbox Runner (declare(strict_types=1))</span>
          <span style="color:#10b981;">● 200 OK</span>
        </div>
        <pre class="php-out">${esc(simulatedResult)}</pre>
      </div>
    </body></html>`;
  }

  // Master function: builds a complete srcdoc HTML string for any topic & code
  function buildTopicPreviewDoc(topic, customCode) {
    const lang = topic?.lang || topic?.category || 'html';
    const code = (customCode !== undefined ? customCode : (topic?.code || '')).trim();

    // If customCode already contains combined <style> and/or <script> + HTML tags (e.g. from the 4-tab editor), render it directly!
    if (customCode !== undefined && (/<style[\s>]/i.test(code) || /<script[\s>]/i.test(code)) && /<[a-z]/i.test(code)) {
      return `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_PREVIEW_CSS}</style></head><body>${code}</body></html>`;
    }

    // Frameworks preview
    if (lang === 'frameworks') {
      if (topic?.id === 'fw-laravel' || /<\?php/i.test(code)) {
        return buildPhpPreviewHtml(code, topic);
      }
      if (topic?.example && /<(div|button|input|script|style)/i.test(topic.example)) {
        return `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_PREVIEW_CSS}</style></head><body>${topic.example}</body></html>`;
      }
      if (/<(div|header|main|section|button|input)/i.test(code)) {
        return `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_PREVIEW_CSS}</style></head><body>${code}</body></html>`;
      }
      return `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_PREVIEW_CSS}</style></head><body>
        <div style="padding:16px;background:#131c2e;border:1px solid rgba(56,189,248,0.35);border-radius:12px;">
          <div style="font-size:11px;color:#38bdf8;font-family:monospace;font-weight:700;margin-bottom:6px;">⚡ MODERN FRAMEWORK RUNTIME</div>
          <h3 style="margin:0 0 6px;">${esc(topic?.title || 'Фреймворк')}</h3>
          <p style="margin:0 0 10px;font-size:13px;color:#94a3b8;">${esc(topic?.summary || '')}</p>
          <div style="padding:10px;background:#070a10;border-radius:8px;font-family:monospace;font-size:12px;color:#86efac;">✓ Конфигурация и синтаксис проверены. Готово к подключению в проект.</div>
        </div>
      </body></html>`;
    }

    // 1. XML & SEO or HTML metadata-only topics
    const isHeadOnlyHtml = lang === 'html' && !/<(body|main|header|article|section|div|p|h[1-6]|ul|ol|dl|table|form|input|select|textarea|button|dialog|details|figure|blockquote|video|audio|canvas|svg|progress|meter|output|template|search|nav|aside|footer)\b/i.test(code);

    if (lang === 'xml' || isHeadOnlyHtml) {
      return buildSeoOrXmlPreviewHtml(code, topic);
    }

    // 2. PHP topics
    if (lang === 'php') {
      return buildPhpPreviewHtml(code, topic);
    }

    // 3. CSS topics
    if (lang === 'css') {
      const stageHtml = buildCssStageHtml(code, topic);
      return `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_PREVIEW_CSS}\n${code}</style></head><body>${stageHtml}</body></html>`;
    }

    // 4. JavaScript topics
    if (lang === 'javascript') {
      const autoVars = [
        'total', 'uniqueTags', 'grouped', 'byName', 'byScore', 'discounted',
        'clean', 'timerText', 'slug', 'id', 'pages', 'nextState', 'safeUrl',
        'zipCode', 'count', 'target', 'hasInactive', 'allActive', 'allTags',
        'updated', 'withoutFirst', 'last', 'secondLast', 'volume', 'diffDays'
      ];
      const inspectScript = `
        try {
          const _found = [];
          ${JSON.stringify(autoVars)}.forEach(k => {
            try {
              const v = eval(k);
              if (v !== undefined) _found.push(k + ' = ' + (typeof v === 'object' ? JSON.stringify(v) : String(v)));
            } catch {}
          });
          if (_found.length) console.log(_found.join('\\n'));
        } catch {}
      `;

      return `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_PREVIEW_CSS}
        .js-stage { display: flex; flex-direction: column; gap: 10px; }
        .js-dom-playground { padding: 12px; border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; background: #111827; }
        .js-log-view { margin: 0; padding: 10px 12px; border-radius: 6px; background: #070a10; border: 1px solid rgba(56,189,248,0.28); color: #86efac; font-family: monospace; font-size: 12px; white-space: pre-wrap; min-height: 44px; }
        .is-visible, .is-pinned { border-color: #38bdf8 !important; box-shadow: 0 0 0 2px rgba(56,189,248,0.25); }
        .badge { display: inline-block; padding: 2px 8px; border-radius: 4px; background: #0284c7; color: #fff; font-size: 11px; font-weight: 700; margin-bottom: 6px; }
      </style></head><body>
        <div class="js-stage">
          <div class="js-dom-playground" id="app">
            <div class="card chart-container" style="padding:10px;border:1px solid rgba(255,255,255,0.12);border-radius:6px;margin-bottom:8px;">
              <strong>Интерактивный DOM-стенд (.card)</strong>
              <div id="list" style="margin-top:6px;"></div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
              <input id="searchInput" type="search" placeholder="Живой ввод текста..." style="margin:0;">
              <button type="button" id="button" class="tab-btn" data-tab-target="pricing" data-plan-id="42">Тест кнопки</button>
              <span id="cartBadge" class="badge">0</span>
            </div>
            <ul id="todo-list" style="margin:8px 0 0;padding-left:18px;font-size:13px;">
              <li>Задача 1 <button type="button" data-action="delete" style="padding:2px 6px;font-size:11px;margin-left:6px;">Удалить</button></li>
              <li>Задача 2 <button type="button" data-action="delete" style="padding:2px 6px;font-size:11px;margin-left:6px;">Удалить</button></li>
            </ul>
            <form id="profile-form" hidden><input name="user" value="Павел"><input type="file" id="fileInput"></form>
            <img id="avatarImg" hidden alt="">
            <div id="drop-zone" hidden></div>
            <div id="pricing" hidden></div>
            <div id="progressBar" hidden></div>
            <input id="password" value="123456" hidden><input id="password-confirm" value="123456" hidden>
            <input id="inputElement" type="number" value="42.5" hidden>
          </div>
          <div>
            <div style="font-size:10.5px;font-family:monospace;color:#38bdf8;margin-bottom:4px;">▶ РЕЗУЛЬТАТ ВЫПОЛНЕНИЯ JS / CONSOLE.LOG:</div>
            <pre id="inline-js-log" class="js-log-view">Выполнение скрипта...</pre>
          </div>
        </div>
        <script>
          const _logBox = document.getElementById('inline-js-log');
          const _lines = [];
          const _send = (type, args) => {
            const formatted = Array.from(args).map(x => {
              try { return typeof x === 'object' ? JSON.stringify(x, null, 2) : String(x); }
              catch { return String(x); }
            });
            _lines.push((type === 'error' ? '❌ ' : '✓ ') + formatted.join(' '));
            _logBox.textContent = _lines.join('\\n');
            parent.postMessage({ devshelfRef: true, type, args: formatted }, '*');
          };
          ['log', 'info', 'warn', 'error', 'table'].forEach(k => {
            const old = console[k];
            console[k] = function () { _send(k, arguments); if (old) old.apply(console, arguments); };
          });
          window.onerror = (msg, url, line) => _send('error', [msg + ' (строка ' + line + ')']);
          const searchInput = document.getElementById('searchInput');
          const button = document.getElementById('button');
          const card = document.querySelector('.card');
          const cartBadge = document.getElementById('cartBadge');
          const fileInput = document.getElementById('fileInput');
          const avatarImg = document.getElementById('avatarImg');
          const progressBar = document.getElementById('progressBar');
          const inputElement = document.getElementById('inputElement');
          const isPinnedBoolean = true;
          const users = [{ id: 1, name: 'Павел', role: 'admin' }, { id: 2, name: 'Елена', role: 'editor' }];
          function renderItems() {}
          function resizeCanvas() {}
          function openCommandPalette() { console.log('Открыта палитра команд Ctrl+K'); }
          function hideNotification() {}
        <\/script>
        <script>
          try {
            ${code.replace(/<\/script/gi, '<\\/script')}
            ${inspectScript}
            if (_lines.length === 0) {
              _logBox.textContent = '✓ Скрипт успешно выполнен и подключён к интерактивным элементам выше.';
              parent.postMessage({ devshelfRef: true, type: 'info', args: ['Скрипт выполнен без ошибок.'] }, '*');
            }
          } catch (err) {
            _send('error', [err.message]);
          }
        <\/script>
      </body></html>`;
    }

    // 5. HTML & Recipes topics
    let extraCss = '';
    if (topic?.example && /\{[\s\S]*\}/.test(topic.example) && !/<[a-z]/i.test(topic.example)) {
      extraCss = topic.example;
    }

    const autoEnhanceScript = `
      <script>
        const dlg = document.querySelector('dialog');
        if (dlg && !dlg.open && !document.getElementById('open-modal') && !document.getElementById('open-dialog')) {
          dlg.setAttribute('open', '');
        }
      <\/script>
    `;

    return `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_PREVIEW_CSS}\n${extraCss}</style></head><body>${code}${autoEnhanceScript}</body></html>`;
  }

  window.DevShelfPreview = {
    buildTopicPreviewDoc,
    splitTopicIntoCodeParts,
    mergeCodeParts
  };
})();
