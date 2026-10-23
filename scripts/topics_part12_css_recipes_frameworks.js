// Part 12: Core CSS Fundamentals (border, border-radius, etc.), Auth/UI Recipes, and Modern Frameworks Reference
export const cssRecipesAndFrameworks = [
  // ============================================================================
  // 1. FUNDAMENTAL CSS TOPICS (border, border-radius, outline, box-shadow, etc.)
  // ============================================================================
  {
    id: 'css-border-radius',
    lang: 'css',
    title: 'CSS: скругление углов (border-radius)',
    summary: 'Свойство для скругления одного или всех четырёх углов элемента: от мягких кнопок и карточек до идеальных кругов, капсул (pill) и органических форм.',
    tags: ['css', 'border-radius', 'скругление', 'углы', 'круг', 'pill', 'форма'],
    when: 'Для всех современных UI-компонентов: карточек (8px–16px), кнопок (6px–12px), тегов-капсул (9999px) и круглых аватарок (50%).',
    alternatives: 'Для сложных многоугольников и срезанных углов используйте свойство clip-path: polygon(...).',
    points: [
      'Одно значение (border-radius: 12px) задаёт одинаковое скругление для всех 4 углов.',
      'Четыре значения (border-radius: 16px 4px 16px 4px) задают углы по часовой стрелке: верхний-левый, верхний-правый, нижний-правый, нижний-левый.',
      'Значение 50% превращает квадратный блок (с aspect-ratio: 1) в идеальный круг.',
      'Значение 9999px (или 100vmax) создаёт форму капсулы (pill) независимо от ширины и высоты кнопки.',
      'Вложенные карточки: радиус внутреннего блока должен быть равен радиусу внешнего минус padding (r_inner = r_outer - padding).'
    ],
    code: `/* 1. Стандартная карточка */
.card {
  border-radius: 14px;
  border: 1px solid #334155;
  padding: 16px;
  background: #1e293b;
  color: #f8fafc;
}

/* 2. Кнопка-капсула (Pill) */
.pill-btn {
  border-radius: 9999px;
  padding: 8px 20px;
  background: #38bdf8;
  color: #090d16;
  font-weight: 700;
  border: none;
}

/* 3. Круглая аватарка */
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  display: inline-grid;
  place-items: center;
  font-weight: 800;
}

/* 4. Асимметричная форма (4 угла по часовой стрелке) */
.organic-badge {
  border-radius: 24px 4px 24px 4px;
  padding: 10px 18px;
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid #10b981;
}`,
    example: `<div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;">
  <div class="card">Карточка (14px)</div>
  <button class="pill-btn">Капсула (9999px)</button>
  <div class="avatar">DS</div>
  <div class="organic-badge">24px 4px 24px 4px</div>
</div>`
  },
  {
    id: 'css-border',
    lang: 'css',
    title: 'CSS: границы элементов (border, border-style, border-color)',
    summary: 'Универсальное свойство для задания толщины, стиля (solid, dashed, dotted) и цвета рамки вокруг элемента или его отдельных сторон.',
    tags: ['css', 'border', 'граница', 'рамка', 'border-width', 'border-color', 'border-style', 'dashed'],
    when: 'Для визуального разделения карточек, полей ввода (input), таблиц, цитат и зон загрузки файлов (dashed).',
    alternatives: 'Используйте outline для подсветки фокуса (не влияет на размеры блока) или box-shadow: 0 0 0 1px для субпиксельных рамок.',
    points: [
      'Краткая запись: border: 1px solid rgba(148, 163, 184, 0.2) (толщина, стиль, цвет).',
      'Без указания border-style (например, solid или dashed) рамка не отобразится, так как по умолчанию стиль равен none.',
      'Можно задавать отдельные стороны: border-top, border-bottom, border-left, border-right или логические свойства border-inline, border-block.',
      'При box-sizing: border-box толщина border включается в общую ширину и высоту элемента и не ломает сетку.'
    ],
    code: `/* Тонкая современная рамка карточки */
.box-solid {
  border: 1px solid rgba(56, 189, 248, 0.45);
  border-radius: 10px;
  padding: 14px;
  background: #131c2e;
}

/* Пунктирная зона для Drag-and-Drop загрузки */
.box-dashed {
  border: 2px dashed #6366f1;
  border-radius: 10px;
  padding: 14px;
  background: rgba(99, 102, 241, 0.08);
}

/* Акцентная полоса только снизу */
.box-bottom {
  border-bottom: 3px solid #10b981;
  padding: 12px;
  background: #1e293b;
}`,
    example: `<div style="display:grid;gap:12px;">
  <div class="box-solid">1px solid — стандартная рамка интерфейса</div>
  <div class="box-dashed">2px dashed — пунктирная область для файлов</div>
  <div class="box-bottom">border-bottom: 3px solid — нижний акцент</div>
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
      'Свойство outline-offset позволяет отодвинуть контур от края кнопки (например, на 2px–3px) или сдвинуть внутрь (отрицательное значение).',
      'В современных браузерах outline автоматически повторяет скругление border-radius элемента.'
    ],
    code: `.focus-demo-btn {
  padding: 10px 18px;
  border-radius: 8px;
  background: #38bdf8;
  color: #090d16;
  font-weight: 700;
  border: none;
  outline: 2px solid #38bdf8;
  outline-offset: 4px;
}`,
    example: `<div style="padding:16px;">
  <button class="focus-demo-btn">Кнопка с outline-offset: 4px</button>
</div>`
  },
  {
    id: 'css-box-shadow',
    lang: 'css',
    title: 'CSS: многослойные тени и свечение (box-shadow)',
    summary: 'Добавление внешних и внутренних (inset) теней к блокам для создания глубины, парящих модальных окон, неоморфизма и тонких обводок.',
    tags: ['css', 'box-shadow', 'тень', 'inset', 'свечение', 'elevation'],
    when: 'Для выделения модальных окон, выпадающих списков (dropdown), карточек при наведении и кнопок.',
    alternatives: 'Для теней вокруг прозрачных PNG/SVG-иконок используйте filter: drop-shadow(...), так как box-shadow рисует тень по прямоугольной рамке.',
    points: [
      'Синтаксис: смещение-X, смещение-Y, размытие (blur), растяжение (spread), цвет.',
      'Отрицательный spread (например, -8px) делает тень уже самого блока, создавая естественный объём снизу.',
      'Через запятую можно комбинировать несколько слоёв теней для реалистичного рассеянного света.'
    ],
    code: `.elevated-card {
  padding: 20px;
  border-radius: 14px;
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.5),
    0 8px 10px -6px rgba(0, 0, 0, 0.4),
    0 0 24px rgba(56, 189, 248, 0.18);
}`
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
  padding: 20px 24px;  /* 20px сверху/снизу, 24px слева/справа */
  background: #162032;
  border: 1px solid #334155;
  border-radius: 12px;
}`
  },

  // ============================================================================
  // 2. PRACTICAL AUTH & UI RECIPES (Вход, Регистрация, OTP, Корзина, Фильтры и др.)
  // ============================================================================
  {
    id: 'recipe-login-form',
    lang: 'recipes',
    title: 'Рецепт: Форма входа (Login / Авторизация + Показ пароля)',
    summary: 'Готовая карточка входа в аккаунт с переключением видимости пароля (глазок), валидацией полей, чекбоксом «Запомнить меня» и индикацией загрузки.',
    tags: ['рецепт', 'вход', 'логин', 'login', 'авторизация', 'форма входа', 'пароль', 'auth'],
    when: 'Для страниц входа в личный кабинет, админ-панель, SaaS-сервис или модального окна авторизации.',
    alternatives: 'Можно дополнить кнопками OAuth (Войти через Google / GitHub) или беспарольным входом по одноразовому коду (OTP).',
    points: [
      'Использует правильные атрибуты autocomplete="username" и autocomplete="current-password" для работы менеджеров паролей.',
      'Кнопка переключения типа поля (password ↔ text) имеет aria-label для доступности.',
      'При отправке формы блокирует кнопку submit, предотвращая двойные клики.'
    ],
    code: `<form class="login-card" id="login-form">
  <div class="login-head">
    <h3>Вход в систему</h3>
    <p>Введите данные вашего рабочего аккаунта</p>
  </div>

  <div class="form-group">
    <label for="login-email">Email адрес</label>
    <input type="email" id="login-email" value="developer@devshelf.ru" required autocomplete="username" placeholder="name@company.com">
  </div>

  <div class="form-group">
    <div class="label-row">
      <label for="login-pass">Пароль</label>
      <a href="#forgot" class="forgot-link">Забыли пароль?</a>
    </div>
    <div class="pass-wrap">
      <input type="password" id="login-pass" value="SecretPass2026" required minlength="6" autocomplete="current-password">
      <button type="button" id="toggle-pass" class="eye-btn" aria-label="Показать пароль">Показать</button>
    </div>
  </div>

  <label class="remember-row">
    <input type="checkbox" checked>
    <span>Запомнить устройство на 30 дней</span>
  </label>

  <button type="submit" class="submit-btn" id="login-submit">Войти в аккаунт →</button>
  <div id="login-status" class="login-status" hidden></div>
</form>

<style>
.login-card {
  max-width: 360px;
  margin: 0 auto;
  padding: 22px;
  background: #131c2e;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 14px;
  color: #f8fafc;
  font-family: system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.login-head h3 { margin: 0 0 4px; font-size: 18px; }
.login-head p { margin: 0; font-size: 13px; color: #94a3b8; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-size: 12.5px; font-weight: 600; color: #cbd5e1; }
.label-row { display: flex; justify-content: space-between; align-items: center; }
.forgot-link { font-size: 12px; color: #38bdf8; text-decoration: none; }
.form-group input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #334155;
  background: #090d16;
  color: #f8fafc;
  font-size: 14px;
  box-sizing: border-box;
}
.form-group input:focus { outline: none; border-color: #38bdf8; }
.pass-wrap { position: relative; display: flex; align-items: center; }
.pass-wrap input { padding-right: 78px; }
.eye-btn {
  position: absolute;
  right: 6px;
  padding: 5px 8px;
  border-radius: 6px;
  background: #1e293b;
  color: #94a3b8;
  border: 1px solid #334155;
  font-size: 11px;
  cursor: pointer;
}
.remember-row { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; cursor: pointer; }
.submit-btn {
  padding: 11px;
  border-radius: 8px;
  border: none;
  background: #38bdf8;
  color: #090d16;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
}
.login-status {
  padding: 9px 12px;
  border-radius: 8px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.4);
  color: #6ee7b7;
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
  statusBox.textContent = '✓ Успешный вход! Перенаправление в кабинет...';
});
</script>`
  },
  {
    id: 'recipe-register-form',
    lang: 'recipes',
    title: 'Рецепт: Регистрация с индикатором надёжности пароля',
    summary: 'Интерактивная форма создания аккаунта с живой шкалой оценки сложности пароля (длина, цифры, спецсимволы) и проверкой совпадения.',
    tags: ['рецепт', 'регистрация', 'signup', 'register', 'пароль', 'валидация', 'форма'],
    when: 'Для экранов регистрации пользователей, смены пароля в настройках профиля и онбординга.',
    alternatives: 'Используйте OAuth 2.0 / Passkeys (WebAuthn), если хотите избавить пользователя от придумывания пароля.',
    points: [
      'Оценивает пароль по 4 критериям в реальном времени при вводе (событие input).',
      'Визуально меняет цвет прогресс-бара от красного (слабый) до изумрудного (надёжный).',
      'Информирует пользователя, каких именно символов не хватает для защиты аккаунта.'
    ],
    code: `<div class="reg-card">
  <h3>Создание аккаунта</h3>
  <label class="reg-field">
    <span>Имя и фамилия</span>
    <input type="text" placeholder="Павел Пардаев" value="Павел Разработчик">
  </label>
  <label class="reg-field">
    <span>Придумайте пароль</span>
    <input type="text" id="reg-pass" value="DevShelf#2026" placeholder="Минимум 8 символов">
  </label>
  <div class="meter-bar"><div id="meter-fill" class="meter-fill"></div></div>
  <div id="meter-text" class="meter-text">Оценка пароля...</div>
</div>

<style>
.reg-card { max-width: 350px; margin: 0 auto; padding: 20px; background: #131c2e; border: 1px solid #263449; border-radius: 14px; color: #f8fafc; font-family: system-ui, sans-serif; display: flex; flex-direction: column; gap: 12px; }
.reg-card h3 { margin: 0; font-size: 17px; }
.reg-field { display: flex; flex-direction: column; gap: 5px; font-size: 12.5px; color: #cbd5e1; }
.reg-field input { padding: 9px 12px; border-radius: 8px; border: 1px solid #334155; background: #090d16; color: #fff; }
.meter-bar { height: 6px; background: #1e293b; border-radius: 99px; overflow: hidden; }
.meter-fill { height: 100%; width: 0%; transition: width 0.25s, background 0.25s; }
.meter-text { font-size: 12px; color: #94a3b8; }
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
    { w: '15%', c: '#ef4444', t: 'Слабый пароль (добавьте цифры и спецсимволы)' },
    { w: '40%', c: '#f59e0b', t: 'Средний пароль' },
    { w: '75%', c: '#38bdf8', t: 'Хороший пароль' },
    { w: '100%', c: '#10b981', t: '✓ Отличный надёжный пароль' }
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
    title: 'Рецепт: Ввод SMS / 2FA пин-кода из 4–6 цифр (OTP Input)',
    summary: 'Удобное поле ввода проверочного кода с автоматическим переходом фокуса на следующую ячейку, поддержкой клавиши Backspace и вставки из буфера.',
    tags: ['рецепт', 'otp', '2fa', 'пин код', 'sms код', 'верификация', 'вход'],
    when: 'Для двухфакторной аутентификации (2FA), подтверждения телефона по SMS или кода из письма.',
    alternatives: 'Одно обычное поле с inputmode="numeric" и autocomplete="one-time-code".',
    points: [
      'При вводе цифры курсор мгновенно перепрыгивает в следующее поле без лишних кликов.',
      'Нажатие Backspace в пустой ячейке возвращает фокус на предыдущую цифру.',
      'Атрибут inputmode="numeric" открывает крупную цифровую клавиатуру на iPhone и Android.'
    ],
    code: `<div class="otp-card">
  <h4>Подтверждение входа (2FA)</h4>
  <p>Введите 4-значный код, отправленный в Telegram</p>
  <div class="otp-inputs" id="otp-box">
    <input type="text" maxlength="1" inputmode="numeric" value="4">
    <input type="text" maxlength="1" inputmode="numeric" value="8">
    <input type="text" maxlength="1" inputmode="numeric" value="2">
    <input type="text" maxlength="1" inputmode="numeric" value="">
  </div>
  <div id="otp-result" class="otp-hint">Введите последнюю цифру...</div>
</div>

<style>
.otp-card { max-width: 320px; margin: 0 auto; padding: 20px; background: #131c2e; border: 1px solid #263449; border-radius: 14px; text-align: center; color: #f8fafc; font-family: system-ui, sans-serif; }
.otp-card h4 { margin: 0 0 6px; font-size: 16px; }
.otp-card p { margin: 0 0 14px; font-size: 12.5px; color: #94a3b8; }
.otp-inputs { display: flex; justify-content: center; gap: 10px; margin-bottom: 12px; }
.otp-inputs input { width: 48px; height: 54px; text-align: center; font-size: 22px; font-weight: 800; border-radius: 10px; border: 1px solid #334155; background: #090d16; color: #38bdf8; }
.otp-inputs input:focus { outline: none; border-color: #38bdf8; box-shadow: 0 0 0 2px rgba(56,189,248,0.2); }
.otp-hint { font-size: 12.5px; color: #10b981; }
</style>

<script>
const inputs = [...document.querySelectorAll('#otp-box input')];
const res = document.getElementById('otp-result');

inputs.forEach((inp, idx) => {
  inp.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    if (e.target.value && idx < inputs.length - 1) inputs[idx + 1].focus();
    const code = inputs.map(i => i.value).join('');
    res.textContent = code.length === 4 ? '✓ Код принят: ' + code : 'Ожидание ввода...';
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
    summary: 'Готовый модуль корзины интернет-магазина с кнопками +/- количества, удалением позиции, расчётом скидки и итоговой стоимости.',
    tags: ['рецепт', 'корзина', 'интернет-магазин', 'ecommerce', 'cart', 'калькулятор цены'],
    when: 'Для интернет-магазинов, конфигураторов услуг, оформления заказа и мини-корзины в шапке.',
    alternatives: 'Для сложных многостраничных магазинов состояние корзины синхронизируют с localStorage и серверной БД.',
    points: [
      'Динамически пересчитывает подитог и общую сумму при изменении количества любого товара.',
      'Форматирует валюту по русскому стандарту через Intl.NumberFormat("ru-RU").',
      'Не позволяет уменьшить количество товара ниже 1.'
    ],
    code: `<div class="cart-box">
  <h4>Корзина заказа</h4>
  <div id="cart-items" class="cart-items"></div>
  <div class="cart-footer">
    <span>Итого к оплате:</span>
    <strong id="cart-total">0 ₽</strong>
  </div>
</div>

<style>
.cart-box { max-width: 380px; margin: 0 auto; padding: 18px; background: #131c2e; border: 1px solid #263449; border-radius: 14px; color: #f8fafc; font-family: system-ui, sans-serif; }
.cart-box h4 { margin: 0 0 12px; font-size: 16px; }
.cart-items { display: flex; flex-direction: column; gap: 8px; }
.cart-row { display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #090d16; border-radius: 8px; border: 1px solid #1e293b; font-size: 13px; }
.qty-ctrl { display: flex; align-items: center; gap: 8px; }
.qty-btn { width: 26px; height: 26px; border-radius: 6px; border: 1px solid #334155; background: #1e293b; color: #fff; cursor: pointer; font-weight: 700; }
.cart-footer { margin-top: 14px; padding-top: 12px; border-top: 1px solid #263449; display: flex; justify-content: space-between; align-items: center; font-size: 15px; }
.cart-footer strong { color: #38bdf8; font-size: 18px; }
</style>

<script>
const items = [
  { id: 1, name: 'Подписка DevShelf Pro', price: 1490, qty: 1 },
  { id: 2, name: 'UI-кит компонентов', price: 990, qty: 2 }
];
const listEl = document.getElementById('cart-items');
const totalEl = document.getElementById('cart-total');

function renderCart() {
  listEl.innerHTML = items.map(item => \`
    <div class="cart-row">
      <div>
        <div><strong>\${item.name}</strong></div>
        <div style="color:#94a3b8;font-size:12px;">\${item.price} ₽ / шт.</div>
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
    when: 'Для каталогов товаров, портфолио проектов, списков статей, FAQ и таблиц сотрудников.',
    alternatives: 'При объёме более 5 000 записей используйте серверную фильтрацию через Fetch API и пагинацию.',
    points: [
      'Сочетает фильтр по выбранной категории и текстовый поиск по подстроке.',
      'При отсутствии совпадений аккуратно выводит пустое состояние (Empty State).'
    ],
    code: `<div class="flt-demo">
  <div class="flt-bar">
    <input type="search" id="flt-input" placeholder="Поиск по стеку...">
    <button class="flt-tag active" data-cat="all">Все</button>
    <button class="flt-tag" data-cat="front">Frontend</button>
    <button class="flt-tag" data-cat="back">Backend</button>
  </div>
  <div id="flt-list" class="flt-list"></div>
</div>

<style>
.flt-demo { max-width: 420px; margin: 0 auto; color: #f8fafc; font-family: system-ui, sans-serif; }
.flt-bar { display: flex; gap: 6px; margin-bottom: 12px; flex-wrap: wrap; }
.flt-bar input { flex: 1; min-width: 140px; padding: 7px 10px; border-radius: 7px; border: 1px solid #334155; background: #090d16; color: #fff; font-size: 13px; }
.flt-tag { padding: 6px 10px; border-radius: 7px; border: 1px solid #334155; background: #131c2e; color: #94a3b8; font-size: 12px; cursor: pointer; }
.flt-tag.active { background: #38bdf8; color: #090d16; border-color: #38bdf8; font-weight: 700; }
.flt-list { display: grid; gap: 8px; }
.flt-item { padding: 10px 12px; border-radius: 8px; background: #131c2e; border: 1px solid #263449; display: flex; justify-content: space-between; font-size: 13px; }
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
    ? res.map(d => \`<div class="flt-item"><strong>\${d.name}</strong><span style="color:#38bdf8">\${d.cat}</span></div>\`).join('')
    : '<div style="color:#94a3b8;font-size:13px;">Ничего не найдено</div>';
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
    title: 'Рецепт: Drag-and-Drop загрузка файлов с превью изображения',
    summary: 'Зона перетаскивания файлов с подсветкой при наведении, проверкой размера и мгновенным показом миниатюры через FileReader / URL.createObjectURL.',
    tags: ['рецепт', 'загрузка файла', 'drag and drop', 'dropzone', 'file upload', 'превью картинки'],
    when: 'Для загрузки аватарок, прикрепления документов в формах обратной связи и загрузки фото товаров.',
    alternatives: 'Обычный <input type="file">, который выглядит по-разному во всех браузерах.',
    points: [
      'События dragover и drop требуют вызова event.preventDefault(), чтобы браузер не открывал файл в новой вкладке.',
      'Метод URL.createObjectURL(file) мгновенно создаёт локальную ссылку на выбранную картинку для предпросмотра до отправки на сервер.'
    ],
    code: `<label class="dropzone" id="dropzone">
  <input type="file" id="file-inp" accept="image/*" hidden>
  <div id="drop-info">
    <strong>Перетащите изображение сюда</strong>
    <p>или нажмите для выбора файла (PNG, JPG, WebP)</p>
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
  min-height: 140px;
  padding: 20px;
  border: 2px dashed #38bdf8;
  border-radius: 14px;
  background: rgba(56, 189, 248, 0.06);
  color: #f8fafc;
  text-align: center;
  cursor: pointer;
  font-family: system-ui, sans-serif;
  transition: background 0.2s, border-color 0.2s;
}
.dropzone:hover, .dropzone.dragover { background: rgba(56, 189, 248, 0.14); border-color: #7dd3fc; }
.dropzone p { margin: 6px 0 0; font-size: 12px; color: #94a3b8; }
</style>

<script>
const dz = document.getElementById('dropzone');
const inp = document.getElementById('file-inp');
const info = document.getElementById('drop-info');

function handleFile(file) {
  if (!file) return;
  info.innerHTML = \`<strong>✓ Выбран файл: \${file.name}</strong><p>Размер: \${(file.size / 1024).toFixed(1)} КБ</p>\`;
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
  // 3. MODERN FRAMEWORKS REFERENCE (Замена/упрощение прародителей, подключение, примеры)
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
      'Подключение за 10 секунд (CDN для прототипов): <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>.',
      'Подключение в проекте (Vite): npm install tailwindcss @tailwindcss/vite и строка @import "tailwindcss"; в главном CSS.',
      'Адаптивность и состояния пишутся прямо через префиксы: hover:bg-sky-400, md:grid-cols-3, dark:bg-slate-900.'
    ],
    code: `<!-- 1. Подключение Tailwind CSS v4 (CDN или через Vite) -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> -->

<!-- 2. Разметка карточки без единой строчки кастомного CSS -->
<div class="tw-demo-card">
  <div class="tw-row">
    <span class="tw-badge">Tailwind CSS v4</span>
    <span class="tw-price">0 КБ лишнего CSS</span>
  </div>
  <h4>Утилитарная вёрстка нового поколения</h4>
  <p>Классы вроде <code>flex items-center justify-between gap-4 p-6 rounded-xl bg-slate-900</code> заменяют десятки строк обычного CSS.</p>
  <button class="tw-btn">Подключить в проект →</button>
</div>

<style>
/* Эмуляция скомпилированных утилит Tailwind для автономного превью */
.tw-demo-card { max-width: 400px; margin: 0 auto; padding: 20px; border-radius: 14px; background: #0f172a; border: 1px solid #1e293b; color: #f8fafc; font-family: system-ui, sans-serif; }
.tw-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.tw-badge { background: rgba(56,189,248,0.15); color: #38bdf8; padding: 3px 9px; border-radius: 6px; font-size: 12px; font-weight: 700; }
.tw-price { font-size: 12px; color: #94a3b8; font-family: monospace; }
.tw-demo-card h4 { margin: 0 0 6px; font-size: 16px; }
.tw-demo-card p { margin: 0 0 14px; font-size: 13px; color: #94a3b8; line-height: 1.5; }
.tw-demo-card code { color: #38bdf8; font-family: monospace; }
.tw-btn { width: 100%; padding: 9px; border-radius: 8px; background: #38bdf8; color: #090d16; font-weight: 700; border: none; cursor: pointer; }
</style>`,
    example: `// Установка в Vite-проект:
// npm install tailwindcss @tailwindcss/vite

// vite.config.js:
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
});`
  },
  {
    id: 'fw-react',
    lang: 'frameworks',
    title: 'React 19 (Декларативные компоненты вместо ручного DOM API)',
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
    code: `// Пример компонента React 19 (CounterCard.jsx)
import { useState } from 'react';

export function CounterCard() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h3>Реактивный счётчик: {count}</h3>
      <button onClick={() => setCount(prev => prev + 1)}>
        Увеличить (+1)
      </button>
    </div>
  );
}`,
    example: `<!-- Интерактивная демонстрация логики состояния React -->
<div class="react-sim" id="react-root">
  <span style="color:#38bdf8;font-size:11px;font-family:monospace;font-weight:700;">REACT COMPONENT STATE</span>
  <h3 id="r-title" style="margin:8px 0;">Реактивный счётчик: 0</h3>
  <p style="font-size:13px;color:#94a3b8;margin:0 0 12px;">При вызове <code>setCount(n + 1)</code> React сам обновляет виртуальный DOM без ручного <code>querySelector</code>.</p>
  <button id="r-btn" style="background:#38bdf8;color:#090d16;border:none;padding:8px 16px;border-radius:8px;font-weight:700;cursor:pointer;">setCount(count + 1)</button>
</div>
<script>
let stateCount = 0;
document.getElementById('r-btn').onclick = () => {
  stateCount++;
  document.getElementById('r-title').textContent = 'Реактивный счётчик: ' + stateCount;
};
</script>`
  },
  {
    id: 'fw-vue3',
    lang: 'frameworks',
    title: 'Vue 3 (Composition API и <script setup> — прогрессивный фреймворк)',
    summary: 'Интуитивный фреймворк с автоматической реактивностью (ref, computed), который одинаково легко подключается одной строкой CDN на готовый сайт или собирается через Vite.',
    tags: ['framework', 'фреймворк', 'vue', 'vue3', 'composition api', 'ref', 'v-model', 'реактивность'],
    when: 'Когда нужен баланс между мощью компонентного SPA и простотой привычного разделения на шаблон <template>, логику <script setup> и стили <style scoped>.',
    alternatives: 'React 19, Svelte или Alpine.js.',
    points: [
      'Кого заменяет: громоздкие jQuery-скрипты (при подключении через CDN) и сложный шаблонный код больших SPA.',
      'Подключение без сборщика (CDN): <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>.',
      'Создание проекта со сборщиком: npm create vue@latest.',
      'Директива v-model обеспечивает двустороннее связывание полей формы с переменной за 1 атрибут.'
    ],
    code: `<!-- 1. Однофайловый компонент Vue 3 (App.vue) -->
<script setup>
import { ref, computed } from 'vue';

const name = ref('Разработчик');
const greeting = computed(() => \`Привет, \${name.value}! Добро пожаловать во Vue 3.\`);
</script>

<template>
  <div class="vue-card">
    <input v-model="name" placeholder="Введите имя" />
    <p>{{ greeting }}</p>
  </div>
</template>`,
    example: `<div style="padding:18px;background:#131c2e;border:1px solid #10b981;border-radius:12px;color:#f8fafc;font-family:system-ui,sans-serif;">
  <div style="font-size:11px;color:#10b981;font-weight:700;margin-bottom:6px;">VUE 3 TWO-WAY BINDING (v-model)</div>
  <input id="vue-inp" value="Разработчик" style="width:100%;padding:8px 12px;border-radius:8px;border:1px solid #334155;background:#090d16;color:#fff;margin-bottom:10px;box-sizing:border-box;">
  <div id="vue-out" style="font-weight:700;color:#6ee7b7;">Привет, Разработчик! Добро пожаловать во Vue 3.</div>
</div>
<script>
const vInp = document.getElementById('vue-inp');
const vOut = document.getElementById('vue-out');
vInp.oninput = () => { vOut.textContent = 'Привет, ' + (vInp.value || 'Гость') + '! Добро пожаловать во Vue 3.'; };
</script>`
  },
  {
    id: 'fw-alpinejs',
    lang: 'frameworks',
    title: 'Alpine.js (Легковесная замена jQuery прямо в HTML-разметке)',
    summary: 'Микро-фреймворк весом 15 КБ, позволяющий создавать модалки, табы, выпадающие меню и аккордеоны прямо через HTML-атрибуты x-data, x-show и @click без отдельных .js файлов.',
    tags: ['framework', 'фреймворк', 'alpine', 'alpinejs', 'jquery замена', 'x-data', 'микрофреймворк'],
    when: 'Идеальный выбор для серверных сайтов (PHP, Laravel, WordPress, Django) и лендингов, где React избыточен, а писать ручной querySelector долго.',
    alternatives: 'Нативный JavaScript или HTMX.',
    points: [
      'Кого заменяет: устаревший jQuery и десятки мелких файлов вроде tabs.js, modal.js, dropdown.js.',
      'Подключение в 1 строку в <head>: <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>.',
      'Атрибут x-data="{ open: false }" объявляет локальное реактивное состояние прямо на HTML-теге.',
      'Атрибуты @click="open = !open" и x-show="open" управляют видимостью блока без единого ID или класса.'
    ],
    code: `<!-- 1. Подключение Alpine.js одной строкой (без npm и сборки!) -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

<!-- 2. Выпадающее меню прямо в HTML -->
<div x-data="{ open: false }" class="alpine-box">
  <button @click="open = !open" class="alpine-btn">
    Настройки профиля ▾
  </button>

  <div x-show="open" class="alpine-menu">
    <p>Аккаунт: <strong>PRO</strong></p>
    <p>Вся логика описана в атрибутах <code>x-data</code> и <code>x-show</code>!</p>
  </div>
</div>`,
    example: `<div style="padding:18px;background:#131c2e;border:1px solid #38bdf8;border-radius:12px;color:#f8fafc;font-family:system-ui,sans-serif;">
  <button id="alp-btn" style="background:#38bdf8;color:#090d16;border:none;padding:8px 14px;border-radius:8px;font-weight:700;cursor:pointer;">Настройки профиля (x-data="{ open }") ▾</button>
  <div id="alp-menu" style="margin-top:10px;padding:12px;background:#090d16;border:1px solid #334155;border-radius:8px;font-size:13px;">
    ✓ Блок управляется декларативно без единого <code>document.querySelector</code>!
  </div>
</div>
<script>
const aBtn = document.getElementById('alp-btn');
const aMenu = document.getElementById('alp-menu');
aBtn.onclick = () => { aMenu.hidden = !aMenu.hidden; };
</script>`
  },
  {
    id: 'fw-htmx',
    lang: 'frameworks',
    title: 'HTMX (AJAX-запросы, WebSockets и динамика прямо из HTML)',
    summary: 'Библиотека, позволяющая любому HTML-элементу отправлять POST/GET-запросы и обновлять часть страницы без перезагрузки и без написания JavaScript-кода.',
    tags: ['framework', 'фреймворк', 'htmx', 'ajax', 'fetch замена', 'hx-get', 'hx-post', 'php'],
    when: 'Когда бэкенд пишется на PHP, Python или Go, и вы хотите получить плавность SPA-приложения без создания отдельного фронтенда на React.',
    alternatives: 'Ручной fetch() + innerHTML или полноценный SPA (React / Vue).',
    points: [
      'Кого заменяет: ручные цепочки fetch() -> response.text() -> document.getElementById().innerHTML.',
      'Подключение (CDN): <script src="https://unpkg.com/htmx.org@2.0.0"></script>.',
      'Атрибут hx-post="/api/like" отправляет запрос по клику, а hx-target="#likes-count" указывает, какой блок на странице обновить ответом сервера.'
    ],
    code: `<!-- Подключение HTMX -->
<script src="https://unpkg.com/htmx.org@2.0.0"></script>

<!-- Поиск с автоподгрузкой результатов и задержкой 300ms (debounce) -->
<input type="search"
       name="q"
       hx-get="/api/search"
       hx-trigger="input changed delay:300ms"
       hx-target="#search-results"
       placeholder="Живой поиск через HTMX...">

<div id="search-results">Результаты появятся здесь без единой строчки JS</div>`
  },
  {
    id: 'fw-bootstrap5',
    lang: 'frameworks',
    title: 'Bootstrap 5.3 (Готовая 12-колоночная сетка и UI-компоненты без jQuery)',
    summary: 'Классический CSS/JS-фреймворк с готовыми адаптивными контейнерами (row / col-md-6), модальными окнами, таблицами, формами и встроенной тёмной темой.',
    tags: ['framework', 'фреймворк', 'bootstrap', 'bootstrap 5', 'сетка', 'col-md', 'компоненты'],
    when: 'Для быстрой сборки админ-панелей, внутренних корпоративных порталов, CRM и прототипов.',
    alternatives: 'Tailwind CSS (для уникального дизайна) или нативный CSS Grid.',
    points: [
      'Кого заменяет: ручное написание базовых стилей для кнопок, таблиц, алертов, модалок и колонок.',
      'В версии Bootstrap 5 полностью удалена зависимость от jQuery — все интерактивные компоненты работают на чистом JS.',
      'Подключение через CDN занимает 2 строки: один <link> для CSS и один <script> для bundle.min.js.',
      'Атрибут data-bs-theme="dark" на теге <html> мгновенно переключает весь сайт в тёмную тему.'
    ],
    code: `<!-- 1. Подключение Bootstrap 5.3 CSS в <head> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- 2. Адаптивная 12-колоночная сетка -->
<div class="container py-3" data-bs-theme="dark">
  <div class="row g-3">
    <div class="col-12 col-md-6">
      <div class="p-3 border rounded bg-dark text-light">Колонка 1 (50% на ПК, 100% на телефоне)</div>
    </div>
    <div class="col-12 col-md-6">
      <div class="p-3 border rounded bg-dark text-light">Колонка 2 (50% на ПК, 100% на телефоне)</div>
    </div>
  </div>
</div>`
  },
  {
    id: 'fw-typescript',
    lang: 'frameworks',
    title: 'TypeScript (Строгая типизация поверх JavaScript)',
    summary: 'Надмножество JavaScript от Microsoft, добавляющее статическую проверку типов, интерфейсы и автодополнение в IDE до запуска кода в браузере.',
    tags: ['framework', 'фреймворк', 'typescript', 'ts', 'типизация', 'interface', 'type'],
    when: 'В любых проектах длиннее 300 строк кода и при командной разработке, чтобы исключить ошибки Cannot read properties of undefined.',
    alternatives: 'JSDoc-комментарии (@param, @returns) в обычных .js файлах.',
    points: [
      'Кого заменяет: динамический JavaScript без проверки типов и ручные проверки typeof x === "string".',
      'Установка в проект: npm install -D typescript && npx tsc --init.',
      'Vite поддерживает файлы .ts и .tsx из коробки без дополнительной настройки.',
      'На этапе сборки все типы вырезаются, превращаясь в чистый совместимый JavaScript.'
    ],
    code: `// Описание структуры пользователя через interface
interface UserProfile {
  id: number;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  email?: string; // Необязательное поле
}

function formatUserBadge(user: UserProfile): string {
  return \`[\${user.role.toUpperCase()}] \${user.name} (#\${user.id})\`;
}

const current: UserProfile = { id: 42, name: 'Павел', role: 'admin' };
console.log(formatUserBadge(current));`
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
      'Команда npm run dev запускает локальный сервер с мгновенным обновлением стилей (HMR).',
      'Команда npm run build собирает минифицированную папку dist/, готовую к загрузке на любой хостинг (включая Beget, GitHub Pages, Vercel).'
    ],
    code: `// 1. Создание и запуск проекта в терминале:
// npm create vite@latest my-project
// cd my-project && npm install && npm run dev

// 2. Пример конфигурации vite.config.js:
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});`
  },
  {
    id: 'fw-laravel',
    lang: 'frameworks',
    title: 'Laravel 11 (Современный PHP-фреймворк вместо процедурного PHP)',
    summary: 'Самый популярный PHP-фреймворк с элегантным роутингом, ORM Eloquent (вместо сырых SQL-запросов), шаблонизатором Blade, очередями и встроенной авторизацией.',
    tags: ['framework', 'фреймворк', 'laravel', 'php', 'eloquent', 'blade', 'mvc', 'бэкенд'],
    when: 'Для создания надёжных серверных веб-приложений, REST API, интернет-магазинов и личных кабинетов на PHP 8.2+.',
    alternatives: 'Symfony, Slim Framework или чистый PHP 8 для микро-скриптов.',
    points: [
      'Кого заменяет: разрозненные файлы index.php, login.php, db.php с ручным PDO и смешиванием SQL с HTML.',
      'Установка через Composer: composer create-project laravel/laravel my-app.',
      'Eloquent ORM позволяет писать Product::where("active", true)->get() вместо ручного написания SQL.',
      'Шаблонизатор Blade автоматически экранирует вывод {{ $user->name }} для полной защиты от XSS.'
    ],
    code: `<?php
// 1. Маршрут в routes/web.php (Laravel 11)
use App\\Models\\Project;
use Illuminate\\Support\\Facades\\Route;

Route::get('/projects', function () {
    // Eloquent ORM: безопасная выборка без ручного SQL
    $projects = Project::where('is_published', true)
        ->orderByDesc('created_at')
        ->take(10)
        ->get();

    return view('projects.index', compact('projects'));
});`
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
      'Файловый роутинг: файл app/about/page.tsx автоматически становится страницей по адресу /about.',
      'Серверные компоненты (RSC) выполняют запросы к БД прямо на сервере и не отправляют лишний JS в браузер.'
    ],
    code: `// Файл app/blog/page.tsx (Серверный компонент Next.js)
export const metadata = {
  title: 'Блог разработчика — DevShelf',
  description: 'Статьи рендерятся на сервере и мгновенно индексируются поисковиками.'
};

export default async function BlogPage() {
  // Запрос выполняется на сервере до отправки HTML в браузер!
  const res = await fetch('https://api.example.com/posts', { next: { revalidate: 60 } });
  const posts = await res.json();

  return (
    <main>
      <h1>Статьи ({posts.length})</h1>
    </main>
  );
}`
  },
  {
    id: 'fw-scss-sass',
    lang: 'frameworks',
    title: 'Sass / SCSS (Препроцессор CSS: миксины, функции и модули)',
    summary: 'Метаязык поверх CSS, добавляющий переиспользуемые миксины (@mixin), математические циклы, функции и модульную архитектуру (@use).',
    tags: ['framework', 'фреймворк', 'sass', 'scss', 'препроцессор', 'mixin', 'css'],
    when: 'В крупных дизайн-системах и проектах со сложной генерацией тем и повторяющимися медиа-запросами.',
    alternatives: 'Современный нативный CSS (который уже поддерживает переменные var() и вложенность & из коробки) или Tailwind CSS.',
    points: [
      'Кого упрощает: многократное дублирование медиа-запросов и шаблонных комбинаций свойств в CSS.',
      'Подключение в Vite: достаточно выполнить npm add -D sass-embedded и переименовать файл в styles.scss.',
      'Директива @mixin позволяет упаковать набор стилей с параметрами и подключать его через @include.'
    ],
    code: `// 1. Объявление переиспользуемого миксина в SCSS
@mixin glass-panel($blur: 12px, $alpha: 0.65) {
  background: rgba(15, 23, 42, $alpha);
  backdrop-filter: blur($blur);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
}

// 2. Использование с вложенностью
.header-bar {
  @include glass-panel(16px, 0.8);
  padding: 16px 24px;

  &__title {
    color: #38bdf8;
    font-weight: 700;
  }
}`
  },
  {
    id: 'fw-gsap',
    lang: 'frameworks',
    title: 'GSAP (GreenSock — профессиональная веб-анимация и ScrollTrigger)',
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
    code: `// 1. Подключение GSAP:
// import gsap from 'gsap';

// 2. Каскадное появление карточек с пружинной физикой
gsap.from('.feature-card', {
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.12,
  ease: 'power3.out'
});`
  }
];
