export const granularTopics = [
  // ==========================================
  // Дополнительные справочники HTML5 (теги и атрибуты)
  // ==========================================
  {
    lang: 'html',
    id: 'html-canvas',
    title: 'HTML: холст для 2D и 3D графики <canvas>',
    summary: 'Растровый холст для рисования графиков, диаграмм, частиц, обработки фото и браузерных игр через JS.',
    code: `<canvas id="chart" width="600" height="300"></canvas>

<script>
  const canvas = document.getElementById('chart');
  const ctx = canvas.getContext('2d');

  // Заливка столбика диаграммы
  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(40, 60, 80, 200);
</script>`,
    example: `const dpr = window.devicePixelRatio || 1; /* Учёт Retina-экранов */`,
    points: [
      'Размеры холста обязательно задавай через HTML-атрибуты width и height, а не только через CSS, иначе картинка растянется и станет мыльной!',
      'Для идеальной чёткости на Retina-экранах умножай canvas.width на window.devicePixelRatio и масштабируй контекст ctx.scale(dpr, dpr).',
      'Для векторных иконок и кликабельных схем лучше подходит <svg>, а для десятков тысяч движущихся частиц — <canvas>.'
    ],
    tags: ['HTML', 'canvas', '2d', 'webgl', 'графика', 'холст', 'диаграмма', 'рисование'],
    when: 'Для графиков аналитики, редакторов изображений, генераторов баннеров и 2D/3D игр.',
    alternatives: 'Для простых круговых и столбчатых графиков до 100 элементов проще и чётче использовать <svg>.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/canvas'
  },
  {
    lang: 'html',
    id: 'html-textarea',
    title: 'HTML: многострочное текстовое поле <textarea> и автовысота',
    summary: 'Поле для ввода комментариев, описаний и кода с контролем строк, лимитом символов и автоподстройкой высоты.',
    code: `<label for="bio">О проекте:</label>
<textarea
  id="bio"
  name="bio"
  rows="4"
  maxlength="500"
  placeholder="Опишите задачу проекта..."
></textarea>`,
    example: `textarea {\n  field-sizing: content; /* Современный CSS: поле само растёт по мере ввода текста! */\n  min-height: 80px;\n}`,
    points: [
      'В отличие от <input>, у <textarea> нет атрибута value — начальный текст пишется прямо между открывающим и закрывающим тегами.',
      'Не оставляй случайных пробелов и переносов между <textarea> и </textarea>, иначе они появятся внутри поля как введённый текст!',
      'Новое CSS-свойство field-sizing: content (или JS: el.style.height = el.scrollHeight + "px") позволяет полю автоматически расти по высоте.'
    ],
    tags: ['HTML', 'textarea', 'rows', 'maxlength', 'field-sizing', 'комментарий', 'многострочное поле'],
    when: 'Для форм обратной связи, комментариев, биографии профиля и редакторов кода.',
    alternatives: 'Для форматированного текста с жирным и списками используют атрибут contenteditable="true" или редакторы ProseMirror/TipTap.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/textarea'
  },
  {
    lang: 'html',
    id: 'html-audio-element',
    title: 'HTML: аудиоплеер <audio> и звуковые эффекты интерфейса',
    summary: 'Встраивание подкастов, голосовых сообщений и программное воспроизведение аудио через HTMLAudioElement.',
    code: `<audio controls preload="metadata">
  <source src="/audio/episode-12.mp3" type="audio/mpeg">
  <source src="/audio/episode-12.ogg" type="audio/ogg">
</audio>

<script>
  const notifySound = new Audio('/audio/ping.mp3');
  notifySound.volume = 0.4;
  // Вызывать только после действия пользователя (клик)
  btn.addEventListener('click', () => notifySound.play());
</script>`,
    example: `audioElement.playbackRate = 1.5; /* Ускорение подкаста в 1.5 раза */`,
    points: [
      'Свойство audio.playbackRate = 1.5 или 2.0 позволяет легко сделать кнопку ускорения голосового сообщения или подкаста.',
      'Браузеры блокируют вызов audio.play() без предварительного клика пользователя по странице (защита от навязчивого звука).',
      'preload="metadata" подгружает только длительность дорожки без скачивания всего MP3-файла.'
    ],
    tags: ['HTML', 'audio', 'mp3', 'play', 'playbackRate', 'аудио', 'плеер', 'подкаст', 'звук'],
    when: 'В плеерах подкастов, мессенджерах с голосовыми сообщениями и звуковых уведомлениях.',
    alternatives: 'Для синтеза звука и эквалайзеров в реальном времени используй Web Audio API (AudioContext).',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/audio'
  },
  {
    lang: 'html',
    id: 'html-script-module-importmap',
    title: 'HTML: ES-модули <script type="module"> и карты импортов (importmap)',
    summary: 'Подключение модульного JavaScript и NPM-библиотек прямо в браузере по коротким именам без сборщика.',
    code: `<script type="importmap">
{
  "imports": {
    "canvas-confetti": "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/+esm"
  }
}
</script>

<script type="module">
  import confetti from 'canvas-confetti';
  confetti({ particleCount: 80, spread: 60 });
</script>`,
    example: `<script type="module" src="/src/main.js"></script>`,
    points: [
      '<script type="module"> автоматически работает в строгом режиме ("use strict"), имеет собственную изолированную область видимости и выполняется отложенно (как с defer).',
      'Тег <script type="importmap"> позволяет сопоставить короткие имена пакетов с их URL на CDN или локальными путями.',
      'Внутри модульного скрипта работает top-level await (можно писать await fetch(...) на верхнем уровне без обёртки в async function).'
    ],
    tags: ['HTML', 'script', 'module', 'importmap', 'import', 'esm', 'модули', 'cdn'],
    when: 'Во всех современных проектах для чистого разделения JS-кода на файлы.',
    alternatives: 'В продакшене для крупных проектов модули обычно собирают через Vite для объединения чанков.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap'
  },
  {
    lang: 'html',
    id: 'html-details-exclusive-accordion',
    title: 'HTML: связанный аккордеон <details name="..."> без JavaScript',
    summary: 'Современный атрибут name у тега <details>, автоматически закрывающий соседние вкладки аккордеона при открытии новой.',
    code: `<div class="faq-group">
  <details name="faq" open>
    <summary>Как работает атрибут name у details?</summary>
    <p>Когда у нескольких тегов details одинаковый name, открытым может быть только один из них!</p>
  </details>

  <details name="faq">
    <summary>Нужен ли для этого JavaScript?</summary>
    <p>Нет, браузер переключает вкладки аккордеона полностью нативно.</p>
  </details>
</div>`,
    example: `summary::marker { color: #38bdf8; }`,
    points: [
      'Добавление одинакового атрибута name="faq" к группе тегов <details> превращает их во взаимоисключающий аккордеон (как радиокнопки)!',
      'Атрибут open задаёт вкладку, открытую по умолчанию при загрузке страницы.',
      'Для стилизации кастомной стрелочки скройте стандартный маркер через summary { list-style: none; } и summary::-webkit-details-marker { display: none; }.'
    ],
    tags: ['HTML', 'details', 'summary', 'accordion', 'faq', 'аккордеон', 'спойлер'],
    when: 'Для блоков частых вопросов (FAQ), мобильных меню-гармошек и свернутых секций фильтров.',
    alternatives: 'Если нужно держать открытыми сразу несколько пунктов одновременно — просто не указывай атрибут name.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/details'
  },
  {
    lang: 'html',
    id: 'html-search-hgroup-hr',
    title: 'HTML: семантический блок поиска <search>, группа заголовка <hgroup> и <hr>',
    summary: 'Специализированный ориентир для форм поиска и фильтрации, связка заголовка с подзаголовком и тематический разделитель.',
    code: `<search aria-label="Поиск по документации">
  <form action="/search">
    <input type="search" name="q" placeholder="Найти функцию...">
    <button type="submit">Найти</button>
  </form>
</search>

<hgroup>
  <p class="kicker">Руководство</p>
  <h1>Архитектура современных веб-приложений</h1>
  <p class="subtitle">Практическое пособие для фронтенд- и бэкенд-разработчиков</p>
</hgroup>`,
    example: `<hr aria-hidden="true">`,
    points: [
      'Тег <search> — официальный элемент стандарта HTML5, создающий доступную область (role="search") для любых полей поиска и фильтров каталога.',
      '<hgroup> объединяет главный заголовок <h1>–<h6> с надзаголовком (kicker) и подзаголовком в единую смысловую группу.',
      '<hr> означает смысловую смену темы между абзацами или секциями меню.'
    ],
    tags: ['HTML', 'search', 'hgroup', 'hr', 'семантика', 'поиск', 'подзаголовок', 'разделитель'],
    when: 'Используй <search> вокруг поисковых строк и панелей фильтрации товаров.',
    alternatives: 'Раньше вместо <search> приходилось писать <div role="search">.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search'
  },
  {
    lang: 'html',
    id: 'html-sub-sup-del-ins',
    title: 'HTML: индексы <sub>, <sup> и правки цен <del>, <ins>, <s>',
    summary: 'Разметка химических и математических формул, сносок, а также перечёркнутых старых и новых цен со скидкой.',
    code: `<!-- Старая и новая цена в карточке товара -->
<div class="price-box">
  <del><span class="sr-only">Старая цена:</span> 4 990 ₽</del>
  <ins><span class="sr-only">Новая цена:</span> 3 490 ₽</ins>
</div>

<!-- Верхний и нижний индекс -->
<p>Площадь зала: 120 м<sup>2</sup> · Формула воды: H<sub>2</sub>O</p>`,
    example: `ins { text-decoration: none; font-weight: 700; color: #10b981; }`,
    points: [
      'Для зачёркнутой старой цены в интернет-магазине используй <del> или <s>, а для новой цены со скидкой — <ins> (сбросив подчёркивание через text-decoration: none).',
      '<sup> поднимает текст в верхний индекс (м², x³, сноски [1]), а <sub> опускает в нижний индекс (CO₂).',
      'В CSS задай sub, sup { line-height: 0; }, чтобы индексы не раздвигали высоту строки абзаца!'
    ],
    tags: ['HTML', 'sub', 'sup', 'del', 'ins', 's', 'скидка', 'старая цена', 'степень', 'индекс'],
    when: 'В карточках товаров со скидками, технических характеристиках (м², м³) и статьях.',
    alternatives: 'Не используй просто <span style="text-decoration: line-through"> — поисковики не поймут, что это старая цена.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/del'
  },
  {
    lang: 'html',
    id: 'html-favicon-theme-links',
    title: 'HTML: фавиконки SVG/PNG, Apple Touch Icon и Web App Manifest',
    summary: 'Современный минимальный набор иконок сайта для вкладок браузера, тёмной темы и домашнего экрана смартфона.',
    code: `<head>
  <!-- Векторная иконка (поддерживает адаптацию под тёмную тему внутри SVG!) -->
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <!-- Иконка для экрана «Домой» на iPhone и iPad (180x180) -->
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <!-- Манифест веб-приложения с иконками 192x192 и 512x512 -->
  <link rel="manifest" href="/manifest.webmanifest">
</head>`,
    example: `/* Внутри icon.svg можно написать @media (prefers-color-scheme: dark) для смены цвета! */`,
    points: [
      'Вместо 20 старых тегов иконок разного размера современным браузерам достаточно всего трёх ссылок: icon.svg, apple-touch-icon.png и manifest.webmanifest!',
      'Внутрь файла icon.svg можно встроить тег <style> с медиазапросом prefers-color-scheme: dark, чтобы фавиконка сама меняла цвет на тёмных вкладках.',
      'Apple Touch Icon должна быть квадратной PNG без прозрачности размером 180×180 пикселей.'
    ],
    tags: ['HTML', 'favicon', 'icon', 'apple-touch-icon', 'manifest', 'pwa', 'иконка сайта'],
    when: 'В секции <head> каждого веб-сайта и приложения.',
    alternatives: 'Старый формат favicon.ico нужен только для обратной совместимости с очень старыми утилитами.',
    url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Add_a_hit_map_on_top_of_an_image'
  },

  // ==========================================
  // Дополнительные справочники CSS3 (свойства, селекторы, эффекты)
  // ==========================================
  {
    lang: 'css',
    id: 'css-overflow-scrollbars',
    title: 'CSS: управление переполнением (overflow, overflow-clip-margin, scrollbar-gutter)',
    summary: 'Локализация горизонтального и вертикального скролла, защита от скачков ширины страницы и тонкие полосы прокрутки.',
    code: `html {
  /* Резервирует место под скроллбар, чтобы страница не дёргалась при открытии модалки! */
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: #334155 transparent;
}

.code-block {
  overflow-x: auto; /* Показывает скроллбар только если строка кода реально не поместилась */
}`,
    example: `.card {\n  overflow: clip; /* Обрезает края как hidden, но не создаёт скролл-контейнер! */\n}`,
    points: [
      'Всегда используй overflow: auto вместо overflow: scroll, чтобы полоса прокрутки не висела пустой, когда контента мало.',
      'Современное значение overflow: clip обрезает выступающие углы, но в отличие от overflow: hidden НЕ ломает position: sticky внутри родителя!',
      'scrollbar-gutter: stable предотвращает неприятный горизонтальный рывок шапки и контента, когда при фильтрации или открытии модалки пропадает полоса прокрутки.'
    ],
    tags: ['CSS', 'overflow', 'clip', 'scrollbar-gutter', 'scrollbar-width', 'скроллбар', 'прокрутка', 'переполнение'],
    when: 'Для блоков кода, таблиц, модальных окон и корневого тега html.',
    alternatives: 'overflow-x: hidden на body часто маскирует проблему вылезающего блока вместо её исправления.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter'
  },
  {
    lang: 'css',
    id: 'css-z-index-isolation',
    title: 'CSS: контекст наложения (z-index и isolation: isolate)',
    summary: 'Предсказуемое управление слоями без магических чисел z-index: 999999 с помощью локальной изоляции компонента.',
    code: `.hero-card {
  position: relative;
  isolation: isolate; /* Все z-index внутри карточки остаются заперты внутри неё! */
}

.hero-card__bg-glow {
  position: absolute;
  inset: 0;
  z-index: -1; /* Уходит под текст карточки, но НЕ проваливается под фон всей страницы! */
}`,
    example: `/* isolation: isolate создаёт чистый контекст наложения без побочных эффектов */`,
    points: [
      'Главная ловушка z-index: -1 на фоновом декоре — элемент часто проваливается под фон родителя и исчезает. Свойство isolation: isolate на родителе решает это в одну строку!',
      'z-index работает не только на позиционированных элементах (relative/absolute/fixed), но и напрямую на дочерних элементах Flexbox и CSS Grid!',
      'Держи шкалу слоёв системной в CSS-переменных: --z-header: 50, --z-dropdown: 100, --z-modal: 200, --z-toast: 300.'
    ],
    tags: ['CSS', 'z-index', 'isolation', 'isolate', 'stacking context', 'слои', 'наложение'],
    when: 'При верстке карточек с декоративным фоном, перекрывающихся аватаров и фиксированных панелей.',
    alternatives: 'Для модальных окон и поповеров нативные <dialog> и popover автоматически выходят в #top-layer поверх любого z-index.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/isolation'
  },
  {
    lang: 'css',
    id: 'css-pointer-events-user-select',
    title: 'CSS: управление кликами (pointer-events), выделением (user-select) и курсором',
    summary: 'Пропускание кликов сквозь прозрачные декоративные слои и запрет случайного выделения текста на кнопках.',
    code: `/* Декоративное свечение поверх секции не мешает нажимать на кнопки под ним */
.ambient-glow {
  pointer-events: none;
}

/* Текст кнопок и табов не выделяется синим при быстром двойном клике */
.btn, .tab, kbd {
  user-select: none;
}

/* Весь API-ключ или команда терминала выделяется целиком одним кликом! */
.api-token {
  user-select: all;
}`,
    example: `.is-loading {\n  pointer-events: none;\n  opacity: 0.6;\n}`,
    points: [
      'pointer-events: none делает элемент полностью «прозрачным» для мыши и пальца — клики проходят сквозь него к элементам ниже.',
      'user-select: all позволяет пользователю выделить весь промокод, ссылку или команду одним кликом мыши.',
      'Помни, что pointer-events: none блокирует только мышь/тач, но не блокирует переход по кнопке клавишей Tab (для полной блокировки кнопки используй атрибут disabled).'
    ],
    tags: ['CSS', 'pointer-events', 'user-select', 'cursor', 'клик', 'выделение текста', 'курсор'],
    when: 'На декоративных оверлеях, иконках внутри кнопок, промокодах и тост-контейнерах.',
    alternatives: 'Для полного отключения интерактивности целой секции (и мыши, и клавиатуры) используй HTML-атрибут inert.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/pointer-events'
  },
  {
    lang: 'css',
    id: 'css-backgrounds-patterns',
    title: 'CSS: фоновые изображения, сетки и паттерны (background-size, position, repeat)',
    summary: 'Наложение нескольких фонов и создание технических точечных и клеточных сеток на чистом CSS без картинок.',
    code: `/* Техническая сетка из точек (dot matrix) на чистом CSS */
.canvas-dots {
  background-color: #090d14;
  background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Техническая миллиметровая клетка (grid lines) */
.canvas-grid {
  background-size: 32px 32px;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}`,
    example: `background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('hero.jpg') center / cover no-repeat;`,
    points: [
      'В свойстве background можно перечислить несколько слоёв через запятую (первый в списке лежит выше всех). Например, полупрозрачный градиент поверх фото для читаемости белого текста!',
      'Точечные и линейные паттерны через radial-gradient / linear-gradient + background-size: 24px 24px весят 0 байт и идеально чёткие на любых экранах.',
      'В сокращённой записи размер пишется через слэш после позиции: center / cover no-repeat.'
    ],
    tags: ['CSS', 'background', 'background-size', 'background-image', 'cover', 'паттерн', 'сетка', 'фон'],
    when: 'Для фонов рабочих холстов, технических лендингов и затемнения обложек под текстом.',
    alternatives: 'Для контентных изображений, важных для SEO и доступности, используй тег <img> с object-fit: cover.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/background'
  },
  {
    lang: 'css',
    id: 'css-borders-outline',
    title: 'CSS: границы (border, border-radius) и контур фокуса (outline, outline-offset)',
    summary: 'Геометрия скруглений вложенных карточек, отличие outline от border и аккуратные разделители.',
    code: `.outer-card {
  --inner-radius: 8px;
  --card-padding: 8px;
  padding: var(--card-padding);
  /* Формула идеального концентрического скругления: внутренний радиус + отступ! */
  border-radius: calc(var(--inner-radius) + var(--card-padding));
}

.inner-image {
  border-radius: var(--inner-radius);
}

.btn:focus-visible {
  outline: 2px solid #38bdf8;
  outline-offset: 2px;
}`,
    example: `border-radius: 9999px; /* Идеальная капсула любой высоты */`,
    points: [
      'Чтобы скругление вложенной картинки и внешней карточки выглядело гармонично (концентрически), внешний радиус должен быть равен внутреннему радиусу плюс padding карточки!',
      'В отличие от border, свойство outline не занимает места в блочной модели (элемент не прыгает при появлении рамки) и поддерживает отступ outline-offset.',
      'border-radius: 50% превращает квадратный блок в круг, а border-radius: 9999px создаёт ровную капсулу на прямоугольнике.'
    ],
    tags: ['CSS', 'border', 'border-radius', 'outline', 'outline-offset', 'рамка', 'скругление'],
    when: 'При проектировании карточек, кнопок, инпутов и состояний фокуса.',
    alternatives: 'Для градиентной рамки со скруглением используют двойной background с padding-box и border-box.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/border-radius'
  },
  {
    lang: 'css',
    id: 'css-media-preference-queries',
    title: 'CSS: медиазапросы возможностей (@media hover, prefers-reduced-motion, print)',
    summary: 'Адаптация интерфейса под тач-экраны без залипающих ховеров, бережное отношение к вестибулярному аппарату и печать.',
    code: `/* Ховер-эффекты применяются только на устройствах с реальным курсором мыши */
@media (hover: hover) and (pointer: fine) {
  .card:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }
}

/* Отключение резких движений, если в ОС включено «Уменьшение движения» */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`,
    example: `@media (width >= 768px) { /* Современный синтаксис диапазонов Media Queries Level 4 */ }`,
    points: [
      'На смартфонах обычный :hover «залипает» после тапа пальцем. Оборачивание ховеров в @media (hover: hover) делает мобильный интерфейс чистым.',
      'В современном CSS вместо min-width: 768px можно писать наглядные математические неравенства: @media (width >= 768px) или @media (480px <= width < 1024px)!',
      'Правило @media print позволяет скрыть шапку, сайдбар и кнопки при сохранении страницы или счёта в PDF.'
    ],
    tags: ['CSS', 'media', 'hover', 'pointer', 'prefers-reduced-motion', 'print', 'адаптивность', 'медиазапросы'],
    when: 'В каждом продакшен-проекте для корректной работы на смартфонах, десктопах и при печати.',
    alternatives: 'Для адаптации карточки под ширину конкретной колонки используй @container вместо @media.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries'
  },
  {
    lang: 'css',
    id: 'css-font-face-loading',
    title: 'CSS: подключение шрифтов (@font-face, font-display: swap, variable fonts)',
    summary: 'Правильная загрузка локальных шрифтов WOFF2 без блокировки текста и с сохранением метрик запасного шрифта.',
    code: `@font-face {
  font-family: 'InterVariable';
  src: url('/fonts/Inter-Variable.woff2') format('woff2');
  font-weight: 100 900;  /* Один вариативный файл покрывает все начертания от Thin до Black! */
  font-style: normal;
  font-display: swap;    /* Сразу показывает текст системным шрифтом до загрузки файла */
}

body {
  font-family: 'InterVariable', system-ui, -apple-system, sans-serif;
}`,
    example: `font-feature-settings: "cv02", "cv03", "cv04"; /* Включение альтернативных глифов в шрифте */`,
    points: [
      'Сегодня достаточно одного формата woff2 — он поддерживается 99% браузеров и сжимает шрифт на 30% лучше старого woff/ttf.',
      'font-display: swap гарантирует, что пользователь сразу увидит текст страницы, даже при медленном мобильном интернете.',
      'Вариативный шрифт (Variable Font) заменяет собой 5–6 отдельных файлов (Regular, Medium, SemiBold, Bold), ускоряя загрузку сайта.'
    ],
    tags: ['CSS', 'font-face', 'woff2', 'font-display', 'swap', 'variable fonts', 'шрифты', 'типографика'],
    when: 'При подключении фирменных шрифтов проекта.',
    alternatives: 'Системный стек system-ui, -apple-system, Segoe UI, Roboto работает мгновенно вообще без скачивания файлов.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/@font-face'
  },
  {
    lang: 'css',
    id: 'css-columns-masonry',
    title: 'CSS: многоколоночная верстка (columns, column-gap, break-inside: avoid)',
    summary: 'Газетная раскладка текста и плиточная сетка карточек разной высоты (Masonry-эффект) на чистом CSS.',
    code: `.masonry-gallery {
  columns: 3 280px; /* До 3 колонок шириной минимум 280px */
  column-gap: 16px;
}

.masonry-card {
  break-inside: avoid; /* Запрещает разрывать карточку пополам между колонками! */
  margin-bottom: 16px;
}`,
    example: `column-rule: 1px solid var(--line); /* Тонкая вертикальная линия между текстовыми колонками */`,
    points: [
      'Свойство columns: 3 280px автоматически уменьшает число колонок с 3 до 2 и 1 на узких экранах без единого медиазапроса.',
      'Обязательно добавляй break-inside: avoid дочерним карточкам, иначе браузер разрежет карточку пополам при переходе в следующий столбец!',
      'Учитывай, что элементы в columns идут сверху вниз по столбцам, а не слева направо по строкам.'
    ],
    tags: ['CSS', 'columns', 'column-count', 'break-inside', 'masonry', 'колонки', 'галерея', 'плитка'],
    when: 'Для фотогалерей с картинками разной высоты, облака отзывов и длинных списков ссылок в подвале.',
    alternatives: 'Если важен строгий порядок карточек слева направо (по дате или цене), используй CSS Grid.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/columns'
  },
  {
    lang: 'css',
    id: 'css-counters',
    title: 'CSS: автоматическая нумерация секций и шагов (counter-reset, counter-increment)',
    summary: 'Генерация красивых номеров глав (01, 02, 1.1) и шагов инструкции чисто средствами CSS без хардкода цифр в HTML.',
    code: `.steps-list {
  counter-reset: step-counter;
  list-style: none;
  padding: 0;
}

.steps-list li {
  counter-increment: step-counter;
}

.steps-list li::before {
  /* Выводит "01", "02", "03" с ведущим нулём! */
  content: counter(step-counter, decimal-leading-zero);
  font-family: monospace;
  color: #38bdf8;
  margin-right: 10px;
}`,
    example: `content: counters(section, ".") " "; /* Для вложенной нумерации 1.1, 1.2, 2.1 */`,
    points: [
      'counter-reset инициализирует счётчик на родителе, counter-increment увеличивает его на каждом элементе, а counter() выводит значение в ::before.',
      'Второй параметр decimal-leading-zero автоматически форматирует числа меньше 10 с ведущим нулём (01, 02, 03).',
      'При удалении или перестановке шагов в HTML вся нумерация пересчитывается автоматически.'
    ],
    tags: ['CSS', 'counter-reset', 'counter-increment', 'counter', 'нумерация', 'счётчик', 'шаги'],
    when: 'Для оформления пошаговых гайдов, оглавлений документации и нумерации строк кода.',
    alternatives: 'Для простых списков без префиксов "01" достаточно стилизовать нативный <ol> через li::marker.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters'
  },

  // ==========================================
  // Дополнительные справочники JavaScript & Web API
  // ==========================================
  {
    lang: 'javascript',
    id: 'js-array-slice-splice-at',
    title: 'JS: выборка с конца (.at(-1)) и иммутабельное изменение (toSpliced, with, slice)',
    summary: 'Удобное получение последнего элемента массива и новые методы точечной замены и удаления без мутации исходных данных.',
    code: `const items = ['HTML', 'CSS', 'JS', 'PHP'];

// Получение последнего и предпоследнего элемента через отрицательный индекс!
const last = items.at(-1);       // 'PHP'
const secondLast = items.at(-2); // 'JS'

// Немутирующая замена элемента по индексу (возвращает новый массив)
const updated = items.with(2, 'TypeScript'); // ['HTML', 'CSS', 'TypeScript', 'PHP']

// Немутирующее удаление и вставка (вместо старого мутирующего splice)
const withoutFirst = items.toSpliced(0, 1);`,
    example: `const pageItems = items.slice(0, 10); /* Копия первых 10 элементов */`,
    points: [
      'Метод arr.at(-1) гораздо чище и короче старой записи arr[arr.length - 1], а также работает и со строками: str.at(-1)!',
      'Классические методы .splice() и .reverse() ломают исходный массив. Их современные близнецы .toSpliced() и .toReversed() возвращают новую копию.',
      'Метод arr.with(index, value) идеально подходит для обновления одного элемента массива в стейте приложения.'
    ],
    tags: ['JavaScript', 'at', 'slice', 'splice', 'toSpliced', 'toReversed', 'with', 'массивы', 'последний элемент'],
    when: 'При пагинации (slice), чтении последнего элемента очереди (at(-1)) и обновлении списков в UI.',
    alternatives: 'Используй мутирующий .splice() только когда сознательно работаешь с локальным временным массивом.',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/at'
  },
  {
    lang: 'javascript',
    id: 'js-math-random-crypto',
    title: 'JS: математика (Math.round, clamp), случайные числа и генерация UUID (crypto.randomUUID)',
    summary: 'Округление, генерация случайных целых чисел в диапазоне и создание криптостойких уникальных ID без библиотек.',
    code: `// Встроенная в браузер и Node.js генерация уникального UUID v4!
const id = crypto.randomUUID(); // "36b8f84d-df4e-4d49-b662-bcde71a8764f"

// Случайное целое число от min до max включительно
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Ограничение числа заданным диапазоном [min, max] (аналог CSS clamp)
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
const volume = clamp(120, 0, 100); // 100`,
    example: `const price = Number((19.99 * 3).toFixed(2)); /* Округление до 2 знаков после запятой */`,
    points: [
      'Нативный метод crypto.randomUUID() мгновенно генерирует стандартный 36-символьный UUID v4 — сторонний npm-пакет uuid больше не нужен!',
      'При работе с деньгами в JS избегай ошибок плавающей точки (0.1 + 0.2 === 0.30000000000000004): веди расчёты в копейках (целых числах) или округляй через Math.round(val * 100) / 100.',
      'Формула Math.min(Math.max(val, min), max) незаменима для ползунков, зума и координат перетаскивания.'
    ],
    tags: ['JavaScript', 'Math', 'random', 'randomUUID', 'crypto', 'round', 'floor', 'clamp', 'uuid', 'числа'],
    when: 'При создании временных ID для новых задач/карточек, написании калькуляторов и игр.',
    alternatives: 'Для токенов безопасности используй crypto.getRandomValues() вместо предсказуемого Math.random().',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Crypto/randomUUID'
  },
  {
    lang: 'javascript',
    id: 'js-geometry-scroll',
    title: 'JS: координаты элементов (getBoundingClientRect) и плавный скролл (scrollIntoView)',
    summary: 'Точное измерение размеров и положения блока относительно окна и прокрутка страницы к нужному элементу.',
    code: `const targetSection = document.getElementById('pricing');

// Плавная прокрутка страницы к элементу по центру или по верхнему краю
targetSection.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
});

// Точные координаты и размеры элемента относительно видимой области окна (viewport)
const rect = button.getBoundingClientRect();
console.log(rect.top, rect.left, rect.width, rect.height);`,
    example: `window.scrollTo({ top: 0, behavior: 'smooth' }); /* Кнопка «Наверх» */`,
    points: [
      'element.scrollIntoView({ behavior: "smooth", block: "nearest" }) аккуратно прокручивает список так, чтобы выбранный с клавиатуры пункт стал виден.',
      'getBoundingClientRect() возвращает дробные субпиксельные значения относительно окна браузера (viewport). Чтобы получить координату от самого верха документа, прибавь window.scrollY.',
      'Учитывай, что частый вызов getBoundingClientRect() в цикле заставляет браузер синхронно пересчитывать лейаут (forced reflow).'
    ],
    tags: ['JavaScript', 'getBoundingClientRect', 'scrollIntoView', 'scrollTo', 'координаты', 'размеры', 'прокрутка'],
    when: 'Для позиционирования выпадающих тултипов рядом с кнопкой, кнопки «Наверх» и навигации по списку.',
    alternatives: 'Для отслеживания изменения размеров блока во времени используй ResizeObserver.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Element/scrollIntoView'
  },
  {
    lang: 'javascript',
    id: 'js-resize-mutation-observer',
    title: 'JS: отслеживание размеров блока (ResizeObserver) и изменений DOM (MutationObserver)',
    summary: 'Реакция графиков и холстов на изменение ширины их родительской колонки (а не только всего окна браузера).',
    code: `const chartBox = document.querySelector('.chart-container');

// Срабатывает при любом изменении размера самого блока (например, при сворачивании сайдбара!)
const ro = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const { width, height } = entry.contentRect;
    resizeCanvas(width, height);
  }
});

ro.observe(chartBox);`,
    example: `ro.disconnect(); /* Остановка наблюдения при удалении компонента */`,
    points: [
      'Событие window.onresize не срабатывает, когда блок меняет ширину из-за закрытия боковой панели или переключения флекс-колонки. ResizeObserver видит любое изменение размера самого элемента!',
      'Идеально подходит для перерисовки <canvas>, графиков и адаптивных таблиц.',
      'MutationObserver используется, когда нужно отследить изменение атрибутов или добавление новых узлов сторонним скриптом.'
    ],
    tags: ['JavaScript', 'ResizeObserver', 'MutationObserver', 'resize', 'размер', 'адаптивность', 'canvas'],
    when: 'При разработке графиков, интерактивных генераторов, сплит-панелей и редакторов.',
    alternatives: 'Если нужно менять только CSS-стили при изменении ширины родителя, используй CSS @container queries.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/ResizeObserver'
  },
  {
    lang: 'javascript',
    id: 'js-custom-events-error',
    title: 'JS: собственные события (CustomEvent) и обработка ошибок (try / catch / finally)',
    summary: 'Слабосвязанный обмен сообщениями между независимыми модулями интерфейса и надёжный перехват исключений.',
    code: `// 1. Отправка кастомного события с данными в объекте detail
window.dispatchEvent(new CustomEvent('cart:updated', {
  detail: { count: 4, totalPrice: 5200 }
}));

// 2. Подписка в любом другом месте приложения (например, в шапке)
window.addEventListener('cart:updated', (e) => {
  cartBadge.textContent = e.detail.count;
});`,
    example: `try {\n  await saveData();\n} catch (err) {\n  showError(err.message);\n} finally {\n  spinner.hidden = true; /* Выполнится в любом случае! */\n}`,
    points: [
      'Блок finally внутри try/catch гарантированно выполняется и после успеха, и после ошибки — это лучшее место для выключения индикатора загрузки (isLoading = false).',
      'При пробросе собственной ошибки можно сохранить исходную причину через new Error("Не удалось загрузить профиль", { cause: originalErr }).',
      'CustomEvent позволяет развязать модули (например, каталог и шапку с корзиной) без жёстких прямых импортов.'
    ],
    tags: ['JavaScript', 'CustomEvent', 'dispatchEvent', 'try', 'catch', 'finally', 'Error', 'события', 'ошибки'],
    when: 'Для связи компонентов на чистом JS и безопасного выполнения сетевых операций.',
    alternatives: 'Для синхронизации данных между РАЗНЫМИ открытыми вкладками одного сайта используй new BroadcastChannel("app_sync").',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/CustomEvent'
  },
  {
    lang: 'javascript',
    id: 'js-web-animations-api',
    title: 'JS: программные анимации через Web Animations API (element.animate)',
    summary: 'Нативный запуск плавных CSS-подобных анимаций напрямую из JavaScript с поддержкой промиса окончания (.finished).',
    code: `async function flashHighlight(element) {
  const animation = element.animate(
    [
      { transform: 'scale(0.96)', backgroundColor: 'rgba(56, 189, 248, 0.25)' },
      { transform: 'scale(1)',    backgroundColor: 'transparent' }
    ],
    {
      duration: 450,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
    }
  );

  // Можно дождаться завершения анимации через await!
  await animation.finished;
}`,
    example: `await modal.animate([{ opacity: 1 }, { opacity: 0 }], 200).finished;\nmodal.close();`,
    points: [
      'Метод element.animate(keyframes, options) работает на том же быстром движке браузера, что и CSS @keyframes, но позволяет передавать динамические координаты из JS!',
      'Свойство animation.finished возвращает Promise — можно легко дождаться конца анимации закрытия и только потом удалить элемент из DOM.',
      'Не требует подключения сторонних библиотек вроде GSAP или Anime.js для большинства интерфейсных задач.'
    ],
    tags: ['JavaScript', 'animate', 'Web Animations API', 'WAAPI', 'анимация', 'finished', 'keyframes'],
    when: 'Когда нужно плавно скрыть элемент перед удалением из DOM или анимировать полёт товара в корзину.',
    alternatives: 'Для простых статических ховеров используй обычный CSS transition.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Element/animate'
  }
];
