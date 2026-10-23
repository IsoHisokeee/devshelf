// Инициализация базы тем (поддерживает и массив DEVSHELF_REFERENCE_TOPICS, и объект REFERENCE_DATA)
const allTopicsList = window.DEVSHELF_REFERENCE_TOPICS || [];
const referenceData = window.REFERENCE_DATA || {};

if (!Object.keys(referenceData).length && allTopicsList.length) {
  for (const t of allTopicsList) {
    const k = t.lang || 'html';
    if (!referenceData[k]) referenceData[k] = [];
    referenceData[k].push(t);
  }
}

const params = new URLSearchParams(window.location.search);
let currentLang = params.get('lang') || 'all';
let currentTopicId = params.get('topic') || '';
let searchQuery = '';
let activeMode = params.get('mode') || 'editor';

// Состояние редактора с 4 вкладками: HTML, CSS, JS и Слитый (all)
const codeState = {
  html: `<div class="demo-card">\n  <span class="badge">DevShelf Sandbox</span>\n  <h1>Интерактивная песочница</h1>\n  <p>Переключайтесь между раздельными вкладками HTML, CSS, JS и полным слитным вариантом, используйте поиск слева по всем 276 темам или откройте 8 визуальных CSS-генераторов.</p>\n  <button id="action-btn">Проверить интерактивность</button>\n</div>`,
  css: `body {\n  font-family: 'Inter', system-ui, sans-serif;\n  background: #0f172a;\n  color: #f8fafc;\n  display: grid;\n  place-items: center;\n  min-height: 90vh;\n  margin: 0;\n}\n\n.demo-card {\n  background: rgba(30, 41, 59, 0.85);\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  border-radius: 16px;\n  padding: 28px;\n  max-width: 440px;\n  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);\n}\n\n.badge {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 6px;\n  background: rgba(56, 189, 248, 0.15);\n  color: #38bdf8;\n  font-size: 12px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n\nh1 {\n  margin: 0 0 10px;\n  font-size: 24px;\n}\n\np {\n  color: #94a3b8;\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n\nbutton {\n  background: #38bdf8;\n  color: #0f172a;\n  border: none;\n  padding: 10px 18px;\n  border-radius: 8px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.15s;\n}\n\nbutton:hover {\n  transform: translateY(-2px);\n}`,
  js: `const btn = document.getElementById('action-btn');\nlet clicks = 0;\n\nif (btn) {\n  btn.addEventListener('click', () => {\n    clicks++;\n    btn.textContent = \`Нажато раз: \${clicks}\`;\n    console.log('Кнопка нажата! Счётчик:', clicks);\n  });\n}`,
  all: '',
  activeEditor: 'html',
  activeTopic: null
};

function syncMergedCodeFromParts() {
  codeState.all = `<!-- HTML -->\n${(codeState.html || '').trim()}\n\n<style>\n/* CSS */\n${(codeState.css || '').trim()}\n</style>\n\n<script>\n// JavaScript\n${(codeState.js || '').trim()}\n</script>`;
}

function syncPartsFromMergedCode(mergedStr) {
  const raw = String(mergedStr || '');
  const styleMatch = raw.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const scriptMatch = raw.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
  const cleanHtml = raw
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/^<!--\s*HTML\s*-->\s*/i, '')
    .trim();

  codeState.html = cleanHtml || raw;
  if (styleMatch) codeState.css = styleMatch[1].replace(/^\/\*\s*CSS\s*\*\/\s*/i, '').trim();
  if (scriptMatch) codeState.js = scriptMatch[1].replace(/^\/\/\s*JavaScript\s*/i, '').trim();
}

syncMergedCodeFromParts();

