export const finalReferenceTopics = [
  // ==========================================
  // 25 дополнительных справочников для полного покрытия 170+ тем
  // ==========================================
  {
    lang: 'html',
    id: 'html-input-color-date-time',
    title: 'HTML: нативные пикеры цвета и времени (type="color", "date", "time", "datetime-local")',
    summary: 'Системные виджеты выбора цвета, календарной даты и времени с ограничением доступного диапазона min и max.',
    code: `<label>
  Акцентный цвет:
  <input type="color" name="accent" value="#38bdf8">
</label>

<label>
  Дата бронирования (только 2026 год):
  <input type="date" name="booking_date" min="2026-01-01" max="2026-12-31" required>
</label>

<label>
  Время встречи (с 09:00 до 19:00 с шагом 15 минут):
  <input type="time" name="slot" min="09:00" max="19:00" step="900">
</label>`,
    example: `/* Цвет иконки календаря внутри инпута автоматически следует за свойством color-scheme: dark! */`,
    points: [
      'Значение (value, min, max) у <input type="date"> в коде и при отправке на сервер ВСЕГДА имеет строгий формат ГГГГ-ММ-ДД ("2026-09-15"), независимо от того, как браузер отображает дату на экране пользователя (15.09.2026)!',
      'У <input type="time"> атрибут step задаётся в секундах: step="900" делает шаг выбора равным 15 минутам (900 секунд).',
      'У <input type="color"> значение всегда представляет собой 7-символьный HEX-код в нижнем регистре ("#38bdf8").'
    ],
    tags: ['HTML', 'color', 'date', 'time', 'datetime-local', 'month', 'week', 'календарь', 'палитра', 'дата'],
    when: 'В формах бронирования, фильтрах по датам, редакторах тем и генераторах стилей.',
    alternatives: 'Если у иконки календаря в тёмной теме остался чёрный цвет, убедись, что на :root или самом инпуте задано color-scheme: dark.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/date'
  },
  {
    lang: 'html',
    id: 'html-meter-vs-progress',
    title: 'HTML: семантика <mark>, <ins>, <del>, <kbd>, <samp> и <output> в интерфейсах',
    summary: 'Быстрая шпаргалка по строчным семантическим тегам для результатов поиска, диффов кода и горячих клавиш.',
    code: `<!-- Подсветка найденного слова в результатах поиска -->
<p>По запросу «<mark>grid</mark>» найдено <output>18</output> справочников.</p>

<!-- Отображение изменений в истории версий (Diff) -->
<p>Поддержка: <del>IE 11</del> <ins>Все современные браузеры</ins></p>

<!-- Горячая клавиша в меню -->
<span class="shortcut"><kbd>Ctrl</kbd> + <kbd>S</kbd></span>`,
    example: `mark { background: rgba(56, 189, 248, 0.25); color: inherit; border-radius: 3px; padding: 0 3px; }`,
    points: [
      'По умолчанию браузер красит <mark> в ярко-жёлтый цвет маркера. В тёмной теме обязательно переопредели его на мягкий полупрозрачный акцент (rgba(56, 189, 248, 0.22)).',
      'Пара <del> (удалено) и <ins> (добавлено) идеально подходит как для старых/новых цен, так и для показа правок текста или чейнджлогов.',
      'Тег <output> семантически связывает результат расчёта с ползунками и инпутами формы.'
    ],
    tags: ['HTML', 'mark', 'output', 'del', 'ins', 'kbd', 'подсветка поиска', 'дифф', 'горячие клавиши'],
    when: 'В выдаче живого поиска, калькуляторах, документации и истории изменений.',
    alternatives: 'Обычный <span class="highlight"> не сообщает скринридеру о смысловом выделении совпадения.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/mark'
  },
  {
    lang: 'html',
    id: 'html-svg-primitives',
    title: 'SVG: базовые фигуры (<rect>, <circle>, <line>, <polyline>, <path>)',
    summary: 'Рисование аккуратных векторных иконок, стрелок, чекбоксов и графиков прямо в HTML-коде без графических редакторов.',
    code: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Прямоугольник со скруглёнными углами rx="6" -->
  <rect x="2" y="2" width="36" height="36" rx="6" stroke="#38bdf8" stroke-width="2"/>
  <!-- Круг по центру (cx, cy) и радиусу r -->
  <circle cx="60" cy="20" r="16" stroke="#818cf8" stroke-width="2"/>
  <!-- Ломаная линия галочки (polyline) -->
  <polyline points="90 20 98 28 114 12" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    example: `stroke-dasharray: 100; stroke-dashoffset: 25; /* Заполнение кругового прогресс-бара на 75%! */`,
    points: [
      'Атрибуты stroke-linecap="round" и stroke-linejoin="round" скругляют кончики и углы векторных линий, делая иконки дружелюбными и аккуратными (как в Lucide / Feather Icons).',
      'У прямоугольника <rect> скругление углов задаётся атрибутом rx="8".',
      'Добавив кругу <circle> атрибут pathLength="100", можно задавать процент заполнения кольца напрямую через stroke-dasharray="75 100" без вычисления длины окружности 2πR!'
    ],
    tags: ['HTML', 'SVG', 'rect', 'circle', 'line', 'polyline', 'path', 'pathLength', 'векторные фигуры'],
    when: 'При создании иконок интерфейса, круговых индикаторов прогресса и мини-спарклайнов.',
    alternatives: 'Для растровых фотографий используй WebP/AVIF, а для всех иконок и схем — только SVG.',
    url: 'https://developer.mozilla.org/ru/docs/Web/SVG/Tutorial/Basic_Shapes'
  },
  {
    lang: 'css',
    id: 'css-grid-template-rows-animate',
    title: 'CSS: плавная анимация высоты от 0 до auto через grid-template-rows: 0fr -> 1fr',
    summary: 'Современный чистый способ плавно раскрыть аккордеон или выпадающий блок с неизвестной высотой текста без JS.',
    code: `.accordion-body {
  display: grid;
  grid-template-rows: 0fr; /* В закрытом состоянии высота дорожки равна 0fr */
  transition: grid-template-rows 250ms cubic-bezier(0.22, 1, 0.36, 1);
}

.accordion-body.is-open {
  grid-template-rows: 1fr; /* Плавно раскрывается ровно под реальную высоту текста! */
}

.accordion-inner {
  overflow: hidden;        /* Обязательная внутренняя обёртка для схлопывания в 0 */
}`,
    example: `/* Больше никаких костылей с max-height: 999px и кривыми таймингами! */`,
    points: [
      'Десять лет в CSS нельзя было плавно анимировать height: 0 -> height: auto. Переход grid-template-rows: 0fr -> 1fr решает эту задачу идеально и без угадывания max-height!',
      'Для работы трюка внутри .accordion-body должен лежать один дочерний div (.accordion-inner) со свойством overflow: hidden;.',
      'В новейших браузерах также появляется прямое свойство interpolate-size: allow-keywords для анимации height: auto.'
    ],
    tags: ['CSS', 'grid-template-rows', '0fr', '1fr', 'height auto', 'accordion', 'анимация высоты', 'аккордеон'],
    when: 'При верстке плавно раскрывающихся спойлеров, карточек FAQ и мобильных подменю.',
    alternatives: 'Старый хак с max-height: 1000px создаёт задержку при закрытии короткого текста.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-rows'
  },
  {
    lang: 'css',
    id: 'css-focus-ring-button-reset',
    title: 'CSS: профессиональный сброс стилей кнопки (button reset) и состояний',
    summary: 'Базовый эталонный класс кнопки (.btn) с выравниванием иконки, защитой от сжатия во флексе и тактильным нажатием.',
    code: `.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  font: inherit;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;          /* Кнопка никогда не сплющится в узкой шапке или строке поиска! */
  user-select: none;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid var(--line);
  transition: transform 100ms ease, border-color 150ms ease, background-color 150ms ease;
}

.btn:active:not(:disabled) {
  transform: translateY(1px); /* Лёгкий тактильный отклик при клике */
}`,
    example: `.btn svg { width: 16px; height: 16px; flex-shrink: 0; pointer-events: none; }`,
    points: [
      'Свойство flex-shrink: 0 на кнопке и на иконке svg внутри неё гарантирует, что длинный заголовок рядом никогда не сплющит кнопку в овал!',
      'display: inline-flex; align-items: center; gap: 8px идеально выравнивает SVG-иконку и текст кнопки по одной оптической линии.',
      'Лёгкое смещение transform: translateY(1px) (или scale(0.98)) в состоянии :active делает интерфейс живым и отзывчивым.'
    ],
    tags: ['CSS', 'button', 'btn', 'inline-flex', 'flex-shrink', 'active', 'кнопка', 'сброс стилей'],
    when: 'В качестве базового класса для всех кнопок дизайн-системы проекта.',
    alternatives: 'Всегда наследуй шрифт через font: inherit;, так как браузеры по умолчанию ставят кнопкам системный Arial.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/button'
  },
  {
    lang: 'css',
    id: 'css-table-responsive-cards',
    title: 'CSS: адаптивная таблица (горизонтальный скролл и трансформация в карточки)',
    summary: 'Два надёжных паттерна отображения широких таблиц данных на узких экранах смартфонов без поломки верстки.',
    code: `/* Способ 1: аккуратная прокручиваемая обёртка с тенью */
.table-responsive {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid var(--line);
  border-radius: 8px;
}

/* Способ 2: вывод названия колонки из data-label на мобильных */
@media (max-width: 600px) {
  .mobile-cards-table td::before {
    content: attr(data-label);
    font-weight: 600;
    color: var(--muted);
  }
}`,
    example: `<td data-label="Тариф">Pro</td>`,
    points: [
      'Горизонтальная обёртка .table-responsive с overflow-x: auto — самый честный и удобный способ для таблиц сравнения, где пользователю важно сопоставлять колонки глазами.',
      'Для таблиц истории заказов (номер, дата, статус, сумма) на мобильных удобно превращать каждую строку <tr> в карточку с подписями из attr(data-label).',
      'Не забудь задать ячейкам с датами и ценами white-space: nowrap, чтобы они не ломались на 3 этажа.'
    ],
    tags: ['CSS', 'table', 'responsive', 'overflow-x', 'data-label', 'адаптивная таблица', 'мобильная таблица'],
    when: 'При верстке любых прайс-листов, историй операций и таблиц характеристик.',
    alternatives: 'Никогда не оставляй широкую таблицу без обёртки — она вызовет горизонтальный скролл всей страницы.',
    url: 'https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics/Tables'
  },
  {
    lang: 'css',
    id: 'css-sticky-footer-layout',
    title: 'CSS: прижатый к низу экрана подвал (Sticky Footer на Grid и Flex)',
    summary: 'Классический каркас страницы, при котором подвал <footer> всегда прижат к низу монитора, даже если на странице мало текста.',
    code: `body {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  margin: 0;
}

main {
  flex: 1 0 auto; /* Главный контент растягивается и толкает footer в самый низ! */
}

footer {
  flex-shrink: 0;
}`,
    example: `/* Альтернатива на CSS Grid в 3 строки:\nbody { min-height: 100dvh; display: grid; grid-template-rows: auto 1fr auto; } */`,
    points: [
      'Если на странице мало контента (например, страница 404, форма входа или пустая корзина), без этого правила подвал некрасиво подпрыгивает к середине экрана.',
      'Вариант на CSS Grid ещё короче: body { min-height: 100dvh; display: grid; grid-template-rows: auto 1fr auto; } (где шапка = auto, main = 1fr, подвал = auto)!',
      'Используй min-height: 100dvh (а не фиксированный height: 100vh), чтобы длинные страницы спокойно прокручивались дальше вниз.'
    ],
    tags: ['CSS', 'sticky footer', 'min-height', '100dvh', 'flex', 'grid', 'прижать подвал', 'футер к низу'],
    when: 'На теге <body> или корневом контейнере #app в каждом проекте.',
    alternatives: 'Никогда не прибивай обычный подвал сайта через position: fixed; bottom: 0 — он перекроет контент на маленьких экранах.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Sticky_footers'
  },

  // ==========================================
  // Дополнительные карточки JavaScript & PHP
  // ==========================================
  {
    lang: 'javascript',
    id: 'js-form-validation-api',
    title: 'JS: нативный Constraint Validation API (checkValidity, setCustomValidity, reportValidity)',
    summary: 'Программная проверка валидности формы и вывод кастомных русских сообщений об ошибках в нативных тултипах браузера.',
    code: `const passInput = document.getElementById('password');
const confirmInput = document.getElementById('password-confirm');

function validatePasswordsMatch() {
  if (confirmInput.value !== passInput.value) {
    // Устанавливаем собственный текст ошибки
    confirmInput.setCustomValidity('Пароли не совпадают');
  } else {
    // ВАЖНО: пустая строка '' сбрасывает ошибку и помечает поле как валидное!
    confirmInput.setCustomValidity('');
  }
}

confirmInput.addEventListener('input', validatePasswordsMatch);`,
    example: `if (!form.reportValidity()) return; /* Показывает системную подсказку у первого незаполненного поля */`,
    points: [
      'Главное правило setCustomValidity(msg): пока передана любая непустая строка, поле считается невалидным (:invalid). Чтобы разрешить отправку формы после исправления, ОБЯЗАТЕЛЬНО вызови input.setCustomValidity("") с пустой строкой!',
      'Метод form.checkValidity() тихо возвращает true/false, а метод form.reportValidity() дополнительно подсвечивает первое ошибочное поле и показывает подсказку пользователю.',
      'Объект input.validity содержит булевы флаги причины ошибки: valueMissing (пустое required), typeMismatch (неверный email), tooShort (меньше minlength).'
    ],
    tags: ['JavaScript', 'setCustomValidity', 'checkValidity', 'reportValidity', 'validity', 'валидация форм', 'пароли'],
    when: 'При проверке совпадения паролей, уникальности логина или сложных условий формы.',
    alternatives: 'Для полного контроля над дизайном ошибок ставят <form novalidate> и выводят текст в соседний <span class="error-msg">.',
    url: 'https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Forms/Form_validation'
  },
  {
    lang: 'javascript',
    id: 'js-history-pushstate-spa',
    title: 'JS: управление историей браузера без перезагрузки (history.pushState, replaceState, popstate)',
    summary: 'Смена URL при фильтрации каталога или переключении вкладок с поддержкой системных кнопок «Назад» и «Вперёд».',
    code: `// 1. Обновление URL при выборе вкладки (добавляет шаг в историю кнопки «Назад»)
function selectCategory(categorySlug) {
  const url = new URL(window.location.href);
  url.searchParams.set('cat', categorySlug);
  window.history.pushState({ cat: categorySlug }, '', url);
  renderCatalog(categorySlug);
}

// 2. Реакция на нажатие пользователем кнопки «Назад / Вперёд» в браузере
window.addEventListener('popstate', (event) => {
  const cat = new URLSearchParams(location.search).get('cat') ?? 'all';
  renderCatalog(cat);
});`,
    example: `history.replaceState(null, '', '?q=' + encodeURIComponent(query)); /* Меняет URL без засорения истории на каждую букву! */`,
    points: [
      'Разница между pushState и replaceState: для живого поиска при наборе каждой буквы используй replaceState (чтобы пользователю не пришлось нажимать кнопку «Назад» 20 раз по одной букве!), а для переключения крупных разделов/страниц — pushState!',
      'Событие popstate срабатывает, когда пользователь нажимает системные кнопки «Назад» или «Вперёд» в браузере (или делает свайп назад на смартфоне).',
      'Хранение активного таба и фильтра в URL позволяет пользователю обновить страницу по F5 или отправить ссылку коллеге без потери выбранного раздела.'
    ],
    tags: ['JavaScript', 'history', 'pushState', 'replaceState', 'popstate', 'роутинг', 'url', 'назад'],
    when: 'В табах, фильтрах каталога, живом поиске, модальных галереях и пошаговых формах.',
    alternatives: 'Для простых переходов внутри одной страницы также можно использовать window.location.hash и событие hashchange.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/History_API'
  },
  {
    lang: 'javascript',
    id: 'js-web-workers-offload',
    title: 'JS: фоновые вычисления без зависания интерфейса (Web Workers API)',
    summary: 'Вынос тяжёлого парсинга больших JSON/CSV-файлов, поиска или фильтрации из главного потока в отдельный поток процессора.',
    code: `// В главном скрипте (main.js): создаём воркер и отправляем ему массив данных
const worker = new Worker(new URL('./search-worker.js', import.meta.url), { type: 'module' });

worker.postMessage({ items: hugeDataset, query: 'flexbox' });

worker.addEventListener('message', (e) => {
  console.log('Отфильтровано в фоне без фризов UI:', e.data.results);
});

// В файле search-worker.js:
self.addEventListener('message', (e) => {
  const { items, query } = e.data;
  const results = items.filter(i => i.title.includes(query));
  self.postMessage({ results });
});`,
    example: `worker.terminate(); /* Принудительная остановка фонового потока */`,
    points: [
      'JavaScript в браузере однопоточен: если цикл обрабатывает 100 000 строк в главном потоке дольше 50 мс, анимации, скролл и ввод текста замирают. Web Worker выполняет код параллельно на другом ядре процессора!',
      'Внутри Web Worker нет доступа к объектам window и document (DOM), общение происходит через быстрые сообщения postMessage().',
      'Опция { type: "module" } позволяет использовать стандартные import / export внутри файла воркера.'
    ],
    tags: ['JavaScript', 'Web Worker', 'Worker', 'postMessage', 'многопоточность', 'производительность', 'фон'],
    when: 'При клиентском поиске по большим базам, генерации отчётов, сжатии изображений и криптографии.',
    alternatives: 'Для небольших задач до 10–20 мс оверхед на пересылку данных в воркер не нужен.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Web_Workers_API/Using_web_workers'
  },
  {
    lang: 'php',
    id: 'php-cookies-setcookie',
    title: 'PHP 8: безопасная установка и удаление Cookies (setcookie с массивом опций)',
    summary: 'Современный синтаксис setcookie() с защитными флагами HttpOnly, Secure, SameSite и корректное удаление куки.',
    code: `<?php
declare(strict_types=1);

// 1. Установка защищённой куки на 30 дней (современный синтаксис с массивом опций)
setcookie('remember_token', $tokenValue, [
    'expires'  => time() + 60 * 60 * 24 * 30,
    'path'     => '/',
    'secure'   => true,     // Передавать только по HTTPS
    'httponly' => true,     // Запретить чтение из JS (document.cookie) для защиты от XSS!
    'samesite' => 'Lax',    // Защита от CSRF-атак при переходах с чужих сайтов
]);

// 2. Удаление куки (установка времени истечения в прошлое с тем же path!)
setcookie('remember_token', '', ['expires' => 1, 'path' => '/']);`,
    example: `$theme = $_COOKIE['theme'] ?? 'dark';`,
    points: [
      'Начиная с PHP 7.3+ функция setcookie() принимает удобный ассоциативный массив опций третьим аргументом вместо 7 позиционных параметров!',
      'При удалении куки через expires => 1 обязательно передавай точно такой же параметр path => "/", с каким она создавалась, иначе браузер не удалит её!',
      'Учитывай, что после вызова setcookie() новое значение появится в массиве $_COOKIE только при СЛЕДУЮЩЕМ HTTP-запросе от браузера.'
    ],
    tags: ['PHP', 'setcookie', 'COOKIE', 'httponly', 'samesite', 'secure', 'куки', 'авторизация'],
    when: 'Для функции «Запомнить меня», хранения идентификатора гостевой корзины и реферальных меток.',
    alternatives: 'Не храни в открытых куках роль пользователя (role=admin) — клиент может легко подделать куку в DevTools! Храни роли в серверной $_SESSION.',
    url: 'https://www.php.net/manual/ru/function.setcookie.php'
  },
  {
    lang: 'php',
    id: 'php-array-destructuring-spread',
    title: 'PHP 8: деструктуризация массивов, оператор распаковки (...$arr) и array_reduce',
    summary: 'Извлечение ключей ассоциативного массива в переменные за одну строчку и слияние конфигураций.',
    code: `<?php
declare(strict_types=1);

$config = ['host' => '127.0.0.1', 'port' => 3306, 'dbname' => 'devshelf'];

// Деструктуризация ассоциативного массива по ключам (как в JS!)
['host' => $dbHost, 'port' => $dbPort] = $config;

// Слияние массивов со строковыми ключами через spread-оператор (PHP 8.1+)
$finalConfig = [...$config, 'port' => 5432, 'charset' => 'utf8mb4'];

// Подсчёт общей суммы корзины через array_reduce
$total = array_reduce(
    $cartItems,
    fn(int $sum, array $item): int => $sum + ($item['price'] * $item['qty']),
    0
);`,
    example: `[$first, $second] = ['HTML', 'CSS'];`,
    points: [
      'Короткий синтаксис деструктуризации [$a, $b] = $array и ["id" => $id, "name" => $name] = $row полностью заменил старую конструкцию list()!',
      'В PHP 8.1+ оператор распаковки [...$default, ...$override] работает и со строковыми ключами (последующие ключи перезаписывают предыдущие, как array_merge).',
      'Для простого суммирования одного числового поля используй сверхбыструю связку array_sum(array_column($items, "price")).'
    ],
    tags: ['PHP', 'destructuring', 'spread', 'array_reduce', 'array_sum', 'array_merge', 'деструктуризация', 'массивы'],
    when: 'При распаковке строк из БД, возврате нескольких значений из функции и расчёте сумм.',
    alternatives: 'Оператор объединения массивов $a + $b сохраняет ключи из ПЕРВОГО массива, а [...$a, ...$b] и array_merge($a, $b) берут новые значения из ВТОРОГО.',
    url: 'https://www.php.net/manual/ru/language.types.array.php'
  }
];
