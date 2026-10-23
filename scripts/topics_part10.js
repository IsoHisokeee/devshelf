export const coreElementsAndFunctions = [
  // ==========================================
  // Быстрый справочник тегов HTML5, свойств CSS3, методов JS и функций PHP 8 (Часть 10)
  // ==========================================
  {
    lang: 'html',
    id: 'html-form-input-search',
    title: 'HTML: поле поиска <input type="search"> и очистка крестиком',
    summary: 'Специализированное текстовое поле для поисковых строк с системной кнопкой быстрой очистки и клавишей Enter.',
    code: `<search>
  <form role="search" action="/search">
    <label for="site-q" class="sr-only">Поиск по справочнику</label>
    <input
      type="search"
      id="site-q"
      name="q"
      placeholder="Например: flexbox, dialog, fetch..."
      autocomplete="off"
      spellcheck="false"
    >
  </form>
</search>`,
    example: `input[type="search"]::-webkit-search-cancel-button { cursor: pointer; }`,
    points: [
      'В отличие от обычного type="text", поле type="search" на мобильных клавиатурах меняет кнопку «Ввод» на синюю кнопку с лупой «Найти».',
      'В браузерах на базе Chromium и Safari внутри поля автоматически появляется крестик сброса введённого текста.',
      'Событие input срабатывает как при печати с клавиатуры, так и при нажатии на встроенный крестик очистки!'
    ],
    tags: ['HTML', 'input', 'search', 'поиск', 'крестик', 'форма'],
    when: 'Для главной строки поиска в шапке сайта, фильтрации таблиц и командных палитр.',
    alternatives: 'Если рисуешь собственную кастомную кнопку очистки <button class="clear">, скройте системный крестик через ::-webkit-search-cancel-button { display: none; }.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/search'
  },
  {
    lang: 'html',
    id: 'html-input-checkbox-indeterminate',
    title: 'HTML & JS: чекбокс «Выбрать все» и третье состояние (indeterminate)',
    summary: 'Реализация главного чекбокса таблицы с состоянием «выбрана часть строк» (тире внутри квадратика).',
    code: `<label>
  <input type="checkbox" id="select-all"> Выбрать все элементы
</label>

<script>
const master = document.getElementById('select-all');
// Третье визуальное состояние чекбокса (частичный выбор — задаётся только через JS!)
master.indeterminate = true;
</script>`,
    example: `input:indeterminate {\n  accent-color: #38bdf8;\n}`,
    points: [
      'У нативного <input type="checkbox"> кроме checked = true/false есть третье визуальное состояние: checkbox.indeterminate = true (отображается как горизонтальное тире внутри чекбокса)!',
      'Это состояние задаётся только через JavaScript, когда в группе выбран хотя бы один дочерний чекбокс, но не все.',
      'В CSS такое состояние можно стилизовать через псевдокласс input:indeterminate.'
    ],
    tags: ['HTML', 'checkbox', 'indeterminate', 'checked', 'выбрать все', 'чекбокс', 'таблица'],
    when: 'В таблицах админ-панелей, корзине товаров и древовидных фильтрах категорий.',
    alternatives: 'Не нужно рисовать кастомные SVG-иконки для состояния частичного выбора — браузер рисует его нативно.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/checkbox'
  },
  {
    lang: 'html',
    id: 'html-ol-attributes',
    title: 'HTML: атрибуты нумерованного списка <ol> (start, reversed, type) и <li value>',
    summary: 'Продолжение нумерации списка после прерывания картинкой и обратный отсчёт рейтингов Топ-10.',
    code: `<!-- Обратный отсчёт рейтинга: 3, 2, 1 -->
<ol reversed start="3">
  <li>Третье место</li>
  <li>Второе место</li>
  <li>Первое место</li>
</ol>

<!-- Римская или буквенная нумерация (type="I" / "A" / "a") -->
<ol type="I">
  <li>Глава первая</li>
  <li value="5">Глава пятая (перескок номера)</li>
</ol>`,
    example: `<ol start="11"> /* Продолжить список с 11-го пункта после врезки кода */`,
    points: [
      'Если между пунктами инструкции вставлена широкая иллюстрация или таблица, второй список <ol start="4"> аккуратно продолжит счёт с 4-го шага!',
      'Атрибут reversed автоматически ведёт обратный отсчёт номеров сверху вниз (10, 9, 8... 1) для хит-парадов и рейтингов.',
      'Атрибут value="10" на отдельном теге <li> позволяет принудительно задать номер конкретному пункту.'
    ],
    tags: ['HTML', 'ol', 'li', 'start', 'reversed', 'type', 'нумерованный список', 'рейтинг'],
    when: 'В пошаговых руководствах, юридических договорах и рейтингах.',
    alternatives: 'Для сложной вложенной нумерации вида 1.1, 1.2 используй CSS-счётчики counters(item, ".").',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/ol'
  },
  {
    lang: 'html',
    id: 'html-audio-video-track-vtt',
    title: 'HTML: субтитры и таймкоды глав для видео (<track kind="captions" src="subs.vtt">)',
    summary: 'Подключение файла субтитров в формате WebVTT к видеоплееру для доступности и переключения языков.',
    code: `<video controls src="/video/lesson.mp4">
  <track kind="subtitles" src="/video/ru.vtt" srclang="ru" label="Русский" default>
  <track kind="subtitles" src="/video/en.vtt" srclang="en" label="English">
  <track kind="chapters" src="/video/chapters.vtt" srclang="ru">
</video>

<!-- Пример содержимого текстового файла ru.vtt:
WEBVTT

00:00:01.000 --> 00:00:05.000
Добро пожаловать в интерактивный справочник DevShelf!
-->`,
    example: `video::cue {\n  background: rgba(9, 13, 20, 0.85);\n  color: #f8fafc;\n}`,
    points: [
      'Формат WebVTT (.vtt) — это простой текстовый файл, начинающийся со слова WEBVTT и содержащий таймкоды и фразы.',
      'Псевдоэлемент video::cue в CSS позволяет настроить шрифт, цвет и полупрозрачную подложку субтитров прямо поверх видео!',
      'Атрибут default включает выбранную дорожку субтитров автоматически при запуске плеера.'
    ],
    tags: ['HTML', 'track', 'vtt', 'webvtt', 'subtitles', 'captions', 'cue', 'субтитры', 'видео'],
    when: 'Во всех обучающих видеороликах, вебинарах и презентациях продуктов.',
    alternatives: 'Вшитые в сам видеофайл (hardcoded) субтитры нельзя отключить, скопировать или перевести.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/track'
  },
  {
    lang: 'html',
    id: 'html-aria-roles-landmarks',
    title: 'HTML & ARIA: ориентиры страницы (Landmarks) и роли компонентов (role)',
    summary: 'Карта соответствия нативных HTML5-тегов и ролей WAI-ARIA для быстрой навигации незрячих пользователей.',
    code: `<!-- Нативные теги уже имеют встроенные ARIA-роли по умолчанию: -->
<header>  <!-- role="banner" --> </header>
<nav>     <!-- role="navigation" --> </nav>
<main>    <!-- role="main" --> </main>
<aside>   <!-- role="complementary" --> </aside>
<footer>  <!-- role="contentinfo" --> </footer>

<!-- Явные роли для специализированных динамических виджетов: -->
<div role="alert">Ошибка соединения с сервером!</div>
<div role="tablist" aria-label="Режимы редактора">...</div>`,
    example: `/* Не пиши <nav role="navigation"> — это избыточное дублирование! */`,
    points: [
      'Скринридеры позволяют пользователю одним нажатием горячей клавиши перемещаться по ориентирам страницы (шапка -> поиск -> меню -> главный контент -> подвал).',
      'Не дублируй встроенную роль на нативном теге (не нужно писать <main role="main"> или <button role="button">).',
      'Роль role="alert" предназначена для срочных ошибок: она немедленно озвучивается скринридером при появлении в DOM.'
    ],
    tags: ['HTML', 'ARIA', 'role', 'landmarks', 'alert', 'tablist', 'banner', 'доступность'],
    when: 'При проектировании доступных веб-приложений, табов, уведомлений и диалогов.',
    alternatives: 'Всегда отдавай приоритет семантическим тегам HTML5 перед ручным назначением role на <div>.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles'
  },

  // ==========================================
  // Дополнительные карточки CSS3
  // ==========================================
  {
    lang: 'css',
    id: 'css-background-clip-text-stroke',
    title: 'CSS: контурный и градиентный текст (-webkit-text-stroke и background-clip: text)',
    summary: 'Создание выразительных акцентных заголовков с градиентной заливкой или тонкой векторной обводкой букв.',
    code: `/* 1. Заголовок с заливкой линейным градиентом */
.text-gradient {
  background: linear-gradient(135deg, #f8fafc 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* 2. Полый контурный текст (Outline Text) для крупных фоновых цифр */
.text-outline {
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.25);
}`,
    example: `.step-number { font-size: 64px; -webkit-text-stroke: 1px var(--accent); color: transparent; }`,
    points: [
      'При использовании background-clip: text цвет самого текста задают прозрачным (color: transparent), чтобы сквозь контуры букв проступил фоновый градиент.',
      'Свойство -webkit-text-stroke поддерживается во всех современных браузерах (Chrome, Safari, Firefox, Edge) и отлично подходит для крупных фоновых номеров секций (01, 02, 03).',
      'Следи, чтобы блок с background-clip: text имел display: inline-block, если градиент должен растягиваться ровно по ширине слова, а не всей строки.'
    ],
    tags: ['CSS', 'background-clip', 'text-stroke', 'gradient text', 'outline text', 'градиентный текст', 'обводка текста'],
    when: 'Для главных заголовков на лендингах и крупных декоративных цифр шагов.',
    alternatives: 'Для сложных многослойных контуров с тенями лучше использовать инлайновый <svg><text>.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/background-clip'
  },
  {
    lang: 'css',
    id: 'css-shape-outside-float',
    title: 'CSS: фигурное обтекание иллюстраций текстом (shape-outside: circle())',
    summary: 'Журнальная верстка статей, в которой строки абзаца плавно огибают круглый аватар автора по дуге.',
    code: `.author-avatar-float {
  float: left;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 20px;
  margin-bottom: 12px;
  /* Текст статьи огибает аватар по кругу, а не по квадратной коробке! */
  shape-outside: circle(50%);
}`,
    example: `shape-outside: polygon(0 0, 100% 0, 60% 100%, 0 100%);`,
    points: [
      'Сегодня свойство float больше не используется для сеток колонок (там царят Flex и Grid), но float остаётся единственным инструментом для обтекания картинки живым текстом внутри статьи!',
      'Добавление shape-outside: circle(50%) к круглой картинке с float: left заставляет строки текста повторять изгиб круга.',
      'Свойство shape-margin: 16px задаёт аккуратный воздушный зазор вдоль криволинейного контура.'
    ],
    tags: ['CSS', 'shape-outside', 'float', 'circle', 'обтекание текстом', 'верстка статей'],
    when: 'Во врезках с цитатами, круглыми портретами спикеров и журнальных лонгридах.',
    alternatives: 'Для обычного расположения аватара слева от имени и должности всегда используй display: flex; align-items: center; gap: 12px.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/shape-outside'
  },
  {
    lang: 'css',
    id: 'css-order-align-self',
    title: 'CSS: индивидуальное управление элементом сетки (align-self, justify-self, order)',
    summary: 'Точечное выравнивание отдельной карточки или кнопки по краю родителя без создания дополнительных обёрток.',
    code: `.header-flex {
  display: flex;
  align-items: center;
  gap: 16px;
}

.special-badge {
  /* Только этот элемент прижимается к верхнему краю, пока остальные стоят по центру */
  align-self: flex-start;
}

.close-btn {
  /* Внутри CSS Grid прижимает кнопку строго в правый верхний угол ячейки */
  justify-self: end;
  align-self: start;
}`,
    example: `place-self: start end; /* Сокращение для align-self + justify-self в CSS Grid */`,
    points: [
      'align-self переопределяет общее правило align-items родителя для одного конкретного дочернего элемента (как во Flexbox, так и в CSS Grid).',
      'В CSS Grid также работает свойство justify-self (выравнивание элемента по горизонтали внутри своей ячейки) и сокращение place-self: center end.',
      'Не злоупотребляй свойством order: -1 для перестановки важных кнопок, так как порядок обхода клавишей Tab всё равно останется таким, как в исходном HTML!'
    ],
    tags: ['CSS', 'align-self', 'justify-self', 'place-self', 'order', 'выравнивание', 'flex', 'grid'],
    when: 'Когда один элемент внутри ряда (кнопка, бейдж, цена) должен стоять у другого края.',
    alternatives: 'Во Flexbox для прижатия элемента вправо вдоль главной оси используй margin-left: auto.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/align-self'
  },
  {
    lang: 'css',
    id: 'css-inset-border-image-outline',
    title: 'CSS: вложенные тени (box-shadow: inset) и эффект вдавленной панели (Well / Input)',
    summary: 'Создание глубины для полей ввода, блоков кода и активных переключателей с помощью внутренней тени и верхней подсветки.',
    code: `/* Поле ввода или блок кода, визуально утопленный внутрь панели */
.code-well,
.input-recessed {
  background: #070a10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.45);
}

/* Выпуклая кнопка с тонким бликом по верхнему краю (1px inner highlight) */
.btn-tactile {
  background: #161e31;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.3);
}`,
    example: `.btn-tactile:active {\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);\n}`,
    points: [
      'Ключевое слово inset разворачивает тень внутрь коробки элемента, создавая ощущение утопленной поверхности (идеально для инпутов, треков ползунков и окон кода).',
      'Тонкий светлый внутренний блик сверху (inset 0 1px 0 rgba(255,255,255,0.1)) придаёт кнопкам и карточкам в тёмной теме благородный тактильный объём (как в интерфейсах Linear и Raycast)!',
      'В одном свойстве box-shadow можно комбинировать через запятую и внутренние (inset), и внешние тени.'
    ],
    tags: ['CSS', 'box-shadow', 'inset', 'внутренняя тень', 'блик', 'кнопка', 'инпут', 'дизайн'],
    when: 'При оформлении кнопок, переключателей вкладок, полей ввода и панелей инструментов.',
    alternatives: 'Не делай внутреннюю тень слишком широкой и размытой, чтобы интерфейс не выглядел устаревшим.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/box-shadow'
  },
  {
    lang: 'css',
    id: 'css-print-page-break',
    title: 'CSS: стили для печати документа и экспорта в PDF (@media print, @page)',
    summary: 'Очистка страницы от меню и кнопок при отправке на принтер или сохранении счёта/резюме в PDF.',
    code: `@media print {
  /* Скрываем шапку, сайдбар, поиск и кнопки действий */
  .top, .sidebar, .searchbox, .no-print, footer {
    display: none !important;
  }

  /* Принудительно делаем фон белым, а текст чёрным для экономии тонера и чёткости PDF */
  body {
    background: #ffffff !important;
    color: #000000 !important;
    font-size: 12pt;
  }

  /* Запрещаем разрывать карточки и блоки кода пополам между листами бумаги А4 */
  pre, blockquote, table, figure, .card {
    break-inside: avoid;
  }
}`,
    example: `a[href^="http"]::after { content: " (" attr(href) ")"; } /* Вывод полных URL ссылок на бумаге */`,
    points: [
      'Пользователи часто сохраняют справочные статьи, чеки и счета через системный диалог «Печать -> Сохранить как PDF». Правило @media print гарантирует чистый документ без шапки и тёмного фона!',
      'Свойство break-inside: avoid запрещает браузеру разрезать таблицу или сниппет кода на границе двух страниц А4.',
      'Свойство print-color-adjust: exact заставляет браузер сохранить цветные бейджи и графики при экспорте в PDF.'
    ],
    tags: ['CSS', 'print', 'media print', 'pdf', 'break-inside', 'печать', 'экспорт в pdf'],
    when: 'На страницах документации, статей, резюме, билетов, чеков и счетов на оплату.',
    alternatives: 'Серверная генерация PDF нужна только для официальных бланков со строгой пиксельной сеткой и печатями.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries/Printing'
  },

  // ==========================================
  // Дополнительные карточки JavaScript & PHP
  // ==========================================
  {
    lang: 'javascript',
    id: 'js-console-debugging',
    title: 'JS: продвинутая отладка в консоли (console.table, time, group, assert)',
    summary: 'Наглядный вывод массивов объектов в виде сортируемой таблицы и точный замер скорости работы функций.',
    code: `const users = [
  { id: 1, name: 'Павел', role: 'admin' },
  { id: 2, name: 'Елена', role: 'editor' }
];

// 1. Выводит красивую интерактивную таблицу прямо в DevTools!
console.table(users, ['id', 'name', 'role']);

// 2. Точный замер времени выполнения участка кода
console.time('renderGrid');
renderItems(users);
console.timeEnd('renderGrid'); // "renderGrid: 1.42 ms"`,
    example: `console.assert(users.length > 0, 'Массив пользователей не должен быть пустым!');`,
    points: [
      'console.table(array) — самый удобный способ посмотреть структуру ответа от сервера (массив товаров или пользователей) с возможностью сортировки по колонкам в DevTools!',
      'Пара console.time("label") и console.timeEnd("label") замеряет время выполнения кода с точностью до долей миллисекунды.',
      'console.groupCollapsed("Детали запроса") позволяет аккуратно свернуть длинные логи в раскрывающуюся папку.'
    ],
    tags: ['JavaScript', 'console', 'console.table', 'console.time', 'debug', 'devtools', 'отладка', 'консоль'],
    when: 'Во время локальной разработки, профилирования циклов и проверки ответов API.',
    alternatives: 'Для пошаговой остановки скрипта с просмотром всех локальных переменных используй ключевое слово debugger; или брейкпоинты во вкладке Sources.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/console/table'
  },
  {
    lang: 'javascript',
    id: 'js-encode-uri-base64',
    title: 'JS: кодирование URL-параметров (encodeURIComponent) и UTF-8 Base64',
    summary: 'Безопасная передача строк со спецсимволами (&, ?, #, пробел) в ссылках и кодирование кириллицы в Base64.',
    code: `const userQuery = 'C++ & C# разработка';

// encodeURIComponent кодирует амперсанд & и решётку #, чтобы они не сломали GET-запрос!
const safeUrl = \`/search?q=\${encodeURIComponent(userQuery)}\`;
// "/search?q=C%2B%2B%20%26%20C%23%20%D1%80%D0%B0%D0%B7..."

// Безопасное кодирование и декодирование кириллицы UTF-8 в Base64
const toBase64 = (str) => btoa(String.fromCharCode(...new TextEncoder().encode(str)));
const fromBase64 = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64), c => c.charCodeAt(0)));`,
    example: `/* Обычный encodeURI() НЕ кодирует символы &, = и +, поэтому для параметров всегда используй encodeURIComponent()! */`,
    points: [
      'Для отдельных значений GET-параметров ВСЕГДА используй encodeURIComponent(val) (или класс URLSearchParams), а не encodeURI()! Иначе поиск по запросу "H&M" или "C#" обрежет строку по символу & или #.',
      'Старая функция btoa("Привет") падает с ошибкой InvalidCharacterError на русских буквах. Связка с TextEncoder() решает это для любого языка мира.',
      'Для обратной расшифровки параметра из адресной строки используется decodeURIComponent(encodedStr).'
    ],
    tags: ['JavaScript', 'encodeURIComponent', 'decodeURIComponent', 'Base64', 'btoa', 'TextEncoder', 'кодирование', 'url'],
    when: 'При формировании ссылок для Telegram/WhatsApp, передаче поисковых фраз и работе с токенами.',
    alternatives: 'При использовании new URLSearchParams({ q: userQuery }) кодирование выполняется автоматически.',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent'
  },
  {
    lang: 'php',
    id: 'php-interfaces-traits-abstract',
    title: 'PHP 8: интерфейсы (interface), трейты (trait) и внедрение зависимостей (DI)',
    summary: 'Проектирование гибкой архитектуры приложения: контракты для сервисов оплаты/уведомлений и переиспользование методов.',
    code: `<?php
declare(strict_types=1);

interface NotifierInterface {
    public function send(string $recipient, string $message): bool;
}

class TelegramNotifier implements NotifierInterface {
    public function send(string $recipient, string $message): bool {
        // Отправка в Telegram API
        return true;
    }
}

// Класс OrderService зависит от интерфейса, а не от конкретного мессенджера!
readonly class OrderService {
    public function __construct(private NotifierInterface $notifier) {}

    public function complete(string $chatId): void {
        $this->notifier->send($chatId, 'Ваш заказ успешно собран!');
    }
}`,
    example: `trait TimestampsTrait {\n    public ?DateTimeImmutable $createdAt = null;\n}`,
    points: [
      'Интерфейс (interface) задаёт строгий контракт: какие методы обязан реализовать класс. Это позволяет легко подменить отправку СМС на Telegram или тестовую заглушку без переписывания бизнес-логики!',
      'Трейт (trait) позволяет горизонтально подключить готовый набор методов (например, логирование или расчёт дат) сразу в несколько несвязанных классов через ключевое слово use.',
      'Передача зависимостей через конструктор (Dependency Injection) делает классы чистыми и легко тестируемыми.'
    ],
    tags: ['PHP', 'interface', 'trait', 'implements', 'abstract', 'DI', 'ооп', 'интерфейс', 'архитектура'],
    when: 'При написании модулей оплаты, доставки, уведомлений и хранилищ кэша.',
    alternatives: 'Избегай глубоких цепочек наследования (extends на 4 уровня) — отдавай предпочтение композиции и интерфейсам.',
    url: 'https://www.php.net/manual/ru/language.oop5.interfaces.php'
  },
  {
    lang: 'php',
    id: 'php-filter-var-validation',
    title: 'PHP 8: валидация данных через filter_var (Email, URL, IP, целые числа в диапазоне)',
    summary: 'Встроенный в ядро PHP валидатор и санитайзер входящих параметров без сложных регулярных выражений.',
    code: `<?php
declare(strict_types=1);

// 1. Проверка корректности Email
$email = filter_var(trim($rawEmail), FILTER_VALIDATE_EMAIL);
if ($email === false) {
    throw new InvalidArgumentException('Указан некорректный адрес почты');
}

// 2. Проверка целого числа строго в заданном диапазоне (например, номер страницы от 1 до 1000)
$page = filter_var($_GET['page'] ?? 1, FILTER_VALIDATE_INT, [
    'options' => ['default' => 1, 'min_range' => 1, 'max_range' => 1000],
]);

// 3. Проверка валидности URL и IP-адреса
$isValidUrl = filter_var($url, FILTER_VALIDATE_URL) !== false;
$isValidIp  = filter_var($ip, FILTER_VALIDATE_IP) !== false;`,
    example: `$boolFlag = filter_var($_POST['active'] ?? false, FILTER_VALIDATE_BOOL); /* Понимает "true", "1", "on", "yes"! */`,
    points: [
      'В случае ошибки валидации filter_var() возвращает булево значение false (поэтому всегда проверяй результат строго через === false).',
      'Опции min_range, max_range и default в FILTER_VALIDATE_INT позволяют проверить и ограничить числовой параметр в один вызов!',
      'Фильтр FILTER_VALIDATE_BOOL умно распознаёт строки "1", "true", "on", "yes" как true, а "0", "false", "off", "no" как false.'
    ],
    tags: ['PHP', 'filter_var', 'FILTER_VALIDATE_EMAIL', 'FILTER_VALIDATE_INT', 'FILTER_VALIDATE_URL', 'валидация', 'проверка'],
    when: 'На входе любых контроллеров, API-эндпоинтов и обработчиков форм.',
    alternatives: 'Не используй удалённый в PHP 8.1 фильтр FILTER_SANITIZE_STRING — для защиты вывода в HTML используй htmlspecialchars().',
    url: 'https://www.php.net/manual/ru/function.filter-var.php'
  }
];