// 10 Готовых UI-шаблонов (включая Форму входа и Регистрацию)
const UI_TEMPLATES = [
  {
    id: 'login-auth-card',
    title: 'Форма входа и авторизации (Login + Показ пароля)',
    desc: 'Готовая карточка входа в систему с переключением видимости пароля, чекбоксом «Запомнить меня» и валидацией.',
    tags: ['Auth / Login', 'Форма входа', 'UX'],
    html: `<form class="login-card" id="login-form">
  <h3>Вход в аккаунт</h3>
  <div class="field-group">
    <label>Рабочий Email</label>
    <input type="email" value="developer@devshelf.ru" required />
  </div>
  <div class="field-group">
    <label>Пароль</label>
    <div class="pass-row">
      <input type="password" id="pass-inp" value="DevShelf2026" required />
      <button type="button" id="eye-btn" class="eye-btn">Показать</button>
    </div>
  </div>
  <button type="submit" class="login-btn">Войти в систему →</button>
  <div id="login-msg" class="login-msg" hidden></div>
</form>`,
    css: `body { background: #090d16; color: #f8fafc; font-family: system-ui, sans-serif; display: grid; place-items: center; min-height: 88vh; margin: 0; }
.login-card { background: #131c2e; border: 1px solid #263449; border-radius: 14px; padding: 20px; width: 310px; display: flex; flex-direction: column; gap: 12px; }
.login-card h3 { margin: 0; font-size: 17px; }
.field-group { display: flex; flex-direction: column; gap: 5px; font-size: 12px; color: #cbd5e1; }
.field-group input { width: 100%; padding: 9px 11px; border-radius: 8px; border: 1px solid #334155; background: #090d16; color: #fff; box-sizing: border-box; }
.pass-row { position: relative; display: flex; align-items: center; }
.pass-row input { padding-right: 74px; }
.eye-btn { position: absolute; right: 6px; padding: 4px 8px; font-size: 11px; border-radius: 6px; border: 1px solid #334155; background: #1e293b; color: #94a3b8; cursor: pointer; }
.login-btn { padding: 10px; border-radius: 8px; border: none; background: #38bdf8; color: #090d16; font-weight: 700; cursor: pointer; }
.login-msg { font-size: 12px; color: #6ee7b7; background: rgba(16,185,129,0.15); padding: 8px; border-radius: 6px; }`,
    js: `const pass = document.getElementById('pass-inp');
const eye = document.getElementById('eye-btn');
const form = document.getElementById('login-form');
const msg = document.getElementById('login-msg');
eye.onclick = () => {
  pass.type = pass.type === 'password' ? 'text' : 'password';
  eye.textContent = pass.type === 'password' ? 'Показать' : 'Скрыть';
};
form.onsubmit = (e) => {
  e.preventDefault();
  msg.hidden = false;
  msg.textContent = '✓ Авторизация успешна!';
};`
  },
  {
    id: 'register-strength-card',
    title: 'Форма регистрации с индикатором силы пароля',
    desc: 'Интерактивная регистрация с живым прогресс-баром надёжности пароля по 4 критериям безопасности.',
    tags: ['Регистрация', 'Password Meter', 'Forms'],
    html: `<div class="reg-box">
  <h3>Регистрация</h3>
  <input type="text" placeholder="Ваше имя" value="Павел" />
  <input type="text" id="pw" value="DevShelf#2026" placeholder="Придумайте пароль" />
  <div class="bar"><div id="bar-fill" class="bar-fill"></div></div>
  <small id="pw-hint">Надёжный пароль</small>
</div>`,
    css: `body { background: #090d16; color: #f8fafc; font-family: system-ui, sans-serif; display: grid; place-items: center; min-height: 88vh; margin: 0; }
.reg-box { background: #131c2e; border: 1px solid #263449; border-radius: 14px; padding: 20px; width: 310px; display: flex; flex-direction: column; gap: 10px; }
.reg-box h3 { margin: 0; font-size: 17px; }
.reg-box input { padding: 9px 11px; border-radius: 8px; border: 1px solid #334155; background: #090d16; color: #fff; }
.bar { height: 6px; background: #1e293b; border-radius: 99px; overflow: hidden; }
.bar-fill { height: 100%; width: 100%; background: #10b981; transition: 0.25s; }
small { color: #94a3b8; font-size: 12px; }`,
    js: `const pw = document.getElementById('pw');
const fill = document.getElementById('bar-fill');
const hint = document.getElementById('pw-hint');
pw.oninput = () => {
  const v = pw.value;
  let s = (v.length >= 8) + /[A-ZА-Я]/.test(v) + /[0-9]/.test(v) + /[^A-Za-zА-Яа-я0-9]/.test(v);
  fill.style.width = (s * 25) + '%';
  fill.style.background = ['#ef4444','#f59e0b','#38bdf8','#10b981'][Math.max(0, s - 1)];
  hint.textContent = ['Слабый','Средний','Хороший','✓ Надёжный пароль'][Math.max(0, s - 1)];
};`
  },
  {
    id: 'bento-grid',
    title: 'Адаптивная Bento-сетка (CSS Grid)',
    desc: 'Современная сетка карточек в стиле Apple / Linear на чистом CSS Grid с объединением ячеек и плавным ховером.',
    tags: ['CSS Grid', 'Bento UI', 'Responsive'],
    html: `<div class="bento-grid">
  <article class="bento-card bento-wide">
    <span class="tag">Главный модуль</span>
    <h3>Аналитика в реальном времени</h3>
    <p>Автоматическая агрегация метрик без задержек и внешних зависимостей.</p>
  </article>
  <article class="bento-card">
    <span class="tag">Uptime</span>
    <div class="metric">99.98%</div>
    <p>Стабильность кластера</p>
  </article>
  <article class="bento-card">
    <span class="tag">Скорость</span>
    <div class="metric">14 ms</div>
    <p>Средний отклик API</p>
  </article>
</div>`,
    css: `body { background: #090d16; color: #f1f5f9; font-family: system-ui, sans-serif; padding: 14px; margin: 0; }
.bento-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; }
.bento-card { background: linear-gradient(180deg, #162032, #0f1623); border: 1px solid rgba(148, 163, 184, 0.16); border-radius: 12px; padding: 14px; }
.bento-wide { grid-column: span 2; }
.tag { font-size: 10px; color: #38bdf8; text-transform: uppercase; font-weight: 700; }
.metric { font-size: 24px; font-weight: 800; margin: 6px 0 2px; color: #f8fafc; }
h3 { margin: 6px 0 4px; font-size: 15px; }
p { margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.4; }`,
    js: `console.log('Bento Grid инициализирована');`
  },
  {
    id: 'native-modal',
    title: 'Модальное окно на нативном <dialog>',
    desc: 'Доступное диалоговое окно без сторонних библиотек: закрытие по клавише Esc и клик по фону.',
    tags: ['HTML5 <dialog>', 'A11y', 'Vanilla JS'],
    html: `<div class="center-box">
  <button id="open-modal" class="primary-btn">Открыть модальное окно</button>
</div>
<dialog id="demo-dialog" class="custom-dialog" open>
  <div class="dialog-content">
    <h3>Подтверждение деплоя</h3>
    <p>Вы собираетесь выпустить версию <strong>v2.4.0</strong> в продакшен.</p>
    <div class="dialog-actions">
      <button id="close-modal" class="ghost-btn">Отмена</button>
      <button id="confirm-modal" class="primary-btn">Опубликовать</button>
    </div>
  </div>
</dialog>`,
    css: `body { background: #0f172a; color: #f8fafc; font-family: system-ui, sans-serif; display: grid; place-items: center; min-height: 85vh; margin: 0; }
.primary-btn { background: #38bdf8; color: #090d16; border: none; padding: 8px 14px; border-radius: 8px; font-weight: 700; cursor: pointer; }
.ghost-btn { background: transparent; color: #94a3b8; border: 1px solid #334155; padding: 8px 12px; border-radius: 8px; cursor: pointer; }
.custom-dialog { background: #1e293b; color: #f8fafc; border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 14px; padding: 0; max-width: 340px; width: 90%; }
.dialog-content { padding: 18px; }
.dialog-content h3 { margin: 0 0 6px; font-size: 16px; }
.dialog-content p { color: #cbd5e1; line-height: 1.45; margin-bottom: 14px; font-size: 12.5px; }
.dialog-actions { display: flex; justify-content: flex-end; gap: 8px; }`,
    js: `const dialog = document.getElementById('demo-dialog');
document.getElementById('open-modal').onclick = () => dialog.showModal();
document.getElementById('close-modal').onclick = () => dialog.close();
document.getElementById('confirm-modal').onclick = () => dialog.close();`
  },
  {
    id: 'floating-input',
    title: 'Поле ввода с плавающим лейблом (:placeholder-shown)',
    desc: 'Чистый CSS-паттерн плавающего заголовка поля ввода без единой строчки JavaScript.',
    tags: ['CSS Forms', ':placeholder-shown', 'UX'],
    html: `<form class="auth-card" onsubmit="event.preventDefault()">
  <h3>Быстрая заявка</h3>
  <div class="field">
    <input type="email" id="email" placeholder=" " value="dev@devshelf.ru" required />
    <label for="email">Рабочий Email</label>
  </div>
  <button type="submit">Отправить →</button>
</form>`,
    css: `body { background: #090d16; color: #f8fafc; font-family: system-ui, sans-serif; display: grid; place-items: center; min-height: 85vh; margin: 0; }
.auth-card { background: #131c2e; border: 1px solid #263449; padding: 20px; border-radius: 14px; width: 300px; display: flex; flex-direction: column; gap: 12px; }
.auth-card h3 { margin: 0; font-size: 16px; }
.field { position: relative; }
.field input { width: 100%; padding: 18px 12px 6px; border-radius: 8px; border: 1px solid #334155; background: #0b101b; color: #fff; font-size: 14px; outline: none; box-sizing: border-box; }
.field label { position: absolute; left: 12px; top: 12px; color: #64748b; font-size: 13px; pointer-events: none; transition: 0.16s ease; }
.field input:focus + label, .field input:not(:placeholder-shown) + label { top: 4px; font-size: 10px; color: #38bdf8; }
button { background: #38bdf8; color: #090d16; border: none; padding: 9px; border-radius: 8px; font-weight: 700; cursor: pointer; }`,
    js: `console.log('Плавающий лейбл готов');`
  },
  {
    id: 'skeleton-loader',
    title: 'Skeleton-загрузчик карточек (Shimmer-эффект)',
    desc: 'Плавная анимация загрузки контента через линейный градиент и @keyframes с переключением состояния.',
    tags: ['CSS Animation', 'Skeleton UI', 'UX'],
    html: `<div class="card-wrap">
  <button id="toggle-load" class="btn">Переключить загрузку</button>
  <div id="card" class="profile-card loading">
    <div class="avatar skel"></div>
    <div class="info">
      <div class="line line-lg skel">Алексей Соколов</div>
      <div class="line line-sm skel">Principal Frontend Architect</div>
    </div>
  </div>
</div>`,
    css: `body { background: #090d16; color: #f8fafc; font-family: system-ui, sans-serif; display: grid; place-items: center; min-height: 85vh; margin: 0; }
.card-wrap { display: flex; flex-direction: column; gap: 10px; width: 300px; }
.btn { background: #1e293b; color: #38bdf8; border: 1px solid #334155; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-weight: 600; }
.profile-card { background: #131c2e; border: 1px solid #263449; border-radius: 14px; padding: 14px; display: flex; align-items: center; gap: 12px; }
.avatar { width: 48px; height: 48px; border-radius: 50%; background: #38bdf8; flex-shrink: 0; }
.info { flex: 1; display: flex; flex-direction: column; gap: 6px; }
.line-lg { font-weight: 700; font-size: 14px; }
.line-sm { color: #94a3b8; font-size: 12px; }
.loading .skel { color: transparent !important; background: linear-gradient(90deg, #1e293b 25%, #334155 50%, #1e293b 75%); background-size: 200% 100%; animation: shimmer 1.4s infinite; border-radius: 6px; }
.loading .avatar.skel { border-radius: 50%; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`,
    js: `document.getElementById('toggle-load').onclick = () => document.getElementById('card').classList.toggle('loading');`
  },
  {
    id: 'glass-navbar',
    title: 'Липкий Glassmorphism Navbar со статусом',
    desc: 'Полупрозрачная шапка сайта с размытием фона backdrop-filter: blur(16px) и адаптивным меню.',
    tags: ['Glassmorphism', 'Navbar', 'Sticky'],
    html: `<header class="glass-nav">
  <div class="logo">⚡ DevCloud</div>
  <nav class="links">
    <a href="#features" class="active">Платформа</a>
    <a href="#docs">Доки</a>
  </nav>
  <button class="cta">Консоль →</button>
</header>
<main class="hero-mock">
  <h4>Полупрозрачная навигация</h4>
  <p>Эффект матового стекла достигается сочетанием полупрозрачного фона и backdrop-filter: blur(16px).</p>
</main>`,
    css: `body { background: radial-gradient(circle at 20% 20%, #1e3a8a, #090d16 70%); color: #f8fafc; font-family: system-ui, sans-serif; margin: 0; padding: 14px; }
.glass-nav { display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; border-radius: 12px; background: rgba(15, 23, 42, 0.65); backdrop-filter: blur(16px); border: 1px solid rgba(148, 163, 184, 0.2); }
.logo { font-weight: 800; font-size: 14px; color: #38bdf8; }
.links { display: flex; gap: 12px; }
.links a { color: #94a3b8; text-decoration: none; font-size: 12.5px; font-weight: 600; }
.links a.active { color: #fff; }
.cta { background: #38bdf8; color: #090d16; border: none; padding: 6px 10px; border-radius: 7px; font-weight: 700; font-size: 12px; cursor: pointer; }
.hero-mock { margin-top: 14px; padding: 14px; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); }
.hero-mock h4 { margin: 0 0 4px; font-size: 14px; }
.hero-mock p { margin: 0; font-size: 12px; color: #cbd5e1; }`,
    js: `console.log('Glassmorphism Navbar активен');`
  },
  {
    id: 'pricing-toggle',
    title: 'Тарифная карточка с переключателем Месяц / Год',
    desc: 'Интерактивный компонент тарифов с пересчётом скидки 20% на чистом JavaScript.',
    tags: ['Pricing UI', 'Interactive JS', 'SaaS'],
    html: `<div class="pricing-box">
  <div class="billing-switch">
    <span>Помесячно</span>
    <input type="checkbox" id="bill-toggle" checked />
    <label for="bill-toggle">Годовой (-20%)</label>
  </div>
  <div class="plan-card">
    <span class="plan-badge">PRO КОМАНДА</span>
    <div class="price"><span id="price-val">1 990 ₽</span> <small>/ мес</small></div>
    <button class="sub-btn">Выбрать тариф</button>
  </div>
</div>`,
    css: `body { background: #090d16; color: #f8fafc; font-family: system-ui, sans-serif; display: grid; place-items: center; min-height: 85vh; margin: 0; }
.pricing-box { width: 290px; display: flex; flex-direction: column; gap: 10px; }
.billing-switch { display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 12.5px; color: #94a3b8; }
.plan-card { background: linear-gradient(165deg, #1e293b, #0f172a); border: 1px solid #38bdf8; border-radius: 14px; padding: 16px; text-align: center; }
.plan-badge { font-size: 10px; font-weight: 800; color: #38bdf8; }
.price { font-size: 26px; font-weight: 800; margin: 8px 0 12px; }
.price small { font-size: 12px; color: #94a3b8; }
.sub-btn { width: 100%; background: #38bdf8; color: #090d16; border: none; padding: 9px; border-radius: 8px; font-weight: 700; cursor: pointer; }`,
    js: `const toggle = document.getElementById('bill-toggle');
const priceVal = document.getElementById('price-val');
toggle.onchange = () => { priceVal.textContent = toggle.checked ? '1 990 ₽' : '2 490 ₽'; };`
  },
  {
    id: 'accordion-details',
    title: 'Нативный FAQ-аккордеон (<details> + <summary>)',
    desc: 'Семантический аккордеон вопросов и ответов с группировкой name="" без единой строчки JavaScript.',
    tags: ['HTML5 <details>', 'Zero-JS', 'FAQ'],
    html: `<div class="faq-list">
  <details name="faq" open>
    <summary>Как работает группировка аккордеона?</summary>
    <p>Одинаковый атрибут <code>name="faq"</code> автоматически закрывает предыдущий блок при открытии нового.</p>
  </details>
  <details name="faq">
    <summary>Нужен ли JavaScript для работы?</summary>
    <p>Нет, браузер обрабатывает раскрытие и доступность нативно.</p>
  </details>
</div>`,
    css: `body { background: #090d16; color: #f8fafc; font-family: system-ui, sans-serif; padding: 14px; margin: 0; }
.faq-list { display: flex; flex-direction: column; gap: 8px; max-width: 420px; margin: 0 auto; }
details { background: #131c2e; border: 1px solid #263449; border-radius: 10px; padding: 10px 14px; }
details[open] { border-color: #38bdf8; }
summary { font-weight: 700; font-size: 13px; cursor: pointer; color: #f1f5f9; }
details p { margin: 8px 0 0; font-size: 12px; color: #94a3b8; line-height: 1.45; }
code { color: #38bdf8; font-family: monospace; }`,
    js: `console.log('FAQ-аккордеон инициализирован');`
  },
  {
    id: 'toast-notification',
    title: 'Система всплывающих Toast-уведомлений',
    desc: 'Генератор неблокирующих уведомлений со статусами Success / Warning.',
    tags: ['Toast UI', 'Notifications', 'DOM API'],
    html: `<div class="toast-demo">
  <div class="btn-row">
    <button id="btn-ok" class="btn-success">+ Успех</button>
    <button id="btn-warn" class="btn-warn">! Внимание</button>
  </div>
  <div id="toast-stack" class="toast-stack"></div>
</div>`,
    css: `body { background: #090d16; color: #f8fafc; font-family: system-ui, sans-serif; padding: 14px; margin: 0; }
.btn-row { display: flex; gap: 8px; margin-bottom: 12px; }
button { border: none; padding: 7px 12px; border-radius: 8px; font-weight: 700; font-size: 12px; cursor: pointer; }
.btn-success { background: #10b981; color: #052e16; }
.btn-warn { background: #f59e0b; color: #451a03; }
.toast-stack { display: flex; flex-direction: column; gap: 6px; }
.toast { padding: 9px 12px; border-radius: 8px; font-size: 12.5px; background: #1e293b; border-left: 4px solid #10b981; display: flex; justify-content: space-between; }
.toast.warn { border-left-color: #f59e0b; }`,
    js: `const stack = document.getElementById('toast-stack');
function spawnToast(text, type = 'ok') {
  const el = document.createElement('div');
  el.className = 'toast ' + (type === 'warn' ? 'warn' : '');
  el.innerHTML = '<span>' + text + '</span><small style="color:#64748b">сейчас</small>';
  stack.prepend(el);
  if (stack.children.length > 3) stack.lastElementChild.remove();
}
document.getElementById('btn-ok').onclick = () => spawnToast('Изменения сохранены');
document.getElementById('btn-warn').onclick = () => spawnToast('Проверьте поля', 'warn');
spawnToast('Готово к тестированию');`
  }
];

