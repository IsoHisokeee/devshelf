export const standardLibraryTopics = [
  // ==========================================
  // Полный каталог базовых элементов, свойств и функций (HTML / CSS / JS / PHP / XML / Рецепты)
  // ==========================================
  {
    lang: 'html',
    id: 'html-header-footer',
    title: 'HTML: шапка <header> и подвал <footer> страницы и карточки',
    summary: 'Вводная и завершающая области как для всей веб-страницы, так и внутри отдельных карточек <article>.',
    code: `<header class="site-header">
  <a href="/" class="logo">DevShelf</a>
  <nav aria-label="Главное меню">...</nav>
</header>

<article class="post-card">
  <header>
    <h2>Заголовок публикации</h2>
    <time datetime="2026-09-15">15.09.2026</time>
  </header>
  <p>Текст заметки...</p>
  <footer>
    <span>Автор: Павел</span> · <a href="#comments">12 комментариев</a>
  </footer>
</article>`,
    example: `<footer class="site-footer">&copy; 2026 Все права защищены</footer>`,
    points: [
      'Теги <header> и <footer> можно использовать многократно на одной странице: один раз для шапки/подвала всего сайта и внутри каждого <article> или <section>!',
      'Нельзя вкладывать <header> внутрь другого <header> или внутрь <footer>.',
      '<header> верхнего уровня (прямой ребёнок <body>) автоматически получает ориентир role="banner" для скринридеров, а <footer> — role="contentinfo".'
    ],
    tags: ['HTML', 'header', 'footer', 'шапка', 'подвал', 'футер', 'хедер', 'семантика'],
    when: 'Для главной шапки и подвала сайта, а также верхней и нижней плашек карточек и модальных окон.',
    alternatives: 'Не используй <div class="header"> там, где подходит нативный <header>.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/header'
  },
  {
    lang: 'html',
    id: 'html-span-div',
    title: 'HTML: универсальные контейнеры <div> (блочный) и <span> (строчный)',
    summary: 'Нейтральные обёртки без собственной семантики для группировки элементов под CSS-сетки и точечной стилизации слов.',
    code: `<div class="grid-row">
  <div class="col">Левая колонка сетки</div>
  <div class="col">Правая колонка сетки</div>
</div>

<p>
  Статус сервера: <span class="status-online">● Работает штатно</span>
</p>`,
    example: `<span class="accent-text">выделенное цветом слово</span>`,
    points: [
      '<div> — блочный контейнер (занимает всю доступную ширину и начинается с новой строки). Используется для построения сеток, обёрток и декоративных карточек.',
      '<span> — строчный контейнер (живёт внутри строки текста, не разрывая абзац). Используется для раскраски отдельных слов, бейджей и иконок.',
      'Используй <div> и <span> только тогда, когда ни один смысловой тег (<main>, <nav>, <article>, <button>, <strong>, <mark>) не подходит по смыслу.'
    ],
    tags: ['HTML', 'div', 'span', 'контейнер', 'обёртка', 'блочный', 'строчный'],
    when: 'Для технических обёрток Flexbox/Grid и цветовых акцентов внутри текста.',
    alternatives: 'Никогда не вешай клики на <div> или <span> вместо <button> и <a>.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/div'
  },
  {
    lang: 'html',
    id: 'html-br-wbr',
    title: 'HTML: перенос строки <br> и мягкая точка разрыва длинных слов <wbr>',
    summary: 'Принудительный перевод строки в стихах/адресах и подсказка браузеру, где безопасно перенести длинный URL.',
    code: `<p class="address">
  г. Москва,<br>
  ул. Тверская, д. 12, оф. 304
</p>

<!-- Длинный URL аккуратно перенесётся по слэшам на узком экране смартфона -->
<p>
  Документация: https://developer.mozilla.org/<wbr>ru/<wbr>docs/<wbr>Web/<wbr>CSS
</p>`,
    example: `overflow-wrap: break-word; /* CSS-альтернатива для переноса слишком длинных слов */`,
    points: [
      'Используй <br> только там, где разрыв строки является частью самого текста (поэзия, почтовые адреса, подписи).',
      'Никогда не ставь несколько <br><br> подряд для создания отступов между блоками — для этого существует CSS-свойство margin-bottom или gap!',
      'Тег <wbr> (Word Break Opportunity) невидим, пока строка помещается в экран, но указывает браузеру идеальное место для разрыва длинного слова или ссылки.'
    ],
    tags: ['HTML', 'br', 'wbr', 'перенос строки', 'длинное слово', 'разрыв'],
    when: 'В блоках адресов (<br>) и при выводе длинных технических путей, ссылок или хешей (<wbr>).',
    alternatives: 'Для автоматического переноса любых длинных строк без <wbr> задай в CSS свойство overflow-wrap: anywhere;.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/wbr'
  },
  {
    lang: 'html',
    id: 'html-iframe-youtube-map',
    title: 'HTML: адаптивное встраивание карт и видео в <iframe> с aspect-ratio',
    summary: 'Безопасная вставка интерактивных карт и видеороликов с сохранением пропорций 16:9 на любых экранах.',
    code: `<div class="embed-container">
  <iframe
    src="https://www.openstreetmap.org/export/embed.html"
    title="Карта проезда к офису"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    allowfullscreen
  ></iframe>
</div>`,
    example: `.embed-container iframe {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  border: 0;\n  border-radius: 8px;\n}`,
    points: [
      'Вместо устаревших HTML-атрибутов frameborder="0" задавай в CSS border: 0; width: 100%; aspect-ratio: 16 / 9;.',
      'Атрибут loading="lazy" на <iframe> экономит до 500 КБ трафика и ускоряет загрузку страницы, откладывая инициализацию карты до прокрутки.',
      'Всегда указывай осмысленный атрибут title="..." для прохождения проверок Lighthouse и доступности.'
    ],
    tags: ['HTML', 'iframe', 'map', 'video', 'embed', 'карта', 'видео', 'встраивание'],
    when: 'На странице «Контакты» для схемы проезда и в статьях с обучающими видео.',
    alternatives: 'Для статичной схемы проезда можно показать лёгкую картинку карты со ссылкой на открытие навигатора.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/iframe'
  },
  {
    lang: 'html',
    id: 'html-dialog-form-method',
    title: 'HTML: закрытие модального окна через <form method="dialog"> без JS',
    summary: 'Встроенный в HTML механизм автоматического закрытия нативного <dialog> при нажатии на кнопку формы внутри него.',
    code: `<dialog id="confirm-dialog" open>
  <h3>Удалить черновик?</h3>
  <p>Это действие нельзя будет отменить.</p>

  <!-- Форма с method="dialog" автоматически закрывает окно и передаёт value нажатой кнопки! -->
  <form method="dialog" class="dialog-actions">
    <button value="cancel">Отмена</button>
    <button value="delete" class="btn-danger">Удалить</button>
  </form>
</dialog>`,
    example: `dialog.addEventListener('close', () => console.log(dialog.returnValue)); // "delete" или "cancel"`,
    points: [
      'Когда внутри <dialog> находится <form method="dialog">, нажатие на любую кнопку submit закрывает модальное окно без перезагрузки страницы и без единой строчки JS!',
      'Значение атрибута value нажатой кнопки автоматически записывается в свойство dialog.returnValue.',
      'Можно также добавить атрибут formmethod="dialog" и formnovalidate отдельной кнопке «Отмена» внутри обычной POST-формы.'
    ],
    tags: ['HTML', 'dialog', 'method="dialog"', 'returnValue', 'модальное окно', 'подтверждение'],
    when: 'В окнах подтверждения действий («Вы уверены?»), алертах и диалогах выбора.',
    alternatives: 'Для отправки данных на сервер через fetch() перед закрытием используй обычный обработчик submit.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/dialog'
  },
  {
    lang: 'html',
    id: 'html-details-animated',
    title: 'HTML & CSS: плавная анимация раскрытия <details> и ::details-content',
    summary: 'Современная стилизация раскрывающегося блока <details>/<summary> с поворотом иконки и отступами.',
    code: `<details class="custom-spoiler" open>
  <summary>
    <span>Технические требования к серверу</span>
    <span class="spoiler-icon" aria-hidden="true">▾</span>
  </summary>
  <div class="spoiler-body">
    <p>PHP 8.2+, расширение PDO, поддержка HTTPS и 512 МБ оперативной памяти.</p>
  </div>
</details>`,
    example: `details[open] .spoiler-icon {\n  transform: rotate(180deg);\n}`,
    points: [
      'Псевдокласс details[open] позволяет легко повернуть иконку стрелочки на 180 градусов и подсветить рамку при открытом спойлере.',
      'Чтобы убрать стандартный системный треугольник браузера, задай summary { list-style: none; } и summary::-webkit-details-marker { display: none; }.',
      'В новых браузерах псевдоэлемент details::details-content позволяет плавно анимировать высоту раскрытия на чистом CSS!'
    ],
    tags: ['HTML', 'details', 'summary', 'spoiler', 'open', 'спойлер', 'раскрытие', 'гармошка'],
    when: 'Для скрытия длинных логов, дополнительных параметров фильтра и ответов в FAQ.',
    alternatives: 'Кастомный спойлер на JS оправдан только если требуется сложная синхронизация с внешним стейтом.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/summary'
  },

  // ==========================================
  // Дополнительные справочники CSS3 (Типографика, Сетки, Эффекты)
  // ==========================================
  {
    lang: 'css',
    id: 'css-line-height-letter-spacing',
    title: 'CSS: ритм текста (line-height, letter-spacing, max-width: 65ch)',
    summary: 'Профессиональные пропорции межстрочного интервала и межбуквенного расстояния для заголовков и основного текста.',
    code: `body {
  font-size: 16px;
  line-height: 1.6;        /* Безразмерный множитель (1.5–1.65) для комфортного чтения абзацев */
  letter-spacing: -0.01em;
}

h1, h2, h3 {
  line-height: 1.18;       /* У крупных заголовков межстрочный интервал всегда плотнее! */
  letter-spacing: -0.025em;/* Лёгкая отрицательная разрядка собирает крупный заголовок */
}

.uppercase-badge {
  text-transform: uppercase;
  letter-spacing: 0.06em;  /* У КАПСА разрядку наоборот всегда увеличивают! */
}`,
    example: `/* Всегда задавай line-height без единиц измерения (1.5, а не 24px), чтобы он масштабировался от шрифта */`,
    points: [
      'Золотое правило типографики: чем крупнее шрифт (заголовки h1), тем меньше line-height (1.1–1.25) и плотнее letter-spacing (-0.02em ... -0.03em).',
      'И наоборот: у мелкого текста, набранного ЗАГЛАВНЫМИ БУКВАМИ (uppercase), обязательно раздвигай буквы в плюс (letter-spacing: 0.05em–0.08em), иначе они слипнутся!',
      'Задавай line-height безразмерным числом (1.6), а не в px или %, чтобы дочерние элементы корректно наследовали пропорцию.'
    ],
    tags: ['CSS', 'line-height', 'letter-spacing', 'uppercase', 'типографика', 'межстрочный интервал', 'кернинг'],
    when: 'В базовой таблице стилей любого сайта для настройки заголовков, статей и бейджей.',
    alternatives: 'Стандартный браузерный line-height: normal (~1.2) слишком тесен для чтения длинных статей.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/line-height'
  },
  {
    lang: 'css',
    id: 'css-white-space-word-break',
    title: 'CSS: управление переносами строк (white-space, overflow-wrap, hyphens)',
    summary: 'Запрет разрыва цен и кнопок на две строки (nowrap) и защита карточек от распирания длинными ссылками.',
    code: `/* Кнопки, бейджи и цены с символом рубля никогда не разрываются на две строки */
.btn, .price-tag {
  white-space: nowrap;
}

/* Длинные токены, URL и слова без пробелов аккуратно переносятся внутри карточки */
.comment-text {
  overflow-wrap: break-word;
  word-break: break-word;
}

/* Блок кода сохраняет все отступы и переносы строк из исходника */
pre code {
  white-space: pre;
}`,
    example: `white-space: pre-wrap; /* Сохраняет переносы строк \n из textarea, но переносит длинные строки по ширине блока! */`,
    points: [
      'white-space: nowrap запрещает перенос текста на новую строку — обязательно используй его на кнопках, табах и ценах («1 490 ₽»).',
      'white-space: pre-wrap незаменим при выводе текста комментария или описания из <textarea>: он сохраняет абзацы пользователя (\n), не создавая горизонтального скролла!',
      'overflow-wrap: anywhere гарантирует, что длинная ссылка в узкой колонке грида перенесётся, а не раздует всю сетку.'
    ],
    tags: ['CSS', 'white-space', 'nowrap', 'pre-wrap', 'overflow-wrap', 'word-break', 'перенос текста'],
    when: 'Для кнопок и цен (nowrap), вывода пользовательских сообщений (pre-wrap) и защиты узких карточек (overflow-wrap).',
    alternatives: 'Для неразрывного пробела между числом и знаком валюты в HTML также можно использовать символ &nbsp;.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/white-space'
  },
  {
    lang: 'css',
    id: 'css-grid-auto-flow-dense',
    title: 'CSS: плотная упаковка сетки (grid-auto-flow: dense) и span ячеек',
    summary: 'Построение бенто-сеток (Bento Grid) с карточками разного размера (2×1, 2×2) и автоматическим заполнением пустот.',
    code: `.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-auto-rows: 180px;
  grid-auto-flow: dense; /* Автоматически подтягивает маленькие карточки в пустые дырки сетки! */
  gap: 16px;
}

.card-wide {
  grid-column: span 2;   /* Занимает 2 колонки по ширине */
}

.card-tall {
  grid-row: span 2;      /* Занимает 2 ряда по высоте */
}`,
    example: `@media (max-width: 600px) {\n  .card-wide { grid-column: span 1; }\n}`,
    points: [
      'Ключевое слово span 2 в grid-column или grid-row растягивает карточку на две соседние ячейки без жёсткой привязки к номерам линий.',
      'Свойство grid-auto-flow: dense разрешает браузеру переставить следующую маленькую карточку (1×1) наверх, если перед широкой карточкой (2×1) осталась свободная ячейка!',
      'На мобильных экранах (где всего 1 колонка) не забудь сбросить .card-wide { grid-column: span 1; }, чтобы сетка не создала вторую скрытую колонку.'
    ],
    tags: ['CSS', 'grid-auto-flow', 'dense', 'bento grid', 'grid-column', 'grid-row', 'span', 'бенто сетка'],
    when: 'При верстке современных продуктовых витрин в стиле Bento Grid, дашбордов и фотогалерей.',
    alternatives: 'Без dense перед крупной карточкой может остаться пустая дырка в конце строки.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-auto-flow'
  },
  {
    lang: 'css',
    id: 'css-cursor-caret-scroll',
    title: 'CSS: стилизация курсора ввода (caret-color), выделения и скролла',
    summary: 'Детали полировки интерфейса: фирменный цвет мигающего курсора в инпутах и плавная прокрутка.',
    code: `input, textarea, [contenteditable] {
  caret-color: #38bdf8; /* Цвет мигающей вертикальной палочки курсора при наборе текста */
}

button:disabled,
input:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.draggable-handle {
  cursor: grab;
}
.draggable-handle:active {
  cursor: grabbing;
}`,
    example: `cursor: pointer;`,
    points: [
      'Свойство caret-color перекрашивает мигающий текстовый курсор внутри инпутов и редакторов кода под акцентный цвет бренда.',
      'Для перетаскиваемых карточек используй пару курсоров cursor: grab в покое и cursor: grabbing при зажатой кнопке мыши (:active).',
      'На заблокированных кнопках (:disabled) ставь cursor: not-allowed для понятной обратной связи.'
    ],
    tags: ['CSS', 'caret-color', 'cursor', 'grab', 'not-allowed', 'курсор', 'инпут'],
    when: 'При тонкой настройке полей ввода, редакторов кода и drag-and-drop списков.',
    alternatives: 'Не ставь cursor: pointer на некликабельные карточки — это вводит пользователя в заблуждение.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/caret-color'
  },

  // ==========================================
  // Дополнительные справочники JavaScript (Таймеры, JSON, Storage, Геолокация)
  // ==========================================
  {
    lang: 'javascript',
    id: 'js-json-parse-stringify',
    title: 'JS: безопасная сериализация JSON (JSON.stringify, JSON.parse и форматирование)',
    summary: 'Преобразование объектов в строку с отступами для красивого вывода и безопасный парсинг без падения скрипта.',
    code: `const settings = { theme: 'dark', fontSize: 14, tags: ['html', 'css'] };

// Красивый вывод JSON с отступами в 2 пробела (третий аргумент = 2)
const prettyJson = JSON.stringify(settings, null, 2);

// Безопасная функция парсинга с фолбэком при битой строке
function safeJsonParse(str, fallback = null) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}`,
    example: `const data = safeJsonParse(localStorage.getItem('cart'), []);`,
    points: [
      'Вызов JSON.parse() на пустой или повреждённой строке выбрасывает синхронную ошибку SyntaxError и роняет весь скрипт — ВСЕГДА оборачивай чтение из localStorage в try/catch!',
      'Третий параметр в JSON.stringify(data, null, 2) форматирует JSON с переносами строк и отступами в 2 пробела (идеально для вывода в <pre> или скачивания файла).',
      'Помни, что JSON не сохраняет функции, undefined, Map/Set, а объекты Date превращает в строки ISO.'
    ],
    tags: ['JavaScript', 'JSON', 'JSON.parse', 'JSON.stringify', 'try', 'catch', 'сериализация'],
    when: 'При сохранении данных в localStorage, отправке тела fetch-запросов и экспорте настроек в файл.',
    alternatives: 'Для глубокого клонирования объекта в памяти используй быстрый structuredClone(obj) вместо JSON.parse(JSON.stringify(obj)).',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify'
  },
  {
    lang: 'javascript',
    id: 'js-timers-raf',
    title: 'JS: таймеры (setTimeout, setInterval, clearInterval) и requestAnimationFrame',
    summary: 'Отложенный запуск действий, периодическое обновление секундомера и плавная анимация с частотой монитора.',
    code: `// 1. Однократный запуск через 2 секунды с возможностью отмены
const timeoutId = setTimeout(() => {
  hideNotification();
}, 2000);
// clearTimeout(timeoutId); // если нужно отменить до срабатывания

// 2. Плавный цикл отрисовки строго под герцовку экрана (60/120/144 Гц)
function animateProgress(startTime) {
  const elapsed = performance.now() - startTime;
  const progress = Math.min(elapsed / 1000, 1); // от 0 до 1 за 1 секунду
  progressBar.style.transform = \`scaleX(\${progress})\`;

  if (progress < 1) {
    requestAnimationFrame(() => animateProgress(startTime));
  }
}
requestAnimationFrame(() => animateProgress(performance.now()));`,
    example: `const intervalId = setInterval(tick, 1000);\nclearInterval(intervalId);`,
    points: [
      'Всегда сохраняй ID, возвращаемый setInterval() и setTimeout(), чтобы очищать таймер через clearInterval(id) при закрытии окна или уходе со страницы (защита от утечек памяти)!',
      'Для любых визуальных анимаций и перетаскивания используй requestAnimationFrame() вместо setInterval(..., 16) — он синхронизируется с обновлением экрана и автоматически встаёт на паузу в фоновой вкладке.',
      'Для точного замера времени выполнения используй performance.now() вместо Date.now().'
    ],
    tags: ['JavaScript', 'setTimeout', 'setInterval', 'clearTimeout', 'requestAnimationFrame', 'performance', 'таймер'],
    when: 'Для автоскрытия тостов (setTimeout), обратного отсчёта (setInterval) и плавной графики (requestAnimationFrame).',
    alternatives: 'Для периодического опроса сервера лучше использовать рекурсивный setTimeout после завершения await fetch(), чтобы запросы не накладывались друг на друга при медленной сети!',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Window/requestAnimationFrame'
  },
  {
    lang: 'javascript',
    id: 'js-download-blob-file',
    title: 'JS: генерация и скачивание файла прямо в браузере (Blob + URL.createObjectURL)',
    summary: 'Экспорт сгенерированного кода, JSON-бэкапа или CSV-таблицы на диск пользователя в один клик без участия сервера.',
    code: `function downloadFile(filename, content, mimeType = 'text/plain;charset=utf-8') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();

  // Очищаем временную ссылку и освобождаем память!
  link.remove();
  URL.revokeObjectURL(url);
}

// Пример: скачать готовый HTML-шаблон
downloadFile('index.html', '<!doctype html><h1>Привет!</h1>', 'text/html;charset=utf-8');`,
    example: `downloadFile('backup.json', JSON.stringify(data, null, 2), 'application/json');`,
    points: [
      'Конструктор new Blob([content], { type }) создаёт виртуальный файл в оперативной памяти браузера из любой строки или массива байт.',
      'После вызова link.click() обязательно вызывай URL.revokeObjectURL(url), чтобы освободить выделенную под Blob память браузера!',
      'Для корректного открытия русских CSV-таблиц в Microsoft Excel добавь в начало строки UTF-8 BOM-маркер: new Blob(["\\uFEFF" + csvText], { type: "text/csv;charset=utf-8" }).'
    ],
    tags: ['JavaScript', 'Blob', 'createObjectURL', 'revokeObjectURL', 'download', 'скачать файл', 'экспорт', 'csv'],
    when: 'В генераторах кода, песочницах, экспорте настроек в JSON и выгрузке отчётов в CSV.',
    alternatives: 'Не требует отправки данных на сервер и работает даже полностью офлайн.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Blob'
  },
  {
    lang: 'javascript',
    id: 'js-drag-and-drop-files',
    title: 'JS: зона перетаскивания файлов мышью (Drag & Drop: dragover, drop)',
    summary: 'Обработка перетаскивания файлов из проводника в окно браузера с подсветкой рамки и чтением e.dataTransfer.files.',
    code: `const dropZone = document.getElementById('drop-zone');

// Обязательно вызываем e.preventDefault() в dragover, иначе браузер просто откроет картинку во вкладке!
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('is-dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('is-dragover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('is-dragover');

  const files = Array.from(e.dataTransfer.files);
  console.log('Перетащили файлов:', files.length);
});`,
    example: `.drop-zone.is-dragover { border-color: #38bdf8; background: rgba(56, 189, 248, 0.08); }`,
    points: [
      'Главный секрет Drag & Drop API: чтобы событие drop вообще сработало и браузер не открыл перетащенную картинку вместо сайта, ОБЯЗАТЕЛЬНО вызывай e.preventDefault() и в dragover, и в drop!',
      'Список перетащенных файлов находится в объекте e.dataTransfer.files (имеет точно такой же формат FileList, как и у обычного <input type="file">).',
      'Для доступности всегда помещай внутрь зоны перетаскивания обычный <input type="file">, чтобы файл можно было выбрать и стандартным кликом.'
    ],
    tags: ['JavaScript', 'drag and drop', 'dragover', 'drop', 'dataTransfer', 'files', 'перетаскивание', 'загрузка'],
    when: 'В загрузчиках изображений, документов, импорте JSON-бэкапов и облачных хранилищах.',
    alternatives: 'Обычный <label> вокруг <input type="file"> также поддерживает нативное перетаскивание файла прямо на инпут в ряде браузеров.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop'
  },
  {
    lang: 'javascript',
    id: 'js-intersection-lazy-toc',
    title: 'JS: чтение и запись CSS-переменных (setProperty / getComputedStyle)',
    summary: 'Динамическая передача координат курсора, скролла или цветовой палитры из JavaScript напрямую в CSS-переменные.',
    code: `const root = document.documentElement;

// 1. Запись нового значения в CSS-переменную --accent
root.style.setProperty('--accent', '#10b981');

// 2. Эффект подсветки карточки за курсором мыши (Spotlight Card)
card.addEventListener('pointermove', (e) => {
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mouse-x', \`\${e.clientX - rect.left}px\`);
  card.style.setProperty('--mouse-y', \`\${e.clientY - rect.top}px\`);
});

// 3. Чтение актуального значения переменной из CSS
const currentBg = getComputedStyle(root).getPropertyValue('--bg').trim();`,
    example: `.card { background: radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(56,189,248,0.12), transparent); }`,
    points: [
      'Вместо того чтобы менять десятки инлайновых стилей из JS, измени одну CSS-переменную через element.style.setProperty("--val", x) — и все зависящие от неё правила перестроятся сами!',
      'Паттерн передачи --mouse-x и --mouse-y позволяет делать эффектные радиальные блики на карточках в 5 строчек кода.',
      'Метод style.removeProperty("--accent") сбрасывает переменную обратно к значению из таблицы стилей.'
    ],
    tags: ['JavaScript', 'setProperty', 'getComputedStyle', 'getPropertyValue', 'CSS variables', 'переменные', 'spotlight'],
    when: 'В визуальных генераторах, редакторах тем оформления, параллаксах и интерактивных карточках.',
    alternatives: 'Для простого переключения фиксированных состояний лучше использовать classList.toggle() вместо инлайновых переменных.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/CSSStyleDeclaration/setProperty'
  },

  // ==========================================
  // Дополнительные справочники PHP 8.x, Рецепты и Инструменты
  // ==========================================
  {
    lang: 'php',
    id: 'php-date-intl-formatting',
    title: 'PHP 8: форматирование дат, таймзоны и склонение слов (numfmt / plural)',
    summary: 'Работа с московским временем, форматами дат и правильное русское склонение числительных («1 товар, 2 товара, 5 товаров»).',
    code: `<?php
declare(strict_types=1);

// Универсальная функция склонения существительных после числа на русском языке
function pluralRu(int $number, array $forms): string {
    // $forms = ['товар', 'товара', 'товаров']
    $n = abs($number) % 100;
    $n1 = $n % 10;
    if ($n > 10 && $n < 20) return "$number {$forms[2]}";
    if ($n1 > 1 && $n1 < 5) return "$number {$forms[1]}";
    if ($n1 === 1)          return "$number {$forms[0]}";
    return "$number {$forms[2]}";
}

echo pluralRu(1, ['статья', 'статьи', 'статей']);  // "1 статья"
echo pluralRu(4, ['статья', 'статьи', 'статей']);  // "4 статьи"
echo pluralRu(12, ['статья', 'статьи', 'статей']); // "12 статей"`,
    example: `date_default_timezone_set('Europe/Moscow');`,
    points: [
      'В русском языке три формы множественного числа: для 1 (статья), для 2–4 (статьи) и для 5–20 (статей). Функция pluralRu() решает эту задачу в 8 строк.',
      'В базе данных время лучше хранить в UTC (или TIMESTAMP), а переводить в часовой пояс пользователя при выводе через DateTimeImmutable::setTimezone().',
      'Для форматирования цен с пробелами-разделителями тысяч в PHP используй number_format($price, 0, ",", " ") . " ₽" (например: "14 990 ₽").'
    ],
    tags: ['PHP', 'plural', 'number_format', 'date', 'timezone', 'склонение', 'валюта', 'числа'],
    when: 'При выводе количества товаров в корзине, просмотров статьи, комментариев и цен в рублях.',
    alternatives: 'Если на хостинге установлено расширение PHP intl, можно также использовать класс MessageFormatter.',
    url: 'https://www.php.net/manual/ru/function.number-format.php'
  },
  {
    lang: 'php',
    id: 'php-superglobals-server-url',
    title: 'PHP 8: суперглобальный массив $_SERVER, определение HTTPS, IP и роутинг',
    summary: 'Чтение текущего пути URI без GET-параметров, метода запроса (GET/POST), заголовка Authorization и HTTPS.',
    code: `<?php
declare(strict_types=1);

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
// Чистый путь без GET-параметров (например, "/catalog/items" из "/catalog/items?page=2")
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

// Надёжная проверка HTTPS (включая работу за обратным прокси Nginx / Cloudflare)
$isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
        || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');

// Простой роутер на выражении match из PHP 8
match ([$method, $path]) {
    ['GET',  '/']          => renderHome(),
    ['GET',  '/api/items'] => sendJsonItems(),
    ['POST', '/api/items'] => createItem(),
    default                => sendNotFound(),
};`,
    example: `$bearerToken = $_SERVER['HTTP_AUTHORIZATION'] ?? '';`,
    points: [
      'Функция parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH) отрезает строку ?page=2&sort=asc, оставляя чистый маршрут для роутера.',
      'На хостингах с связкой Nginx + Apache (и за Cloudflare) HTTPS часто передаётся в заголовке $_SERVER["HTTP_X_FORWARDED_PROTO"] === "https".',
      'Все клиентские HTTP-заголовки в PHP попадают в $_SERVER с префиксом HTTP_ в верхнем регистре (например, X-Api-Key становится $_SERVER["HTTP_X_API_KEY"]).'
    ],
    tags: ['PHP', 'SERVER', 'REQUEST_URI', 'REQUEST_METHOD', 'parse_url', 'router', 'https', 'роутер'],
    when: 'Во входном файле index.php при написании микрофреймворков, REST API и обработчиков вебхуков.',
    alternatives: 'Никогда не используй $_SERVER["PHP_SELF"] без экранирования в атрибуте action формы из-за риска XSS.',
    url: 'https://www.php.net/manual/ru/reserved.variables.server.php'
  },
  {
    lang: 'recipes',
    id: 'recipe-sticky-header-scroll',
    title: 'Рецепт: Шапка сайта с эффектом стекла и тенью при начале прокрутки',
    summary: 'Добавление компактности и нижней границы фиксированной шапке в момент, когда пользователь начал скроллить страницу.',
    code: `<header class="site-header" id="header">
  <div class="header-inner">DevShelf</div>
</header>

<script>
const header = document.getElementById('header');

// Пассивный слушатель scroll не блокирует плавность прокрутки на смартфонах!
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}, { passive: true });
</script>`,
    example: `.site-header.is-scrolled {\n  background: rgba(9, 13, 20, 0.88);\n  backdrop-filter: blur(12px);\n  border-bottom-color: rgba(255, 255, 255, 0.12);\n}`,
    points: [
      'Опция { passive: true } в addEventListener("scroll", ...) сообщает браузеру, что внутри обработчика не будет вызываться preventDefault(), поэтому браузер может крутить страницу в отдельном потоке с идеальными 120 FPS!',
      'Метод classList.toggle("is-scrolled", window.scrollY > 12) лаконично включает класс при прокрутке ниже 12px и снимает при возврате наверх.',
      'В состоянии покоя наверху шапка может быть полностью прозрачной, а при скролле обретать матовый фон backdrop-filter: blur(12px).'
    ],
    tags: ['рецепт', 'sticky header', 'scroll', 'passive', 'шапка', 'скролл', 'навбар'],
    when: 'На лендингах, корпоративных сайтах и в документации с фиксированной верхней панелью.',
    alternatives: 'Можно также использовать IntersectionObserver с пустым 1px-элементом на самом верху страницы.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener'
  },
  {
    lang: 'recipes',
    id: 'recipe-skeleton-loader',
    title: 'Рецепт: Анимированный скелетон загрузки карточек (Skeleton Shimmer)',
    summary: 'Плавный блик загрузки на месте будущих карточек и текста, избавляющий от дёргающихся спиннеров и скачков верстки.',
    code: `<div class="skeleton-card" aria-busy="true" aria-label="Загрузка карточки">
  <div class="skeleton skeleton-thumb"></div>
  <div class="skeleton skeleton-title"></div>
  <div class="skeleton skeleton-text"></div>
</div>

<style>
.skeleton {
  background: linear-gradient(90deg, #121827 25%, #1e293b 50%, #121827 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 6px;
}
.skeleton-thumb { height: 140px; margin-bottom: 12px; }
.skeleton-title { height: 20px; width: 70%; margin-bottom: 8px; }
.skeleton-text  { height: 14px; width: 90%; }

@keyframes shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}
</style>`,
    example: `/* Атрибут aria-busy="true" сообщает скринридеру, что блок находится в процессе подгрузки */`,
    points: [
      'Скелетон повторяет точную высоту будущей карточки, поэтому после прихода ответа от fetch() контент встаёт на место без единого скачка страницы.',
      'Увеличение background-size: 200% 100% и сдвиг background-position от 200% к -200% создают иллюзию бегущего светового блика.',
      'Атрибут aria-busy="true" на контейнере временно скрывает пустые блоки-заглушки от чтения скринридером до загрузки реальных данных.'
    ],
    tags: ['рецепт', 'skeleton', 'shimmer', 'loader', 'загрузка', 'скелетон', 'анимация'],
    when: 'При асинхронной подгрузке каталога товаров, профиля пользователя, ленты новостей и аналитики.',
    alternatives: 'Для быстрых операций быстрее 150 мс скелетон лучше не мигать, чтобы не создавать лишнего мелькания.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy'
  },
  {
    lang: 'recipes',
    id: 'recipe-password-toggle',
    title: 'Рецепт: Поле пароля с кнопкой «Показать / скрыть пароль» (глазок)',
    summary: 'Удобное переключение типа поля между password и text с сохранением фокуса и правильными ARIA-атрибутами.',
    code: `<div class="password-field">
  <input type="password" id="pass-input" placeholder="Введите пароль" autocomplete="current-password">
  <button type="button" id="pass-toggle" aria-label="Показать пароль" aria-pressed="false">
    Показать
  </button>
</div>

<script>
const input = document.getElementById('pass-input');
const toggle = document.getElementById('pass-toggle');

toggle.addEventListener('click', () => {
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  toggle.textContent = isHidden ? 'Скрыть' : 'Показать';
  toggle.setAttribute('aria-pressed', String(isHidden));
  input.focus();
});
</script>`,
    example: `.password-field { display: flex; align-items: center; border: 1px solid var(--line); border-radius: 6px; }`,
    points: [
      'Переключение свойства input.type = "text" / "password" мгновенно раскрывает или маскирует введённые символы точками.',
      'Обязательно ставь кнопке переключения type="button", иначе клик по «глазку» внутри формы отправит саму форму!',
      'Вызов input.focus() после клика возвращает курсор обратно в поле, чтобы пользователь мог сразу продолжить печатать.'
    ],
    tags: ['рецепт', 'password', 'пароль', 'показать пароль', 'глазок', 'форма', 'авторизация'],
    when: 'Во всех формах входа, регистрации и смены пароля для снижения числа опечаток со смартфона.',
    alternatives: 'В браузерах Edge есть встроенный системный значок глаза, который можно скрыть через input::-ms-reveal { display: none; }, чтобы он не дублировал твою кнопку.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/password'
  },
  {
    lang: 'recipes',
    id: 'recipe-scroll-progress-bar',
    title: 'Рецепт: Индикатор прогресса чтения статьи в самом верху экрана',
    summary: 'Тонкая акцентная полоска над шапкой сайта, плавно заполняющаяся от 0% до 100% по мере прокрутки длинной статьи.',
    code: `<div id="reading-progress" class="reading-progress" aria-hidden="true"></div>

<style>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #38bdf8, #818cf8);
  transform-origin: left;
  transform: scaleX(0);
  z-index: 200;
}
</style>

<script>
const bar = document.getElementById('reading-progress');
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  bar.style.transform = \`scaleX(\${Math.min(Math.max(ratio, 0), 1)})\`;
}, { passive: true });
</script>`,
    example: `/* Используем transform: scaleX(...) вместо изменения width для идеальной плавности на GPU! */`,
    points: [
      'Полная доступная высота прокрутки страницы вычисляется как documentElement.scrollHeight минус высота видимого окна window.innerHeight.',
      'Анимация ширины через transform: scaleX(ratio) с transform-origin: left работает на видеокарте без пересчёта геометрии (в отличие от изменения width: 54%).',
      'В новейших браузерах такой прогресс-бар можно сделать даже без JS через CSS animation-timeline: scroll()!'
    ],
    tags: ['рецепт', 'прогресс чтения', 'scroll progress', 'скролл', 'статья', 'индикатор'],
    when: 'В блогах, длинных руководствах документации и лонгридах.',
    alternatives: 'CSS Scroll-Driven Animations (animation-timeline: scroll(root)) поддерживаются в современных Chromium-браузерах.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline'
  }
];
