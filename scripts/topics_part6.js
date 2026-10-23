export const dictionaryTopics = [
  // ==========================================
  // Быстрый справочник методов HTML, CSS, JS, PHP, XML & SEO (расширенный словарь стандартов)
  // ==========================================
  {
    lang: 'html',
    id: 'html-a-download-rel',
    title: 'HTML: атрибут rel (noopener, noreferrer, nofollow, sponsored, preload)',
    summary: 'Управление безопасностью внешних ссылок, передачей реферера, SEO-весом рекламных ссылок и предзагрузкой.',
    code: `<!-- Безопасная внешняя ссылка без передачи window.opener -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Внешний ресурс</a>

<!-- Ссылка в комментариях пользователей или партнёрский блок (для SEO) -->
<a href="https://partner.ru" rel="nofollow sponsored">Партнёрский материал</a>`,
    example: `<link rel="canonical" href="https://devshelf.ru/docs">`,
    points: [
      'rel="noopener" защищает страницу от перехвата управления вкладкой через window.opener при target="_blank".',
      'rel="noreferrer" дополнительно скрывает адрес твоего сайта в заголовке Referer при переходе по внешней ссылке.',
      'rel="nofollow" и rel="ugc" указывают поисковым роботам не передавать ссылочный вес ссылкам из пользовательских комментариев.'
    ],
    tags: ['HTML', 'rel', 'noopener', 'noreferrer', 'nofollow', 'sponsored', 'canonical', 'ссылки', 'seo'],
    when: 'На всех внешних ссылках, рекламных интеграциях и ссылках из пользовательского контента.',
    alternatives: 'Современные браузеры автоматически подразумевают noopener при target="_blank", но явное указание остаётся стандартом.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/rel'
  },
  {
    lang: 'html',
    id: 'html-img-srcset-sizes',
    title: 'HTML: адаптивные изображения srcset и sizes для экранов Retina (2x, 3x)',
    summary: 'Автоматический выбор браузером оптимального размера картинки под плотность пикселей и ширину экрана смартфона.',
    code: `<img
  src="/img/card-800.webp"
  srcset="
    /img/card-400.webp 400w,
    /img/card-800.webp 800w,
    /img/card-1200.webp 1200w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
  alt="Превью проекта"
  width="400"
  height="300"
  loading="lazy"
>`,
    example: `<img src="logo-1x.png" srcset="logo-1x.png 1x, logo-2x.png 2x" alt="Логотип">`,
    points: [
      'Дескрипторы ширины (400w, 800w) в srcset сообщают браузеру реальную ширину каждого файла в пикселях до его скачивания.',
      'Атрибут sizes подсказывает браузеру, какую ширину на экране займёт картинка в текущей сетке колонок.',
      'Для фиксированных элементов (логотипы, иконки) используй дескрипторы плотности пикселей: 1x, 2x.'
    ],
    tags: ['HTML', 'srcset', 'sizes', 'retina', 'img', 'webp', 'адаптивные картинки'],
    when: 'Для контентных фотографий в каталогах, карточках блога и баннерах.',
    alternatives: 'Если нужно полностью сменить кадрирование (например, вертикальное фото на телефоне и горизонтальное на ПК), используй тег <picture>.',
    url: 'https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Structuring_content/Responsive_images'
  },
  {
    lang: 'html',
    id: 'html-input-file-accept',
    title: 'HTML: выбор файлов <input type="file"> (accept, multiple, capture)',
    summary: 'Фильтрация разрешённых форматов файлов в проводнике и прямой вызов камеры смартфона для фото документа.',
    code: `<!-- Выбор нескольких изображений в формате PNG, JPG или WebP -->
<label class="upload-zone">
  <span>Выберите фотографии или перетащите сюда</span>
  <input
    type="file"
    name="photos[]"
    accept="image/png, image/jpeg, image/webp"
    multiple
  >
</label>

<!-- Вызов камеры смартфона напрямую для сканирования документа -->
<input type="file" accept="image/*" capture="environment">`,
    example: `accept=".pdf,.docx,application/pdf"`,
    points: [
      'Атрибут accept="image/png, image/jpeg" делает неактивными все неподходящие файлы в системном окне выбора.',
      'Для загрузки сразу нескольких файлов на сервер в PHP имя инпута должно заканчиваться квадратными скобками: name="photos[]" и атрибут multiple.',
      'capture="environment" на телефонах сразу открывает заднюю камеру, а capture="user" — фронтальную селфи-камеру.'
    ],
    tags: ['HTML', 'file', 'accept', 'multiple', 'capture', 'upload', 'загрузка файла', 'камера'],
    when: 'В формах загрузки аватара, прикрепления документов, чеков и галерей.',
    alternatives: 'Не забывай дублировать проверку MIME-типа на сервере через PHP finfo, так как фильтр accept можно обойти.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/file'
  },
  {
    lang: 'html',
    id: 'html-contenteditable-spellcheck',
    title: 'HTML: редактируемые блоки contenteditable, spellcheck и translate="no"',
    summary: 'Превращение любого HTML-элемента в визуальный редактор текста и управление автопереводом брендов и кода.',
    code: `<!-- Инлайн-редактируемый заголовок документа (как в Notion) -->
<h2 contenteditable="plaintext-only" spellcheck="true">
  Нажмите, чтобы переименовать проект
</h2>

<!-- Запрет автопереводчику браузера ломать названия брендов и код -->
<code translate="no">justify-content: space-between</code>`,
    example: `<input type="text" spellcheck="false" autocapitalize="off" autocomplete="off">`,
    points: [
      'Современное значение contenteditable="plaintext-only" разрешает редактировать текст, но при вставке из буфера обмена автоматически очищает чужие шрифты и стили!',
      'Атрибут translate="no" защищает логотипы, имена переменных, команды терминала и фрагменты кода от искажения встроенным переводчиком Chrome/Яндекс.',
      'На полях логина, email и поиска кода ставь spellcheck="false", чтобы браузер не подчёркивал никнеймы красной волнистой линией.'
    ],
    tags: ['HTML', 'contenteditable', 'plaintext-only', 'spellcheck', 'translate', 'редактор', 'автоперевод'],
    when: 'Для быстрых редактируемых заметок, заголовков досок задач и блоков кода.',
    alternatives: 'Для обычных полей ввода в формах всегда предпочтительнее стандартные <input> и <textarea>.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/contenteditable'
  },
  {
    lang: 'html',
    id: 'html-noscript-base-meta-refresh',
    title: 'HTML: служебные теги <head> (<base>, <noscript>, http-equiv, color-scheme)',
    summary: 'Системная поддержка светлой/тёмной темы контролов браузера, фолбэк без JS и базовый URL документа.',
    code: `<head>
  <!-- Сообщает браузеру тему страницы ещё до загрузки CSS (перекрашивает фон и скроллбары!) -->
  <meta name="color-scheme" content="dark light">

  <!-- Предупреждение на случай отключённого JavaScript -->
  <noscript>
    <div class="alert">Для работы интерактивной песочницы включите JavaScript.</div>
  </noscript>
</head>`,
    example: `<meta http-equiv="Content-Security-Policy" content="default-src 'self'">`,
    points: [
      '<meta name="color-scheme" content="dark light"> мгновенно переключает системный фон браузера, полосы прокрутки и поля форм в тёмный режим без белой вспышки при загрузке!',
      'Тег <noscript> рендерит своё содержимое только если в браузере пользователя выключен или заблокирован JavaScript.',
      'Тег <base href="https://example.com/app/"> меняет базовый путь для всех относительных ссылок на странице (используй с осторожностью, так как он влияет и на якорные ссылки #anchor).'
    ],
    tags: ['HTML', 'color-scheme', 'noscript', 'base', 'http-equiv', 'csp', 'head', 'тёмная тема'],
    when: 'Метатег color-scheme рекомендуется добавлять во все проекты с поддержкой тёмной темы.',
    alternatives: 'Редиректы лучше делать через HTTP-статус 301/302 на сервере, а не через устаревший <meta http-equiv="refresh">.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name'
  },

  // ==========================================
  // Дополнительные справочники CSS3 (селекторы, раскладка, визуал)
  // ==========================================
  {
    lang: 'css',
    id: 'css-attribute-selectors',
    title: 'CSS: селекторы по атрибутам ([href^="https"], [href$=".pdf"], [data-*])',
    summary: 'Автоматическая стилизация внешних ссылок, ссылок на скачивание документов и состояний компонентов без лишних классов.',
    code: `/* Все внешние ссылки, начинающиеся с https:// */
a[href^="https://"]:not([href*="devshelf.ru"])::after {
  content: " ↗";
}

/* Все ссылки, заканчивающиеся на .pdf или .zip */
a[href$=".pdf"]::before {
  content: "📄 ";
}

/* Поиск подстроки в любом месте атрибута без учёта регистра (флаг i) */
img[src*=".svg" i] {
  display: inline-block;
}`,
    example: `[aria-expanded="true"] .chevron { rotate: 180deg; }`,
    points: [
      '[attr^="val"] проверяет начало строки, [attr$="val"] — конец строки, а [attr*="val"] — вхождение подстроки в любом месте!',
      'Флаг i перед закрывающей скобкой ([href$=".pdf" i]) делает проверку нечувствительной к регистру (.PDF и .pdf).',
      'Привязка стилей к ARIA-состояниям ([aria-selected="true"], [aria-expanded="true"]) избавляет от рассинхрона между визуальным классом .active и доступностью.'
    ],
    tags: ['CSS', 'attribute selectors', 'href', 'data', 'aria', 'селекторы атрибутов', 'ссылки'],
    when: 'Для автоматической маркировки внешних ссылок, файлов для скачивания и стилизации ARIA-компонентов.',
    alternatives: 'Ручное проставление класса .external-link на каждой ссылке в статьях легко забыть.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/Attribute_selectors'
  },
  {
    lang: 'css',
    id: 'css-combinators',
    title: 'CSS: комбинаторы селекторов (>, +, ~) и паттерн «Лоботомированная сова» (* + *)',
    summary: 'Точный выбор непосредственных детей, следующего соседа и автоматические отступы между блоками статьи.',
    code: `/* Только прямые дочерние li первого уровня (не трогая вложенные подменю) */
.menu > li {
  padding-inline: 12px;
}

/* Классический ритм статьи: отступ сверху у каждого элемента, за которым кто-то идёт (* + *) */
.prose > * + * {
  margin-top: 1em;
}

/* Подпись сразу после заголовка h2 имеет уменьшенный отступ */
.prose > h2 + p {
  margin-top: 0.4em;
}`,
    example: `input:checked + .slider-thumb { translate: 20px 0; }`,
    points: [
      'Комбинатор > выбирает только прямых детей (первый уровень вложенности), защищая вложенные компоненты от протечки стилей.',
      'Комбинатор + (следующий сосед) выбирает элемент, который идёт СРАЗУ после первого (идеально для связки input:checked + label и h2 + p).',
      'Паттерн .prose > * + * задаёт верхний отступ всем элементам внутри статьи, кроме самого первого, создавая идеальный вертикальный ритм!'
    ],
    tags: ['CSS', 'combinators', 'child', 'sibling', 'owl', 'комбинаторы', 'соседний селектор', 'ритм'],
    when: 'При оформлении текстовых статей (.prose), кастомных переключателей (checkbox + span) и многоуровневых меню.',
    alternatives: 'Для одномерных списков карточек и кнопок проще использовать display: flex; flex-direction: column; gap: 16px.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_selectors/Selectors_and_combinators'
  },
  {
    lang: 'css',
    id: 'css-min-max-fit-content',
    title: 'CSS: адаптивные ключевые слова размеров (min-content, max-content, fit-content)',
    summary: 'Подстройка ширины блока ровно под длину текста внутри него без растягивания на всю ширину родителя.',
    code: `.section-badge {
  /* Блок сжимается ровно по ширине текста, но не шире 100% экрана на мобильном! */
  width: fit-content;
  padding: 4px 12px;
  border: 1px solid var(--line);
}

.pricing-grid {
  display: grid;
  /* Первая колонка ровно по ширине самой длинной подписи, вторая забирает остаток */
  grid-template-columns: max-content 1fr;
}`,
    example: `width: fit-content;\nmargin-inline: auto; /* Центрирует блок по ширине его контента без inline-block! */`,
    points: [
      'width: fit-content — волшебное свойство: блок обтягивает свой текст как inline-block, но при этом остаётся блочным (его можно отцентрировать через margin-inline: auto) и переносит строки, если экран уже текста!',
      'max-content разворачивает текст в одну длинную строку без переносов (удобно для колонок с датами и ценами в гриде).',
      'min-content сжимает блок до ширины самого длинного слова внутри него.'
    ],
    tags: ['CSS', 'fit-content', 'max-content', 'min-content', 'width', 'размеры', 'центрирование'],
    when: 'Для бейджей, тегов, центрируемых заголовков с рамкой, цитат и колонок CSS Grid.',
    alternatives: 'display: inline-block не позволяет отцентрировать сам элемент через margin: 0 auto без text-align на родителе.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content'
  },
  {
    lang: 'css',
    id: 'css-blend-modes-masks',
    title: 'CSS: режимы наложения (mix-blend-mode) и градиентные маски затухания (mask-image)',
    summary: 'Плавное растворение краёв прокручиваемого списка или кода в прозрачность на любом фоне.',
    code: `/* Плавное растворение правого края длинной строки табов или кода в прозрачность */
.scroll-fade-right {
  -webkit-mask-image: linear-gradient(to right, #000 85%, transparent 100%);
  mask-image: linear-gradient(to right, #000 85%, transparent 100%);
}

/* Плавное растворение текста снизу в превью статьи */
.article-preview {
  mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);
}`,
    example: `mix-blend-mode: overlay; /* Наложение текстуры или свечения на фон */`,
    points: [
      'Почему mask-image лучше наложенного поверх градиента? Потому что mask-image делает прозрачным сам элемент, и под ним может быть любой сложный фон, картинка или смена темы оформления!',
      'Внутри mask-image чёрный цвет (#000, непрозрачный) означает 100% видимую область, а transparent — полностью скрытую.',
      'Свойство mix-blend-mode: multiply позволяет мгновенно убрать белый фон у логотипа на светлой странице.'
    ],
    tags: ['CSS', 'mask-image', 'mix-blend-mode', 'background-blend-mode', 'маска', 'затухание', 'прозрачность'],
    when: 'Для горизонтальных списков табов, превью заблокированных статей и каруселей логотипов.',
    alternatives: 'Костыль с position: absolute и градиентом в цвет фона ломается при переключении тёмной/светлой темы.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/mask-image'
  },
  {
    lang: 'css',
    id: 'css-property-houdini',
    title: 'CSS: типизированные переменные @property (плавная анимация градиентов и чисел)',
    summary: 'Регистрация типа CSS-переменной (<angle>, <color>, <length>), позволяющая плавно анимировать градиенты в браузере.',
    code: `@property --gradient-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.animated-border {
  background: conic-gradient(from var(--gradient-angle), #38bdf8, #818cf8, #38bdf8);
  animation: spin-angle 4s linear infinite;
}

@keyframes spin-angle {
  to { --gradient-angle: 360deg; }
}`,
    example: `/* Без @property браузер считает переменную обычной строкой и не может плавно менять её от 0deg до 360deg */`,
    points: [
      'По умолчанию CSS-переменные не имеют типа, поэтому браузер не умеет плавно интерполировать их внутри linear-gradient или conic-gradient.',
      'Директива @property сообщает движку CSS точный тип переменной (<angle>, <color>, <percentage>, <number>), открывая полноценную анимацию через transition и @keyframes!',
      'Параметр initial-value обязателен при объявлении @property.'
    ],
    tags: ['CSS', '@property', 'houdini', 'custom properties', 'переменные', 'анимация градиента', 'conic-gradient'],
    when: 'Для анимированных градиентных рамок, плавной смены цветов градиента при ховере и круговых прогресс-баров.',
    alternatives: 'Вращение огромного псевдоэлемента ::before через transform: rotate(360deg) требует overflow: hidden.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@property'
  },
  {
    lang: 'css',
    id: 'css-starting-style-discrete',
    title: 'CSS: плавная анимация появления из display: none (@starting-style и allow-discrete)',
    summary: 'Современный стандарт CSS для плавного открытия и закрытия модальных окон <dialog> и поповеров без JS-таймеров.',
    code: `dialog {
  opacity: 0;
  transform: scale(0.95);
  transition:
    opacity 200ms ease,
    transform 200ms ease,
    display 200ms allow-discrete,
    overlay 200ms allow-discrete;
}

dialog[open] {
  opacity: 1;
  transform: scale(1);

  /* Начальная точка анимации в момент перехода из display: none в открытое состояние! */
  @starting-style {
    opacity: 0;
    transform: scale(0.95);
  }
}`,
    example: `/* Позволяет плавно анимировать и открытие, и закрытие нативного <dialog> и [popover] */`,
    points: [
      'Раньше элемент, появляющийся из display: none, прыгал мгновенно без transition. Правило @starting-style задаёт стартовые стили первого кадра появления!',
      'Ключевое слово transition-behavior: allow-discrete удерживает элемент в DOM на время анимации закрытия (200ms), прежде чем применить display: none.',
      'Свойство overlay в списке transition удерживает модалку в верхнем слое (#top-layer) до конца плавного затухания.'
    ],
    tags: ['CSS', '@starting-style', 'allow-discrete', 'dialog', 'popover', 'анимация появления', 'display none'],
    when: 'При стилизации нативных модальных окон <dialog>, выпадающих меню [popover] и добавляемых в DOM карточек.',
    alternatives: 'Для старых браузеров используют покадровую анимацию animation: fadeIn 200ms ease.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style'
  },

  // ==========================================
  // Дополнительные справочники JavaScript & Web API
  // ==========================================
  {
    lang: 'javascript',
    id: 'js-reduce-flatmap',
    title: 'JS: агрегация данных (.reduce) и плоская трансформация (.flatMap)',
    summary: 'Подсчёт общей суммы корзины товаров, сборка словаря по ID и разворачивание вложенных массивов за один проход.',
    code: `const cart = [
  { id: 1, title: 'Клавиатура', price: 4500, qty: 1, tags: ['usb', 'mech'] },
  { id: 2, title: 'Мышь',       price: 2200, qty: 2, tags: ['usb', 'wireless'] }
];

// Подсчёт итоговой стоимости корзины (всегда передавай начальное значение 0!)
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0); // 8900

// Сбор всех тегов из всех товаров в один плоский массив
const allTags = cart.flatMap(item => item.tags); // ['usb', 'mech', 'usb', 'wireless']`,
    example: `const byId = cart.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});`,
    points: [
      'В метод .reduce(fn, initialValue) ВСЕГДА передавай второй аргумент (например, 0 или {}), иначе на пустом массиве [] вызов упадёт с TypeError!',
      'Метод .flatMap(fn) работает как комбинация .map() + .flat(1), но быстрее за один проход (также позволяет одновременно фильтровать и мапить, возвращая [] для пропуска элемента!).',
      'Для простой группировки элементов по полю в современном JS лучше использовать нативный Object.groupBy(items, fn) вместо сложного reduce.'
    ],
    tags: ['JavaScript', 'reduce', 'flatMap', 'flat', 'корзина', 'сумма', 'агрегация', 'массивы'],
    when: 'При расчёте итогов заказа, статистики дашборда и извлечении вложенных списков тегов или комментариев.',
    alternatives: 'Если reduce становится нечитаемым на 15 строк, обычный цикл for (const item of items) будет понятнее коллегам.',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce'
  },
  {
    lang: 'javascript',
    id: 'js-classes-private-fields',
    title: 'JS: классы ES2022+, приватные поля (#field), геттеры и статические методы',
    summary: 'Настоящая инкапсуляция состояния через синтаксис решётки #private без утечки внутренних свойств наружу.',
    code: `class TokenStore {
  // Настоящее приватное поле: недоступно снаружи класса!
  #token = null;

  constructor(initialToken) {
    this.#token = initialToken;
  }

  get isAuthenticated() {
    return Boolean(this.#token);
  }

  clear() {
    this.#token = null;
  }
}

const store = new TokenStore('secret_jwt');
console.log(store.isAuthenticated); // true`,
    example: `static fromJson(jsonStr) { return new User(JSON.parse(jsonStr)); }`,
    points: [
      'Поля и методы, начинающиеся с символа # (например, #token, #validate()), защищены на уровне движка JS — к ним нельзя обратиться снаружи даже через точку.',
      'Геттеры (get propName()) позволяют вычислять свойство на лету при чтении без круглых скобок: store.isAuthenticated.',
      'Поля класса теперь можно объявлять прямо в теле класса сверху без обязательного конструктора.'
    ],
    tags: ['JavaScript', 'class', 'private', '#field', 'get', 'set', 'static', 'ооп', 'классы'],
    when: 'При написании UI-компонентов, сторов состояния, API-клиентов и игровых сущностей.',
    alternatives: 'Для небольших утилит без внутреннего состояния достаточно обычных экспортируемых функций или замыканий.',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Private_properties'
  },
  {
    lang: 'javascript',
    id: 'js-date-timestamps',
    title: 'JS: работа с датами (Date.now, toISOString, сравнение и разница дат)',
    summary: 'Хранение времени в UTC, вычисление разницы между датами в днях/часах и проверка истечения срока.',
    code: `const nowMs = Date.now(); // Текущий таймстамп в миллисекундах
const isoString = new Date().toISOString(); // "2026-09-15T11:30:00.000Z" (стандарт для БД и API)

// Прибавление 7 дней к текущей дате
const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);

// Разница между двумя датами в полных сутках
const diffMs = nextWeek - new Date();
const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24)); // 7`,
    example: `const isExpired = new Date(order.expiresAt).getTime() < Date.now();`,
    points: [
      'Осторожно: в конструкторе new Date(2026, 0, 15) месяцы нумеруются с нуля (0 — январь, 11 — декабрь), а дни недели в getDay() начинаются с воскресенья (0)!',
      'Для передачи дат между фронтендом и сервером всегда используй строку ISO 8601 (date.toISOString()) или Unix-таймстамп.',
      'Для красивого вывода даты пользователю на русском языке используй new Intl.DateTimeFormat("ru-RU").format(date).'
    ],
    tags: ['JavaScript', 'Date', 'Date.now', 'toISOString', 'timestamp', 'дата', 'время', 'таймер'],
    when: 'В таймерах обратного отсчёта акций, проверке свежести кэша и фильтрах по диапазону дат.',
    alternatives: 'При сложной работе с часовыми поясами используют Intl.DateTimeFormat с опцией timeZone: "Europe/Moscow".',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date'
  },
  {
    lang: 'javascript',
    id: 'js-keyboard-shortcuts',
    title: 'JS: обработка горячих клавиш (keydown, e.key, Ctrl+K / Cmd+K и Esc)',
    summary: 'Профессиональная настройка глобальных шорткатов с кроссплатформенной поддержкой Windows/Linux (Ctrl) и macOS (Cmd).',
    code: `window.addEventListener('keydown', (e) => {
  // Поддержка и Ctrl+K (Windows/Linux), и Cmd+K (macOS)
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault(); // Отменяем стандартный фокус браузера в адресную строку
    openCommandPalette();
  }

  // Одиночная клавиша "/" для фокуса в поиск (только если курсор уже не стоит в input!)
  const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)
                || document.activeElement?.isContentEditable;

  if (!isTyping && e.key === '/') {
    e.preventDefault();
    searchInput.focus();
  }
});`,
    example: `if (e.key === 'Escape') closeModal();`,
    points: [
      'Всегда используй современное свойство e.key ("Escape", "Enter", "ArrowDown", "k") вместо давно устаревшего числового e.keyCode!',
      'Для комбинаций вроде Ctrl+K обязательно проверяй (e.ctrlKey || e.metaKey), чтобы шорткат одинаково работал и на ПК, и на Mac.',
      'Для одиночных горячих клавиш ("/", "t", "?") обязательно проверяй, что фокус сейчас НЕ находится внутри <input> или <textarea>, иначе пользователь не сможет напечатать эту букву в форме!'
    ],
    tags: ['JavaScript', 'keydown', 'key', 'ctrlKey', 'metaKey', 'Escape', 'Enter', 'горячие клавиши', 'шорткаты'],
    when: 'Для командной палитры (Ctrl+K), быстрого поиска (/), закрытия окон (Esc) и навигации стрелками.',
    alternatives: 'Для нативного <dialog> закрытие по клавише Escape уже встроено в браузер по умолчанию.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/KeyboardEvent/key'
  },
  {
    lang: 'javascript',
    id: 'js-matchmedia-network-visibility',
    title: 'JS: системные события браузера (matchMedia, visibilitychange, online/offline)',
    summary: 'Реакция скрипта на смену размера экрана, сворачивание вкладки пользователем и потерю интернет-соединения.',
    code: `// 1. Слушатель медиазапроса в JS (срабатывает только при переходе через брейкпоинт 768px!)
const mq = window.matchMedia('(max-width: 768px)');
mq.addEventListener('change', (e) => {
  if (!e.matches) closeMobileDrawer();
});

// 2. Пауза видео или опроса сервера, когда пользователь переключился на другую вкладку
document.addEventListener('visibilitychange', () => {
  if (document.hidden) pausePolling();
  else resumePolling();
});

// 3. Индикатор потери и восстановления сети
window.addEventListener('offline', () => showBanner('Нет подключения к сети'));
window.addEventListener('online',  () => hideBanner());`,
    example: `const isMobile = window.matchMedia('(max-width: 768px)').matches;`,
    points: [
      'window.matchMedia("(max-width: 768px)") намного эффективнее события window.onresize: он вызывает колбэк ровно в тот момент, когда экран перешагнул порог 768px, а не на каждый пиксель движения мыши!',
      'Событие visibilitychange позволяет экономить батарею ноутбука и смартфона, ставя на паузу тяжёлые анимации и таймеры на фоновых вкладках.',
      'События online и offline незаменимы в PWA и редакторах документов для уведомления о работе из кэша.'
    ],
    tags: ['JavaScript', 'matchMedia', 'visibilitychange', 'online', 'offline', 'navigator', 'сеть', 'вкладка'],
    when: 'При закрытии мобильного меню на ресайзе, фоновом опросе API и индикации офлайн-режима.',
    alternatives: 'Отправка аналитики при закрытии вкладки делается через navigator.sendBeacon("/api/stats", data) внутри visibilitychange.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Window/matchMedia'
  },

  // ==========================================
  // Дополнительные справочники PHP 8.x & PDO
  // ==========================================
  {
    lang: 'php',
    id: 'php-pdo-select-in-pagination',
    title: 'PHP 8 & PDO: выборка по списку ID (WHERE IN), LIKE-поиск и пагинация (LIMIT / OFFSET)',
    summary: 'Безопасная генерация плейсхолдеров для оператора IN (...), поиск по подстроке и постраничная навигация.',
    code: `<?php
declare(strict_types=1);

// 1. Безопасный поиск по подстроке LIKE (проценты % добавляются к значению в PHP, а не в SQL!)
$stmt = $pdo->prepare('SELECT id, title FROM articles WHERE title LIKE :query LIMIT :limit OFFSET :offset');
$stmt->bindValue(':query', '%' . $search . '%', PDO::PARAM_STR);
$stmt->bindValue(':limit', 20, PDO::PARAM_INT);
$stmt->bindValue(':offset', ($page - 1) * 20, PDO::PARAM_INT);
$stmt->execute();
$articles = $stmt->fetchAll();

// 2. Безопасная выборка по массиву ID: WHERE id IN (?, ?, ?)
$ids = [10, 25, 42];
$placeholders = implode(',', array_fill(0, count($ids), '?'));
$stmtIn = $pdo->prepare("SELECT * FROM products WHERE id IN ($placeholders)");
$stmtIn->execute($ids);`,
    example: `$totalCount = (int) $pdo->query('SELECT COUNT(*) FROM articles')->fetchColumn();`,
    points: [
      'В подготовленных запросах PDO нельзя привязать целый массив к одному плейсхолдеру IN (:ids). Правильный паттерн — сгенерировать строку знаков вопроса через implode(",", array_fill(0, count($ids), "?"))!',
      'При поиске через LIKE знаки процентов "%" склеиваются с переменной внутри PHP ("%" . $q . "%") и передаются в плейсхолдер.',
      'Метод $stmt->fetchColumn() удобно возвращает одно скалярное значение первого столбца (например, результат SELECT COUNT(*)).'
    ],
    tags: ['PHP', 'PDO', 'WHERE IN', 'LIKE', 'LIMIT', 'OFFSET', 'fetchColumn', 'пагинация', 'поиск в бд'],
    when: 'В каталогах товаров с пагинацией, поиске по базе и выборке товаров корзины по массиву ID.',
    alternatives: 'Перед выполнением запроса с WHERE IN обязательно проверь, что массив $ids не пустой (if (!$ids) return [];), иначе SQL выдаст ошибку на пустых скобках IN ().',
    url: 'https://www.php.net/manual/ru/pdostatement.bindvalue.php'
  },
  {
    lang: 'php',
    id: 'php-headers-redirects-cors',
    title: 'PHP 8: HTTP-заголовки (header), редиректы 301/302, CORS и скачивание файлов',
    summary: 'Правильное выполнение перенаправлений с обязательным exit, настройка междоменных запросов CORS и отдача PDF/CSV.',
    code: `<?php
declare(strict_types=1);

// 1. Безопасный редирект после успешной отправки формы (паттерн Post/Redirect/Get)
header('Location: /profile?saved=1', true, 303);
exit; // ОБЯЗАТЕЛЬНО вызывай exit после header('Location: ...')!

// 2. Разрешение CORS-запросов для фронтенда с другого домена/порта
header('Access-Control-Allow-Origin: https://app.example.com');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}`,
    example: `header('Content-Disposition: attachment; filename="report.csv"');`,
    points: [
      'Самая опасная ошибка в PHP — забыть написать exit; сразу после header("Location: /login")! Без exit скрипт продолжит выполняться дальше и отдаст закрытый контент.',
      'Функция header() должна вызываться ДО любого вывода текста, пробелов или HTML в браузер (иначе возникнет ошибка Headers already sent).',
      'Паттерн Post/Redirect/Get (редирект после обработки POST-формы) защищает от повторной отправки формы при нажатии клавиши F5.'
    ],
    tags: ['PHP', 'header', 'Location', 'redirect', 'CORS', 'http_response_code', 'редирект', 'заголовки'],
    when: 'При проверке авторизации, редиректах после сохранения форм и настройке REST API.',
    alternatives: 'Для постоянных SEO-редиректов старых страниц передавай код 301: header("Location: /new-url", true, 301); exit;.',
    url: 'https://www.php.net/manual/ru/function.header.php'
  },
  {
    lang: 'php',
    id: 'php-env-config-errors',
    title: 'PHP 8: переменные окружения (getenv / $_ENV), логирование и скрытие ошибок в продакшене',
    summary: 'Безопасное хранение паролей БД вне Git-репозитория и перехват фатальных ошибок через Throwable.',
    code: `<?php
declare(strict_types=1);

// На продакшене НИКОГДА не показываем стектрейс ошибок пользователю на экран!
ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);

// Чтение секретов из переменных окружения со значением по умолчанию
$dbHost = $_ENV['DB_HOST'] ?? getenv('DB_HOST') ?: '127.0.0.1';

// Глобальный перехватчик любых исключений и ошибок типизации (TypeError, Error)
set_exception_handler(function (Throwable $e): void {
    error_log(sprintf('[%s] %s in %s:%d', get_class($e), $e->getMessage(), $e->getFile(), $e->getLine()));
    http_response_code(500);
    echo 'Произошла ошибка сервера. Попробуйте позже.';
});`,
    example: `/* Обязательно добавь файл .env в .gitignore, чтобы пароли от БД не попали на GitHub! */`,
    points: [
      'В PHP 7/8 базовый интерфейс Throwable ловит сразу всё: и обычные исключения (Exception), и фатальные ошибки движка (Error, TypeError, ParseError)!',
      'На боевом сервере всегда выключай вывод ошибок на экран (display_errors = 0), чтобы не раскрыть посетителям пути к файлам и структуру SQL-таблиц.',
      'Пароли от базы данных и ключи API храни в файле .env (добавленном в .gitignore) или переменных окружения сервера.'
    ],
    tags: ['PHP', 'Throwable', 'try', 'catch', 'error_log', 'getenv', 'env', 'display_errors', 'логирование', 'ошибки'],
    when: 'Во входном файле index.php или bootstrap.php каждого проекта.',
    alternatives: 'На этапе локальной разработки включай display_errors = 1 для быстрой отладки.',
    url: 'https://www.php.net/manual/ru/language.errors.php7.php'
  },
  {
    lang: 'php',
    id: 'php-preg-match-validation',
    title: 'PHP 8: регулярные выражения (preg_match, preg_replace) с поддержкой кириллицы (/u)',
    summary: 'Проверка формата телефона, слага и очистка строк по шаблону с обязательным модификатором Юникода /u.',
    code: `<?php
declare(strict_types=1);

// Модификатор /u в конце регулярки ОБЯЗАТЕЛЕН для корректной работы с русскими буквами UTF-8!
$isValidName = (bool) preg_match('/^[а-яёa-z\s\-]{2,40}$/iu', $inputName);

// Очистка номера телефона от скобок, пробелов и дефисов (оставляем только цифры)
$cleanPhone = preg_replace('/\D+/', '', '+7 (999) 123-45-67'); // "79991234567"

// Извлечение именованных групп (?<year>\d{4})
if (preg_match('/^(?<year>\d{4})-(?<month>\d{2})$/', '2026-09', $matches)) {
    echo $matches['year']; // "2026"
}`,
    example: `$slug = trim(preg_replace('/[^a-z0-9]+/', '-', strtolower($str)), '-');`,
    points: [
      'При работе с кириллицей в регулярных выражениях PHP всегда ставь модификатор u после закрывающего слэша (/.../iu), иначе классы символов и регистр сломаются на UTF-8!',
      'Не забывай добавлять букву «ё» отдельно в диапазон [а-яё], так как в таблице символов UTF-8 буква «ё» стоит отдельно от диапазона «а–я»!',
      'Именованные карманы (?<name>...) делают массив совпадений $matches самодокументируемым.'
    ],
    tags: ['PHP', 'preg_match', 'preg_replace', 'regex', 'регулярные выражения', 'кириллица', 'телефон', 'валидация'],
    when: 'При нормализации номеров телефонов, проверке промокодов, парсинге параметров и генерации ЧПУ (slug).',
    alternatives: 'Для простой замены фиксированной подстроки всегда используй быстрый str_replace() вместо preg_replace().',
    url: 'https://www.php.net/manual/ru/function.preg-match.php'
  }
];