function initTheme() {
  const saved = localStorage.getItem('devshelf-theme') || 'dark';
  const cleanSaved = saved.replace(/"/g, '');
  document.documentElement.classList.toggle('dark', cleanSaved !== 'light');
  document.documentElement.classList.toggle('light', cleanSaved === 'light');
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    const next = isDark ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.classList.toggle('light', next === 'light');
    localStorage.setItem('devshelf-theme', JSON.stringify(next));
  });
}

function setMode(mode) {
  activeMode = mode;
  document.querySelectorAll('.mode-tab').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  document.querySelectorAll('.workspace-view').forEach((view) => {
    view.classList.toggle('active', view.id === `view-${mode}`);
  });
  if (mode === 'generators') {
    updateActiveGenerator();
  } else if (mode === 'editor') {
    updateEditor();
    runCode();
  }
}

// Разделение примера справочника на 4 вкладки (HTML, CSS, JS, Слитый)
function parseTopicIntoTabs(topic) {
  codeState.activeTopic = topic;
  if (window.DevShelfPreview && typeof window.DevShelfPreview.splitTopicIntoCodeParts === 'function') {
    const parts = window.DevShelfPreview.splitTopicIntoCodeParts(topic);
    codeState.html = parts.html;
    codeState.css = parts.css;
    codeState.js = parts.js;
    codeState.all = parts.all;
    codeState.activeEditor = topic.lang === 'css' ? 'css' : topic.lang === 'javascript' ? 'js' : 'html';
    return;
  }

  const raw = (topic.example || topic.code || '').trim();
  codeState.html = raw;
  codeState.css = '';
  codeState.js = '';
  syncMergedCodeFromParts();
  codeState.activeEditor = 'html';
}

