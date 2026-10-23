// DevShelf Knowledge Base: Prerequisite functions and handbook study topics for ready solutions
// Позволяет разработчику не просто скопировать готовый шаблон, а понять, какие функции и темы изучить,
// чтобы написать аналогичный шаблон самостоятельно из головы с нуля.

export const RECIPE_KNOWLEDGE_MAP = {
  'recipe-login-form': {
    title: 'Форма входа (Login / Авторизация + Показ пароля)',
    category: 'recipes',
    summary: 'Авторизация с переключением видимости пароля, валидацией полей и блокировкой повторной отправки.',
    guide: 'Чтобы написать форму входа из головы с нуля: 1) Разметьте семантическую <form> с инпутами email и password с правильными атрибутами autocomplete; 2) Оберните поле пароля в контейнер с position: relative, а кнопку-глазок спозиционируйте абсолютно (position: absolute; right: 8px); 3) В JavaScript по клику на кнопку меняйте свойство input.type с "password" на "text" и обратно; 4) В обработчике submit вызовите e.preventDefault() для отправки без перезагрузки страницы.',
    functions: [
      'input.type = "password" | "text"',
      'event.preventDefault()',
      'form.addEventListener("submit")',
      'position: relative / absolute',
      'autocomplete="current-password"',
      'HTMLFormElement.checkValidity()'
    ],
    topics: [
      { id: 'html-form', name: 'HTML: форма <form> и методы передачи данных' },
      { id: 'html-input-text', name: 'HTML: текстовые поля ввода <input>' },
      { id: 'css-positioning', name: 'CSS: позиционирование (relative / absolute)' },
      { id: 'js-dom-manipulation', name: 'JS: работа с DOM (querySelector, classList)' }
    ]
  },

  'recipe-register-form': {
    title: 'Регистрация с индикатором надёжности пароля',
    category: 'recipes',
    summary: 'Интерактивная форма с расчётом сложности пароля в реальном времени и плавной цветной шкалой.',
    guide: 'Чтобы написать индикатор надёжности пароля из головы: 1) Создайте поле <input type="password"> и полосу прогресса (контейнер + цветной div шкалы); 2) Слушайте событие "input" на поле ввода; 3) В функции рассчитывайте очки сложности регулярными выражениями: длина >= 8, наличие цифр, больших букв и спецсимволов; 4) На основе набранных очков меняйте ширину шкалы fill.style.width (25%, 50%, 75%, 100%) и цвет через CSS-переход transition: width 0.25s.',
    functions: [
      'RegExp.prototype.test()',
      'input.addEventListener("input")',
      'element.style.width',
      'transition: width, background 0.25s',
      'Math.max() & score calculation'
    ],
    topics: [
      { id: 'js-strings-regexp', name: 'JS: методы строк и регулярные выражения (RegExp.test)' },
      { id: 'html-input-text', name: 'HTML: текстовые поля ввода <input>' },
      { id: 'css-transitions-animations', name: 'CSS: плавные переходы (transition)' },
      { id: 'js-dom-manipulation', name: 'JS: манипуляция стилями DOM (element.style)' }
    ]
  },

  'recipe-otp-verification': {
    title: 'Ввод SMS / 2FA пин-кода из 4 цифр (OTP Input)',
    category: 'recipes',
    summary: 'Автоматический переход фокуса на следующую ячейку и возврат фокуса при Backspace.',
    guide: 'Чтобы написать OTP-ввод из головы: 1) Создайте 4–6 инпутов с maxlength="1" и inputmode="numeric"; 2) По событию "input" удаляйте нецифровые символы регуляркой [^0-9] и переводите фокус на следующий элемент inputs[i + 1]?.focus(); 3) По событию "keydown" отслеживайте клавишу Backspace: если текущее поле пустое, переводите фокус назад inputs[i - 1]?.focus(); 4) Собирайте итоговый код через inputs.map(i => i.value).join("").',
    functions: [
      'input.maxLength = 1',
      'input.focus()',
      'KeyboardEvent.key === "Backspace"',
      'String.replace(/[^0-9]/g, "")',
      'Array.prototype.map().join("")'
    ],
    topics: [
      { id: 'html-input-text', name: 'HTML: текстовые поля ввода <input>' },
      { id: 'js-keyboard-shortcuts', name: 'JS: обработка клавиш (keydown, e.key)' },
      { id: 'js-array-methods', name: 'JS: методы массивов (map, join)' },
      { id: 'js-dom-manipulation', name: 'JS: управление фокусом (focus, querySelectorAll)' }
    ]
  },

  'recipe-shopping-cart': {
    title: 'Интерактивная корзина товаров с пересчётом суммы',
    category: 'recipes',
    summary: 'Динамический расчёт количества и стоимости с локализацией в рублях и делегированием событий.',
    guide: 'Чтобы написать корзину из головы: 1) Храните массив товаров в состоянии (массив объектов с id, price, qty); 2) Используйте делегирование событий: один слушатель "click" на контейнере корзины ловит нажатия кнопок через e.target.closest("[data-action]"); 3) Рассчитывайте общую сумму одной строкой через items.reduce((acc, it) => acc + it.price * it.qty, 0); 4) Форматируйте рубли через нативный new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" }); 5) Сохраняйте в localStorage.',
    functions: [
      'Array.prototype.reduce()',
      'new Intl.NumberFormat("ru-RU")',
      'element.closest("[data-action]")',
      'dataset.id & dataset.action',
      'localStorage.setItem() / getItem()'
    ],
    topics: [
      { id: 'js-reduce-flatmap', name: 'JS: агрегация данных (.reduce) и плоская трансформация' },
      { id: 'js-intl-formatting', name: 'JS: локализация валют и чисел (Intl API)' },
      { id: 'js-event-delegation', name: 'JS: делегирование событий и CustomEvent' },
      { id: 'js-localstorage', name: 'JS: локальное хранилище данных (localStorage)' },
      { id: 'css-flexbox-container', name: 'CSS: Flexbox контейнер (направление и отступы)' }
    ]
  },

  'recipe-catalog-filter': {
    title: 'Живой поиск и фильтрация карточек по категориям',
    category: 'recipes',
    summary: 'Мгновенная клиентская фильтрация списка карточек по категории и поисковой строке.',
    guide: 'Чтобы написать живую фильтрацию из головы: 1) Сохраните исходный массив карточек; 2) Повесьте слушатель "input" на поле поиска и "click" на кнопки категорий; 3) В функции фильтрации используйте Array.filter() со сравнением toLowerCase().includes(query.toLowerCase()); 4) Скрывайте несовпадающие элементы через свойство element.hidden = !isMatch или рендерите отфильтрованный массив через innerHTML.',
    functions: [
      'Array.prototype.filter()',
      'String.prototype.toLowerCase()',
      'String.prototype.includes()',
      'element.hidden = true / false',
      'input.addEventListener("input")'
    ],
    topics: [
      { id: 'js-array-methods', name: 'JS: методы массивов (filter, map, some)' },
      { id: 'html-form-input-search', name: 'HTML: поисковое поле ввода (<input type="search">)' },
      { id: 'js-strings-regexp', name: 'JS: методы строк (includes, toLowerCase)' },
      { id: 'js-dom-manipulation', name: 'JS: работа с DOM (classList, hidden)' }
    ]
  },

  'recipe-file-dropzone': {
    title: 'Drag-and-Drop загрузка файлов с проверкой размера',
    category: 'recipes',
    summary: 'Зона перетаскивания файлов мышью с валидацией размера и типа и превью миниатюр.',
    guide: 'Чтобы написать Drag & Drop зону из головы: 1) Создайте контейнер с пунктирной рамкой (border: 2px dashed) и скрытый <input type="file">; 2) Обязательно вызовите e.preventDefault() в событиях "dragover" и "dragenter", иначе браузер откроет файл вместо загрузки; 3) В событии "drop" извлеките перетащенные файлы из e.dataTransfer.files; 4) Проверьте file.size и file.type; 5) Создайте мгновенное превью через URL.createObjectURL(file) или FileReader.',
    functions: [
      'dragover & drop events',
      'event.preventDefault()',
      'event.dataTransfer.files',
      'URL.createObjectURL(file)',
      'FileReader.prototype.readAsDataURL()'
    ],
    topics: [
      { id: 'js-drag-and-drop-files', name: 'JS: зона перетаскивания файлов мышью (Drag & Drop)' },
      { id: 'html-input-file-accept', name: 'HTML: выбор файлов <input type="file">' },
      { id: 'js-formdata-file-reader', name: 'JS: сбор данных формы и превью файлов (createObjectURL)' },
      { id: 'css-border', name: 'CSS: границы элементов (border-style: dashed)' }
    ]
  },

  'recipe-burger-menu': {
    title: 'Адаптивное бургер-меню (CSS + JS)',
    category: 'recipes',
    summary: 'Мобильное меню со шторкой, анимацией иконок и поддержкой клавиши Escape.',
    guide: 'Чтобы написать бургер-меню из головы: 1) В HTML создайте кнопку <button aria-expanded="false" aria-controls="nav-menu"> с 3 линиями (span) и выезжающую панель <nav id="nav-menu">; 2) В CSS на десктопе скройте кнопку бургер, а меню покажите в строку; 3) В медиа-запросе @media (max-width: 768px) спозиционируйте меню с position: fixed со сдвигом transform: translateX(-100%); 4) В JavaScript по клику переключайте класс active на меню (transform: translateX(0)) и меняйте атрибут aria-expanded.',
    functions: [
      'element.classList.toggle("active")',
      'button.setAttribute("aria-expanded", "true")',
      '@media (max-width: 768px)',
      'transform: translateX(-100%)',
      'transition: transform 0.3s ease'
    ],
    topics: [
      { id: 'css-transitions-animations', name: 'CSS: плавные переходы (transition)' },
      { id: 'html-aria-accessibility', name: 'HTML: доступность WAI-ARIA и клавиатурная навигация' },
      { id: 'js-dom-manipulation', name: 'JS: работа с DOM (classList.toggle)' },
      { id: 'css-positioning', name: 'CSS: позиционирование (fixed, absolute, z-index)' }
    ]
  },

  'recipe-modal-dialog': {
    title: 'Модальное окно на нативном <dialog>',
    category: 'recipes',
    summary: 'Всплывающее окно на нативном теге браузера со стилизацией ::backdrop и закрытием по Esc.',
    guide: 'Чтобы написать модальное окно из головы нативно без библиотек: 1) Используйте нативный тег <dialog id="my-modal"> с заголовком, контентом и кнопкой закрытия; 2) Для открытия вызовите dialog.showModal() (он автоматически блокирует фон страницы и удерживает фокус внутри окна); 3) Для стилизации подложки используйте псевдоэлемент ::backdrop { background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); }; 4) Для закрытия вызовите dialog.close() или поместите внутрь кнопку в <form method="dialog"> без единой строчки JS!',
    functions: [
      'HTMLDialogElement.prototype.showModal()',
      'HTMLDialogElement.prototype.close()',
      'CSS псевдоэлемент ::backdrop',
      'HTML <form method="dialog">',
      'dialog.returnValue'
    ],
    topics: [
      { id: 'html-dialog', name: 'HTML: нативное модальное окно <dialog>' },
      { id: 'html-dialog-form-method', name: 'HTML: закрытие окна через <form method="dialog">' },
      { id: 'css-positioning', name: 'CSS: позиционирование и псевдоэлементы' },
      { id: 'js-keyboard-shortcuts', name: 'JS: обработка горячих клавиш (Esc закрытие)' }
    ]
  },

  'recipe-tabs': {
    title: 'Доступные вкладки (Tabs Component)',
    category: 'recipes',
    summary: 'Переключение панелей контента без перезагрузки с поддержкой клавиатуры и WAI-ARIA.',
    guide: 'Чтобы написать вкладки из головы: 1) Создайте панель кнопок с атрибутами data-target и контейнеры контента с соответствующими id; 2) Для доступности задайте role="tablist", role="tab" и role="tabpanel"; 3) Повесьте один обработчик клика на родительский контейнер (делегирование событий); 4) При клике снимите класс active со всех кнопок и скройте все панели (panel.hidden = true), затем добавьте active кликнутой кнопке и откройте целевую панель (targetPanel.hidden = false).',
    functions: [
      'element.getAttribute("data-tab")',
      'panel.hidden = false / true',
      'button.setAttribute("aria-selected", "true")',
      'tablist & role="tab"',
      'element.classList.toggle("active")'
    ],
    topics: [
      { id: 'js-event-delegation', name: 'JS: делегирование событий и CustomEvent' },
      { id: 'html-aria-accessibility', name: 'HTML: доступность WAI-ARIA и клавиатурная навигация' },
      { id: 'js-dom-manipulation', name: 'JS: манипуляция DOM (classList, hidden)' },
      { id: 'css-flexbox-container', name: 'CSS: Flexbox контейнер (направление и отступы)' }
    ]
  },

  'recipe-dropdown-menu': {
    title: 'Выпадающее меню (Dropdown) с закрытием по клику вне блока',
    category: 'recipes',
    summary: 'Компактное меню действий с абсолютным позиционированием и закрытием при клике в любую точку страницы.',
    guide: 'Чтобы написать выпадающее меню из головы: 1) Задайте родительскому контейнеру position: relative; 2) Выпадающий список спозиционируйте с position: absolute; top: 100%; display: none (или opacity: 0; pointer-events: none); 3) По клику на кнопку-триггер переключайте класс open; 4) Чтобы меню закрывалось при клике в любое другое место страницы, повесьте слушатель на document: if (!menu.contains(e.target)) menu.classList.remove("open").',
    functions: [
      'document.addEventListener("click")',
      'Node.prototype.contains(event.target)',
      'element.classList.toggle("open")',
      'position: relative / absolute',
      'z-index: 50'
    ],
    topics: [
      { id: 'css-positioning', name: 'CSS: позиционирование (relative, absolute, z-index)' },
      { id: 'js-event-delegation', name: 'JS: делегирование событий и слушатели document' },
      { id: 'js-dom-manipulation', name: 'JS: работа с DOM (contains, classList)' },
      { id: 'html-aria-accessibility', name: 'HTML: доступность WAI-ARIA (aria-expanded)' }
    ]
  },

  'recipe-toast-notifications': {
    title: 'Всплывающие уведомления (Toast) с автоскрытием и стеком',
    category: 'recipes',
    summary: 'Система лёгких статусных уведомлений в углу экрана с таймером автоудаления и плавной анимацией.',
    guide: 'Чтобы написать систему Toast-уведомлений из головы: 1) Создайте фиксированный контейнер в углу экрана (position: fixed; bottom: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; gap: 8px); 2) Напишите функцию showToast(text, type): она создает div через document.createElement, задает класс и добавляет в контейнер; 3) В CSS анимируйте появление через @keyframes slideIn; 4) Через setTimeout(() => { toast.classList.add("fade-out"); setTimeout(() => toast.remove(), 300); }, 3500) плавно удаляйте уведомление.',
    functions: [
      'document.createElement("div")',
      'container.appendChild(toast)',
      'window.setTimeout() & clearTimeout()',
      'Element.prototype.remove()',
      'CSS @keyframes slideIn',
      'position: fixed; z-index: 9999'
    ],
    topics: [
      { id: 'js-timers-raf', name: 'JS: таймеры (setTimeout, setInterval, clearTimeout)' },
      { id: 'js-dom-manipulation', name: 'JS: создание элементов (createElement, appendChild, remove)' },
      { id: 'css-keyframes-animation', name: 'CSS: покадровые анимации (@keyframes и animation)' },
      { id: 'css-positioning', name: 'CSS: фиксированное позиционирование (position: fixed)' }
    ]
  },

  'recipe-theme-switcher': {
    title: 'Переключатель тёмной и светлой темы с localStorage',
    category: 'recipes',
    summary: 'Мгновенное переключение цветовой схемы с сохранением выбора пользователя и учётом настроек ОС.',
    guide: 'Чтобы написать переключатель темы из головы: 1) Объявите цветовую палитру через CSS-переменные в :root { --bg: #fff; --text: #000; } и [data-theme="dark"] { --bg: #0b0c0e; --text: #f4f4f6; }; 2) При загрузке страницы проверьте сохранённую тему в localStorage.getItem("theme") или системное предпочтение браузера через window.matchMedia("(prefers-color-scheme: dark)").matches; 3) По клику на кнопку меняйте атрибут document.documentElement.setAttribute("data-theme", newTheme) и сохраняйте выбор в localStorage.',
    functions: [
      'localStorage.getItem() / setItem()',
      'document.documentElement.setAttribute("data-theme")',
      'window.matchMedia("(prefers-color-scheme: dark)")',
      'CSS Custom Properties (:root & var())'
    ],
    topics: [
      { id: 'js-localstorage', name: 'JS: локальное хранилище данных (localStorage & JSON)' },
      { id: 'js-matchmedia-network-visibility', name: 'JS: системные настройки браузера (matchMedia)' },
      { id: 'css-box-model', name: 'CSS: переменные var() и каскадная модель' },
      { id: 'js-dom-manipulation', name: 'JS: работа с DOM (setAttribute, dataset)' }
    ]
  },

  'recipe-live-search-filter': {
    title: 'Живой поиск и фильтрация карточек на странице без перезагрузки',
    category: 'recipes',
    summary: 'Мгновенная подсветка совпадений и оптимизация частых поисковых запросов через Debounce.',
    guide: 'Чтобы написать быстрый поиск из головы: 1) Навесьте событие "input" на поисковую строку; 2) Оберните вызов фильтрации в функцию устранения дребезга (Debounce) на 150–200 мс через setTimeout/clearTimeout, чтобы не перегружать поток рендеринга при быстром наборе; 3) Сравнивайте запрос с текстом карточек: text.toLowerCase().includes(query.toLowerCase()); 4) Для подсветки совпадений заменяйте найденный фрагмент на <mark>$&</mark> через регулярное выражение.',
    functions: [
      'Debounce (setTimeout / clearTimeout)',
      'String.prototype.includes()',
      'element.textContent.toLowerCase()',
      'innerHTML = text.replaceAll()',
      'input.addEventListener("input")'
    ],
    topics: [
      { id: 'js-debounce-throttle', name: 'JS: оптимизация частых событий (Debounce и Throttle)' },
      { id: 'js-strings-regexp', name: 'JS: методы строк и регулярные выражения (RegExp)' },
      { id: 'html-form-input-search', name: 'HTML: поисковое поле ввода (<input type="search">)' },
      { id: 'js-timers-raf', name: 'JS: таймеры (setTimeout, clearTimeout)' }
    ]
  },

  'recipe-copy-code-button': {
    title: 'Блок кода с кнопкой «Скопировать» и подсветкой статуса',
    category: 'recipes',
    summary: 'Копирование текста в буфер обмена в один клик с визуальным подтверждением успеха.',
    guide: 'Чтобы написать кнопку копирования из головы: 1) В HTML разместите блок <pre><code> и рядом кнопку <button class="copy-btn">; 2) Навесьте асинхронный клик на кнопку: async () => { ... }; 3) Извлеките текст из code.innerText и запишите в буфер через await navigator.clipboard.writeText(text); 4) Оберните в try/catch для безопасной обработки отказа в правах; 5) Измените текст кнопки на "✓ Скопировано!" и через setTimeout(() => btn.textContent = "Копировать", 1500) верните исходный вид.',
    functions: [
      'navigator.clipboard.writeText()',
      'async / await & Promise',
      'window.setTimeout()',
      'try / catch обработка ошибок',
      'button.textContent status switch'
    ],
    topics: [
      { id: 'js-clipboard-api', name: 'JS: копирование в буфер обмена (Clipboard API)' },
      { id: 'js-timers-raf', name: 'JS: таймеры (setTimeout)' },
      { id: 'js-custom-events-error', name: 'JS: асинхронная обработка ошибок (try / catch)' },
      { id: 'css-transitions-animations', name: 'CSS: плавные переходы (transition)' }
    ]
  },

  'recipe-sticky-header-scroll': {
    title: 'Шапка сайта с эффектом стекла и тенью при начале прокрутки',
    category: 'recipes',
    summary: 'Фиксированная навигационная панель с плавным появлением полупрозрачного фона и тени.',
    guide: 'Чтобы написать стеклянную шапку из головы: 1) В CSS задайте шапке position: sticky; top: 0; z-index: 50; transition: all 0.3s; 2) Опишите модификатор .header.scrolled { background: rgba(11,12,14,0.9); backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0,0,0,0.4); }; 3) В JS слушайте scroll на window: const isScrolled = window.scrollY > 20; header.classList.toggle("scrolled", isScrolled); 4) Для максимальной производительности используйте { passive: true } в addEventListener.',
    functions: [
      'window.addEventListener("scroll", ..., { passive: true })',
      'window.scrollY > threshold',
      'header.classList.toggle("scrolled", isScrolled)',
      'position: sticky; top: 0',
      'backdrop-filter: blur(10px)'
    ],
    topics: [
      { id: 'css-sticky-position', name: 'CSS: липкое позиционирование (position: sticky)' },
      { id: 'js-geometry-scroll', name: 'JS: скролл окна (window.scrollY, scrollIntoView)' },
      { id: 'css-transitions-animations', name: 'CSS: плавные переходы (transition)' },
      { id: 'css-box-shadow', name: 'CSS: тени элементов (box-shadow)' }
    ]
  },

  'recipe-skeleton-loader': {
    title: 'Анимированный скелетон загрузки карточек (Skeleton Shimmer)',
    category: 'recipes',
    summary: 'Плейсхолдер загрузки контента с плавной световой волной (Shimmer) чисто на CSS.',
    guide: 'Чтобы написать скелетон-лоадер из головы чисто на CSS: 1) Создайте блоки-заглушки (аватар, заголовок, строки текста) с теми же размерами и border-radius, что и реальный контент; 2) Задайте им градиентный фон с более светлой полосой по центру: linear-gradient(90deg, #1e2025 0%, #2b303c 50%, #1e2025 100%); 3) Растяните фон вдвое: background-size: 200% 100%; 4) Запустите бесконечную анимацию: @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } } animation: shimmer 1.5s infinite linear.',
    functions: [
      '@keyframes shimmer',
      'background: linear-gradient(90deg, ...)',
      'background-size: 200% 100%',
      'animation: shimmer 1.5s infinite linear',
      'border-radius: var(--radius)'
    ],
    topics: [
      { id: 'css-keyframes-animation', name: 'CSS: покадровые анимации (@keyframes и animation)' },
      { id: 'css-box-model', name: 'CSS: блочные размеры и отступы' },
      { id: 'css-border-radius', name: 'CSS: скругление углов (border-radius)' },
      { id: 'css-flexbox-container', name: 'CSS: Flexbox сетка' }
    ]
  },

  'recipe-password-toggle': {
    title: 'Поле пароля с кнопкой «Показать / скрыть пароль» (глазок)',
    category: 'recipes',
    summary: 'Интерактивный переключатель типа поля ввода с заменой иконки и поддержкой WAI-ARIA.',
    guide: 'Чтобы написать поле пароля с переключателем из головы: 1) Оберните <input type="password"> и кнопку <button type="button"> в контейнер с position: relative; 2) Задайте полю padding-right: 42px, чтобы вводимый текст не налезал на кнопку; 3) Спопозиционируйте кнопку абсолютно по правому краю; 4) В обработчике клика проверяйте: const isPass = input.type === "password"; input.type = isPass ? "text" : "password"; 5) Обновите текст или иконку кнопки и атрибут aria-label для доступности.',
    functions: [
      'input.type = input.type === "password" ? "text" : "password"',
      'button.setAttribute("aria-label", ...)',
      'position: relative / absolute; right: 8px',
      'input.style.paddingRight = "42px"'
    ],
    topics: [
      { id: 'html-input-text', name: 'HTML: текстовые поля ввода <input>' },
      { id: 'css-positioning', name: 'CSS: позиционирование (relative, absolute)' },
      { id: 'html-aria-accessibility', name: 'HTML: доступность WAI-ARIA' },
      { id: 'js-dom-manipulation', name: 'JS: манипуляция атрибутами DOM' }
    ]
  },

  'recipe-scroll-progress-bar': {
    title: 'Индикатор прогресса чтения статьи в самом верху экрана',
    category: 'recipes',
    summary: 'Тонкая цветная полоса прогресса скролла страницы с расчётом высоты документа в реальном времени.',
    guide: 'Чтобы написать прогресс-бар чтения из головы: 1) В самый верх страницы поместите фиксированную полоску: position: fixed; top: 0; left: 0; height: 3px; background: #facc15; z-index: 9999; 2) В JS по событию скролла вычислите доступную высоту прокрутки: const total = document.documentElement.scrollHeight - document.documentElement.clientHeight; 3) Рассчитайте текущий процент: const percent = (window.scrollY / total) * 100; 4) Примените процент к ширине полоски: bar.style.width = percent + "%;".',
    functions: [
      'window.scrollY',
      'document.documentElement.scrollHeight',
      'document.documentElement.clientHeight',
      'bar.style.width = percent + "%"',
      'position: fixed; top: 0; z-index: 9999'
    ],
    topics: [
      { id: 'js-geometry-scroll', name: 'JS: геометрия страницы и скролл (scrollHeight, scrollY)' },
      { id: 'css-positioning', name: 'CSS: фиксированное позиционирование (position: fixed)' },
      { id: 'js-timers-raf', name: 'JS: оптимизация скролла через requestAnimationFrame' },
      { id: 'css-transitions-animations', name: 'CSS: плавные переходы ширины' }
    ]
  }
};

export function getRecipePrerequisites(recipeId) {
  return RECIPE_KNOWLEDGE_MAP[recipeId] || null;
}
