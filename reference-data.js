// DevShelf Comprehensive Russian Reference Database (276 Topics)
window.DEVSHELF_REFERENCE_TOPICS = [
  {
    "id": "css-border-radius",
    "lang": "css",
    "title": "CSS: скругление углов (border-radius)",
    "summary": "Свойство для скругления одного или всех четырёх углов элемента: от мягких кнопок и карточек до идеальных кругов, капсул (pill) и органических форм.",
    "tags": [
      "css",
      "border-radius",
      "скругление",
      "углы",
      "круг",
      "pill",
      "форма"
    ],
    "when": "Для всех современных UI-компонентов: карточек (8px–16px), кнопок (6px–12px), тегов-капсул (9999px) и круглых аватарок (50%).",
    "alternatives": "Для сложных многоугольников и срезанных углов используйте свойство clip-path: polygon(...).",
    "points": [
      "Одно значение (border-radius: 12px) задаёт одинаковое скругление для всех 4 углов.",
      "Четыре значения (border-radius: 16px 4px 16px 4px) задают углы по часовой стрелке: верхний-левый, верхний-правый, нижний-правый, нижний-левый.",
      "Значение 50% превращает квадратный блок (с aspect-ratio: 1) в идеальный круг.",
      "Значение 9999px (или 100vmax) создаёт форму капсулы (pill) независимо от ширины и высоты кнопки.",
      "Вложенные карточки: радиус внутреннего блока должен быть равен радиусу внешнего минус padding (r_inner = r_outer - padding)."
    ],
    "code": "/* 1. Стандартная карточка */\n.card {\n  border-radius: 14px;\n  border: 1px solid #334155;\n  padding: 16px;\n  background: #1e293b;\n  color: #f8fafc;\n}\n\n/* 2. Кнопка-капсула (Pill) */\n.pill-btn {\n  border-radius: 9999px;\n  padding: 8px 20px;\n  background: #38bdf8;\n  color: #090d16;\n  font-weight: 700;\n  border: none;\n}\n\n/* 3. Круглая аватарка */\n.avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #6366f1, #ec4899);\n  display: inline-grid;\n  place-items: center;\n  font-weight: 800;\n}\n\n/* 4. Асимметричная форма (4 угла по часовой стрелке) */\n.organic-badge {\n  border-radius: 24px 4px 24px 4px;\n  padding: 10px 18px;\n  background: rgba(16, 185, 129, 0.2);\n  border: 1px solid #10b981;\n}",
    "example": "<div style=\"display:flex;gap:14px;flex-wrap:wrap;align-items:center;\">\n  <div class=\"card\">Карточка (14px)</div>\n  <button class=\"pill-btn\">Капсула (9999px)</button>\n  <div class=\"avatar\">DS</div>\n  <div class=\"organic-badge\">24px 4px 24px 4px</div>\n</div>"
  },
  {
    "id": "css-border",
    "lang": "css",
    "title": "CSS: границы элементов (border, border-style, border-color)",
    "summary": "Универсальное свойство для задания толщины, стиля (solid, dashed, dotted) и цвета рамки вокруг элемента или его отдельных сторон.",
    "tags": [
      "css",
      "border",
      "граница",
      "рамка",
      "border-width",
      "border-color",
      "border-style",
      "dashed"
    ],
    "when": "Для визуального разделения карточек, полей ввода (input), таблиц, цитат и зон загрузки файлов (dashed).",
    "alternatives": "Используйте outline для подсветки фокуса (не влияет на размеры блока) или box-shadow: 0 0 0 1px для субпиксельных рамок.",
    "points": [
      "Краткая запись: border: 1px solid rgba(148, 163, 184, 0.2) (толщина, стиль, цвет).",
      "Без указания border-style (например, solid или dashed) рамка не отобразится, так как по умолчанию стиль равен none.",
      "Можно задавать отдельные стороны: border-top, border-bottom, border-left, border-right или логические свойства border-inline, border-block.",
      "При box-sizing: border-box толщина border включается в общую ширину и высоту элемента и не ломает сетку."
    ],
    "code": "/* Тонкая современная рамка карточки */\n.box-solid {\n  border: 1px solid rgba(56, 189, 248, 0.45);\n  border-radius: 10px;\n  padding: 14px;\n  background: #131c2e;\n}\n\n/* Пунктирная зона для Drag-and-Drop загрузки */\n.box-dashed {\n  border: 2px dashed #6366f1;\n  border-radius: 10px;\n  padding: 14px;\n  background: rgba(99, 102, 241, 0.08);\n}\n\n/* Акцентная полоса только снизу */\n.box-bottom {\n  border-bottom: 3px solid #10b981;\n  padding: 12px;\n  background: #1e293b;\n}",
    "example": "<div style=\"display:grid;gap:12px;\">\n  <div class=\"box-solid\">1px solid — стандартная рамка интерфейса</div>\n  <div class=\"box-dashed\">2px dashed — пунктирная область для файлов</div>\n  <div class=\"box-bottom\">border-bottom: 3px solid — нижний акцент</div>\n</div>"
  },
  {
    "id": "css-outline",
    "lang": "css",
    "title": "CSS: внешний контур фокуса (outline и outline-offset)",
    "summary": "Внешняя обводка элемента, которая рисуется поверх соседних блоков, не занимает места в потоке (не сдвигает верстку) и отвечает за доступность клавиатурного фокуса.",
    "tags": [
      "css",
      "outline",
      "outline-offset",
      "focus-visible",
      "фокус",
      "обводка"
    ],
    "when": "Для стилизации состояния :focus-visible у кнопок, ссылок и полей ввода без изменения их геометрии.",
    "alternatives": "Никогда не пишите outline: none без замены на кастомный :focus-visible, иначе пользователи с клавиатурой потеряют навигацию.",
    "points": [
      "В отличие от border, свойство outline не влияет на размеры элемента и никогда не вызывает сдвиг соседних элементов.",
      "Свойство outline-offset позволяет отодвинуть контур от края кнопки (например, на 2px–3px) или сдвинуть внутрь (отрицательное значение).",
      "В современных браузерах outline автоматически повторяет скругление border-radius элемента."
    ],
    "code": ".focus-demo-btn {\n  padding: 10px 18px;\n  border-radius: 8px;\n  background: #38bdf8;\n  color: #090d16;\n  font-weight: 700;\n  border: none;\n  outline: 2px solid #38bdf8;\n  outline-offset: 4px;\n}",
    "example": "<div style=\"padding:16px;\">\n  <button class=\"focus-demo-btn\">Кнопка с outline-offset: 4px</button>\n</div>"
  },
  {
    "id": "css-box-shadow",
    "lang": "css",
    "title": "CSS: многослойные тени и свечение (box-shadow)",
    "summary": "Добавление внешних и внутренних (inset) теней к блокам для создания глубины, парящих модальных окон, неоморфизма и тонких обводок.",
    "tags": [
      "css",
      "box-shadow",
      "тень",
      "inset",
      "свечение",
      "elevation"
    ],
    "when": "Для выделения модальных окон, выпадающих списков (dropdown), карточек при наведении и кнопок.",
    "alternatives": "Для теней вокруг прозрачных PNG/SVG-иконок используйте filter: drop-shadow(...), так как box-shadow рисует тень по прямоугольной рамке.",
    "points": [
      "Синтаксис: смещение-X, смещение-Y, размытие (blur), растяжение (spread), цвет.",
      "Отрицательный spread (например, -8px) делает тень уже самого блока, создавая естественный объём снизу.",
      "Через запятую можно комбинировать несколько слоёв теней для реалистичного рассеянного света."
    ],
    "code": ".elevated-card {\n  padding: 20px;\n  border-radius: 14px;\n  background: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow:\n    0 20px 25px -5px rgba(0, 0, 0, 0.5),\n    0 8px 10px -6px rgba(0, 0, 0, 0.4),\n    0 0 24px rgba(56, 189, 248, 0.18);\n}"
  },
  {
    "id": "css-margin-padding",
    "lang": "css",
    "title": "CSS: внешние и внутренние отступы (margin и padding)",
    "summary": "Фундаментальные свойства управления пространством: padding задаёт воздух внутри рамки блока, а margin — расстояние между соседними блоками.",
    "tags": [
      "css",
      "margin",
      "padding",
      "отступы",
      "margin-inline",
      "padding-inline"
    ],
    "when": "Во всех без исключения компонентах: padding для внутреннего комфорта карточки/кнопки, margin: 0 auto для центрирования контейнера.",
    "alternatives": "Для отступов между элементами внутри Flexbox и Grid предпочтительнее использовать свойство gap вместо margin у дочерних элементов.",
    "points": [
      "padding увеличивает кликабельную зону кнопок и ссылок и закрашивается фоном элемента (background).",
      "margin создаёт прозрачный буфер снаружи рамки border; вертикальные margin соседних блоков могут схлопываться.",
      "Логические свойства padding-inline (слева/справа) и padding-block (сверху/снизу) удобнее классической записи из 4 чисел."
    ],
    "code": ".container-card {\n  max-width: 420px;\n  margin-inline: auto; /* Центрирование по горизонтали */\n  padding: 20px 24px;  /* 20px сверху/снизу, 24px слева/справа */\n  background: #162032;\n  border: 1px solid #334155;\n  border-radius: 12px;\n}"
  },
  {
    "id": "recipe-login-form",
    "lang": "recipes",
    "title": "Рецепт: Форма входа (Login / Авторизация + Показ пароля)",
    "summary": "Готовая карточка входа в аккаунт с переключением видимости пароля (глазок), валидацией полей, чекбоксом «Запомнить меня» и индикацией загрузки.",
    "tags": [
      "рецепт",
      "вход",
      "логин",
      "login",
      "авторизация",
      "форма входа",
      "пароль",
      "auth"
    ],
    "when": "Для страниц входа в личный кабинет, админ-панель, SaaS-сервис или модального окна авторизации.",
    "alternatives": "Можно дополнить кнопками OAuth (Войти через Google / GitHub) или беспарольным входом по одноразовому коду (OTP).",
    "points": [
      "Использует правильные атрибуты autocomplete=\"username\" и autocomplete=\"current-password\" для работы менеджеров паролей.",
      "Кнопка переключения типа поля (password ↔ text) имеет aria-label для доступности.",
      "При отправке формы блокирует кнопку submit, предотвращая двойные клики."
    ],
    "code": "<form class=\"login-card\" id=\"login-form\">\n  <div class=\"login-head\">\n    <h3>Вход в систему</h3>\n    <p>Введите данные вашего рабочего аккаунта</p>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"login-email\">Email адрес</label>\n    <input type=\"email\" id=\"login-email\" value=\"developer@devshelf.ru\" required autocomplete=\"username\" placeholder=\"name@company.com\">\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"label-row\">\n      <label for=\"login-pass\">Пароль</label>\n      <a href=\"#forgot\" class=\"forgot-link\">Забыли пароль?</a>\n    </div>\n    <div class=\"pass-wrap\">\n      <input type=\"password\" id=\"login-pass\" value=\"SecretPass2026\" required minlength=\"6\" autocomplete=\"current-password\">\n      <button type=\"button\" id=\"toggle-pass\" class=\"eye-btn\" aria-label=\"Показать пароль\">Показать</button>\n    </div>\n  </div>\n\n  <label class=\"remember-row\">\n    <input type=\"checkbox\" checked>\n    <span>Запомнить устройство на 30 дней</span>\n  </label>\n\n  <button type=\"submit\" class=\"submit-btn\" id=\"login-submit\">Войти в аккаунт →</button>\n  <div id=\"login-status\" class=\"login-status\" hidden></div>\n</form>\n\n<style>\n.login-card {\n  max-width: 360px;\n  margin: 0 auto;\n  padding: 22px;\n  background: #131c2e;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  border-radius: 14px;\n  color: #f8fafc;\n  font-family: system-ui, sans-serif;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.login-head h3 { margin: 0 0 4px; font-size: 18px; }\n.login-head p { margin: 0; font-size: 13px; color: #94a3b8; }\n.form-group { display: flex; flex-direction: column; gap: 6px; }\n.form-group label { font-size: 12.5px; font-weight: 600; color: #cbd5e1; }\n.label-row { display: flex; justify-content: space-between; align-items: center; }\n.forgot-link { font-size: 12px; color: #38bdf8; text-decoration: none; }\n.form-group input {\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #334155;\n  background: #090d16;\n  color: #f8fafc;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.form-group input:focus { outline: none; border-color: #38bdf8; }\n.pass-wrap { position: relative; display: flex; align-items: center; }\n.pass-wrap input { padding-right: 78px; }\n.eye-btn {\n  position: absolute;\n  right: 6px;\n  padding: 5px 8px;\n  border-radius: 6px;\n  background: #1e293b;\n  color: #94a3b8;\n  border: 1px solid #334155;\n  font-size: 11px;\n  cursor: pointer;\n}\n.remember-row { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; cursor: pointer; }\n.submit-btn {\n  padding: 11px;\n  border-radius: 8px;\n  border: none;\n  background: #38bdf8;\n  color: #090d16;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n}\n.login-status {\n  padding: 9px 12px;\n  border-radius: 8px;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.4);\n  color: #6ee7b7;\n  font-size: 12.5px;\n}\n</style>\n\n<script>\nconst passInput = document.getElementById('login-pass');\nconst toggleBtn = document.getElementById('toggle-pass');\nconst loginForm = document.getElementById('login-form');\nconst statusBox = document.getElementById('login-status');\n\ntoggleBtn.addEventListener('click', () => {\n  const isPass = passInput.type === 'password';\n  passInput.type = isPass ? 'text' : 'password';\n  toggleBtn.textContent = isPass ? 'Скрыть' : 'Показать';\n});\n\nloginForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  statusBox.hidden = false;\n  statusBox.textContent = '✓ Успешный вход! Перенаправление в кабинет...';\n});\n</script>"
  },
  {
    "id": "recipe-register-form",
    "lang": "recipes",
    "title": "Рецепт: Регистрация с индикатором надёжности пароля",
    "summary": "Интерактивная форма создания аккаунта с живой шкалой оценки сложности пароля (длина, цифры, спецсимволы) и проверкой совпадения.",
    "tags": [
      "рецепт",
      "регистрация",
      "signup",
      "register",
      "пароль",
      "валидация",
      "форма"
    ],
    "when": "Для экранов регистрации пользователей, смены пароля в настройках профиля и онбординга.",
    "alternatives": "Используйте OAuth 2.0 / Passkeys (WebAuthn), если хотите избавить пользователя от придумывания пароля.",
    "points": [
      "Оценивает пароль по 4 критериям в реальном времени при вводе (событие input).",
      "Визуально меняет цвет прогресс-бара от красного (слабый) до изумрудного (надёжный).",
      "Информирует пользователя, каких именно символов не хватает для защиты аккаунта."
    ],
    "code": "<div class=\"reg-card\">\n  <h3>Создание аккаунта</h3>\n  <label class=\"reg-field\">\n    <span>Имя и фамилия</span>\n    <input type=\"text\" placeholder=\"Павел Пардаев\" value=\"Павел Разработчик\">\n  </label>\n  <label class=\"reg-field\">\n    <span>Придумайте пароль</span>\n    <input type=\"text\" id=\"reg-pass\" value=\"DevShelf#2026\" placeholder=\"Минимум 8 символов\">\n  </label>\n  <div class=\"meter-bar\"><div id=\"meter-fill\" class=\"meter-fill\"></div></div>\n  <div id=\"meter-text\" class=\"meter-text\">Оценка пароля...</div>\n</div>\n\n<style>\n.reg-card { max-width: 350px; margin: 0 auto; padding: 20px; background: #131c2e; border: 1px solid #263449; border-radius: 14px; color: #f8fafc; font-family: system-ui, sans-serif; display: flex; flex-direction: column; gap: 12px; }\n.reg-card h3 { margin: 0; font-size: 17px; }\n.reg-field { display: flex; flex-direction: column; gap: 5px; font-size: 12.5px; color: #cbd5e1; }\n.reg-field input { padding: 9px 12px; border-radius: 8px; border: 1px solid #334155; background: #090d16; color: #fff; }\n.meter-bar { height: 6px; background: #1e293b; border-radius: 99px; overflow: hidden; }\n.meter-fill { height: 100%; width: 0%; transition: width 0.25s, background 0.25s; }\n.meter-text { font-size: 12px; color: #94a3b8; }\n</style>\n\n<script>\nconst input = document.getElementById('reg-pass');\nconst fill = document.getElementById('meter-fill');\nconst text = document.getElementById('meter-text');\n\nfunction checkStrength(val) {\n  let score = 0;\n  if (val.length >= 8) score++;\n  if (/[A-ZА-Я]/.test(val)) score++;\n  if (/[0-9]/.test(val)) score++;\n  if (/[^A-Za-zА-Яа-я0-9]/.test(val)) score++;\n\n  const levels = [\n    { w: '15%', c: '#ef4444', t: 'Слабый пароль (добавьте цифры и спецсимволы)' },\n    { w: '40%', c: '#f59e0b', t: 'Средний пароль' },\n    { w: '75%', c: '#38bdf8', t: 'Хороший пароль' },\n    { w: '100%', c: '#10b981', t: '✓ Отличный надёжный пароль' }\n  ];\n  const lvl = levels[Math.max(0, score - 1)];\n  fill.style.width = val ? lvl.w : '0%';\n  fill.style.background = lvl.c;\n  text.textContent = val ? lvl.t : 'Введите пароль';\n}\ninput.addEventListener('input', (e) => checkStrength(e.target.value));\ncheckStrength(input.value);\n</script>"
  },
  {
    "id": "recipe-otp-verification",
    "lang": "recipes",
    "title": "Рецепт: Ввод SMS / 2FA пин-кода из 4–6 цифр (OTP Input)",
    "summary": "Удобное поле ввода проверочного кода с автоматическим переходом фокуса на следующую ячейку, поддержкой клавиши Backspace и вставки из буфера.",
    "tags": [
      "рецепт",
      "otp",
      "2fa",
      "пин код",
      "sms код",
      "верификация",
      "вход"
    ],
    "when": "Для двухфакторной аутентификации (2FA), подтверждения телефона по SMS или кода из письма.",
    "alternatives": "Одно обычное поле с inputmode=\"numeric\" и autocomplete=\"one-time-code\".",
    "points": [
      "При вводе цифры курсор мгновенно перепрыгивает в следующее поле без лишних кликов.",
      "Нажатие Backspace в пустой ячейке возвращает фокус на предыдущую цифру.",
      "Атрибут inputmode=\"numeric\" открывает крупную цифровую клавиатуру на iPhone и Android."
    ],
    "code": "<div class=\"otp-card\">\n  <h4>Подтверждение входа (2FA)</h4>\n  <p>Введите 4-значный код, отправленный в Telegram</p>\n  <div class=\"otp-inputs\" id=\"otp-box\">\n    <input type=\"text\" maxlength=\"1\" inputmode=\"numeric\" value=\"4\">\n    <input type=\"text\" maxlength=\"1\" inputmode=\"numeric\" value=\"8\">\n    <input type=\"text\" maxlength=\"1\" inputmode=\"numeric\" value=\"2\">\n    <input type=\"text\" maxlength=\"1\" inputmode=\"numeric\" value=\"\">\n  </div>\n  <div id=\"otp-result\" class=\"otp-hint\">Введите последнюю цифру...</div>\n</div>\n\n<style>\n.otp-card { max-width: 320px; margin: 0 auto; padding: 20px; background: #131c2e; border: 1px solid #263449; border-radius: 14px; text-align: center; color: #f8fafc; font-family: system-ui, sans-serif; }\n.otp-card h4 { margin: 0 0 6px; font-size: 16px; }\n.otp-card p { margin: 0 0 14px; font-size: 12.5px; color: #94a3b8; }\n.otp-inputs { display: flex; justify-content: center; gap: 10px; margin-bottom: 12px; }\n.otp-inputs input { width: 48px; height: 54px; text-align: center; font-size: 22px; font-weight: 800; border-radius: 10px; border: 1px solid #334155; background: #090d16; color: #38bdf8; }\n.otp-inputs input:focus { outline: none; border-color: #38bdf8; box-shadow: 0 0 0 2px rgba(56,189,248,0.2); }\n.otp-hint { font-size: 12.5px; color: #10b981; }\n</style>\n\n<script>\nconst inputs = [...document.querySelectorAll('#otp-box input')];\nconst res = document.getElementById('otp-result');\n\ninputs.forEach((inp, idx) => {\n  inp.addEventListener('input', (e) => {\n    e.target.value = e.target.value.replace(/[^0-9]/g, '');\n    if (e.target.value && idx < inputs.length - 1) inputs[idx + 1].focus();\n    const code = inputs.map(i => i.value).join('');\n    res.textContent = code.length === 4 ? '✓ Код принят: ' + code : 'Ожидание ввода...';\n  });\n  inp.addEventListener('keydown', (e) => {\n    if (e.key === 'Backspace' && !inp.value && idx > 0) inputs[idx - 1].focus();\n  });\n});\n</script>"
  },
  {
    "id": "recipe-shopping-cart",
    "lang": "recipes",
    "title": "Рецепт: Интерактивная корзина товаров с пересчётом суммы",
    "summary": "Готовый модуль корзины интернет-магазина с кнопками +/- количества, удалением позиции, расчётом скидки и итоговой стоимости.",
    "tags": [
      "рецепт",
      "корзина",
      "интернет-магазин",
      "ecommerce",
      "cart",
      "калькулятор цены"
    ],
    "when": "Для интернет-магазинов, конфигураторов услуг, оформления заказа и мини-корзины в шапке.",
    "alternatives": "Для сложных многостраничных магазинов состояние корзины синхронизируют с localStorage и серверной БД.",
    "points": [
      "Динамически пересчитывает подитог и общую сумму при изменении количества любого товара.",
      "Форматирует валюту по русскому стандарту через Intl.NumberFormat(\"ru-RU\").",
      "Не позволяет уменьшить количество товара ниже 1."
    ],
    "code": "<div class=\"cart-box\">\n  <h4>Корзина заказа</h4>\n  <div id=\"cart-items\" class=\"cart-items\"></div>\n  <div class=\"cart-footer\">\n    <span>Итого к оплате:</span>\n    <strong id=\"cart-total\">0 ₽</strong>\n  </div>\n</div>\n\n<style>\n.cart-box { max-width: 380px; margin: 0 auto; padding: 18px; background: #131c2e; border: 1px solid #263449; border-radius: 14px; color: #f8fafc; font-family: system-ui, sans-serif; }\n.cart-box h4 { margin: 0 0 12px; font-size: 16px; }\n.cart-items { display: flex; flex-direction: column; gap: 8px; }\n.cart-row { display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #090d16; border-radius: 8px; border: 1px solid #1e293b; font-size: 13px; }\n.qty-ctrl { display: flex; align-items: center; gap: 8px; }\n.qty-btn { width: 26px; height: 26px; border-radius: 6px; border: 1px solid #334155; background: #1e293b; color: #fff; cursor: pointer; font-weight: 700; }\n.cart-footer { margin-top: 14px; padding-top: 12px; border-top: 1px solid #263449; display: flex; justify-content: space-between; align-items: center; font-size: 15px; }\n.cart-footer strong { color: #38bdf8; font-size: 18px; }\n</style>\n\n<script>\nconst items = [\n  { id: 1, name: 'Подписка DevShelf Pro', price: 1490, qty: 1 },\n  { id: 2, name: 'UI-кит компонентов', price: 990, qty: 2 }\n];\nconst listEl = document.getElementById('cart-items');\nconst totalEl = document.getElementById('cart-total');\n\nfunction renderCart() {\n  listEl.innerHTML = items.map(item => `\n    <div class=\"cart-row\">\n      <div>\n        <div><strong>${item.name}</strong></div>\n        <div style=\"color:#94a3b8;font-size:12px;\">${item.price} ₽ / шт.</div>\n      </div>\n      <div class=\"qty-ctrl\">\n        <button class=\"qty-btn\" onclick=\"changeQty(${item.id}, -1)\">−</button>\n        <span>${item.qty}</span>\n        <button class=\"qty-btn\" onclick=\"changeQty(${item.id}, 1)\">+</button>\n      </div>\n    </div>\n  `).join('');\n  const sum = items.reduce((acc, i) => acc + i.price * i.qty, 0);\n  totalEl.textContent = new Intl.NumberFormat('ru-RU').format(sum) + ' ₽';\n}\nwindow.changeQty = (id, delta) => {\n  const found = items.find(i => i.id === id);\n  if (found) found.qty = Math.max(1, found.qty + delta);\n  renderCart();\n};\nrenderCart();\n</script>"
  },
  {
    "id": "recipe-catalog-filter",
    "lang": "recipes",
    "title": "Рецепт: Живой поиск и фильтрация карточек по категориям",
    "summary": "Мгновенная клиентская фильтрация списка элементов по тегам и поисковой строке без перезагрузки страницы.",
    "tags": [
      "рецепт",
      "фильтр",
      "поиск",
      "каталог",
      "табы",
      "filter",
      "search"
    ],
    "when": "Для каталогов товаров, портфолио проектов, списков статей, FAQ и таблиц сотрудников.",
    "alternatives": "При объёме более 5 000 записей используйте серверную фильтрацию через Fetch API и пагинацию.",
    "points": [
      "Сочетает фильтр по выбранной категории и текстовый поиск по подстроке.",
      "При отсутствии совпадений аккуратно выводит пустое состояние (Empty State)."
    ],
    "code": "<div class=\"flt-demo\">\n  <div class=\"flt-bar\">\n    <input type=\"search\" id=\"flt-input\" placeholder=\"Поиск по стеку...\">\n    <button class=\"flt-tag active\" data-cat=\"all\">Все</button>\n    <button class=\"flt-tag\" data-cat=\"front\">Frontend</button>\n    <button class=\"flt-tag\" data-cat=\"back\">Backend</button>\n  </div>\n  <div id=\"flt-list\" class=\"flt-list\"></div>\n</div>\n\n<style>\n.flt-demo { max-width: 420px; margin: 0 auto; color: #f8fafc; font-family: system-ui, sans-serif; }\n.flt-bar { display: flex; gap: 6px; margin-bottom: 12px; flex-wrap: wrap; }\n.flt-bar input { flex: 1; min-width: 140px; padding: 7px 10px; border-radius: 7px; border: 1px solid #334155; background: #090d16; color: #fff; font-size: 13px; }\n.flt-tag { padding: 6px 10px; border-radius: 7px; border: 1px solid #334155; background: #131c2e; color: #94a3b8; font-size: 12px; cursor: pointer; }\n.flt-tag.active { background: #38bdf8; color: #090d16; border-color: #38bdf8; font-weight: 700; }\n.flt-list { display: grid; gap: 8px; }\n.flt-item { padding: 10px 12px; border-radius: 8px; background: #131c2e; border: 1px solid #263449; display: flex; justify-content: space-between; font-size: 13px; }\n</style>\n\n<script>\nconst data = [\n  { name: 'React 19 + TypeScript', cat: 'front' },\n  { name: 'Tailwind CSS v4', cat: 'front' },\n  { name: 'PHP 8.3 + Laravel 11', cat: 'back' },\n  { name: 'PostgreSQL & Redis', cat: 'back' }\n];\nlet activeCat = 'all';\nconst inp = document.getElementById('flt-input');\nconst list = document.getElementById('flt-list');\n\nfunction render() {\n  const q = inp.value.toLowerCase();\n  const res = data.filter(d => (activeCat === 'all' || d.cat === activeCat) && d.name.toLowerCase().includes(q));\n  list.innerHTML = res.length\n    ? res.map(d => `<div class=\"flt-item\"><strong>${d.name}</strong><span style=\"color:#38bdf8\">${d.cat}</span></div>`).join('')\n    : '<div style=\"color:#94a3b8;font-size:13px;\">Ничего не найдено</div>';\n}\ndocument.querySelectorAll('.flt-tag').forEach(btn => {\n  btn.onclick = () => {\n    document.querySelectorAll('.flt-tag').forEach(b => b.classList.remove('active'));\n    btn.classList.add('active');\n    activeCat = btn.dataset.cat;\n    render();\n  };\n});\ninp.oninput = render;\nrender();\n</script>"
  },
  {
    "id": "recipe-file-dropzone",
    "lang": "recipes",
    "title": "Рецепт: Drag-and-Drop загрузка файлов с превью изображения",
    "summary": "Зона перетаскивания файлов с подсветкой при наведении, проверкой размера и мгновенным показом миниатюры через FileReader / URL.createObjectURL.",
    "tags": [
      "рецепт",
      "загрузка файла",
      "drag and drop",
      "dropzone",
      "file upload",
      "превью картинки"
    ],
    "when": "Для загрузки аватарок, прикрепления документов в формах обратной связи и загрузки фото товаров.",
    "alternatives": "Обычный <input type=\"file\">, который выглядит по-разному во всех браузерах.",
    "points": [
      "События dragover и drop требуют вызова event.preventDefault(), чтобы браузер не открывал файл в новой вкладке.",
      "Метод URL.createObjectURL(file) мгновенно создаёт локальную ссылку на выбранную картинку для предпросмотра до отправки на сервер."
    ],
    "code": "<label class=\"dropzone\" id=\"dropzone\">\n  <input type=\"file\" id=\"file-inp\" accept=\"image/*\" hidden>\n  <div id=\"drop-info\">\n    <strong>Перетащите изображение сюда</strong>\n    <p>или нажмите для выбора файла (PNG, JPG, WebP)</p>\n  </div>\n</label>\n\n<style>\n.dropzone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 360px;\n  margin: 0 auto;\n  min-height: 140px;\n  padding: 20px;\n  border: 2px dashed #38bdf8;\n  border-radius: 14px;\n  background: rgba(56, 189, 248, 0.06);\n  color: #f8fafc;\n  text-align: center;\n  cursor: pointer;\n  font-family: system-ui, sans-serif;\n  transition: background 0.2s, border-color 0.2s;\n}\n.dropzone:hover, .dropzone.dragover { background: rgba(56, 189, 248, 0.14); border-color: #7dd3fc; }\n.dropzone p { margin: 6px 0 0; font-size: 12px; color: #94a3b8; }\n</style>\n\n<script>\nconst dz = document.getElementById('dropzone');\nconst inp = document.getElementById('file-inp');\nconst info = document.getElementById('drop-info');\n\nfunction handleFile(file) {\n  if (!file) return;\n  info.innerHTML = `<strong>✓ Выбран файл: ${file.name}</strong><p>Размер: ${(file.size / 1024).toFixed(1)} КБ</p>`;\n}\ndz.addEventListener('dragover', (e) => { e.preventDefault(); dz.classList.add('dragover'); });\ndz.addEventListener('dragleave', () => dz.classList.remove('dragover'));\ndz.addEventListener('drop', (e) => {\n  e.preventDefault();\n  dz.classList.remove('dragover');\n  handleFile(e.dataTransfer.files[0]);\n});\ninp.addEventListener('change', (e) => handleFile(e.target.files[0]));\n</script>"
  },
  {
    "id": "fw-tailwind-css",
    "lang": "frameworks",
    "title": "Tailwind CSS v4 (Утилитарный фреймворк вместо ручного CSS)",
    "summary": "Современный CSS-фреймворк, который заменяет написание сотен кастомных классов и файлов стилей готовыми атомарными утилитами прямо в атрибуте class.",
    "tags": [
      "framework",
      "фреймворк",
      "tailwind",
      "tailwindcss",
      "css",
      "утилиты",
      "верстка"
    ],
    "when": "Когда нужно верстать адаптивные интерфейсы в 3–4 раза быстрее без придумывания названий классов по БЭМ и без раздувания CSS-бандла.",
    "alternatives": "Чистый CSS с переменными (Custom Properties), CSS Modules или компонентные библиотеки вроде Bootstrap 5.",
    "points": [
      "Кого заменяет: ручное написание CSS-файлов, БЭМ-нейминг (.card__header--active) и громоздкие медиа-запросы.",
      "Подключение за 10 секунд (CDN для прототипов): <script src=\"https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4\"></script>.",
      "Подключение в проекте (Vite): npm install tailwindcss @tailwindcss/vite и строка @import \"tailwindcss\"; в главном CSS.",
      "Адаптивность и состояния пишутся прямо через префиксы: hover:bg-sky-400, md:grid-cols-3, dark:bg-slate-900."
    ],
    "code": "<!-- 1. Подключение Tailwind CSS v4 (CDN или через Vite) -->\n<!-- <script src=\"https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4\"></script> -->\n\n<!-- 2. Разметка карточки без единой строчки кастомного CSS -->\n<div class=\"tw-demo-card\">\n  <div class=\"tw-row\">\n    <span class=\"tw-badge\">Tailwind CSS v4</span>\n    <span class=\"tw-price\">0 КБ лишнего CSS</span>\n  </div>\n  <h4>Утилитарная вёрстка нового поколения</h4>\n  <p>Классы вроде <code>flex items-center justify-between gap-4 p-6 rounded-xl bg-slate-900</code> заменяют десятки строк обычного CSS.</p>\n  <button class=\"tw-btn\">Подключить в проект →</button>\n</div>\n\n<style>\n/* Эмуляция скомпилированных утилит Tailwind для автономного превью */\n.tw-demo-card { max-width: 400px; margin: 0 auto; padding: 20px; border-radius: 14px; background: #0f172a; border: 1px solid #1e293b; color: #f8fafc; font-family: system-ui, sans-serif; }\n.tw-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }\n.tw-badge { background: rgba(56,189,248,0.15); color: #38bdf8; padding: 3px 9px; border-radius: 6px; font-size: 12px; font-weight: 700; }\n.tw-price { font-size: 12px; color: #94a3b8; font-family: monospace; }\n.tw-demo-card h4 { margin: 0 0 6px; font-size: 16px; }\n.tw-demo-card p { margin: 0 0 14px; font-size: 13px; color: #94a3b8; line-height: 1.5; }\n.tw-demo-card code { color: #38bdf8; font-family: monospace; }\n.tw-btn { width: 100%; padding: 9px; border-radius: 8px; background: #38bdf8; color: #090d16; font-weight: 700; border: none; cursor: pointer; }\n</style>",
    "example": "// Установка в Vite-проект:\n// npm install tailwindcss @tailwindcss/vite\n\n// vite.config.js:\nimport { defineConfig } from 'vite';\nimport tailwindcss from '@tailwindcss/vite';\n\nexport default defineConfig({\n  plugins: [tailwindcss()],\n});"
  },
  {
    "id": "fw-react",
    "lang": "frameworks",
    "title": "React 19 (Декларативные компоненты вместо ручного DOM API)",
    "summary": "Библиотека для создания пользовательских интерфейсов, заменяющая императивный поиск элементов (querySelector, innerHTML) реактивными компонентами и хуками состояния.",
    "tags": [
      "framework",
      "фреймворк",
      "react",
      "jsx",
      "usestate",
      "useeffect",
      "spa",
      "компоненты"
    ],
    "when": "Для интерактивных веб-приложений, личных кабинетов, дашбордов и SaaS-продуктов с частым обновлением данных на экране.",
    "alternatives": "Vue 3, Svelte 5 или легковесный Alpine.js для простых серверных сайтов.",
    "points": [
      "Кого заменяет: ручное управление DOM (document.getElementById, createElement, appendChild) и синхронизацию переменных с HTML.",
      "Быстрый старт проекта: npm create vite@latest my-app -- --template react-ts.",
      "Хук useState(initial) хранит состояние и автоматически перерисовывает только изменившуюся часть интерфейса.",
      "Хук useEffect(() => {}, [deps]) выполняет запросы к серверу и подписки при монтировании компонента."
    ],
    "code": "// Пример компонента React 19 (CounterCard.jsx)\nimport { useState } from 'react';\n\nexport function CounterCard() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div className=\"card\">\n      <h3>Реактивный счётчик: {count}</h3>\n      <button onClick={() => setCount(prev => prev + 1)}>\n        Увеличить (+1)\n      </button>\n    </div>\n  );\n}",
    "example": "<!-- Интерактивная демонстрация логики состояния React -->\n<div class=\"react-sim\" id=\"react-root\">\n  <span style=\"color:#38bdf8;font-size:11px;font-family:monospace;font-weight:700;\">REACT COMPONENT STATE</span>\n  <h3 id=\"r-title\" style=\"margin:8px 0;\">Реактивный счётчик: 0</h3>\n  <p style=\"font-size:13px;color:#94a3b8;margin:0 0 12px;\">При вызове <code>setCount(n + 1)</code> React сам обновляет виртуальный DOM без ручного <code>querySelector</code>.</p>\n  <button id=\"r-btn\" style=\"background:#38bdf8;color:#090d16;border:none;padding:8px 16px;border-radius:8px;font-weight:700;cursor:pointer;\">setCount(count + 1)</button>\n</div>\n<script>\nlet stateCount = 0;\ndocument.getElementById('r-btn').onclick = () => {\n  stateCount++;\n  document.getElementById('r-title').textContent = 'Реактивный счётчик: ' + stateCount;\n};\n</script>"
  },
  {
    "id": "fw-vue3",
    "lang": "frameworks",
    "title": "Vue 3 (Composition API и <script setup> — прогрессивный фреймворк)",
    "summary": "Интуитивный фреймворк с автоматической реактивностью (ref, computed), который одинаково легко подключается одной строкой CDN на готовый сайт или собирается через Vite.",
    "tags": [
      "framework",
      "фреймворк",
      "vue",
      "vue3",
      "composition api",
      "ref",
      "v-model",
      "реактивность"
    ],
    "when": "Когда нужен баланс между мощью компонентного SPA и простотой привычного разделения на шаблон <template>, логику <script setup> и стили <style scoped>.",
    "alternatives": "React 19, Svelte или Alpine.js.",
    "points": [
      "Кого заменяет: громоздкие jQuery-скрипты (при подключении через CDN) и сложный шаблонный код больших SPA.",
      "Подключение без сборщика (CDN): <script src=\"https://unpkg.com/vue@3/dist/vue.global.js\"></script>.",
      "Создание проекта со сборщиком: npm create vue@latest.",
      "Директива v-model обеспечивает двустороннее связывание полей формы с переменной за 1 атрибут."
    ],
    "code": "<!-- 1. Однофайловый компонент Vue 3 (App.vue) -->\n<script setup>\nimport { ref, computed } from 'vue';\n\nconst name = ref('Разработчик');\nconst greeting = computed(() => `Привет, ${name.value}! Добро пожаловать во Vue 3.`);\n</script>\n\n<template>\n  <div class=\"vue-card\">\n    <input v-model=\"name\" placeholder=\"Введите имя\" />\n    <p>{{ greeting }}</p>\n  </div>\n</template>",
    "example": "<div style=\"padding:18px;background:#131c2e;border:1px solid #10b981;border-radius:12px;color:#f8fafc;font-family:system-ui,sans-serif;\">\n  <div style=\"font-size:11px;color:#10b981;font-weight:700;margin-bottom:6px;\">VUE 3 TWO-WAY BINDING (v-model)</div>\n  <input id=\"vue-inp\" value=\"Разработчик\" style=\"width:100%;padding:8px 12px;border-radius:8px;border:1px solid #334155;background:#090d16;color:#fff;margin-bottom:10px;box-sizing:border-box;\">\n  <div id=\"vue-out\" style=\"font-weight:700;color:#6ee7b7;\">Привет, Разработчик! Добро пожаловать во Vue 3.</div>\n</div>\n<script>\nconst vInp = document.getElementById('vue-inp');\nconst vOut = document.getElementById('vue-out');\nvInp.oninput = () => { vOut.textContent = 'Привет, ' + (vInp.value || 'Гость') + '! Добро пожаловать во Vue 3.'; };\n</script>"
  },
  {
    "id": "fw-alpinejs",
    "lang": "frameworks",
    "title": "Alpine.js (Легковесная замена jQuery прямо в HTML-разметке)",
    "summary": "Микро-фреймворк весом 15 КБ, позволяющий создавать модалки, табы, выпадающие меню и аккордеоны прямо через HTML-атрибуты x-data, x-show и @click без отдельных .js файлов.",
    "tags": [
      "framework",
      "фреймворк",
      "alpine",
      "alpinejs",
      "jquery замена",
      "x-data",
      "микрофреймворк"
    ],
    "when": "Идеальный выбор для серверных сайтов (PHP, Laravel, WordPress, Django) и лендингов, где React избыточен, а писать ручной querySelector долго.",
    "alternatives": "Нативный JavaScript или HTMX.",
    "points": [
      "Кого заменяет: устаревший jQuery и десятки мелких файлов вроде tabs.js, modal.js, dropdown.js.",
      "Подключение в 1 строку в <head>: <script defer src=\"https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js\"></script>.",
      "Атрибут x-data=\"{ open: false }\" объявляет локальное реактивное состояние прямо на HTML-теге.",
      "Атрибуты @click=\"open = !open\" и x-show=\"open\" управляют видимостью блока без единого ID или класса."
    ],
    "code": "<!-- 1. Подключение Alpine.js одной строкой (без npm и сборки!) -->\n<script defer src=\"https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js\"></script>\n\n<!-- 2. Выпадающее меню прямо в HTML -->\n<div x-data=\"{ open: false }\" class=\"alpine-box\">\n  <button @click=\"open = !open\" class=\"alpine-btn\">\n    Настройки профиля ▾\n  </button>\n\n  <div x-show=\"open\" class=\"alpine-menu\">\n    <p>Аккаунт: <strong>PRO</strong></p>\n    <p>Вся логика описана в атрибутах <code>x-data</code> и <code>x-show</code>!</p>\n  </div>\n</div>",
    "example": "<div style=\"padding:18px;background:#131c2e;border:1px solid #38bdf8;border-radius:12px;color:#f8fafc;font-family:system-ui,sans-serif;\">\n  <button id=\"alp-btn\" style=\"background:#38bdf8;color:#090d16;border:none;padding:8px 14px;border-radius:8px;font-weight:700;cursor:pointer;\">Настройки профиля (x-data=\"{ open }\") ▾</button>\n  <div id=\"alp-menu\" style=\"margin-top:10px;padding:12px;background:#090d16;border:1px solid #334155;border-radius:8px;font-size:13px;\">\n    ✓ Блок управляется декларативно без единого <code>document.querySelector</code>!\n  </div>\n</div>\n<script>\nconst aBtn = document.getElementById('alp-btn');\nconst aMenu = document.getElementById('alp-menu');\naBtn.onclick = () => { aMenu.hidden = !aMenu.hidden; };\n</script>"
  },
  {
    "id": "fw-htmx",
    "lang": "frameworks",
    "title": "HTMX (AJAX-запросы, WebSockets и динамика прямо из HTML)",
    "summary": "Библиотека, позволяющая любому HTML-элементу отправлять POST/GET-запросы и обновлять часть страницы без перезагрузки и без написания JavaScript-кода.",
    "tags": [
      "framework",
      "фреймворк",
      "htmx",
      "ajax",
      "fetch замена",
      "hx-get",
      "hx-post",
      "php"
    ],
    "when": "Когда бэкенд пишется на PHP, Python или Go, и вы хотите получить плавность SPA-приложения без создания отдельного фронтенда на React.",
    "alternatives": "Ручной fetch() + innerHTML или полноценный SPA (React / Vue).",
    "points": [
      "Кого заменяет: ручные цепочки fetch() -> response.text() -> document.getElementById().innerHTML.",
      "Подключение (CDN): <script src=\"https://unpkg.com/htmx.org@2.0.0\"></script>.",
      "Атрибут hx-post=\"/api/like\" отправляет запрос по клику, а hx-target=\"#likes-count\" указывает, какой блок на странице обновить ответом сервера."
    ],
    "code": "<!-- Подключение HTMX -->\n<script src=\"https://unpkg.com/htmx.org@2.0.0\"></script>\n\n<!-- Поиск с автоподгрузкой результатов и задержкой 300ms (debounce) -->\n<input type=\"search\"\n       name=\"q\"\n       hx-get=\"/api/search\"\n       hx-trigger=\"input changed delay:300ms\"\n       hx-target=\"#search-results\"\n       placeholder=\"Живой поиск через HTMX...\">\n\n<div id=\"search-results\">Результаты появятся здесь без единой строчки JS</div>"
  },
  {
    "id": "fw-bootstrap5",
    "lang": "frameworks",
    "title": "Bootstrap 5.3 (Готовая 12-колоночная сетка и UI-компоненты без jQuery)",
    "summary": "Классический CSS/JS-фреймворк с готовыми адаптивными контейнерами (row / col-md-6), модальными окнами, таблицами, формами и встроенной тёмной темой.",
    "tags": [
      "framework",
      "фреймворк",
      "bootstrap",
      "bootstrap 5",
      "сетка",
      "col-md",
      "компоненты"
    ],
    "when": "Для быстрой сборки админ-панелей, внутренних корпоративных порталов, CRM и прототипов.",
    "alternatives": "Tailwind CSS (для уникального дизайна) или нативный CSS Grid.",
    "points": [
      "Кого заменяет: ручное написание базовых стилей для кнопок, таблиц, алертов, модалок и колонок.",
      "В версии Bootstrap 5 полностью удалена зависимость от jQuery — все интерактивные компоненты работают на чистом JS.",
      "Подключение через CDN занимает 2 строки: один <link> для CSS и один <script> для bundle.min.js.",
      "Атрибут data-bs-theme=\"dark\" на теге <html> мгновенно переключает весь сайт в тёмную тему."
    ],
    "code": "<!-- 1. Подключение Bootstrap 5.3 CSS в <head> -->\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n<!-- 2. Адаптивная 12-колоночная сетка -->\n<div class=\"container py-3\" data-bs-theme=\"dark\">\n  <div class=\"row g-3\">\n    <div class=\"col-12 col-md-6\">\n      <div class=\"p-3 border rounded bg-dark text-light\">Колонка 1 (50% на ПК, 100% на телефоне)</div>\n    </div>\n    <div class=\"col-12 col-md-6\">\n      <div class=\"p-3 border rounded bg-dark text-light\">Колонка 2 (50% на ПК, 100% на телефоне)</div>\n    </div>\n  </div>\n</div>"
  },
  {
    "id": "fw-typescript",
    "lang": "frameworks",
    "title": "TypeScript (Строгая типизация поверх JavaScript)",
    "summary": "Надмножество JavaScript от Microsoft, добавляющее статическую проверку типов, интерфейсы и автодополнение в IDE до запуска кода в браузере.",
    "tags": [
      "framework",
      "фреймворк",
      "typescript",
      "ts",
      "типизация",
      "interface",
      "type"
    ],
    "when": "В любых проектах длиннее 300 строк кода и при командной разработке, чтобы исключить ошибки Cannot read properties of undefined.",
    "alternatives": "JSDoc-комментарии (@param, @returns) в обычных .js файлах.",
    "points": [
      "Кого заменяет: динамический JavaScript без проверки типов и ручные проверки typeof x === \"string\".",
      "Установка в проект: npm install -D typescript && npx tsc --init.",
      "Vite поддерживает файлы .ts и .tsx из коробки без дополнительной настройки.",
      "На этапе сборки все типы вырезаются, превращаясь в чистый совместимый JavaScript."
    ],
    "code": "// Описание структуры пользователя через interface\ninterface UserProfile {\n  id: number;\n  name: string;\n  role: 'admin' | 'editor' | 'viewer';\n  email?: string; // Необязательное поле\n}\n\nfunction formatUserBadge(user: UserProfile): string {\n  return `[${user.role.toUpperCase()}] ${user.name} (#${user.id})`;\n}\n\nconst current: UserProfile = { id: 42, name: 'Павел', role: 'admin' };\nconsole.log(formatUserBadge(current));"
  },
  {
    "id": "fw-vite",
    "lang": "frameworks",
    "title": "Vite (Мгновенный сборщик проектов вместо Webpack и Gulp)",
    "summary": "Инструмент сборки нового поколения, использующий нативные ES-модули браузера для запуска сервера за 200 мс и оптимизированную сборку Rollup для продакшена.",
    "tags": [
      "framework",
      "фреймворк",
      "vite",
      "сборщик",
      "webpack замена",
      "gulp замена",
      "hmr",
      "npm"
    ],
    "when": "Для старта любого современного проекта на чистом JS/TS, React, Vue, Svelte или многостраничной верстки.",
    "alternatives": "Parcel, esbuild или устаревший Webpack.",
    "points": [
      "Кого заменяет: медленные конфиги Webpack на 200 строк и сложные пайплайны Gulp.",
      "Создание нового проекта за 1 команду: npm create vite@latest.",
      "Команда npm run dev запускает локальный сервер с мгновенным обновлением стилей (HMR).",
      "Команда npm run build собирает минифицированную папку dist/, готовую к загрузке на любой хостинг (включая Beget, GitHub Pages, Vercel)."
    ],
    "code": "// 1. Создание и запуск проекта в терминале:\n// npm create vite@latest my-project\n// cd my-project && npm install && npm run dev\n\n// 2. Пример конфигурации vite.config.js:\nimport { defineConfig } from 'vite';\n\nexport default defineConfig({\n  server: {\n    port: 3000,\n    open: true\n  },\n  build: {\n    outDir: 'dist',\n    sourcemap: false\n  }\n});"
  },
  {
    "id": "fw-laravel",
    "lang": "frameworks",
    "title": "Laravel 11 (Современный PHP-фреймворк вместо процедурного PHP)",
    "summary": "Самый популярный PHP-фреймворк с элегантным роутингом, ORM Eloquent (вместо сырых SQL-запросов), шаблонизатором Blade, очередями и встроенной авторизацией.",
    "tags": [
      "framework",
      "фреймворк",
      "laravel",
      "php",
      "eloquent",
      "blade",
      "mvc",
      "бэкенд"
    ],
    "when": "Для создания надёжных серверных веб-приложений, REST API, интернет-магазинов и личных кабинетов на PHP 8.2+.",
    "alternatives": "Symfony, Slim Framework или чистый PHP 8 для микро-скриптов.",
    "points": [
      "Кого заменяет: разрозненные файлы index.php, login.php, db.php с ручным PDO и смешиванием SQL с HTML.",
      "Установка через Composer: composer create-project laravel/laravel my-app.",
      "Eloquent ORM позволяет писать Product::where(\"active\", true)->get() вместо ручного написания SQL.",
      "Шаблонизатор Blade автоматически экранирует вывод {{ $user->name }} для полной защиты от XSS."
    ],
    "code": "<?php\n// 1. Маршрут в routes/web.php (Laravel 11)\nuse App\\Models\\Project;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/projects', function () {\n    // Eloquent ORM: безопасная выборка без ручного SQL\n    $projects = Project::where('is_published', true)\n        ->orderByDesc('created_at')\n        ->take(10)\n        ->get();\n\n    return view('projects.index', compact('projects'));\n});"
  },
  {
    "id": "fw-nextjs",
    "lang": "frameworks",
    "title": "Next.js 15 (Full-Stack фреймворк поверх React с SSR и SEO)",
    "summary": "Продакшен-фреймворк для React с файловым роутингом (App Router), серверным рендерингом (SSR) для идеальной индексации в поисковиках и серверными экшенами.",
    "tags": [
      "framework",
      "фреймворк",
      "nextjs",
      "next",
      "react",
      "ssr",
      "ssg",
      "seo"
    ],
    "when": "Когда проекту на React нужна быстрая первая отрисовка и 100% индексация страниц в Google и Яндекс.",
    "alternatives": "Remix, Nuxt 3 (для Vue) или Astro (для контентных сайтов).",
    "points": [
      "Кого заменяет: клиентский React SPA (Create React App), который отдаёт поисковым роботам пустой <div id=\"root\"></div>.",
      "Быстрый старт: npx create-next-app@latest.",
      "Файловый роутинг: файл app/about/page.tsx автоматически становится страницей по адресу /about.",
      "Серверные компоненты (RSC) выполняют запросы к БД прямо на сервере и не отправляют лишний JS в браузер."
    ],
    "code": "// Файл app/blog/page.tsx (Серверный компонент Next.js)\nexport const metadata = {\n  title: 'Блог разработчика — DevShelf',\n  description: 'Статьи рендерятся на сервере и мгновенно индексируются поисковиками.'\n};\n\nexport default async function BlogPage() {\n  // Запрос выполняется на сервере до отправки HTML в браузер!\n  const res = await fetch('https://api.example.com/posts', { next: { revalidate: 60 } });\n  const posts = await res.json();\n\n  return (\n    <main>\n      <h1>Статьи ({posts.length})</h1>\n    </main>\n  );\n}"
  },
  {
    "id": "fw-scss-sass",
    "lang": "frameworks",
    "title": "Sass / SCSS (Препроцессор CSS: миксины, функции и модули)",
    "summary": "Метаязык поверх CSS, добавляющий переиспользуемые миксины (@mixin), математические циклы, функции и модульную архитектуру (@use).",
    "tags": [
      "framework",
      "фреймворк",
      "sass",
      "scss",
      "препроцессор",
      "mixin",
      "css"
    ],
    "when": "В крупных дизайн-системах и проектах со сложной генерацией тем и повторяющимися медиа-запросами.",
    "alternatives": "Современный нативный CSS (который уже поддерживает переменные var() и вложенность & из коробки) или Tailwind CSS.",
    "points": [
      "Кого упрощает: многократное дублирование медиа-запросов и шаблонных комбинаций свойств в CSS.",
      "Подключение в Vite: достаточно выполнить npm add -D sass-embedded и переименовать файл в styles.scss.",
      "Директива @mixin позволяет упаковать набор стилей с параметрами и подключать его через @include."
    ],
    "code": "// 1. Объявление переиспользуемого миксина в SCSS\n@mixin glass-panel($blur: 12px, $alpha: 0.65) {\n  background: rgba(15, 23, 42, $alpha);\n  backdrop-filter: blur($blur);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 14px;\n}\n\n// 2. Использование с вложенностью\n.header-bar {\n  @include glass-panel(16px, 0.8);\n  padding: 16px 24px;\n\n  &__title {\n    color: #38bdf8;\n    font-weight: 700;\n  }\n}"
  },
  {
    "id": "fw-gsap",
    "lang": "frameworks",
    "title": "GSAP (GreenSock — профессиональная веб-анимация и ScrollTrigger)",
    "summary": "Индустриальный стандарт для сложных таймлайнов, плавной анимации SVG, морфинга и скролл-сцен (ScrollTrigger), работающий стабильно во всех браузерах.",
    "tags": [
      "framework",
      "фреймворк",
      "gsap",
      "scrolltrigger",
      "анимация",
      "keyframes замена"
    ],
    "when": "Для промо-лендингов, интерактивного сторителлинга при скролле, последовательных анимаций (stagger) и сложных переходов.",
    "alternatives": "Нативные CSS transition / @keyframes или Web Animations API (element.animate) для простых ховеров.",
    "points": [
      "Кого заменяет: громоздкие цепочки CSS @keyframes с ручным высчитыванием процентов и задержек animation-delay.",
      "Подключение (CDN): <script src=\"https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js\"></script>.",
      "Установка через npm: npm install gsap.",
      "Свойство stagger: 0.1 автоматически запускает анимацию списка карточек каскадом с интервалом 0.1 секунды."
    ],
    "code": "// 1. Подключение GSAP:\n// import gsap from 'gsap';\n\n// 2. Каскадное появление карточек с пружинной физикой\ngsap.from('.feature-card', {\n  y: 30,\n  opacity: 0,\n  duration: 0.6,\n  stagger: 0.12,\n  ease: 'power3.out'\n});"
  },
  {
    "lang": "html",
    "id": "html-document",
    "title": "HTML: структура документа (HTML5 Boilerplate)",
    "summary": "Обязательный стандартный каркас веб-страницы: объявление стандарта, язык страницы, метаданные и тело.",
    "code": "<!doctype html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Заголовок страницы</title>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Основной заголовок</h1>\n  <script src=\"script.js\" defer></script>\n</body>\n</html>",
    "example": "<main>\n  <h1>Добро пожаловать</h1>\n  <p>Контент страницы.</p>\n</main>",
    "points": [
      "<!doctype html> переводит браузер в режим соответствия стандартам (Standards Mode) без quirks-режима.",
      "Атрибут lang=\"ru\" критически важен для синтезаторов речи (screen readers), автопереводчиков и поисковиков.",
      "Тег <meta name=\"viewport\"> гарантирует правильный масштаб и отсутствие зума на мобильных экранах."
    ],
    "tags": [
      "HTML",
      "doctype",
      "html",
      "head",
      "body",
      "структура",
      "каркас",
      "boilerplate",
      "lang",
      "viewport"
    ],
    "when": "Начинай с этого каркаса любую страницу или шаблон в проекте.",
    "alternatives": "Для AJAX-фрагментов и компонентов каркас опускается; для фреймворков каркас выносится в index.html или layout.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML"
  },
  {
    "lang": "html",
    "id": "html-metadata",
    "title": "HTML: метаданные страницы и мобильный viewport",
    "summary": "Настройка кодировки, заголовка вкладки, описания для поисковиков и темы мобильного браузера.",
    "code": "<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"Краткое емкое описание (до 160 символов) для сниппета в поисковиках\">\n  <meta name=\"theme-color\" content=\"#090d14\">\n  <link rel=\"canonical\" href=\"https://example.com/page\">\n  <title>Понятный заголовок вкладки | Название бренда</title>\n</head>",
    "example": "<meta name=\"theme-color\" content=\"#090d14\" media=\"(prefers-color-scheme: dark)\">",
    "points": [
      "<meta charset=\"utf-8\"> должен стоять в числе первых тегов внутри <head>, чтобы браузер сразу декодировал текст.",
      "<title> является главным фактором ранжирования в поисковиках и заголовком вкладки в браузере.",
      "canonical указывает поисковику основную версию страницы, предотвращая склейку и дубли контента."
    ],
    "tags": [
      "HTML",
      "meta",
      "title",
      "description",
      "viewport",
      "theme-color",
      "canonical",
      "метаданные",
      "кодировка"
    ],
    "when": "Обязательно настраивай для всех публичных страниц сайта для правильного отображения и SEO.",
    "alternatives": "Для страниц админ-панелей description и canonical обычно опускают.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/meta"
  },
  {
    "lang": "html",
    "id": "html-opengraph",
    "title": "HTML: разметка Open Graph и Twitter Cards для соцсетей",
    "summary": "Специальные метатеги, формирующие красивую карточку с превью, заголовком и картинкой при репосте в Telegram, VK и WhatsApp.",
    "code": "<!-- Open Graph (Telegram, VK, Facebook) -->\n<meta property=\"og:type\" content=\"website\">\n<meta property=\"og:site_name\" content=\"DevShelf\">\n<meta property=\"og:title\" content=\"Заголовок для ссылки в соцсети\">\n<meta property=\"og:description\" content=\"Краткое превью статьи, отображаемое под заголовком.\">\n<meta property=\"og:image\" content=\"https://example.com/og-image.jpg\">\n<meta property=\"og:image:width\" content=\"1200\">\n<meta property=\"og:image:height\" content=\"630\">\n<meta property=\"og:url\" content=\"https://example.com/page\">\n\n<!-- Twitter Cards -->\n<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:title\" content=\"Заголовок карточки\">\n<meta name=\"twitter:description\" content=\"Описание статьи для карточки\">\n<meta name=\"twitter:image\" content=\"https://example.com/og-image.jpg\">",
    "example": "<!-- Минимальный набор для Telegram: og:title, og:description, og:image -->",
    "points": [
      "Разрешение картинки og:image должно быть 1200x630 пикселей (пропорция 1.91:1) для четкого отображения на Retina.",
      "Ссылка на картинку должна быть абсолютной (https://...), иначе боты Telegram и VK её не загрузят.",
      "После изменения og-тегов в Telegram используй бота @WebpageBot, чтобы сбросить кэш превью ссылки."
    ],
    "tags": [
      "HTML",
      "opengraph",
      "og",
      "twitter",
      "social",
      "telegram",
      "vk",
      "превью",
      "репост",
      "карточка"
    ],
    "when": "Добавляй на все лендинги, статьи блога и страницы, на которые пользователи будут делиться ссылками.",
    "alternatives": "Без og: тегов соцсети выдернут первую попавшуюся картинку со страницы или оставят пустую серую плашку.",
    "url": "https://ogp.me/"
  },
  {
    "lang": "html",
    "id": "html-schema-jsonld",
    "title": "HTML: микроразметка Schema.org (JSON-LD)",
    "summary": "Структурированные данные для поисковых систем Google и Яндекс, позволяющие получить расширенные сниппеты (звезды, цены, FAQ).",
    "code": "<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebApplication\",\n  \"name\": \"DevShelf\",\n  \"url\": \"https://example.com\",\n  \"description\": \"Справочник веб-разработчика и интерактивная песочница\",\n  \"applicationCategory\": \"DeveloperApplication\",\n  \"operatingSystem\": \"All\",\n  \"offers\": {\n    \"@type\": \"Offer\",\n    \"price\": \"0\",\n    \"priceCurrency\": \"RUB\"\n  }\n}\n</script>",
    "example": "<!-- Для статей используй @type: \"Article\", для интернет-магазинов @type: \"Product\" -->",
    "points": [
      "Формат JSON-LD рекомендован Google, так как он отделен от HTML-верстки и не ломается при смене дизайна.",
      "Размещается внутри тега <script type=\"application/ld+json\"> в секции <head> или перед </body>.",
      "Проверить корректность синтаксиса можно в официальном валидаторе Google Rich Results Test."
    ],
    "tags": [
      "HTML",
      "schema",
      "json-ld",
      "микроразметка",
      "сео",
      "seo",
      "google",
      "яндекс",
      "структура"
    ],
    "when": "Используй для интернет-магазинов (товары, отзывы), блогов (автор, дата публикации), FAQ и рецептов.",
    "alternatives": "Устаревшие атрибуты Microdata (itemscope, itemprop) сложнее поддерживать при редизайне верстки.",
    "url": "https://schema.org/"
  },
  {
    "lang": "html",
    "id": "html-semantic",
    "title": "HTML: семантическая структура страницы",
    "summary": "Использование осмысленных тегов вместо бесконечных <div> для доступности, SEO и правильной архитектуры документа.",
    "code": "<header>\n  <nav aria-label=\"Основная навигация\">\n    <a href=\"/\">Главная</a>\n    <a href=\"/catalog\">Каталог</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <header>\n      <h1>Заголовок статьи</h1>\n      <p><time datetime=\"2026-03-15\">15 марта 2026</time></p>\n    </header>\n    <p>Основной текст статьи...</p>\n    <section>\n      <h2>Подраздел статьи</h2>\n      <p>Текст раздела...</p>\n    </section>\n  </article>\n\n  <aside aria-label=\"Связанные материалы\">\n    <h3>Смотрите также</h3>\n  </aside>\n</main>\n\n<footer>\n  <p>&copy; 2026 Компания</p>\n</footer>",
    "example": "<main id=\"content\">\n  <!-- Уникальное содержимое страницы -->\n</main>",
    "points": [
      "На странице должен быть ровно один тег <main>, содержащий неповторяющийся контент страницы.",
      "<article> используется для самодостаточных фрагментов (пост в блоге, комментарий, карточка товара).",
      "<section> группирует тематический блок контента и должен содержать свой заголовок h2-h6.",
      "<aside> обозначает косвенно связанный контент (сайдбар, реклама, связанные статьи)."
    ],
    "tags": [
      "HTML",
      "семантика",
      "header",
      "nav",
      "main",
      "article",
      "section",
      "aside",
      "footer",
      "структура"
    ],
    "when": "Всегда применяй семантические теги при верстке каркасов страниц и компонентов.",
    "alternatives": "Откажись от «div-супа» (верстки на сплошных div class=\"main_header\"), снижающего доступность и ухудшающего SEO.",
    "url": "https://developer.mozilla.org/ru/docs/Glossary/Semantics"
  },
  {
    "lang": "html",
    "id": "html-dialog",
    "title": "HTML: нативное модальное окно <dialog>",
    "summary": "Встроенный в HTML5 элемент всплывающего или модального окна с автоматической поддержкой клавиши Esc, блокировкой фона и фокусом.",
    "code": "<!-- Разметка модального окна -->\n<dialog id=\"modal\">\n  <h2>Заголовок диалога</h2>\n  <p>Текст сообщения или форма внутри модалки.</p>\n  <button type=\"button\" id=\"close-modal\">Закрыть</button>\n</dialog>\n\n<button type=\"button\" id=\"open-modal\">Открыть окно</button>\n\n<script>\n  const dialog = document.getElementById('modal');\n  document.getElementById('open-modal').onclick = () => dialog.showModal();\n  document.getElementById('close-modal').onclick = () => dialog.close();\n\n  // Закрытие по клику на затемненный фон (backdrop)\n  dialog.onclick = (e) => {\n    if (e.target === dialog) dialog.close();\n  };\n</script>",
    "example": "dialog::backdrop {\n  background: rgba(0, 0, 0, 0.65);\n  backdrop-filter: blur(4px);\n}",
    "points": [
      "Метод showModal() открывает окно как модальное (блокирует взаимодействие с остальной страницей и добавляет ::backdrop).",
      "Метод show() открывает обычный немодальный попап.",
      "Клавиша Esc закрывает окно автоматически из коробки без написания JS-обработчиков.",
      "Фокус клавиатуры автоматически захватывается внутри диалога (focus trap) и возвращается на кнопку открытия при закрытии."
    ],
    "tags": [
      "HTML",
      "dialog",
      "modal",
      "модальное окно",
      "попап",
      "showModal",
      "backdrop",
      "интерактив"
    ],
    "when": "Используй для форм подтверждения, всплывающих окон входа, корзины и карточек подробностей.",
    "alternatives": "Заменяет устаревшие самописные JS-модалки с кучей кода блокировки скролла и фокус-ловушек.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog"
  },
  {
    "lang": "html",
    "id": "html-details",
    "title": "HTML: спойлер и аккордеон без JavaScript (<details> и <summary>)",
    "summary": "Нативный интерактивный раскрывающийся блок, управляемый кликом пользователя без единой строчки скриптов.",
    "code": "<details>\n  <summary>Как работает доставка?</summary>\n  <p>Доставка осуществляется курьером по всей России в течение 2-4 рабочих дней.</p>\n</details>\n\n<!-- Аккордеон с эксклюзивным раскрытием (name в современных браузерах) -->\n<details name=\"faq\">\n  <summary>Вопрос 1: Какие способы оплаты?</summary>\n  <p>Карты, СБП, безналичный расчет.</p>\n</details>\n<details name=\"faq\">\n  <summary>Вопрос 2: Как оформить возврат?</summary>\n  <p>В личном кабинете в течение 14 дней.</p>\n</details>",
    "example": "details[open] summary {\n  color: #38bdf8;\n}\ndetails summary {\n  cursor: pointer;\n}",
    "points": [
      "Атрибут open указывает, открыт ли блок по умолчанию (можно добавлять программно).",
      "Атрибут name=\"group\" позволяет связывать несколько <details> в единый аккордеон (открывается только один).",
      "Полная поддержка клавиатуры: пробел и Enter раскрывают блок, когда фокус на <summary>."
    ],
    "tags": [
      "HTML",
      "details",
      "summary",
      "спойлер",
      "аккордеон",
      "faq",
      "раскрывающийся блок"
    ],
    "when": "Идеально для страниц FAQ, раскрывающихся фильтров каталога, списков изменений (Changelog).",
    "alternatives": "Не требует подключения JS-библиотек или фреймворков для простых выпадающих списков.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/details"
  },
  {
    "lang": "html",
    "id": "html-template",
    "title": "HTML: шаблоны без отображения (<template> и <slot>)",
    "summary": "Тег <template> хранит разметку на клиенте, которую браузер парсит, но не отображает до клонирования в JavaScript.",
    "code": "<template id=\"card-template\">\n  <div class=\"user-card\">\n    <h3 class=\"user-name\"></h3>\n    <p class=\"user-role\"></p>\n    <button type=\"button\" class=\"action-btn\">Написать</button>\n  </div>\n</template>\n\n<div id=\"users-list\"></div>\n\n<script>\n  const tmpl = document.getElementById('card-template');\n  const clone = tmpl.content.cloneNode(true);\n  clone.querySelector('.user-name').textContent = 'Иван Петров';\n  clone.querySelector('.user-role').textContent = 'Frontend Developer';\n  document.getElementById('users-list').appendChild(clone);\n</script>",
    "example": "const clone = template.content.cloneNode(true);",
    "points": [
      "Содержимое <template> не выполняется при загрузке страницы: скрипты не исполняются, картинки не скачиваются.",
      "Для вставки разметки используется template.content.cloneNode(true).",
      "Широко применяется в веб-компонентах (Web Components) совместно с Shadow DOM и тегом <slot>."
    ],
    "tags": [
      "HTML",
      "template",
      "slot",
      "шаблон",
      "компонент",
      "cloneNode",
      "web components"
    ],
    "when": "Используй для рендеринга списков данных на чистом JS без сборки через шаблонизаторы.",
    "alternatives": "Безопаснее и быстрее конкатенации строк через innerHTML, так как защищает от XSS-инъекций.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/template"
  },
  {
    "lang": "html",
    "id": "html-form",
    "title": "HTML: форма <form> и методы передачи данных",
    "summary": "Контейнер для сбора пользовательского ввода с настройкой методов GET/POST и типа кодирования.",
    "code": "<form action=\"/api/feedback\" method=\"POST\" enctype=\"multipart/form-data\">\n  <label for=\"user-email\">Ваш Email:</label>\n  <input type=\"email\" id=\"user-email\" name=\"email\" required placeholder=\"name@example.com\">\n\n  <label for=\"user-msg\">Сообщение:</label>\n  <textarea id=\"user-msg\" name=\"message\" rows=\"4\" required></textarea>\n\n  <button type=\"submit\">Отправить заявку</button>\n</form>",
    "example": "<form id=\"search-form\" method=\"GET\" action=\"/search\">\n  <input type=\"search\" name=\"q\">\n</form>",
    "points": [
      "Для загрузки файлов через форму обязателен атрибут enctype=\"multipart/form-data\" и method=\"POST\".",
      "Для поисковых запросов и фильтров используй method=\"GET\", чтобы параметры сохранялись в URL.",
      "Атрибут novalidate отключает стандартную браузерную всплывающую валидацию, если ты настраиваешь свою."
    ],
    "tags": [
      "HTML",
      "form",
      "форма",
      "method",
      "action",
      "post",
      "get",
      "enctype",
      "submit"
    ],
    "when": "Используй для авторизации, оформления заказа, обратной связи и поисковых панелей.",
    "alternatives": "В SPA отправка перехватывается через e.preventDefault() в событии submit и отправляется через fetch().",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/form"
  },
  {
    "lang": "html",
    "id": "html-input-text",
    "title": "HTML: текстовые поля ввода <input>",
    "summary": "Разновидности полей ввода для текста, почты, паролей, поиска и телефонных номеров с правильными экранными клавиатурами.",
    "code": "<!-- Текстовое поле -->\n<input type=\"text\" name=\"username\" autocomplete=\"username\" required>\n\n<!-- Email (открывает клавиатуру с символом @ на смартфонах) -->\n<input type=\"email\" name=\"email\" autocomplete=\"email\" required>\n\n<!-- Пароль (скрывает символы точками) -->\n<input type=\"password\" name=\"password\" autocomplete=\"current-password\" minlength=\"8\" required>\n\n<!-- Поле поиска (содержит крестик очистки в браузерах) -->\n<input type=\"search\" name=\"query\" placeholder=\"Поиск по сайту...\">\n\n<!-- Телефон (открывает цифровую клавиатуру на смартфонах) -->\n<input type=\"tel\" name=\"phone\" autocomplete=\"tel\" pattern=\"\\+7\\s?\\(?\\d{3}\\)?\\s?\\d{3}-?\\d{2}-?\\d{2}\">",
    "example": "<input type=\"email\" inputmode=\"email\" enterkeyhint=\"next\">",
    "points": [
      "Атрибут autocomplete помогает браузеру подставить данные из менеджера паролей или профиля.",
      "Атрибут inputmode управляет типом вызываемой виртуальной клавиатуры на смартфонах.",
      "Каждый <input> должен быть связан с <label> через атрибуты for=\"id\" или быть вложен внутрь него."
    ],
    "tags": [
      "HTML",
      "input",
      "text",
      "email",
      "password",
      "tel",
      "search",
      "поля ввода",
      "клавиатура"
    ],
    "when": "Используй для любых форм ввода персональных и учетных данных.",
    "alternatives": "Для многострочного текста всегда используй тег <textarea>, а не <input>.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input"
  },
  {
    "lang": "html",
    "id": "html-input-choice",
    "title": "HTML: чекбоксы и радиокнопки (<fieldset> и <legend>)",
    "summary": "Элементы одиночного и множественного выбора с группировкой по стандарту доступности.",
    "code": "<!-- Группа радиокнопок (выбор 1 из нескольких) -->\n<fieldset>\n  <legend>Выберите тарифный план:</legend>\n  <label>\n    <input type=\"radio\" name=\"plan\" value=\"free\" checked>\n    Бесплатный (0 ₽)\n  </label>\n  <label>\n    <input type=\"radio\" name=\"plan\" value=\"pro\">\n    Профессиональный (990 ₽/мес)\n  </label>\n</fieldset>\n\n<!-- Чекбокс (множественный выбор или согласие) -->\n<label>\n  <input type=\"checkbox\" name=\"terms\" required>\n  Я согласен с правилами сервиса\n</label>",
    "example": "<input type=\"checkbox\" id=\"theme\" role=\"switch\">",
    "points": [
      "У связанных радиокнопок должен быть одинаковый атрибут name, чтобы браузер переключал их взаимоисключающе.",
      "<fieldset> объединяет связанные поля, а <legend> служит заголовком группы для скринридеров.",
      "Для стилизации под тумблер (switch) часто добавляют атрибут role=\"switch\"."
    ],
    "tags": [
      "HTML",
      "checkbox",
      "radio",
      "fieldset",
      "legend",
      "чекбокс",
      "радиокнопка",
      "выбор"
    ],
    "when": "Используй для опросов, фильтров в интернет-магазинах, согласий и выбора тарифов.",
    "alternatives": "Для кастомного оформления скрывай нативный input через opacity: 0 или appearance: none, сохраняя фокус с клавиатуры.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/checkbox"
  },
  {
    "lang": "html",
    "id": "html-select-datalist",
    "title": "HTML: списки <select> и автодополнение <datalist>",
    "summary": "Выпадающие меню выбора и текстовые поля с предложенными вариантами автозаполнения.",
    "code": "<!-- Выпадающий список select -->\n<label for=\"city-select\">Выберите город:</label>\n<select id=\"city-select\" name=\"city\">\n  <option value=\"\" disabled selected>-- Выберите вариант --</option>\n  <optgroup label=\"Россия\">\n    <option value=\"msk\">Москва</option>\n    <option value=\"spb\">Санкт-Петербург</option>\n  </optgroup>\n  <optgroup label=\"Беларусь\">\n    <option value=\"minsk\">Минск</option>\n  </optgroup>\n</select>\n\n<!-- Текстовое поле с автодополнением datalist -->\n<label for=\"lang-input\">Язык программирования:</label>\n<input list=\"lang-options\" id=\"lang-input\" name=\"language\" placeholder=\"Начните ввод...\">\n<datalist id=\"lang-options\">\n  <option value=\"JavaScript\">\n  <option value=\"TypeScript\">\n  <option value=\"PHP\">\n  <option value=\"Python\">\n</datalist>",
    "example": "<select name=\"skills\" multiple size=\"4\">\n  <!-- Множественный выбор -->\n</select>",
    "points": [
      "<datalist> в отличие от <select> разрешает пользователю ввести свой собственный вариант, отсутствующий в списке.",
      "<optgroup> группирует опции внутри <select> с логическими заголовками.",
      "Для множественного выбора в <select> добавляется атрибут multiple."
    ],
    "tags": [
      "HTML",
      "select",
      "datalist",
      "option",
      "optgroup",
      "список",
      "выпадающий список",
      "автодополнение"
    ],
    "when": "Используй <select> при строгом наборе значений, а <datalist> — для подсказок в строках поиска и городах.",
    "alternatives": "Для сложных выпадающих меню с картинками используют кастомные ARIA-компоненты (combobox).",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/select"
  },
  {
    "lang": "html",
    "id": "html-images-responsive",
    "title": "HTML: адаптивные изображения (<picture>, srcset, loading=\"lazy\")",
    "summary": "Оптимальная загрузка графики под разные экраны, форматы WebP/AVIF и отложенная загрузка для ускорения сайта.",
    "code": "<picture>\n  <!-- Современный сверхсжатый формат AVIF -->\n  <source type=\"image/avif\" srcset=\"hero.avif\">\n  <!-- Формат WebP для браузеров без AVIF -->\n  <source type=\"image/webp\" srcset=\"hero.webp\">\n  <!-- Разные картинки под экраны разной ширины -->\n  <source media=\"(min-width: 1024px)\" srcset=\"hero-desktop.jpg\">\n  <source media=\"(min-width: 640px)\" srcset=\"hero-tablet.jpg\">\n  <!-- Обязательный запасной вариант -->\n  <img src=\"hero-mobile.jpg\"\n       alt=\"Разработчик за рабочим местом с кодом на мониторе\"\n       width=\"800\"\n       height=\"600\"\n       loading=\"lazy\"\n       decoding=\"async\">\n</picture>",
    "example": "<img src=\"thumb.webp\" srcset=\"thumb.webp 1x, thumb-2x.webp 2x\" alt=\"Миниатюра\">",
    "points": [
      "Всегда указывай атрибуты width и height на <img> — это предотвращает сдвиг макета (CLS, Cumulative Layout Shift).",
      "loading=\"lazy\" указывает браузеру не загружать картинку, пока пользователь не доскроллит до неё.",
      "Атрибут alt обязателен для доступности и индексации картинок поисковиками."
    ],
    "tags": [
      "HTML",
      "picture",
      "img",
      "srcset",
      "webp",
      "avif",
      "lazy",
      "адаптивные картинки",
      "оптимизация"
    ],
    "when": "Обязательно для фотогалерей, баннеров, карточек каталога и медиа-тяжелых сайтов.",
    "alternatives": "Простой <img src=\"huge.jpg\"> приводит к медленной загрузке сайта и снижению позиций в Google PageSpeed.",
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Structuring_content/Responsive_images"
  },
  {
    "lang": "html",
    "id": "html-video-audio",
    "title": "HTML: видео и аудиоплеер (<video> и <audio>)",
    "summary": "Нативное воспроизведение мультимедиа без флеша и сторонних плагинов с управлением через интерфейс и JavaScript.",
    "code": "<!-- Видеоплеер -->\n<video controls\n       preload=\"metadata\"\n       poster=\"/images/poster.jpg\"\n       width=\"800\"\n       height=\"450\"\n       playsinline>\n  <source src=\"/media/video.mp4\" type=\"video/mp4\">\n  <source src=\"/media/video.webm\" type=\"video/webm\">\n  <track kind=\"subtitles\" src=\"/media/subs-ru.vtt\" srclang=\"ru\" label=\"Русский\" default>\n  Ваш браузер не поддерживает встроенное видео.\n</video>\n\n<!-- Фоновое автовоспроизводимое видео (muted обязателен) -->\n<video autoplay loop muted playsinline poster=\"/images/bg-poster.jpg\" class=\"bg-video\">\n  <source src=\"/media/ambient.mp4\" type=\"video/mp4\">\n</video>",
    "example": "<audio controls src=\"/audio/track.mp3\"></audio>",
    "points": [
      "Браузеры блокируют autoplay видео со звуком: для автозапуска видео обязательно должен быть указан атрибут muted.",
      "Атрибут playsinline критически важен для iOS Safari, иначе видео принудительно разворачивается на весь экран.",
      "Элемент <track> позволяет подключать субтитры и транскрипцию в формате WebVTT (.vtt)."
    ],
    "tags": [
      "HTML",
      "video",
      "audio",
      "плеер",
      "видео",
      "аудио",
      "poster",
      "autoplay",
      "мультимедиа"
    ],
    "when": "Используй для видеопрезентаций, курсов, фоновых динамических обложек и подкастов.",
    "alternatives": "Для YouTube и Vimeo используются вставки <iframe>, но нативный <video> дает полный контроль над стилями.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video"
  },
  {
    "lang": "html",
    "id": "html-aria-accessibility",
    "title": "HTML: доступность WAI-ARIA и клавиатурная навигация",
    "summary": "Атрибуты для корректной работы со скринридерами (программами чтения экрана для незрячих пользователей) и управления с клавиатуры.",
    "code": "<!-- Кнопка с понятной меткой, если внутри только иконка -->\n<button type=\"button\" aria-label=\"Закрыть модальное окно\">\n  <svg aria-hidden=\"true\" width=\"16\" height=\"16\"><path d=\"...\"/></svg>\n</button>\n\n<!-- Индикатор раскрытого состояния меню -->\n<button type=\"button\" aria-expanded=\"false\" aria-controls=\"mobile-nav\">\n  Меню\n</button>\n<nav id=\"mobile-nav\" hidden>\n  <a href=\"/\">Главная</a>\n</nav>\n\n<!-- Живой регион для динамических уведомлений без перезагрузки -->\n<div id=\"status-msg\" role=\"status\" aria-live=\"polite\">\n  Товар успешно добавлен в корзину!\n</div>",
    "example": "<div role=\"alert\" aria-live=\"assertive\">Ошибка подключения к серверу!</div>",
    "points": [
      "Первое правило ARIA: если есть нативный HTML-тег (button, a, dialog, input), используй его, а не div с role=\"button\".",
      "aria-hidden=\"true\" скрывает декоративные элементы (иконки, фоновые иллюстрации) от скринридеров.",
      "aria-live=\"polite\" сообщает пользователю скринридера о произошедшем событии в паузе речи."
    ],
    "tags": [
      "HTML",
      "aria",
      "accessibility",
      "a11y",
      "доступность",
      "скринридер",
      "aria-label",
      "aria-live"
    ],
    "when": "Обязательно для иконочных кнопок, интерактивных меню, тостов и динамических виджетов.",
    "alternatives": "Недоступные интерфейсы теряют пользователей с ограничениями и получают штрафы в поисковом ранжировании.",
    "url": "https://developer.mozilla.org/ru/docs/Web/Accessibility/ARIA"
  },
  {
    "lang": "css",
    "id": "css-box-model",
    "title": "CSS: блочная модель и box-sizing: border-box",
    "summary": "Фундамент верстки: расчет ширины и высоты элементов, внутренние (padding) и внешние (margin) отступы, схлопывание отступов.",
    "code": "/* Универсальный сброс для всех проектов */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 320px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  margin-bottom: 16px;\n  /* При border-box реальная ширина блока останется ровно 320px! */\n}",
    "example": "margin: 0 auto; /* Горизонтальное центрирование блока с фиксированной шириной */",
    "points": [
      "При стандартном content-box padding и border прибавляются к width, ломая сетку (320 + 48 + 2 = 370px).",
      "При border-box размеры padding и border включаются внутрь заданной ширины и высоты.",
      "Схлопывание внешних отступов (margin collapsing) происходит у соседних вертикальных блоков: побеждает больший отступ."
    ],
    "tags": [
      "CSS",
      "box-sizing",
      "border-box",
      "блочная модель",
      "padding",
      "margin",
      "отступы",
      "каркас"
    ],
    "when": "Базовое правило для первой строки любого CSS-файла в современной веб-разработке.",
    "alternatives": "Старый режим content-box используется только в специфических legacy-проектах.",
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics/Box_model"
  },
  {
    "lang": "css",
    "id": "css-flexbox-container",
    "title": "CSS: Flexbox контейнер (направление и отступы gap)",
    "summary": "Одномерная система раскладки по главной и поперечной осям. Управление направлением элементов и интервалами.",
    "code": ".flex-container {\n  display: flex;\n  flex-direction: row; /* row | row-reverse | column | column-reverse */\n  flex-wrap: wrap;     /* nowrap | wrap | wrap-reverse */\n  gap: 16px;           /* Расстояние между колонками и рядами */\n}\n\n/* Колончатая раскладка для мобильных */\n@media (max-width: 768px) {\n  .flex-container {\n    flex-direction: column;\n    gap: 12px;\n  }\n}",
    "example": "display: inline-flex; /* Ведет себя как строчный элемент снаружи и flex внутри */",
    "points": [
      "Свойство gap заменяет костыли со сложными отрицательными margin и псевдоклассами :last-child.",
      "flex-direction: column меняет главную ось на вертикальную (justify-content теперь управляет высотой).",
      "flex-wrap: wrap разрешает элементам переноситься на новую строку при нехватке места."
    ],
    "tags": [
      "CSS",
      "flexbox",
      "flex",
      "flex-direction",
      "flex-wrap",
      "gap",
      "раскладка",
      "флекс"
    ],
    "when": "Идеально для навигационных панелей, кнопочных групп, шапок сайтов и однострочных панелей.",
    "alternatives": "Для двумерных табличных сеток (строки + столбцы одновременно) предпочтительнее CSS Grid.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox"
  },
  {
    "lang": "css",
    "id": "css-flexbox-alignment",
    "title": "CSS: выравнивание во Flexbox (justify-content, align-items)",
    "summary": "Выравнивание элементов по главной оси (горизонталь) и поперечной оси (вертикаль), центрирование элементов.",
    "code": ".parent {\n  display: flex;\n  /* Выравнивание по главной оси (X при row) */\n  justify-content: space-between; \n  /* center | flex-start | flex-end | space-between | space-around | space-evenly */\n\n  /* Выравнивание по поперечной оси (Y при row) */\n  align-items: center; \n  /* stretch | center | flex-start | flex-end | baseline */\n}\n\n/* Идеальное центрирование блока по центру экрана */\n.hero-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}",
    "example": "margin-left: auto; /* Во Flexbox прижимает конкретный элемент к правому краю! */",
    "points": [
      "Знаменитая задача «центрирование по вертикали и горизонтали» решается тремя строками: display: flex; justify-content: center; align-items: center.",
      "Во Flexbox правило margin-left: auto или margin-top: auto поглощает всё свободное пространство с соответствующей стороны.",
      "align-items: stretch по умолчанию растягивает дочерние элементы на всю высоту самого высокого соседа."
    ],
    "tags": [
      "CSS",
      "flexbox",
      "justify-content",
      "align-items",
      "центрирование",
      "выравнивание",
      "флекс"
    ],
    "when": "Для центрирования модальных окон, распределения пунктов шапки (логотип слева, профиль справа).",
    "alternatives": "Старые методы центрирования через position: absolute; transform: translate(-50%, -50%) больше не нужны.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container"
  },
  {
    "lang": "css",
    "id": "css-flexbox-items",
    "title": "CSS: элементы Flexbox (flex-grow, flex-shrink, flex-basis)",
    "summary": "Управление тем, как конкретные дочерние элементы сжимаются, растягиваются и делят доступное место.",
    "code": ".flex-item {\n  /* Сокращенная запись: grow | shrink | basis */\n  flex: 1 1 auto;\n}\n\n/* Сайдбар фиксированной ширины и эластичный контент */\n.sidebar {\n  flex: 0 0 280px; /* Не растет, не сжимается, ровно 280px */\n}\n\n.content {\n  flex: 1 1 0;     /* Забирает ВСЁ оставшееся свободное пространство */\n  min-width: 0;    /* Критично для предотвращения выпадания текста при flex! */\n}",
    "example": "align-self: flex-end; /* Переопределяет выравнивание для одного конкретного элемента */",
    "points": [
      "flex: 1 (эквивалент 1 1 0) распределяет место поровну между соседями.",
      "min-width: 0 на flex-элементе предотвращает распирание контейнера длинными словами или блоками кода с overflow: auto.",
      "Свойство order позволяет визуально менять порядок блоков без изменения HTML-разметки."
    ],
    "tags": [
      "CSS",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "min-width",
      "order",
      "align-self"
    ],
    "when": "Для верстки двухколоночных макетов «сайдбар + контент», адаптивных карточек и гибких тулбаров.",
    "alternatives": "Указание жестких width в процентах без flex-basis часто приводит к переносу и переполнению.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/flex"
  },
  {
    "lang": "css",
    "id": "css-grid-container",
    "title": "CSS Grid: двумерная сетка (колонки fr, repeat, minmax)",
    "summary": "Мощнейшая система двумерных сеток. Управление колонками, строками и пропорциями с помощью единицы fr.",
    "code": ".grid-layout {\n  display: grid;\n  /* 3 колонки: сайдбар 260px, контент берет 2 доли, правая колонка 1 долю */\n  grid-template-columns: 260px 2fr 1fr;\n  grid-template-rows: auto 1fr auto;\n  gap: 24px;\n  min-height: 100vh;\n}\n\n/* Компактная запись повторения: 4 равные колонки */\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}",
    "example": "display: inline-grid;",
    "points": [
      "Единица fr (fraction) делит свободное место пропорционально заданным долям.",
      "repeat(count, track) сокращает повторение колонок: repeat(12, 1fr) создаст 12-колоночную классическую сетку.",
      "gap задает интервал между ячейками без краевых отступов у первой и последней колонки."
    ],
    "tags": [
      "CSS",
      "grid",
      "css grid",
      "сетка",
      "grid-template-columns",
      "fr",
      "repeat",
      "gap"
    ],
    "when": "Для дашбордов, сложных страниц порталов, галерей товаров и каталогов.",
    "alternatives": "Flexbox требует вложенных оберток row/col, тогда как Grid описывает всю сетку в одном месте.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout"
  },
  {
    "lang": "css",
    "id": "css-grid-autofit",
    "title": "CSS Grid: адаптивная сетка без медиа-запросов (auto-fit & minmax)",
    "summary": "Золотой стандарт адаптивности: карточки автоматически перестраиваются из 4 колонок в 3, 2 и 1 при сужении экрана.",
    "code": ".responsive-grid {\n  display: grid;\n  /* Колонки не меньше 280px, при наличии места делят пространство поровну */\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n\n/* Разница между auto-fill и auto-fit:\n   - auto-fit: растягивает карточки на всю ширину, если их мало.\n   - auto-fill: оставляет пустые пустые места для будущих колонок. */",
    "example": "grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));",
    "points": [
      "Позволяет избавиться от десятков @media экранов: браузер сам вычисляет оптимальное количество колонок.",
      "Конструкция min(100%, 280px) внутри minmax гарантирует, что на экранах уже 280px не появится горизонтальный скролл.",
      "Отлично сочетается с CSS-свойством subgrid для выравнивания заголовков и кнопок внутри карточек."
    ],
    "tags": [
      "CSS",
      "grid",
      "auto-fit",
      "auto-fill",
      "minmax",
      "адаптивность",
      "карточки",
      "каталог"
    ],
    "when": "Основное решение для сетки карточек товаров, статей блога и портфолио.",
    "alternatives": "Ручные @media (max-width: 1200px), @media (max-width: 900px), @media (max-width: 600px).",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout"
  },
  {
    "lang": "css",
    "id": "css-container-queries",
    "title": "CSS: контейнерные запросы (@container)",
    "summary": "Стилизация компонентов в зависимости от ширины их родительского контейнера, а не всего экрана браузера.",
    "code": "/* 1. Объявляем родителя контекстом контейнера */\n.card-wrapper {\n  container-type: inline-size;\n  container-name: card;\n}\n\n/* 2. Стили по умолчанию (для узких колонок / мобильных) */\n.user-card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n/* 3. Когда родитель шире 500px — компонент перестраивается в горизонтальный ряд! */\n@container card (min-width: 500px) {\n  .user-card {\n    flex-direction: row;\n    align-items: center;\n  }\n}",
    "example": "@container (min-width: 400px) and (max-width: 700px) { ... }",
    "points": [
      "Решает главную проблему медиа-запросов: карточка выглядит одинаково адаптивно и в сайдбаре, и в центре страницы.",
      "container-type: inline-size отслеживает ширину по горизонтальной оси.",
      "Поддерживается во всех современных браузерах (Chrome 105+, Safari 16+, Firefox 110+)."
    ],
    "tags": [
      "CSS",
      "container queries",
      "@container",
      "container-type",
      "компоненты",
      "адаптивность"
    ],
    "when": "Для создания переиспользуемых UI-виджетов, виджетов сайдбара и независимых дизайн-систем.",
    "alternatives": "Медиа-запросы @media реагируют только на окно браузера, заставляя писать классы .card--sidebar.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_containment/Container_queries"
  },
  {
    "lang": "css",
    "id": "css-has-selector",
    "title": "CSS: родительский селектор :has()",
    "summary": "Стилизация элемента на основе того, какие потомки находятся внутри него или в каком они состоянии.",
    "code": "/* Стилизовать карточку, только если внутри есть изображение */\n.card:has(img) {\n  grid-template-columns: 200px 1fr;\n}\n\n/* Стилизовать форму, если хоть одно поле невалидно */\nform:has(input:invalid) {\n  border-left: 2px solid #ef4444;\n}\n\n/* Подсветить метку label, когда связанный чекбокс отмечен */\nlabel:has(input:checked) {\n  color: #38bdf8;\n  font-weight: 600;\n}\n\n/* Заблокировать скролл страницы при открытом нативном диалоге */\nhtml:has(dialog[open]) {\n  overflow: hidden;\n}",
    "example": "header:has(.nav-open) { backdrop-filter: blur(8px); }",
    "points": [
      ":has() долгое время называли «святым граалем CSS» — возможность влиять на предков без JavaScript.",
      "Позволяет полностью избавиться от JS-обработчиков добавления классов вроде \"has-error\", \"is-checked\".",
      "Поддерживается во всех современных браузерах с 2023 года."
    ],
    "tags": [
      "CSS",
      ":has",
      "селектор предка",
      "родительский селектор",
      "псевдокласс",
      "селекторы"
    ],
    "when": "Для стилизации форм, состояний карточек, навигационных переключателей.",
    "alternatives": "Раньше требовалось вешать JS-слушатели событий change/input и переключать класс родителю.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:has"
  },
  {
    "lang": "css",
    "id": "css-is-where",
    "title": "CSS: современные селекторы :is() и :where()",
    "summary": "Группировка длинных цепочек селекторов и управление весом (специфичностью) правил.",
    "code": "/* Вместо длинного перечисления: */\n/* header h1, header h2, main h1, main h2, footer h1, footer h2 */\n:is(header, main, footer) :is(h1, h2) {\n  margin-bottom: 0.5rem;\n  font-weight: 700;\n}\n\n/* :where() работает аналогично, но ЕГО СПЕЦИФИЧНОСТЬ ВСЕГДА РАВНА 0! */\n:where(article, section) p {\n  color: #94a3b8;\n  /* Любой отдельный класс .text легко переопределит это свойство без !important */\n}",
    "example": ":where(button, input, select) { font-family: inherit; }",
    "points": [
      ":is() принимает специфичность самого «тяжелого» селектора из переданного списка.",
      ":where() ВСЕГДА имеет нулевую специфичность (0,0,0) — идеально для базовых сбросов (reset/normalize).",
      "Селекторы являются прощающими (forgiving): если один пункт синтаксически не поддерживается, остальные продолжат работать."
    ],
    "tags": [
      "CSS",
      ":is",
      ":where",
      "специфичность",
      "группировка",
      "селекторы",
      "сброс"
    ],
    "when": "Используй :where() для библиотек компонентов и CSS-сбросов, а :is() — для сокращения DRY кода.",
    "alternatives": "Устаревшие громоздкие селекторы на 5 строк с дублированием стилей.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:is"
  },
  {
    "lang": "css",
    "id": "css-variables",
    "title": "CSS: пользовательские переменные (Custom Properties var())",
    "summary": "Динамические переменные на уровне браузера: легкое переключение темной/светлой темы и наследование стилей.",
    "code": ":root {\n  --bg-primary: #090d14;\n  --text-main: #f8fafc;\n  --accent: #38bdf8;\n  --radius: 8px;\n}\n\nbody.light {\n  --bg-primary: #ffffff;\n  --text-main: #0f172a;\n  --accent: #0284c7;\n}\n\n.button {\n  background: var(--accent);\n  color: #ffffff;\n  border-radius: var(--radius);\n  /* Запасное значение, если переменная не объявлена: */\n  padding: var(--btn-padding, 8px 16px);\n}",
    "example": "element.style.setProperty('--x', event.clientX + 'px'); /* Изменение из JS! */",
    "points": [
      "В отличие от SASS/LESS переменных, CSS-переменные вычисляются на лету в браузере и реагируют на DOM-дерево.",
      "Переменными можно легко управлять из JavaScript через element.style.setProperty(\"--color\", val).",
      "Поддерживают fallback: var(--main-color, #333333)."
    ],
    "tags": [
      "CSS",
      "variables",
      "var",
      "custom properties",
      "переменные",
      "темизация",
      "dark mode"
    ],
    "when": "Обязательно для дизайн-систем, переключения тем (светлая/темная) и гибких компонентов.",
    "alternatives": "Жестко захардкоженные цвета в коде делают редизайн и смену темы мучительными.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/Using_CSS_custom_properties"
  },
  {
    "lang": "css",
    "id": "css-math-functions",
    "title": "CSS: математические функции (clamp, min, max, calc)",
    "summary": "Отзывчивая типографика и динамические размеры без дискретных медиа-запросов.",
    "code": "/* Адаптивный размер заголовка: \n   минимум 28px, идеально 4vw, максимум 48px */\nh1 {\n  font-size: clamp(1.75rem, 4vw, 3rem);\n}\n\n/* Отступы, плавно уменьшающиеся на мобильных */\n.container {\n  padding: clamp(16px, 5vw, 48px);\n  width: min(100% - 32px, 1200px);\n  /* Элемент центрирован, не шире 1200px, с полями минимум по 16px по бокам */\n  margin-inline: auto;\n}\n\n.sidebar {\n  /* Выбираем большее: 300px или треть экрана */\n  width: max(300px, 33vw);\n}",
    "example": "width: calc(100% - 240px); /* Вычитание пикселей из процентов */",
    "points": [
      "clamp(min, val, max) избавляет от написания 5 медиа-запросов под разные разрешения экранов для шрифтов.",
      "margin-inline: auto является современным стандартом для margin: 0 auto с поддержкой RTL.",
      "Внутри clamp, min, max можно опускать слово calc(): calc(100% - 20px) пишется просто 100% - 20px."
    ],
    "tags": [
      "CSS",
      "clamp",
      "min",
      "max",
      "calc",
      "математика",
      "типографика",
      "флюидный дизайн"
    ],
    "when": "Для плавно масштабируемых заголовков, отступов секций и адаптивных контейнеров сайтов.",
    "alternatives": "Ступенчатые медиа-запросы @media (max-width: 768px) { h1 { font-size: 24px; } } выглядят дергано.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/clamp"
  },
  {
    "lang": "css",
    "id": "css-sticky-position",
    "title": "CSS: липкое позиционирование (position: sticky)",
    "summary": "Фиксация шапки или сайдбара при скролле внутри родительского контейнера.",
    "code": ".sticky-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(9, 13, 20, 0.85);\n  backdrop-filter: blur(8px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n\n/* Липкий сайдбар при скролле длинной статьи */\n.sticky-sidebar {\n  position: sticky;\n  top: 24px;\n  align-self: flex-start; /* Обязательно во флекс-контейнере! */\n}",
    "example": "thead th { position: sticky; top: 0; } /* Залипание шапки таблицы данных */",
    "points": [
      "Главная причина, почему sticky не работает: у одного из родителей установлен overflow: hidden, auto или scroll.",
      "Во Flexbox контейнере элемент по умолчанию растягивается на всю высоту (stretch). Чтобы sticky заработал, укажи align-self: flex-start.",
      "Обязательно должно быть указано хотя бы одно координатное свойство (top, bottom, left или right)."
    ],
    "tags": [
      "CSS",
      "sticky",
      "position",
      "липкая шапка",
      "сайдбар",
      "скролл",
      "позиционирование"
    ],
    "when": "Для фиксированных шапок сайтов, плавающего оглавления документации и шапок таблиц данных.",
    "alternatives": "position: fixed вырывает элемент из потока навсегда, требуя компенсирующего padding у body.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/position#sticky"
  },
  {
    "lang": "css",
    "id": "css-transitions-animations",
    "title": "CSS: плавные переходы (transition) и @keyframes",
    "summary": "Создание естественных микроанимаций интерфейса и аппаратное ускорение через transform и opacity.",
    "code": "/* Плавный отклик кнопок (compositor-only свойства) */\n.btn {\n  background: #2563eb;\n  transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1),\n              background-color 150ms ease,\n              box-shadow 150ms ease;\n}\n\n.btn:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n}\n\n.btn:active {\n  transform: translateY(1px);\n}\n\n/* Бесконечная плавная анимация спиннера загрузки */\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n.spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-top-color: #38bdf8;\n  border-radius: 50%;\n  animation: spin 700ms linear infinite;\n}",
    "example": "@media (prefers-reduced-motion: reduce) {\n  * { animation: none !important; transition: none !important; }\n}",
    "points": [
      "Для производительности анимируй только transform и opacity (они обрабатываются видеокартой без перерасчета макета Reflow/Repaint).",
      "Никогда не анимируй width, height, top, left, margin на hover — это вызывает лаги (jank) и просадку FPS.",
      "Всегда уважай настройку prefers-reduced-motion для пользователей с вестибулярными расстройствами."
    ],
    "tags": [
      "CSS",
      "transition",
      "animation",
      "@keyframes",
      "анимация",
      "микроанимации",
      "transform"
    ],
    "when": "Для интерактивных кнопок, карточек, выпадающих меню, модалок и индикаторов загрузки.",
    "alternatives": "Тяжелые JS-библиотеки анимаций избыточны для 95% задач верстки интерфейсов.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_transitions/Using_CSS_transitions"
  },
  {
    "lang": "css",
    "id": "css-backdrop-blur",
    "title": "CSS: эффект матового стекла (Glassmorphism & backdrop-filter)",
    "summary": "Размытие фонового содержимого под полупрозрачными панелями, шапками и карточками.",
    "code": ".glass-panel {\n  background: rgba(13, 18, 29, 0.75);\n  backdrop-filter: blur(12px) saturate(160%);\n  -webkit-backdrop-filter: blur(12px) saturate(160%); /* Для Safari */\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.5);\n}",
    "example": "backdrop-filter: blur(8px);",
    "points": [
      "Для работы эффекта фон самого элемента должен быть полупрозрачным (rgba() или прозрачный hex).",
      "Обязательно добавляй префикс -webkit-backdrop-filter для полной поддержки в iOS Safari и macOS.",
      "Добавление saturate(160%) делает просвечивающие цвета под стеклом более сочными и чистыми."
    ],
    "tags": [
      "CSS",
      "glassmorphism",
      "backdrop-filter",
      "blur",
      "стекло",
      "матовое стекло",
      "эффекты"
    ],
    "when": "Идеально для плавающих шапок сайта, контекстных меню, модальных оверлеев и тулбаров.",
    "alternatives": "Устаревшие сплошные непрозрачные плашки выглядят тяжело в современных интерфейсах.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/backdrop-filter"
  },
  {
    "lang": "javascript",
    "id": "js-dom-selection",
    "title": "JS: выборка и обход элементов DOM (querySelector, closest)",
    "summary": "Быстрый и надежный поиск элементов в документе по CSS-селекторам и поиск ближайших предков.",
    "code": "// Выборка одного элемента\nconst searchInput = document.querySelector('#search-input');\n\n// Выборка коллекции элементов\nconst buttons = document.querySelectorAll('.action-btn');\nbuttons.forEach(btn => {\n  btn.classList.add('ready');\n});\n\n// closest: поиск ближайшего родителя по селектору вверх по дереву\ndocument.addEventListener('click', (event) => {\n  const card = event.target.closest('.recipe-card');\n  if (card) {\n    console.log('Кликнули внутри карточки:', card.dataset.id);\n  }\n});",
    "example": "if (element.matches(':hover')) { ... }",
    "points": [
      "querySelector возвращает первый найденный элемент или null (если ничего не найдено).",
      "querySelectorAll возвращает статичный NodeList, который можно напрямую обходить через .forEach().",
      "Метод closest() ищет элемент среди предков (включая сам целевой элемент), решая 99% задач делегирования."
    ],
    "tags": [
      "JavaScript",
      "DOM",
      "querySelector",
      "querySelectorAll",
      "closest",
      "matches",
      "поиск в DOM"
    ],
    "when": "Базовые методы для инициализации любых скриптов и компонентов на странице.",
    "alternatives": "Устаревшие getElementsByClassName и getElementsByTagName возвращают «живые» HTMLCollection, создающие утечки.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Document/querySelector"
  },
  {
    "lang": "javascript",
    "id": "js-event-delegation",
    "title": "JS: делегирование событий и CustomEvent",
    "summary": "Эффективная обработка событий на сотнях элементов через одного общего родителя и создание собственных событий.",
    "code": "// Делегирование: 1 слушатель на весь список вместо 100 на каждую кнопку\nconst list = document.querySelector('#items-list');\n\nlist.addEventListener('click', (event) => {\n  // Находим кнопку удаления, даже если кликнули по вложенной иконке <svg>\n  const deleteBtn = event.target.closest('.delete-btn');\n  if (!deleteBtn) return;\n\n  const row = deleteBtn.closest('.item-row');\n  row.remove();\n\n  // Отправляем кастомное событие об изменении\n  document.dispatchEvent(new CustomEvent('cart:updated', {\n    detail: { remainingCount: list.children.length },\n    bubbles: true\n  }));\n});\n\n// Подписка на кастомное событие в другом модуле\ndocument.addEventListener('cart:updated', (e) => {\n  console.log('Осталось товаров:', e.detail.remainingCount);\n});",
    "example": "event.preventDefault(); // Отмена стандартного действия (перехода по ссылке, отправки формы)",
    "points": [
      "Делегирование работает даже для динамически добавленных элементов, которых еще не было в DOM при загрузке.",
      "Существенно экономит оперативную память и ускоряет работу сайта при рендеринге больших списков.",
      "CustomEvent позволяет создавать слабую связанность (Decoupling) между независимыми модулями приложения."
    ],
    "tags": [
      "JavaScript",
      "события",
      "делегирование",
      "addEventListener",
      "CustomEvent",
      "click",
      "оптимизация"
    ],
    "when": "Используй для каталогов, таблиц данных, динамических списков задач и интерактивных меню.",
    "alternatives": "Навешивание addEventListener в цикле на каждый элемент приводит к утечкам памяти при обновлении списка.",
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Scripting/Event_bubbling"
  },
  {
    "lang": "javascript",
    "id": "js-fetch-async",
    "title": "JS: сетевые запросы Fetch API и AbortController",
    "summary": "Отправка асинхронных GET/POST запросов, обработка ответов в формате JSON и отмена запросов при повторном вводе.",
    "code": "// Функция загрузки данных с отменой предыдущего запроса (для live-поиска)\nlet currentController = null;\n\nasync function searchApi(query) {\n  // Если предыдущий запрос еще выполняется — отменяем его!\n  if (currentController) {\n    currentController.abort();\n  }\n  currentController = new AbortController();\n\n  try {\n    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {\n      method: 'GET',\n      headers: { 'Accept': 'application/json' },\n      signal: currentController.signal\n    });\n\n    if (!response.ok) {\n      throw new Error(`Ошибка сервера: ${response.status}`);\n    }\n\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    if (error.name === 'AbortError') {\n      console.log('Предыдущий запрос был отменен');\n      return null;\n    }\n    console.error('Ошибка сети:', error);\n    throw error;\n  }\n}",
    "example": "await fetch('/api', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });",
    "points": [
      "fetch() отклоняет промис (reject) ТОЛЬКО при физическом обрыве сети. HTTP 404 и 500 считаются успешным ответом: проверяй response.ok!",
      "AbortController предотвращает Race Conditions («состояние гонки»), когда устаревший долгий ответ перезаписывает свежие данные.",
      "Для таймаутов в современном JS доступен удобный флаг: AbortSignal.timeout(5000)."
    ],
    "tags": [
      "JavaScript",
      "fetch",
      "async",
      "await",
      "json",
      "AbortController",
      "api",
      "ajax",
      "сеть"
    ],
    "when": "Для отправки форм без перезагрузки страницы, живого поиска, загрузки списков товаров и данных с бэкенда.",
    "alternatives": "Устаревшие библиотеки axios и jQuery.ajax избыточны, когда нативный fetch есть во всех браузерах.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch"
  },
  {
    "lang": "javascript",
    "id": "js-intersection-observer",
    "title": "JS: отслеживание видимости элементов (IntersectionObserver)",
    "summary": "Аппаратно-эффективное отслеживание момента появления элемента в поле зрения пользователя без тяжелых scroll-слушателей.",
    "code": "// 1. Создаем наблюдатель\nconst observer = new IntersectionObserver((entries, obs) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      // Элемент появился на экране!\n      const el = entry.target;\n      el.classList.add('visible');\n\n      // Если нужно анимировать только 1 раз — отключаем наблюдение\n      obs.unobserve(el);\n    }\n  });\n}, {\n  rootMargin: '0px 0px -50px 0px', // Срабатывать за 50px до границы\n  threshold: 0.15                  // 15% площади элемента должно быть видно\n});\n\n// 2. Начинаем наблюдение за карточками\ndocument.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));",
    "example": "// Бесконечный скролл: вешаем наблюдатель на невидимый лоадер внизу страницы",
    "points": [
      "IntersectionObserver не блокирует главный поток (Main Thread) и работает с частотой обновления экрана 60/120 FPS.",
      "Идеально подходит для анимаций появления при скролле, ленивой подгрузки контента и бесконечных лент (Infinite Scroll).",
      "Для завершения наблюдения используй observer.unobserve(element) или observer.disconnect()."
    ],
    "tags": [
      "JavaScript",
      "IntersectionObserver",
      "скролл",
      "анимация появления",
      "lazy load",
      "видимость"
    ],
    "when": "Для лендингов с эффектами появления, подгрузки страниц в каталоге, отслеживания дочитывания статей.",
    "alternatives": "Слушатель window.addEventListener(\"scroll\", handler) с getBoundingClientRect() вызывает жуткие тормоза.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API"
  },
  {
    "lang": "javascript",
    "id": "js-localstorage",
    "title": "JS: локальное хранилище данных (localStorage & JSON)",
    "summary": "Сохранение настроек пользователя, корзины, избранного и тем оформления в браузере между перезагрузками страницы.",
    "code": "// Безопасная работа с localStorage через обертку\nconst storage = {\n  get(key, defaultValue = null) {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : defaultValue;\n    } catch (e) {\n      console.warn('Ошибка чтения localStorage:', e);\n      return defaultValue;\n    }\n  },\n  set(key, value) {\n    try {\n      localStorage.setItem(key, JSON.stringify(value));\n    } catch (e) {\n      console.error('Ошибка записи (квота превышена?):', e);\n    }\n  },\n  remove(key) {\n    localStorage.removeItem(key);\n  }\n};\n\n// Пример: сохранение списка избранного\nstorage.set('devshelf:favorites', ['html-dialog', 'css-grid']);\nconst favs = storage.get('devshelf:favorites', []);",
    "example": "localStorage.clear(); // Полная очистка хранилища сайта",
    "points": [
      "Данные в localStorage сохраняются даже после закрытия вкладки и перезагрузки компьютера.",
      "Квота хранилища обычно составляет около 5 МБ на домен.",
      "Всегда оборачивай вызовы в try...catch: в режиме инкогнито в некоторых браузерах или при запрете cookie запись может выбросить исключение."
    ],
    "tags": [
      "JavaScript",
      "localStorage",
      "sessionStorage",
      "хранилище",
      "избранное",
      "кэш",
      "JSON"
    ],
    "when": "Используй для сохранения темы (светлая/темная), черновиков форм, закладок и недавних действий.",
    "alternatives": "sessionStorage очищается сразу при закрытии вкладки; IndexedDB используется для гигабайтов данных и офлайн-БД.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage"
  },
  {
    "lang": "javascript",
    "id": "js-clipboard-api",
    "title": "JS: копирование в буфер обмена (Clipboard API)",
    "summary": "Современный способ скопировать текст, сниппет кода или ссылку в буфер обмена пользователя в один клик.",
    "code": "async function copyCodeToClipboard(text, triggerButton) {\n  try {\n    await navigator.clipboard.writeText(text);\n\n    // Визуальная обратная связь\n    const originalText = triggerButton.textContent;\n    triggerButton.textContent = 'Скопировано!';\n    triggerButton.classList.add('copied');\n\n    setTimeout(() => {\n      triggerButton.textContent = originalText;\n      triggerButton.classList.remove('copied');\n    }, 2000);\n  } catch (err) {\n    console.error('Не удалось скопировать:', err);\n    // Запасной fallback для устаревших контекстов\n    prompt('Скопируйте вручную:', text);\n  }\n}",
    "example": "const text = await navigator.clipboard.readText(); // Чтение из буфера (требует разрешения)",
    "points": [
      "Clipboard API работает только в безопасном контексте HTTPS (или на localhost/127.0.0.1).",
      "Вызов writeText() должен быть вызван в ответ на прямое действие пользователя (клик, нажатие клавиши).",
      "Заменяет устаревший и нестабильный метод document.execCommand(\"copy\")."
    ],
    "tags": [
      "JavaScript",
      "clipboard",
      "буфер обмена",
      "копирование",
      "writeText",
      "сниппет"
    ],
    "when": "Для кнопок «Скопировать код», «Поделиться ссылкой», копирования номеров телефонов и промокодов.",
    "alternatives": "Старый трюк со скрытым textarea и execCommand(\"copy\") объявлен устаревшим (deprecated).",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Clipboard_API"
  },
  {
    "lang": "javascript",
    "id": "js-array-methods",
    "title": "JS: современные методы массивов (map, filter, reduce, toSorted)",
    "summary": "Неизменяемая (immutable) обработка данных: фильтрация списков, трансформация, поиск и сортировка без мутаций.",
    "code": "const items = [\n  { id: 1, name: 'HTML5', category: 'markup', stars: 45 },\n  { id: 2, name: 'CSS Grid', category: 'style', stars: 89 },\n  { id: 3, name: 'Flexbox', category: 'style', stars: 120 }\n];\n\n// 1. Фильтрация (только стили)\nconst styles = items.filter(item => item.category === 'style');\n\n// 2. Трансформация (массив только названий)\nconst names = items.map(item => item.name);\n\n// 3. Подсчет суммы через reduce\nconst totalStars = items.reduce((sum, item) => sum + item.stars, 0);\n\n// 4. Безопасная сортировка без изменения исходного массива (ES2023)\nconst sortedByStars = items.toSorted((a, b) => b.stars - a.stars);",
    "example": "const found = items.find(item => item.id === 2);",
    "points": [
      "Новые методы ES2023 (toSorted, toReversed, toSpliced, with) не мутируют исходный массив в отличие от sort() и reverse().",
      "reduce(fn, initialValue) всегда должен получать начальное значение вторым аргументом во избежание ошибок на пустых массивах.",
      "flatMap объединяет map и flat(1), полезен для разворачивания вложенных тегов."
    ],
    "tags": [
      "JavaScript",
      "массивы",
      "map",
      "filter",
      "reduce",
      "toSorted",
      "find",
      "es2023",
      "иммутабельность"
    ],
    "when": "Для фильтрации каталога, поиска по тегам, сортировки списков и подсчета итоговых сумм.",
    "alternatives": "Императивные циклы for (let i = 0; ...) громоздки и подвержены ошибкам вылета за границы.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array"
  },
  {
    "lang": "php",
    "id": "php-pdo-connection",
    "title": "PHP: безопасное подключение к базе данных через PDO",
    "summary": "Современный стандарт работы с СУБД (MySQL, PostgreSQL, SQLite) с активацией строгого режима ошибок и UTF-8.",
    "code": "<?php\ndeclare(strict_types=1);\n\nfunction getDbConnection(): PDO {\n    $host = '127.0.0.1';\n    $db   = 'devshelf_db';\n    $user = 'db_user';\n    $pass = 'secure_password';\n    $charset = 'utf8mb4';\n\n    $dsn = \"mysql:host=$host;dbname=$db;charset=$charset\";\n    $options = [\n        // Выбрасывать настоящие исключения PDOException при ошибках SQL\n        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,\n        // Возвращать результат в виде ассоциативного массива\n        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n        // Использовать нативные подготовленные выражения\n        PDO::ATTR_EMULATE_PREPARES   => false,\n    ];\n\n    try {\n        return new PDO($dsn, $user, $pass, $options);\n    } catch (PDOException $e) {\n        // Логируем ошибку в системный журнал, не показывая пароли пользователю!\n        error_log('Database Connection Error: ' . $e->getMessage());\n        throw new RuntimeException('Ошибка подключения к базе данных.');\n    }\n}",
    "example": "$pdo = getDbConnection();",
    "points": [
      "Всегда отключай эмуляцию prepared statements (PDO::ATTR_EMULATE_PREPARES => false) для гарантированной защиты от SQL Injection.",
      "Кодировка utf8mb4 обязательна: она поддерживает все символы, включая эмодзи и спецсимволы (обычный utf8 в MySQL обрезан).",
      "Никогда не выводи $e->getMessage() напрямую в браузер пользователя — в тексте ошибки могут оказаться пароли и структура БД."
    ],
    "tags": [
      "PHP",
      "PDO",
      "MySQL",
      "база данных",
      "подключение",
      "безопасность",
      "SQL",
      "utf8mb4"
    ],
    "when": "Используй для подключения к БД во всех PHP-проектах (блоги, интернет-магазины, личные кабинеты).",
    "alternatives": "Устаревшие функции mysql_* давно удалены из PHP, а mysqli привязан только к MySQL.",
    "url": "https://www.php.net/manual/ru/book.pdo.php"
  },
  {
    "lang": "php",
    "id": "php-pdo-prepared",
    "title": "PHP: подготовленные выражения PDO (защита от SQL-инъекций)",
    "summary": "Единственный правильный способ подстановки пользовательских параметров в SQL-запросы.",
    "code": "<?php\n// ПРАВИЛЬНО: параметры передаются отдельно от SQL-кода\n$email = $_POST['email'] ?? '';\n$status = 'active';\n\n$sql = 'SELECT id, username, email, created_at \n        FROM users \n        WHERE email = :email AND status = :status \n        LIMIT 1';\n\n$stmt = $pdo->prepare($sql);\n$stmt->execute([\n    ':email'  => $email,\n    ':status' => $status\n]);\n\n$user = $stmt->fetch(); // Возвращает массив или false\n\nif ($user) {\n    echo \"Привет, \" . htmlspecialchars($user['username'], ENT_QUOTES, 'UTF-8');\n} else {\n    echo \"Пользователь не найден.\";\n}",
    "example": "// Выборка нескольких строк:\n$users = $stmt->fetchAll();",
    "points": [
      "Никогда не склеивай строки: \"WHERE email = '\" . $email . \"'\" — это 100% уязвимость к взлому сайта через SQL-инъекцию.",
      "В подготовленных выражениях данные отправляются на сервер БД в отдельном протоколе и физически не могут изменить структуру SQL.",
      "При выводе данных в HTML всегда применяй htmlspecialchars() для защиты от XSS."
    ],
    "tags": [
      "PHP",
      "PDO",
      "prepared statements",
      "SQL injection",
      "безопасность",
      "SQL",
      "fetch",
      "execute"
    ],
    "when": "Обязательно для ЛЮБЫХ запросов с параметрами от пользователя (логин, поиск, фильтры, оформление заказа).",
    "alternatives": "Функции экранирования вроде addslashes() ненадежны и не защищают от всех типов инъекций.",
    "url": "https://www.php.net/manual/ru/pdo.prepared-statements.php"
  },
  {
    "lang": "php",
    "id": "php-pdo-transactions",
    "title": "PHP: транзакции в базе данных (beginTransaction, commit, rollBack)",
    "summary": "Атомарное выполнение цепочки операций: если хоть один запрос завершился ошибкой, все изменения откатываются назад.",
    "code": "<?php\ntry {\n    // Начинаем транзакцию\n    $pdo->beginTransaction();\n\n    // 1. Списываем деньги у отправителя\n    $stmt1 = $pdo->prepare('UPDATE accounts SET balance = balance - :amount WHERE id = :from_id');\n    $stmt1->execute([':amount' => 500, ':from_id' => 1]);\n\n    // 2. Начисляем получателю\n    $stmt2 = $pdo->prepare('UPDATE accounts SET balance = balance + :amount WHERE id = :to_id');\n    $stmt2->execute([':amount' => 500, ':to_id' => 2]);\n\n    // 3. Записываем лог операции\n    $stmt3 = $pdo->prepare('INSERT INTO transactions (from_id, to_id, amount) VALUES (?, ?, ?)');\n    $stmt3->execute([1, 2, 500]);\n\n    // Все шаги прошли успешно — фиксируем изменения в БД!\n    $pdo->commit();\n    echo \"Перевод успешно выполнен.\";\n} catch (Throwable $e) {\n    // В случае сбоя откатываем ВСЕ изменения назад!\n    if ($pdo->inTransaction()) {\n        $pdo->rollBack();\n    }\n    error_log('Ошибка транзакции: ' . $e->getMessage());\n    echo \"Операция отменена из-за ошибки.\";\n}",
    "example": "$pdo->beginTransaction();\n// ... запросы\n$pdo->commit();",
    "points": [
      "Транзакции гарантируют принцип ACID: деньги никогда не спишутся в никуда, если на втором шаге упал сервер.",
      "Для поддержки транзакций в MySQL таблицы должны быть на движке InnoDB (не MyISAM).",
      "Проверяй $pdo->inTransaction() перед вызовом rollBack(), чтобы не выбросить вторичную ошибку."
    ],
    "tags": [
      "PHP",
      "PDO",
      "транзакции",
      "beginTransaction",
      "commit",
      "rollBack",
      "ACID",
      "база данных"
    ],
    "when": "Для переводов, оформления заказов со списанием остатков на складе и комплексных изменений.",
    "alternatives": "Разрозненные запросы без транзакций оставляют базу в поломанном рассинхронизированном состоянии при сбоях.",
    "url": "https://www.php.net/manual/ru/pdo.begintransaction.php"
  },
  {
    "lang": "php",
    "id": "php-syntax-8",
    "title": "PHP: синтаксис PHP 8 (nullsafe ?->, match, constructor promotion)",
    "summary": "Современные возможности PHP 8.x, делающие код чище, надежнее и лаконичнее.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// 1. Продвижение свойств в конструкторе и readonly (PHP 8.1+)\nclass UserDto {\n    public function __construct(\n        public readonly int $id,\n        public readonly string $name,\n        public readonly ?string $email = null\n    ) {}\n}\n\n// 2. Nullsafe оператор ?-> (безопасный вызов без проверок if !== null)\n$country = $user?->getAddress()?->getCountry()?->name ?? 'Не указана';\n\n// 3. Выражение match (строгая замена громоздкому switch)\n$statusText = match ($orderStatus) {\n    'new'       => 'Новый заказ',\n    'paid'      => 'Оплачен, формируется к отправке',\n    'shipped'   => 'В пути',\n    'delivered' => 'Доставлен клиенту',\n    default     => 'Неизвестный статус'\n};",
    "example": "// Union Types: public int|float $amount;",
    "points": [
      "match выполняет строгое сравнение (===) и возвращает значение, не требуя операторов break.",
      "Nullsafe оператор ?-> останавливает цепочку и возвращает null, если любое промежуточное звено равно null.",
      "Constructor Property Promotion уменьшает шаблонный boilerplate-код DTO и моделей в 3 раза."
    ],
    "tags": [
      "PHP",
      "PHP 8",
      "match",
      "nullsafe",
      "конструктор",
      "readonly",
      "современный php"
    ],
    "when": "Используй во всех новых проектах на PHP 8.1, 8.2 и 8.3.",
    "alternatives": "Устаревшие конструкции switch-case с нестрогим приведением типов (0 == \"hello\") приводили к багам.",
    "url": "https://www.php.net/releases/8.0/ru.php"
  },
  {
    "lang": "php",
    "id": "php-rest-api",
    "title": "PHP: создание REST JSON API и заголовки",
    "summary": "Построение чистого бэкенд API endpoint для отдачи и приема JSON в SPA или мобильных приложениях.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// Обязательные заголовки для REST API\nheader('Content-Type: application/json; charset=utf-8');\nheader('X-Content-Type-Options: nosniff');\n\n// Чтение входящего сырого JSON-тела запроса (POST/PUT)\n$rawInput = file_get_contents('php://input');\n$data = json_decode($rawInput, true, 512, JSON_THROW_ON_ERROR | JSON_INVALID_UTF8_SUBSTITUTE);\n\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    if (empty($data['title'])) {\n        http_response_code(422); // Unprocessable Entity\n        echo json_encode([\n            'success' => false,\n            'error'   => 'Поле title обязательно для заполнения'\n        ]);\n        exit;\n    }\n\n    // Успешный ответ\n    http_response_code(201); // Created\n    echo json_encode([\n        'success' => true,\n        'id'      => 42,\n        'message' => 'Ресурс успешно создан'\n    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);\n    exit;\n}",
    "example": "http_response_code(404); echo json_encode(['error' => 'Not Found']);",
    "points": [
      "Для чтения JSON из тела запроса используй file_get_contents(\"php://input\"), так как в $_POST попадают только form-urlencoded данные.",
      "Флаг JSON_UNESCAPED_UNICODE сохраняет читаемые русские буквы вместо \\u043f\\u0440\\u0438...",
      "Всегда отправляй правильные HTTP-коды статуса (200, 201, 400, 401, 403, 404, 422, 500)."
    ],
    "tags": [
      "PHP",
      "REST",
      "API",
      "JSON",
      "json_encode",
      "json_decode",
      "HTTP",
      "бэкенд"
    ],
    "when": "Для создания API для фронтенда на Vue, React, мобильных приложений и микросервисов.",
    "alternatives": "Отдача смешанного HTML и JSON ломает клиентские парсеры.",
    "url": "https://www.php.net/manual/ru/function.json-encode.php"
  },
  {
    "lang": "php",
    "id": "php-password-security",
    "title": "PHP: безопасное хеширование паролей (password_hash)",
    "summary": "Правильное сохранение и проверка пользовательских паролей с автоматической солью по алгоритмам Bcrypt и Argon2.",
    "code": "<?php\n// Регистрация: создание надежного хеша с автоматической случайной солью\n$userPassword = $_POST['password'];\n\n$hashedPassword = password_hash($userPassword, PASSWORD_DEFAULT);\n// Сохраняем $hashedPassword в базу данных (колонка VARCHAR(255))\n\n// Авторизация: сверка введенного пароля с сохраненным хешем\n$loginPassword = $_POST['password'];\n$hashFromDb = $user['password_hash'];\n\nif (password_verify($loginPassword, $hashFromDb)) {\n    // Пароль верный!\n    // Проверяем, не пора ли обновить хеш до более стойкого\n    if (password_needs_rehash($hashFromDb, PASSWORD_DEFAULT)) {\n        $newHash = password_hash($loginPassword, PASSWORD_DEFAULT);\n        // Обновляем хеш в БД...\n    }\n    echo \"Успешная авторизация!\";\n} else {\n    echo \"Неверный логин или пароль.\";\n}",
    "example": "password_hash($pass, PASSWORD_ARGON2ID); // Максимальная стойкость на серверах с поддержкой Argon2",
    "points": [
      "НИКОГДА не используй md5(), sha1() или sha256() для паролей: они мгновенно вскрываются по радужным таблицам.",
      "password_hash сам генерирует криптографически стойкую соль и встраивает её в результирующую строку.",
      "При ошибке входа всегда говори «Неверный логин или пароль», не подсказывая злоумышленнику, что именно не совпало."
    ],
    "tags": [
      "PHP",
      "пароли",
      "password_hash",
      "password_verify",
      "безопасность",
      "хеширование",
      "авторизация"
    ],
    "when": "Обязательно для любой формы регистрации, смены пароля и авторизации пользователей.",
    "alternatives": "Самодельные алгоритмы со склейкой $salt . $password в md5 — грубейшая ошибка безопасности.",
    "url": "https://www.php.net/manual/ru/function.password-hash.php"
  },
  {
    "lang": "xml",
    "id": "xml-syntax-rules",
    "title": "XML: строгие правила синтаксиса и структуры",
    "summary": "Формат хранения и передачи данных со строгой иерархией: обязательный пролог, закрытие всех тегов и регистрозависимость.",
    "code": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<library xmlns=\"https://example.com/schema\">\n  <book id=\"bk101\" available=\"true\">\n    <title>Современный веб-разработчик</title>\n    <author>Иван Петров</author>\n    <price currency=\"RUB\">1200</price>\n    <description><![CDATA[Здесь можно безопасно писать <любые> теги & спецсимволы без экранирования!]]></description>\n  </book>\n</library>",
    "example": "<!-- Комментарий в формате XML -->",
    "points": [
      "В отличие от HTML, в XML обязан быть ровно один корневой элемент (Root Element), охватывающий весь документ.",
      "XML строго чувствителен к регистру: <Title> и <title> — это два совершенно разных тега.",
      "Секция <![CDATA[ ... ]]> позволяет вставлять сырой текст с символами <, > и & без замены на &lt; и &amp;."
    ],
    "tags": [
      "XML",
      "синтаксис",
      "структура",
      "пролог",
      "cdata",
      "валидация",
      "спецификация"
    ],
    "when": "Для конфигурационных файлов, RSS-лент, карт сайта sitemap.xml, обмена данными с 1С и банками.",
    "alternatives": "Для чистого веб-обмена данными браузер-сервер чаще выбирают JSON, но в фидах стандартом остается XML.",
    "url": "https://developer.mozilla.org/ru/docs/Web/XML"
  },
  {
    "lang": "xml",
    "id": "xml-sitemap",
    "title": "XML: создание карты сайта sitemap.xml",
    "summary": "Стандартный файл для поисковых систем (Яндекс, Google), сообщающий о всех страницах сайта и дате их изменения.",
    "code": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <!-- Главная страница -->\n  <url>\n    <loc>https://example.com/</loc>\n    <lastmod>2026-03-20T10:00:00+03:00</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n  \n  <!-- Раздел каталога -->\n  <url>\n    <loc>https://example.com/catalog</loc>\n    <lastmod>2026-03-18T14:30:00+03:00</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>",
    "example": "<!-- Ссылка на sitemap обязательно указывается в robots.txt: Sitemap: https://example.com/sitemap.xml -->",
    "points": [
      "Тег <loc> должен содержать полный канонический URL с протоколом (https://) и доменом.",
      "Дата в <lastmod> указывается в формате W3C Datetime (ГГГГ-ММ-ДД), помогая поисковику быстрее индексировать свежие статьи.",
      "Максимальный размер одного sitemap.xml — 50 МБ и 50 000 URL. Если страниц больше — используют <sitemapindex>."
    ],
    "tags": [
      "XML",
      "sitemap",
      "карта сайта",
      "seo",
      "поисковики",
      "яндекс",
      "google",
      "lastmod"
    ],
    "when": "Обязательно для любого сайта, который должен индексироваться поисковыми системами.",
    "alternatives": "Без sitemap поисковым роботам требуется значительно больше времени для нахождения глубоких страниц.",
    "url": "https://www.sitemaps.org/ru/protocol.html"
  },
  {
    "lang": "xml",
    "id": "seo-robots-txt",
    "title": "SEO: настройка файла robots.txt",
    "summary": "Инструкции для поисковых роботов: какие разделы сайта разрешено сканировать, а какие нужно скрыть (админка, корзина, поиск).",
    "code": "# robots.txt для DevShelf / веб-сайта\nUser-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nDisallow: /checkout/\nDisallow: /*?*search=\n\n# Ссылка на карту сайта\nSitemap: https://example.com/sitemap.xml",
    "example": "User-agent: Yandex\nClean-param: ref /catalog/ # Игнорировать UTM метки при индексации в Яндексе",
    "points": [
      "Файл должен лежать строго в корне сайта: https://example.com/robots.txt (регистр букв имеет значение).",
      "Директива Disallow закрывает сканирование роботом, но НЕ гарантирует удаления из поиска, если на страницу есть внешние ссылки.",
      "Чтобы гарантированно скрыть секретную страницу от индекса, используй метатег <meta name=\"robots\" content=\"noindex, nofollow\">."
    ],
    "tags": [
      "SEO",
      "robots.txt",
      "robots",
      "индексация",
      "поисковики",
      "яндекс",
      "google",
      "директивы"
    ],
    "when": "Обязательный файл для любого домена перед публикацией в открытый интернет.",
    "alternatives": "Отсутствие robots.txt приводит к тому, что боты сканируют тяжелые скрипты и страницы поиска, перегружая хостинг.",
    "url": "https://developers.google.com/search/docs/crawling-indexing/robots/intro"
  },
  {
    "lang": "xml",
    "id": "svg-vector-graphics",
    "title": "SVG: векторная графика и стилизация через CSS",
    "summary": "Безупречная четкость иконок и логотипов на любых дисплеях Retina, масштабирование без потери качества и управление цветом через fill: currentColor.",
    "code": "<svg xmlns=\"http://www.w3.org/2000/svg\" \n     viewBox=\"0 0 24 24\" \n     width=\"24\" \n     height=\"24\" \n     fill=\"none\" \n     stroke=\"currentColor\" \n     stroke-width=\"2\" \n     stroke-linecap=\"round\" \n     stroke-linejoin=\"round\"\n     aria-hidden=\"true\">\n  <!-- Иконка закладки / избранного -->\n  <path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"/>\n</svg>",
    "example": ".icon { color: #38bdf8; } /* stroke: currentColor автоматически подхватит цвет текста! */",
    "points": [
      "Атрибут viewBox=\"minX minY width height\" определяет внутреннюю систему координат и пропорции векторного полотна.",
      "Использование stroke=\"currentColor\" или fill=\"currentColor\" позволяет красить иконку простым свойством color родителя в CSS.",
      "В инлайн-SVG можно управлять стилями отдельных элементов прямо по классам или псевдоклассам :hover."
    ],
    "tags": [
      "SVG",
      "вектор",
      "иконки",
      "графика",
      "viewBox",
      "currentColor",
      "дизайн"
    ],
    "when": "Для логотипов, иконок кнопок, иллюстраций и декоративных разделителей секций.",
    "alternatives": "Растровые PNG/JPG на иконках весят больше и размываются на экранах смартфонов высокого разрешения.",
    "url": "https://developer.mozilla.org/ru/docs/Web/SVG"
  },
  {
    "lang": "recipes",
    "id": "recipe-burger-menu",
    "title": "Рецепт: Адаптивное бургер-меню (CSS + JS)",
    "summary": "Готовое мобильное меню с анимированной кнопкой-гамбургером, плавно выезжающей шторкой, блокировкой скролла и закрытием по Esc.",
    "code": "<!-- 1. Кнопка бургер -->\n<button class=\"burger-btn\" id=\"burger-btn\" aria-label=\"Открыть меню\" aria-expanded=\"false\">\n  <span class=\"bar\"></span>\n  <span class=\"bar\"></span>\n  <span class=\"bar\"></span>\n</button>\n\n<!-- 2. Выезжающее меню -->\n<nav class=\"mobile-drawer\" id=\"mobile-drawer\" hidden>\n  <div class=\"drawer-content\">\n    <a href=\"#home\">Главная</a>\n    <a href=\"#catalog\">Каталог</a>\n    <a href=\"#contacts\">Контакты</a>\n  </div>\n</nav>\n\n<style>\n.burger-btn { display: flex; flex-direction: column; gap: 5px; background: none; border: 0; cursor: pointer; padding: 8px; }\n.burger-btn .bar { width: 24px; height: 2px; background: currentColor; transition: transform 0.2s, opacity 0.2s; }\n.burger-btn[aria-expanded=\"true\"] .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }\n.burger-btn[aria-expanded=\"true\"] .bar:nth-child(2) { opacity: 0; }\n.burger-btn[aria-expanded=\"true\"] .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }\n\n.mobile-drawer { position: fixed; inset: 0; background: rgba(9, 13, 20, 0.95); backdrop-filter: blur(8px); z-index: 99; display: flex; align-items: center; justify-content: center; }\n.mobile-drawer[hidden] { display: none; }\n</style>\n\n<script>\nconst btn = document.getElementById('burger-btn');\nconst drawer = document.getElementById('mobile-drawer');\n\nfunction toggleMenu() {\n  const isOpen = btn.getAttribute('aria-expanded') === 'true';\n  btn.setAttribute('aria-expanded', !isOpen);\n  drawer.hidden = isOpen;\n  document.body.style.overflow = isOpen ? '' : 'hidden';\n}\n\nbtn.addEventListener('click', toggleMenu);\nwindow.addEventListener('keydown', (e) => {\n  if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') toggleMenu();\n});\n</script>",
    "example": "// Нажми «Открыть в песочнице», чтобы сразу протестировать и кастомизировать это меню!",
    "points": [
      "Доступность: атрибут aria-expanded сообщает скринридерам текущее состояние меню (открыто или закрыто).",
      "Блокировка body.style.overflow = \"hidden\" предотвращает неприятную прокрутку страницы под открытым меню.",
      "Клавиша Escape позволяет пользователю интуитивно закрыть меню без поиска крестика."
    ],
    "tags": [
      "рецепт",
      "бургер меню",
      "меню",
      "мобильное меню",
      "drawer",
      "навигация",
      "гамбургер"
    ],
    "when": "Обязательный элемент адаптивной шапки любого сайта на экранах смартфонов.",
    "alternatives": "Готовые громоздкие jQuery-плагины, добавляющие лишние мегабайты в бандл.",
    "url": "https://developer.mozilla.org/ru/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"
  },
  {
    "lang": "recipes",
    "id": "recipe-modal-dialog",
    "title": "Рецепт: Модальное окно на нативном <dialog>",
    "summary": "Надежное модальное окно: правильное кадрирование, плавное затемнение фона, ловушка фокуса и закрытие по клику мимо.",
    "code": "<button id=\"show-dialog-btn\" class=\"btn\">Открыть окно</button>\n\n<dialog id=\"custom-modal\" class=\"modal-window\">\n  <div class=\"modal-header\">\n    <h3>Подтверждение действия</h3>\n    <button type=\"button\" class=\"close-btn\" id=\"close-dialog-btn\" aria-label=\"Закрыть\">&times;</button>\n  </div>\n  <p>Вы уверены, что хотите сохранить изменения в проекте?</p>\n  <div class=\"modal-actions\">\n    <button type=\"button\" class=\"btn secondary\" id=\"cancel-btn\">Отмена</button>\n    <button type=\"button\" class=\"btn primary\" id=\"confirm-btn\">Да, сохранить</button>\n  </div>\n</dialog>\n\n<style>\n.modal-window { border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; background: #111726; color: #f8fafc; padding: 24px; max-width: 440px; width: 90%; }\n.modal-window::backdrop { background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(4px); }\n.modal-actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px; }\n</style>\n\n<script>\nconst modal = document.getElementById('custom-modal');\ndocument.getElementById('show-dialog-btn').onclick = () => modal.showModal();\ndocument.getElementById('close-dialog-btn').onclick = () => modal.close();\ndocument.getElementById('cancel-btn').onclick = () => modal.close();\n\n// Закрытие при клике по затемненному оверлею\nmodal.addEventListener('click', (e) => {\n  if (e.target === modal) modal.close();\n});\n</script>",
    "example": "modal.close(); // Программное закрытие после отправки формы",
    "points": [
      "showModal() помещает диалог в специальный Top Layer браузера поверх всех z-index на странице.",
      "Фокус клавиатуры автоматически захватывается внутри окна и не улетает на скрытые элементы под оверлеем.",
      "Клавиша Esc закрывает модальное окно по умолчанию."
    ],
    "tags": [
      "рецепт",
      "модалка",
      "модальное окно",
      "диалог",
      "dialog",
      "popup",
      "попап"
    ],
    "when": "Для окон авторизации, предупреждений перед удалением, галерей предпросмотра.",
    "alternatives": "Самодельные оверлеи на div требуют сотен строк кода для корректного фокуса и доступности.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog"
  },
  {
    "lang": "recipes",
    "id": "recipe-tabs",
    "title": "Рецепт: Доступные вкладки (Tabs Component)",
    "summary": "Переключение вкладок с сохранением состояния, поддержкой стрелок клавиатуры и атрибутами ARIA.",
    "code": "<div class=\"tabs-widget\">\n  <div role=\"tablist\" class=\"tab-buttons\">\n    <button role=\"tab\" aria-selected=\"true\" id=\"tab-1\" aria-controls=\"panel-1\">HTML</button>\n    <button role=\"tab\" aria-selected=\"false\" id=\"tab-2\" aria-controls=\"panel-2\" tabindex=\"-1\">CSS</button>\n    <button role=\"tab\" aria-selected=\"false\" id=\"tab-3\" aria-controls=\"panel-3\" tabindex=\"-1\">JS</button>\n  </div>\n  <div role=\"tabpanel\" id=\"panel-1\" aria-labelledby=\"tab-1\">\n    <h3>Содержимое вкладки HTML</h3>\n    <p>Структура и семантика веб-документа.</p>\n  </div>\n  <div role=\"tabpanel\" id=\"panel-2\" aria-labelledby=\"tab-2\" hidden>\n    <h3>Содержимое вкладки CSS</h3>\n    <p>Стили, сетки Flexbox и CSS Grid.</p>\n  </div>\n  <div role=\"tabpanel\" id=\"panel-3\" aria-labelledby=\"tab-3\" hidden>\n    <h3>Содержимое вкладки JS</h3>\n    <p>Интерактивная логика и современные Web APIs.</p>\n  </div>\n</div>\n\n<script>\nconst tabButtons = document.querySelectorAll('[role=\"tab\"]');\nconst panels = document.querySelectorAll('[role=\"tabpanel\"]');\n\ntabButtons.forEach(btn => {\n  btn.addEventListener('click', () => {\n    // Снимаем выбор со всех вкладок\n    tabButtons.forEach(b => {\n      b.setAttribute('aria-selected', 'false');\n      b.tabIndex = -1;\n    });\n    panels.forEach(p => p.hidden = true);\n\n    // Активируем выбранную\n    btn.setAttribute('aria-selected', 'true');\n    btn.tabIndex = 0;\n    const activePanelId = btn.getAttribute('aria-controls');\n    document.getElementById(activePanelId).hidden = false;\n  });\n});\n</script>",
    "example": "// Позволяет разделить интерфейс на вкладки без перезагрузки страницы",
    "points": [
      "Использует спецификацию WAI-ARIA Tabs: role=\"tablist\", role=\"tab\", role=\"tabpanel\".",
      "Скрытие панелей через атрибут hidden гарантирует доступность и отсутствие сдвигов.",
      "tabindex=\"-1\" на неактивных вкладках обеспечивает правильную клавиатурную навигацию."
    ],
    "tags": [
      "рецепт",
      "вкладки",
      "табы",
      "tabs",
      "tablist",
      "переключатель"
    ],
    "when": "Для личных кабинетов, настроек профиля, многоязычных блоков и карточек товара.",
    "alternatives": "Перезагрузка страницы на каждую вкладку создает лишние HTTP-запросы.",
    "url": "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/"
  },
  {
    "lang": "html",
    "id": "html-headings",
    "title": "HTML: заголовки <h1>–<h6> и иерархия документа",
    "summary": "Шесть уровней заголовков, формирующих оглавление страницы для пользователей, поисковых роботов и скринридеров.",
    "code": "<article>\n  <h1>Руководство по архитектуре CSS</h1>\n  <p>Вводный абзац статьи с кратким обзором темы.</p>\n\n  <h2>1. Методология БЭМ</h2>\n  <p>Описание блока, элемента и модификатора.</p>\n\n  <h3>1.1. Именование модификаторов</h3>\n  <p>Примеры булевых и ключ-значение модификаторов.</p>\n</article>",
    "example": "<h1>Главный заголовок страницы (один на документ)</h1>\n<h2>Заголовок секции</h2>\n<h3>Подзаголовок</h3>",
    "points": [
      "Тег <h1> должен быть один на страницу и отражать её главную тему (совпадать по смыслу с <title>).",
      "Не пропускай уровни вложенности (например, не переходи с <h1> сразу на <h4> ради размера шрифта).",
      "Размер текста заголовка всегда задавай через CSS (font-size: clamp(...)), а уровень тега выбирай по смыслу."
    ],
    "tags": [
      "HTML",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "заголовки",
      "иерархия",
      "типографика",
      "seo"
    ],
    "when": "Используй для озаглавливания страницы, каждого раздела <section> и карточек <article>.",
    "alternatives": "Не заменяй заголовки на <div class=\"title\"> — страница потеряет структуру для SEO и незрячих пользователей.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/Heading_Elements"
  },
  {
    "lang": "html",
    "id": "html-text-inline",
    "title": "HTML: текстовая семантика <p>, <strong>, <em>, <mark>, <small>",
    "summary": "Теги для разметки абзацев, смысловых акцентов, важных предупреждений, подсвеченного текста и сносок.",
    "code": "<p>\n  <strong>Внимание:</strong> перед удалением базы данных создайте <em>резервную копию</em>.\n</p>\n<p>\n  Результаты поиска по запросу <mark>flexbox</mark>: найдено 14 статей.\n</p>\n<p><small>Лицензия MIT · Обновлено в 2026 году</small></p>",
    "example": "<p>Обычный текст, <strong>важный фрагмент</strong> и <mark>выделенное совпадение</mark>.</p>",
    "points": [
      "<strong> указывает на высокую важность текста (скринридер произносит с усиленной интонацией), а <b> — просто полужирное начертание без важности.",
      "<em> задаёт логическое ударение в предложении, тогда как <i> используется для терминов, мыслей или иконок.",
      "<mark> подсвечивает совпадения в поиске или актуальную часть цитаты."
    ],
    "tags": [
      "HTML",
      "p",
      "strong",
      "em",
      "mark",
      "small",
      "b",
      "i",
      "абзац",
      "жирный",
      "курсив",
      "текст"
    ],
    "when": "При разметке любого текстового контента, статей, карточек и уведомлений.",
    "alternatives": "Если нужно сделать весь блок жирным чисто декоративно — используй CSS-свойство font-weight: 600.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/strong"
  },
  {
    "lang": "html",
    "id": "html-code-pre-kbd",
    "title": "HTML: разметка кода <code>, <pre>, <kbd> и <samp>",
    "summary": "Специализированные элементы для вывода фрагментов исходного кода, сочетаний клавиш и вывода терминала.",
    "code": "<p>Нажмите <kbd>Ctrl</kbd> + <kbd>K</kbd> для вызова командной строки.</p>\n\n<pre><code>function sum(a, b) {\n  return a + b;\n}</code></pre>\n\n<p>Ответ сервера: <samp>HTTP/1.1 200 OK</samp></p>",
    "example": "<kbd>Esc</kbd> закрывает окно, а <code>Array.isArray()</code> проверяет массив.",
    "points": [
      "Тег <code> используется для инлайновых имён функций и переменных прямо внутри текста.",
      "Связка <pre><code>...</code></pre> сохраняет все пробелы, отступы и переносы строк для многострочных сниппетов.",
      "Символы < и > внутри <code> необходимо экранировать как &lt; и &gt;, чтобы браузер не посчитал их HTML-тегами."
    ],
    "tags": [
      "HTML",
      "code",
      "pre",
      "kbd",
      "samp",
      "код",
      "клавиши",
      "терминал",
      "сниппет"
    ],
    "when": "В документации, технических блогах, подсказках горячих клавиш и логах.",
    "alternatives": "Для интерактивного редактирования кода используй <textarea> или редакторы CodeMirror / Monaco.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/code"
  },
  {
    "lang": "html",
    "id": "html-blockquote-figure",
    "title": "HTML: цитаты <blockquote>, <q> и иллюстрации <figure>, <figcaption>",
    "summary": "Семантическое оформление блочных цитат с указанием автора и автономных иллюстраций с подписями.",
    "code": "<figure class=\"quote-card\">\n  <blockquote cite=\"https://martinfowler.com\">\n    <p>Любой дурак может написать код, который поймёт компьютер. Хорошие программисты пишут код, который может понять человек.</p>\n  </blockquote>\n  <figcaption>— Мартин Фаулер, <cite>Рефакторинг</cite></figcaption>\n</figure>",
    "example": "<figure>\n  <img src=\"chart.svg\" alt=\"График роста\">\n  <figcaption>Рис. 1 — Динамика запросов за 2026 год</figcaption>\n</figure>",
    "points": [
      "<figure> связывает изображение, диаграмму, сниппет кода или цитату с её подписью <figcaption>.",
      "<blockquote> предназначен для крупных цитат, а <q> — для коротких цитат внутри строки (браузер сам добавит кавычки).",
      "<cite> используется для названия произведения (книги, статьи, стандарта), на которое ссылаются."
    ],
    "tags": [
      "HTML",
      "blockquote",
      "figure",
      "figcaption",
      "cite",
      "q",
      "цитата",
      "подпись",
      "иллюстрация"
    ],
    "when": "Для оформления отзывов клиентов, цитат в статьях, графиков, фото с подписями и схем.",
    "alternatives": "Обычный <img> без подписи не требует обёртки в <figure>.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/figure"
  },
  {
    "lang": "html",
    "id": "html-time-address-abbr",
    "title": "HTML: даты <time>, аббревиатуры <abbr> и контакты <address>",
    "summary": "Машиночитаемые даты для поисковиков, расшифровка терминов и контактный блок автора или компании.",
    "code": "<p>Релиз состоится <time datetime=\"2026-09-15T10:00:00+03:00\">15 сентября в 10:00 МСК</time>.</p>\n\n<p>Протокол <abbr title=\"HyperText Transfer Protocol Secure\">HTTPS</abbr> шифрует трафик.</p>\n\n<address>\n  Связаться с редакцией: <a href=\"mailto:team@devshelf.ru\">team@devshelf.ru</a>\n</address>",
    "example": "<time datetime=\"2026-05-01\">1 мая 2026</time>",
    "points": [
      "Атрибут datetime в <time> хранит дату в формате ISO 8601, понятном поисковикам и календарям, а внутри тега пишется текст для людей.",
      "<abbr title=\"...\"> показывает расшифровку аббревиатуры при наведении курсора и помогает скринридерам.",
      "<address> предназначен для контактов автора статьи или владельца сайта, а не для любого почтового адреса доставки."
    ],
    "tags": [
      "HTML",
      "time",
      "datetime",
      "abbr",
      "address",
      "дата",
      "время",
      "аббревиатура",
      "контакты"
    ],
    "when": "В карточках новостей, блогах, событиях, футере сайта и глоссариях.",
    "alternatives": "Для сложных всплывающих подсказок на тач-устройствах лучше дополнить <abbr> кастомным поповером.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/time"
  },
  {
    "lang": "html",
    "id": "html-links-navigation",
    "title": "HTML: ссылки <a>, якоря, скачивание и безопасность rel=\"noopener\"",
    "summary": "Гиперссылки для навигации между страницами, перехода к секциям, звонков, писем и скачивания файлов.",
    "code": "<!-- Обычная и внешняя ссылка -->\n<a href=\"/catalog\">Каталог</a>\n<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub ↗</a>\n\n<!-- Якорная ссылка внутри страницы -->\n<a href=\"#pricing\">К тарифам</a>\n\n<!-- Скачивание файла, телефон и почта -->\n<a href=\"/files/guide.pdf\" download=\"DevShelf-Guide.pdf\">Скачать PDF</a>\n<a href=\"tel:+79990001122\">+7 (999) 000-11-22</a>\n<a href=\"mailto:hello@example.com\">hello@example.com</a>",
    "example": "<a href=\"#section-2\">Перейти к разделу</a>",
    "points": [
      "Если ссылка меняет URL или переводит на другую страницу/якорь — это всегда <a>. Если выполняет действие на месте (открыть модалку) — это <button>.",
      "Атрибут download подсказывает браузеру сохранить файл вместо открытия его во вкладке (работает для файлов с того же домена).",
      "При target=\"_blank\" всегда добавляй rel=\"noopener\", чтобы открытая вкладка не имела доступа к window.opener."
    ],
    "tags": [
      "HTML",
      "a",
      "href",
      "link",
      "target",
      "download",
      "mailto",
      "tel",
      "noopener",
      "ссылка",
      "якорь"
    ],
    "when": "Для любой навигации, оглавлений статей, контактов и ссылок на скачивание.",
    "alternatives": "Никогда не используй <a href=\"#\"> для кнопок открытия меню — используй <button type=\"button\">.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/a"
  },
  {
    "lang": "html",
    "id": "html-buttons",
    "title": "HTML: элемент кнопки <button> и типы button / submit / reset",
    "summary": "Интерактивный элемент для запуска действий, отправки форм и управления интерфейсом с поддержкой клавиатуры.",
    "code": "<!-- Обычная кнопка для JS-действий -->\n<button type=\"button\" class=\"btn-primary\">Открыть фильтр</button>\n\n<!-- Кнопка отправки формы -->\n<button type=\"submit\">Сохранить изменения</button>\n\n<!-- Кнопка только с иконкой (обязателен aria-label) -->\n<button type=\"button\" aria-label=\"Закрыть окно\">✕</button>",
    "example": "<button type=\"button\" disabled>Загрузка...</button>",
    "points": [
      "По умолчанию внутри <form> кнопка без атрибута type считается type=\"submit\" и перезагружает страницу при клике! Всегда явно пиши type=\"button\" для обычных кнопок.",
      "Нативный <button> автоматически получает фокус по клавише Tab и нажимается по Пробелу и Enter.",
      "Атрибут disabled полностью блокирует клики, фокус и отправку формы."
    ],
    "tags": [
      "HTML",
      "button",
      "submit",
      "reset",
      "disabled",
      "кнопка",
      "форма",
      "клик"
    ],
    "when": "Для всех кликабельных элементов, которые не меняют адрес страницы (модалки, табы, бургер, лайки, отправка форм).",
    "alternatives": "Никогда не делай кнопки из <div onclick=\"...\"> — они недоступны с клавиатуры и невидимы для скринридеров.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/button"
  },
  {
    "lang": "html",
    "id": "html-lists",
    "title": "HTML: списки <ul>, <ol> и список определений <dl>, <dt>, <dd>",
    "summary": "Маркированные списки, нумерованные инструкции и списки пар «ключ — значение» для характеристик.",
    "code": "<!-- Нумерованный список со стартом с 3 -->\n<ol start=\"3\">\n  <li>Настроить сборщик Vite</li>\n  <li>Подключить стили</li>\n</ol>\n\n<!-- Список характеристик (ключ — значение) -->\n<dl class=\"specs\">\n  <dt>Движок</dt>\n  <dd>Chromium / V8</dd>\n  <dt>Лицензия</dt>\n  <dd>MIT</dd>\n</dl>",
    "example": "<ul>\n  <li>Пункт меню 1</li>\n  <li>Пункт меню 2</li>\n</ul>",
    "points": [
      "Непосредственными дочерними элементами <ul> и <ol> могут быть только теги <li>.",
      "<ol> имеет полезные атрибуты: reversed (обратный отсчёт) и start=\"5\" (начать нумерацию с 5).",
      "<dl> идеален для карточек характеристик товара, метаданных и глоссариев (внутри пары <dt> термин и <dd> описание)."
    ],
    "tags": [
      "HTML",
      "ul",
      "ol",
      "li",
      "dl",
      "dt",
      "dd",
      "список",
      "нумерация",
      "характеристики"
    ],
    "when": "Для навигационных меню, чек-листов, пошаговых инструкций и таблиц характеристик.",
    "alternatives": "Если у данных больше двух измерений (строки и несколько колонок), используй <table> вместо <dl>.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/dl"
  },
  {
    "lang": "html",
    "id": "html-tables",
    "title": "HTML: таблицы данных <table>, <thead>, <tbody>, <th>, <td>",
    "summary": "Полная семантическая разметка табличных данных с заголовками столбцов, объединением ячеек и подписью.",
    "code": "<table>\n  <caption>Тарифные планы облачного хостинга</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Тариф</th>\n      <th scope=\"col\">RAM</th>\n      <th scope=\"col\">Цена / мес</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Start</th>\n      <td>4 ГБ</td>\n      <td>490 ₽</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Pro</th>\n      <td>16 ГБ</td>\n      <td>1 490 ₽</td>\n    </tr>\n  </tbody>\n</table>",
    "example": "<td colspan=\"2\">Ячейка на две колонки</td>",
    "points": [
      "Атрибут scope=\"col\" или scope=\"row\" у тега <th> сообщает скринридерам, заголовок ли это столбца или строки.",
      "<caption> задаёт доступный заголовок таблицы и должен идти сразу после открывающего <table>.",
      "Для адаптивности на мобильных оборачивай таблицу в <div style=\"overflow-x: auto\">."
    ],
    "tags": [
      "HTML",
      "table",
      "thead",
      "tbody",
      "tfoot",
      "tr",
      "th",
      "td",
      "colspan",
      "rowspan",
      "таблица"
    ],
    "when": "Для прайс-листов, финансовых отчётов, сравнения характеристик и расписаний.",
    "alternatives": "Никогда не используй таблицы для раскладки страницы — для этого есть CSS Grid и Flexbox.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/table"
  },
  {
    "lang": "html",
    "id": "html-input-types",
    "title": "HTML: современные типы полей <input> и мобильные клавиатуры",
    "summary": "Выбор правильного type и inputmode для показа удобной экранной клавиатуры на смартфонах и встроенной валидации.",
    "code": "<input type=\"email\" placeholder=\"name@company.ru\" autocomplete=\"email\">\n<input type=\"tel\" placeholder=\"+7 (999) 000-00-00\" autocomplete=\"tel\">\n<input type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]{6}\" placeholder=\"Код из СМС\">\n<input type=\"search\" placeholder=\"Поиск по каталогу...\">\n<input type=\"date\" min=\"2026-01-01\">\n<input type=\"range\" min=\"0\" max=\"100\" value=\"50\">\n<input type=\"color\" value=\"#38bdf8\">",
    "example": "<input type=\"password\" autocomplete=\"current-password\" required minlength=\"8\">",
    "points": [
      "type=\"email\" и type=\"tel\" автоматически переключают клавиатуру iOS/Android на раскладку с @ или цифрами.",
      "Для пин-кодов, номеров карт и кодов из СМС используй <input type=\"text\" inputmode=\"numeric\"> вместо type=\"number\" (у number есть стрелочки и скролл).",
      "Атрибут autocomplete=\"one-time-code\" позволяет iOS и Android автоматически подставлять код из пришедшего СМС."
    ],
    "tags": [
      "HTML",
      "input",
      "email",
      "tel",
      "number",
      "date",
      "range",
      "color",
      "search",
      "inputmode",
      "поля"
    ],
    "when": "В любых формах регистрации, оплаты, фильтрации и настроек.",
    "alternatives": "Для многострочного ввода текста используй <textarea rows=\"4\">.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/input"
  },
  {
    "lang": "html",
    "id": "html-fieldset-legend",
    "title": "HTML: группировка полей <fieldset>, <legend>, чекбоксы и радиокнопки",
    "summary": "Доступное объединение радиокнопок и чекбоксов в смысловые блоки с общим заголовком и групповой блокировкой.",
    "code": "<fieldset>\n  <legend>Способ доставки</legend>\n  <label>\n    <input type=\"radio\" name=\"delivery\" value=\"courier\" checked>\n    Курьером до двери\n  </label>\n  <label>\n    <input type=\"radio\" name=\"delivery\" value=\"pickup\">\n    Пункт выдачи\n  </label>\n</fieldset>",
    "example": "<fieldset disabled>\n  <legend>Недоступные настройки</legend>\n  <input type=\"text\">\n</fieldset>",
    "points": [
      "Радиокнопки (type=\"radio\") объединяются в группу одинаковым атрибутом name — выбрать можно только одну.",
      "Оборачивание текста и инпута в общий <label> увеличивает область клика (можно нажимать прямо на текст).",
      "Если добавить атрибут disabled самому тегу <fieldset>, все поля внутри него разом станут неактивными!"
    ],
    "tags": [
      "HTML",
      "fieldset",
      "legend",
      "radio",
      "checkbox",
      "label",
      "группа",
      "чекбокс",
      "радиокнопка"
    ],
    "when": "При верстке групп радиокнопок, чекбоксов фильтров и многошаговых анкет (адрес, оплата).",
    "alternatives": "Без <fieldset> и <legend> скринридер прочитает подпись радиокнопки («Да» / «Нет»), но не прочитает сам вопрос.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/fieldset"
  },
  {
    "lang": "html",
    "id": "html-form-validation",
    "title": "HTML: нативная валидация форм (required, pattern, minlength, min/max)",
    "summary": "Встроенная в браузер проверка полей до отправки формы и стилизация валидных/ошибочных состояний через CSS.",
    "code": "<form>\n  <label>\n    Логин (от 3 до 16 латинских символов):\n    <input type=\"text\" name=\"username\" required minlength=\"3\" maxlength=\"16\" pattern=\"[a-zA-Z0-9_]+\" title=\"Только латинские буквы, цифры и _\">\n  </label>\n  <button type=\"submit\">Создать аккаунт</button>\n</form>",
    "example": "input:user-invalid {\n  border-color: #ef4444;\n}\ninput:user-valid {\n  border-color: #10b981;\n}",
    "points": [
      "Атрибут pattern принимает регулярное выражение, а атрибут title выводит подсказку пользователю при ошибке.",
      "В CSS используй современный псевдокласс :user-invalid вместо :invalid — он подсвечивает ошибку только ПОСЛЕ того, как пользователь начал вводить текст!",
      "Нативная валидация улучшает UX, но никогда не заменяет проверку данных на сервере (PHP/Node.js)."
    ],
    "tags": [
      "HTML",
      "validation",
      "required",
      "pattern",
      "minlength",
      "maxlength",
      "user-invalid",
      "валидация",
      "форма"
    ],
    "when": "На всех клиентских формах для мгновенной обратной связи без лишнего JS-кода.",
    "alternatives": "Для кастомных текстов ошибок используй Constraint Validation API (input.setCustomValidity()).",
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Forms/Form_validation"
  },
  {
    "lang": "html",
    "id": "html-progress-meter",
    "title": "HTML: индикаторы <progress>, <meter> и <output>",
    "summary": "Нативные семантические элементы для отображения прогресс-бара загрузки, уровня заряда/диска и результата расчёта.",
    "code": "<!-- Прогресс выполнения задачи -->\n<label for=\"upload\">Загрузка файла:</label>\n<progress id=\"upload\" value=\"72\" max=\"100\">72%</progress>\n\n<!-- Измеритель в заданном диапазоне (зелёный/жёлтый/красный) -->\n<label for=\"disk\">Занято на диске:</label>\n<meter id=\"disk\" min=\"0\" max=\"100\" low=\"60\" high=\"85\" optimum=\"20\" value=\"88\">88%</meter>\n\n<!-- Вывод результата калькулятора -->\n<output name=\"result\">1 450 ₽</output>",
    "example": "<progress></progress> <!-- Без value показывает бесконечную анимацию загрузки -->",
    "points": [
      "<progress> используется для процесса во времени (загрузка, шаг анкеты). Без атрибута value он работает как бесконечный спиннер.",
      "<meter> показывает статическую величину с порогами low, high и optimum (заряд батареи, надёжность пароля, место на диске).",
      "<output> автоматически озвучивает изменение значения скринридерам при пересчёте ползунков в калькуляторах."
    ],
    "tags": [
      "HTML",
      "progress",
      "meter",
      "output",
      "прогресс",
      "индикатор",
      "калькулятор",
      "загрузка"
    ],
    "when": "В загрузчиках файлов, дашбордах мониторинга, индикаторах пароля и онлайн-калькуляторах.",
    "alternatives": "Кастомный <div role=\"progressbar\" aria-valuenow=\"72\"> требует ручной поддержки ARIA-атрибутов.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/progress"
  },
  {
    "lang": "html",
    "id": "html-popover-api",
    "title": "HTML: нативный Popover API (атрибуты popover и popovertarget)",
    "summary": "Современный стандарт HTML для создания выпадающих меню, тултипов и тостов поверх всех слоёв без единой строчки JS.",
    "code": "<button type=\"button\" popovertarget=\"profile-menu\">\n  Профиль ▾\n</button>\n\n<div id=\"profile-menu\" popover>\n  <p><strong>Алексей</strong> · Pro аккаунт</p>\n  <hr>\n  <a href=\"#settings\">Настройки</a>\n  <button type=\"button\" popovertarget=\"profile-menu\" popovertargetaction=\"hide\">Закрыть</button>\n</div>",
    "example": "[popover]:popover-open {\n  border: 1px solid #38bdf8;\n  border-radius: 8px;\n}",
    "points": [
      "Элемент с атрибутом popover рендерится в верхнем слое браузера (#top-layer), поэтому ему никогда не мешают чужие z-index и overflow: hidden!",
      "Режим по умолчанию popover=\"auto\" автоматически закрывает поповер при клике вне него (light dismiss) или нажатии Esc.",
      "Режим popover=\"manual\" не закрывается при клике мимо и отлично подходит для тост-уведомлений."
    ],
    "tags": [
      "HTML",
      "popover",
      "popovertarget",
      "поповер",
      "выпадающее меню",
      "тултип",
      "top-layer"
    ],
    "when": "Для выпадающих меню профиля, фильтров, подсказок и уведомлений без привлечения JS-библиотек.",
    "alternatives": "Если нужно заблокировать остальную страницу (модальный режим), используй <dialog> с showModal().",
    "url": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API"
  },
  {
    "lang": "html",
    "id": "html-template-slot",
    "title": "HTML: инертные шаблоны <template> для динамического рендеринга",
    "summary": "Хранение HTML-заготовок в разметке страницы, которые не рендерятся и не грузят картинки до клонирования через JS.",
    "code": "<template id=\"card-tpl\">\n  <article class=\"user-card\">\n    <h3 class=\"user-name\"></h3>\n    <p class=\"user-role\"></p>\n  </article>\n</template>\n\n<div id=\"list\"></div>\n\n<script>\n  const tpl = document.getElementById('card-tpl');\n  const clone = tpl.content.cloneNode(true);\n  clone.querySelector('.user-name').textContent = 'Мария Иванова';\n  clone.querySelector('.user-role').textContent = 'Frontend Lead';\n  document.getElementById('list').appendChild(clone);\n</script>",
    "example": "const fragment = template.content.cloneNode(true);",
    "points": [
      "Содержимое внутри <template> находится в DocumentFragment: браузер парсит его, но не выполняет скрипты и не скачивает изображения.",
      "Метод tpl.content.cloneNode(true) создаёт глубокую копию узлов, готовую к заполнению через textContent.",
      "Использование <template> защищает от XSS-уязвимостей, так как не требует склейки строк через innerHTML."
    ],
    "tags": [
      "HTML",
      "template",
      "cloneNode",
      "шаблон",
      "динамический",
      "рендер",
      "компонент"
    ],
    "when": "При рендеринге списков карточек, комментариев и строк таблиц на чистом JavaScript.",
    "alternatives": "Создание десятков вложенных узлов через document.createElement() вручную делает код громоздким.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/template"
  },
  {
    "lang": "html",
    "id": "html-iframe-sandbox",
    "title": "HTML: встраивание <iframe sandbox> и изоляция виджетов",
    "summary": "Безопасное встраивание внешних страниц, карт, видео и интерактивных песочниц с гранулярным контролем прав.",
    "code": "<iframe\n  src=\"https://example.com/widget\"\n  title=\"Интерактивная карта офиса\"\n  width=\"100%\"\n  height=\"400\"\n  loading=\"lazy\"\n  sandbox=\"allow-scripts allow-same-origin\"\n  referrerpolicy=\"no-referrer\"\n></iframe>",
    "example": "<iframe srcdoc=\"<h1>Привет из изолированного документа!</h1>\"></iframe>",
    "points": [
      "Атрибут title у <iframe> обязателен для доступности, чтобы незрячие пользователи понимали, что находится внутри фрейма.",
      "Атрибут sandbox без значений включает максимальные ограничения (запрещены скрипты, формы, всплывающие окна). Права выдаются точечно: allow-scripts, allow-forms.",
      "loading=\"lazy\" откладывает загрузку тяжелых сторонних фреймов (карт, видео), пока пользователь не доскроллит до них."
    ],
    "tags": [
      "HTML",
      "iframe",
      "sandbox",
      "srcdoc",
      "фрейм",
      "встраивание",
      "карта",
      "безопасность"
    ],
    "when": "При встраивании карт, виджетов оплаты, видеоплееров и превью кода.",
    "alternatives": "Внешние сайты с заголовком X-Frame-Options: DENY нельзя открыть в iframe — используй обычную ссылку target=\"_blank\".",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/iframe"
  },
  {
    "lang": "html",
    "id": "html-data-attributes",
    "title": "HTML: пользовательские атрибуты data-* и глобальные атрибуты",
    "summary": "Хранение произвольных параметров прямо в HTML-элементах для удобной связи верстки с JavaScript и CSS.",
    "code": "<button\n  type=\"button\"\n  class=\"tab-btn\"\n  data-tab-target=\"pricing\"\n  data-plan-id=\"42\"\n  hidden\n>\n  Показать тариф\n</button>\n\n<script>\n  const btn = document.querySelector('.tab-btn');\n  console.log(btn.dataset.tabTarget); // \"pricing\"\n  console.log(btn.dataset.planId);    // \"42\"\n</script>",
    "example": ".badge::after {\n  content: attr(data-count);\n}",
    "points": [
      "Любой атрибут вида data-user-role автоматически превращается в camelCase-свойство element.dataset.userRole в JavaScript.",
      "В CSS к значению data-атрибута можно обратиться по селектору [data-state=\"active\"] или вывести его текст через content: attr(data-label).",
      "Глобальные атрибуты hidden,inert, contenteditable=\"true\" и spellcheck=\"false\" работают на любых HTML-тегах."
    ],
    "tags": [
      "HTML",
      "data",
      "dataset",
      "inert",
      "hidden",
      "contenteditable",
      "атрибуты"
    ],
    "when": "Для передачи ID сущностей, состояния компонентов (data-state=\"open\"), тем оформления (data-theme=\"dark\") и табов.",
    "alternatives": "Не придумывай нестандартные атрибуты без префикса data- — они не пройдут валидацию HTML5.",
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes"
  },
  {
    "lang": "html",
    "id": "html-resource-hints",
    "title": "HTML: ускорение загрузки (preconnect, preload, defer, async)",
    "summary": "Управление приоритетами загрузки скриптов, шрифтов и внешних доменов для максимального показателя Core Web Vitals.",
    "code": "<head>\n  <!-- Заранее устанавливаем DNS + TCP + TLS соединение с CDN шрифтов -->\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n\n  <!-- Приоритетная подгрузка главного шрифта -->\n  <link rel=\"preload\" href=\"/fonts/inter.woff2\" as=\"font\" type=\"font/woff2\" crossorigin>\n\n  <!-- Скрипт загружается фоном и выполняется после сборки DOM -->\n  <script src=\"/app.js\" defer></script>\n</head>",
    "example": "<script type=\"module\" src=\"/main.js\"></script> <!-- Модули имеют defer по умолчанию -->",
    "points": [
      "Атрибут defer у <script> скачивает файл параллельно с парсингом HTML и запускает его строго по порядку после готовности DOM.",
      "Атрибут async запускает скрипт сразу после скачивания, прерывая парсинг — подходит только для независимых счетчиков аналитики.",
      "rel=\"preconnect\" экономит 100–300 мс на установке соединения со сторонними API и CDN."
    ],
    "tags": [
      "HTML",
      "defer",
      "async",
      "preload",
      "preconnect",
      "prefetch",
      "производительность",
      "скорость",
      "script"
    ],
    "when": "При подключении любых JS-скриптов, кастомных шрифтов и критических ресурсов в <head>.",
    "alternatives": "Никогда не ставь обычный <script src=\"...\"> без defer в <head> — это заблокирует отрисовку всей страницы.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/rel/preload"
  },
  {
    "lang": "css",
    "id": "css-display-modes",
    "title": "CSS: режимы отображения display (block, inline, inline-block, flex, grid, contents)",
    "summary": "Управление тем, как элемент ведёт себя в потоке документа и как располагаются его дочерние элементы.",
    "code": ".badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n}\n\n.wrapper-transparent {\n  display: contents; /* Сам враппер исчезает из дерева раскладки, его дети становятся детьми родителя */\n}",
    "example": "[hidden] {\n  display: none !important;\n}",
    "points": [
      "Строчные элементы (display: inline, например <span>, <a>) игнорируют width, height и вертикальные margin.",
      "inline-flex и inline-grid ведут себя снаружи как строчный элемент (подстраиваются под ширину контента), а внутри работают как полноценный флекс или грид.",
      "display: contents позволяет «растворить» техническую обёртку в DOM, чтобы её дочерние элементы напрямую участвовали в CSS Grid родителя."
    ],
    "tags": [
      "CSS",
      "display",
      "block",
      "inline",
      "inline-flex",
      "contents",
      "none",
      "поток"
    ],
    "when": "При создании кнопок с иконками (inline-flex), сеток (grid) и скрытии элементов (none).",
    "alternatives": "Если нужно скрыть элемент визуально, но оставить место под него, используй visibility: hidden или opacity: 0.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/display"
  },
  {
    "lang": "css",
    "id": "css-logical-properties",
    "title": "CSS: логические свойства (margin-inline, padding-block, inset)",
    "summary": "Современные сокращения для одновременного задания горизонтальных и вертикальных отступов и размеров.",
    "code": ".container {\n  max-inline-size: 1200px;\n  margin-inline: auto;    /* Заменяет margin-left: auto; margin-right: auto */\n  padding-inline: 24px;   /* Горизонтальные отступы слева и справа */\n  padding-block: 48px;    /* Вертикальные отступы сверху и снизу */\n}",
    "example": ".btn {\n  padding-block: 8px;\n  padding-inline: 16px;\n}",
    "points": [
      "Ось inline отвечает за направление текста (по горизонтали: лево + право), а ось block — за направление блоков (по вертикали: верх + низ).",
      "margin-inline: auto центрирует блок по горизонтали, не трогая его верхний и нижний отступы (в отличие от margin: 0 auto).",
      "Логические свойства автоматически адаптируют интерфейс для языков с письмом справа налево (RTL)."
    ],
    "tags": [
      "CSS",
      "margin-inline",
      "padding-inline",
      "padding-block",
      "margin-block",
      "inset-inline",
      "центрирование"
    ],
    "when": "Для центрирования контейнеров (margin-inline: auto) и задания симметричных отступов без дублирования значений.",
    "alternatives": "Классические padding: 10px 20px перезаписывают сразу все 4 стороны.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values"
  },
  {
    "lang": "css",
    "id": "css-flex-items",
    "title": "CSS: управление флекс-элементами (flex: 1, flex-grow, flex-shrink, flex-basis)",
    "summary": "Контроль того, как дочерние элементы внутри Flexbox растягиваются, сжимаются и делят свободное место.",
    "code": ".layout {\n  display: flex;\n  gap: 16px;\n}\n\n.sidebar {\n  flex: 0 0 260px; /* Не растягивать, не сжимать, фиксированная база 260px */\n}\n\n.content {\n  flex: 1 1 0%;    /* Занять всё оставшееся свободное место */\n  min-width: 0;    /* Важно: позволяет тексту и коду внутри сжиматься без переполнения! */\n}",
    "example": ".card-footer {\n  margin-top: auto; /* Прижимает футер карточки к самому низу флекс-колонки */\n}",
    "points": [
      "Сокращение flex: 1 эквивалентно flex: 1 1 0% — элемент забирает свободное пространство пропорционально остальным.",
      "У флекс-элементов по умолчанию стоит min-width: auto, из-за чего длинный текст или <pre> внутри флекса может раздуть колонку. Добавление min-width: 0 решает эту проблему!",
      "margin-left: auto или margin-top: auto внутри флекс-контейнера работает как пружина, отталкивая элемент в самый край."
    ],
    "tags": [
      "CSS",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex",
      "min-width",
      "align-self",
      "order"
    ],
    "when": "При верстке сайдбаров, карточек одинаковой высоты и шапок с прижатыми к краю кнопками.",
    "alternatives": "Для жёстких двумерных сеток, где важна одинаковая ширина колонок в разных строках, используй CSS Grid.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/flex"
  },
  {
    "lang": "css",
    "id": "css-grid-areas",
    "title": "CSS: именованные области сетки (grid-template-areas)",
    "summary": "Наглядное проектирование каркаса страницы в виде текстовой ASCII-карты прямо в CSS-коде.",
    "code": ".app-shell {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  grid-template-rows: 56px 1fr auto;\n  grid-template-areas:\n    \"header  header\"\n    \"sidebar main\"\n    \"sidebar footer\";\n  min-height: 100vh;\n}\n\n.app-header  { grid-area: header; }\n.app-sidebar { grid-area: sidebar; }\n.app-main    { grid-area: main; }\n.app-footer  { grid-area: footer; }",
    "example": "@media (max-width: 768px) {\n  .app-shell {\n    grid-template-columns: 1fr;\n    grid-template-areas: \"header\" \"main\" \"sidebar\" \"footer\";\n  }\n}",
    "points": [
      "Каждая строка в кавычках внутри grid-template-areas представляет ряд сетки, а каждое слово — ячейку.",
      "Точка \".\" внутри строки обозначает пустую ячейку сетки.",
      "На мобильных экранах весь каркас страницы перестраивается простым переопределением grid-template-areas в @media без изменения HTML!"
    ],
    "tags": [
      "CSS",
      "grid-template-areas",
      "grid-area",
      "grid",
      "каркас",
      "шаблон",
      "layout",
      "сетка"
    ],
    "when": "Для общих лейаутов приложения (шапка + сайдбар + контент + подвал) и сложных дашбордов.",
    "alternatives": "Для однотипных карточек в каталоге удобнее использовать repeat(auto-fill, minmax(260px, 1fr)).",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-areas"
  },
  {
    "lang": "css",
    "id": "css-subgrid",
    "title": "CSS: наследование сетки родителя (grid-template-rows: subgrid)",
    "summary": "Идеальное выравнивание заголовков, текста и кнопок внутри соседних карточек по единым горизонтальным линиям.",
    "code": ".cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 20px;\n}\n\n.card {\n  display: grid;\n  grid-row: span 3;               /* Карточка занимает 3 дорожки родителя */\n  grid-template-rows: subgrid;    /* Внутренние ряды синхронизируются с соседями! */\n  gap: 12px;\n}",
    "example": "/* Заголовки, описания и кнопки всех карточек в ряду встанут строго на одном уровне */",
    "points": [
      "Обычный CSS Grid выравнивает только внешние рамки карточек, но если в одной карточке заголовок в 3 строки, кнопка под ним съезжает.",
      "subgrid позволяет дочерним элементам карточки (заголовку, тексту, футеру) выстраиваться по общей сетке родителя.",
      "Поддерживается во всех современных браузерах (Chrome, Edge, Firefox, Safari)."
    ],
    "tags": [
      "CSS",
      "subgrid",
      "grid",
      "карточки",
      "выравнивание",
      "сетка",
      "grid-row"
    ],
    "when": "В витринах товаров, тарифных планах и списках статей, где карточки должны иметь идеально ровные внутренние блоки.",
    "alternatives": "Флекс-карточка с margin-top: auto выравнивает только нижнюю кнопку, но не середину карточки.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid"
  },
  {
    "lang": "css",
    "id": "css-positioning",
    "title": "CSS: позиционирование (relative, absolute, fixed, sticky и inset)",
    "summary": "Управление положением элементов вне стандартного потока: липкие шапки, бейджи, оверлеи и модальные окна.",
    "code": ".card {\n  position: relative; /* Точка отсчёта для абсолютных элементов внутри */\n}\n\n.card-badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n\n.overlay {\n  position: fixed;\n  inset: 0; /* Заменяет top: 0; right: 0; bottom: 0; left: 0 */\n  z-index: 100;\n}",
    "example": ".sticky-header {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}",
    "points": [
      "position: absolute позиционируется относительно ближайшего предка с position, отличным от static (обычно родителю задают position: relative).",
      "position: sticky ведёт себя как обычный блок, пока при скролле не достигнет порога (например, top: 16px), после чего «прилипает».",
      "Важно: position: sticky перестаёт работать, если у любого из родителей задан overflow: hidden или overflow: auto!"
    ],
    "tags": [
      "CSS",
      "position",
      "relative",
      "absolute",
      "fixed",
      "sticky",
      "inset",
      "z-index",
      "позиционирование"
    ],
    "when": "Для липких шапок и оглавлений (sticky), бейджей и кнопок закрытия (absolute), полноэкранных подложек (fixed).",
    "alternatives": "Для наложения текста поверх картинки без absolute можно поместить оба элемента в одну ячейку CSS Grid (grid-area: 1 / 1).",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/position"
  },
  {
    "lang": "css",
    "id": "css-selectors-is-where-not",
    "title": "CSS: функциональные селекторы :is(), :where() и :not()",
    "summary": "Сокращение длинных цепочек селекторов, управление специфичностью и исключение элементов по условию.",
    "code": "/* Группировка без дублирования префикса */\n.article :is(h1, h2, h3) {\n  line-height: 1.25;\n  color: var(--text);\n}\n\n/* Нулевая специфичность — легко переопределить ниже */\n:where(ul, ol) {\n  margin: 0;\n  padding-left: 20px;\n}\n\n/* Все кнопки, кроме заблокированных и активных */\n.btn:not(:disabled, .active):hover {\n  border-color: var(--accent);\n}",
    "example": ".nav-item:not(:last-child) {\n  border-bottom: 1px solid var(--line);\n}",
    "points": [
      ":is() принимает список селекторов и берёт специфичность самого «тяжёлого» из них.",
      ":where() работает идентично :is(), но его специфичность ВСЕГДА равна нулю (0,0,0) — идеален для базовых CSS-сбросов и библиотек.",
      "Современный :not() поддерживает перечисление нескольких селекторов через запятую: :not(.primary, .danger)."
    ],
    "tags": [
      "CSS",
      "is",
      "where",
      "not",
      "селекторы",
      "специфичность",
      "псевдоклассы"
    ],
    "when": "При стилизации типографики внутри статей, написании UI-китов и исключении крайних элементов.",
    "alternatives": "Перечисление .article h1, .article h2, .article h3 вручную раздувает CSS-код.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:is"
  },
  {
    "lang": "css",
    "id": "css-nth-child",
    "title": "CSS: структурные псевдоклассы :nth-child(), :first-child, :empty",
    "summary": "Выборка чётных/нечётных строк таблицы, каждого N-го элемента сетки и пустых контейнеров.",
    "code": "/* Зебра для строк таблицы (каждая чётная строка) */\ntbody tr:nth-child(even) {\n  background: rgba(255, 255, 255, 0.03);\n}\n\n/* Первые 3 элемента списка */\n.top-list li:nth-child(-n + 3) {\n  font-weight: 700;\n}\n\n/* Скрыть блок уведомлений, если внутри него нет элементов */\n.alerts-container:empty {\n  display: none;\n}",
    "example": "li:nth-child(3n + 1) { /* 1-й, 4-й, 7-й... элемент */ }",
    "points": [
      "Формула An + B позволяет выбирать любые последовательности: odd (нечётные), even (чётные), 3n (каждый третий), n + 4 (все начиная с четвёртого).",
      "Современный синтаксис :nth-child(even of .visible) считает только элементы, подходящие под фильтр .visible!",
      ":empty срабатывает только если внутри тега нет вообще ничего (даже пробелов и переносов строк)."
    ],
    "tags": [
      "CSS",
      "nth-child",
      "first-child",
      "last-child",
      "empty",
      "even",
      "odd",
      "зебра",
      "селекторы"
    ],
    "when": "Для чередования фона строк таблиц, выделения топ-3 позиций и скрытия пустых оберток.",
    "alternatives": "Для отступов между элементами используй свойство gap во флексах и гридах вместо :not(:last-child).",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:nth-child"
  },
  {
    "lang": "css",
    "id": "css-focus-visible",
    "title": "CSS: состояния интерактивности (:hover, :focus-visible, :focus-within)",
    "summary": "Доступная подсветка фокуса только при навигации с клавиатуры и реакция контейнера на фокус внутри него.",
    "code": "/* Показываем чёткое кольцо фокуса только при нажатии Tab (но не при клике мышью) */\n:focus-visible {\n  outline: 2px solid #38bdf8;\n  outline-offset: 2px;\n}\n\n/* Подсвечиваем всю рамку поиска, когда курсор стоит внутри <input> */\n.search-box:focus-within {\n  border-color: #38bdf8;\n  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);\n}",
    "example": "@media (hover: hover) {\n  .card:hover { transform: translateY(-2px); }\n}",
    "points": [
      "Никогда не пиши outline: none без замены на :focus-visible — иначе пользователи с клавиатурой потеряют видимость курсора.",
      ":focus-visible умно отличает клик мышкой от навигации клавишей Tab.",
      ":focus-within срабатывает на родителе, когда любой дочерний input или button внутри него получил фокус."
    ],
    "tags": [
      "CSS",
      "focus-visible",
      "focus-within",
      "hover",
      "active",
      "outline",
      "фокус",
      "доступность"
    ],
    "when": "Для всех кнопок, ссылок, инпутов и составных полей поиска.",
    "alternatives": "Обычный :focus оставляет рамку даже после клика мышью по кнопке.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:focus-visible"
  },
  {
    "lang": "css",
    "id": "css-pseudo-elements",
    "title": "CSS: псевдоэлементы ::before, ::after, ::placeholder, ::selection",
    "summary": "Декоративные элементы без лишней разметки, стилизация маркеров списков, плейсхолдеров и выделения текста.",
    "code": ".external-link::after {\n  content: \" ↗\";\n  font-size: 0.85em;\n  opacity: 0.7;\n}\n\n::selection {\n  background: rgba(56, 189, 248, 0.25);\n  color: #ffffff;\n}\n\nli::marker {\n  color: #38bdf8;\n}",
    "example": ".tooltip::before {\n  content: attr(data-tip);\n}",
    "points": [
      "Псевдоэлементы ::before и ::after не существуют без свойства content (даже для пустой фигуры обязательно пиши content: \"\").",
      "::marker позволяет напрямую задать цвет и шрифт буллитам <ul> и цифрам <ol> без сброса list-style.",
      "::backdrop стилизует затемнённый фон за открытым модальным окном <dialog> или поповером."
    ],
    "tags": [
      "CSS",
      "before",
      "after",
      "placeholder",
      "selection",
      "marker",
      "backdrop",
      "псевдоэлементы"
    ],
    "when": "Для декоративных стрелок, бейджей, оверлеев, буллитов списка и кастомного выделения текста.",
    "alternatives": "Не помещай в content важный смысловой текст — он не индексируется и не выделяется мышью.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-elements"
  },
  {
    "lang": "css",
    "id": "css-viewport-units",
    "title": "CSS: современные единицы измерения (rem, em, dvh, svh, ch)",
    "summary": "Правильный выбор единиц для шрифтов, отступов, длины строки чтения и мобильных экранов с адресной строкой.",
    "code": ".hero-fullscreen {\n  min-height: 100dvh; /* Подстраивается под динамическую адресную строку мобильного браузера */\n}\n\n.article-body {\n  font-size: 1rem;    /* 16px от корня html */\n  max-width: 65ch;    /* Оптимальная длина строки ~65 символов для комфортного чтения */\n}",
    "example": ":root { font-size: 16px; } /* 1rem = 16px, 1.5rem = 24px */",
    "points": [
      "rem зависит от размера шрифта корневого тега <html> и уважает настройки масштаба шрифта в браузере пользователя.",
      "100vh на мобильных телефонах часто обрезает нижнюю кнопку из-за плавающей адресной строки браузера. Используй 100dvh (dynamic viewport height) или 100svh!",
      "Единица ch равна ширине символа \"0\" текущего шрифта — идеальна для ограничения ширины текстовых абзацев (60ch–72ch)."
    ],
    "tags": [
      "CSS",
      "rem",
      "em",
      "vh",
      "dvh",
      "svh",
      "vw",
      "ch",
      "единицы измерения",
      "мобильная верстка"
    ],
    "when": "Используй rem для шрифтов, px для тонких рамок, ch для ширины текста и dvh для полноэкранных секций.",
    "alternatives": "Жёсткие px на шрифтах мешают слабовидящим пользователям увеличить масштаб текста в настройках ОС.",
    "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units"
  },
  {
    "lang": "css",
    "id": "css-modern-colors",
    "title": "CSS: современные цвета (oklch, color-mix, light-dark, currentColor)",
    "summary": "Перцептивно равномерное цветовое пространство OKLCH и динамическое смешивание оттенков прямо в CSS.",
    "code": ":root {\n  color-scheme: light dark;\n  --brand: oklch(72% 0.16 230);\n  /* Автоматически меняет цвет в зависимости от светлой/тёмной темы */\n  --surface: light-dark(#ffffff, #0e1320);\n}\n\n.badge-soft {\n  /* Смешиваем акцентный цвет с прозрачностью без дублирования RGB-переменных */\n  background: color-mix(in srgb, var(--brand) 15%, transparent);\n  border: 1px solid color-mix(in srgb, var(--brand) 35%, transparent);\n}",
    "example": "svg {\n  fill: currentColor; /* Иконка автоматически наследует цвет текста кнопки */\n}",
    "points": [
      "color-mix(in srgb, var(--accent) 20%, transparent) позволяет создавать полупрозрачные версии любой CSS-переменной на лету!",
      "OKLCH гарантирует одинаковую воспринимаемую глазом яркость при смене оттенка (Hue), в отличие от HSL.",
      "Ключевое слово currentColor передаёт текущий color текста в border, box-shadow или SVG-иконку."
    ],
    "tags": [
      "CSS",
      "oklch",
      "color-mix",
      "light-dark",
      "currentColor",
      "hsl",
      "rgb",
      "цвет",
      "палитра"
    ],
    "when": "При построении дизайн-систем, тем оформления и полупрозрачных плашек/ховеров.",
    "alternatives": "Хранение отдельных переменных --accent-rgb: 56, 189, 248 для rgba() больше не требуется благодаря color-mix().",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix"
  },
  {
    "lang": "css",
    "id": "css-gradients",
    "title": "CSS: градиенты (linear-gradient, radial-gradient, conic-gradient)",
    "summary": "Плавные цветовые переходы, фоновые свечения, круговые диаграммы и градиентный текст.",
    "code": "/* Линейный градиент под углом 135 градусов */\n.hero-banner {\n  background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%);\n}\n\n/* Мягкое радиальное свечение на фоне */\n.glow-bg {\n  background: radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.18), transparent 70%);\n}\n\n/* Градиентный текст */\n.gradient-title {\n  background: linear-gradient(90deg, #38bdf8, #818cf8);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}",
    "example": ".pie-chart {\n  background: conic-gradient(#38bdf8 0% 65%, #1e293b 65% 100%);\n  border-radius: 50%;\n}",
    "points": [
      "Градиенты в CSS являются фоновыми изображениями, поэтому задаются через background или background-image, а не background-color.",
      "Для более сочных переходов без серой «грязи» посередине указывай интерполяцию: linear-gradient(in oklch 90deg, ...).",
      "conic-gradient позволяет сверстать круговую диаграмму или прогресс-кольцо на чистом CSS."
    ],
    "tags": [
      "CSS",
      "linear-gradient",
      "radial-gradient",
      "conic-gradient",
      "background-clip",
      "градиент",
      "свечение"
    ],
    "when": "Для акцентных кнопок, фоновых подсветок, круговых графиков и заголовков.",
    "alternatives": "Не используй кричащие радужные градиенты на обычных карточках текста — это ухудшает читаемость.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/gradient"
  },
  {
    "lang": "css",
    "id": "css-shadows-glass",
    "title": "CSS: тени (box-shadow, filter: drop-shadow) и матовое стекло (backdrop-filter)",
    "summary": "Многослойные мягкие тени для глубины интерфейса, контурные тени для PNG/SVG и эффект размытия фона под панелью.",
    "code": "/* Навигационная панель с эффектом матового стекла */\n.glass-navbar {\n  background: rgba(14, 19, 32, 0.78);\n  backdrop-filter: blur(12px) saturate(160%);\n  -webkit-backdrop-filter: blur(12px) saturate(160%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n\n/* Двухслойная реалистичная тень карточки */\n.elevated-card {\n  box-shadow:\n    0 2px 4px rgba(0, 0, 0, 0.25),\n    0 12px 28px -4px rgba(0, 0, 0, 0.45);\n}",
    "example": ".transparent-icon {\n  filter: drop-shadow(0 4px 8px rgba(56, 189, 248, 0.4));\n}",
    "points": [
      "box-shadow отбрасывает тень от прямоугольной рамки блока, а filter: drop-shadow() повторяет точный контур прозрачной PNG-картинки или SVG-иконки!",
      "Для работы backdrop-filter: blur() собственный background элемента обязательно должен быть полупрозрачным (например, rgba с alpha < 0.85).",
      "Отрицательный четвёртый параметр (spread-radius, например -4px) у box-shadow делает тень аккуратной и собранной под элементом."
    ],
    "tags": [
      "CSS",
      "box-shadow",
      "drop-shadow",
      "backdrop-filter",
      "blur",
      "glassmorphism",
      "тень",
      "размытие",
      "стекло"
    ],
    "when": "Для липких шапок, модальных окон, выпадающих меню и приподнятых карточек.",
    "alternatives": "В тёмной теме глубокие чёрные тени почти не видны — обязательно дополняй карточку тонкой светлой рамкой border: 1px solid rgba(255,255,255,0.08).",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/backdrop-filter"
  },
  {
    "lang": "css",
    "id": "css-transforms",
    "title": "CSS: 2D и 3D трансформации (translate, scale, rotate, perspective)",
    "summary": "Перемещение, масштабирование и вращение элементов на GPU без пересчёта геометрии соседних блоков.",
    "code": ".card-interactive {\n  transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.card-interactive:hover {\n  /* Независимые свойства трансформации в современном CSS */\n  translate: 0 -4px;\n  scale: 1.02;\n}\n\n.icon-spin {\n  rotate: 45deg;\n  transform-origin: center;\n}",
    "example": ".centered-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  translate: -50% -50%;\n}",
    "points": [
      "В современном CSS свойства translate, rotate и scale можно писать отдельно друг от друга, не склеивая их в длинную строку transform!",
      "Трансформации выполняются видеокартой (GPU) на этапе композитинга и не толкают соседние элементы страницы (не вызывают reflow).",
      "Для 3D-эффектов наклона карточек задай родителю perspective: 900px, а элементу rotateX() / rotateY()."
    ],
    "tags": [
      "CSS",
      "transform",
      "translate",
      "scale",
      "rotate",
      "skew",
      "perspective",
      "трансформация",
      "3d"
    ],
    "when": "Для микроанимаций при наведении, плавных выезжающих панелей (drawer) и поворота иконок.",
    "alternatives": "Никогда не анимируй смещение через top/left или margin — это вызывает лаги на слабых устройствах.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/transform"
  },
  {
    "lang": "css",
    "id": "css-transitions",
    "title": "CSS: плавные переходы (transition и кривые cubic-bezier)",
    "summary": "Анимация смены состояний (hover, focus, active) с контролем длительности, задержки и кривой ускорения.",
    "code": ".btn {\n  background: #121827;\n  border-color: rgba(255, 255, 255, 0.1);\n  /* Перечисляем только конкретные свойства, а не transition: all! */\n  transition:\n    background-color 160ms ease,\n    border-color 160ms ease,\n    transform 160ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.btn:hover {\n  background: #161e31;\n  border-color: #38bdf8;\n  transform: translateY(-1px);\n}",
    "example": "@media (prefers-reduced-motion: reduce) {\n  * { transition-duration: 0.01ms !important; }\n}",
    "points": [
      "Избегай антипаттерна transition: all 0.3s — браузер будет пытаться анимировать даже padding и width при ресайзе окна.",
      "Оптимальная длительность отклика для кнопок и ховеров в интерфейсе — от 120ms до 220ms.",
      "Кривая cubic-bezier(0.22, 1, 0.36, 1) (ease-out-quint) даёт мгновенный старт и мягкое торможение в конце."
    ],
    "tags": [
      "CSS",
      "transition",
      "cubic-bezier",
      "ease",
      "анимация",
      "переход",
      "hover"
    ],
    "when": "Для всех интерактивных состояний кнопок, карточек, ссылок и переключателей.",
    "alternatives": "Для многошаговых и бесконечных анимаций (спиннеры, пульсация) используй @keyframes.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/transition"
  },
  {
    "lang": "css",
    "id": "css-keyframes-animation",
    "title": "CSS: покадровые анимации (@keyframes и animation)",
    "summary": "Создание сложных многошаговых, зацикленных и стартовых анимаций появления элементов.",
    "code": "@keyframes pulse-ring {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n  70% {\n    transform: scale(1.15);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1.15);\n    opacity: 0;\n  }\n}\n\n.status-dot::after {\n  animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}",
    "example": ".fade-in {\n  animation: slideUp 300ms ease-out forwards;\n}",
    "points": [
      "Ключевое слово forwards (animation-fill-mode: forwards) фиксирует элемент в финальном состоянии (100%) после окончания анимации.",
      "Для высокой кадровой частоты (60–120 FPS) анимируй внутри @keyframes только transform и opacity.",
      "Свойство animation-play-state: paused позволяет поставить анимацию на паузу при наведении курсора."
    ],
    "tags": [
      "CSS",
      "keyframes",
      "animation",
      "infinite",
      "forwards",
      "анимация",
      "пульсация",
      "спиннер"
    ],
    "when": "Для скелетонов загрузки, спиннеров, индикаторов статуса и анимации появления модальных окон.",
    "alternatives": "Для простых переходов из точки А в точку Б при наведении достаточно свойства transition.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/@keyframes"
  },
  {
    "lang": "css",
    "id": "css-typography-truncation",
    "title": "CSS: типографика, обрезка строк (line-clamp) и text-wrap: balance",
    "summary": "Красивая балансировка заголовков, обрезка длинного текста троеточием на 1 или несколько строк и табулярные цифры.",
    "code": "/* Автоматический баланс длины строк в заголовках */\nh1, h2, h3 {\n  text-wrap: balance;\n}\n\n/* Обрезка описания карточки ровно на 3 строках с троеточием */\n.card-excerpt {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n/* Выравнивание ширины цифр в таймерах и таблицах цен */\n.price-num {\n  font-variant-numeric: tabular-nums;\n}",
    "example": ".single-line-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
    "points": [
      "text-wrap: balance равномерно распределяет слова по строкам заголовка, избавляя от одинокого «висячего» слова на последней строке!",
      "Для обычных абзацев текста используй text-wrap: pretty.",
      "font-variant-numeric: tabular-nums делает все цифры одинаковой ширины, чтобы счётчики и колонки цен не дрожали при смене цифр."
    ],
    "tags": [
      "CSS",
      "line-clamp",
      "text-wrap",
      "balance",
      "ellipsis",
      "tabular-nums",
      "типографика",
      "обрезка текста"
    ],
    "when": "В карточках товаров и статей (line-clamp), заголовках секций (balance) и финансовых таблицах (tabular-nums).",
    "alternatives": "Обрезка текста по числу символов в JS работает хуже, так как не учитывает реальную ширину окна.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp"
  },
  {
    "lang": "css",
    "id": "css-aspect-ratio-object-fit",
    "title": "CSS: пропорции медиа (aspect-ratio и object-fit: cover)",
    "summary": "Железная фиксация соотношения сторон для карточек, видео и аватаров без искажения пропорций картинок.",
    "code": ".video-frame {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  border-radius: 8px;\n}\n\n.product-thumb {\n  width: 100%;\n  aspect-ratio: 4 / 3;\n  object-fit: cover;      /* Заполняет рамку без сплющивания, обрезая лишние края */\n  object-position: center;\n}",
    "example": ".avatar {\n  width: 48px;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 50%;\n}",
    "points": [
      "aspect-ratio: 16 / 9 автоматически вычисляет высоту блока от его текущей ширины — старый хак с padding-top: 56.25% больше не нужен!",
      "object-fit: cover работает для <img> и <video> точно так же, как background-size: cover для фонов.",
      "object-fit: contain вписывает картинку целиком внутри рамки (удобно для логотипов брендов и иконок)."
    ],
    "tags": [
      "CSS",
      "aspect-ratio",
      "object-fit",
      "cover",
      "contain",
      "пропорции",
      "картинки",
      "видео"
    ],
    "when": "Для всех превью статей, фотографий товаров, аватаров пользователей и видеоплееров.",
    "alternatives": "Задание фиксированных width и height без object-fit: cover сплющит или растянет загруженное пользователем фото.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/aspect-ratio"
  },
  {
    "lang": "css",
    "id": "css-scroll-snap",
    "title": "CSS: плавная прокрутка, карусели (scroll-snap) и overscroll-behavior",
    "summary": "Нативные тач-карусели с магнитной фиксацией слайдов и отступы при прокрутке к якорям под фиксированной шапкой.",
    "code": "html {\n  scroll-behavior: smooth;\n  scroll-padding-top: 72px; /* Чтобы фиксированная шапка не перекрывала заголовок при клике по якорю! */\n}\n\n.carousel {\n  display: flex;\n  gap: 16px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  overscroll-behavior-x: contain;\n}\n\n.slide {\n  flex: 0 0 280px;\n  scroll-snap-align: start;\n}",
    "example": ".modal-body {\n  overscroll-behavior: contain; /* Скролл внутри модалки не прокручивает фон под ней */\n}",
    "points": [
      "scroll-padding-top на теге <html> решает вечную проблему, когда переход по якорю #section прячет заголовок под sticky-шапкой.",
      "scroll-snap-type: x mandatory создаёт отзывчивый горизонтальный слайдер с инерцией на телефонах без единой строчки JS.",
      "overscroll-behavior: contain запрещает прокрутку страницы на фоне, когда пользователь докрутил до конца меню или модального окна."
    ],
    "tags": [
      "CSS",
      "scroll-snap",
      "scroll-behavior",
      "scroll-padding",
      "overscroll-behavior",
      "скролл",
      "карусель",
      "слайдер"
    ],
    "when": "Для горизонтальных лент карточек, галерей, якорных меню и модальных окон со скроллом.",
    "alternatives": "Тяжёлые JS-слайдеры (Swiper) нужны только если требуется автопрокрутка или бесконечное кольцо.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/scroll-snap-type"
  },
  {
    "lang": "css",
    "id": "css-filters-clip-path",
    "title": "CSS: графические фильтры (filter) и фигурная обрезка (clip-path)",
    "summary": "Цветокоррекция изображений (ч/б, яркость, контраст, размытие) и вырезание многоугольных геометрических форм.",
    "code": "/* Чёрно-белые логотипы партнёров, становящиеся цветными при наведении */\n.partner-logo {\n  filter: grayscale(100%) opacity(0.6);\n  transition: filter 200ms ease;\n}\n.partner-logo:hover {\n  filter: grayscale(0%) opacity(1);\n}\n\n/* Скошенный угол карточки или кнопки */\n.angled-box {\n  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);\n}",
    "example": "filter: brightness(1.1) contrast(1.05) saturate(1.2);",
    "points": [
      "В свойстве filter можно комбинировать через пробел: blur(), brightness(), contrast(), grayscale(), hue-rotate(), invert(), saturate(), sepia().",
      "clip-path обрезает элемент по кругу circle(), эллипсу ellipse(), прямоугольнику со скруглением inset() или произвольному многоугольнику polygon().",
      "Обрати внимание: обычный box-shadow на элементе с clip-path тоже обрежется. Чтобы тень шла по контуру фигуры, задай filter: drop-shadow() её родителю!"
    ],
    "tags": [
      "CSS",
      "filter",
      "clip-path",
      "grayscale",
      "brightness",
      "contrast",
      "polygon",
      "фильтр",
      "маска"
    ],
    "when": "Для эффектов наведения на изображения, затемнения фоновых фото и нестандартных геометрических блоков.",
    "alternatives": "Для сложных криволинейных масок со скруглёнными углами используй SVG <clipPath> или mask-image.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/filter"
  },
  {
    "lang": "css",
    "id": "css-nesting-layers",
    "title": "CSS: нативная вложенность (CSS Nesting) и каскадные слои (@layer)",
    "summary": "Вложенная запись селекторов прямо в браузере без препроцессоров Sass/Less и предсказуемый контроль приоритета слоёв.",
    "code": "@layer reset, base, components, utilities;\n\n@layer components {\n  .card {\n    padding: 16px;\n    border: 1px solid var(--line);\n\n    & .card-title {\n      font-weight: 600;\n    }\n\n    &:hover {\n      border-color: var(--accent);\n    }\n\n    @media (max-width: 640px) {\n      padding: 12px;\n    }\n  }\n}",
    "example": "/* Правило из @layer utilities всегда перебьёт @layer base независимо от специфичности селектора */",
    "points": [
      "Нативный CSS Nesting позволяет вкладывать дочерние селекторы, псевдоклассы (&:hover) и даже @media-запросы прямо внутрь селектора компонента!",
      "Директива @layer задаёт жёсткий порядок приоритета слоёв: стили из последнего объявленного слоя всегда побеждают предыдущие.",
      "Это навсегда избавляет от войн специфичности и необходимости писать !important при переопределении сторонних стилей."
    ],
    "tags": [
      "CSS",
      "nesting",
      "layer",
      "каскад",
      "вложенность",
      "архитектура",
      "специфичность"
    ],
    "when": "При организации модульных стилей компонентов и построении архитектуры CSS без сборщиков.",
    "alternatives": "Не делай вложенность глубже 3 уровней, чтобы селекторы оставались читаемыми и быстрыми.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting"
  },
  {
    "lang": "css",
    "id": "css-form-styling-accent",
    "title": "CSS: стилизация форм (accent-color, appearance, resize)",
    "summary": "Быстрая перекраска чекбоксов, радиокнопок и ползунков в фирменный цвет сайта одной строчкой кода.",
    "code": ":root {\n  accent-color: #38bdf8; /* Перекрашивает все checkbox, radio, range и progress! */\n}\n\ntextarea {\n  resize: vertical;      /* Разрешаем тянуть поле только вверх-вниз, чтобы не сломать ширину колонки */\n  min-height: 96px;\n}\n\ninput::placeholder {\n  color: #64748b;\n  opacity: 1;\n}",
    "example": ".custom-checkbox {\n  appearance: none; /* Полный сброс системного вида для отрисовки с нуля */\n}",
    "points": [
      "accent-color мгновенно стилизует нативные элементы форм под бренд, автоматически выбирая контрастный цвет галочки внутри чекбокса.",
      "У <textarea> по умолчанию включён resize: both, из-за чего пользователь может растянуть поле вбок и сломать верстку — всегда ставь resize: vertical.",
      "Если нужен полностью кастомный дизайн чекбокса или свитча (toggle), используй appearance: none и псевдоэлемент ::before."
    ],
    "tags": [
      "CSS",
      "accent-color",
      "appearance",
      "resize",
      "placeholder",
      "чекбокс",
      "формы",
      "ползунок"
    ],
    "when": "В базовых стилях любого проекта для аккуратного вида форм.",
    "alternatives": "Скрытие чекбокса через display: none ломает навигацию с клавиатуры (используй appearance: none).",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color"
  },
  {
    "lang": "javascript",
    "id": "js-variables-types",
    "title": "JS: переменные const и let, области видимости и строгая проверка типов",
    "summary": "Блочная область видимости, неизменяемые ссылки const, примитивные типы и проверка typeof / Array.isArray.",
    "code": "const MAX_RETRIES = 3;\nlet attempts = 0;\n\nconst user = { name: 'Иван', roles: ['admin'] };\nuser.name = 'Алексей'; // Допустимо: меняется свойство внутри объекта, а не сама ссылка\n\nconsole.log(typeof 'hello');         // \"string\"\nconsole.log(typeof 42);              // \"number\"\nconsole.log(Array.isArray(user.roles)); // true",
    "example": "if (value !== null && typeof value === 'object') { /* это объект */ }",
    "points": [
      "По умолчанию всегда используй const. Переходи на let только если значение переменной действительно переприсваивается (счётчики, флаги).",
      "Оператор typeof null из-за исторического бага возвращает \"object\", поэтому на null всегда проверяй явно: val === null.",
      "Всегда используй строгое равенство === и !== вместо нестрогого ==, чтобы избежать скрытого приведения типов (\"0\" == false)."
    ],
    "tags": [
      "JavaScript",
      "const",
      "let",
      "typeof",
      "isArray",
      "переменные",
      "типы данных",
      "область видимости"
    ],
    "when": "Во всём современном JS-коде вместо устаревшего ключевого слова var.",
    "alternatives": "Для полной защиты объекта от изменения его свойств используй Object.freeze(obj).",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const"
  },
  {
    "lang": "javascript",
    "id": "js-functions-arrows",
    "title": "JS: функции, стрелочные функции (=>), параметры по умолчанию и замыкания",
    "summary": "Лаконичный синтаксис стрелочных колбэков, лексический контекст this и сохранение состояния через замыкание.",
    "code": "// Параметры по умолчанию\nfunction greet(name = 'Гость', role = 'user') {\n  return `Привет, ${name} (${role})!`;\n}\n\n// Стрелочная функция с неявным возвратом объекта (в круглых скобках)\nconst toOption = (item) => ({ value: item.id, label: item.title });\n\n// Замыкание: генератор уникальных ID\nfunction createCounter(start = 0) {\n  let count = start;\n  return () => ++count;\n}\nconst nextId = createCounter(100);\nconsole.log(nextId(), nextId()); // 101, 102",
    "example": "items.map(x => x * 2);",
    "points": [
      "Стрелочные функции не имеют собственного this — они берут this из внешней функции, что идеально для обработчиков и таймеров внутри классов.",
      "Чтобы вернуть объектный литерал из короткой стрелочной функции без return, оберни его в круглые скобки: () => ({ id: 1 }).",
      "Замыкание (closure) позволяет внутренней функции помнить и изменять переменные родительской функции даже после её завершения."
    ],
    "tags": [
      "JavaScript",
      "function",
      "arrow",
      "closure",
      "this",
      "стрелочные функции",
      "замыкание",
      "функции"
    ],
    "when": "Стрелочные функции — для колбэков (.map, .filter, addEventListener); обычные function — для методов объекта и конструкторов.",
    "alternatives": "Не используй стрелочную функцию как метод объекта, если внутри неё нужен доступ к this этого объекта.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
  },
  {
    "lang": "javascript",
    "id": "js-destructuring-spread",
    "title": "JS: деструктуризация, операторы Spread (...) и Rest (...args)",
    "summary": "Извлечение свойств из объектов и массивов в одну строку, иммутабельное клонирование и сбор аргументов.",
    "code": "const config = { host: 'localhost', port: 3000, debug: true };\n// Деструктуризация с переименованием и значением по умолчанию\nconst { host, port: serverPort, timeout = 5000 } = config;\n\n// Иммутабельное обновление объекта и слияние массивов через Spread\nconst updatedConfig = { ...config, port: 8080 };\nconst allTags = [...['html', 'css'], 'javascript'];\n\n// Сбор произвольного числа аргументов в массив (Rest)\nconst sumAll = (...nums) => nums.reduce((acc, n) => acc + n, 0);",
    "example": "const [first, second, ...restItems] = [10, 20, 30, 40];",
    "points": [
      "Деструктуризация работает прямо в параметрах функции: function renderCard({ title, price = 0 }) { ... }.",
      "Оператор Spread {...obj} делает поверхностную (shallow) копию первого уровня. Для глубокой копии вложенных объектов используй structuredClone(obj).",
      "Запись [a, b] = [b, a] позволяет поменять значения двух переменных местами без временной переменной."
    ],
    "tags": [
      "JavaScript",
      "destructuring",
      "spread",
      "rest",
      "structuredClone",
      "деструктуризация",
      "копирование"
    ],
    "when": "При распаковке ответов API, настройке опций функций и обновлении состояния без мутации исходных данных.",
    "alternatives": "Ручное обращение data.user.profile.name на каждом шагу загромождает код.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
  },
  {
    "lang": "javascript",
    "id": "js-optional-chaining-nullish",
    "title": "JS: опциональная цепочка (?.) и нулевое слияние (?? и ??=)",
    "summary": "Безопасное чтение глубоко вложенных свойств без ошибки Cannot read properties of undefined и корректные дефолты.",
    "code": "const response = {\n  user: { profile: { city: 'Москва' } },\n  itemsCount: 0\n};\n\n// Безопасное чтение: вернёт undefined вместо падения скрипта\nconst zipCode = response.user?.address?.zip;\nconst firstItem = response.list?.[0];\nresponse.onComplete?.(); // Вызовет функцию только если она существует\n\n// Оператор ?? срабатывает ТОЛЬКО на null и undefined (сохраняя 0 и \"\")!\nconst count = response.itemsCount ?? 10; // 0 (тогда как || вернул бы 10!)",
    "example": "settings.theme ??= 'dark'; /* Присвоит 'dark' только если theme равен null или undefined */",
    "points": [
      "Логическое ИЛИ (val || 10) считает число 0 и пустую строку \"\" ложными (falsy) и затирает их. Оператор ?? заменяет значение ТОЛЬКО если оно null или undefined!",
      "Опциональная цепочка работает для свойств (obj?.prop), индексов массива (arr?.[0]) и вызова методов (obj.method?.()).",
      "Не ставь ?. на каждом шаге бездумно — используй его только там, где поле реально может отсутствовать по логике данных."
    ],
    "tags": [
      "JavaScript",
      "optional chaining",
      "nullish coalescing",
      "?.",
      "??",
      "undefined",
      "null",
      "безопасность"
    ],
    "when": "При работе с JSON-ответами сервера, необязательными колбэками и числовыми параметрами (где 0 — валидное значение).",
    "alternatives": "Длинные проверки if (res && res.user && res.user.address) устарели.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
  },
  {
    "lang": "javascript",
    "id": "js-array-search-sort",
    "title": "JS: поиск и сортировка массивов (find, some, every, includes, toSorted)",
    "summary": "Быстрая проверка условий, поиск элементов и неразрушающая сортировка русских строк и чисел.",
    "code": "const users = [\n  { id: 1, name: 'Яна', active: true, score: 85 },\n  { id: 2, name: 'Борис', active: false, score: 92 },\n  { id: 3, name: 'Анна', active: true, score: 78 }\n];\n\nconst target = users.find(u => u.id === 2);          // Объект Бориса (или undefined)\nconst hasInactive = users.some(u => !u.active);      // true (хотя бы один)\nconst allActive = users.every(u => u.active);        // false (все ли)\n\n// Немутирующая сортировка по русскому алфавиту и по числам\nconst byName = users.toSorted((a, b) => a.name.localeCompare(b.name, 'ru'));\nconst byScore = users.toSorted((a, b) => b.score - a.score);",
    "example": "const lastActive = users.findLast(u => u.active);",
    "points": [
      "Классический .sort() изменяет (мутирует) исходный массив на месте! Новый метод .toSorted() возвращает отсортированную копию, не трогая оригинал.",
      "Для сортировки чисел обязательно передавай компаратор (a, b) => a - b, иначе .sort() отсортирует числа как строки (\"10\" встанет раньше \"2\")!",
      "Для сортировки кириллицы используй a.title.localeCompare(b.title, \"ru\"), чтобы буква «Ё» встала на своё правильное место."
    ],
    "tags": [
      "JavaScript",
      "find",
      "some",
      "every",
      "includes",
      "sort",
      "toSorted",
      "localeCompare",
      "массивы",
      "сортировка"
    ],
    "when": "При фильтрации каталогов, проверке прав доступа и сортировке таблиц.",
    "alternatives": "Если нужно проверить только наличие примитива в массиве, используй arr.includes(val) вместо .some().",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted"
  },
  {
    "lang": "javascript",
    "id": "js-objects-map-set",
    "title": "JS: методы Object (keys, entries, fromEntries, groupBy) и коллекции Map / Set",
    "summary": "Преобразование объектов в массивы пар, группировка по ключу и быстрое удаление дубликатов через Set.",
    "code": "// Удаление дубликатов из массива за один шаг через Set\nconst uniqueTags = [...new Set(['css', 'html', 'css', 'js'])]; // ['css', 'html', 'js']\n\n// Обход ключей и значений объекта\nconst prices = { basic: 500, pro: 1500 };\nconst discounted = Object.fromEntries(\n  Object.entries(prices).map(([plan, price]) => [plan, price * 0.8])\n);\n\n// Нативная группировка массива объектов по полю\nconst tasks = [\n  { title: 'Верстка', status: 'done' },\n  { title: 'API', status: 'todo' }\n];\nconst grouped = Object.groupBy(tasks, task => task.status);",
    "example": "const cache = new Map();\ncache.set('user:1', { name: 'Иван' });",
    "points": [
      "Set хранит только уникальные значения, а проверка наличия set.has(item) работает мгновенно за O(1) даже на 100 000 элементов (в отличие от arr.includes).",
      "Связка Object.entries(obj) -> .map() / .filter() -> Object.fromEntries() позволяет фильтровать и трансформировать объекты так же легко, как массивы.",
      "Статический метод Object.groupBy(items, fn) группирует массив объектов по любому признаку без сложного .reduce()."
    ],
    "tags": [
      "JavaScript",
      "Object.entries",
      "Object.fromEntries",
      "Object.groupBy",
      "Set",
      "Map",
      "уникальные",
      "группировка"
    ],
    "when": "При дедупликации тегов, кэшировании по ключу и группировке списков по категориям или датам.",
    "alternatives": "Проверка Object.hasOwn(obj, \"key\") заменила старый длинный вызов obj.hasOwnProperty(\"key\").",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy"
  },
  {
    "lang": "javascript",
    "id": "js-strings-regexp",
    "title": "JS: методы строк (includes, replaceAll, trim, padStart) и шаблонные строки",
    "summary": "Поиск подстрок, форматирование таймеров нулями, очистка пробелов и безопасная замена всех вхождений.",
    "code": "const rawInput = '  Hello, DevShelf!  ';\nconst clean = rawInput.trim().toLowerCase(); // \"hello, devshelf!\"\n\n// Форматирование минут и секунд с ведущим нулём (05:09)\nconst min = String(5).padStart(2, '0');\nconst sec = String(9).padStart(2, '0');\nconst timerText = `${min}:${sec}`;\n\n// Замена всех вхождений без регулярных выражений\nconst slug = 'Курс по CSS Grid'.toLowerCase().replaceAll(' ', '-');",
    "example": "const isHttps = url.startsWith('https://');",
    "points": [
      "Методы startsWith(), endsWith() и includes() читаются гораздо понятнее старых проверок через indexOf() !== -1.",
      "replaceAll(\"a\", \"b\") заменяет сразу все совпадения в строке (обычный replace(\"a\", \"b\") меняет только первое).",
      "padStart(2, \"0\") незаменим для вывода часов, дат (01.09.2026) и номеров заказов (00042)."
    ],
    "tags": [
      "JavaScript",
      "string",
      "replaceAll",
      "includes",
      "startsWith",
      "padStart",
      "trim",
      "split",
      "строки"
    ],
    "when": "При обработке пользовательского ввода, генерации URL-слагов, поиске и форматировании чисел.",
    "alternatives": "Для сложного поиска по шаблону (например, все email в тексте) используй str.matchAll(/.../g).",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String"
  },
  {
    "lang": "javascript",
    "id": "js-dom-manipulation",
    "title": "JS: работа с DOM (querySelector, closest, classList, createElement)",
    "summary": "Поиск элементов, переключение CSS-классов, безопасное создание узлов и навигация вверх по дереву через closest.",
    "code": "const card = document.querySelector('.card');\n\n// Управление классами\ncard.classList.add('is-visible');\ncard.classList.toggle('is-pinned', isPinnedBoolean);\n\n// Создание и безопасная вставка нового элемента\nconst badge = document.createElement('span');\nbadge.className = 'badge';\nbadge.textContent = 'Новинка'; // Безопасно от XSS!\ncard.prepend(badge);",
    "example": "element.replaceChildren(); /* Мгновенно очищает все дочерние элементы контейнера */",
    "points": [
      "Всегда используй element.textContent вместо innerHTML при выводе любых данных от пользователя, чтобы исключить XSS-инъекции.",
      "Второй аргумент в classList.toggle(\"active\", condition) принудительно включает класс при true и выключает при false.",
      "Современные методы .append(), .prepend(), .before(), .after() и .remove() заменили старые громоздкие parentNode.insertBefore()."
    ],
    "tags": [
      "JavaScript",
      "DOM",
      "querySelector",
      "classList",
      "createElement",
      "textContent",
      "append",
      "closest"
    ],
    "when": "При динамическом обновлении интерфейса, переключении вкладок, модалок и рендеринге списков.",
    "alternatives": "При вставке сотни элементов за раз собирай их в document.createDocumentFragment(), чтобы вызвать всего одну перерисовку.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Element/classList"
  },
  {
    "lang": "javascript",
    "id": "js-promises-combinators",
    "title": "JS: параллельные запросы Promise.all, Promise.allSettled и Promise.race",
    "summary": "Одновременный запуск независимых асинхронных задач для кратного ускорения загрузки данных.",
    "code": "// Запускаем 3 запроса ПАРАЛЛЕЛЬНО, а не по очереди!\nconst [profile, orders, notifications] = await Promise.all([\n  fetch('/api/profile').then(r => r.json()),\n  fetch('/api/orders').then(r => r.json()),\n  fetch('/api/notifications').then(r => r.json())\n]);\n\n// allSettled дождётся всех, даже если один из запросов упадёт с ошибкой\nconst results = await Promise.allSettled([fetch('/api/a'), fetch('/api/b')]);\nconst successful = results.filter(r => r.status === 'fulfilled').map(r => r.value);",
    "example": "const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));",
    "points": [
      "Если писать три await подряд для независимых запросов, время ожидания складывается. Promise.all([...]) выполняет их параллельно за время самого медленного запроса!",
      "Promise.all падает целиком, если хотя бы один промис завершился ошибкой (rejected).",
      "Promise.allSettled никогда не выбрасывает ошибку и возвращает массив объектов со статусами \"fulfilled\" или \"rejected\" для каждого запроса."
    ],
    "tags": [
      "JavaScript",
      "Promise",
      "Promise.all",
      "Promise.allSettled",
      "async",
      "await",
      "параллельно",
      "асинхронность"
    ],
    "when": "При загрузке дашбордов, инициализации страницы из нескольких эндпоинтов и пакетной отправке файлов.",
    "alternatives": "Последовательный await нужен только тогда, когда второй запрос зависит от ID, полученного в первом.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"
  },
  {
    "lang": "javascript",
    "id": "js-abort-controller",
    "title": "JS: отмена запросов и слушателей через AbortController и AbortSignal",
    "summary": "Прерывание зависших fetch-запросов по таймауту или при вводе нового поискового запроса (защита от гонки данных).",
    "code": "let searchController = null;\n\nasync function searchProducts(query) {\n  // Отменяем предыдущий незавершённый запрос, если пользователь продолжает печатать\n  searchController?.abort();\n  searchController = new AbortController();\n\n  try {\n    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {\n      signal: searchController.signal\n    });\n    return await res.json();\n  } catch (err) {\n    if (err.name === 'AbortError') return; // Штатная отмена, игнорируем\n    throw err;\n  }\n}",
    "example": "// Автоматический таймаут запроса через 5 секунд:\nfetch('/api/data', { signal: AbortSignal.timeout(5000) });",
    "points": [
      "Без отмены предыдущего запроса в живом поиске старый медленный ответ может прийти позже нового и перезаписать актуальные результаты (race condition).",
      "Статический метод AbortSignal.timeout(5000) автоматически прерывает зависший запрос через 5 секунд без ручного setTimeout!",
      "Один и тот же signal можно передать и в addEventListener(..., { signal }), чтобы разом отписать десятки обработчиков событий при закрытии компонента."
    ],
    "tags": [
      "JavaScript",
      "AbortController",
      "AbortSignal",
      "timeout",
      "fetch",
      "отмена запроса",
      "race condition"
    ],
    "when": "В живом поиске (autocomplete), при переключении вкладок с загрузкой данных и для задания таймаутов сети.",
    "alternatives": "Игнорирование результата через булев флаг isCancelled не останавливает скачивание трафика браузером.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/AbortController"
  },
  {
    "lang": "javascript",
    "id": "js-debounce-throttle",
    "title": "JS: оптимизация частых событий (Debounce и Throttle)",
    "summary": "Защита от сотен лишних вызовов функций при быстром вводе текста в поиск, ресайзе окна и прокрутке.",
    "code": "// Debounce: ждёт, пока пользователь перестанет печатать в течение delay мс\nfunction debounce(fn, delay = 300) {\n  let timerId;\n  return (...args) => {\n    clearTimeout(timerId);\n    timerId = setTimeout(() => fn(...args), delay);\n  };\n}\n\nconst onSearchInput = debounce((query) => {\n  console.log('Отправляем запрос:', query);\n}, 250);\n\nsearchInput.addEventListener('input', (e) => onSearchInput(e.target.value));",
    "example": "// Throttle: выполняет функцию не чаще одного раза в limit мс",
    "points": [
      "Debounce откладывает вызов до момента тишины (идеален для живого поиска, автосохранения черновика и валидации ввода).",
      "Throttle гарантирует регулярное выполнение не чаще чем раз в N мс (идеален для отслеживания скролла и движения мыши).",
      "Для плавной отрисовки графики при скролле или перетаскивании используй requestAnimationFrame() вместо таймеров."
    ],
    "tags": [
      "JavaScript",
      "debounce",
      "throttle",
      "setTimeout",
      "requestAnimationFrame",
      "оптимизация",
      "поиск"
    ],
    "when": "На всех полях живого поиска, фильтрах каталога и обработчиках resize/scroll.",
    "alternatives": "Для отслеживания появления блока при скролле используй IntersectionObserver вместо scroll + throttle.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Window/setTimeout"
  },
  {
    "lang": "javascript",
    "id": "js-url-search-params",
    "title": "JS: парсинг и сборка URL-адресов (new URL и URLSearchParams)",
    "summary": "Удобное чтение GET-параметров адресной строки, сборка фильтров каталога и безопасное кодирование кириллицы.",
    "code": "// Чтение параметров текущей страницы (?topic=flexbox&page=2)\nconst params = new URLSearchParams(window.location.search);\nconst topic = params.get('topic') ?? 'all';\n\n// Безопасная сборка URL с фильтрами без ручного склеивания \"?\" и \"&\"\nconst apiUrl = new URL('/api/items', window.location.origin);\napiUrl.searchParams.set('category', 'ноутбуки');\napiUrl.searchParams.set('sort', 'price_asc');\n\n// Обновление адресной строки без перезагрузки страницы\nwindow.history.replaceState({}, '', `?${apiUrl.searchParams}`);",
    "example": "const formParams = new URLSearchParams(new FormData(formElement));",
    "points": [
      "URLSearchParams автоматически кодирует пробелы, кириллицу и спецсимволы (&, =, +) — ручной вызов encodeURIComponent не нужен!",
      "Связка с window.history.replaceState() позволяет сохранять выбранные пользователем фильтры и табы прямо в URL, чтобы ссылкой можно было поделиться.",
      "Метод params.getAll(\"tag\") возвращает массив всех значений для повторяющихся параметров (?tag=js&tag=css)."
    ],
    "tags": [
      "JavaScript",
      "URL",
      "URLSearchParams",
      "history",
      "replaceState",
      "query",
      "get-параметры",
      "адрес"
    ],
    "when": "При синхронизации фильтров, поиска и пагинации с адресной строкой браузера.",
    "alternatives": "Никогда не парси window.location.search регулярками или через .split(\"&\").",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/URLSearchParams"
  },
  {
    "lang": "javascript",
    "id": "js-intl-formatting",
    "title": "JS: локализация валют, дат и склонение существительных (Intl API)",
    "summary": "Встроенное в браузер форматирование цен в рублях, читаемых дат («15 марта 2026») и относительного времени («2 дня назад»).",
    "code": "// Форматирование цены в рублях: \"14 990 ₽\"\nconst rubFormatter = new Intl.NumberFormat('ru-RU', {\n  style: 'currency',\n  currency: 'RUB',\n  maximumFractionDigits: 0\n});\nconsole.log(rubFormatter.format(14990));\n\n// Форматирование даты: \"15 марта 2026 г., 14:30\"\nconst dateFormatter = new Intl.DateTimeFormat('ru-RU', {\n  dateStyle: 'long',\n  timeStyle: 'short'\n});\nconsole.log(dateFormatter.format(new Date()));",
    "example": "const pr = new Intl.PluralRules('ru-RU'); /* Выбирает форму: one (1 товар), few (2 товара), many (5 товаров) */",
    "points": [
      "Встроенный объект Intl полностью заменяет тяжёлые библиотеки вроде Moment.js для вывода дат, чисел и валют!",
      "Создавай экземпляр new Intl.NumberFormat(...) один раз вне цикла и переиспользуй метод .format() для максимальной скорости.",
      "Intl.RelativeTimeFormat(\"ru\", { numeric: \"auto\" }) умеет красиво форматировать строки вроде «вчера», «через 3 часа», «5 дней назад»."
    ],
    "tags": [
      "JavaScript",
      "Intl",
      "NumberFormat",
      "DateTimeFormat",
      "PluralRules",
      "валюта",
      "рубли",
      "дата",
      "склонение"
    ],
    "when": "В интернет-магазинах для вывода цен, в блогах и чатах для дат и счётчиков («5 комментариев»).",
    "alternatives": "Ручное склеивание date.getDate() + \".\" + (date.getMonth() + 1) неудобно и не учитывает часовые пояса.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl"
  },
  {
    "lang": "javascript",
    "id": "js-clipboard-share",
    "title": "JS: буфер обмена (navigator.clipboard) и системное меню «Поделиться»",
    "summary": "Копирование кода или промокода в один клик с визуальным откликом и вызов нативного окна отправки ссылки.",
    "code": "async function copyCode(text, buttonEl) {\n  try {\n    await navigator.clipboard.writeText(text);\n    const original = buttonEl.textContent;\n    buttonEl.textContent = '✓ Скопировано';\n    setTimeout(() => { buttonEl.textContent = original; }, 1800);\n  } catch (err) {\n    console.error('Не удалось скопировать:', err);\n  }\n}",
    "example": "if (navigator.share) {\n  await navigator.share({ title: 'DevShelf', url: location.href });\n}",
    "points": [
      "Clipboard API работает асинхронно (возвращает Promise) и требует безопасного контекста (HTTPS или localhost) и клика пользователя.",
      "Всегда меняй текст или иконку кнопки на «✓ Скопировано» на 1.5–2 секунды, чтобы пользователь видел мгновенное подтверждение.",
      "navigator.share() на смартфонах открывает родную системную шторку выбора мессенджера (Telegram, WhatsApp)."
    ],
    "tags": [
      "JavaScript",
      "clipboard",
      "writeText",
      "share",
      "копировать",
      "буфер обмена",
      "поделиться"
    ],
    "when": "Для кнопок копирования сниппетов кода, промокодов, реферальных ссылок и репоста статей.",
    "alternatives": "Устаревший document.execCommand(\"copy\") оставлен только как крайний фолбэк для старых HTTP-страниц.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Clipboard_API"
  },
  {
    "lang": "javascript",
    "id": "js-formdata-file-reader",
    "title": "JS: сбор данных формы через FormData и превью файлов (URL.createObjectURL)",
    "summary": "Чтение всех полей формы в один объект без ручного поиска каждого инпута и мгновенный показ выбранного аватара.",
    "code": "const form = document.querySelector('#profile-form');\n\nform.addEventListener('submit', async (e) => {\n  e.preventDefault();\n  const formData = new FormData(form);\n\n  // Превращаем в обычный JS-объект (если нужно отправить JSON)\n  const payload = Object.fromEntries(formData.entries());\n  console.log(payload);\n});\n\n// Мгновенное превью выбранной картинки до отправки на сервер\nfileInput.addEventListener('change', (e) => {\n  const file = e.target.files?.[0];\n  if (file) avatarImg.src = URL.createObjectURL(file);\n});",
    "example": "await fetch('/api/upload', { method: 'POST', body: new FormData(form) });",
    "points": [
      "new FormData(form) автоматически собирает значения всех <input>, <select> и <textarea>, у которых задан атрибут name!",
      "При отправке FormData напрямую в body метода fetch() НЕ нужно вручную ставить заголовок Content-Type — браузер сам выставит multipart/form-data с правильным boundary.",
      "URL.createObjectURL(file) работает мгновенно и не тратит память на кодирование файла в длинную строку Base64 (в отличие от FileReader.readAsDataURL)."
    ],
    "tags": [
      "JavaScript",
      "FormData",
      "createObjectURL",
      "file",
      "upload",
      "форма",
      "загрузка файла",
      "превью"
    ],
    "when": "При обработке любых форм, загрузке аватаров, документов и отправке данных на сервер.",
    "alternatives": "Ручной сбор document.getElementById() для 10 полей формы создаёт лишний дублирующийся код.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/FormData"
  },
  {
    "lang": "php",
    "id": "php-strict-types-variables",
    "title": "PHP 8: строгая типизация declare(strict_types=1), типы и оператор ??",
    "summary": "Включение строгой проверки типов аргументов и возвращаемых значений, union-типы и безопасная работа с null.",
    "code": "<?php\ndeclare(strict_types=1);\n\nfunction calculateTotal(float $price, int $qty = 1, ?float $discount = null): float {\n    $subtotal = $price * $qty;\n    return $discount !== null ? $subtotal * (1 - $discount) : $subtotal;\n}\n\n// Оператор объединения с null (??) и присваивания (??=)\n$page = (int) ($_GET['page'] ?? 1);\n$config['timeout'] ??= 30;",
    "example": "function parseId(int|string $id): string { return (string) $id; }",
    "points": [
      "Директива declare(strict_types=1); в первой строке файла запрещает PHP молча превращать строку \"42abc\" в число 42 и спасает от скрытых багов.",
      "Знак вопроса перед типом (?float) означает, что параметр или результат может быть либо float, либо null.",
      "В PHP 8 поддерживаются объединённые типы (int|string) и тип возврата void / never."
    ],
    "tags": [
      "PHP",
      "strict_types",
      "types",
      "null",
      "переменные",
      "типизация",
      "функции"
    ],
    "when": "Ставь declare(strict_types=1); в начале каждого нового PHP-файла проекта.",
    "alternatives": "Без указания типов в сигнатурах функций сложнее искать ошибки при рефакторинге.",
    "url": "https://www.php.net/manual/ru/language.types.declarations.php"
  },
  {
    "lang": "php",
    "id": "php-strings-heredoc",
    "title": "PHP 8: функции строк (str_contains, str_starts_with, mb_strlen, sprintf)",
    "summary": "Современная проверка подстрок в PHP 8, корректная работа с кириллицей в UTF-8 через mb_* и мультистроки.",
    "code": "<?php\ndeclare(strict_types=1);\n\n$title = 'Руководство по PHP 8.3';\n\n// Корректная длина кириллической строки в UTF-8\n$length = mb_strlen($title, 'UTF-8'); // 22 (обычный strlen вернул бы 39 байт!)\n$upper  = mb_strtoupper($title, 'UTF-8');\n\n// Нативные функции проверки подстрок из PHP 8\nif (str_contains($title, 'PHP') && str_starts_with($title, 'Руководство')) {\n    echo sprintf('Найдена статья \"%s\" (%d симв.)', $title, $length);\n}",
    "example": "$parts = explode(',', 'html,css,php');\n$joined = implode(' · ', $parts);",
    "points": [
      "В UTF-8 каждая русская буква занимает 2 байта, поэтому для подсчёта символов, обрезки и смены регистра ВСЕГДА используй функции с префиксом mb_ (mb_strlen, mb_substr, mb_strtolower)!",
      "Функции PHP 8 str_contains(), str_starts_with() и str_ends_with() навсегда избавили от путаницы с strpos() !== false.",
      "Функция trim($str) удаляет пробелы и переносы строк по краям пользовательского ввода."
    ],
    "tags": [
      "PHP",
      "str_contains",
      "str_starts_with",
      "mb_strlen",
      "mb_substr",
      "explode",
      "implode",
      "строки",
      "utf-8"
    ],
    "when": "При валидации текста на русском языке, проверке URL/префиксов и форматировании сообщений.",
    "alternatives": "Никогда не используй обычный substr() на русском тексте — он разрежет двухбайтовый символ пополам и выдаст «кракозябры» ().",
    "url": "https://www.php.net/manual/ru/function.str-contains.php"
  },
  {
    "lang": "php",
    "id": "php-arrays-functions",
    "title": "PHP 8: работа с массивами (array_map, array_filter, array_column, in_array)",
    "summary": "Трансформация, фильтрация ассоциативных массивов, быстрая индексация по ID и строгий поиск значений.",
    "code": "<?php\ndeclare(strict_types=1);\n\n$users = [\n    ['id' => 10, 'name' => 'Анна', 'role' => 'admin'],\n    ['id' => 20, 'name' => 'Игорь', 'role' => 'editor'],\n];\n\n// Короткие стрелочные функции fn() имеют доступ к внешним переменным\n$admins = array_values(array_filter($users, fn(array $u): bool => $u['role'] === 'admin'));\n\n// Извлечение колонки или переиндексация массива по полю 'id' за один вызов!\n$namesById = array_column($users, 'name', 'id'); // [10 => 'Анна', 20 => 'Игорь']\n\n// ВСЕГДА передавай третий параметр true (strict) в in_array!\n$isAllowed = in_array('admin', ['user', 'admin'], true);",
    "example": "$merged = [...$defaultConfig, ...$customConfig]; /* Распаковка массивов в PHP 8.1+ */",
    "points": [
      "Обязательно передавай третий аргумент true в in_array($needle, $haystack, true), иначе из-за нестрогого сравнения in_array(0, [\"admin\"]) вернёт true!",
      "После array_filter() ключи массива сохраняют старые номера (например, [0, 3, 5]). Оберни результат в array_values(), чтобы получить чистый список [0, 1, 2] для JSON.",
      "Функция array_column($rows, null, \"id\") превращает результат SQL-запроса в словарь с мгновенным поиском по ID."
    ],
    "tags": [
      "PHP",
      "array_map",
      "array_filter",
      "array_column",
      "in_array",
      "array_values",
      "fn",
      "массивы"
    ],
    "when": "При подготовке выборок из базы данных к выводу в шаблон или отдаче по JSON API.",
    "alternatives": "Обычный цикл foreach часто читается проще, если внутри нужно одновременно фильтровать и менять структуру.",
    "url": "https://www.php.net/manual/ru/function.array-column.php"
  },
  {
    "lang": "php",
    "id": "php-match-nullsafe",
    "title": "PHP 8: выражение match, именованные аргументы и оператор ?-> (Nullsafe)",
    "summary": "Строгая современная замена громоздкому switch-case, вызов функций по именам параметров и безопасные цепочки.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// match возвращает значение, сравнивает строго (===) и не требует break!\n$statusText = match ($httpCode) {\n    200, 201 => 'Успешно',\n    400, 422 => 'Ошибка валидации данных',\n    404      => 'Страница не найдена',\n    default  => 'Внутренняя ошибка сервера',\n};\n\n// Nullsafe оператор ?-> не упадёт с Fatal Error, если $user или getProfile() вернёт null\n$country = $user?->getProfile()?->getAddress()?->country ?? 'RU';\n\n// Именованные аргументы делают вызов самодокументируемым\nsetcookie(name: 'theme', value: 'dark', httponly: true, samesite: 'Lax');",
    "example": "/* Если в match не сработает ни одна ветка и нет default, PHP выбросит UnhandledMatchError */",
    "points": [
      "В отличие от старого switch, выражение match использует строгое сравнение (===) и никогда «не проваливается» в следующую ветку из-за забытого break.",
      "Оператор ?-> (nullsafe) мгновенно обрывает цепочку вызовов и возвращает null, если любой промежуточный объект оказался пустым.",
      "Именованные аргументы позволяют пропускать необязательные параметры в середине списка без передачи десятка пустых значений."
    ],
    "tags": [
      "PHP",
      "match",
      "nullsafe",
      "?->",
      "named arguments",
      "switch",
      "условия"
    ],
    "when": "При маппинге статусов заказов, HTTP-кодов, ролей и настройке функций со множеством флагов.",
    "alternatives": "Используй if/elseif, если нужно проверить сложные составные условия, не сводящиеся к одному значению.",
    "url": "https://www.php.net/manual/ru/control-structures.match.php"
  },
  {
    "lang": "php",
    "id": "php-oop-enums",
    "title": "PHP 8: классы, продвижение свойств конструктора, readonly и перечисления (enum)",
    "summary": "Лаконичное объявление DTO и сервисов без шаблонного кода и типобезопасные перечисления статусов.",
    "code": "<?php\ndeclare(strict_types=1);\n\nenum OrderStatus: string {\n    case Pending = 'pending';\n    case Paid    = 'paid';\n    case Shipped = 'shipped';\n}\n\nreadonly class OrderDto {\n    // Свойства объявляются и присваиваются прямо в круглых скобках конструктора!\n    public function __construct(\n        public int $id,\n        public float $amount,\n        public OrderStatus $status = OrderStatus::Pending,\n    ) {}\n}\n\n$order = new OrderDto(id: 42, amount: 2500.0);",
    "example": "$status = OrderStatus::tryFrom($_POST['status'] ?? '') ?? OrderStatus::Pending;",
    "points": [
      "Constructor Property Promotion сокращает код класса в 3 раза: больше не нужно дублировать поля сверху и писать $this->id = $id внутри конструктора.",
      "Модификатор readonly на классе гарантирует, что объект нельзя случайно изменить после создания (идеально для DTO и конфигураций).",
      "Backed Enum (enum Status: string) имеет встроенный метод Status::tryFrom($val), который безопасно парсит строку из БД или формы."
    ],
    "tags": [
      "PHP",
      "class",
      "readonly",
      "enum",
      "construct",
      "oop",
      "классы",
      "перечисления"
    ],
    "when": "При проектировании моделей данных, сервисов, статусов заказов и ролей пользователей.",
    "alternatives": "Старые константы класса STATUS_PAID = \"paid\" не дают проверки типов в аргументах функций.",
    "url": "https://www.php.net/manual/ru/language.enumerations.php"
  },
  {
    "lang": "php",
    "id": "php-forms-xss-csrf",
    "title": "PHP 8: обработка форм ($_POST), фильтрация filter_input и защита от XSS / CSRF",
    "summary": "Безопасный приём данных от пользователя, валидация email, экранирование HTML-вывода и проверка CSRF-токена.",
    "code": "<?php\ndeclare(strict_types=1);\nsession_start();\n\n// Защита от подделки межсайтовых запросов (CSRF)\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    $token = $_POST['csrf_token'] ?? '';\n    if (!hash_equals($_SESSION['csrf_token'] ?? '', $token)) {\n        http_response_code(403);\n        exit('Неверный CSRF-токен');\n    }\n\n    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);\n    $name  = trim((string) ($_POST['name'] ?? ''));\n}\n\n// Функция безопасного вывода в HTML-шаблон (защита от XSS)\nfunction e(string $value): string {\n    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');\n}",
    "example": "<input type=\"hidden\" name=\"csrf_token\" value=\"<?= e($_SESSION['csrf_token']) ?>\">",
    "points": [
      "Любые данные от пользователя ($name, $_GET[\"q\"]) при выводе в HTML ОБЯЗАТЕЛЬНО пропускай через htmlspecialchars(..., ENT_QUOTES, \"UTF-8\"), иначе злоумышленник внедрит <script>!",
      "Для проверки email и URL используй встроенный filter_var($val, FILTER_VALIDATE_EMAIL) вместо самописных регулярок.",
      "Сравнивай секретные токены только через функцию hash_equals(), защищённую от атак по времени (timing attacks)."
    ],
    "tags": [
      "PHP",
      "POST",
      "GET",
      "htmlspecialchars",
      "XSS",
      "CSRF",
      "filter_input",
      "безопасность",
      "формы"
    ],
    "when": "В каждом обработчике форм обратной связи, авторизации, комментариев и личного кабинета.",
    "alternatives": "Шаблонизаторы вроде Twig и Blade экранируют вывод {{ $name }} автоматически по умолчанию.",
    "url": "https://www.php.net/manual/ru/function.htmlspecialchars.php"
  },
  {
    "lang": "php",
    "id": "php-sessions-passwords",
    "title": "PHP 8: хеширование паролей (password_hash / password_verify) и безопасные сессии",
    "summary": "Надёжное хранение паролей с солью (bcrypt / Argon2) и защита сессионных кук от перехвата.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// 1. При регистрации: создаём криптостойкий хеш с автоматической солью\n$passwordHash = password_hash($plainPassword, PASSWORD_DEFAULT);\n\n// 2. При входе: проверяем введённый пароль против хеша из БД\nif (password_verify($plainPassword, $userFromDb['password_hash'])) {\n    // Защита от фиксации сессии (Session Fixation) после успешного входа!\n    session_regenerate_id(true);\n    $_SESSION['user_id'] = (int) $userFromDb['id'];\n}",
    "example": "session_set_cookie_params(['httponly' => true, 'secure' => true, 'samesite' => 'Lax']);\nsession_start();",
    "points": [
      "НИКОГДА не используй md5() или sha1() для паролей — они взламываются по радужным таблицам за секунды. Используй только password_hash() и password_verify()!",
      "Флаг httponly => true запрещает JavaScript-скриптам читать сессионную куку через document.cookie в случае XSS.",
      "Вызов session_regenerate_id(true) сразу после логина меняет ID сессии, защищая пользователя от кражи сессии."
    ],
    "tags": [
      "PHP",
      "password_hash",
      "password_verify",
      "session_start",
      "cookie",
      "авторизация",
      "пароли",
      "сессии"
    ],
    "when": "При реализации регистрации, входа на сайт и смены пароля пользователя.",
    "alternatives": "Для stateless REST API и мобильных приложений вместо сессий часто используют подписанные токены или БД-токены.",
    "url": "https://www.php.net/manual/ru/function.password-hash.php"
  },
  {
    "lang": "php",
    "id": "php-pdo-connection-transactions",
    "title": "PHP 8: подключение PDO к MySQL/PostgreSQL и транзакции (beginTransaction / commit)",
    "summary": "Правильная конфигурация PDO с выбросом исключений и атомарное выполнение нескольких SQL-запросов.",
    "code": "<?php\ndeclare(strict_types=1);\n\n$dsn = 'mysql:host=127.0.0.1;dbname=app_db;charset=utf8mb4';\n$pdo = new PDO($dsn, $dbUser, $dbPass, [\n    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Выбрасывать исключения при ошибках SQL\n    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Возвращать ассоциативные массивы\n    PDO::ATTR_EMULATE_PREPARES   => false,                  // Честные подготовленные запросы на стороне БД\n]);\n\n// Транзакция: либо выполнятся оба запроса, либо ни один!\ntry {\n    $pdo->beginTransaction();\n    $pdo->prepare('UPDATE accounts SET balance = balance - ? WHERE id = ?')->execute([500, $fromId]);\n    $pdo->prepare('UPDATE accounts SET balance = balance + ? WHERE id = ?')->execute([500, $toId]);\n    $pdo->commit();\n} catch (Throwable $e) {\n    if ($pdo->inTransaction()) $pdo->rollBack();\n    throw $e;\n}",
    "example": "$lastId = (int) $pdo->lastInsertId();",
    "points": [
      "В DSN для MySQL всегда указывай charset=utf8mb4 (а не старый utf8), чтобы база корректно сохраняла любые символы и эмодзи.",
      "PDO::ATTR_EMULATE_PREPARES => false заставляет MySQL возвращать числа как int/float, а не превращать все поля в строки.",
      "Транзакции (beginTransaction / commit / rollBack) гарантируют целостность данных при создании заказа, списании баланса и сложных обновлениях."
    ],
    "tags": [
      "PHP",
      "PDO",
      "MySQL",
      "transaction",
      "beginTransaction",
      "commit",
      "rollBack",
      "база данных",
      "sql"
    ],
    "when": "В едином файле подключения к БД и при любых операциях, изменяющих сразу несколько связанных таблиц.",
    "alternatives": "Не используй устаревшие функции mysql_* или склейку переменных прямо в строку SQL-запроса.",
    "url": "https://www.php.net/manual/ru/pdo.transactions.php"
  },
  {
    "lang": "php",
    "id": "php-json-rest-api",
    "title": "PHP 8: создание JSON API эндпоинта (json_encode, json_decode, php://input)",
    "summary": "Приём JSON-тела запроса от fetch(), корректная работа с кириллицей JSON_UNESCAPED_UNICODE и коды ответа.",
    "code": "<?php\ndeclare(strict_types=1);\n\nheader('Content-Type: application/json; charset=utf-8');\n\n// Читаем JSON-тело POST/PUT запроса из потока php://input\n$rawBody = file_get_contents('php://input');\ntry {\n    $data = json_decode($rawBody ?: '{}', true, 512, JSON_THROW_ON_ERROR);\n} catch (JsonException $e) {\n    http_response_code(400);\n    echo json_encode(['error' => 'Некорректный JSON'], JSON_UNESCAPED_UNICODE);\n    exit;\n}\n\nhttp_response_code(201);\necho json_encode([\n    'status' => 'ok',\n    'received' => $data['title'] ?? null,\n], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);",
    "example": "/* При отправке fetch() с заголовком application/json массив $_POST остаётся пустым — читай php://input! */",
    "points": [
      "Когда фронтенд отправляет JSON через fetch(), данные попадают НЕ в $_POST, а в поток php://input!",
      "Флаг JSON_UNESCAPED_UNICODE оставляет русские буквы читаемыми (\"Привет\"), вместо превращения их в \"\\u041f\\u0440...\".",
      "Флаг JSON_THROW_ON_ERROR выбрасывает понятное исключение JsonException при битом JSON вместо молчаливого возврата null."
    ],
    "tags": [
      "PHP",
      "json_encode",
      "json_decode",
      "php://input",
      "REST API",
      "JSON_UNESCAPED_UNICODE",
      "api"
    ],
    "when": "При написании бэкенда для AJAX-запросов, SPA-приложений, вебхуков Telegram и мобильных клиентов.",
    "alternatives": "Для обычных HTML-форм с multipart/form-data данные по-прежнему приходят в $_POST и $_FILES.",
    "url": "https://www.php.net/manual/ru/function.json-encode.php"
  },
  {
    "lang": "php",
    "id": "php-files-uploads",
    "title": "PHP 8: работа с файлами и безопасная загрузка изображений ($_FILES)",
    "summary": "Чтение и атомарная запись файлов с блокировкой LOCK_EX и проверка реального MIME-типа загружаемых картинок.",
    "code": "<?php\ndeclare(strict_types=1);\n\nif (!empty($_FILES['avatar']['tmp_name']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {\n    $tmpPath = $_FILES['avatar']['tmp_name'];\n\n    // Проверяем реальный MIME-тип содержимого файла, а не расширение из имени!\n    $finfo = new finfo(FILEINFO_MIME_TYPE);\n    $mime  = $finfo->file($tmpPath);\n    $allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];\n\n    if (!isset($allowed[$mime])) {\n        exit('Разрешены только изображения JPG, PNG и WebP');\n    }\n\n    // Генерируем безопасное случайное имя файла\n    $newName = bin2hex(random_bytes(12)) . '.' . $allowed[$mime];\n    move_uploaded_file($tmpPath, __DIR__ . '/uploads/' . $newName);\n}",
    "example": "file_put_contents(__DIR__ . '/app.log', $line . PHP_EOL, FILE_APPEND | LOCK_EX);",
    "points": [
      "Никогда не доверяй $_FILES[\"file\"][\"type\"] и оригинальному имени файла — злоумышленник может загрузить скрипт shell.php под видом картинки!",
      "Всегда проверяй реальное содержимое через finfo(FILEINFO_MIME_TYPE) и генерируй новое имя через bin2hex(random_bytes(12)).",
      "При записи логов через file_put_contents() используй флаги FILE_APPEND | LOCK_EX, чтобы параллельные запросы не повредили файл."
    ],
    "tags": [
      "PHP",
      "FILES",
      "move_uploaded_file",
      "file_get_contents",
      "file_put_contents",
      "finfo",
      "загрузка файлов"
    ],
    "when": "При загрузке аватаров, прайс-листов, документов и ведении файловых логов или кэша.",
    "alternatives": "В папке /uploads обязательно запрети исполнение PHP-скриптов через настройки Nginx или .htaccess.",
    "url": "https://www.php.net/manual/ru/features.file-upload.post-method.php"
  },
  {
    "lang": "php",
    "id": "php-curl-datetime",
    "title": "PHP 8: HTTP-запросы через cURL и неизменяемые даты DateTimeImmutable",
    "summary": "Отправка серверных запросов к внешним API (Telegram Bot API, платёжные шлюзы) и точные расчёты дат.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// 1. DateTimeImmutable не меняет исходный объект при прибавлении дней!\n$now = new DateTimeImmutable('now', new DateTimeZone('Europe/Moscow'));\n$expiresAt = $now->modify('+7 days')->format('Y-m-d H:i:s');\n\n// 2. Отправка JSON POST-запроса к внешнему API через cURL\n$ch = curl_init('https://api.example.com/v1/notify');\ncurl_setopt_array($ch, [\n    CURLOPT_POST           => true,\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_TIMEOUT        => 10,\n    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],\n    CURLOPT_POSTFIELDS     => json_encode(['date' => $expiresAt]),\n]);\n$response = curl_exec($ch);\n$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);",
    "example": "$diff = $now->diff($expiresAt)->days;",
    "points": [
      "Всегда используй DateTimeImmutable вместо старого DateTime, чтобы вызов ->modify(\"+1 day\") создавал новую дату, а не мутировал исходную переменную в коде!",
      "В cURL обязательно задавай CURLOPT_TIMEOUT (например, 10 секунд), чтобы зависший внешний сервис не заблокировал воркеры твоего сервера.",
      "Для крупных проектов поверх cURL удобно использовать PSR-18 HTTP-клиент Guzzle."
    ],
    "tags": [
      "PHP",
      "curl",
      "DateTimeImmutable",
      "DateTimeZone",
      "http",
      "запрос",
      "дата",
      "время"
    ],
    "when": "Для интеграции с внешними API, отправки уведомлений в Telegram и расчёта срока действия подписок.",
    "alternatives": "file_get_contents(\"https://...\") не позволяет гибко контролировать заголовки, коды ошибок и таймауты как cURL.",
    "url": "https://www.php.net/manual/ru/class.datetimeimmutable.php"
  },
  {
    "lang": "xml",
    "id": "xml-svg-inline",
    "title": "SVG & XML: векторная графика <svg>, viewBox и перекрашивание через currentColor",
    "summary": "Устройство векторных иконок, масштабируемая сетка координат viewBox и управление цветом и обводкой из CSS.",
    "code": "<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  width=\"24\"\n  height=\"24\"\n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n  aria-hidden=\"true\"\n>\n  <circle cx=\"11\" cy=\"11\" r=\"8\"></circle>\n  <line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>\n</svg>",
    "example": ".btn:hover svg {\n  color: #38bdf8;\n  transform: scale(1.1);\n}",
    "points": [
      "Атрибут viewBox=\"0 0 24 24\" задаёт внутреннюю систему координат холста: благодаря ему иконка идеально масштабируется под любые width и height без потери чёткости.",
      "Значение stroke=\"currentColor\" или fill=\"currentColor\" заставляет SVG автоматически наследовать цвет текста родительской кнопки или ссылки!",
      "Декоративным иконкам рядом с текстом кнопки добавляй aria-hidden=\"true\", чтобы скринридер не пытался озвучить векторные пути."
    ],
    "tags": [
      "XML",
      "SVG",
      "viewBox",
      "currentColor",
      "stroke",
      "fill",
      "path",
      "иконки",
      "вектор"
    ],
    "when": "Для всех интерфейсных иконок, логотипов, графиков и анимированных иллюстраций.",
    "alternatives": "Подключение SVG через <img src=\"icon.svg\"> не позволяет менять цвет иконки при наведении через CSS.",
    "url": "https://developer.mozilla.org/ru/docs/Web/SVG"
  },
  {
    "lang": "xml",
    "id": "xml-rss-feed",
    "title": "XML: лента новостей и блога RSS 2.0 (feed.xml)",
    "summary": "Стандартный XML-формат для автоматической трансляции новых статей блога в агрегаторы, Telegram-боты и Яндекс.Дзен.",
    "code": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<rss version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\">\n  <channel>\n    <title>DevShelf — Блог о веб-разработке</title>\n    <link>https://example.com/</link>\n    <description>Свежие руководства по HTML, CSS, JS и PHP</description>\n    <language>ru</language>\n    <item>\n      <title>Полное руководство по CSS Grid и Subgrid</title>\n      <link>https://example.com/blog/css-grid</link>\n      <guid isPermaLink=\"true\">https://example.com/blog/css-grid</guid>\n      <pubDate>Mon, 15 Sep 2026 12:00:00 +0300</pubDate>\n      <description><![CDATA[<p>Разбираем практические примеры верстки сеток...</p>]]></description>\n    </item>\n  </channel>\n</rss>",
    "example": "<link rel=\"alternate\" type=\"application/rss+xml\" title=\"RSS\" href=\"/rss.xml\">",
    "points": [
      "Внутри тега <description> используй секцию <![CDATA[ ... ]]>, чтобы HTML-теги абзацев и ссылок не ломали парсинг XML.",
      "Дата публикации <pubDate> в RSS 2.0 должна быть в формате RFC 2822 (в PHP это константа DATE_RSS).",
      "Добавь тег <link rel=\"alternate\" type=\"application/rss+xml\" href=\"/rss.xml\"> в <head> сайта для автообнаружения ленты браузерами."
    ],
    "tags": [
      "XML",
      "RSS",
      "feed",
      "CDATA",
      "pubDate",
      "лента",
      "блог",
      "новости",
      "синдикация"
    ],
    "when": "Для новостных сайтов, технических блогов, подкастов и автопостинга в соцсети.",
    "alternatives": "Формат Atom (application/atom+xml) или JSON Feed выполняют ту же задачу.",
    "url": "https://www.rssboard.org/rss-specification"
  },
  {
    "lang": "xml",
    "id": "seo-meta-robots-canonical",
    "title": "SEO: управление индексацией (<meta name=\"robots\">, canonical, X-Robots-Tag)",
    "summary": "Точечный запрет индексации служебных страниц, защита от дублей с GET-параметрами и управление сниппетами.",
    "code": "<head>\n  <!-- Основной канонический адрес страницы без UTM-меток и параметров сортировки -->\n  <link rel=\"canonical\" href=\"https://example.com/catalog/laptops\">\n\n  <!-- Запретить индексацию страницы поиска или личного кабинета, но разрешить переход по ссылкам -->\n  <meta name=\"robots\" content=\"noindex, follow\">\n\n  <!-- Разрешить крупные превью картинок в выдаче Google Discover -->\n  <meta name=\"robots\" content=\"index, follow, max-image-preview:large\">\n</head>",
    "example": "/* В PHP для PDF-файлов или ответов API: header('X-Robots-Tag: noindex, nofollow'); */",
    "points": [
      "Важно: если страница закрыта в файле robots.txt через Disallow, поисковый бот НЕ зайдёт на неё и НЕ увидит тег <meta name=\"robots\" content=\"noindex\">! Чтобы гарантированно удалить страницу из выдачи, открой её в robots.txt и поставь meta noindex.",
      "Тег <link rel=\"canonical\"> спасает сайт от потери позиций из-за дублей вида ?utm_source=tg или ?sort=price.",
      "HTTP-заголовок X-Robots-Tag: noindex позволяет закрыть от индексации не только HTML, но и PDF-документы или тестовый поддомен."
    ],
    "tags": [
      "XML",
      "SEO",
      "robots",
      "noindex",
      "nofollow",
      "canonical",
      "индексация",
      "дубли",
      "поисковики"
    ],
    "when": "На всех страницах каталога с фильтрами (canonical), в личных кабинетах, корзине и результатах поиска (noindex).",
    "alternatives": "Для склейки старых переехавших адресов со сменой URL используй серверный 301 редирект.",
    "url": "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=ru"
  },
  {
    "lang": "xml",
    "id": "seo-htaccess-apache",
    "title": "Server & SEO: настройка .htaccess (кэширование, Gzip, защита и ЧПУ-роутинг)",
    "summary": "Конфигурация веб-сервера Apache для единой точки входа SPA/PHP, сжатия статики и заголовков безопасности.",
    "code": "Options -Indexes\nDirectoryIndex index.html index.php\n\n<IfModule mod_rewrite.c>\n  RewriteEngine On\n  # Перенаправляем все несуществующие пути на index.php (или index.html для SPA)\n  RewriteCond %{REQUEST_FILENAME} !-f\n  RewriteCond %{REQUEST_FILENAME} !-d\n  RewriteRule ^ index.html [L]\n</IfModule>\n\n<IfModule mod_headers.c>\n  Header set X-Content-Type-Options \"nosniff\"\n  Header set Referrer-Policy \"strict-origin-when-cross-origin\"\n</IfModule>",
    "example": "ErrorDocument 404 /404.html",
    "points": [
      "Options -Indexes запрещает серверу показывать список файлов в папке, если в ней нет индексного файла.",
      "На виртуальных хостингах (например, Beget) редирект на HTTPS лучше включать галочкой в панели управления, чтобы не создать бесконечный цикл редиректов (ERR_TOO_MANY_REDIRECTS) между Nginx и Apache!",
      "Условия !-f и !-d проверяют, что запрашиваемый URL не является реальным файлом (картинкой, CSS) или папкой на диске."
    ],
    "tags": [
      "XML",
      "SEO",
      "htaccess",
      "apache",
      "rewrite",
      "безопасность",
      "сервер",
      "редирект",
      "beget"
    ],
    "when": "При размещении сайтов и веб-приложений на хостингах с веб-сервером Apache.",
    "alternatives": "На VPS с чистым Nginx вместо .htaccess используется блок try_files $uri $uri/ /index.html; в nginx.conf.",
    "url": "https://httpd.apache.org/docs/current/howto/htaccess.html"
  },
  {
    "lang": "recipes",
    "id": "recipe-dropdown-menu",
    "title": "Рецепт: Выпадающее меню (Dropdown) с закрытием по клику вне блока",
    "summary": "Доступное выпадающее меню профиля или действий с поддержкой клавиши Esc и автоматическим закрытием при клике мимо.",
    "code": "<div class=\"dropdown\" id=\"user-dropdown\">\n  <button type=\"button\" class=\"dropdown-trigger\" aria-expanded=\"false\">\n    Аккаунт ▾\n  </button>\n  <div class=\"dropdown-menu\" hidden>\n    <a href=\"#profile\">Мой профиль</a>\n    <a href=\"#billing\">Подписка и счета</a>\n    <hr>\n    <button type=\"button\" class=\"danger\">Выйти</button>\n  </div>\n</div>\n\n<script>\nconst dd = document.getElementById('user-dropdown');\nconst btn = dd.querySelector('.dropdown-trigger');\nconst menu = dd.querySelector('.dropdown-menu');\n\nfunction toggleDropdown(force) {\n  const isOpen = typeof force === 'boolean' ? force : menu.hidden;\n  menu.hidden = !isOpen;\n  btn.setAttribute('aria-expanded', String(isOpen));\n}\n\nbtn.addEventListener('click', (e) => {\n  e.stopPropagation();\n  toggleDropdown();\n});\n\ndocument.addEventListener('click', (e) => {\n  if (!dd.contains(e.target)) toggleDropdown(false);\n});\ndocument.addEventListener('keydown', (e) => {\n  if (e.key === 'Escape') toggleDropdown(false);\n});\n</script>",
    "example": ".dropdown { position: relative; display: inline-block; }\n.dropdown-menu { position: absolute; right: 0; top: calc(100% + 6px); }",
    "points": [
      "Проверка !dd.contains(e.target) на документе надёжно закрывает меню при клике в любое место страницы за пределами компонента.",
      "Синхронизация атрибута hidden и aria-expanded гарантирует правильную работу со скринридерами.",
      "Позиционирование top: calc(100% + 6px) располагает выпадающий список ровно на 6px ниже кнопки."
    ],
    "tags": [
      "рецепт",
      "dropdown",
      "выпадающее меню",
      "меню профиля",
      "клик вне",
      "поповер"
    ],
    "when": "Для меню профиля в шапке, выбора языка, сортировки и меню «три точки» в таблицах.",
    "alternatives": "В современных браузерах можно также использовать нативный атрибут popover.",
    "url": "https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/"
  },
  {
    "lang": "recipes",
    "id": "recipe-toast-notifications",
    "title": "Рецепт: Всплывающие уведомления (Toast) с автоскрытием и стеком",
    "summary": "Лёгкая функция вызова неблокирующих уведомлений в углу экрана с плавной анимацией и поддержкой aria-live.",
    "code": "<div id=\"toast-stack\" class=\"toast-stack\" aria-live=\"polite\"></div>\n<button type=\"button\" onclick=\"showToast('Настройки успешно сохранены!', 'success')\">\n  Показать уведомление\n</button>\n\n<script>\nfunction showToast(message, type = 'info') {\n  const stack = document.getElementById('toast-stack');\n  const toast = document.createElement('div');\n  toast.className = `toast-item toast-${type}`;\n  toast.textContent = message;\n  stack.appendChild(toast);\n\n  setTimeout(() => {\n    toast.classList.add('is-leaving');\n    toast.addEventListener('transitionend', () => toast.remove());\n  }, 3000);\n}\n</script>",
    "example": ".toast-stack { position: fixed; bottom: 20px; right: 20px; display: flex; flex-direction: column; gap: 8px; z-index: 1000; }",
    "points": [
      "Контейнер со свойством display: flex; flex-direction: column; gap: 8px аккуратно выстраивает несколько уведомлений друг над другом.",
      "pointer-events: none на самом контейнере гарантирует, что невидимая область стека не перекроет кнопки под ней.",
      "Атрибут aria-live=\"polite\" автоматически зачитывает текст уведомления незрячим пользователям."
    ],
    "tags": [
      "рецепт",
      "toast",
      "тост",
      "уведомление",
      "алерт",
      "нотификация",
      "всплывашка"
    ],
    "when": "При копировании в буфер обмена, сохранении формы, добавлении товара в корзину и сетевых ошибках.",
    "alternatives": "Никогда не используй блокирующий системный window.alert() в современных интерфейсах.",
    "url": "https://developer.mozilla.org/ru/docs/Web/Accessibility/ARIA/Roles/status_role"
  },
  {
    "lang": "recipes",
    "id": "recipe-theme-switcher",
    "title": "Рецепт: Переключатель тёмной и светлой темы с localStorage и prefers-color-scheme",
    "summary": "Мгновенное переключение темы оформления с сохранением выбора пользователя и учётом системной темы ОС.",
    "code": "<button type=\"button\" id=\"theme-btn\" aria-label=\"Сменить тему\">\n  Переключить тему\n</button>\n\n<script>\nconst root = document.documentElement;\nconst saved = localStorage.getItem('theme');\nconst systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n\nconst initialTheme = saved ?? (systemDark ? 'dark' : 'light');\nroot.dataset.theme = initialTheme;\n\ndocument.getElementById('theme-btn').addEventListener('click', () => {\n  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';\n  root.dataset.theme = next;\n  localStorage.setItem('theme', next);\n});\n</script>",
    "example": ":root[data-theme=\"dark\"] { --bg: #090d14; --text: #f8fafc; }\n:root[data-theme=\"light\"] { --bg: #f8fafc; --text: #0f172a; }",
    "points": [
      "Чтобы избежать белой вспышки (FOUC) при загрузке страницы, маленький скрипт проверки localStorage ставят синхронно в <head>.",
      "Свойство color-scheme: dark / light на :root автоматически перекрашивает системные полосы прокрутки (scrollbars) и календари инпутов!",
      "Если пользователь ещё не выбирал тему вручную, matchMedia(\"(prefers-color-scheme: dark)\") бережно подстроится под настройки его системы."
    ],
    "tags": [
      "рецепт",
      "dark mode",
      "тема",
      "тёмная тема",
      "светлая тема",
      "localStorage",
      "переключатель"
    ],
    "when": "В документации, дашбордах, читалках и веб-приложениях.",
    "alternatives": "Функция CSS light-dark() позволяет описывать обе палитры прямо в одной CSS-переменной.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/@media/prefers-color-scheme"
  },
  {
    "lang": "recipes",
    "id": "recipe-live-search-filter",
    "title": "Рецепт: Живой поиск и фильтрация карточек на странице без перезагрузки",
    "summary": "Мгновенная фильтрация списка карточек или таблицы по введённому тексту с подсчётом найденных элементов и пустым состоянием.",
    "code": "<input type=\"search\" id=\"filter-input\" placeholder=\"Поиск по карточкам...\">\n<ul id=\"cards-list\">\n  <li class=\"item\">Адаптивная сетка CSS Grid</li>\n  <li class=\"item\">Модальное окно HTML Dialog</li>\n  <li class=\"item\">Запросы к серверу Fetch API</li>\n</ul>\n<p id=\"empty-msg\" hidden>Ничего не найдено</p>\n\n<script>\nconst input = document.getElementById('filter-input');\nconst items = Array.from(document.querySelectorAll('#cards-list .item'));\nconst emptyMsg = document.getElementById('empty-msg');\n\ninput.addEventListener('input', () => {\n  const query = input.value.trim().toLowerCase();\n  let visibleCount = 0;\n\n  items.forEach(item => {\n    const match = item.textContent.toLowerCase().includes(query);\n    item.hidden = !match;\n    if (match) visibleCount++;\n  });\n\n  emptyMsg.hidden = visibleCount > 0;\n});\n</script>",
    "example": "/* Использование item.hidden = !match чисто скрывает несовпадающие карточки */",
    "points": [
      "Приведение строки и текста карточки к единому регистру через .toLowerCase() делает поиск нечувствительным к заглавным буквам.",
      "Скрытие через атрибут item.hidden не удаляет узлы из DOM, поэтому при очистке поля поиска все карточки мгновенно возвращаются на место.",
      "Обязательно показывай блок «Ничего не найдено» (empty state), когда visibleCount === 0."
    ],
    "tags": [
      "рецепт",
      "поиск",
      "фильтр",
      "живой поиск",
      "search",
      "filter",
      "список"
    ],
    "when": "Для фильтрации FAQ, справочников, таблиц тарифов, списков контактов и каталогов до 500 элементов.",
    "alternatives": "Для базы из десятков тысяч товаров фильтрацию лучше выполнять на сервере с debounce.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/hidden"
  },
  {
    "lang": "recipes",
    "id": "recipe-copy-code-button",
    "title": "Рецепт: Блок кода с кнопкой «Скопировать» и подсветкой статуса",
    "summary": "Готовый компонент сниппета документации с копированием в буфер обмена и сменой состояния кнопки.",
    "code": "<div class=\"code-card\">\n  <div class=\"code-header\">\n    <span>bash</span>\n    <button type=\"button\" class=\"copy-trigger\">Копировать</button>\n  </div>\n  <pre><code>npm create vite@latest my-app</code></pre>\n</div>\n\n<script>\ndocument.querySelectorAll('.copy-trigger').forEach(btn => {\n  btn.addEventListener('click', async () => {\n    const code = btn.closest('.code-card').querySelector('code').textContent;\n    await navigator.clipboard.writeText(code);\n    btn.textContent = '✓ Скопировано';\n    btn.classList.add('is-copied');\n    setTimeout(() => {\n      btn.textContent = 'Копировать';\n      btn.classList.remove('is-copied');\n    }, 1800);\n  });\n});\n</script>",
    "example": ".copy-trigger.is-copied { color: #10b981; border-color: #10b981; }",
    "points": [
      "Навигация через btn.closest(\".code-card\").querySelector(\"code\") позволяет иметь сколько угодно блоков кода на странице без привязки к уникальным ID.",
      "Чтение через .textContent берёт чистый текст команды без HTML-тегов подсветки синтаксиса.",
      "Визуальный класс .is-copied меняет цвет рамки и текста на зелёный на 1.8 секунды."
    ],
    "tags": [
      "рецепт",
      "копировать код",
      "copy",
      "clipboard",
      "сниппет",
      "документация"
    ],
    "when": "В технических блогах, документации API, личных кабинетах с API-ключами и промокодами.",
    "alternatives": "Можно также использовать делегирование событий на document вместо цикла по кнопкам.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Clipboard/writeText"
  },
  {
    "lang": "html",
    "id": "html-canvas",
    "title": "HTML: холст для 2D и 3D графики <canvas>",
    "summary": "Растровый холст для рисования графиков, диаграмм, частиц, обработки фото и браузерных игр через JS.",
    "code": "<canvas id=\"chart\" width=\"600\" height=\"300\"></canvas>\n\n<script>\n  const canvas = document.getElementById('chart');\n  const ctx = canvas.getContext('2d');\n\n  // Заливка столбика диаграммы\n  ctx.fillStyle = '#38bdf8';\n  ctx.fillRect(40, 60, 80, 200);\n</script>",
    "example": "const dpr = window.devicePixelRatio || 1; /* Учёт Retina-экранов */",
    "points": [
      "Размеры холста обязательно задавай через HTML-атрибуты width и height, а не только через CSS, иначе картинка растянется и станет мыльной!",
      "Для идеальной чёткости на Retina-экранах умножай canvas.width на window.devicePixelRatio и масштабируй контекст ctx.scale(dpr, dpr).",
      "Для векторных иконок и кликабельных схем лучше подходит <svg>, а для десятков тысяч движущихся частиц — <canvas>."
    ],
    "tags": [
      "HTML",
      "canvas",
      "2d",
      "webgl",
      "графика",
      "холст",
      "диаграмма",
      "рисование"
    ],
    "when": "Для графиков аналитики, редакторов изображений, генераторов баннеров и 2D/3D игр.",
    "alternatives": "Для простых круговых и столбчатых графиков до 100 элементов проще и чётче использовать <svg>.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/canvas"
  },
  {
    "lang": "html",
    "id": "html-textarea",
    "title": "HTML: многострочное текстовое поле <textarea> и автовысота",
    "summary": "Поле для ввода комментариев, описаний и кода с контролем строк, лимитом символов и автоподстройкой высоты.",
    "code": "<label for=\"bio\">О проекте:</label>\n<textarea\n  id=\"bio\"\n  name=\"bio\"\n  rows=\"4\"\n  maxlength=\"500\"\n  placeholder=\"Опишите задачу проекта...\"\n></textarea>",
    "example": "textarea {\n  field-sizing: content; /* Современный CSS: поле само растёт по мере ввода текста! */\n  min-height: 80px;\n}",
    "points": [
      "В отличие от <input>, у <textarea> нет атрибута value — начальный текст пишется прямо между открывающим и закрывающим тегами.",
      "Не оставляй случайных пробелов и переносов между <textarea> и </textarea>, иначе они появятся внутри поля как введённый текст!",
      "Новое CSS-свойство field-sizing: content (или JS: el.style.height = el.scrollHeight + \"px\") позволяет полю автоматически расти по высоте."
    ],
    "tags": [
      "HTML",
      "textarea",
      "rows",
      "maxlength",
      "field-sizing",
      "комментарий",
      "многострочное поле"
    ],
    "when": "Для форм обратной связи, комментариев, биографии профиля и редакторов кода.",
    "alternatives": "Для форматированного текста с жирным и списками используют атрибут contenteditable=\"true\" или редакторы ProseMirror/TipTap.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/textarea"
  },
  {
    "lang": "html",
    "id": "html-audio-element",
    "title": "HTML: аудиоплеер <audio> и звуковые эффекты интерфейса",
    "summary": "Встраивание подкастов, голосовых сообщений и программное воспроизведение аудио через HTMLAudioElement.",
    "code": "<audio controls preload=\"metadata\">\n  <source src=\"/audio/episode-12.mp3\" type=\"audio/mpeg\">\n  <source src=\"/audio/episode-12.ogg\" type=\"audio/ogg\">\n</audio>\n\n<script>\n  const notifySound = new Audio('/audio/ping.mp3');\n  notifySound.volume = 0.4;\n  // Вызывать только после действия пользователя (клик)\n  btn.addEventListener('click', () => notifySound.play());\n</script>",
    "example": "audioElement.playbackRate = 1.5; /* Ускорение подкаста в 1.5 раза */",
    "points": [
      "Свойство audio.playbackRate = 1.5 или 2.0 позволяет легко сделать кнопку ускорения голосового сообщения или подкаста.",
      "Браузеры блокируют вызов audio.play() без предварительного клика пользователя по странице (защита от навязчивого звука).",
      "preload=\"metadata\" подгружает только длительность дорожки без скачивания всего MP3-файла."
    ],
    "tags": [
      "HTML",
      "audio",
      "mp3",
      "play",
      "playbackRate",
      "аудио",
      "плеер",
      "подкаст",
      "звук"
    ],
    "when": "В плеерах подкастов, мессенджерах с голосовыми сообщениями и звуковых уведомлениях.",
    "alternatives": "Для синтеза звука и эквалайзеров в реальном времени используй Web Audio API (AudioContext).",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/audio"
  },
  {
    "lang": "html",
    "id": "html-script-module-importmap",
    "title": "HTML: ES-модули <script type=\"module\"> и карты импортов (importmap)",
    "summary": "Подключение модульного JavaScript и NPM-библиотек прямо в браузере по коротким именам без сборщика.",
    "code": "<script type=\"importmap\">\n{\n  \"imports\": {\n    \"canvas-confetti\": \"https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/+esm\"\n  }\n}\n</script>\n\n<script type=\"module\">\n  import confetti from 'canvas-confetti';\n  confetti({ particleCount: 80, spread: 60 });\n</script>",
    "example": "<script type=\"module\" src=\"/src/main.js\"></script>",
    "points": [
      "<script type=\"module\"> автоматически работает в строгом режиме (\"use strict\"), имеет собственную изолированную область видимости и выполняется отложенно (как с defer).",
      "Тег <script type=\"importmap\"> позволяет сопоставить короткие имена пакетов с их URL на CDN или локальными путями.",
      "Внутри модульного скрипта работает top-level await (можно писать await fetch(...) на верхнем уровне без обёртки в async function)."
    ],
    "tags": [
      "HTML",
      "script",
      "module",
      "importmap",
      "import",
      "esm",
      "модули",
      "cdn"
    ],
    "when": "Во всех современных проектах для чистого разделения JS-кода на файлы.",
    "alternatives": "В продакшене для крупных проектов модули обычно собирают через Vite для объединения чанков.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap"
  },
  {
    "lang": "html",
    "id": "html-details-exclusive-accordion",
    "title": "HTML: связанный аккордеон <details name=\"...\"> без JavaScript",
    "summary": "Современный атрибут name у тега <details>, автоматически закрывающий соседние вкладки аккордеона при открытии новой.",
    "code": "<div class=\"faq-group\">\n  <details name=\"faq\" open>\n    <summary>Как работает атрибут name у details?</summary>\n    <p>Когда у нескольких тегов details одинаковый name, открытым может быть только один из них!</p>\n  </details>\n\n  <details name=\"faq\">\n    <summary>Нужен ли для этого JavaScript?</summary>\n    <p>Нет, браузер переключает вкладки аккордеона полностью нативно.</p>\n  </details>\n</div>",
    "example": "summary::marker { color: #38bdf8; }",
    "points": [
      "Добавление одинакового атрибута name=\"faq\" к группе тегов <details> превращает их во взаимоисключающий аккордеон (как радиокнопки)!",
      "Атрибут open задаёт вкладку, открытую по умолчанию при загрузке страницы.",
      "Для стилизации кастомной стрелочки скройте стандартный маркер через summary { list-style: none; } и summary::-webkit-details-marker { display: none; }."
    ],
    "tags": [
      "HTML",
      "details",
      "summary",
      "accordion",
      "faq",
      "аккордеон",
      "спойлер"
    ],
    "when": "Для блоков частых вопросов (FAQ), мобильных меню-гармошек и свернутых секций фильтров.",
    "alternatives": "Если нужно держать открытыми сразу несколько пунктов одновременно — просто не указывай атрибут name.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/details"
  },
  {
    "lang": "html",
    "id": "html-search-hgroup-hr",
    "title": "HTML: семантический блок поиска <search>, группа заголовка <hgroup> и <hr>",
    "summary": "Специализированный ориентир для форм поиска и фильтрации, связка заголовка с подзаголовком и тематический разделитель.",
    "code": "<search aria-label=\"Поиск по документации\">\n  <form action=\"/search\">\n    <input type=\"search\" name=\"q\" placeholder=\"Найти функцию...\">\n    <button type=\"submit\">Найти</button>\n  </form>\n</search>\n\n<hgroup>\n  <p class=\"kicker\">Руководство</p>\n  <h1>Архитектура современных веб-приложений</h1>\n  <p class=\"subtitle\">Практическое пособие для фронтенд- и бэкенд-разработчиков</p>\n</hgroup>",
    "example": "<hr aria-hidden=\"true\">",
    "points": [
      "Тег <search> — официальный элемент стандарта HTML5, создающий доступную область (role=\"search\") для любых полей поиска и фильтров каталога.",
      "<hgroup> объединяет главный заголовок <h1>–<h6> с надзаголовком (kicker) и подзаголовком в единую смысловую группу.",
      "<hr> означает смысловую смену темы между абзацами или секциями меню."
    ],
    "tags": [
      "HTML",
      "search",
      "hgroup",
      "hr",
      "семантика",
      "поиск",
      "подзаголовок",
      "разделитель"
    ],
    "when": "Используй <search> вокруг поисковых строк и панелей фильтрации товаров.",
    "alternatives": "Раньше вместо <search> приходилось писать <div role=\"search\">.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search"
  },
  {
    "lang": "html",
    "id": "html-sub-sup-del-ins",
    "title": "HTML: индексы <sub>, <sup> и правки цен <del>, <ins>, <s>",
    "summary": "Разметка химических и математических формул, сносок, а также перечёркнутых старых и новых цен со скидкой.",
    "code": "<!-- Старая и новая цена в карточке товара -->\n<div class=\"price-box\">\n  <del><span class=\"sr-only\">Старая цена:</span> 4 990 ₽</del>\n  <ins><span class=\"sr-only\">Новая цена:</span> 3 490 ₽</ins>\n</div>\n\n<!-- Верхний и нижний индекс -->\n<p>Площадь зала: 120 м<sup>2</sup> · Формула воды: H<sub>2</sub>O</p>",
    "example": "ins { text-decoration: none; font-weight: 700; color: #10b981; }",
    "points": [
      "Для зачёркнутой старой цены в интернет-магазине используй <del> или <s>, а для новой цены со скидкой — <ins> (сбросив подчёркивание через text-decoration: none).",
      "<sup> поднимает текст в верхний индекс (м², x³, сноски [1]), а <sub> опускает в нижний индекс (CO₂).",
      "В CSS задай sub, sup { line-height: 0; }, чтобы индексы не раздвигали высоту строки абзаца!"
    ],
    "tags": [
      "HTML",
      "sub",
      "sup",
      "del",
      "ins",
      "s",
      "скидка",
      "старая цена",
      "степень",
      "индекс"
    ],
    "when": "В карточках товаров со скидками, технических характеристиках (м², м³) и статьях.",
    "alternatives": "Не используй просто <span style=\"text-decoration: line-through\"> — поисковики не поймут, что это старая цена.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/del"
  },
  {
    "lang": "html",
    "id": "html-favicon-theme-links",
    "title": "HTML: фавиконки SVG/PNG, Apple Touch Icon и Web App Manifest",
    "summary": "Современный минимальный набор иконок сайта для вкладок браузера, тёмной темы и домашнего экрана смартфона.",
    "code": "<head>\n  <!-- Векторная иконка (поддерживает адаптацию под тёмную тему внутри SVG!) -->\n  <link rel=\"icon\" href=\"/icon.svg\" type=\"image/svg+xml\">\n  <!-- Иконка для экрана «Домой» на iPhone и iPad (180x180) -->\n  <link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\">\n  <!-- Манифест веб-приложения с иконками 192x192 и 512x512 -->\n  <link rel=\"manifest\" href=\"/manifest.webmanifest\">\n</head>",
    "example": "/* Внутри icon.svg можно написать @media (prefers-color-scheme: dark) для смены цвета! */",
    "points": [
      "Вместо 20 старых тегов иконок разного размера современным браузерам достаточно всего трёх ссылок: icon.svg, apple-touch-icon.png и manifest.webmanifest!",
      "Внутрь файла icon.svg можно встроить тег <style> с медиазапросом prefers-color-scheme: dark, чтобы фавиконка сама меняла цвет на тёмных вкладках.",
      "Apple Touch Icon должна быть квадратной PNG без прозрачности размером 180×180 пикселей."
    ],
    "tags": [
      "HTML",
      "favicon",
      "icon",
      "apple-touch-icon",
      "manifest",
      "pwa",
      "иконка сайта"
    ],
    "when": "В секции <head> каждого веб-сайта и приложения.",
    "alternatives": "Старый формат favicon.ico нужен только для обратной совместимости с очень старыми утилитами.",
    "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Add_a_hit_map_on_top_of_an_image"
  },
  {
    "lang": "css",
    "id": "css-overflow-scrollbars",
    "title": "CSS: управление переполнением (overflow, overflow-clip-margin, scrollbar-gutter)",
    "summary": "Локализация горизонтального и вертикального скролла, защита от скачков ширины страницы и тонкие полосы прокрутки.",
    "code": "html {\n  /* Резервирует место под скроллбар, чтобы страница не дёргалась при открытии модалки! */\n  scrollbar-gutter: stable;\n  scrollbar-width: thin;\n  scrollbar-color: #334155 transparent;\n}\n\n.code-block {\n  overflow-x: auto; /* Показывает скроллбар только если строка кода реально не поместилась */\n}",
    "example": ".card {\n  overflow: clip; /* Обрезает края как hidden, но не создаёт скролл-контейнер! */\n}",
    "points": [
      "Всегда используй overflow: auto вместо overflow: scroll, чтобы полоса прокрутки не висела пустой, когда контента мало.",
      "Современное значение overflow: clip обрезает выступающие углы, но в отличие от overflow: hidden НЕ ломает position: sticky внутри родителя!",
      "scrollbar-gutter: stable предотвращает неприятный горизонтальный рывок шапки и контента, когда при фильтрации или открытии модалки пропадает полоса прокрутки."
    ],
    "tags": [
      "CSS",
      "overflow",
      "clip",
      "scrollbar-gutter",
      "scrollbar-width",
      "скроллбар",
      "прокрутка",
      "переполнение"
    ],
    "when": "Для блоков кода, таблиц, модальных окон и корневого тега html.",
    "alternatives": "overflow-x: hidden на body часто маскирует проблему вылезающего блока вместо её исправления.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter"
  },
  {
    "lang": "css",
    "id": "css-z-index-isolation",
    "title": "CSS: контекст наложения (z-index и isolation: isolate)",
    "summary": "Предсказуемое управление слоями без магических чисел z-index: 999999 с помощью локальной изоляции компонента.",
    "code": ".hero-card {\n  position: relative;\n  isolation: isolate; /* Все z-index внутри карточки остаются заперты внутри неё! */\n}\n\n.hero-card__bg-glow {\n  position: absolute;\n  inset: 0;\n  z-index: -1; /* Уходит под текст карточки, но НЕ проваливается под фон всей страницы! */\n}",
    "example": "/* isolation: isolate создаёт чистый контекст наложения без побочных эффектов */",
    "points": [
      "Главная ловушка z-index: -1 на фоновом декоре — элемент часто проваливается под фон родителя и исчезает. Свойство isolation: isolate на родителе решает это в одну строку!",
      "z-index работает не только на позиционированных элементах (relative/absolute/fixed), но и напрямую на дочерних элементах Flexbox и CSS Grid!",
      "Держи шкалу слоёв системной в CSS-переменных: --z-header: 50, --z-dropdown: 100, --z-modal: 200, --z-toast: 300."
    ],
    "tags": [
      "CSS",
      "z-index",
      "isolation",
      "isolate",
      "stacking context",
      "слои",
      "наложение"
    ],
    "when": "При верстке карточек с декоративным фоном, перекрывающихся аватаров и фиксированных панелей.",
    "alternatives": "Для модальных окон и поповеров нативные <dialog> и popover автоматически выходят в #top-layer поверх любого z-index.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/isolation"
  },
  {
    "lang": "css",
    "id": "css-pointer-events-user-select",
    "title": "CSS: управление кликами (pointer-events), выделением (user-select) и курсором",
    "summary": "Пропускание кликов сквозь прозрачные декоративные слои и запрет случайного выделения текста на кнопках.",
    "code": "/* Декоративное свечение поверх секции не мешает нажимать на кнопки под ним */\n.ambient-glow {\n  pointer-events: none;\n}\n\n/* Текст кнопок и табов не выделяется синим при быстром двойном клике */\n.btn, .tab, kbd {\n  user-select: none;\n}\n\n/* Весь API-ключ или команда терминала выделяется целиком одним кликом! */\n.api-token {\n  user-select: all;\n}",
    "example": ".is-loading {\n  pointer-events: none;\n  opacity: 0.6;\n}",
    "points": [
      "pointer-events: none делает элемент полностью «прозрачным» для мыши и пальца — клики проходят сквозь него к элементам ниже.",
      "user-select: all позволяет пользователю выделить весь промокод, ссылку или команду одним кликом мыши.",
      "Помни, что pointer-events: none блокирует только мышь/тач, но не блокирует переход по кнопке клавишей Tab (для полной блокировки кнопки используй атрибут disabled)."
    ],
    "tags": [
      "CSS",
      "pointer-events",
      "user-select",
      "cursor",
      "клик",
      "выделение текста",
      "курсор"
    ],
    "when": "На декоративных оверлеях, иконках внутри кнопок, промокодах и тост-контейнерах.",
    "alternatives": "Для полного отключения интерактивности целой секции (и мыши, и клавиатуры) используй HTML-атрибут inert.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/pointer-events"
  },
  {
    "lang": "css",
    "id": "css-backgrounds-patterns",
    "title": "CSS: фоновые изображения, сетки и паттерны (background-size, position, repeat)",
    "summary": "Наложение нескольких фонов и создание технических точечных и клеточных сеток на чистом CSS без картинок.",
    "code": "/* Техническая сетка из точек (dot matrix) на чистом CSS */\n.canvas-dots {\n  background-color: #090d14;\n  background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px);\n  background-size: 20px 20px;\n}\n\n/* Техническая миллиметровая клетка (grid lines) */\n.canvas-grid {\n  background-size: 32px 32px;\n  background-image:\n    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),\n    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);\n}",
    "example": "background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('hero.jpg') center / cover no-repeat;",
    "points": [
      "В свойстве background можно перечислить несколько слоёв через запятую (первый в списке лежит выше всех). Например, полупрозрачный градиент поверх фото для читаемости белого текста!",
      "Точечные и линейные паттерны через radial-gradient / linear-gradient + background-size: 24px 24px весят 0 байт и идеально чёткие на любых экранах.",
      "В сокращённой записи размер пишется через слэш после позиции: center / cover no-repeat."
    ],
    "tags": [
      "CSS",
      "background",
      "background-size",
      "background-image",
      "cover",
      "паттерн",
      "сетка",
      "фон"
    ],
    "when": "Для фонов рабочих холстов, технических лендингов и затемнения обложек под текстом.",
    "alternatives": "Для контентных изображений, важных для SEO и доступности, используй тег <img> с object-fit: cover.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/background"
  },
  {
    "lang": "css",
    "id": "css-borders-outline",
    "title": "CSS: границы (border, border-radius) и контур фокуса (outline, outline-offset)",
    "summary": "Геометрия скруглений вложенных карточек, отличие outline от border и аккуратные разделители.",
    "code": ".outer-card {\n  --inner-radius: 8px;\n  --card-padding: 8px;\n  padding: var(--card-padding);\n  /* Формула идеального концентрического скругления: внутренний радиус + отступ! */\n  border-radius: calc(var(--inner-radius) + var(--card-padding));\n}\n\n.inner-image {\n  border-radius: var(--inner-radius);\n}\n\n.btn:focus-visible {\n  outline: 2px solid #38bdf8;\n  outline-offset: 2px;\n}",
    "example": "border-radius: 9999px; /* Идеальная капсула любой высоты */",
    "points": [
      "Чтобы скругление вложенной картинки и внешней карточки выглядело гармонично (концентрически), внешний радиус должен быть равен внутреннему радиусу плюс padding карточки!",
      "В отличие от border, свойство outline не занимает места в блочной модели (элемент не прыгает при появлении рамки) и поддерживает отступ outline-offset.",
      "border-radius: 50% превращает квадратный блок в круг, а border-radius: 9999px создаёт ровную капсулу на прямоугольнике."
    ],
    "tags": [
      "CSS",
      "border",
      "border-radius",
      "outline",
      "outline-offset",
      "рамка",
      "скругление"
    ],
    "when": "При проектировании карточек, кнопок, инпутов и состояний фокуса.",
    "alternatives": "Для градиентной рамки со скруглением используют двойной background с padding-box и border-box.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/border-radius"
  },
  {
    "lang": "css",
    "id": "css-media-preference-queries",
    "title": "CSS: медиазапросы возможностей (@media hover, prefers-reduced-motion, print)",
    "summary": "Адаптация интерфейса под тач-экраны без залипающих ховеров, бережное отношение к вестибулярному аппарату и печать.",
    "code": "/* Ховер-эффекты применяются только на устройствах с реальным курсором мыши */\n@media (hover: hover) and (pointer: fine) {\n  .card:hover {\n    border-color: var(--accent);\n    transform: translateY(-2px);\n  }\n}\n\n/* Отключение резких движений, если в ОС включено «Уменьшение движения» */\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}",
    "example": "@media (width >= 768px) { /* Современный синтаксис диапазонов Media Queries Level 4 */ }",
    "points": [
      "На смартфонах обычный :hover «залипает» после тапа пальцем. Оборачивание ховеров в @media (hover: hover) делает мобильный интерфейс чистым.",
      "В современном CSS вместо min-width: 768px можно писать наглядные математические неравенства: @media (width >= 768px) или @media (480px <= width < 1024px)!",
      "Правило @media print позволяет скрыть шапку, сайдбар и кнопки при сохранении страницы или счёта в PDF."
    ],
    "tags": [
      "CSS",
      "media",
      "hover",
      "pointer",
      "prefers-reduced-motion",
      "print",
      "адаптивность",
      "медиазапросы"
    ],
    "when": "В каждом продакшен-проекте для корректной работы на смартфонах, десктопах и при печати.",
    "alternatives": "Для адаптации карточки под ширину конкретной колонки используй @container вместо @media.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries"
  },
  {
    "lang": "css",
    "id": "css-font-face-loading",
    "title": "CSS: подключение шрифтов (@font-face, font-display: swap, variable fonts)",
    "summary": "Правильная загрузка локальных шрифтов WOFF2 без блокировки текста и с сохранением метрик запасного шрифта.",
    "code": "@font-face {\n  font-family: 'InterVariable';\n  src: url('/fonts/Inter-Variable.woff2') format('woff2');\n  font-weight: 100 900;  /* Один вариативный файл покрывает все начертания от Thin до Black! */\n  font-style: normal;\n  font-display: swap;    /* Сразу показывает текст системным шрифтом до загрузки файла */\n}\n\nbody {\n  font-family: 'InterVariable', system-ui, -apple-system, sans-serif;\n}",
    "example": "font-feature-settings: \"cv02\", \"cv03\", \"cv04\"; /* Включение альтернативных глифов в шрифте */",
    "points": [
      "Сегодня достаточно одного формата woff2 — он поддерживается 99% браузеров и сжимает шрифт на 30% лучше старого woff/ttf.",
      "font-display: swap гарантирует, что пользователь сразу увидит текст страницы, даже при медленном мобильном интернете.",
      "Вариативный шрифт (Variable Font) заменяет собой 5–6 отдельных файлов (Regular, Medium, SemiBold, Bold), ускоряя загрузку сайта."
    ],
    "tags": [
      "CSS",
      "font-face",
      "woff2",
      "font-display",
      "swap",
      "variable fonts",
      "шрифты",
      "типографика"
    ],
    "when": "При подключении фирменных шрифтов проекта.",
    "alternatives": "Системный стек system-ui, -apple-system, Segoe UI, Roboto работает мгновенно вообще без скачивания файлов.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/@font-face"
  },
  {
    "lang": "css",
    "id": "css-columns-masonry",
    "title": "CSS: многоколоночная верстка (columns, column-gap, break-inside: avoid)",
    "summary": "Газетная раскладка текста и плиточная сетка карточек разной высоты (Masonry-эффект) на чистом CSS.",
    "code": ".masonry-gallery {\n  columns: 3 280px; /* До 3 колонок шириной минимум 280px */\n  column-gap: 16px;\n}\n\n.masonry-card {\n  break-inside: avoid; /* Запрещает разрывать карточку пополам между колонками! */\n  margin-bottom: 16px;\n}",
    "example": "column-rule: 1px solid var(--line); /* Тонкая вертикальная линия между текстовыми колонками */",
    "points": [
      "Свойство columns: 3 280px автоматически уменьшает число колонок с 3 до 2 и 1 на узких экранах без единого медиазапроса.",
      "Обязательно добавляй break-inside: avoid дочерним карточкам, иначе браузер разрежет карточку пополам при переходе в следующий столбец!",
      "Учитывай, что элементы в columns идут сверху вниз по столбцам, а не слева направо по строкам."
    ],
    "tags": [
      "CSS",
      "columns",
      "column-count",
      "break-inside",
      "masonry",
      "колонки",
      "галерея",
      "плитка"
    ],
    "when": "Для фотогалерей с картинками разной высоты, облака отзывов и длинных списков ссылок в подвале.",
    "alternatives": "Если важен строгий порядок карточек слева направо (по дате или цене), используй CSS Grid.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/columns"
  },
  {
    "lang": "css",
    "id": "css-counters",
    "title": "CSS: автоматическая нумерация секций и шагов (counter-reset, counter-increment)",
    "summary": "Генерация красивых номеров глав (01, 02, 1.1) и шагов инструкции чисто средствами CSS без хардкода цифр в HTML.",
    "code": ".steps-list {\n  counter-reset: step-counter;\n  list-style: none;\n  padding: 0;\n}\n\n.steps-list li {\n  counter-increment: step-counter;\n}\n\n.steps-list li::before {\n  /* Выводит \"01\", \"02\", \"03\" с ведущим нулём! */\n  content: counter(step-counter, decimal-leading-zero);\n  font-family: monospace;\n  color: #38bdf8;\n  margin-right: 10px;\n}",
    "example": "content: counters(section, \".\") \" \"; /* Для вложенной нумерации 1.1, 1.2, 2.1 */",
    "points": [
      "counter-reset инициализирует счётчик на родителе, counter-increment увеличивает его на каждом элементе, а counter() выводит значение в ::before.",
      "Второй параметр decimal-leading-zero автоматически форматирует числа меньше 10 с ведущим нулём (01, 02, 03).",
      "При удалении или перестановке шагов в HTML вся нумерация пересчитывается автоматически."
    ],
    "tags": [
      "CSS",
      "counter-reset",
      "counter-increment",
      "counter",
      "нумерация",
      "счётчик",
      "шаги"
    ],
    "when": "Для оформления пошаговых гайдов, оглавлений документации и нумерации строк кода.",
    "alternatives": "Для простых списков без префиксов \"01\" достаточно стилизовать нативный <ol> через li::marker.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters"
  },
  {
    "lang": "javascript",
    "id": "js-array-slice-splice-at",
    "title": "JS: выборка с конца (.at(-1)) и иммутабельное изменение (toSpliced, with, slice)",
    "summary": "Удобное получение последнего элемента массива и новые методы точечной замены и удаления без мутации исходных данных.",
    "code": "const items = ['HTML', 'CSS', 'JS', 'PHP'];\n\n// Получение последнего и предпоследнего элемента через отрицательный индекс!\nconst last = items.at(-1);       // 'PHP'\nconst secondLast = items.at(-2); // 'JS'\n\n// Немутирующая замена элемента по индексу (возвращает новый массив)\nconst updated = items.with(2, 'TypeScript'); // ['HTML', 'CSS', 'TypeScript', 'PHP']\n\n// Немутирующее удаление и вставка (вместо старого мутирующего splice)\nconst withoutFirst = items.toSpliced(0, 1);",
    "example": "const pageItems = items.slice(0, 10); /* Копия первых 10 элементов */",
    "points": [
      "Метод arr.at(-1) гораздо чище и короче старой записи arr[arr.length - 1], а также работает и со строками: str.at(-1)!",
      "Классические методы .splice() и .reverse() ломают исходный массив. Их современные близнецы .toSpliced() и .toReversed() возвращают новую копию.",
      "Метод arr.with(index, value) идеально подходит для обновления одного элемента массива в стейте приложения."
    ],
    "tags": [
      "JavaScript",
      "at",
      "slice",
      "splice",
      "toSpliced",
      "toReversed",
      "with",
      "массивы",
      "последний элемент"
    ],
    "when": "При пагинации (slice), чтении последнего элемента очереди (at(-1)) и обновлении списков в UI.",
    "alternatives": "Используй мутирующий .splice() только когда сознательно работаешь с локальным временным массивом.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/at"
  },
  {
    "lang": "javascript",
    "id": "js-math-random-crypto",
    "title": "JS: математика (Math.round, clamp), случайные числа и генерация UUID (crypto.randomUUID)",
    "summary": "Округление, генерация случайных целых чисел в диапазоне и создание криптостойких уникальных ID без библиотек.",
    "code": "// Встроенная в браузер и Node.js генерация уникального UUID v4!\nconst id = crypto.randomUUID(); // \"36b8f84d-df4e-4d49-b662-bcde71a8764f\"\n\n// Случайное целое число от min до max включительно\nconst randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;\n\n// Ограничение числа заданным диапазоном [min, max] (аналог CSS clamp)\nconst clamp = (val, min, max) => Math.min(Math.max(val, min), max);\nconst volume = clamp(120, 0, 100); // 100",
    "example": "const price = Number((19.99 * 3).toFixed(2)); /* Округление до 2 знаков после запятой */",
    "points": [
      "Нативный метод crypto.randomUUID() мгновенно генерирует стандартный 36-символьный UUID v4 — сторонний npm-пакет uuid больше не нужен!",
      "При работе с деньгами в JS избегай ошибок плавающей точки (0.1 + 0.2 === 0.30000000000000004): веди расчёты в копейках (целых числах) или округляй через Math.round(val * 100) / 100.",
      "Формула Math.min(Math.max(val, min), max) незаменима для ползунков, зума и координат перетаскивания."
    ],
    "tags": [
      "JavaScript",
      "Math",
      "random",
      "randomUUID",
      "crypto",
      "round",
      "floor",
      "clamp",
      "uuid",
      "числа"
    ],
    "when": "При создании временных ID для новых задач/карточек, написании калькуляторов и игр.",
    "alternatives": "Для токенов безопасности используй crypto.getRandomValues() вместо предсказуемого Math.random().",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Crypto/randomUUID"
  },
  {
    "lang": "javascript",
    "id": "js-geometry-scroll",
    "title": "JS: координаты элементов (getBoundingClientRect) и плавный скролл (scrollIntoView)",
    "summary": "Точное измерение размеров и положения блока относительно окна и прокрутка страницы к нужному элементу.",
    "code": "const targetSection = document.getElementById('pricing');\n\n// Плавная прокрутка страницы к элементу по центру или по верхнему краю\ntargetSection.scrollIntoView({\n  behavior: 'smooth',\n  block: 'start'\n});\n\n// Точные координаты и размеры элемента относительно видимой области окна (viewport)\nconst rect = button.getBoundingClientRect();\nconsole.log(rect.top, rect.left, rect.width, rect.height);",
    "example": "window.scrollTo({ top: 0, behavior: 'smooth' }); /* Кнопка «Наверх» */",
    "points": [
      "element.scrollIntoView({ behavior: \"smooth\", block: \"nearest\" }) аккуратно прокручивает список так, чтобы выбранный с клавиатуры пункт стал виден.",
      "getBoundingClientRect() возвращает дробные субпиксельные значения относительно окна браузера (viewport). Чтобы получить координату от самого верха документа, прибавь window.scrollY.",
      "Учитывай, что частый вызов getBoundingClientRect() в цикле заставляет браузер синхронно пересчитывать лейаут (forced reflow)."
    ],
    "tags": [
      "JavaScript",
      "getBoundingClientRect",
      "scrollIntoView",
      "scrollTo",
      "координаты",
      "размеры",
      "прокрутка"
    ],
    "when": "Для позиционирования выпадающих тултипов рядом с кнопкой, кнопки «Наверх» и навигации по списку.",
    "alternatives": "Для отслеживания изменения размеров блока во времени используй ResizeObserver.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Element/scrollIntoView"
  },
  {
    "lang": "javascript",
    "id": "js-resize-mutation-observer",
    "title": "JS: отслеживание размеров блока (ResizeObserver) и изменений DOM (MutationObserver)",
    "summary": "Реакция графиков и холстов на изменение ширины их родительской колонки (а не только всего окна браузера).",
    "code": "const chartBox = document.querySelector('.chart-container');\n\n// Срабатывает при любом изменении размера самого блока (например, при сворачивании сайдбара!)\nconst ro = new ResizeObserver((entries) => {\n  for (const entry of entries) {\n    const { width, height } = entry.contentRect;\n    resizeCanvas(width, height);\n  }\n});\n\nro.observe(chartBox);",
    "example": "ro.disconnect(); /* Остановка наблюдения при удалении компонента */",
    "points": [
      "Событие window.onresize не срабатывает, когда блок меняет ширину из-за закрытия боковой панели или переключения флекс-колонки. ResizeObserver видит любое изменение размера самого элемента!",
      "Идеально подходит для перерисовки <canvas>, графиков и адаптивных таблиц.",
      "MutationObserver используется, когда нужно отследить изменение атрибутов или добавление новых узлов сторонним скриптом."
    ],
    "tags": [
      "JavaScript",
      "ResizeObserver",
      "MutationObserver",
      "resize",
      "размер",
      "адаптивность",
      "canvas"
    ],
    "when": "При разработке графиков, интерактивных генераторов, сплит-панелей и редакторов.",
    "alternatives": "Если нужно менять только CSS-стили при изменении ширины родителя, используй CSS @container queries.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/ResizeObserver"
  },
  {
    "lang": "javascript",
    "id": "js-custom-events-error",
    "title": "JS: собственные события (CustomEvent) и обработка ошибок (try / catch / finally)",
    "summary": "Слабосвязанный обмен сообщениями между независимыми модулями интерфейса и надёжный перехват исключений.",
    "code": "// 1. Отправка кастомного события с данными в объекте detail\nwindow.dispatchEvent(new CustomEvent('cart:updated', {\n  detail: { count: 4, totalPrice: 5200 }\n}));\n\n// 2. Подписка в любом другом месте приложения (например, в шапке)\nwindow.addEventListener('cart:updated', (e) => {\n  cartBadge.textContent = e.detail.count;\n});",
    "example": "try {\n  await saveData();\n} catch (err) {\n  showError(err.message);\n} finally {\n  spinner.hidden = true; /* Выполнится в любом случае! */\n}",
    "points": [
      "Блок finally внутри try/catch гарантированно выполняется и после успеха, и после ошибки — это лучшее место для выключения индикатора загрузки (isLoading = false).",
      "При пробросе собственной ошибки можно сохранить исходную причину через new Error(\"Не удалось загрузить профиль\", { cause: originalErr }).",
      "CustomEvent позволяет развязать модули (например, каталог и шапку с корзиной) без жёстких прямых импортов."
    ],
    "tags": [
      "JavaScript",
      "CustomEvent",
      "dispatchEvent",
      "try",
      "catch",
      "finally",
      "Error",
      "события",
      "ошибки"
    ],
    "when": "Для связи компонентов на чистом JS и безопасного выполнения сетевых операций.",
    "alternatives": "Для синхронизации данных между РАЗНЫМИ открытыми вкладками одного сайта используй new BroadcastChannel(\"app_sync\").",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/CustomEvent"
  },
  {
    "lang": "javascript",
    "id": "js-web-animations-api",
    "title": "JS: программные анимации через Web Animations API (element.animate)",
    "summary": "Нативный запуск плавных CSS-подобных анимаций напрямую из JavaScript с поддержкой промиса окончания (.finished).",
    "code": "async function flashHighlight(element) {\n  const animation = element.animate(\n    [\n      { transform: 'scale(0.96)', backgroundColor: 'rgba(56, 189, 248, 0.25)' },\n      { transform: 'scale(1)',    backgroundColor: 'transparent' }\n    ],\n    {\n      duration: 450,\n      easing: 'cubic-bezier(0.22, 1, 0.36, 1)'\n    }\n  );\n\n  // Можно дождаться завершения анимации через await!\n  await animation.finished;\n}",
    "example": "await modal.animate([{ opacity: 1 }, { opacity: 0 }], 200).finished;\nmodal.close();",
    "points": [
      "Метод element.animate(keyframes, options) работает на том же быстром движке браузера, что и CSS @keyframes, но позволяет передавать динамические координаты из JS!",
      "Свойство animation.finished возвращает Promise — можно легко дождаться конца анимации закрытия и только потом удалить элемент из DOM.",
      "Не требует подключения сторонних библиотек вроде GSAP или Anime.js для большинства интерфейсных задач."
    ],
    "tags": [
      "JavaScript",
      "animate",
      "Web Animations API",
      "WAAPI",
      "анимация",
      "finished",
      "keyframes"
    ],
    "when": "Когда нужно плавно скрыть элемент перед удалением из DOM или анимировать полёт товара в корзину.",
    "alternatives": "Для простых статических ховеров используй обычный CSS transition.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Element/animate"
  },
  {
    "lang": "html",
    "id": "html-main-element",
    "title": "HTML: главный контент страницы <main>",
    "summary": "Семантический контейнер для уникального содержимого текущей страницы (без сквозной шапки, меню и подвала).",
    "code": "<body>\n  <header>Шапка сайта</header>\n  <main id=\"main-content\">\n    <h1>Каталог ноутбуков</h1>\n    <p>Основное содержимое страницы...</p>\n  </main>\n  <footer>Подвал сайта</footer>\n</body>",
    "example": "<a href=\"#main-content\" class=\"skip-link\">Перейти к контенту</a>",
    "points": [
      "На странице должен быть только один видимый элемент <main> (допускается больше только если остальные скрыты атрибутом hidden).",
      "Не вкладывай <main> внутрь <article>, <aside>, <footer>, <header> или <nav>.",
      "Добавь id=\"main-content\" на <main>, чтобы пользователи с клавиатурой могли сразу перепрыгнуть навигацию."
    ],
    "tags": [
      "HTML",
      "main",
      "семантика",
      "контент",
      "skip-link",
      "каркас"
    ],
    "when": "На каждой веб-странице вокруг центральной рабочей области.",
    "alternatives": "Устаревший <div id=\"main\" role=\"main\"> полностью заменён нативным тегом <main>.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/main"
  },
  {
    "lang": "html",
    "id": "html-nav-breadcrumbs",
    "title": "HTML: навигация <nav> и разметка «хлебных крошек» (Breadcrumbs)",
    "summary": "Доступная разметка главного меню, оглавления статьи и цепочки навигации с атрибутом aria-current=\"page\".",
    "code": "<nav aria-label=\"Хлебные крошки\">\n  <ol class=\"breadcrumbs\">\n    <li><a href=\"/\">Главная</a></li>\n    <li><a href=\"/docs\">Справочник</a></li>\n    <li><span aria-current=\"page\">CSS Grid</span></li>\n  </ol>\n</nav>",
    "example": "[aria-current=\"page\"] {\n  color: var(--accent);\n  font-weight: 600;\n}",
    "points": [
      "Если на странице несколько блоков <nav> (в шапке, в сайдбаре и хлебные крошки), обязательно дай каждому понятный aria-label!",
      "Для хлебных крошек используй нумерованный список <ol>, так как порядок уровней вложенности здесь важен.",
      "Атрибут aria-current=\"page\" на активном пункте меню сообщает скринридеру, что пользователь уже находится на этой странице."
    ],
    "tags": [
      "HTML",
      "nav",
      "breadcrumbs",
      "aria-current",
      "хлебные крошки",
      "меню",
      "навигация"
    ],
    "when": "Для главного меню сайта, бокового оглавления документации, пагинации и хлебных крошек.",
    "alternatives": "Обычный блок ссылок в футере (политика, соцсети) не обязательно оборачивать в <nav>, достаточно <footer>.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/nav"
  },
  {
    "lang": "html",
    "id": "html-article-section-aside",
    "title": "HTML: разница между <article>, <section> и <aside>",
    "summary": "Чёткое правило выбора между независимой карточкой (<article>), тематической главой (<section>) и боковым блоком (<aside>).",
    "code": "<section aria-labelledby=\"news-heading\">\n  <h2 id=\"news-heading\">Последние статьи</h2>\n\n  <article class=\"post-card\">\n    <h3>Обзор PHP 8.3</h3>\n    <p>Что нового появилось в типизации классов и JSON...</p>\n  </article>\n</section>\n\n<aside aria-label=\"Рекламный блок\">\n  <p>Подпишитесь на наш Telegram-канал</p>\n</aside>",
    "example": "/* Правило: если блок можно вырвать со страницы и отправить в RSS без потери смысла — это <article>! */",
    "points": [
      "Используй <article> для самодостаточной единицы контента: карточка товара, пост в блоге, виджет погоды, комментарий пользователя.",
      "Используй <section> для логического раздела страницы со своим заголовком <h2> (например: «Преимущества», «Отзывы», «Тарифы»).",
      "Если контейнер нужен исключительно для CSS-сетки или флекса и не несёт смысловой роли — используй обычный <div>!"
    ],
    "tags": [
      "HTML",
      "article",
      "section",
      "aside",
      "div",
      "семантика",
      "разница",
      "карточка"
    ],
    "when": "При проектировании структуры лендингов, магазинов, новостных порталов и документации.",
    "alternatives": "Не заменяй каждый <div> на <section> — пустые секции без заголовков только засоряют дерево доступности.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/article"
  },
  {
    "lang": "html",
    "id": "html-label-for",
    "title": "HTML: подпись поля формы <label> и увеличение кликабельной зоны",
    "summary": "Связывание текстовой метки с полем ввода для удобства нажатия пальцем и обязательной доступности форм.",
    "code": "<!-- Способ 1: вложенный инпут (не требует придумывать уникальный id!) -->\n<label class=\"field\">\n  <span>Электронная почта</span>\n  <input type=\"email\" name=\"email\" required>\n</label>\n\n<!-- Способ 2: связь через атрибуты for и id -->\n<div class=\"checkbox-row\">\n  <input type=\"checkbox\" id=\"agree-terms\" name=\"agree\" required>\n  <label for=\"agree-terms\">Согласен с условиями оферты</label>\n</div>",
    "example": "label { cursor: pointer; }",
    "points": [
      "Клик по тексту <label> автоматически ставит курсор в связанное текстовое поле или переключает галочку чекбокса/радиокнопки!",
      "Никогда не используй placeholder вместо <label>: как только пользователь начнёт печатать, подсказка исчезнет, и он забудет, что требовалось ввести.",
      "Вкладывание <input> прямо внутрь <label> избавляет от необходимости генерировать десятки уникальных id."
    ],
    "tags": [
      "HTML",
      "label",
      "for",
      "input",
      "форма",
      "подпись",
      "доступность",
      "чекбокс"
    ],
    "when": "Для абсолютно каждого поля ввода, чекбокса, радиокнопки и выпадающего списка <select>.",
    "alternatives": "Если у поля поиска в шапке нет видимой текстовой подписи, добавь инпуту aria-label=\"Поиск по сайту\".",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/label"
  },
  {
    "lang": "html",
    "id": "html-optgroup-multiple",
    "title": "HTML: атрибуты форм (autocomplete, autofocus, readonly vs disabled)",
    "summary": "Тонкое управление поведением полей формы: автозаполнение карт и адресов, отличие readonly от disabled.",
    "code": "<form>\n  <!-- Включает автозаполнение имени и адреса из профиля браузера -->\n  <input type=\"text\" name=\"name\" autocomplete=\"name\">\n  <input type=\"password\" name=\"new_pass\" autocomplete=\"new-password\">\n\n  <!-- readonly: нельзя редактировать, НО значение ОТПРАВЛЯЕТСЯ на сервер и копируется! -->\n  <input type=\"text\" name=\"promo\" value=\"DEVSHELF2026\" readonly>\n\n  <!-- disabled: поле полностью выключено и НЕ отправляется в $_POST / FormData! -->\n  <input type=\"text\" name=\"legacy_id\" value=\"104\" disabled>\n</form>",
    "example": "<input type=\"search\" autofocus>",
    "points": [
      "Ключевая разница: поле с readonly можно выделить мышью, скопировать, и его значение уходит на сервер при отправке формы. Поле с disabled полностью игнорируется при отправке формы!",
      "Правильные значения autocomplete (\"username\", \"current-password\", \"new-password\", \"cc-number\", \"tel\") позволяют менеджеру паролей заполнить форму в один тап.",
      "Атрибут autofocus автоматически ставит курсор в поле при открытии страницы или модального окна <dialog>."
    ],
    "tags": [
      "HTML",
      "readonly",
      "disabled",
      "autocomplete",
      "autofocus",
      "form",
      "атрибуты форм"
    ],
    "when": "В формах входа, регистрации, оформления заказа и полях с промокодами/реферальными ссылками.",
    "alternatives": "Если нужно передать служебный ID на сервер вообще без показа поля пользователю, используй <input type=\"hidden\">.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/autocomplete"
  },
  {
    "lang": "html",
    "id": "html-iframe-lazy-loading",
    "title": "HTML: оптимизация изображений (loading=\"lazy\", decoding=\"async\", fetchpriority=\"high\")",
    "summary": "Ускорение загрузки первого экрана (LCP) за счёт приоритета главного баннера и ленивой подгрузки остальных фото.",
    "code": "<!-- Главный баннер на первом экране (LCP): грузим с максимальным приоритетом! -->\n<img\n  src=\"/img/hero-dashboard.webp\"\n  alt=\"Интерфейс панели управления\"\n  width=\"1200\"\n  height=\"675\"\n  fetchpriority=\"high\"\n>\n\n<!-- Картинки ниже первого экрана: грузим лениво по мере скролла -->\n<img\n  src=\"/img/card-1.webp\"\n  alt=\"Превью шаблона\"\n  width=\"400\"\n  height=\"300\"\n  loading=\"lazy\"\n  decoding=\"async\"\n>",
    "example": "/* Всегда указывай атрибуты width и height, чтобы страница не прыгала при загрузке фото (CLS = 0) */",
    "points": [
      "Золотое правило производительности: главному изображению на первом экране ставь fetchpriority=\"high\" (и НЕ ставь loading=\"lazy\"), а всем картинкам ниже первого экрана — loading=\"lazy\"!",
      "Явное указание атрибутов width и height позволяет браузеру заранее зарезервировать пропорции места до скачивания картинки, избавляя от скачков контента (Cumulative Layout Shift).",
      "decoding=\"async\" разрешает браузеру декодировать сжатый растр в фоновом потоке без фризов скролла."
    ],
    "tags": [
      "HTML",
      "img",
      "loading",
      "lazy",
      "fetchpriority",
      "decoding",
      "lcp",
      "cls",
      "оптимизация картинок"
    ],
    "when": "На всех изображениях лендингов, карточек товаров и статей.",
    "alternatives": "Старые JS-скрипты ленивой загрузки через data-src больше не нужны в современных браузерах.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority"
  },
  {
    "lang": "css",
    "id": "css-gap-property",
    "title": "CSS: отступы между элементами сетки (gap, row-gap, column-gap)",
    "summary": "Единое свойство внутренних промежутков между карточками для CSS Grid, Flexbox и многоколоночной верстки.",
    "code": ".cards-container {\n  display: flex;\n  flex-wrap: wrap;\n  /* 24px между рядами по вертикали, 16px между карточками по горизонтали */\n  gap: 24px 16px;\n}\n\n.toolbar {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}",
    "example": "row-gap: 20px;\ncolumn-gap: 12px;",
    "points": [
      "Свойство gap создаёт отступы ТОЛЬКО между соседними элементами, не добавляя лишних отступов по внешним краям контейнера!",
      "Если задано одно значение (gap: 16px), оно применяется и по вертикали, и по горизонтали. Если два (gap: 24px 12px) — сначала row-gap, затем column-gap.",
      "В Flexbox при использовании режимов распределения свободного места (justify-content: space-between, space-around, space-evenly) расстояние между элементами вычисляется автоматически из ширины контейнера, поэтому фиксированный gap используется с start/center/end."
    ],
    "tags": [
      "CSS",
      "gap",
      "row-gap",
      "column-gap",
      "flex",
      "grid",
      "отступы",
      "сетка"
    ],
    "when": "В любых флекс- и грид-контейнерах вместо старых отрицательных margin и :not(:last-child).",
    "alternatives": "В обычном блочном потоке (display: block) свойство gap не работает — там используют margin-bottom.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/gap"
  },
  {
    "lang": "css",
    "id": "css-place-items-centering",
    "title": "CSS: мгновенное центрирование блока (place-items: center и place-content)",
    "summary": "Самый короткий способ отцентрировать элемент по вертикали и горизонтали в две строчки через CSS Grid.",
    "code": ".center-box {\n  display: grid;\n  place-items: center; /* Сокращение для align-items: center + justify-items: center */\n  min-height: 300px;\n}\n\n/* Наложение двух элементов друг на друга в одной ячейке без position: absolute! */\n.hero-stack {\n  display: grid;\n  place-items: center;\n}\n.hero-stack > * {\n  grid-area: 1 / 1;\n}",
    "example": "margin: auto; /* Внутри display: flex или display: grid также центрирует дочерний блок! */",
    "points": [
      "display: grid; place-items: center; — самый лаконичный способ отцентрировать иконку в кнопке или карточку на экране.",
      "Трюк grid-area: 1 / 1 для всех детей грида помещает фоновую картинку и текст в одну ячейку друг над другом без вырывания из потока через position: absolute!",
      "Внутри флекс- или грид-контейнера дочернему элементу можно просто написать margin: auto для центрирования."
    ],
    "tags": [
      "CSS",
      "place-items",
      "place-content",
      "align-items",
      "justify-content",
      "центрирование",
      "grid"
    ],
    "when": "Для центрирования иконок, заглушек пустых состояний (empty state), лоадеров и модалок.",
    "alternatives": "Старое центрирование через position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) длиннее и вырывает блок из потока.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/place-items"
  },
  {
    "lang": "css",
    "id": "css-text-decoration-underline",
    "title": "CSS: красивое подчёркивание ссылок (text-underline-offset и text-decoration-thickness)",
    "summary": "Тонкая настройка отступа, толщины и цвета линии подчёркивания текста без костылей с border-bottom.",
    "code": "a {\n  color: #38bdf8;\n  text-decoration: underline;\n  text-decoration-color: rgba(56, 189, 248, 0.35);\n  text-decoration-thickness: 1.5px;\n  text-underline-offset: 4px; /* Опускает линию на 4px ниже базовой линии букв! */\n  transition: text-decoration-color 150ms ease;\n}\n\na:hover {\n  text-decoration-color: #38bdf8;\n}",
    "example": "text-decoration-style: dashed; /* Пунктирное подчёркивание для тултипов и модальных ссылок */",
    "points": [
      "Раньше для красивого отступа линии под ссылкой приходилось отключать text-decoration и лепить border-bottom, который ломался на многострочных ссылках!",
      "Свойство text-underline-offset: 4px аккуратно отодвигает нативное подчёркивание вниз и отлично работает даже если ссылка перенеслась на 2–3 строки.",
      "Браузер по умолчанию включает text-decoration-skip-ink: auto, чтобы линия не перечёркивала нижние хвостики букв «р», «у», «д», «ц»."
    ],
    "tags": [
      "CSS",
      "text-underline-offset",
      "text-decoration",
      "text-decoration-color",
      "подчёркивание",
      "ссылки",
      "типографика"
    ],
    "when": "Для всех текстовых ссылок в статьях, документации и навигации.",
    "alternatives": "Анимированную линию, выезжающую слева направо, делают через background-image: linear-gradient(...) и background-size.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset"
  },
  {
    "lang": "css",
    "id": "css-Sticky-table-header",
    "title": "CSS: липкая шапка таблицы (sticky <th>) и фиксированная первая колонка",
    "summary": "Закрепление заголовков столбцов при вертикальной прокрутке больших таблиц данных и прайс-листов.",
    "code": ".table-scroll {\n  max-height: 420px;\n  overflow: auto;\n  border: 1px solid var(--line);\n}\n\ntable {\n  width: 100%;\n  border-collapse: separate; /* Важно для сохранения рамок у sticky-ячеек! */\n  border-spacing: 0;\n}\n\nthead th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: #121827; /* Непрозрачный фон обязателен, чтобы строки не просвечивали */\n  border-bottom: 1px solid var(--line-strong);\n}",
    "example": "tbody th:first-child {\n  position: sticky;\n  left: 0;\n  background: #0e1320;\n}",
    "points": [
      "При position: sticky на ячейках <th> используй border-collapse: separate; border-spacing: 0 вместо border-collapse: collapse — иначе нижняя рамка шапки пропадёт при скролле!",
      "Обязательно задай ячейкам <th> плотный непрозрачный background, чтобы прокручиваемые строки таблицы не просвечивали сквозь шапку.",
      "Аналогично через position: sticky; left: 0 можно зафиксировать первый столбец с названиями товаров при горизонтальном скролле на телефоне."
    ],
    "tags": [
      "CSS",
      "table",
      "sticky",
      "thead",
      "th",
      "border-collapse",
      "липкая шапка",
      "таблица"
    ],
    "when": "В админ-панелях, CRM, таблицах сравнения характеристик и финансовых отчётах.",
    "alternatives": "Две отдельные таблицы (одна для шапки, вторая для тела) ломают совпадение ширины колонок.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/border-collapse"
  },
  {
    "lang": "css",
    "id": "css-sr-only-visually-hidden",
    "title": "CSS: доступное скрытие текста для скринридеров (.visually-hidden / .sr-only)",
    "summary": "Стандартный паттерн скрытия подписи кнопки или заголовка секции для глаз с полным сохранением для голосового чтения.",
    "code": ".sr-only,\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}",
    "example": "<button type=\"button\">\n  <svg aria-hidden=\"true\">...</svg>\n  <span class=\"sr-only\">Удалить из избранного</span>\n</button>",
    "points": [
      "Обычные display: none и visibility: hidden полностью вырезают элемент и для глаз, и для программ экранного доступа (скринридеров)!",
      "Класс .sr-only (screen reader only) сжимает текст до 1 пикселя без удаления из дерева доступности — незрячий пользователь услышит чёткую подпись кнопки.",
      "Полезно также для ссылки «Перейти к основному контенту» (.skip-link:focus-visible), которая проявляется при первом нажатии Tab."
    ],
    "tags": [
      "CSS",
      "sr-only",
      "visually-hidden",
      "accessibility",
      "a11y",
      "скринридер",
      "скрыть элемент"
    ],
    "when": "Для кнопок, содержащих только иконку, скрытых заголовков секций и таблиц.",
    "alternatives": "На самой кнопке без текста можно также использовать атрибут aria-label=\"Удалить\".",
    "url": "https://www.w3.org/WAI/tutorials/forms/labels/#note-on-hiding-elements"
  },
  {
    "lang": "css",
    "id": "css-will-change-contain",
    "title": "CSS: аппаратное ускорение и изоляция рендеринга (contain, content-visibility: auto)",
    "summary": "Кратный прирост скорости отрисовки длинных страниц с сотнями карточек за счёт пропуска рендеринга вне экрана.",
    "code": ".catalog-card,\n.doc-section {\n  /* Браузер пропускает расчёт лейаута и отрисовку карточек, находящихся далеко за пределами экрана! */\n  content-visibility: auto;\n  /* Примерная высота карточки, чтобы ползунок скроллбара не прыгал */\n  contain-intrinsic-size: auto 260px;\n}",
    "example": "/* Прирост скорости начальной отрисовки на длинных списках достигает 3–5 раз! */",
    "points": [
      "content-visibility: auto — одно из самых мощных свойств современного CSS: браузер не тратит ресурсы на рендеринг блоков, пока пользователь не подскроллит к ним!",
      "Свойство contain-intrinsic-size: auto 260px сообщает браузеру ориентировочную высоту скрытого блока, чтобы общая высота страницы оставалась точной.",
      "Свойство will-change: transform ставь точечно только на элементы, которые реально постоянно двигаются (иначе переполнится видеопамять GPU)."
    ],
    "tags": [
      "CSS",
      "content-visibility",
      "contain-intrinsic-size",
      "contain",
      "will-change",
      "производительность",
      "оптимизация"
    ],
    "when": "На длинных страницах документации, лендингах с 10+ секциями и больших списках карточек.",
    "alternatives": "Виртуализация списков на JS (Virtual Scroll) сложнее и ломает встроенный поиск по странице Ctrl+F.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility"
  },
  {
    "lang": "html",
    "id": "html-a-download-rel",
    "title": "HTML: атрибут rel (noopener, noreferrer, nofollow, sponsored, preload)",
    "summary": "Управление безопасностью внешних ссылок, передачей реферера, SEO-весом рекламных ссылок и предзагрузкой.",
    "code": "<!-- Безопасная внешняя ссылка без передачи window.opener -->\n<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Внешний ресурс</a>\n\n<!-- Ссылка в комментариях пользователей или партнёрский блок (для SEO) -->\n<a href=\"https://partner.ru\" rel=\"nofollow sponsored\">Партнёрский материал</a>",
    "example": "<link rel=\"canonical\" href=\"https://devshelf.ru/docs\">",
    "points": [
      "rel=\"noopener\" защищает страницу от перехвата управления вкладкой через window.opener при target=\"_blank\".",
      "rel=\"noreferrer\" дополнительно скрывает адрес твоего сайта в заголовке Referer при переходе по внешней ссылке.",
      "rel=\"nofollow\" и rel=\"ugc\" указывают поисковым роботам не передавать ссылочный вес ссылкам из пользовательских комментариев."
    ],
    "tags": [
      "HTML",
      "rel",
      "noopener",
      "noreferrer",
      "nofollow",
      "sponsored",
      "canonical",
      "ссылки",
      "seo"
    ],
    "when": "На всех внешних ссылках, рекламных интеграциях и ссылках из пользовательского контента.",
    "alternatives": "Современные браузеры автоматически подразумевают noopener при target=\"_blank\", но явное указание остаётся стандартом.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/rel"
  },
  {
    "lang": "html",
    "id": "html-img-srcset-sizes",
    "title": "HTML: адаптивные изображения srcset и sizes для экранов Retina (2x, 3x)",
    "summary": "Автоматический выбор браузером оптимального размера картинки под плотность пикселей и ширину экрана смартфона.",
    "code": "<img\n  src=\"/img/card-800.webp\"\n  srcset=\"\n    /img/card-400.webp 400w,\n    /img/card-800.webp 800w,\n    /img/card-1200.webp 1200w\n  \"\n  sizes=\"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px\"\n  alt=\"Превью проекта\"\n  width=\"400\"\n  height=\"300\"\n  loading=\"lazy\"\n>",
    "example": "<img src=\"logo-1x.png\" srcset=\"logo-1x.png 1x, logo-2x.png 2x\" alt=\"Логотип\">",
    "points": [
      "Дескрипторы ширины (400w, 800w) в srcset сообщают браузеру реальную ширину каждого файла в пикселях до его скачивания.",
      "Атрибут sizes подсказывает браузеру, какую ширину на экране займёт картинка в текущей сетке колонок.",
      "Для фиксированных элементов (логотипы, иконки) используй дескрипторы плотности пикселей: 1x, 2x."
    ],
    "tags": [
      "HTML",
      "srcset",
      "sizes",
      "retina",
      "img",
      "webp",
      "адаптивные картинки"
    ],
    "when": "Для контентных фотографий в каталогах, карточках блога и баннерах.",
    "alternatives": "Если нужно полностью сменить кадрирование (например, вертикальное фото на телефоне и горизонтальное на ПК), используй тег <picture>.",
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Structuring_content/Responsive_images"
  },
  {
    "lang": "html",
    "id": "html-input-file-accept",
    "title": "HTML: выбор файлов <input type=\"file\"> (accept, multiple, capture)",
    "summary": "Фильтрация разрешённых форматов файлов в проводнике и прямой вызов камеры смартфона для фото документа.",
    "code": "<!-- Выбор нескольких изображений в формате PNG, JPG или WebP -->\n<label class=\"upload-zone\">\n  <span>Выберите фотографии или перетащите сюда</span>\n  <input\n    type=\"file\"\n    name=\"photos[]\"\n    accept=\"image/png, image/jpeg, image/webp\"\n    multiple\n  >\n</label>\n\n<!-- Вызов камеры смартфона напрямую для сканирования документа -->\n<input type=\"file\" accept=\"image/*\" capture=\"environment\">",
    "example": "accept=\".pdf,.docx,application/pdf\"",
    "points": [
      "Атрибут accept=\"image/png, image/jpeg\" делает неактивными все неподходящие файлы в системном окне выбора.",
      "Для загрузки сразу нескольких файлов на сервер в PHP имя инпута должно заканчиваться квадратными скобками: name=\"photos[]\" и атрибут multiple.",
      "capture=\"environment\" на телефонах сразу открывает заднюю камеру, а capture=\"user\" — фронтальную селфи-камеру."
    ],
    "tags": [
      "HTML",
      "file",
      "accept",
      "multiple",
      "capture",
      "upload",
      "загрузка файла",
      "камера"
    ],
    "when": "В формах загрузки аватара, прикрепления документов, чеков и галерей.",
    "alternatives": "Не забывай дублировать проверку MIME-типа на сервере через PHP finfo, так как фильтр accept можно обойти.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/file"
  },
  {
    "lang": "html",
    "id": "html-contenteditable-spellcheck",
    "title": "HTML: редактируемые блоки contenteditable, spellcheck и translate=\"no\"",
    "summary": "Превращение любого HTML-элемента в визуальный редактор текста и управление автопереводом брендов и кода.",
    "code": "<!-- Инлайн-редактируемый заголовок документа (как в Notion) -->\n<h2 contenteditable=\"plaintext-only\" spellcheck=\"true\">\n  Нажмите, чтобы переименовать проект\n</h2>\n\n<!-- Запрет автопереводчику браузера ломать названия брендов и код -->\n<code translate=\"no\">justify-content: space-between</code>",
    "example": "<input type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" autocomplete=\"off\">",
    "points": [
      "Современное значение contenteditable=\"plaintext-only\" разрешает редактировать текст, но при вставке из буфера обмена автоматически очищает чужие шрифты и стили!",
      "Атрибут translate=\"no\" защищает логотипы, имена переменных, команды терминала и фрагменты кода от искажения встроенным переводчиком Chrome/Яндекс.",
      "На полях логина, email и поиска кода ставь spellcheck=\"false\", чтобы браузер не подчёркивал никнеймы красной волнистой линией."
    ],
    "tags": [
      "HTML",
      "contenteditable",
      "plaintext-only",
      "spellcheck",
      "translate",
      "редактор",
      "автоперевод"
    ],
    "when": "Для быстрых редактируемых заметок, заголовков досок задач и блоков кода.",
    "alternatives": "Для обычных полей ввода в формах всегда предпочтительнее стандартные <input> и <textarea>.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/contenteditable"
  },
  {
    "lang": "html",
    "id": "html-noscript-base-meta-refresh",
    "title": "HTML: служебные теги <head> (<base>, <noscript>, http-equiv, color-scheme)",
    "summary": "Системная поддержка светлой/тёмной темы контролов браузера, фолбэк без JS и базовый URL документа.",
    "code": "<head>\n  <!-- Сообщает браузеру тему страницы ещё до загрузки CSS (перекрашивает фон и скроллбары!) -->\n  <meta name=\"color-scheme\" content=\"dark light\">\n\n  <!-- Предупреждение на случай отключённого JavaScript -->\n  <noscript>\n    <div class=\"alert\">Для работы интерактивной песочницы включите JavaScript.</div>\n  </noscript>\n</head>",
    "example": "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'\">",
    "points": [
      "<meta name=\"color-scheme\" content=\"dark light\"> мгновенно переключает системный фон браузера, полосы прокрутки и поля форм в тёмный режим без белой вспышки при загрузке!",
      "Тег <noscript> рендерит своё содержимое только если в браузере пользователя выключен или заблокирован JavaScript.",
      "Тег <base href=\"https://example.com/app/\"> меняет базовый путь для всех относительных ссылок на странице (используй с осторожностью, так как он влияет и на якорные ссылки #anchor)."
    ],
    "tags": [
      "HTML",
      "color-scheme",
      "noscript",
      "base",
      "http-equiv",
      "csp",
      "head",
      "тёмная тема"
    ],
    "when": "Метатег color-scheme рекомендуется добавлять во все проекты с поддержкой тёмной темы.",
    "alternatives": "Редиректы лучше делать через HTTP-статус 301/302 на сервере, а не через устаревший <meta http-equiv=\"refresh\">.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name"
  },
  {
    "lang": "css",
    "id": "css-attribute-selectors",
    "title": "CSS: селекторы по атрибутам ([href^=\"https\"], [href$=\".pdf\"], [data-*])",
    "summary": "Автоматическая стилизация внешних ссылок, ссылок на скачивание документов и состояний компонентов без лишних классов.",
    "code": "/* Все внешние ссылки, начинающиеся с https:// */\na[href^=\"https://\"]:not([href*=\"devshelf.ru\"])::after {\n  content: \" ↗\";\n}\n\n/* Все ссылки, заканчивающиеся на .pdf или .zip */\na[href$=\".pdf\"]::before {\n  content: \"📄 \";\n}\n\n/* Поиск подстроки в любом месте атрибута без учёта регистра (флаг i) */\nimg[src*=\".svg\" i] {\n  display: inline-block;\n}",
    "example": "[aria-expanded=\"true\"] .chevron { rotate: 180deg; }",
    "points": [
      "[attr^=\"val\"] проверяет начало строки, [attr$=\"val\"] — конец строки, а [attr*=\"val\"] — вхождение подстроки в любом месте!",
      "Флаг i перед закрывающей скобкой ([href$=\".pdf\" i]) делает проверку нечувствительной к регистру (.PDF и .pdf).",
      "Привязка стилей к ARIA-состояниям ([aria-selected=\"true\"], [aria-expanded=\"true\"]) избавляет от рассинхрона между визуальным классом .active и доступностью."
    ],
    "tags": [
      "CSS",
      "attribute selectors",
      "href",
      "data",
      "aria",
      "селекторы атрибутов",
      "ссылки"
    ],
    "when": "Для автоматической маркировки внешних ссылок, файлов для скачивания и стилизации ARIA-компонентов.",
    "alternatives": "Ручное проставление класса .external-link на каждой ссылке в статьях легко забыть.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/Attribute_selectors"
  },
  {
    "lang": "css",
    "id": "css-combinators",
    "title": "CSS: комбинаторы селекторов (>, +, ~) и паттерн «Лоботомированная сова» (* + *)",
    "summary": "Точный выбор непосредственных детей, следующего соседа и автоматические отступы между блоками статьи.",
    "code": "/* Только прямые дочерние li первого уровня (не трогая вложенные подменю) */\n.menu > li {\n  padding-inline: 12px;\n}\n\n/* Классический ритм статьи: отступ сверху у каждого элемента, за которым кто-то идёт (* + *) */\n.prose > * + * {\n  margin-top: 1em;\n}\n\n/* Подпись сразу после заголовка h2 имеет уменьшенный отступ */\n.prose > h2 + p {\n  margin-top: 0.4em;\n}",
    "example": "input:checked + .slider-thumb { translate: 20px 0; }",
    "points": [
      "Комбинатор > выбирает только прямых детей (первый уровень вложенности), защищая вложенные компоненты от протечки стилей.",
      "Комбинатор + (следующий сосед) выбирает элемент, который идёт СРАЗУ после первого (идеально для связки input:checked + label и h2 + p).",
      "Паттерн .prose > * + * задаёт верхний отступ всем элементам внутри статьи, кроме самого первого, создавая идеальный вертикальный ритм!"
    ],
    "tags": [
      "CSS",
      "combinators",
      "child",
      "sibling",
      "owl",
      "комбинаторы",
      "соседний селектор",
      "ритм"
    ],
    "when": "При оформлении текстовых статей (.prose), кастомных переключателей (checkbox + span) и многоуровневых меню.",
    "alternatives": "Для одномерных списков карточек и кнопок проще использовать display: flex; flex-direction: column; gap: 16px.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_selectors/Selectors_and_combinators"
  },
  {
    "lang": "css",
    "id": "css-min-max-fit-content",
    "title": "CSS: адаптивные ключевые слова размеров (min-content, max-content, fit-content)",
    "summary": "Подстройка ширины блока ровно под длину текста внутри него без растягивания на всю ширину родителя.",
    "code": ".section-badge {\n  /* Блок сжимается ровно по ширине текста, но не шире 100% экрана на мобильном! */\n  width: fit-content;\n  padding: 4px 12px;\n  border: 1px solid var(--line);\n}\n\n.pricing-grid {\n  display: grid;\n  /* Первая колонка ровно по ширине самой длинной подписи, вторая забирает остаток */\n  grid-template-columns: max-content 1fr;\n}",
    "example": "width: fit-content;\nmargin-inline: auto; /* Центрирует блок по ширине его контента без inline-block! */",
    "points": [
      "width: fit-content — волшебное свойство: блок обтягивает свой текст как inline-block, но при этом остаётся блочным (его можно отцентрировать через margin-inline: auto) и переносит строки, если экран уже текста!",
      "max-content разворачивает текст в одну длинную строку без переносов (удобно для колонок с датами и ценами в гриде).",
      "min-content сжимает блок до ширины самого длинного слова внутри него."
    ],
    "tags": [
      "CSS",
      "fit-content",
      "max-content",
      "min-content",
      "width",
      "размеры",
      "центрирование"
    ],
    "when": "Для бейджей, тегов, центрируемых заголовков с рамкой, цитат и колонок CSS Grid.",
    "alternatives": "display: inline-block не позволяет отцентрировать сам элемент через margin: 0 auto без text-align на родителе.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content"
  },
  {
    "lang": "css",
    "id": "css-blend-modes-masks",
    "title": "CSS: режимы наложения (mix-blend-mode) и градиентные маски затухания (mask-image)",
    "summary": "Плавное растворение краёв прокручиваемого списка или кода в прозрачность на любом фоне.",
    "code": "/* Плавное растворение правого края длинной строки табов или кода в прозрачность */\n.scroll-fade-right {\n  -webkit-mask-image: linear-gradient(to right, #000 85%, transparent 100%);\n  mask-image: linear-gradient(to right, #000 85%, transparent 100%);\n}\n\n/* Плавное растворение текста снизу в превью статьи */\n.article-preview {\n  mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);\n}",
    "example": "mix-blend-mode: overlay; /* Наложение текстуры или свечения на фон */",
    "points": [
      "Почему mask-image лучше наложенного поверх градиента? Потому что mask-image делает прозрачным сам элемент, и под ним может быть любой сложный фон, картинка или смена темы оформления!",
      "Внутри mask-image чёрный цвет (#000, непрозрачный) означает 100% видимую область, а transparent — полностью скрытую.",
      "Свойство mix-blend-mode: multiply позволяет мгновенно убрать белый фон у логотипа на светлой странице."
    ],
    "tags": [
      "CSS",
      "mask-image",
      "mix-blend-mode",
      "background-blend-mode",
      "маска",
      "затухание",
      "прозрачность"
    ],
    "when": "Для горизонтальных списков табов, превью заблокированных статей и каруселей логотипов.",
    "alternatives": "Костыль с position: absolute и градиентом в цвет фона ломается при переключении тёмной/светлой темы.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/mask-image"
  },
  {
    "lang": "css",
    "id": "css-property-houdini",
    "title": "CSS: типизированные переменные @property (плавная анимация градиентов и чисел)",
    "summary": "Регистрация типа CSS-переменной (<angle>, <color>, <length>), позволяющая плавно анимировать градиенты в браузере.",
    "code": "@property --gradient-angle {\n  syntax: '<angle>';\n  initial-value: 0deg;\n  inherits: false;\n}\n\n.animated-border {\n  background: conic-gradient(from var(--gradient-angle), #38bdf8, #818cf8, #38bdf8);\n  animation: spin-angle 4s linear infinite;\n}\n\n@keyframes spin-angle {\n  to { --gradient-angle: 360deg; }\n}",
    "example": "/* Без @property браузер считает переменную обычной строкой и не может плавно менять её от 0deg до 360deg */",
    "points": [
      "По умолчанию CSS-переменные не имеют типа, поэтому браузер не умеет плавно интерполировать их внутри linear-gradient или conic-gradient.",
      "Директива @property сообщает движку CSS точный тип переменной (<angle>, <color>, <percentage>, <number>), открывая полноценную анимацию через transition и @keyframes!",
      "Параметр initial-value обязателен при объявлении @property."
    ],
    "tags": [
      "CSS",
      "@property",
      "houdini",
      "custom properties",
      "переменные",
      "анимация градиента",
      "conic-gradient"
    ],
    "when": "Для анимированных градиентных рамок, плавной смены цветов градиента при ховере и круговых прогресс-баров.",
    "alternatives": "Вращение огромного псевдоэлемента ::before через transform: rotate(360deg) требует overflow: hidden.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@property"
  },
  {
    "lang": "css",
    "id": "css-starting-style-discrete",
    "title": "CSS: плавная анимация появления из display: none (@starting-style и allow-discrete)",
    "summary": "Современный стандарт CSS для плавного открытия и закрытия модальных окон <dialog> и поповеров без JS-таймеров.",
    "code": "dialog {\n  opacity: 0;\n  transform: scale(0.95);\n  transition:\n    opacity 200ms ease,\n    transform 200ms ease,\n    display 200ms allow-discrete,\n    overlay 200ms allow-discrete;\n}\n\ndialog[open] {\n  opacity: 1;\n  transform: scale(1);\n\n  /* Начальная точка анимации в момент перехода из display: none в открытое состояние! */\n  @starting-style {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n}",
    "example": "/* Позволяет плавно анимировать и открытие, и закрытие нативного <dialog> и [popover] */",
    "points": [
      "Раньше элемент, появляющийся из display: none, прыгал мгновенно без transition. Правило @starting-style задаёт стартовые стили первого кадра появления!",
      "Ключевое слово transition-behavior: allow-discrete удерживает элемент в DOM на время анимации закрытия (200ms), прежде чем применить display: none.",
      "Свойство overlay в списке transition удерживает модалку в верхнем слое (#top-layer) до конца плавного затухания."
    ],
    "tags": [
      "CSS",
      "@starting-style",
      "allow-discrete",
      "dialog",
      "popover",
      "анимация появления",
      "display none"
    ],
    "when": "При стилизации нативных модальных окон <dialog>, выпадающих меню [popover] и добавляемых в DOM карточек.",
    "alternatives": "Для старых браузеров используют покадровую анимацию animation: fadeIn 200ms ease.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style"
  },
  {
    "lang": "javascript",
    "id": "js-reduce-flatmap",
    "title": "JS: агрегация данных (.reduce) и плоская трансформация (.flatMap)",
    "summary": "Подсчёт общей суммы корзины товаров, сборка словаря по ID и разворачивание вложенных массивов за один проход.",
    "code": "const cart = [\n  { id: 1, title: 'Клавиатура', price: 4500, qty: 1, tags: ['usb', 'mech'] },\n  { id: 2, title: 'Мышь',       price: 2200, qty: 2, tags: ['usb', 'wireless'] }\n];\n\n// Подсчёт итоговой стоимости корзины (всегда передавай начальное значение 0!)\nconst total = cart.reduce((sum, item) => sum + item.price * item.qty, 0); // 8900\n\n// Сбор всех тегов из всех товаров в один плоский массив\nconst allTags = cart.flatMap(item => item.tags); // ['usb', 'mech', 'usb', 'wireless']",
    "example": "const byId = cart.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});",
    "points": [
      "В метод .reduce(fn, initialValue) ВСЕГДА передавай второй аргумент (например, 0 или {}), иначе на пустом массиве [] вызов упадёт с TypeError!",
      "Метод .flatMap(fn) работает как комбинация .map() + .flat(1), но быстрее за один проход (также позволяет одновременно фильтровать и мапить, возвращая [] для пропуска элемента!).",
      "Для простой группировки элементов по полю в современном JS лучше использовать нативный Object.groupBy(items, fn) вместо сложного reduce."
    ],
    "tags": [
      "JavaScript",
      "reduce",
      "flatMap",
      "flat",
      "корзина",
      "сумма",
      "агрегация",
      "массивы"
    ],
    "when": "При расчёте итогов заказа, статистики дашборда и извлечении вложенных списков тегов или комментариев.",
    "alternatives": "Если reduce становится нечитаемым на 15 строк, обычный цикл for (const item of items) будет понятнее коллегам.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
  },
  {
    "lang": "javascript",
    "id": "js-classes-private-fields",
    "title": "JS: классы ES2022+, приватные поля (#field), геттеры и статические методы",
    "summary": "Настоящая инкапсуляция состояния через синтаксис решётки #private без утечки внутренних свойств наружу.",
    "code": "class TokenStore {\n  // Настоящее приватное поле: недоступно снаружи класса!\n  #token = null;\n\n  constructor(initialToken) {\n    this.#token = initialToken;\n  }\n\n  get isAuthenticated() {\n    return Boolean(this.#token);\n  }\n\n  clear() {\n    this.#token = null;\n  }\n}\n\nconst store = new TokenStore('secret_jwt');\nconsole.log(store.isAuthenticated); // true",
    "example": "static fromJson(jsonStr) { return new User(JSON.parse(jsonStr)); }",
    "points": [
      "Поля и методы, начинающиеся с символа # (например, #token, #validate()), защищены на уровне движка JS — к ним нельзя обратиться снаружи даже через точку.",
      "Геттеры (get propName()) позволяют вычислять свойство на лету при чтении без круглых скобок: store.isAuthenticated.",
      "Поля класса теперь можно объявлять прямо в теле класса сверху без обязательного конструктора."
    ],
    "tags": [
      "JavaScript",
      "class",
      "private",
      "#field",
      "get",
      "set",
      "static",
      "ооп",
      "классы"
    ],
    "when": "При написании UI-компонентов, сторов состояния, API-клиентов и игровых сущностей.",
    "alternatives": "Для небольших утилит без внутреннего состояния достаточно обычных экспортируемых функций или замыканий.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Private_properties"
  },
  {
    "lang": "javascript",
    "id": "js-date-timestamps",
    "title": "JS: работа с датами (Date.now, toISOString, сравнение и разница дат)",
    "summary": "Хранение времени в UTC, вычисление разницы между датами в днях/часах и проверка истечения срока.",
    "code": "const nowMs = Date.now(); // Текущий таймстамп в миллисекундах\nconst isoString = new Date().toISOString(); // \"2026-09-15T11:30:00.000Z\" (стандарт для БД и API)\n\n// Прибавление 7 дней к текущей дате\nconst nextWeek = new Date();\nnextWeek.setDate(nextWeek.getDate() + 7);\n\n// Разница между двумя датами в полных сутках\nconst diffMs = nextWeek - new Date();\nconst diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24)); // 7",
    "example": "const isExpired = new Date(order.expiresAt).getTime() < Date.now();",
    "points": [
      "Осторожно: в конструкторе new Date(2026, 0, 15) месяцы нумеруются с нуля (0 — январь, 11 — декабрь), а дни недели в getDay() начинаются с воскресенья (0)!",
      "Для передачи дат между фронтендом и сервером всегда используй строку ISO 8601 (date.toISOString()) или Unix-таймстамп.",
      "Для красивого вывода даты пользователю на русском языке используй new Intl.DateTimeFormat(\"ru-RU\").format(date)."
    ],
    "tags": [
      "JavaScript",
      "Date",
      "Date.now",
      "toISOString",
      "timestamp",
      "дата",
      "время",
      "таймер"
    ],
    "when": "В таймерах обратного отсчёта акций, проверке свежести кэша и фильтрах по диапазону дат.",
    "alternatives": "При сложной работе с часовыми поясами используют Intl.DateTimeFormat с опцией timeZone: \"Europe/Moscow\".",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date"
  },
  {
    "lang": "javascript",
    "id": "js-keyboard-shortcuts",
    "title": "JS: обработка горячих клавиш (keydown, e.key, Ctrl+K / Cmd+K и Esc)",
    "summary": "Профессиональная настройка глобальных шорткатов с кроссплатформенной поддержкой Windows/Linux (Ctrl) и macOS (Cmd).",
    "code": "window.addEventListener('keydown', (e) => {\n  // Поддержка и Ctrl+K (Windows/Linux), и Cmd+K (macOS)\n  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {\n    e.preventDefault(); // Отменяем стандартный фокус браузера в адресную строку\n    openCommandPalette();\n  }\n\n  // Одиночная клавиша \"/\" для фокуса в поиск (только если курсор уже не стоит в input!)\n  const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)\n                || document.activeElement?.isContentEditable;\n\n  if (!isTyping && e.key === '/') {\n    e.preventDefault();\n    searchInput.focus();\n  }\n});",
    "example": "if (e.key === 'Escape') closeModal();",
    "points": [
      "Всегда используй современное свойство e.key (\"Escape\", \"Enter\", \"ArrowDown\", \"k\") вместо давно устаревшего числового e.keyCode!",
      "Для комбинаций вроде Ctrl+K обязательно проверяй (e.ctrlKey || e.metaKey), чтобы шорткат одинаково работал и на ПК, и на Mac.",
      "Для одиночных горячих клавиш (\"/\", \"t\", \"?\") обязательно проверяй, что фокус сейчас НЕ находится внутри <input> или <textarea>, иначе пользователь не сможет напечатать эту букву в форме!"
    ],
    "tags": [
      "JavaScript",
      "keydown",
      "key",
      "ctrlKey",
      "metaKey",
      "Escape",
      "Enter",
      "горячие клавиши",
      "шорткаты"
    ],
    "when": "Для командной палитры (Ctrl+K), быстрого поиска (/), закрытия окон (Esc) и навигации стрелками.",
    "alternatives": "Для нативного <dialog> закрытие по клавише Escape уже встроено в браузер по умолчанию.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/KeyboardEvent/key"
  },
  {
    "lang": "javascript",
    "id": "js-matchmedia-network-visibility",
    "title": "JS: системные события браузера (matchMedia, visibilitychange, online/offline)",
    "summary": "Реакция скрипта на смену размера экрана, сворачивание вкладки пользователем и потерю интернет-соединения.",
    "code": "// 1. Слушатель медиазапроса в JS (срабатывает только при переходе через брейкпоинт 768px!)\nconst mq = window.matchMedia('(max-width: 768px)');\nmq.addEventListener('change', (e) => {\n  if (!e.matches) closeMobileDrawer();\n});\n\n// 2. Пауза видео или опроса сервера, когда пользователь переключился на другую вкладку\ndocument.addEventListener('visibilitychange', () => {\n  if (document.hidden) pausePolling();\n  else resumePolling();\n});\n\n// 3. Индикатор потери и восстановления сети\nwindow.addEventListener('offline', () => showBanner('Нет подключения к сети'));\nwindow.addEventListener('online',  () => hideBanner());",
    "example": "const isMobile = window.matchMedia('(max-width: 768px)').matches;",
    "points": [
      "window.matchMedia(\"(max-width: 768px)\") намного эффективнее события window.onresize: он вызывает колбэк ровно в тот момент, когда экран перешагнул порог 768px, а не на каждый пиксель движения мыши!",
      "Событие visibilitychange позволяет экономить батарею ноутбука и смартфона, ставя на паузу тяжёлые анимации и таймеры на фоновых вкладках.",
      "События online и offline незаменимы в PWA и редакторах документов для уведомления о работе из кэша."
    ],
    "tags": [
      "JavaScript",
      "matchMedia",
      "visibilitychange",
      "online",
      "offline",
      "navigator",
      "сеть",
      "вкладка"
    ],
    "when": "При закрытии мобильного меню на ресайзе, фоновом опросе API и индикации офлайн-режима.",
    "alternatives": "Отправка аналитики при закрытии вкладки делается через navigator.sendBeacon(\"/api/stats\", data) внутри visibilitychange.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Window/matchMedia"
  },
  {
    "lang": "php",
    "id": "php-pdo-select-in-pagination",
    "title": "PHP 8 & PDO: выборка по списку ID (WHERE IN), LIKE-поиск и пагинация (LIMIT / OFFSET)",
    "summary": "Безопасная генерация плейсхолдеров для оператора IN (...), поиск по подстроке и постраничная навигация.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// 1. Безопасный поиск по подстроке LIKE (проценты % добавляются к значению в PHP, а не в SQL!)\n$stmt = $pdo->prepare('SELECT id, title FROM articles WHERE title LIKE :query LIMIT :limit OFFSET :offset');\n$stmt->bindValue(':query', '%' . $search . '%', PDO::PARAM_STR);\n$stmt->bindValue(':limit', 20, PDO::PARAM_INT);\n$stmt->bindValue(':offset', ($page - 1) * 20, PDO::PARAM_INT);\n$stmt->execute();\n$articles = $stmt->fetchAll();\n\n// 2. Безопасная выборка по массиву ID: WHERE id IN (?, ?, ?)\n$ids = [10, 25, 42];\n$placeholders = implode(',', array_fill(0, count($ids), '?'));\n$stmtIn = $pdo->prepare(\"SELECT * FROM products WHERE id IN ($placeholders)\");\n$stmtIn->execute($ids);",
    "example": "$totalCount = (int) $pdo->query('SELECT COUNT(*) FROM articles')->fetchColumn();",
    "points": [
      "В подготовленных запросах PDO нельзя привязать целый массив к одному плейсхолдеру IN (:ids). Правильный паттерн — сгенерировать строку знаков вопроса через implode(\",\", array_fill(0, count($ids), \"?\"))!",
      "При поиске через LIKE знаки процентов \"%\" склеиваются с переменной внутри PHP (\"%\" . $q . \"%\") и передаются в плейсхолдер.",
      "Метод $stmt->fetchColumn() удобно возвращает одно скалярное значение первого столбца (например, результат SELECT COUNT(*))."
    ],
    "tags": [
      "PHP",
      "PDO",
      "WHERE IN",
      "LIKE",
      "LIMIT",
      "OFFSET",
      "fetchColumn",
      "пагинация",
      "поиск в бд"
    ],
    "when": "В каталогах товаров с пагинацией, поиске по базе и выборке товаров корзины по массиву ID.",
    "alternatives": "Перед выполнением запроса с WHERE IN обязательно проверь, что массив $ids не пустой (if (!$ids) return [];), иначе SQL выдаст ошибку на пустых скобках IN ().",
    "url": "https://www.php.net/manual/ru/pdostatement.bindvalue.php"
  },
  {
    "lang": "php",
    "id": "php-headers-redirects-cors",
    "title": "PHP 8: HTTP-заголовки (header), редиректы 301/302, CORS и скачивание файлов",
    "summary": "Правильное выполнение перенаправлений с обязательным exit, настройка междоменных запросов CORS и отдача PDF/CSV.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// 1. Безопасный редирект после успешной отправки формы (паттерн Post/Redirect/Get)\nheader('Location: /profile?saved=1', true, 303);\nexit; // ОБЯЗАТЕЛЬНО вызывай exit после header('Location: ...')!\n\n// 2. Разрешение CORS-запросов для фронтенда с другого домена/порта\nheader('Access-Control-Allow-Origin: https://app.example.com');\nheader('Access-Control-Allow-Methods: GET, POST, OPTIONS');\nheader('Access-Control-Allow-Headers: Content-Type, Authorization');\nif ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {\n    http_response_code(204);\n    exit;\n}",
    "example": "header('Content-Disposition: attachment; filename=\"report.csv\"');",
    "points": [
      "Самая опасная ошибка в PHP — забыть написать exit; сразу после header(\"Location: /login\")! Без exit скрипт продолжит выполняться дальше и отдаст закрытый контент.",
      "Функция header() должна вызываться ДО любого вывода текста, пробелов или HTML в браузер (иначе возникнет ошибка Headers already sent).",
      "Паттерн Post/Redirect/Get (редирект после обработки POST-формы) защищает от повторной отправки формы при нажатии клавиши F5."
    ],
    "tags": [
      "PHP",
      "header",
      "Location",
      "redirect",
      "CORS",
      "http_response_code",
      "редирект",
      "заголовки"
    ],
    "when": "При проверке авторизации, редиректах после сохранения форм и настройке REST API.",
    "alternatives": "Для постоянных SEO-редиректов старых страниц передавай код 301: header(\"Location: /new-url\", true, 301); exit;.",
    "url": "https://www.php.net/manual/ru/function.header.php"
  },
  {
    "lang": "php",
    "id": "php-env-config-errors",
    "title": "PHP 8: переменные окружения (getenv / $_ENV), логирование и скрытие ошибок в продакшене",
    "summary": "Безопасное хранение паролей БД вне Git-репозитория и перехват фатальных ошибок через Throwable.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// На продакшене НИКОГДА не показываем стектрейс ошибок пользователю на экран!\nini_set('display_errors', '0');\nini_set('log_errors', '1');\nerror_reporting(E_ALL);\n\n// Чтение секретов из переменных окружения со значением по умолчанию\n$dbHost = $_ENV['DB_HOST'] ?? getenv('DB_HOST') ?: '127.0.0.1';\n\n// Глобальный перехватчик любых исключений и ошибок типизации (TypeError, Error)\nset_exception_handler(function (Throwable $e): void {\n    error_log(sprintf('[%s] %s in %s:%d', get_class($e), $e->getMessage(), $e->getFile(), $e->getLine()));\n    http_response_code(500);\n    echo 'Произошла ошибка сервера. Попробуйте позже.';\n});",
    "example": "/* Обязательно добавь файл .env в .gitignore, чтобы пароли от БД не попали на GitHub! */",
    "points": [
      "В PHP 7/8 базовый интерфейс Throwable ловит сразу всё: и обычные исключения (Exception), и фатальные ошибки движка (Error, TypeError, ParseError)!",
      "На боевом сервере всегда выключай вывод ошибок на экран (display_errors = 0), чтобы не раскрыть посетителям пути к файлам и структуру SQL-таблиц.",
      "Пароли от базы данных и ключи API храни в файле .env (добавленном в .gitignore) или переменных окружения сервера."
    ],
    "tags": [
      "PHP",
      "Throwable",
      "try",
      "catch",
      "error_log",
      "getenv",
      "env",
      "display_errors",
      "логирование",
      "ошибки"
    ],
    "when": "Во входном файле index.php или bootstrap.php каждого проекта.",
    "alternatives": "На этапе локальной разработки включай display_errors = 1 для быстрой отладки.",
    "url": "https://www.php.net/manual/ru/language.errors.php7.php"
  },
  {
    "lang": "php",
    "id": "php-preg-match-validation",
    "title": "PHP 8: регулярные выражения (preg_match, preg_replace) с поддержкой кириллицы (/u)",
    "summary": "Проверка формата телефона, слага и очистка строк по шаблону с обязательным модификатором Юникода /u.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// Модификатор /u в конце регулярки ОБЯЗАТЕЛЕН для корректной работы с русскими буквами UTF-8!\n$isValidName = (bool) preg_match('/^[а-яёa-zs-]{2,40}$/iu', $inputName);\n\n// Очистка номера телефона от скобок, пробелов и дефисов (оставляем только цифры)\n$cleanPhone = preg_replace('/D+/', '', '+7 (999) 123-45-67'); // \"79991234567\"\n\n// Извлечение именованных групп (?<year>d{4})\nif (preg_match('/^(?<year>d{4})-(?<month>d{2})$/', '2026-09', $matches)) {\n    echo $matches['year']; // \"2026\"\n}",
    "example": "$slug = trim(preg_replace('/[^a-z0-9]+/', '-', strtolower($str)), '-');",
    "points": [
      "При работе с кириллицей в регулярных выражениях PHP всегда ставь модификатор u после закрывающего слэша (/.../iu), иначе классы символов и регистр сломаются на UTF-8!",
      "Не забывай добавлять букву «ё» отдельно в диапазон [а-яё], так как в таблице символов UTF-8 буква «ё» стоит отдельно от диапазона «а–я»!",
      "Именованные карманы (?<name>...) делают массив совпадений $matches самодокументируемым."
    ],
    "tags": [
      "PHP",
      "preg_match",
      "preg_replace",
      "regex",
      "регулярные выражения",
      "кириллица",
      "телефон",
      "валидация"
    ],
    "when": "При нормализации номеров телефонов, проверке промокодов, парсинге параметров и генерации ЧПУ (slug).",
    "alternatives": "Для простой замены фиксированной подстроки всегда используй быстрый str_replace() вместо preg_replace().",
    "url": "https://www.php.net/manual/ru/function.preg-match.php"
  },
  {
    "lang": "html",
    "id": "html-header-footer",
    "title": "HTML: шапка <header> и подвал <footer> страницы и карточки",
    "summary": "Вводная и завершающая области как для всей веб-страницы, так и внутри отдельных карточек <article>.",
    "code": "<header class=\"site-header\">\n  <a href=\"/\" class=\"logo\">DevShelf</a>\n  <nav aria-label=\"Главное меню\">...</nav>\n</header>\n\n<article class=\"post-card\">\n  <header>\n    <h2>Заголовок публикации</h2>\n    <time datetime=\"2026-09-15\">15.09.2026</time>\n  </header>\n  <p>Текст заметки...</p>\n  <footer>\n    <span>Автор: Павел</span> · <a href=\"#comments\">12 комментариев</a>\n  </footer>\n</article>",
    "example": "<footer class=\"site-footer\">&copy; 2026 Все права защищены</footer>",
    "points": [
      "Теги <header> и <footer> можно использовать многократно на одной странице: один раз для шапки/подвала всего сайта и внутри каждого <article> или <section>!",
      "Нельзя вкладывать <header> внутрь другого <header> или внутрь <footer>.",
      "<header> верхнего уровня (прямой ребёнок <body>) автоматически получает ориентир role=\"banner\" для скринридеров, а <footer> — role=\"contentinfo\"."
    ],
    "tags": [
      "HTML",
      "header",
      "footer",
      "шапка",
      "подвал",
      "футер",
      "хедер",
      "семантика"
    ],
    "when": "Для главной шапки и подвала сайта, а также верхней и нижней плашек карточек и модальных окон.",
    "alternatives": "Не используй <div class=\"header\"> там, где подходит нативный <header>.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/header"
  },
  {
    "lang": "html",
    "id": "html-span-div",
    "title": "HTML: универсальные контейнеры <div> (блочный) и <span> (строчный)",
    "summary": "Нейтральные обёртки без собственной семантики для группировки элементов под CSS-сетки и точечной стилизации слов.",
    "code": "<div class=\"grid-row\">\n  <div class=\"col\">Левая колонка сетки</div>\n  <div class=\"col\">Правая колонка сетки</div>\n</div>\n\n<p>\n  Статус сервера: <span class=\"status-online\">● Работает штатно</span>\n</p>",
    "example": "<span class=\"accent-text\">выделенное цветом слово</span>",
    "points": [
      "<div> — блочный контейнер (занимает всю доступную ширину и начинается с новой строки). Используется для построения сеток, обёрток и декоративных карточек.",
      "<span> — строчный контейнер (живёт внутри строки текста, не разрывая абзац). Используется для раскраски отдельных слов, бейджей и иконок.",
      "Используй <div> и <span> только тогда, когда ни один смысловой тег (<main>, <nav>, <article>, <button>, <strong>, <mark>) не подходит по смыслу."
    ],
    "tags": [
      "HTML",
      "div",
      "span",
      "контейнер",
      "обёртка",
      "блочный",
      "строчный"
    ],
    "when": "Для технических обёрток Flexbox/Grid и цветовых акцентов внутри текста.",
    "alternatives": "Никогда не вешай клики на <div> или <span> вместо <button> и <a>.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/div"
  },
  {
    "lang": "html",
    "id": "html-br-wbr",
    "title": "HTML: перенос строки <br> и мягкая точка разрыва длинных слов <wbr>",
    "summary": "Принудительный перевод строки в стихах/адресах и подсказка браузеру, где безопасно перенести длинный URL.",
    "code": "<p class=\"address\">\n  г. Москва,<br>\n  ул. Тверская, д. 12, оф. 304\n</p>\n\n<!-- Длинный URL аккуратно перенесётся по слэшам на узком экране смартфона -->\n<p>\n  Документация: https://developer.mozilla.org/<wbr>ru/<wbr>docs/<wbr>Web/<wbr>CSS\n</p>",
    "example": "overflow-wrap: break-word; /* CSS-альтернатива для переноса слишком длинных слов */",
    "points": [
      "Используй <br> только там, где разрыв строки является частью самого текста (поэзия, почтовые адреса, подписи).",
      "Никогда не ставь несколько <br><br> подряд для создания отступов между блоками — для этого существует CSS-свойство margin-bottom или gap!",
      "Тег <wbr> (Word Break Opportunity) невидим, пока строка помещается в экран, но указывает браузеру идеальное место для разрыва длинного слова или ссылки."
    ],
    "tags": [
      "HTML",
      "br",
      "wbr",
      "перенос строки",
      "длинное слово",
      "разрыв"
    ],
    "when": "В блоках адресов (<br>) и при выводе длинных технических путей, ссылок или хешей (<wbr>).",
    "alternatives": "Для автоматического переноса любых длинных строк без <wbr> задай в CSS свойство overflow-wrap: anywhere;.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/wbr"
  },
  {
    "lang": "html",
    "id": "html-iframe-youtube-map",
    "title": "HTML: адаптивное встраивание карт и видео в <iframe> с aspect-ratio",
    "summary": "Безопасная вставка интерактивных карт и видеороликов с сохранением пропорций 16:9 на любых экранах.",
    "code": "<div class=\"embed-container\">\n  <iframe\n    src=\"https://www.openstreetmap.org/export/embed.html\"\n    title=\"Карта проезда к офису\"\n    loading=\"lazy\"\n    referrerpolicy=\"no-referrer-when-downgrade\"\n    allowfullscreen\n  ></iframe>\n</div>",
    "example": ".embed-container iframe {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  border: 0;\n  border-radius: 8px;\n}",
    "points": [
      "Вместо устаревших HTML-атрибутов frameborder=\"0\" задавай в CSS border: 0; width: 100%; aspect-ratio: 16 / 9;.",
      "Атрибут loading=\"lazy\" на <iframe> экономит до 500 КБ трафика и ускоряет загрузку страницы, откладывая инициализацию карты до прокрутки.",
      "Всегда указывай осмысленный атрибут title=\"...\" для прохождения проверок Lighthouse и доступности."
    ],
    "tags": [
      "HTML",
      "iframe",
      "map",
      "video",
      "embed",
      "карта",
      "видео",
      "встраивание"
    ],
    "when": "На странице «Контакты» для схемы проезда и в статьях с обучающими видео.",
    "alternatives": "Для статичной схемы проезда можно показать лёгкую картинку карты со ссылкой на открытие навигатора.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/iframe"
  },
  {
    "lang": "html",
    "id": "html-dialog-form-method",
    "title": "HTML: закрытие модального окна через <form method=\"dialog\"> без JS",
    "summary": "Встроенный в HTML механизм автоматического закрытия нативного <dialog> при нажатии на кнопку формы внутри него.",
    "code": "<dialog id=\"confirm-dialog\" open>\n  <h3>Удалить черновик?</h3>\n  <p>Это действие нельзя будет отменить.</p>\n\n  <!-- Форма с method=\"dialog\" автоматически закрывает окно и передаёт value нажатой кнопки! -->\n  <form method=\"dialog\" class=\"dialog-actions\">\n    <button value=\"cancel\">Отмена</button>\n    <button value=\"delete\" class=\"btn-danger\">Удалить</button>\n  </form>\n</dialog>",
    "example": "dialog.addEventListener('close', () => console.log(dialog.returnValue)); // \"delete\" или \"cancel\"",
    "points": [
      "Когда внутри <dialog> находится <form method=\"dialog\">, нажатие на любую кнопку submit закрывает модальное окно без перезагрузки страницы и без единой строчки JS!",
      "Значение атрибута value нажатой кнопки автоматически записывается в свойство dialog.returnValue.",
      "Можно также добавить атрибут formmethod=\"dialog\" и formnovalidate отдельной кнопке «Отмена» внутри обычной POST-формы."
    ],
    "tags": [
      "HTML",
      "dialog",
      "method=\"dialog\"",
      "returnValue",
      "модальное окно",
      "подтверждение"
    ],
    "when": "В окнах подтверждения действий («Вы уверены?»), алертах и диалогах выбора.",
    "alternatives": "Для отправки данных на сервер через fetch() перед закрытием используй обычный обработчик submit.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/dialog"
  },
  {
    "lang": "html",
    "id": "html-details-animated",
    "title": "HTML & CSS: плавная анимация раскрытия <details> и ::details-content",
    "summary": "Современная стилизация раскрывающегося блока <details>/<summary> с поворотом иконки и отступами.",
    "code": "<details class=\"custom-spoiler\" open>\n  <summary>\n    <span>Технические требования к серверу</span>\n    <span class=\"spoiler-icon\" aria-hidden=\"true\">▾</span>\n  </summary>\n  <div class=\"spoiler-body\">\n    <p>PHP 8.2+, расширение PDO, поддержка HTTPS и 512 МБ оперативной памяти.</p>\n  </div>\n</details>",
    "example": "details[open] .spoiler-icon {\n  transform: rotate(180deg);\n}",
    "points": [
      "Псевдокласс details[open] позволяет легко повернуть иконку стрелочки на 180 градусов и подсветить рамку при открытом спойлере.",
      "Чтобы убрать стандартный системный треугольник браузера, задай summary { list-style: none; } и summary::-webkit-details-marker { display: none; }.",
      "В новых браузерах псевдоэлемент details::details-content позволяет плавно анимировать высоту раскрытия на чистом CSS!"
    ],
    "tags": [
      "HTML",
      "details",
      "summary",
      "spoiler",
      "open",
      "спойлер",
      "раскрытие",
      "гармошка"
    ],
    "when": "Для скрытия длинных логов, дополнительных параметров фильтра и ответов в FAQ.",
    "alternatives": "Кастомный спойлер на JS оправдан только если требуется сложная синхронизация с внешним стейтом.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/summary"
  },
  {
    "lang": "css",
    "id": "css-line-height-letter-spacing",
    "title": "CSS: ритм текста (line-height, letter-spacing, max-width: 65ch)",
    "summary": "Профессиональные пропорции межстрочного интервала и межбуквенного расстояния для заголовков и основного текста.",
    "code": "body {\n  font-size: 16px;\n  line-height: 1.6;        /* Безразмерный множитель (1.5–1.65) для комфортного чтения абзацев */\n  letter-spacing: -0.01em;\n}\n\nh1, h2, h3 {\n  line-height: 1.18;       /* У крупных заголовков межстрочный интервал всегда плотнее! */\n  letter-spacing: -0.025em;/* Лёгкая отрицательная разрядка собирает крупный заголовок */\n}\n\n.uppercase-badge {\n  text-transform: uppercase;\n  letter-spacing: 0.06em;  /* У КАПСА разрядку наоборот всегда увеличивают! */\n}",
    "example": "/* Всегда задавай line-height без единиц измерения (1.5, а не 24px), чтобы он масштабировался от шрифта */",
    "points": [
      "Золотое правило типографики: чем крупнее шрифт (заголовки h1), тем меньше line-height (1.1–1.25) и плотнее letter-spacing (-0.02em ... -0.03em).",
      "И наоборот: у мелкого текста, набранного ЗАГЛАВНЫМИ БУКВАМИ (uppercase), обязательно раздвигай буквы в плюс (letter-spacing: 0.05em–0.08em), иначе они слипнутся!",
      "Задавай line-height безразмерным числом (1.6), а не в px или %, чтобы дочерние элементы корректно наследовали пропорцию."
    ],
    "tags": [
      "CSS",
      "line-height",
      "letter-spacing",
      "uppercase",
      "типографика",
      "межстрочный интервал",
      "кернинг"
    ],
    "when": "В базовой таблице стилей любого сайта для настройки заголовков, статей и бейджей.",
    "alternatives": "Стандартный браузерный line-height: normal (~1.2) слишком тесен для чтения длинных статей.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/line-height"
  },
  {
    "lang": "css",
    "id": "css-white-space-word-break",
    "title": "CSS: управление переносами строк (white-space, overflow-wrap, hyphens)",
    "summary": "Запрет разрыва цен и кнопок на две строки (nowrap) и защита карточек от распирания длинными ссылками.",
    "code": "/* Кнопки, бейджи и цены с символом рубля никогда не разрываются на две строки */\n.btn, .price-tag {\n  white-space: nowrap;\n}\n\n/* Длинные токены, URL и слова без пробелов аккуратно переносятся внутри карточки */\n.comment-text {\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n\n/* Блок кода сохраняет все отступы и переносы строк из исходника */\npre code {\n  white-space: pre;\n}",
    "example": "white-space: pre-wrap; /* Сохраняет переносы строк \n из textarea, но переносит длинные строки по ширине блока! */",
    "points": [
      "white-space: nowrap запрещает перенос текста на новую строку — обязательно используй его на кнопках, табах и ценах («1 490 ₽»).",
      "white-space: pre-wrap незаменим при выводе текста комментария или описания из <textarea>: он сохраняет абзацы пользователя (\n), не создавая горизонтального скролла!",
      "overflow-wrap: anywhere гарантирует, что длинная ссылка в узкой колонке грида перенесётся, а не раздует всю сетку."
    ],
    "tags": [
      "CSS",
      "white-space",
      "nowrap",
      "pre-wrap",
      "overflow-wrap",
      "word-break",
      "перенос текста"
    ],
    "when": "Для кнопок и цен (nowrap), вывода пользовательских сообщений (pre-wrap) и защиты узких карточек (overflow-wrap).",
    "alternatives": "Для неразрывного пробела между числом и знаком валюты в HTML также можно использовать символ &nbsp;.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/white-space"
  },
  {
    "lang": "css",
    "id": "css-grid-auto-flow-dense",
    "title": "CSS: плотная упаковка сетки (grid-auto-flow: dense) и span ячеек",
    "summary": "Построение бенто-сеток (Bento Grid) с карточками разного размера (2×1, 2×2) и автоматическим заполнением пустот.",
    "code": ".bento-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  grid-auto-rows: 180px;\n  grid-auto-flow: dense; /* Автоматически подтягивает маленькие карточки в пустые дырки сетки! */\n  gap: 16px;\n}\n\n.card-wide {\n  grid-column: span 2;   /* Занимает 2 колонки по ширине */\n}\n\n.card-tall {\n  grid-row: span 2;      /* Занимает 2 ряда по высоте */\n}",
    "example": "@media (max-width: 600px) {\n  .card-wide { grid-column: span 1; }\n}",
    "points": [
      "Ключевое слово span 2 в grid-column или grid-row растягивает карточку на две соседние ячейки без жёсткой привязки к номерам линий.",
      "Свойство grid-auto-flow: dense разрешает браузеру переставить следующую маленькую карточку (1×1) наверх, если перед широкой карточкой (2×1) осталась свободная ячейка!",
      "На мобильных экранах (где всего 1 колонка) не забудь сбросить .card-wide { grid-column: span 1; }, чтобы сетка не создала вторую скрытую колонку."
    ],
    "tags": [
      "CSS",
      "grid-auto-flow",
      "dense",
      "bento grid",
      "grid-column",
      "grid-row",
      "span",
      "бенто сетка"
    ],
    "when": "При верстке современных продуктовых витрин в стиле Bento Grid, дашбордов и фотогалерей.",
    "alternatives": "Без dense перед крупной карточкой может остаться пустая дырка в конце строки.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/grid-auto-flow"
  },
  {
    "lang": "css",
    "id": "css-cursor-caret-scroll",
    "title": "CSS: стилизация курсора ввода (caret-color), выделения и скролла",
    "summary": "Детали полировки интерфейса: фирменный цвет мигающего курсора в инпутах и плавная прокрутка.",
    "code": "input, textarea, [contenteditable] {\n  caret-color: #38bdf8; /* Цвет мигающей вертикальной палочки курсора при наборе текста */\n}\n\nbutton:disabled,\ninput:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n\n.draggable-handle {\n  cursor: grab;\n}\n.draggable-handle:active {\n  cursor: grabbing;\n}",
    "example": "cursor: pointer;",
    "points": [
      "Свойство caret-color перекрашивает мигающий текстовый курсор внутри инпутов и редакторов кода под акцентный цвет бренда.",
      "Для перетаскиваемых карточек используй пару курсоров cursor: grab в покое и cursor: grabbing при зажатой кнопке мыши (:active).",
      "На заблокированных кнопках (:disabled) ставь cursor: not-allowed для понятной обратной связи."
    ],
    "tags": [
      "CSS",
      "caret-color",
      "cursor",
      "grab",
      "not-allowed",
      "курсор",
      "инпут"
    ],
    "when": "При тонкой настройке полей ввода, редакторов кода и drag-and-drop списков.",
    "alternatives": "Не ставь cursor: pointer на некликабельные карточки — это вводит пользователя в заблуждение.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/caret-color"
  },
  {
    "lang": "javascript",
    "id": "js-json-parse-stringify",
    "title": "JS: безопасная сериализация JSON (JSON.stringify, JSON.parse и форматирование)",
    "summary": "Преобразование объектов в строку с отступами для красивого вывода и безопасный парсинг без падения скрипта.",
    "code": "const settings = { theme: 'dark', fontSize: 14, tags: ['html', 'css'] };\n\n// Красивый вывод JSON с отступами в 2 пробела (третий аргумент = 2)\nconst prettyJson = JSON.stringify(settings, null, 2);\n\n// Безопасная функция парсинга с фолбэком при битой строке\nfunction safeJsonParse(str, fallback = null) {\n  try {\n    return JSON.parse(str);\n  } catch {\n    return fallback;\n  }\n}",
    "example": "const data = safeJsonParse(localStorage.getItem('cart'), []);",
    "points": [
      "Вызов JSON.parse() на пустой или повреждённой строке выбрасывает синхронную ошибку SyntaxError и роняет весь скрипт — ВСЕГДА оборачивай чтение из localStorage в try/catch!",
      "Третий параметр в JSON.stringify(data, null, 2) форматирует JSON с переносами строк и отступами в 2 пробела (идеально для вывода в <pre> или скачивания файла).",
      "Помни, что JSON не сохраняет функции, undefined, Map/Set, а объекты Date превращает в строки ISO."
    ],
    "tags": [
      "JavaScript",
      "JSON",
      "JSON.parse",
      "JSON.stringify",
      "try",
      "catch",
      "сериализация"
    ],
    "when": "При сохранении данных в localStorage, отправке тела fetch-запросов и экспорте настроек в файл.",
    "alternatives": "Для глубокого клонирования объекта в памяти используй быстрый structuredClone(obj) вместо JSON.parse(JSON.stringify(obj)).",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"
  },
  {
    "lang": "javascript",
    "id": "js-timers-raf",
    "title": "JS: таймеры (setTimeout, setInterval, clearInterval) и requestAnimationFrame",
    "summary": "Отложенный запуск действий, периодическое обновление секундомера и плавная анимация с частотой монитора.",
    "code": "// 1. Однократный запуск через 2 секунды с возможностью отмены\nconst timeoutId = setTimeout(() => {\n  hideNotification();\n}, 2000);\n// clearTimeout(timeoutId); // если нужно отменить до срабатывания\n\n// 2. Плавный цикл отрисовки строго под герцовку экрана (60/120/144 Гц)\nfunction animateProgress(startTime) {\n  const elapsed = performance.now() - startTime;\n  const progress = Math.min(elapsed / 1000, 1); // от 0 до 1 за 1 секунду\n  progressBar.style.transform = `scaleX(${progress})`;\n\n  if (progress < 1) {\n    requestAnimationFrame(() => animateProgress(startTime));\n  }\n}\nrequestAnimationFrame(() => animateProgress(performance.now()));",
    "example": "const intervalId = setInterval(tick, 1000);\nclearInterval(intervalId);",
    "points": [
      "Всегда сохраняй ID, возвращаемый setInterval() и setTimeout(), чтобы очищать таймер через clearInterval(id) при закрытии окна или уходе со страницы (защита от утечек памяти)!",
      "Для любых визуальных анимаций и перетаскивания используй requestAnimationFrame() вместо setInterval(..., 16) — он синхронизируется с обновлением экрана и автоматически встаёт на паузу в фоновой вкладке.",
      "Для точного замера времени выполнения используй performance.now() вместо Date.now()."
    ],
    "tags": [
      "JavaScript",
      "setTimeout",
      "setInterval",
      "clearTimeout",
      "requestAnimationFrame",
      "performance",
      "таймер"
    ],
    "when": "Для автоскрытия тостов (setTimeout), обратного отсчёта (setInterval) и плавной графики (requestAnimationFrame).",
    "alternatives": "Для периодического опроса сервера лучше использовать рекурсивный setTimeout после завершения await fetch(), чтобы запросы не накладывались друг на друга при медленной сети!",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Window/requestAnimationFrame"
  },
  {
    "lang": "javascript",
    "id": "js-download-blob-file",
    "title": "JS: генерация и скачивание файла прямо в браузере (Blob + URL.createObjectURL)",
    "summary": "Экспорт сгенерированного кода, JSON-бэкапа или CSV-таблицы на диск пользователя в один клик без участия сервера.",
    "code": "function downloadFile(filename, content, mimeType = 'text/plain;charset=utf-8') {\n  const blob = new Blob([content], { type: mimeType });\n  const url = URL.createObjectURL(blob);\n\n  const link = document.createElement('a');\n  link.href = url;\n  link.download = filename;\n  document.body.appendChild(link);\n  link.click();\n\n  // Очищаем временную ссылку и освобождаем память!\n  link.remove();\n  URL.revokeObjectURL(url);\n}\n\n// Пример: скачать готовый HTML-шаблон\ndownloadFile('index.html', '<!doctype html><h1>Привет!</h1>', 'text/html;charset=utf-8');",
    "example": "downloadFile('backup.json', JSON.stringify(data, null, 2), 'application/json');",
    "points": [
      "Конструктор new Blob([content], { type }) создаёт виртуальный файл в оперативной памяти браузера из любой строки или массива байт.",
      "После вызова link.click() обязательно вызывай URL.revokeObjectURL(url), чтобы освободить выделенную под Blob память браузера!",
      "Для корректного открытия русских CSV-таблиц в Microsoft Excel добавь в начало строки UTF-8 BOM-маркер: new Blob([\"\\uFEFF\" + csvText], { type: \"text/csv;charset=utf-8\" })."
    ],
    "tags": [
      "JavaScript",
      "Blob",
      "createObjectURL",
      "revokeObjectURL",
      "download",
      "скачать файл",
      "экспорт",
      "csv"
    ],
    "when": "В генераторах кода, песочницах, экспорте настроек в JSON и выгрузке отчётов в CSV.",
    "alternatives": "Не требует отправки данных на сервер и работает даже полностью офлайн.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Blob"
  },
  {
    "lang": "javascript",
    "id": "js-drag-and-drop-files",
    "title": "JS: зона перетаскивания файлов мышью (Drag & Drop: dragover, drop)",
    "summary": "Обработка перетаскивания файлов из проводника в окно браузера с подсветкой рамки и чтением e.dataTransfer.files.",
    "code": "const dropZone = document.getElementById('drop-zone');\n\n// Обязательно вызываем e.preventDefault() в dragover, иначе браузер просто откроет картинку во вкладке!\ndropZone.addEventListener('dragover', (e) => {\n  e.preventDefault();\n  dropZone.classList.add('is-dragover');\n});\n\ndropZone.addEventListener('dragleave', () => {\n  dropZone.classList.remove('is-dragover');\n});\n\ndropZone.addEventListener('drop', (e) => {\n  e.preventDefault();\n  dropZone.classList.remove('is-dragover');\n\n  const files = Array.from(e.dataTransfer.files);\n  console.log('Перетащили файлов:', files.length);\n});",
    "example": ".drop-zone.is-dragover { border-color: #38bdf8; background: rgba(56, 189, 248, 0.08); }",
    "points": [
      "Главный секрет Drag & Drop API: чтобы событие drop вообще сработало и браузер не открыл перетащенную картинку вместо сайта, ОБЯЗАТЕЛЬНО вызывай e.preventDefault() и в dragover, и в drop!",
      "Список перетащенных файлов находится в объекте e.dataTransfer.files (имеет точно такой же формат FileList, как и у обычного <input type=\"file\">).",
      "Для доступности всегда помещай внутрь зоны перетаскивания обычный <input type=\"file\">, чтобы файл можно было выбрать и стандартным кликом."
    ],
    "tags": [
      "JavaScript",
      "drag and drop",
      "dragover",
      "drop",
      "dataTransfer",
      "files",
      "перетаскивание",
      "загрузка"
    ],
    "when": "В загрузчиках изображений, документов, импорте JSON-бэкапов и облачных хранилищах.",
    "alternatives": "Обычный <label> вокруг <input type=\"file\"> также поддерживает нативное перетаскивание файла прямо на инпут в ряде браузеров.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop"
  },
  {
    "lang": "javascript",
    "id": "js-intersection-lazy-toc",
    "title": "JS: чтение и запись CSS-переменных (setProperty / getComputedStyle)",
    "summary": "Динамическая передача координат курсора, скролла или цветовой палитры из JavaScript напрямую в CSS-переменные.",
    "code": "const root = document.documentElement;\n\n// 1. Запись нового значения в CSS-переменную --accent\nroot.style.setProperty('--accent', '#10b981');\n\n// 2. Эффект подсветки карточки за курсором мыши (Spotlight Card)\ncard.addEventListener('pointermove', (e) => {\n  const rect = card.getBoundingClientRect();\n  card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);\n  card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);\n});\n\n// 3. Чтение актуального значения переменной из CSS\nconst currentBg = getComputedStyle(root).getPropertyValue('--bg').trim();",
    "example": ".card { background: radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(56,189,248,0.12), transparent); }",
    "points": [
      "Вместо того чтобы менять десятки инлайновых стилей из JS, измени одну CSS-переменную через element.style.setProperty(\"--val\", x) — и все зависящие от неё правила перестроятся сами!",
      "Паттерн передачи --mouse-x и --mouse-y позволяет делать эффектные радиальные блики на карточках в 5 строчек кода.",
      "Метод style.removeProperty(\"--accent\") сбрасывает переменную обратно к значению из таблицы стилей."
    ],
    "tags": [
      "JavaScript",
      "setProperty",
      "getComputedStyle",
      "getPropertyValue",
      "CSS variables",
      "переменные",
      "spotlight"
    ],
    "when": "В визуальных генераторах, редакторах тем оформления, параллаксах и интерактивных карточках.",
    "alternatives": "Для простого переключения фиксированных состояний лучше использовать classList.toggle() вместо инлайновых переменных.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/CSSStyleDeclaration/setProperty"
  },
  {
    "lang": "php",
    "id": "php-date-intl-formatting",
    "title": "PHP 8: форматирование дат, таймзоны и склонение слов (numfmt / plural)",
    "summary": "Работа с московским временем, форматами дат и правильное русское склонение числительных («1 товар, 2 товара, 5 товаров»).",
    "code": "<?php\ndeclare(strict_types=1);\n\n// Универсальная функция склонения существительных после числа на русском языке\nfunction pluralRu(int $number, array $forms): string {\n    // $forms = ['товар', 'товара', 'товаров']\n    $n = abs($number) % 100;\n    $n1 = $n % 10;\n    if ($n > 10 && $n < 20) return \"$number {$forms[2]}\";\n    if ($n1 > 1 && $n1 < 5) return \"$number {$forms[1]}\";\n    if ($n1 === 1)          return \"$number {$forms[0]}\";\n    return \"$number {$forms[2]}\";\n}\n\necho pluralRu(1, ['статья', 'статьи', 'статей']);  // \"1 статья\"\necho pluralRu(4, ['статья', 'статьи', 'статей']);  // \"4 статьи\"\necho pluralRu(12, ['статья', 'статьи', 'статей']); // \"12 статей\"",
    "example": "date_default_timezone_set('Europe/Moscow');",
    "points": [
      "В русском языке три формы множественного числа: для 1 (статья), для 2–4 (статьи) и для 5–20 (статей). Функция pluralRu() решает эту задачу в 8 строк.",
      "В базе данных время лучше хранить в UTC (или TIMESTAMP), а переводить в часовой пояс пользователя при выводе через DateTimeImmutable::setTimezone().",
      "Для форматирования цен с пробелами-разделителями тысяч в PHP используй number_format($price, 0, \",\", \" \") . \" ₽\" (например: \"14 990 ₽\")."
    ],
    "tags": [
      "PHP",
      "plural",
      "number_format",
      "date",
      "timezone",
      "склонение",
      "валюта",
      "числа"
    ],
    "when": "При выводе количества товаров в корзине, просмотров статьи, комментариев и цен в рублях.",
    "alternatives": "Если на хостинге установлено расширение PHP intl, можно также использовать класс MessageFormatter.",
    "url": "https://www.php.net/manual/ru/function.number-format.php"
  },
  {
    "lang": "php",
    "id": "php-superglobals-server-url",
    "title": "PHP 8: суперглобальный массив $_SERVER, определение HTTPS, IP и роутинг",
    "summary": "Чтение текущего пути URI без GET-параметров, метода запроса (GET/POST), заголовка Authorization и HTTPS.",
    "code": "<?php\ndeclare(strict_types=1);\n\n$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';\n// Чистый путь без GET-параметров (например, \"/catalog/items\" из \"/catalog/items?page=2\")\n$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';\n\n// Надёжная проверка HTTPS (включая работу за обратным прокси Nginx / Cloudflare)\n$isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')\n        || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');\n\n// Простой роутер на выражении match из PHP 8\nmatch ([$method, $path]) {\n    ['GET',  '/']          => renderHome(),\n    ['GET',  '/api/items'] => sendJsonItems(),\n    ['POST', '/api/items'] => createItem(),\n    default                => sendNotFound(),\n};",
    "example": "$bearerToken = $_SERVER['HTTP_AUTHORIZATION'] ?? '';",
    "points": [
      "Функция parse_url($_SERVER[\"REQUEST_URI\"], PHP_URL_PATH) отрезает строку ?page=2&sort=asc, оставляя чистый маршрут для роутера.",
      "На хостингах с связкой Nginx + Apache (и за Cloudflare) HTTPS часто передаётся в заголовке $_SERVER[\"HTTP_X_FORWARDED_PROTO\"] === \"https\".",
      "Все клиентские HTTP-заголовки в PHP попадают в $_SERVER с префиксом HTTP_ в верхнем регистре (например, X-Api-Key становится $_SERVER[\"HTTP_X_API_KEY\"])."
    ],
    "tags": [
      "PHP",
      "SERVER",
      "REQUEST_URI",
      "REQUEST_METHOD",
      "parse_url",
      "router",
      "https",
      "роутер"
    ],
    "when": "Во входном файле index.php при написании микрофреймворков, REST API и обработчиков вебхуков.",
    "alternatives": "Никогда не используй $_SERVER[\"PHP_SELF\"] без экранирования в атрибуте action формы из-за риска XSS.",
    "url": "https://www.php.net/manual/ru/reserved.variables.server.php"
  },
  {
    "lang": "recipes",
    "id": "recipe-sticky-header-scroll",
    "title": "Рецепт: Шапка сайта с эффектом стекла и тенью при начале прокрутки",
    "summary": "Добавление компактности и нижней границы фиксированной шапке в момент, когда пользователь начал скроллить страницу.",
    "code": "<header class=\"site-header\" id=\"header\">\n  <div class=\"header-inner\">DevShelf</div>\n</header>\n\n<script>\nconst header = document.getElementById('header');\n\n// Пассивный слушатель scroll не блокирует плавность прокрутки на смартфонах!\nwindow.addEventListener('scroll', () => {\n  header.classList.toggle('is-scrolled', window.scrollY > 12);\n}, { passive: true });\n</script>",
    "example": ".site-header.is-scrolled {\n  background: rgba(9, 13, 20, 0.88);\n  backdrop-filter: blur(12px);\n  border-bottom-color: rgba(255, 255, 255, 0.12);\n}",
    "points": [
      "Опция { passive: true } в addEventListener(\"scroll\", ...) сообщает браузеру, что внутри обработчика не будет вызываться preventDefault(), поэтому браузер может крутить страницу в отдельном потоке с идеальными 120 FPS!",
      "Метод classList.toggle(\"is-scrolled\", window.scrollY > 12) лаконично включает класс при прокрутке ниже 12px и снимает при возврате наверх.",
      "В состоянии покоя наверху шапка может быть полностью прозрачной, а при скролле обретать матовый фон backdrop-filter: blur(12px)."
    ],
    "tags": [
      "рецепт",
      "sticky header",
      "scroll",
      "passive",
      "шапка",
      "скролл",
      "навбар"
    ],
    "when": "На лендингах, корпоративных сайтах и в документации с фиксированной верхней панелью.",
    "alternatives": "Можно также использовать IntersectionObserver с пустым 1px-элементом на самом верху страницы.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener"
  },
  {
    "lang": "recipes",
    "id": "recipe-skeleton-loader",
    "title": "Рецепт: Анимированный скелетон загрузки карточек (Skeleton Shimmer)",
    "summary": "Плавный блик загрузки на месте будущих карточек и текста, избавляющий от дёргающихся спиннеров и скачков верстки.",
    "code": "<div class=\"skeleton-card\" aria-busy=\"true\" aria-label=\"Загрузка карточки\">\n  <div class=\"skeleton skeleton-thumb\"></div>\n  <div class=\"skeleton skeleton-title\"></div>\n  <div class=\"skeleton skeleton-text\"></div>\n</div>\n\n<style>\n.skeleton {\n  background: linear-gradient(90deg, #121827 25%, #1e293b 50%, #121827 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite linear;\n  border-radius: 6px;\n}\n.skeleton-thumb { height: 140px; margin-bottom: 12px; }\n.skeleton-title { height: 20px; width: 70%; margin-bottom: 8px; }\n.skeleton-text  { height: 14px; width: 90%; }\n\n@keyframes shimmer {\n  from { background-position: 200% 0; }\n  to   { background-position: -200% 0; }\n}\n</style>",
    "example": "/* Атрибут aria-busy=\"true\" сообщает скринридеру, что блок находится в процессе подгрузки */",
    "points": [
      "Скелетон повторяет точную высоту будущей карточки, поэтому после прихода ответа от fetch() контент встаёт на место без единого скачка страницы.",
      "Увеличение background-size: 200% 100% и сдвиг background-position от 200% к -200% создают иллюзию бегущего светового блика.",
      "Атрибут aria-busy=\"true\" на контейнере временно скрывает пустые блоки-заглушки от чтения скринридером до загрузки реальных данных."
    ],
    "tags": [
      "рецепт",
      "skeleton",
      "shimmer",
      "loader",
      "загрузка",
      "скелетон",
      "анимация"
    ],
    "when": "При асинхронной подгрузке каталога товаров, профиля пользователя, ленты новостей и аналитики.",
    "alternatives": "Для быстрых операций быстрее 150 мс скелетон лучше не мигать, чтобы не создавать лишнего мелькания.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy"
  },
  {
    "lang": "recipes",
    "id": "recipe-password-toggle",
    "title": "Рецепт: Поле пароля с кнопкой «Показать / скрыть пароль» (глазок)",
    "summary": "Удобное переключение типа поля между password и text с сохранением фокуса и правильными ARIA-атрибутами.",
    "code": "<div class=\"password-field\">\n  <input type=\"password\" id=\"pass-input\" placeholder=\"Введите пароль\" autocomplete=\"current-password\">\n  <button type=\"button\" id=\"pass-toggle\" aria-label=\"Показать пароль\" aria-pressed=\"false\">\n    Показать\n  </button>\n</div>\n\n<script>\nconst input = document.getElementById('pass-input');\nconst toggle = document.getElementById('pass-toggle');\n\ntoggle.addEventListener('click', () => {\n  const isHidden = input.type === 'password';\n  input.type = isHidden ? 'text' : 'password';\n  toggle.textContent = isHidden ? 'Скрыть' : 'Показать';\n  toggle.setAttribute('aria-pressed', String(isHidden));\n  input.focus();\n});\n</script>",
    "example": ".password-field { display: flex; align-items: center; border: 1px solid var(--line); border-radius: 6px; }",
    "points": [
      "Переключение свойства input.type = \"text\" / \"password\" мгновенно раскрывает или маскирует введённые символы точками.",
      "Обязательно ставь кнопке переключения type=\"button\", иначе клик по «глазку» внутри формы отправит саму форму!",
      "Вызов input.focus() после клика возвращает курсор обратно в поле, чтобы пользователь мог сразу продолжить печатать."
    ],
    "tags": [
      "рецепт",
      "password",
      "пароль",
      "показать пароль",
      "глазок",
      "форма",
      "авторизация"
    ],
    "when": "Во всех формах входа, регистрации и смены пароля для снижения числа опечаток со смартфона.",
    "alternatives": "В браузерах Edge есть встроенный системный значок глаза, который можно скрыть через input::-ms-reveal { display: none; }, чтобы он не дублировал твою кнопку.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/password"
  },
  {
    "lang": "recipes",
    "id": "recipe-scroll-progress-bar",
    "title": "Рецепт: Индикатор прогресса чтения статьи в самом верху экрана",
    "summary": "Тонкая акцентная полоска над шапкой сайта, плавно заполняющаяся от 0% до 100% по мере прокрутки длинной статьи.",
    "code": "<div id=\"reading-progress\" class=\"reading-progress\" aria-hidden=\"true\"></div>\n\n<style>\n.reading-progress {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background: linear-gradient(90deg, #38bdf8, #818cf8);\n  transform-origin: left;\n  transform: scaleX(0);\n  z-index: 200;\n}\n</style>\n\n<script>\nconst bar = document.getElementById('reading-progress');\nwindow.addEventListener('scroll', () => {\n  const scrollable = document.documentElement.scrollHeight - window.innerHeight;\n  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;\n  bar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;\n}, { passive: true });\n</script>",
    "example": "/* Используем transform: scaleX(...) вместо изменения width для идеальной плавности на GPU! */",
    "points": [
      "Полная доступная высота прокрутки страницы вычисляется как documentElement.scrollHeight минус высота видимого окна window.innerHeight.",
      "Анимация ширины через transform: scaleX(ratio) с transform-origin: left работает на видеокарте без пересчёта геометрии (в отличие от изменения width: 54%).",
      "В новейших браузерах такой прогресс-бар можно сделать даже без JS через CSS animation-timeline: scroll()!"
    ],
    "tags": [
      "рецепт",
      "прогресс чтения",
      "scroll progress",
      "скролл",
      "статья",
      "индикатор"
    ],
    "when": "В блогах, длинных руководствах документации и лонгридах.",
    "alternatives": "CSS Scroll-Driven Animations (animation-timeline: scroll(root)) поддерживаются в современных Chromium-браузерах.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline"
  },
  {
    "lang": "html",
    "id": "html-meta-charset-viewport",
    "title": "HTML: <meta name=\"viewport\"> и управление масштабом на смартфонах",
    "summary": "Точная настройка ширины области просмотра, запрет нежелательного сдвига клавиатуры и доступный зум.",
    "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, interactive-widget=resizes-content\">",
    "example": "/* Не используй user-scalable=no или maximum-scale=1 — это блокирует зум слабовидящим и снижает балл Lighthouse! */",
    "points": [
      "width=device-width сообщает мобильному браузеру использовать реальную CSS-ширину экрана (например, 390px), а не эмулировать десктопный монитор 980px.",
      "Новый параметр interactive-widget=resizes-content корректно сжимает высоту 100dvh при появлении экранной клавиатуры на Android/iOS!",
      "Никогда не ставь user-scalable=no: чтобы iOS Safari сам не зумил страницу при клике в инпут, просто задай всем <input> размер шрифта не меньше 16px (font-size: 16px)!"
    ],
    "tags": [
      "HTML",
      "viewport",
      "meta",
      "mobile",
      "scale",
      "zoom",
      "клавиатура",
      "мобильная верстка"
    ],
    "when": "В секции <head> абсолютно каждой адаптивной страницы.",
    "alternatives": "Для предотвращения автозума инпутов на iPhone используй font-size: max(16px, 1rem) на полях форм.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Viewport_meta_tag"
  },
  {
    "lang": "html",
    "id": "html-table-colgroup-tfoot",
    "title": "HTML: итоги таблицы <tfoot> и стилизация колонок <colgroup>, <col>",
    "summary": "Семантический подвал таблицы с итоговой суммой и задание ширины или фона целым столбцам через <colgroup>.",
    "code": "<table>\n  <colgroup>\n    <col style=\"width: 60%\">\n    <col style=\"width: 20%\">\n    <col class=\"highlight-col\" style=\"width: 20%\">\n  </colgroup>\n  <thead>\n    <tr><th>Услуга</th><th>Часы</th><th>Сумма</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Разработка фронтенда</td><td>40</td><td>80 000 ₽</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><th colspan=\"2\">Итого к оплате:</th><td><strong>80 000 ₽</strong></td></tr>\n  </tfoot>\n</table>",
    "example": "table { table-layout: fixed; width: 100%; } /* Быстрая отрисовка таблицы по ширине первой строки */",
    "points": [
      "Тег <colgroup> с вложенными <col> позволяет задать width или background сразу всему столбцу таблицы без дублирования класса на каждой ячейке <td>.",
      "<tfoot> размечает строку с итоговыми суммами и при печати многостраничной таблицы автоматически дублируется внизу каждого листа.",
      "CSS-свойство table-layout: fixed ускоряет расчёт широких таблиц: браузер берёт ширину колонок из <colgroup> или первой строки, не пересчитывая все 1000 строк."
    ],
    "tags": [
      "HTML",
      "tfoot",
      "colgroup",
      "col",
      "table-layout",
      "таблица",
      "итого",
      "столбцы"
    ],
    "when": "В счетах на оплату, корзинах товаров, сметах и сравнительных таблицах тарифов.",
    "alternatives": "Если итоговая строка не нужна, секцию <tfoot> можно не указывать.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/colgroup"
  },
  {
    "lang": "html",
    "id": "html-input-range-number-step",
    "title": "HTML: ползунок <input type=\"range\"> с делениями <datalist> и шагом step",
    "summary": "Настройка ползунков громкости, цены или калькулятора кредита с магнитными засечками и выводом значения.",
    "code": "<label for=\"loan-term\">Срок: <output id=\"term-val\">12</output> мес.</label>\n<input\n  type=\"range\"\n  id=\"loan-term\"\n  min=\"3\"\n  max=\"36\"\n  step=\"3\"\n  value=\"12\"\n  list=\"term-ticks\"\n  oninput=\"document.getElementById('term-val').value = this.value\"\n>\n<datalist id=\"term-ticks\">\n  <option value=\"3\" label=\"3м\"></option>\n  <option value=\"12\" label=\"1г\"></option>\n  <option value=\"24\" label=\"2г\"></option>\n  <option value=\"36\" label=\"3г\"></option>\n</datalist>",
    "example": "<input type=\"number\" min=\"0\" max=\"100\" step=\"0.01\"> /* Разрешает ввод дробных копеек! */",
    "points": [
      "По умолчанию у <input type=\"number\"> и <input type=\"range\"> шаг step равен 1 (разрешены только целые числа). Чтобы разрешить ввод копеек или дробных чисел, укажи step=\"0.01\" или step=\"any\"!",
      "Привязка <datalist> через атрибут list к ползунку type=\"range\" рисует нативные риски-деления вдоль дорожки ползунка.",
      "Событие input срабатывает непрерывно в момент перетаскивания ползунка, а событие change — только когда пользователь отпустил палец."
    ],
    "tags": [
      "HTML",
      "range",
      "number",
      "step",
      "min",
      "max",
      "output",
      "ползунок",
      "калькулятор"
    ],
    "when": "В визуальных генераторах CSS, фильтрах цены, калькуляторах доставки и настройках звука.",
    "alternatives": "Для выбора диапазона «от и до» двумя бегунками используют два наложенных друг на друга <input type=\"range\">.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/range"
  },
  {
    "lang": "html",
    "id": "html-svg-sprite-use",
    "title": "HTML & SVG: векторный спрайт иконок (<svg><use href=\"#icon-id\">)</use>",
    "summary": "Переиспользование одних и тех же SVG-иконок на странице без дублирования громоздких координат <path>.",
    "code": "<!-- 1. Скрытый набор символов один раз в начале страницы (или во внешнем sprite.svg) -->\n<svg hidden aria-hidden=\"true\">\n  <symbol id=\"icon-check\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n    <polyline points=\"20 6 9 17 4 12\"></polyline>\n  </symbol>\n</svg>\n\n<!-- 2. Компактная вставка иконки в любом месте с поддержкой currentColor -->\n<svg width=\"18\" height=\"18\" aria-hidden=\"true\">\n  <use href=\"#icon-check\"></use>\n</svg>",
    "example": "<svg width=\"20\" height=\"20\"><use href=\"/assets/icons.svg#search\"></use></svg>",
    "points": [
      "Если одна и та же иконка (галочка, звезда, корзина) повторяется в 50 карточках каталога, вынеси её в <symbol id=\"...\"> и вызывай через <use href=\"#...\"> — HTML-код страницы станет легче в разы!",
      "Используй современный атрибут href=\"#id\" вместо устаревшего xlink:href=\"#id\".",
      "Внутри <symbol> обязательно задавай stroke=\"currentColor\" или fill=\"currentColor\", чтобы каждый экземпляр <use> можно было красить своим CSS-цветом."
    ],
    "tags": [
      "HTML",
      "SVG",
      "symbol",
      "use",
      "sprite",
      "спрайт",
      "иконки",
      "оптимизация"
    ],
    "when": "В каталогах товаров, таблицах и панелях инструментов с повторяющимися иконками.",
    "alternatives": "Для одиночных уникальных иллюстраций проще вставить инлайновый <svg> напрямую.",
    "url": "https://developer.mozilla.org/ru/docs/Web/SVG/Element/use"
  },
  {
    "lang": "css",
    "id": "css-visibility-opacity-display",
    "title": "CSS: разница между display: none, visibility: hidden, opacity: 0 и content-visibility",
    "summary": "Шпаргалка по 4 способам скрытия элемента: влияние на поток документа, клики мышью, скринридеры и анимацию.",
    "code": "/* 1. Полное удаление из верстки и дерева доступности (нельзя анимировать плавно без allow-discrete) */\n.is-removed { display: none; }\n\n/* 2. Место в сетке сохраняется, но элемент невидим и НЕ кликабелен */\n.is-invisible { visibility: hidden; }\n\n/* 3. Прозрачен, но ОСТАЁТСЯ кликабельным! Всегда комбинируй с pointer-events: none */\n.is-faded {\n  opacity: 0;\n  pointer-events: none;\n}",
    "example": ".dropdown {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 200ms, visibility 200ms;\n}",
    "points": [
      "Главная ошибка новичков: скрыть выпадающее меню или попап только через opacity: 0! Невидимое меню продолжит перехватывать все клики мышью по кнопкам под ним. Обязательно добавляй visibility: hidden или pointer-events: none!",
      "Связка opacity: 0 + visibility: hidden идеально анимируется через transition: элемент плавно растворяется и после этого перестаёт реагировать на мышь и клавишу Tab.",
      "display: none полностью освобождает занимаемое блоком место в потоке."
    ],
    "tags": [
      "CSS",
      "display none",
      "visibility hidden",
      "opacity",
      "скрыть элемент",
      "разница",
      "анимация"
    ],
    "when": "При реализации выпадающих меню, тултипов, модальных окон и табов.",
    "alternatives": "Для скрытия текста только от глаз с сохранением для скринридера используй паттерн .sr-only.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/visibility"
  },
  {
    "lang": "css",
    "id": "css-writing-mode-text-orientation",
    "title": "CSS: вертикальный текст (writing-mode: vertical-rl) и поворот подписей",
    "summary": "Оформление вертикальных боковых подписей секций, корешков книг и заголовков узких столбцов таблицы.",
    "code": ".side-label {\n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n  transform: rotate(180deg); /* Чтобы текст читался снизу вверх */\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}",
    "example": "writing-mode: horizontal-tb; /* Стандартный горизонтальный режим по умолчанию */",
    "points": [
      "В отличие от transform: rotate(-90deg), свойство writing-mode: vertical-rl честно меняет блочную модель: ширина блока становится узкой по высоте букв, и соседние элементы аккуратно прижимаются к нему!",
      "Добавление transform: rotate(180deg) к vertical-rl разворачивает строку так, чтобы она читалась снизу вверх (привычно для европейских корешков и боковых лейблов).",
      "Очень удобно для узких заголовков столбцов таблицы с чекбоксами или датами."
    ],
    "tags": [
      "CSS",
      "writing-mode",
      "vertical-rl",
      "text-orientation",
      "вертикальный текст",
      "типографика"
    ],
    "when": "Для декоративных боковых индикаторов секций, билетов, бейджей и компактных таблиц.",
    "alternatives": "Поворот через rotate(-90deg) оставляет вокруг элемента старую широкую горизонтальную коробку.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/writing-mode"
  },
  {
    "lang": "css",
    "id": "css-scroll-margin-padding",
    "title": "CSS: отступ при прокрутке к якорю (scroll-margin-top под фиксированную шапку)",
    "summary": "Изящное решение проблемы, когда при клике по оглавлению заголовок секции прячется под фиксированным навбаром.",
    "code": "/* Задаём всем заголовкам с id запас сверху, равный высоте шапки (56px) + 20px воздуха! */\nh2[id],\nh3[id],\nsection[id] {\n  scroll-margin-top: 76px;\n}",
    "example": "html {\n  scroll-behavior: smooth;\n}",
    "points": [
      "Когда на сайте есть sticky или fixed шапка высотой 56px, переход по ссылке <a href=\"#faq\"> прижимает заголовок #faq к самому верху окна — прямо ПОД шапку!",
      "Одно свойство scroll-margin-top: 76px на целевых секциях заставляет браузер останавливать прокрутку ровно на 76px выше заголовка.",
      "Работает как при клике по якорной ссылке #hash, так и при вызове element.scrollIntoView() из JavaScript!"
    ],
    "tags": [
      "CSS",
      "scroll-margin-top",
      "scroll-padding-top",
      "anchor",
      "sticky",
      "якорь",
      "оглавление",
      "шапка"
    ],
    "when": "На всех страницах с фиксированной шапкой и якорной навигацией (лендинги, документация, статьи).",
    "alternatives": "Раньше для этого городили невидимые псевдоэлементы ::before с отрицательным margin-top.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top"
  },
  {
    "lang": "css",
    "id": "css-inset-center-absolute",
    "title": "CSS: центрирование абсолютного/фиксированного блока через inset: 0 и margin: auto",
    "summary": "Современный способ центрирования модалки или иконки с известными размерами без сдвига translate(-50%, -50%).",
    "code": ".floating-dialog {\n  position: fixed;\n  inset: 0;              /* Растягивает привязку ко всем 4 краям экрана (top/right/bottom/left: 0) */\n  width: min(480px, 92vw);\n  height: fit-content;   /* Высота подстраивается под контент внутри! */\n  margin: auto;          /* Браузер сам центрирует блок по вертикали и горизонтали! */\n}",
    "example": ".badge-center {\n  position: absolute;\n  inset-inline: 0;\n  margin-inline: auto;\n  width: max-content;\n}",
    "points": [
      "Благодаря поддержке height: fit-content и width: fit-content теперь можно центрировать абсолютный или фиксированный блок через inset: 0; margin: auto; даже не зная его точной высоты в пикселях!",
      "В отличие от transform: translate(-50%, -50%), этот способ оставляет свойство transform свободным для анимаций scale() и не размывает шрифты на нечётных пикселях.",
      "Для центрирования только по горизонтали используй пару inset-inline: 0; margin-inline: auto;."
    ],
    "tags": [
      "CSS",
      "inset",
      "margin auto",
      "absolute",
      "fixed",
      "fit-content",
      "центрирование"
    ],
    "when": "При позиционировании всплывающих окон, тостов по центру, тултипов и декоративных плашек.",
    "alternatives": "Если родитель не обязан быть absolute, проще задать родителю display: grid; place-items: center;.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/inset"
  },
  {
    "lang": "css",
    "id": "css-selection-scrollbar-styling",
    "title": "CSS: кроссбраузерная стилизация полос прокрутки (scrollbar-width и ::-webkit-scrollbar)",
    "summary": "Аккуратные тёмные и тонкие скроллбары для редакторов кода, боковых панелей и модальных окон.",
    "code": "/* Стандартное свойство (Firefox, Chrome 121+, Edge) */\n.custom-scroll {\n  scrollbar-width: thin;\n  scrollbar-color: rgba(148, 163, 184, 0.3) transparent;\n}\n\n/* Тонкая настройка для WebKit / Safari */\n.custom-scroll::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.custom-scroll::-webkit-scrollbar-thumb {\n  background: rgba(148, 163, 184, 0.3);\n  border-radius: 3px;\n}",
    "example": ":root { color-scheme: dark; } /* Автоматически делает системный скроллбар тёмным! */",
    "points": [
      "Прежде чем городить кастомный скроллбар, проверь: свойство color-scheme: dark на :root само переключает стандартный белый скроллбар Windows в аккуратный тёмный режим!",
      "Свойство scrollbar-width: thin и scrollbar-color теперь поддерживаются и в Firefox, и в современных версиях Chrome/Edge.",
      "Никогда не скрывай скроллбар полностью (scrollbar-width: none) на длинных блоках кода или текста, иначе пользователь с мышью не поймёт, что контент можно прокрутить."
    ],
    "tags": [
      "CSS",
      "scrollbar",
      "scrollbar-width",
      "scrollbar-color",
      "webkit-scrollbar",
      "полоса прокрутки"
    ],
    "when": "Во внутренних панелях сайдбара, блоках кода <pre>, выпадающих списках и чатах.",
    "alternatives": "Для горизонтальной ленты табов на мобильном экране допустимо скрыть полосу через scrollbar-width: none.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width"
  },
  {
    "lang": "css",
    "id": "css-list-style-details-marker",
    "title": "CSS: кастомные маркеры списков (::marker, list-style-type: \"→ \")",
    "summary": "Замена стандартных круглых точек списка на любой символ, тире или эмодзи прямо в CSS-свойстве list-style-type.",
    "code": "/* Любая строка в кавычках как маркер списка! */\n.feature-list {\n  list-style-type: \"✓ \";\n  padding-left: 20px;\n}\n\n.feature-list li {\n  padding-left: 6px;\n}\n\n.feature-list li::marker {\n  color: #10b981;\n  font-weight: 700;\n}",
    "example": "list-style-type: \"— \"; /* Классическое русское тире в качестве буллита списка */",
    "points": [
      "Мало кто знает, что в свойство list-style-type можно передать любую строку в кавычках: list-style-type: \"→ \", \"— \" или \"✓ \"!",
      "Псевдоэлемент li::marker позволяет покрасить этот символ в акцентный цвет и задать ему жирный шрифт, не создавая ручных псевдоэлементов ::before с position: absolute.",
      "При сбросе маркеров навигационного меню через list-style: none в Safari старых версий используй семантический тег <nav> вокруг <ul>, чтобы сохранить роль списка."
    ],
    "tags": [
      "CSS",
      "list-style-type",
      "marker",
      "ul",
      "li",
      "список",
      "маркеры",
      "буллиты"
    ],
    "when": "В списках преимуществ тарифа («✓ Безлимитный трафик»), чек-листах и текстовых статьях.",
    "alternatives": "Если в качестве буллита нужна многоцветная SVG-иконка, используй display: flex на li или background-image.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/list-style-type"
  },
  {
    "lang": "javascript",
    "id": "js-array-from-fill-range",
    "title": "JS: генерация массивов и последовательностей (Array.from, Array.fill)",
    "summary": "Создание массива чисел от 1 до N для пагинации, звёзд рейтинга или сетки календаря в одну строчку.",
    "code": "// 1. Генерация массива чисел [1, 2, 3, 4, 5] для кнопок пагинации\nconst pages = Array.from({ length: 5 }, (_, index) => index + 1);\n\n// 2. Генерация шага чисел (например, годы с 2020 по 2026)\nconst range = (start, stop, step = 1) =>\n  Array.from({ length: Math.floor((stop - start) / step) + 1 }, (_, i) => start + i * step);\n\nconsole.log(range(2020, 2026)); // [2020, 2021, 2022, 2023, 2024, 2025, 2026]\n\n// 3. Превращение NodeList или Set в настоящий массив с маппингом за один шаг!\nconst texts = Array.from(document.querySelectorAll('h2'), el => el.textContent.trim());",
    "example": "const emptyGrid = Array.from({ length: 3 }, () => Array(3).fill(null));",
    "points": [
      "Второй аргумент в Array.from(iterable, mapFn) работает как встроенный .map() без создания промежуточного массива!",
      "Осторожно с Array(3).fill({}): метод .fill({}) заполнит все ячейки ссылкой на ОДИН И ТОТ ЖЕ объект в памяти! Чтобы создать независимые объекты или вложенные массивы, всегда используй Array.from({ length: 3 }, () => ({}))!",
      "Конструкция Array.from({ length: N }, (_, i) => i + 1) — стандартный идиоматический генератор диапазона в JS."
    ],
    "tags": [
      "JavaScript",
      "Array.from",
      "fill",
      "range",
      "пагинация",
      "последовательность",
      "массивы"
    ],
    "when": "При рендеринге номеров страниц пагинации, скелетонов загрузки, звёзд рейтинга и игровых сеток.",
    "alternatives": "Цикл for (let i = 1; i <= n; i++) делает то же самое императивно.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from"
  },
  {
    "lang": "javascript",
    "id": "js-number-parse-isnan",
    "title": "JS: безопасное преобразование чисел (Number, parseInt, Number.isFinite, toFixed)",
    "summary": "Чтение числовых значений из инпутов и атрибутов, проверка на валидное число и защита от NaN.",
    "code": "const rawValue = inputElement.value; // всегда строка, например \"42.5\"\n\n// Быстрое преобразование через Number() или чтение сразу как числа:\nconst num = inputElement.valueAsNumber; // встроенное свойство для <input type=\"number\" / \"range\">!\n\n// Надёжная проверка, что значение — реальное конечное число (отсекает NaN, Infinity и \"42px\")\nif (Number.isFinite(num)) {\n  console.log(num.toFixed(2)); // \"42.50\"\n}\n\n// Целое число из строки с единицами измерения (\"16px\" -> 16)\nconst px = Number.parseInt('16px', 10);",
    "example": "const quantity = Math.max(1, Number.parseInt(input.value, 10) || 1);",
    "points": [
      "У полей <input type=\"number\">, <input type=\"range\"> и <input type=\"date\"> есть готовое свойство input.valueAsNumber, которое сразу возвращает тип number без ручного парсинга строк!",
      "Используй строгий Number.isFinite(val) или Number.isNaN(val) вместо старой глобальной функции isNaN(), которая сначала пытается привести строку к числу.",
      "Помни, что метод num.toFixed(2) возвращает СТРОКУ (\"42.50\"), поэтому если дальше нужно складывать числа, сначала выполни всю математику и вызывай toFixed() только перед самым выводом на экран!"
    ],
    "tags": [
      "JavaScript",
      "Number",
      "parseInt",
      "parseFloat",
      "isFinite",
      "isNaN",
      "valueAsNumber",
      "toFixed",
      "числа"
    ],
    "when": "При чтении ползунков, цен, количества товара в корзине и калькуляторов.",
    "alternatives": "Унарный плюс (+str) работает как Number(str), но хуже читается в длинных выражениях.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite"
  },
  {
    "lang": "javascript",
    "id": "js-object-freeze-assign-clone",
    "title": "JS: глубокое клонирование (structuredClone) и неизменяемые константы (Object.freeze)",
    "summary": "Нативное создание полной независимой копии вложенных объектов/массивов и защита словарей конфигурации от мутации.",
    "code": "const originalState = {\n  user: { name: 'Павел', prefs: { theme: 'dark' } },\n  history: ['html-dialog', 'css-grid']\n};\n\n// Глубокая копия на уровне браузера (копирует вложенные объекты, массивы, Date, Map, Set!)\nconst nextState = structuredClone(originalState);\nnextState.user.prefs.theme = 'light'; // originalState.user.prefs.theme остался 'dark'!\n\n// Защита объекта констант от случайного изменения\nconst ROLES = Object.freeze({ ADMIN: 'admin', USER: 'user' });",
    "example": "/* structuredClone работает быстрее и точнее старого хака JSON.parse(JSON.stringify(obj)) */",
    "points": [
      "Оператор расширения {...obj} копирует только первый уровень, оставляя вложенные объекты общими по ссылке. Встроенная функция structuredClone(obj) создаёт полноценную глубокую копию!",
      "В отличие от старого трюка JSON.parse(JSON.stringify(obj)), метод structuredClone не ломает объекты Date, RegExp, Map, Set и Blob.",
      "Object.freeze(obj) замораживает объект первого уровня: в строгом режиме (\"use strict\" / ES-модули) попытка перезаписать свойство выбросит TypeError."
    ],
    "tags": [
      "JavaScript",
      "structuredClone",
      "Object.freeze",
      "Object.assign",
      "clone",
      "копия объекта",
      "иммутабельность"
    ],
    "when": "При сохранении снимков состояния (undo/redo в редакторах), работе со стейтом и объявлении констант.",
    "alternatives": "Учитывай, что structuredClone не копирует функции и DOM-элементы.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Window/structuredClone"
  },
  {
    "lang": "javascript",
    "id": "js-async-iterators-generators",
    "title": "JS: загрузка с повтором при сбое сети (fetch Retry с экспоненциальной паузой)",
    "summary": "Надёжная обёртка вокруг fetch() для автоматического повтора запроса при кратковременном обрыве мобильного интернета.",
    "code": "async function fetchWithRetry(url, options = {}, retries = 3, delayMs = 500) {\n  for (let attempt = 1; attempt <= retries; attempt++) {\n    try {\n      const response = await fetch(url, options);\n      if (!response.ok && response.status >= 500 && attempt < retries) {\n        throw new Error(`HTTP ${response.status}`);\n      }\n      return response;\n    } catch (err) {\n      if (attempt === retries || err.name === 'AbortError') throw err;\n      // Экспоненциальная пауза перед повтором: 500мс -> 1000мс -> 2000мс\n      await new Promise(r => setTimeout(r, delayMs * (2 ** (attempt - 1))));\n    }\n  }\n}",
    "example": "const res = await fetchWithRetry('/api/catalog');",
    "points": [
      "Повторять запрос (retry) имеет смысл только при сетевом обрыве или временных серверных ошибках 502 / 503 / 504 (но НЕ при клиентских ошибках 400 / 401 / 403 / 404!).",
      "Экспоненциальная задержка (500 мс, 1000 мс, 2000 мс) даёт серверу или мобильной сети время восстановиться, не заваливая его лавиной повторных запросов.",
      "Если запрос был отменён намеренно через AbortController (err.name === \"AbortError\"), цикл повторов немедленно прерывается."
    ],
    "tags": [
      "JavaScript",
      "fetch",
      "retry",
      "backoff",
      "async",
      "await",
      "сеть",
      "ошибки сети"
    ],
    "when": "При загрузке важных справочников, сохранении черновиков и работе в условиях нестабильного мобильного интернета.",
    "alternatives": "Для POST-запросов оплаты используй заголовок Idempotency-Key, чтобы повтор не создал дубль заказа.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Fetch_API"
  },
  {
    "lang": "html",
    "id": "html-dfn-var-samp-output",
    "title": "HTML: техническая типографика (<dfn>, <var>, <abbr>, <cite>, <q>)",
    "summary": "Семантическая разметка определений терминов, математических переменных и строчных цитат в документации.",
    "code": "<p>\n  <dfn id=\"term-dom\"><abbr title=\"Document Object Model\">DOM</abbr></dfn> — это объектная модель документа,\n  представляющая HTML в виде дерева узлов.\n</p>\n\n<p>\n  Формула расчёта отступа сетки: <var>totalWidth</var> = <var>columns</var> × <var>colWidth</var> + (<var>columns</var> - 1) × <var>gap</var>.\n</p>",
    "example": "<p>Как гласит стандарт <cite>HTML Living Standard</cite>: <q>Семантика важнее визуального вида</q>.</p>",
    "points": [
      "<dfn> отмечает место в тексте, где термин вводится и объясняется впервые (на него можно ссылаться по #id из других статей).",
      "<var> выделяет имена математических переменных и аргументов формул курсивом, отличая их от обычного программного кода <code>.",
      "Тег <q> автоматически оборачивает строчную цитату в правильные типографские кавычки («ёлочки» для lang=\"ru\")!"
    ],
    "tags": [
      "HTML",
      "dfn",
      "var",
      "q",
      "cite",
      "abbr",
      "термин",
      "переменная",
      "кавычки",
      "типографика"
    ],
    "when": "В обучающих статьях, документации API, технических спецификациях и учебниках.",
    "alternatives": "Для программного кода функций и тегов всегда используй <code>, а не <var>.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/dfn"
  },
  {
    "lang": "html",
    "id": "html-map-area-object",
    "title": "HTML: встраивание PDF-документов (<object> / <iframe>) и интерактивные области",
    "summary": "Просмотр PDF-прайсов и инструкций прямо внутри веб-страницы с запасной ссылкой на скачивание.",
    "code": "<object\n  data=\"/files/specification.pdf\"\n  type=\"application/pdf\"\n  width=\"100%\"\n  height=\"600\"\n>\n  <p>\n    Ваш браузер не поддерживает встроенный просмотр PDF.\n    <a href=\"/files/specification.pdf\" download>Скачать PDF-файл (2.4 МБ)</a>\n  </p>\n</object>",
    "example": "<a href=\"/price.pdf\" target=\"_blank\" rel=\"noopener\">Открыть прайс-лист (PDF) ↗</a>",
    "points": [
      "Преимущество тега <object> над <iframe> для PDF в том, что всё содержимое между <object> и </object> автоматически показывается как аккуратная кнопка скачивания на мобильных браузерах, где нет встроенного PDF-ридера!",
      "Обязательно указывай атрибут type=\"application/pdf\" и понятную ссылку с атрибутом download внутри фолбэка.",
      "Для интерактивных планов этажей и карт залов сегодня вместо старого <map><area> используют инлайновый <svg> с кликабельными <path>."
    ],
    "tags": [
      "HTML",
      "object",
      "pdf",
      "embed",
      "map",
      "area",
      "документ",
      "просмотр pdf"
    ],
    "when": "При выводе договоров, сертификатов, презентаций и технических паспортов на странице.",
    "alternatives": "На мобильных экранах удобнее сразу давать прямую кнопку скачивания PDF с указанием размера файла.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/object"
  },
  {
    "lang": "html",
    "id": "html-tabindex-focus-management",
    "title": "HTML: управление фокусом клавиатуры (tabindex=\"0\", tabindex=\"-1\", inert)",
    "summary": "Правила навигации клавишей Tab по странице, программный перевод фокуса на модалку и отключение фона.",
    "code": "<!-- 1. Элемент участвует в обычном порядке нажатия клавиши Tab -->\n<div class=\"custom-card\" tabindex=\"0\" role=\"region\" aria-label=\"Превью\">...</div>\n\n<!-- 2. Элемент НЕ попадает под Tab, но на него можно перевести фокус из JS: el.focus()! -->\n<h2 id=\"modal-heading\" tabindex=\"-1\">Окно настроек</h2>\n\n<!-- 3. Полное отключение интерактивности и фокуса для всей фоновой секции -->\n<main inert>...</main>",
    "example": "/* НИКОГДА не используй положительные значения tabindex=\"1\", tabindex=\"2\" — они ломают порядок обхода страницы! */",
    "points": [
      "tabindex=\"0\" включает нестандартный элемент в естественный порядок обхода клавишей Tab (но для кнопок всегда лучше сразу взять <button>, у которого фокус уже есть из коробки).",
      "tabindex=\"-1\" незаменим для заголовков открывшихся модальных окон или блоков ошибок формы: пользователь не спотыкается о них при обычном Tab, но скрипт может вызвать heading.focus()!",
      "Никогда не пиши tabindex=\"1\", \"2\", \"3\": положительные числа заставляют курсор прыгать по странице в хаотичном порядке."
    ],
    "tags": [
      "HTML",
      "tabindex",
      "focus",
      "inert",
      "клавиатура",
      "фокус",
      "доступность",
      "tab"
    ],
    "when": "При управлении фокусом в модальных окнах, табах (roving tabindex) и пропускающих ссылках.",
    "alternatives": "Нативный <dialog> при вызове showModal() сам делает остальную страницу инертной (inert).",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/tabindex"
  },
  {
    "lang": "html",
    "id": "html-form-attributes-novalidate",
    "title": "HTML: атрибуты тега <form> (action, method, enctype=\"multipart/form-data\", novalidate)",
    "summary": "Конфигурация отправки формы на сервер, обязательный enctype для загрузки файлов и привязка кнопки вне формы.",
    "code": "<!-- При наличии <input type=\"file\"> атрибут enctype=\"multipart/form-data\" ОБЯЗАТЕЛЕН! -->\n<form id=\"checkout-form\" action=\"/api/orders\" method=\"POST\" enctype=\"multipart/form-data\">\n  <input type=\"text\" name=\"customer\" required>\n  <input type=\"file\" name=\"receipt\">\n</form>\n\n<!-- Кнопка в шапке или подвале может отправлять форму по её id через атрибут form! -->\n<button type=\"submit\" form=\"checkout-form\">Оформить заказ</button>",
    "example": "<form novalidate> /* Отключает системные тултипы браузера для показа собственной кастомной валидации */",
    "points": [
      "Частая ошибка: если в форме есть <input type=\"file\">, но на самом теге <form> забыли написать enctype=\"multipart/form-data\", массив $_FILES в PHP придёт совершенно пустым!",
      "Атрибут form=\"checkout-form\" на кнопке <button> или <input> позволяет вынести кнопку «Сохранить» в липкую шапку или футер модалки за пределы самого тега <form>!",
      "Метод GET подставляет поля в адресную строку (?q=flex&sort=az) и используется для поиска/фильтров, а метод POST передаёт данные в теле запроса для изменения/сохранения."
    ],
    "tags": [
      "HTML",
      "form",
      "action",
      "method",
      "enctype",
      "multipart/form-data",
      "novalidate",
      "отправка формы"
    ],
    "when": "Во всех формах поиска (GET), авторизации (POST) и загрузки файлов (multipart/form-data).",
    "alternatives": "При отправке через JS new FormData(form) браузер автоматически кодирует файлы как multipart/form-data.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/form"
  },
  {
    "lang": "css",
    "id": "css-object-position-background-attachment",
    "title": "CSS: фокус кадрирования фото (object-position) и плавная загрузка картинок",
    "summary": "Смещение точки фокуса при обрезке портретов через object-fit: cover, чтобы у людей на фото не обрезалась голова.",
    "code": ".portrait-photo {\n  width: 100%;\n  height: 280px;\n  object-fit: cover;\n  /* Фокус по горизонтали в центре (50%), а по вертикали ближе к верху (20%), чтобы сохранить лицо в кадре! */\n  object-position: 50% 20%;\n  background-color: #121827; /* Цвет-заглушка до загрузки картинки */\n}",
    "example": "object-position: top center;",
    "points": [
      "По умолчанию object-fit: cover центрирует фото строго посередине (50% 50%), из-за чего на вертикальных портретах часто обрезается макушка головы. Свойство object-position: 50% 20% решает эту проблему!",
      "Задавай тегу <img> спокойный фоновый цвет background-color: var(--panel), чтобы во время подгрузки картинки не было пустой дырки.",
      "Стилизовать текст атрибута alt (на случай битой картинки) можно прямо в CSS на самом селекторе img."
    ],
    "tags": [
      "CSS",
      "object-position",
      "object-fit",
      "cover",
      "img",
      "портрет",
      "кадрирование",
      "фото"
    ],
    "when": "В карточках команды, аватарах, обложках статей и баннерах с людьми.",
    "alternatives": "Для фоновых декоративных картинок аналогично работает свойство background-position: 50% 20%.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/object-position"
  },
  {
    "lang": "css",
    "id": "css-touch-action-overscroll",
    "title": "CSS: отзывчивость на тач-экранах (touch-action: manipulation и -webkit-tap-highlight-color)",
    "summary": "Отключение синей вспышки при тапе на Android/iOS и мгновенный отклик кнопок без задержки двойного зума.",
    "code": "html {\n  /* Убирает стандартную полупрозрачную синюю/серую вспышку при тапе пальцем на смартфонах */\n  -webkit-tap-highlight-color: transparent;\n}\n\nbutton, a, input, label {\n  /* Разрешает скролл и пинч-зум, но отключает задержку ожидания двойного тапа на кнопках! */\n  touch-action: manipulation;\n}",
    "example": ".canvas-drawing-area {\n  touch-action: none; /* Перехватывает движения пальца для рисования без прокрутки страницы */\n}",
    "points": [
      "-webkit-tap-highlight-color: transparent убирает грубую системную подсветку тапа на мобильных устройствах, позволяя использовать собственные аккуратные стили :active.",
      "touch-action: manipulation делает быстрые многократные нажатия по кнопкам («+ / -» количества товара в корзине) мгновенными без срабатывания зума браузера.",
      "На кастомных ползунках и холстах <canvas> используй touch-action: none или touch-action: pan-y, чтобы движение пальца влево-вправо не дёргало страницу."
    ],
    "tags": [
      "CSS",
      "touch-action",
      "tap-highlight-color",
      "manipulation",
      "mobile",
      "тач",
      "смартфон",
      "кнопки"
    ],
    "when": "В базовом CSS-сбросе любого веб-приложения и PWA.",
    "alternatives": "При отключении tap-highlight обязательно задай заметный отклик кнопки через :active { transform: scale(0.98); }.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/touch-action"
  },
  {
    "lang": "css",
    "id": "css-grid-minmax-auto-fill-vs-fit",
    "title": "CSS Grid: разница между auto-fill и auto-fit в адаптивной сетке",
    "summary": "Наглядное объяснение того, как ведёт себя строка сетки, когда карточек в ней меньше, чем помещается по ширине экрана.",
    "code": "/* 1. auto-fill: сохраняет пустые колонки справа — одна карточка НЕ растянется на весь экран! */\n.catalog-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));\n  gap: 16px;\n}\n\n/* 2. auto-fit: схлопывает пустые колонки в 0 — если карточек всего 2, они растянутся по 50% каждая */\n.features-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));\n  gap: 16px;\n}",
    "example": "/* Обрати внимание на min(280px, 100%) внутри minmax — это защищает от скролла на узких экранах 320px! */",
    "points": [
      "Ключевое отличие проявляется, когда карточек мало (например, в результатах поиска нашлась всего 1 карточка): с auto-fill она займёт аккуратную 1 колонку слева (~300px), а с auto-fit раздуется на всю ширину монитора (1360px)!",
      "Поэтому для каталогов товаров, статей и результатов поиска ВСЕГДА используй auto-fill, а для плашек преимуществ (где всегда 3–4 блока) — auto-fit.",
      "Формула minmax(min(280px, 100%), 1fr) гарантирует, что даже если экран уже 280px, колонка сожмётся до 100% без горизонтального скролла."
    ],
    "tags": [
      "CSS",
      "auto-fill",
      "auto-fit",
      "minmax",
      "grid-template-columns",
      "разница",
      "сетка",
      "каталог"
    ],
    "when": "Используй auto-fill в списках с переменным числом карточек (поиск, избранное, каталог).",
    "alternatives": "Flexbox с flex-wrap: wrap всегда растягивает последнюю одинокую карточку при flex-grow: 1, поэтому для ровных каталогов лучше подходит Grid с auto-fill.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/repeat"
  },
  {
    "lang": "css",
    "id": "css-empty-only-child-target",
    "title": "CSS: псевдоклассы состояния страницы (:target, :only-child, :placeholder-shown)",
    "summary": "Подсветка секции, к которой перешли по якорной ссылке (#id), и плавающий лейбл инпута на чистом CSS.",
    "code": "/* Подсвечивает раздел или комментарий, чей #id сейчас указан в адресной строке браузера! */\nsection:target {\n  border-color: #38bdf8;\n  background: rgba(56, 189, 248, 0.06);\n  scroll-margin-top: 80px;\n}\n\n/* Показываем кнопку «Очистить поиск» только когда в инпуте набран текст (плейсхолдер скрыт)! */\n.search-input:not(:placeholder-shown) ~ .clear-btn {\n  display: inline-flex;\n}",
    "example": "<input placeholder=\" \"> /* Пробел в placeholder нужен для работы трюка с :placeholder-shown */",
    "points": [
      "Псевдокласс :target автоматически срабатывает на элементе, чей id совпадает с хешем в URL (например, страница открыта по ссылке page.html#faq-3)!",
      "Псевдокласс :placeholder-shown проверяет, пуст ли сейчас <input> (показывается ли его placeholder). С его помощью делают «плавающие подписи» (Floating Labels) и показ крестика очистки на чистом CSS!",
      ":only-child выбирает элемент только в том случае, если у него нет других соседей внутри родителя."
    ],
    "tags": [
      "CSS",
      ":target",
      ":placeholder-shown",
      ":only-child",
      "floating label",
      "якорь",
      "инпут"
    ],
    "when": "Для подсветки выбранного в оглавлении раздела или процитированного комментария (:target) и умных полей ввода (:placeholder-shown).",
    "alternatives": "Для сложной логики очистки инпута по клику на крестик добавь 3 строчки JS.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:target"
  },
  {
    "lang": "php",
    "id": "php-sql-joins-indexes",
    "title": "PHP & SQL: объединение таблиц (INNER JOIN vs LEFT JOIN), GROUP BY и индексы",
    "summary": "Практическая шпаргалка по выборке связанных данных из нескольких таблиц БД и ускорению медленных запросов.",
    "code": "-- 1. LEFT JOIN: выбираем ВСЕ статьи и количество комментариев к каждой (даже если комментариев 0!)\nSELECT\n    a.id,\n    a.title,\n    u.name AS author_name,\n    COUNT(c.id) AS comments_count\nFROM articles a\nINNER JOIN users u ON u.id = a.author_id\nLEFT JOIN comments c ON c.article_id = a.id\nWHERE a.is_published = 1\nGROUP BY a.id\nORDER BY a.created_at DESC\nLIMIT 20;\n\n-- 2. Создание составного индекса для мгновенной фильтрации и сортировки\nCREATE INDEX idx_articles_pub_created ON articles (is_published, created_at DESC);",
    "example": "/* INNER JOIN отбрасывает строки без совпадения, а LEFT JOIN сохраняет все строки левой таблицы */",
    "points": [
      "Главное отличие: INNER JOIN возвращает только те записи, которые есть в обеих таблицах. Если считать комментарии к статьям через INNER JOIN, статьи без единого комментария просто пропадут из выборки! Поэтому для необязательных связей всегда используй LEFT JOIN.",
      "Обязательно создавай индексы (CREATE INDEX) на все внешние ключи (author_id, category_id) и поля, участвующие в WHERE и ORDER BY.",
      "Не пиши SELECT * в продакшене — перечисляй только нужные колонки, чтобы не гонять тяжёлые текстовые поля по сети впустую."
    ],
    "tags": [
      "PHP",
      "SQL",
      "JOIN",
      "LEFT JOIN",
      "INNER JOIN",
      "GROUP BY",
      "INDEX",
      "база данных",
      "запросы"
    ],
    "when": "При выводе списков статей с авторами, заказов с клиентами и категорий с количеством товаров.",
    "alternatives": "Избегай проблемы N+1 запросов (когда внутри цикла foreach по 20 статьям выполняется ещё 20 отдельных SQL-запросов за автором каждой статьи!).",
    "url": "https://www.php.net/manual/ru/book.pdo.php"
  },
  {
    "lang": "php",
    "id": "php-password-token-random-bytes",
    "title": "PHP 8: генерация криптостойких токенов (random_bytes, random_int) и HMAC-подписи",
    "summary": "Создание безопасных ссылок сброса пароля, API-ключей, одноразовых СМС-кодов и проверка подписи вебхуков.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// 1. 64-символьный криптостойкий токен для сброса пароля или API-ключа\n$resetToken = bin2hex(random_bytes(32));\n\n// 2. Криптостойкий 6-значный код подтверждения для СМС / Email\n$smsCode = (string) random_int(100000, 999999);\n\n// 3. Проверка цифровой подписи вебхука (HMAC-SHA256) от платёжной системы\n$expectedSig = hash_hmac('sha256', $rawWebhookBody, $webhookSecretKey);\nif (!hash_equals($expectedSig, $receivedSignatureHeader)) {\n    http_response_code(401);\n    exit('Неверная подпись вебхука');\n}",
    "example": "/* НИКОГДА не используй rand(), mt_rand() или uniqid() для токенов безопасности — они легко предсказываются! */",
    "points": [
      "Старые функции rand(), mt_rand() и uniqid() НЕ являются криптографически безопасными. Для любых токенов, паролей и кодов из СМС используй ТОЛЬКО random_bytes() и random_int()!",
      "Функция hash_hmac(\"sha256\", $payload, $secret) позволяет гарантировать, что пришедший на твой сервер вебхук об оплате действительно отправлен банком, а не подделан.",
      "При хранении токенов сброса пароля в БД хорошей практикой является хранение их хеша hash(\"sha256\", $token) с ограниченным временем жизни (например, 30 минут)."
    ],
    "tags": [
      "PHP",
      "random_bytes",
      "random_int",
      "bin2hex",
      "hash_hmac",
      "hash_equals",
      "токен",
      "безопасность",
      "вебхук"
    ],
    "when": "При генерации ссылок восстановления пароля, ключей API, пин-кодов и приёме платёжных уведомлений.",
    "alternatives": "Для генерации стандартного UUID v4 в PHP также используют random_bytes(16).",
    "url": "https://www.php.net/manual/ru/function.random-bytes.php"
  },
  {
    "lang": "php",
    "id": "php-output-buffering-templates",
    "title": "PHP 8: нативная шаблонизация через буферизацию вывода (ob_start / ob_get_clean)",
    "summary": "Чистое разделение PHP-логики и HTML-верстки без тяжёлых сторонних библиотек в 10 строчек кода.",
    "code": "<?php\ndeclare(strict_types=1);\n\n/**\n * Рендерит PHP-шаблон с переданными переменными и возвращает готовую HTML-строку\n */\nfunction renderView(string $templatePath, array $vars = []): string {\n    extract($vars, EXTR_SKIP); // EXTR_SKIP защищает от перезаписи существующих переменных\n    ob_start();\n    include $templatePath;\n    return (string) ob_get_clean();\n}\n\n// Использование: собираем карточку и вставляем её внутрь главного layout.php\n$contentHtml = renderView(__DIR__ . '/views/catalog.php', ['items' => $products]);\necho renderView(__DIR__ . '/views/layout.php', ['title' => 'Каталог', 'content' => $contentHtml]);",
    "example": "<h1><?= htmlspecialchars($title, ENT_QUOTES, 'UTF-8') ?></h1>",
    "points": [
      "Пара функций ob_start() и ob_get_clean() перехватывает весь HTML-вывод подключаемого файла в строку вместо немедленной отправки в браузер!",
      "Это позволяет сначала отрендерить внутреннюю страницу (и узнать её заголовок и метатеги), а затем обернуть результат в общий каркас шапки и подвала (layout.php).",
      "Внутри HTML-шаблонов используй короткий эхо-тег <?= e($var) ?> и альтернативный синтаксис foreach ($items as $item): ... endforeach;."
    ],
    "tags": [
      "PHP",
      "ob_start",
      "ob_get_clean",
      "include",
      "require",
      "шаблонизатор",
      "views",
      "layout"
    ],
    "when": "При создании лёгких сайтов, лендингов и личных кабинетов на чистом PHP без сложного фреймворка.",
    "alternatives": "В крупных командных проектах используют шаблонизаторы Twig или Blade с автоэкранированием.",
    "url": "https://www.php.net/manual/ru/function.ob-get-clean.php"
  },
  {
    "lang": "xml",
    "id": "seo-security-headers-csp",
    "title": "SEO & Безопасность: ключевые HTTP-заголовки защиты (CSP, HSTS, X-Frame-Options)",
    "summary": "Защита сайта от внедрения чужих скриптов (XSS), кликджекинга в чужих iframe и принудительный HTTPS.",
    "code": "# Конфигурация для Nginx (или через header() в PHP / .htaccess в Apache):\nadd_header Strict-Transport-Security \"max-age=31536000; includeSubDomains\" always;\nadd_header X-Content-Type-Options \"nosniff\" always;\nadd_header X-Frame-Options \"SAMEORIGIN\" always;\nadd_header Referrer-Policy \"strict-origin-when-cross-origin\" always;\nadd_header Permissions-Policy \"camera=(), microphone=(), geolocation=()\" always;",
    "example": "/* Именно из-за заголовка X-Frame-Options: DENY сайты вроде MDN и Google нельзя открыть внутри чужого <iframe>! */",
    "points": [
      "Заголовок X-Frame-Options: SAMEORIGIN (или CSP frame-ancestors 'self') запрещает мошенническим сайтам встраивать твой сайт в прозрачный <iframe> поверх чужих кнопок (защита от Clickjacking).",
      "X-Content-Type-Options: nosniff запрещает браузеру пытаться угадать и выполнить загруженный текстовый файл как JavaScript.",
      "Strict-Transport-Security (HSTS) заставляет браузер обращаться к домену строго по защищённому протоколу HTTPS."
    ],
    "tags": [
      "XML",
      "SEO",
      "CSP",
      "HSTS",
      "X-Frame-Options",
      "nosniff",
      "безопасность",
      "заголовки сервера"
    ],
    "when": "При настройке продакшен-сервера Nginx, Apache или Cloudflare для любого веб-проекта.",
    "alternatives": "Не включай HSTS (Strict-Transport-Security) на локальном тестовом домене без SSL-сертификата.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy"
  },
  {
    "lang": "html",
    "id": "html-form-input-search",
    "title": "HTML: поле поиска <input type=\"search\"> и очистка крестиком",
    "summary": "Специализированное текстовое поле для поисковых строк с системной кнопкой быстрой очистки и клавишей Enter.",
    "code": "<search>\n  <form role=\"search\" action=\"/search\">\n    <label for=\"site-q\" class=\"sr-only\">Поиск по справочнику</label>\n    <input\n      type=\"search\"\n      id=\"site-q\"\n      name=\"q\"\n      placeholder=\"Например: flexbox, dialog, fetch...\"\n      autocomplete=\"off\"\n      spellcheck=\"false\"\n    >\n  </form>\n</search>",
    "example": "input[type=\"search\"]::-webkit-search-cancel-button { cursor: pointer; }",
    "points": [
      "В отличие от обычного type=\"text\", поле type=\"search\" на мобильных клавиатурах меняет кнопку «Ввод» на синюю кнопку с лупой «Найти».",
      "В браузерах на базе Chromium и Safari внутри поля автоматически появляется крестик сброса введённого текста.",
      "Событие input срабатывает как при печати с клавиатуры, так и при нажатии на встроенный крестик очистки!"
    ],
    "tags": [
      "HTML",
      "input",
      "search",
      "поиск",
      "крестик",
      "форма"
    ],
    "when": "Для главной строки поиска в шапке сайта, фильтрации таблиц и командных палитр.",
    "alternatives": "Если рисуешь собственную кастомную кнопку очистки <button class=\"clear\">, скройте системный крестик через ::-webkit-search-cancel-button { display: none; }.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/search"
  },
  {
    "lang": "html",
    "id": "html-input-checkbox-indeterminate",
    "title": "HTML & JS: чекбокс «Выбрать все» и третье состояние (indeterminate)",
    "summary": "Реализация главного чекбокса таблицы с состоянием «выбрана часть строк» (тире внутри квадратика).",
    "code": "<label>\n  <input type=\"checkbox\" id=\"select-all\"> Выбрать все элементы\n</label>\n\n<script>\nconst master = document.getElementById('select-all');\n// Третье визуальное состояние чекбокса (частичный выбор — задаётся только через JS!)\nmaster.indeterminate = true;\n</script>",
    "example": "input:indeterminate {\n  accent-color: #38bdf8;\n}",
    "points": [
      "У нативного <input type=\"checkbox\"> кроме checked = true/false есть третье визуальное состояние: checkbox.indeterminate = true (отображается как горизонтальное тире внутри чекбокса)!",
      "Это состояние задаётся только через JavaScript, когда в группе выбран хотя бы один дочерний чекбокс, но не все.",
      "В CSS такое состояние можно стилизовать через псевдокласс input:indeterminate."
    ],
    "tags": [
      "HTML",
      "checkbox",
      "indeterminate",
      "checked",
      "выбрать все",
      "чекбокс",
      "таблица"
    ],
    "when": "В таблицах админ-панелей, корзине товаров и древовидных фильтрах категорий.",
    "alternatives": "Не нужно рисовать кастомные SVG-иконки для состояния частичного выбора — браузер рисует его нативно.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/checkbox"
  },
  {
    "lang": "html",
    "id": "html-ol-attributes",
    "title": "HTML: атрибуты нумерованного списка <ol> (start, reversed, type) и <li value>",
    "summary": "Продолжение нумерации списка после прерывания картинкой и обратный отсчёт рейтингов Топ-10.",
    "code": "<!-- Обратный отсчёт рейтинга: 3, 2, 1 -->\n<ol reversed start=\"3\">\n  <li>Третье место</li>\n  <li>Второе место</li>\n  <li>Первое место</li>\n</ol>\n\n<!-- Римская или буквенная нумерация (type=\"I\" / \"A\" / \"a\") -->\n<ol type=\"I\">\n  <li>Глава первая</li>\n  <li value=\"5\">Глава пятая (перескок номера)</li>\n</ol>",
    "example": "<ol start=\"11\"> /* Продолжить список с 11-го пункта после врезки кода */",
    "points": [
      "Если между пунктами инструкции вставлена широкая иллюстрация или таблица, второй список <ol start=\"4\"> аккуратно продолжит счёт с 4-го шага!",
      "Атрибут reversed автоматически ведёт обратный отсчёт номеров сверху вниз (10, 9, 8... 1) для хит-парадов и рейтингов.",
      "Атрибут value=\"10\" на отдельном теге <li> позволяет принудительно задать номер конкретному пункту."
    ],
    "tags": [
      "HTML",
      "ol",
      "li",
      "start",
      "reversed",
      "type",
      "нумерованный список",
      "рейтинг"
    ],
    "when": "В пошаговых руководствах, юридических договорах и рейтингах.",
    "alternatives": "Для сложной вложенной нумерации вида 1.1, 1.2 используй CSS-счётчики counters(item, \".\").",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/ol"
  },
  {
    "lang": "html",
    "id": "html-audio-video-track-vtt",
    "title": "HTML: субтитры и таймкоды глав для видео (<track kind=\"captions\" src=\"subs.vtt\">)",
    "summary": "Подключение файла субтитров в формате WebVTT к видеоплееру для доступности и переключения языков.",
    "code": "<video controls src=\"/video/lesson.mp4\">\n  <track kind=\"subtitles\" src=\"/video/ru.vtt\" srclang=\"ru\" label=\"Русский\" default>\n  <track kind=\"subtitles\" src=\"/video/en.vtt\" srclang=\"en\" label=\"English\">\n  <track kind=\"chapters\" src=\"/video/chapters.vtt\" srclang=\"ru\">\n</video>\n\n<!-- Пример содержимого текстового файла ru.vtt:\nWEBVTT\n\n00:00:01.000 --> 00:00:05.000\nДобро пожаловать в интерактивный справочник DevShelf!\n-->",
    "example": "video::cue {\n  background: rgba(9, 13, 20, 0.85);\n  color: #f8fafc;\n}",
    "points": [
      "Формат WebVTT (.vtt) — это простой текстовый файл, начинающийся со слова WEBVTT и содержащий таймкоды и фразы.",
      "Псевдоэлемент video::cue в CSS позволяет настроить шрифт, цвет и полупрозрачную подложку субтитров прямо поверх видео!",
      "Атрибут default включает выбранную дорожку субтитров автоматически при запуске плеера."
    ],
    "tags": [
      "HTML",
      "track",
      "vtt",
      "webvtt",
      "subtitles",
      "captions",
      "cue",
      "субтитры",
      "видео"
    ],
    "when": "Во всех обучающих видеороликах, вебинарах и презентациях продуктов.",
    "alternatives": "Вшитые в сам видеофайл (hardcoded) субтитры нельзя отключить, скопировать или перевести.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/track"
  },
  {
    "lang": "html",
    "id": "html-aria-roles-landmarks",
    "title": "HTML & ARIA: ориентиры страницы (Landmarks) и роли компонентов (role)",
    "summary": "Карта соответствия нативных HTML5-тегов и ролей WAI-ARIA для быстрой навигации незрячих пользователей.",
    "code": "<!-- Нативные теги уже имеют встроенные ARIA-роли по умолчанию: -->\n<header>  <!-- role=\"banner\" --> </header>\n<nav>     <!-- role=\"navigation\" --> </nav>\n<main>    <!-- role=\"main\" --> </main>\n<aside>   <!-- role=\"complementary\" --> </aside>\n<footer>  <!-- role=\"contentinfo\" --> </footer>\n\n<!-- Явные роли для специализированных динамических виджетов: -->\n<div role=\"alert\">Ошибка соединения с сервером!</div>\n<div role=\"tablist\" aria-label=\"Режимы редактора\">...</div>",
    "example": "/* Не пиши <nav role=\"navigation\"> — это избыточное дублирование! */",
    "points": [
      "Скринридеры позволяют пользователю одним нажатием горячей клавиши перемещаться по ориентирам страницы (шапка -> поиск -> меню -> главный контент -> подвал).",
      "Не дублируй встроенную роль на нативном теге (не нужно писать <main role=\"main\"> или <button role=\"button\">).",
      "Роль role=\"alert\" предназначена для срочных ошибок: она немедленно озвучивается скринридером при появлении в DOM."
    ],
    "tags": [
      "HTML",
      "ARIA",
      "role",
      "landmarks",
      "alert",
      "tablist",
      "banner",
      "доступность"
    ],
    "when": "При проектировании доступных веб-приложений, табов, уведомлений и диалогов.",
    "alternatives": "Всегда отдавай приоритет семантическим тегам HTML5 перед ручным назначением role на <div>.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles"
  },
  {
    "lang": "css",
    "id": "css-background-clip-text-stroke",
    "title": "CSS: контурный и градиентный текст (-webkit-text-stroke и background-clip: text)",
    "summary": "Создание выразительных акцентных заголовков с градиентной заливкой или тонкой векторной обводкой букв.",
    "code": "/* 1. Заголовок с заливкой линейным градиентом */\n.text-gradient {\n  background: linear-gradient(135deg, #f8fafc 0%, #38bdf8 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n\n/* 2. Полый контурный текст (Outline Text) для крупных фоновых цифр */\n.text-outline {\n  color: transparent;\n  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.25);\n}",
    "example": ".step-number { font-size: 64px; -webkit-text-stroke: 1px var(--accent); color: transparent; }",
    "points": [
      "При использовании background-clip: text цвет самого текста задают прозрачным (color: transparent), чтобы сквозь контуры букв проступил фоновый градиент.",
      "Свойство -webkit-text-stroke поддерживается во всех современных браузерах (Chrome, Safari, Firefox, Edge) и отлично подходит для крупных фоновых номеров секций (01, 02, 03).",
      "Следи, чтобы блок с background-clip: text имел display: inline-block, если градиент должен растягиваться ровно по ширине слова, а не всей строки."
    ],
    "tags": [
      "CSS",
      "background-clip",
      "text-stroke",
      "gradient text",
      "outline text",
      "градиентный текст",
      "обводка текста"
    ],
    "when": "Для главных заголовков на лендингах и крупных декоративных цифр шагов.",
    "alternatives": "Для сложных многослойных контуров с тенями лучше использовать инлайновый <svg><text>.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/background-clip"
  },
  {
    "lang": "css",
    "id": "css-shape-outside-float",
    "title": "CSS: фигурное обтекание иллюстраций текстом (shape-outside: circle())",
    "summary": "Журнальная верстка статей, в которой строки абзаца плавно огибают круглый аватар автора по дуге.",
    "code": ".author-avatar-float {\n  float: left;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  margin-right: 20px;\n  margin-bottom: 12px;\n  /* Текст статьи огибает аватар по кругу, а не по квадратной коробке! */\n  shape-outside: circle(50%);\n}",
    "example": "shape-outside: polygon(0 0, 100% 0, 60% 100%, 0 100%);",
    "points": [
      "Сегодня свойство float больше не используется для сеток колонок (там царят Flex и Grid), но float остаётся единственным инструментом для обтекания картинки живым текстом внутри статьи!",
      "Добавление shape-outside: circle(50%) к круглой картинке с float: left заставляет строки текста повторять изгиб круга.",
      "Свойство shape-margin: 16px задаёт аккуратный воздушный зазор вдоль криволинейного контура."
    ],
    "tags": [
      "CSS",
      "shape-outside",
      "float",
      "circle",
      "обтекание текстом",
      "верстка статей"
    ],
    "when": "Во врезках с цитатами, круглыми портретами спикеров и журнальных лонгридах.",
    "alternatives": "Для обычного расположения аватара слева от имени и должности всегда используй display: flex; align-items: center; gap: 12px.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/shape-outside"
  },
  {
    "lang": "css",
    "id": "css-order-align-self",
    "title": "CSS: индивидуальное управление элементом сетки (align-self, justify-self, order)",
    "summary": "Точечное выравнивание отдельной карточки или кнопки по краю родителя без создания дополнительных обёрток.",
    "code": ".header-flex {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.special-badge {\n  /* Только этот элемент прижимается к верхнему краю, пока остальные стоят по центру */\n  align-self: flex-start;\n}\n\n.close-btn {\n  /* Внутри CSS Grid прижимает кнопку строго в правый верхний угол ячейки */\n  justify-self: end;\n  align-self: start;\n}",
    "example": "place-self: start end; /* Сокращение для align-self + justify-self в CSS Grid */",
    "points": [
      "align-self переопределяет общее правило align-items родителя для одного конкретного дочернего элемента (как во Flexbox, так и в CSS Grid).",
      "В CSS Grid также работает свойство justify-self (выравнивание элемента по горизонтали внутри своей ячейки) и сокращение place-self: center end.",
      "Не злоупотребляй свойством order: -1 для перестановки важных кнопок, так как порядок обхода клавишей Tab всё равно останется таким, как в исходном HTML!"
    ],
    "tags": [
      "CSS",
      "align-self",
      "justify-self",
      "place-self",
      "order",
      "выравнивание",
      "flex",
      "grid"
    ],
    "when": "Когда один элемент внутри ряда (кнопка, бейдж, цена) должен стоять у другого края.",
    "alternatives": "Во Flexbox для прижатия элемента вправо вдоль главной оси используй margin-left: auto.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/align-self"
  },
  {
    "lang": "css",
    "id": "css-inset-border-image-outline",
    "title": "CSS: вложенные тени (box-shadow: inset) и эффект вдавленной панели (Well / Input)",
    "summary": "Создание глубины для полей ввода, блоков кода и активных переключателей с помощью внутренней тени и верхней подсветки.",
    "code": "/* Поле ввода или блок кода, визуально утопленный внутрь панели */\n.code-well,\n.input-recessed {\n  background: #070a10;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.45);\n}\n\n/* Выпуклая кнопка с тонким бликом по верхнему краю (1px inner highlight) */\n.btn-tactile {\n  background: #161e31;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, 0.1),\n    0 2px 4px rgba(0, 0, 0, 0.3);\n}",
    "example": ".btn-tactile:active {\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);\n}",
    "points": [
      "Ключевое слово inset разворачивает тень внутрь коробки элемента, создавая ощущение утопленной поверхности (идеально для инпутов, треков ползунков и окон кода).",
      "Тонкий светлый внутренний блик сверху (inset 0 1px 0 rgba(255,255,255,0.1)) придаёт кнопкам и карточкам в тёмной теме благородный тактильный объём (как в интерфейсах Linear и Raycast)!",
      "В одном свойстве box-shadow можно комбинировать через запятую и внутренние (inset), и внешние тени."
    ],
    "tags": [
      "CSS",
      "box-shadow",
      "inset",
      "внутренняя тень",
      "блик",
      "кнопка",
      "инпут",
      "дизайн"
    ],
    "when": "При оформлении кнопок, переключателей вкладок, полей ввода и панелей инструментов.",
    "alternatives": "Не делай внутреннюю тень слишком широкой и размытой, чтобы интерфейс не выглядел устаревшим.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/box-shadow"
  },
  {
    "lang": "css",
    "id": "css-print-page-break",
    "title": "CSS: стили для печати документа и экспорта в PDF (@media print, @page)",
    "summary": "Очистка страницы от меню и кнопок при отправке на принтер или сохранении счёта/резюме в PDF.",
    "code": "@media print {\n  /* Скрываем шапку, сайдбар, поиск и кнопки действий */\n  .top, .sidebar, .searchbox, .no-print, footer {\n    display: none !important;\n  }\n\n  /* Принудительно делаем фон белым, а текст чёрным для экономии тонера и чёткости PDF */\n  body {\n    background: #ffffff !important;\n    color: #000000 !important;\n    font-size: 12pt;\n  }\n\n  /* Запрещаем разрывать карточки и блоки кода пополам между листами бумаги А4 */\n  pre, blockquote, table, figure, .card {\n    break-inside: avoid;\n  }\n}",
    "example": "a[href^=\"http\"]::after { content: \" (\" attr(href) \")\"; } /* Вывод полных URL ссылок на бумаге */",
    "points": [
      "Пользователи часто сохраняют справочные статьи, чеки и счета через системный диалог «Печать -> Сохранить как PDF». Правило @media print гарантирует чистый документ без шапки и тёмного фона!",
      "Свойство break-inside: avoid запрещает браузеру разрезать таблицу или сниппет кода на границе двух страниц А4.",
      "Свойство print-color-adjust: exact заставляет браузер сохранить цветные бейджи и графики при экспорте в PDF."
    ],
    "tags": [
      "CSS",
      "print",
      "media print",
      "pdf",
      "break-inside",
      "печать",
      "экспорт в pdf"
    ],
    "when": "На страницах документации, статей, резюме, билетов, чеков и счетов на оплату.",
    "alternatives": "Серверная генерация PDF нужна только для официальных бланков со строгой пиксельной сеткой и печатями.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries/Printing"
  },
  {
    "lang": "javascript",
    "id": "js-console-debugging",
    "title": "JS: продвинутая отладка в консоли (console.table, time, group, assert)",
    "summary": "Наглядный вывод массивов объектов в виде сортируемой таблицы и точный замер скорости работы функций.",
    "code": "const users = [\n  { id: 1, name: 'Павел', role: 'admin' },\n  { id: 2, name: 'Елена', role: 'editor' }\n];\n\n// 1. Выводит красивую интерактивную таблицу прямо в DevTools!\nconsole.table(users, ['id', 'name', 'role']);\n\n// 2. Точный замер времени выполнения участка кода\nconsole.time('renderGrid');\nrenderItems(users);\nconsole.timeEnd('renderGrid'); // \"renderGrid: 1.42 ms\"",
    "example": "console.assert(users.length > 0, 'Массив пользователей не должен быть пустым!');",
    "points": [
      "console.table(array) — самый удобный способ посмотреть структуру ответа от сервера (массив товаров или пользователей) с возможностью сортировки по колонкам в DevTools!",
      "Пара console.time(\"label\") и console.timeEnd(\"label\") замеряет время выполнения кода с точностью до долей миллисекунды.",
      "console.groupCollapsed(\"Детали запроса\") позволяет аккуратно свернуть длинные логи в раскрывающуюся папку."
    ],
    "tags": [
      "JavaScript",
      "console",
      "console.table",
      "console.time",
      "debug",
      "devtools",
      "отладка",
      "консоль"
    ],
    "when": "Во время локальной разработки, профилирования циклов и проверки ответов API.",
    "alternatives": "Для пошаговой остановки скрипта с просмотром всех локальных переменных используй ключевое слово debugger; или брейкпоинты во вкладке Sources.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/console/table"
  },
  {
    "lang": "javascript",
    "id": "js-encode-uri-base64",
    "title": "JS: кодирование URL-параметров (encodeURIComponent) и UTF-8 Base64",
    "summary": "Безопасная передача строк со спецсимволами (&, ?, #, пробел) в ссылках и кодирование кириллицы в Base64.",
    "code": "const userQuery = 'C++ & C# разработка';\n\n// encodeURIComponent кодирует амперсанд & и решётку #, чтобы они не сломали GET-запрос!\nconst safeUrl = `/search?q=${encodeURIComponent(userQuery)}`;\n// \"/search?q=C%2B%2B%20%26%20C%23%20%D1%80%D0%B0%D0%B7...\"\n\n// Безопасное кодирование и декодирование кириллицы UTF-8 в Base64\nconst toBase64 = (str) => btoa(String.fromCharCode(...new TextEncoder().encode(str)));\nconst fromBase64 = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64), c => c.charCodeAt(0)));",
    "example": "/* Обычный encodeURI() НЕ кодирует символы &, = и +, поэтому для параметров всегда используй encodeURIComponent()! */",
    "points": [
      "Для отдельных значений GET-параметров ВСЕГДА используй encodeURIComponent(val) (или класс URLSearchParams), а не encodeURI()! Иначе поиск по запросу \"H&M\" или \"C#\" обрежет строку по символу & или #.",
      "Старая функция btoa(\"Привет\") падает с ошибкой InvalidCharacterError на русских буквах. Связка с TextEncoder() решает это для любого языка мира.",
      "Для обратной расшифровки параметра из адресной строки используется decodeURIComponent(encodedStr)."
    ],
    "tags": [
      "JavaScript",
      "encodeURIComponent",
      "decodeURIComponent",
      "Base64",
      "btoa",
      "TextEncoder",
      "кодирование",
      "url"
    ],
    "when": "При формировании ссылок для Telegram/WhatsApp, передаче поисковых фраз и работе с токенами.",
    "alternatives": "При использовании new URLSearchParams({ q: userQuery }) кодирование выполняется автоматически.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"
  },
  {
    "lang": "php",
    "id": "php-interfaces-traits-abstract",
    "title": "PHP 8: интерфейсы (interface), трейты (trait) и внедрение зависимостей (DI)",
    "summary": "Проектирование гибкой архитектуры приложения: контракты для сервисов оплаты/уведомлений и переиспользование методов.",
    "code": "<?php\ndeclare(strict_types=1);\n\ninterface NotifierInterface {\n    public function send(string $recipient, string $message): bool;\n}\n\nclass TelegramNotifier implements NotifierInterface {\n    public function send(string $recipient, string $message): bool {\n        // Отправка в Telegram API\n        return true;\n    }\n}\n\n// Класс OrderService зависит от интерфейса, а не от конкретного мессенджера!\nreadonly class OrderService {\n    public function __construct(private NotifierInterface $notifier) {}\n\n    public function complete(string $chatId): void {\n        $this->notifier->send($chatId, 'Ваш заказ успешно собран!');\n    }\n}",
    "example": "trait TimestampsTrait {\n    public ?DateTimeImmutable $createdAt = null;\n}",
    "points": [
      "Интерфейс (interface) задаёт строгий контракт: какие методы обязан реализовать класс. Это позволяет легко подменить отправку СМС на Telegram или тестовую заглушку без переписывания бизнес-логики!",
      "Трейт (trait) позволяет горизонтально подключить готовый набор методов (например, логирование или расчёт дат) сразу в несколько несвязанных классов через ключевое слово use.",
      "Передача зависимостей через конструктор (Dependency Injection) делает классы чистыми и легко тестируемыми."
    ],
    "tags": [
      "PHP",
      "interface",
      "trait",
      "implements",
      "abstract",
      "DI",
      "ооп",
      "интерфейс",
      "архитектура"
    ],
    "when": "При написании модулей оплаты, доставки, уведомлений и хранилищ кэша.",
    "alternatives": "Избегай глубоких цепочек наследования (extends на 4 уровня) — отдавай предпочтение композиции и интерфейсам.",
    "url": "https://www.php.net/manual/ru/language.oop5.interfaces.php"
  },
  {
    "lang": "php",
    "id": "php-filter-var-validation",
    "title": "PHP 8: валидация данных через filter_var (Email, URL, IP, целые числа в диапазоне)",
    "summary": "Встроенный в ядро PHP валидатор и санитайзер входящих параметров без сложных регулярных выражений.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// 1. Проверка корректности Email\n$email = filter_var(trim($rawEmail), FILTER_VALIDATE_EMAIL);\nif ($email === false) {\n    throw new InvalidArgumentException('Указан некорректный адрес почты');\n}\n\n// 2. Проверка целого числа строго в заданном диапазоне (например, номер страницы от 1 до 1000)\n$page = filter_var($_GET['page'] ?? 1, FILTER_VALIDATE_INT, [\n    'options' => ['default' => 1, 'min_range' => 1, 'max_range' => 1000],\n]);\n\n// 3. Проверка валидности URL и IP-адреса\n$isValidUrl = filter_var($url, FILTER_VALIDATE_URL) !== false;\n$isValidIp  = filter_var($ip, FILTER_VALIDATE_IP) !== false;",
    "example": "$boolFlag = filter_var($_POST['active'] ?? false, FILTER_VALIDATE_BOOL); /* Понимает \"true\", \"1\", \"on\", \"yes\"! */",
    "points": [
      "В случае ошибки валидации filter_var() возвращает булево значение false (поэтому всегда проверяй результат строго через === false).",
      "Опции min_range, max_range и default в FILTER_VALIDATE_INT позволяют проверить и ограничить числовой параметр в один вызов!",
      "Фильтр FILTER_VALIDATE_BOOL умно распознаёт строки \"1\", \"true\", \"on\", \"yes\" как true, а \"0\", \"false\", \"off\", \"no\" как false."
    ],
    "tags": [
      "PHP",
      "filter_var",
      "FILTER_VALIDATE_EMAIL",
      "FILTER_VALIDATE_INT",
      "FILTER_VALIDATE_URL",
      "валидация",
      "проверка"
    ],
    "when": "На входе любых контроллеров, API-эндпоинтов и обработчиков форм.",
    "alternatives": "Не используй удалённый в PHP 8.1 фильтр FILTER_SANITIZE_STRING — для защиты вывода в HTML используй htmlspecialchars().",
    "url": "https://www.php.net/manual/ru/function.filter-var.php"
  },
  {
    "lang": "html",
    "id": "html-input-color-date-time",
    "title": "HTML: нативные пикеры цвета и времени (type=\"color\", \"date\", \"time\", \"datetime-local\")",
    "summary": "Системные виджеты выбора цвета, календарной даты и времени с ограничением доступного диапазона min и max.",
    "code": "<label>\n  Акцентный цвет:\n  <input type=\"color\" name=\"accent\" value=\"#38bdf8\">\n</label>\n\n<label>\n  Дата бронирования (только 2026 год):\n  <input type=\"date\" name=\"booking_date\" min=\"2026-01-01\" max=\"2026-12-31\" required>\n</label>\n\n<label>\n  Время встречи (с 09:00 до 19:00 с шагом 15 минут):\n  <input type=\"time\" name=\"slot\" min=\"09:00\" max=\"19:00\" step=\"900\">\n</label>",
    "example": "/* Цвет иконки календаря внутри инпута автоматически следует за свойством color-scheme: dark! */",
    "points": [
      "Значение (value, min, max) у <input type=\"date\"> в коде и при отправке на сервер ВСЕГДА имеет строгий формат ГГГГ-ММ-ДД (\"2026-09-15\"), независимо от того, как браузер отображает дату на экране пользователя (15.09.2026)!",
      "У <input type=\"time\"> атрибут step задаётся в секундах: step=\"900\" делает шаг выбора равным 15 минутам (900 секунд).",
      "У <input type=\"color\"> значение всегда представляет собой 7-символьный HEX-код в нижнем регистре (\"#38bdf8\")."
    ],
    "tags": [
      "HTML",
      "color",
      "date",
      "time",
      "datetime-local",
      "month",
      "week",
      "календарь",
      "палитра",
      "дата"
    ],
    "when": "В формах бронирования, фильтрах по датам, редакторах тем и генераторах стилей.",
    "alternatives": "Если у иконки календаря в тёмной теме остался чёрный цвет, убедись, что на :root или самом инпуте задано color-scheme: dark.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/date"
  },
  {
    "lang": "html",
    "id": "html-meter-vs-progress",
    "title": "HTML: семантика <mark>, <ins>, <del>, <kbd>, <samp> и <output> в интерфейсах",
    "summary": "Быстрая шпаргалка по строчным семантическим тегам для результатов поиска, диффов кода и горячих клавиш.",
    "code": "<!-- Подсветка найденного слова в результатах поиска -->\n<p>По запросу «<mark>grid</mark>» найдено <output>18</output> справочников.</p>\n\n<!-- Отображение изменений в истории версий (Diff) -->\n<p>Поддержка: <del>IE 11</del> <ins>Все современные браузеры</ins></p>\n\n<!-- Горячая клавиша в меню -->\n<span class=\"shortcut\"><kbd>Ctrl</kbd> + <kbd>S</kbd></span>",
    "example": "mark { background: rgba(56, 189, 248, 0.25); color: inherit; border-radius: 3px; padding: 0 3px; }",
    "points": [
      "По умолчанию браузер красит <mark> в ярко-жёлтый цвет маркера. В тёмной теме обязательно переопредели его на мягкий полупрозрачный акцент (rgba(56, 189, 248, 0.22)).",
      "Пара <del> (удалено) и <ins> (добавлено) идеально подходит как для старых/новых цен, так и для показа правок текста или чейнджлогов.",
      "Тег <output> семантически связывает результат расчёта с ползунками и инпутами формы."
    ],
    "tags": [
      "HTML",
      "mark",
      "output",
      "del",
      "ins",
      "kbd",
      "подсветка поиска",
      "дифф",
      "горячие клавиши"
    ],
    "when": "В выдаче живого поиска, калькуляторах, документации и истории изменений.",
    "alternatives": "Обычный <span class=\"highlight\"> не сообщает скринридеру о смысловом выделении совпадения.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/mark"
  },
  {
    "lang": "html",
    "id": "html-svg-primitives",
    "title": "SVG: базовые фигуры (<rect>, <circle>, <line>, <polyline>, <path>)",
    "summary": "Рисование аккуратных векторных иконок, стрелок, чекбоксов и графиков прямо в HTML-коде без графических редакторов.",
    "code": "<svg width=\"120\" height=\"40\" viewBox=\"0 0 120 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Прямоугольник со скруглёнными углами rx=\"6\" -->\n  <rect x=\"2\" y=\"2\" width=\"36\" height=\"36\" rx=\"6\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <!-- Круг по центру (cx, cy) и радиусу r -->\n  <circle cx=\"60\" cy=\"20\" r=\"16\" stroke=\"#818cf8\" stroke-width=\"2\"/>\n  <!-- Ломаная линия галочки (polyline) -->\n  <polyline points=\"90 20 98 28 114 12\" stroke=\"#10b981\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>",
    "example": "stroke-dasharray: 100; stroke-dashoffset: 25; /* Заполнение кругового прогресс-бара на 75%! */",
    "points": [
      "Атрибуты stroke-linecap=\"round\" и stroke-linejoin=\"round\" скругляют кончики и углы векторных линий, делая иконки дружелюбными и аккуратными (как в Lucide / Feather Icons).",
      "У прямоугольника <rect> скругление углов задаётся атрибутом rx=\"8\".",
      "Добавив кругу <circle> атрибут pathLength=\"100\", можно задавать процент заполнения кольца напрямую через stroke-dasharray=\"75 100\" без вычисления длины окружности 2πR!"
    ],
    "tags": [
      "HTML",
      "SVG",
      "rect",
      "circle",
      "line",
      "polyline",
      "path",
      "pathLength",
      "векторные фигуры"
    ],
    "when": "При создании иконок интерфейса, круговых индикаторов прогресса и мини-спарклайнов.",
    "alternatives": "Для растровых фотографий используй WebP/AVIF, а для всех иконок и схем — только SVG.",
    "url": "https://developer.mozilla.org/ru/docs/Web/SVG/Tutorial/Basic_Shapes"
  },
  {
    "lang": "css",
    "id": "css-grid-template-rows-animate",
    "title": "CSS: плавная анимация высоты от 0 до auto через grid-template-rows: 0fr -> 1fr",
    "summary": "Современный чистый способ плавно раскрыть аккордеон или выпадающий блок с неизвестной высотой текста без JS.",
    "code": ".accordion-body {\n  display: grid;\n  grid-template-rows: 0fr; /* В закрытом состоянии высота дорожки равна 0fr */\n  transition: grid-template-rows 250ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.accordion-body.is-open {\n  grid-template-rows: 1fr; /* Плавно раскрывается ровно под реальную высоту текста! */\n}\n\n.accordion-inner {\n  overflow: hidden;        /* Обязательная внутренняя обёртка для схлопывания в 0 */\n}",
    "example": "/* Больше никаких костылей с max-height: 999px и кривыми таймингами! */",
    "points": [
      "Десять лет в CSS нельзя было плавно анимировать height: 0 -> height: auto. Переход grid-template-rows: 0fr -> 1fr решает эту задачу идеально и без угадывания max-height!",
      "Для работы трюка внутри .accordion-body должен лежать один дочерний div (.accordion-inner) со свойством overflow: hidden;.",
      "В новейших браузерах также появляется прямое свойство interpolate-size: allow-keywords для анимации height: auto."
    ],
    "tags": [
      "CSS",
      "grid-template-rows",
      "0fr",
      "1fr",
      "height auto",
      "accordion",
      "анимация высоты",
      "аккордеон"
    ],
    "when": "При верстке плавно раскрывающихся спойлеров, карточек FAQ и мобильных подменю.",
    "alternatives": "Старый хак с max-height: 1000px создаёт задержку при закрытии короткого текста.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-rows"
  },
  {
    "lang": "css",
    "id": "css-focus-ring-button-reset",
    "title": "CSS: профессиональный сброс стилей кнопки (button reset) и состояний",
    "summary": "Базовый эталонный класс кнопки (.btn) с выравниванием иконки, защитой от сжатия во флексе и тактильным нажатием.",
    "code": ".btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 16px;\n  font: inherit;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;          /* Кнопка никогда не сплющится в узкой шапке или строке поиска! */\n  user-select: none;\n  cursor: pointer;\n  border-radius: 6px;\n  border: 1px solid var(--line);\n  transition: transform 100ms ease, border-color 150ms ease, background-color 150ms ease;\n}\n\n.btn:active:not(:disabled) {\n  transform: translateY(1px); /* Лёгкий тактильный отклик при клике */\n}",
    "example": ".btn svg { width: 16px; height: 16px; flex-shrink: 0; pointer-events: none; }",
    "points": [
      "Свойство flex-shrink: 0 на кнопке и на иконке svg внутри неё гарантирует, что длинный заголовок рядом никогда не сплющит кнопку в овал!",
      "display: inline-flex; align-items: center; gap: 8px идеально выравнивает SVG-иконку и текст кнопки по одной оптической линии.",
      "Лёгкое смещение transform: translateY(1px) (или scale(0.98)) в состоянии :active делает интерфейс живым и отзывчивым."
    ],
    "tags": [
      "CSS",
      "button",
      "btn",
      "inline-flex",
      "flex-shrink",
      "active",
      "кнопка",
      "сброс стилей"
    ],
    "when": "В качестве базового класса для всех кнопок дизайн-системы проекта.",
    "alternatives": "Всегда наследуй шрифт через font: inherit;, так как браузеры по умолчанию ставят кнопкам системный Arial.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/button"
  },
  {
    "lang": "css",
    "id": "css-table-responsive-cards",
    "title": "CSS: адаптивная таблица (горизонтальный скролл и трансформация в карточки)",
    "summary": "Два надёжных паттерна отображения широких таблиц данных на узких экранах смартфонов без поломки верстки.",
    "code": "/* Способ 1: аккуратная прокручиваемая обёртка с тенью */\n.table-responsive {\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n}\n\n/* Способ 2: вывод названия колонки из data-label на мобильных */\n@media (max-width: 600px) {\n  .mobile-cards-table td::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: var(--muted);\n  }\n}",
    "example": "<td data-label=\"Тариф\">Pro</td>",
    "points": [
      "Горизонтальная обёртка .table-responsive с overflow-x: auto — самый честный и удобный способ для таблиц сравнения, где пользователю важно сопоставлять колонки глазами.",
      "Для таблиц истории заказов (номер, дата, статус, сумма) на мобильных удобно превращать каждую строку <tr> в карточку с подписями из attr(data-label).",
      "Не забудь задать ячейкам с датами и ценами white-space: nowrap, чтобы они не ломались на 3 этажа."
    ],
    "tags": [
      "CSS",
      "table",
      "responsive",
      "overflow-x",
      "data-label",
      "адаптивная таблица",
      "мобильная таблица"
    ],
    "when": "При верстке любых прайс-листов, историй операций и таблиц характеристик.",
    "alternatives": "Никогда не оставляй широкую таблицу без обёртки — она вызовет горизонтальный скролл всей страницы.",
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics/Tables"
  },
  {
    "lang": "css",
    "id": "css-sticky-footer-layout",
    "title": "CSS: прижатый к низу экрана подвал (Sticky Footer на Grid и Flex)",
    "summary": "Классический каркас страницы, при котором подвал <footer> всегда прижат к низу монитора, даже если на странице мало текста.",
    "code": "body {\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\nmain {\n  flex: 1 0 auto; /* Главный контент растягивается и толкает footer в самый низ! */\n}\n\nfooter {\n  flex-shrink: 0;\n}",
    "example": "/* Альтернатива на CSS Grid в 3 строки:\nbody { min-height: 100dvh; display: grid; grid-template-rows: auto 1fr auto; } */",
    "points": [
      "Если на странице мало контента (например, страница 404, форма входа или пустая корзина), без этого правила подвал некрасиво подпрыгивает к середине экрана.",
      "Вариант на CSS Grid ещё короче: body { min-height: 100dvh; display: grid; grid-template-rows: auto 1fr auto; } (где шапка = auto, main = 1fr, подвал = auto)!",
      "Используй min-height: 100dvh (а не фиксированный height: 100vh), чтобы длинные страницы спокойно прокручивались дальше вниз."
    ],
    "tags": [
      "CSS",
      "sticky footer",
      "min-height",
      "100dvh",
      "flex",
      "grid",
      "прижать подвал",
      "футер к низу"
    ],
    "when": "На теге <body> или корневом контейнере #app в каждом проекте.",
    "alternatives": "Никогда не прибивай обычный подвал сайта через position: fixed; bottom: 0 — он перекроет контент на маленьких экранах.",
    "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Sticky_footers"
  },
  {
    "lang": "javascript",
    "id": "js-form-validation-api",
    "title": "JS: нативный Constraint Validation API (checkValidity, setCustomValidity, reportValidity)",
    "summary": "Программная проверка валидности формы и вывод кастомных русских сообщений об ошибках в нативных тултипах браузера.",
    "code": "const passInput = document.getElementById('password');\nconst confirmInput = document.getElementById('password-confirm');\n\nfunction validatePasswordsMatch() {\n  if (confirmInput.value !== passInput.value) {\n    // Устанавливаем собственный текст ошибки\n    confirmInput.setCustomValidity('Пароли не совпадают');\n  } else {\n    // ВАЖНО: пустая строка '' сбрасывает ошибку и помечает поле как валидное!\n    confirmInput.setCustomValidity('');\n  }\n}\n\nconfirmInput.addEventListener('input', validatePasswordsMatch);",
    "example": "if (!form.reportValidity()) return; /* Показывает системную подсказку у первого незаполненного поля */",
    "points": [
      "Главное правило setCustomValidity(msg): пока передана любая непустая строка, поле считается невалидным (:invalid). Чтобы разрешить отправку формы после исправления, ОБЯЗАТЕЛЬНО вызови input.setCustomValidity(\"\") с пустой строкой!",
      "Метод form.checkValidity() тихо возвращает true/false, а метод form.reportValidity() дополнительно подсвечивает первое ошибочное поле и показывает подсказку пользователю.",
      "Объект input.validity содержит булевы флаги причины ошибки: valueMissing (пустое required), typeMismatch (неверный email), tooShort (меньше minlength)."
    ],
    "tags": [
      "JavaScript",
      "setCustomValidity",
      "checkValidity",
      "reportValidity",
      "validity",
      "валидация форм",
      "пароли"
    ],
    "when": "При проверке совпадения паролей, уникальности логина или сложных условий формы.",
    "alternatives": "Для полного контроля над дизайном ошибок ставят <form novalidate> и выводят текст в соседний <span class=\"error-msg\">.",
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Forms/Form_validation"
  },
  {
    "lang": "javascript",
    "id": "js-history-pushstate-spa",
    "title": "JS: управление историей браузера без перезагрузки (history.pushState, replaceState, popstate)",
    "summary": "Смена URL при фильтрации каталога или переключении вкладок с поддержкой системных кнопок «Назад» и «Вперёд».",
    "code": "// 1. Обновление URL при выборе вкладки (добавляет шаг в историю кнопки «Назад»)\nfunction selectCategory(categorySlug) {\n  const url = new URL(window.location.href);\n  url.searchParams.set('cat', categorySlug);\n  window.history.pushState({ cat: categorySlug }, '', url);\n  renderCatalog(categorySlug);\n}\n\n// 2. Реакция на нажатие пользователем кнопки «Назад / Вперёд» в браузере\nwindow.addEventListener('popstate', (event) => {\n  const cat = new URLSearchParams(location.search).get('cat') ?? 'all';\n  renderCatalog(cat);\n});",
    "example": "history.replaceState(null, '', '?q=' + encodeURIComponent(query)); /* Меняет URL без засорения истории на каждую букву! */",
    "points": [
      "Разница между pushState и replaceState: для живого поиска при наборе каждой буквы используй replaceState (чтобы пользователю не пришлось нажимать кнопку «Назад» 20 раз по одной букве!), а для переключения крупных разделов/страниц — pushState!",
      "Событие popstate срабатывает, когда пользователь нажимает системные кнопки «Назад» или «Вперёд» в браузере (или делает свайп назад на смартфоне).",
      "Хранение активного таба и фильтра в URL позволяет пользователю обновить страницу по F5 или отправить ссылку коллеге без потери выбранного раздела."
    ],
    "tags": [
      "JavaScript",
      "history",
      "pushState",
      "replaceState",
      "popstate",
      "роутинг",
      "url",
      "назад"
    ],
    "when": "В табах, фильтрах каталога, живом поиске, модальных галереях и пошаговых формах.",
    "alternatives": "Для простых переходов внутри одной страницы также можно использовать window.location.hash и событие hashchange.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/History_API"
  },
  {
    "lang": "javascript",
    "id": "js-web-workers-offload",
    "title": "JS: фоновые вычисления без зависания интерфейса (Web Workers API)",
    "summary": "Вынос тяжёлого парсинга больших JSON/CSV-файлов, поиска или фильтрации из главного потока в отдельный поток процессора.",
    "code": "// В главном скрипте (main.js): создаём воркер и отправляем ему массив данных\nconst worker = new Worker(new URL('./search-worker.js', import.meta.url), { type: 'module' });\n\nworker.postMessage({ items: hugeDataset, query: 'flexbox' });\n\nworker.addEventListener('message', (e) => {\n  console.log('Отфильтровано в фоне без фризов UI:', e.data.results);\n});\n\n// В файле search-worker.js:\nself.addEventListener('message', (e) => {\n  const { items, query } = e.data;\n  const results = items.filter(i => i.title.includes(query));\n  self.postMessage({ results });\n});",
    "example": "worker.terminate(); /* Принудительная остановка фонового потока */",
    "points": [
      "JavaScript в браузере однопоточен: если цикл обрабатывает 100 000 строк в главном потоке дольше 50 мс, анимации, скролл и ввод текста замирают. Web Worker выполняет код параллельно на другом ядре процессора!",
      "Внутри Web Worker нет доступа к объектам window и document (DOM), общение происходит через быстрые сообщения postMessage().",
      "Опция { type: \"module\" } позволяет использовать стандартные import / export внутри файла воркера."
    ],
    "tags": [
      "JavaScript",
      "Web Worker",
      "Worker",
      "postMessage",
      "многопоточность",
      "производительность",
      "фон"
    ],
    "when": "При клиентском поиске по большим базам, генерации отчётов, сжатии изображений и криптографии.",
    "alternatives": "Для небольших задач до 10–20 мс оверхед на пересылку данных в воркер не нужен.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Web_Workers_API/Using_web_workers"
  },
  {
    "lang": "php",
    "id": "php-cookies-setcookie",
    "title": "PHP 8: безопасная установка и удаление Cookies (setcookie с массивом опций)",
    "summary": "Современный синтаксис setcookie() с защитными флагами HttpOnly, Secure, SameSite и корректное удаление куки.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// 1. Установка защищённой куки на 30 дней (современный синтаксис с массивом опций)\nsetcookie('remember_token', $tokenValue, [\n    'expires'  => time() + 60 * 60 * 24 * 30,\n    'path'     => '/',\n    'secure'   => true,     // Передавать только по HTTPS\n    'httponly' => true,     // Запретить чтение из JS (document.cookie) для защиты от XSS!\n    'samesite' => 'Lax',    // Защита от CSRF-атак при переходах с чужих сайтов\n]);\n\n// 2. Удаление куки (установка времени истечения в прошлое с тем же path!)\nsetcookie('remember_token', '', ['expires' => 1, 'path' => '/']);",
    "example": "$theme = $_COOKIE['theme'] ?? 'dark';",
    "points": [
      "Начиная с PHP 7.3+ функция setcookie() принимает удобный ассоциативный массив опций третьим аргументом вместо 7 позиционных параметров!",
      "При удалении куки через expires => 1 обязательно передавай точно такой же параметр path => \"/\", с каким она создавалась, иначе браузер не удалит её!",
      "Учитывай, что после вызова setcookie() новое значение появится в массиве $_COOKIE только при СЛЕДУЮЩЕМ HTTP-запросе от браузера."
    ],
    "tags": [
      "PHP",
      "setcookie",
      "COOKIE",
      "httponly",
      "samesite",
      "secure",
      "куки",
      "авторизация"
    ],
    "when": "Для функции «Запомнить меня», хранения идентификатора гостевой корзины и реферальных меток.",
    "alternatives": "Не храни в открытых куках роль пользователя (role=admin) — клиент может легко подделать куку в DevTools! Храни роли в серверной $_SESSION.",
    "url": "https://www.php.net/manual/ru/function.setcookie.php"
  },
  {
    "lang": "php",
    "id": "php-array-destructuring-spread",
    "title": "PHP 8: деструктуризация массивов, оператор распаковки (...$arr) и array_reduce",
    "summary": "Извлечение ключей ассоциативного массива в переменные за одну строчку и слияние конфигураций.",
    "code": "<?php\ndeclare(strict_types=1);\n\n$config = ['host' => '127.0.0.1', 'port' => 3306, 'dbname' => 'devshelf'];\n\n// Деструктуризация ассоциативного массива по ключам (как в JS!)\n['host' => $dbHost, 'port' => $dbPort] = $config;\n\n// Слияние массивов со строковыми ключами через spread-оператор (PHP 8.1+)\n$finalConfig = [...$config, 'port' => 5432, 'charset' => 'utf8mb4'];\n\n// Подсчёт общей суммы корзины через array_reduce\n$total = array_reduce(\n    $cartItems,\n    fn(int $sum, array $item): int => $sum + ($item['price'] * $item['qty']),\n    0\n);",
    "example": "[$first, $second] = ['HTML', 'CSS'];",
    "points": [
      "Короткий синтаксис деструктуризации [$a, $b] = $array и [\"id\" => $id, \"name\" => $name] = $row полностью заменил старую конструкцию list()!",
      "В PHP 8.1+ оператор распаковки [...$default, ...$override] работает и со строковыми ключами (последующие ключи перезаписывают предыдущие, как array_merge).",
      "Для простого суммирования одного числового поля используй сверхбыструю связку array_sum(array_column($items, \"price\"))."
    ],
    "tags": [
      "PHP",
      "destructuring",
      "spread",
      "array_reduce",
      "array_sum",
      "array_merge",
      "деструктуризация",
      "массивы"
    ],
    "when": "При распаковке строк из БД, возврате нескольких значений из функции и расчёте сумм.",
    "alternatives": "Оператор объединения массивов $a + $b сохраняет ключи из ПЕРВОГО массива, а [...$a, ...$b] и array_merge($a, $b) берут новые значения из ВТОРОГО.",
    "url": "https://www.php.net/manual/ru/language.types.array.php"
  }
];
window.REFERENCE_DATA = {
  "html": [
    {
      "lang": "html",
      "id": "html-document",
      "title": "HTML: структура документа (HTML5 Boilerplate)",
      "summary": "Обязательный стандартный каркас веб-страницы: объявление стандарта, язык страницы, метаданные и тело.",
      "code": "<!doctype html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Заголовок страницы</title>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Основной заголовок</h1>\n  <script src=\"script.js\" defer></script>\n</body>\n</html>",
      "example": "<main>\n  <h1>Добро пожаловать</h1>\n  <p>Контент страницы.</p>\n</main>",
      "points": [
        "<!doctype html> переводит браузер в режим соответствия стандартам (Standards Mode) без quirks-режима.",
        "Атрибут lang=\"ru\" критически важен для синтезаторов речи (screen readers), автопереводчиков и поисковиков.",
        "Тег <meta name=\"viewport\"> гарантирует правильный масштаб и отсутствие зума на мобильных экранах."
      ],
      "tags": [
        "HTML",
        "doctype",
        "html",
        "head",
        "body",
        "структура",
        "каркас",
        "boilerplate",
        "lang",
        "viewport"
      ],
      "when": "Начинай с этого каркаса любую страницу или шаблон в проекте.",
      "alternatives": "Для AJAX-фрагментов и компонентов каркас опускается; для фреймворков каркас выносится в index.html или layout.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML"
    },
    {
      "lang": "html",
      "id": "html-metadata",
      "title": "HTML: метаданные страницы и мобильный viewport",
      "summary": "Настройка кодировки, заголовка вкладки, описания для поисковиков и темы мобильного браузера.",
      "code": "<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"Краткое емкое описание (до 160 символов) для сниппета в поисковиках\">\n  <meta name=\"theme-color\" content=\"#090d14\">\n  <link rel=\"canonical\" href=\"https://example.com/page\">\n  <title>Понятный заголовок вкладки | Название бренда</title>\n</head>",
      "example": "<meta name=\"theme-color\" content=\"#090d14\" media=\"(prefers-color-scheme: dark)\">",
      "points": [
        "<meta charset=\"utf-8\"> должен стоять в числе первых тегов внутри <head>, чтобы браузер сразу декодировал текст.",
        "<title> является главным фактором ранжирования в поисковиках и заголовком вкладки в браузере.",
        "canonical указывает поисковику основную версию страницы, предотвращая склейку и дубли контента."
      ],
      "tags": [
        "HTML",
        "meta",
        "title",
        "description",
        "viewport",
        "theme-color",
        "canonical",
        "метаданные",
        "кодировка"
      ],
      "when": "Обязательно настраивай для всех публичных страниц сайта для правильного отображения и SEO.",
      "alternatives": "Для страниц админ-панелей description и canonical обычно опускают.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/meta"
    },
    {
      "lang": "html",
      "id": "html-opengraph",
      "title": "HTML: разметка Open Graph и Twitter Cards для соцсетей",
      "summary": "Специальные метатеги, формирующие красивую карточку с превью, заголовком и картинкой при репосте в Telegram, VK и WhatsApp.",
      "code": "<!-- Open Graph (Telegram, VK, Facebook) -->\n<meta property=\"og:type\" content=\"website\">\n<meta property=\"og:site_name\" content=\"DevShelf\">\n<meta property=\"og:title\" content=\"Заголовок для ссылки в соцсети\">\n<meta property=\"og:description\" content=\"Краткое превью статьи, отображаемое под заголовком.\">\n<meta property=\"og:image\" content=\"https://example.com/og-image.jpg\">\n<meta property=\"og:image:width\" content=\"1200\">\n<meta property=\"og:image:height\" content=\"630\">\n<meta property=\"og:url\" content=\"https://example.com/page\">\n\n<!-- Twitter Cards -->\n<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:title\" content=\"Заголовок карточки\">\n<meta name=\"twitter:description\" content=\"Описание статьи для карточки\">\n<meta name=\"twitter:image\" content=\"https://example.com/og-image.jpg\">",
      "example": "<!-- Минимальный набор для Telegram: og:title, og:description, og:image -->",
      "points": [
        "Разрешение картинки og:image должно быть 1200x630 пикселей (пропорция 1.91:1) для четкого отображения на Retina.",
        "Ссылка на картинку должна быть абсолютной (https://...), иначе боты Telegram и VK её не загрузят.",
        "После изменения og-тегов в Telegram используй бота @WebpageBot, чтобы сбросить кэш превью ссылки."
      ],
      "tags": [
        "HTML",
        "opengraph",
        "og",
        "twitter",
        "social",
        "telegram",
        "vk",
        "превью",
        "репост",
        "карточка"
      ],
      "when": "Добавляй на все лендинги, статьи блога и страницы, на которые пользователи будут делиться ссылками.",
      "alternatives": "Без og: тегов соцсети выдернут первую попавшуюся картинку со страницы или оставят пустую серую плашку.",
      "url": "https://ogp.me/"
    },
    {
      "lang": "html",
      "id": "html-schema-jsonld",
      "title": "HTML: микроразметка Schema.org (JSON-LD)",
      "summary": "Структурированные данные для поисковых систем Google и Яндекс, позволяющие получить расширенные сниппеты (звезды, цены, FAQ).",
      "code": "<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebApplication\",\n  \"name\": \"DevShelf\",\n  \"url\": \"https://example.com\",\n  \"description\": \"Справочник веб-разработчика и интерактивная песочница\",\n  \"applicationCategory\": \"DeveloperApplication\",\n  \"operatingSystem\": \"All\",\n  \"offers\": {\n    \"@type\": \"Offer\",\n    \"price\": \"0\",\n    \"priceCurrency\": \"RUB\"\n  }\n}\n</script>",
      "example": "<!-- Для статей используй @type: \"Article\", для интернет-магазинов @type: \"Product\" -->",
      "points": [
        "Формат JSON-LD рекомендован Google, так как он отделен от HTML-верстки и не ломается при смене дизайна.",
        "Размещается внутри тега <script type=\"application/ld+json\"> в секции <head> или перед </body>.",
        "Проверить корректность синтаксиса можно в официальном валидаторе Google Rich Results Test."
      ],
      "tags": [
        "HTML",
        "schema",
        "json-ld",
        "микроразметка",
        "сео",
        "seo",
        "google",
        "яндекс",
        "структура"
      ],
      "when": "Используй для интернет-магазинов (товары, отзывы), блогов (автор, дата публикации), FAQ и рецептов.",
      "alternatives": "Устаревшие атрибуты Microdata (itemscope, itemprop) сложнее поддерживать при редизайне верстки.",
      "url": "https://schema.org/"
    },
    {
      "lang": "html",
      "id": "html-semantic",
      "title": "HTML: семантическая структура страницы",
      "summary": "Использование осмысленных тегов вместо бесконечных <div> для доступности, SEO и правильной архитектуры документа.",
      "code": "<header>\n  <nav aria-label=\"Основная навигация\">\n    <a href=\"/\">Главная</a>\n    <a href=\"/catalog\">Каталог</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <header>\n      <h1>Заголовок статьи</h1>\n      <p><time datetime=\"2026-03-15\">15 марта 2026</time></p>\n    </header>\n    <p>Основной текст статьи...</p>\n    <section>\n      <h2>Подраздел статьи</h2>\n      <p>Текст раздела...</p>\n    </section>\n  </article>\n\n  <aside aria-label=\"Связанные материалы\">\n    <h3>Смотрите также</h3>\n  </aside>\n</main>\n\n<footer>\n  <p>&copy; 2026 Компания</p>\n</footer>",
      "example": "<main id=\"content\">\n  <!-- Уникальное содержимое страницы -->\n</main>",
      "points": [
        "На странице должен быть ровно один тег <main>, содержащий неповторяющийся контент страницы.",
        "<article> используется для самодостаточных фрагментов (пост в блоге, комментарий, карточка товара).",
        "<section> группирует тематический блок контента и должен содержать свой заголовок h2-h6.",
        "<aside> обозначает косвенно связанный контент (сайдбар, реклама, связанные статьи)."
      ],
      "tags": [
        "HTML",
        "семантика",
        "header",
        "nav",
        "main",
        "article",
        "section",
        "aside",
        "footer",
        "структура"
      ],
      "when": "Всегда применяй семантические теги при верстке каркасов страниц и компонентов.",
      "alternatives": "Откажись от «div-супа» (верстки на сплошных div class=\"main_header\"), снижающего доступность и ухудшающего SEO.",
      "url": "https://developer.mozilla.org/ru/docs/Glossary/Semantics"
    },
    {
      "lang": "html",
      "id": "html-dialog",
      "title": "HTML: нативное модальное окно <dialog>",
      "summary": "Встроенный в HTML5 элемент всплывающего или модального окна с автоматической поддержкой клавиши Esc, блокировкой фона и фокусом.",
      "code": "<!-- Разметка модального окна -->\n<dialog id=\"modal\">\n  <h2>Заголовок диалога</h2>\n  <p>Текст сообщения или форма внутри модалки.</p>\n  <button type=\"button\" id=\"close-modal\">Закрыть</button>\n</dialog>\n\n<button type=\"button\" id=\"open-modal\">Открыть окно</button>\n\n<script>\n  const dialog = document.getElementById('modal');\n  document.getElementById('open-modal').onclick = () => dialog.showModal();\n  document.getElementById('close-modal').onclick = () => dialog.close();\n\n  // Закрытие по клику на затемненный фон (backdrop)\n  dialog.onclick = (e) => {\n    if (e.target === dialog) dialog.close();\n  };\n</script>",
      "example": "dialog::backdrop {\n  background: rgba(0, 0, 0, 0.65);\n  backdrop-filter: blur(4px);\n}",
      "points": [
        "Метод showModal() открывает окно как модальное (блокирует взаимодействие с остальной страницей и добавляет ::backdrop).",
        "Метод show() открывает обычный немодальный попап.",
        "Клавиша Esc закрывает окно автоматически из коробки без написания JS-обработчиков.",
        "Фокус клавиатуры автоматически захватывается внутри диалога (focus trap) и возвращается на кнопку открытия при закрытии."
      ],
      "tags": [
        "HTML",
        "dialog",
        "modal",
        "модальное окно",
        "попап",
        "showModal",
        "backdrop",
        "интерактив"
      ],
      "when": "Используй для форм подтверждения, всплывающих окон входа, корзины и карточек подробностей.",
      "alternatives": "Заменяет устаревшие самописные JS-модалки с кучей кода блокировки скролла и фокус-ловушек.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog"
    },
    {
      "lang": "html",
      "id": "html-details",
      "title": "HTML: спойлер и аккордеон без JavaScript (<details> и <summary>)",
      "summary": "Нативный интерактивный раскрывающийся блок, управляемый кликом пользователя без единой строчки скриптов.",
      "code": "<details>\n  <summary>Как работает доставка?</summary>\n  <p>Доставка осуществляется курьером по всей России в течение 2-4 рабочих дней.</p>\n</details>\n\n<!-- Аккордеон с эксклюзивным раскрытием (name в современных браузерах) -->\n<details name=\"faq\">\n  <summary>Вопрос 1: Какие способы оплаты?</summary>\n  <p>Карты, СБП, безналичный расчет.</p>\n</details>\n<details name=\"faq\">\n  <summary>Вопрос 2: Как оформить возврат?</summary>\n  <p>В личном кабинете в течение 14 дней.</p>\n</details>",
      "example": "details[open] summary {\n  color: #38bdf8;\n}\ndetails summary {\n  cursor: pointer;\n}",
      "points": [
        "Атрибут open указывает, открыт ли блок по умолчанию (можно добавлять программно).",
        "Атрибут name=\"group\" позволяет связывать несколько <details> в единый аккордеон (открывается только один).",
        "Полная поддержка клавиатуры: пробел и Enter раскрывают блок, когда фокус на <summary>."
      ],
      "tags": [
        "HTML",
        "details",
        "summary",
        "спойлер",
        "аккордеон",
        "faq",
        "раскрывающийся блок"
      ],
      "when": "Идеально для страниц FAQ, раскрывающихся фильтров каталога, списков изменений (Changelog).",
      "alternatives": "Не требует подключения JS-библиотек или фреймворков для простых выпадающих списков.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/details"
    },
    {
      "lang": "html",
      "id": "html-template",
      "title": "HTML: шаблоны без отображения (<template> и <slot>)",
      "summary": "Тег <template> хранит разметку на клиенте, которую браузер парсит, но не отображает до клонирования в JavaScript.",
      "code": "<template id=\"card-template\">\n  <div class=\"user-card\">\n    <h3 class=\"user-name\"></h3>\n    <p class=\"user-role\"></p>\n    <button type=\"button\" class=\"action-btn\">Написать</button>\n  </div>\n</template>\n\n<div id=\"users-list\"></div>\n\n<script>\n  const tmpl = document.getElementById('card-template');\n  const clone = tmpl.content.cloneNode(true);\n  clone.querySelector('.user-name').textContent = 'Иван Петров';\n  clone.querySelector('.user-role').textContent = 'Frontend Developer';\n  document.getElementById('users-list').appendChild(clone);\n</script>",
      "example": "const clone = template.content.cloneNode(true);",
      "points": [
        "Содержимое <template> не выполняется при загрузке страницы: скрипты не исполняются, картинки не скачиваются.",
        "Для вставки разметки используется template.content.cloneNode(true).",
        "Широко применяется в веб-компонентах (Web Components) совместно с Shadow DOM и тегом <slot>."
      ],
      "tags": [
        "HTML",
        "template",
        "slot",
        "шаблон",
        "компонент",
        "cloneNode",
        "web components"
      ],
      "when": "Используй для рендеринга списков данных на чистом JS без сборки через шаблонизаторы.",
      "alternatives": "Безопаснее и быстрее конкатенации строк через innerHTML, так как защищает от XSS-инъекций.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/template"
    },
    {
      "lang": "html",
      "id": "html-form",
      "title": "HTML: форма <form> и методы передачи данных",
      "summary": "Контейнер для сбора пользовательского ввода с настройкой методов GET/POST и типа кодирования.",
      "code": "<form action=\"/api/feedback\" method=\"POST\" enctype=\"multipart/form-data\">\n  <label for=\"user-email\">Ваш Email:</label>\n  <input type=\"email\" id=\"user-email\" name=\"email\" required placeholder=\"name@example.com\">\n\n  <label for=\"user-msg\">Сообщение:</label>\n  <textarea id=\"user-msg\" name=\"message\" rows=\"4\" required></textarea>\n\n  <button type=\"submit\">Отправить заявку</button>\n</form>",
      "example": "<form id=\"search-form\" method=\"GET\" action=\"/search\">\n  <input type=\"search\" name=\"q\">\n</form>",
      "points": [
        "Для загрузки файлов через форму обязателен атрибут enctype=\"multipart/form-data\" и method=\"POST\".",
        "Для поисковых запросов и фильтров используй method=\"GET\", чтобы параметры сохранялись в URL.",
        "Атрибут novalidate отключает стандартную браузерную всплывающую валидацию, если ты настраиваешь свою."
      ],
      "tags": [
        "HTML",
        "form",
        "форма",
        "method",
        "action",
        "post",
        "get",
        "enctype",
        "submit"
      ],
      "when": "Используй для авторизации, оформления заказа, обратной связи и поисковых панелей.",
      "alternatives": "В SPA отправка перехватывается через e.preventDefault() в событии submit и отправляется через fetch().",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/form"
    },
    {
      "lang": "html",
      "id": "html-input-text",
      "title": "HTML: текстовые поля ввода <input>",
      "summary": "Разновидности полей ввода для текста, почты, паролей, поиска и телефонных номеров с правильными экранными клавиатурами.",
      "code": "<!-- Текстовое поле -->\n<input type=\"text\" name=\"username\" autocomplete=\"username\" required>\n\n<!-- Email (открывает клавиатуру с символом @ на смартфонах) -->\n<input type=\"email\" name=\"email\" autocomplete=\"email\" required>\n\n<!-- Пароль (скрывает символы точками) -->\n<input type=\"password\" name=\"password\" autocomplete=\"current-password\" minlength=\"8\" required>\n\n<!-- Поле поиска (содержит крестик очистки в браузерах) -->\n<input type=\"search\" name=\"query\" placeholder=\"Поиск по сайту...\">\n\n<!-- Телефон (открывает цифровую клавиатуру на смартфонах) -->\n<input type=\"tel\" name=\"phone\" autocomplete=\"tel\" pattern=\"\\+7\\s?\\(?\\d{3}\\)?\\s?\\d{3}-?\\d{2}-?\\d{2}\">",
      "example": "<input type=\"email\" inputmode=\"email\" enterkeyhint=\"next\">",
      "points": [
        "Атрибут autocomplete помогает браузеру подставить данные из менеджера паролей или профиля.",
        "Атрибут inputmode управляет типом вызываемой виртуальной клавиатуры на смартфонах.",
        "Каждый <input> должен быть связан с <label> через атрибуты for=\"id\" или быть вложен внутрь него."
      ],
      "tags": [
        "HTML",
        "input",
        "text",
        "email",
        "password",
        "tel",
        "search",
        "поля ввода",
        "клавиатура"
      ],
      "when": "Используй для любых форм ввода персональных и учетных данных.",
      "alternatives": "Для многострочного текста всегда используй тег <textarea>, а не <input>.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input"
    },
    {
      "lang": "html",
      "id": "html-input-choice",
      "title": "HTML: чекбоксы и радиокнопки (<fieldset> и <legend>)",
      "summary": "Элементы одиночного и множественного выбора с группировкой по стандарту доступности.",
      "code": "<!-- Группа радиокнопок (выбор 1 из нескольких) -->\n<fieldset>\n  <legend>Выберите тарифный план:</legend>\n  <label>\n    <input type=\"radio\" name=\"plan\" value=\"free\" checked>\n    Бесплатный (0 ₽)\n  </label>\n  <label>\n    <input type=\"radio\" name=\"plan\" value=\"pro\">\n    Профессиональный (990 ₽/мес)\n  </label>\n</fieldset>\n\n<!-- Чекбокс (множественный выбор или согласие) -->\n<label>\n  <input type=\"checkbox\" name=\"terms\" required>\n  Я согласен с правилами сервиса\n</label>",
      "example": "<input type=\"checkbox\" id=\"theme\" role=\"switch\">",
      "points": [
        "У связанных радиокнопок должен быть одинаковый атрибут name, чтобы браузер переключал их взаимоисключающе.",
        "<fieldset> объединяет связанные поля, а <legend> служит заголовком группы для скринридеров.",
        "Для стилизации под тумблер (switch) часто добавляют атрибут role=\"switch\"."
      ],
      "tags": [
        "HTML",
        "checkbox",
        "radio",
        "fieldset",
        "legend",
        "чекбокс",
        "радиокнопка",
        "выбор"
      ],
      "when": "Используй для опросов, фильтров в интернет-магазинах, согласий и выбора тарифов.",
      "alternatives": "Для кастомного оформления скрывай нативный input через opacity: 0 или appearance: none, сохраняя фокус с клавиатуры.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/checkbox"
    },
    {
      "lang": "html",
      "id": "html-select-datalist",
      "title": "HTML: списки <select> и автодополнение <datalist>",
      "summary": "Выпадающие меню выбора и текстовые поля с предложенными вариантами автозаполнения.",
      "code": "<!-- Выпадающий список select -->\n<label for=\"city-select\">Выберите город:</label>\n<select id=\"city-select\" name=\"city\">\n  <option value=\"\" disabled selected>-- Выберите вариант --</option>\n  <optgroup label=\"Россия\">\n    <option value=\"msk\">Москва</option>\n    <option value=\"spb\">Санкт-Петербург</option>\n  </optgroup>\n  <optgroup label=\"Беларусь\">\n    <option value=\"minsk\">Минск</option>\n  </optgroup>\n</select>\n\n<!-- Текстовое поле с автодополнением datalist -->\n<label for=\"lang-input\">Язык программирования:</label>\n<input list=\"lang-options\" id=\"lang-input\" name=\"language\" placeholder=\"Начните ввод...\">\n<datalist id=\"lang-options\">\n  <option value=\"JavaScript\">\n  <option value=\"TypeScript\">\n  <option value=\"PHP\">\n  <option value=\"Python\">\n</datalist>",
      "example": "<select name=\"skills\" multiple size=\"4\">\n  <!-- Множественный выбор -->\n</select>",
      "points": [
        "<datalist> в отличие от <select> разрешает пользователю ввести свой собственный вариант, отсутствующий в списке.",
        "<optgroup> группирует опции внутри <select> с логическими заголовками.",
        "Для множественного выбора в <select> добавляется атрибут multiple."
      ],
      "tags": [
        "HTML",
        "select",
        "datalist",
        "option",
        "optgroup",
        "список",
        "выпадающий список",
        "автодополнение"
      ],
      "when": "Используй <select> при строгом наборе значений, а <datalist> — для подсказок в строках поиска и городах.",
      "alternatives": "Для сложных выпадающих меню с картинками используют кастомные ARIA-компоненты (combobox).",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/select"
    },
    {
      "lang": "html",
      "id": "html-images-responsive",
      "title": "HTML: адаптивные изображения (<picture>, srcset, loading=\"lazy\")",
      "summary": "Оптимальная загрузка графики под разные экраны, форматы WebP/AVIF и отложенная загрузка для ускорения сайта.",
      "code": "<picture>\n  <!-- Современный сверхсжатый формат AVIF -->\n  <source type=\"image/avif\" srcset=\"hero.avif\">\n  <!-- Формат WebP для браузеров без AVIF -->\n  <source type=\"image/webp\" srcset=\"hero.webp\">\n  <!-- Разные картинки под экраны разной ширины -->\n  <source media=\"(min-width: 1024px)\" srcset=\"hero-desktop.jpg\">\n  <source media=\"(min-width: 640px)\" srcset=\"hero-tablet.jpg\">\n  <!-- Обязательный запасной вариант -->\n  <img src=\"hero-mobile.jpg\"\n       alt=\"Разработчик за рабочим местом с кодом на мониторе\"\n       width=\"800\"\n       height=\"600\"\n       loading=\"lazy\"\n       decoding=\"async\">\n</picture>",
      "example": "<img src=\"thumb.webp\" srcset=\"thumb.webp 1x, thumb-2x.webp 2x\" alt=\"Миниатюра\">",
      "points": [
        "Всегда указывай атрибуты width и height на <img> — это предотвращает сдвиг макета (CLS, Cumulative Layout Shift).",
        "loading=\"lazy\" указывает браузеру не загружать картинку, пока пользователь не доскроллит до неё.",
        "Атрибут alt обязателен для доступности и индексации картинок поисковиками."
      ],
      "tags": [
        "HTML",
        "picture",
        "img",
        "srcset",
        "webp",
        "avif",
        "lazy",
        "адаптивные картинки",
        "оптимизация"
      ],
      "when": "Обязательно для фотогалерей, баннеров, карточек каталога и медиа-тяжелых сайтов.",
      "alternatives": "Простой <img src=\"huge.jpg\"> приводит к медленной загрузке сайта и снижению позиций в Google PageSpeed.",
      "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Structuring_content/Responsive_images"
    },
    {
      "lang": "html",
      "id": "html-video-audio",
      "title": "HTML: видео и аудиоплеер (<video> и <audio>)",
      "summary": "Нативное воспроизведение мультимедиа без флеша и сторонних плагинов с управлением через интерфейс и JavaScript.",
      "code": "<!-- Видеоплеер -->\n<video controls\n       preload=\"metadata\"\n       poster=\"/images/poster.jpg\"\n       width=\"800\"\n       height=\"450\"\n       playsinline>\n  <source src=\"/media/video.mp4\" type=\"video/mp4\">\n  <source src=\"/media/video.webm\" type=\"video/webm\">\n  <track kind=\"subtitles\" src=\"/media/subs-ru.vtt\" srclang=\"ru\" label=\"Русский\" default>\n  Ваш браузер не поддерживает встроенное видео.\n</video>\n\n<!-- Фоновое автовоспроизводимое видео (muted обязателен) -->\n<video autoplay loop muted playsinline poster=\"/images/bg-poster.jpg\" class=\"bg-video\">\n  <source src=\"/media/ambient.mp4\" type=\"video/mp4\">\n</video>",
      "example": "<audio controls src=\"/audio/track.mp3\"></audio>",
      "points": [
        "Браузеры блокируют autoplay видео со звуком: для автозапуска видео обязательно должен быть указан атрибут muted.",
        "Атрибут playsinline критически важен для iOS Safari, иначе видео принудительно разворачивается на весь экран.",
        "Элемент <track> позволяет подключать субтитры и транскрипцию в формате WebVTT (.vtt)."
      ],
      "tags": [
        "HTML",
        "video",
        "audio",
        "плеер",
        "видео",
        "аудио",
        "poster",
        "autoplay",
        "мультимедиа"
      ],
      "when": "Используй для видеопрезентаций, курсов, фоновых динамических обложек и подкастов.",
      "alternatives": "Для YouTube и Vimeo используются вставки <iframe>, но нативный <video> дает полный контроль над стилями.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video"
    },
    {
      "lang": "html",
      "id": "html-aria-accessibility",
      "title": "HTML: доступность WAI-ARIA и клавиатурная навигация",
      "summary": "Атрибуты для корректной работы со скринридерами (программами чтения экрана для незрячих пользователей) и управления с клавиатуры.",
      "code": "<!-- Кнопка с понятной меткой, если внутри только иконка -->\n<button type=\"button\" aria-label=\"Закрыть модальное окно\">\n  <svg aria-hidden=\"true\" width=\"16\" height=\"16\"><path d=\"...\"/></svg>\n</button>\n\n<!-- Индикатор раскрытого состояния меню -->\n<button type=\"button\" aria-expanded=\"false\" aria-controls=\"mobile-nav\">\n  Меню\n</button>\n<nav id=\"mobile-nav\" hidden>\n  <a href=\"/\">Главная</a>\n</nav>\n\n<!-- Живой регион для динамических уведомлений без перезагрузки -->\n<div id=\"status-msg\" role=\"status\" aria-live=\"polite\">\n  Товар успешно добавлен в корзину!\n</div>",
      "example": "<div role=\"alert\" aria-live=\"assertive\">Ошибка подключения к серверу!</div>",
      "points": [
        "Первое правило ARIA: если есть нативный HTML-тег (button, a, dialog, input), используй его, а не div с role=\"button\".",
        "aria-hidden=\"true\" скрывает декоративные элементы (иконки, фоновые иллюстрации) от скринридеров.",
        "aria-live=\"polite\" сообщает пользователю скринридера о произошедшем событии в паузе речи."
      ],
      "tags": [
        "HTML",
        "aria",
        "accessibility",
        "a11y",
        "доступность",
        "скринридер",
        "aria-label",
        "aria-live"
      ],
      "when": "Обязательно для иконочных кнопок, интерактивных меню, тостов и динамических виджетов.",
      "alternatives": "Недоступные интерфейсы теряют пользователей с ограничениями и получают штрафы в поисковом ранжировании.",
      "url": "https://developer.mozilla.org/ru/docs/Web/Accessibility/ARIA"
    },
    {
      "lang": "html",
      "id": "html-headings",
      "title": "HTML: заголовки <h1>–<h6> и иерархия документа",
      "summary": "Шесть уровней заголовков, формирующих оглавление страницы для пользователей, поисковых роботов и скринридеров.",
      "code": "<article>\n  <h1>Руководство по архитектуре CSS</h1>\n  <p>Вводный абзац статьи с кратким обзором темы.</p>\n\n  <h2>1. Методология БЭМ</h2>\n  <p>Описание блока, элемента и модификатора.</p>\n\n  <h3>1.1. Именование модификаторов</h3>\n  <p>Примеры булевых и ключ-значение модификаторов.</p>\n</article>",
      "example": "<h1>Главный заголовок страницы (один на документ)</h1>\n<h2>Заголовок секции</h2>\n<h3>Подзаголовок</h3>",
      "points": [
        "Тег <h1> должен быть один на страницу и отражать её главную тему (совпадать по смыслу с <title>).",
        "Не пропускай уровни вложенности (например, не переходи с <h1> сразу на <h4> ради размера шрифта).",
        "Размер текста заголовка всегда задавай через CSS (font-size: clamp(...)), а уровень тега выбирай по смыслу."
      ],
      "tags": [
        "HTML",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "заголовки",
        "иерархия",
        "типографика",
        "seo"
      ],
      "when": "Используй для озаглавливания страницы, каждого раздела <section> и карточек <article>.",
      "alternatives": "Не заменяй заголовки на <div class=\"title\"> — страница потеряет структуру для SEO и незрячих пользователей.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/Heading_Elements"
    },
    {
      "lang": "html",
      "id": "html-text-inline",
      "title": "HTML: текстовая семантика <p>, <strong>, <em>, <mark>, <small>",
      "summary": "Теги для разметки абзацев, смысловых акцентов, важных предупреждений, подсвеченного текста и сносок.",
      "code": "<p>\n  <strong>Внимание:</strong> перед удалением базы данных создайте <em>резервную копию</em>.\n</p>\n<p>\n  Результаты поиска по запросу <mark>flexbox</mark>: найдено 14 статей.\n</p>\n<p><small>Лицензия MIT · Обновлено в 2026 году</small></p>",
      "example": "<p>Обычный текст, <strong>важный фрагмент</strong> и <mark>выделенное совпадение</mark>.</p>",
      "points": [
        "<strong> указывает на высокую важность текста (скринридер произносит с усиленной интонацией), а <b> — просто полужирное начертание без важности.",
        "<em> задаёт логическое ударение в предложении, тогда как <i> используется для терминов, мыслей или иконок.",
        "<mark> подсвечивает совпадения в поиске или актуальную часть цитаты."
      ],
      "tags": [
        "HTML",
        "p",
        "strong",
        "em",
        "mark",
        "small",
        "b",
        "i",
        "абзац",
        "жирный",
        "курсив",
        "текст"
      ],
      "when": "При разметке любого текстового контента, статей, карточек и уведомлений.",
      "alternatives": "Если нужно сделать весь блок жирным чисто декоративно — используй CSS-свойство font-weight: 600.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/strong"
    },
    {
      "lang": "html",
      "id": "html-code-pre-kbd",
      "title": "HTML: разметка кода <code>, <pre>, <kbd> и <samp>",
      "summary": "Специализированные элементы для вывода фрагментов исходного кода, сочетаний клавиш и вывода терминала.",
      "code": "<p>Нажмите <kbd>Ctrl</kbd> + <kbd>K</kbd> для вызова командной строки.</p>\n\n<pre><code>function sum(a, b) {\n  return a + b;\n}</code></pre>\n\n<p>Ответ сервера: <samp>HTTP/1.1 200 OK</samp></p>",
      "example": "<kbd>Esc</kbd> закрывает окно, а <code>Array.isArray()</code> проверяет массив.",
      "points": [
        "Тег <code> используется для инлайновых имён функций и переменных прямо внутри текста.",
        "Связка <pre><code>...</code></pre> сохраняет все пробелы, отступы и переносы строк для многострочных сниппетов.",
        "Символы < и > внутри <code> необходимо экранировать как &lt; и &gt;, чтобы браузер не посчитал их HTML-тегами."
      ],
      "tags": [
        "HTML",
        "code",
        "pre",
        "kbd",
        "samp",
        "код",
        "клавиши",
        "терминал",
        "сниппет"
      ],
      "when": "В документации, технических блогах, подсказках горячих клавиш и логах.",
      "alternatives": "Для интерактивного редактирования кода используй <textarea> или редакторы CodeMirror / Monaco.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/code"
    },
    {
      "lang": "html",
      "id": "html-blockquote-figure",
      "title": "HTML: цитаты <blockquote>, <q> и иллюстрации <figure>, <figcaption>",
      "summary": "Семантическое оформление блочных цитат с указанием автора и автономных иллюстраций с подписями.",
      "code": "<figure class=\"quote-card\">\n  <blockquote cite=\"https://martinfowler.com\">\n    <p>Любой дурак может написать код, который поймёт компьютер. Хорошие программисты пишут код, который может понять человек.</p>\n  </blockquote>\n  <figcaption>— Мартин Фаулер, <cite>Рефакторинг</cite></figcaption>\n</figure>",
      "example": "<figure>\n  <img src=\"chart.svg\" alt=\"График роста\">\n  <figcaption>Рис. 1 — Динамика запросов за 2026 год</figcaption>\n</figure>",
      "points": [
        "<figure> связывает изображение, диаграмму, сниппет кода или цитату с её подписью <figcaption>.",
        "<blockquote> предназначен для крупных цитат, а <q> — для коротких цитат внутри строки (браузер сам добавит кавычки).",
        "<cite> используется для названия произведения (книги, статьи, стандарта), на которое ссылаются."
      ],
      "tags": [
        "HTML",
        "blockquote",
        "figure",
        "figcaption",
        "cite",
        "q",
        "цитата",
        "подпись",
        "иллюстрация"
      ],
      "when": "Для оформления отзывов клиентов, цитат в статьях, графиков, фото с подписями и схем.",
      "alternatives": "Обычный <img> без подписи не требует обёртки в <figure>.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/figure"
    },
    {
      "lang": "html",
      "id": "html-time-address-abbr",
      "title": "HTML: даты <time>, аббревиатуры <abbr> и контакты <address>",
      "summary": "Машиночитаемые даты для поисковиков, расшифровка терминов и контактный блок автора или компании.",
      "code": "<p>Релиз состоится <time datetime=\"2026-09-15T10:00:00+03:00\">15 сентября в 10:00 МСК</time>.</p>\n\n<p>Протокол <abbr title=\"HyperText Transfer Protocol Secure\">HTTPS</abbr> шифрует трафик.</p>\n\n<address>\n  Связаться с редакцией: <a href=\"mailto:team@devshelf.ru\">team@devshelf.ru</a>\n</address>",
      "example": "<time datetime=\"2026-05-01\">1 мая 2026</time>",
      "points": [
        "Атрибут datetime в <time> хранит дату в формате ISO 8601, понятном поисковикам и календарям, а внутри тега пишется текст для людей.",
        "<abbr title=\"...\"> показывает расшифровку аббревиатуры при наведении курсора и помогает скринридерам.",
        "<address> предназначен для контактов автора статьи или владельца сайта, а не для любого почтового адреса доставки."
      ],
      "tags": [
        "HTML",
        "time",
        "datetime",
        "abbr",
        "address",
        "дата",
        "время",
        "аббревиатура",
        "контакты"
      ],
      "when": "В карточках новостей, блогах, событиях, футере сайта и глоссариях.",
      "alternatives": "Для сложных всплывающих подсказок на тач-устройствах лучше дополнить <abbr> кастомным поповером.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/time"
    },
    {
      "lang": "html",
      "id": "html-links-navigation",
      "title": "HTML: ссылки <a>, якоря, скачивание и безопасность rel=\"noopener\"",
      "summary": "Гиперссылки для навигации между страницами, перехода к секциям, звонков, писем и скачивания файлов.",
      "code": "<!-- Обычная и внешняя ссылка -->\n<a href=\"/catalog\">Каталог</a>\n<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub ↗</a>\n\n<!-- Якорная ссылка внутри страницы -->\n<a href=\"#pricing\">К тарифам</a>\n\n<!-- Скачивание файла, телефон и почта -->\n<a href=\"/files/guide.pdf\" download=\"DevShelf-Guide.pdf\">Скачать PDF</a>\n<a href=\"tel:+79990001122\">+7 (999) 000-11-22</a>\n<a href=\"mailto:hello@example.com\">hello@example.com</a>",
      "example": "<a href=\"#section-2\">Перейти к разделу</a>",
      "points": [
        "Если ссылка меняет URL или переводит на другую страницу/якорь — это всегда <a>. Если выполняет действие на месте (открыть модалку) — это <button>.",
        "Атрибут download подсказывает браузеру сохранить файл вместо открытия его во вкладке (работает для файлов с того же домена).",
        "При target=\"_blank\" всегда добавляй rel=\"noopener\", чтобы открытая вкладка не имела доступа к window.opener."
      ],
      "tags": [
        "HTML",
        "a",
        "href",
        "link",
        "target",
        "download",
        "mailto",
        "tel",
        "noopener",
        "ссылка",
        "якорь"
      ],
      "when": "Для любой навигации, оглавлений статей, контактов и ссылок на скачивание.",
      "alternatives": "Никогда не используй <a href=\"#\"> для кнопок открытия меню — используй <button type=\"button\">.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/a"
    },
    {
      "lang": "html",
      "id": "html-buttons",
      "title": "HTML: элемент кнопки <button> и типы button / submit / reset",
      "summary": "Интерактивный элемент для запуска действий, отправки форм и управления интерфейсом с поддержкой клавиатуры.",
      "code": "<!-- Обычная кнопка для JS-действий -->\n<button type=\"button\" class=\"btn-primary\">Открыть фильтр</button>\n\n<!-- Кнопка отправки формы -->\n<button type=\"submit\">Сохранить изменения</button>\n\n<!-- Кнопка только с иконкой (обязателен aria-label) -->\n<button type=\"button\" aria-label=\"Закрыть окно\">✕</button>",
      "example": "<button type=\"button\" disabled>Загрузка...</button>",
      "points": [
        "По умолчанию внутри <form> кнопка без атрибута type считается type=\"submit\" и перезагружает страницу при клике! Всегда явно пиши type=\"button\" для обычных кнопок.",
        "Нативный <button> автоматически получает фокус по клавише Tab и нажимается по Пробелу и Enter.",
        "Атрибут disabled полностью блокирует клики, фокус и отправку формы."
      ],
      "tags": [
        "HTML",
        "button",
        "submit",
        "reset",
        "disabled",
        "кнопка",
        "форма",
        "клик"
      ],
      "when": "Для всех кликабельных элементов, которые не меняют адрес страницы (модалки, табы, бургер, лайки, отправка форм).",
      "alternatives": "Никогда не делай кнопки из <div onclick=\"...\"> — они недоступны с клавиатуры и невидимы для скринридеров.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/button"
    },
    {
      "lang": "html",
      "id": "html-lists",
      "title": "HTML: списки <ul>, <ol> и список определений <dl>, <dt>, <dd>",
      "summary": "Маркированные списки, нумерованные инструкции и списки пар «ключ — значение» для характеристик.",
      "code": "<!-- Нумерованный список со стартом с 3 -->\n<ol start=\"3\">\n  <li>Настроить сборщик Vite</li>\n  <li>Подключить стили</li>\n</ol>\n\n<!-- Список характеристик (ключ — значение) -->\n<dl class=\"specs\">\n  <dt>Движок</dt>\n  <dd>Chromium / V8</dd>\n  <dt>Лицензия</dt>\n  <dd>MIT</dd>\n</dl>",
      "example": "<ul>\n  <li>Пункт меню 1</li>\n  <li>Пункт меню 2</li>\n</ul>",
      "points": [
        "Непосредственными дочерними элементами <ul> и <ol> могут быть только теги <li>.",
        "<ol> имеет полезные атрибуты: reversed (обратный отсчёт) и start=\"5\" (начать нумерацию с 5).",
        "<dl> идеален для карточек характеристик товара, метаданных и глоссариев (внутри пары <dt> термин и <dd> описание)."
      ],
      "tags": [
        "HTML",
        "ul",
        "ol",
        "li",
        "dl",
        "dt",
        "dd",
        "список",
        "нумерация",
        "характеристики"
      ],
      "when": "Для навигационных меню, чек-листов, пошаговых инструкций и таблиц характеристик.",
      "alternatives": "Если у данных больше двух измерений (строки и несколько колонок), используй <table> вместо <dl>.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/dl"
    },
    {
      "lang": "html",
      "id": "html-tables",
      "title": "HTML: таблицы данных <table>, <thead>, <tbody>, <th>, <td>",
      "summary": "Полная семантическая разметка табличных данных с заголовками столбцов, объединением ячеек и подписью.",
      "code": "<table>\n  <caption>Тарифные планы облачного хостинга</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Тариф</th>\n      <th scope=\"col\">RAM</th>\n      <th scope=\"col\">Цена / мес</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Start</th>\n      <td>4 ГБ</td>\n      <td>490 ₽</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Pro</th>\n      <td>16 ГБ</td>\n      <td>1 490 ₽</td>\n    </tr>\n  </tbody>\n</table>",
      "example": "<td colspan=\"2\">Ячейка на две колонки</td>",
      "points": [
        "Атрибут scope=\"col\" или scope=\"row\" у тега <th> сообщает скринридерам, заголовок ли это столбца или строки.",
        "<caption> задаёт доступный заголовок таблицы и должен идти сразу после открывающего <table>.",
        "Для адаптивности на мобильных оборачивай таблицу в <div style=\"overflow-x: auto\">."
      ],
      "tags": [
        "HTML",
        "table",
        "thead",
        "tbody",
        "tfoot",
        "tr",
        "th",
        "td",
        "colspan",
        "rowspan",
        "таблица"
      ],
      "when": "Для прайс-листов, финансовых отчётов, сравнения характеристик и расписаний.",
      "alternatives": "Никогда не используй таблицы для раскладки страницы — для этого есть CSS Grid и Flexbox.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/table"
    },
    {
      "lang": "html",
      "id": "html-input-types",
      "title": "HTML: современные типы полей <input> и мобильные клавиатуры",
      "summary": "Выбор правильного type и inputmode для показа удобной экранной клавиатуры на смартфонах и встроенной валидации.",
      "code": "<input type=\"email\" placeholder=\"name@company.ru\" autocomplete=\"email\">\n<input type=\"tel\" placeholder=\"+7 (999) 000-00-00\" autocomplete=\"tel\">\n<input type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]{6}\" placeholder=\"Код из СМС\">\n<input type=\"search\" placeholder=\"Поиск по каталогу...\">\n<input type=\"date\" min=\"2026-01-01\">\n<input type=\"range\" min=\"0\" max=\"100\" value=\"50\">\n<input type=\"color\" value=\"#38bdf8\">",
      "example": "<input type=\"password\" autocomplete=\"current-password\" required minlength=\"8\">",
      "points": [
        "type=\"email\" и type=\"tel\" автоматически переключают клавиатуру iOS/Android на раскладку с @ или цифрами.",
        "Для пин-кодов, номеров карт и кодов из СМС используй <input type=\"text\" inputmode=\"numeric\"> вместо type=\"number\" (у number есть стрелочки и скролл).",
        "Атрибут autocomplete=\"one-time-code\" позволяет iOS и Android автоматически подставлять код из пришедшего СМС."
      ],
      "tags": [
        "HTML",
        "input",
        "email",
        "tel",
        "number",
        "date",
        "range",
        "color",
        "search",
        "inputmode",
        "поля"
      ],
      "when": "В любых формах регистрации, оплаты, фильтрации и настроек.",
      "alternatives": "Для многострочного ввода текста используй <textarea rows=\"4\">.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/input"
    },
    {
      "lang": "html",
      "id": "html-fieldset-legend",
      "title": "HTML: группировка полей <fieldset>, <legend>, чекбоксы и радиокнопки",
      "summary": "Доступное объединение радиокнопок и чекбоксов в смысловые блоки с общим заголовком и групповой блокировкой.",
      "code": "<fieldset>\n  <legend>Способ доставки</legend>\n  <label>\n    <input type=\"radio\" name=\"delivery\" value=\"courier\" checked>\n    Курьером до двери\n  </label>\n  <label>\n    <input type=\"radio\" name=\"delivery\" value=\"pickup\">\n    Пункт выдачи\n  </label>\n</fieldset>",
      "example": "<fieldset disabled>\n  <legend>Недоступные настройки</legend>\n  <input type=\"text\">\n</fieldset>",
      "points": [
        "Радиокнопки (type=\"radio\") объединяются в группу одинаковым атрибутом name — выбрать можно только одну.",
        "Оборачивание текста и инпута в общий <label> увеличивает область клика (можно нажимать прямо на текст).",
        "Если добавить атрибут disabled самому тегу <fieldset>, все поля внутри него разом станут неактивными!"
      ],
      "tags": [
        "HTML",
        "fieldset",
        "legend",
        "radio",
        "checkbox",
        "label",
        "группа",
        "чекбокс",
        "радиокнопка"
      ],
      "when": "При верстке групп радиокнопок, чекбоксов фильтров и многошаговых анкет (адрес, оплата).",
      "alternatives": "Без <fieldset> и <legend> скринридер прочитает подпись радиокнопки («Да» / «Нет»), но не прочитает сам вопрос.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/fieldset"
    },
    {
      "lang": "html",
      "id": "html-form-validation",
      "title": "HTML: нативная валидация форм (required, pattern, minlength, min/max)",
      "summary": "Встроенная в браузер проверка полей до отправки формы и стилизация валидных/ошибочных состояний через CSS.",
      "code": "<form>\n  <label>\n    Логин (от 3 до 16 латинских символов):\n    <input type=\"text\" name=\"username\" required minlength=\"3\" maxlength=\"16\" pattern=\"[a-zA-Z0-9_]+\" title=\"Только латинские буквы, цифры и _\">\n  </label>\n  <button type=\"submit\">Создать аккаунт</button>\n</form>",
      "example": "input:user-invalid {\n  border-color: #ef4444;\n}\ninput:user-valid {\n  border-color: #10b981;\n}",
      "points": [
        "Атрибут pattern принимает регулярное выражение, а атрибут title выводит подсказку пользователю при ошибке.",
        "В CSS используй современный псевдокласс :user-invalid вместо :invalid — он подсвечивает ошибку только ПОСЛЕ того, как пользователь начал вводить текст!",
        "Нативная валидация улучшает UX, но никогда не заменяет проверку данных на сервере (PHP/Node.js)."
      ],
      "tags": [
        "HTML",
        "validation",
        "required",
        "pattern",
        "minlength",
        "maxlength",
        "user-invalid",
        "валидация",
        "форма"
      ],
      "when": "На всех клиентских формах для мгновенной обратной связи без лишнего JS-кода.",
      "alternatives": "Для кастомных текстов ошибок используй Constraint Validation API (input.setCustomValidity()).",
      "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Forms/Form_validation"
    },
    {
      "lang": "html",
      "id": "html-progress-meter",
      "title": "HTML: индикаторы <progress>, <meter> и <output>",
      "summary": "Нативные семантические элементы для отображения прогресс-бара загрузки, уровня заряда/диска и результата расчёта.",
      "code": "<!-- Прогресс выполнения задачи -->\n<label for=\"upload\">Загрузка файла:</label>\n<progress id=\"upload\" value=\"72\" max=\"100\">72%</progress>\n\n<!-- Измеритель в заданном диапазоне (зелёный/жёлтый/красный) -->\n<label for=\"disk\">Занято на диске:</label>\n<meter id=\"disk\" min=\"0\" max=\"100\" low=\"60\" high=\"85\" optimum=\"20\" value=\"88\">88%</meter>\n\n<!-- Вывод результата калькулятора -->\n<output name=\"result\">1 450 ₽</output>",
      "example": "<progress></progress> <!-- Без value показывает бесконечную анимацию загрузки -->",
      "points": [
        "<progress> используется для процесса во времени (загрузка, шаг анкеты). Без атрибута value он работает как бесконечный спиннер.",
        "<meter> показывает статическую величину с порогами low, high и optimum (заряд батареи, надёжность пароля, место на диске).",
        "<output> автоматически озвучивает изменение значения скринридерам при пересчёте ползунков в калькуляторах."
      ],
      "tags": [
        "HTML",
        "progress",
        "meter",
        "output",
        "прогресс",
        "индикатор",
        "калькулятор",
        "загрузка"
      ],
      "when": "В загрузчиках файлов, дашбордах мониторинга, индикаторах пароля и онлайн-калькуляторах.",
      "alternatives": "Кастомный <div role=\"progressbar\" aria-valuenow=\"72\"> требует ручной поддержки ARIA-атрибутов.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/progress"
    },
    {
      "lang": "html",
      "id": "html-popover-api",
      "title": "HTML: нативный Popover API (атрибуты popover и popovertarget)",
      "summary": "Современный стандарт HTML для создания выпадающих меню, тултипов и тостов поверх всех слоёв без единой строчки JS.",
      "code": "<button type=\"button\" popovertarget=\"profile-menu\">\n  Профиль ▾\n</button>\n\n<div id=\"profile-menu\" popover>\n  <p><strong>Алексей</strong> · Pro аккаунт</p>\n  <hr>\n  <a href=\"#settings\">Настройки</a>\n  <button type=\"button\" popovertarget=\"profile-menu\" popovertargetaction=\"hide\">Закрыть</button>\n</div>",
      "example": "[popover]:popover-open {\n  border: 1px solid #38bdf8;\n  border-radius: 8px;\n}",
      "points": [
        "Элемент с атрибутом popover рендерится в верхнем слое браузера (#top-layer), поэтому ему никогда не мешают чужие z-index и overflow: hidden!",
        "Режим по умолчанию popover=\"auto\" автоматически закрывает поповер при клике вне него (light dismiss) или нажатии Esc.",
        "Режим popover=\"manual\" не закрывается при клике мимо и отлично подходит для тост-уведомлений."
      ],
      "tags": [
        "HTML",
        "popover",
        "popovertarget",
        "поповер",
        "выпадающее меню",
        "тултип",
        "top-layer"
      ],
      "when": "Для выпадающих меню профиля, фильтров, подсказок и уведомлений без привлечения JS-библиотек.",
      "alternatives": "Если нужно заблокировать остальную страницу (модальный режим), используй <dialog> с showModal().",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API"
    },
    {
      "lang": "html",
      "id": "html-template-slot",
      "title": "HTML: инертные шаблоны <template> для динамического рендеринга",
      "summary": "Хранение HTML-заготовок в разметке страницы, которые не рендерятся и не грузят картинки до клонирования через JS.",
      "code": "<template id=\"card-tpl\">\n  <article class=\"user-card\">\n    <h3 class=\"user-name\"></h3>\n    <p class=\"user-role\"></p>\n  </article>\n</template>\n\n<div id=\"list\"></div>\n\n<script>\n  const tpl = document.getElementById('card-tpl');\n  const clone = tpl.content.cloneNode(true);\n  clone.querySelector('.user-name').textContent = 'Мария Иванова';\n  clone.querySelector('.user-role').textContent = 'Frontend Lead';\n  document.getElementById('list').appendChild(clone);\n</script>",
      "example": "const fragment = template.content.cloneNode(true);",
      "points": [
        "Содержимое внутри <template> находится в DocumentFragment: браузер парсит его, но не выполняет скрипты и не скачивает изображения.",
        "Метод tpl.content.cloneNode(true) создаёт глубокую копию узлов, готовую к заполнению через textContent.",
        "Использование <template> защищает от XSS-уязвимостей, так как не требует склейки строк через innerHTML."
      ],
      "tags": [
        "HTML",
        "template",
        "cloneNode",
        "шаблон",
        "динамический",
        "рендер",
        "компонент"
      ],
      "when": "При рендеринге списков карточек, комментариев и строк таблиц на чистом JavaScript.",
      "alternatives": "Создание десятков вложенных узлов через document.createElement() вручную делает код громоздким.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/template"
    },
    {
      "lang": "html",
      "id": "html-iframe-sandbox",
      "title": "HTML: встраивание <iframe sandbox> и изоляция виджетов",
      "summary": "Безопасное встраивание внешних страниц, карт, видео и интерактивных песочниц с гранулярным контролем прав.",
      "code": "<iframe\n  src=\"https://example.com/widget\"\n  title=\"Интерактивная карта офиса\"\n  width=\"100%\"\n  height=\"400\"\n  loading=\"lazy\"\n  sandbox=\"allow-scripts allow-same-origin\"\n  referrerpolicy=\"no-referrer\"\n></iframe>",
      "example": "<iframe srcdoc=\"<h1>Привет из изолированного документа!</h1>\"></iframe>",
      "points": [
        "Атрибут title у <iframe> обязателен для доступности, чтобы незрячие пользователи понимали, что находится внутри фрейма.",
        "Атрибут sandbox без значений включает максимальные ограничения (запрещены скрипты, формы, всплывающие окна). Права выдаются точечно: allow-scripts, allow-forms.",
        "loading=\"lazy\" откладывает загрузку тяжелых сторонних фреймов (карт, видео), пока пользователь не доскроллит до них."
      ],
      "tags": [
        "HTML",
        "iframe",
        "sandbox",
        "srcdoc",
        "фрейм",
        "встраивание",
        "карта",
        "безопасность"
      ],
      "when": "При встраивании карт, виджетов оплаты, видеоплееров и превью кода.",
      "alternatives": "Внешние сайты с заголовком X-Frame-Options: DENY нельзя открыть в iframe — используй обычную ссылку target=\"_blank\".",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/iframe"
    },
    {
      "lang": "html",
      "id": "html-data-attributes",
      "title": "HTML: пользовательские атрибуты data-* и глобальные атрибуты",
      "summary": "Хранение произвольных параметров прямо в HTML-элементах для удобной связи верстки с JavaScript и CSS.",
      "code": "<button\n  type=\"button\"\n  class=\"tab-btn\"\n  data-tab-target=\"pricing\"\n  data-plan-id=\"42\"\n  hidden\n>\n  Показать тариф\n</button>\n\n<script>\n  const btn = document.querySelector('.tab-btn');\n  console.log(btn.dataset.tabTarget); // \"pricing\"\n  console.log(btn.dataset.planId);    // \"42\"\n</script>",
      "example": ".badge::after {\n  content: attr(data-count);\n}",
      "points": [
        "Любой атрибут вида data-user-role автоматически превращается в camelCase-свойство element.dataset.userRole в JavaScript.",
        "В CSS к значению data-атрибута можно обратиться по селектору [data-state=\"active\"] или вывести его текст через content: attr(data-label).",
        "Глобальные атрибуты hidden,inert, contenteditable=\"true\" и spellcheck=\"false\" работают на любых HTML-тегах."
      ],
      "tags": [
        "HTML",
        "data",
        "dataset",
        "inert",
        "hidden",
        "contenteditable",
        "атрибуты"
      ],
      "when": "Для передачи ID сущностей, состояния компонентов (data-state=\"open\"), тем оформления (data-theme=\"dark\") и табов.",
      "alternatives": "Не придумывай нестандартные атрибуты без префикса data- — они не пройдут валидацию HTML5.",
      "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes"
    },
    {
      "lang": "html",
      "id": "html-resource-hints",
      "title": "HTML: ускорение загрузки (preconnect, preload, defer, async)",
      "summary": "Управление приоритетами загрузки скриптов, шрифтов и внешних доменов для максимального показателя Core Web Vitals.",
      "code": "<head>\n  <!-- Заранее устанавливаем DNS + TCP + TLS соединение с CDN шрифтов -->\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n\n  <!-- Приоритетная подгрузка главного шрифта -->\n  <link rel=\"preload\" href=\"/fonts/inter.woff2\" as=\"font\" type=\"font/woff2\" crossorigin>\n\n  <!-- Скрипт загружается фоном и выполняется после сборки DOM -->\n  <script src=\"/app.js\" defer></script>\n</head>",
      "example": "<script type=\"module\" src=\"/main.js\"></script> <!-- Модули имеют defer по умолчанию -->",
      "points": [
        "Атрибут defer у <script> скачивает файл параллельно с парсингом HTML и запускает его строго по порядку после готовности DOM.",
        "Атрибут async запускает скрипт сразу после скачивания, прерывая парсинг — подходит только для независимых счетчиков аналитики.",
        "rel=\"preconnect\" экономит 100–300 мс на установке соединения со сторонними API и CDN."
      ],
      "tags": [
        "HTML",
        "defer",
        "async",
        "preload",
        "preconnect",
        "prefetch",
        "производительность",
        "скорость",
        "script"
      ],
      "when": "При подключении любых JS-скриптов, кастомных шрифтов и критических ресурсов в <head>.",
      "alternatives": "Никогда не ставь обычный <script src=\"...\"> без defer в <head> — это заблокирует отрисовку всей страницы.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/rel/preload"
    },
    {
      "lang": "html",
      "id": "html-canvas",
      "title": "HTML: холст для 2D и 3D графики <canvas>",
      "summary": "Растровый холст для рисования графиков, диаграмм, частиц, обработки фото и браузерных игр через JS.",
      "code": "<canvas id=\"chart\" width=\"600\" height=\"300\"></canvas>\n\n<script>\n  const canvas = document.getElementById('chart');\n  const ctx = canvas.getContext('2d');\n\n  // Заливка столбика диаграммы\n  ctx.fillStyle = '#38bdf8';\n  ctx.fillRect(40, 60, 80, 200);\n</script>",
      "example": "const dpr = window.devicePixelRatio || 1; /* Учёт Retina-экранов */",
      "points": [
        "Размеры холста обязательно задавай через HTML-атрибуты width и height, а не только через CSS, иначе картинка растянется и станет мыльной!",
        "Для идеальной чёткости на Retina-экранах умножай canvas.width на window.devicePixelRatio и масштабируй контекст ctx.scale(dpr, dpr).",
        "Для векторных иконок и кликабельных схем лучше подходит <svg>, а для десятков тысяч движущихся частиц — <canvas>."
      ],
      "tags": [
        "HTML",
        "canvas",
        "2d",
        "webgl",
        "графика",
        "холст",
        "диаграмма",
        "рисование"
      ],
      "when": "Для графиков аналитики, редакторов изображений, генераторов баннеров и 2D/3D игр.",
      "alternatives": "Для простых круговых и столбчатых графиков до 100 элементов проще и чётче использовать <svg>.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/canvas"
    },
    {
      "lang": "html",
      "id": "html-textarea",
      "title": "HTML: многострочное текстовое поле <textarea> и автовысота",
      "summary": "Поле для ввода комментариев, описаний и кода с контролем строк, лимитом символов и автоподстройкой высоты.",
      "code": "<label for=\"bio\">О проекте:</label>\n<textarea\n  id=\"bio\"\n  name=\"bio\"\n  rows=\"4\"\n  maxlength=\"500\"\n  placeholder=\"Опишите задачу проекта...\"\n></textarea>",
      "example": "textarea {\n  field-sizing: content; /* Современный CSS: поле само растёт по мере ввода текста! */\n  min-height: 80px;\n}",
      "points": [
        "В отличие от <input>, у <textarea> нет атрибута value — начальный текст пишется прямо между открывающим и закрывающим тегами.",
        "Не оставляй случайных пробелов и переносов между <textarea> и </textarea>, иначе они появятся внутри поля как введённый текст!",
        "Новое CSS-свойство field-sizing: content (или JS: el.style.height = el.scrollHeight + \"px\") позволяет полю автоматически расти по высоте."
      ],
      "tags": [
        "HTML",
        "textarea",
        "rows",
        "maxlength",
        "field-sizing",
        "комментарий",
        "многострочное поле"
      ],
      "when": "Для форм обратной связи, комментариев, биографии профиля и редакторов кода.",
      "alternatives": "Для форматированного текста с жирным и списками используют атрибут contenteditable=\"true\" или редакторы ProseMirror/TipTap.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/textarea"
    },
    {
      "lang": "html",
      "id": "html-audio-element",
      "title": "HTML: аудиоплеер <audio> и звуковые эффекты интерфейса",
      "summary": "Встраивание подкастов, голосовых сообщений и программное воспроизведение аудио через HTMLAudioElement.",
      "code": "<audio controls preload=\"metadata\">\n  <source src=\"/audio/episode-12.mp3\" type=\"audio/mpeg\">\n  <source src=\"/audio/episode-12.ogg\" type=\"audio/ogg\">\n</audio>\n\n<script>\n  const notifySound = new Audio('/audio/ping.mp3');\n  notifySound.volume = 0.4;\n  // Вызывать только после действия пользователя (клик)\n  btn.addEventListener('click', () => notifySound.play());\n</script>",
      "example": "audioElement.playbackRate = 1.5; /* Ускорение подкаста в 1.5 раза */",
      "points": [
        "Свойство audio.playbackRate = 1.5 или 2.0 позволяет легко сделать кнопку ускорения голосового сообщения или подкаста.",
        "Браузеры блокируют вызов audio.play() без предварительного клика пользователя по странице (защита от навязчивого звука).",
        "preload=\"metadata\" подгружает только длительность дорожки без скачивания всего MP3-файла."
      ],
      "tags": [
        "HTML",
        "audio",
        "mp3",
        "play",
        "playbackRate",
        "аудио",
        "плеер",
        "подкаст",
        "звук"
      ],
      "when": "В плеерах подкастов, мессенджерах с голосовыми сообщениями и звуковых уведомлениях.",
      "alternatives": "Для синтеза звука и эквалайзеров в реальном времени используй Web Audio API (AudioContext).",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/audio"
    },
    {
      "lang": "html",
      "id": "html-script-module-importmap",
      "title": "HTML: ES-модули <script type=\"module\"> и карты импортов (importmap)",
      "summary": "Подключение модульного JavaScript и NPM-библиотек прямо в браузере по коротким именам без сборщика.",
      "code": "<script type=\"importmap\">\n{\n  \"imports\": {\n    \"canvas-confetti\": \"https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/+esm\"\n  }\n}\n</script>\n\n<script type=\"module\">\n  import confetti from 'canvas-confetti';\n  confetti({ particleCount: 80, spread: 60 });\n</script>",
      "example": "<script type=\"module\" src=\"/src/main.js\"></script>",
      "points": [
        "<script type=\"module\"> автоматически работает в строгом режиме (\"use strict\"), имеет собственную изолированную область видимости и выполняется отложенно (как с defer).",
        "Тег <script type=\"importmap\"> позволяет сопоставить короткие имена пакетов с их URL на CDN или локальными путями.",
        "Внутри модульного скрипта работает top-level await (можно писать await fetch(...) на верхнем уровне без обёртки в async function)."
      ],
      "tags": [
        "HTML",
        "script",
        "module",
        "importmap",
        "import",
        "esm",
        "модули",
        "cdn"
      ],
      "when": "Во всех современных проектах для чистого разделения JS-кода на файлы.",
      "alternatives": "В продакшене для крупных проектов модули обычно собирают через Vite для объединения чанков.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap"
    },
    {
      "lang": "html",
      "id": "html-details-exclusive-accordion",
      "title": "HTML: связанный аккордеон <details name=\"...\"> без JavaScript",
      "summary": "Современный атрибут name у тега <details>, автоматически закрывающий соседние вкладки аккордеона при открытии новой.",
      "code": "<div class=\"faq-group\">\n  <details name=\"faq\" open>\n    <summary>Как работает атрибут name у details?</summary>\n    <p>Когда у нескольких тегов details одинаковый name, открытым может быть только один из них!</p>\n  </details>\n\n  <details name=\"faq\">\n    <summary>Нужен ли для этого JavaScript?</summary>\n    <p>Нет, браузер переключает вкладки аккордеона полностью нативно.</p>\n  </details>\n</div>",
      "example": "summary::marker { color: #38bdf8; }",
      "points": [
        "Добавление одинакового атрибута name=\"faq\" к группе тегов <details> превращает их во взаимоисключающий аккордеон (как радиокнопки)!",
        "Атрибут open задаёт вкладку, открытую по умолчанию при загрузке страницы.",
        "Для стилизации кастомной стрелочки скройте стандартный маркер через summary { list-style: none; } и summary::-webkit-details-marker { display: none; }."
      ],
      "tags": [
        "HTML",
        "details",
        "summary",
        "accordion",
        "faq",
        "аккордеон",
        "спойлер"
      ],
      "when": "Для блоков частых вопросов (FAQ), мобильных меню-гармошек и свернутых секций фильтров.",
      "alternatives": "Если нужно держать открытыми сразу несколько пунктов одновременно — просто не указывай атрибут name.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/details"
    },
    {
      "lang": "html",
      "id": "html-search-hgroup-hr",
      "title": "HTML: семантический блок поиска <search>, группа заголовка <hgroup> и <hr>",
      "summary": "Специализированный ориентир для форм поиска и фильтрации, связка заголовка с подзаголовком и тематический разделитель.",
      "code": "<search aria-label=\"Поиск по документации\">\n  <form action=\"/search\">\n    <input type=\"search\" name=\"q\" placeholder=\"Найти функцию...\">\n    <button type=\"submit\">Найти</button>\n  </form>\n</search>\n\n<hgroup>\n  <p class=\"kicker\">Руководство</p>\n  <h1>Архитектура современных веб-приложений</h1>\n  <p class=\"subtitle\">Практическое пособие для фронтенд- и бэкенд-разработчиков</p>\n</hgroup>",
      "example": "<hr aria-hidden=\"true\">",
      "points": [
        "Тег <search> — официальный элемент стандарта HTML5, создающий доступную область (role=\"search\") для любых полей поиска и фильтров каталога.",
        "<hgroup> объединяет главный заголовок <h1>–<h6> с надзаголовком (kicker) и подзаголовком в единую смысловую группу.",
        "<hr> означает смысловую смену темы между абзацами или секциями меню."
      ],
      "tags": [
        "HTML",
        "search",
        "hgroup",
        "hr",
        "семантика",
        "поиск",
        "подзаголовок",
        "разделитель"
      ],
      "when": "Используй <search> вокруг поисковых строк и панелей фильтрации товаров.",
      "alternatives": "Раньше вместо <search> приходилось писать <div role=\"search\">.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search"
    },
    {
      "lang": "html",
      "id": "html-sub-sup-del-ins",
      "title": "HTML: индексы <sub>, <sup> и правки цен <del>, <ins>, <s>",
      "summary": "Разметка химических и математических формул, сносок, а также перечёркнутых старых и новых цен со скидкой.",
      "code": "<!-- Старая и новая цена в карточке товара -->\n<div class=\"price-box\">\n  <del><span class=\"sr-only\">Старая цена:</span> 4 990 ₽</del>\n  <ins><span class=\"sr-only\">Новая цена:</span> 3 490 ₽</ins>\n</div>\n\n<!-- Верхний и нижний индекс -->\n<p>Площадь зала: 120 м<sup>2</sup> · Формула воды: H<sub>2</sub>O</p>",
      "example": "ins { text-decoration: none; font-weight: 700; color: #10b981; }",
      "points": [
        "Для зачёркнутой старой цены в интернет-магазине используй <del> или <s>, а для новой цены со скидкой — <ins> (сбросив подчёркивание через text-decoration: none).",
        "<sup> поднимает текст в верхний индекс (м², x³, сноски [1]), а <sub> опускает в нижний индекс (CO₂).",
        "В CSS задай sub, sup { line-height: 0; }, чтобы индексы не раздвигали высоту строки абзаца!"
      ],
      "tags": [
        "HTML",
        "sub",
        "sup",
        "del",
        "ins",
        "s",
        "скидка",
        "старая цена",
        "степень",
        "индекс"
      ],
      "when": "В карточках товаров со скидками, технических характеристиках (м², м³) и статьях.",
      "alternatives": "Не используй просто <span style=\"text-decoration: line-through\"> — поисковики не поймут, что это старая цена.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/del"
    },
    {
      "lang": "html",
      "id": "html-favicon-theme-links",
      "title": "HTML: фавиконки SVG/PNG, Apple Touch Icon и Web App Manifest",
      "summary": "Современный минимальный набор иконок сайта для вкладок браузера, тёмной темы и домашнего экрана смартфона.",
      "code": "<head>\n  <!-- Векторная иконка (поддерживает адаптацию под тёмную тему внутри SVG!) -->\n  <link rel=\"icon\" href=\"/icon.svg\" type=\"image/svg+xml\">\n  <!-- Иконка для экрана «Домой» на iPhone и iPad (180x180) -->\n  <link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\">\n  <!-- Манифест веб-приложения с иконками 192x192 и 512x512 -->\n  <link rel=\"manifest\" href=\"/manifest.webmanifest\">\n</head>",
      "example": "/* Внутри icon.svg можно написать @media (prefers-color-scheme: dark) для смены цвета! */",
      "points": [
        "Вместо 20 старых тегов иконок разного размера современным браузерам достаточно всего трёх ссылок: icon.svg, apple-touch-icon.png и manifest.webmanifest!",
        "Внутрь файла icon.svg можно встроить тег <style> с медиазапросом prefers-color-scheme: dark, чтобы фавиконка сама меняла цвет на тёмных вкладках.",
        "Apple Touch Icon должна быть квадратной PNG без прозрачности размером 180×180 пикселей."
      ],
      "tags": [
        "HTML",
        "favicon",
        "icon",
        "apple-touch-icon",
        "manifest",
        "pwa",
        "иконка сайта"
      ],
      "when": "В секции <head> каждого веб-сайта и приложения.",
      "alternatives": "Старый формат favicon.ico нужен только для обратной совместимости с очень старыми утилитами.",
      "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Add_a_hit_map_on_top_of_an_image"
    },
    {
      "lang": "html",
      "id": "html-main-element",
      "title": "HTML: главный контент страницы <main>",
      "summary": "Семантический контейнер для уникального содержимого текущей страницы (без сквозной шапки, меню и подвала).",
      "code": "<body>\n  <header>Шапка сайта</header>\n  <main id=\"main-content\">\n    <h1>Каталог ноутбуков</h1>\n    <p>Основное содержимое страницы...</p>\n  </main>\n  <footer>Подвал сайта</footer>\n</body>",
      "example": "<a href=\"#main-content\" class=\"skip-link\">Перейти к контенту</a>",
      "points": [
        "На странице должен быть только один видимый элемент <main> (допускается больше только если остальные скрыты атрибутом hidden).",
        "Не вкладывай <main> внутрь <article>, <aside>, <footer>, <header> или <nav>.",
        "Добавь id=\"main-content\" на <main>, чтобы пользователи с клавиатурой могли сразу перепрыгнуть навигацию."
      ],
      "tags": [
        "HTML",
        "main",
        "семантика",
        "контент",
        "skip-link",
        "каркас"
      ],
      "when": "На каждой веб-странице вокруг центральной рабочей области.",
      "alternatives": "Устаревший <div id=\"main\" role=\"main\"> полностью заменён нативным тегом <main>.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/main"
    },
    {
      "lang": "html",
      "id": "html-nav-breadcrumbs",
      "title": "HTML: навигация <nav> и разметка «хлебных крошек» (Breadcrumbs)",
      "summary": "Доступная разметка главного меню, оглавления статьи и цепочки навигации с атрибутом aria-current=\"page\".",
      "code": "<nav aria-label=\"Хлебные крошки\">\n  <ol class=\"breadcrumbs\">\n    <li><a href=\"/\">Главная</a></li>\n    <li><a href=\"/docs\">Справочник</a></li>\n    <li><span aria-current=\"page\">CSS Grid</span></li>\n  </ol>\n</nav>",
      "example": "[aria-current=\"page\"] {\n  color: var(--accent);\n  font-weight: 600;\n}",
      "points": [
        "Если на странице несколько блоков <nav> (в шапке, в сайдбаре и хлебные крошки), обязательно дай каждому понятный aria-label!",
        "Для хлебных крошек используй нумерованный список <ol>, так как порядок уровней вложенности здесь важен.",
        "Атрибут aria-current=\"page\" на активном пункте меню сообщает скринридеру, что пользователь уже находится на этой странице."
      ],
      "tags": [
        "HTML",
        "nav",
        "breadcrumbs",
        "aria-current",
        "хлебные крошки",
        "меню",
        "навигация"
      ],
      "when": "Для главного меню сайта, бокового оглавления документации, пагинации и хлебных крошек.",
      "alternatives": "Обычный блок ссылок в футере (политика, соцсети) не обязательно оборачивать в <nav>, достаточно <footer>.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/nav"
    },
    {
      "lang": "html",
      "id": "html-article-section-aside",
      "title": "HTML: разница между <article>, <section> и <aside>",
      "summary": "Чёткое правило выбора между независимой карточкой (<article>), тематической главой (<section>) и боковым блоком (<aside>).",
      "code": "<section aria-labelledby=\"news-heading\">\n  <h2 id=\"news-heading\">Последние статьи</h2>\n\n  <article class=\"post-card\">\n    <h3>Обзор PHP 8.3</h3>\n    <p>Что нового появилось в типизации классов и JSON...</p>\n  </article>\n</section>\n\n<aside aria-label=\"Рекламный блок\">\n  <p>Подпишитесь на наш Telegram-канал</p>\n</aside>",
      "example": "/* Правило: если блок можно вырвать со страницы и отправить в RSS без потери смысла — это <article>! */",
      "points": [
        "Используй <article> для самодостаточной единицы контента: карточка товара, пост в блоге, виджет погоды, комментарий пользователя.",
        "Используй <section> для логического раздела страницы со своим заголовком <h2> (например: «Преимущества», «Отзывы», «Тарифы»).",
        "Если контейнер нужен исключительно для CSS-сетки или флекса и не несёт смысловой роли — используй обычный <div>!"
      ],
      "tags": [
        "HTML",
        "article",
        "section",
        "aside",
        "div",
        "семантика",
        "разница",
        "карточка"
      ],
      "when": "При проектировании структуры лендингов, магазинов, новостных порталов и документации.",
      "alternatives": "Не заменяй каждый <div> на <section> — пустые секции без заголовков только засоряют дерево доступности.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/article"
    },
    {
      "lang": "html",
      "id": "html-label-for",
      "title": "HTML: подпись поля формы <label> и увеличение кликабельной зоны",
      "summary": "Связывание текстовой метки с полем ввода для удобства нажатия пальцем и обязательной доступности форм.",
      "code": "<!-- Способ 1: вложенный инпут (не требует придумывать уникальный id!) -->\n<label class=\"field\">\n  <span>Электронная почта</span>\n  <input type=\"email\" name=\"email\" required>\n</label>\n\n<!-- Способ 2: связь через атрибуты for и id -->\n<div class=\"checkbox-row\">\n  <input type=\"checkbox\" id=\"agree-terms\" name=\"agree\" required>\n  <label for=\"agree-terms\">Согласен с условиями оферты</label>\n</div>",
      "example": "label { cursor: pointer; }",
      "points": [
        "Клик по тексту <label> автоматически ставит курсор в связанное текстовое поле или переключает галочку чекбокса/радиокнопки!",
        "Никогда не используй placeholder вместо <label>: как только пользователь начнёт печатать, подсказка исчезнет, и он забудет, что требовалось ввести.",
        "Вкладывание <input> прямо внутрь <label> избавляет от необходимости генерировать десятки уникальных id."
      ],
      "tags": [
        "HTML",
        "label",
        "for",
        "input",
        "форма",
        "подпись",
        "доступность",
        "чекбокс"
      ],
      "when": "Для абсолютно каждого поля ввода, чекбокса, радиокнопки и выпадающего списка <select>.",
      "alternatives": "Если у поля поиска в шапке нет видимой текстовой подписи, добавь инпуту aria-label=\"Поиск по сайту\".",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/label"
    },
    {
      "lang": "html",
      "id": "html-optgroup-multiple",
      "title": "HTML: атрибуты форм (autocomplete, autofocus, readonly vs disabled)",
      "summary": "Тонкое управление поведением полей формы: автозаполнение карт и адресов, отличие readonly от disabled.",
      "code": "<form>\n  <!-- Включает автозаполнение имени и адреса из профиля браузера -->\n  <input type=\"text\" name=\"name\" autocomplete=\"name\">\n  <input type=\"password\" name=\"new_pass\" autocomplete=\"new-password\">\n\n  <!-- readonly: нельзя редактировать, НО значение ОТПРАВЛЯЕТСЯ на сервер и копируется! -->\n  <input type=\"text\" name=\"promo\" value=\"DEVSHELF2026\" readonly>\n\n  <!-- disabled: поле полностью выключено и НЕ отправляется в $_POST / FormData! -->\n  <input type=\"text\" name=\"legacy_id\" value=\"104\" disabled>\n</form>",
      "example": "<input type=\"search\" autofocus>",
      "points": [
        "Ключевая разница: поле с readonly можно выделить мышью, скопировать, и его значение уходит на сервер при отправке формы. Поле с disabled полностью игнорируется при отправке формы!",
        "Правильные значения autocomplete (\"username\", \"current-password\", \"new-password\", \"cc-number\", \"tel\") позволяют менеджеру паролей заполнить форму в один тап.",
        "Атрибут autofocus автоматически ставит курсор в поле при открытии страницы или модального окна <dialog>."
      ],
      "tags": [
        "HTML",
        "readonly",
        "disabled",
        "autocomplete",
        "autofocus",
        "form",
        "атрибуты форм"
      ],
      "when": "В формах входа, регистрации, оформления заказа и полях с промокодами/реферальными ссылками.",
      "alternatives": "Если нужно передать служебный ID на сервер вообще без показа поля пользователю, используй <input type=\"hidden\">.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/autocomplete"
    },
    {
      "lang": "html",
      "id": "html-iframe-lazy-loading",
      "title": "HTML: оптимизация изображений (loading=\"lazy\", decoding=\"async\", fetchpriority=\"high\")",
      "summary": "Ускорение загрузки первого экрана (LCP) за счёт приоритета главного баннера и ленивой подгрузки остальных фото.",
      "code": "<!-- Главный баннер на первом экране (LCP): грузим с максимальным приоритетом! -->\n<img\n  src=\"/img/hero-dashboard.webp\"\n  alt=\"Интерфейс панели управления\"\n  width=\"1200\"\n  height=\"675\"\n  fetchpriority=\"high\"\n>\n\n<!-- Картинки ниже первого экрана: грузим лениво по мере скролла -->\n<img\n  src=\"/img/card-1.webp\"\n  alt=\"Превью шаблона\"\n  width=\"400\"\n  height=\"300\"\n  loading=\"lazy\"\n  decoding=\"async\"\n>",
      "example": "/* Всегда указывай атрибуты width и height, чтобы страница не прыгала при загрузке фото (CLS = 0) */",
      "points": [
        "Золотое правило производительности: главному изображению на первом экране ставь fetchpriority=\"high\" (и НЕ ставь loading=\"lazy\"), а всем картинкам ниже первого экрана — loading=\"lazy\"!",
        "Явное указание атрибутов width и height позволяет браузеру заранее зарезервировать пропорции места до скачивания картинки, избавляя от скачков контента (Cumulative Layout Shift).",
        "decoding=\"async\" разрешает браузеру декодировать сжатый растр в фоновом потоке без фризов скролла."
      ],
      "tags": [
        "HTML",
        "img",
        "loading",
        "lazy",
        "fetchpriority",
        "decoding",
        "lcp",
        "cls",
        "оптимизация картинок"
      ],
      "when": "На всех изображениях лендингов, карточек товаров и статей.",
      "alternatives": "Старые JS-скрипты ленивой загрузки через data-src больше не нужны в современных браузерах.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority"
    },
    {
      "lang": "html",
      "id": "html-a-download-rel",
      "title": "HTML: атрибут rel (noopener, noreferrer, nofollow, sponsored, preload)",
      "summary": "Управление безопасностью внешних ссылок, передачей реферера, SEO-весом рекламных ссылок и предзагрузкой.",
      "code": "<!-- Безопасная внешняя ссылка без передачи window.opener -->\n<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Внешний ресурс</a>\n\n<!-- Ссылка в комментариях пользователей или партнёрский блок (для SEO) -->\n<a href=\"https://partner.ru\" rel=\"nofollow sponsored\">Партнёрский материал</a>",
      "example": "<link rel=\"canonical\" href=\"https://devshelf.ru/docs\">",
      "points": [
        "rel=\"noopener\" защищает страницу от перехвата управления вкладкой через window.opener при target=\"_blank\".",
        "rel=\"noreferrer\" дополнительно скрывает адрес твоего сайта в заголовке Referer при переходе по внешней ссылке.",
        "rel=\"nofollow\" и rel=\"ugc\" указывают поисковым роботам не передавать ссылочный вес ссылкам из пользовательских комментариев."
      ],
      "tags": [
        "HTML",
        "rel",
        "noopener",
        "noreferrer",
        "nofollow",
        "sponsored",
        "canonical",
        "ссылки",
        "seo"
      ],
      "when": "На всех внешних ссылках, рекламных интеграциях и ссылках из пользовательского контента.",
      "alternatives": "Современные браузеры автоматически подразумевают noopener при target=\"_blank\", но явное указание остаётся стандартом.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/rel"
    },
    {
      "lang": "html",
      "id": "html-img-srcset-sizes",
      "title": "HTML: адаптивные изображения srcset и sizes для экранов Retina (2x, 3x)",
      "summary": "Автоматический выбор браузером оптимального размера картинки под плотность пикселей и ширину экрана смартфона.",
      "code": "<img\n  src=\"/img/card-800.webp\"\n  srcset=\"\n    /img/card-400.webp 400w,\n    /img/card-800.webp 800w,\n    /img/card-1200.webp 1200w\n  \"\n  sizes=\"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px\"\n  alt=\"Превью проекта\"\n  width=\"400\"\n  height=\"300\"\n  loading=\"lazy\"\n>",
      "example": "<img src=\"logo-1x.png\" srcset=\"logo-1x.png 1x, logo-2x.png 2x\" alt=\"Логотип\">",
      "points": [
        "Дескрипторы ширины (400w, 800w) в srcset сообщают браузеру реальную ширину каждого файла в пикселях до его скачивания.",
        "Атрибут sizes подсказывает браузеру, какую ширину на экране займёт картинка в текущей сетке колонок.",
        "Для фиксированных элементов (логотипы, иконки) используй дескрипторы плотности пикселей: 1x, 2x."
      ],
      "tags": [
        "HTML",
        "srcset",
        "sizes",
        "retina",
        "img",
        "webp",
        "адаптивные картинки"
      ],
      "when": "Для контентных фотографий в каталогах, карточках блога и баннерах.",
      "alternatives": "Если нужно полностью сменить кадрирование (например, вертикальное фото на телефоне и горизонтальное на ПК), используй тег <picture>.",
      "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Structuring_content/Responsive_images"
    },
    {
      "lang": "html",
      "id": "html-input-file-accept",
      "title": "HTML: выбор файлов <input type=\"file\"> (accept, multiple, capture)",
      "summary": "Фильтрация разрешённых форматов файлов в проводнике и прямой вызов камеры смартфона для фото документа.",
      "code": "<!-- Выбор нескольких изображений в формате PNG, JPG или WebP -->\n<label class=\"upload-zone\">\n  <span>Выберите фотографии или перетащите сюда</span>\n  <input\n    type=\"file\"\n    name=\"photos[]\"\n    accept=\"image/png, image/jpeg, image/webp\"\n    multiple\n  >\n</label>\n\n<!-- Вызов камеры смартфона напрямую для сканирования документа -->\n<input type=\"file\" accept=\"image/*\" capture=\"environment\">",
      "example": "accept=\".pdf,.docx,application/pdf\"",
      "points": [
        "Атрибут accept=\"image/png, image/jpeg\" делает неактивными все неподходящие файлы в системном окне выбора.",
        "Для загрузки сразу нескольких файлов на сервер в PHP имя инпута должно заканчиваться квадратными скобками: name=\"photos[]\" и атрибут multiple.",
        "capture=\"environment\" на телефонах сразу открывает заднюю камеру, а capture=\"user\" — фронтальную селфи-камеру."
      ],
      "tags": [
        "HTML",
        "file",
        "accept",
        "multiple",
        "capture",
        "upload",
        "загрузка файла",
        "камера"
      ],
      "when": "В формах загрузки аватара, прикрепления документов, чеков и галерей.",
      "alternatives": "Не забывай дублировать проверку MIME-типа на сервере через PHP finfo, так как фильтр accept можно обойти.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/file"
    },
    {
      "lang": "html",
      "id": "html-contenteditable-spellcheck",
      "title": "HTML: редактируемые блоки contenteditable, spellcheck и translate=\"no\"",
      "summary": "Превращение любого HTML-элемента в визуальный редактор текста и управление автопереводом брендов и кода.",
      "code": "<!-- Инлайн-редактируемый заголовок документа (как в Notion) -->\n<h2 contenteditable=\"plaintext-only\" spellcheck=\"true\">\n  Нажмите, чтобы переименовать проект\n</h2>\n\n<!-- Запрет автопереводчику браузера ломать названия брендов и код -->\n<code translate=\"no\">justify-content: space-between</code>",
      "example": "<input type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" autocomplete=\"off\">",
      "points": [
        "Современное значение contenteditable=\"plaintext-only\" разрешает редактировать текст, но при вставке из буфера обмена автоматически очищает чужие шрифты и стили!",
        "Атрибут translate=\"no\" защищает логотипы, имена переменных, команды терминала и фрагменты кода от искажения встроенным переводчиком Chrome/Яндекс.",
        "На полях логина, email и поиска кода ставь spellcheck=\"false\", чтобы браузер не подчёркивал никнеймы красной волнистой линией."
      ],
      "tags": [
        "HTML",
        "contenteditable",
        "plaintext-only",
        "spellcheck",
        "translate",
        "редактор",
        "автоперевод"
      ],
      "when": "Для быстрых редактируемых заметок, заголовков досок задач и блоков кода.",
      "alternatives": "Для обычных полей ввода в формах всегда предпочтительнее стандартные <input> и <textarea>.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/contenteditable"
    },
    {
      "lang": "html",
      "id": "html-noscript-base-meta-refresh",
      "title": "HTML: служебные теги <head> (<base>, <noscript>, http-equiv, color-scheme)",
      "summary": "Системная поддержка светлой/тёмной темы контролов браузера, фолбэк без JS и базовый URL документа.",
      "code": "<head>\n  <!-- Сообщает браузеру тему страницы ещё до загрузки CSS (перекрашивает фон и скроллбары!) -->\n  <meta name=\"color-scheme\" content=\"dark light\">\n\n  <!-- Предупреждение на случай отключённого JavaScript -->\n  <noscript>\n    <div class=\"alert\">Для работы интерактивной песочницы включите JavaScript.</div>\n  </noscript>\n</head>",
      "example": "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'\">",
      "points": [
        "<meta name=\"color-scheme\" content=\"dark light\"> мгновенно переключает системный фон браузера, полосы прокрутки и поля форм в тёмный режим без белой вспышки при загрузке!",
        "Тег <noscript> рендерит своё содержимое только если в браузере пользователя выключен или заблокирован JavaScript.",
        "Тег <base href=\"https://example.com/app/\"> меняет базовый путь для всех относительных ссылок на странице (используй с осторожностью, так как он влияет и на якорные ссылки #anchor)."
      ],
      "tags": [
        "HTML",
        "color-scheme",
        "noscript",
        "base",
        "http-equiv",
        "csp",
        "head",
        "тёмная тема"
      ],
      "when": "Метатег color-scheme рекомендуется добавлять во все проекты с поддержкой тёмной темы.",
      "alternatives": "Редиректы лучше делать через HTTP-статус 301/302 на сервере, а не через устаревший <meta http-equiv=\"refresh\">.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name"
    },
    {
      "lang": "html",
      "id": "html-header-footer",
      "title": "HTML: шапка <header> и подвал <footer> страницы и карточки",
      "summary": "Вводная и завершающая области как для всей веб-страницы, так и внутри отдельных карточек <article>.",
      "code": "<header class=\"site-header\">\n  <a href=\"/\" class=\"logo\">DevShelf</a>\n  <nav aria-label=\"Главное меню\">...</nav>\n</header>\n\n<article class=\"post-card\">\n  <header>\n    <h2>Заголовок публикации</h2>\n    <time datetime=\"2026-09-15\">15.09.2026</time>\n  </header>\n  <p>Текст заметки...</p>\n  <footer>\n    <span>Автор: Павел</span> · <a href=\"#comments\">12 комментариев</a>\n  </footer>\n</article>",
      "example": "<footer class=\"site-footer\">&copy; 2026 Все права защищены</footer>",
      "points": [
        "Теги <header> и <footer> можно использовать многократно на одной странице: один раз для шапки/подвала всего сайта и внутри каждого <article> или <section>!",
        "Нельзя вкладывать <header> внутрь другого <header> или внутрь <footer>.",
        "<header> верхнего уровня (прямой ребёнок <body>) автоматически получает ориентир role=\"banner\" для скринридеров, а <footer> — role=\"contentinfo\"."
      ],
      "tags": [
        "HTML",
        "header",
        "footer",
        "шапка",
        "подвал",
        "футер",
        "хедер",
        "семантика"
      ],
      "when": "Для главной шапки и подвала сайта, а также верхней и нижней плашек карточек и модальных окон.",
      "alternatives": "Не используй <div class=\"header\"> там, где подходит нативный <header>.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/header"
    },
    {
      "lang": "html",
      "id": "html-span-div",
      "title": "HTML: универсальные контейнеры <div> (блочный) и <span> (строчный)",
      "summary": "Нейтральные обёртки без собственной семантики для группировки элементов под CSS-сетки и точечной стилизации слов.",
      "code": "<div class=\"grid-row\">\n  <div class=\"col\">Левая колонка сетки</div>\n  <div class=\"col\">Правая колонка сетки</div>\n</div>\n\n<p>\n  Статус сервера: <span class=\"status-online\">● Работает штатно</span>\n</p>",
      "example": "<span class=\"accent-text\">выделенное цветом слово</span>",
      "points": [
        "<div> — блочный контейнер (занимает всю доступную ширину и начинается с новой строки). Используется для построения сеток, обёрток и декоративных карточек.",
        "<span> — строчный контейнер (живёт внутри строки текста, не разрывая абзац). Используется для раскраски отдельных слов, бейджей и иконок.",
        "Используй <div> и <span> только тогда, когда ни один смысловой тег (<main>, <nav>, <article>, <button>, <strong>, <mark>) не подходит по смыслу."
      ],
      "tags": [
        "HTML",
        "div",
        "span",
        "контейнер",
        "обёртка",
        "блочный",
        "строчный"
      ],
      "when": "Для технических обёрток Flexbox/Grid и цветовых акцентов внутри текста.",
      "alternatives": "Никогда не вешай клики на <div> или <span> вместо <button> и <a>.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/div"
    },
    {
      "lang": "html",
      "id": "html-br-wbr",
      "title": "HTML: перенос строки <br> и мягкая точка разрыва длинных слов <wbr>",
      "summary": "Принудительный перевод строки в стихах/адресах и подсказка браузеру, где безопасно перенести длинный URL.",
      "code": "<p class=\"address\">\n  г. Москва,<br>\n  ул. Тверская, д. 12, оф. 304\n</p>\n\n<!-- Длинный URL аккуратно перенесётся по слэшам на узком экране смартфона -->\n<p>\n  Документация: https://developer.mozilla.org/<wbr>ru/<wbr>docs/<wbr>Web/<wbr>CSS\n</p>",
      "example": "overflow-wrap: break-word; /* CSS-альтернатива для переноса слишком длинных слов */",
      "points": [
        "Используй <br> только там, где разрыв строки является частью самого текста (поэзия, почтовые адреса, подписи).",
        "Никогда не ставь несколько <br><br> подряд для создания отступов между блоками — для этого существует CSS-свойство margin-bottom или gap!",
        "Тег <wbr> (Word Break Opportunity) невидим, пока строка помещается в экран, но указывает браузеру идеальное место для разрыва длинного слова или ссылки."
      ],
      "tags": [
        "HTML",
        "br",
        "wbr",
        "перенос строки",
        "длинное слово",
        "разрыв"
      ],
      "when": "В блоках адресов (<br>) и при выводе длинных технических путей, ссылок или хешей (<wbr>).",
      "alternatives": "Для автоматического переноса любых длинных строк без <wbr> задай в CSS свойство overflow-wrap: anywhere;.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/wbr"
    },
    {
      "lang": "html",
      "id": "html-iframe-youtube-map",
      "title": "HTML: адаптивное встраивание карт и видео в <iframe> с aspect-ratio",
      "summary": "Безопасная вставка интерактивных карт и видеороликов с сохранением пропорций 16:9 на любых экранах.",
      "code": "<div class=\"embed-container\">\n  <iframe\n    src=\"https://www.openstreetmap.org/export/embed.html\"\n    title=\"Карта проезда к офису\"\n    loading=\"lazy\"\n    referrerpolicy=\"no-referrer-when-downgrade\"\n    allowfullscreen\n  ></iframe>\n</div>",
      "example": ".embed-container iframe {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  border: 0;\n  border-radius: 8px;\n}",
      "points": [
        "Вместо устаревших HTML-атрибутов frameborder=\"0\" задавай в CSS border: 0; width: 100%; aspect-ratio: 16 / 9;.",
        "Атрибут loading=\"lazy\" на <iframe> экономит до 500 КБ трафика и ускоряет загрузку страницы, откладывая инициализацию карты до прокрутки.",
        "Всегда указывай осмысленный атрибут title=\"...\" для прохождения проверок Lighthouse и доступности."
      ],
      "tags": [
        "HTML",
        "iframe",
        "map",
        "video",
        "embed",
        "карта",
        "видео",
        "встраивание"
      ],
      "when": "На странице «Контакты» для схемы проезда и в статьях с обучающими видео.",
      "alternatives": "Для статичной схемы проезда можно показать лёгкую картинку карты со ссылкой на открытие навигатора.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/iframe"
    },
    {
      "lang": "html",
      "id": "html-dialog-form-method",
      "title": "HTML: закрытие модального окна через <form method=\"dialog\"> без JS",
      "summary": "Встроенный в HTML механизм автоматического закрытия нативного <dialog> при нажатии на кнопку формы внутри него.",
      "code": "<dialog id=\"confirm-dialog\" open>\n  <h3>Удалить черновик?</h3>\n  <p>Это действие нельзя будет отменить.</p>\n\n  <!-- Форма с method=\"dialog\" автоматически закрывает окно и передаёт value нажатой кнопки! -->\n  <form method=\"dialog\" class=\"dialog-actions\">\n    <button value=\"cancel\">Отмена</button>\n    <button value=\"delete\" class=\"btn-danger\">Удалить</button>\n  </form>\n</dialog>",
      "example": "dialog.addEventListener('close', () => console.log(dialog.returnValue)); // \"delete\" или \"cancel\"",
      "points": [
        "Когда внутри <dialog> находится <form method=\"dialog\">, нажатие на любую кнопку submit закрывает модальное окно без перезагрузки страницы и без единой строчки JS!",
        "Значение атрибута value нажатой кнопки автоматически записывается в свойство dialog.returnValue.",
        "Можно также добавить атрибут formmethod=\"dialog\" и formnovalidate отдельной кнопке «Отмена» внутри обычной POST-формы."
      ],
      "tags": [
        "HTML",
        "dialog",
        "method=\"dialog\"",
        "returnValue",
        "модальное окно",
        "подтверждение"
      ],
      "when": "В окнах подтверждения действий («Вы уверены?»), алертах и диалогах выбора.",
      "alternatives": "Для отправки данных на сервер через fetch() перед закрытием используй обычный обработчик submit.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/dialog"
    },
    {
      "lang": "html",
      "id": "html-details-animated",
      "title": "HTML & CSS: плавная анимация раскрытия <details> и ::details-content",
      "summary": "Современная стилизация раскрывающегося блока <details>/<summary> с поворотом иконки и отступами.",
      "code": "<details class=\"custom-spoiler\" open>\n  <summary>\n    <span>Технические требования к серверу</span>\n    <span class=\"spoiler-icon\" aria-hidden=\"true\">▾</span>\n  </summary>\n  <div class=\"spoiler-body\">\n    <p>PHP 8.2+, расширение PDO, поддержка HTTPS и 512 МБ оперативной памяти.</p>\n  </div>\n</details>",
      "example": "details[open] .spoiler-icon {\n  transform: rotate(180deg);\n}",
      "points": [
        "Псевдокласс details[open] позволяет легко повернуть иконку стрелочки на 180 градусов и подсветить рамку при открытом спойлере.",
        "Чтобы убрать стандартный системный треугольник браузера, задай summary { list-style: none; } и summary::-webkit-details-marker { display: none; }.",
        "В новых браузерах псевдоэлемент details::details-content позволяет плавно анимировать высоту раскрытия на чистом CSS!"
      ],
      "tags": [
        "HTML",
        "details",
        "summary",
        "spoiler",
        "open",
        "спойлер",
        "раскрытие",
        "гармошка"
      ],
      "when": "Для скрытия длинных логов, дополнительных параметров фильтра и ответов в FAQ.",
      "alternatives": "Кастомный спойлер на JS оправдан только если требуется сложная синхронизация с внешним стейтом.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/summary"
    },
    {
      "lang": "html",
      "id": "html-meta-charset-viewport",
      "title": "HTML: <meta name=\"viewport\"> и управление масштабом на смартфонах",
      "summary": "Точная настройка ширины области просмотра, запрет нежелательного сдвига клавиатуры и доступный зум.",
      "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, interactive-widget=resizes-content\">",
      "example": "/* Не используй user-scalable=no или maximum-scale=1 — это блокирует зум слабовидящим и снижает балл Lighthouse! */",
      "points": [
        "width=device-width сообщает мобильному браузеру использовать реальную CSS-ширину экрана (например, 390px), а не эмулировать десктопный монитор 980px.",
        "Новый параметр interactive-widget=resizes-content корректно сжимает высоту 100dvh при появлении экранной клавиатуры на Android/iOS!",
        "Никогда не ставь user-scalable=no: чтобы iOS Safari сам не зумил страницу при клике в инпут, просто задай всем <input> размер шрифта не меньше 16px (font-size: 16px)!"
      ],
      "tags": [
        "HTML",
        "viewport",
        "meta",
        "mobile",
        "scale",
        "zoom",
        "клавиатура",
        "мобильная верстка"
      ],
      "when": "В секции <head> абсолютно каждой адаптивной страницы.",
      "alternatives": "Для предотвращения автозума инпутов на iPhone используй font-size: max(16px, 1rem) на полях форм.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Viewport_meta_tag"
    },
    {
      "lang": "html",
      "id": "html-table-colgroup-tfoot",
      "title": "HTML: итоги таблицы <tfoot> и стилизация колонок <colgroup>, <col>",
      "summary": "Семантический подвал таблицы с итоговой суммой и задание ширины или фона целым столбцам через <colgroup>.",
      "code": "<table>\n  <colgroup>\n    <col style=\"width: 60%\">\n    <col style=\"width: 20%\">\n    <col class=\"highlight-col\" style=\"width: 20%\">\n  </colgroup>\n  <thead>\n    <tr><th>Услуга</th><th>Часы</th><th>Сумма</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Разработка фронтенда</td><td>40</td><td>80 000 ₽</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><th colspan=\"2\">Итого к оплате:</th><td><strong>80 000 ₽</strong></td></tr>\n  </tfoot>\n</table>",
      "example": "table { table-layout: fixed; width: 100%; } /* Быстрая отрисовка таблицы по ширине первой строки */",
      "points": [
        "Тег <colgroup> с вложенными <col> позволяет задать width или background сразу всему столбцу таблицы без дублирования класса на каждой ячейке <td>.",
        "<tfoot> размечает строку с итоговыми суммами и при печати многостраничной таблицы автоматически дублируется внизу каждого листа.",
        "CSS-свойство table-layout: fixed ускоряет расчёт широких таблиц: браузер берёт ширину колонок из <colgroup> или первой строки, не пересчитывая все 1000 строк."
      ],
      "tags": [
        "HTML",
        "tfoot",
        "colgroup",
        "col",
        "table-layout",
        "таблица",
        "итого",
        "столбцы"
      ],
      "when": "В счетах на оплату, корзинах товаров, сметах и сравнительных таблицах тарифов.",
      "alternatives": "Если итоговая строка не нужна, секцию <tfoot> можно не указывать.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/colgroup"
    },
    {
      "lang": "html",
      "id": "html-input-range-number-step",
      "title": "HTML: ползунок <input type=\"range\"> с делениями <datalist> и шагом step",
      "summary": "Настройка ползунков громкости, цены или калькулятора кредита с магнитными засечками и выводом значения.",
      "code": "<label for=\"loan-term\">Срок: <output id=\"term-val\">12</output> мес.</label>\n<input\n  type=\"range\"\n  id=\"loan-term\"\n  min=\"3\"\n  max=\"36\"\n  step=\"3\"\n  value=\"12\"\n  list=\"term-ticks\"\n  oninput=\"document.getElementById('term-val').value = this.value\"\n>\n<datalist id=\"term-ticks\">\n  <option value=\"3\" label=\"3м\"></option>\n  <option value=\"12\" label=\"1г\"></option>\n  <option value=\"24\" label=\"2г\"></option>\n  <option value=\"36\" label=\"3г\"></option>\n</datalist>",
      "example": "<input type=\"number\" min=\"0\" max=\"100\" step=\"0.01\"> /* Разрешает ввод дробных копеек! */",
      "points": [
        "По умолчанию у <input type=\"number\"> и <input type=\"range\"> шаг step равен 1 (разрешены только целые числа). Чтобы разрешить ввод копеек или дробных чисел, укажи step=\"0.01\" или step=\"any\"!",
        "Привязка <datalist> через атрибут list к ползунку type=\"range\" рисует нативные риски-деления вдоль дорожки ползунка.",
        "Событие input срабатывает непрерывно в момент перетаскивания ползунка, а событие change — только когда пользователь отпустил палец."
      ],
      "tags": [
        "HTML",
        "range",
        "number",
        "step",
        "min",
        "max",
        "output",
        "ползунок",
        "калькулятор"
      ],
      "when": "В визуальных генераторах CSS, фильтрах цены, калькуляторах доставки и настройках звука.",
      "alternatives": "Для выбора диапазона «от и до» двумя бегунками используют два наложенных друг на друга <input type=\"range\">.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/range"
    },
    {
      "lang": "html",
      "id": "html-svg-sprite-use",
      "title": "HTML & SVG: векторный спрайт иконок (<svg><use href=\"#icon-id\">)</use>",
      "summary": "Переиспользование одних и тех же SVG-иконок на странице без дублирования громоздких координат <path>.",
      "code": "<!-- 1. Скрытый набор символов один раз в начале страницы (или во внешнем sprite.svg) -->\n<svg hidden aria-hidden=\"true\">\n  <symbol id=\"icon-check\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n    <polyline points=\"20 6 9 17 4 12\"></polyline>\n  </symbol>\n</svg>\n\n<!-- 2. Компактная вставка иконки в любом месте с поддержкой currentColor -->\n<svg width=\"18\" height=\"18\" aria-hidden=\"true\">\n  <use href=\"#icon-check\"></use>\n</svg>",
      "example": "<svg width=\"20\" height=\"20\"><use href=\"/assets/icons.svg#search\"></use></svg>",
      "points": [
        "Если одна и та же иконка (галочка, звезда, корзина) повторяется в 50 карточках каталога, вынеси её в <symbol id=\"...\"> и вызывай через <use href=\"#...\"> — HTML-код страницы станет легче в разы!",
        "Используй современный атрибут href=\"#id\" вместо устаревшего xlink:href=\"#id\".",
        "Внутри <symbol> обязательно задавай stroke=\"currentColor\" или fill=\"currentColor\", чтобы каждый экземпляр <use> можно было красить своим CSS-цветом."
      ],
      "tags": [
        "HTML",
        "SVG",
        "symbol",
        "use",
        "sprite",
        "спрайт",
        "иконки",
        "оптимизация"
      ],
      "when": "В каталогах товаров, таблицах и панелях инструментов с повторяющимися иконками.",
      "alternatives": "Для одиночных уникальных иллюстраций проще вставить инлайновый <svg> напрямую.",
      "url": "https://developer.mozilla.org/ru/docs/Web/SVG/Element/use"
    },
    {
      "lang": "html",
      "id": "html-dfn-var-samp-output",
      "title": "HTML: техническая типографика (<dfn>, <var>, <abbr>, <cite>, <q>)",
      "summary": "Семантическая разметка определений терминов, математических переменных и строчных цитат в документации.",
      "code": "<p>\n  <dfn id=\"term-dom\"><abbr title=\"Document Object Model\">DOM</abbr></dfn> — это объектная модель документа,\n  представляющая HTML в виде дерева узлов.\n</p>\n\n<p>\n  Формула расчёта отступа сетки: <var>totalWidth</var> = <var>columns</var> × <var>colWidth</var> + (<var>columns</var> - 1) × <var>gap</var>.\n</p>",
      "example": "<p>Как гласит стандарт <cite>HTML Living Standard</cite>: <q>Семантика важнее визуального вида</q>.</p>",
      "points": [
        "<dfn> отмечает место в тексте, где термин вводится и объясняется впервые (на него можно ссылаться по #id из других статей).",
        "<var> выделяет имена математических переменных и аргументов формул курсивом, отличая их от обычного программного кода <code>.",
        "Тег <q> автоматически оборачивает строчную цитату в правильные типографские кавычки («ёлочки» для lang=\"ru\")!"
      ],
      "tags": [
        "HTML",
        "dfn",
        "var",
        "q",
        "cite",
        "abbr",
        "термин",
        "переменная",
        "кавычки",
        "типографика"
      ],
      "when": "В обучающих статьях, документации API, технических спецификациях и учебниках.",
      "alternatives": "Для программного кода функций и тегов всегда используй <code>, а не <var>.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/dfn"
    },
    {
      "lang": "html",
      "id": "html-map-area-object",
      "title": "HTML: встраивание PDF-документов (<object> / <iframe>) и интерактивные области",
      "summary": "Просмотр PDF-прайсов и инструкций прямо внутри веб-страницы с запасной ссылкой на скачивание.",
      "code": "<object\n  data=\"/files/specification.pdf\"\n  type=\"application/pdf\"\n  width=\"100%\"\n  height=\"600\"\n>\n  <p>\n    Ваш браузер не поддерживает встроенный просмотр PDF.\n    <a href=\"/files/specification.pdf\" download>Скачать PDF-файл (2.4 МБ)</a>\n  </p>\n</object>",
      "example": "<a href=\"/price.pdf\" target=\"_blank\" rel=\"noopener\">Открыть прайс-лист (PDF) ↗</a>",
      "points": [
        "Преимущество тега <object> над <iframe> для PDF в том, что всё содержимое между <object> и </object> автоматически показывается как аккуратная кнопка скачивания на мобильных браузерах, где нет встроенного PDF-ридера!",
        "Обязательно указывай атрибут type=\"application/pdf\" и понятную ссылку с атрибутом download внутри фолбэка.",
        "Для интерактивных планов этажей и карт залов сегодня вместо старого <map><area> используют инлайновый <svg> с кликабельными <path>."
      ],
      "tags": [
        "HTML",
        "object",
        "pdf",
        "embed",
        "map",
        "area",
        "документ",
        "просмотр pdf"
      ],
      "when": "При выводе договоров, сертификатов, презентаций и технических паспортов на странице.",
      "alternatives": "На мобильных экранах удобнее сразу давать прямую кнопку скачивания PDF с указанием размера файла.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/object"
    },
    {
      "lang": "html",
      "id": "html-tabindex-focus-management",
      "title": "HTML: управление фокусом клавиатуры (tabindex=\"0\", tabindex=\"-1\", inert)",
      "summary": "Правила навигации клавишей Tab по странице, программный перевод фокуса на модалку и отключение фона.",
      "code": "<!-- 1. Элемент участвует в обычном порядке нажатия клавиши Tab -->\n<div class=\"custom-card\" tabindex=\"0\" role=\"region\" aria-label=\"Превью\">...</div>\n\n<!-- 2. Элемент НЕ попадает под Tab, но на него можно перевести фокус из JS: el.focus()! -->\n<h2 id=\"modal-heading\" tabindex=\"-1\">Окно настроек</h2>\n\n<!-- 3. Полное отключение интерактивности и фокуса для всей фоновой секции -->\n<main inert>...</main>",
      "example": "/* НИКОГДА не используй положительные значения tabindex=\"1\", tabindex=\"2\" — они ломают порядок обхода страницы! */",
      "points": [
        "tabindex=\"0\" включает нестандартный элемент в естественный порядок обхода клавишей Tab (но для кнопок всегда лучше сразу взять <button>, у которого фокус уже есть из коробки).",
        "tabindex=\"-1\" незаменим для заголовков открывшихся модальных окон или блоков ошибок формы: пользователь не спотыкается о них при обычном Tab, но скрипт может вызвать heading.focus()!",
        "Никогда не пиши tabindex=\"1\", \"2\", \"3\": положительные числа заставляют курсор прыгать по странице в хаотичном порядке."
      ],
      "tags": [
        "HTML",
        "tabindex",
        "focus",
        "inert",
        "клавиатура",
        "фокус",
        "доступность",
        "tab"
      ],
      "when": "При управлении фокусом в модальных окнах, табах (roving tabindex) и пропускающих ссылках.",
      "alternatives": "Нативный <dialog> при вызове showModal() сам делает остальную страницу инертной (inert).",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/tabindex"
    },
    {
      "lang": "html",
      "id": "html-form-attributes-novalidate",
      "title": "HTML: атрибуты тега <form> (action, method, enctype=\"multipart/form-data\", novalidate)",
      "summary": "Конфигурация отправки формы на сервер, обязательный enctype для загрузки файлов и привязка кнопки вне формы.",
      "code": "<!-- При наличии <input type=\"file\"> атрибут enctype=\"multipart/form-data\" ОБЯЗАТЕЛЕН! -->\n<form id=\"checkout-form\" action=\"/api/orders\" method=\"POST\" enctype=\"multipart/form-data\">\n  <input type=\"text\" name=\"customer\" required>\n  <input type=\"file\" name=\"receipt\">\n</form>\n\n<!-- Кнопка в шапке или подвале может отправлять форму по её id через атрибут form! -->\n<button type=\"submit\" form=\"checkout-form\">Оформить заказ</button>",
      "example": "<form novalidate> /* Отключает системные тултипы браузера для показа собственной кастомной валидации */",
      "points": [
        "Частая ошибка: если в форме есть <input type=\"file\">, но на самом теге <form> забыли написать enctype=\"multipart/form-data\", массив $_FILES в PHP придёт совершенно пустым!",
        "Атрибут form=\"checkout-form\" на кнопке <button> или <input> позволяет вынести кнопку «Сохранить» в липкую шапку или футер модалки за пределы самого тега <form>!",
        "Метод GET подставляет поля в адресную строку (?q=flex&sort=az) и используется для поиска/фильтров, а метод POST передаёт данные в теле запроса для изменения/сохранения."
      ],
      "tags": [
        "HTML",
        "form",
        "action",
        "method",
        "enctype",
        "multipart/form-data",
        "novalidate",
        "отправка формы"
      ],
      "when": "Во всех формах поиска (GET), авторизации (POST) и загрузки файлов (multipart/form-data).",
      "alternatives": "При отправке через JS new FormData(form) браузер автоматически кодирует файлы как multipart/form-data.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/form"
    },
    {
      "lang": "html",
      "id": "html-form-input-search",
      "title": "HTML: поле поиска <input type=\"search\"> и очистка крестиком",
      "summary": "Специализированное текстовое поле для поисковых строк с системной кнопкой быстрой очистки и клавишей Enter.",
      "code": "<search>\n  <form role=\"search\" action=\"/search\">\n    <label for=\"site-q\" class=\"sr-only\">Поиск по справочнику</label>\n    <input\n      type=\"search\"\n      id=\"site-q\"\n      name=\"q\"\n      placeholder=\"Например: flexbox, dialog, fetch...\"\n      autocomplete=\"off\"\n      spellcheck=\"false\"\n    >\n  </form>\n</search>",
      "example": "input[type=\"search\"]::-webkit-search-cancel-button { cursor: pointer; }",
      "points": [
        "В отличие от обычного type=\"text\", поле type=\"search\" на мобильных клавиатурах меняет кнопку «Ввод» на синюю кнопку с лупой «Найти».",
        "В браузерах на базе Chromium и Safari внутри поля автоматически появляется крестик сброса введённого текста.",
        "Событие input срабатывает как при печати с клавиатуры, так и при нажатии на встроенный крестик очистки!"
      ],
      "tags": [
        "HTML",
        "input",
        "search",
        "поиск",
        "крестик",
        "форма"
      ],
      "when": "Для главной строки поиска в шапке сайта, фильтрации таблиц и командных палитр.",
      "alternatives": "Если рисуешь собственную кастомную кнопку очистки <button class=\"clear\">, скройте системный крестик через ::-webkit-search-cancel-button { display: none; }.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/search"
    },
    {
      "lang": "html",
      "id": "html-input-checkbox-indeterminate",
      "title": "HTML & JS: чекбокс «Выбрать все» и третье состояние (indeterminate)",
      "summary": "Реализация главного чекбокса таблицы с состоянием «выбрана часть строк» (тире внутри квадратика).",
      "code": "<label>\n  <input type=\"checkbox\" id=\"select-all\"> Выбрать все элементы\n</label>\n\n<script>\nconst master = document.getElementById('select-all');\n// Третье визуальное состояние чекбокса (частичный выбор — задаётся только через JS!)\nmaster.indeterminate = true;\n</script>",
      "example": "input:indeterminate {\n  accent-color: #38bdf8;\n}",
      "points": [
        "У нативного <input type=\"checkbox\"> кроме checked = true/false есть третье визуальное состояние: checkbox.indeterminate = true (отображается как горизонтальное тире внутри чекбокса)!",
        "Это состояние задаётся только через JavaScript, когда в группе выбран хотя бы один дочерний чекбокс, но не все.",
        "В CSS такое состояние можно стилизовать через псевдокласс input:indeterminate."
      ],
      "tags": [
        "HTML",
        "checkbox",
        "indeterminate",
        "checked",
        "выбрать все",
        "чекбокс",
        "таблица"
      ],
      "when": "В таблицах админ-панелей, корзине товаров и древовидных фильтрах категорий.",
      "alternatives": "Не нужно рисовать кастомные SVG-иконки для состояния частичного выбора — браузер рисует его нативно.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/checkbox"
    },
    {
      "lang": "html",
      "id": "html-ol-attributes",
      "title": "HTML: атрибуты нумерованного списка <ol> (start, reversed, type) и <li value>",
      "summary": "Продолжение нумерации списка после прерывания картинкой и обратный отсчёт рейтингов Топ-10.",
      "code": "<!-- Обратный отсчёт рейтинга: 3, 2, 1 -->\n<ol reversed start=\"3\">\n  <li>Третье место</li>\n  <li>Второе место</li>\n  <li>Первое место</li>\n</ol>\n\n<!-- Римская или буквенная нумерация (type=\"I\" / \"A\" / \"a\") -->\n<ol type=\"I\">\n  <li>Глава первая</li>\n  <li value=\"5\">Глава пятая (перескок номера)</li>\n</ol>",
      "example": "<ol start=\"11\"> /* Продолжить список с 11-го пункта после врезки кода */",
      "points": [
        "Если между пунктами инструкции вставлена широкая иллюстрация или таблица, второй список <ol start=\"4\"> аккуратно продолжит счёт с 4-го шага!",
        "Атрибут reversed автоматически ведёт обратный отсчёт номеров сверху вниз (10, 9, 8... 1) для хит-парадов и рейтингов.",
        "Атрибут value=\"10\" на отдельном теге <li> позволяет принудительно задать номер конкретному пункту."
      ],
      "tags": [
        "HTML",
        "ol",
        "li",
        "start",
        "reversed",
        "type",
        "нумерованный список",
        "рейтинг"
      ],
      "when": "В пошаговых руководствах, юридических договорах и рейтингах.",
      "alternatives": "Для сложной вложенной нумерации вида 1.1, 1.2 используй CSS-счётчики counters(item, \".\").",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/ol"
    },
    {
      "lang": "html",
      "id": "html-audio-video-track-vtt",
      "title": "HTML: субтитры и таймкоды глав для видео (<track kind=\"captions\" src=\"subs.vtt\">)",
      "summary": "Подключение файла субтитров в формате WebVTT к видеоплееру для доступности и переключения языков.",
      "code": "<video controls src=\"/video/lesson.mp4\">\n  <track kind=\"subtitles\" src=\"/video/ru.vtt\" srclang=\"ru\" label=\"Русский\" default>\n  <track kind=\"subtitles\" src=\"/video/en.vtt\" srclang=\"en\" label=\"English\">\n  <track kind=\"chapters\" src=\"/video/chapters.vtt\" srclang=\"ru\">\n</video>\n\n<!-- Пример содержимого текстового файла ru.vtt:\nWEBVTT\n\n00:00:01.000 --> 00:00:05.000\nДобро пожаловать в интерактивный справочник DevShelf!\n-->",
      "example": "video::cue {\n  background: rgba(9, 13, 20, 0.85);\n  color: #f8fafc;\n}",
      "points": [
        "Формат WebVTT (.vtt) — это простой текстовый файл, начинающийся со слова WEBVTT и содержащий таймкоды и фразы.",
        "Псевдоэлемент video::cue в CSS позволяет настроить шрифт, цвет и полупрозрачную подложку субтитров прямо поверх видео!",
        "Атрибут default включает выбранную дорожку субтитров автоматически при запуске плеера."
      ],
      "tags": [
        "HTML",
        "track",
        "vtt",
        "webvtt",
        "subtitles",
        "captions",
        "cue",
        "субтитры",
        "видео"
      ],
      "when": "Во всех обучающих видеороликах, вебинарах и презентациях продуктов.",
      "alternatives": "Вшитые в сам видеофайл (hardcoded) субтитры нельзя отключить, скопировать или перевести.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/track"
    },
    {
      "lang": "html",
      "id": "html-aria-roles-landmarks",
      "title": "HTML & ARIA: ориентиры страницы (Landmarks) и роли компонентов (role)",
      "summary": "Карта соответствия нативных HTML5-тегов и ролей WAI-ARIA для быстрой навигации незрячих пользователей.",
      "code": "<!-- Нативные теги уже имеют встроенные ARIA-роли по умолчанию: -->\n<header>  <!-- role=\"banner\" --> </header>\n<nav>     <!-- role=\"navigation\" --> </nav>\n<main>    <!-- role=\"main\" --> </main>\n<aside>   <!-- role=\"complementary\" --> </aside>\n<footer>  <!-- role=\"contentinfo\" --> </footer>\n\n<!-- Явные роли для специализированных динамических виджетов: -->\n<div role=\"alert\">Ошибка соединения с сервером!</div>\n<div role=\"tablist\" aria-label=\"Режимы редактора\">...</div>",
      "example": "/* Не пиши <nav role=\"navigation\"> — это избыточное дублирование! */",
      "points": [
        "Скринридеры позволяют пользователю одним нажатием горячей клавиши перемещаться по ориентирам страницы (шапка -> поиск -> меню -> главный контент -> подвал).",
        "Не дублируй встроенную роль на нативном теге (не нужно писать <main role=\"main\"> или <button role=\"button\">).",
        "Роль role=\"alert\" предназначена для срочных ошибок: она немедленно озвучивается скринридером при появлении в DOM."
      ],
      "tags": [
        "HTML",
        "ARIA",
        "role",
        "landmarks",
        "alert",
        "tablist",
        "banner",
        "доступность"
      ],
      "when": "При проектировании доступных веб-приложений, табов, уведомлений и диалогов.",
      "alternatives": "Всегда отдавай приоритет семантическим тегам HTML5 перед ручным назначением role на <div>.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles"
    },
    {
      "lang": "html",
      "id": "html-input-color-date-time",
      "title": "HTML: нативные пикеры цвета и времени (type=\"color\", \"date\", \"time\", \"datetime-local\")",
      "summary": "Системные виджеты выбора цвета, календарной даты и времени с ограничением доступного диапазона min и max.",
      "code": "<label>\n  Акцентный цвет:\n  <input type=\"color\" name=\"accent\" value=\"#38bdf8\">\n</label>\n\n<label>\n  Дата бронирования (только 2026 год):\n  <input type=\"date\" name=\"booking_date\" min=\"2026-01-01\" max=\"2026-12-31\" required>\n</label>\n\n<label>\n  Время встречи (с 09:00 до 19:00 с шагом 15 минут):\n  <input type=\"time\" name=\"slot\" min=\"09:00\" max=\"19:00\" step=\"900\">\n</label>",
      "example": "/* Цвет иконки календаря внутри инпута автоматически следует за свойством color-scheme: dark! */",
      "points": [
        "Значение (value, min, max) у <input type=\"date\"> в коде и при отправке на сервер ВСЕГДА имеет строгий формат ГГГГ-ММ-ДД (\"2026-09-15\"), независимо от того, как браузер отображает дату на экране пользователя (15.09.2026)!",
        "У <input type=\"time\"> атрибут step задаётся в секундах: step=\"900\" делает шаг выбора равным 15 минутам (900 секунд).",
        "У <input type=\"color\"> значение всегда представляет собой 7-символьный HEX-код в нижнем регистре (\"#38bdf8\")."
      ],
      "tags": [
        "HTML",
        "color",
        "date",
        "time",
        "datetime-local",
        "month",
        "week",
        "календарь",
        "палитра",
        "дата"
      ],
      "when": "В формах бронирования, фильтрах по датам, редакторах тем и генераторах стилей.",
      "alternatives": "Если у иконки календаря в тёмной теме остался чёрный цвет, убедись, что на :root или самом инпуте задано color-scheme: dark.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/date"
    },
    {
      "lang": "html",
      "id": "html-meter-vs-progress",
      "title": "HTML: семантика <mark>, <ins>, <del>, <kbd>, <samp> и <output> в интерфейсах",
      "summary": "Быстрая шпаргалка по строчным семантическим тегам для результатов поиска, диффов кода и горячих клавиш.",
      "code": "<!-- Подсветка найденного слова в результатах поиска -->\n<p>По запросу «<mark>grid</mark>» найдено <output>18</output> справочников.</p>\n\n<!-- Отображение изменений в истории версий (Diff) -->\n<p>Поддержка: <del>IE 11</del> <ins>Все современные браузеры</ins></p>\n\n<!-- Горячая клавиша в меню -->\n<span class=\"shortcut\"><kbd>Ctrl</kbd> + <kbd>S</kbd></span>",
      "example": "mark { background: rgba(56, 189, 248, 0.25); color: inherit; border-radius: 3px; padding: 0 3px; }",
      "points": [
        "По умолчанию браузер красит <mark> в ярко-жёлтый цвет маркера. В тёмной теме обязательно переопредели его на мягкий полупрозрачный акцент (rgba(56, 189, 248, 0.22)).",
        "Пара <del> (удалено) и <ins> (добавлено) идеально подходит как для старых/новых цен, так и для показа правок текста или чейнджлогов.",
        "Тег <output> семантически связывает результат расчёта с ползунками и инпутами формы."
      ],
      "tags": [
        "HTML",
        "mark",
        "output",
        "del",
        "ins",
        "kbd",
        "подсветка поиска",
        "дифф",
        "горячие клавиши"
      ],
      "when": "В выдаче живого поиска, калькуляторах, документации и истории изменений.",
      "alternatives": "Обычный <span class=\"highlight\"> не сообщает скринридеру о смысловом выделении совпадения.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/mark"
    },
    {
      "lang": "html",
      "id": "html-svg-primitives",
      "title": "SVG: базовые фигуры (<rect>, <circle>, <line>, <polyline>, <path>)",
      "summary": "Рисование аккуратных векторных иконок, стрелок, чекбоксов и графиков прямо в HTML-коде без графических редакторов.",
      "code": "<svg width=\"120\" height=\"40\" viewBox=\"0 0 120 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Прямоугольник со скруглёнными углами rx=\"6\" -->\n  <rect x=\"2\" y=\"2\" width=\"36\" height=\"36\" rx=\"6\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <!-- Круг по центру (cx, cy) и радиусу r -->\n  <circle cx=\"60\" cy=\"20\" r=\"16\" stroke=\"#818cf8\" stroke-width=\"2\"/>\n  <!-- Ломаная линия галочки (polyline) -->\n  <polyline points=\"90 20 98 28 114 12\" stroke=\"#10b981\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>",
      "example": "stroke-dasharray: 100; stroke-dashoffset: 25; /* Заполнение кругового прогресс-бара на 75%! */",
      "points": [
        "Атрибуты stroke-linecap=\"round\" и stroke-linejoin=\"round\" скругляют кончики и углы векторных линий, делая иконки дружелюбными и аккуратными (как в Lucide / Feather Icons).",
        "У прямоугольника <rect> скругление углов задаётся атрибутом rx=\"8\".",
        "Добавив кругу <circle> атрибут pathLength=\"100\", можно задавать процент заполнения кольца напрямую через stroke-dasharray=\"75 100\" без вычисления длины окружности 2πR!"
      ],
      "tags": [
        "HTML",
        "SVG",
        "rect",
        "circle",
        "line",
        "polyline",
        "path",
        "pathLength",
        "векторные фигуры"
      ],
      "when": "При создании иконок интерфейса, круговых индикаторов прогресса и мини-спарклайнов.",
      "alternatives": "Для растровых фотографий используй WebP/AVIF, а для всех иконок и схем — только SVG.",
      "url": "https://developer.mozilla.org/ru/docs/Web/SVG/Tutorial/Basic_Shapes"
    }
  ],
  "css": [
    {
      "id": "css-border-radius",
      "lang": "css",
      "title": "CSS: скругление углов (border-radius)",
      "summary": "Свойство для скругления одного или всех четырёх углов элемента: от мягких кнопок и карточек до идеальных кругов, капсул (pill) и органических форм.",
      "tags": [
        "css",
        "border-radius",
        "скругление",
        "углы",
        "круг",
        "pill",
        "форма"
      ],
      "when": "Для всех современных UI-компонентов: карточек (8px–16px), кнопок (6px–12px), тегов-капсул (9999px) и круглых аватарок (50%).",
      "alternatives": "Для сложных многоугольников и срезанных углов используйте свойство clip-path: polygon(...).",
      "points": [
        "Одно значение (border-radius: 12px) задаёт одинаковое скругление для всех 4 углов.",
        "Четыре значения (border-radius: 16px 4px 16px 4px) задают углы по часовой стрелке: верхний-левый, верхний-правый, нижний-правый, нижний-левый.",
        "Значение 50% превращает квадратный блок (с aspect-ratio: 1) в идеальный круг.",
        "Значение 9999px (или 100vmax) создаёт форму капсулы (pill) независимо от ширины и высоты кнопки.",
        "Вложенные карточки: радиус внутреннего блока должен быть равен радиусу внешнего минус padding (r_inner = r_outer - padding)."
      ],
      "code": "/* 1. Стандартная карточка */\n.card {\n  border-radius: 14px;\n  border: 1px solid #334155;\n  padding: 16px;\n  background: #1e293b;\n  color: #f8fafc;\n}\n\n/* 2. Кнопка-капсула (Pill) */\n.pill-btn {\n  border-radius: 9999px;\n  padding: 8px 20px;\n  background: #38bdf8;\n  color: #090d16;\n  font-weight: 700;\n  border: none;\n}\n\n/* 3. Круглая аватарка */\n.avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #6366f1, #ec4899);\n  display: inline-grid;\n  place-items: center;\n  font-weight: 800;\n}\n\n/* 4. Асимметричная форма (4 угла по часовой стрелке) */\n.organic-badge {\n  border-radius: 24px 4px 24px 4px;\n  padding: 10px 18px;\n  background: rgba(16, 185, 129, 0.2);\n  border: 1px solid #10b981;\n}",
      "example": "<div style=\"display:flex;gap:14px;flex-wrap:wrap;align-items:center;\">\n  <div class=\"card\">Карточка (14px)</div>\n  <button class=\"pill-btn\">Капсула (9999px)</button>\n  <div class=\"avatar\">DS</div>\n  <div class=\"organic-badge\">24px 4px 24px 4px</div>\n</div>"
    },
    {
      "id": "css-border",
      "lang": "css",
      "title": "CSS: границы элементов (border, border-style, border-color)",
      "summary": "Универсальное свойство для задания толщины, стиля (solid, dashed, dotted) и цвета рамки вокруг элемента или его отдельных сторон.",
      "tags": [
        "css",
        "border",
        "граница",
        "рамка",
        "border-width",
        "border-color",
        "border-style",
        "dashed"
      ],
      "when": "Для визуального разделения карточек, полей ввода (input), таблиц, цитат и зон загрузки файлов (dashed).",
      "alternatives": "Используйте outline для подсветки фокуса (не влияет на размеры блока) или box-shadow: 0 0 0 1px для субпиксельных рамок.",
      "points": [
        "Краткая запись: border: 1px solid rgba(148, 163, 184, 0.2) (толщина, стиль, цвет).",
        "Без указания border-style (например, solid или dashed) рамка не отобразится, так как по умолчанию стиль равен none.",
        "Можно задавать отдельные стороны: border-top, border-bottom, border-left, border-right или логические свойства border-inline, border-block.",
        "При box-sizing: border-box толщина border включается в общую ширину и высоту элемента и не ломает сетку."
      ],
      "code": "/* Тонкая современная рамка карточки */\n.box-solid {\n  border: 1px solid rgba(56, 189, 248, 0.45);\n  border-radius: 10px;\n  padding: 14px;\n  background: #131c2e;\n}\n\n/* Пунктирная зона для Drag-and-Drop загрузки */\n.box-dashed {\n  border: 2px dashed #6366f1;\n  border-radius: 10px;\n  padding: 14px;\n  background: rgba(99, 102, 241, 0.08);\n}\n\n/* Акцентная полоса только снизу */\n.box-bottom {\n  border-bottom: 3px solid #10b981;\n  padding: 12px;\n  background: #1e293b;\n}",
      "example": "<div style=\"display:grid;gap:12px;\">\n  <div class=\"box-solid\">1px solid — стандартная рамка интерфейса</div>\n  <div class=\"box-dashed\">2px dashed — пунктирная область для файлов</div>\n  <div class=\"box-bottom\">border-bottom: 3px solid — нижний акцент</div>\n</div>"
    },
    {
      "id": "css-outline",
      "lang": "css",
      "title": "CSS: внешний контур фокуса (outline и outline-offset)",
      "summary": "Внешняя обводка элемента, которая рисуется поверх соседних блоков, не занимает места в потоке (не сдвигает верстку) и отвечает за доступность клавиатурного фокуса.",
      "tags": [
        "css",
        "outline",
        "outline-offset",
        "focus-visible",
        "фокус",
        "обводка"
      ],
      "when": "Для стилизации состояния :focus-visible у кнопок, ссылок и полей ввода без изменения их геометрии.",
      "alternatives": "Никогда не пишите outline: none без замены на кастомный :focus-visible, иначе пользователи с клавиатурой потеряют навигацию.",
      "points": [
        "В отличие от border, свойство outline не влияет на размеры элемента и никогда не вызывает сдвиг соседних элементов.",
        "Свойство outline-offset позволяет отодвинуть контур от края кнопки (например, на 2px–3px) или сдвинуть внутрь (отрицательное значение).",
        "В современных браузерах outline автоматически повторяет скругление border-radius элемента."
      ],
      "code": ".focus-demo-btn {\n  padding: 10px 18px;\n  border-radius: 8px;\n  background: #38bdf8;\n  color: #090d16;\n  font-weight: 700;\n  border: none;\n  outline: 2px solid #38bdf8;\n  outline-offset: 4px;\n}",
      "example": "<div style=\"padding:16px;\">\n  <button class=\"focus-demo-btn\">Кнопка с outline-offset: 4px</button>\n</div>"
    },
    {
      "id": "css-box-shadow",
      "lang": "css",
      "title": "CSS: многослойные тени и свечение (box-shadow)",
      "summary": "Добавление внешних и внутренних (inset) теней к блокам для создания глубины, парящих модальных окон, неоморфизма и тонких обводок.",
      "tags": [
        "css",
        "box-shadow",
        "тень",
        "inset",
        "свечение",
        "elevation"
      ],
      "when": "Для выделения модальных окон, выпадающих списков (dropdown), карточек при наведении и кнопок.",
      "alternatives": "Для теней вокруг прозрачных PNG/SVG-иконок используйте filter: drop-shadow(...), так как box-shadow рисует тень по прямоугольной рамке.",
      "points": [
        "Синтаксис: смещение-X, смещение-Y, размытие (blur), растяжение (spread), цвет.",
        "Отрицательный spread (например, -8px) делает тень уже самого блока, создавая естественный объём снизу.",
        "Через запятую можно комбинировать несколько слоёв теней для реалистичного рассеянного света."
      ],
      "code": ".elevated-card {\n  padding: 20px;\n  border-radius: 14px;\n  background: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow:\n    0 20px 25px -5px rgba(0, 0, 0, 0.5),\n    0 8px 10px -6px rgba(0, 0, 0, 0.4),\n    0 0 24px rgba(56, 189, 248, 0.18);\n}"
    },
    {
      "id": "css-margin-padding",
      "lang": "css",
      "title": "CSS: внешние и внутренние отступы (margin и padding)",
      "summary": "Фундаментальные свойства управления пространством: padding задаёт воздух внутри рамки блока, а margin — расстояние между соседними блоками.",
      "tags": [
        "css",
        "margin",
        "padding",
        "отступы",
        "margin-inline",
        "padding-inline"
      ],
      "when": "Во всех без исключения компонентах: padding для внутреннего комфорта карточки/кнопки, margin: 0 auto для центрирования контейнера.",
      "alternatives": "Для отступов между элементами внутри Flexbox и Grid предпочтительнее использовать свойство gap вместо margin у дочерних элементов.",
      "points": [
        "padding увеличивает кликабельную зону кнопок и ссылок и закрашивается фоном элемента (background).",
        "margin создаёт прозрачный буфер снаружи рамки border; вертикальные margin соседних блоков могут схлопываться.",
        "Логические свойства padding-inline (слева/справа) и padding-block (сверху/снизу) удобнее классической записи из 4 чисел."
      ],
      "code": ".container-card {\n  max-width: 420px;\n  margin-inline: auto; /* Центрирование по горизонтали */\n  padding: 20px 24px;  /* 20px сверху/снизу, 24px слева/справа */\n  background: #162032;\n  border: 1px solid #334155;\n  border-radius: 12px;\n}"
    },
    {
      "lang": "css",
      "id": "css-box-model",
      "title": "CSS: блочная модель и box-sizing: border-box",
      "summary": "Фундамент верстки: расчет ширины и высоты элементов, внутренние (padding) и внешние (margin) отступы, схлопывание отступов.",
      "code": "/* Универсальный сброс для всех проектов */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 320px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  margin-bottom: 16px;\n  /* При border-box реальная ширина блока останется ровно 320px! */\n}",
      "example": "margin: 0 auto; /* Горизонтальное центрирование блока с фиксированной шириной */",
      "points": [
        "При стандартном content-box padding и border прибавляются к width, ломая сетку (320 + 48 + 2 = 370px).",
        "При border-box размеры padding и border включаются внутрь заданной ширины и высоты.",
        "Схлопывание внешних отступов (margin collapsing) происходит у соседних вертикальных блоков: побеждает больший отступ."
      ],
      "tags": [
        "CSS",
        "box-sizing",
        "border-box",
        "блочная модель",
        "padding",
        "margin",
        "отступы",
        "каркас"
      ],
      "when": "Базовое правило для первой строки любого CSS-файла в современной веб-разработке.",
      "alternatives": "Старый режим content-box используется только в специфических legacy-проектах.",
      "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics/Box_model"
    },
    {
      "lang": "css",
      "id": "css-flexbox-container",
      "title": "CSS: Flexbox контейнер (направление и отступы gap)",
      "summary": "Одномерная система раскладки по главной и поперечной осям. Управление направлением элементов и интервалами.",
      "code": ".flex-container {\n  display: flex;\n  flex-direction: row; /* row | row-reverse | column | column-reverse */\n  flex-wrap: wrap;     /* nowrap | wrap | wrap-reverse */\n  gap: 16px;           /* Расстояние между колонками и рядами */\n}\n\n/* Колончатая раскладка для мобильных */\n@media (max-width: 768px) {\n  .flex-container {\n    flex-direction: column;\n    gap: 12px;\n  }\n}",
      "example": "display: inline-flex; /* Ведет себя как строчный элемент снаружи и flex внутри */",
      "points": [
        "Свойство gap заменяет костыли со сложными отрицательными margin и псевдоклассами :last-child.",
        "flex-direction: column меняет главную ось на вертикальную (justify-content теперь управляет высотой).",
        "flex-wrap: wrap разрешает элементам переноситься на новую строку при нехватке места."
      ],
      "tags": [
        "CSS",
        "flexbox",
        "flex",
        "flex-direction",
        "flex-wrap",
        "gap",
        "раскладка",
        "флекс"
      ],
      "when": "Идеально для навигационных панелей, кнопочных групп, шапок сайтов и однострочных панелей.",
      "alternatives": "Для двумерных табличных сеток (строки + столбцы одновременно) предпочтительнее CSS Grid.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox"
    },
    {
      "lang": "css",
      "id": "css-flexbox-alignment",
      "title": "CSS: выравнивание во Flexbox (justify-content, align-items)",
      "summary": "Выравнивание элементов по главной оси (горизонталь) и поперечной оси (вертикаль), центрирование элементов.",
      "code": ".parent {\n  display: flex;\n  /* Выравнивание по главной оси (X при row) */\n  justify-content: space-between; \n  /* center | flex-start | flex-end | space-between | space-around | space-evenly */\n\n  /* Выравнивание по поперечной оси (Y при row) */\n  align-items: center; \n  /* stretch | center | flex-start | flex-end | baseline */\n}\n\n/* Идеальное центрирование блока по центру экрана */\n.hero-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}",
      "example": "margin-left: auto; /* Во Flexbox прижимает конкретный элемент к правому краю! */",
      "points": [
        "Знаменитая задача «центрирование по вертикали и горизонтали» решается тремя строками: display: flex; justify-content: center; align-items: center.",
        "Во Flexbox правило margin-left: auto или margin-top: auto поглощает всё свободное пространство с соответствующей стороны.",
        "align-items: stretch по умолчанию растягивает дочерние элементы на всю высоту самого высокого соседа."
      ],
      "tags": [
        "CSS",
        "flexbox",
        "justify-content",
        "align-items",
        "центрирование",
        "выравнивание",
        "флекс"
      ],
      "when": "Для центрирования модальных окон, распределения пунктов шапки (логотип слева, профиль справа).",
      "alternatives": "Старые методы центрирования через position: absolute; transform: translate(-50%, -50%) больше не нужны.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container"
    },
    {
      "lang": "css",
      "id": "css-flexbox-items",
      "title": "CSS: элементы Flexbox (flex-grow, flex-shrink, flex-basis)",
      "summary": "Управление тем, как конкретные дочерние элементы сжимаются, растягиваются и делят доступное место.",
      "code": ".flex-item {\n  /* Сокращенная запись: grow | shrink | basis */\n  flex: 1 1 auto;\n}\n\n/* Сайдбар фиксированной ширины и эластичный контент */\n.sidebar {\n  flex: 0 0 280px; /* Не растет, не сжимается, ровно 280px */\n}\n\n.content {\n  flex: 1 1 0;     /* Забирает ВСЁ оставшееся свободное пространство */\n  min-width: 0;    /* Критично для предотвращения выпадания текста при flex! */\n}",
      "example": "align-self: flex-end; /* Переопределяет выравнивание для одного конкретного элемента */",
      "points": [
        "flex: 1 (эквивалент 1 1 0) распределяет место поровну между соседями.",
        "min-width: 0 на flex-элементе предотвращает распирание контейнера длинными словами или блоками кода с overflow: auto.",
        "Свойство order позволяет визуально менять порядок блоков без изменения HTML-разметки."
      ],
      "tags": [
        "CSS",
        "flex",
        "flex-grow",
        "flex-shrink",
        "flex-basis",
        "min-width",
        "order",
        "align-self"
      ],
      "when": "Для верстки двухколоночных макетов «сайдбар + контент», адаптивных карточек и гибких тулбаров.",
      "alternatives": "Указание жестких width в процентах без flex-basis часто приводит к переносу и переполнению.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/flex"
    },
    {
      "lang": "css",
      "id": "css-grid-container",
      "title": "CSS Grid: двумерная сетка (колонки fr, repeat, minmax)",
      "summary": "Мощнейшая система двумерных сеток. Управление колонками, строками и пропорциями с помощью единицы fr.",
      "code": ".grid-layout {\n  display: grid;\n  /* 3 колонки: сайдбар 260px, контент берет 2 доли, правая колонка 1 долю */\n  grid-template-columns: 260px 2fr 1fr;\n  grid-template-rows: auto 1fr auto;\n  gap: 24px;\n  min-height: 100vh;\n}\n\n/* Компактная запись повторения: 4 равные колонки */\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}",
      "example": "display: inline-grid;",
      "points": [
        "Единица fr (fraction) делит свободное место пропорционально заданным долям.",
        "repeat(count, track) сокращает повторение колонок: repeat(12, 1fr) создаст 12-колоночную классическую сетку.",
        "gap задает интервал между ячейками без краевых отступов у первой и последней колонки."
      ],
      "tags": [
        "CSS",
        "grid",
        "css grid",
        "сетка",
        "grid-template-columns",
        "fr",
        "repeat",
        "gap"
      ],
      "when": "Для дашбордов, сложных страниц порталов, галерей товаров и каталогов.",
      "alternatives": "Flexbox требует вложенных оберток row/col, тогда как Grid описывает всю сетку в одном месте.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout"
    },
    {
      "lang": "css",
      "id": "css-grid-autofit",
      "title": "CSS Grid: адаптивная сетка без медиа-запросов (auto-fit & minmax)",
      "summary": "Золотой стандарт адаптивности: карточки автоматически перестраиваются из 4 колонок в 3, 2 и 1 при сужении экрана.",
      "code": ".responsive-grid {\n  display: grid;\n  /* Колонки не меньше 280px, при наличии места делят пространство поровну */\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n\n/* Разница между auto-fill и auto-fit:\n   - auto-fit: растягивает карточки на всю ширину, если их мало.\n   - auto-fill: оставляет пустые пустые места для будущих колонок. */",
      "example": "grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));",
      "points": [
        "Позволяет избавиться от десятков @media экранов: браузер сам вычисляет оптимальное количество колонок.",
        "Конструкция min(100%, 280px) внутри minmax гарантирует, что на экранах уже 280px не появится горизонтальный скролл.",
        "Отлично сочетается с CSS-свойством subgrid для выравнивания заголовков и кнопок внутри карточек."
      ],
      "tags": [
        "CSS",
        "grid",
        "auto-fit",
        "auto-fill",
        "minmax",
        "адаптивность",
        "карточки",
        "каталог"
      ],
      "when": "Основное решение для сетки карточек товаров, статей блога и портфолио.",
      "alternatives": "Ручные @media (max-width: 1200px), @media (max-width: 900px), @media (max-width: 600px).",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout"
    },
    {
      "lang": "css",
      "id": "css-container-queries",
      "title": "CSS: контейнерные запросы (@container)",
      "summary": "Стилизация компонентов в зависимости от ширины их родительского контейнера, а не всего экрана браузера.",
      "code": "/* 1. Объявляем родителя контекстом контейнера */\n.card-wrapper {\n  container-type: inline-size;\n  container-name: card;\n}\n\n/* 2. Стили по умолчанию (для узких колонок / мобильных) */\n.user-card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n/* 3. Когда родитель шире 500px — компонент перестраивается в горизонтальный ряд! */\n@container card (min-width: 500px) {\n  .user-card {\n    flex-direction: row;\n    align-items: center;\n  }\n}",
      "example": "@container (min-width: 400px) and (max-width: 700px) { ... }",
      "points": [
        "Решает главную проблему медиа-запросов: карточка выглядит одинаково адаптивно и в сайдбаре, и в центре страницы.",
        "container-type: inline-size отслеживает ширину по горизонтальной оси.",
        "Поддерживается во всех современных браузерах (Chrome 105+, Safari 16+, Firefox 110+)."
      ],
      "tags": [
        "CSS",
        "container queries",
        "@container",
        "container-type",
        "компоненты",
        "адаптивность"
      ],
      "when": "Для создания переиспользуемых UI-виджетов, виджетов сайдбара и независимых дизайн-систем.",
      "alternatives": "Медиа-запросы @media реагируют только на окно браузера, заставляя писать классы .card--sidebar.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_containment/Container_queries"
    },
    {
      "lang": "css",
      "id": "css-has-selector",
      "title": "CSS: родительский селектор :has()",
      "summary": "Стилизация элемента на основе того, какие потомки находятся внутри него или в каком они состоянии.",
      "code": "/* Стилизовать карточку, только если внутри есть изображение */\n.card:has(img) {\n  grid-template-columns: 200px 1fr;\n}\n\n/* Стилизовать форму, если хоть одно поле невалидно */\nform:has(input:invalid) {\n  border-left: 2px solid #ef4444;\n}\n\n/* Подсветить метку label, когда связанный чекбокс отмечен */\nlabel:has(input:checked) {\n  color: #38bdf8;\n  font-weight: 600;\n}\n\n/* Заблокировать скролл страницы при открытом нативном диалоге */\nhtml:has(dialog[open]) {\n  overflow: hidden;\n}",
      "example": "header:has(.nav-open) { backdrop-filter: blur(8px); }",
      "points": [
        ":has() долгое время называли «святым граалем CSS» — возможность влиять на предков без JavaScript.",
        "Позволяет полностью избавиться от JS-обработчиков добавления классов вроде \"has-error\", \"is-checked\".",
        "Поддерживается во всех современных браузерах с 2023 года."
      ],
      "tags": [
        "CSS",
        ":has",
        "селектор предка",
        "родительский селектор",
        "псевдокласс",
        "селекторы"
      ],
      "when": "Для стилизации форм, состояний карточек, навигационных переключателей.",
      "alternatives": "Раньше требовалось вешать JS-слушатели событий change/input и переключать класс родителю.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:has"
    },
    {
      "lang": "css",
      "id": "css-is-where",
      "title": "CSS: современные селекторы :is() и :where()",
      "summary": "Группировка длинных цепочек селекторов и управление весом (специфичностью) правил.",
      "code": "/* Вместо длинного перечисления: */\n/* header h1, header h2, main h1, main h2, footer h1, footer h2 */\n:is(header, main, footer) :is(h1, h2) {\n  margin-bottom: 0.5rem;\n  font-weight: 700;\n}\n\n/* :where() работает аналогично, но ЕГО СПЕЦИФИЧНОСТЬ ВСЕГДА РАВНА 0! */\n:where(article, section) p {\n  color: #94a3b8;\n  /* Любой отдельный класс .text легко переопределит это свойство без !important */\n}",
      "example": ":where(button, input, select) { font-family: inherit; }",
      "points": [
        ":is() принимает специфичность самого «тяжелого» селектора из переданного списка.",
        ":where() ВСЕГДА имеет нулевую специфичность (0,0,0) — идеально для базовых сбросов (reset/normalize).",
        "Селекторы являются прощающими (forgiving): если один пункт синтаксически не поддерживается, остальные продолжат работать."
      ],
      "tags": [
        "CSS",
        ":is",
        ":where",
        "специфичность",
        "группировка",
        "селекторы",
        "сброс"
      ],
      "when": "Используй :where() для библиотек компонентов и CSS-сбросов, а :is() — для сокращения DRY кода.",
      "alternatives": "Устаревшие громоздкие селекторы на 5 строк с дублированием стилей.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:is"
    },
    {
      "lang": "css",
      "id": "css-variables",
      "title": "CSS: пользовательские переменные (Custom Properties var())",
      "summary": "Динамические переменные на уровне браузера: легкое переключение темной/светлой темы и наследование стилей.",
      "code": ":root {\n  --bg-primary: #090d14;\n  --text-main: #f8fafc;\n  --accent: #38bdf8;\n  --radius: 8px;\n}\n\nbody.light {\n  --bg-primary: #ffffff;\n  --text-main: #0f172a;\n  --accent: #0284c7;\n}\n\n.button {\n  background: var(--accent);\n  color: #ffffff;\n  border-radius: var(--radius);\n  /* Запасное значение, если переменная не объявлена: */\n  padding: var(--btn-padding, 8px 16px);\n}",
      "example": "element.style.setProperty('--x', event.clientX + 'px'); /* Изменение из JS! */",
      "points": [
        "В отличие от SASS/LESS переменных, CSS-переменные вычисляются на лету в браузере и реагируют на DOM-дерево.",
        "Переменными можно легко управлять из JavaScript через element.style.setProperty(\"--color\", val).",
        "Поддерживают fallback: var(--main-color, #333333)."
      ],
      "tags": [
        "CSS",
        "variables",
        "var",
        "custom properties",
        "переменные",
        "темизация",
        "dark mode"
      ],
      "when": "Обязательно для дизайн-систем, переключения тем (светлая/темная) и гибких компонентов.",
      "alternatives": "Жестко захардкоженные цвета в коде делают редизайн и смену темы мучительными.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/Using_CSS_custom_properties"
    },
    {
      "lang": "css",
      "id": "css-math-functions",
      "title": "CSS: математические функции (clamp, min, max, calc)",
      "summary": "Отзывчивая типографика и динамические размеры без дискретных медиа-запросов.",
      "code": "/* Адаптивный размер заголовка: \n   минимум 28px, идеально 4vw, максимум 48px */\nh1 {\n  font-size: clamp(1.75rem, 4vw, 3rem);\n}\n\n/* Отступы, плавно уменьшающиеся на мобильных */\n.container {\n  padding: clamp(16px, 5vw, 48px);\n  width: min(100% - 32px, 1200px);\n  /* Элемент центрирован, не шире 1200px, с полями минимум по 16px по бокам */\n  margin-inline: auto;\n}\n\n.sidebar {\n  /* Выбираем большее: 300px или треть экрана */\n  width: max(300px, 33vw);\n}",
      "example": "width: calc(100% - 240px); /* Вычитание пикселей из процентов */",
      "points": [
        "clamp(min, val, max) избавляет от написания 5 медиа-запросов под разные разрешения экранов для шрифтов.",
        "margin-inline: auto является современным стандартом для margin: 0 auto с поддержкой RTL.",
        "Внутри clamp, min, max можно опускать слово calc(): calc(100% - 20px) пишется просто 100% - 20px."
      ],
      "tags": [
        "CSS",
        "clamp",
        "min",
        "max",
        "calc",
        "математика",
        "типографика",
        "флюидный дизайн"
      ],
      "when": "Для плавно масштабируемых заголовков, отступов секций и адаптивных контейнеров сайтов.",
      "alternatives": "Ступенчатые медиа-запросы @media (max-width: 768px) { h1 { font-size: 24px; } } выглядят дергано.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/clamp"
    },
    {
      "lang": "css",
      "id": "css-sticky-position",
      "title": "CSS: липкое позиционирование (position: sticky)",
      "summary": "Фиксация шапки или сайдбара при скролле внутри родительского контейнера.",
      "code": ".sticky-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(9, 13, 20, 0.85);\n  backdrop-filter: blur(8px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n\n/* Липкий сайдбар при скролле длинной статьи */\n.sticky-sidebar {\n  position: sticky;\n  top: 24px;\n  align-self: flex-start; /* Обязательно во флекс-контейнере! */\n}",
      "example": "thead th { position: sticky; top: 0; } /* Залипание шапки таблицы данных */",
      "points": [
        "Главная причина, почему sticky не работает: у одного из родителей установлен overflow: hidden, auto или scroll.",
        "Во Flexbox контейнере элемент по умолчанию растягивается на всю высоту (stretch). Чтобы sticky заработал, укажи align-self: flex-start.",
        "Обязательно должно быть указано хотя бы одно координатное свойство (top, bottom, left или right)."
      ],
      "tags": [
        "CSS",
        "sticky",
        "position",
        "липкая шапка",
        "сайдбар",
        "скролл",
        "позиционирование"
      ],
      "when": "Для фиксированных шапок сайтов, плавающего оглавления документации и шапок таблиц данных.",
      "alternatives": "position: fixed вырывает элемент из потока навсегда, требуя компенсирующего padding у body.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/position#sticky"
    },
    {
      "lang": "css",
      "id": "css-transitions-animations",
      "title": "CSS: плавные переходы (transition) и @keyframes",
      "summary": "Создание естественных микроанимаций интерфейса и аппаратное ускорение через transform и opacity.",
      "code": "/* Плавный отклик кнопок (compositor-only свойства) */\n.btn {\n  background: #2563eb;\n  transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1),\n              background-color 150ms ease,\n              box-shadow 150ms ease;\n}\n\n.btn:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n}\n\n.btn:active {\n  transform: translateY(1px);\n}\n\n/* Бесконечная плавная анимация спиннера загрузки */\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n.spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-top-color: #38bdf8;\n  border-radius: 50%;\n  animation: spin 700ms linear infinite;\n}",
      "example": "@media (prefers-reduced-motion: reduce) {\n  * { animation: none !important; transition: none !important; }\n}",
      "points": [
        "Для производительности анимируй только transform и opacity (они обрабатываются видеокартой без перерасчета макета Reflow/Repaint).",
        "Никогда не анимируй width, height, top, left, margin на hover — это вызывает лаги (jank) и просадку FPS.",
        "Всегда уважай настройку prefers-reduced-motion для пользователей с вестибулярными расстройствами."
      ],
      "tags": [
        "CSS",
        "transition",
        "animation",
        "@keyframes",
        "анимация",
        "микроанимации",
        "transform"
      ],
      "when": "Для интерактивных кнопок, карточек, выпадающих меню, модалок и индикаторов загрузки.",
      "alternatives": "Тяжелые JS-библиотеки анимаций избыточны для 95% задач верстки интерфейсов.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_transitions/Using_CSS_transitions"
    },
    {
      "lang": "css",
      "id": "css-backdrop-blur",
      "title": "CSS: эффект матового стекла (Glassmorphism & backdrop-filter)",
      "summary": "Размытие фонового содержимого под полупрозрачными панелями, шапками и карточками.",
      "code": ".glass-panel {\n  background: rgba(13, 18, 29, 0.75);\n  backdrop-filter: blur(12px) saturate(160%);\n  -webkit-backdrop-filter: blur(12px) saturate(160%); /* Для Safari */\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.5);\n}",
      "example": "backdrop-filter: blur(8px);",
      "points": [
        "Для работы эффекта фон самого элемента должен быть полупрозрачным (rgba() или прозрачный hex).",
        "Обязательно добавляй префикс -webkit-backdrop-filter для полной поддержки в iOS Safari и macOS.",
        "Добавление saturate(160%) делает просвечивающие цвета под стеклом более сочными и чистыми."
      ],
      "tags": [
        "CSS",
        "glassmorphism",
        "backdrop-filter",
        "blur",
        "стекло",
        "матовое стекло",
        "эффекты"
      ],
      "when": "Идеально для плавающих шапок сайта, контекстных меню, модальных оверлеев и тулбаров.",
      "alternatives": "Устаревшие сплошные непрозрачные плашки выглядят тяжело в современных интерфейсах.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/backdrop-filter"
    },
    {
      "lang": "css",
      "id": "css-display-modes",
      "title": "CSS: режимы отображения display (block, inline, inline-block, flex, grid, contents)",
      "summary": "Управление тем, как элемент ведёт себя в потоке документа и как располагаются его дочерние элементы.",
      "code": ".badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n}\n\n.wrapper-transparent {\n  display: contents; /* Сам враппер исчезает из дерева раскладки, его дети становятся детьми родителя */\n}",
      "example": "[hidden] {\n  display: none !important;\n}",
      "points": [
        "Строчные элементы (display: inline, например <span>, <a>) игнорируют width, height и вертикальные margin.",
        "inline-flex и inline-grid ведут себя снаружи как строчный элемент (подстраиваются под ширину контента), а внутри работают как полноценный флекс или грид.",
        "display: contents позволяет «растворить» техническую обёртку в DOM, чтобы её дочерние элементы напрямую участвовали в CSS Grid родителя."
      ],
      "tags": [
        "CSS",
        "display",
        "block",
        "inline",
        "inline-flex",
        "contents",
        "none",
        "поток"
      ],
      "when": "При создании кнопок с иконками (inline-flex), сеток (grid) и скрытии элементов (none).",
      "alternatives": "Если нужно скрыть элемент визуально, но оставить место под него, используй visibility: hidden или opacity: 0.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/display"
    },
    {
      "lang": "css",
      "id": "css-logical-properties",
      "title": "CSS: логические свойства (margin-inline, padding-block, inset)",
      "summary": "Современные сокращения для одновременного задания горизонтальных и вертикальных отступов и размеров.",
      "code": ".container {\n  max-inline-size: 1200px;\n  margin-inline: auto;    /* Заменяет margin-left: auto; margin-right: auto */\n  padding-inline: 24px;   /* Горизонтальные отступы слева и справа */\n  padding-block: 48px;    /* Вертикальные отступы сверху и снизу */\n}",
      "example": ".btn {\n  padding-block: 8px;\n  padding-inline: 16px;\n}",
      "points": [
        "Ось inline отвечает за направление текста (по горизонтали: лево + право), а ось block — за направление блоков (по вертикали: верх + низ).",
        "margin-inline: auto центрирует блок по горизонтали, не трогая его верхний и нижний отступы (в отличие от margin: 0 auto).",
        "Логические свойства автоматически адаптируют интерфейс для языков с письмом справа налево (RTL)."
      ],
      "tags": [
        "CSS",
        "margin-inline",
        "padding-inline",
        "padding-block",
        "margin-block",
        "inset-inline",
        "центрирование"
      ],
      "when": "Для центрирования контейнеров (margin-inline: auto) и задания симметричных отступов без дублирования значений.",
      "alternatives": "Классические padding: 10px 20px перезаписывают сразу все 4 стороны.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values"
    },
    {
      "lang": "css",
      "id": "css-flex-items",
      "title": "CSS: управление флекс-элементами (flex: 1, flex-grow, flex-shrink, flex-basis)",
      "summary": "Контроль того, как дочерние элементы внутри Flexbox растягиваются, сжимаются и делят свободное место.",
      "code": ".layout {\n  display: flex;\n  gap: 16px;\n}\n\n.sidebar {\n  flex: 0 0 260px; /* Не растягивать, не сжимать, фиксированная база 260px */\n}\n\n.content {\n  flex: 1 1 0%;    /* Занять всё оставшееся свободное место */\n  min-width: 0;    /* Важно: позволяет тексту и коду внутри сжиматься без переполнения! */\n}",
      "example": ".card-footer {\n  margin-top: auto; /* Прижимает футер карточки к самому низу флекс-колонки */\n}",
      "points": [
        "Сокращение flex: 1 эквивалентно flex: 1 1 0% — элемент забирает свободное пространство пропорционально остальным.",
        "У флекс-элементов по умолчанию стоит min-width: auto, из-за чего длинный текст или <pre> внутри флекса может раздуть колонку. Добавление min-width: 0 решает эту проблему!",
        "margin-left: auto или margin-top: auto внутри флекс-контейнера работает как пружина, отталкивая элемент в самый край."
      ],
      "tags": [
        "CSS",
        "flex-grow",
        "flex-shrink",
        "flex-basis",
        "flex",
        "min-width",
        "align-self",
        "order"
      ],
      "when": "При верстке сайдбаров, карточек одинаковой высоты и шапок с прижатыми к краю кнопками.",
      "alternatives": "Для жёстких двумерных сеток, где важна одинаковая ширина колонок в разных строках, используй CSS Grid.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/flex"
    },
    {
      "lang": "css",
      "id": "css-grid-areas",
      "title": "CSS: именованные области сетки (grid-template-areas)",
      "summary": "Наглядное проектирование каркаса страницы в виде текстовой ASCII-карты прямо в CSS-коде.",
      "code": ".app-shell {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  grid-template-rows: 56px 1fr auto;\n  grid-template-areas:\n    \"header  header\"\n    \"sidebar main\"\n    \"sidebar footer\";\n  min-height: 100vh;\n}\n\n.app-header  { grid-area: header; }\n.app-sidebar { grid-area: sidebar; }\n.app-main    { grid-area: main; }\n.app-footer  { grid-area: footer; }",
      "example": "@media (max-width: 768px) {\n  .app-shell {\n    grid-template-columns: 1fr;\n    grid-template-areas: \"header\" \"main\" \"sidebar\" \"footer\";\n  }\n}",
      "points": [
        "Каждая строка в кавычках внутри grid-template-areas представляет ряд сетки, а каждое слово — ячейку.",
        "Точка \".\" внутри строки обозначает пустую ячейку сетки.",
        "На мобильных экранах весь каркас страницы перестраивается простым переопределением grid-template-areas в @media без изменения HTML!"
      ],
      "tags": [
        "CSS",
        "grid-template-areas",
        "grid-area",
        "grid",
        "каркас",
        "шаблон",
        "layout",
        "сетка"
      ],
      "when": "Для общих лейаутов приложения (шапка + сайдбар + контент + подвал) и сложных дашбордов.",
      "alternatives": "Для однотипных карточек в каталоге удобнее использовать repeat(auto-fill, minmax(260px, 1fr)).",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-areas"
    },
    {
      "lang": "css",
      "id": "css-subgrid",
      "title": "CSS: наследование сетки родителя (grid-template-rows: subgrid)",
      "summary": "Идеальное выравнивание заголовков, текста и кнопок внутри соседних карточек по единым горизонтальным линиям.",
      "code": ".cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 20px;\n}\n\n.card {\n  display: grid;\n  grid-row: span 3;               /* Карточка занимает 3 дорожки родителя */\n  grid-template-rows: subgrid;    /* Внутренние ряды синхронизируются с соседями! */\n  gap: 12px;\n}",
      "example": "/* Заголовки, описания и кнопки всех карточек в ряду встанут строго на одном уровне */",
      "points": [
        "Обычный CSS Grid выравнивает только внешние рамки карточек, но если в одной карточке заголовок в 3 строки, кнопка под ним съезжает.",
        "subgrid позволяет дочерним элементам карточки (заголовку, тексту, футеру) выстраиваться по общей сетке родителя.",
        "Поддерживается во всех современных браузерах (Chrome, Edge, Firefox, Safari)."
      ],
      "tags": [
        "CSS",
        "subgrid",
        "grid",
        "карточки",
        "выравнивание",
        "сетка",
        "grid-row"
      ],
      "when": "В витринах товаров, тарифных планах и списках статей, где карточки должны иметь идеально ровные внутренние блоки.",
      "alternatives": "Флекс-карточка с margin-top: auto выравнивает только нижнюю кнопку, но не середину карточки.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid"
    },
    {
      "lang": "css",
      "id": "css-positioning",
      "title": "CSS: позиционирование (relative, absolute, fixed, sticky и inset)",
      "summary": "Управление положением элементов вне стандартного потока: липкие шапки, бейджи, оверлеи и модальные окна.",
      "code": ".card {\n  position: relative; /* Точка отсчёта для абсолютных элементов внутри */\n}\n\n.card-badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n\n.overlay {\n  position: fixed;\n  inset: 0; /* Заменяет top: 0; right: 0; bottom: 0; left: 0 */\n  z-index: 100;\n}",
      "example": ".sticky-header {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}",
      "points": [
        "position: absolute позиционируется относительно ближайшего предка с position, отличным от static (обычно родителю задают position: relative).",
        "position: sticky ведёт себя как обычный блок, пока при скролле не достигнет порога (например, top: 16px), после чего «прилипает».",
        "Важно: position: sticky перестаёт работать, если у любого из родителей задан overflow: hidden или overflow: auto!"
      ],
      "tags": [
        "CSS",
        "position",
        "relative",
        "absolute",
        "fixed",
        "sticky",
        "inset",
        "z-index",
        "позиционирование"
      ],
      "when": "Для липких шапок и оглавлений (sticky), бейджей и кнопок закрытия (absolute), полноэкранных подложек (fixed).",
      "alternatives": "Для наложения текста поверх картинки без absolute можно поместить оба элемента в одну ячейку CSS Grid (grid-area: 1 / 1).",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/position"
    },
    {
      "lang": "css",
      "id": "css-selectors-is-where-not",
      "title": "CSS: функциональные селекторы :is(), :where() и :not()",
      "summary": "Сокращение длинных цепочек селекторов, управление специфичностью и исключение элементов по условию.",
      "code": "/* Группировка без дублирования префикса */\n.article :is(h1, h2, h3) {\n  line-height: 1.25;\n  color: var(--text);\n}\n\n/* Нулевая специфичность — легко переопределить ниже */\n:where(ul, ol) {\n  margin: 0;\n  padding-left: 20px;\n}\n\n/* Все кнопки, кроме заблокированных и активных */\n.btn:not(:disabled, .active):hover {\n  border-color: var(--accent);\n}",
      "example": ".nav-item:not(:last-child) {\n  border-bottom: 1px solid var(--line);\n}",
      "points": [
        ":is() принимает список селекторов и берёт специфичность самого «тяжёлого» из них.",
        ":where() работает идентично :is(), но его специфичность ВСЕГДА равна нулю (0,0,0) — идеален для базовых CSS-сбросов и библиотек.",
        "Современный :not() поддерживает перечисление нескольких селекторов через запятую: :not(.primary, .danger)."
      ],
      "tags": [
        "CSS",
        "is",
        "where",
        "not",
        "селекторы",
        "специфичность",
        "псевдоклассы"
      ],
      "when": "При стилизации типографики внутри статей, написании UI-китов и исключении крайних элементов.",
      "alternatives": "Перечисление .article h1, .article h2, .article h3 вручную раздувает CSS-код.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:is"
    },
    {
      "lang": "css",
      "id": "css-nth-child",
      "title": "CSS: структурные псевдоклассы :nth-child(), :first-child, :empty",
      "summary": "Выборка чётных/нечётных строк таблицы, каждого N-го элемента сетки и пустых контейнеров.",
      "code": "/* Зебра для строк таблицы (каждая чётная строка) */\ntbody tr:nth-child(even) {\n  background: rgba(255, 255, 255, 0.03);\n}\n\n/* Первые 3 элемента списка */\n.top-list li:nth-child(-n + 3) {\n  font-weight: 700;\n}\n\n/* Скрыть блок уведомлений, если внутри него нет элементов */\n.alerts-container:empty {\n  display: none;\n}",
      "example": "li:nth-child(3n + 1) { /* 1-й, 4-й, 7-й... элемент */ }",
      "points": [
        "Формула An + B позволяет выбирать любые последовательности: odd (нечётные), even (чётные), 3n (каждый третий), n + 4 (все начиная с четвёртого).",
        "Современный синтаксис :nth-child(even of .visible) считает только элементы, подходящие под фильтр .visible!",
        ":empty срабатывает только если внутри тега нет вообще ничего (даже пробелов и переносов строк)."
      ],
      "tags": [
        "CSS",
        "nth-child",
        "first-child",
        "last-child",
        "empty",
        "even",
        "odd",
        "зебра",
        "селекторы"
      ],
      "when": "Для чередования фона строк таблиц, выделения топ-3 позиций и скрытия пустых оберток.",
      "alternatives": "Для отступов между элементами используй свойство gap во флексах и гридах вместо :not(:last-child).",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:nth-child"
    },
    {
      "lang": "css",
      "id": "css-focus-visible",
      "title": "CSS: состояния интерактивности (:hover, :focus-visible, :focus-within)",
      "summary": "Доступная подсветка фокуса только при навигации с клавиатуры и реакция контейнера на фокус внутри него.",
      "code": "/* Показываем чёткое кольцо фокуса только при нажатии Tab (но не при клике мышью) */\n:focus-visible {\n  outline: 2px solid #38bdf8;\n  outline-offset: 2px;\n}\n\n/* Подсвечиваем всю рамку поиска, когда курсор стоит внутри <input> */\n.search-box:focus-within {\n  border-color: #38bdf8;\n  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);\n}",
      "example": "@media (hover: hover) {\n  .card:hover { transform: translateY(-2px); }\n}",
      "points": [
        "Никогда не пиши outline: none без замены на :focus-visible — иначе пользователи с клавиатурой потеряют видимость курсора.",
        ":focus-visible умно отличает клик мышкой от навигации клавишей Tab.",
        ":focus-within срабатывает на родителе, когда любой дочерний input или button внутри него получил фокус."
      ],
      "tags": [
        "CSS",
        "focus-visible",
        "focus-within",
        "hover",
        "active",
        "outline",
        "фокус",
        "доступность"
      ],
      "when": "Для всех кнопок, ссылок, инпутов и составных полей поиска.",
      "alternatives": "Обычный :focus оставляет рамку даже после клика мышью по кнопке.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:focus-visible"
    },
    {
      "lang": "css",
      "id": "css-pseudo-elements",
      "title": "CSS: псевдоэлементы ::before, ::after, ::placeholder, ::selection",
      "summary": "Декоративные элементы без лишней разметки, стилизация маркеров списков, плейсхолдеров и выделения текста.",
      "code": ".external-link::after {\n  content: \" ↗\";\n  font-size: 0.85em;\n  opacity: 0.7;\n}\n\n::selection {\n  background: rgba(56, 189, 248, 0.25);\n  color: #ffffff;\n}\n\nli::marker {\n  color: #38bdf8;\n}",
      "example": ".tooltip::before {\n  content: attr(data-tip);\n}",
      "points": [
        "Псевдоэлементы ::before и ::after не существуют без свойства content (даже для пустой фигуры обязательно пиши content: \"\").",
        "::marker позволяет напрямую задать цвет и шрифт буллитам <ul> и цифрам <ol> без сброса list-style.",
        "::backdrop стилизует затемнённый фон за открытым модальным окном <dialog> или поповером."
      ],
      "tags": [
        "CSS",
        "before",
        "after",
        "placeholder",
        "selection",
        "marker",
        "backdrop",
        "псевдоэлементы"
      ],
      "when": "Для декоративных стрелок, бейджей, оверлеев, буллитов списка и кастомного выделения текста.",
      "alternatives": "Не помещай в content важный смысловой текст — он не индексируется и не выделяется мышью.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-elements"
    },
    {
      "lang": "css",
      "id": "css-viewport-units",
      "title": "CSS: современные единицы измерения (rem, em, dvh, svh, ch)",
      "summary": "Правильный выбор единиц для шрифтов, отступов, длины строки чтения и мобильных экранов с адресной строкой.",
      "code": ".hero-fullscreen {\n  min-height: 100dvh; /* Подстраивается под динамическую адресную строку мобильного браузера */\n}\n\n.article-body {\n  font-size: 1rem;    /* 16px от корня html */\n  max-width: 65ch;    /* Оптимальная длина строки ~65 символов для комфортного чтения */\n}",
      "example": ":root { font-size: 16px; } /* 1rem = 16px, 1.5rem = 24px */",
      "points": [
        "rem зависит от размера шрифта корневого тега <html> и уважает настройки масштаба шрифта в браузере пользователя.",
        "100vh на мобильных телефонах часто обрезает нижнюю кнопку из-за плавающей адресной строки браузера. Используй 100dvh (dynamic viewport height) или 100svh!",
        "Единица ch равна ширине символа \"0\" текущего шрифта — идеальна для ограничения ширины текстовых абзацев (60ch–72ch)."
      ],
      "tags": [
        "CSS",
        "rem",
        "em",
        "vh",
        "dvh",
        "svh",
        "vw",
        "ch",
        "единицы измерения",
        "мобильная верстка"
      ],
      "when": "Используй rem для шрифтов, px для тонких рамок, ch для ширины текста и dvh для полноэкранных секций.",
      "alternatives": "Жёсткие px на шрифтах мешают слабовидящим пользователям увеличить масштаб текста в настройках ОС.",
      "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units"
    },
    {
      "lang": "css",
      "id": "css-modern-colors",
      "title": "CSS: современные цвета (oklch, color-mix, light-dark, currentColor)",
      "summary": "Перцептивно равномерное цветовое пространство OKLCH и динамическое смешивание оттенков прямо в CSS.",
      "code": ":root {\n  color-scheme: light dark;\n  --brand: oklch(72% 0.16 230);\n  /* Автоматически меняет цвет в зависимости от светлой/тёмной темы */\n  --surface: light-dark(#ffffff, #0e1320);\n}\n\n.badge-soft {\n  /* Смешиваем акцентный цвет с прозрачностью без дублирования RGB-переменных */\n  background: color-mix(in srgb, var(--brand) 15%, transparent);\n  border: 1px solid color-mix(in srgb, var(--brand) 35%, transparent);\n}",
      "example": "svg {\n  fill: currentColor; /* Иконка автоматически наследует цвет текста кнопки */\n}",
      "points": [
        "color-mix(in srgb, var(--accent) 20%, transparent) позволяет создавать полупрозрачные версии любой CSS-переменной на лету!",
        "OKLCH гарантирует одинаковую воспринимаемую глазом яркость при смене оттенка (Hue), в отличие от HSL.",
        "Ключевое слово currentColor передаёт текущий color текста в border, box-shadow или SVG-иконку."
      ],
      "tags": [
        "CSS",
        "oklch",
        "color-mix",
        "light-dark",
        "currentColor",
        "hsl",
        "rgb",
        "цвет",
        "палитра"
      ],
      "when": "При построении дизайн-систем, тем оформления и полупрозрачных плашек/ховеров.",
      "alternatives": "Хранение отдельных переменных --accent-rgb: 56, 189, 248 для rgba() больше не требуется благодаря color-mix().",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix"
    },
    {
      "lang": "css",
      "id": "css-gradients",
      "title": "CSS: градиенты (linear-gradient, radial-gradient, conic-gradient)",
      "summary": "Плавные цветовые переходы, фоновые свечения, круговые диаграммы и градиентный текст.",
      "code": "/* Линейный градиент под углом 135 градусов */\n.hero-banner {\n  background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%);\n}\n\n/* Мягкое радиальное свечение на фоне */\n.glow-bg {\n  background: radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.18), transparent 70%);\n}\n\n/* Градиентный текст */\n.gradient-title {\n  background: linear-gradient(90deg, #38bdf8, #818cf8);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}",
      "example": ".pie-chart {\n  background: conic-gradient(#38bdf8 0% 65%, #1e293b 65% 100%);\n  border-radius: 50%;\n}",
      "points": [
        "Градиенты в CSS являются фоновыми изображениями, поэтому задаются через background или background-image, а не background-color.",
        "Для более сочных переходов без серой «грязи» посередине указывай интерполяцию: linear-gradient(in oklch 90deg, ...).",
        "conic-gradient позволяет сверстать круговую диаграмму или прогресс-кольцо на чистом CSS."
      ],
      "tags": [
        "CSS",
        "linear-gradient",
        "radial-gradient",
        "conic-gradient",
        "background-clip",
        "градиент",
        "свечение"
      ],
      "when": "Для акцентных кнопок, фоновых подсветок, круговых графиков и заголовков.",
      "alternatives": "Не используй кричащие радужные градиенты на обычных карточках текста — это ухудшает читаемость.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/gradient"
    },
    {
      "lang": "css",
      "id": "css-shadows-glass",
      "title": "CSS: тени (box-shadow, filter: drop-shadow) и матовое стекло (backdrop-filter)",
      "summary": "Многослойные мягкие тени для глубины интерфейса, контурные тени для PNG/SVG и эффект размытия фона под панелью.",
      "code": "/* Навигационная панель с эффектом матового стекла */\n.glass-navbar {\n  background: rgba(14, 19, 32, 0.78);\n  backdrop-filter: blur(12px) saturate(160%);\n  -webkit-backdrop-filter: blur(12px) saturate(160%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n\n/* Двухслойная реалистичная тень карточки */\n.elevated-card {\n  box-shadow:\n    0 2px 4px rgba(0, 0, 0, 0.25),\n    0 12px 28px -4px rgba(0, 0, 0, 0.45);\n}",
      "example": ".transparent-icon {\n  filter: drop-shadow(0 4px 8px rgba(56, 189, 248, 0.4));\n}",
      "points": [
        "box-shadow отбрасывает тень от прямоугольной рамки блока, а filter: drop-shadow() повторяет точный контур прозрачной PNG-картинки или SVG-иконки!",
        "Для работы backdrop-filter: blur() собственный background элемента обязательно должен быть полупрозрачным (например, rgba с alpha < 0.85).",
        "Отрицательный четвёртый параметр (spread-radius, например -4px) у box-shadow делает тень аккуратной и собранной под элементом."
      ],
      "tags": [
        "CSS",
        "box-shadow",
        "drop-shadow",
        "backdrop-filter",
        "blur",
        "glassmorphism",
        "тень",
        "размытие",
        "стекло"
      ],
      "when": "Для липких шапок, модальных окон, выпадающих меню и приподнятых карточек.",
      "alternatives": "В тёмной теме глубокие чёрные тени почти не видны — обязательно дополняй карточку тонкой светлой рамкой border: 1px solid rgba(255,255,255,0.08).",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/backdrop-filter"
    },
    {
      "lang": "css",
      "id": "css-transforms",
      "title": "CSS: 2D и 3D трансформации (translate, scale, rotate, perspective)",
      "summary": "Перемещение, масштабирование и вращение элементов на GPU без пересчёта геометрии соседних блоков.",
      "code": ".card-interactive {\n  transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.card-interactive:hover {\n  /* Независимые свойства трансформации в современном CSS */\n  translate: 0 -4px;\n  scale: 1.02;\n}\n\n.icon-spin {\n  rotate: 45deg;\n  transform-origin: center;\n}",
      "example": ".centered-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  translate: -50% -50%;\n}",
      "points": [
        "В современном CSS свойства translate, rotate и scale можно писать отдельно друг от друга, не склеивая их в длинную строку transform!",
        "Трансформации выполняются видеокартой (GPU) на этапе композитинга и не толкают соседние элементы страницы (не вызывают reflow).",
        "Для 3D-эффектов наклона карточек задай родителю perspective: 900px, а элементу rotateX() / rotateY()."
      ],
      "tags": [
        "CSS",
        "transform",
        "translate",
        "scale",
        "rotate",
        "skew",
        "perspective",
        "трансформация",
        "3d"
      ],
      "when": "Для микроанимаций при наведении, плавных выезжающих панелей (drawer) и поворота иконок.",
      "alternatives": "Никогда не анимируй смещение через top/left или margin — это вызывает лаги на слабых устройствах.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/transform"
    },
    {
      "lang": "css",
      "id": "css-transitions",
      "title": "CSS: плавные переходы (transition и кривые cubic-bezier)",
      "summary": "Анимация смены состояний (hover, focus, active) с контролем длительности, задержки и кривой ускорения.",
      "code": ".btn {\n  background: #121827;\n  border-color: rgba(255, 255, 255, 0.1);\n  /* Перечисляем только конкретные свойства, а не transition: all! */\n  transition:\n    background-color 160ms ease,\n    border-color 160ms ease,\n    transform 160ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.btn:hover {\n  background: #161e31;\n  border-color: #38bdf8;\n  transform: translateY(-1px);\n}",
      "example": "@media (prefers-reduced-motion: reduce) {\n  * { transition-duration: 0.01ms !important; }\n}",
      "points": [
        "Избегай антипаттерна transition: all 0.3s — браузер будет пытаться анимировать даже padding и width при ресайзе окна.",
        "Оптимальная длительность отклика для кнопок и ховеров в интерфейсе — от 120ms до 220ms.",
        "Кривая cubic-bezier(0.22, 1, 0.36, 1) (ease-out-quint) даёт мгновенный старт и мягкое торможение в конце."
      ],
      "tags": [
        "CSS",
        "transition",
        "cubic-bezier",
        "ease",
        "анимация",
        "переход",
        "hover"
      ],
      "when": "Для всех интерактивных состояний кнопок, карточек, ссылок и переключателей.",
      "alternatives": "Для многошаговых и бесконечных анимаций (спиннеры, пульсация) используй @keyframes.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/transition"
    },
    {
      "lang": "css",
      "id": "css-keyframes-animation",
      "title": "CSS: покадровые анимации (@keyframes и animation)",
      "summary": "Создание сложных многошаговых, зацикленных и стартовых анимаций появления элементов.",
      "code": "@keyframes pulse-ring {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n  70% {\n    transform: scale(1.15);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1.15);\n    opacity: 0;\n  }\n}\n\n.status-dot::after {\n  animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}",
      "example": ".fade-in {\n  animation: slideUp 300ms ease-out forwards;\n}",
      "points": [
        "Ключевое слово forwards (animation-fill-mode: forwards) фиксирует элемент в финальном состоянии (100%) после окончания анимации.",
        "Для высокой кадровой частоты (60–120 FPS) анимируй внутри @keyframes только transform и opacity.",
        "Свойство animation-play-state: paused позволяет поставить анимацию на паузу при наведении курсора."
      ],
      "tags": [
        "CSS",
        "keyframes",
        "animation",
        "infinite",
        "forwards",
        "анимация",
        "пульсация",
        "спиннер"
      ],
      "when": "Для скелетонов загрузки, спиннеров, индикаторов статуса и анимации появления модальных окон.",
      "alternatives": "Для простых переходов из точки А в точку Б при наведении достаточно свойства transition.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/@keyframes"
    },
    {
      "lang": "css",
      "id": "css-typography-truncation",
      "title": "CSS: типографика, обрезка строк (line-clamp) и text-wrap: balance",
      "summary": "Красивая балансировка заголовков, обрезка длинного текста троеточием на 1 или несколько строк и табулярные цифры.",
      "code": "/* Автоматический баланс длины строк в заголовках */\nh1, h2, h3 {\n  text-wrap: balance;\n}\n\n/* Обрезка описания карточки ровно на 3 строках с троеточием */\n.card-excerpt {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n/* Выравнивание ширины цифр в таймерах и таблицах цен */\n.price-num {\n  font-variant-numeric: tabular-nums;\n}",
      "example": ".single-line-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
      "points": [
        "text-wrap: balance равномерно распределяет слова по строкам заголовка, избавляя от одинокого «висячего» слова на последней строке!",
        "Для обычных абзацев текста используй text-wrap: pretty.",
        "font-variant-numeric: tabular-nums делает все цифры одинаковой ширины, чтобы счётчики и колонки цен не дрожали при смене цифр."
      ],
      "tags": [
        "CSS",
        "line-clamp",
        "text-wrap",
        "balance",
        "ellipsis",
        "tabular-nums",
        "типографика",
        "обрезка текста"
      ],
      "when": "В карточках товаров и статей (line-clamp), заголовках секций (balance) и финансовых таблицах (tabular-nums).",
      "alternatives": "Обрезка текста по числу символов в JS работает хуже, так как не учитывает реальную ширину окна.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp"
    },
    {
      "lang": "css",
      "id": "css-aspect-ratio-object-fit",
      "title": "CSS: пропорции медиа (aspect-ratio и object-fit: cover)",
      "summary": "Железная фиксация соотношения сторон для карточек, видео и аватаров без искажения пропорций картинок.",
      "code": ".video-frame {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  border-radius: 8px;\n}\n\n.product-thumb {\n  width: 100%;\n  aspect-ratio: 4 / 3;\n  object-fit: cover;      /* Заполняет рамку без сплющивания, обрезая лишние края */\n  object-position: center;\n}",
      "example": ".avatar {\n  width: 48px;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 50%;\n}",
      "points": [
        "aspect-ratio: 16 / 9 автоматически вычисляет высоту блока от его текущей ширины — старый хак с padding-top: 56.25% больше не нужен!",
        "object-fit: cover работает для <img> и <video> точно так же, как background-size: cover для фонов.",
        "object-fit: contain вписывает картинку целиком внутри рамки (удобно для логотипов брендов и иконок)."
      ],
      "tags": [
        "CSS",
        "aspect-ratio",
        "object-fit",
        "cover",
        "contain",
        "пропорции",
        "картинки",
        "видео"
      ],
      "when": "Для всех превью статей, фотографий товаров, аватаров пользователей и видеоплееров.",
      "alternatives": "Задание фиксированных width и height без object-fit: cover сплющит или растянет загруженное пользователем фото.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/aspect-ratio"
    },
    {
      "lang": "css",
      "id": "css-scroll-snap",
      "title": "CSS: плавная прокрутка, карусели (scroll-snap) и overscroll-behavior",
      "summary": "Нативные тач-карусели с магнитной фиксацией слайдов и отступы при прокрутке к якорям под фиксированной шапкой.",
      "code": "html {\n  scroll-behavior: smooth;\n  scroll-padding-top: 72px; /* Чтобы фиксированная шапка не перекрывала заголовок при клике по якорю! */\n}\n\n.carousel {\n  display: flex;\n  gap: 16px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  overscroll-behavior-x: contain;\n}\n\n.slide {\n  flex: 0 0 280px;\n  scroll-snap-align: start;\n}",
      "example": ".modal-body {\n  overscroll-behavior: contain; /* Скролл внутри модалки не прокручивает фон под ней */\n}",
      "points": [
        "scroll-padding-top на теге <html> решает вечную проблему, когда переход по якорю #section прячет заголовок под sticky-шапкой.",
        "scroll-snap-type: x mandatory создаёт отзывчивый горизонтальный слайдер с инерцией на телефонах без единой строчки JS.",
        "overscroll-behavior: contain запрещает прокрутку страницы на фоне, когда пользователь докрутил до конца меню или модального окна."
      ],
      "tags": [
        "CSS",
        "scroll-snap",
        "scroll-behavior",
        "scroll-padding",
        "overscroll-behavior",
        "скролл",
        "карусель",
        "слайдер"
      ],
      "when": "Для горизонтальных лент карточек, галерей, якорных меню и модальных окон со скроллом.",
      "alternatives": "Тяжёлые JS-слайдеры (Swiper) нужны только если требуется автопрокрутка или бесконечное кольцо.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/scroll-snap-type"
    },
    {
      "lang": "css",
      "id": "css-filters-clip-path",
      "title": "CSS: графические фильтры (filter) и фигурная обрезка (clip-path)",
      "summary": "Цветокоррекция изображений (ч/б, яркость, контраст, размытие) и вырезание многоугольных геометрических форм.",
      "code": "/* Чёрно-белые логотипы партнёров, становящиеся цветными при наведении */\n.partner-logo {\n  filter: grayscale(100%) opacity(0.6);\n  transition: filter 200ms ease;\n}\n.partner-logo:hover {\n  filter: grayscale(0%) opacity(1);\n}\n\n/* Скошенный угол карточки или кнопки */\n.angled-box {\n  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);\n}",
      "example": "filter: brightness(1.1) contrast(1.05) saturate(1.2);",
      "points": [
        "В свойстве filter можно комбинировать через пробел: blur(), brightness(), contrast(), grayscale(), hue-rotate(), invert(), saturate(), sepia().",
        "clip-path обрезает элемент по кругу circle(), эллипсу ellipse(), прямоугольнику со скруглением inset() или произвольному многоугольнику polygon().",
        "Обрати внимание: обычный box-shadow на элементе с clip-path тоже обрежется. Чтобы тень шла по контуру фигуры, задай filter: drop-shadow() её родителю!"
      ],
      "tags": [
        "CSS",
        "filter",
        "clip-path",
        "grayscale",
        "brightness",
        "contrast",
        "polygon",
        "фильтр",
        "маска"
      ],
      "when": "Для эффектов наведения на изображения, затемнения фоновых фото и нестандартных геометрических блоков.",
      "alternatives": "Для сложных криволинейных масок со скруглёнными углами используй SVG <clipPath> или mask-image.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/filter"
    },
    {
      "lang": "css",
      "id": "css-nesting-layers",
      "title": "CSS: нативная вложенность (CSS Nesting) и каскадные слои (@layer)",
      "summary": "Вложенная запись селекторов прямо в браузере без препроцессоров Sass/Less и предсказуемый контроль приоритета слоёв.",
      "code": "@layer reset, base, components, utilities;\n\n@layer components {\n  .card {\n    padding: 16px;\n    border: 1px solid var(--line);\n\n    & .card-title {\n      font-weight: 600;\n    }\n\n    &:hover {\n      border-color: var(--accent);\n    }\n\n    @media (max-width: 640px) {\n      padding: 12px;\n    }\n  }\n}",
      "example": "/* Правило из @layer utilities всегда перебьёт @layer base независимо от специфичности селектора */",
      "points": [
        "Нативный CSS Nesting позволяет вкладывать дочерние селекторы, псевдоклассы (&:hover) и даже @media-запросы прямо внутрь селектора компонента!",
        "Директива @layer задаёт жёсткий порядок приоритета слоёв: стили из последнего объявленного слоя всегда побеждают предыдущие.",
        "Это навсегда избавляет от войн специфичности и необходимости писать !important при переопределении сторонних стилей."
      ],
      "tags": [
        "CSS",
        "nesting",
        "layer",
        "каскад",
        "вложенность",
        "архитектура",
        "специфичность"
      ],
      "when": "При организации модульных стилей компонентов и построении архитектуры CSS без сборщиков.",
      "alternatives": "Не делай вложенность глубже 3 уровней, чтобы селекторы оставались читаемыми и быстрыми.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting"
    },
    {
      "lang": "css",
      "id": "css-form-styling-accent",
      "title": "CSS: стилизация форм (accent-color, appearance, resize)",
      "summary": "Быстрая перекраска чекбоксов, радиокнопок и ползунков в фирменный цвет сайта одной строчкой кода.",
      "code": ":root {\n  accent-color: #38bdf8; /* Перекрашивает все checkbox, radio, range и progress! */\n}\n\ntextarea {\n  resize: vertical;      /* Разрешаем тянуть поле только вверх-вниз, чтобы не сломать ширину колонки */\n  min-height: 96px;\n}\n\ninput::placeholder {\n  color: #64748b;\n  opacity: 1;\n}",
      "example": ".custom-checkbox {\n  appearance: none; /* Полный сброс системного вида для отрисовки с нуля */\n}",
      "points": [
        "accent-color мгновенно стилизует нативные элементы форм под бренд, автоматически выбирая контрастный цвет галочки внутри чекбокса.",
        "У <textarea> по умолчанию включён resize: both, из-за чего пользователь может растянуть поле вбок и сломать верстку — всегда ставь resize: vertical.",
        "Если нужен полностью кастомный дизайн чекбокса или свитча (toggle), используй appearance: none и псевдоэлемент ::before."
      ],
      "tags": [
        "CSS",
        "accent-color",
        "appearance",
        "resize",
        "placeholder",
        "чекбокс",
        "формы",
        "ползунок"
      ],
      "when": "В базовых стилях любого проекта для аккуратного вида форм.",
      "alternatives": "Скрытие чекбокса через display: none ломает навигацию с клавиатуры (используй appearance: none).",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color"
    },
    {
      "lang": "css",
      "id": "css-overflow-scrollbars",
      "title": "CSS: управление переполнением (overflow, overflow-clip-margin, scrollbar-gutter)",
      "summary": "Локализация горизонтального и вертикального скролла, защита от скачков ширины страницы и тонкие полосы прокрутки.",
      "code": "html {\n  /* Резервирует место под скроллбар, чтобы страница не дёргалась при открытии модалки! */\n  scrollbar-gutter: stable;\n  scrollbar-width: thin;\n  scrollbar-color: #334155 transparent;\n}\n\n.code-block {\n  overflow-x: auto; /* Показывает скроллбар только если строка кода реально не поместилась */\n}",
      "example": ".card {\n  overflow: clip; /* Обрезает края как hidden, но не создаёт скролл-контейнер! */\n}",
      "points": [
        "Всегда используй overflow: auto вместо overflow: scroll, чтобы полоса прокрутки не висела пустой, когда контента мало.",
        "Современное значение overflow: clip обрезает выступающие углы, но в отличие от overflow: hidden НЕ ломает position: sticky внутри родителя!",
        "scrollbar-gutter: stable предотвращает неприятный горизонтальный рывок шапки и контента, когда при фильтрации или открытии модалки пропадает полоса прокрутки."
      ],
      "tags": [
        "CSS",
        "overflow",
        "clip",
        "scrollbar-gutter",
        "scrollbar-width",
        "скроллбар",
        "прокрутка",
        "переполнение"
      ],
      "when": "Для блоков кода, таблиц, модальных окон и корневого тега html.",
      "alternatives": "overflow-x: hidden на body часто маскирует проблему вылезающего блока вместо её исправления.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter"
    },
    {
      "lang": "css",
      "id": "css-z-index-isolation",
      "title": "CSS: контекст наложения (z-index и isolation: isolate)",
      "summary": "Предсказуемое управление слоями без магических чисел z-index: 999999 с помощью локальной изоляции компонента.",
      "code": ".hero-card {\n  position: relative;\n  isolation: isolate; /* Все z-index внутри карточки остаются заперты внутри неё! */\n}\n\n.hero-card__bg-glow {\n  position: absolute;\n  inset: 0;\n  z-index: -1; /* Уходит под текст карточки, но НЕ проваливается под фон всей страницы! */\n}",
      "example": "/* isolation: isolate создаёт чистый контекст наложения без побочных эффектов */",
      "points": [
        "Главная ловушка z-index: -1 на фоновом декоре — элемент часто проваливается под фон родителя и исчезает. Свойство isolation: isolate на родителе решает это в одну строку!",
        "z-index работает не только на позиционированных элементах (relative/absolute/fixed), но и напрямую на дочерних элементах Flexbox и CSS Grid!",
        "Держи шкалу слоёв системной в CSS-переменных: --z-header: 50, --z-dropdown: 100, --z-modal: 200, --z-toast: 300."
      ],
      "tags": [
        "CSS",
        "z-index",
        "isolation",
        "isolate",
        "stacking context",
        "слои",
        "наложение"
      ],
      "when": "При верстке карточек с декоративным фоном, перекрывающихся аватаров и фиксированных панелей.",
      "alternatives": "Для модальных окон и поповеров нативные <dialog> и popover автоматически выходят в #top-layer поверх любого z-index.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/isolation"
    },
    {
      "lang": "css",
      "id": "css-pointer-events-user-select",
      "title": "CSS: управление кликами (pointer-events), выделением (user-select) и курсором",
      "summary": "Пропускание кликов сквозь прозрачные декоративные слои и запрет случайного выделения текста на кнопках.",
      "code": "/* Декоративное свечение поверх секции не мешает нажимать на кнопки под ним */\n.ambient-glow {\n  pointer-events: none;\n}\n\n/* Текст кнопок и табов не выделяется синим при быстром двойном клике */\n.btn, .tab, kbd {\n  user-select: none;\n}\n\n/* Весь API-ключ или команда терминала выделяется целиком одним кликом! */\n.api-token {\n  user-select: all;\n}",
      "example": ".is-loading {\n  pointer-events: none;\n  opacity: 0.6;\n}",
      "points": [
        "pointer-events: none делает элемент полностью «прозрачным» для мыши и пальца — клики проходят сквозь него к элементам ниже.",
        "user-select: all позволяет пользователю выделить весь промокод, ссылку или команду одним кликом мыши.",
        "Помни, что pointer-events: none блокирует только мышь/тач, но не блокирует переход по кнопке клавишей Tab (для полной блокировки кнопки используй атрибут disabled)."
      ],
      "tags": [
        "CSS",
        "pointer-events",
        "user-select",
        "cursor",
        "клик",
        "выделение текста",
        "курсор"
      ],
      "when": "На декоративных оверлеях, иконках внутри кнопок, промокодах и тост-контейнерах.",
      "alternatives": "Для полного отключения интерактивности целой секции (и мыши, и клавиатуры) используй HTML-атрибут inert.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/pointer-events"
    },
    {
      "lang": "css",
      "id": "css-backgrounds-patterns",
      "title": "CSS: фоновые изображения, сетки и паттерны (background-size, position, repeat)",
      "summary": "Наложение нескольких фонов и создание технических точечных и клеточных сеток на чистом CSS без картинок.",
      "code": "/* Техническая сетка из точек (dot matrix) на чистом CSS */\n.canvas-dots {\n  background-color: #090d14;\n  background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px);\n  background-size: 20px 20px;\n}\n\n/* Техническая миллиметровая клетка (grid lines) */\n.canvas-grid {\n  background-size: 32px 32px;\n  background-image:\n    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),\n    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);\n}",
      "example": "background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('hero.jpg') center / cover no-repeat;",
      "points": [
        "В свойстве background можно перечислить несколько слоёв через запятую (первый в списке лежит выше всех). Например, полупрозрачный градиент поверх фото для читаемости белого текста!",
        "Точечные и линейные паттерны через radial-gradient / linear-gradient + background-size: 24px 24px весят 0 байт и идеально чёткие на любых экранах.",
        "В сокращённой записи размер пишется через слэш после позиции: center / cover no-repeat."
      ],
      "tags": [
        "CSS",
        "background",
        "background-size",
        "background-image",
        "cover",
        "паттерн",
        "сетка",
        "фон"
      ],
      "when": "Для фонов рабочих холстов, технических лендингов и затемнения обложек под текстом.",
      "alternatives": "Для контентных изображений, важных для SEO и доступности, используй тег <img> с object-fit: cover.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/background"
    },
    {
      "lang": "css",
      "id": "css-borders-outline",
      "title": "CSS: границы (border, border-radius) и контур фокуса (outline, outline-offset)",
      "summary": "Геометрия скруглений вложенных карточек, отличие outline от border и аккуратные разделители.",
      "code": ".outer-card {\n  --inner-radius: 8px;\n  --card-padding: 8px;\n  padding: var(--card-padding);\n  /* Формула идеального концентрического скругления: внутренний радиус + отступ! */\n  border-radius: calc(var(--inner-radius) + var(--card-padding));\n}\n\n.inner-image {\n  border-radius: var(--inner-radius);\n}\n\n.btn:focus-visible {\n  outline: 2px solid #38bdf8;\n  outline-offset: 2px;\n}",
      "example": "border-radius: 9999px; /* Идеальная капсула любой высоты */",
      "points": [
        "Чтобы скругление вложенной картинки и внешней карточки выглядело гармонично (концентрически), внешний радиус должен быть равен внутреннему радиусу плюс padding карточки!",
        "В отличие от border, свойство outline не занимает места в блочной модели (элемент не прыгает при появлении рамки) и поддерживает отступ outline-offset.",
        "border-radius: 50% превращает квадратный блок в круг, а border-radius: 9999px создаёт ровную капсулу на прямоугольнике."
      ],
      "tags": [
        "CSS",
        "border",
        "border-radius",
        "outline",
        "outline-offset",
        "рамка",
        "скругление"
      ],
      "when": "При проектировании карточек, кнопок, инпутов и состояний фокуса.",
      "alternatives": "Для градиентной рамки со скруглением используют двойной background с padding-box и border-box.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/border-radius"
    },
    {
      "lang": "css",
      "id": "css-media-preference-queries",
      "title": "CSS: медиазапросы возможностей (@media hover, prefers-reduced-motion, print)",
      "summary": "Адаптация интерфейса под тач-экраны без залипающих ховеров, бережное отношение к вестибулярному аппарату и печать.",
      "code": "/* Ховер-эффекты применяются только на устройствах с реальным курсором мыши */\n@media (hover: hover) and (pointer: fine) {\n  .card:hover {\n    border-color: var(--accent);\n    transform: translateY(-2px);\n  }\n}\n\n/* Отключение резких движений, если в ОС включено «Уменьшение движения» */\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}",
      "example": "@media (width >= 768px) { /* Современный синтаксис диапазонов Media Queries Level 4 */ }",
      "points": [
        "На смартфонах обычный :hover «залипает» после тапа пальцем. Оборачивание ховеров в @media (hover: hover) делает мобильный интерфейс чистым.",
        "В современном CSS вместо min-width: 768px можно писать наглядные математические неравенства: @media (width >= 768px) или @media (480px <= width < 1024px)!",
        "Правило @media print позволяет скрыть шапку, сайдбар и кнопки при сохранении страницы или счёта в PDF."
      ],
      "tags": [
        "CSS",
        "media",
        "hover",
        "pointer",
        "prefers-reduced-motion",
        "print",
        "адаптивность",
        "медиазапросы"
      ],
      "when": "В каждом продакшен-проекте для корректной работы на смартфонах, десктопах и при печати.",
      "alternatives": "Для адаптации карточки под ширину конкретной колонки используй @container вместо @media.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries"
    },
    {
      "lang": "css",
      "id": "css-font-face-loading",
      "title": "CSS: подключение шрифтов (@font-face, font-display: swap, variable fonts)",
      "summary": "Правильная загрузка локальных шрифтов WOFF2 без блокировки текста и с сохранением метрик запасного шрифта.",
      "code": "@font-face {\n  font-family: 'InterVariable';\n  src: url('/fonts/Inter-Variable.woff2') format('woff2');\n  font-weight: 100 900;  /* Один вариативный файл покрывает все начертания от Thin до Black! */\n  font-style: normal;\n  font-display: swap;    /* Сразу показывает текст системным шрифтом до загрузки файла */\n}\n\nbody {\n  font-family: 'InterVariable', system-ui, -apple-system, sans-serif;\n}",
      "example": "font-feature-settings: \"cv02\", \"cv03\", \"cv04\"; /* Включение альтернативных глифов в шрифте */",
      "points": [
        "Сегодня достаточно одного формата woff2 — он поддерживается 99% браузеров и сжимает шрифт на 30% лучше старого woff/ttf.",
        "font-display: swap гарантирует, что пользователь сразу увидит текст страницы, даже при медленном мобильном интернете.",
        "Вариативный шрифт (Variable Font) заменяет собой 5–6 отдельных файлов (Regular, Medium, SemiBold, Bold), ускоряя загрузку сайта."
      ],
      "tags": [
        "CSS",
        "font-face",
        "woff2",
        "font-display",
        "swap",
        "variable fonts",
        "шрифты",
        "типографика"
      ],
      "when": "При подключении фирменных шрифтов проекта.",
      "alternatives": "Системный стек system-ui, -apple-system, Segoe UI, Roboto работает мгновенно вообще без скачивания файлов.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/@font-face"
    },
    {
      "lang": "css",
      "id": "css-columns-masonry",
      "title": "CSS: многоколоночная верстка (columns, column-gap, break-inside: avoid)",
      "summary": "Газетная раскладка текста и плиточная сетка карточек разной высоты (Masonry-эффект) на чистом CSS.",
      "code": ".masonry-gallery {\n  columns: 3 280px; /* До 3 колонок шириной минимум 280px */\n  column-gap: 16px;\n}\n\n.masonry-card {\n  break-inside: avoid; /* Запрещает разрывать карточку пополам между колонками! */\n  margin-bottom: 16px;\n}",
      "example": "column-rule: 1px solid var(--line); /* Тонкая вертикальная линия между текстовыми колонками */",
      "points": [
        "Свойство columns: 3 280px автоматически уменьшает число колонок с 3 до 2 и 1 на узких экранах без единого медиазапроса.",
        "Обязательно добавляй break-inside: avoid дочерним карточкам, иначе браузер разрежет карточку пополам при переходе в следующий столбец!",
        "Учитывай, что элементы в columns идут сверху вниз по столбцам, а не слева направо по строкам."
      ],
      "tags": [
        "CSS",
        "columns",
        "column-count",
        "break-inside",
        "masonry",
        "колонки",
        "галерея",
        "плитка"
      ],
      "when": "Для фотогалерей с картинками разной высоты, облака отзывов и длинных списков ссылок в подвале.",
      "alternatives": "Если важен строгий порядок карточек слева направо (по дате или цене), используй CSS Grid.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/columns"
    },
    {
      "lang": "css",
      "id": "css-counters",
      "title": "CSS: автоматическая нумерация секций и шагов (counter-reset, counter-increment)",
      "summary": "Генерация красивых номеров глав (01, 02, 1.1) и шагов инструкции чисто средствами CSS без хардкода цифр в HTML.",
      "code": ".steps-list {\n  counter-reset: step-counter;\n  list-style: none;\n  padding: 0;\n}\n\n.steps-list li {\n  counter-increment: step-counter;\n}\n\n.steps-list li::before {\n  /* Выводит \"01\", \"02\", \"03\" с ведущим нулём! */\n  content: counter(step-counter, decimal-leading-zero);\n  font-family: monospace;\n  color: #38bdf8;\n  margin-right: 10px;\n}",
      "example": "content: counters(section, \".\") \" \"; /* Для вложенной нумерации 1.1, 1.2, 2.1 */",
      "points": [
        "counter-reset инициализирует счётчик на родителе, counter-increment увеличивает его на каждом элементе, а counter() выводит значение в ::before.",
        "Второй параметр decimal-leading-zero автоматически форматирует числа меньше 10 с ведущим нулём (01, 02, 03).",
        "При удалении или перестановке шагов в HTML вся нумерация пересчитывается автоматически."
      ],
      "tags": [
        "CSS",
        "counter-reset",
        "counter-increment",
        "counter",
        "нумерация",
        "счётчик",
        "шаги"
      ],
      "when": "Для оформления пошаговых гайдов, оглавлений документации и нумерации строк кода.",
      "alternatives": "Для простых списков без префиксов \"01\" достаточно стилизовать нативный <ol> через li::marker.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters"
    },
    {
      "lang": "css",
      "id": "css-gap-property",
      "title": "CSS: отступы между элементами сетки (gap, row-gap, column-gap)",
      "summary": "Единое свойство внутренних промежутков между карточками для CSS Grid, Flexbox и многоколоночной верстки.",
      "code": ".cards-container {\n  display: flex;\n  flex-wrap: wrap;\n  /* 24px между рядами по вертикали, 16px между карточками по горизонтали */\n  gap: 24px 16px;\n}\n\n.toolbar {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}",
      "example": "row-gap: 20px;\ncolumn-gap: 12px;",
      "points": [
        "Свойство gap создаёт отступы ТОЛЬКО между соседними элементами, не добавляя лишних отступов по внешним краям контейнера!",
        "Если задано одно значение (gap: 16px), оно применяется и по вертикали, и по горизонтали. Если два (gap: 24px 12px) — сначала row-gap, затем column-gap.",
        "В Flexbox при использовании режимов распределения свободного места (justify-content: space-between, space-around, space-evenly) расстояние между элементами вычисляется автоматически из ширины контейнера, поэтому фиксированный gap используется с start/center/end."
      ],
      "tags": [
        "CSS",
        "gap",
        "row-gap",
        "column-gap",
        "flex",
        "grid",
        "отступы",
        "сетка"
      ],
      "when": "В любых флекс- и грид-контейнерах вместо старых отрицательных margin и :not(:last-child).",
      "alternatives": "В обычном блочном потоке (display: block) свойство gap не работает — там используют margin-bottom.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/gap"
    },
    {
      "lang": "css",
      "id": "css-place-items-centering",
      "title": "CSS: мгновенное центрирование блока (place-items: center и place-content)",
      "summary": "Самый короткий способ отцентрировать элемент по вертикали и горизонтали в две строчки через CSS Grid.",
      "code": ".center-box {\n  display: grid;\n  place-items: center; /* Сокращение для align-items: center + justify-items: center */\n  min-height: 300px;\n}\n\n/* Наложение двух элементов друг на друга в одной ячейке без position: absolute! */\n.hero-stack {\n  display: grid;\n  place-items: center;\n}\n.hero-stack > * {\n  grid-area: 1 / 1;\n}",
      "example": "margin: auto; /* Внутри display: flex или display: grid также центрирует дочерний блок! */",
      "points": [
        "display: grid; place-items: center; — самый лаконичный способ отцентрировать иконку в кнопке или карточку на экране.",
        "Трюк grid-area: 1 / 1 для всех детей грида помещает фоновую картинку и текст в одну ячейку друг над другом без вырывания из потока через position: absolute!",
        "Внутри флекс- или грид-контейнера дочернему элементу можно просто написать margin: auto для центрирования."
      ],
      "tags": [
        "CSS",
        "place-items",
        "place-content",
        "align-items",
        "justify-content",
        "центрирование",
        "grid"
      ],
      "when": "Для центрирования иконок, заглушек пустых состояний (empty state), лоадеров и модалок.",
      "alternatives": "Старое центрирование через position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) длиннее и вырывает блок из потока.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/place-items"
    },
    {
      "lang": "css",
      "id": "css-text-decoration-underline",
      "title": "CSS: красивое подчёркивание ссылок (text-underline-offset и text-decoration-thickness)",
      "summary": "Тонкая настройка отступа, толщины и цвета линии подчёркивания текста без костылей с border-bottom.",
      "code": "a {\n  color: #38bdf8;\n  text-decoration: underline;\n  text-decoration-color: rgba(56, 189, 248, 0.35);\n  text-decoration-thickness: 1.5px;\n  text-underline-offset: 4px; /* Опускает линию на 4px ниже базовой линии букв! */\n  transition: text-decoration-color 150ms ease;\n}\n\na:hover {\n  text-decoration-color: #38bdf8;\n}",
      "example": "text-decoration-style: dashed; /* Пунктирное подчёркивание для тултипов и модальных ссылок */",
      "points": [
        "Раньше для красивого отступа линии под ссылкой приходилось отключать text-decoration и лепить border-bottom, который ломался на многострочных ссылках!",
        "Свойство text-underline-offset: 4px аккуратно отодвигает нативное подчёркивание вниз и отлично работает даже если ссылка перенеслась на 2–3 строки.",
        "Браузер по умолчанию включает text-decoration-skip-ink: auto, чтобы линия не перечёркивала нижние хвостики букв «р», «у», «д», «ц»."
      ],
      "tags": [
        "CSS",
        "text-underline-offset",
        "text-decoration",
        "text-decoration-color",
        "подчёркивание",
        "ссылки",
        "типографика"
      ],
      "when": "Для всех текстовых ссылок в статьях, документации и навигации.",
      "alternatives": "Анимированную линию, выезжающую слева направо, делают через background-image: linear-gradient(...) и background-size.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset"
    },
    {
      "lang": "css",
      "id": "css-Sticky-table-header",
      "title": "CSS: липкая шапка таблицы (sticky <th>) и фиксированная первая колонка",
      "summary": "Закрепление заголовков столбцов при вертикальной прокрутке больших таблиц данных и прайс-листов.",
      "code": ".table-scroll {\n  max-height: 420px;\n  overflow: auto;\n  border: 1px solid var(--line);\n}\n\ntable {\n  width: 100%;\n  border-collapse: separate; /* Важно для сохранения рамок у sticky-ячеек! */\n  border-spacing: 0;\n}\n\nthead th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: #121827; /* Непрозрачный фон обязателен, чтобы строки не просвечивали */\n  border-bottom: 1px solid var(--line-strong);\n}",
      "example": "tbody th:first-child {\n  position: sticky;\n  left: 0;\n  background: #0e1320;\n}",
      "points": [
        "При position: sticky на ячейках <th> используй border-collapse: separate; border-spacing: 0 вместо border-collapse: collapse — иначе нижняя рамка шапки пропадёт при скролле!",
        "Обязательно задай ячейкам <th> плотный непрозрачный background, чтобы прокручиваемые строки таблицы не просвечивали сквозь шапку.",
        "Аналогично через position: sticky; left: 0 можно зафиксировать первый столбец с названиями товаров при горизонтальном скролле на телефоне."
      ],
      "tags": [
        "CSS",
        "table",
        "sticky",
        "thead",
        "th",
        "border-collapse",
        "липкая шапка",
        "таблица"
      ],
      "when": "В админ-панелях, CRM, таблицах сравнения характеристик и финансовых отчётах.",
      "alternatives": "Две отдельные таблицы (одна для шапки, вторая для тела) ломают совпадение ширины колонок.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/border-collapse"
    },
    {
      "lang": "css",
      "id": "css-sr-only-visually-hidden",
      "title": "CSS: доступное скрытие текста для скринридеров (.visually-hidden / .sr-only)",
      "summary": "Стандартный паттерн скрытия подписи кнопки или заголовка секции для глаз с полным сохранением для голосового чтения.",
      "code": ".sr-only,\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}",
      "example": "<button type=\"button\">\n  <svg aria-hidden=\"true\">...</svg>\n  <span class=\"sr-only\">Удалить из избранного</span>\n</button>",
      "points": [
        "Обычные display: none и visibility: hidden полностью вырезают элемент и для глаз, и для программ экранного доступа (скринридеров)!",
        "Класс .sr-only (screen reader only) сжимает текст до 1 пикселя без удаления из дерева доступности — незрячий пользователь услышит чёткую подпись кнопки.",
        "Полезно также для ссылки «Перейти к основному контенту» (.skip-link:focus-visible), которая проявляется при первом нажатии Tab."
      ],
      "tags": [
        "CSS",
        "sr-only",
        "visually-hidden",
        "accessibility",
        "a11y",
        "скринридер",
        "скрыть элемент"
      ],
      "when": "Для кнопок, содержащих только иконку, скрытых заголовков секций и таблиц.",
      "alternatives": "На самой кнопке без текста можно также использовать атрибут aria-label=\"Удалить\".",
      "url": "https://www.w3.org/WAI/tutorials/forms/labels/#note-on-hiding-elements"
    },
    {
      "lang": "css",
      "id": "css-will-change-contain",
      "title": "CSS: аппаратное ускорение и изоляция рендеринга (contain, content-visibility: auto)",
      "summary": "Кратный прирост скорости отрисовки длинных страниц с сотнями карточек за счёт пропуска рендеринга вне экрана.",
      "code": ".catalog-card,\n.doc-section {\n  /* Браузер пропускает расчёт лейаута и отрисовку карточек, находящихся далеко за пределами экрана! */\n  content-visibility: auto;\n  /* Примерная высота карточки, чтобы ползунок скроллбара не прыгал */\n  contain-intrinsic-size: auto 260px;\n}",
      "example": "/* Прирост скорости начальной отрисовки на длинных списках достигает 3–5 раз! */",
      "points": [
        "content-visibility: auto — одно из самых мощных свойств современного CSS: браузер не тратит ресурсы на рендеринг блоков, пока пользователь не подскроллит к ним!",
        "Свойство contain-intrinsic-size: auto 260px сообщает браузеру ориентировочную высоту скрытого блока, чтобы общая высота страницы оставалась точной.",
        "Свойство will-change: transform ставь точечно только на элементы, которые реально постоянно двигаются (иначе переполнится видеопамять GPU)."
      ],
      "tags": [
        "CSS",
        "content-visibility",
        "contain-intrinsic-size",
        "contain",
        "will-change",
        "производительность",
        "оптимизация"
      ],
      "when": "На длинных страницах документации, лендингах с 10+ секциями и больших списках карточек.",
      "alternatives": "Виртуализация списков на JS (Virtual Scroll) сложнее и ломает встроенный поиск по странице Ctrl+F.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility"
    },
    {
      "lang": "css",
      "id": "css-attribute-selectors",
      "title": "CSS: селекторы по атрибутам ([href^=\"https\"], [href$=\".pdf\"], [data-*])",
      "summary": "Автоматическая стилизация внешних ссылок, ссылок на скачивание документов и состояний компонентов без лишних классов.",
      "code": "/* Все внешние ссылки, начинающиеся с https:// */\na[href^=\"https://\"]:not([href*=\"devshelf.ru\"])::after {\n  content: \" ↗\";\n}\n\n/* Все ссылки, заканчивающиеся на .pdf или .zip */\na[href$=\".pdf\"]::before {\n  content: \"📄 \";\n}\n\n/* Поиск подстроки в любом месте атрибута без учёта регистра (флаг i) */\nimg[src*=\".svg\" i] {\n  display: inline-block;\n}",
      "example": "[aria-expanded=\"true\"] .chevron { rotate: 180deg; }",
      "points": [
        "[attr^=\"val\"] проверяет начало строки, [attr$=\"val\"] — конец строки, а [attr*=\"val\"] — вхождение подстроки в любом месте!",
        "Флаг i перед закрывающей скобкой ([href$=\".pdf\" i]) делает проверку нечувствительной к регистру (.PDF и .pdf).",
        "Привязка стилей к ARIA-состояниям ([aria-selected=\"true\"], [aria-expanded=\"true\"]) избавляет от рассинхрона между визуальным классом .active и доступностью."
      ],
      "tags": [
        "CSS",
        "attribute selectors",
        "href",
        "data",
        "aria",
        "селекторы атрибутов",
        "ссылки"
      ],
      "when": "Для автоматической маркировки внешних ссылок, файлов для скачивания и стилизации ARIA-компонентов.",
      "alternatives": "Ручное проставление класса .external-link на каждой ссылке в статьях легко забыть.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/Attribute_selectors"
    },
    {
      "lang": "css",
      "id": "css-combinators",
      "title": "CSS: комбинаторы селекторов (>, +, ~) и паттерн «Лоботомированная сова» (* + *)",
      "summary": "Точный выбор непосредственных детей, следующего соседа и автоматические отступы между блоками статьи.",
      "code": "/* Только прямые дочерние li первого уровня (не трогая вложенные подменю) */\n.menu > li {\n  padding-inline: 12px;\n}\n\n/* Классический ритм статьи: отступ сверху у каждого элемента, за которым кто-то идёт (* + *) */\n.prose > * + * {\n  margin-top: 1em;\n}\n\n/* Подпись сразу после заголовка h2 имеет уменьшенный отступ */\n.prose > h2 + p {\n  margin-top: 0.4em;\n}",
      "example": "input:checked + .slider-thumb { translate: 20px 0; }",
      "points": [
        "Комбинатор > выбирает только прямых детей (первый уровень вложенности), защищая вложенные компоненты от протечки стилей.",
        "Комбинатор + (следующий сосед) выбирает элемент, который идёт СРАЗУ после первого (идеально для связки input:checked + label и h2 + p).",
        "Паттерн .prose > * + * задаёт верхний отступ всем элементам внутри статьи, кроме самого первого, создавая идеальный вертикальный ритм!"
      ],
      "tags": [
        "CSS",
        "combinators",
        "child",
        "sibling",
        "owl",
        "комбинаторы",
        "соседний селектор",
        "ритм"
      ],
      "when": "При оформлении текстовых статей (.prose), кастомных переключателей (checkbox + span) и многоуровневых меню.",
      "alternatives": "Для одномерных списков карточек и кнопок проще использовать display: flex; flex-direction: column; gap: 16px.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_selectors/Selectors_and_combinators"
    },
    {
      "lang": "css",
      "id": "css-min-max-fit-content",
      "title": "CSS: адаптивные ключевые слова размеров (min-content, max-content, fit-content)",
      "summary": "Подстройка ширины блока ровно под длину текста внутри него без растягивания на всю ширину родителя.",
      "code": ".section-badge {\n  /* Блок сжимается ровно по ширине текста, но не шире 100% экрана на мобильном! */\n  width: fit-content;\n  padding: 4px 12px;\n  border: 1px solid var(--line);\n}\n\n.pricing-grid {\n  display: grid;\n  /* Первая колонка ровно по ширине самой длинной подписи, вторая забирает остаток */\n  grid-template-columns: max-content 1fr;\n}",
      "example": "width: fit-content;\nmargin-inline: auto; /* Центрирует блок по ширине его контента без inline-block! */",
      "points": [
        "width: fit-content — волшебное свойство: блок обтягивает свой текст как inline-block, но при этом остаётся блочным (его можно отцентрировать через margin-inline: auto) и переносит строки, если экран уже текста!",
        "max-content разворачивает текст в одну длинную строку без переносов (удобно для колонок с датами и ценами в гриде).",
        "min-content сжимает блок до ширины самого длинного слова внутри него."
      ],
      "tags": [
        "CSS",
        "fit-content",
        "max-content",
        "min-content",
        "width",
        "размеры",
        "центрирование"
      ],
      "when": "Для бейджей, тегов, центрируемых заголовков с рамкой, цитат и колонок CSS Grid.",
      "alternatives": "display: inline-block не позволяет отцентрировать сам элемент через margin: 0 auto без text-align на родителе.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content"
    },
    {
      "lang": "css",
      "id": "css-blend-modes-masks",
      "title": "CSS: режимы наложения (mix-blend-mode) и градиентные маски затухания (mask-image)",
      "summary": "Плавное растворение краёв прокручиваемого списка или кода в прозрачность на любом фоне.",
      "code": "/* Плавное растворение правого края длинной строки табов или кода в прозрачность */\n.scroll-fade-right {\n  -webkit-mask-image: linear-gradient(to right, #000 85%, transparent 100%);\n  mask-image: linear-gradient(to right, #000 85%, transparent 100%);\n}\n\n/* Плавное растворение текста снизу в превью статьи */\n.article-preview {\n  mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);\n}",
      "example": "mix-blend-mode: overlay; /* Наложение текстуры или свечения на фон */",
      "points": [
        "Почему mask-image лучше наложенного поверх градиента? Потому что mask-image делает прозрачным сам элемент, и под ним может быть любой сложный фон, картинка или смена темы оформления!",
        "Внутри mask-image чёрный цвет (#000, непрозрачный) означает 100% видимую область, а transparent — полностью скрытую.",
        "Свойство mix-blend-mode: multiply позволяет мгновенно убрать белый фон у логотипа на светлой странице."
      ],
      "tags": [
        "CSS",
        "mask-image",
        "mix-blend-mode",
        "background-blend-mode",
        "маска",
        "затухание",
        "прозрачность"
      ],
      "when": "Для горизонтальных списков табов, превью заблокированных статей и каруселей логотипов.",
      "alternatives": "Костыль с position: absolute и градиентом в цвет фона ломается при переключении тёмной/светлой темы.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/mask-image"
    },
    {
      "lang": "css",
      "id": "css-property-houdini",
      "title": "CSS: типизированные переменные @property (плавная анимация градиентов и чисел)",
      "summary": "Регистрация типа CSS-переменной (<angle>, <color>, <length>), позволяющая плавно анимировать градиенты в браузере.",
      "code": "@property --gradient-angle {\n  syntax: '<angle>';\n  initial-value: 0deg;\n  inherits: false;\n}\n\n.animated-border {\n  background: conic-gradient(from var(--gradient-angle), #38bdf8, #818cf8, #38bdf8);\n  animation: spin-angle 4s linear infinite;\n}\n\n@keyframes spin-angle {\n  to { --gradient-angle: 360deg; }\n}",
      "example": "/* Без @property браузер считает переменную обычной строкой и не может плавно менять её от 0deg до 360deg */",
      "points": [
        "По умолчанию CSS-переменные не имеют типа, поэтому браузер не умеет плавно интерполировать их внутри linear-gradient или conic-gradient.",
        "Директива @property сообщает движку CSS точный тип переменной (<angle>, <color>, <percentage>, <number>), открывая полноценную анимацию через transition и @keyframes!",
        "Параметр initial-value обязателен при объявлении @property."
      ],
      "tags": [
        "CSS",
        "@property",
        "houdini",
        "custom properties",
        "переменные",
        "анимация градиента",
        "conic-gradient"
      ],
      "when": "Для анимированных градиентных рамок, плавной смены цветов градиента при ховере и круговых прогресс-баров.",
      "alternatives": "Вращение огромного псевдоэлемента ::before через transform: rotate(360deg) требует overflow: hidden.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@property"
    },
    {
      "lang": "css",
      "id": "css-starting-style-discrete",
      "title": "CSS: плавная анимация появления из display: none (@starting-style и allow-discrete)",
      "summary": "Современный стандарт CSS для плавного открытия и закрытия модальных окон <dialog> и поповеров без JS-таймеров.",
      "code": "dialog {\n  opacity: 0;\n  transform: scale(0.95);\n  transition:\n    opacity 200ms ease,\n    transform 200ms ease,\n    display 200ms allow-discrete,\n    overlay 200ms allow-discrete;\n}\n\ndialog[open] {\n  opacity: 1;\n  transform: scale(1);\n\n  /* Начальная точка анимации в момент перехода из display: none в открытое состояние! */\n  @starting-style {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n}",
      "example": "/* Позволяет плавно анимировать и открытие, и закрытие нативного <dialog> и [popover] */",
      "points": [
        "Раньше элемент, появляющийся из display: none, прыгал мгновенно без transition. Правило @starting-style задаёт стартовые стили первого кадра появления!",
        "Ключевое слово transition-behavior: allow-discrete удерживает элемент в DOM на время анимации закрытия (200ms), прежде чем применить display: none.",
        "Свойство overlay в списке transition удерживает модалку в верхнем слое (#top-layer) до конца плавного затухания."
      ],
      "tags": [
        "CSS",
        "@starting-style",
        "allow-discrete",
        "dialog",
        "popover",
        "анимация появления",
        "display none"
      ],
      "when": "При стилизации нативных модальных окон <dialog>, выпадающих меню [popover] и добавляемых в DOM карточек.",
      "alternatives": "Для старых браузеров используют покадровую анимацию animation: fadeIn 200ms ease.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style"
    },
    {
      "lang": "css",
      "id": "css-line-height-letter-spacing",
      "title": "CSS: ритм текста (line-height, letter-spacing, max-width: 65ch)",
      "summary": "Профессиональные пропорции межстрочного интервала и межбуквенного расстояния для заголовков и основного текста.",
      "code": "body {\n  font-size: 16px;\n  line-height: 1.6;        /* Безразмерный множитель (1.5–1.65) для комфортного чтения абзацев */\n  letter-spacing: -0.01em;\n}\n\nh1, h2, h3 {\n  line-height: 1.18;       /* У крупных заголовков межстрочный интервал всегда плотнее! */\n  letter-spacing: -0.025em;/* Лёгкая отрицательная разрядка собирает крупный заголовок */\n}\n\n.uppercase-badge {\n  text-transform: uppercase;\n  letter-spacing: 0.06em;  /* У КАПСА разрядку наоборот всегда увеличивают! */\n}",
      "example": "/* Всегда задавай line-height без единиц измерения (1.5, а не 24px), чтобы он масштабировался от шрифта */",
      "points": [
        "Золотое правило типографики: чем крупнее шрифт (заголовки h1), тем меньше line-height (1.1–1.25) и плотнее letter-spacing (-0.02em ... -0.03em).",
        "И наоборот: у мелкого текста, набранного ЗАГЛАВНЫМИ БУКВАМИ (uppercase), обязательно раздвигай буквы в плюс (letter-spacing: 0.05em–0.08em), иначе они слипнутся!",
        "Задавай line-height безразмерным числом (1.6), а не в px или %, чтобы дочерние элементы корректно наследовали пропорцию."
      ],
      "tags": [
        "CSS",
        "line-height",
        "letter-spacing",
        "uppercase",
        "типографика",
        "межстрочный интервал",
        "кернинг"
      ],
      "when": "В базовой таблице стилей любого сайта для настройки заголовков, статей и бейджей.",
      "alternatives": "Стандартный браузерный line-height: normal (~1.2) слишком тесен для чтения длинных статей.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/line-height"
    },
    {
      "lang": "css",
      "id": "css-white-space-word-break",
      "title": "CSS: управление переносами строк (white-space, overflow-wrap, hyphens)",
      "summary": "Запрет разрыва цен и кнопок на две строки (nowrap) и защита карточек от распирания длинными ссылками.",
      "code": "/* Кнопки, бейджи и цены с символом рубля никогда не разрываются на две строки */\n.btn, .price-tag {\n  white-space: nowrap;\n}\n\n/* Длинные токены, URL и слова без пробелов аккуратно переносятся внутри карточки */\n.comment-text {\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n\n/* Блок кода сохраняет все отступы и переносы строк из исходника */\npre code {\n  white-space: pre;\n}",
      "example": "white-space: pre-wrap; /* Сохраняет переносы строк \n из textarea, но переносит длинные строки по ширине блока! */",
      "points": [
        "white-space: nowrap запрещает перенос текста на новую строку — обязательно используй его на кнопках, табах и ценах («1 490 ₽»).",
        "white-space: pre-wrap незаменим при выводе текста комментария или описания из <textarea>: он сохраняет абзацы пользователя (\n), не создавая горизонтального скролла!",
        "overflow-wrap: anywhere гарантирует, что длинная ссылка в узкой колонке грида перенесётся, а не раздует всю сетку."
      ],
      "tags": [
        "CSS",
        "white-space",
        "nowrap",
        "pre-wrap",
        "overflow-wrap",
        "word-break",
        "перенос текста"
      ],
      "when": "Для кнопок и цен (nowrap), вывода пользовательских сообщений (pre-wrap) и защиты узких карточек (overflow-wrap).",
      "alternatives": "Для неразрывного пробела между числом и знаком валюты в HTML также можно использовать символ &nbsp;.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/white-space"
    },
    {
      "lang": "css",
      "id": "css-grid-auto-flow-dense",
      "title": "CSS: плотная упаковка сетки (grid-auto-flow: dense) и span ячеек",
      "summary": "Построение бенто-сеток (Bento Grid) с карточками разного размера (2×1, 2×2) и автоматическим заполнением пустот.",
      "code": ".bento-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  grid-auto-rows: 180px;\n  grid-auto-flow: dense; /* Автоматически подтягивает маленькие карточки в пустые дырки сетки! */\n  gap: 16px;\n}\n\n.card-wide {\n  grid-column: span 2;   /* Занимает 2 колонки по ширине */\n}\n\n.card-tall {\n  grid-row: span 2;      /* Занимает 2 ряда по высоте */\n}",
      "example": "@media (max-width: 600px) {\n  .card-wide { grid-column: span 1; }\n}",
      "points": [
        "Ключевое слово span 2 в grid-column или grid-row растягивает карточку на две соседние ячейки без жёсткой привязки к номерам линий.",
        "Свойство grid-auto-flow: dense разрешает браузеру переставить следующую маленькую карточку (1×1) наверх, если перед широкой карточкой (2×1) осталась свободная ячейка!",
        "На мобильных экранах (где всего 1 колонка) не забудь сбросить .card-wide { grid-column: span 1; }, чтобы сетка не создала вторую скрытую колонку."
      ],
      "tags": [
        "CSS",
        "grid-auto-flow",
        "dense",
        "bento grid",
        "grid-column",
        "grid-row",
        "span",
        "бенто сетка"
      ],
      "when": "При верстке современных продуктовых витрин в стиле Bento Grid, дашбордов и фотогалерей.",
      "alternatives": "Без dense перед крупной карточкой может остаться пустая дырка в конце строки.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/grid-auto-flow"
    },
    {
      "lang": "css",
      "id": "css-cursor-caret-scroll",
      "title": "CSS: стилизация курсора ввода (caret-color), выделения и скролла",
      "summary": "Детали полировки интерфейса: фирменный цвет мигающего курсора в инпутах и плавная прокрутка.",
      "code": "input, textarea, [contenteditable] {\n  caret-color: #38bdf8; /* Цвет мигающей вертикальной палочки курсора при наборе текста */\n}\n\nbutton:disabled,\ninput:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n\n.draggable-handle {\n  cursor: grab;\n}\n.draggable-handle:active {\n  cursor: grabbing;\n}",
      "example": "cursor: pointer;",
      "points": [
        "Свойство caret-color перекрашивает мигающий текстовый курсор внутри инпутов и редакторов кода под акцентный цвет бренда.",
        "Для перетаскиваемых карточек используй пару курсоров cursor: grab в покое и cursor: grabbing при зажатой кнопке мыши (:active).",
        "На заблокированных кнопках (:disabled) ставь cursor: not-allowed для понятной обратной связи."
      ],
      "tags": [
        "CSS",
        "caret-color",
        "cursor",
        "grab",
        "not-allowed",
        "курсор",
        "инпут"
      ],
      "when": "При тонкой настройке полей ввода, редакторов кода и drag-and-drop списков.",
      "alternatives": "Не ставь cursor: pointer на некликабельные карточки — это вводит пользователя в заблуждение.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/caret-color"
    },
    {
      "lang": "css",
      "id": "css-visibility-opacity-display",
      "title": "CSS: разница между display: none, visibility: hidden, opacity: 0 и content-visibility",
      "summary": "Шпаргалка по 4 способам скрытия элемента: влияние на поток документа, клики мышью, скринридеры и анимацию.",
      "code": "/* 1. Полное удаление из верстки и дерева доступности (нельзя анимировать плавно без allow-discrete) */\n.is-removed { display: none; }\n\n/* 2. Место в сетке сохраняется, но элемент невидим и НЕ кликабелен */\n.is-invisible { visibility: hidden; }\n\n/* 3. Прозрачен, но ОСТАЁТСЯ кликабельным! Всегда комбинируй с pointer-events: none */\n.is-faded {\n  opacity: 0;\n  pointer-events: none;\n}",
      "example": ".dropdown {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 200ms, visibility 200ms;\n}",
      "points": [
        "Главная ошибка новичков: скрыть выпадающее меню или попап только через opacity: 0! Невидимое меню продолжит перехватывать все клики мышью по кнопкам под ним. Обязательно добавляй visibility: hidden или pointer-events: none!",
        "Связка opacity: 0 + visibility: hidden идеально анимируется через transition: элемент плавно растворяется и после этого перестаёт реагировать на мышь и клавишу Tab.",
        "display: none полностью освобождает занимаемое блоком место в потоке."
      ],
      "tags": [
        "CSS",
        "display none",
        "visibility hidden",
        "opacity",
        "скрыть элемент",
        "разница",
        "анимация"
      ],
      "when": "При реализации выпадающих меню, тултипов, модальных окон и табов.",
      "alternatives": "Для скрытия текста только от глаз с сохранением для скринридера используй паттерн .sr-only.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/visibility"
    },
    {
      "lang": "css",
      "id": "css-writing-mode-text-orientation",
      "title": "CSS: вертикальный текст (writing-mode: vertical-rl) и поворот подписей",
      "summary": "Оформление вертикальных боковых подписей секций, корешков книг и заголовков узких столбцов таблицы.",
      "code": ".side-label {\n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n  transform: rotate(180deg); /* Чтобы текст читался снизу вверх */\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}",
      "example": "writing-mode: horizontal-tb; /* Стандартный горизонтальный режим по умолчанию */",
      "points": [
        "В отличие от transform: rotate(-90deg), свойство writing-mode: vertical-rl честно меняет блочную модель: ширина блока становится узкой по высоте букв, и соседние элементы аккуратно прижимаются к нему!",
        "Добавление transform: rotate(180deg) к vertical-rl разворачивает строку так, чтобы она читалась снизу вверх (привычно для европейских корешков и боковых лейблов).",
        "Очень удобно для узких заголовков столбцов таблицы с чекбоксами или датами."
      ],
      "tags": [
        "CSS",
        "writing-mode",
        "vertical-rl",
        "text-orientation",
        "вертикальный текст",
        "типографика"
      ],
      "when": "Для декоративных боковых индикаторов секций, билетов, бейджей и компактных таблиц.",
      "alternatives": "Поворот через rotate(-90deg) оставляет вокруг элемента старую широкую горизонтальную коробку.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/writing-mode"
    },
    {
      "lang": "css",
      "id": "css-scroll-margin-padding",
      "title": "CSS: отступ при прокрутке к якорю (scroll-margin-top под фиксированную шапку)",
      "summary": "Изящное решение проблемы, когда при клике по оглавлению заголовок секции прячется под фиксированным навбаром.",
      "code": "/* Задаём всем заголовкам с id запас сверху, равный высоте шапки (56px) + 20px воздуха! */\nh2[id],\nh3[id],\nsection[id] {\n  scroll-margin-top: 76px;\n}",
      "example": "html {\n  scroll-behavior: smooth;\n}",
      "points": [
        "Когда на сайте есть sticky или fixed шапка высотой 56px, переход по ссылке <a href=\"#faq\"> прижимает заголовок #faq к самому верху окна — прямо ПОД шапку!",
        "Одно свойство scroll-margin-top: 76px на целевых секциях заставляет браузер останавливать прокрутку ровно на 76px выше заголовка.",
        "Работает как при клике по якорной ссылке #hash, так и при вызове element.scrollIntoView() из JavaScript!"
      ],
      "tags": [
        "CSS",
        "scroll-margin-top",
        "scroll-padding-top",
        "anchor",
        "sticky",
        "якорь",
        "оглавление",
        "шапка"
      ],
      "when": "На всех страницах с фиксированной шапкой и якорной навигацией (лендинги, документация, статьи).",
      "alternatives": "Раньше для этого городили невидимые псевдоэлементы ::before с отрицательным margin-top.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top"
    },
    {
      "lang": "css",
      "id": "css-inset-center-absolute",
      "title": "CSS: центрирование абсолютного/фиксированного блока через inset: 0 и margin: auto",
      "summary": "Современный способ центрирования модалки или иконки с известными размерами без сдвига translate(-50%, -50%).",
      "code": ".floating-dialog {\n  position: fixed;\n  inset: 0;              /* Растягивает привязку ко всем 4 краям экрана (top/right/bottom/left: 0) */\n  width: min(480px, 92vw);\n  height: fit-content;   /* Высота подстраивается под контент внутри! */\n  margin: auto;          /* Браузер сам центрирует блок по вертикали и горизонтали! */\n}",
      "example": ".badge-center {\n  position: absolute;\n  inset-inline: 0;\n  margin-inline: auto;\n  width: max-content;\n}",
      "points": [
        "Благодаря поддержке height: fit-content и width: fit-content теперь можно центрировать абсолютный или фиксированный блок через inset: 0; margin: auto; даже не зная его точной высоты в пикселях!",
        "В отличие от transform: translate(-50%, -50%), этот способ оставляет свойство transform свободным для анимаций scale() и не размывает шрифты на нечётных пикселях.",
        "Для центрирования только по горизонтали используй пару inset-inline: 0; margin-inline: auto;."
      ],
      "tags": [
        "CSS",
        "inset",
        "margin auto",
        "absolute",
        "fixed",
        "fit-content",
        "центрирование"
      ],
      "when": "При позиционировании всплывающих окон, тостов по центру, тултипов и декоративных плашек.",
      "alternatives": "Если родитель не обязан быть absolute, проще задать родителю display: grid; place-items: center;.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/inset"
    },
    {
      "lang": "css",
      "id": "css-selection-scrollbar-styling",
      "title": "CSS: кроссбраузерная стилизация полос прокрутки (scrollbar-width и ::-webkit-scrollbar)",
      "summary": "Аккуратные тёмные и тонкие скроллбары для редакторов кода, боковых панелей и модальных окон.",
      "code": "/* Стандартное свойство (Firefox, Chrome 121+, Edge) */\n.custom-scroll {\n  scrollbar-width: thin;\n  scrollbar-color: rgba(148, 163, 184, 0.3) transparent;\n}\n\n/* Тонкая настройка для WebKit / Safari */\n.custom-scroll::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.custom-scroll::-webkit-scrollbar-thumb {\n  background: rgba(148, 163, 184, 0.3);\n  border-radius: 3px;\n}",
      "example": ":root { color-scheme: dark; } /* Автоматически делает системный скроллбар тёмным! */",
      "points": [
        "Прежде чем городить кастомный скроллбар, проверь: свойство color-scheme: dark на :root само переключает стандартный белый скроллбар Windows в аккуратный тёмный режим!",
        "Свойство scrollbar-width: thin и scrollbar-color теперь поддерживаются и в Firefox, и в современных версиях Chrome/Edge.",
        "Никогда не скрывай скроллбар полностью (scrollbar-width: none) на длинных блоках кода или текста, иначе пользователь с мышью не поймёт, что контент можно прокрутить."
      ],
      "tags": [
        "CSS",
        "scrollbar",
        "scrollbar-width",
        "scrollbar-color",
        "webkit-scrollbar",
        "полоса прокрутки"
      ],
      "when": "Во внутренних панелях сайдбара, блоках кода <pre>, выпадающих списках и чатах.",
      "alternatives": "Для горизонтальной ленты табов на мобильном экране допустимо скрыть полосу через scrollbar-width: none.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width"
    },
    {
      "lang": "css",
      "id": "css-list-style-details-marker",
      "title": "CSS: кастомные маркеры списков (::marker, list-style-type: \"→ \")",
      "summary": "Замена стандартных круглых точек списка на любой символ, тире или эмодзи прямо в CSS-свойстве list-style-type.",
      "code": "/* Любая строка в кавычках как маркер списка! */\n.feature-list {\n  list-style-type: \"✓ \";\n  padding-left: 20px;\n}\n\n.feature-list li {\n  padding-left: 6px;\n}\n\n.feature-list li::marker {\n  color: #10b981;\n  font-weight: 700;\n}",
      "example": "list-style-type: \"— \"; /* Классическое русское тире в качестве буллита списка */",
      "points": [
        "Мало кто знает, что в свойство list-style-type можно передать любую строку в кавычках: list-style-type: \"→ \", \"— \" или \"✓ \"!",
        "Псевдоэлемент li::marker позволяет покрасить этот символ в акцентный цвет и задать ему жирный шрифт, не создавая ручных псевдоэлементов ::before с position: absolute.",
        "При сбросе маркеров навигационного меню через list-style: none в Safari старых версий используй семантический тег <nav> вокруг <ul>, чтобы сохранить роль списка."
      ],
      "tags": [
        "CSS",
        "list-style-type",
        "marker",
        "ul",
        "li",
        "список",
        "маркеры",
        "буллиты"
      ],
      "when": "В списках преимуществ тарифа («✓ Безлимитный трафик»), чек-листах и текстовых статьях.",
      "alternatives": "Если в качестве буллита нужна многоцветная SVG-иконка, используй display: flex на li или background-image.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/list-style-type"
    },
    {
      "lang": "css",
      "id": "css-object-position-background-attachment",
      "title": "CSS: фокус кадрирования фото (object-position) и плавная загрузка картинок",
      "summary": "Смещение точки фокуса при обрезке портретов через object-fit: cover, чтобы у людей на фото не обрезалась голова.",
      "code": ".portrait-photo {\n  width: 100%;\n  height: 280px;\n  object-fit: cover;\n  /* Фокус по горизонтали в центре (50%), а по вертикали ближе к верху (20%), чтобы сохранить лицо в кадре! */\n  object-position: 50% 20%;\n  background-color: #121827; /* Цвет-заглушка до загрузки картинки */\n}",
      "example": "object-position: top center;",
      "points": [
        "По умолчанию object-fit: cover центрирует фото строго посередине (50% 50%), из-за чего на вертикальных портретах часто обрезается макушка головы. Свойство object-position: 50% 20% решает эту проблему!",
        "Задавай тегу <img> спокойный фоновый цвет background-color: var(--panel), чтобы во время подгрузки картинки не было пустой дырки.",
        "Стилизовать текст атрибута alt (на случай битой картинки) можно прямо в CSS на самом селекторе img."
      ],
      "tags": [
        "CSS",
        "object-position",
        "object-fit",
        "cover",
        "img",
        "портрет",
        "кадрирование",
        "фото"
      ],
      "when": "В карточках команды, аватарах, обложках статей и баннерах с людьми.",
      "alternatives": "Для фоновых декоративных картинок аналогично работает свойство background-position: 50% 20%.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/object-position"
    },
    {
      "lang": "css",
      "id": "css-touch-action-overscroll",
      "title": "CSS: отзывчивость на тач-экранах (touch-action: manipulation и -webkit-tap-highlight-color)",
      "summary": "Отключение синей вспышки при тапе на Android/iOS и мгновенный отклик кнопок без задержки двойного зума.",
      "code": "html {\n  /* Убирает стандартную полупрозрачную синюю/серую вспышку при тапе пальцем на смартфонах */\n  -webkit-tap-highlight-color: transparent;\n}\n\nbutton, a, input, label {\n  /* Разрешает скролл и пинч-зум, но отключает задержку ожидания двойного тапа на кнопках! */\n  touch-action: manipulation;\n}",
      "example": ".canvas-drawing-area {\n  touch-action: none; /* Перехватывает движения пальца для рисования без прокрутки страницы */\n}",
      "points": [
        "-webkit-tap-highlight-color: transparent убирает грубую системную подсветку тапа на мобильных устройствах, позволяя использовать собственные аккуратные стили :active.",
        "touch-action: manipulation делает быстрые многократные нажатия по кнопкам («+ / -» количества товара в корзине) мгновенными без срабатывания зума браузера.",
        "На кастомных ползунках и холстах <canvas> используй touch-action: none или touch-action: pan-y, чтобы движение пальца влево-вправо не дёргало страницу."
      ],
      "tags": [
        "CSS",
        "touch-action",
        "tap-highlight-color",
        "manipulation",
        "mobile",
        "тач",
        "смартфон",
        "кнопки"
      ],
      "when": "В базовом CSS-сбросе любого веб-приложения и PWA.",
      "alternatives": "При отключении tap-highlight обязательно задай заметный отклик кнопки через :active { transform: scale(0.98); }.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/touch-action"
    },
    {
      "lang": "css",
      "id": "css-grid-minmax-auto-fill-vs-fit",
      "title": "CSS Grid: разница между auto-fill и auto-fit в адаптивной сетке",
      "summary": "Наглядное объяснение того, как ведёт себя строка сетки, когда карточек в ней меньше, чем помещается по ширине экрана.",
      "code": "/* 1. auto-fill: сохраняет пустые колонки справа — одна карточка НЕ растянется на весь экран! */\n.catalog-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));\n  gap: 16px;\n}\n\n/* 2. auto-fit: схлопывает пустые колонки в 0 — если карточек всего 2, они растянутся по 50% каждая */\n.features-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));\n  gap: 16px;\n}",
      "example": "/* Обрати внимание на min(280px, 100%) внутри minmax — это защищает от скролла на узких экранах 320px! */",
      "points": [
        "Ключевое отличие проявляется, когда карточек мало (например, в результатах поиска нашлась всего 1 карточка): с auto-fill она займёт аккуратную 1 колонку слева (~300px), а с auto-fit раздуется на всю ширину монитора (1360px)!",
        "Поэтому для каталогов товаров, статей и результатов поиска ВСЕГДА используй auto-fill, а для плашек преимуществ (где всегда 3–4 блока) — auto-fit.",
        "Формула minmax(min(280px, 100%), 1fr) гарантирует, что даже если экран уже 280px, колонка сожмётся до 100% без горизонтального скролла."
      ],
      "tags": [
        "CSS",
        "auto-fill",
        "auto-fit",
        "minmax",
        "grid-template-columns",
        "разница",
        "сетка",
        "каталог"
      ],
      "when": "Используй auto-fill в списках с переменным числом карточек (поиск, избранное, каталог).",
      "alternatives": "Flexbox с flex-wrap: wrap всегда растягивает последнюю одинокую карточку при flex-grow: 1, поэтому для ровных каталогов лучше подходит Grid с auto-fill.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/repeat"
    },
    {
      "lang": "css",
      "id": "css-empty-only-child-target",
      "title": "CSS: псевдоклассы состояния страницы (:target, :only-child, :placeholder-shown)",
      "summary": "Подсветка секции, к которой перешли по якорной ссылке (#id), и плавающий лейбл инпута на чистом CSS.",
      "code": "/* Подсвечивает раздел или комментарий, чей #id сейчас указан в адресной строке браузера! */\nsection:target {\n  border-color: #38bdf8;\n  background: rgba(56, 189, 248, 0.06);\n  scroll-margin-top: 80px;\n}\n\n/* Показываем кнопку «Очистить поиск» только когда в инпуте набран текст (плейсхолдер скрыт)! */\n.search-input:not(:placeholder-shown) ~ .clear-btn {\n  display: inline-flex;\n}",
      "example": "<input placeholder=\" \"> /* Пробел в placeholder нужен для работы трюка с :placeholder-shown */",
      "points": [
        "Псевдокласс :target автоматически срабатывает на элементе, чей id совпадает с хешем в URL (например, страница открыта по ссылке page.html#faq-3)!",
        "Псевдокласс :placeholder-shown проверяет, пуст ли сейчас <input> (показывается ли его placeholder). С его помощью делают «плавающие подписи» (Floating Labels) и показ крестика очистки на чистом CSS!",
        ":only-child выбирает элемент только в том случае, если у него нет других соседей внутри родителя."
      ],
      "tags": [
        "CSS",
        ":target",
        ":placeholder-shown",
        ":only-child",
        "floating label",
        "якорь",
        "инпут"
      ],
      "when": "Для подсветки выбранного в оглавлении раздела или процитированного комментария (:target) и умных полей ввода (:placeholder-shown).",
      "alternatives": "Для сложной логики очистки инпута по клику на крестик добавь 3 строчки JS.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:target"
    },
    {
      "lang": "css",
      "id": "css-background-clip-text-stroke",
      "title": "CSS: контурный и градиентный текст (-webkit-text-stroke и background-clip: text)",
      "summary": "Создание выразительных акцентных заголовков с градиентной заливкой или тонкой векторной обводкой букв.",
      "code": "/* 1. Заголовок с заливкой линейным градиентом */\n.text-gradient {\n  background: linear-gradient(135deg, #f8fafc 0%, #38bdf8 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n\n/* 2. Полый контурный текст (Outline Text) для крупных фоновых цифр */\n.text-outline {\n  color: transparent;\n  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.25);\n}",
      "example": ".step-number { font-size: 64px; -webkit-text-stroke: 1px var(--accent); color: transparent; }",
      "points": [
        "При использовании background-clip: text цвет самого текста задают прозрачным (color: transparent), чтобы сквозь контуры букв проступил фоновый градиент.",
        "Свойство -webkit-text-stroke поддерживается во всех современных браузерах (Chrome, Safari, Firefox, Edge) и отлично подходит для крупных фоновых номеров секций (01, 02, 03).",
        "Следи, чтобы блок с background-clip: text имел display: inline-block, если градиент должен растягиваться ровно по ширине слова, а не всей строки."
      ],
      "tags": [
        "CSS",
        "background-clip",
        "text-stroke",
        "gradient text",
        "outline text",
        "градиентный текст",
        "обводка текста"
      ],
      "when": "Для главных заголовков на лендингах и крупных декоративных цифр шагов.",
      "alternatives": "Для сложных многослойных контуров с тенями лучше использовать инлайновый <svg><text>.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/background-clip"
    },
    {
      "lang": "css",
      "id": "css-shape-outside-float",
      "title": "CSS: фигурное обтекание иллюстраций текстом (shape-outside: circle())",
      "summary": "Журнальная верстка статей, в которой строки абзаца плавно огибают круглый аватар автора по дуге.",
      "code": ".author-avatar-float {\n  float: left;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  margin-right: 20px;\n  margin-bottom: 12px;\n  /* Текст статьи огибает аватар по кругу, а не по квадратной коробке! */\n  shape-outside: circle(50%);\n}",
      "example": "shape-outside: polygon(0 0, 100% 0, 60% 100%, 0 100%);",
      "points": [
        "Сегодня свойство float больше не используется для сеток колонок (там царят Flex и Grid), но float остаётся единственным инструментом для обтекания картинки живым текстом внутри статьи!",
        "Добавление shape-outside: circle(50%) к круглой картинке с float: left заставляет строки текста повторять изгиб круга.",
        "Свойство shape-margin: 16px задаёт аккуратный воздушный зазор вдоль криволинейного контура."
      ],
      "tags": [
        "CSS",
        "shape-outside",
        "float",
        "circle",
        "обтекание текстом",
        "верстка статей"
      ],
      "when": "Во врезках с цитатами, круглыми портретами спикеров и журнальных лонгридах.",
      "alternatives": "Для обычного расположения аватара слева от имени и должности всегда используй display: flex; align-items: center; gap: 12px.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/shape-outside"
    },
    {
      "lang": "css",
      "id": "css-order-align-self",
      "title": "CSS: индивидуальное управление элементом сетки (align-self, justify-self, order)",
      "summary": "Точечное выравнивание отдельной карточки или кнопки по краю родителя без создания дополнительных обёрток.",
      "code": ".header-flex {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.special-badge {\n  /* Только этот элемент прижимается к верхнему краю, пока остальные стоят по центру */\n  align-self: flex-start;\n}\n\n.close-btn {\n  /* Внутри CSS Grid прижимает кнопку строго в правый верхний угол ячейки */\n  justify-self: end;\n  align-self: start;\n}",
      "example": "place-self: start end; /* Сокращение для align-self + justify-self в CSS Grid */",
      "points": [
        "align-self переопределяет общее правило align-items родителя для одного конкретного дочернего элемента (как во Flexbox, так и в CSS Grid).",
        "В CSS Grid также работает свойство justify-self (выравнивание элемента по горизонтали внутри своей ячейки) и сокращение place-self: center end.",
        "Не злоупотребляй свойством order: -1 для перестановки важных кнопок, так как порядок обхода клавишей Tab всё равно останется таким, как в исходном HTML!"
      ],
      "tags": [
        "CSS",
        "align-self",
        "justify-self",
        "place-self",
        "order",
        "выравнивание",
        "flex",
        "grid"
      ],
      "when": "Когда один элемент внутри ряда (кнопка, бейдж, цена) должен стоять у другого края.",
      "alternatives": "Во Flexbox для прижатия элемента вправо вдоль главной оси используй margin-left: auto.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/align-self"
    },
    {
      "lang": "css",
      "id": "css-inset-border-image-outline",
      "title": "CSS: вложенные тени (box-shadow: inset) и эффект вдавленной панели (Well / Input)",
      "summary": "Создание глубины для полей ввода, блоков кода и активных переключателей с помощью внутренней тени и верхней подсветки.",
      "code": "/* Поле ввода или блок кода, визуально утопленный внутрь панели */\n.code-well,\n.input-recessed {\n  background: #070a10;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.45);\n}\n\n/* Выпуклая кнопка с тонким бликом по верхнему краю (1px inner highlight) */\n.btn-tactile {\n  background: #161e31;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, 0.1),\n    0 2px 4px rgba(0, 0, 0, 0.3);\n}",
      "example": ".btn-tactile:active {\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);\n}",
      "points": [
        "Ключевое слово inset разворачивает тень внутрь коробки элемента, создавая ощущение утопленной поверхности (идеально для инпутов, треков ползунков и окон кода).",
        "Тонкий светлый внутренний блик сверху (inset 0 1px 0 rgba(255,255,255,0.1)) придаёт кнопкам и карточкам в тёмной теме благородный тактильный объём (как в интерфейсах Linear и Raycast)!",
        "В одном свойстве box-shadow можно комбинировать через запятую и внутренние (inset), и внешние тени."
      ],
      "tags": [
        "CSS",
        "box-shadow",
        "inset",
        "внутренняя тень",
        "блик",
        "кнопка",
        "инпут",
        "дизайн"
      ],
      "when": "При оформлении кнопок, переключателей вкладок, полей ввода и панелей инструментов.",
      "alternatives": "Не делай внутреннюю тень слишком широкой и размытой, чтобы интерфейс не выглядел устаревшим.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/box-shadow"
    },
    {
      "lang": "css",
      "id": "css-print-page-break",
      "title": "CSS: стили для печати документа и экспорта в PDF (@media print, @page)",
      "summary": "Очистка страницы от меню и кнопок при отправке на принтер или сохранении счёта/резюме в PDF.",
      "code": "@media print {\n  /* Скрываем шапку, сайдбар, поиск и кнопки действий */\n  .top, .sidebar, .searchbox, .no-print, footer {\n    display: none !important;\n  }\n\n  /* Принудительно делаем фон белым, а текст чёрным для экономии тонера и чёткости PDF */\n  body {\n    background: #ffffff !important;\n    color: #000000 !important;\n    font-size: 12pt;\n  }\n\n  /* Запрещаем разрывать карточки и блоки кода пополам между листами бумаги А4 */\n  pre, blockquote, table, figure, .card {\n    break-inside: avoid;\n  }\n}",
      "example": "a[href^=\"http\"]::after { content: \" (\" attr(href) \")\"; } /* Вывод полных URL ссылок на бумаге */",
      "points": [
        "Пользователи часто сохраняют справочные статьи, чеки и счета через системный диалог «Печать -> Сохранить как PDF». Правило @media print гарантирует чистый документ без шапки и тёмного фона!",
        "Свойство break-inside: avoid запрещает браузеру разрезать таблицу или сниппет кода на границе двух страниц А4.",
        "Свойство print-color-adjust: exact заставляет браузер сохранить цветные бейджи и графики при экспорте в PDF."
      ],
      "tags": [
        "CSS",
        "print",
        "media print",
        "pdf",
        "break-inside",
        "печать",
        "экспорт в pdf"
      ],
      "when": "На страницах документации, статей, резюме, билетов, чеков и счетов на оплату.",
      "alternatives": "Серверная генерация PDF нужна только для официальных бланков со строгой пиксельной сеткой и печатями.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries/Printing"
    },
    {
      "lang": "css",
      "id": "css-grid-template-rows-animate",
      "title": "CSS: плавная анимация высоты от 0 до auto через grid-template-rows: 0fr -> 1fr",
      "summary": "Современный чистый способ плавно раскрыть аккордеон или выпадающий блок с неизвестной высотой текста без JS.",
      "code": ".accordion-body {\n  display: grid;\n  grid-template-rows: 0fr; /* В закрытом состоянии высота дорожки равна 0fr */\n  transition: grid-template-rows 250ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.accordion-body.is-open {\n  grid-template-rows: 1fr; /* Плавно раскрывается ровно под реальную высоту текста! */\n}\n\n.accordion-inner {\n  overflow: hidden;        /* Обязательная внутренняя обёртка для схлопывания в 0 */\n}",
      "example": "/* Больше никаких костылей с max-height: 999px и кривыми таймингами! */",
      "points": [
        "Десять лет в CSS нельзя было плавно анимировать height: 0 -> height: auto. Переход grid-template-rows: 0fr -> 1fr решает эту задачу идеально и без угадывания max-height!",
        "Для работы трюка внутри .accordion-body должен лежать один дочерний div (.accordion-inner) со свойством overflow: hidden;.",
        "В новейших браузерах также появляется прямое свойство interpolate-size: allow-keywords для анимации height: auto."
      ],
      "tags": [
        "CSS",
        "grid-template-rows",
        "0fr",
        "1fr",
        "height auto",
        "accordion",
        "анимация высоты",
        "аккордеон"
      ],
      "when": "При верстке плавно раскрывающихся спойлеров, карточек FAQ и мобильных подменю.",
      "alternatives": "Старый хак с max-height: 1000px создаёт задержку при закрытии короткого текста.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-rows"
    },
    {
      "lang": "css",
      "id": "css-focus-ring-button-reset",
      "title": "CSS: профессиональный сброс стилей кнопки (button reset) и состояний",
      "summary": "Базовый эталонный класс кнопки (.btn) с выравниванием иконки, защитой от сжатия во флексе и тактильным нажатием.",
      "code": ".btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 16px;\n  font: inherit;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;          /* Кнопка никогда не сплющится в узкой шапке или строке поиска! */\n  user-select: none;\n  cursor: pointer;\n  border-radius: 6px;\n  border: 1px solid var(--line);\n  transition: transform 100ms ease, border-color 150ms ease, background-color 150ms ease;\n}\n\n.btn:active:not(:disabled) {\n  transform: translateY(1px); /* Лёгкий тактильный отклик при клике */\n}",
      "example": ".btn svg { width: 16px; height: 16px; flex-shrink: 0; pointer-events: none; }",
      "points": [
        "Свойство flex-shrink: 0 на кнопке и на иконке svg внутри неё гарантирует, что длинный заголовок рядом никогда не сплющит кнопку в овал!",
        "display: inline-flex; align-items: center; gap: 8px идеально выравнивает SVG-иконку и текст кнопки по одной оптической линии.",
        "Лёгкое смещение transform: translateY(1px) (или scale(0.98)) в состоянии :active делает интерфейс живым и отзывчивым."
      ],
      "tags": [
        "CSS",
        "button",
        "btn",
        "inline-flex",
        "flex-shrink",
        "active",
        "кнопка",
        "сброс стилей"
      ],
      "when": "В качестве базового класса для всех кнопок дизайн-системы проекта.",
      "alternatives": "Всегда наследуй шрифт через font: inherit;, так как браузеры по умолчанию ставят кнопкам системный Arial.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/button"
    },
    {
      "lang": "css",
      "id": "css-table-responsive-cards",
      "title": "CSS: адаптивная таблица (горизонтальный скролл и трансформация в карточки)",
      "summary": "Два надёжных паттерна отображения широких таблиц данных на узких экранах смартфонов без поломки верстки.",
      "code": "/* Способ 1: аккуратная прокручиваемая обёртка с тенью */\n.table-responsive {\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n}\n\n/* Способ 2: вывод названия колонки из data-label на мобильных */\n@media (max-width: 600px) {\n  .mobile-cards-table td::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: var(--muted);\n  }\n}",
      "example": "<td data-label=\"Тариф\">Pro</td>",
      "points": [
        "Горизонтальная обёртка .table-responsive с overflow-x: auto — самый честный и удобный способ для таблиц сравнения, где пользователю важно сопоставлять колонки глазами.",
        "Для таблиц истории заказов (номер, дата, статус, сумма) на мобильных удобно превращать каждую строку <tr> в карточку с подписями из attr(data-label).",
        "Не забудь задать ячейкам с датами и ценами white-space: nowrap, чтобы они не ломались на 3 этажа."
      ],
      "tags": [
        "CSS",
        "table",
        "responsive",
        "overflow-x",
        "data-label",
        "адаптивная таблица",
        "мобильная таблица"
      ],
      "when": "При верстке любых прайс-листов, историй операций и таблиц характеристик.",
      "alternatives": "Никогда не оставляй широкую таблицу без обёртки — она вызовет горизонтальный скролл всей страницы.",
      "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics/Tables"
    },
    {
      "lang": "css",
      "id": "css-sticky-footer-layout",
      "title": "CSS: прижатый к низу экрана подвал (Sticky Footer на Grid и Flex)",
      "summary": "Классический каркас страницы, при котором подвал <footer> всегда прижат к низу монитора, даже если на странице мало текста.",
      "code": "body {\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\nmain {\n  flex: 1 0 auto; /* Главный контент растягивается и толкает footer в самый низ! */\n}\n\nfooter {\n  flex-shrink: 0;\n}",
      "example": "/* Альтернатива на CSS Grid в 3 строки:\nbody { min-height: 100dvh; display: grid; grid-template-rows: auto 1fr auto; } */",
      "points": [
        "Если на странице мало контента (например, страница 404, форма входа или пустая корзина), без этого правила подвал некрасиво подпрыгивает к середине экрана.",
        "Вариант на CSS Grid ещё короче: body { min-height: 100dvh; display: grid; grid-template-rows: auto 1fr auto; } (где шапка = auto, main = 1fr, подвал = auto)!",
        "Используй min-height: 100dvh (а не фиксированный height: 100vh), чтобы длинные страницы спокойно прокручивались дальше вниз."
      ],
      "tags": [
        "CSS",
        "sticky footer",
        "min-height",
        "100dvh",
        "flex",
        "grid",
        "прижать подвал",
        "футер к низу"
      ],
      "when": "На теге <body> или корневом контейнере #app в каждом проекте.",
      "alternatives": "Никогда не прибивай обычный подвал сайта через position: fixed; bottom: 0 — он перекроет контент на маленьких экранах.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Sticky_footers"
    }
  ],
  "javascript": [
    {
      "lang": "javascript",
      "id": "js-dom-selection",
      "title": "JS: выборка и обход элементов DOM (querySelector, closest)",
      "summary": "Быстрый и надежный поиск элементов в документе по CSS-селекторам и поиск ближайших предков.",
      "code": "// Выборка одного элемента\nconst searchInput = document.querySelector('#search-input');\n\n// Выборка коллекции элементов\nconst buttons = document.querySelectorAll('.action-btn');\nbuttons.forEach(btn => {\n  btn.classList.add('ready');\n});\n\n// closest: поиск ближайшего родителя по селектору вверх по дереву\ndocument.addEventListener('click', (event) => {\n  const card = event.target.closest('.recipe-card');\n  if (card) {\n    console.log('Кликнули внутри карточки:', card.dataset.id);\n  }\n});",
      "example": "if (element.matches(':hover')) { ... }",
      "points": [
        "querySelector возвращает первый найденный элемент или null (если ничего не найдено).",
        "querySelectorAll возвращает статичный NodeList, который можно напрямую обходить через .forEach().",
        "Метод closest() ищет элемент среди предков (включая сам целевой элемент), решая 99% задач делегирования."
      ],
      "tags": [
        "JavaScript",
        "DOM",
        "querySelector",
        "querySelectorAll",
        "closest",
        "matches",
        "поиск в DOM"
      ],
      "when": "Базовые методы для инициализации любых скриптов и компонентов на странице.",
      "alternatives": "Устаревшие getElementsByClassName и getElementsByTagName возвращают «живые» HTMLCollection, создающие утечки.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Document/querySelector"
    },
    {
      "lang": "javascript",
      "id": "js-event-delegation",
      "title": "JS: делегирование событий и CustomEvent",
      "summary": "Эффективная обработка событий на сотнях элементов через одного общего родителя и создание собственных событий.",
      "code": "// Делегирование: 1 слушатель на весь список вместо 100 на каждую кнопку\nconst list = document.querySelector('#items-list');\n\nlist.addEventListener('click', (event) => {\n  // Находим кнопку удаления, даже если кликнули по вложенной иконке <svg>\n  const deleteBtn = event.target.closest('.delete-btn');\n  if (!deleteBtn) return;\n\n  const row = deleteBtn.closest('.item-row');\n  row.remove();\n\n  // Отправляем кастомное событие об изменении\n  document.dispatchEvent(new CustomEvent('cart:updated', {\n    detail: { remainingCount: list.children.length },\n    bubbles: true\n  }));\n});\n\n// Подписка на кастомное событие в другом модуле\ndocument.addEventListener('cart:updated', (e) => {\n  console.log('Осталось товаров:', e.detail.remainingCount);\n});",
      "example": "event.preventDefault(); // Отмена стандартного действия (перехода по ссылке, отправки формы)",
      "points": [
        "Делегирование работает даже для динамически добавленных элементов, которых еще не было в DOM при загрузке.",
        "Существенно экономит оперативную память и ускоряет работу сайта при рендеринге больших списков.",
        "CustomEvent позволяет создавать слабую связанность (Decoupling) между независимыми модулями приложения."
      ],
      "tags": [
        "JavaScript",
        "события",
        "делегирование",
        "addEventListener",
        "CustomEvent",
        "click",
        "оптимизация"
      ],
      "when": "Используй для каталогов, таблиц данных, динамических списков задач и интерактивных меню.",
      "alternatives": "Навешивание addEventListener в цикле на каждый элемент приводит к утечкам памяти при обновлении списка.",
      "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Scripting/Event_bubbling"
    },
    {
      "lang": "javascript",
      "id": "js-fetch-async",
      "title": "JS: сетевые запросы Fetch API и AbortController",
      "summary": "Отправка асинхронных GET/POST запросов, обработка ответов в формате JSON и отмена запросов при повторном вводе.",
      "code": "// Функция загрузки данных с отменой предыдущего запроса (для live-поиска)\nlet currentController = null;\n\nasync function searchApi(query) {\n  // Если предыдущий запрос еще выполняется — отменяем его!\n  if (currentController) {\n    currentController.abort();\n  }\n  currentController = new AbortController();\n\n  try {\n    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {\n      method: 'GET',\n      headers: { 'Accept': 'application/json' },\n      signal: currentController.signal\n    });\n\n    if (!response.ok) {\n      throw new Error(`Ошибка сервера: ${response.status}`);\n    }\n\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    if (error.name === 'AbortError') {\n      console.log('Предыдущий запрос был отменен');\n      return null;\n    }\n    console.error('Ошибка сети:', error);\n    throw error;\n  }\n}",
      "example": "await fetch('/api', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });",
      "points": [
        "fetch() отклоняет промис (reject) ТОЛЬКО при физическом обрыве сети. HTTP 404 и 500 считаются успешным ответом: проверяй response.ok!",
        "AbortController предотвращает Race Conditions («состояние гонки»), когда устаревший долгий ответ перезаписывает свежие данные.",
        "Для таймаутов в современном JS доступен удобный флаг: AbortSignal.timeout(5000)."
      ],
      "tags": [
        "JavaScript",
        "fetch",
        "async",
        "await",
        "json",
        "AbortController",
        "api",
        "ajax",
        "сеть"
      ],
      "when": "Для отправки форм без перезагрузки страницы, живого поиска, загрузки списков товаров и данных с бэкенда.",
      "alternatives": "Устаревшие библиотеки axios и jQuery.ajax избыточны, когда нативный fetch есть во всех браузерах.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch"
    },
    {
      "lang": "javascript",
      "id": "js-intersection-observer",
      "title": "JS: отслеживание видимости элементов (IntersectionObserver)",
      "summary": "Аппаратно-эффективное отслеживание момента появления элемента в поле зрения пользователя без тяжелых scroll-слушателей.",
      "code": "// 1. Создаем наблюдатель\nconst observer = new IntersectionObserver((entries, obs) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      // Элемент появился на экране!\n      const el = entry.target;\n      el.classList.add('visible');\n\n      // Если нужно анимировать только 1 раз — отключаем наблюдение\n      obs.unobserve(el);\n    }\n  });\n}, {\n  rootMargin: '0px 0px -50px 0px', // Срабатывать за 50px до границы\n  threshold: 0.15                  // 15% площади элемента должно быть видно\n});\n\n// 2. Начинаем наблюдение за карточками\ndocument.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));",
      "example": "// Бесконечный скролл: вешаем наблюдатель на невидимый лоадер внизу страницы",
      "points": [
        "IntersectionObserver не блокирует главный поток (Main Thread) и работает с частотой обновления экрана 60/120 FPS.",
        "Идеально подходит для анимаций появления при скролле, ленивой подгрузки контента и бесконечных лент (Infinite Scroll).",
        "Для завершения наблюдения используй observer.unobserve(element) или observer.disconnect()."
      ],
      "tags": [
        "JavaScript",
        "IntersectionObserver",
        "скролл",
        "анимация появления",
        "lazy load",
        "видимость"
      ],
      "when": "Для лендингов с эффектами появления, подгрузки страниц в каталоге, отслеживания дочитывания статей.",
      "alternatives": "Слушатель window.addEventListener(\"scroll\", handler) с getBoundingClientRect() вызывает жуткие тормоза.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API"
    },
    {
      "lang": "javascript",
      "id": "js-localstorage",
      "title": "JS: локальное хранилище данных (localStorage & JSON)",
      "summary": "Сохранение настроек пользователя, корзины, избранного и тем оформления в браузере между перезагрузками страницы.",
      "code": "// Безопасная работа с localStorage через обертку\nconst storage = {\n  get(key, defaultValue = null) {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : defaultValue;\n    } catch (e) {\n      console.warn('Ошибка чтения localStorage:', e);\n      return defaultValue;\n    }\n  },\n  set(key, value) {\n    try {\n      localStorage.setItem(key, JSON.stringify(value));\n    } catch (e) {\n      console.error('Ошибка записи (квота превышена?):', e);\n    }\n  },\n  remove(key) {\n    localStorage.removeItem(key);\n  }\n};\n\n// Пример: сохранение списка избранного\nstorage.set('devshelf:favorites', ['html-dialog', 'css-grid']);\nconst favs = storage.get('devshelf:favorites', []);",
      "example": "localStorage.clear(); // Полная очистка хранилища сайта",
      "points": [
        "Данные в localStorage сохраняются даже после закрытия вкладки и перезагрузки компьютера.",
        "Квота хранилища обычно составляет около 5 МБ на домен.",
        "Всегда оборачивай вызовы в try...catch: в режиме инкогнито в некоторых браузерах или при запрете cookie запись может выбросить исключение."
      ],
      "tags": [
        "JavaScript",
        "localStorage",
        "sessionStorage",
        "хранилище",
        "избранное",
        "кэш",
        "JSON"
      ],
      "when": "Используй для сохранения темы (светлая/темная), черновиков форм, закладок и недавних действий.",
      "alternatives": "sessionStorage очищается сразу при закрытии вкладки; IndexedDB используется для гигабайтов данных и офлайн-БД.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage"
    },
    {
      "lang": "javascript",
      "id": "js-clipboard-api",
      "title": "JS: копирование в буфер обмена (Clipboard API)",
      "summary": "Современный способ скопировать текст, сниппет кода или ссылку в буфер обмена пользователя в один клик.",
      "code": "async function copyCodeToClipboard(text, triggerButton) {\n  try {\n    await navigator.clipboard.writeText(text);\n\n    // Визуальная обратная связь\n    const originalText = triggerButton.textContent;\n    triggerButton.textContent = 'Скопировано!';\n    triggerButton.classList.add('copied');\n\n    setTimeout(() => {\n      triggerButton.textContent = originalText;\n      triggerButton.classList.remove('copied');\n    }, 2000);\n  } catch (err) {\n    console.error('Не удалось скопировать:', err);\n    // Запасной fallback для устаревших контекстов\n    prompt('Скопируйте вручную:', text);\n  }\n}",
      "example": "const text = await navigator.clipboard.readText(); // Чтение из буфера (требует разрешения)",
      "points": [
        "Clipboard API работает только в безопасном контексте HTTPS (или на localhost/127.0.0.1).",
        "Вызов writeText() должен быть вызван в ответ на прямое действие пользователя (клик, нажатие клавиши).",
        "Заменяет устаревший и нестабильный метод document.execCommand(\"copy\")."
      ],
      "tags": [
        "JavaScript",
        "clipboard",
        "буфер обмена",
        "копирование",
        "writeText",
        "сниппет"
      ],
      "when": "Для кнопок «Скопировать код», «Поделиться ссылкой», копирования номеров телефонов и промокодов.",
      "alternatives": "Старый трюк со скрытым textarea и execCommand(\"copy\") объявлен устаревшим (deprecated).",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Clipboard_API"
    },
    {
      "lang": "javascript",
      "id": "js-array-methods",
      "title": "JS: современные методы массивов (map, filter, reduce, toSorted)",
      "summary": "Неизменяемая (immutable) обработка данных: фильтрация списков, трансформация, поиск и сортировка без мутаций.",
      "code": "const items = [\n  { id: 1, name: 'HTML5', category: 'markup', stars: 45 },\n  { id: 2, name: 'CSS Grid', category: 'style', stars: 89 },\n  { id: 3, name: 'Flexbox', category: 'style', stars: 120 }\n];\n\n// 1. Фильтрация (только стили)\nconst styles = items.filter(item => item.category === 'style');\n\n// 2. Трансформация (массив только названий)\nconst names = items.map(item => item.name);\n\n// 3. Подсчет суммы через reduce\nconst totalStars = items.reduce((sum, item) => sum + item.stars, 0);\n\n// 4. Безопасная сортировка без изменения исходного массива (ES2023)\nconst sortedByStars = items.toSorted((a, b) => b.stars - a.stars);",
      "example": "const found = items.find(item => item.id === 2);",
      "points": [
        "Новые методы ES2023 (toSorted, toReversed, toSpliced, with) не мутируют исходный массив в отличие от sort() и reverse().",
        "reduce(fn, initialValue) всегда должен получать начальное значение вторым аргументом во избежание ошибок на пустых массивах.",
        "flatMap объединяет map и flat(1), полезен для разворачивания вложенных тегов."
      ],
      "tags": [
        "JavaScript",
        "массивы",
        "map",
        "filter",
        "reduce",
        "toSorted",
        "find",
        "es2023",
        "иммутабельность"
      ],
      "when": "Для фильтрации каталога, поиска по тегам, сортировки списков и подсчета итоговых сумм.",
      "alternatives": "Императивные циклы for (let i = 0; ...) громоздки и подвержены ошибкам вылета за границы.",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array"
    },
    {
      "lang": "javascript",
      "id": "js-variables-types",
      "title": "JS: переменные const и let, области видимости и строгая проверка типов",
      "summary": "Блочная область видимости, неизменяемые ссылки const, примитивные типы и проверка typeof / Array.isArray.",
      "code": "const MAX_RETRIES = 3;\nlet attempts = 0;\n\nconst user = { name: 'Иван', roles: ['admin'] };\nuser.name = 'Алексей'; // Допустимо: меняется свойство внутри объекта, а не сама ссылка\n\nconsole.log(typeof 'hello');         // \"string\"\nconsole.log(typeof 42);              // \"number\"\nconsole.log(Array.isArray(user.roles)); // true",
      "example": "if (value !== null && typeof value === 'object') { /* это объект */ }",
      "points": [
        "По умолчанию всегда используй const. Переходи на let только если значение переменной действительно переприсваивается (счётчики, флаги).",
        "Оператор typeof null из-за исторического бага возвращает \"object\", поэтому на null всегда проверяй явно: val === null.",
        "Всегда используй строгое равенство === и !== вместо нестрогого ==, чтобы избежать скрытого приведения типов (\"0\" == false)."
      ],
      "tags": [
        "JavaScript",
        "const",
        "let",
        "typeof",
        "isArray",
        "переменные",
        "типы данных",
        "область видимости"
      ],
      "when": "Во всём современном JS-коде вместо устаревшего ключевого слова var.",
      "alternatives": "Для полной защиты объекта от изменения его свойств используй Object.freeze(obj).",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const"
    },
    {
      "lang": "javascript",
      "id": "js-functions-arrows",
      "title": "JS: функции, стрелочные функции (=>), параметры по умолчанию и замыкания",
      "summary": "Лаконичный синтаксис стрелочных колбэков, лексический контекст this и сохранение состояния через замыкание.",
      "code": "// Параметры по умолчанию\nfunction greet(name = 'Гость', role = 'user') {\n  return `Привет, ${name} (${role})!`;\n}\n\n// Стрелочная функция с неявным возвратом объекта (в круглых скобках)\nconst toOption = (item) => ({ value: item.id, label: item.title });\n\n// Замыкание: генератор уникальных ID\nfunction createCounter(start = 0) {\n  let count = start;\n  return () => ++count;\n}\nconst nextId = createCounter(100);\nconsole.log(nextId(), nextId()); // 101, 102",
      "example": "items.map(x => x * 2);",
      "points": [
        "Стрелочные функции не имеют собственного this — они берут this из внешней функции, что идеально для обработчиков и таймеров внутри классов.",
        "Чтобы вернуть объектный литерал из короткой стрелочной функции без return, оберни его в круглые скобки: () => ({ id: 1 }).",
        "Замыкание (closure) позволяет внутренней функции помнить и изменять переменные родительской функции даже после её завершения."
      ],
      "tags": [
        "JavaScript",
        "function",
        "arrow",
        "closure",
        "this",
        "стрелочные функции",
        "замыкание",
        "функции"
      ],
      "when": "Стрелочные функции — для колбэков (.map, .filter, addEventListener); обычные function — для методов объекта и конструкторов.",
      "alternatives": "Не используй стрелочную функцию как метод объекта, если внутри неё нужен доступ к this этого объекта.",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
    },
    {
      "lang": "javascript",
      "id": "js-destructuring-spread",
      "title": "JS: деструктуризация, операторы Spread (...) и Rest (...args)",
      "summary": "Извлечение свойств из объектов и массивов в одну строку, иммутабельное клонирование и сбор аргументов.",
      "code": "const config = { host: 'localhost', port: 3000, debug: true };\n// Деструктуризация с переименованием и значением по умолчанию\nconst { host, port: serverPort, timeout = 5000 } = config;\n\n// Иммутабельное обновление объекта и слияние массивов через Spread\nconst updatedConfig = { ...config, port: 8080 };\nconst allTags = [...['html', 'css'], 'javascript'];\n\n// Сбор произвольного числа аргументов в массив (Rest)\nconst sumAll = (...nums) => nums.reduce((acc, n) => acc + n, 0);",
      "example": "const [first, second, ...restItems] = [10, 20, 30, 40];",
      "points": [
        "Деструктуризация работает прямо в параметрах функции: function renderCard({ title, price = 0 }) { ... }.",
        "Оператор Spread {...obj} делает поверхностную (shallow) копию первого уровня. Для глубокой копии вложенных объектов используй structuredClone(obj).",
        "Запись [a, b] = [b, a] позволяет поменять значения двух переменных местами без временной переменной."
      ],
      "tags": [
        "JavaScript",
        "destructuring",
        "spread",
        "rest",
        "structuredClone",
        "деструктуризация",
        "копирование"
      ],
      "when": "При распаковке ответов API, настройке опций функций и обновлении состояния без мутации исходных данных.",
      "alternatives": "Ручное обращение data.user.profile.name на каждом шагу загромождает код.",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
    },
    {
      "lang": "javascript",
      "id": "js-optional-chaining-nullish",
      "title": "JS: опциональная цепочка (?.) и нулевое слияние (?? и ??=)",
      "summary": "Безопасное чтение глубоко вложенных свойств без ошибки Cannot read properties of undefined и корректные дефолты.",
      "code": "const response = {\n  user: { profile: { city: 'Москва' } },\n  itemsCount: 0\n};\n\n// Безопасное чтение: вернёт undefined вместо падения скрипта\nconst zipCode = response.user?.address?.zip;\nconst firstItem = response.list?.[0];\nresponse.onComplete?.(); // Вызовет функцию только если она существует\n\n// Оператор ?? срабатывает ТОЛЬКО на null и undefined (сохраняя 0 и \"\")!\nconst count = response.itemsCount ?? 10; // 0 (тогда как || вернул бы 10!)",
      "example": "settings.theme ??= 'dark'; /* Присвоит 'dark' только если theme равен null или undefined */",
      "points": [
        "Логическое ИЛИ (val || 10) считает число 0 и пустую строку \"\" ложными (falsy) и затирает их. Оператор ?? заменяет значение ТОЛЬКО если оно null или undefined!",
        "Опциональная цепочка работает для свойств (obj?.prop), индексов массива (arr?.[0]) и вызова методов (obj.method?.()).",
        "Не ставь ?. на каждом шаге бездумно — используй его только там, где поле реально может отсутствовать по логике данных."
      ],
      "tags": [
        "JavaScript",
        "optional chaining",
        "nullish coalescing",
        "?.",
        "??",
        "undefined",
        "null",
        "безопасность"
      ],
      "when": "При работе с JSON-ответами сервера, необязательными колбэками и числовыми параметрами (где 0 — валидное значение).",
      "alternatives": "Длинные проверки if (res && res.user && res.user.address) устарели.",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
    },
    {
      "lang": "javascript",
      "id": "js-array-search-sort",
      "title": "JS: поиск и сортировка массивов (find, some, every, includes, toSorted)",
      "summary": "Быстрая проверка условий, поиск элементов и неразрушающая сортировка русских строк и чисел.",
      "code": "const users = [\n  { id: 1, name: 'Яна', active: true, score: 85 },\n  { id: 2, name: 'Борис', active: false, score: 92 },\n  { id: 3, name: 'Анна', active: true, score: 78 }\n];\n\nconst target = users.find(u => u.id === 2);          // Объект Бориса (или undefined)\nconst hasInactive = users.some(u => !u.active);      // true (хотя бы один)\nconst allActive = users.every(u => u.active);        // false (все ли)\n\n// Немутирующая сортировка по русскому алфавиту и по числам\nconst byName = users.toSorted((a, b) => a.name.localeCompare(b.name, 'ru'));\nconst byScore = users.toSorted((a, b) => b.score - a.score);",
      "example": "const lastActive = users.findLast(u => u.active);",
      "points": [
        "Классический .sort() изменяет (мутирует) исходный массив на месте! Новый метод .toSorted() возвращает отсортированную копию, не трогая оригинал.",
        "Для сортировки чисел обязательно передавай компаратор (a, b) => a - b, иначе .sort() отсортирует числа как строки (\"10\" встанет раньше \"2\")!",
        "Для сортировки кириллицы используй a.title.localeCompare(b.title, \"ru\"), чтобы буква «Ё» встала на своё правильное место."
      ],
      "tags": [
        "JavaScript",
        "find",
        "some",
        "every",
        "includes",
        "sort",
        "toSorted",
        "localeCompare",
        "массивы",
        "сортировка"
      ],
      "when": "При фильтрации каталогов, проверке прав доступа и сортировке таблиц.",
      "alternatives": "Если нужно проверить только наличие примитива в массиве, используй arr.includes(val) вместо .some().",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted"
    },
    {
      "lang": "javascript",
      "id": "js-objects-map-set",
      "title": "JS: методы Object (keys, entries, fromEntries, groupBy) и коллекции Map / Set",
      "summary": "Преобразование объектов в массивы пар, группировка по ключу и быстрое удаление дубликатов через Set.",
      "code": "// Удаление дубликатов из массива за один шаг через Set\nconst uniqueTags = [...new Set(['css', 'html', 'css', 'js'])]; // ['css', 'html', 'js']\n\n// Обход ключей и значений объекта\nconst prices = { basic: 500, pro: 1500 };\nconst discounted = Object.fromEntries(\n  Object.entries(prices).map(([plan, price]) => [plan, price * 0.8])\n);\n\n// Нативная группировка массива объектов по полю\nconst tasks = [\n  { title: 'Верстка', status: 'done' },\n  { title: 'API', status: 'todo' }\n];\nconst grouped = Object.groupBy(tasks, task => task.status);",
      "example": "const cache = new Map();\ncache.set('user:1', { name: 'Иван' });",
      "points": [
        "Set хранит только уникальные значения, а проверка наличия set.has(item) работает мгновенно за O(1) даже на 100 000 элементов (в отличие от arr.includes).",
        "Связка Object.entries(obj) -> .map() / .filter() -> Object.fromEntries() позволяет фильтровать и трансформировать объекты так же легко, как массивы.",
        "Статический метод Object.groupBy(items, fn) группирует массив объектов по любому признаку без сложного .reduce()."
      ],
      "tags": [
        "JavaScript",
        "Object.entries",
        "Object.fromEntries",
        "Object.groupBy",
        "Set",
        "Map",
        "уникальные",
        "группировка"
      ],
      "when": "При дедупликации тегов, кэшировании по ключу и группировке списков по категориям или датам.",
      "alternatives": "Проверка Object.hasOwn(obj, \"key\") заменила старый длинный вызов obj.hasOwnProperty(\"key\").",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy"
    },
    {
      "lang": "javascript",
      "id": "js-strings-regexp",
      "title": "JS: методы строк (includes, replaceAll, trim, padStart) и шаблонные строки",
      "summary": "Поиск подстрок, форматирование таймеров нулями, очистка пробелов и безопасная замена всех вхождений.",
      "code": "const rawInput = '  Hello, DevShelf!  ';\nconst clean = rawInput.trim().toLowerCase(); // \"hello, devshelf!\"\n\n// Форматирование минут и секунд с ведущим нулём (05:09)\nconst min = String(5).padStart(2, '0');\nconst sec = String(9).padStart(2, '0');\nconst timerText = `${min}:${sec}`;\n\n// Замена всех вхождений без регулярных выражений\nconst slug = 'Курс по CSS Grid'.toLowerCase().replaceAll(' ', '-');",
      "example": "const isHttps = url.startsWith('https://');",
      "points": [
        "Методы startsWith(), endsWith() и includes() читаются гораздо понятнее старых проверок через indexOf() !== -1.",
        "replaceAll(\"a\", \"b\") заменяет сразу все совпадения в строке (обычный replace(\"a\", \"b\") меняет только первое).",
        "padStart(2, \"0\") незаменим для вывода часов, дат (01.09.2026) и номеров заказов (00042)."
      ],
      "tags": [
        "JavaScript",
        "string",
        "replaceAll",
        "includes",
        "startsWith",
        "padStart",
        "trim",
        "split",
        "строки"
      ],
      "when": "При обработке пользовательского ввода, генерации URL-слагов, поиске и форматировании чисел.",
      "alternatives": "Для сложного поиска по шаблону (например, все email в тексте) используй str.matchAll(/.../g).",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String"
    },
    {
      "lang": "javascript",
      "id": "js-dom-manipulation",
      "title": "JS: работа с DOM (querySelector, closest, classList, createElement)",
      "summary": "Поиск элементов, переключение CSS-классов, безопасное создание узлов и навигация вверх по дереву через closest.",
      "code": "const card = document.querySelector('.card');\n\n// Управление классами\ncard.classList.add('is-visible');\ncard.classList.toggle('is-pinned', isPinnedBoolean);\n\n// Создание и безопасная вставка нового элемента\nconst badge = document.createElement('span');\nbadge.className = 'badge';\nbadge.textContent = 'Новинка'; // Безопасно от XSS!\ncard.prepend(badge);",
      "example": "element.replaceChildren(); /* Мгновенно очищает все дочерние элементы контейнера */",
      "points": [
        "Всегда используй element.textContent вместо innerHTML при выводе любых данных от пользователя, чтобы исключить XSS-инъекции.",
        "Второй аргумент в classList.toggle(\"active\", condition) принудительно включает класс при true и выключает при false.",
        "Современные методы .append(), .prepend(), .before(), .after() и .remove() заменили старые громоздкие parentNode.insertBefore()."
      ],
      "tags": [
        "JavaScript",
        "DOM",
        "querySelector",
        "classList",
        "createElement",
        "textContent",
        "append",
        "closest"
      ],
      "when": "При динамическом обновлении интерфейса, переключении вкладок, модалок и рендеринге списков.",
      "alternatives": "При вставке сотни элементов за раз собирай их в document.createDocumentFragment(), чтобы вызвать всего одну перерисовку.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Element/classList"
    },
    {
      "lang": "javascript",
      "id": "js-promises-combinators",
      "title": "JS: параллельные запросы Promise.all, Promise.allSettled и Promise.race",
      "summary": "Одновременный запуск независимых асинхронных задач для кратного ускорения загрузки данных.",
      "code": "// Запускаем 3 запроса ПАРАЛЛЕЛЬНО, а не по очереди!\nconst [profile, orders, notifications] = await Promise.all([\n  fetch('/api/profile').then(r => r.json()),\n  fetch('/api/orders').then(r => r.json()),\n  fetch('/api/notifications').then(r => r.json())\n]);\n\n// allSettled дождётся всех, даже если один из запросов упадёт с ошибкой\nconst results = await Promise.allSettled([fetch('/api/a'), fetch('/api/b')]);\nconst successful = results.filter(r => r.status === 'fulfilled').map(r => r.value);",
      "example": "const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));",
      "points": [
        "Если писать три await подряд для независимых запросов, время ожидания складывается. Promise.all([...]) выполняет их параллельно за время самого медленного запроса!",
        "Promise.all падает целиком, если хотя бы один промис завершился ошибкой (rejected).",
        "Promise.allSettled никогда не выбрасывает ошибку и возвращает массив объектов со статусами \"fulfilled\" или \"rejected\" для каждого запроса."
      ],
      "tags": [
        "JavaScript",
        "Promise",
        "Promise.all",
        "Promise.allSettled",
        "async",
        "await",
        "параллельно",
        "асинхронность"
      ],
      "when": "При загрузке дашбордов, инициализации страницы из нескольких эндпоинтов и пакетной отправке файлов.",
      "alternatives": "Последовательный await нужен только тогда, когда второй запрос зависит от ID, полученного в первом.",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"
    },
    {
      "lang": "javascript",
      "id": "js-abort-controller",
      "title": "JS: отмена запросов и слушателей через AbortController и AbortSignal",
      "summary": "Прерывание зависших fetch-запросов по таймауту или при вводе нового поискового запроса (защита от гонки данных).",
      "code": "let searchController = null;\n\nasync function searchProducts(query) {\n  // Отменяем предыдущий незавершённый запрос, если пользователь продолжает печатать\n  searchController?.abort();\n  searchController = new AbortController();\n\n  try {\n    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {\n      signal: searchController.signal\n    });\n    return await res.json();\n  } catch (err) {\n    if (err.name === 'AbortError') return; // Штатная отмена, игнорируем\n    throw err;\n  }\n}",
      "example": "// Автоматический таймаут запроса через 5 секунд:\nfetch('/api/data', { signal: AbortSignal.timeout(5000) });",
      "points": [
        "Без отмены предыдущего запроса в живом поиске старый медленный ответ может прийти позже нового и перезаписать актуальные результаты (race condition).",
        "Статический метод AbortSignal.timeout(5000) автоматически прерывает зависший запрос через 5 секунд без ручного setTimeout!",
        "Один и тот же signal можно передать и в addEventListener(..., { signal }), чтобы разом отписать десятки обработчиков событий при закрытии компонента."
      ],
      "tags": [
        "JavaScript",
        "AbortController",
        "AbortSignal",
        "timeout",
        "fetch",
        "отмена запроса",
        "race condition"
      ],
      "when": "В живом поиске (autocomplete), при переключении вкладок с загрузкой данных и для задания таймаутов сети.",
      "alternatives": "Игнорирование результата через булев флаг isCancelled не останавливает скачивание трафика браузером.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/AbortController"
    },
    {
      "lang": "javascript",
      "id": "js-debounce-throttle",
      "title": "JS: оптимизация частых событий (Debounce и Throttle)",
      "summary": "Защита от сотен лишних вызовов функций при быстром вводе текста в поиск, ресайзе окна и прокрутке.",
      "code": "// Debounce: ждёт, пока пользователь перестанет печатать в течение delay мс\nfunction debounce(fn, delay = 300) {\n  let timerId;\n  return (...args) => {\n    clearTimeout(timerId);\n    timerId = setTimeout(() => fn(...args), delay);\n  };\n}\n\nconst onSearchInput = debounce((query) => {\n  console.log('Отправляем запрос:', query);\n}, 250);\n\nsearchInput.addEventListener('input', (e) => onSearchInput(e.target.value));",
      "example": "// Throttle: выполняет функцию не чаще одного раза в limit мс",
      "points": [
        "Debounce откладывает вызов до момента тишины (идеален для живого поиска, автосохранения черновика и валидации ввода).",
        "Throttle гарантирует регулярное выполнение не чаще чем раз в N мс (идеален для отслеживания скролла и движения мыши).",
        "Для плавной отрисовки графики при скролле или перетаскивании используй requestAnimationFrame() вместо таймеров."
      ],
      "tags": [
        "JavaScript",
        "debounce",
        "throttle",
        "setTimeout",
        "requestAnimationFrame",
        "оптимизация",
        "поиск"
      ],
      "when": "На всех полях живого поиска, фильтрах каталога и обработчиках resize/scroll.",
      "alternatives": "Для отслеживания появления блока при скролле используй IntersectionObserver вместо scroll + throttle.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Window/setTimeout"
    },
    {
      "lang": "javascript",
      "id": "js-url-search-params",
      "title": "JS: парсинг и сборка URL-адресов (new URL и URLSearchParams)",
      "summary": "Удобное чтение GET-параметров адресной строки, сборка фильтров каталога и безопасное кодирование кириллицы.",
      "code": "// Чтение параметров текущей страницы (?topic=flexbox&page=2)\nconst params = new URLSearchParams(window.location.search);\nconst topic = params.get('topic') ?? 'all';\n\n// Безопасная сборка URL с фильтрами без ручного склеивания \"?\" и \"&\"\nconst apiUrl = new URL('/api/items', window.location.origin);\napiUrl.searchParams.set('category', 'ноутбуки');\napiUrl.searchParams.set('sort', 'price_asc');\n\n// Обновление адресной строки без перезагрузки страницы\nwindow.history.replaceState({}, '', `?${apiUrl.searchParams}`);",
      "example": "const formParams = new URLSearchParams(new FormData(formElement));",
      "points": [
        "URLSearchParams автоматически кодирует пробелы, кириллицу и спецсимволы (&, =, +) — ручной вызов encodeURIComponent не нужен!",
        "Связка с window.history.replaceState() позволяет сохранять выбранные пользователем фильтры и табы прямо в URL, чтобы ссылкой можно было поделиться.",
        "Метод params.getAll(\"tag\") возвращает массив всех значений для повторяющихся параметров (?tag=js&tag=css)."
      ],
      "tags": [
        "JavaScript",
        "URL",
        "URLSearchParams",
        "history",
        "replaceState",
        "query",
        "get-параметры",
        "адрес"
      ],
      "when": "При синхронизации фильтров, поиска и пагинации с адресной строкой браузера.",
      "alternatives": "Никогда не парси window.location.search регулярками или через .split(\"&\").",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/URLSearchParams"
    },
    {
      "lang": "javascript",
      "id": "js-intl-formatting",
      "title": "JS: локализация валют, дат и склонение существительных (Intl API)",
      "summary": "Встроенное в браузер форматирование цен в рублях, читаемых дат («15 марта 2026») и относительного времени («2 дня назад»).",
      "code": "// Форматирование цены в рублях: \"14 990 ₽\"\nconst rubFormatter = new Intl.NumberFormat('ru-RU', {\n  style: 'currency',\n  currency: 'RUB',\n  maximumFractionDigits: 0\n});\nconsole.log(rubFormatter.format(14990));\n\n// Форматирование даты: \"15 марта 2026 г., 14:30\"\nconst dateFormatter = new Intl.DateTimeFormat('ru-RU', {\n  dateStyle: 'long',\n  timeStyle: 'short'\n});\nconsole.log(dateFormatter.format(new Date()));",
      "example": "const pr = new Intl.PluralRules('ru-RU'); /* Выбирает форму: one (1 товар), few (2 товара), many (5 товаров) */",
      "points": [
        "Встроенный объект Intl полностью заменяет тяжёлые библиотеки вроде Moment.js для вывода дат, чисел и валют!",
        "Создавай экземпляр new Intl.NumberFormat(...) один раз вне цикла и переиспользуй метод .format() для максимальной скорости.",
        "Intl.RelativeTimeFormat(\"ru\", { numeric: \"auto\" }) умеет красиво форматировать строки вроде «вчера», «через 3 часа», «5 дней назад»."
      ],
      "tags": [
        "JavaScript",
        "Intl",
        "NumberFormat",
        "DateTimeFormat",
        "PluralRules",
        "валюта",
        "рубли",
        "дата",
        "склонение"
      ],
      "when": "В интернет-магазинах для вывода цен, в блогах и чатах для дат и счётчиков («5 комментариев»).",
      "alternatives": "Ручное склеивание date.getDate() + \".\" + (date.getMonth() + 1) неудобно и не учитывает часовые пояса.",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl"
    },
    {
      "lang": "javascript",
      "id": "js-clipboard-share",
      "title": "JS: буфер обмена (navigator.clipboard) и системное меню «Поделиться»",
      "summary": "Копирование кода или промокода в один клик с визуальным откликом и вызов нативного окна отправки ссылки.",
      "code": "async function copyCode(text, buttonEl) {\n  try {\n    await navigator.clipboard.writeText(text);\n    const original = buttonEl.textContent;\n    buttonEl.textContent = '✓ Скопировано';\n    setTimeout(() => { buttonEl.textContent = original; }, 1800);\n  } catch (err) {\n    console.error('Не удалось скопировать:', err);\n  }\n}",
      "example": "if (navigator.share) {\n  await navigator.share({ title: 'DevShelf', url: location.href });\n}",
      "points": [
        "Clipboard API работает асинхронно (возвращает Promise) и требует безопасного контекста (HTTPS или localhost) и клика пользователя.",
        "Всегда меняй текст или иконку кнопки на «✓ Скопировано» на 1.5–2 секунды, чтобы пользователь видел мгновенное подтверждение.",
        "navigator.share() на смартфонах открывает родную системную шторку выбора мессенджера (Telegram, WhatsApp)."
      ],
      "tags": [
        "JavaScript",
        "clipboard",
        "writeText",
        "share",
        "копировать",
        "буфер обмена",
        "поделиться"
      ],
      "when": "Для кнопок копирования сниппетов кода, промокодов, реферальных ссылок и репоста статей.",
      "alternatives": "Устаревший document.execCommand(\"copy\") оставлен только как крайний фолбэк для старых HTTP-страниц.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Clipboard_API"
    },
    {
      "lang": "javascript",
      "id": "js-formdata-file-reader",
      "title": "JS: сбор данных формы через FormData и превью файлов (URL.createObjectURL)",
      "summary": "Чтение всех полей формы в один объект без ручного поиска каждого инпута и мгновенный показ выбранного аватара.",
      "code": "const form = document.querySelector('#profile-form');\n\nform.addEventListener('submit', async (e) => {\n  e.preventDefault();\n  const formData = new FormData(form);\n\n  // Превращаем в обычный JS-объект (если нужно отправить JSON)\n  const payload = Object.fromEntries(formData.entries());\n  console.log(payload);\n});\n\n// Мгновенное превью выбранной картинки до отправки на сервер\nfileInput.addEventListener('change', (e) => {\n  const file = e.target.files?.[0];\n  if (file) avatarImg.src = URL.createObjectURL(file);\n});",
      "example": "await fetch('/api/upload', { method: 'POST', body: new FormData(form) });",
      "points": [
        "new FormData(form) автоматически собирает значения всех <input>, <select> и <textarea>, у которых задан атрибут name!",
        "При отправке FormData напрямую в body метода fetch() НЕ нужно вручную ставить заголовок Content-Type — браузер сам выставит multipart/form-data с правильным boundary.",
        "URL.createObjectURL(file) работает мгновенно и не тратит память на кодирование файла в длинную строку Base64 (в отличие от FileReader.readAsDataURL)."
      ],
      "tags": [
        "JavaScript",
        "FormData",
        "createObjectURL",
        "file",
        "upload",
        "форма",
        "загрузка файла",
        "превью"
      ],
      "when": "При обработке любых форм, загрузке аватаров, документов и отправке данных на сервер.",
      "alternatives": "Ручной сбор document.getElementById() для 10 полей формы создаёт лишний дублирующийся код.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/FormData"
    },
    {
      "lang": "javascript",
      "id": "js-array-slice-splice-at",
      "title": "JS: выборка с конца (.at(-1)) и иммутабельное изменение (toSpliced, with, slice)",
      "summary": "Удобное получение последнего элемента массива и новые методы точечной замены и удаления без мутации исходных данных.",
      "code": "const items = ['HTML', 'CSS', 'JS', 'PHP'];\n\n// Получение последнего и предпоследнего элемента через отрицательный индекс!\nconst last = items.at(-1);       // 'PHP'\nconst secondLast = items.at(-2); // 'JS'\n\n// Немутирующая замена элемента по индексу (возвращает новый массив)\nconst updated = items.with(2, 'TypeScript'); // ['HTML', 'CSS', 'TypeScript', 'PHP']\n\n// Немутирующее удаление и вставка (вместо старого мутирующего splice)\nconst withoutFirst = items.toSpliced(0, 1);",
      "example": "const pageItems = items.slice(0, 10); /* Копия первых 10 элементов */",
      "points": [
        "Метод arr.at(-1) гораздо чище и короче старой записи arr[arr.length - 1], а также работает и со строками: str.at(-1)!",
        "Классические методы .splice() и .reverse() ломают исходный массив. Их современные близнецы .toSpliced() и .toReversed() возвращают новую копию.",
        "Метод arr.with(index, value) идеально подходит для обновления одного элемента массива в стейте приложения."
      ],
      "tags": [
        "JavaScript",
        "at",
        "slice",
        "splice",
        "toSpliced",
        "toReversed",
        "with",
        "массивы",
        "последний элемент"
      ],
      "when": "При пагинации (slice), чтении последнего элемента очереди (at(-1)) и обновлении списков в UI.",
      "alternatives": "Используй мутирующий .splice() только когда сознательно работаешь с локальным временным массивом.",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/at"
    },
    {
      "lang": "javascript",
      "id": "js-math-random-crypto",
      "title": "JS: математика (Math.round, clamp), случайные числа и генерация UUID (crypto.randomUUID)",
      "summary": "Округление, генерация случайных целых чисел в диапазоне и создание криптостойких уникальных ID без библиотек.",
      "code": "// Встроенная в браузер и Node.js генерация уникального UUID v4!\nconst id = crypto.randomUUID(); // \"36b8f84d-df4e-4d49-b662-bcde71a8764f\"\n\n// Случайное целое число от min до max включительно\nconst randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;\n\n// Ограничение числа заданным диапазоном [min, max] (аналог CSS clamp)\nconst clamp = (val, min, max) => Math.min(Math.max(val, min), max);\nconst volume = clamp(120, 0, 100); // 100",
      "example": "const price = Number((19.99 * 3).toFixed(2)); /* Округление до 2 знаков после запятой */",
      "points": [
        "Нативный метод crypto.randomUUID() мгновенно генерирует стандартный 36-символьный UUID v4 — сторонний npm-пакет uuid больше не нужен!",
        "При работе с деньгами в JS избегай ошибок плавающей точки (0.1 + 0.2 === 0.30000000000000004): веди расчёты в копейках (целых числах) или округляй через Math.round(val * 100) / 100.",
        "Формула Math.min(Math.max(val, min), max) незаменима для ползунков, зума и координат перетаскивания."
      ],
      "tags": [
        "JavaScript",
        "Math",
        "random",
        "randomUUID",
        "crypto",
        "round",
        "floor",
        "clamp",
        "uuid",
        "числа"
      ],
      "when": "При создании временных ID для новых задач/карточек, написании калькуляторов и игр.",
      "alternatives": "Для токенов безопасности используй crypto.getRandomValues() вместо предсказуемого Math.random().",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Crypto/randomUUID"
    },
    {
      "lang": "javascript",
      "id": "js-geometry-scroll",
      "title": "JS: координаты элементов (getBoundingClientRect) и плавный скролл (scrollIntoView)",
      "summary": "Точное измерение размеров и положения блока относительно окна и прокрутка страницы к нужному элементу.",
      "code": "const targetSection = document.getElementById('pricing');\n\n// Плавная прокрутка страницы к элементу по центру или по верхнему краю\ntargetSection.scrollIntoView({\n  behavior: 'smooth',\n  block: 'start'\n});\n\n// Точные координаты и размеры элемента относительно видимой области окна (viewport)\nconst rect = button.getBoundingClientRect();\nconsole.log(rect.top, rect.left, rect.width, rect.height);",
      "example": "window.scrollTo({ top: 0, behavior: 'smooth' }); /* Кнопка «Наверх» */",
      "points": [
        "element.scrollIntoView({ behavior: \"smooth\", block: \"nearest\" }) аккуратно прокручивает список так, чтобы выбранный с клавиатуры пункт стал виден.",
        "getBoundingClientRect() возвращает дробные субпиксельные значения относительно окна браузера (viewport). Чтобы получить координату от самого верха документа, прибавь window.scrollY.",
        "Учитывай, что частый вызов getBoundingClientRect() в цикле заставляет браузер синхронно пересчитывать лейаут (forced reflow)."
      ],
      "tags": [
        "JavaScript",
        "getBoundingClientRect",
        "scrollIntoView",
        "scrollTo",
        "координаты",
        "размеры",
        "прокрутка"
      ],
      "when": "Для позиционирования выпадающих тултипов рядом с кнопкой, кнопки «Наверх» и навигации по списку.",
      "alternatives": "Для отслеживания изменения размеров блока во времени используй ResizeObserver.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Element/scrollIntoView"
    },
    {
      "lang": "javascript",
      "id": "js-resize-mutation-observer",
      "title": "JS: отслеживание размеров блока (ResizeObserver) и изменений DOM (MutationObserver)",
      "summary": "Реакция графиков и холстов на изменение ширины их родительской колонки (а не только всего окна браузера).",
      "code": "const chartBox = document.querySelector('.chart-container');\n\n// Срабатывает при любом изменении размера самого блока (например, при сворачивании сайдбара!)\nconst ro = new ResizeObserver((entries) => {\n  for (const entry of entries) {\n    const { width, height } = entry.contentRect;\n    resizeCanvas(width, height);\n  }\n});\n\nro.observe(chartBox);",
      "example": "ro.disconnect(); /* Остановка наблюдения при удалении компонента */",
      "points": [
        "Событие window.onresize не срабатывает, когда блок меняет ширину из-за закрытия боковой панели или переключения флекс-колонки. ResizeObserver видит любое изменение размера самого элемента!",
        "Идеально подходит для перерисовки <canvas>, графиков и адаптивных таблиц.",
        "MutationObserver используется, когда нужно отследить изменение атрибутов или добавление новых узлов сторонним скриптом."
      ],
      "tags": [
        "JavaScript",
        "ResizeObserver",
        "MutationObserver",
        "resize",
        "размер",
        "адаптивность",
        "canvas"
      ],
      "when": "При разработке графиков, интерактивных генераторов, сплит-панелей и редакторов.",
      "alternatives": "Если нужно менять только CSS-стили при изменении ширины родителя, используй CSS @container queries.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/ResizeObserver"
    },
    {
      "lang": "javascript",
      "id": "js-custom-events-error",
      "title": "JS: собственные события (CustomEvent) и обработка ошибок (try / catch / finally)",
      "summary": "Слабосвязанный обмен сообщениями между независимыми модулями интерфейса и надёжный перехват исключений.",
      "code": "// 1. Отправка кастомного события с данными в объекте detail\nwindow.dispatchEvent(new CustomEvent('cart:updated', {\n  detail: { count: 4, totalPrice: 5200 }\n}));\n\n// 2. Подписка в любом другом месте приложения (например, в шапке)\nwindow.addEventListener('cart:updated', (e) => {\n  cartBadge.textContent = e.detail.count;\n});",
      "example": "try {\n  await saveData();\n} catch (err) {\n  showError(err.message);\n} finally {\n  spinner.hidden = true; /* Выполнится в любом случае! */\n}",
      "points": [
        "Блок finally внутри try/catch гарантированно выполняется и после успеха, и после ошибки — это лучшее место для выключения индикатора загрузки (isLoading = false).",
        "При пробросе собственной ошибки можно сохранить исходную причину через new Error(\"Не удалось загрузить профиль\", { cause: originalErr }).",
        "CustomEvent позволяет развязать модули (например, каталог и шапку с корзиной) без жёстких прямых импортов."
      ],
      "tags": [
        "JavaScript",
        "CustomEvent",
        "dispatchEvent",
        "try",
        "catch",
        "finally",
        "Error",
        "события",
        "ошибки"
      ],
      "when": "Для связи компонентов на чистом JS и безопасного выполнения сетевых операций.",
      "alternatives": "Для синхронизации данных между РАЗНЫМИ открытыми вкладками одного сайта используй new BroadcastChannel(\"app_sync\").",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/CustomEvent"
    },
    {
      "lang": "javascript",
      "id": "js-web-animations-api",
      "title": "JS: программные анимации через Web Animations API (element.animate)",
      "summary": "Нативный запуск плавных CSS-подобных анимаций напрямую из JavaScript с поддержкой промиса окончания (.finished).",
      "code": "async function flashHighlight(element) {\n  const animation = element.animate(\n    [\n      { transform: 'scale(0.96)', backgroundColor: 'rgba(56, 189, 248, 0.25)' },\n      { transform: 'scale(1)',    backgroundColor: 'transparent' }\n    ],\n    {\n      duration: 450,\n      easing: 'cubic-bezier(0.22, 1, 0.36, 1)'\n    }\n  );\n\n  // Можно дождаться завершения анимации через await!\n  await animation.finished;\n}",
      "example": "await modal.animate([{ opacity: 1 }, { opacity: 0 }], 200).finished;\nmodal.close();",
      "points": [
        "Метод element.animate(keyframes, options) работает на том же быстром движке браузера, что и CSS @keyframes, но позволяет передавать динамические координаты из JS!",
        "Свойство animation.finished возвращает Promise — можно легко дождаться конца анимации закрытия и только потом удалить элемент из DOM.",
        "Не требует подключения сторонних библиотек вроде GSAP или Anime.js для большинства интерфейсных задач."
      ],
      "tags": [
        "JavaScript",
        "animate",
        "Web Animations API",
        "WAAPI",
        "анимация",
        "finished",
        "keyframes"
      ],
      "when": "Когда нужно плавно скрыть элемент перед удалением из DOM или анимировать полёт товара в корзину.",
      "alternatives": "Для простых статических ховеров используй обычный CSS transition.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Element/animate"
    },
    {
      "lang": "javascript",
      "id": "js-reduce-flatmap",
      "title": "JS: агрегация данных (.reduce) и плоская трансформация (.flatMap)",
      "summary": "Подсчёт общей суммы корзины товаров, сборка словаря по ID и разворачивание вложенных массивов за один проход.",
      "code": "const cart = [\n  { id: 1, title: 'Клавиатура', price: 4500, qty: 1, tags: ['usb', 'mech'] },\n  { id: 2, title: 'Мышь',       price: 2200, qty: 2, tags: ['usb', 'wireless'] }\n];\n\n// Подсчёт итоговой стоимости корзины (всегда передавай начальное значение 0!)\nconst total = cart.reduce((sum, item) => sum + item.price * item.qty, 0); // 8900\n\n// Сбор всех тегов из всех товаров в один плоский массив\nconst allTags = cart.flatMap(item => item.tags); // ['usb', 'mech', 'usb', 'wireless']",
      "example": "const byId = cart.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});",
      "points": [
        "В метод .reduce(fn, initialValue) ВСЕГДА передавай второй аргумент (например, 0 или {}), иначе на пустом массиве [] вызов упадёт с TypeError!",
        "Метод .flatMap(fn) работает как комбинация .map() + .flat(1), но быстрее за один проход (также позволяет одновременно фильтровать и мапить, возвращая [] для пропуска элемента!).",
        "Для простой группировки элементов по полю в современном JS лучше использовать нативный Object.groupBy(items, fn) вместо сложного reduce."
      ],
      "tags": [
        "JavaScript",
        "reduce",
        "flatMap",
        "flat",
        "корзина",
        "сумма",
        "агрегация",
        "массивы"
      ],
      "when": "При расчёте итогов заказа, статистики дашборда и извлечении вложенных списков тегов или комментариев.",
      "alternatives": "Если reduce становится нечитаемым на 15 строк, обычный цикл for (const item of items) будет понятнее коллегам.",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
    },
    {
      "lang": "javascript",
      "id": "js-classes-private-fields",
      "title": "JS: классы ES2022+, приватные поля (#field), геттеры и статические методы",
      "summary": "Настоящая инкапсуляция состояния через синтаксис решётки #private без утечки внутренних свойств наружу.",
      "code": "class TokenStore {\n  // Настоящее приватное поле: недоступно снаружи класса!\n  #token = null;\n\n  constructor(initialToken) {\n    this.#token = initialToken;\n  }\n\n  get isAuthenticated() {\n    return Boolean(this.#token);\n  }\n\n  clear() {\n    this.#token = null;\n  }\n}\n\nconst store = new TokenStore('secret_jwt');\nconsole.log(store.isAuthenticated); // true",
      "example": "static fromJson(jsonStr) { return new User(JSON.parse(jsonStr)); }",
      "points": [
        "Поля и методы, начинающиеся с символа # (например, #token, #validate()), защищены на уровне движка JS — к ним нельзя обратиться снаружи даже через точку.",
        "Геттеры (get propName()) позволяют вычислять свойство на лету при чтении без круглых скобок: store.isAuthenticated.",
        "Поля класса теперь можно объявлять прямо в теле класса сверху без обязательного конструктора."
      ],
      "tags": [
        "JavaScript",
        "class",
        "private",
        "#field",
        "get",
        "set",
        "static",
        "ооп",
        "классы"
      ],
      "when": "При написании UI-компонентов, сторов состояния, API-клиентов и игровых сущностей.",
      "alternatives": "Для небольших утилит без внутреннего состояния достаточно обычных экспортируемых функций или замыканий.",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Private_properties"
    },
    {
      "lang": "javascript",
      "id": "js-date-timestamps",
      "title": "JS: работа с датами (Date.now, toISOString, сравнение и разница дат)",
      "summary": "Хранение времени в UTC, вычисление разницы между датами в днях/часах и проверка истечения срока.",
      "code": "const nowMs = Date.now(); // Текущий таймстамп в миллисекундах\nconst isoString = new Date().toISOString(); // \"2026-09-15T11:30:00.000Z\" (стандарт для БД и API)\n\n// Прибавление 7 дней к текущей дате\nconst nextWeek = new Date();\nnextWeek.setDate(nextWeek.getDate() + 7);\n\n// Разница между двумя датами в полных сутках\nconst diffMs = nextWeek - new Date();\nconst diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24)); // 7",
      "example": "const isExpired = new Date(order.expiresAt).getTime() < Date.now();",
      "points": [
        "Осторожно: в конструкторе new Date(2026, 0, 15) месяцы нумеруются с нуля (0 — январь, 11 — декабрь), а дни недели в getDay() начинаются с воскресенья (0)!",
        "Для передачи дат между фронтендом и сервером всегда используй строку ISO 8601 (date.toISOString()) или Unix-таймстамп.",
        "Для красивого вывода даты пользователю на русском языке используй new Intl.DateTimeFormat(\"ru-RU\").format(date)."
      ],
      "tags": [
        "JavaScript",
        "Date",
        "Date.now",
        "toISOString",
        "timestamp",
        "дата",
        "время",
        "таймер"
      ],
      "when": "В таймерах обратного отсчёта акций, проверке свежести кэша и фильтрах по диапазону дат.",
      "alternatives": "При сложной работе с часовыми поясами используют Intl.DateTimeFormat с опцией timeZone: \"Europe/Moscow\".",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date"
    },
    {
      "lang": "javascript",
      "id": "js-keyboard-shortcuts",
      "title": "JS: обработка горячих клавиш (keydown, e.key, Ctrl+K / Cmd+K и Esc)",
      "summary": "Профессиональная настройка глобальных шорткатов с кроссплатформенной поддержкой Windows/Linux (Ctrl) и macOS (Cmd).",
      "code": "window.addEventListener('keydown', (e) => {\n  // Поддержка и Ctrl+K (Windows/Linux), и Cmd+K (macOS)\n  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {\n    e.preventDefault(); // Отменяем стандартный фокус браузера в адресную строку\n    openCommandPalette();\n  }\n\n  // Одиночная клавиша \"/\" для фокуса в поиск (только если курсор уже не стоит в input!)\n  const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)\n                || document.activeElement?.isContentEditable;\n\n  if (!isTyping && e.key === '/') {\n    e.preventDefault();\n    searchInput.focus();\n  }\n});",
      "example": "if (e.key === 'Escape') closeModal();",
      "points": [
        "Всегда используй современное свойство e.key (\"Escape\", \"Enter\", \"ArrowDown\", \"k\") вместо давно устаревшего числового e.keyCode!",
        "Для комбинаций вроде Ctrl+K обязательно проверяй (e.ctrlKey || e.metaKey), чтобы шорткат одинаково работал и на ПК, и на Mac.",
        "Для одиночных горячих клавиш (\"/\", \"t\", \"?\") обязательно проверяй, что фокус сейчас НЕ находится внутри <input> или <textarea>, иначе пользователь не сможет напечатать эту букву в форме!"
      ],
      "tags": [
        "JavaScript",
        "keydown",
        "key",
        "ctrlKey",
        "metaKey",
        "Escape",
        "Enter",
        "горячие клавиши",
        "шорткаты"
      ],
      "when": "Для командной палитры (Ctrl+K), быстрого поиска (/), закрытия окон (Esc) и навигации стрелками.",
      "alternatives": "Для нативного <dialog> закрытие по клавише Escape уже встроено в браузер по умолчанию.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/KeyboardEvent/key"
    },
    {
      "lang": "javascript",
      "id": "js-matchmedia-network-visibility",
      "title": "JS: системные события браузера (matchMedia, visibilitychange, online/offline)",
      "summary": "Реакция скрипта на смену размера экрана, сворачивание вкладки пользователем и потерю интернет-соединения.",
      "code": "// 1. Слушатель медиазапроса в JS (срабатывает только при переходе через брейкпоинт 768px!)\nconst mq = window.matchMedia('(max-width: 768px)');\nmq.addEventListener('change', (e) => {\n  if (!e.matches) closeMobileDrawer();\n});\n\n// 2. Пауза видео или опроса сервера, когда пользователь переключился на другую вкладку\ndocument.addEventListener('visibilitychange', () => {\n  if (document.hidden) pausePolling();\n  else resumePolling();\n});\n\n// 3. Индикатор потери и восстановления сети\nwindow.addEventListener('offline', () => showBanner('Нет подключения к сети'));\nwindow.addEventListener('online',  () => hideBanner());",
      "example": "const isMobile = window.matchMedia('(max-width: 768px)').matches;",
      "points": [
        "window.matchMedia(\"(max-width: 768px)\") намного эффективнее события window.onresize: он вызывает колбэк ровно в тот момент, когда экран перешагнул порог 768px, а не на каждый пиксель движения мыши!",
        "Событие visibilitychange позволяет экономить батарею ноутбука и смартфона, ставя на паузу тяжёлые анимации и таймеры на фоновых вкладках.",
        "События online и offline незаменимы в PWA и редакторах документов для уведомления о работе из кэша."
      ],
      "tags": [
        "JavaScript",
        "matchMedia",
        "visibilitychange",
        "online",
        "offline",
        "navigator",
        "сеть",
        "вкладка"
      ],
      "when": "При закрытии мобильного меню на ресайзе, фоновом опросе API и индикации офлайн-режима.",
      "alternatives": "Отправка аналитики при закрытии вкладки делается через navigator.sendBeacon(\"/api/stats\", data) внутри visibilitychange.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Window/matchMedia"
    },
    {
      "lang": "javascript",
      "id": "js-json-parse-stringify",
      "title": "JS: безопасная сериализация JSON (JSON.stringify, JSON.parse и форматирование)",
      "summary": "Преобразование объектов в строку с отступами для красивого вывода и безопасный парсинг без падения скрипта.",
      "code": "const settings = { theme: 'dark', fontSize: 14, tags: ['html', 'css'] };\n\n// Красивый вывод JSON с отступами в 2 пробела (третий аргумент = 2)\nconst prettyJson = JSON.stringify(settings, null, 2);\n\n// Безопасная функция парсинга с фолбэком при битой строке\nfunction safeJsonParse(str, fallback = null) {\n  try {\n    return JSON.parse(str);\n  } catch {\n    return fallback;\n  }\n}",
      "example": "const data = safeJsonParse(localStorage.getItem('cart'), []);",
      "points": [
        "Вызов JSON.parse() на пустой или повреждённой строке выбрасывает синхронную ошибку SyntaxError и роняет весь скрипт — ВСЕГДА оборачивай чтение из localStorage в try/catch!",
        "Третий параметр в JSON.stringify(data, null, 2) форматирует JSON с переносами строк и отступами в 2 пробела (идеально для вывода в <pre> или скачивания файла).",
        "Помни, что JSON не сохраняет функции, undefined, Map/Set, а объекты Date превращает в строки ISO."
      ],
      "tags": [
        "JavaScript",
        "JSON",
        "JSON.parse",
        "JSON.stringify",
        "try",
        "catch",
        "сериализация"
      ],
      "when": "При сохранении данных в localStorage, отправке тела fetch-запросов и экспорте настроек в файл.",
      "alternatives": "Для глубокого клонирования объекта в памяти используй быстрый structuredClone(obj) вместо JSON.parse(JSON.stringify(obj)).",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"
    },
    {
      "lang": "javascript",
      "id": "js-timers-raf",
      "title": "JS: таймеры (setTimeout, setInterval, clearInterval) и requestAnimationFrame",
      "summary": "Отложенный запуск действий, периодическое обновление секундомера и плавная анимация с частотой монитора.",
      "code": "// 1. Однократный запуск через 2 секунды с возможностью отмены\nconst timeoutId = setTimeout(() => {\n  hideNotification();\n}, 2000);\n// clearTimeout(timeoutId); // если нужно отменить до срабатывания\n\n// 2. Плавный цикл отрисовки строго под герцовку экрана (60/120/144 Гц)\nfunction animateProgress(startTime) {\n  const elapsed = performance.now() - startTime;\n  const progress = Math.min(elapsed / 1000, 1); // от 0 до 1 за 1 секунду\n  progressBar.style.transform = `scaleX(${progress})`;\n\n  if (progress < 1) {\n    requestAnimationFrame(() => animateProgress(startTime));\n  }\n}\nrequestAnimationFrame(() => animateProgress(performance.now()));",
      "example": "const intervalId = setInterval(tick, 1000);\nclearInterval(intervalId);",
      "points": [
        "Всегда сохраняй ID, возвращаемый setInterval() и setTimeout(), чтобы очищать таймер через clearInterval(id) при закрытии окна или уходе со страницы (защита от утечек памяти)!",
        "Для любых визуальных анимаций и перетаскивания используй requestAnimationFrame() вместо setInterval(..., 16) — он синхронизируется с обновлением экрана и автоматически встаёт на паузу в фоновой вкладке.",
        "Для точного замера времени выполнения используй performance.now() вместо Date.now()."
      ],
      "tags": [
        "JavaScript",
        "setTimeout",
        "setInterval",
        "clearTimeout",
        "requestAnimationFrame",
        "performance",
        "таймер"
      ],
      "when": "Для автоскрытия тостов (setTimeout), обратного отсчёта (setInterval) и плавной графики (requestAnimationFrame).",
      "alternatives": "Для периодического опроса сервера лучше использовать рекурсивный setTimeout после завершения await fetch(), чтобы запросы не накладывались друг на друга при медленной сети!",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Window/requestAnimationFrame"
    },
    {
      "lang": "javascript",
      "id": "js-download-blob-file",
      "title": "JS: генерация и скачивание файла прямо в браузере (Blob + URL.createObjectURL)",
      "summary": "Экспорт сгенерированного кода, JSON-бэкапа или CSV-таблицы на диск пользователя в один клик без участия сервера.",
      "code": "function downloadFile(filename, content, mimeType = 'text/plain;charset=utf-8') {\n  const blob = new Blob([content], { type: mimeType });\n  const url = URL.createObjectURL(blob);\n\n  const link = document.createElement('a');\n  link.href = url;\n  link.download = filename;\n  document.body.appendChild(link);\n  link.click();\n\n  // Очищаем временную ссылку и освобождаем память!\n  link.remove();\n  URL.revokeObjectURL(url);\n}\n\n// Пример: скачать готовый HTML-шаблон\ndownloadFile('index.html', '<!doctype html><h1>Привет!</h1>', 'text/html;charset=utf-8');",
      "example": "downloadFile('backup.json', JSON.stringify(data, null, 2), 'application/json');",
      "points": [
        "Конструктор new Blob([content], { type }) создаёт виртуальный файл в оперативной памяти браузера из любой строки или массива байт.",
        "После вызова link.click() обязательно вызывай URL.revokeObjectURL(url), чтобы освободить выделенную под Blob память браузера!",
        "Для корректного открытия русских CSV-таблиц в Microsoft Excel добавь в начало строки UTF-8 BOM-маркер: new Blob([\"\\uFEFF\" + csvText], { type: \"text/csv;charset=utf-8\" })."
      ],
      "tags": [
        "JavaScript",
        "Blob",
        "createObjectURL",
        "revokeObjectURL",
        "download",
        "скачать файл",
        "экспорт",
        "csv"
      ],
      "when": "В генераторах кода, песочницах, экспорте настроек в JSON и выгрузке отчётов в CSV.",
      "alternatives": "Не требует отправки данных на сервер и работает даже полностью офлайн.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Blob"
    },
    {
      "lang": "javascript",
      "id": "js-drag-and-drop-files",
      "title": "JS: зона перетаскивания файлов мышью (Drag & Drop: dragover, drop)",
      "summary": "Обработка перетаскивания файлов из проводника в окно браузера с подсветкой рамки и чтением e.dataTransfer.files.",
      "code": "const dropZone = document.getElementById('drop-zone');\n\n// Обязательно вызываем e.preventDefault() в dragover, иначе браузер просто откроет картинку во вкладке!\ndropZone.addEventListener('dragover', (e) => {\n  e.preventDefault();\n  dropZone.classList.add('is-dragover');\n});\n\ndropZone.addEventListener('dragleave', () => {\n  dropZone.classList.remove('is-dragover');\n});\n\ndropZone.addEventListener('drop', (e) => {\n  e.preventDefault();\n  dropZone.classList.remove('is-dragover');\n\n  const files = Array.from(e.dataTransfer.files);\n  console.log('Перетащили файлов:', files.length);\n});",
      "example": ".drop-zone.is-dragover { border-color: #38bdf8; background: rgba(56, 189, 248, 0.08); }",
      "points": [
        "Главный секрет Drag & Drop API: чтобы событие drop вообще сработало и браузер не открыл перетащенную картинку вместо сайта, ОБЯЗАТЕЛЬНО вызывай e.preventDefault() и в dragover, и в drop!",
        "Список перетащенных файлов находится в объекте e.dataTransfer.files (имеет точно такой же формат FileList, как и у обычного <input type=\"file\">).",
        "Для доступности всегда помещай внутрь зоны перетаскивания обычный <input type=\"file\">, чтобы файл можно было выбрать и стандартным кликом."
      ],
      "tags": [
        "JavaScript",
        "drag and drop",
        "dragover",
        "drop",
        "dataTransfer",
        "files",
        "перетаскивание",
        "загрузка"
      ],
      "when": "В загрузчиках изображений, документов, импорте JSON-бэкапов и облачных хранилищах.",
      "alternatives": "Обычный <label> вокруг <input type=\"file\"> также поддерживает нативное перетаскивание файла прямо на инпут в ряде браузеров.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop"
    },
    {
      "lang": "javascript",
      "id": "js-intersection-lazy-toc",
      "title": "JS: чтение и запись CSS-переменных (setProperty / getComputedStyle)",
      "summary": "Динамическая передача координат курсора, скролла или цветовой палитры из JavaScript напрямую в CSS-переменные.",
      "code": "const root = document.documentElement;\n\n// 1. Запись нового значения в CSS-переменную --accent\nroot.style.setProperty('--accent', '#10b981');\n\n// 2. Эффект подсветки карточки за курсором мыши (Spotlight Card)\ncard.addEventListener('pointermove', (e) => {\n  const rect = card.getBoundingClientRect();\n  card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);\n  card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);\n});\n\n// 3. Чтение актуального значения переменной из CSS\nconst currentBg = getComputedStyle(root).getPropertyValue('--bg').trim();",
      "example": ".card { background: radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(56,189,248,0.12), transparent); }",
      "points": [
        "Вместо того чтобы менять десятки инлайновых стилей из JS, измени одну CSS-переменную через element.style.setProperty(\"--val\", x) — и все зависящие от неё правила перестроятся сами!",
        "Паттерн передачи --mouse-x и --mouse-y позволяет делать эффектные радиальные блики на карточках в 5 строчек кода.",
        "Метод style.removeProperty(\"--accent\") сбрасывает переменную обратно к значению из таблицы стилей."
      ],
      "tags": [
        "JavaScript",
        "setProperty",
        "getComputedStyle",
        "getPropertyValue",
        "CSS variables",
        "переменные",
        "spotlight"
      ],
      "when": "В визуальных генераторах, редакторах тем оформления, параллаксах и интерактивных карточках.",
      "alternatives": "Для простого переключения фиксированных состояний лучше использовать classList.toggle() вместо инлайновых переменных.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/CSSStyleDeclaration/setProperty"
    },
    {
      "lang": "javascript",
      "id": "js-array-from-fill-range",
      "title": "JS: генерация массивов и последовательностей (Array.from, Array.fill)",
      "summary": "Создание массива чисел от 1 до N для пагинации, звёзд рейтинга или сетки календаря в одну строчку.",
      "code": "// 1. Генерация массива чисел [1, 2, 3, 4, 5] для кнопок пагинации\nconst pages = Array.from({ length: 5 }, (_, index) => index + 1);\n\n// 2. Генерация шага чисел (например, годы с 2020 по 2026)\nconst range = (start, stop, step = 1) =>\n  Array.from({ length: Math.floor((stop - start) / step) + 1 }, (_, i) => start + i * step);\n\nconsole.log(range(2020, 2026)); // [2020, 2021, 2022, 2023, 2024, 2025, 2026]\n\n// 3. Превращение NodeList или Set в настоящий массив с маппингом за один шаг!\nconst texts = Array.from(document.querySelectorAll('h2'), el => el.textContent.trim());",
      "example": "const emptyGrid = Array.from({ length: 3 }, () => Array(3).fill(null));",
      "points": [
        "Второй аргумент в Array.from(iterable, mapFn) работает как встроенный .map() без создания промежуточного массива!",
        "Осторожно с Array(3).fill({}): метод .fill({}) заполнит все ячейки ссылкой на ОДИН И ТОТ ЖЕ объект в памяти! Чтобы создать независимые объекты или вложенные массивы, всегда используй Array.from({ length: 3 }, () => ({}))!",
        "Конструкция Array.from({ length: N }, (_, i) => i + 1) — стандартный идиоматический генератор диапазона в JS."
      ],
      "tags": [
        "JavaScript",
        "Array.from",
        "fill",
        "range",
        "пагинация",
        "последовательность",
        "массивы"
      ],
      "when": "При рендеринге номеров страниц пагинации, скелетонов загрузки, звёзд рейтинга и игровых сеток.",
      "alternatives": "Цикл for (let i = 1; i <= n; i++) делает то же самое императивно.",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from"
    },
    {
      "lang": "javascript",
      "id": "js-number-parse-isnan",
      "title": "JS: безопасное преобразование чисел (Number, parseInt, Number.isFinite, toFixed)",
      "summary": "Чтение числовых значений из инпутов и атрибутов, проверка на валидное число и защита от NaN.",
      "code": "const rawValue = inputElement.value; // всегда строка, например \"42.5\"\n\n// Быстрое преобразование через Number() или чтение сразу как числа:\nconst num = inputElement.valueAsNumber; // встроенное свойство для <input type=\"number\" / \"range\">!\n\n// Надёжная проверка, что значение — реальное конечное число (отсекает NaN, Infinity и \"42px\")\nif (Number.isFinite(num)) {\n  console.log(num.toFixed(2)); // \"42.50\"\n}\n\n// Целое число из строки с единицами измерения (\"16px\" -> 16)\nconst px = Number.parseInt('16px', 10);",
      "example": "const quantity = Math.max(1, Number.parseInt(input.value, 10) || 1);",
      "points": [
        "У полей <input type=\"number\">, <input type=\"range\"> и <input type=\"date\"> есть готовое свойство input.valueAsNumber, которое сразу возвращает тип number без ручного парсинга строк!",
        "Используй строгий Number.isFinite(val) или Number.isNaN(val) вместо старой глобальной функции isNaN(), которая сначала пытается привести строку к числу.",
        "Помни, что метод num.toFixed(2) возвращает СТРОКУ (\"42.50\"), поэтому если дальше нужно складывать числа, сначала выполни всю математику и вызывай toFixed() только перед самым выводом на экран!"
      ],
      "tags": [
        "JavaScript",
        "Number",
        "parseInt",
        "parseFloat",
        "isFinite",
        "isNaN",
        "valueAsNumber",
        "toFixed",
        "числа"
      ],
      "when": "При чтении ползунков, цен, количества товара в корзине и калькуляторов.",
      "alternatives": "Унарный плюс (+str) работает как Number(str), но хуже читается в длинных выражениях.",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite"
    },
    {
      "lang": "javascript",
      "id": "js-object-freeze-assign-clone",
      "title": "JS: глубокое клонирование (structuredClone) и неизменяемые константы (Object.freeze)",
      "summary": "Нативное создание полной независимой копии вложенных объектов/массивов и защита словарей конфигурации от мутации.",
      "code": "const originalState = {\n  user: { name: 'Павел', prefs: { theme: 'dark' } },\n  history: ['html-dialog', 'css-grid']\n};\n\n// Глубокая копия на уровне браузера (копирует вложенные объекты, массивы, Date, Map, Set!)\nconst nextState = structuredClone(originalState);\nnextState.user.prefs.theme = 'light'; // originalState.user.prefs.theme остался 'dark'!\n\n// Защита объекта констант от случайного изменения\nconst ROLES = Object.freeze({ ADMIN: 'admin', USER: 'user' });",
      "example": "/* structuredClone работает быстрее и точнее старого хака JSON.parse(JSON.stringify(obj)) */",
      "points": [
        "Оператор расширения {...obj} копирует только первый уровень, оставляя вложенные объекты общими по ссылке. Встроенная функция structuredClone(obj) создаёт полноценную глубокую копию!",
        "В отличие от старого трюка JSON.parse(JSON.stringify(obj)), метод structuredClone не ломает объекты Date, RegExp, Map, Set и Blob.",
        "Object.freeze(obj) замораживает объект первого уровня: в строгом режиме (\"use strict\" / ES-модули) попытка перезаписать свойство выбросит TypeError."
      ],
      "tags": [
        "JavaScript",
        "structuredClone",
        "Object.freeze",
        "Object.assign",
        "clone",
        "копия объекта",
        "иммутабельность"
      ],
      "when": "При сохранении снимков состояния (undo/redo в редакторах), работе со стейтом и объявлении констант.",
      "alternatives": "Учитывай, что structuredClone не копирует функции и DOM-элементы.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Window/structuredClone"
    },
    {
      "lang": "javascript",
      "id": "js-async-iterators-generators",
      "title": "JS: загрузка с повтором при сбое сети (fetch Retry с экспоненциальной паузой)",
      "summary": "Надёжная обёртка вокруг fetch() для автоматического повтора запроса при кратковременном обрыве мобильного интернета.",
      "code": "async function fetchWithRetry(url, options = {}, retries = 3, delayMs = 500) {\n  for (let attempt = 1; attempt <= retries; attempt++) {\n    try {\n      const response = await fetch(url, options);\n      if (!response.ok && response.status >= 500 && attempt < retries) {\n        throw new Error(`HTTP ${response.status}`);\n      }\n      return response;\n    } catch (err) {\n      if (attempt === retries || err.name === 'AbortError') throw err;\n      // Экспоненциальная пауза перед повтором: 500мс -> 1000мс -> 2000мс\n      await new Promise(r => setTimeout(r, delayMs * (2 ** (attempt - 1))));\n    }\n  }\n}",
      "example": "const res = await fetchWithRetry('/api/catalog');",
      "points": [
        "Повторять запрос (retry) имеет смысл только при сетевом обрыве или временных серверных ошибках 502 / 503 / 504 (но НЕ при клиентских ошибках 400 / 401 / 403 / 404!).",
        "Экспоненциальная задержка (500 мс, 1000 мс, 2000 мс) даёт серверу или мобильной сети время восстановиться, не заваливая его лавиной повторных запросов.",
        "Если запрос был отменён намеренно через AbortController (err.name === \"AbortError\"), цикл повторов немедленно прерывается."
      ],
      "tags": [
        "JavaScript",
        "fetch",
        "retry",
        "backoff",
        "async",
        "await",
        "сеть",
        "ошибки сети"
      ],
      "when": "При загрузке важных справочников, сохранении черновиков и работе в условиях нестабильного мобильного интернета.",
      "alternatives": "Для POST-запросов оплаты используй заголовок Idempotency-Key, чтобы повтор не создал дубль заказа.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Fetch_API"
    },
    {
      "lang": "javascript",
      "id": "js-console-debugging",
      "title": "JS: продвинутая отладка в консоли (console.table, time, group, assert)",
      "summary": "Наглядный вывод массивов объектов в виде сортируемой таблицы и точный замер скорости работы функций.",
      "code": "const users = [\n  { id: 1, name: 'Павел', role: 'admin' },\n  { id: 2, name: 'Елена', role: 'editor' }\n];\n\n// 1. Выводит красивую интерактивную таблицу прямо в DevTools!\nconsole.table(users, ['id', 'name', 'role']);\n\n// 2. Точный замер времени выполнения участка кода\nconsole.time('renderGrid');\nrenderItems(users);\nconsole.timeEnd('renderGrid'); // \"renderGrid: 1.42 ms\"",
      "example": "console.assert(users.length > 0, 'Массив пользователей не должен быть пустым!');",
      "points": [
        "console.table(array) — самый удобный способ посмотреть структуру ответа от сервера (массив товаров или пользователей) с возможностью сортировки по колонкам в DevTools!",
        "Пара console.time(\"label\") и console.timeEnd(\"label\") замеряет время выполнения кода с точностью до долей миллисекунды.",
        "console.groupCollapsed(\"Детали запроса\") позволяет аккуратно свернуть длинные логи в раскрывающуюся папку."
      ],
      "tags": [
        "JavaScript",
        "console",
        "console.table",
        "console.time",
        "debug",
        "devtools",
        "отладка",
        "консоль"
      ],
      "when": "Во время локальной разработки, профилирования циклов и проверки ответов API.",
      "alternatives": "Для пошаговой остановки скрипта с просмотром всех локальных переменных используй ключевое слово debugger; или брейкпоинты во вкладке Sources.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/console/table"
    },
    {
      "lang": "javascript",
      "id": "js-encode-uri-base64",
      "title": "JS: кодирование URL-параметров (encodeURIComponent) и UTF-8 Base64",
      "summary": "Безопасная передача строк со спецсимволами (&, ?, #, пробел) в ссылках и кодирование кириллицы в Base64.",
      "code": "const userQuery = 'C++ & C# разработка';\n\n// encodeURIComponent кодирует амперсанд & и решётку #, чтобы они не сломали GET-запрос!\nconst safeUrl = `/search?q=${encodeURIComponent(userQuery)}`;\n// \"/search?q=C%2B%2B%20%26%20C%23%20%D1%80%D0%B0%D0%B7...\"\n\n// Безопасное кодирование и декодирование кириллицы UTF-8 в Base64\nconst toBase64 = (str) => btoa(String.fromCharCode(...new TextEncoder().encode(str)));\nconst fromBase64 = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64), c => c.charCodeAt(0)));",
      "example": "/* Обычный encodeURI() НЕ кодирует символы &, = и +, поэтому для параметров всегда используй encodeURIComponent()! */",
      "points": [
        "Для отдельных значений GET-параметров ВСЕГДА используй encodeURIComponent(val) (или класс URLSearchParams), а не encodeURI()! Иначе поиск по запросу \"H&M\" или \"C#\" обрежет строку по символу & или #.",
        "Старая функция btoa(\"Привет\") падает с ошибкой InvalidCharacterError на русских буквах. Связка с TextEncoder() решает это для любого языка мира.",
        "Для обратной расшифровки параметра из адресной строки используется decodeURIComponent(encodedStr)."
      ],
      "tags": [
        "JavaScript",
        "encodeURIComponent",
        "decodeURIComponent",
        "Base64",
        "btoa",
        "TextEncoder",
        "кодирование",
        "url"
      ],
      "when": "При формировании ссылок для Telegram/WhatsApp, передаче поисковых фраз и работе с токенами.",
      "alternatives": "При использовании new URLSearchParams({ q: userQuery }) кодирование выполняется автоматически.",
      "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"
    },
    {
      "lang": "javascript",
      "id": "js-form-validation-api",
      "title": "JS: нативный Constraint Validation API (checkValidity, setCustomValidity, reportValidity)",
      "summary": "Программная проверка валидности формы и вывод кастомных русских сообщений об ошибках в нативных тултипах браузера.",
      "code": "const passInput = document.getElementById('password');\nconst confirmInput = document.getElementById('password-confirm');\n\nfunction validatePasswordsMatch() {\n  if (confirmInput.value !== passInput.value) {\n    // Устанавливаем собственный текст ошибки\n    confirmInput.setCustomValidity('Пароли не совпадают');\n  } else {\n    // ВАЖНО: пустая строка '' сбрасывает ошибку и помечает поле как валидное!\n    confirmInput.setCustomValidity('');\n  }\n}\n\nconfirmInput.addEventListener('input', validatePasswordsMatch);",
      "example": "if (!form.reportValidity()) return; /* Показывает системную подсказку у первого незаполненного поля */",
      "points": [
        "Главное правило setCustomValidity(msg): пока передана любая непустая строка, поле считается невалидным (:invalid). Чтобы разрешить отправку формы после исправления, ОБЯЗАТЕЛЬНО вызови input.setCustomValidity(\"\") с пустой строкой!",
        "Метод form.checkValidity() тихо возвращает true/false, а метод form.reportValidity() дополнительно подсвечивает первое ошибочное поле и показывает подсказку пользователю.",
        "Объект input.validity содержит булевы флаги причины ошибки: valueMissing (пустое required), typeMismatch (неверный email), tooShort (меньше minlength)."
      ],
      "tags": [
        "JavaScript",
        "setCustomValidity",
        "checkValidity",
        "reportValidity",
        "validity",
        "валидация форм",
        "пароли"
      ],
      "when": "При проверке совпадения паролей, уникальности логина или сложных условий формы.",
      "alternatives": "Для полного контроля над дизайном ошибок ставят <form novalidate> и выводят текст в соседний <span class=\"error-msg\">.",
      "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Forms/Form_validation"
    },
    {
      "lang": "javascript",
      "id": "js-history-pushstate-spa",
      "title": "JS: управление историей браузера без перезагрузки (history.pushState, replaceState, popstate)",
      "summary": "Смена URL при фильтрации каталога или переключении вкладок с поддержкой системных кнопок «Назад» и «Вперёд».",
      "code": "// 1. Обновление URL при выборе вкладки (добавляет шаг в историю кнопки «Назад»)\nfunction selectCategory(categorySlug) {\n  const url = new URL(window.location.href);\n  url.searchParams.set('cat', categorySlug);\n  window.history.pushState({ cat: categorySlug }, '', url);\n  renderCatalog(categorySlug);\n}\n\n// 2. Реакция на нажатие пользователем кнопки «Назад / Вперёд» в браузере\nwindow.addEventListener('popstate', (event) => {\n  const cat = new URLSearchParams(location.search).get('cat') ?? 'all';\n  renderCatalog(cat);\n});",
      "example": "history.replaceState(null, '', '?q=' + encodeURIComponent(query)); /* Меняет URL без засорения истории на каждую букву! */",
      "points": [
        "Разница между pushState и replaceState: для живого поиска при наборе каждой буквы используй replaceState (чтобы пользователю не пришлось нажимать кнопку «Назад» 20 раз по одной букве!), а для переключения крупных разделов/страниц — pushState!",
        "Событие popstate срабатывает, когда пользователь нажимает системные кнопки «Назад» или «Вперёд» в браузере (или делает свайп назад на смартфоне).",
        "Хранение активного таба и фильтра в URL позволяет пользователю обновить страницу по F5 или отправить ссылку коллеге без потери выбранного раздела."
      ],
      "tags": [
        "JavaScript",
        "history",
        "pushState",
        "replaceState",
        "popstate",
        "роутинг",
        "url",
        "назад"
      ],
      "when": "В табах, фильтрах каталога, живом поиске, модальных галереях и пошаговых формах.",
      "alternatives": "Для простых переходов внутри одной страницы также можно использовать window.location.hash и событие hashchange.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/History_API"
    },
    {
      "lang": "javascript",
      "id": "js-web-workers-offload",
      "title": "JS: фоновые вычисления без зависания интерфейса (Web Workers API)",
      "summary": "Вынос тяжёлого парсинга больших JSON/CSV-файлов, поиска или фильтрации из главного потока в отдельный поток процессора.",
      "code": "// В главном скрипте (main.js): создаём воркер и отправляем ему массив данных\nconst worker = new Worker(new URL('./search-worker.js', import.meta.url), { type: 'module' });\n\nworker.postMessage({ items: hugeDataset, query: 'flexbox' });\n\nworker.addEventListener('message', (e) => {\n  console.log('Отфильтровано в фоне без фризов UI:', e.data.results);\n});\n\n// В файле search-worker.js:\nself.addEventListener('message', (e) => {\n  const { items, query } = e.data;\n  const results = items.filter(i => i.title.includes(query));\n  self.postMessage({ results });\n});",
      "example": "worker.terminate(); /* Принудительная остановка фонового потока */",
      "points": [
        "JavaScript в браузере однопоточен: если цикл обрабатывает 100 000 строк в главном потоке дольше 50 мс, анимации, скролл и ввод текста замирают. Web Worker выполняет код параллельно на другом ядре процессора!",
        "Внутри Web Worker нет доступа к объектам window и document (DOM), общение происходит через быстрые сообщения postMessage().",
        "Опция { type: \"module\" } позволяет использовать стандартные import / export внутри файла воркера."
      ],
      "tags": [
        "JavaScript",
        "Web Worker",
        "Worker",
        "postMessage",
        "многопоточность",
        "производительность",
        "фон"
      ],
      "when": "При клиентском поиске по большим базам, генерации отчётов, сжатии изображений и криптографии.",
      "alternatives": "Для небольших задач до 10–20 мс оверхед на пересылку данных в воркер не нужен.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Web_Workers_API/Using_web_workers"
    }
  ],
  "php": [
    {
      "lang": "php",
      "id": "php-pdo-connection",
      "title": "PHP: безопасное подключение к базе данных через PDO",
      "summary": "Современный стандарт работы с СУБД (MySQL, PostgreSQL, SQLite) с активацией строгого режима ошибок и UTF-8.",
      "code": "<?php\ndeclare(strict_types=1);\n\nfunction getDbConnection(): PDO {\n    $host = '127.0.0.1';\n    $db   = 'devshelf_db';\n    $user = 'db_user';\n    $pass = 'secure_password';\n    $charset = 'utf8mb4';\n\n    $dsn = \"mysql:host=$host;dbname=$db;charset=$charset\";\n    $options = [\n        // Выбрасывать настоящие исключения PDOException при ошибках SQL\n        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,\n        // Возвращать результат в виде ассоциативного массива\n        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n        // Использовать нативные подготовленные выражения\n        PDO::ATTR_EMULATE_PREPARES   => false,\n    ];\n\n    try {\n        return new PDO($dsn, $user, $pass, $options);\n    } catch (PDOException $e) {\n        // Логируем ошибку в системный журнал, не показывая пароли пользователю!\n        error_log('Database Connection Error: ' . $e->getMessage());\n        throw new RuntimeException('Ошибка подключения к базе данных.');\n    }\n}",
      "example": "$pdo = getDbConnection();",
      "points": [
        "Всегда отключай эмуляцию prepared statements (PDO::ATTR_EMULATE_PREPARES => false) для гарантированной защиты от SQL Injection.",
        "Кодировка utf8mb4 обязательна: она поддерживает все символы, включая эмодзи и спецсимволы (обычный utf8 в MySQL обрезан).",
        "Никогда не выводи $e->getMessage() напрямую в браузер пользователя — в тексте ошибки могут оказаться пароли и структура БД."
      ],
      "tags": [
        "PHP",
        "PDO",
        "MySQL",
        "база данных",
        "подключение",
        "безопасность",
        "SQL",
        "utf8mb4"
      ],
      "when": "Используй для подключения к БД во всех PHP-проектах (блоги, интернет-магазины, личные кабинеты).",
      "alternatives": "Устаревшие функции mysql_* давно удалены из PHP, а mysqli привязан только к MySQL.",
      "url": "https://www.php.net/manual/ru/book.pdo.php"
    },
    {
      "lang": "php",
      "id": "php-pdo-prepared",
      "title": "PHP: подготовленные выражения PDO (защита от SQL-инъекций)",
      "summary": "Единственный правильный способ подстановки пользовательских параметров в SQL-запросы.",
      "code": "<?php\n// ПРАВИЛЬНО: параметры передаются отдельно от SQL-кода\n$email = $_POST['email'] ?? '';\n$status = 'active';\n\n$sql = 'SELECT id, username, email, created_at \n        FROM users \n        WHERE email = :email AND status = :status \n        LIMIT 1';\n\n$stmt = $pdo->prepare($sql);\n$stmt->execute([\n    ':email'  => $email,\n    ':status' => $status\n]);\n\n$user = $stmt->fetch(); // Возвращает массив или false\n\nif ($user) {\n    echo \"Привет, \" . htmlspecialchars($user['username'], ENT_QUOTES, 'UTF-8');\n} else {\n    echo \"Пользователь не найден.\";\n}",
      "example": "// Выборка нескольких строк:\n$users = $stmt->fetchAll();",
      "points": [
        "Никогда не склеивай строки: \"WHERE email = '\" . $email . \"'\" — это 100% уязвимость к взлому сайта через SQL-инъекцию.",
        "В подготовленных выражениях данные отправляются на сервер БД в отдельном протоколе и физически не могут изменить структуру SQL.",
        "При выводе данных в HTML всегда применяй htmlspecialchars() для защиты от XSS."
      ],
      "tags": [
        "PHP",
        "PDO",
        "prepared statements",
        "SQL injection",
        "безопасность",
        "SQL",
        "fetch",
        "execute"
      ],
      "when": "Обязательно для ЛЮБЫХ запросов с параметрами от пользователя (логин, поиск, фильтры, оформление заказа).",
      "alternatives": "Функции экранирования вроде addslashes() ненадежны и не защищают от всех типов инъекций.",
      "url": "https://www.php.net/manual/ru/pdo.prepared-statements.php"
    },
    {
      "lang": "php",
      "id": "php-pdo-transactions",
      "title": "PHP: транзакции в базе данных (beginTransaction, commit, rollBack)",
      "summary": "Атомарное выполнение цепочки операций: если хоть один запрос завершился ошибкой, все изменения откатываются назад.",
      "code": "<?php\ntry {\n    // Начинаем транзакцию\n    $pdo->beginTransaction();\n\n    // 1. Списываем деньги у отправителя\n    $stmt1 = $pdo->prepare('UPDATE accounts SET balance = balance - :amount WHERE id = :from_id');\n    $stmt1->execute([':amount' => 500, ':from_id' => 1]);\n\n    // 2. Начисляем получателю\n    $stmt2 = $pdo->prepare('UPDATE accounts SET balance = balance + :amount WHERE id = :to_id');\n    $stmt2->execute([':amount' => 500, ':to_id' => 2]);\n\n    // 3. Записываем лог операции\n    $stmt3 = $pdo->prepare('INSERT INTO transactions (from_id, to_id, amount) VALUES (?, ?, ?)');\n    $stmt3->execute([1, 2, 500]);\n\n    // Все шаги прошли успешно — фиксируем изменения в БД!\n    $pdo->commit();\n    echo \"Перевод успешно выполнен.\";\n} catch (Throwable $e) {\n    // В случае сбоя откатываем ВСЕ изменения назад!\n    if ($pdo->inTransaction()) {\n        $pdo->rollBack();\n    }\n    error_log('Ошибка транзакции: ' . $e->getMessage());\n    echo \"Операция отменена из-за ошибки.\";\n}",
      "example": "$pdo->beginTransaction();\n// ... запросы\n$pdo->commit();",
      "points": [
        "Транзакции гарантируют принцип ACID: деньги никогда не спишутся в никуда, если на втором шаге упал сервер.",
        "Для поддержки транзакций в MySQL таблицы должны быть на движке InnoDB (не MyISAM).",
        "Проверяй $pdo->inTransaction() перед вызовом rollBack(), чтобы не выбросить вторичную ошибку."
      ],
      "tags": [
        "PHP",
        "PDO",
        "транзакции",
        "beginTransaction",
        "commit",
        "rollBack",
        "ACID",
        "база данных"
      ],
      "when": "Для переводов, оформления заказов со списанием остатков на складе и комплексных изменений.",
      "alternatives": "Разрозненные запросы без транзакций оставляют базу в поломанном рассинхронизированном состоянии при сбоях.",
      "url": "https://www.php.net/manual/ru/pdo.begintransaction.php"
    },
    {
      "lang": "php",
      "id": "php-syntax-8",
      "title": "PHP: синтаксис PHP 8 (nullsafe ?->, match, constructor promotion)",
      "summary": "Современные возможности PHP 8.x, делающие код чище, надежнее и лаконичнее.",
      "code": "<?php\ndeclare(strict_types=1);\n\n// 1. Продвижение свойств в конструкторе и readonly (PHP 8.1+)\nclass UserDto {\n    public function __construct(\n        public readonly int $id,\n        public readonly string $name,\n        public readonly ?string $email = null\n    ) {}\n}\n\n// 2. Nullsafe оператор ?-> (безопасный вызов без проверок if !== null)\n$country = $user?->getAddress()?->getCountry()?->name ?? 'Не указана';\n\n// 3. Выражение match (строгая замена громоздкому switch)\n$statusText = match ($orderStatus) {\n    'new'       => 'Новый заказ',\n    'paid'      => 'Оплачен, формируется к отправке',\n    'shipped'   => 'В пути',\n    'delivered' => 'Доставлен клиенту',\n    default     => 'Неизвестный статус'\n};",
      "example": "// Union Types: public int|float $amount;",
      "points": [
        "match выполняет строгое сравнение (===) и возвращает значение, не требуя операторов break.",
        "Nullsafe оператор ?-> останавливает цепочку и возвращает null, если любое промежуточное звено равно null.",
        "Constructor Property Promotion уменьшает шаблонный boilerplate-код DTO и моделей в 3 раза."
      ],
      "tags": [
        "PHP",
        "PHP 8",
        "match",
        "nullsafe",
        "конструктор",
        "readonly",
        "современный php"
      ],
      "when": "Используй во всех новых проектах на PHP 8.1, 8.2 и 8.3.",
      "alternatives": "Устаревшие конструкции switch-case с нестрогим приведением типов (0 == \"hello\") приводили к багам.",
      "url": "https://www.php.net/releases/8.0/ru.php"
    },
    {
      "lang": "php",
      "id": "php-rest-api",
      "title": "PHP: создание REST JSON API и заголовки",
      "summary": "Построение чистого бэкенд API endpoint для отдачи и приема JSON в SPA или мобильных приложениях.",
      "code": "<?php\ndeclare(strict_types=1);\n\n// Обязательные заголовки для REST API\nheader('Content-Type: application/json; charset=utf-8');\nheader('X-Content-Type-Options: nosniff');\n\n// Чтение входящего сырого JSON-тела запроса (POST/PUT)\n$rawInput = file_get_contents('php://input');\n$data = json_decode($rawInput, true, 512, JSON_THROW_ON_ERROR | JSON_INVALID_UTF8_SUBSTITUTE);\n\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    if (empty($data['title'])) {\n        http_response_code(422); // Unprocessable Entity\n        echo json_encode([\n            'success' => false,\n            'error'   => 'Поле title обязательно для заполнения'\n        ]);\n        exit;\n    }\n\n    // Успешный ответ\n    http_response_code(201); // Created\n    echo json_encode([\n        'success' => true,\n        'id'      => 42,\n        'message' => 'Ресурс успешно создан'\n    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);\n    exit;\n}",
      "example": "http_response_code(404); echo json_encode(['error' => 'Not Found']);",
      "points": [
        "Для чтения JSON из тела запроса используй file_get_contents(\"php://input\"), так как в $_POST попадают только form-urlencoded данные.",
        "Флаг JSON_UNESCAPED_UNICODE сохраняет читаемые русские буквы вместо \\u043f\\u0440\\u0438...",
        "Всегда отправляй правильные HTTP-коды статуса (200, 201, 400, 401, 403, 404, 422, 500)."
      ],
      "tags": [
        "PHP",
        "REST",
        "API",
        "JSON",
        "json_encode",
        "json_decode",
        "HTTP",
        "бэкенд"
      ],
      "when": "Для создания API для фронтенда на Vue, React, мобильных приложений и микросервисов.",
      "alternatives": "Отдача смешанного HTML и JSON ломает клиентские парсеры.",
      "url": "https://www.php.net/manual/ru/function.json-encode.php"
    },
    {
      "lang": "php",
      "id": "php-password-security",
      "title": "PHP: безопасное хеширование паролей (password_hash)",
      "summary": "Правильное сохранение и проверка пользовательских паролей с автоматической солью по алгоритмам Bcrypt и Argon2.",
      "code": "<?php\n// Регистрация: создание надежного хеша с автоматической случайной солью\n$userPassword = $_POST['password'];\n\n$hashedPassword = password_hash($userPassword, PASSWORD_DEFAULT);\n// Сохраняем $hashedPassword в базу данных (колонка VARCHAR(255))\n\n// Авторизация: сверка введенного пароля с сохраненным хешем\n$loginPassword = $_POST['password'];\n$hashFromDb = $user['password_hash'];\n\nif (password_verify($loginPassword, $hashFromDb)) {\n    // Пароль верный!\n    // Проверяем, не пора ли обновить хеш до более стойкого\n    if (password_needs_rehash($hashFromDb, PASSWORD_DEFAULT)) {\n        $newHash = password_hash($loginPassword, PASSWORD_DEFAULT);\n        // Обновляем хеш в БД...\n    }\n    echo \"Успешная авторизация!\";\n} else {\n    echo \"Неверный логин или пароль.\";\n}",
      "example": "password_hash($pass, PASSWORD_ARGON2ID); // Максимальная стойкость на серверах с поддержкой Argon2",
      "points": [
        "НИКОГДА не используй md5(), sha1() или sha256() для паролей: они мгновенно вскрываются по радужным таблицам.",
        "password_hash сам генерирует криптографически стойкую соль и встраивает её в результирующую строку.",
        "При ошибке входа всегда говори «Неверный логин или пароль», не подсказывая злоумышленнику, что именно не совпало."
      ],
      "tags": [
        "PHP",
        "пароли",
        "password_hash",
        "password_verify",
        "безопасность",
        "хеширование",
        "авторизация"
      ],
      "when": "Обязательно для любой формы регистрации, смены пароля и авторизации пользователей.",
      "alternatives": "Самодельные алгоритмы со склейкой $salt . $password в md5 — грубейшая ошибка безопасности.",
      "url": "https://www.php.net/manual/ru/function.password-hash.php"
    },
    {
      "lang": "php",
      "id": "php-strict-types-variables",
      "title": "PHP 8: строгая типизация declare(strict_types=1), типы и оператор ??",
      "summary": "Включение строгой проверки типов аргументов и возвращаемых значений, union-типы и безопасная работа с null.",
      "code": "<?php\ndeclare(strict_types=1);\n\nfunction calculateTotal(float $price, int $qty = 1, ?float $discount = null): float {\n    $subtotal = $price * $qty;\n    return $discount !== null ? $subtotal * (1 - $discount) : $subtotal;\n}\n\n// Оператор объединения с null (??) и присваивания (??=)\n$page = (int) ($_GET['page'] ?? 1);\n$config['timeout'] ??= 30;",
      "example": "function parseId(int|string $id): string { return (string) $id; }",
      "points": [
        "Директива declare(strict_types=1); в первой строке файла запрещает PHP молча превращать строку \"42abc\" в число 42 и спасает от скрытых багов.",
        "Знак вопроса перед типом (?float) означает, что параметр или результат может быть либо float, либо null.",
        "В PHP 8 поддерживаются объединённые типы (int|string) и тип возврата void / never."
      ],
      "tags": [
        "PHP",
        "strict_types",
        "types",
        "null",
        "переменные",
        "типизация",
        "функции"
      ],
      "when": "Ставь declare(strict_types=1); в начале каждого нового PHP-файла проекта.",
      "alternatives": "Без указания типов в сигнатурах функций сложнее искать ошибки при рефакторинге.",
      "url": "https://www.php.net/manual/ru/language.types.declarations.php"
    },
    {
      "lang": "php",
      "id": "php-strings-heredoc",
      "title": "PHP 8: функции строк (str_contains, str_starts_with, mb_strlen, sprintf)",
      "summary": "Современная проверка подстрок в PHP 8, корректная работа с кириллицей в UTF-8 через mb_* и мультистроки.",
      "code": "<?php\ndeclare(strict_types=1);\n\n$title = 'Руководство по PHP 8.3';\n\n// Корректная длина кириллической строки в UTF-8\n$length = mb_strlen($title, 'UTF-8'); // 22 (обычный strlen вернул бы 39 байт!)\n$upper  = mb_strtoupper($title, 'UTF-8');\n\n// Нативные функции проверки подстрок из PHP 8\nif (str_contains($title, 'PHP') && str_starts_with($title, 'Руководство')) {\n    echo sprintf('Найдена статья \"%s\" (%d симв.)', $title, $length);\n}",
      "example": "$parts = explode(',', 'html,css,php');\n$joined = implode(' · ', $parts);",
      "points": [
        "В UTF-8 каждая русская буква занимает 2 байта, поэтому для подсчёта символов, обрезки и смены регистра ВСЕГДА используй функции с префиксом mb_ (mb_strlen, mb_substr, mb_strtolower)!",
        "Функции PHP 8 str_contains(), str_starts_with() и str_ends_with() навсегда избавили от путаницы с strpos() !== false.",
        "Функция trim($str) удаляет пробелы и переносы строк по краям пользовательского ввода."
      ],
      "tags": [
        "PHP",
        "str_contains",
        "str_starts_with",
        "mb_strlen",
        "mb_substr",
        "explode",
        "implode",
        "строки",
        "utf-8"
      ],
      "when": "При валидации текста на русском языке, проверке URL/префиксов и форматировании сообщений.",
      "alternatives": "Никогда не используй обычный substr() на русском тексте — он разрежет двухбайтовый символ пополам и выдаст «кракозябры» ().",
      "url": "https://www.php.net/manual/ru/function.str-contains.php"
    },
    {
      "lang": "php",
      "id": "php-arrays-functions",
      "title": "PHP 8: работа с массивами (array_map, array_filter, array_column, in_array)",
      "summary": "Трансформация, фильтрация ассоциативных массивов, быстрая индексация по ID и строгий поиск значений.",
      "code": "<?php\ndeclare(strict_types=1);\n\n$users = [\n    ['id' => 10, 'name' => 'Анна', 'role' => 'admin'],\n    ['id' => 20, 'name' => 'Игорь', 'role' => 'editor'],\n];\n\n// Короткие стрелочные функции fn() имеют доступ к внешним переменным\n$admins = array_values(array_filter($users, fn(array $u): bool => $u['role'] === 'admin'));\n\n// Извлечение колонки или переиндексация массива по полю 'id' за один вызов!\n$namesById = array_column($users, 'name', 'id'); // [10 => 'Анна', 20 => 'Игорь']\n\n// ВСЕГДА передавай третий параметр true (strict) в in_array!\n$isAllowed = in_array('admin', ['user', 'admin'], true);",
      "example": "$merged = [...$defaultConfig, ...$customConfig]; /* Распаковка массивов в PHP 8.1+ */",
      "points": [
        "Обязательно передавай третий аргумент true в in_array($needle, $haystack, true), иначе из-за нестрогого сравнения in_array(0, [\"admin\"]) вернёт true!",
        "После array_filter() ключи массива сохраняют старые номера (например, [0, 3, 5]). Оберни результат в array_values(), чтобы получить чистый список [0, 1, 2] для JSON.",
        "Функция array_column($rows, null, \"id\") превращает результат SQL-запроса в словарь с мгновенным поиском по ID."
      ],
      "tags": [
        "PHP",
        "array_map",
        "array_filter",
        "array_column",
        "in_array",
        "array_values",
        "fn",
        "массивы"
      ],
      "when": "При подготовке выборок из базы данных к выводу в шаблон или отдаче по JSON API.",
      "alternatives": "Обычный цикл foreach часто читается проще, если внутри нужно одновременно фильтровать и менять структуру.",
      "url": "https://www.php.net/manual/ru/function.array-column.php"
    },
    {
      "lang": "php",
      "id": "php-match-nullsafe",
      "title": "PHP 8: выражение match, именованные аргументы и оператор ?-> (Nullsafe)",
      "summary": "Строгая современная замена громоздкому switch-case, вызов функций по именам параметров и безопасные цепочки.",
      "code": "<?php\ndeclare(strict_types=1);\n\n// match возвращает значение, сравнивает строго (===) и не требует break!\n$statusText = match ($httpCode) {\n    200, 201 => 'Успешно',\n    400, 422 => 'Ошибка валидации данных',\n    404      => 'Страница не найдена',\n    default  => 'Внутренняя ошибка сервера',\n};\n\n// Nullsafe оператор ?-> не упадёт с Fatal Error, если $user или getProfile() вернёт null\n$country = $user?->getProfile()?->getAddress()?->country ?? 'RU';\n\n// Именованные аргументы делают вызов самодокументируемым\nsetcookie(name: 'theme', value: 'dark', httponly: true, samesite: 'Lax');",
      "example": "/* Если в match не сработает ни одна ветка и нет default, PHP выбросит UnhandledMatchError */",
      "points": [
        "В отличие от старого switch, выражение match использует строгое сравнение (===) и никогда «не проваливается» в следующую ветку из-за забытого break.",
        "Оператор ?-> (nullsafe) мгновенно обрывает цепочку вызовов и возвращает null, если любой промежуточный объект оказался пустым.",
        "Именованные аргументы позволяют пропускать необязательные параметры в середине списка без передачи десятка пустых значений."
      ],
      "tags": [
        "PHP",
        "match",
        "nullsafe",
        "?->",
        "named arguments",
        "switch",
        "условия"
      ],
      "when": "При маппинге статусов заказов, HTTP-кодов, ролей и настройке функций со множеством флагов.",
      "alternatives": "Используй if/elseif, если нужно проверить сложные составные условия, не сводящиеся к одному значению.",
      "url": "https://www.php.net/manual/ru/control-structures.match.php"
    },
    {
      "lang": "php",
      "id": "php-oop-enums",
      "title": "PHP 8: классы, продвижение свойств конструктора, readonly и перечисления (enum)",
      "summary": "Лаконичное объявление DTO и сервисов без шаблонного кода и типобезопасные перечисления статусов.",
      "code": "<?php\ndeclare(strict_types=1);\n\nenum OrderStatus: string {\n    case Pending = 'pending';\n    case Paid    = 'paid';\n    case Shipped = 'shipped';\n}\n\nreadonly class OrderDto {\n    // Свойства объявляются и присваиваются прямо в круглых скобках конструктора!\n    public function __construct(\n        public int $id,\n        public float $amount,\n        public OrderStatus $status = OrderStatus::Pending,\n    ) {}\n}\n\n$order = new OrderDto(id: 42, amount: 2500.0);",
      "example": "$status = OrderStatus::tryFrom($_POST['status'] ?? '') ?? OrderStatus::Pending;",
      "points": [
        "Constructor Property Promotion сокращает код класса в 3 раза: больше не нужно дублировать поля сверху и писать $this->id = $id внутри конструктора.",
        "Модификатор readonly на классе гарантирует, что объект нельзя случайно изменить после создания (идеально для DTO и конфигураций).",
        "Backed Enum (enum Status: string) имеет встроенный метод Status::tryFrom($val), который безопасно парсит строку из БД или формы."
      ],
      "tags": [
        "PHP",
        "class",
        "readonly",
        "enum",
        "construct",
        "oop",
        "классы",
        "перечисления"
      ],
      "when": "При проектировании моделей данных, сервисов, статусов заказов и ролей пользователей.",
      "alternatives": "Старые константы класса STATUS_PAID = \"paid\" не дают проверки типов в аргументах функций.",
      "url": "https://www.php.net/manual/ru/language.enumerations.php"
    },
    {
      "lang": "php",
      "id": "php-forms-xss-csrf",
      "title": "PHP 8: обработка форм ($_POST), фильтрация filter_input и защита от XSS / CSRF",
      "summary": "Безопасный приём данных от пользователя, валидация email, экранирование HTML-вывода и проверка CSRF-токена.",
      "code": "<?php\ndeclare(strict_types=1);\nsession_start();\n\n// Защита от подделки межсайтовых запросов (CSRF)\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    $token = $_POST['csrf_token'] ?? '';\n    if (!hash_equals($_SESSION['csrf_token'] ?? '', $token)) {\n        http_response_code(403);\n        exit('Неверный CSRF-токен');\n    }\n\n    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);\n    $name  = trim((string) ($_POST['name'] ?? ''));\n}\n\n// Функция безопасного вывода в HTML-шаблон (защита от XSS)\nfunction e(string $value): string {\n    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');\n}",
      "example": "<input type=\"hidden\" name=\"csrf_token\" value=\"<?= e($_SESSION['csrf_token']) ?>\">",
      "points": [
        "Любые данные от пользователя ($name, $_GET[\"q\"]) при выводе в HTML ОБЯЗАТЕЛЬНО пропускай через htmlspecialchars(..., ENT_QUOTES, \"UTF-8\"), иначе злоумышленник внедрит <script>!",
        "Для проверки email и URL используй встроенный filter_var($val, FILTER_VALIDATE_EMAIL) вместо самописных регулярок.",
        "Сравнивай секретные токены только через функцию hash_equals(), защищённую от атак по времени (timing attacks)."
      ],
      "tags": [
        "PHP",
        "POST",
        "GET",
        "htmlspecialchars",
        "XSS",
        "CSRF",
        "filter_input",
        "безопасность",
        "формы"
      ],
      "when": "В каждом обработчике форм обратной связи, авторизации, комментариев и личного кабинета.",
      "alternatives": "Шаблонизаторы вроде Twig и Blade экранируют вывод {{ $name }} автоматически по умолчанию.",
      "url": "https://www.php.net/manual/ru/function.htmlspecialchars.php"
    },
    {
      "lang": "php",
      "id": "php-sessions-passwords",
      "title": "PHP 8: хеширование паролей (password_hash / password_verify) и безопасные сессии",
      "summary": "Надёжное хранение паролей с солью (bcrypt / Argon2) и защита сессионных кук от перехвата.",
      "code": "<?php\ndeclare(strict_types=1);\n\n// 1. При регистрации: создаём криптостойкий хеш с автоматической солью\n$passwordHash = password_hash($plainPassword, PASSWORD_DEFAULT);\n\n// 2. При входе: проверяем введённый пароль против хеша из БД\nif (password_verify($plainPassword, $userFromDb['password_hash'])) {\n    // Защита от фиксации сессии (Session Fixation) после успешного входа!\n    session_regenerate_id(true);\n    $_SESSION['user_id'] = (int) $userFromDb['id'];\n}",
      "example": "session_set_cookie_params(['httponly' => true, 'secure' => true, 'samesite' => 'Lax']);\nsession_start();",
      "points": [
        "НИКОГДА не используй md5() или sha1() для паролей — они взламываются по радужным таблицам за секунды. Используй только password_hash() и password_verify()!",
        "Флаг httponly => true запрещает JavaScript-скриптам читать сессионную куку через document.cookie в случае XSS.",
        "Вызов session_regenerate_id(true) сразу после логина меняет ID сессии, защищая пользователя от кражи сессии."
      ],
      "tags": [
        "PHP",
        "password_hash",
        "password_verify",
        "session_start",
        "cookie",
        "авторизация",
        "пароли",
        "сессии"
      ],
      "when": "При реализации регистрации, входа на сайт и смены пароля пользователя.",
      "alternatives": "Для stateless REST API и мобильных приложений вместо сессий часто используют подписанные токены или БД-токены.",
      "url": "https://www.php.net/manual/ru/function.password-hash.php"
    },
    {
      "lang": "php",
      "id": "php-pdo-connection-transactions",
      "title": "PHP 8: подключение PDO к MySQL/PostgreSQL и транзакции (beginTransaction / commit)",
      "summary": "Правильная конфигурация PDO с выбросом исключений и атомарное выполнение нескольких SQL-запросов.",
      "code": "<?php\ndeclare(strict_types=1);\n\n$dsn = 'mysql:host=127.0.0.1;dbname=app_db;charset=utf8mb4';\n$pdo = new PDO($dsn, $dbUser, $dbPass, [\n    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Выбрасывать исключения при ошибках SQL\n    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Возвращать ассоциативные массивы\n    PDO::ATTR_EMULATE_PREPARES   => false,                  // Честные подготовленные запросы на стороне БД\n]);\n\n// Транзакция: либо выполнятся оба запроса, либо ни один!\ntry {\n    $pdo->beginTransaction();\n    $pdo->prepare('UPDATE accounts SET balance = balance - ? WHERE id = ?')->execute([500, $fromId]);\n    $pdo->prepare('UPDATE accounts SET balance = balance + ? WHERE id = ?')->execute([500, $toId]);\n    $pdo->commit();\n} catch (Throwable $e) {\n    if ($pdo->inTransaction()) $pdo->rollBack();\n    throw $e;\n}",
      "example": "$lastId = (int) $pdo->lastInsertId();",
      "points": [
        "В DSN для MySQL всегда указывай charset=utf8mb4 (а не старый utf8), чтобы база корректно сохраняла любые символы и эмодзи.",
        "PDO::ATTR_EMULATE_PREPARES => false заставляет MySQL возвращать числа как int/float, а не превращать все поля в строки.",
        "Транзакции (beginTransaction / commit / rollBack) гарантируют целостность данных при создании заказа, списании баланса и сложных обновлениях."
      ],
      "tags": [
        "PHP",
        "PDO",
        "MySQL",
        "transaction",
        "beginTransaction",
        "commit",
        "rollBack",
        "база данных",
        "sql"
      ],
      "when": "В едином файле подключения к БД и при любых операциях, изменяющих сразу несколько связанных таблиц.",
      "alternatives": "Не используй устаревшие функции mysql_* или склейку переменных прямо в строку SQL-запроса.",
      "url": "https://www.php.net/manual/ru/pdo.transactions.php"
    },
    {
      "lang": "php",
      "id": "php-json-rest-api",
      "title": "PHP 8: создание JSON API эндпоинта (json_encode, json_decode, php://input)",
      "summary": "Приём JSON-тела запроса от fetch(), корректная работа с кириллицей JSON_UNESCAPED_UNICODE и коды ответа.",
      "code": "<?php\ndeclare(strict_types=1);\n\nheader('Content-Type: application/json; charset=utf-8');\n\n// Читаем JSON-тело POST/PUT запроса из потока php://input\n$rawBody = file_get_contents('php://input');\ntry {\n    $data = json_decode($rawBody ?: '{}', true, 512, JSON_THROW_ON_ERROR);\n} catch (JsonException $e) {\n    http_response_code(400);\n    echo json_encode(['error' => 'Некорректный JSON'], JSON_UNESCAPED_UNICODE);\n    exit;\n}\n\nhttp_response_code(201);\necho json_encode([\n    'status' => 'ok',\n    'received' => $data['title'] ?? null,\n], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);",
      "example": "/* При отправке fetch() с заголовком application/json массив $_POST остаётся пустым — читай php://input! */",
      "points": [
        "Когда фронтенд отправляет JSON через fetch(), данные попадают НЕ в $_POST, а в поток php://input!",
        "Флаг JSON_UNESCAPED_UNICODE оставляет русские буквы читаемыми (\"Привет\"), вместо превращения их в \"\\u041f\\u0440...\".",
        "Флаг JSON_THROW_ON_ERROR выбрасывает понятное исключение JsonException при битом JSON вместо молчаливого возврата null."
      ],
      "tags": [
        "PHP",
        "json_encode",
        "json_decode",
        "php://input",
        "REST API",
        "JSON_UNESCAPED_UNICODE",
        "api"
      ],
      "when": "При написании бэкенда для AJAX-запросов, SPA-приложений, вебхуков Telegram и мобильных клиентов.",
      "alternatives": "Для обычных HTML-форм с multipart/form-data данные по-прежнему приходят в $_POST и $_FILES.",
      "url": "https://www.php.net/manual/ru/function.json-encode.php"
    },
    {
      "lang": "php",
      "id": "php-files-uploads",
      "title": "PHP 8: работа с файлами и безопасная загрузка изображений ($_FILES)",
      "summary": "Чтение и атомарная запись файлов с блокировкой LOCK_EX и проверка реального MIME-типа загружаемых картинок.",
      "code": "<?php\ndeclare(strict_types=1);\n\nif (!empty($_FILES['avatar']['tmp_name']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {\n    $tmpPath = $_FILES['avatar']['tmp_name'];\n\n    // Проверяем реальный MIME-тип содержимого файла, а не расширение из имени!\n    $finfo = new finfo(FILEINFO_MIME_TYPE);\n    $mime  = $finfo->file($tmpPath);\n    $allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];\n\n    if (!isset($allowed[$mime])) {\n        exit('Разрешены только изображения JPG, PNG и WebP');\n    }\n\n    // Генерируем безопасное случайное имя файла\n    $newName = bin2hex(random_bytes(12)) . '.' . $allowed[$mime];\n    move_uploaded_file($tmpPath, __DIR__ . '/uploads/' . $newName);\n}",
      "example": "file_put_contents(__DIR__ . '/app.log', $line . PHP_EOL, FILE_APPEND | LOCK_EX);",
      "points": [
        "Никогда не доверяй $_FILES[\"file\"][\"type\"] и оригинальному имени файла — злоумышленник может загрузить скрипт shell.php под видом картинки!",
        "Всегда проверяй реальное содержимое через finfo(FILEINFO_MIME_TYPE) и генерируй новое имя через bin2hex(random_bytes(12)).",
        "При записи логов через file_put_contents() используй флаги FILE_APPEND | LOCK_EX, чтобы параллельные запросы не повредили файл."
      ],
      "tags": [
        "PHP",
        "FILES",
        "move_uploaded_file",
        "file_get_contents",
        "file_put_contents",
        "finfo",
        "загрузка файлов"
      ],
      "when": "При загрузке аватаров, прайс-листов, документов и ведении файловых логов или кэша.",
      "alternatives": "В папке /uploads обязательно запрети исполнение PHP-скриптов через настройки Nginx или .htaccess.",
      "url": "https://www.php.net/manual/ru/features.file-upload.post-method.php"
    },
    {
      "lang": "php",
      "id": "php-curl-datetime",
      "title": "PHP 8: HTTP-запросы через cURL и неизменяемые даты DateTimeImmutable",
      "summary": "Отправка серверных запросов к внешним API (Telegram Bot API, платёжные шлюзы) и точные расчёты дат.",
      "code": "<?php\ndeclare(strict_types=1);\n\n// 1. DateTimeImmutable не меняет исходный объект при прибавлении дней!\n$now = new DateTimeImmutable('now', new DateTimeZone('Europe/Moscow'));\n$expiresAt = $now->modify('+7 days')->format('Y-m-d H:i:s');\n\n// 2. Отправка JSON POST-запроса к внешнему API через cURL\n$ch = curl_init('https://api.example.com/v1/notify');\ncurl_setopt_array($ch, [\n    CURLOPT_POST           => true,\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_TIMEOUT        => 10,\n    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],\n    CURLOPT_POSTFIELDS     => json_encode(['date' => $expiresAt]),\n]);\n$response = curl_exec($ch);\n$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);",
      "example": "$diff = $now->diff($expiresAt)->days;",
      "points": [
        "Всегда используй DateTimeImmutable вместо старого DateTime, чтобы вызов ->modify(\"+1 day\") создавал новую дату, а не мутировал исходную переменную в коде!",
        "В cURL обязательно задавай CURLOPT_TIMEOUT (например, 10 секунд), чтобы зависший внешний сервис не заблокировал воркеры твоего сервера.",
        "Для крупных проектов поверх cURL удобно использовать PSR-18 HTTP-клиент Guzzle."
      ],
      "tags": [
        "PHP",
        "curl",
        "DateTimeImmutable",
        "DateTimeZone",
        "http",
        "запрос",
        "дата",
        "время"
      ],
      "when": "Для интеграции с внешними API, отправки уведомлений в Telegram и расчёта срока действия подписок.",
      "alternatives": "file_get_contents(\"https://...\") не позволяет гибко контролировать заголовки, коды ошибок и таймауты как cURL.",
      "url": "https://www.php.net/manual/ru/class.datetimeimmutable.php"
    },
    {
      "lang": "php",
      "id": "php-pdo-select-in-pagination",
      "title": "PHP 8 & PDO: выборка по списку ID (WHERE IN), LIKE-поиск и пагинация (LIMIT / OFFSET)",
      "summary": "Безопасная генерация плейсхолдеров для оператора IN (...), поиск по подстроке и постраничная навигация.",
      "code": "<?php\ndeclare(strict_types=1);\n\n// 1. Безопасный поиск по подстроке LIKE (проценты % добавляются к значению в PHP, а не в SQL!)\n$stmt = $pdo->prepare('SELECT id, title FROM articles WHERE title LIKE :query LIMIT :limit OFFSET :offset');\n$stmt->bindValue(':query', '%' . $search . '%', PDO::PARAM_STR);\n$stmt->bindValue(':limit', 20, PDO::PARAM_INT);\n$stmt->bindValue(':offset', ($page - 1) * 20, PDO::PARAM_INT);\n$stmt->execute();\n$articles = $stmt->fetchAll();\n\n// 2. Безопасная выборка по массиву ID: WHERE id IN (?, ?, ?)\n$ids = [10, 25, 42];\n$placeholders = implode(',', array_fill(0, count($ids), '?'));\n$stmtIn = $pdo->prepare(\"SELECT * FROM products WHERE id IN ($placeholders)\");\n$stmtIn->execute($ids);",
      "example": "$totalCount = (int) $pdo->query('SELECT COUNT(*) FROM articles')->fetchColumn();",
      "points": [
        "В подготовленных запросах PDO нельзя привязать целый массив к одному плейсхолдеру IN (:ids). Правильный паттерн — сгенерировать строку знаков вопроса через implode(\",\", array_fill(0, count($ids), \"?\"))!",
        "При поиске через LIKE знаки процентов \"%\" склеиваются с переменной внутри PHP (\"%\" . $q . \"%\") и передаются в плейсхолдер.",
        "Метод $stmt->fetchColumn() удобно возвращает одно скалярное значение первого столбца (например, результат SELECT COUNT(*))."
      ],
      "tags": [
        "PHP",
        "PDO",
        "WHERE IN",
        "LIKE",
        "LIMIT",
        "OFFSET",
        "fetchColumn",
        "пагинация",
        "поиск в бд"
      ],
      "when": "В каталогах товаров с пагинацией, поиске по базе и выборке товаров корзины по массиву ID.",
      "alternatives": "Перед выполнением запроса с WHERE IN обязательно проверь, что массив $ids не пустой (if (!$ids) return [];), иначе SQL выдаст ошибку на пустых скобках IN ().",
      "url": "https://www.php.net/manual/ru/pdostatement.bindvalue.php"
    },
    {
      "lang": "php",
      "id": "php-headers-redirects-cors",
      "title": "PHP 8: HTTP-заголовки (header), редиректы 301/302, CORS и скачивание файлов",
      "summary": "Правильное выполнение перенаправлений с обязательным exit, настройка междоменных запросов CORS и отдача PDF/CSV.",
      "code": "<?php\ndeclare(strict_types=1);\n\n// 1. Безопасный редирект после успешной отправки формы (паттерн Post/Redirect/Get)\nheader('Location: /profile?saved=1', true, 303);\nexit; // ОБЯЗАТЕЛЬНО вызывай exit после header('Location: ...')!\n\n// 2. Разрешение CORS-запросов для фронтенда с другого домена/порта\nheader('Access-Control-Allow-Origin: https://app.example.com');\nheader('Access-Control-Allow-Methods: GET, POST, OPTIONS');\nheader('Access-Control-Allow-Headers: Content-Type, Authorization');\nif ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {\n    http_response_code(204);\n    exit;\n}",
      "example": "header('Content-Disposition: attachment; filename=\"report.csv\"');",
      "points": [
        "Самая опасная ошибка в PHP — забыть написать exit; сразу после header(\"Location: /login\")! Без exit скрипт продолжит выполняться дальше и отдаст закрытый контент.",
        "Функция header() должна вызываться ДО любого вывода текста, пробелов или HTML в браузер (иначе возникнет ошибка Headers already sent).",
        "Паттерн Post/Redirect/Get (редирект после обработки POST-формы) защищает от повторной отправки формы при нажатии клавиши F5."
      ],
      "tags": [
        "PHP",
        "header",
        "Location",
        "redirect",
        "CORS",
        "http_response_code",
        "редирект",
        "заголовки"
      ],
      "when": "При проверке авторизации, редиректах после сохранения форм и настройке REST API.",
      "alternatives": "Для постоянных SEO-редиректов старых страниц передавай код 301: header(\"Location: /new-url\", true, 301); exit;.",
      "url": "https://www.php.net/manual/ru/function.header.php"
    },
    {
      "lang": "php",
      "id": "php-env-config-errors",
      "title": "PHP 8: переменные окружения (getenv / $_ENV), логирование и скрытие ошибок в продакшене",
      "summary": "Безопасное хранение паролей БД вне Git-репозитория и перехват фатальных ошибок через Throwable.",
      "code": "<?php\ndeclare(strict_types=1);\n\n// На продакшене НИКОГДА не показываем стектрейс ошибок пользователю на экран!\nini_set('display_errors', '0');\nini_set('log_errors', '1');\nerror_reporting(E_ALL);\n\n// Чтение секретов из переменных окружения со значением по умолчанию\n$dbHost = $_ENV['DB_HOST'] ?? getenv('DB_HOST') ?: '127.0.0.1';\n\n// Глобальный перехватчик любых исключений и ошибок типизации (TypeError, Error)\nset_exception_handler(function (Throwable $e): void {\n    error_log(sprintf('[%s] %s in %s:%d', get_class($e), $e->getMessage(), $e->getFile(), $e->getLine()));\n    http_response_code(500);\n    echo 'Произошла ошибка сервера. Попробуйте позже.';\n});",
      "example": "/* Обязательно добавь файл .env в .gitignore, чтобы пароли от БД не попали на GitHub! */",
      "points": [
        "В PHP 7/8 базовый интерфейс Throwable ловит сразу всё: и обычные исключения (Exception), и фатальные ошибки движка (Error, TypeError, ParseError)!",
        "На боевом сервере всегда выключай вывод ошибок на экран (display_errors = 0), чтобы не раскрыть посетителям пути к файлам и структуру SQL-таблиц.",
        "Пароли от базы данных и ключи API храни в файле .env (добавленном в .gitignore) или переменных окружения сервера."
      ],
      "tags": [
        "PHP",
        "Throwable",
        "try",
        "catch",
        "error_log",
        "getenv",
        "env",
        "display_errors",
        "логирование",
        "ошибки"
      ],
      "when": "Во входном файле index.php или bootstrap.php каждого проекта.",
      "alternatives": "На этапе локальной разработки включай display_errors = 1 для быстрой отладки.",
      "url": "https://www.php.net/manual/ru/language.errors.php7.php"
    },
    {
      "lang": "php",
      "id": "php-preg-match-validation",
      "title": "PHP 8: регулярные выражения (preg_match, preg_replace) с поддержкой кириллицы (/u)",
      "summary": "Проверка формата телефона, слага и очистка строк по шаблону с обязательным модификатором Юникода /u.",
      "code": "<?php\ndeclare(strict_types=1);\n\n// Модификатор /u в конце регулярки ОБЯЗАТЕЛЕН для корректной работы с русскими буквами UTF-8!\n$isValidName = (bool) preg_match('/^[а-яёa-zs-]{2,40}$/iu', $inputName);\n\n// Очистка номера телефона от скобок, пробелов и дефисов (оставляем только цифры)\n$cleanPhone = preg_replace('/D+/', '', '+7 (999) 123-45-67'); // \"79991234567\"\n\n// Извлечение именованных групп (?<year>d{4})\nif (preg_match('/^(?<year>d{4})-(?<month>d{2})$/', '2026-09', $matches)) {\n    echo $matches['year']; // \"2026\"\n}",
      "example": "$slug = trim(preg_replace('/[^a-z0-9]+/', '-', strtolower($str)), '-');",
      "points": [
        "При работе с кириллицей в регулярных выражениях PHP всегда ставь модификатор u после закрывающего слэша (/.../iu), иначе классы символов и регистр сломаются на UTF-8!",
        "Не забывай добавлять букву «ё» отдельно в диапазон [а-яё], так как в таблице символов UTF-8 буква «ё» стоит отдельно от диапазона «а–я»!",
        "Именованные карманы (?<name>...) делают массив совпадений $matches самодокументируемым."
      ],
      "tags": [
        "PHP",
        "preg_match",
        "preg_replace",
        "regex",
        "регулярные выражения",
        "кириллица",
        "телефон",
        "валидация"
      ],
      "when": "При нормализации номеров телефонов, проверке промокодов, парсинге параметров и генерации ЧПУ (slug).",
      "alternatives": "Для простой замены фиксированной подстроки всегда используй быстрый str_replace() вместо preg_replace().",
      "url": "https://www.php.net/manual/ru/function.preg-match.php"
    },
    {
      "lang": "php",
      "id": "php-date-intl-formatting",
      "title": "PHP 8: форматирование дат, таймзоны и склонение слов (numfmt / plural)",
      "summary": "Работа с московским временем, форматами дат и правильное русское склонение числительных («1 товар, 2 товара, 5 товаров»).",
      "code": "<?php\ndeclare(strict_types=1);\n\n// Универсальная функция склонения существительных после числа на русском языке\nfunction pluralRu(int $number, array $forms): string {\n    // $forms = ['товар', 'товара', 'товаров']\n    $n = abs($number) % 100;\n    $n1 = $n % 10;\n    if ($n > 10 && $n < 20) return \"$number {$forms[2]}\";\n    if ($n1 > 1 && $n1 < 5) return \"$number {$forms[1]}\";\n    if ($n1 === 1)          return \"$number {$forms[0]}\";\n    return \"$number {$forms[2]}\";\n}\n\necho pluralRu(1, ['статья', 'статьи', 'статей']);  // \"1 статья\"\necho pluralRu(4, ['статья', 'статьи', 'статей']);  // \"4 статьи\"\necho pluralRu(12, ['статья', 'статьи', 'статей']); // \"12 статей\"",
      "example": "date_default_timezone_set('Europe/Moscow');",
      "points": [
        "В русском языке три формы множественного числа: для 1 (статья), для 2–4 (статьи) и для 5–20 (статей). Функция pluralRu() решает эту задачу в 8 строк.",
        "В базе данных время лучше хранить в UTC (или TIMESTAMP), а переводить в часовой пояс пользователя при выводе через DateTimeImmutable::setTimezone().",
        "Для форматирования цен с пробелами-разделителями тысяч в PHP используй number_format($price, 0, \",\", \" \") . \" ₽\" (например: \"14 990 ₽\")."
      ],
      "tags": [
        "PHP",
        "plural",
        "number_format",
        "date",
        "timezone",
        "склонение",
        "валюта",
        "числа"
      ],
      "when": "При выводе количества товаров в корзине, просмотров статьи, комментариев и цен в рублях.",
      "alternatives": "Если на хостинге установлено расширение PHP intl, можно также использовать класс MessageFormatter.",
      "url": "https://www.php.net/manual/ru/function.number-format.php"
    },
    {
      "lang": "php",
      "id": "php-superglobals-server-url",
      "title": "PHP 8: суперглобальный массив $_SERVER, определение HTTPS, IP и роутинг",
      "summary": "Чтение текущего пути URI без GET-параметров, метода запроса (GET/POST), заголовка Authorization и HTTPS.",
      "code": "<?php\ndeclare(strict_types=1);\n\n$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';\n// Чистый путь без GET-параметров (например, \"/catalog/items\" из \"/catalog/items?page=2\")\n$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';\n\n// Надёжная проверка HTTPS (включая работу за обратным прокси Nginx / Cloudflare)\n$isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')\n        || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');\n\n// Простой роутер на выражении match из PHP 8\nmatch ([$method, $path]) {\n    ['GET',  '/']          => renderHome(),\n    ['GET',  '/api/items'] => sendJsonItems(),\n    ['POST', '/api/items'] => createItem(),\n    default                => sendNotFound(),\n};",
      "example": "$bearerToken = $_SERVER['HTTP_AUTHORIZATION'] ?? '';",
      "points": [
        "Функция parse_url($_SERVER[\"REQUEST_URI\"], PHP_URL_PATH) отрезает строку ?page=2&sort=asc, оставляя чистый маршрут для роутера.",
        "На хостингах с связкой Nginx + Apache (и за Cloudflare) HTTPS часто передаётся в заголовке $_SERVER[\"HTTP_X_FORWARDED_PROTO\"] === \"https\".",
        "Все клиентские HTTP-заголовки в PHP попадают в $_SERVER с префиксом HTTP_ в верхнем регистре (например, X-Api-Key становится $_SERVER[\"HTTP_X_API_KEY\"])."
      ],
      "tags": [
        "PHP",
        "SERVER",
        "REQUEST_URI",
        "REQUEST_METHOD",
        "parse_url",
        "router",
        "https",
        "роутер"
      ],
      "when": "Во входном файле index.php при написании микрофреймворков, REST API и обработчиков вебхуков.",
      "alternatives": "Никогда не используй $_SERVER[\"PHP_SELF\"] без экранирования в атрибуте action формы из-за риска XSS.",
      "url": "https://www.php.net/manual/ru/reserved.variables.server.php"
    },
    {
      "lang": "php",
      "id": "php-sql-joins-indexes",
      "title": "PHP & SQL: объединение таблиц (INNER JOIN vs LEFT JOIN), GROUP BY и индексы",
      "summary": "Практическая шпаргалка по выборке связанных данных из нескольких таблиц БД и ускорению медленных запросов.",
      "code": "-- 1. LEFT JOIN: выбираем ВСЕ статьи и количество комментариев к каждой (даже если комментариев 0!)\nSELECT\n    a.id,\n    a.title,\n    u.name AS author_name,\n    COUNT(c.id) AS comments_count\nFROM articles a\nINNER JOIN users u ON u.id = a.author_id\nLEFT JOIN comments c ON c.article_id = a.id\nWHERE a.is_published = 1\nGROUP BY a.id\nORDER BY a.created_at DESC\nLIMIT 20;\n\n-- 2. Создание составного индекса для мгновенной фильтрации и сортировки\nCREATE INDEX idx_articles_pub_created ON articles (is_published, created_at DESC);",
      "example": "/* INNER JOIN отбрасывает строки без совпадения, а LEFT JOIN сохраняет все строки левой таблицы */",
      "points": [
        "Главное отличие: INNER JOIN возвращает только те записи, которые есть в обеих таблицах. Если считать комментарии к статьям через INNER JOIN, статьи без единого комментария просто пропадут из выборки! Поэтому для необязательных связей всегда используй LEFT JOIN.",
        "Обязательно создавай индексы (CREATE INDEX) на все внешние ключи (author_id, category_id) и поля, участвующие в WHERE и ORDER BY.",
        "Не пиши SELECT * в продакшене — перечисляй только нужные колонки, чтобы не гонять тяжёлые текстовые поля по сети впустую."
      ],
      "tags": [
        "PHP",
        "SQL",
        "JOIN",
        "LEFT JOIN",
        "INNER JOIN",
        "GROUP BY",
        "INDEX",
        "база данных",
        "запросы"
      ],
      "when": "При выводе списков статей с авторами, заказов с клиентами и категорий с количеством товаров.",
      "alternatives": "Избегай проблемы N+1 запросов (когда внутри цикла foreach по 20 статьям выполняется ещё 20 отдельных SQL-запросов за автором каждой статьи!).",
      "url": "https://www.php.net/manual/ru/book.pdo.php"
    },
    {
      "lang": "php",
      "id": "php-password-token-random-bytes",
      "title": "PHP 8: генерация криптостойких токенов (random_bytes, random_int) и HMAC-подписи",
      "summary": "Создание безопасных ссылок сброса пароля, API-ключей, одноразовых СМС-кодов и проверка подписи вебхуков.",
      "code": "<?php\ndeclare(strict_types=1);\n\n// 1. 64-символьный криптостойкий токен для сброса пароля или API-ключа\n$resetToken = bin2hex(random_bytes(32));\n\n// 2. Криптостойкий 6-значный код подтверждения для СМС / Email\n$smsCode = (string) random_int(100000, 999999);\n\n// 3. Проверка цифровой подписи вебхука (HMAC-SHA256) от платёжной системы\n$expectedSig = hash_hmac('sha256', $rawWebhookBody, $webhookSecretKey);\nif (!hash_equals($expectedSig, $receivedSignatureHeader)) {\n    http_response_code(401);\n    exit('Неверная подпись вебхука');\n}",
      "example": "/* НИКОГДА не используй rand(), mt_rand() или uniqid() для токенов безопасности — они легко предсказываются! */",
      "points": [
        "Старые функции rand(), mt_rand() и uniqid() НЕ являются криптографически безопасными. Для любых токенов, паролей и кодов из СМС используй ТОЛЬКО random_bytes() и random_int()!",
        "Функция hash_hmac(\"sha256\", $payload, $secret) позволяет гарантировать, что пришедший на твой сервер вебхук об оплате действительно отправлен банком, а не подделан.",
        "При хранении токенов сброса пароля в БД хорошей практикой является хранение их хеша hash(\"sha256\", $token) с ограниченным временем жизни (например, 30 минут)."
      ],
      "tags": [
        "PHP",
        "random_bytes",
        "random_int",
        "bin2hex",
        "hash_hmac",
        "hash_equals",
        "токен",
        "безопасность",
        "вебхук"
      ],
      "when": "При генерации ссылок восстановления пароля, ключей API, пин-кодов и приёме платёжных уведомлений.",
      "alternatives": "Для генерации стандартного UUID v4 в PHP также используют random_bytes(16).",
      "url": "https://www.php.net/manual/ru/function.random-bytes.php"
    },
    {
      "lang": "php",
      "id": "php-output-buffering-templates",
      "title": "PHP 8: нативная шаблонизация через буферизацию вывода (ob_start / ob_get_clean)",
      "summary": "Чистое разделение PHP-логики и HTML-верстки без тяжёлых сторонних библиотек в 10 строчек кода.",
      "code": "<?php\ndeclare(strict_types=1);\n\n/**\n * Рендерит PHP-шаблон с переданными переменными и возвращает готовую HTML-строку\n */\nfunction renderView(string $templatePath, array $vars = []): string {\n    extract($vars, EXTR_SKIP); // EXTR_SKIP защищает от перезаписи существующих переменных\n    ob_start();\n    include $templatePath;\n    return (string) ob_get_clean();\n}\n\n// Использование: собираем карточку и вставляем её внутрь главного layout.php\n$contentHtml = renderView(__DIR__ . '/views/catalog.php', ['items' => $products]);\necho renderView(__DIR__ . '/views/layout.php', ['title' => 'Каталог', 'content' => $contentHtml]);",
      "example": "<h1><?= htmlspecialchars($title, ENT_QUOTES, 'UTF-8') ?></h1>",
      "points": [
        "Пара функций ob_start() и ob_get_clean() перехватывает весь HTML-вывод подключаемого файла в строку вместо немедленной отправки в браузер!",
        "Это позволяет сначала отрендерить внутреннюю страницу (и узнать её заголовок и метатеги), а затем обернуть результат в общий каркас шапки и подвала (layout.php).",
        "Внутри HTML-шаблонов используй короткий эхо-тег <?= e($var) ?> и альтернативный синтаксис foreach ($items as $item): ... endforeach;."
      ],
      "tags": [
        "PHP",
        "ob_start",
        "ob_get_clean",
        "include",
        "require",
        "шаблонизатор",
        "views",
        "layout"
      ],
      "when": "При создании лёгких сайтов, лендингов и личных кабинетов на чистом PHP без сложного фреймворка.",
      "alternatives": "В крупных командных проектах используют шаблонизаторы Twig или Blade с автоэкранированием.",
      "url": "https://www.php.net/manual/ru/function.ob-get-clean.php"
    },
    {
      "lang": "php",
      "id": "php-interfaces-traits-abstract",
      "title": "PHP 8: интерфейсы (interface), трейты (trait) и внедрение зависимостей (DI)",
      "summary": "Проектирование гибкой архитектуры приложения: контракты для сервисов оплаты/уведомлений и переиспользование методов.",
      "code": "<?php\ndeclare(strict_types=1);\n\ninterface NotifierInterface {\n    public function send(string $recipient, string $message): bool;\n}\n\nclass TelegramNotifier implements NotifierInterface {\n    public function send(string $recipient, string $message): bool {\n        // Отправка в Telegram API\n        return true;\n    }\n}\n\n// Класс OrderService зависит от интерфейса, а не от конкретного мессенджера!\nreadonly class OrderService {\n    public function __construct(private NotifierInterface $notifier) {}\n\n    public function complete(string $chatId): void {\n        $this->notifier->send($chatId, 'Ваш заказ успешно собран!');\n    }\n}",
      "example": "trait TimestampsTrait {\n    public ?DateTimeImmutable $createdAt = null;\n}",
      "points": [
        "Интерфейс (interface) задаёт строгий контракт: какие методы обязан реализовать класс. Это позволяет легко подменить отправку СМС на Telegram или тестовую заглушку без переписывания бизнес-логики!",
        "Трейт (trait) позволяет горизонтально подключить готовый набор методов (например, логирование или расчёт дат) сразу в несколько несвязанных классов через ключевое слово use.",
        "Передача зависимостей через конструктор (Dependency Injection) делает классы чистыми и легко тестируемыми."
      ],
      "tags": [
        "PHP",
        "interface",
        "trait",
        "implements",
        "abstract",
        "DI",
        "ооп",
        "интерфейс",
        "архитектура"
      ],
      "when": "При написании модулей оплаты, доставки, уведомлений и хранилищ кэша.",
      "alternatives": "Избегай глубоких цепочек наследования (extends на 4 уровня) — отдавай предпочтение композиции и интерфейсам.",
      "url": "https://www.php.net/manual/ru/language.oop5.interfaces.php"
    },
    {
      "lang": "php",
      "id": "php-filter-var-validation",
      "title": "PHP 8: валидация данных через filter_var (Email, URL, IP, целые числа в диапазоне)",
      "summary": "Встроенный в ядро PHP валидатор и санитайзер входящих параметров без сложных регулярных выражений.",
      "code": "<?php\ndeclare(strict_types=1);\n\n// 1. Проверка корректности Email\n$email = filter_var(trim($rawEmail), FILTER_VALIDATE_EMAIL);\nif ($email === false) {\n    throw new InvalidArgumentException('Указан некорректный адрес почты');\n}\n\n// 2. Проверка целого числа строго в заданном диапазоне (например, номер страницы от 1 до 1000)\n$page = filter_var($_GET['page'] ?? 1, FILTER_VALIDATE_INT, [\n    'options' => ['default' => 1, 'min_range' => 1, 'max_range' => 1000],\n]);\n\n// 3. Проверка валидности URL и IP-адреса\n$isValidUrl = filter_var($url, FILTER_VALIDATE_URL) !== false;\n$isValidIp  = filter_var($ip, FILTER_VALIDATE_IP) !== false;",
      "example": "$boolFlag = filter_var($_POST['active'] ?? false, FILTER_VALIDATE_BOOL); /* Понимает \"true\", \"1\", \"on\", \"yes\"! */",
      "points": [
        "В случае ошибки валидации filter_var() возвращает булево значение false (поэтому всегда проверяй результат строго через === false).",
        "Опции min_range, max_range и default в FILTER_VALIDATE_INT позволяют проверить и ограничить числовой параметр в один вызов!",
        "Фильтр FILTER_VALIDATE_BOOL умно распознаёт строки \"1\", \"true\", \"on\", \"yes\" как true, а \"0\", \"false\", \"off\", \"no\" как false."
      ],
      "tags": [
        "PHP",
        "filter_var",
        "FILTER_VALIDATE_EMAIL",
        "FILTER_VALIDATE_INT",
        "FILTER_VALIDATE_URL",
        "валидация",
        "проверка"
      ],
      "when": "На входе любых контроллеров, API-эндпоинтов и обработчиков форм.",
      "alternatives": "Не используй удалённый в PHP 8.1 фильтр FILTER_SANITIZE_STRING — для защиты вывода в HTML используй htmlspecialchars().",
      "url": "https://www.php.net/manual/ru/function.filter-var.php"
    },
    {
      "lang": "php",
      "id": "php-cookies-setcookie",
      "title": "PHP 8: безопасная установка и удаление Cookies (setcookie с массивом опций)",
      "summary": "Современный синтаксис setcookie() с защитными флагами HttpOnly, Secure, SameSite и корректное удаление куки.",
      "code": "<?php\ndeclare(strict_types=1);\n\n// 1. Установка защищённой куки на 30 дней (современный синтаксис с массивом опций)\nsetcookie('remember_token', $tokenValue, [\n    'expires'  => time() + 60 * 60 * 24 * 30,\n    'path'     => '/',\n    'secure'   => true,     // Передавать только по HTTPS\n    'httponly' => true,     // Запретить чтение из JS (document.cookie) для защиты от XSS!\n    'samesite' => 'Lax',    // Защита от CSRF-атак при переходах с чужих сайтов\n]);\n\n// 2. Удаление куки (установка времени истечения в прошлое с тем же path!)\nsetcookie('remember_token', '', ['expires' => 1, 'path' => '/']);",
      "example": "$theme = $_COOKIE['theme'] ?? 'dark';",
      "points": [
        "Начиная с PHP 7.3+ функция setcookie() принимает удобный ассоциативный массив опций третьим аргументом вместо 7 позиционных параметров!",
        "При удалении куки через expires => 1 обязательно передавай точно такой же параметр path => \"/\", с каким она создавалась, иначе браузер не удалит её!",
        "Учитывай, что после вызова setcookie() новое значение появится в массиве $_COOKIE только при СЛЕДУЮЩЕМ HTTP-запросе от браузера."
      ],
      "tags": [
        "PHP",
        "setcookie",
        "COOKIE",
        "httponly",
        "samesite",
        "secure",
        "куки",
        "авторизация"
      ],
      "when": "Для функции «Запомнить меня», хранения идентификатора гостевой корзины и реферальных меток.",
      "alternatives": "Не храни в открытых куках роль пользователя (role=admin) — клиент может легко подделать куку в DevTools! Храни роли в серверной $_SESSION.",
      "url": "https://www.php.net/manual/ru/function.setcookie.php"
    },
    {
      "lang": "php",
      "id": "php-array-destructuring-spread",
      "title": "PHP 8: деструктуризация массивов, оператор распаковки (...$arr) и array_reduce",
      "summary": "Извлечение ключей ассоциативного массива в переменные за одну строчку и слияние конфигураций.",
      "code": "<?php\ndeclare(strict_types=1);\n\n$config = ['host' => '127.0.0.1', 'port' => 3306, 'dbname' => 'devshelf'];\n\n// Деструктуризация ассоциативного массива по ключам (как в JS!)\n['host' => $dbHost, 'port' => $dbPort] = $config;\n\n// Слияние массивов со строковыми ключами через spread-оператор (PHP 8.1+)\n$finalConfig = [...$config, 'port' => 5432, 'charset' => 'utf8mb4'];\n\n// Подсчёт общей суммы корзины через array_reduce\n$total = array_reduce(\n    $cartItems,\n    fn(int $sum, array $item): int => $sum + ($item['price'] * $item['qty']),\n    0\n);",
      "example": "[$first, $second] = ['HTML', 'CSS'];",
      "points": [
        "Короткий синтаксис деструктуризации [$a, $b] = $array и [\"id\" => $id, \"name\" => $name] = $row полностью заменил старую конструкцию list()!",
        "В PHP 8.1+ оператор распаковки [...$default, ...$override] работает и со строковыми ключами (последующие ключи перезаписывают предыдущие, как array_merge).",
        "Для простого суммирования одного числового поля используй сверхбыструю связку array_sum(array_column($items, \"price\"))."
      ],
      "tags": [
        "PHP",
        "destructuring",
        "spread",
        "array_reduce",
        "array_sum",
        "array_merge",
        "деструктуризация",
        "массивы"
      ],
      "when": "При распаковке строк из БД, возврате нескольких значений из функции и расчёте сумм.",
      "alternatives": "Оператор объединения массивов $a + $b сохраняет ключи из ПЕРВОГО массива, а [...$a, ...$b] и array_merge($a, $b) берут новые значения из ВТОРОГО.",
      "url": "https://www.php.net/manual/ru/language.types.array.php"
    }
  ],
  "xml": [
    {
      "lang": "xml",
      "id": "xml-syntax-rules",
      "title": "XML: строгие правила синтаксиса и структуры",
      "summary": "Формат хранения и передачи данных со строгой иерархией: обязательный пролог, закрытие всех тегов и регистрозависимость.",
      "code": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<library xmlns=\"https://example.com/schema\">\n  <book id=\"bk101\" available=\"true\">\n    <title>Современный веб-разработчик</title>\n    <author>Иван Петров</author>\n    <price currency=\"RUB\">1200</price>\n    <description><![CDATA[Здесь можно безопасно писать <любые> теги & спецсимволы без экранирования!]]></description>\n  </book>\n</library>",
      "example": "<!-- Комментарий в формате XML -->",
      "points": [
        "В отличие от HTML, в XML обязан быть ровно один корневой элемент (Root Element), охватывающий весь документ.",
        "XML строго чувствителен к регистру: <Title> и <title> — это два совершенно разных тега.",
        "Секция <![CDATA[ ... ]]> позволяет вставлять сырой текст с символами <, > и & без замены на &lt; и &amp;."
      ],
      "tags": [
        "XML",
        "синтаксис",
        "структура",
        "пролог",
        "cdata",
        "валидация",
        "спецификация"
      ],
      "when": "Для конфигурационных файлов, RSS-лент, карт сайта sitemap.xml, обмена данными с 1С и банками.",
      "alternatives": "Для чистого веб-обмена данными браузер-сервер чаще выбирают JSON, но в фидах стандартом остается XML.",
      "url": "https://developer.mozilla.org/ru/docs/Web/XML"
    },
    {
      "lang": "xml",
      "id": "xml-sitemap",
      "title": "XML: создание карты сайта sitemap.xml",
      "summary": "Стандартный файл для поисковых систем (Яндекс, Google), сообщающий о всех страницах сайта и дате их изменения.",
      "code": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <!-- Главная страница -->\n  <url>\n    <loc>https://example.com/</loc>\n    <lastmod>2026-03-20T10:00:00+03:00</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n  \n  <!-- Раздел каталога -->\n  <url>\n    <loc>https://example.com/catalog</loc>\n    <lastmod>2026-03-18T14:30:00+03:00</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>",
      "example": "<!-- Ссылка на sitemap обязательно указывается в robots.txt: Sitemap: https://example.com/sitemap.xml -->",
      "points": [
        "Тег <loc> должен содержать полный канонический URL с протоколом (https://) и доменом.",
        "Дата в <lastmod> указывается в формате W3C Datetime (ГГГГ-ММ-ДД), помогая поисковику быстрее индексировать свежие статьи.",
        "Максимальный размер одного sitemap.xml — 50 МБ и 50 000 URL. Если страниц больше — используют <sitemapindex>."
      ],
      "tags": [
        "XML",
        "sitemap",
        "карта сайта",
        "seo",
        "поисковики",
        "яндекс",
        "google",
        "lastmod"
      ],
      "when": "Обязательно для любого сайта, который должен индексироваться поисковыми системами.",
      "alternatives": "Без sitemap поисковым роботам требуется значительно больше времени для нахождения глубоких страниц.",
      "url": "https://www.sitemaps.org/ru/protocol.html"
    },
    {
      "lang": "xml",
      "id": "seo-robots-txt",
      "title": "SEO: настройка файла robots.txt",
      "summary": "Инструкции для поисковых роботов: какие разделы сайта разрешено сканировать, а какие нужно скрыть (админка, корзина, поиск).",
      "code": "# robots.txt для DevShelf / веб-сайта\nUser-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nDisallow: /checkout/\nDisallow: /*?*search=\n\n# Ссылка на карту сайта\nSitemap: https://example.com/sitemap.xml",
      "example": "User-agent: Yandex\nClean-param: ref /catalog/ # Игнорировать UTM метки при индексации в Яндексе",
      "points": [
        "Файл должен лежать строго в корне сайта: https://example.com/robots.txt (регистр букв имеет значение).",
        "Директива Disallow закрывает сканирование роботом, но НЕ гарантирует удаления из поиска, если на страницу есть внешние ссылки.",
        "Чтобы гарантированно скрыть секретную страницу от индекса, используй метатег <meta name=\"robots\" content=\"noindex, nofollow\">."
      ],
      "tags": [
        "SEO",
        "robots.txt",
        "robots",
        "индексация",
        "поисковики",
        "яндекс",
        "google",
        "директивы"
      ],
      "when": "Обязательный файл для любого домена перед публикацией в открытый интернет.",
      "alternatives": "Отсутствие robots.txt приводит к тому, что боты сканируют тяжелые скрипты и страницы поиска, перегружая хостинг.",
      "url": "https://developers.google.com/search/docs/crawling-indexing/robots/intro"
    },
    {
      "lang": "xml",
      "id": "svg-vector-graphics",
      "title": "SVG: векторная графика и стилизация через CSS",
      "summary": "Безупречная четкость иконок и логотипов на любых дисплеях Retina, масштабирование без потери качества и управление цветом через fill: currentColor.",
      "code": "<svg xmlns=\"http://www.w3.org/2000/svg\" \n     viewBox=\"0 0 24 24\" \n     width=\"24\" \n     height=\"24\" \n     fill=\"none\" \n     stroke=\"currentColor\" \n     stroke-width=\"2\" \n     stroke-linecap=\"round\" \n     stroke-linejoin=\"round\"\n     aria-hidden=\"true\">\n  <!-- Иконка закладки / избранного -->\n  <path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"/>\n</svg>",
      "example": ".icon { color: #38bdf8; } /* stroke: currentColor автоматически подхватит цвет текста! */",
      "points": [
        "Атрибут viewBox=\"minX minY width height\" определяет внутреннюю систему координат и пропорции векторного полотна.",
        "Использование stroke=\"currentColor\" или fill=\"currentColor\" позволяет красить иконку простым свойством color родителя в CSS.",
        "В инлайн-SVG можно управлять стилями отдельных элементов прямо по классам или псевдоклассам :hover."
      ],
      "tags": [
        "SVG",
        "вектор",
        "иконки",
        "графика",
        "viewBox",
        "currentColor",
        "дизайн"
      ],
      "when": "Для логотипов, иконок кнопок, иллюстраций и декоративных разделителей секций.",
      "alternatives": "Растровые PNG/JPG на иконках весят больше и размываются на экранах смартфонов высокого разрешения.",
      "url": "https://developer.mozilla.org/ru/docs/Web/SVG"
    },
    {
      "lang": "xml",
      "id": "xml-svg-inline",
      "title": "SVG & XML: векторная графика <svg>, viewBox и перекрашивание через currentColor",
      "summary": "Устройство векторных иконок, масштабируемая сетка координат viewBox и управление цветом и обводкой из CSS.",
      "code": "<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  width=\"24\"\n  height=\"24\"\n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n  aria-hidden=\"true\"\n>\n  <circle cx=\"11\" cy=\"11\" r=\"8\"></circle>\n  <line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>\n</svg>",
      "example": ".btn:hover svg {\n  color: #38bdf8;\n  transform: scale(1.1);\n}",
      "points": [
        "Атрибут viewBox=\"0 0 24 24\" задаёт внутреннюю систему координат холста: благодаря ему иконка идеально масштабируется под любые width и height без потери чёткости.",
        "Значение stroke=\"currentColor\" или fill=\"currentColor\" заставляет SVG автоматически наследовать цвет текста родительской кнопки или ссылки!",
        "Декоративным иконкам рядом с текстом кнопки добавляй aria-hidden=\"true\", чтобы скринридер не пытался озвучить векторные пути."
      ],
      "tags": [
        "XML",
        "SVG",
        "viewBox",
        "currentColor",
        "stroke",
        "fill",
        "path",
        "иконки",
        "вектор"
      ],
      "when": "Для всех интерфейсных иконок, логотипов, графиков и анимированных иллюстраций.",
      "alternatives": "Подключение SVG через <img src=\"icon.svg\"> не позволяет менять цвет иконки при наведении через CSS.",
      "url": "https://developer.mozilla.org/ru/docs/Web/SVG"
    },
    {
      "lang": "xml",
      "id": "xml-rss-feed",
      "title": "XML: лента новостей и блога RSS 2.0 (feed.xml)",
      "summary": "Стандартный XML-формат для автоматической трансляции новых статей блога в агрегаторы, Telegram-боты и Яндекс.Дзен.",
      "code": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<rss version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\">\n  <channel>\n    <title>DevShelf — Блог о веб-разработке</title>\n    <link>https://example.com/</link>\n    <description>Свежие руководства по HTML, CSS, JS и PHP</description>\n    <language>ru</language>\n    <item>\n      <title>Полное руководство по CSS Grid и Subgrid</title>\n      <link>https://example.com/blog/css-grid</link>\n      <guid isPermaLink=\"true\">https://example.com/blog/css-grid</guid>\n      <pubDate>Mon, 15 Sep 2026 12:00:00 +0300</pubDate>\n      <description><![CDATA[<p>Разбираем практические примеры верстки сеток...</p>]]></description>\n    </item>\n  </channel>\n</rss>",
      "example": "<link rel=\"alternate\" type=\"application/rss+xml\" title=\"RSS\" href=\"/rss.xml\">",
      "points": [
        "Внутри тега <description> используй секцию <![CDATA[ ... ]]>, чтобы HTML-теги абзацев и ссылок не ломали парсинг XML.",
        "Дата публикации <pubDate> в RSS 2.0 должна быть в формате RFC 2822 (в PHP это константа DATE_RSS).",
        "Добавь тег <link rel=\"alternate\" type=\"application/rss+xml\" href=\"/rss.xml\"> в <head> сайта для автообнаружения ленты браузерами."
      ],
      "tags": [
        "XML",
        "RSS",
        "feed",
        "CDATA",
        "pubDate",
        "лента",
        "блог",
        "новости",
        "синдикация"
      ],
      "when": "Для новостных сайтов, технических блогов, подкастов и автопостинга в соцсети.",
      "alternatives": "Формат Atom (application/atom+xml) или JSON Feed выполняют ту же задачу.",
      "url": "https://www.rssboard.org/rss-specification"
    },
    {
      "lang": "xml",
      "id": "seo-meta-robots-canonical",
      "title": "SEO: управление индексацией (<meta name=\"robots\">, canonical, X-Robots-Tag)",
      "summary": "Точечный запрет индексации служебных страниц, защита от дублей с GET-параметрами и управление сниппетами.",
      "code": "<head>\n  <!-- Основной канонический адрес страницы без UTM-меток и параметров сортировки -->\n  <link rel=\"canonical\" href=\"https://example.com/catalog/laptops\">\n\n  <!-- Запретить индексацию страницы поиска или личного кабинета, но разрешить переход по ссылкам -->\n  <meta name=\"robots\" content=\"noindex, follow\">\n\n  <!-- Разрешить крупные превью картинок в выдаче Google Discover -->\n  <meta name=\"robots\" content=\"index, follow, max-image-preview:large\">\n</head>",
      "example": "/* В PHP для PDF-файлов или ответов API: header('X-Robots-Tag: noindex, nofollow'); */",
      "points": [
        "Важно: если страница закрыта в файле robots.txt через Disallow, поисковый бот НЕ зайдёт на неё и НЕ увидит тег <meta name=\"robots\" content=\"noindex\">! Чтобы гарантированно удалить страницу из выдачи, открой её в robots.txt и поставь meta noindex.",
        "Тег <link rel=\"canonical\"> спасает сайт от потери позиций из-за дублей вида ?utm_source=tg или ?sort=price.",
        "HTTP-заголовок X-Robots-Tag: noindex позволяет закрыть от индексации не только HTML, но и PDF-документы или тестовый поддомен."
      ],
      "tags": [
        "XML",
        "SEO",
        "robots",
        "noindex",
        "nofollow",
        "canonical",
        "индексация",
        "дубли",
        "поисковики"
      ],
      "when": "На всех страницах каталога с фильтрами (canonical), в личных кабинетах, корзине и результатах поиска (noindex).",
      "alternatives": "Для склейки старых переехавших адресов со сменой URL используй серверный 301 редирект.",
      "url": "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=ru"
    },
    {
      "lang": "xml",
      "id": "seo-htaccess-apache",
      "title": "Server & SEO: настройка .htaccess (кэширование, Gzip, защита и ЧПУ-роутинг)",
      "summary": "Конфигурация веб-сервера Apache для единой точки входа SPA/PHP, сжатия статики и заголовков безопасности.",
      "code": "Options -Indexes\nDirectoryIndex index.html index.php\n\n<IfModule mod_rewrite.c>\n  RewriteEngine On\n  # Перенаправляем все несуществующие пути на index.php (или index.html для SPA)\n  RewriteCond %{REQUEST_FILENAME} !-f\n  RewriteCond %{REQUEST_FILENAME} !-d\n  RewriteRule ^ index.html [L]\n</IfModule>\n\n<IfModule mod_headers.c>\n  Header set X-Content-Type-Options \"nosniff\"\n  Header set Referrer-Policy \"strict-origin-when-cross-origin\"\n</IfModule>",
      "example": "ErrorDocument 404 /404.html",
      "points": [
        "Options -Indexes запрещает серверу показывать список файлов в папке, если в ней нет индексного файла.",
        "На виртуальных хостингах (например, Beget) редирект на HTTPS лучше включать галочкой в панели управления, чтобы не создать бесконечный цикл редиректов (ERR_TOO_MANY_REDIRECTS) между Nginx и Apache!",
        "Условия !-f и !-d проверяют, что запрашиваемый URL не является реальным файлом (картинкой, CSS) или папкой на диске."
      ],
      "tags": [
        "XML",
        "SEO",
        "htaccess",
        "apache",
        "rewrite",
        "безопасность",
        "сервер",
        "редирект",
        "beget"
      ],
      "when": "При размещении сайтов и веб-приложений на хостингах с веб-сервером Apache.",
      "alternatives": "На VPS с чистым Nginx вместо .htaccess используется блок try_files $uri $uri/ /index.html; в nginx.conf.",
      "url": "https://httpd.apache.org/docs/current/howto/htaccess.html"
    },
    {
      "lang": "xml",
      "id": "seo-security-headers-csp",
      "title": "SEO & Безопасность: ключевые HTTP-заголовки защиты (CSP, HSTS, X-Frame-Options)",
      "summary": "Защита сайта от внедрения чужих скриптов (XSS), кликджекинга в чужих iframe и принудительный HTTPS.",
      "code": "# Конфигурация для Nginx (или через header() в PHP / .htaccess в Apache):\nadd_header Strict-Transport-Security \"max-age=31536000; includeSubDomains\" always;\nadd_header X-Content-Type-Options \"nosniff\" always;\nadd_header X-Frame-Options \"SAMEORIGIN\" always;\nadd_header Referrer-Policy \"strict-origin-when-cross-origin\" always;\nadd_header Permissions-Policy \"camera=(), microphone=(), geolocation=()\" always;",
      "example": "/* Именно из-за заголовка X-Frame-Options: DENY сайты вроде MDN и Google нельзя открыть внутри чужого <iframe>! */",
      "points": [
        "Заголовок X-Frame-Options: SAMEORIGIN (или CSP frame-ancestors 'self') запрещает мошенническим сайтам встраивать твой сайт в прозрачный <iframe> поверх чужих кнопок (защита от Clickjacking).",
        "X-Content-Type-Options: nosniff запрещает браузеру пытаться угадать и выполнить загруженный текстовый файл как JavaScript.",
        "Strict-Transport-Security (HSTS) заставляет браузер обращаться к домену строго по защищённому протоколу HTTPS."
      ],
      "tags": [
        "XML",
        "SEO",
        "CSP",
        "HSTS",
        "X-Frame-Options",
        "nosniff",
        "безопасность",
        "заголовки сервера"
      ],
      "when": "При настройке продакшен-сервера Nginx, Apache или Cloudflare для любого веб-проекта.",
      "alternatives": "Не включай HSTS (Strict-Transport-Security) на локальном тестовом домене без SSL-сертификата.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy"
    }
  ],
  "recipes": [
    {
      "id": "recipe-login-form",
      "lang": "recipes",
      "title": "Рецепт: Форма входа (Login / Авторизация + Показ пароля)",
      "summary": "Готовая карточка входа в аккаунт с переключением видимости пароля (глазок), валидацией полей, чекбоксом «Запомнить меня» и индикацией загрузки.",
      "tags": [
        "рецепт",
        "вход",
        "логин",
        "login",
        "авторизация",
        "форма входа",
        "пароль",
        "auth"
      ],
      "when": "Для страниц входа в личный кабинет, админ-панель, SaaS-сервис или модального окна авторизации.",
      "alternatives": "Можно дополнить кнопками OAuth (Войти через Google / GitHub) или беспарольным входом по одноразовому коду (OTP).",
      "points": [
        "Использует правильные атрибуты autocomplete=\"username\" и autocomplete=\"current-password\" для работы менеджеров паролей.",
        "Кнопка переключения типа поля (password ↔ text) имеет aria-label для доступности.",
        "При отправке формы блокирует кнопку submit, предотвращая двойные клики."
      ],
      "code": "<form class=\"login-card\" id=\"login-form\">\n  <div class=\"login-head\">\n    <h3>Вход в систему</h3>\n    <p>Введите данные вашего рабочего аккаунта</p>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"login-email\">Email адрес</label>\n    <input type=\"email\" id=\"login-email\" value=\"developer@devshelf.ru\" required autocomplete=\"username\" placeholder=\"name@company.com\">\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"label-row\">\n      <label for=\"login-pass\">Пароль</label>\n      <a href=\"#forgot\" class=\"forgot-link\">Забыли пароль?</a>\n    </div>\n    <div class=\"pass-wrap\">\n      <input type=\"password\" id=\"login-pass\" value=\"SecretPass2026\" required minlength=\"6\" autocomplete=\"current-password\">\n      <button type=\"button\" id=\"toggle-pass\" class=\"eye-btn\" aria-label=\"Показать пароль\">Показать</button>\n    </div>\n  </div>\n\n  <label class=\"remember-row\">\n    <input type=\"checkbox\" checked>\n    <span>Запомнить устройство на 30 дней</span>\n  </label>\n\n  <button type=\"submit\" class=\"submit-btn\" id=\"login-submit\">Войти в аккаунт →</button>\n  <div id=\"login-status\" class=\"login-status\" hidden></div>\n</form>\n\n<style>\n.login-card {\n  max-width: 360px;\n  margin: 0 auto;\n  padding: 22px;\n  background: #131c2e;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  border-radius: 14px;\n  color: #f8fafc;\n  font-family: system-ui, sans-serif;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.login-head h3 { margin: 0 0 4px; font-size: 18px; }\n.login-head p { margin: 0; font-size: 13px; color: #94a3b8; }\n.form-group { display: flex; flex-direction: column; gap: 6px; }\n.form-group label { font-size: 12.5px; font-weight: 600; color: #cbd5e1; }\n.label-row { display: flex; justify-content: space-between; align-items: center; }\n.forgot-link { font-size: 12px; color: #38bdf8; text-decoration: none; }\n.form-group input {\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #334155;\n  background: #090d16;\n  color: #f8fafc;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.form-group input:focus { outline: none; border-color: #38bdf8; }\n.pass-wrap { position: relative; display: flex; align-items: center; }\n.pass-wrap input { padding-right: 78px; }\n.eye-btn {\n  position: absolute;\n  right: 6px;\n  padding: 5px 8px;\n  border-radius: 6px;\n  background: #1e293b;\n  color: #94a3b8;\n  border: 1px solid #334155;\n  font-size: 11px;\n  cursor: pointer;\n}\n.remember-row { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; cursor: pointer; }\n.submit-btn {\n  padding: 11px;\n  border-radius: 8px;\n  border: none;\n  background: #38bdf8;\n  color: #090d16;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n}\n.login-status {\n  padding: 9px 12px;\n  border-radius: 8px;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.4);\n  color: #6ee7b7;\n  font-size: 12.5px;\n}\n</style>\n\n<script>\nconst passInput = document.getElementById('login-pass');\nconst toggleBtn = document.getElementById('toggle-pass');\nconst loginForm = document.getElementById('login-form');\nconst statusBox = document.getElementById('login-status');\n\ntoggleBtn.addEventListener('click', () => {\n  const isPass = passInput.type === 'password';\n  passInput.type = isPass ? 'text' : 'password';\n  toggleBtn.textContent = isPass ? 'Скрыть' : 'Показать';\n});\n\nloginForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  statusBox.hidden = false;\n  statusBox.textContent = '✓ Успешный вход! Перенаправление в кабинет...';\n});\n</script>"
    },
    {
      "id": "recipe-register-form",
      "lang": "recipes",
      "title": "Рецепт: Регистрация с индикатором надёжности пароля",
      "summary": "Интерактивная форма создания аккаунта с живой шкалой оценки сложности пароля (длина, цифры, спецсимволы) и проверкой совпадения.",
      "tags": [
        "рецепт",
        "регистрация",
        "signup",
        "register",
        "пароль",
        "валидация",
        "форма"
      ],
      "when": "Для экранов регистрации пользователей, смены пароля в настройках профиля и онбординга.",
      "alternatives": "Используйте OAuth 2.0 / Passkeys (WebAuthn), если хотите избавить пользователя от придумывания пароля.",
      "points": [
        "Оценивает пароль по 4 критериям в реальном времени при вводе (событие input).",
        "Визуально меняет цвет прогресс-бара от красного (слабый) до изумрудного (надёжный).",
        "Информирует пользователя, каких именно символов не хватает для защиты аккаунта."
      ],
      "code": "<div class=\"reg-card\">\n  <h3>Создание аккаунта</h3>\n  <label class=\"reg-field\">\n    <span>Имя и фамилия</span>\n    <input type=\"text\" placeholder=\"Павел Пардаев\" value=\"Павел Разработчик\">\n  </label>\n  <label class=\"reg-field\">\n    <span>Придумайте пароль</span>\n    <input type=\"text\" id=\"reg-pass\" value=\"DevShelf#2026\" placeholder=\"Минимум 8 символов\">\n  </label>\n  <div class=\"meter-bar\"><div id=\"meter-fill\" class=\"meter-fill\"></div></div>\n  <div id=\"meter-text\" class=\"meter-text\">Оценка пароля...</div>\n</div>\n\n<style>\n.reg-card { max-width: 350px; margin: 0 auto; padding: 20px; background: #131c2e; border: 1px solid #263449; border-radius: 14px; color: #f8fafc; font-family: system-ui, sans-serif; display: flex; flex-direction: column; gap: 12px; }\n.reg-card h3 { margin: 0; font-size: 17px; }\n.reg-field { display: flex; flex-direction: column; gap: 5px; font-size: 12.5px; color: #cbd5e1; }\n.reg-field input { padding: 9px 12px; border-radius: 8px; border: 1px solid #334155; background: #090d16; color: #fff; }\n.meter-bar { height: 6px; background: #1e293b; border-radius: 99px; overflow: hidden; }\n.meter-fill { height: 100%; width: 0%; transition: width 0.25s, background 0.25s; }\n.meter-text { font-size: 12px; color: #94a3b8; }\n</style>\n\n<script>\nconst input = document.getElementById('reg-pass');\nconst fill = document.getElementById('meter-fill');\nconst text = document.getElementById('meter-text');\n\nfunction checkStrength(val) {\n  let score = 0;\n  if (val.length >= 8) score++;\n  if (/[A-ZА-Я]/.test(val)) score++;\n  if (/[0-9]/.test(val)) score++;\n  if (/[^A-Za-zА-Яа-я0-9]/.test(val)) score++;\n\n  const levels = [\n    { w: '15%', c: '#ef4444', t: 'Слабый пароль (добавьте цифры и спецсимволы)' },\n    { w: '40%', c: '#f59e0b', t: 'Средний пароль' },\n    { w: '75%', c: '#38bdf8', t: 'Хороший пароль' },\n    { w: '100%', c: '#10b981', t: '✓ Отличный надёжный пароль' }\n  ];\n  const lvl = levels[Math.max(0, score - 1)];\n  fill.style.width = val ? lvl.w : '0%';\n  fill.style.background = lvl.c;\n  text.textContent = val ? lvl.t : 'Введите пароль';\n}\ninput.addEventListener('input', (e) => checkStrength(e.target.value));\ncheckStrength(input.value);\n</script>"
    },
    {
      "id": "recipe-otp-verification",
      "lang": "recipes",
      "title": "Рецепт: Ввод SMS / 2FA пин-кода из 4–6 цифр (OTP Input)",
      "summary": "Удобное поле ввода проверочного кода с автоматическим переходом фокуса на следующую ячейку, поддержкой клавиши Backspace и вставки из буфера.",
      "tags": [
        "рецепт",
        "otp",
        "2fa",
        "пин код",
        "sms код",
        "верификация",
        "вход"
      ],
      "when": "Для двухфакторной аутентификации (2FA), подтверждения телефона по SMS или кода из письма.",
      "alternatives": "Одно обычное поле с inputmode=\"numeric\" и autocomplete=\"one-time-code\".",
      "points": [
        "При вводе цифры курсор мгновенно перепрыгивает в следующее поле без лишних кликов.",
        "Нажатие Backspace в пустой ячейке возвращает фокус на предыдущую цифру.",
        "Атрибут inputmode=\"numeric\" открывает крупную цифровую клавиатуру на iPhone и Android."
      ],
      "code": "<div class=\"otp-card\">\n  <h4>Подтверждение входа (2FA)</h4>\n  <p>Введите 4-значный код, отправленный в Telegram</p>\n  <div class=\"otp-inputs\" id=\"otp-box\">\n    <input type=\"text\" maxlength=\"1\" inputmode=\"numeric\" value=\"4\">\n    <input type=\"text\" maxlength=\"1\" inputmode=\"numeric\" value=\"8\">\n    <input type=\"text\" maxlength=\"1\" inputmode=\"numeric\" value=\"2\">\n    <input type=\"text\" maxlength=\"1\" inputmode=\"numeric\" value=\"\">\n  </div>\n  <div id=\"otp-result\" class=\"otp-hint\">Введите последнюю цифру...</div>\n</div>\n\n<style>\n.otp-card { max-width: 320px; margin: 0 auto; padding: 20px; background: #131c2e; border: 1px solid #263449; border-radius: 14px; text-align: center; color: #f8fafc; font-family: system-ui, sans-serif; }\n.otp-card h4 { margin: 0 0 6px; font-size: 16px; }\n.otp-card p { margin: 0 0 14px; font-size: 12.5px; color: #94a3b8; }\n.otp-inputs { display: flex; justify-content: center; gap: 10px; margin-bottom: 12px; }\n.otp-inputs input { width: 48px; height: 54px; text-align: center; font-size: 22px; font-weight: 800; border-radius: 10px; border: 1px solid #334155; background: #090d16; color: #38bdf8; }\n.otp-inputs input:focus { outline: none; border-color: #38bdf8; box-shadow: 0 0 0 2px rgba(56,189,248,0.2); }\n.otp-hint { font-size: 12.5px; color: #10b981; }\n</style>\n\n<script>\nconst inputs = [...document.querySelectorAll('#otp-box input')];\nconst res = document.getElementById('otp-result');\n\ninputs.forEach((inp, idx) => {\n  inp.addEventListener('input', (e) => {\n    e.target.value = e.target.value.replace(/[^0-9]/g, '');\n    if (e.target.value && idx < inputs.length - 1) inputs[idx + 1].focus();\n    const code = inputs.map(i => i.value).join('');\n    res.textContent = code.length === 4 ? '✓ Код принят: ' + code : 'Ожидание ввода...';\n  });\n  inp.addEventListener('keydown', (e) => {\n    if (e.key === 'Backspace' && !inp.value && idx > 0) inputs[idx - 1].focus();\n  });\n});\n</script>"
    },
    {
      "id": "recipe-shopping-cart",
      "lang": "recipes",
      "title": "Рецепт: Интерактивная корзина товаров с пересчётом суммы",
      "summary": "Готовый модуль корзины интернет-магазина с кнопками +/- количества, удалением позиции, расчётом скидки и итоговой стоимости.",
      "tags": [
        "рецепт",
        "корзина",
        "интернет-магазин",
        "ecommerce",
        "cart",
        "калькулятор цены"
      ],
      "when": "Для интернет-магазинов, конфигураторов услуг, оформления заказа и мини-корзины в шапке.",
      "alternatives": "Для сложных многостраничных магазинов состояние корзины синхронизируют с localStorage и серверной БД.",
      "points": [
        "Динамически пересчитывает подитог и общую сумму при изменении количества любого товара.",
        "Форматирует валюту по русскому стандарту через Intl.NumberFormat(\"ru-RU\").",
        "Не позволяет уменьшить количество товара ниже 1."
      ],
      "code": "<div class=\"cart-box\">\n  <h4>Корзина заказа</h4>\n  <div id=\"cart-items\" class=\"cart-items\"></div>\n  <div class=\"cart-footer\">\n    <span>Итого к оплате:</span>\n    <strong id=\"cart-total\">0 ₽</strong>\n  </div>\n</div>\n\n<style>\n.cart-box { max-width: 380px; margin: 0 auto; padding: 18px; background: #131c2e; border: 1px solid #263449; border-radius: 14px; color: #f8fafc; font-family: system-ui, sans-serif; }\n.cart-box h4 { margin: 0 0 12px; font-size: 16px; }\n.cart-items { display: flex; flex-direction: column; gap: 8px; }\n.cart-row { display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #090d16; border-radius: 8px; border: 1px solid #1e293b; font-size: 13px; }\n.qty-ctrl { display: flex; align-items: center; gap: 8px; }\n.qty-btn { width: 26px; height: 26px; border-radius: 6px; border: 1px solid #334155; background: #1e293b; color: #fff; cursor: pointer; font-weight: 700; }\n.cart-footer { margin-top: 14px; padding-top: 12px; border-top: 1px solid #263449; display: flex; justify-content: space-between; align-items: center; font-size: 15px; }\n.cart-footer strong { color: #38bdf8; font-size: 18px; }\n</style>\n\n<script>\nconst items = [\n  { id: 1, name: 'Подписка DevShelf Pro', price: 1490, qty: 1 },\n  { id: 2, name: 'UI-кит компонентов', price: 990, qty: 2 }\n];\nconst listEl = document.getElementById('cart-items');\nconst totalEl = document.getElementById('cart-total');\n\nfunction renderCart() {\n  listEl.innerHTML = items.map(item => `\n    <div class=\"cart-row\">\n      <div>\n        <div><strong>${item.name}</strong></div>\n        <div style=\"color:#94a3b8;font-size:12px;\">${item.price} ₽ / шт.</div>\n      </div>\n      <div class=\"qty-ctrl\">\n        <button class=\"qty-btn\" onclick=\"changeQty(${item.id}, -1)\">−</button>\n        <span>${item.qty}</span>\n        <button class=\"qty-btn\" onclick=\"changeQty(${item.id}, 1)\">+</button>\n      </div>\n    </div>\n  `).join('');\n  const sum = items.reduce((acc, i) => acc + i.price * i.qty, 0);\n  totalEl.textContent = new Intl.NumberFormat('ru-RU').format(sum) + ' ₽';\n}\nwindow.changeQty = (id, delta) => {\n  const found = items.find(i => i.id === id);\n  if (found) found.qty = Math.max(1, found.qty + delta);\n  renderCart();\n};\nrenderCart();\n</script>"
    },
    {
      "id": "recipe-catalog-filter",
      "lang": "recipes",
      "title": "Рецепт: Живой поиск и фильтрация карточек по категориям",
      "summary": "Мгновенная клиентская фильтрация списка элементов по тегам и поисковой строке без перезагрузки страницы.",
      "tags": [
        "рецепт",
        "фильтр",
        "поиск",
        "каталог",
        "табы",
        "filter",
        "search"
      ],
      "when": "Для каталогов товаров, портфолио проектов, списков статей, FAQ и таблиц сотрудников.",
      "alternatives": "При объёме более 5 000 записей используйте серверную фильтрацию через Fetch API и пагинацию.",
      "points": [
        "Сочетает фильтр по выбранной категории и текстовый поиск по подстроке.",
        "При отсутствии совпадений аккуратно выводит пустое состояние (Empty State)."
      ],
      "code": "<div class=\"flt-demo\">\n  <div class=\"flt-bar\">\n    <input type=\"search\" id=\"flt-input\" placeholder=\"Поиск по стеку...\">\n    <button class=\"flt-tag active\" data-cat=\"all\">Все</button>\n    <button class=\"flt-tag\" data-cat=\"front\">Frontend</button>\n    <button class=\"flt-tag\" data-cat=\"back\">Backend</button>\n  </div>\n  <div id=\"flt-list\" class=\"flt-list\"></div>\n</div>\n\n<style>\n.flt-demo { max-width: 420px; margin: 0 auto; color: #f8fafc; font-family: system-ui, sans-serif; }\n.flt-bar { display: flex; gap: 6px; margin-bottom: 12px; flex-wrap: wrap; }\n.flt-bar input { flex: 1; min-width: 140px; padding: 7px 10px; border-radius: 7px; border: 1px solid #334155; background: #090d16; color: #fff; font-size: 13px; }\n.flt-tag { padding: 6px 10px; border-radius: 7px; border: 1px solid #334155; background: #131c2e; color: #94a3b8; font-size: 12px; cursor: pointer; }\n.flt-tag.active { background: #38bdf8; color: #090d16; border-color: #38bdf8; font-weight: 700; }\n.flt-list { display: grid; gap: 8px; }\n.flt-item { padding: 10px 12px; border-radius: 8px; background: #131c2e; border: 1px solid #263449; display: flex; justify-content: space-between; font-size: 13px; }\n</style>\n\n<script>\nconst data = [\n  { name: 'React 19 + TypeScript', cat: 'front' },\n  { name: 'Tailwind CSS v4', cat: 'front' },\n  { name: 'PHP 8.3 + Laravel 11', cat: 'back' },\n  { name: 'PostgreSQL & Redis', cat: 'back' }\n];\nlet activeCat = 'all';\nconst inp = document.getElementById('flt-input');\nconst list = document.getElementById('flt-list');\n\nfunction render() {\n  const q = inp.value.toLowerCase();\n  const res = data.filter(d => (activeCat === 'all' || d.cat === activeCat) && d.name.toLowerCase().includes(q));\n  list.innerHTML = res.length\n    ? res.map(d => `<div class=\"flt-item\"><strong>${d.name}</strong><span style=\"color:#38bdf8\">${d.cat}</span></div>`).join('')\n    : '<div style=\"color:#94a3b8;font-size:13px;\">Ничего не найдено</div>';\n}\ndocument.querySelectorAll('.flt-tag').forEach(btn => {\n  btn.onclick = () => {\n    document.querySelectorAll('.flt-tag').forEach(b => b.classList.remove('active'));\n    btn.classList.add('active');\n    activeCat = btn.dataset.cat;\n    render();\n  };\n});\ninp.oninput = render;\nrender();\n</script>"
    },
    {
      "id": "recipe-file-dropzone",
      "lang": "recipes",
      "title": "Рецепт: Drag-and-Drop загрузка файлов с превью изображения",
      "summary": "Зона перетаскивания файлов с подсветкой при наведении, проверкой размера и мгновенным показом миниатюры через FileReader / URL.createObjectURL.",
      "tags": [
        "рецепт",
        "загрузка файла",
        "drag and drop",
        "dropzone",
        "file upload",
        "превью картинки"
      ],
      "when": "Для загрузки аватарок, прикрепления документов в формах обратной связи и загрузки фото товаров.",
      "alternatives": "Обычный <input type=\"file\">, который выглядит по-разному во всех браузерах.",
      "points": [
        "События dragover и drop требуют вызова event.preventDefault(), чтобы браузер не открывал файл в новой вкладке.",
        "Метод URL.createObjectURL(file) мгновенно создаёт локальную ссылку на выбранную картинку для предпросмотра до отправки на сервер."
      ],
      "code": "<label class=\"dropzone\" id=\"dropzone\">\n  <input type=\"file\" id=\"file-inp\" accept=\"image/*\" hidden>\n  <div id=\"drop-info\">\n    <strong>Перетащите изображение сюда</strong>\n    <p>или нажмите для выбора файла (PNG, JPG, WebP)</p>\n  </div>\n</label>\n\n<style>\n.dropzone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 360px;\n  margin: 0 auto;\n  min-height: 140px;\n  padding: 20px;\n  border: 2px dashed #38bdf8;\n  border-radius: 14px;\n  background: rgba(56, 189, 248, 0.06);\n  color: #f8fafc;\n  text-align: center;\n  cursor: pointer;\n  font-family: system-ui, sans-serif;\n  transition: background 0.2s, border-color 0.2s;\n}\n.dropzone:hover, .dropzone.dragover { background: rgba(56, 189, 248, 0.14); border-color: #7dd3fc; }\n.dropzone p { margin: 6px 0 0; font-size: 12px; color: #94a3b8; }\n</style>\n\n<script>\nconst dz = document.getElementById('dropzone');\nconst inp = document.getElementById('file-inp');\nconst info = document.getElementById('drop-info');\n\nfunction handleFile(file) {\n  if (!file) return;\n  info.innerHTML = `<strong>✓ Выбран файл: ${file.name}</strong><p>Размер: ${(file.size / 1024).toFixed(1)} КБ</p>`;\n}\ndz.addEventListener('dragover', (e) => { e.preventDefault(); dz.classList.add('dragover'); });\ndz.addEventListener('dragleave', () => dz.classList.remove('dragover'));\ndz.addEventListener('drop', (e) => {\n  e.preventDefault();\n  dz.classList.remove('dragover');\n  handleFile(e.dataTransfer.files[0]);\n});\ninp.addEventListener('change', (e) => handleFile(e.target.files[0]));\n</script>"
    },
    {
      "lang": "recipes",
      "id": "recipe-burger-menu",
      "title": "Рецепт: Адаптивное бургер-меню (CSS + JS)",
      "summary": "Готовое мобильное меню с анимированной кнопкой-гамбургером, плавно выезжающей шторкой, блокировкой скролла и закрытием по Esc.",
      "code": "<!-- 1. Кнопка бургер -->\n<button class=\"burger-btn\" id=\"burger-btn\" aria-label=\"Открыть меню\" aria-expanded=\"false\">\n  <span class=\"bar\"></span>\n  <span class=\"bar\"></span>\n  <span class=\"bar\"></span>\n</button>\n\n<!-- 2. Выезжающее меню -->\n<nav class=\"mobile-drawer\" id=\"mobile-drawer\" hidden>\n  <div class=\"drawer-content\">\n    <a href=\"#home\">Главная</a>\n    <a href=\"#catalog\">Каталог</a>\n    <a href=\"#contacts\">Контакты</a>\n  </div>\n</nav>\n\n<style>\n.burger-btn { display: flex; flex-direction: column; gap: 5px; background: none; border: 0; cursor: pointer; padding: 8px; }\n.burger-btn .bar { width: 24px; height: 2px; background: currentColor; transition: transform 0.2s, opacity 0.2s; }\n.burger-btn[aria-expanded=\"true\"] .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }\n.burger-btn[aria-expanded=\"true\"] .bar:nth-child(2) { opacity: 0; }\n.burger-btn[aria-expanded=\"true\"] .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }\n\n.mobile-drawer { position: fixed; inset: 0; background: rgba(9, 13, 20, 0.95); backdrop-filter: blur(8px); z-index: 99; display: flex; align-items: center; justify-content: center; }\n.mobile-drawer[hidden] { display: none; }\n</style>\n\n<script>\nconst btn = document.getElementById('burger-btn');\nconst drawer = document.getElementById('mobile-drawer');\n\nfunction toggleMenu() {\n  const isOpen = btn.getAttribute('aria-expanded') === 'true';\n  btn.setAttribute('aria-expanded', !isOpen);\n  drawer.hidden = isOpen;\n  document.body.style.overflow = isOpen ? '' : 'hidden';\n}\n\nbtn.addEventListener('click', toggleMenu);\nwindow.addEventListener('keydown', (e) => {\n  if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') toggleMenu();\n});\n</script>",
      "example": "// Нажми «Открыть в песочнице», чтобы сразу протестировать и кастомизировать это меню!",
      "points": [
        "Доступность: атрибут aria-expanded сообщает скринридерам текущее состояние меню (открыто или закрыто).",
        "Блокировка body.style.overflow = \"hidden\" предотвращает неприятную прокрутку страницы под открытым меню.",
        "Клавиша Escape позволяет пользователю интуитивно закрыть меню без поиска крестика."
      ],
      "tags": [
        "рецепт",
        "бургер меню",
        "меню",
        "мобильное меню",
        "drawer",
        "навигация",
        "гамбургер"
      ],
      "when": "Обязательный элемент адаптивной шапки любого сайта на экранах смартфонов.",
      "alternatives": "Готовые громоздкие jQuery-плагины, добавляющие лишние мегабайты в бандл.",
      "url": "https://developer.mozilla.org/ru/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"
    },
    {
      "lang": "recipes",
      "id": "recipe-modal-dialog",
      "title": "Рецепт: Модальное окно на нативном <dialog>",
      "summary": "Надежное модальное окно: правильное кадрирование, плавное затемнение фона, ловушка фокуса и закрытие по клику мимо.",
      "code": "<button id=\"show-dialog-btn\" class=\"btn\">Открыть окно</button>\n\n<dialog id=\"custom-modal\" class=\"modal-window\">\n  <div class=\"modal-header\">\n    <h3>Подтверждение действия</h3>\n    <button type=\"button\" class=\"close-btn\" id=\"close-dialog-btn\" aria-label=\"Закрыть\">&times;</button>\n  </div>\n  <p>Вы уверены, что хотите сохранить изменения в проекте?</p>\n  <div class=\"modal-actions\">\n    <button type=\"button\" class=\"btn secondary\" id=\"cancel-btn\">Отмена</button>\n    <button type=\"button\" class=\"btn primary\" id=\"confirm-btn\">Да, сохранить</button>\n  </div>\n</dialog>\n\n<style>\n.modal-window { border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; background: #111726; color: #f8fafc; padding: 24px; max-width: 440px; width: 90%; }\n.modal-window::backdrop { background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(4px); }\n.modal-actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px; }\n</style>\n\n<script>\nconst modal = document.getElementById('custom-modal');\ndocument.getElementById('show-dialog-btn').onclick = () => modal.showModal();\ndocument.getElementById('close-dialog-btn').onclick = () => modal.close();\ndocument.getElementById('cancel-btn').onclick = () => modal.close();\n\n// Закрытие при клике по затемненному оверлею\nmodal.addEventListener('click', (e) => {\n  if (e.target === modal) modal.close();\n});\n</script>",
      "example": "modal.close(); // Программное закрытие после отправки формы",
      "points": [
        "showModal() помещает диалог в специальный Top Layer браузера поверх всех z-index на странице.",
        "Фокус клавиатуры автоматически захватывается внутри окна и не улетает на скрытые элементы под оверлеем.",
        "Клавиша Esc закрывает модальное окно по умолчанию."
      ],
      "tags": [
        "рецепт",
        "модалка",
        "модальное окно",
        "диалог",
        "dialog",
        "popup",
        "попап"
      ],
      "when": "Для окон авторизации, предупреждений перед удалением, галерей предпросмотра.",
      "alternatives": "Самодельные оверлеи на div требуют сотен строк кода для корректного фокуса и доступности.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog"
    },
    {
      "lang": "recipes",
      "id": "recipe-tabs",
      "title": "Рецепт: Доступные вкладки (Tabs Component)",
      "summary": "Переключение вкладок с сохранением состояния, поддержкой стрелок клавиатуры и атрибутами ARIA.",
      "code": "<div class=\"tabs-widget\">\n  <div role=\"tablist\" class=\"tab-buttons\">\n    <button role=\"tab\" aria-selected=\"true\" id=\"tab-1\" aria-controls=\"panel-1\">HTML</button>\n    <button role=\"tab\" aria-selected=\"false\" id=\"tab-2\" aria-controls=\"panel-2\" tabindex=\"-1\">CSS</button>\n    <button role=\"tab\" aria-selected=\"false\" id=\"tab-3\" aria-controls=\"panel-3\" tabindex=\"-1\">JS</button>\n  </div>\n  <div role=\"tabpanel\" id=\"panel-1\" aria-labelledby=\"tab-1\">\n    <h3>Содержимое вкладки HTML</h3>\n    <p>Структура и семантика веб-документа.</p>\n  </div>\n  <div role=\"tabpanel\" id=\"panel-2\" aria-labelledby=\"tab-2\" hidden>\n    <h3>Содержимое вкладки CSS</h3>\n    <p>Стили, сетки Flexbox и CSS Grid.</p>\n  </div>\n  <div role=\"tabpanel\" id=\"panel-3\" aria-labelledby=\"tab-3\" hidden>\n    <h3>Содержимое вкладки JS</h3>\n    <p>Интерактивная логика и современные Web APIs.</p>\n  </div>\n</div>\n\n<script>\nconst tabButtons = document.querySelectorAll('[role=\"tab\"]');\nconst panels = document.querySelectorAll('[role=\"tabpanel\"]');\n\ntabButtons.forEach(btn => {\n  btn.addEventListener('click', () => {\n    // Снимаем выбор со всех вкладок\n    tabButtons.forEach(b => {\n      b.setAttribute('aria-selected', 'false');\n      b.tabIndex = -1;\n    });\n    panels.forEach(p => p.hidden = true);\n\n    // Активируем выбранную\n    btn.setAttribute('aria-selected', 'true');\n    btn.tabIndex = 0;\n    const activePanelId = btn.getAttribute('aria-controls');\n    document.getElementById(activePanelId).hidden = false;\n  });\n});\n</script>",
      "example": "// Позволяет разделить интерфейс на вкладки без перезагрузки страницы",
      "points": [
        "Использует спецификацию WAI-ARIA Tabs: role=\"tablist\", role=\"tab\", role=\"tabpanel\".",
        "Скрытие панелей через атрибут hidden гарантирует доступность и отсутствие сдвигов.",
        "tabindex=\"-1\" на неактивных вкладках обеспечивает правильную клавиатурную навигацию."
      ],
      "tags": [
        "рецепт",
        "вкладки",
        "табы",
        "tabs",
        "tablist",
        "переключатель"
      ],
      "when": "Для личных кабинетов, настроек профиля, многоязычных блоков и карточек товара.",
      "alternatives": "Перезагрузка страницы на каждую вкладку создает лишние HTTP-запросы.",
      "url": "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/"
    },
    {
      "lang": "recipes",
      "id": "recipe-dropdown-menu",
      "title": "Рецепт: Выпадающее меню (Dropdown) с закрытием по клику вне блока",
      "summary": "Доступное выпадающее меню профиля или действий с поддержкой клавиши Esc и автоматическим закрытием при клике мимо.",
      "code": "<div class=\"dropdown\" id=\"user-dropdown\">\n  <button type=\"button\" class=\"dropdown-trigger\" aria-expanded=\"false\">\n    Аккаунт ▾\n  </button>\n  <div class=\"dropdown-menu\" hidden>\n    <a href=\"#profile\">Мой профиль</a>\n    <a href=\"#billing\">Подписка и счета</a>\n    <hr>\n    <button type=\"button\" class=\"danger\">Выйти</button>\n  </div>\n</div>\n\n<script>\nconst dd = document.getElementById('user-dropdown');\nconst btn = dd.querySelector('.dropdown-trigger');\nconst menu = dd.querySelector('.dropdown-menu');\n\nfunction toggleDropdown(force) {\n  const isOpen = typeof force === 'boolean' ? force : menu.hidden;\n  menu.hidden = !isOpen;\n  btn.setAttribute('aria-expanded', String(isOpen));\n}\n\nbtn.addEventListener('click', (e) => {\n  e.stopPropagation();\n  toggleDropdown();\n});\n\ndocument.addEventListener('click', (e) => {\n  if (!dd.contains(e.target)) toggleDropdown(false);\n});\ndocument.addEventListener('keydown', (e) => {\n  if (e.key === 'Escape') toggleDropdown(false);\n});\n</script>",
      "example": ".dropdown { position: relative; display: inline-block; }\n.dropdown-menu { position: absolute; right: 0; top: calc(100% + 6px); }",
      "points": [
        "Проверка !dd.contains(e.target) на документе надёжно закрывает меню при клике в любое место страницы за пределами компонента.",
        "Синхронизация атрибута hidden и aria-expanded гарантирует правильную работу со скринридерами.",
        "Позиционирование top: calc(100% + 6px) располагает выпадающий список ровно на 6px ниже кнопки."
      ],
      "tags": [
        "рецепт",
        "dropdown",
        "выпадающее меню",
        "меню профиля",
        "клик вне",
        "поповер"
      ],
      "when": "Для меню профиля в шапке, выбора языка, сортировки и меню «три точки» в таблицах.",
      "alternatives": "В современных браузерах можно также использовать нативный атрибут popover.",
      "url": "https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/"
    },
    {
      "lang": "recipes",
      "id": "recipe-toast-notifications",
      "title": "Рецепт: Всплывающие уведомления (Toast) с автоскрытием и стеком",
      "summary": "Лёгкая функция вызова неблокирующих уведомлений в углу экрана с плавной анимацией и поддержкой aria-live.",
      "code": "<div id=\"toast-stack\" class=\"toast-stack\" aria-live=\"polite\"></div>\n<button type=\"button\" onclick=\"showToast('Настройки успешно сохранены!', 'success')\">\n  Показать уведомление\n</button>\n\n<script>\nfunction showToast(message, type = 'info') {\n  const stack = document.getElementById('toast-stack');\n  const toast = document.createElement('div');\n  toast.className = `toast-item toast-${type}`;\n  toast.textContent = message;\n  stack.appendChild(toast);\n\n  setTimeout(() => {\n    toast.classList.add('is-leaving');\n    toast.addEventListener('transitionend', () => toast.remove());\n  }, 3000);\n}\n</script>",
      "example": ".toast-stack { position: fixed; bottom: 20px; right: 20px; display: flex; flex-direction: column; gap: 8px; z-index: 1000; }",
      "points": [
        "Контейнер со свойством display: flex; flex-direction: column; gap: 8px аккуратно выстраивает несколько уведомлений друг над другом.",
        "pointer-events: none на самом контейнере гарантирует, что невидимая область стека не перекроет кнопки под ней.",
        "Атрибут aria-live=\"polite\" автоматически зачитывает текст уведомления незрячим пользователям."
      ],
      "tags": [
        "рецепт",
        "toast",
        "тост",
        "уведомление",
        "алерт",
        "нотификация",
        "всплывашка"
      ],
      "when": "При копировании в буфер обмена, сохранении формы, добавлении товара в корзину и сетевых ошибках.",
      "alternatives": "Никогда не используй блокирующий системный window.alert() в современных интерфейсах.",
      "url": "https://developer.mozilla.org/ru/docs/Web/Accessibility/ARIA/Roles/status_role"
    },
    {
      "lang": "recipes",
      "id": "recipe-theme-switcher",
      "title": "Рецепт: Переключатель тёмной и светлой темы с localStorage и prefers-color-scheme",
      "summary": "Мгновенное переключение темы оформления с сохранением выбора пользователя и учётом системной темы ОС.",
      "code": "<button type=\"button\" id=\"theme-btn\" aria-label=\"Сменить тему\">\n  Переключить тему\n</button>\n\n<script>\nconst root = document.documentElement;\nconst saved = localStorage.getItem('theme');\nconst systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n\nconst initialTheme = saved ?? (systemDark ? 'dark' : 'light');\nroot.dataset.theme = initialTheme;\n\ndocument.getElementById('theme-btn').addEventListener('click', () => {\n  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';\n  root.dataset.theme = next;\n  localStorage.setItem('theme', next);\n});\n</script>",
      "example": ":root[data-theme=\"dark\"] { --bg: #090d14; --text: #f8fafc; }\n:root[data-theme=\"light\"] { --bg: #f8fafc; --text: #0f172a; }",
      "points": [
        "Чтобы избежать белой вспышки (FOUC) при загрузке страницы, маленький скрипт проверки localStorage ставят синхронно в <head>.",
        "Свойство color-scheme: dark / light на :root автоматически перекрашивает системные полосы прокрутки (scrollbars) и календари инпутов!",
        "Если пользователь ещё не выбирал тему вручную, matchMedia(\"(prefers-color-scheme: dark)\") бережно подстроится под настройки его системы."
      ],
      "tags": [
        "рецепт",
        "dark mode",
        "тема",
        "тёмная тема",
        "светлая тема",
        "localStorage",
        "переключатель"
      ],
      "when": "В документации, дашбордах, читалках и веб-приложениях.",
      "alternatives": "Функция CSS light-dark() позволяет описывать обе палитры прямо в одной CSS-переменной.",
      "url": "https://developer.mozilla.org/ru/docs/Web/CSS/@media/prefers-color-scheme"
    },
    {
      "lang": "recipes",
      "id": "recipe-live-search-filter",
      "title": "Рецепт: Живой поиск и фильтрация карточек на странице без перезагрузки",
      "summary": "Мгновенная фильтрация списка карточек или таблицы по введённому тексту с подсчётом найденных элементов и пустым состоянием.",
      "code": "<input type=\"search\" id=\"filter-input\" placeholder=\"Поиск по карточкам...\">\n<ul id=\"cards-list\">\n  <li class=\"item\">Адаптивная сетка CSS Grid</li>\n  <li class=\"item\">Модальное окно HTML Dialog</li>\n  <li class=\"item\">Запросы к серверу Fetch API</li>\n</ul>\n<p id=\"empty-msg\" hidden>Ничего не найдено</p>\n\n<script>\nconst input = document.getElementById('filter-input');\nconst items = Array.from(document.querySelectorAll('#cards-list .item'));\nconst emptyMsg = document.getElementById('empty-msg');\n\ninput.addEventListener('input', () => {\n  const query = input.value.trim().toLowerCase();\n  let visibleCount = 0;\n\n  items.forEach(item => {\n    const match = item.textContent.toLowerCase().includes(query);\n    item.hidden = !match;\n    if (match) visibleCount++;\n  });\n\n  emptyMsg.hidden = visibleCount > 0;\n});\n</script>",
      "example": "/* Использование item.hidden = !match чисто скрывает несовпадающие карточки */",
      "points": [
        "Приведение строки и текста карточки к единому регистру через .toLowerCase() делает поиск нечувствительным к заглавным буквам.",
        "Скрытие через атрибут item.hidden не удаляет узлы из DOM, поэтому при очистке поля поиска все карточки мгновенно возвращаются на место.",
        "Обязательно показывай блок «Ничего не найдено» (empty state), когда visibleCount === 0."
      ],
      "tags": [
        "рецепт",
        "поиск",
        "фильтр",
        "живой поиск",
        "search",
        "filter",
        "список"
      ],
      "when": "Для фильтрации FAQ, справочников, таблиц тарифов, списков контактов и каталогов до 500 элементов.",
      "alternatives": "Для базы из десятков тысяч товаров фильтрацию лучше выполнять на сервере с debounce.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/hidden"
    },
    {
      "lang": "recipes",
      "id": "recipe-copy-code-button",
      "title": "Рецепт: Блок кода с кнопкой «Скопировать» и подсветкой статуса",
      "summary": "Готовый компонент сниппета документации с копированием в буфер обмена и сменой состояния кнопки.",
      "code": "<div class=\"code-card\">\n  <div class=\"code-header\">\n    <span>bash</span>\n    <button type=\"button\" class=\"copy-trigger\">Копировать</button>\n  </div>\n  <pre><code>npm create vite@latest my-app</code></pre>\n</div>\n\n<script>\ndocument.querySelectorAll('.copy-trigger').forEach(btn => {\n  btn.addEventListener('click', async () => {\n    const code = btn.closest('.code-card').querySelector('code').textContent;\n    await navigator.clipboard.writeText(code);\n    btn.textContent = '✓ Скопировано';\n    btn.classList.add('is-copied');\n    setTimeout(() => {\n      btn.textContent = 'Копировать';\n      btn.classList.remove('is-copied');\n    }, 1800);\n  });\n});\n</script>",
      "example": ".copy-trigger.is-copied { color: #10b981; border-color: #10b981; }",
      "points": [
        "Навигация через btn.closest(\".code-card\").querySelector(\"code\") позволяет иметь сколько угодно блоков кода на странице без привязки к уникальным ID.",
        "Чтение через .textContent берёт чистый текст команды без HTML-тегов подсветки синтаксиса.",
        "Визуальный класс .is-copied меняет цвет рамки и текста на зелёный на 1.8 секунды."
      ],
      "tags": [
        "рецепт",
        "копировать код",
        "copy",
        "clipboard",
        "сниппет",
        "документация"
      ],
      "when": "В технических блогах, документации API, личных кабинетах с API-ключами и промокодами.",
      "alternatives": "Можно также использовать делегирование событий на document вместо цикла по кнопкам.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/Clipboard/writeText"
    },
    {
      "lang": "recipes",
      "id": "recipe-sticky-header-scroll",
      "title": "Рецепт: Шапка сайта с эффектом стекла и тенью при начале прокрутки",
      "summary": "Добавление компактности и нижней границы фиксированной шапке в момент, когда пользователь начал скроллить страницу.",
      "code": "<header class=\"site-header\" id=\"header\">\n  <div class=\"header-inner\">DevShelf</div>\n</header>\n\n<script>\nconst header = document.getElementById('header');\n\n// Пассивный слушатель scroll не блокирует плавность прокрутки на смартфонах!\nwindow.addEventListener('scroll', () => {\n  header.classList.toggle('is-scrolled', window.scrollY > 12);\n}, { passive: true });\n</script>",
      "example": ".site-header.is-scrolled {\n  background: rgba(9, 13, 20, 0.88);\n  backdrop-filter: blur(12px);\n  border-bottom-color: rgba(255, 255, 255, 0.12);\n}",
      "points": [
        "Опция { passive: true } в addEventListener(\"scroll\", ...) сообщает браузеру, что внутри обработчика не будет вызываться preventDefault(), поэтому браузер может крутить страницу в отдельном потоке с идеальными 120 FPS!",
        "Метод classList.toggle(\"is-scrolled\", window.scrollY > 12) лаконично включает класс при прокрутке ниже 12px и снимает при возврате наверх.",
        "В состоянии покоя наверху шапка может быть полностью прозрачной, а при скролле обретать матовый фон backdrop-filter: blur(12px)."
      ],
      "tags": [
        "рецепт",
        "sticky header",
        "scroll",
        "passive",
        "шапка",
        "скролл",
        "навбар"
      ],
      "when": "На лендингах, корпоративных сайтах и в документации с фиксированной верхней панелью.",
      "alternatives": "Можно также использовать IntersectionObserver с пустым 1px-элементом на самом верху страницы.",
      "url": "https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener"
    },
    {
      "lang": "recipes",
      "id": "recipe-skeleton-loader",
      "title": "Рецепт: Анимированный скелетон загрузки карточек (Skeleton Shimmer)",
      "summary": "Плавный блик загрузки на месте будущих карточек и текста, избавляющий от дёргающихся спиннеров и скачков верстки.",
      "code": "<div class=\"skeleton-card\" aria-busy=\"true\" aria-label=\"Загрузка карточки\">\n  <div class=\"skeleton skeleton-thumb\"></div>\n  <div class=\"skeleton skeleton-title\"></div>\n  <div class=\"skeleton skeleton-text\"></div>\n</div>\n\n<style>\n.skeleton {\n  background: linear-gradient(90deg, #121827 25%, #1e293b 50%, #121827 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite linear;\n  border-radius: 6px;\n}\n.skeleton-thumb { height: 140px; margin-bottom: 12px; }\n.skeleton-title { height: 20px; width: 70%; margin-bottom: 8px; }\n.skeleton-text  { height: 14px; width: 90%; }\n\n@keyframes shimmer {\n  from { background-position: 200% 0; }\n  to   { background-position: -200% 0; }\n}\n</style>",
      "example": "/* Атрибут aria-busy=\"true\" сообщает скринридеру, что блок находится в процессе подгрузки */",
      "points": [
        "Скелетон повторяет точную высоту будущей карточки, поэтому после прихода ответа от fetch() контент встаёт на место без единого скачка страницы.",
        "Увеличение background-size: 200% 100% и сдвиг background-position от 200% к -200% создают иллюзию бегущего светового блика.",
        "Атрибут aria-busy=\"true\" на контейнере временно скрывает пустые блоки-заглушки от чтения скринридером до загрузки реальных данных."
      ],
      "tags": [
        "рецепт",
        "skeleton",
        "shimmer",
        "loader",
        "загрузка",
        "скелетон",
        "анимация"
      ],
      "when": "При асинхронной подгрузке каталога товаров, профиля пользователя, ленты новостей и аналитики.",
      "alternatives": "Для быстрых операций быстрее 150 мс скелетон лучше не мигать, чтобы не создавать лишнего мелькания.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy"
    },
    {
      "lang": "recipes",
      "id": "recipe-password-toggle",
      "title": "Рецепт: Поле пароля с кнопкой «Показать / скрыть пароль» (глазок)",
      "summary": "Удобное переключение типа поля между password и text с сохранением фокуса и правильными ARIA-атрибутами.",
      "code": "<div class=\"password-field\">\n  <input type=\"password\" id=\"pass-input\" placeholder=\"Введите пароль\" autocomplete=\"current-password\">\n  <button type=\"button\" id=\"pass-toggle\" aria-label=\"Показать пароль\" aria-pressed=\"false\">\n    Показать\n  </button>\n</div>\n\n<script>\nconst input = document.getElementById('pass-input');\nconst toggle = document.getElementById('pass-toggle');\n\ntoggle.addEventListener('click', () => {\n  const isHidden = input.type === 'password';\n  input.type = isHidden ? 'text' : 'password';\n  toggle.textContent = isHidden ? 'Скрыть' : 'Показать';\n  toggle.setAttribute('aria-pressed', String(isHidden));\n  input.focus();\n});\n</script>",
      "example": ".password-field { display: flex; align-items: center; border: 1px solid var(--line); border-radius: 6px; }",
      "points": [
        "Переключение свойства input.type = \"text\" / \"password\" мгновенно раскрывает или маскирует введённые символы точками.",
        "Обязательно ставь кнопке переключения type=\"button\", иначе клик по «глазку» внутри формы отправит саму форму!",
        "Вызов input.focus() после клика возвращает курсор обратно в поле, чтобы пользователь мог сразу продолжить печатать."
      ],
      "tags": [
        "рецепт",
        "password",
        "пароль",
        "показать пароль",
        "глазок",
        "форма",
        "авторизация"
      ],
      "when": "Во всех формах входа, регистрации и смены пароля для снижения числа опечаток со смартфона.",
      "alternatives": "В браузерах Edge есть встроенный системный значок глаза, который можно скрыть через input::-ms-reveal { display: none; }, чтобы он не дублировал твою кнопку.",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/password"
    },
    {
      "lang": "recipes",
      "id": "recipe-scroll-progress-bar",
      "title": "Рецепт: Индикатор прогресса чтения статьи в самом верху экрана",
      "summary": "Тонкая акцентная полоска над шапкой сайта, плавно заполняющаяся от 0% до 100% по мере прокрутки длинной статьи.",
      "code": "<div id=\"reading-progress\" class=\"reading-progress\" aria-hidden=\"true\"></div>\n\n<style>\n.reading-progress {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background: linear-gradient(90deg, #38bdf8, #818cf8);\n  transform-origin: left;\n  transform: scaleX(0);\n  z-index: 200;\n}\n</style>\n\n<script>\nconst bar = document.getElementById('reading-progress');\nwindow.addEventListener('scroll', () => {\n  const scrollable = document.documentElement.scrollHeight - window.innerHeight;\n  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;\n  bar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;\n}, { passive: true });\n</script>",
      "example": "/* Используем transform: scaleX(...) вместо изменения width для идеальной плавности на GPU! */",
      "points": [
        "Полная доступная высота прокрутки страницы вычисляется как documentElement.scrollHeight минус высота видимого окна window.innerHeight.",
        "Анимация ширины через transform: scaleX(ratio) с transform-origin: left работает на видеокарте без пересчёта геометрии (в отличие от изменения width: 54%).",
        "В новейших браузерах такой прогресс-бар можно сделать даже без JS через CSS animation-timeline: scroll()!"
      ],
      "tags": [
        "рецепт",
        "прогресс чтения",
        "scroll progress",
        "скролл",
        "статья",
        "индикатор"
      ],
      "when": "В блогах, длинных руководствах документации и лонгридах.",
      "alternatives": "CSS Scroll-Driven Animations (animation-timeline: scroll(root)) поддерживаются в современных Chromium-браузерах.",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline"
    }
  ],
  "frameworks": [
    {
      "id": "fw-tailwind-css",
      "lang": "frameworks",
      "title": "Tailwind CSS v4 (Утилитарный фреймворк вместо ручного CSS)",
      "summary": "Современный CSS-фреймворк, который заменяет написание сотен кастомных классов и файлов стилей готовыми атомарными утилитами прямо в атрибуте class.",
      "tags": [
        "framework",
        "фреймворк",
        "tailwind",
        "tailwindcss",
        "css",
        "утилиты",
        "верстка"
      ],
      "when": "Когда нужно верстать адаптивные интерфейсы в 3–4 раза быстрее без придумывания названий классов по БЭМ и без раздувания CSS-бандла.",
      "alternatives": "Чистый CSS с переменными (Custom Properties), CSS Modules или компонентные библиотеки вроде Bootstrap 5.",
      "points": [
        "Кого заменяет: ручное написание CSS-файлов, БЭМ-нейминг (.card__header--active) и громоздкие медиа-запросы.",
        "Подключение за 10 секунд (CDN для прототипов): <script src=\"https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4\"></script>.",
        "Подключение в проекте (Vite): npm install tailwindcss @tailwindcss/vite и строка @import \"tailwindcss\"; в главном CSS.",
        "Адаптивность и состояния пишутся прямо через префиксы: hover:bg-sky-400, md:grid-cols-3, dark:bg-slate-900."
      ],
      "code": "<!-- 1. Подключение Tailwind CSS v4 (CDN или через Vite) -->\n<!-- <script src=\"https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4\"></script> -->\n\n<!-- 2. Разметка карточки без единой строчки кастомного CSS -->\n<div class=\"tw-demo-card\">\n  <div class=\"tw-row\">\n    <span class=\"tw-badge\">Tailwind CSS v4</span>\n    <span class=\"tw-price\">0 КБ лишнего CSS</span>\n  </div>\n  <h4>Утилитарная вёрстка нового поколения</h4>\n  <p>Классы вроде <code>flex items-center justify-between gap-4 p-6 rounded-xl bg-slate-900</code> заменяют десятки строк обычного CSS.</p>\n  <button class=\"tw-btn\">Подключить в проект →</button>\n</div>\n\n<style>\n/* Эмуляция скомпилированных утилит Tailwind для автономного превью */\n.tw-demo-card { max-width: 400px; margin: 0 auto; padding: 20px; border-radius: 14px; background: #0f172a; border: 1px solid #1e293b; color: #f8fafc; font-family: system-ui, sans-serif; }\n.tw-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }\n.tw-badge { background: rgba(56,189,248,0.15); color: #38bdf8; padding: 3px 9px; border-radius: 6px; font-size: 12px; font-weight: 700; }\n.tw-price { font-size: 12px; color: #94a3b8; font-family: monospace; }\n.tw-demo-card h4 { margin: 0 0 6px; font-size: 16px; }\n.tw-demo-card p { margin: 0 0 14px; font-size: 13px; color: #94a3b8; line-height: 1.5; }\n.tw-demo-card code { color: #38bdf8; font-family: monospace; }\n.tw-btn { width: 100%; padding: 9px; border-radius: 8px; background: #38bdf8; color: #090d16; font-weight: 700; border: none; cursor: pointer; }\n</style>",
      "example": "// Установка в Vite-проект:\n// npm install tailwindcss @tailwindcss/vite\n\n// vite.config.js:\nimport { defineConfig } from 'vite';\nimport tailwindcss from '@tailwindcss/vite';\n\nexport default defineConfig({\n  plugins: [tailwindcss()],\n});"
    },
    {
      "id": "fw-react",
      "lang": "frameworks",
      "title": "React 19 (Декларативные компоненты вместо ручного DOM API)",
      "summary": "Библиотека для создания пользовательских интерфейсов, заменяющая императивный поиск элементов (querySelector, innerHTML) реактивными компонентами и хуками состояния.",
      "tags": [
        "framework",
        "фреймворк",
        "react",
        "jsx",
        "usestate",
        "useeffect",
        "spa",
        "компоненты"
      ],
      "when": "Для интерактивных веб-приложений, личных кабинетов, дашбордов и SaaS-продуктов с частым обновлением данных на экране.",
      "alternatives": "Vue 3, Svelte 5 или легковесный Alpine.js для простых серверных сайтов.",
      "points": [
        "Кого заменяет: ручное управление DOM (document.getElementById, createElement, appendChild) и синхронизацию переменных с HTML.",
        "Быстрый старт проекта: npm create vite@latest my-app -- --template react-ts.",
        "Хук useState(initial) хранит состояние и автоматически перерисовывает только изменившуюся часть интерфейса.",
        "Хук useEffect(() => {}, [deps]) выполняет запросы к серверу и подписки при монтировании компонента."
      ],
      "code": "// Пример компонента React 19 (CounterCard.jsx)\nimport { useState } from 'react';\n\nexport function CounterCard() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div className=\"card\">\n      <h3>Реактивный счётчик: {count}</h3>\n      <button onClick={() => setCount(prev => prev + 1)}>\n        Увеличить (+1)\n      </button>\n    </div>\n  );\n}",
      "example": "<!-- Интерактивная демонстрация логики состояния React -->\n<div class=\"react-sim\" id=\"react-root\">\n  <span style=\"color:#38bdf8;font-size:11px;font-family:monospace;font-weight:700;\">REACT COMPONENT STATE</span>\n  <h3 id=\"r-title\" style=\"margin:8px 0;\">Реактивный счётчик: 0</h3>\n  <p style=\"font-size:13px;color:#94a3b8;margin:0 0 12px;\">При вызове <code>setCount(n + 1)</code> React сам обновляет виртуальный DOM без ручного <code>querySelector</code>.</p>\n  <button id=\"r-btn\" style=\"background:#38bdf8;color:#090d16;border:none;padding:8px 16px;border-radius:8px;font-weight:700;cursor:pointer;\">setCount(count + 1)</button>\n</div>\n<script>\nlet stateCount = 0;\ndocument.getElementById('r-btn').onclick = () => {\n  stateCount++;\n  document.getElementById('r-title').textContent = 'Реактивный счётчик: ' + stateCount;\n};\n</script>"
    },
    {
      "id": "fw-vue3",
      "lang": "frameworks",
      "title": "Vue 3 (Composition API и <script setup> — прогрессивный фреймворк)",
      "summary": "Интуитивный фреймворк с автоматической реактивностью (ref, computed), который одинаково легко подключается одной строкой CDN на готовый сайт или собирается через Vite.",
      "tags": [
        "framework",
        "фреймворк",
        "vue",
        "vue3",
        "composition api",
        "ref",
        "v-model",
        "реактивность"
      ],
      "when": "Когда нужен баланс между мощью компонентного SPA и простотой привычного разделения на шаблон <template>, логику <script setup> и стили <style scoped>.",
      "alternatives": "React 19, Svelte или Alpine.js.",
      "points": [
        "Кого заменяет: громоздкие jQuery-скрипты (при подключении через CDN) и сложный шаблонный код больших SPA.",
        "Подключение без сборщика (CDN): <script src=\"https://unpkg.com/vue@3/dist/vue.global.js\"></script>.",
        "Создание проекта со сборщиком: npm create vue@latest.",
        "Директива v-model обеспечивает двустороннее связывание полей формы с переменной за 1 атрибут."
      ],
      "code": "<!-- 1. Однофайловый компонент Vue 3 (App.vue) -->\n<script setup>\nimport { ref, computed } from 'vue';\n\nconst name = ref('Разработчик');\nconst greeting = computed(() => `Привет, ${name.value}! Добро пожаловать во Vue 3.`);\n</script>\n\n<template>\n  <div class=\"vue-card\">\n    <input v-model=\"name\" placeholder=\"Введите имя\" />\n    <p>{{ greeting }}</p>\n  </div>\n</template>",
      "example": "<div style=\"padding:18px;background:#131c2e;border:1px solid #10b981;border-radius:12px;color:#f8fafc;font-family:system-ui,sans-serif;\">\n  <div style=\"font-size:11px;color:#10b981;font-weight:700;margin-bottom:6px;\">VUE 3 TWO-WAY BINDING (v-model)</div>\n  <input id=\"vue-inp\" value=\"Разработчик\" style=\"width:100%;padding:8px 12px;border-radius:8px;border:1px solid #334155;background:#090d16;color:#fff;margin-bottom:10px;box-sizing:border-box;\">\n  <div id=\"vue-out\" style=\"font-weight:700;color:#6ee7b7;\">Привет, Разработчик! Добро пожаловать во Vue 3.</div>\n</div>\n<script>\nconst vInp = document.getElementById('vue-inp');\nconst vOut = document.getElementById('vue-out');\nvInp.oninput = () => { vOut.textContent = 'Привет, ' + (vInp.value || 'Гость') + '! Добро пожаловать во Vue 3.'; };\n</script>"
    },
    {
      "id": "fw-alpinejs",
      "lang": "frameworks",
      "title": "Alpine.js (Легковесная замена jQuery прямо в HTML-разметке)",
      "summary": "Микро-фреймворк весом 15 КБ, позволяющий создавать модалки, табы, выпадающие меню и аккордеоны прямо через HTML-атрибуты x-data, x-show и @click без отдельных .js файлов.",
      "tags": [
        "framework",
        "фреймворк",
        "alpine",
        "alpinejs",
        "jquery замена",
        "x-data",
        "микрофреймворк"
      ],
      "when": "Идеальный выбор для серверных сайтов (PHP, Laravel, WordPress, Django) и лендингов, где React избыточен, а писать ручной querySelector долго.",
      "alternatives": "Нативный JavaScript или HTMX.",
      "points": [
        "Кого заменяет: устаревший jQuery и десятки мелких файлов вроде tabs.js, modal.js, dropdown.js.",
        "Подключение в 1 строку в <head>: <script defer src=\"https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js\"></script>.",
        "Атрибут x-data=\"{ open: false }\" объявляет локальное реактивное состояние прямо на HTML-теге.",
        "Атрибуты @click=\"open = !open\" и x-show=\"open\" управляют видимостью блока без единого ID или класса."
      ],
      "code": "<!-- 1. Подключение Alpine.js одной строкой (без npm и сборки!) -->\n<script defer src=\"https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js\"></script>\n\n<!-- 2. Выпадающее меню прямо в HTML -->\n<div x-data=\"{ open: false }\" class=\"alpine-box\">\n  <button @click=\"open = !open\" class=\"alpine-btn\">\n    Настройки профиля ▾\n  </button>\n\n  <div x-show=\"open\" class=\"alpine-menu\">\n    <p>Аккаунт: <strong>PRO</strong></p>\n    <p>Вся логика описана в атрибутах <code>x-data</code> и <code>x-show</code>!</p>\n  </div>\n</div>",
      "example": "<div style=\"padding:18px;background:#131c2e;border:1px solid #38bdf8;border-radius:12px;color:#f8fafc;font-family:system-ui,sans-serif;\">\n  <button id=\"alp-btn\" style=\"background:#38bdf8;color:#090d16;border:none;padding:8px 14px;border-radius:8px;font-weight:700;cursor:pointer;\">Настройки профиля (x-data=\"{ open }\") ▾</button>\n  <div id=\"alp-menu\" style=\"margin-top:10px;padding:12px;background:#090d16;border:1px solid #334155;border-radius:8px;font-size:13px;\">\n    ✓ Блок управляется декларативно без единого <code>document.querySelector</code>!\n  </div>\n</div>\n<script>\nconst aBtn = document.getElementById('alp-btn');\nconst aMenu = document.getElementById('alp-menu');\naBtn.onclick = () => { aMenu.hidden = !aMenu.hidden; };\n</script>"
    },
    {
      "id": "fw-htmx",
      "lang": "frameworks",
      "title": "HTMX (AJAX-запросы, WebSockets и динамика прямо из HTML)",
      "summary": "Библиотека, позволяющая любому HTML-элементу отправлять POST/GET-запросы и обновлять часть страницы без перезагрузки и без написания JavaScript-кода.",
      "tags": [
        "framework",
        "фреймворк",
        "htmx",
        "ajax",
        "fetch замена",
        "hx-get",
        "hx-post",
        "php"
      ],
      "when": "Когда бэкенд пишется на PHP, Python или Go, и вы хотите получить плавность SPA-приложения без создания отдельного фронтенда на React.",
      "alternatives": "Ручной fetch() + innerHTML или полноценный SPA (React / Vue).",
      "points": [
        "Кого заменяет: ручные цепочки fetch() -> response.text() -> document.getElementById().innerHTML.",
        "Подключение (CDN): <script src=\"https://unpkg.com/htmx.org@2.0.0\"></script>.",
        "Атрибут hx-post=\"/api/like\" отправляет запрос по клику, а hx-target=\"#likes-count\" указывает, какой блок на странице обновить ответом сервера."
      ],
      "code": "<!-- Подключение HTMX -->\n<script src=\"https://unpkg.com/htmx.org@2.0.0\"></script>\n\n<!-- Поиск с автоподгрузкой результатов и задержкой 300ms (debounce) -->\n<input type=\"search\"\n       name=\"q\"\n       hx-get=\"/api/search\"\n       hx-trigger=\"input changed delay:300ms\"\n       hx-target=\"#search-results\"\n       placeholder=\"Живой поиск через HTMX...\">\n\n<div id=\"search-results\">Результаты появятся здесь без единой строчки JS</div>"
    },
    {
      "id": "fw-bootstrap5",
      "lang": "frameworks",
      "title": "Bootstrap 5.3 (Готовая 12-колоночная сетка и UI-компоненты без jQuery)",
      "summary": "Классический CSS/JS-фреймворк с готовыми адаптивными контейнерами (row / col-md-6), модальными окнами, таблицами, формами и встроенной тёмной темой.",
      "tags": [
        "framework",
        "фреймворк",
        "bootstrap",
        "bootstrap 5",
        "сетка",
        "col-md",
        "компоненты"
      ],
      "when": "Для быстрой сборки админ-панелей, внутренних корпоративных порталов, CRM и прототипов.",
      "alternatives": "Tailwind CSS (для уникального дизайна) или нативный CSS Grid.",
      "points": [
        "Кого заменяет: ручное написание базовых стилей для кнопок, таблиц, алертов, модалок и колонок.",
        "В версии Bootstrap 5 полностью удалена зависимость от jQuery — все интерактивные компоненты работают на чистом JS.",
        "Подключение через CDN занимает 2 строки: один <link> для CSS и один <script> для bundle.min.js.",
        "Атрибут data-bs-theme=\"dark\" на теге <html> мгновенно переключает весь сайт в тёмную тему."
      ],
      "code": "<!-- 1. Подключение Bootstrap 5.3 CSS в <head> -->\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n<!-- 2. Адаптивная 12-колоночная сетка -->\n<div class=\"container py-3\" data-bs-theme=\"dark\">\n  <div class=\"row g-3\">\n    <div class=\"col-12 col-md-6\">\n      <div class=\"p-3 border rounded bg-dark text-light\">Колонка 1 (50% на ПК, 100% на телефоне)</div>\n    </div>\n    <div class=\"col-12 col-md-6\">\n      <div class=\"p-3 border rounded bg-dark text-light\">Колонка 2 (50% на ПК, 100% на телефоне)</div>\n    </div>\n  </div>\n</div>"
    },
    {
      "id": "fw-typescript",
      "lang": "frameworks",
      "title": "TypeScript (Строгая типизация поверх JavaScript)",
      "summary": "Надмножество JavaScript от Microsoft, добавляющее статическую проверку типов, интерфейсы и автодополнение в IDE до запуска кода в браузере.",
      "tags": [
        "framework",
        "фреймворк",
        "typescript",
        "ts",
        "типизация",
        "interface",
        "type"
      ],
      "when": "В любых проектах длиннее 300 строк кода и при командной разработке, чтобы исключить ошибки Cannot read properties of undefined.",
      "alternatives": "JSDoc-комментарии (@param, @returns) в обычных .js файлах.",
      "points": [
        "Кого заменяет: динамический JavaScript без проверки типов и ручные проверки typeof x === \"string\".",
        "Установка в проект: npm install -D typescript && npx tsc --init.",
        "Vite поддерживает файлы .ts и .tsx из коробки без дополнительной настройки.",
        "На этапе сборки все типы вырезаются, превращаясь в чистый совместимый JavaScript."
      ],
      "code": "// Описание структуры пользователя через interface\ninterface UserProfile {\n  id: number;\n  name: string;\n  role: 'admin' | 'editor' | 'viewer';\n  email?: string; // Необязательное поле\n}\n\nfunction formatUserBadge(user: UserProfile): string {\n  return `[${user.role.toUpperCase()}] ${user.name} (#${user.id})`;\n}\n\nconst current: UserProfile = { id: 42, name: 'Павел', role: 'admin' };\nconsole.log(formatUserBadge(current));"
    },
    {
      "id": "fw-vite",
      "lang": "frameworks",
      "title": "Vite (Мгновенный сборщик проектов вместо Webpack и Gulp)",
      "summary": "Инструмент сборки нового поколения, использующий нативные ES-модули браузера для запуска сервера за 200 мс и оптимизированную сборку Rollup для продакшена.",
      "tags": [
        "framework",
        "фреймворк",
        "vite",
        "сборщик",
        "webpack замена",
        "gulp замена",
        "hmr",
        "npm"
      ],
      "when": "Для старта любого современного проекта на чистом JS/TS, React, Vue, Svelte или многостраничной верстки.",
      "alternatives": "Parcel, esbuild или устаревший Webpack.",
      "points": [
        "Кого заменяет: медленные конфиги Webpack на 200 строк и сложные пайплайны Gulp.",
        "Создание нового проекта за 1 команду: npm create vite@latest.",
        "Команда npm run dev запускает локальный сервер с мгновенным обновлением стилей (HMR).",
        "Команда npm run build собирает минифицированную папку dist/, готовую к загрузке на любой хостинг (включая Beget, GitHub Pages, Vercel)."
      ],
      "code": "// 1. Создание и запуск проекта в терминале:\n// npm create vite@latest my-project\n// cd my-project && npm install && npm run dev\n\n// 2. Пример конфигурации vite.config.js:\nimport { defineConfig } from 'vite';\n\nexport default defineConfig({\n  server: {\n    port: 3000,\n    open: true\n  },\n  build: {\n    outDir: 'dist',\n    sourcemap: false\n  }\n});"
    },
    {
      "id": "fw-laravel",
      "lang": "frameworks",
      "title": "Laravel 11 (Современный PHP-фреймворк вместо процедурного PHP)",
      "summary": "Самый популярный PHP-фреймворк с элегантным роутингом, ORM Eloquent (вместо сырых SQL-запросов), шаблонизатором Blade, очередями и встроенной авторизацией.",
      "tags": [
        "framework",
        "фреймворк",
        "laravel",
        "php",
        "eloquent",
        "blade",
        "mvc",
        "бэкенд"
      ],
      "when": "Для создания надёжных серверных веб-приложений, REST API, интернет-магазинов и личных кабинетов на PHP 8.2+.",
      "alternatives": "Symfony, Slim Framework или чистый PHP 8 для микро-скриптов.",
      "points": [
        "Кого заменяет: разрозненные файлы index.php, login.php, db.php с ручным PDO и смешиванием SQL с HTML.",
        "Установка через Composer: composer create-project laravel/laravel my-app.",
        "Eloquent ORM позволяет писать Product::where(\"active\", true)->get() вместо ручного написания SQL.",
        "Шаблонизатор Blade автоматически экранирует вывод {{ $user->name }} для полной защиты от XSS."
      ],
      "code": "<?php\n// 1. Маршрут в routes/web.php (Laravel 11)\nuse App\\Models\\Project;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/projects', function () {\n    // Eloquent ORM: безопасная выборка без ручного SQL\n    $projects = Project::where('is_published', true)\n        ->orderByDesc('created_at')\n        ->take(10)\n        ->get();\n\n    return view('projects.index', compact('projects'));\n});"
    },
    {
      "id": "fw-nextjs",
      "lang": "frameworks",
      "title": "Next.js 15 (Full-Stack фреймворк поверх React с SSR и SEO)",
      "summary": "Продакшен-фреймворк для React с файловым роутингом (App Router), серверным рендерингом (SSR) для идеальной индексации в поисковиках и серверными экшенами.",
      "tags": [
        "framework",
        "фреймворк",
        "nextjs",
        "next",
        "react",
        "ssr",
        "ssg",
        "seo"
      ],
      "when": "Когда проекту на React нужна быстрая первая отрисовка и 100% индексация страниц в Google и Яндекс.",
      "alternatives": "Remix, Nuxt 3 (для Vue) или Astro (для контентных сайтов).",
      "points": [
        "Кого заменяет: клиентский React SPA (Create React App), который отдаёт поисковым роботам пустой <div id=\"root\"></div>.",
        "Быстрый старт: npx create-next-app@latest.",
        "Файловый роутинг: файл app/about/page.tsx автоматически становится страницей по адресу /about.",
        "Серверные компоненты (RSC) выполняют запросы к БД прямо на сервере и не отправляют лишний JS в браузер."
      ],
      "code": "// Файл app/blog/page.tsx (Серверный компонент Next.js)\nexport const metadata = {\n  title: 'Блог разработчика — DevShelf',\n  description: 'Статьи рендерятся на сервере и мгновенно индексируются поисковиками.'\n};\n\nexport default async function BlogPage() {\n  // Запрос выполняется на сервере до отправки HTML в браузер!\n  const res = await fetch('https://api.example.com/posts', { next: { revalidate: 60 } });\n  const posts = await res.json();\n\n  return (\n    <main>\n      <h1>Статьи ({posts.length})</h1>\n    </main>\n  );\n}"
    },
    {
      "id": "fw-scss-sass",
      "lang": "frameworks",
      "title": "Sass / SCSS (Препроцессор CSS: миксины, функции и модули)",
      "summary": "Метаязык поверх CSS, добавляющий переиспользуемые миксины (@mixin), математические циклы, функции и модульную архитектуру (@use).",
      "tags": [
        "framework",
        "фреймворк",
        "sass",
        "scss",
        "препроцессор",
        "mixin",
        "css"
      ],
      "when": "В крупных дизайн-системах и проектах со сложной генерацией тем и повторяющимися медиа-запросами.",
      "alternatives": "Современный нативный CSS (который уже поддерживает переменные var() и вложенность & из коробки) или Tailwind CSS.",
      "points": [
        "Кого упрощает: многократное дублирование медиа-запросов и шаблонных комбинаций свойств в CSS.",
        "Подключение в Vite: достаточно выполнить npm add -D sass-embedded и переименовать файл в styles.scss.",
        "Директива @mixin позволяет упаковать набор стилей с параметрами и подключать его через @include."
      ],
      "code": "// 1. Объявление переиспользуемого миксина в SCSS\n@mixin glass-panel($blur: 12px, $alpha: 0.65) {\n  background: rgba(15, 23, 42, $alpha);\n  backdrop-filter: blur($blur);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 14px;\n}\n\n// 2. Использование с вложенностью\n.header-bar {\n  @include glass-panel(16px, 0.8);\n  padding: 16px 24px;\n\n  &__title {\n    color: #38bdf8;\n    font-weight: 700;\n  }\n}"
    },
    {
      "id": "fw-gsap",
      "lang": "frameworks",
      "title": "GSAP (GreenSock — профессиональная веб-анимация и ScrollTrigger)",
      "summary": "Индустриальный стандарт для сложных таймлайнов, плавной анимации SVG, морфинга и скролл-сцен (ScrollTrigger), работающий стабильно во всех браузерах.",
      "tags": [
        "framework",
        "фреймворк",
        "gsap",
        "scrolltrigger",
        "анимация",
        "keyframes замена"
      ],
      "when": "Для промо-лендингов, интерактивного сторителлинга при скролле, последовательных анимаций (stagger) и сложных переходов.",
      "alternatives": "Нативные CSS transition / @keyframes или Web Animations API (element.animate) для простых ховеров.",
      "points": [
        "Кого заменяет: громоздкие цепочки CSS @keyframes с ручным высчитыванием процентов и задержек animation-delay.",
        "Подключение (CDN): <script src=\"https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js\"></script>.",
        "Установка через npm: npm install gsap.",
        "Свойство stagger: 0.1 автоматически запускает анимацию списка карточек каскадом с интервалом 0.1 секунды."
      ],
      "code": "// 1. Подключение GSAP:\n// import gsap from 'gsap';\n\n// 2. Каскадное появление карточек с пружинной физикой\ngsap.from('.feature-card', {\n  y: 30,\n  opacity: 0,\n  duration: 0.6,\n  stagger: 0.12,\n  ease: 'power3.out'\n});"
    }
  ]
};