// Пункт 2 ТЗ: надёжный поиск по всем 276 темам в песочнице с ранжированием релевантности
function getFilteredTopics() {
  const q = searchQuery.trim().toLowerCase();
  let pool = [];

  if (currentLang === 'all' || q.length > 0) {
    // При вводе поискового запроса или вкладке «Все» ищем по всей базе из 276 тем
    pool = allTopicsList.length
      ? allTopicsList
      : Object.values(referenceData).flat();
    if (currentLang !== 'all' && !q) {
      pool = pool.filter(t => t.lang === currentLang);
    }
  } else {
    pool = referenceData[currentLang] || [];
  }

  if (!q) return pool;

  const matches = pool.filter((t) => {
    const hay = `${t.id || ''} ${t.title || ''} ${t.summary || ''} ${(t.tags || []).join(' ')} ${t.when || ''}`.toLowerCase();
    return hay.includes(q);
  });

  matches.sort((a, b) => {
    const score = (item) => {
      let s = 0;
      const titleL = (item.title || '').toLowerCase();
      const tagsL = (item.tags || []).map(x => x.toLowerCase());
      if ((item.id || '').toLowerCase() === q || tagsL.includes(q)) s += 100;
      if (titleL.includes(q)) s += 60;
      if (tagsL.some(x => x.includes(q))) s += 35;
      return s;
    };
    return score(b) - score(a);
  });

  return matches;
}

function renderSidebar() {
  document.querySelectorAll('.seg-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  const listEl = document.getElementById('topic-list');
  const countEl = document.getElementById('sidebar-count');
  const topics = getFilteredTopics();

  if (countEl) {
    countEl.textContent = `${topics.length} тем`;
  }

  if (!topics.length) {
    listEl.innerHTML = `<div style="padding:14px;color:var(--text-muted);font-size:0.82rem;">Ничего не найдено по запросу «${searchQuery.replace(/</g, '&lt;')}»</div>`;
    return;
  }

  listEl.innerHTML = topics
    .map(
      (t) => `
      <button type="button" class="topic-item ${t.id === currentTopicId ? 'active' : ''}" data-id="${t.id}">
        <strong>${(t.title || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</strong>
        <span>${(t.summary || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
      </button>
    `
    )
    .join('');

  listEl.querySelectorAll('.topic-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const found = allTopicsList.find((item) => item.id === btn.dataset.id)
        || Object.values(referenceData).flat().find((item) => item.id === btn.dataset.id);
      if (found) {
        currentTopicId = found.id;
        loadTopicIntoSandbox(found);
        renderSidebar();
      }
    });
  });
}

