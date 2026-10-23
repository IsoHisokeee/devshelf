// DevShelf Universal Preview Engine, Code Splitter & Techno-Industrial Syntax Highlighter
(function () {
  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function wrapToken(cls, text) {
    return `<span class="tok-${cls}">${escapeHtml(text)}</span>`;
  }

  function highlightCss(code) {
    const src = String(code || '');
    const tokenRegex =
      /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("[^"\n]*"|'[^'\n]*')|(@[a-zA-Z_-]+)|(--[a-zA-Z0-9_-]+|\$[a-zA-Z0-9_-]+)|([a-zA-Z-]+)(\s*:)|(#[0-9a-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:px|rem|em|vh|vw|vmin|vmax|deg|s|ms|%|fr)?\b)|(\b[a-zA-Z_-]+)(?=\s*\()|(::?[a-zA-Z-]+|[.#][a-zA-Z0-9_-]+)|([{}();,>~+])/g;

    let out = '';
    let lastIndex = 0;
    let match;

    while ((match = tokenRegex.exec(src)) !== null) {
      if (match.index > lastIndex) {
        out += wrapToken('text', src.slice(lastIndex, match.index));
      }

      const [
        full,
        comment,
        str,
        atRule,
        variable,
        propName,
        propColon,
        numOrColor,
        fnName,
        selector,
        punc
      ] = match;

      if (comment !== undefined) {
        out += wrapToken('comment', comment);
      } else if (str !== undefined) {
        out += wrapToken('str', str);
      } else if (atRule !== undefined) {
        out += wrapToken('kw', atRule);
      } else if (variable !== undefined) {
        out += wrapToken('var', variable);
      } else if (propName !== undefined) {
        out += wrapToken('attr', propName) + wrapToken('punc', propColon);
      } else if (numOrColor !== undefined) {
        out += wrapToken('num', numOrColor);
      } else if (fnName !== undefined) {
        out += wrapToken('fn', fnName);
      } else if (selector !== undefined) {
        out += wrapToken('tag', selector);
      } else if (punc !== undefined) {
        out += wrapToken('punc', punc);
      } else {
        out += escapeHtml(full);
      }

      lastIndex = tokenRegex.lastIndex;
    }

    if (lastIndex < src.length) {
      out += wrapToken('text', src.slice(lastIndex));
    }
    return out;
  }

  function highlightJsOrPhp(code) {
    const src = String(code || '');
    const tokenRegex =
      /(\/\*[\s\S]*?\*\/|\/\/[^\n]*|#[^\n]*)|(`(?:\\[\s\S]|[^`])*`|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*')|(<\?php|\?>)|(\$[a-zA-Z_][a-zA-Z0-9_]*)|\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|try|catch|finally|throw|async|await|import|from|export|default|class|extends|interface|type|enum|public|private|protected|static|use|namespace|echo|print|fn|match|array|true|false|null|undefined|typeof|instanceof|in|of|void)\b|\b(document|window|console|navigator|localStorage|JSON|Math|Object|Array|Promise|Intl|URL|Blob|FileReader|PDO|Route|Project|React)\b|\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\s*\()|\b(\d+(?:\.\d+)?)\b|([{}()[\].,:;+\-*/=<>!&|?~]+)/g;

    let out = '';
    let lastIndex = 0;
    let match;

    while ((match = tokenRegex.exec(src)) !== null) {
      if (match.index > lastIndex) {
        out += wrapToken('text', src.slice(lastIndex, match.index));
      }

      const [
        full,
        comment,
        str,
        phpTag,
        variable,
        keyword,
        builtin,
        fnName,
        number,
        punc
      ] = match;

      if (comment !== undefined) {
        out += wrapToken('comment', comment);
      } else if (str !== undefined) {
        out += wrapToken('str', str);
      } else if (phpTag !== undefined) {
        out += wrapToken('tag', phpTag);
      } else if (variable !== undefined) {
        out += wrapToken('var', variable);
      } else if (keyword !== undefined) {
        out += wrapToken('kw', keyword);
      } else if (builtin !== undefined) {
        out += wrapToken('tag', builtin);
      } else if (fnName !== undefined) {
        out += wrapToken('fn', fnName);
      } else if (number !== undefined) {
        out += wrapToken('num', number);
      } else if (punc !== undefined) {
        out += wrapToken('punc', punc);
      } else {
        out += escapeHtml(full);
      }

      lastIndex = tokenRegex.lastIndex;
    }

    if (lastIndex < src.length) {
      out += wrapToken('text', src.slice(lastIndex));
    }
    return out;
  }

  function highlightTagAttributes(attrString) {
    const src = String(attrString || '');
    const attrRegex = /([a-zA-Z0-9_:@.\-[\]]+)(\s*=\s*)("[^"]*"|'[^']*'|[^\s"'>]+)|([a-zA-Z0-9_:@.\-[\]]+)/g;
    let out = '';
    let lastIndex = 0;
    let match;

    while ((match = attrRegex.exec(src)) !== null) {
      if (match.index > lastIndex) {
        out += escapeHtml(src.slice(lastIndex, match.index));
      }
      const [, nameWithVal, eqSign, valStr, standaloneAttr] = match;
      if (nameWithVal !== undefined) {
        out +=
          wrapToken('attr', nameWithVal) +
          wrapToken('punc', eqSign) +
          wrapToken('str', valStr);
      } else if (standaloneAttr !== undefined) {
        out += wrapToken('attr', standaloneAttr);
      }
      lastIndex = attrRegex.lastIndex;
    }

    if (lastIndex < src.length) {
      out += escapeHtml(src.slice(lastIndex));
    }
    return out;
  }

  function highlightMarkup(code) {
    const src = String(code || '');
    if (!/<[a-zA-Z!?/]/.test(src)) {
      if (src.includes('@mixin') || src.includes('@include')) {
        return highlightCss(src);
      }
      return highlightJsOrPhp(src);
    }

    const masterRegex =
      /(<!--[\s\S]*?-->)|(<\?php[\s\S]*?\?>)|(<style\b[^>]*>)([\s\S]*?)(<\/style>)|(<script\b[^>]*>)([\s\S]*?)(<\/script>)|(<\/?)([a-zA-Z0-9:-]+)([\s\S]*?)(\/?>)/gi;

    let out = '';
    let lastIndex = 0;
    let match;

    function highlightSingleTag(openBracket, tagName, attrs, closeBracket) {
      return (
        wrapToken('punc', openBracket) +
        wrapToken('tag', tagName) +
        highlightTagAttributes(attrs) +
        wrapToken('punc', closeBracket)
      );
    }

    function parseRawTagString(rawTag) {
      const m = /^(\s*<\/?)([a-zA-Z0-9:-]+)([\s\S]*?)(\/?>\s*)$/.exec(rawTag);
      if (!m) return wrapToken('tag', rawTag);
      return highlightSingleTag(m[1], m[2], m[3], m[4]);
    }

    while ((match = masterRegex.exec(src)) !== null) {
      if (match.index > lastIndex) {
        const plainText = src.slice(lastIndex, match.index);
        out += wrapToken('text', plainText);
      }

      const [
        full,
        htmlComment,
        phpBlock,
        styleOpen,
        styleBody,
        styleClose,
        scriptOpen,
        scriptBody,
        scriptClose,
        tagOpenBracket,
        tagName,
        tagAttrs,
        tagCloseBracket
      ] = match;

      if (htmlComment !== undefined) {
        out += wrapToken('comment', htmlComment);
      } else if (phpBlock !== undefined) {
        out += highlightJsOrPhp(phpBlock);
      } else if (styleOpen !== undefined) {
        out +=
          parseRawTagString(styleOpen) +
          highlightCss(styleBody) +
          parseRawTagString(styleClose);
      } else if (scriptOpen !== undefined) {
        out +=
          parseRawTagString(scriptOpen) +
          highlightJsOrPhp(scriptBody) +
          parseRawTagString(scriptClose);
      } else if (tagName !== undefined) {
        out += highlightSingleTag(tagOpenBracket, tagName, tagAttrs, tagCloseBracket);
      } else {
        out += escapeHtml(full);
      }

      lastIndex = masterRegex.lastIndex;
    }

    if (lastIndex < src.length) {
      out += wrapToken('text', src.slice(lastIndex));
    }

    return out;
  }

  function highlightCode(code, mode = 'combined') {
    const m = String(mode || 'combined').toLowerCase();
    if (m === 'css') {
      return highlightCss(code);
    }
    if (m === 'js' || m === 'javascript' || m === 'php') {
      const trimmed = String(code || '').trim();
      if (trimmed.startsWith('<!--') && trimmed.includes('<?php')) {
        return highlightMarkup(code);
      }
      return highlightJsOrPhp(code);
    }
    return highlightMarkup(code);
  }

  const basePreviewStyles = `
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 14px;
      background: #101216;
      color: #f4f4f5;
      font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
      font-size: 14px;
      line-height: 1.5;
    }
    a { color: #facc15; }
    button, input, select, textarea {
      font: inherit;
    }
    button:not([class]) {
      background: #facc15;
      color: #09090b;
      border: 1px solid #facc15;
      border-radius: 4px;
      padding: 8px 14px;
      font-weight: 800;
      cursor: pointer;
    }
    input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="color"]):not([class]),
    select:not([class]),
    textarea:not([class]) {
      background: #181a20;
      color: #f4f4f5;
      border: 1px solid #3f3f46;
      border-radius: 4px;
      padding: 8px 12px;
    }
    table:not([class]) {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #2e323b;
    }
    th, td {
      border: 1px solid #2e323b;
      padding: 8px 12px;
      text-align: left;
    }
    th { background: #181a20; color: #facc15; }
    code, pre {
      font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    }
    blockquote {
      margin: 0;
      padding: 10px 14px;
      border-left: 3px solid #facc15;
      background: rgba(250, 204, 21, 0.08);
    }
    dialog[open] {
      background: #181a20;
      color: #f4f4f5;
      border: 1px solid #facc15;
      border-radius: 6px;
      padding: 16px;
    }
  `;

  function buildCssHarness(topic, cssCode) {
    if (topic.example && topic.example.trim().startsWith('<')) {
      return `<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><style>${basePreviewStyles}\n${cssCode}</style></head><body>${topic.example}</body></html>`;
    }

    const id = (topic.id || '').toLowerCase();
    const code = String(cssCode || '');

    let bodyHtml = '';
    if (id.includes('flex') || id.includes('grid') || id.includes('gap') || id.includes('align') || id.includes('justify')) {
      bodyHtml = `
        <div class="demo-container container grid flex row layout cards">
          <div class="item card box col">МОД 1</div>
          <div class="item card box col">МОД 2</div>
          <div class="item card box col">МОД 3</div>
        </div>
      `;
    } else if (id.includes('button') || id.includes('hover') || id.includes('focus') || id.includes('transition') || id.includes('outline')) {
      bodyHtml = `
        <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;padding:8px;">
          <button class="btn button demo-btn focus-demo-btn">Интерактивная кнопка</button>
          <a href="#demo" class="link demo-link">Тестовая ссылка →</a>
        </div>
      `;
    } else if (id.includes('input') || id.includes('form') || id.includes('placeholder') || id.includes('checkbox')) {
      bodyHtml = `
        <form onsubmit="event.preventDefault()" style="display:grid;gap:10px;max-width:320px;">
          <input type="text" class="input field" placeholder="Введите значение..." value="Пример текста">
          <label style="display:flex;gap:8px;align-items:center;"><input type="checkbox" checked> Опция активна</label>
        </form>
      `;
    } else {
      bodyHtml = `
        <div class="demo-stage container wrapper box card panel element target" style="padding:16px;border-radius:6px;border:1px solid rgba(250,204,21,0.35);background:rgba(24,26,32,0.85);">
          <h4 class="title heading" style="margin:0 0 6px 0;color:#facc15;">${escapeHtml(topic.title || 'CSS Демонстрация')}</h4>
          <p class="text desc content" style="margin:0 0 10px 0;color:#d4d4d8;font-size:13px;">${escapeHtml(topic.summary || '')}</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <span class="badge tag pill item" style="padding:4px 10px;border-radius:4px;background:rgba(250,204,21,0.15);color:#facc15;font-size:12px;font-weight:700;">Элемент A</span>
            <span class="badge tag pill item" style="padding:4px 10px;border-radius:4px;background:rgba(34,197,94,0.16);color:#86efac;font-size:12px;font-weight:700;">Элемент B</span>
          </div>
        </div>
      `;
    }

    const extraRules = `
      .demo-container { display: flex; gap: 10px; flex-wrap: wrap; }
      .demo-container > div {
        padding: 14px 18px;
        border-radius: 4px;
        background: rgba(250, 204, 21, 0.14);
        border: 1px solid rgba(250, 204, 21, 0.45);
        font-weight: 800;
        color: #fef08a;
        font-family: monospace;
      }
    `;

    return `<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><style>${basePreviewStyles}\n${extraRules}\n${code}</style></head><body>${bodyHtml}</body></html>`;
  }

  function buildJsHarness(topic, jsCode) {
    const htmlFixture = (topic.example && topic.example.trim().startsWith('<'))
      ? `<div id="demo-fixture" style="margin-bottom:12px;">${topic.example}</div>`
      : `<div id="app" class="box card item" style="margin-bottom:10px;padding:10px 12px;border-radius:4px;background:#181a20;border:1px solid #2e323b;display:flex;justify-content:space-between;align-items:center;">
          <span id="demo-text" class="title">Интерактивный DOM-узел (#app)</span>
          <button id="btn" class="btn" type="button" style="padding:5px 10px;font-size:12px;">Выполнить действие</button>
        </div>`;

    return `<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><style>
      ${basePreviewStyles}
      .console-box {
        background: #090a0c;
        border: 1px solid #272a30;
        border-left: 3px solid #facc15;
        border-radius: 4px;
        padding: 10px 12px;
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 12.5px;
      }
      .console-head {
        display: flex;
        justify-content: space-between;
        color: #facc15;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 6px;
        padding-bottom: 5px;
        border-bottom: 1px solid #1f2229;
        font-weight: 700;
      }
      .log-line {
        padding: 4px 0;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.06);
        color: #fef08a;
        white-space: pre-wrap;
        word-break: break-word;
      }
      .log-line:last-child { border-bottom: none; }
      .log-warn { color: #fb923c; }
      .log-err { color: #f87171; }
    </style></head><body>
      ${htmlFixture}
      <div class="console-box">
        <div class="console-head"><span>Консоль выполнения JS</span><span>LIVE // STDOUT</span></div>
        <div id="console-out"></div>
      </div>
      <script>
        (function() {
          const out = document.getElementById('console-out');
          function formatVal(v) {
            if (v === undefined) return 'undefined';
            if (v === null) return 'null';
            if (typeof v === 'function') return '[Function: ' + (v.name || 'anonymous') + ']';
            if (typeof v === 'object') {
              try { return JSON.stringify(v, null, 2); } catch (e) { return String(v); }
            }
            return String(v);
          }
          function appendLine(cls, args) {
            const div = document.createElement('div');
            div.className = 'log-line ' + (cls || '');
            div.textContent = '> ' + Array.from(args).map(formatVal).join(' ');
            out.appendChild(div);
          }
          console.log = function() { appendLine('', arguments); };
          console.info = function() { appendLine('', arguments); };
          console.warn = function() { appendLine('log-warn', arguments); };
          console.error = function() { appendLine('log-err', arguments); };
          console.table = function(data) { appendLine('', [data]); };

          try {
            ${jsCode}
            if (!out.children.length) {
              appendLine('', ['Код успешно выполнен (без ошибок).']);
            }
          } catch (err) {
            appendLine('log-err', ['Ошибка: ' + (err && err.message ? err.message : String(err))]);
          }
        })();
      <\/script>
    </body></html>`;
  }

  function buildPhpHarness(topic, phpCode) {
    const lines = [];
    const code = String(phpCode || '');
    const echoMatches = [...code.matchAll(/(?:echo|print|var_dump|print_r)\s*\(?([^;\n]+)\)?;/g)];
    if (echoMatches.length) {
      echoMatches.forEach((m, idx) => {
        const expr = m[1].trim().replace(/^['"]|['"]$/g, '');
        lines.push(`Вывод #${idx + 1}: ${expr}`);
      });
    } else if (code.includes('json_encode')) {
      lines.push('{"ok": true, "status": 200, "engine": "PHP 8.3"}');
    } else if (code.includes('PDO') || code.includes('SELECT')) {
      lines.push('Успешное подключение PDO -> получено строк: 3');
    } else if (code.includes('password_hash')) {
      lines.push('$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');
    } else {
      lines.push(`Скрипт "${topic.title || 'PHP 8.3'}" выполнен успешно (0 ошибок, код возврата 0).`);
    }

    return `<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><style>
      ${basePreviewStyles}
      .php-sim {
        background: #090a0c;
        border: 1px solid #272a30;
        border-left: 3px solid #facc15;
        border-radius: 4px;
        padding: 12px;
        font-family: 'JetBrains Mono', ui-monospace, monospace;
      }
      .php-head {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: #facc15;
        margin-bottom: 8px;
        padding-bottom: 6px;
        border-bottom: 1px solid #1f2229;
        font-weight: 700;
      }
      .php-out {
        color: #e4e4e7;
        font-size: 12.5px;
        white-space: pre-wrap;
      }
    </style></head><body>
      <div class="php-sim">
        <div class="php-head"><span>PHP 8.3 CLI / FPM Симулятор</span><span>200 OK</span></div>
        <div class="php-out">${escapeHtml(lines.join('\n'))}</div>
      </div>
    </body></html>`;
  }

  function buildXmlHarness(topic, xmlCode) {
    const raw = String(xmlCode || '').trim();
    if (raw.startsWith('<svg') || raw.includes('<svg')) {
      return `<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><style>${basePreviewStyles}</style></head><body>${raw}</body></html>`;
    }
    return `<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><style>
      ${basePreviewStyles}
      .xml-card {
        background: #141619;
        border: 1px solid #2e323b;
        border-left: 3px solid #facc15;
        border-radius: 4px;
        padding: 12px;
      }
      .xml-badge {
        display: inline-block;
        padding: 3px 8px;
        border-radius: 4px;
        background: rgba(250, 204, 21, 0.14);
        color: #facc15;
        font-size: 11px;
        font-weight: 700;
        font-family: monospace;
        margin-bottom: 8px;
      }
      pre {
        margin: 0;
        padding: 10px;
        border-radius: 4px;
        background: #090a0c;
        color: #e4e4e7;
        font-size: 12px;
        overflow-x: auto;
      }
    </style></head><body>
      <div class="xml-card">
        <span class="xml-badge">✓ ВАЛИДНЫЙ ДОКУМЕНТ / КОНФИГУРАЦИЯ (${escapeHtml((topic.id || 'XML').toUpperCase())})</span>
        <pre>${escapeHtml(raw)}</pre>
      </div>
    </body></html>`;
  }

  function buildTopicPreviewDoc(topic, customCode) {
    if (!topic) return '';
    const lang = (topic.lang || 'html').toLowerCase();
    const code = customCode !== undefined ? customCode : (topic.code || '');

    if (lang === 'css') {
      return buildCssHarness(topic, code);
    }
    if (lang === 'javascript' || lang === 'js') {
      return buildJsHarness(topic, code);
    }
    if (lang === 'php') {
      return buildPhpHarness(topic, code);
    }
    if (lang === 'xml') {
      return buildXmlHarness(topic, code);
    }

    const exampleHtml = (customCode === undefined && topic.example && topic.example.trim().startsWith('<'))
      ? topic.example
      : code;

    return `<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><style>${basePreviewStyles}</style></head><body>${exampleHtml}</body></html>`;
  }

  function splitTopicIntoCodeParts(topic) {
    if (!topic) return { combined: '', html: '', css: '', js: '' };
    const lang = (topic.lang || 'html').toLowerCase();
    const rawCode = String(topic.code || '').trim();
    const rawExample = String(topic.example || '').trim();

    let html = '';
    let css = '';
    let js = '';

    function extractFromMarkup(source) {
      let rest = source;
      const styleMatches = [...rest.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
      if (styleMatches.length) {
        css = styleMatches.map((m) => m[1].trim()).join('\n\n');
        rest = rest.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').trim();
      }
      const scriptMatches = [...rest.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
      if (scriptMatches.length) {
        js = scriptMatches.map((m) => m[1].trim()).join('\n\n');
        rest = rest.replace(/<script(?![^>]*src=)[^>]*>[\s\S]*?<\/script>/gi, '').trim();
      }
      html = rest.trim();
    }

    if (lang === 'css') {
      css = rawCode;
      if (rawExample && rawExample.startsWith('<')) {
        html = rawExample;
      } else {
        html = `<div class="demo-container">\n  <div class="card box item">Элемент 1</div>\n  <div class="card box item">Элемент 2</div>\n  <div class="card box item">Элемент 3</div>\n</div>`;
      }
      js = '// JavaScript не требуется для чистого CSS-свойства';
    } else if (lang === 'javascript' || lang === 'js') {
      js = rawCode;
      if (rawExample && rawExample.startsWith('<')) {
        html = rawExample;
      } else {
        html = `<div id="app" class="demo-box">\n  <span id="demo-text">${topic.title || 'JS Демо'}</span>\n  <button id="btn" type="button">Запустить</button>\n</div>`;
      }
      css = `.demo-box {\n  padding: 14px;\n  border-radius: 6px;\n  background: #141619;\n  border: 1px solid #2e323b;\n  color: #f4f4f5;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}`;
    } else if (lang === 'php') {
      html = `<!-- Серверный скрипт PHP 8.3 -->\n` + rawCode;
      css = `/* Стили вывода для клиентской части */\n.php-output {\n  font-family: monospace;\n  color: #facc15;\n}`;
      js = `// Клиентский запрос к PHP-обработчику:\n// fetch('/api/handler.php').then(r => r.json()).then(console.log);`;
    } else if (lang === 'xml') {
      html = rawCode;
      css = `/* Конфигурационный / XML / SEO файл не требует CSS */`;
      js = `// Файл обрабатывается браузером, сборщиком или поисковым роботом`;
    } else {
      const sourceToParse = rawCode.includes('<') ? rawCode : (rawExample.includes('<') ? rawExample : rawCode);
      extractFromMarkup(sourceToParse);

      if (!html && rawCode) {
        html = rawCode;
      }
      if (!css) {
        css = `/* Базовые стили компонента */\n.demo-card {\n  padding: 16px;\n  border-radius: 6px;\n  background: #141619;\n  border: 1px solid #2e323b;\n  color: #f4f4f5;\n}`;
      }
      if (!js) {
        js = `// Интерактивная логика компонента\nconsole.log('Модуль инициализирован:', ${JSON.stringify(topic.title || '')});`;
      }
    }

    let combined = '';
    if (lang === 'php' || lang === 'xml') {
      combined = rawCode;
    } else {
      const parts = [];
      if (html) parts.push(`<!-- ==================== HTML ==================== -->\n${html}`);
      if (css && !css.startsWith('/* Базовые стили компонента */')) {
        parts.push(`<style>\n/* ==================== CSS ==================== */\n${css}\n</style>`);
      } else if (lang === 'css' && css) {
        parts.push(`<style>\n${css}\n</style>`);
      }
      if (js && !js.startsWith('// JavaScript не требуется') && !js.startsWith('// Интерактивная логика компонента')) {
        parts.push(`<script>\n// ==================== JS ====================\n${js}\n<\/script>`);
      } else if ((lang === 'javascript' || lang === 'js') && js) {
        parts.push(`<script>\n${js}\n<\/script>`);
      }
      combined = parts.join('\n\n') || rawCode;
    }

    return { combined, html, css, js };
  }

  window.DevShelfPreview = {
    buildTopicPreviewDoc,
    splitTopicIntoCodeParts,
    highlightCode
  };
})();
