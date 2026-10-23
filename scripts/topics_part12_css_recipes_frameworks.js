// Part 12: Core CSS Fundamentals (border, border-radius, etc.), Auth/UI Recipes, and Modern Frameworks Reference
export const cssRecipesAndFrameworks = [
  // ============================================================================
  // 1. FUNDAMENTAL CSS TOPICS (border, border-radius, outline, box-shadow, etc.)
  // ============================================================================
  {
    id: 'css-border-radius',
    lang: 'css',
    title: 'CSS: скругление углов (border-radius)',
    summary: 'Свойство для скругления одного или всех четырёх углов элемента: от строгих карточек и кнопок до идеальных кругов, капсул (pill) и асимметричных форм.',
    tags: ['css', 'border-radius', 'скругление', 'углы', 'круг', 'pill', 'форма'],
    when: 'Для всех современных UI-компонентов: карточек (6px–14px), кнопок (4px–10px), тегов-капсул (9999px) и круглых аватарок (50%).',
    alternatives: 'Для сложных многоугольников и срезанных индустриальных углов используйте свойство clip-path: polygon(...).',
    points: [
      'Одно значение (border-radius: 12px) задаёт одинаковое скругление для всех 4 углов.',
      'Четыре значения (border-radius: 16px 4px 16px 4px) задают углы по часовой стрелке: верхний-левый, верхний-правый, нижний-правый, нижний-левый.',
      'Значение 50% превращает квадратный блок (с aspect-ratio: 1) в идеальный круг.',
      'Значение 9999px (или 100vmax) создаёт форму капсулы (pill) независимо от ширины и высоты кнопки.',
      'Вложенные карточки: радиус внутреннего блока должен быть равен радиусу внешнего минус padding (r_inner = r_outer - padding).'
    ],
    code: `/* 1. Индустриальная карточка */
.card {
  border-radius: 10px;
  border: 1px solid #3f3f46;
  padding: 14px 18px;
  background: #18181b;
  color: #f4f4f5;
}

/* 2. Кнопка-капсула (Pill) */
.pill-btn {
  border-radius: 9999px;
  padding: 9px 20px;
  background: #facc15;
  color: #09090b;
  font-weight: 800;
  border: none;
  cursor: pointer;
}

/* 3. Круглая аватарка */
.avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #27272a;
  border: 2px solid #facc15;
  color: #facc15;
  display: inline-grid;
  place-items: center;
  font-weight: 800;
}

/* 4. Асимметричная форма (4 угла по часовой стрелке) */
.organic-badge {
  border-radius: 20px 2px 20px 2px;
  padding: 10px 18px;
  background: rgba(250, 204, 21, 0.12);
  border: 1px solid #facc15;
  color: #fef08a;
}`,
    example: `<div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;">
  <div class="card">Карточка (10px)</div>
  <button class="pill-btn">Капсула (9999px)</button>
  <div class="avatar">DS</div>
  <div class="organic-badge">20px 2px 20px 2px</div>
</div>`
  },
  {
    id: 'css-border',
    lang: 'css',
    title: 'CSS: границы элементов (border, border-style, border-color)',
    summary: 'Универсальное свойство для задания толщины, стиля (solid, dashed, dotted) и цвета рамки вокруг элемента или его отдельных сторон.',
    tags: ['css', 'border', 'граница', 'рамка', 'border-width', 'border-color', 'border-style', 'dashed'],
    when: 'Для визуального разделения карточек, полей ввода (input), технических таблиц, цитат и зон загрузки файлов (dashed).',
    alternatives: 'Используйте outline для подсветки фокуса (не влияет на размеры блока) или box-shadow: 0 0 0 1px для субпиксельных рамок.',
    points: [
      'Краткая запись: border: 1px solid #3f3f46 (толщина, стиль, цвет).',
      'Без указания border-style (например, solid или dashed) рамка не отобразится, так как по умолчанию стиль равен none.',
      'Можно задавать отдельные стороны: border-top, border-bottom, border-left, border-right или логические свойства border-inline, border-block.',
      'При box-sizing: border-box толщина border включается в общую ширину и высоту элемента и не ломает сетку.'
    ],
    code: `/* Тонкая техническая рамка карточки */
.box-solid {
  border: 1px solid rgba(250, 204, 21, 0.45);
  border-radius: 6px;
  padding: 14px;
  background: #18181b;
  color: #f4f4f5;
}

/* Пунктирная зона для Drag-and-Drop загрузки */
.box-dashed {
  border: 2px dashed #facc15;
  border-radius: 6px;
  padding: 14px;
  background: rgba(250, 204, 21, 0.06);
  color: #fef08a;
}

/* Акцентная индустриальная полоса слева */
.box-left {
  border-left: 4px solid #facc15;
  padding: 12px 14px;
  background: #27272a;
  color: #f4f4f5;
}`,
    example: `<div style="display:grid;gap:12px;">
  <div class="box-solid">1px solid — стандартная рамка интерфейса</div>
  <div class="box-dashed">2px dashed — пунктирная область для файлов</div>
  <div class="box-left">border-left: 4px solid — индустриальный маркер</div>
</div>`
  },
  {
    id: 'css-outline',
    lang: 'css',
    title: 'CSS: внешний контур фокуса (outline и outline-offset)',
    summary: 'Внешняя обводка элемента, которая рисуется поверх соседних блоков, не занимает места в потоке (не сдвигает верстку) и отвечает за доступность клавиатурного фокуса.',
    tags: ['css', 'outline', 'outline-offset', 'focus-visible', 'фокус', 'обводка'],
    when: 'Для стилизации состояния :focus-visible у кнопок, ссылок и полей ввода без изменения их геометрии.',
    alternatives: 'Никогда не пишите outline: none без замены на кастомный :focus-visible, иначе пользователи с клавиатурой потеряют навигацию.',
    points: [
      'В отличие от border, свойство outline не влияет на размеры элемента и никогда не вызывает сдвиг соседних элементов.',
      'Свойство outline-offset позволяет отодвинуть контур от края кнопки (например, на 2px–4px) или сдвинуть внутрь (отрицательное значение).',
      'В современных браузерах outline автоматически повторяет скругление border-radius элемента.'
    ],
    code: `.focus-demo-btn {
  padding: 10px 18px;
  border-radius: 6px;
  background: #facc15;
  color: #09090b;
  font-weight: 800;
  border: none;
  outline: 2px solid #facc15;
  outline-offset: 4px;
  cursor: pointer;
}`,
    example: `<div style="padding:16px;">
  <button class="focus-demo-btn">Кнопка с outline-offset: 4px</button>
</div>`
  },
  {
    id: 'css-box-shadow',
    lang: 'css',
    title: 'CSS: многослойные тени и жёсткие индустриальные тени (box-shadow)',
    summary: 'Добавление мягких или жёстких смещённых теней (brutalist/industrial offset) и внутренних (inset) свечений к блокам.',
    tags: ['css', 'box-shadow', 'тень', 'inset', 'свечение', 'elevation'],
    when: 'Для выделения модальных окон, выпадающих списков, карточек при наведении и тактильных кнопок.',
    alternatives: 'Для теней вокруг прозрачных PNG/SVG-иконок используйте filter: drop-shadow(...), так как box-shadow рисует тень по прямоугольной рамке.',
    points: [
      'Синтаксис: смещение-X, смещение-Y, размытие (blur), растяжение (spread), цвет.',
      'При blur: 0px (например, box-shadow: 4px 4px 0 #facc15) получается чёткая техно-индустриальная тень.',
      'Через запятую можно комбинировать несколько слоёв теней для реалистичного объёма.'
    ],
    code: `.elevated-card {
  padding: 18px 20px;
  border-radius: 6px;
  background: #18181b;
  color: #f4f4f5;
  border: 1px solid #facc15;
  box-shadow: 5px 5px 0px #facc15;
}`,
    example: `<div style="padding:12px;">
  <div class="elevated-card">Техно-индустриальная карточка с жёсткой тенью 5px 5px 0 #facc15</div>
</div>`
  },
  {
    id: 'css-margin-padding',
    lang: 'css',
    title: 'CSS: внешние и внутренние отступы (margin и padding)',
    summary: 'Фундаментальные свойства управления пространством: padding задаёт воздух внутри рамки блока, а margin — расстояние между соседними блоками.',
    tags: ['css', 'margin', 'padding', 'отступы', 'margin-inline', 'padding-inline'],
    when: 'Во всех без исключения компонентах: padding для внутреннего комфорта карточки/кнопки, margin: 0 auto для центрирования контейнера.',
    alternatives: 'Для отступов между элементами внутри Flexbox и Grid предпочтительнее использовать свойство gap вместо margin у дочерних элементов.',
    points: [
      'padding увеличивает кликабельную зону кнопок и ссылок и закрашивается фоном элемента (background).',
      'margin создаёт прозрачный буфер снаружи рамки border; вертикальные margin соседних блоков могут схлопываться.',
      'Логические свойства padding-inline (слева/справа) и padding-block (сверху/снизу) удобнее классической записи из 4 чисел.'
    ],
    code: `.container-card {
  max-width: 420px;
  margin-inline: auto; /* Центрирование по горизонтали */
  padding: 18px 22px;  /* 18px сверху/снизу, 22px слева/справа */
  background: #18181b;
  border: 1px solid #3f3f46;
  border-left: 4px solid #facc15;
  border-radius: 6px;
  color: #f4f4f5;
}`
  },

  // ============================================================================
  // 2. PRACTICAL AUTH & UI RECIPES (Вход, Регистрация, OTP, Корзина, Фильтры и др.)
  // ============================================================================
  {
    id: 'recipe-login-form',
    lang: 'recipes',
    title: 'Рецепт: Форма входа (Login / Авторизация + Показ пароля)',
    summary: 'Готовая карточка входа в аккаунт с переключением видимости пароля, валидацией полей, чекбоксом «Запомнить меня» и индикацией загрузки.',
    tags: ['рецепт', 'вход', 'логин', 'login', 'авторизация', 'форма входа', 'пароль', 'auth'],
    when: 'Для страниц входа в личный кабинет, админ-панель, SaaS-сервис или модального окна авторизации.',
    alternatives: 'Можно дополнить кнопками OAuth (Войти через GitHub / Google) или беспарольным входом по одноразовому коду (OTP).',
    points: [
      'Использует правильные атрибуты autocomplete="username" и autocomplete="current-password" для работы менеджеров паролей.',
      'Кнопка переключения типа поля (password ↔ text) имеет aria-label для доступности.',
      'При отправке формы выводит статус авторизации без перезагрузки страницы.'
    ],
    code: `<form class="login-card" id="login-form">
  <div class="login-head">
    <span class="login-tag">AUTH // MODULE</span>
    <h3>Вход в систему</h3>
    <p>Введите данные вашего рабочего аккаунта</p>
  </div>

  <div class="form-group">
    <label for="login-email">Email адрес</label>
    <input type="email" id="login-email" value="engineer@devshelf.ru" required autocomplete="username" placeholder="name@company.com">
  </div>

  <div class="form-group">
    <div class="label-row">
      <label for="login-pass">Пароль</label>
      <a href="#forgot" class="forgot-link">Сбросить доступ?</a>
    </div>
    <div class="pass-wrap">
      <input type="password" id="login-pass" value="SecretPass2026" required minlength="6" autocomplete="current-password">
      <button type="button" id="toggle-pass" class="eye-btn" aria-label="Показать пароль">Показать</button>
    </div>
  </div>

  <label class="remember-row">
    <input type="checkbox" checked>
    <span>Запомнить терминал на 30 дней</span>
  </label>

  <button type="submit" class="submit-btn" id="login-submit">АВТОРИЗОВАТЬСЯ →</button>
  <div id="login-status" class="login-status" hidden></div>
</form>

<style>
.login-card {
  max-width: 360px;
  margin: 0 auto;
  padding: 20px;
  background: #141619;
  border: 1px solid #2e323b;
  border-top: 3px solid #facc15;
  border-radius: 6px;
  color: #f4f4f5;
  font-family: system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.login-tag { font-family: monospace; font-size: 11px; color: #facc15; letter-spacing: 0.08em; }
.login-head h3 { margin: 2px 0 4px; font-size: 18px; }
.login-head p { margin: 0; font-size: 12.5px; color: #a1a1aa; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-size: 12px; font-weight: 700; color: #d4d4d8; text-transform: uppercase; letter-spacing: 0.04em; }
.label-row { display: flex; justify-content: space-between; align-items: center; }
.forgot-link { font-size: 12px; color: #facc15; text-decoration: none; }
.form-group input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #3f3f46;
  background: #0c0d0f;
  color: #f4f4f5;
  font-size: 14px;
  box-sizing: border-box;
}
.form-group input:focus { outline: none; border-color: #facc15; }
.pass-wrap { position: relative; display: flex; align-items: center; }
.pass-wrap input { padding-right: 82px; }
.eye-btn {
  position: absolute;
  right: 6px;
  padding: 5px 8px;
  border-radius: 4px;
  background: #27272a;
  color: #e4e4e7;
  border: 1px solid #3f3f46;
  font-size: 11px;
  cursor: pointer;
}
.remember-row { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: #a1a1aa; cursor: pointer; }
.submit-btn {
  padding: 11px;
  border-radius: 4px;
  border: none;
  background: #facc15;
  color: #09090b;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.04em;
  cursor: pointer;
}
.login-status {
  padding: 9px 12px;
  border-radius: 4px;
  background: rgba(250, 204, 21, 0.14);
  border: 1px solid #facc15;
  color: #fef08a;
  font-size: 12.5px;
}
</style>

<script>
const passInput = document.getElementById('login-pass');
const toggleBtn = document.getElementById('toggle-pass');
const loginForm = document.getElementById('login-form');
const statusBox = document.getElementById('login-status');

toggleBtn.addEventListener('click', () => {
  const isPass = passInput.type === 'password';
  passInput.type = isPass ? 'text' : 'password';
  toggleBtn.textContent = isPass ? 'Скрыть' : 'Показать';
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  statusBox.hidden = false;
  statusBox.textContent = '✓ Доступ разрешён! Сессия инициализирована.';
});
</script>`
  },
  {
    id: 'recipe-register-form',
    lang: 'recipes',
    title: 'Рецепт: Регистрация с индикатором надёжности пароля',
    summary: 'Интерактивная форма создания аккаунта с живой шкалой оценки сложности пароля (длина, цифры, спецсимволы) и проверкой в реальном времени.',
    tags: ['рецепт', 'регистрация', 'signup', 'register', 'пароль', 'валидация', 'форма'],
    when: 'Для экранов регистрации пользователей, смены пароля в настройках профиля и онбординга.',
    alternatives: 'Используйте OAuth 2.0 / Passkeys (WebAuthn), если хотите избавить пользователя от придумывания пароля.',
    points: [
      'Оценивает пароль по 4 критериям в реальном времени при вводе (событие input).',
      'Визуально меняет цвет прогресс-бара от красного (слабый) до жёлтого и изумрудного (надёжный).',
      'Информирует пользователя, каких именно символов не хватает для защиты аккаунта.'
    ],
    code: `<div class="reg-card">
  <h3>Регистрация инженера</h3>
  <label class="reg-field">
    <span>Позывной / Имя</span>
    <input type="text" placeholder="Павел Пардаев" value="Павел Разработчик">
  </label>
  <label class="reg-field">
    <span>Ключ доступа (пароль)</span>
    <input type="text" id="reg-pass" value="DevShelf#2026" placeholder="Минимум 8 символов">
  </label>
  <div class="meter-bar"><div id="meter-fill" class="meter-fill"></div></div>
  <div id="meter-text" class="meter-text">Оценка пароля...</div>
</div>

<style>
.reg-card { max-width: 350px; margin: 0 auto; padding: 20px; background: #141619; border: 1px solid #2e323b; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; display: flex; flex-direction: column; gap: 12px; }
.reg-card h3 { margin: 0; font-size: 17px; }
.reg-field { display: flex; flex-direction: column; gap: 5px; font-size: 12.5px; color: #d4d4d8; }
.reg-field input { padding: 9px 12px; border-radius: 4px; border: 1px solid #3f3f46; background: #0c0d0f; color: #fff; }
.meter-bar { height: 6px; background: #27272a; border-radius: 2px; overflow: hidden; }
.meter-fill { height: 100%; width: 0%; transition: width 0.25s, background 0.25s; }
.meter-text { font-size: 12px; color: #a1a1aa; font-family: monospace; }
</style>

<script>
const input = document.getElementById('reg-pass');
const fill = document.getElementById('meter-fill');
const text = document.getElementById('meter-text');

function checkStrength(val) {
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-ZА-Я]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-zА-Яа-я0-9]/.test(val)) score++;

  const levels = [
    { w: '20%', c: '#ef4444', t: '[LOW] Слабый пароль (добавьте цифры/символы)' },
    { w: '50%', c: '#f59e0b', t: '[MED] Средний уровень защиты' },
    { w: '80%', c: '#facc15', t: '[HIGH] Хороший рабочий пароль' },
    { w: '100%', c: '#22c55e', t: '[MAX] ✓ Отличный криптостойкий пароль' }
  ];
  const lvl = levels[Math.max(0, score - 1)];
  fill.style.width = val ? lvl.w : '0%';
  fill.style.background = lvl.c;
  text.textContent = val ? lvl.t : 'Введите пароль';
}
input.addEventListener('input', (e) => checkStrength(e.target.value));
checkStrength(input.value);
</script>`
  },
  {
    id: 'recipe-otp-verification',
    lang: 'recipes',
    title: 'Рецепт: Ввод SMS / 2FA пин-кода из 4 цифр (OTP Input)',
    summary: 'Удобное поле ввода проверочного кода с автоматическим переходом фокуса на следующую ячейку и поддержкой клавиши Backspace.',
    tags: ['рецепт', 'otp', '2fa', 'пин код', 'sms код', 'верификация', 'вход'],
    when: 'Для двухфакторной аутентификации (2FA), подтверждения телефона по SMS или кода из письма.',
    alternatives: 'Одно обычное поле с inputmode="numeric" и autocomplete="one-time-code".',
    points: [
      'При вводе цифры курсор мгновенно перепрыгивает в следующее поле без лишних кликов.',
      'Нажатие Backspace в пустой ячейке возвращает фокус на предыдущую цифру.',
      'Атрибут inputmode="numeric" открывает крупную цифровую клавиатуру на мобильных устройствах.'
    ],
    code: `<div class="otp-card">
  <h4>Двухфакторный код (2FA)</h4>
  <p>Введите 4-значный код подтверждения</p>
  <div class="otp-inputs" id="otp-box">
    <input type="text" maxlength="1" inputmode="numeric" value="7">
    <input type="text" maxlength="1" inputmode="numeric" value="4">
    <input type="text" maxlength="1" inputmode="numeric" value="9">
    <input type="text" maxlength="1" inputmode="numeric" value="">
  </div>
  <div id="otp-result" class="otp-hint">Введите последнюю цифру...</div>
</div>

<style>
.otp-card { max-width: 320px; margin: 0 auto; padding: 20px; background: #141619; border: 1px solid #2e323b; border-radius: 6px; text-align: center; color: #f4f4f5; font-family: system-ui, sans-serif; }
.otp-card h4 { margin: 0 0 6px; font-size: 16px; }
.otp-card p { margin: 0 0 14px; font-size: 12.5px; color: #a1a1aa; }
.otp-inputs { display: flex; justify-content: center; gap: 10px; margin-bottom: 12px; }
.otp-inputs input { width: 48px; height: 54px; text-align: center; font-size: 22px; font-weight: 800; border-radius: 4px; border: 1px solid #3f3f46; background: #0c0d0f; color: #facc15; font-family: monospace; }
.otp-inputs input:focus { outline: none; border-color: #facc15; box-shadow: 0 0 0 2px rgba(250,204,21,0.2); }
.otp-hint { font-size: 12.5px; color: #facc15; font-family: monospace; }
</style>

<script>
const inputs = [...document.querySelectorAll('#otp-box input')];
const res = document.getElementById('otp-result');

inputs.forEach((inp, idx) => {
  inp.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    if (e.target.value && idx < inputs.length - 1) inputs[idx + 1].focus();
    const code = inputs.map(i => i.value).join('');
    res.textContent = code.length === 4 ? '✓ КОД ПОДТВЕРЖДЁН: ' + code : 'Ожидание ввода...';
  });
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !inp.value && idx > 0) inputs[idx - 1].focus();
  });
});
</script>`
  },
  {
    id: 'recipe-shopping-cart',
    lang: 'recipes',
    title: 'Рецепт: Интерактивная корзина товаров с пересчётом суммы',
    summary: 'Готовый модуль корзины интернет-магазина с кнопками +/- количества и автоматическим форматированием стоимости.',
    tags: ['рецепт', 'корзина', 'интернет-магазин', 'ecommerce', 'cart', 'калькулятор цены'],
    when: 'Для интернет-магазинов, конфигураторов оборудования, оформления заказа и мини-корзины.',
    alternatives: 'Для сложных многостраничных магазинов состояние корзины синхронизируют с localStorage и серверной БД.',
    points: [
      'Динамически пересчитывает подитог и общую сумму при изменении количества любого товара.',
      'Форматирует валюту по русскому стандарту через Intl.NumberFormat("ru-RU").',
      'Не позволяет уменьшить количество товара ниже 1.'
    ],
    code: `<div class="cart-box">
  <h4>Спецификация заказа</h4>
  <div id="cart-items" class="cart-items"></div>
  <div class="cart-footer">
    <span>Итого к оплате:</span>
    <strong id="cart-total">0 ₽</strong>
  </div>
</div>

<style>
.cart-box { max-width: 380px; margin: 0 auto; padding: 18px; background: #141619; border: 1px solid #2e323b; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; }
.cart-box h4 { margin: 0 0 12px; font-size: 16px; }
.cart-items { display: flex; flex-direction: column; gap: 8px; }
.cart-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; background: #0c0d0f; border-radius: 4px; border: 1px solid #27272a; font-size: 13px; }
.qty-ctrl { display: flex; align-items: center; gap: 8px; font-family: monospace; }
.qty-btn { width: 26px; height: 26px; border-radius: 4px; border: 1px solid #3f3f46; background: #18181b; color: #facc15; cursor: pointer; font-weight: 700; }
.cart-footer { margin-top: 14px; padding-top: 12px; border-top: 1px solid #2e323b; display: flex; justify-content: space-between; align-items: center; font-size: 15px; }
.cart-footer strong { color: #facc15; font-size: 18px; font-family: monospace; }
</style>

<script>
const items = [
  { id: 1, name: 'Лицензия DevShelf Pro', price: 1490, qty: 1 },
  { id: 2, name: 'Индустриальный UI-кит', price: 990, qty: 2 }
];
const listEl = document.getElementById('cart-items');
const totalEl = document.getElementById('cart-total');

function renderCart() {
  listEl.innerHTML = items.map(item => \`
    <div class="cart-row">
      <div>
        <div><strong>\${item.name}</strong></div>
        <div style="color:#a1a1aa;font-size:12px;">\${item.price} ₽ / ед.</div>
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="changeQty(\${item.id}, -1)">−</button>
        <span>\${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(\${item.id}, 1)">+</button>
      </div>
    </div>
  \`).join('');
  const sum = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  totalEl.textContent = new Intl.NumberFormat('ru-RU').format(sum) + ' ₽';
}
window.changeQty = (id, delta) => {
  const found = items.find(i => i.id === id);
  if (found) found.qty = Math.max(1, found.qty + delta);
  renderCart();
};
renderCart();
</script>`
  },
  {
    id: 'recipe-catalog-filter',
    lang: 'recipes',
    title: 'Рецепт: Живой поиск и фильтрация карточек по категориям',
    summary: 'Мгновенная клиентская фильтрация списка элементов по тегам и поисковой строке без перезагрузки страницы.',
    tags: ['рецепт', 'фильтр', 'поиск', 'каталог', 'табы', 'filter', 'search'],
    when: 'Для каталогов товаров, портфолио проектов, списков документации, FAQ и таблиц.',
    alternatives: 'При объёме более 5 000 записей используйте серверную фильтрацию через Fetch API и пагинацию.',
    points: [
      'Сочетает фильтр по выбранной категории и текстовый поиск по подстроке.',
      'При отсутствии совпадений аккуратно выводит пустое состояние (Empty State).'
    ],
    code: `<div class="flt-demo">
  <div class="flt-bar">
    <input type="search" id="flt-input" placeholder="Поиск по модулям...">
    <button class="flt-tag active" data-cat="all">Все</button>
    <button class="flt-tag" data-cat="front">Frontend</button>
    <button class="flt-tag" data-cat="back">Backend</button>
  </div>
  <div id="flt-list" class="flt-list"></div>
</div>

<style>
.flt-demo { max-width: 420px; margin: 0 auto; color: #f4f4f5; font-family: system-ui, sans-serif; }
.flt-bar { display: flex; gap: 6px; margin-bottom: 12px; flex-wrap: wrap; }
.flt-bar input { flex: 1; min-width: 140px; padding: 7px 10px; border-radius: 4px; border: 1px solid #3f3f46; background: #0c0d0f; color: #fff; font-size: 13px; }
.flt-tag { padding: 6px 10px; border-radius: 4px; border: 1px solid #3f3f46; background: #141619; color: #a1a1aa; font-size: 12px; cursor: pointer; }
.flt-tag.active { background: #facc15; color: #09090b; border-color: #facc15; font-weight: 800; }
.flt-list { display: grid; gap: 8px; }
.flt-item { padding: 10px 12px; border-radius: 4px; background: #141619; border: 1px solid #27272a; display: flex; justify-content: space-between; font-size: 13px; }
</style>

<script>
const data = [
  { name: 'React 19 + TypeScript', cat: 'front' },
  { name: 'Tailwind CSS v4', cat: 'front' },
  { name: 'PHP 8.3 + Laravel 11', cat: 'back' },
  { name: 'PostgreSQL & Redis', cat: 'back' }
];
let activeCat = 'all';
const inp = document.getElementById('flt-input');
const list = document.getElementById('flt-list');

function render() {
  const q = inp.value.toLowerCase();
  const res = data.filter(d => (activeCat === 'all' || d.cat === activeCat) && d.name.toLowerCase().includes(q));
  list.innerHTML = res.length
    ? res.map(d => \`<div class="flt-item"><strong>\${d.name}</strong><span style="color:#facc15;font-family:monospace;">[\${d.cat.toUpperCase()}]</span></div>\`).join('')
    : '<div style="color:#a1a1aa;font-size:13px;">Совпадений не обнаружено</div>';
}
document.querySelectorAll('.flt-tag').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.flt-tag').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCat = btn.dataset.cat;
    render();
  };
});
inp.oninput = render;
render();
</script>`
  },
  {
    id: 'recipe-file-dropzone',
    lang: 'recipes',
    title: 'Рецепт: Drag-and-Drop загрузка файлов с проверкой размера',
    summary: 'Зона перетаскивания файлов с подсветкой при наведении и мгновенным выводом параметров выбранного файла.',
    tags: ['рецепт', 'загрузка файла', 'drag and drop', 'dropzone', 'file upload', 'превью картинки'],
    when: 'Для загрузки аватарок, прикрепления чертежей и документов в формах обратной связи.',
    alternatives: 'Обычный <input type="file">, который выглядит по-разному во всех браузерах.',
    points: [
      'События dragover и drop требуют вызова event.preventDefault(), чтобы браузер не открывал файл в новой вкладке.',
      'Метод URL.createObjectURL(file) мгновенно создаёт локальную ссылку на выбранную картинку для предпросмотра до отправки на сервер.'
    ],
    code: `<label class="dropzone" id="dropzone">
  <input type="file" id="file-inp" accept="image/*" hidden>
  <div id="drop-info">
    <strong>ПЕРЕТАЩИТЕ ФАЙЛ В ЭТУ ЗОНУ</strong>
    <p>или нажмите для выбора с диска (PNG, JPG, SVG, PDF)</p>
  </div>
</label>

<style>
.dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 360px;
  margin: 0 auto;
  min-height: 136px;
  padding: 20px;
  border: 2px dashed #facc15;
  border-radius: 6px;
  background: rgba(250, 204, 21, 0.05);
  color: #f4f4f5;
  text-align: center;
  cursor: pointer;
  font-family: system-ui, sans-serif;
  transition: background 0.2s, border-color 0.2s;
}
.dropzone:hover, .dropzone.dragover { background: rgba(250, 204, 21, 0.14); border-color: #fde047; }
.dropzone p { margin: 6px 0 0; font-size: 12px; color: #a1a1aa; }
</style>

<script>
const dz = document.getElementById('dropzone');
const inp = document.getElementById('file-inp');
const info = document.getElementById('drop-info');

function handleFile(file) {
  if (!file) return;
  info.innerHTML = \`<strong style="color:#facc15;">✓ ФАЙЛ ПРИНЯТ: \${file.name}</strong><p>Объём: \${(file.size / 1024).toFixed(1)} КБ</p>\`;
}
dz.addEventListener('dragover', (e) => { e.preventDefault(); dz.classList.add('dragover'); });
dz.addEventListener('dragleave', () => dz.classList.remove('dragover'));
dz.addEventListener('drop', (e) => {
  e.preventDefault();
  dz.classList.remove('dragover');
  handleFile(e.dataTransfer.files[0]);
});
inp.addEventListener('change', (e) => handleFile(e.target.files[0]));
</script>`
  },

  // ============================================================================
  // 3. MODERN FRAMEWORKS REFERENCE (Все темы содержат рабочий интерактивный HTML+CSS+JS!)
  // ============================================================================
  {
    id: 'fw-tailwind-css',
    lang: 'frameworks',
    title: 'Tailwind CSS v4 (Утилитарный фреймворк вместо ручного CSS)',
    summary: 'Современный CSS-фреймворк, который заменяет написание сотен кастомных классов и файлов стилей готовыми атомарными утилитами прямо в атрибуте class.',
    tags: ['framework', 'фреймворк', 'tailwind', 'tailwindcss', 'css', 'утилиты', 'верстка'],
    when: 'Когда нужно верстать адаптивные интерфейсы в 3–4 раза быстрее без придумывания названий классов по БЭМ и без раздувания CSS-бандла.',
    alternatives: 'Чистый CSS с переменными (Custom Properties), CSS Modules или компонентные библиотеки вроде Bootstrap 5.',
    points: [
      'Кого заменяет: ручное написание CSS-файлов, БЭМ-нейминг (.card__header--active) и громоздкие медиа-запросы.',
      'Подключение за 10 секунд (CDN): <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>.',
      'Подключение в проекте (Vite): npm install tailwindcss @tailwindcss/vite и строка @import "tailwindcss"; в главном CSS.',
      'Адаптивность и состояния пишутся прямо через префиксы: hover:bg-yellow-400, md:grid-cols-3, dark:bg-zinc-900.'
    ],
    code: `<!-- Подключение Tailwind v4 CDN: <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> -->
<div class="tw-demo-card" id="tw-card">
  <div class="tw-row">
    <span class="tw-badge">TAILWIND CSS v4</span>
    <span class="tw-price" id="tw-mode-label">DARK // MODE</span>
  </div>
  <h4>Утилитарная вёрстка нового поколения</h4>
  <p>Классы <code>flex items-center justify-between gap-4 p-5 rounded bg-zinc-900</code> заменяют десятки строк обычного CSS.</p>
  <button class="tw-btn" id="tw-toggle-btn">Переключить утилиту акцента →</button>
</div>

<style>
.tw-demo-card { max-width: 410px; margin: 0 auto; padding: 18px; border-radius: 6px; background: #141619; border: 1px solid #2e323b; color: #f4f4f5; font-family: system-ui, sans-serif; transition: border-color 0.2s, box-shadow 0.2s; }
.tw-demo-card.accent-active { border-color: #facc15; box-shadow: 4px 4px 0 #facc15; }
.tw-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.tw-badge { background: rgba(250,204,21,0.15); color: #facc15; padding: 3px 9px; border-radius: 4px; font-size: 11px; font-weight: 800; font-family: monospace; }
.tw-price { font-size: 11px; color: #a1a1aa; font-family: monospace; }
.tw-demo-card h4 { margin: 0 0 6px; font-size: 16px; }
.tw-demo-card p { margin: 0 0 14px; font-size: 13px; color: #a1a1aa; line-height: 1.5; }
.tw-demo-card code { color: #facc15; font-family: monospace; }
.tw-btn { width: 100%; padding: 9px; border-radius: 4px; background: #facc15; color: #09090b; font-weight: 800; border: none; cursor: pointer; }
</style>

<script>
const card = document.getElementById('tw-card');
const label = document.getElementById('tw-mode-label');
document.getElementById('tw-toggle-btn').addEventListener('click', () => {
  card.classList.toggle('accent-active');
  label.textContent = card.classList.contains('accent-active') ? 'RING-YELLOW-400 // ON' : 'DARK // MODE';
});
</script>`
  },
  {
    id: 'fw-react',
    lang: 'frameworks',
    title: 'React 19 (Декларативные компоненты и хуки вместо ручного DOM API)',
    summary: 'Библиотека для создания пользовательских интерфейсов, заменяющая императивный поиск элементов (querySelector, innerHTML) реактивными компонентами и хуками состояния.',
    tags: ['framework', 'фреймворк', 'react', 'jsx', 'usestate', 'useeffect', 'spa', 'компоненты'],
    when: 'Для интерактивных веб-приложений, личных кабинетов, дашбордов и SaaS-продуктов с частым обновлением данных на экране.',
    alternatives: 'Vue 3, Svelte 5 или легковесный Alpine.js для простых серверных сайтов.',
    points: [
      'Кого заменяет: ручное управление DOM (document.getElementById, createElement, appendChild) и синхронизацию переменных с HTML.',
      'Быстрый старт проекта: npm create vite@latest my-app -- --template react-ts.',
      'Хук useState(initial) хранит состояние и автоматически перерисовывает только изменившуюся часть интерфейса.',
      'Хук useEffect(() => {}, [deps]) выполняет запросы к серверу и подписки при монтировании компонента.'
    ],
    code: `<!-- В проекте React (Counter.jsx):
import { useState } from 'react';
export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Счёт: {count}</button>;
}
-->
<div class="react-box">
  <div class="react-head">
    <span class="react-tag">REACT 19 // USESTATE SIMULATOR</span>
    <span id="react-renders" class="react-meta">Рендеров: 1</span>
  </div>
  <h3 id="react-title">Состояние count = 0</h3>
  <p>Вызов <code>setCount(prev =&gt; prev + 1)</code> обновляет Virtual DOM и точечно перерисовывает узел.</p>
  <div class="react-actions">
    <button id="react-dec" class="r-btn-sec">−1</button>
    <button id="react-inc" class="r-btn-pri">setCount(count + 1)</button>
    <button id="react-rst" class="r-btn-sec">Сброс</button>
  </div>
</div>

<style>
.react-box { max-width: 410px; margin: 0 auto; padding: 18px; background: #141619; border: 1px solid #2e323b; border-left: 4px solid #facc15; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; }
.react-head { display: flex; justify-content: space-between; font-family: monospace; font-size: 11px; margin-bottom: 8px; }
.react-tag { color: #facc15; font-weight: 800; }
.react-meta { color: #a1a1aa; }
.react-box h3 { margin: 0 0 6px; font-size: 18px; font-family: monospace; }
.react-box p { margin: 0 0 14px; font-size: 12.5px; color: #a1a1aa; }
.react-box code { color: #fde047; }
.react-actions { display: flex; gap: 8px; }
.r-btn-pri { flex: 1; padding: 9px 12px; background: #facc15; color: #09090b; border: none; border-radius: 4px; font-weight: 800; cursor: pointer; font-family: monospace; }
.r-btn-sec { padding: 9px 12px; background: #27272a; color: #f4f4f5; border: 1px solid #3f3f46; border-radius: 4px; cursor: pointer; font-weight: 700; }
</style>

<script>
let count = 0;
let renders = 1;
const titleEl = document.getElementById('react-title');
const rendersEl = document.getElementById('react-renders');

function setCount(nextVal) {
  count = nextVal;
  renders++;
  titleEl.textContent = 'Состояние count = ' + count;
  rendersEl.textContent = 'Рендеров: ' + renders;
}
document.getElementById('react-inc').onclick = () => setCount(count + 1);
document.getElementById('react-dec').onclick = () => setCount(count - 1);
document.getElementById('react-rst').onclick = () => setCount(0);
</script>`
  },
  {
    id: 'fw-vue3',
    lang: 'frameworks',
    title: 'Vue 3 (Composition API и <script setup> — реактивный фреймворк)',
    summary: 'Интуитивный фреймворк с автоматической реактивностью (ref, computed) и двусторонним связыванием v-model, работающий как через Vite, так и напрямую с CDN.',
    tags: ['framework', 'фреймворк', 'vue', 'vue3', 'composition api', 'ref', 'v-model', 'реактивность'],
    when: 'Когда нужен баланс между мощью компонентного SPA и чистым разделением на шаблон <template>, логику <script setup> и стили <style scoped>.',
    alternatives: 'React 19, Svelte 5 или Alpine.js.',
    points: [
      'Кого заменяет: громоздкие jQuery-скрипты и сложный шаблонный код обновления форм.',
      'Подключение без сборщика (CDN): <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>.',
      'Создание проекта со сборщиком: npm create vue@latest.',
      'Директива v-model обеспечивает двустороннее связывание полей формы с переменной за 1 атрибут.'
    ],
    code: `<!-- В компоненте App.vue:
<script setup>
import { ref, computed } from 'vue';
const name = ref('Инженер');
</script>
<template><input v-model="name"><p>Привет, {{ name }}!</p></template>
-->
<div class="vue-card">
  <div class="vue-tag">VUE 3 // V-MODEL & COMPUTED</div>
  <label class="vue-label">
    <span>Двустороннее связывание (v-model="name"):</span>
    <input id="vue-inp" value="Инженер DevShelf" placeholder="Введите имя">
  </label>
  <div id="vue-out" class="vue-out">Привет, Инженер DevShelf! Длина строки: 16 симв.</div>
</div>

<style>
.vue-card { max-width: 410px; margin: 0 auto; padding: 18px; background: #141619; border: 1px solid #2e323b; border-left: 4px solid #facc15; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; }
.vue-tag { font-size: 11px; color: #facc15; font-family: monospace; font-weight: 800; margin-bottom: 10px; }
.vue-label { display: flex; flex-direction: column; gap: 6px; font-size: 12.5px; color: #a1a1aa; margin-bottom: 12px; }
.vue-label input { padding: 9px 12px; border-radius: 4px; border: 1px solid #3f3f46; background: #0c0d0f; color: #fff; font-size: 14px; }
.vue-out { padding: 10px 12px; background: #0c0d0f; border: 1px solid #27272a; border-radius: 4px; font-weight: 700; color: #fef08a; font-size: 13px; }
</style>

<script>
const vInp = document.getElementById('vue-inp');
const vOut = document.getElementById('vue-out');
vInp.addEventListener('input', () => {
  const val = vInp.value.trim() || 'Гость';
  vOut.textContent = \`Привет, \${val}! Длина строки: \${val.length} симв.\`;
});
</script>`
  },
  {
    id: 'fw-alpinejs',
    lang: 'frameworks',
    title: 'Alpine.js (Легковесная замена jQuery прямо в HTML-атрибутах)',
    summary: 'Микро-фреймворк весом 15 КБ, позволяющий создавать модалки, табы, выпадающие меню и аккордеоны прямо через атрибуты x-data, x-show и @click без отдельных .js файлов.',
    tags: ['framework', 'фреймворк', 'alpine', 'alpinejs', 'jquery замена', 'x-data', 'микрофреймворк'],
    when: 'Идеальный выбор для серверных сайтов (PHP, Laravel, WordPress, Битрикс) и лендингов, где React избыточен, а писать ручной querySelector долго.',
    alternatives: 'Нативный JavaScript или HTMX.',
    points: [
      'Кого заменяет: устаревший jQuery и десятки мелких файлов вроде tabs.js, modal.js, dropdown.js.',
      'Подключение в 1 строку в <head>: <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>.',
      'Атрибут x-data="{ open: false }" объявляет локальное реактивное состояние прямо на HTML-теге.',
      'Атрибуты @click="open = !open" и x-show="open" управляют видимостью блока без единого ID или класса.'
    ],
    code: `<!-- Подключение: <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script> -->
<div class="alpine-box" x-data="{ open: true }">
  <div class="alpine-tag">ALPINE.JS // X-DATA & X-SHOW</div>
  <button id="alp-btn" class="alpine-btn">
    Переключить панель (x-on:click="open = !open") ▾
  </button>
  <div id="alp-menu" class="alpine-menu">
    <p><strong>Статус узла:</strong> АКТИВЕН</p>
    <p>Вся логика открытия/закрытия описывается прямо в HTML-разметке через <code>x-data="{ open: false }"</code> и <code>x-show="open"</code>.</p>
  </div>
</div>

<style>
.alpine-box { max-width: 410px; margin: 0 auto; padding: 18px; background: #141619; border: 1px solid #2e323b; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; }
.alpine-tag { font-size: 11px; color: #facc15; font-family: monospace; font-weight: 800; margin-bottom: 10px; }
.alpine-btn { width: 100%; background: #facc15; color: #09090b; border: none; padding: 9px 14px; border-radius: 4px; font-weight: 800; cursor: pointer; text-align: left; }
.alpine-menu { margin-top: 10px; padding: 12px; background: #0c0d0f; border: 1px solid #3f3f46; border-radius: 4px; font-size: 13px; color: #d4d4d8; }
.alpine-menu p { margin: 0 0 6px; }
.alpine-menu p:last-child { margin: 0; }
.alpine-menu code { color: #facc15; }
</style>

<script>
const aBtn = document.getElementById('alp-btn');
const aMenu = document.getElementById('alp-menu');
aBtn.addEventListener('click', () => {
  aMenu.hidden = !aMenu.hidden;
});
</script>`
  },
  {
    id: 'fw-htmx',
    lang: 'frameworks',
    title: 'HTMX (AJAX-запросы, пагинация и фильтрация прямо из HTML)',
    summary: 'Библиотека, позволяющая любому HTML-элементу отправлять POST/GET-запросы и обновлять часть страницы без перезагрузки и без написания JavaScript-кода.',
    tags: ['framework', 'фреймворк', 'htmx', 'ajax', 'fetch замена', 'hx-get', 'hx-post', 'php'],
    when: 'Когда бэкенд пишется на PHP, Python или Go, и вы хотите получить плавность SPA-приложения без создания отдельного фронтенда на React.',
    alternatives: 'Ручной fetch() + innerHTML или полноценный SPA (React / Vue).',
    points: [
      'Кого заменяет: ручные цепочки fetch() -> response.text() -> document.getElementById().innerHTML.',
      'Подключение (CDN): <script src="https://unpkg.com/htmx.org@2.0.0"></script>.',
      'Атрибут hx-post="/api/deploy" отправляет запрос по клику, а hx-target="#hx-out" указывает, какой блок на странице обновить ответом сервера.'
    ],
    code: `<!-- Подключение: <script src="https://unpkg.com/htmx.org@2.0.0"></script> -->
<div class="hx-card">
  <div class="hx-tag">HTMX // HX-POST & HX-TARGET</div>
  <p class="hx-desc">Кнопка с атрибутами <code>hx-post="/api/ping" hx-target="#hx-result"</code> заменяет ручной <code>fetch()</code>:</p>
  <button id="hx-btn" class="hx-btn" hx-post="/api/ping" hx-target="#hx-result">
    Отправить hx-post запрос →
  </button>
  <div id="hx-result" class="hx-result">Ожидание запроса к серверу...</div>
</div>

<style>
.hx-card { max-width: 410px; margin: 0 auto; padding: 18px; background: #141619; border: 1px solid #2e323b; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; }
.hx-tag { font-size: 11px; color: #facc15; font-family: monospace; font-weight: 800; margin-bottom: 8px; }
.hx-desc { font-size: 13px; color: #a1a1aa; margin: 0 0 12px; }
.hx-desc code { color: #facc15; }
.hx-btn { width: 100%; padding: 9px 14px; background: #facc15; color: #09090b; font-weight: 800; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 10px; }
.hx-result { padding: 10px 12px; background: #0c0d0f; border: 1px solid #3f3f46; border-radius: 4px; font-family: monospace; font-size: 12px; color: #e4e4e7; }
</style>

<script>
let reqId = 100;
const btn = document.getElementById('hx-btn');
const out = document.getElementById('hx-result');
btn.addEventListener('click', () => {
  reqId++;
  out.textContent = '⏳ hx-request: отправка POST /api/ping...';
  setTimeout(() => {
    out.innerHTML = \`<span style="color:#facc15;">✓ HTTP 200 OK (Swap #hx-result)</span><br>Пакет #\${reqId} получен с сервера без перезагрузки!\`;
  }, 220);
});
</script>`
  },
  {
    id: 'fw-bootstrap5',
    lang: 'frameworks',
    title: 'Bootstrap 5.3 (Готовая 12-колоночная сетка и UI-компоненты без jQuery)',
    summary: 'Классический CSS/JS-фреймворк с готовыми адаптивными контейнерами (row / col-md-6), модальными окнами, таблицами, формами и встроенной тёмной темой.',
    tags: ['framework', 'фреймворк', 'bootstrap', 'bootstrap 5', 'сетка', 'col-md', 'компоненты'],
    when: 'Для быстрой сборки админ-панелей, внутренних корпоративных порталов, CRM и прототипов.',
    alternatives: 'Tailwind CSS (для кастомного дизайна) или нативный CSS Grid.',
    points: [
      'Кого заменяет: ручное написание базовых стилей для кнопок, таблиц, алертов, модалок и колонок.',
      'В версии Bootstrap 5 полностью удалена зависимость от jQuery — все интерактивные компоненты работают на чистом JS.',
      'Подключение через CDN занимает 2 строки: один <link> для CSS и один <script> для bundle.min.js.',
      'Атрибут data-bs-theme="dark" на теге <html> мгновенно переключает весь сайт в тёмную тему.'
    ],
    code: `<!-- Подключение: <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"> -->
<div class="bs-container">
  <div class="bs-header">
    <span>BOOTSTRAP 5.3 // 12-COLUMN GRID</span>
    <button id="bs-toggle" class="bs-btn">Сменить col-6 ↔ col-12</button>
  </div>
  <div class="bs-row" id="bs-grid">
    <div class="bs-col">col-md-6 (Модуль А)</div>
    <div class="bs-col">col-md-6 (Модуль Б)</div>
  </div>
</div>

<style>
.bs-container { max-width: 420px; margin: 0 auto; padding: 16px; background: #141619; border: 1px solid #2e323b; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; }
.bs-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-family: monospace; font-size: 11px; color: #facc15; }
.bs-btn { padding: 5px 10px; background: #27272a; color: #facc15; border: 1px solid #facc15; border-radius: 4px; font-size: 11px; cursor: pointer; font-weight: 700; }
.bs-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.bs-row.stacked { grid-template-columns: 1fr; }
.bs-col { padding: 12px; background: #0c0d0f; border: 1px solid #3f3f46; border-radius: 4px; text-align: center; font-size: 13px; font-family: monospace; }
</style>

<script>
const grid = document.getElementById('bs-grid');
document.getElementById('bs-toggle').addEventListener('click', () => {
  grid.classList.toggle('stacked');
});
</script>`
  },
  {
    id: 'fw-typescript',
    lang: 'frameworks',
    title: 'TypeScript (Строгая типизация и интерфейсы поверх JavaScript)',
    summary: 'Надмножество JavaScript от Microsoft, добавляющее статическую проверку типов, интерфейсы и автодополнение в IDE ещё до запуска кода в браузере.',
    tags: ['framework', 'фреймворк', 'typescript', 'ts', 'типизация', 'interface', 'type'],
    when: 'В любых проектах длиннее 300 строк кода и при командной разработке, чтобы исключить ошибки Cannot read properties of undefined.',
    alternatives: 'JSDoc-комментарии (@param, @returns) в обычных .js файлах.',
    points: [
      'Кого заменяет: динамический JavaScript без проверки типов и ручные проверки typeof x === "string".',
      'Установка в проект: npm install -D typescript && npx tsc --init.',
      'Vite поддерживает файлы .ts и .tsx из коробки без дополнительной настройки.',
      'На этапе сборки все типы вырезаются, превращаясь в чистый совместимый JavaScript.'
    ],
    code: `<!-- В файле user.ts:
interface UserProfile {
  id: number;
  name: string;
  role: 'admin' | 'engineer' | 'viewer';
}
-->
<div class="ts-card">
  <div class="ts-tag">TYPESCRIPT // INTERFACE CHECKER</div>
  <div class="ts-controls">
    <select id="ts-role">
      <option value="admin">role: 'admin'</option>
      <option value="engineer">role: 'engineer'</option>
      <option value="invalid">role: 'hacker' (Ошибка типа!)</option>
    </select>
  </div>
  <pre id="ts-output" class="ts-out"></pre>
</div>

<style>
.ts-card { max-width: 420px; margin: 0 auto; padding: 16px; background: #141619; border: 1px solid #2e323b; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; }
.ts-tag { font-size: 11px; color: #facc15; font-family: monospace; font-weight: 800; margin-bottom: 10px; }
.ts-controls select { width: 100%; padding: 8px 10px; background: #0c0d0f; color: #f4f4f5; border: 1px solid #3f3f46; border-radius: 4px; font-family: monospace; margin-bottom: 10px; }
.ts-out { margin: 0; padding: 12px; background: #0c0d0f; border: 1px solid #27272a; border-radius: 4px; font-family: monospace; font-size: 12px; white-space: pre-wrap; color: #fef08a; }
</style>

<script>
const sel = document.getElementById('ts-role');
const out = document.getElementById('ts-output');

function validateTS(role) {
  if (role === 'invalid') {
    out.style.color = '#f87171';
    out.textContent = \`TS2322: Type '"hacker"' is not assignable to type '"admin" | "engineer" | "viewer"'.\`;
  } else {
    out.style.color = '#fef08a';
    out.textContent = \`✓ Скомпилировано успешно:\\nconst user: UserProfile = { id: 42, role: "\${role}" };\`;
  }
}
sel.addEventListener('change', (e) => validateTS(e.target.value));
validateTS(sel.value);
</script>`
  },
  {
    id: 'fw-vite',
    lang: 'frameworks',
    title: 'Vite (Мгновенный сборщик проектов вместо Webpack и Gulp)',
    summary: 'Инструмент сборки нового поколения, использующий нативные ES-модули браузера для запуска сервера за 200 мс и оптимизированную сборку Rollup для продакшена.',
    tags: ['framework', 'фреймворк', 'vite', 'сборщик', 'webpack замена', 'gulp замена', 'hmr', 'npm'],
    when: 'Для старта любого современного проекта на чистом JS/TS, React, Vue, Svelte или многостраничной верстки.',
    alternatives: 'Parcel, esbuild или устаревший Webpack.',
    points: [
      'Кого заменяет: медленные конфиги Webpack на 200 строк и сложные пайплайны Gulp.',
      'Создание нового проекта за 1 команду: npm create vite@latest.',
      'Опция base: "./" в vite.config.js делает пути относительными, чтобы сайт работал в любой подпапке на GitHub Pages и Beget.',
      'Команда npm run build собирает минифицированную папку dist/, готовую к выгрузке на хостинг.'
    ],
    code: `<!-- Терминал: npm create vite@latest my-app -->
<div class="vite-box">
  <div class="vite-tag">VITE // CONFIG GENERATOR</div>
  <label class="vite-check">
    <input type="checkbox" id="vite-rel" checked>
    <span>Относительные пути <code>base: './'</code> (для GitHub Pages и Beget)</span>
  </label>
  <pre id="vite-code" class="vite-pre"></pre>
</div>

<style>
.vite-box { max-width: 420px; margin: 0 auto; padding: 16px; background: #141619; border: 1px solid #2e323b; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; }
.vite-tag { font-size: 11px; color: #facc15; font-family: monospace; font-weight: 800; margin-bottom: 10px; }
.vite-check { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: #d4d4d8; margin-bottom: 10px; cursor: pointer; }
.vite-check code { color: #facc15; }
.vite-pre { margin: 0; padding: 12px; background: #0c0d0f; border: 1px solid #3f3f46; border-radius: 4px; font-family: monospace; font-size: 12px; color: #fef08a; white-space: pre-wrap; }
</style>

<script>
const chk = document.getElementById('vite-rel');
const pre = document.getElementById('vite-code');

function updateConfig() {
  pre.textContent = \`import { defineConfig } from 'vite';

export default defineConfig({
  \${chk.checked ? "base: './', // Работает в любой папке на Pages/Beget\\n  " : ''}build: { outDir: 'dist' }
});\`;
}
chk.addEventListener('change', updateConfig);
updateConfig();
</script>`
  },
  {
    id: 'fw-laravel',
    lang: 'frameworks',
    title: 'Laravel 11 (Современный PHP-фреймворк и Eloquent ORM)',
    summary: 'Самый популярный PHP-фреймворк с элегантным роутингом, ORM Eloquent (вместо сырых SQL-запросов), шаблонизатором Blade, очередями и встроенной авторизацией.',
    tags: ['framework', 'фреймворк', 'laravel', 'php', 'eloquent', 'blade', 'mvc', 'бэкенд'],
    when: 'Для создания надёжных серверных веб-приложений, REST API, интернет-магазинов и личных кабинетов на PHP 8.2+.',
    alternatives: 'Symfony, Slim Framework или чистый PHP 8 для микро-скриптов.',
    points: [
      'Кого заменяет: разрозненные файлы index.php, login.php, db.php с ручным PDO и смешиванием SQL с HTML.',
      'Установка через Composer: composer create-project laravel/laravel my-app.',
      'Eloquent ORM позволяет писать Project::where("active", true)->get() вместо ручного написания SQL.',
      'Шаблонизатор Blade автоматически экранирует вывод {{ $user->name }} для полной защиты от XSS.'
    ],
    code: `<!-- Маршрут routes/web.php:
Route::get('/api/projects', fn() => Project::where('active', true)->get());
-->
<div class="lrv-card">
  <div class="lrv-tag">LARAVEL 11 // ELOQUENT ORM BUILDER</div>
  <div class="lrv-row">
    <button class="lrv-btn active" data-q="all">Project::all()</button>
    <button class="lrv-btn" data-q="active">->where('active', 1)</button>
  </div>
  <pre id="lrv-sql" class="lrv-sql"></pre>
</div>

<style>
.lrv-card { max-width: 420px; margin: 0 auto; padding: 16px; background: #141619; border: 1px solid #2e323b; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; }
.lrv-tag { font-size: 11px; color: #facc15; font-family: monospace; font-weight: 800; margin-bottom: 10px; }
.lrv-row { display: flex; gap: 8px; margin-bottom: 10px; }
.lrv-btn { flex: 1; padding: 7px 10px; background: #0c0d0f; color: #a1a1aa; border: 1px solid #3f3f46; border-radius: 4px; font-family: monospace; font-size: 12px; cursor: pointer; }
.lrv-btn.active { background: #facc15; color: #09090b; border-color: #facc15; font-weight: 800; }
.lrv-sql { margin: 0; padding: 12px; background: #0c0d0f; border: 1px solid #27272a; border-radius: 4px; font-family: monospace; font-size: 12px; color: #fef08a; white-space: pre-wrap; }
</style>

<script>
const sqlEl = document.getElementById('lrv-sql');
const btns = document.querySelectorAll('.lrv-btn');

function renderQuery(mode) {
  sqlEl.textContent = mode === 'all'
    ? 'Eloquent: Project::orderByDesc("id")->get();\\nSQL: SELECT * FROM projects ORDER BY id DESC;'
    : 'Eloquent: Project::where("active", true)->get();\\nSQL: SELECT * FROM projects WHERE active = 1;';
}
btns.forEach(b => b.addEventListener('click', () => {
  btns.forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  renderQuery(b.dataset.q);
}));
renderQuery('all');
</script>`
  },
  {
    id: 'fw-nextjs',
    lang: 'frameworks',
    title: 'Next.js 15 (Full-Stack фреймворк поверх React с SSR и SEO)',
    summary: 'Продакшен-фреймворк для React с файловым роутингом (App Router), серверным рендерингом (SSR) для идеальной индексации в поисковиках и серверными экшенами.',
    tags: ['framework', 'фреймворк', 'nextjs', 'next', 'react', 'ssr', 'ssg', 'seo'],
    when: 'Когда проекту на React нужна быстрая первая отрисовка и 100% индексация страниц в Google и Яндекс.',
    alternatives: 'Remix, Nuxt 3 (для Vue) или Astro (для контентных сайтов).',
    points: [
      'Кого заменяет: клиентский React SPA (Create React App), который отдаёт поисковым роботам пустой <div id="root"></div>.',
      'Быстрый старт: npx create-next-app@latest.',
      'Файловый роутинг: файл app/catalog/page.tsx автоматически становится страницей по адресу /catalog.',
      'Серверные компоненты (RSC) выполняют запросы к БД прямо на сервере и не отправляют лишний JS в браузер.'
    ],
    code: `<!-- Файл app/catalog/page.tsx (Next.js App Router) -->
<div class="nx-card">
  <div class="nx-tag">NEXT.JS 15 // APP ROUTER SIMULATOR</div>
  <div class="nx-routes">
    <button class="nx-route active" data-path="app/page.tsx">/</button>
    <button class="nx-route" data-path="app/docs/page.tsx">/docs</button>
    <button class="nx-route" data-path="app/api/route.ts">/api (JSON)</button>
  </div>
  <div id="nx-view" class="nx-view"></div>
</div>

<style>
.nx-card { max-width: 420px; margin: 0 auto; padding: 16px; background: #141619; border: 1px solid #2e323b; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; }
.nx-tag { font-size: 11px; color: #facc15; font-family: monospace; font-weight: 800; margin-bottom: 10px; }
.nx-routes { display: flex; gap: 6px; margin-bottom: 10px; }
.nx-route { flex: 1; padding: 7px; background: #0c0d0f; color: #a1a1aa; border: 1px solid #3f3f46; border-radius: 4px; font-family: monospace; font-size: 12px; cursor: pointer; }
.nx-route.active { background: #facc15; color: #09090b; border-color: #facc15; font-weight: 800; }
.nx-view { padding: 12px; background: #0c0d0f; border: 1px solid #27272a; border-radius: 4px; font-family: monospace; font-size: 12px; color: #e4e4e7; }
</style>

<script>
const view = document.getElementById('nx-view');
const rBtns = document.querySelectorAll('.nx-route');

function setRoute(file) {
  view.innerHTML = \`Файл: <strong style="color:#facc15;">\${file}</strong><br>Рендер: Server Component (SSR HTML готов для SEO)\`;
}
rBtns.forEach(b => b.addEventListener('click', () => {
  rBtns.forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  setRoute(b.dataset.path);
}));
setRoute('app/page.tsx');
</script>`
  },
  {
    id: 'fw-scss-sass',
    lang: 'frameworks',
    title: 'Sass / SCSS (Препроцессор CSS: миксины, функции и модули)',
    summary: 'Метаязык поверх CSS, добавляющий переиспользуемые миксины (@mixin), математические вычисления, функции и модульную архитектуру (@use).',
    tags: ['framework', 'фреймворк', 'sass', 'scss', 'препроцессор', 'mixin', 'css'],
    when: 'В крупных дизайн-системах и проектах со сложной генерацией тем и переиспользуемыми миксинами.',
    alternatives: 'Современный нативный CSS (который уже поддерживает переменные var() и вложенность & из коробки) или Tailwind CSS.',
    points: [
      'Кого упрощает: многократное дублирование медиа-запросов и шаблонных комбинаций свойств в CSS.',
      'Подключение в Vite: достаточно выполнить npm add -D sass-embedded и переименовать файл в styles.scss.',
      'Директива @mixin позволяет упаковать набор стилей с параметрами и подключать его через @include.'
    ],
    code: `<!-- В файле styles.scss:
@mixin industrial-panel($accent: #facc15) {
  border: 1px solid $accent;
  box-shadow: 4px 4px 0 $accent;
}
-->
<div class="scss-demo" id="scss-box">
  <div class="scss-tag">SCSS // @MIXIN INDUSTRIAL-PANEL($ACCENT)</div>
  <p>Выберите аргумент миксина <code>@include industrial-panel($color)</code>:</p>
  <div class="scss-btns">
    <button class="scss-btn" data-clr="#facc15">#facc15 (Жёлтый)</button>
    <button class="scss-btn" data-clr="#f97316">#f97316 (Янтарный)</button>
    <button class="scss-btn" data-clr="#22c55e">#22c55e (Сигнальный)</button>
  </div>
</div>

<style>
.scss-demo { max-width: 410px; margin: 0 auto; padding: 18px; background: #141619; border: 1px solid #facc15; box-shadow: 4px 4px 0 #facc15; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; transition: all 0.2s; }
.scss-tag { font-size: 11px; color: #facc15; font-family: monospace; font-weight: 800; margin-bottom: 6px; }
.scss-demo p { font-size: 13px; color: #a1a1aa; margin: 0 0 12px; }
.scss-demo code { color: #fef08a; }
.scss-btns { display: flex; gap: 6px; flex-wrap: wrap; }
.scss-btn { flex: 1; padding: 7px 10px; background: #0c0d0f; color: #f4f4f5; border: 1px solid #3f3f46; border-radius: 4px; font-size: 11px; font-family: monospace; cursor: pointer; }
</style>

<script>
const box = document.getElementById('scss-box');
document.querySelectorAll('.scss-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const c = btn.dataset.clr;
    box.style.borderColor = c;
    box.style.boxShadow = '4px 4px 0 ' + c;
  });
});
</script>`
  },
  {
    id: 'fw-gsap',
    lang: 'frameworks',
    title: 'GSAP (GreenSock — профессиональная таймлайн-анимация и Stagger)',
    summary: 'Индустриальный стандарт для сложных таймлайнов, плавной анимации SVG, морфинга и скролл-сцен (ScrollTrigger), работающий стабильно во всех браузерах.',
    tags: ['framework', 'фреймворк', 'gsap', 'scrolltrigger', 'анимация', 'keyframes замена'],
    when: 'Для промо-лендингов, интерактивного сторителлинга при скролле, последовательных анимаций (stagger) и сложных переходов.',
    alternatives: 'Нативные CSS transition / @keyframes или Web Animations API (element.animate) для простых ховеров.',
    points: [
      'Кого заменяет: громоздкие цепочки CSS @keyframes с ручным высчитыванием процентов и задержек animation-delay.',
      'Подключение (CDN): <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>.',
      'Установка через npm: npm install gsap.',
      'Свойство stagger: 0.1 автоматически запускает анимацию списка карточек каскадом с интервалом 0.1 секунды.'
    ],
    code: `<!-- В проекте: gsap.from('.stagger-item', { y: 24, opacity: 0, stagger: 0.1 }) -->
<div class="gsap-box">
  <div class="gsap-head">
    <span>GSAP // STAGGER TIMELINE</span>
    <button id="gsap-play" class="gsap-btn">▶ Запустить stagger</button>
  </div>
  <div class="gsap-grid">
    <div class="stagger-item">MOD // 01</div>
    <div class="stagger-item">MOD // 02</div>
    <div class="stagger-item">MOD // 03</div>
    <div class="stagger-item">MOD // 04</div>
  </div>
</div>

<style>
.gsap-box { max-width: 420px; margin: 0 auto; padding: 16px; background: #141619; border: 1px solid #2e323b; border-radius: 6px; color: #f4f4f5; font-family: system-ui, sans-serif; }
.gsap-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-family: monospace; font-size: 11px; color: #facc15; }
.gsap-btn { padding: 6px 12px; background: #facc15; color: #09090b; border: none; border-radius: 4px; font-weight: 800; cursor: pointer; font-family: monospace; }
.gsap-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
.stagger-item { padding: 14px 6px; background: #0c0d0f; border: 1px solid #facc15; border-radius: 4px; text-align: center; font-family: monospace; font-size: 11px; font-weight: 800; color: #fef08a; }
</style>

<script>
const nodes = document.querySelectorAll('.stagger-item');
function runStagger() {
  nodes.forEach((el, i) => {
    el.animate([
      { transform: 'translateY(18px) scale(0.92)', opacity: 0 },
      { transform: 'translateY(0) scale(1)', opacity: 1 }
    ], { duration: 420, delay: i * 90, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both' });
  });
}
document.getElementById('gsap-play').addEventListener('click', runStagger);
runStagger();
</script>`
  }
];