function loadTopicIntoSandbox(topic) {
  parseTopicIntoTabs(topic);
  const langMap = {
    html: 'HTML5',
    css: 'CSS3',
    javascript: 'JS',
    php: 'PHP 8',
    xml: 'SEO & XML',
    recipes: 'UI Рецепт',
    frameworks: 'Фреймворк'
  };
  document.getElementById('topic-lang').textContent = langMap[topic.lang || currentLang] || (topic.lang || 'CODE').toUpperCase();
  document.getElementById('topic-title').textContent = topic.title;
  document.getElementById('topic-summary').textContent = topic.summary;

  const pointsEl = document.getElementById('topic-points');
  pointsEl.innerHTML = (topic.points || [])
    .map((p) => `<li>${p.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</li>`)
    .join('');

  const backLink = document.getElementById('back-to-topic');
  if (backLink) {
    backLink.href = `index.html?topic=${encodeURIComponent(topic.id)}`;
  }

  updateEditor();
  runCode();
}

function updateEditor() {
  document.querySelectorAll('.ed-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.editor === codeState.activeEditor);
  });
  const editor = document.getElementById('code-editor');
  if (editor) {
    if (codeState.activeEditor === 'all') {
      syncMergedCodeFromParts();
    }
    editor.value = codeState[codeState.activeEditor] || '';
  }
}

function buildCombinedHtml() {
  const activeTopic = codeState.activeTopic;
  if (
    activeTopic &&
    (activeTopic.lang === 'php' || activeTopic.lang === 'xml' || activeTopic.lang === 'frameworks') &&
    window.DevShelfPreview
  ) {
    return window.DevShelfPreview.buildTopicPreviewDoc(activeTopic, codeState.html);
  }

  return `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<style>${codeState.css}</style>
</head>
<body>
${codeState.html}
<script>
(function() {
  const send = (type, args) => {
    try {
      window.parent.postMessage({
        source: 'devshelf-sandbox',
        type,
        text: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')
      }, '*');
    } catch (e) {}
  };
  const origLog = console.log;
  const origErr = console.error;
  console.log = (...args) => { origLog(...args); send('log', args); };
  console.error = (...args) => { origErr(...args); send('error', args); };
  window.addEventListener('error', (e) => send('error', [e.message]));
})();
<\/script>
<script>
try {
${codeState.js}
} catch (err) {
  console.error(err.message);
}
<\/script>
</body>
</html>`;
}

function runCode() {
  const preview = document.getElementById('preview');
  if (!preview) return;
  preview.srcdoc = buildCombinedHtml();
}

window.addEventListener('message', (event) => {
  if (!event.data || event.data.source !== 'devshelf-sandbox') return;
  const out = document.getElementById('console-output');
  if (!out) return;
  const empty = out.querySelector('.console-empty');
  if (empty) empty.remove();

  const line = document.createElement('div');
  line.className = `console-line ${event.data.type === 'error' ? 'error' : ''}`;
  line.textContent = `> ${event.data.text}`;
  out.appendChild(line);
  out.scrollTop = out.scrollHeight;
});

/* ==========================================
   8 ВИЗУАЛЬНЫХ ГЕНЕРАТОРОВ CSS
   ========================================== */
let activeGenerator = 'flexbox';
let lastGeneratedSnippet = { html: '', css: '' };

const GEN_LABELS = {
  flexbox: '1. Flexbox Конструктор',
  grid: '2. CSS Grid Сетка',
  shadow: '3. Тени & Glassmorphism',
  gradient: '4. Генератор Градиентов',
  transform: '5. 2D/3D Transform & Transition',
  radius: '6. Border-Radius & Формы',
  clamp: '7. Резиновая типографика clamp()',
  filter: '8. Графические CSS-фильтры'
};

function updateActiveGenerator() {
  const stage = document.getElementById('gen-stage');
  const cssOut = document.getElementById('gen-css-output');
  const labelEl = document.getElementById('gen-active-label');
  if (!stage || !cssOut) return;
  if (labelEl) labelEl.textContent = GEN_LABELS[activeGenerator] || 'Визуальный генератор';

  if (activeGenerator === 'flexbox') {
    const dir = document.getElementById('flex-dir').value;
    const justify = document.getElementById('flex-justify').value;
    const align = document.getElementById('flex-align').value;
    const wrap = document.getElementById('flex-wrap').value;
    const gap = document.getElementById('flex-gap').value;
    const count = Number(document.getElementById('flex-count').value);

    const isAutoSpace = ['space-between', 'space-around', 'space-evenly'].includes(justify);
    const gapGroup = document.getElementById('flex-gap-group');
    const gapNotice = document.getElementById('flex-gap-notice');
    const modeName = document.getElementById('flex-justify-mode-name');

    if (gapGroup) gapGroup.style.display = isAutoSpace ? 'none' : 'flex';
    if (gapNotice) {
      gapNotice.hidden = !isAutoSpace;
      if (modeName) modeName.textContent = justify;
    }

    document.getElementById('flex-gap-val').textContent = `${gap}px`;
    document.getElementById('flex-count-val').textContent = String(count);

    const itemsHtml = Array.from({ length: count }, (_, i) => `<div class="gen-item" style="min-height:${i % 2 === 0 ? 54 : 74}px">#${i + 1}</div>`).join('\n  ');
    const gapStyle = isAutoSpace ? '' : `gap:${gap}px;`;
    stage.innerHTML = `<div class="gen-demo-box" style="display:flex;flex-direction:${dir};justify-content:${justify};align-items:${align};flex-wrap:${wrap};${gapStyle}">${itemsHtml}</div>`;

    const cssLines = [
      `.flex-container {`,
      `  display: flex;`,
      `  flex-direction: ${dir};`,
      `  justify-content: ${justify};`,
      `  align-items: ${align};`,
      `  flex-wrap: ${wrap};`
    ];
    if (!isAutoSpace) {
      cssLines.push(`  gap: ${gap}px;`);
    } else {
      cssLines.push(`  /* Отступы рассчитываются автоматически за счёт ${justify} */`);
    }
    cssLines.push(`}`);

    const css = cssLines.join('\n');
    cssOut.textContent = css;
    lastGeneratedSnippet = {
      html: `<div class="flex-container">\n  ${itemsHtml}\n</div>`,
      css: `${css}\n.gen-item {\n  background: linear-gradient(135deg, #38bdf8, #6366f1);\n  color: #fff;\n  padding: 18px 24px;\n  border-radius: 10px;\n  font-weight: 700;\n}`
    };
  } else if (activeGenerator === 'grid') {
    const mode = document.getElementById('grid-mode').value;
    const cols = document.getElementById('grid-cols').value;
    const minW = document.getElementById('grid-min').value;
    const gap = document.getElementById('grid-gap').value;
    const count = Number(document.getElementById('grid-items').value);

    document.getElementById('grid-cols-val').textContent = cols;
    document.getElementById('grid-min-val').textContent = `${minW}px`;
    document.getElementById('grid-gap-val').textContent = `${gap}px`;
    document.getElementById('grid-items-val').textContent = String(count);

    let templateCols = `repeat(${cols}, 1fr)`;
    if (mode === 'autofit') templateCols = `repeat(auto-fit, minmax(${minW}px, 1fr))`;
    if (mode === 'sidebar') templateCols = `180px 1fr`;
    if (mode === 'holy') templateCols = `140px 1fr 140px`;

    const itemsHtml = Array.from({ length: count }, (_, i) => `<div class="gen-item">Ячейка ${i + 1}</div>`).join('\n  ');
    stage.innerHTML = `<div class="gen-demo-box" style="display:grid;grid-template-columns:${templateCols};gap:${gap}px;">${itemsHtml}</div>`;

    const css = `.grid-container {\n  display: grid;\n  grid-template-columns: ${templateCols};\n  gap: ${gap}px;\n}`;
    cssOut.textContent = css;
    lastGeneratedSnippet = {
      html: `<div class="grid-container">\n  ${itemsHtml}\n</div>`,
      css: `${css}\n.gen-item {\n  background: linear-gradient(135deg, #38bdf8, #6366f1);\n  color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n  font-weight: 700;\n}`
    };
  } else if (activeGenerator === 'shadow') {
    const x = document.getElementById('sh-x').value;
    const y = document.getElementById('sh-y').value;
    const blur = document.getElementById('sh-blur').value;
    const spread = document.getElementById('sh-spread').value;
    const alpha = document.getElementById('sh-alpha').value;
    const glass = document.getElementById('sh-glass').value;
    const radius = document.getElementById('sh-radius').value;

    document.getElementById('sh-x-val').textContent = `${x}px`;
    document.getElementById('sh-y-val').textContent = `${y}px`;
    document.getElementById('sh-blur-val').textContent = `${blur}px`;
    document.getElementById('sh-spread-val').textContent = `${spread}px`;
    document.getElementById('sh-alpha-val').textContent = alpha;
    document.getElementById('sh-glass-val').textContent = `${glass}px`;
    document.getElementById('sh-radius-val').textContent = `${radius}px`;

    const boxShadow = `${x}px ${y}px ${blur}px ${spread}px rgba(2, 6, 23, ${alpha})`;
    stage.innerHTML = `
      <div style="position:relative;width:100%;max-width:420px;display:grid;place-items:center;padding:30px;">
        <div style="position:absolute;width:130px;height:130px;border-radius:50%;background:#38bdf8;left:18%;top:12%;filter:blur(24px);opacity:0.45;"></div>
        <div style="position:absolute;width:130px;height:130px;border-radius:50%;background:#6366f1;right:18%;bottom:12%;filter:blur(24px);opacity:0.45;"></div>
        <div style="position:relative;z-index:2;padding:28px;width:100%;background:rgba(30, 41, 59, 0.55);backdrop-filter:blur(${glass}px);-webkit-backdrop-filter:blur(${glass}px);border:1px solid rgba(255,255,255,0.16);border-radius:${radius}px;box-shadow:${boxShadow};color:#f8fafc;">
          <strong style="font-size:1.1rem;display:block;margin-bottom:6px;">Glassmorphism Card</strong>
          <p style="font-size:0.86rem;color:#cbd5e1;line-height:1.5;">Матовое стекло с настраиваемой глубиной размытия и многослойной тенью.</p>
        </div>
      </div>
    `;

    const css = `.glass-card {\n  background: rgba(30, 41, 59, 0.55);\n  backdrop-filter: blur(${glass}px);\n  -webkit-backdrop-filter: blur(${glass}px);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: ${radius}px;\n  box-shadow: ${boxShadow};\n}`;
    cssOut.textContent = css;
    lastGeneratedSnippet = {
      html: `<div class="glass-card">\n  <h3>Glassmorphism Card</h3>\n  <p>Настроенная карточка с эффектом матового стекла.</p>\n</div>`,
      css: `body { background: radial-gradient(circle at 30% 30%, #1e3a8a, #090d16); color: #fff; display: grid; place-items: center; min-height: 90vh; font-family: sans-serif; }\n${css}\n.glass-card { padding: 28px; max-width: 360px; }`
    };
  } else if (activeGenerator === 'gradient') {
    const type = document.getElementById('grad-type').value;
    const angle = document.getElementById('grad-angle').value;
    const c1 = document.getElementById('grad-c1').value;
    const c2 = document.getElementById('grad-c2').value;
    const c3 = document.getElementById('grad-c3').value;

    document.getElementById('grad-angle-val').textContent = `${angle}deg`;
    const angleGroup = document.getElementById('grad-angle-group');
    if (angleGroup) angleGroup.style.display = type === 'radial' ? 'none' : 'flex';

    let bgValue = `linear-gradient(${angle}deg, ${c1} 0%, ${c2} 50%, ${c3} 100%)`;
    if (type === 'radial') bgValue = `radial-gradient(circle at center, ${c1} 0%, ${c2} 55%, ${c3} 100%)`;
    if (type === 'conic') bgValue = `conic-gradient(from ${angle}deg at 50% 50%, ${c1}, ${c2}, ${c3}, ${c1})`;

    stage.innerHTML = `
      <div style="width:100%;max-width:480px;height:220px;border-radius:18px;background:${bgValue};display:flex;align-items:center;justify-content:center;box-shadow:0 20px 40px -15px rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.2);">
        <span style="background:rgba(9,13,22,0.75);backdrop-filter:blur(8px);padding:10px 18px;border-radius:999px;color:#fff;font-family:monospace;font-size:13px;font-weight:700;">${type}-gradient</span>
      </div>
    `;

    const css = `.gradient-surface {\n  background: ${bgValue};\n  border-radius: 18px;\n}`;
    cssOut.textContent = css;
    lastGeneratedSnippet = {
      html: `<div class="gradient-surface">\n  <h2>Современный CSS-градиент</h2>\n</div>`,
      css: `body { background: #090d16; color: #fff; display: grid; place-items: center; min-height: 90vh; font-family: sans-serif; }\n${css}\n.gradient-surface { width: 380px; height: 220px; display: grid; place-items: center; }`
    };
  } else if (activeGenerator === 'transform') {
    const scale = document.getElementById('tr-scale').value;
    const rotate = document.getElementById('tr-rotate').value;
    const tx = document.getElementById('tr-tx').value;
    const ty = document.getElementById('tr-ty').value;
    const skew = document.getElementById('tr-skew').value;
    const dur = document.getElementById('tr-dur').value;

    document.getElementById('tr-scale-val').textContent = scale;
    document.getElementById('tr-rotate-val').textContent = `${rotate}deg`;
    document.getElementById('tr-tx-val').textContent = `${tx}px`;
    document.getElementById('tr-ty-val').textContent = `${ty}px`;
    document.getElementById('tr-skew-val').textContent = `${skew}deg`;
    document.getElementById('tr-dur-val').textContent = `${dur}ms`;

    const trVal = `translate(${tx}px, ${ty}px) scale(${scale}) rotate(${rotate}deg) skewX(${skew}deg)`;
    stage.innerHTML = `
      <div style="padding:36px;display:grid;place-items:center;">
        <div style="width:240px;padding:24px;border-radius:16px;background:linear-gradient(135deg,#38bdf8,#6366f1);color:#fff;text-align:center;font-weight:700;transform:${trVal};transition:transform ${dur}ms cubic-bezier(0.22, 1, 0.36, 1);box-shadow:0 20px 35px -12px rgba(56,189,248,0.45);">
          Transform Card
          <div style="font-size:12px;opacity:0.85;margin-top:6px;font-family:monospace;">scale(${scale}) rotate(${rotate}°)</div>
        </div>
      </div>
    `;

    const css = `.interactive-card {\n  transform: ${trVal};\n  transition: transform ${dur}ms cubic-bezier(0.22, 1, 0.36, 1);\n  will-change: transform;\n}`;
    cssOut.textContent = css;
    lastGeneratedSnippet = {
      html: `<div class="interactive-card">Наведите или измените параметры Transform</div>`,
      css: `body { background: #090d16; color: #fff; display: grid; place-items: center; min-height: 90vh; font-family: sans-serif; }\n${css}\n.interactive-card { padding: 28px 36px; border-radius: 16px; background: linear-gradient(135deg, #38bdf8, #6366f1); font-weight: 700; }`
    };
  } else if (activeGenerator === 'radius') {
    const tl = document.getElementById('rad-tl').value;
    const tr = document.getElementById('rad-tr').value;
    const br = document.getElementById('rad-br').value;
    const bl = document.getElementById('rad-bl').value;
    const bw = document.getElementById('rad-bw').value;

    document.getElementById('rad-tl-val').textContent = `${tl}px`;
    document.getElementById('rad-tr-val').textContent = `${tr}px`;
    document.getElementById('rad-br-val').textContent = `${br}px`;
    document.getElementById('rad-bl-val').textContent = `${bl}px`;
    document.getElementById('rad-bw-val').textContent = `${bw}px`;

    const radVal = `${tl}px ${tr}px ${br}px ${bl}px`;
    stage.innerHTML = `
      <div style="width:260px;height:200px;background:linear-gradient(135deg,rgba(56,189,248,0.22),rgba(99,102,241,0.28));border:${bw}px solid #38bdf8;border-radius:${radVal};display:grid;place-items:center;color:#f8fafc;font-family:monospace;font-size:14px;font-weight:700;">
        ${radVal}
      </div>
    `;

    const css = `.shaped-box {\n  border-radius: ${radVal};\n  border: ${bw}px solid #38bdf8;\n}`;
    cssOut.textContent = css;
    lastGeneratedSnippet = {
      html: `<div class="shaped-box">${radVal}</div>`,
      css: `body { background: #090d16; color: #fff; display: grid; place-items: center; min-height: 90vh; font-family: monospace; }\n${css}\n.shaped-box { width: 260px; height: 200px; display: grid; place-items: center; background: #1e293b; }`
    };
  } else if (activeGenerator === 'clamp') {
    const minRem = document.getElementById('cl-min').value;
    const vw = document.getElementById('cl-vw').value;
    const maxRem = document.getElementById('cl-max').value;
    const lh = document.getElementById('cl-lh').value;

    document.getElementById('cl-min-val').textContent = `${minRem}rem`;
    document.getElementById('cl-vw-val').textContent = `${vw}vw`;
    document.getElementById('cl-max-val').textContent = `${maxRem}rem`;
    document.getElementById('cl-lh-val').textContent = lh;

    const clampFormula = `clamp(${minRem}rem, 0.5rem + ${vw}vw, ${maxRem}rem)`;
    stage.innerHTML = `
      <div style="width:100%;max-width:620px;padding:20px;border-radius:14px;background:#111827;border:1px solid #263449;">
        <div style="font-size:12px;color:#38bdf8;font-family:monospace;margin-bottom:8px;">font-size: ${clampFormula};</div>
        <h2 style="margin:0;font-size:${clampFormula};line-height:${lh};color:#f8fafc;font-weight:800;">
          Адаптивная типографика без медиа-запросов
        </h2>
      </div>
    `;

    const css = `.fluid-heading {\n  font-size: ${clampFormula};\n  line-height: ${lh};\n  font-weight: 800;\n}`;
    cssOut.textContent = css;
    lastGeneratedSnippet = {
      html: `<h1 class="fluid-heading">Адаптивный заголовок на базе CSS clamp()</h1>`,
      css: `body { background: #090d16; color: #f8fafc; padding: 32px; font-family: system-ui, sans-serif; }\n${css}`
    };
  } else if (activeGenerator === 'filter') {
    const bright = document.getElementById('flt-bright').value;
    const contrast = document.getElementById('flt-contrast').value;
    const sat = document.getElementById('flt-sat').value;
    const hue = document.getElementById('flt-hue').value;
    const blur = document.getElementById('flt-blur').value;

    document.getElementById('flt-bright-val').textContent = `${bright}%`;
    document.getElementById('flt-contrast-val').textContent = `${contrast}%`;
    document.getElementById('flt-sat-val').textContent = `${sat}%`;
    document.getElementById('flt-hue-val').textContent = `${hue}deg`;
    document.getElementById('flt-blur-val').textContent = `${blur}px`;

    const filterStr = `brightness(${bright}%) contrast(${contrast}%) saturate(${sat}%) hue-rotate(${hue}deg) blur(${blur}px)`;
    stage.innerHTML = `
      <div style="filter:${filterStr};width:100%;max-width:440px;padding:26px;border-radius:18px;background:linear-gradient(135deg,#0ea5e9,#6366f1,#ec4899);color:#fff;box-shadow:0 20px 40px -15px rgba(0,0,0,0.6);">
        <span style="background:rgba(0,0,0,0.35);padding:4px 10px;border-radius:6px;font-size:11px;font-weight:700;">CSS FILTER PREVIEW</span>
        <h3 style="margin:12px 0 6px;font-size:22px;">Графическая постобработка</h3>
        <p style="margin:0;font-size:13px;opacity:0.9;">Фильтры применяются на лету к любым изображениям, видео и DOM-карточкам.</p>
      </div>
    `;

    const css = `.filtered-media {\n  filter: ${filterStr};\n  transition: filter 0.2s ease;\n}`;
    cssOut.textContent = css;
    lastGeneratedSnippet = {
      html: `<div class="filtered-media">\n  <h3>Карточка с CSS-фильтром</h3>\n  <p>Настройте яркость, контраст и оттенок.</p>\n</div>`,
      css: `body { background: #090d16; color: #fff; display: grid; place-items: center; min-height: 90vh; font-family: sans-serif; }\n${css}\n.filtered-media { padding: 28px; border-radius: 16px; background: linear-gradient(135deg,#0ea5e9,#6366f1,#ec4899); }`
    };
  }
}

function initGenerators() {
  document.querySelectorAll('.gen-switch-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeGenerator = btn.dataset.gen;
      document.querySelectorAll('.gen-switch-btn').forEach((b) => b.classList.toggle('active', b === btn));
      document.querySelectorAll('.gen-controls').forEach((c) => c.classList.toggle('active', c.id === `ctrl-${activeGenerator}`));
      updateActiveGenerator();
    });
  });

  document.querySelectorAll('.gen-controls input, .gen-controls select').forEach((input) => {
    input.addEventListener('input', updateActiveGenerator);
    input.addEventListener('change', updateActiveGenerator);
  });

  document.getElementById('copy-gen-css')?.addEventListener('click', (e) => {
    const css = document.getElementById('gen-css-output')?.textContent || '';
    navigator.clipboard.writeText(css);
    const btn = e.currentTarget;
    const orig = btn.textContent;
    btn.textContent = '✓ Скопировано!';
    setTimeout(() => (btn.textContent = orig), 1400);
  });

  document.getElementById('open-gen-in-sandbox')?.addEventListener('click', () => {
    codeState.activeTopic = null;
    codeState.html = lastGeneratedSnippet.html;
    codeState.css = lastGeneratedSnippet.css;
    codeState.js = `console.log('Сниппет из визуального генератора загружен');`;
    syncMergedCodeFromParts();
    codeState.activeEditor = 'css';
    document.getElementById('topic-lang').textContent = 'CSS GENERATOR';
    document.getElementById('topic-title').textContent = GEN_LABELS[activeGenerator] || 'Сгенерированный макет';
    document.getElementById('topic-summary').textContent = 'Код перенесён из визуального конструктора.';
    setMode('editor');
  });

  updateActiveGenerator();
}

function buildTemplatePreviewDoc(tpl) {
  return `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<style>${tpl.css}</style>
</head>
<body>
${tpl.html}
<script>
try {
${tpl.js || ''}
} catch (e) {}
<\/script>
</body>
</html>`;
}

function renderTemplates() {
  const grid = document.getElementById('templates-grid');
  if (!grid) return;

  grid.innerHTML = UI_TEMPLATES.map(
    (tpl) => `
    <article class="template-card">
      <div>
        <div class="template-tags" style="margin-bottom:10px;">
          ${tpl.tags.map((t) => `<span class="tpl-tag">${t.replace(/</g, '&lt;')}</span>`).join('')}
        </div>
        <h3>${tpl.title.replace(/</g, '&lt;')}</h3>
        <p>${tpl.desc.replace(/</g, '&lt;')}</p>
      </div>
      <div class="tpl-preview-wrap">
        <iframe class="tpl-preview-frame" data-tpl-id="${tpl.id}" title="Предпросмотр ${tpl.title.replace(/"/g, '&quot;')}"></iframe>
      </div>
      <button type="button" class="btn-primary-sm load-tpl-btn" data-tpl="${tpl.id}" style="align-self:flex-start;padding:8px 14px;">
        Загрузить в песочницу →
      </button>
    </article>
  `
  ).join('');

  grid.querySelectorAll('.tpl-preview-frame').forEach((frame) => {
    const tpl = UI_TEMPLATES.find((item) => item.id === frame.dataset.tplId);
    if (tpl) {
      frame.srcdoc = buildTemplatePreviewDoc(tpl);
    }
  });

  grid.querySelectorAll('.load-tpl-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tpl = UI_TEMPLATES.find((item) => item.id === btn.dataset.tpl);
      if (!tpl) return;
      codeState.activeTopic = null;
      codeState.html = tpl.html;
      codeState.css = tpl.css;
      codeState.js = tpl.js;
      syncMergedCodeFromParts();
      codeState.activeEditor = 'html';
      document.getElementById('topic-lang').textContent = 'UI TEMPLATE';
      document.getElementById('topic-title').textContent = tpl.title;
      document.getElementById('topic-summary').textContent = tpl.desc;
      setMode('editor');
    });
  });
}

function bindEvents() {
  document.querySelectorAll('.mode-tab').forEach((tab) => {
    tab.addEventListener('click', () => setMode(tab.dataset.mode));
  });

  document.querySelectorAll('.seg-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      renderSidebar();
    });
  });

  document.getElementById('topic-search')?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderSidebar();
  });

  document.querySelectorAll('.ed-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const editor = document.getElementById('code-editor');
      if (editor) {
        if (codeState.activeEditor === 'all') {
          syncPartsFromMergedCode(editor.value);
        } else {
          codeState[codeState.activeEditor] = editor.value;
          syncMergedCodeFromParts();
        }
      }
      codeState.activeEditor = tab.dataset.editor;
      updateEditor();
    });
  });

  let debounceTimer;
  document.getElementById('code-editor')?.addEventListener('input', (e) => {
    if (codeState.activeEditor === 'all') {
      codeState.all = e.target.value;
      syncPartsFromMergedCode(e.target.value);
    } else {
      codeState[codeState.activeEditor] = e.target.value;
      syncMergedCodeFromParts();
    }
    if (codeState.activeTopic && (codeState.activeTopic.lang === 'php' || codeState.activeTopic.lang === 'xml') && codeState.activeEditor !== 'html') {
      codeState.activeTopic = null;
    }
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(runCode, 220);
  });

  document.getElementById('run-code')?.addEventListener('click', runCode);

  document.getElementById('reset-code')?.addEventListener('click', () => {
    const found = allTopicsList.find((item) => item.id === currentTopicId);
    if (found) loadTopicIntoSandbox(found);
  });

  document.getElementById('copy-single')?.addEventListener('click', (e) => {
    const editor = document.getElementById('code-editor');
    navigator.clipboard.writeText(editor ? editor.value : '');
    const btn = e.currentTarget;
    const orig = btn.textContent;
    btn.textContent = '✓ Скопировано';
    setTimeout(() => (btn.textContent = orig), 1300);
  });

  document.getElementById('copy-bundle')?.addEventListener('click', (e) => {
    navigator.clipboard.writeText(buildCombinedHtml());
    const btn = e.currentTarget;
    const orig = btn.textContent;
    btn.textContent = '✓ Весь HTML скопирован';
    setTimeout(() => (btn.textContent = orig), 1400);
  });

  document.getElementById('download-bundle')?.addEventListener('click', () => {
    const blob = new Blob([buildCombinedHtml()], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `devshelf-${currentTopicId || 'sandbox'}.html`;
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('clear-console')?.addEventListener('click', () => {
    const out = document.getElementById('console-output');
    if (out) out.innerHTML = `<div class="console-empty">Консоль очищена...</div>`;
  });

  document.querySelectorAll('.vp-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.vp-btn').forEach((b) => b.classList.toggle('active', b === btn));
      const preview = document.getElementById('preview');
      if (preview) preview.style.width = btn.dataset.vp;
    });
  });
}

// Старт
initTheme();
bindEvents();
initGenerators();
renderTemplates();

if (currentTopicId) {
  const initialTopic = allTopicsList.find((t) => t.id === currentTopicId)
    || Object.values(referenceData).flat().find((t) => t.id === currentTopicId);
  if (initialTopic) {
    loadTopicIntoSandbox(initialTopic);
  }
}

renderSidebar();
setMode(activeMode);
