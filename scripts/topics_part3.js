export const extraTopics = [
  // ==========================================
  // JavaScript: Ядро, Массивы, Объекты, DOM, События, Асинхронность, Web API
  // ==========================================
  {
    lang: 'javascript',
    id: 'js-variables-types',
    title: 'JS: переменные const и let, области видимости и строгая проверка типов',
    summary: 'Блочная область видимости, неизменяемые ссылки const, примитивные типы и проверка typeof / Array.isArray.',
    code: `const MAX_RETRIES = 3;
let attempts = 0;

const user = { name: 'Иван', roles: ['admin'] };
user.name = 'Алексей'; // Допустимо: меняется свойство внутри объекта, а не сама ссылка

console.log(typeof 'hello');         // "string"
console.log(typeof 42);              // "number"
console.log(Array.isArray(user.roles)); // true`,
    example: `if (value !== null && typeof value === 'object') { /* это объект */ }`,
    points: [
      'По умолчанию всегда используй const. Переходи на let только если значение переменной действительно переприсваивается (счётчики, флаги).',
      'Оператор typeof null из-за исторического бага возвращает "object", поэтому на null всегда проверяй явно: val === null.',
      'Всегда используй строгое равенство === и !== вместо нестрогого ==, чтобы избежать скрытого приведения типов ("0" == false).'
    ],
    tags: ['JavaScript', 'const', 'let', 'typeof', 'isArray', 'переменные', 'типы данных', 'область видимости'],
    when: 'Во всём современном JS-коде вместо устаревшего ключевого слова var.',
    alternatives: 'Для полной защиты объекта от изменения его свойств используй Object.freeze(obj).',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const'
  },
  {
    lang: 'javascript',
    id: 'js-functions-arrows',
    title: 'JS: функции, стрелочные функции (=>), параметры по умолчанию и замыкания',
    summary: 'Лаконичный синтаксис стрелочных колбэков, лексический контекст this и сохранение состояния через замыкание.',
    code: `// Параметры по умолчанию
function greet(name = 'Гость', role = 'user') {
  return \`Привет, \${name} (\${role})!\`;
}

// Стрелочная функция с неявным возвратом объекта (в круглых скобках)
const toOption = (item) => ({ value: item.id, label: item.title });

// Замыкание: генератор уникальных ID
function createCounter(start = 0) {
  let count = start;
  return () => ++count;
}
const nextId = createCounter(100);
console.log(nextId(), nextId()); // 101, 102`,
    example: `items.map(x => x * 2);`,
    points: [
      'Стрелочные функции не имеют собственного this — они берут this из внешней функции, что идеально для обработчиков и таймеров внутри классов.',
      'Чтобы вернуть объектный литерал из короткой стрелочной функции без return, оберни его в круглые скобки: () => ({ id: 1 }).',
      'Замыкание (closure) позволяет внутренней функции помнить и изменять переменные родительской функции даже после её завершения.'
    ],
    tags: ['JavaScript', 'function', 'arrow', 'closure', 'this', 'стрелочные функции', 'замыкание', 'функции'],
    when: 'Стрелочные функции — для колбэков (.map, .filter, addEventListener); обычные function — для методов объекта и конструкторов.',
    alternatives: 'Не используй стрелочную функцию как метод объекта, если внутри неё нужен доступ к this этого объекта.',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
  },
  {
    lang: 'javascript',
    id: 'js-destructuring-spread',
    title: 'JS: деструктуризация, операторы Spread (...) и Rest (...args)',
    summary: 'Извлечение свойств из объектов и массивов в одну строку, иммутабельное клонирование и сбор аргументов.',
    code: `const config = { host: 'localhost', port: 3000, debug: true };
// Деструктуризация с переименованием и значением по умолчанию
const { host, port: serverPort, timeout = 5000 } = config;

// Иммутабельное обновление объекта и слияние массивов через Spread
const updatedConfig = { ...config, port: 8080 };
const allTags = [...['html', 'css'], 'javascript'];

// Сбор произвольного числа аргументов в массив (Rest)
const sumAll = (...nums) => nums.reduce((acc, n) => acc + n, 0);`,
    example: `const [first, second, ...restItems] = [10, 20, 30, 40];`,
    points: [
      'Деструктуризация работает прямо в параметрах функции: function renderCard({ title, price = 0 }) { ... }.',
      'Оператор Spread {...obj} делает поверхностную (shallow) копию первого уровня. Для глубокой копии вложенных объектов используй structuredClone(obj).',
      'Запись [a, b] = [b, a] позволяет поменять значения двух переменных местами без временной переменной.'
    ],
    tags: ['JavaScript', 'destructuring', 'spread', 'rest', 'structuredClone', 'деструктуризация', 'копирование'],
    when: 'При распаковке ответов API, настройке опций функций и обновлении состояния без мутации исходных данных.',
    alternatives: 'Ручное обращение data.user.profile.name на каждом шагу загромождает код.',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'
  },
  {
    lang: 'javascript',
    id: 'js-optional-chaining-nullish',
    title: 'JS: опциональная цепочка (?.) и нулевое слияние (?? и ??=)',
    summary: 'Безопасное чтение глубоко вложенных свойств без ошибки Cannot read properties of undefined и корректные дефолты.',
    code: `const response = {
  user: { profile: { city: 'Москва' } },
  itemsCount: 0
};

// Безопасное чтение: вернёт undefined вместо падения скрипта
const zipCode = response.user?.address?.zip;
const firstItem = response.list?.[0];
response.onComplete?.(); // Вызовет функцию только если она существует

// Оператор ?? срабатывает ТОЛЬКО на null и undefined (сохраняя 0 и "")!
const count = response.itemsCount ?? 10; // 0 (тогда как || вернул бы 10!)`,
    example: `settings.theme ??= 'dark'; /* Присвоит 'dark' только если theme равен null или undefined */`,
    points: [
      'Логическое ИЛИ (val || 10) считает число 0 и пустую строку "" ложными (falsy) и затирает их. Оператор ?? заменяет значение ТОЛЬКО если оно null или undefined!',
      'Опциональная цепочка работает для свойств (obj?.prop), индексов массива (arr?.[0]) и вызова методов (obj.method?.()).',
      'Не ставь ?. на каждом шаге бездумно — используй его только там, где поле реально может отсутствовать по логике данных.'
    ],
    tags: ['JavaScript', 'optional chaining', 'nullish coalescing', '?.', '??', 'undefined', 'null', 'безопасность'],
    when: 'При работе с JSON-ответами сервера, необязательными колбэками и числовыми параметрами (где 0 — валидное значение).',
    alternatives: 'Длинные проверки if (res && res.user && res.user.address) устарели.',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining'
  },
  {
    lang: 'javascript',
    id: 'js-array-search-sort',
    title: 'JS: поиск и сортировка массивов (find, some, every, includes, toSorted)',
    summary: 'Быстрая проверка условий, поиск элементов и неразрушающая сортировка русских строк и чисел.',
    code: `const users = [
  { id: 1, name: 'Яна', active: true, score: 85 },
  { id: 2, name: 'Борис', active: false, score: 92 },
  { id: 3, name: 'Анна', active: true, score: 78 }
];

const target = users.find(u => u.id === 2);          // Объект Бориса (или undefined)
const hasInactive = users.some(u => !u.active);      // true (хотя бы один)
const allActive = users.every(u => u.active);        // false (все ли)

// Немутирующая сортировка по русскому алфавиту и по числам
const byName = users.toSorted((a, b) => a.name.localeCompare(b.name, 'ru'));
const byScore = users.toSorted((a, b) => b.score - a.score);`,
    example: `const lastActive = users.findLast(u => u.active);`,
    points: [
      'Классический .sort() изменяет (мутирует) исходный массив на месте! Новый метод .toSorted() возвращает отсортированную копию, не трогая оригинал.',
      'Для сортировки чисел обязательно передавай компаратор (a, b) => a - b, иначе .sort() отсортирует числа как строки ("10" встанет раньше "2")!',
      'Для сортировки кириллицы используй a.title.localeCompare(b.title, "ru"), чтобы буква «Ё» встала на своё правильное место.'
    ],
    tags: ['JavaScript', 'find', 'some', 'every', 'includes', 'sort', 'toSorted', 'localeCompare', 'массивы', 'сортировка'],
    when: 'При фильтрации каталогов, проверке прав доступа и сортировке таблиц.',
    alternatives: 'Если нужно проверить только наличие примитива в массиве, используй arr.includes(val) вместо .some().',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted'
  },
  {
    lang: 'javascript',
    id: 'js-objects-map-set',
    title: 'JS: методы Object (keys, entries, fromEntries, groupBy) и коллекции Map / Set',
    summary: 'Преобразование объектов в массивы пар, группировка по ключу и быстрое удаление дубликатов через Set.',
    code: `// Удаление дубликатов из массива за один шаг через Set
const uniqueTags = [...new Set(['css', 'html', 'css', 'js'])]; // ['css', 'html', 'js']

// Обход ключей и значений объекта
const prices = { basic: 500, pro: 1500 };
const discounted = Object.fromEntries(
  Object.entries(prices).map(([plan, price]) => [plan, price * 0.8])
);

// Нативная группировка массива объектов по полю
const tasks = [
  { title: 'Верстка', status: 'done' },
  { title: 'API', status: 'todo' }
];
const grouped = Object.groupBy(tasks, task => task.status);`,
    example: `const cache = new Map();\ncache.set('user:1', { name: 'Иван' });`,
    points: [
      'Set хранит только уникальные значения, а проверка наличия set.has(item) работает мгновенно за O(1) даже на 100 000 элементов (в отличие от arr.includes).',
      'Связка Object.entries(obj) -> .map() / .filter() -> Object.fromEntries() позволяет фильтровать и трансформировать объекты так же легко, как массивы.',
      'Статический метод Object.groupBy(items, fn) группирует массив объектов по любому признаку без сложного .reduce().'
    ],
    tags: ['JavaScript', 'Object.entries', 'Object.fromEntries', 'Object.groupBy', 'Set', 'Map', 'уникальные', 'группировка'],
    when: 'При дедупликации тегов, кэшировании по ключу и группировке списков по категориям или датам.',
    alternatives: 'Проверка Object.hasOwn(obj, "key") заменила старый длинный вызов obj.hasOwnProperty("key").',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy'
  },
  {
    lang: 'javascript',
    id: 'js-strings-regexp',
    title: 'JS: методы строк (includes, replaceAll, trim, padStart) и шаблонные строки',
    summary: 'Поиск подстрок, форматирование таймеров нулями, очистка пробелов и безопасная замена всех вхождений.',
    code: `const rawInput = '  Hello, DevShelf!  ';
const clean = rawInput.trim().toLowerCase(); // "hello, devshelf!"

// Форматирование минут и секунд с ведущим нулём (05:09)
const min = String(5).padStart(2, '0');
const sec = String(9).padStart(2, '0');
const timerText = \`\${min}:\${sec}\`;

// Замена всех вхождений без регулярных выражений
const slug = 'Курс по CSS Grid'.toLowerCase().replaceAll(' ', '-');`,
    example: `const isHttps = url.startsWith('https://');`,
    points: [
      'Методы startsWith(), endsWith() и includes() читаются гораздо понятнее старых проверок через indexOf() !== -1.',
      'replaceAll("a", "b") заменяет сразу все совпадения в строке (обычный replace("a", "b") меняет только первое).',
      'padStart(2, "0") незаменим для вывода часов, дат (01.09.2026) и номеров заказов (00042).'
    ],
    tags: ['JavaScript', 'string', 'replaceAll', 'includes', 'startsWith', 'padStart', 'trim', 'split', 'строки'],
    when: 'При обработке пользовательского ввода, генерации URL-слагов, поиске и форматировании чисел.',
    alternatives: 'Для сложного поиска по шаблону (например, все email в тексте) используй str.matchAll(/.../g).',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String'
  },
  {
    lang: 'javascript',
    id: 'js-dom-manipulation',
    title: 'JS: работа с DOM (querySelector, closest, classList, createElement)',
    summary: 'Поиск элементов, переключение CSS-классов, безопасное создание узлов и навигация вверх по дереву через closest.',
    code: `const card = document.querySelector('.card');

// Управление классами
card.classList.add('is-visible');
card.classList.toggle('is-pinned', isPinnedBoolean);

// Создание и безопасная вставка нового элемента
const badge = document.createElement('span');
badge.className = 'badge';
badge.textContent = 'Новинка'; // Безопасно от XSS!
card.prepend(badge);`,
    example: `element.replaceChildren(); /* Мгновенно очищает все дочерние элементы контейнера */`,
    points: [
      'Всегда используй element.textContent вместо innerHTML при выводе любых данных от пользователя, чтобы исключить XSS-инъекции.',
      'Второй аргумент в classList.toggle("active", condition) принудительно включает класс при true и выключает при false.',
      'Современные методы .append(), .prepend(), .before(), .after() и .remove() заменили старые громоздкие parentNode.insertBefore().'
    ],
    tags: ['JavaScript', 'DOM', 'querySelector', 'classList', 'createElement', 'textContent', 'append', 'closest'],
    when: 'При динамическом обновлении интерфейса, переключении вкладок, модалок и рендеринге списков.',
    alternatives: 'При вставке сотни элементов за раз собирай их в document.createDocumentFragment(), чтобы вызвать всего одну перерисовку.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Element/classList'
  },
  {
    lang: 'javascript',
    id: 'js-event-delegation',
    title: 'JS: события (addEventListener, делегирование через closest, preventDefault)',
    summary: 'Эффективная обработка кликов на динамических списках одним общим слушателем на родителе.',
    code: `const list = document.querySelector('#todo-list');

// Один обработчик на весь список вместо сотни обработчиков на каждой кнопке!
list.addEventListener('click', (event) => {
  const deleteBtn = event.target.closest('[data-action="delete"]');
  if (!deleteBtn) return;

  const itemRow = deleteBtn.closest('li');
  itemRow?.remove();
});`,
    example: `form.addEventListener('submit', (e) => {\n  e.preventDefault(); // Отменяет перезагрузку страницы\n});`,
    points: [
      'Делегирование событий (event.target.closest(...)) продолжает работать даже для карточек, которые были добавлены в DOM позже через AJAX!',
      'Используй event.target.closest("button") вместо проверки event.target.tagName, так как внутри кнопки может быть вложенная иконка <svg> или <span>.',
      'Опция { once: true } в addEventListener автоматически удаляет обработчик сразу после первого срабатывания.'
    ],
    tags: ['JavaScript', 'addEventListener', 'closest', 'preventDefault', 'делегирование', 'события', 'клик'],
    when: 'Для списков товаров, таблиц, вкладок, выпадающих меню и перехвата отправки форм.',
    alternatives: 'Навешивание querySelectorAll().forEach(btn => btn.onclick = ...) тратит память и не видит новые элементы.',
    url: 'https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Scripting/Event_bubbling'
  },
  {
    lang: 'javascript',
    id: 'js-promises-combinators',
    title: 'JS: параллельные запросы Promise.all, Promise.allSettled и Promise.race',
    summary: 'Одновременный запуск независимых асинхронных задач для кратного ускорения загрузки данных.',
    code: `// Запускаем 3 запроса ПАРАЛЛЕЛЬНО, а не по очереди!
const [profile, orders, notifications] = await Promise.all([
  fetch('/api/profile').then(r => r.json()),
  fetch('/api/orders').then(r => r.json()),
  fetch('/api/notifications').then(r => r.json())
]);

// allSettled дождётся всех, даже если один из запросов упадёт с ошибкой
const results = await Promise.allSettled([fetch('/api/a'), fetch('/api/b')]);
const successful = results.filter(r => r.status === 'fulfilled').map(r => r.value);`,
    example: `const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));`,
    points: [
      'Если писать три await подряд для независимых запросов, время ожидания складывается. Promise.all([...]) выполняет их параллельно за время самого медленного запроса!',
      'Promise.all падает целиком, если хотя бы один промис завершился ошибкой (rejected).',
      'Promise.allSettled никогда не выбрасывает ошибку и возвращает массив объектов со статусами "fulfilled" или "rejected" для каждого запроса.'
    ],
    tags: ['JavaScript', 'Promise', 'Promise.all', 'Promise.allSettled', 'async', 'await', 'параллельно', 'асинхронность'],
    when: 'При загрузке дашбордов, инициализации страницы из нескольких эндпоинтов и пакетной отправке файлов.',
    alternatives: 'Последовательный await нужен только тогда, когда второй запрос зависит от ID, полученного в первом.',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all'
  },
  {
    lang: 'javascript',
    id: 'js-abort-controller',
    title: 'JS: отмена запросов и слушателей через AbortController и AbortSignal',
    summary: 'Прерывание зависших fetch-запросов по таймауту или при вводе нового поискового запроса (защита от гонки данных).',
    code: `let searchController = null;

async function searchProducts(query) {
  // Отменяем предыдущий незавершённый запрос, если пользователь продолжает печатать
  searchController?.abort();
  searchController = new AbortController();

  try {
    const res = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`, {
      signal: searchController.signal
    });
    return await res.json();
  } catch (err) {
    if (err.name === 'AbortError') return; // Штатная отмена, игнорируем
    throw err;
  }
}`,
    example: `// Автоматический таймаут запроса через 5 секунд:\nfetch('/api/data', { signal: AbortSignal.timeout(5000) });`,
    points: [
      'Без отмены предыдущего запроса в живом поиске старый медленный ответ может прийти позже нового и перезаписать актуальные результаты (race condition).',
      'Статический метод AbortSignal.timeout(5000) автоматически прерывает зависший запрос через 5 секунд без ручного setTimeout!',
      'Один и тот же signal можно передать и в addEventListener(..., { signal }), чтобы разом отписать десятки обработчиков событий при закрытии компонента.'
    ],
    tags: ['JavaScript', 'AbortController', 'AbortSignal', 'timeout', 'fetch', 'отмена запроса', 'race condition'],
    when: 'В живом поиске (autocomplete), при переключении вкладок с загрузкой данных и для задания таймаутов сети.',
    alternatives: 'Игнорирование результата через булев флаг isCancelled не останавливает скачивание трафика браузером.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/AbortController'
  },
  {
    lang: 'javascript',
    id: 'js-debounce-throttle',
    title: 'JS: оптимизация частых событий (Debounce и Throttle)',
    summary: 'Защита от сотен лишних вызовов функций при быстром вводе текста в поиск, ресайзе окна и прокрутке.',
    code: `// Debounce: ждёт, пока пользователь перестанет печатать в течение delay мс
function debounce(fn, delay = 300) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
}

const onSearchInput = debounce((query) => {
  console.log('Отправляем запрос:', query);
}, 250);

searchInput.addEventListener('input', (e) => onSearchInput(e.target.value));`,
    example: `// Throttle: выполняет функцию не чаще одного раза в limit мс`,
    points: [
      'Debounce откладывает вызов до момента тишины (идеален для живого поиска, автосохранения черновика и валидации ввода).',
      'Throttle гарантирует регулярное выполнение не чаще чем раз в N мс (идеален для отслеживания скролла и движения мыши).',
      'Для плавной отрисовки графики при скролле или перетаскивании используй requestAnimationFrame() вместо таймеров.'
    ],
    tags: ['JavaScript', 'debounce', 'throttle', 'setTimeout', 'requestAnimationFrame', 'оптимизация', 'поиск'],
    when: 'На всех полях живого поиска, фильтрах каталога и обработчиках resize/scroll.',
    alternatives: 'Для отслеживания появления блока при скролле используй IntersectionObserver вместо scroll + throttle.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Window/setTimeout'
  },
  {
    lang: 'javascript',
    id: 'js-intersection-observer',
    title: 'JS: отслеживание видимости элементов (IntersectionObserver)',
    summary: 'Асинхронное определение момента появления элемента на экране для бесконечной ленты, анимаций и оглавлений.',
    code: `const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target); // Отписываемся после первого появления
    }
  });
}, {
  rootMargin: '0px 0px -10% 0px', // Сработать чуть выше нижнего края экрана
  threshold: 0.15                 // Когда видно хотя бы 15% блока
});

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));`,
    example: `/* Заменяет тяжёлые вычисления getBoundingClientRect() в событии scroll */`,
    points: [
      'IntersectionObserver работает в браузере асинхронно и не тормозит прокрутку страницы, в отличие от слушателя window.onscroll.',
      'Идеально подходит для бесконечной подгрузки товаров (infinite scroll): наблюдай за пустым div-маячком в самом низу списка.',
      'Также используется для автоматической подсветки активного пункта оглавления статьи при чтении.'
    ],
    tags: ['JavaScript', 'IntersectionObserver', 'scroll', 'lazy', 'infinite scroll', 'видимость', 'скролл'],
    when: 'Для анимации появления секций, бесконечной пагинации, отложенной инициализации графиков и активного оглавления.',
    alternatives: 'Для обычной ленивой загрузки картинок достаточно нативного HTML-атрибута <img loading="lazy">.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API'
  },
  {
    lang: 'javascript',
    id: 'js-url-search-params',
    title: 'JS: парсинг и сборка URL-адресов (new URL и URLSearchParams)',
    summary: 'Удобное чтение GET-параметров адресной строки, сборка фильтров каталога и безопасное кодирование кириллицы.',
    code: `// Чтение параметров текущей страницы (?topic=flexbox&page=2)
const params = new URLSearchParams(window.location.search);
const topic = params.get('topic') ?? 'all';

// Безопасная сборка URL с фильтрами без ручного склеивания "?" и "&"
const apiUrl = new URL('/api/items', window.location.origin);
apiUrl.searchParams.set('category', 'ноутбуки');
apiUrl.searchParams.set('sort', 'price_asc');

// Обновление адресной строки без перезагрузки страницы
window.history.replaceState({}, '', \`?\${apiUrl.searchParams}\`);`,
    example: `const formParams = new URLSearchParams(new FormData(formElement));`,
    points: [
      'URLSearchParams автоматически кодирует пробелы, кириллицу и спецсимволы (&, =, +) — ручной вызов encodeURIComponent не нужен!',
      'Связка с window.history.replaceState() позволяет сохранять выбранные пользователем фильтры и табы прямо в URL, чтобы ссылкой можно было поделиться.',
      'Метод params.getAll("tag") возвращает массив всех значений для повторяющихся параметров (?tag=js&tag=css).'
    ],
    tags: ['JavaScript', 'URL', 'URLSearchParams', 'history', 'replaceState', 'query', 'get-параметры', 'адрес'],
    when: 'При синхронизации фильтров, поиска и пагинации с адресной строкой браузера.',
    alternatives: 'Никогда не парси window.location.search регулярками или через .split("&").',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/URLSearchParams'
  },
  {
    lang: 'javascript',
    id: 'js-intl-formatting',
    title: 'JS: локализация валют, дат и склонение существительных (Intl API)',
    summary: 'Встроенное в браузер форматирование цен в рублях, читаемых дат («15 марта 2026») и относительного времени («2 дня назад»).',
    code: `// Форматирование цены в рублях: "14 990 ₽"
const rubFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0
});
console.log(rubFormatter.format(14990));

// Форматирование даты: "15 марта 2026 г., 14:30"
const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  dateStyle: 'long',
  timeStyle: 'short'
});
console.log(dateFormatter.format(new Date()));`,
    example: `const pr = new Intl.PluralRules('ru-RU'); /* Выбирает форму: one (1 товар), few (2 товара), many (5 товаров) */`,
    points: [
      'Встроенный объект Intl полностью заменяет тяжёлые библиотеки вроде Moment.js для вывода дат, чисел и валют!',
      'Создавай экземпляр new Intl.NumberFormat(...) один раз вне цикла и переиспользуй метод .format() для максимальной скорости.',
      'Intl.RelativeTimeFormat("ru", { numeric: "auto" }) умеет красиво форматировать строки вроде «вчера», «через 3 часа», «5 дней назад».'
    ],
    tags: ['JavaScript', 'Intl', 'NumberFormat', 'DateTimeFormat', 'PluralRules', 'валюта', 'рубли', 'дата', 'склонение'],
    when: 'В интернет-магазинах для вывода цен, в блогах и чатах для дат и счётчиков («5 комментариев»).',
    alternatives: 'Ручное склеивание date.getDate() + "." + (date.getMonth() + 1) неудобно и не учитывает часовые пояса.',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl'
  },
  {
    lang: 'javascript',
    id: 'js-clipboard-share',
    title: 'JS: буфер обмена (navigator.clipboard) и системное меню «Поделиться»',
    summary: 'Копирование кода или промокода в один клик с визуальным откликом и вызов нативного окна отправки ссылки.',
    code: `async function copyCode(text, buttonEl) {
  try {
    await navigator.clipboard.writeText(text);
    const original = buttonEl.textContent;
    buttonEl.textContent = '✓ Скопировано';
    setTimeout(() => { buttonEl.textContent = original; }, 1800);
  } catch (err) {
    console.error('Не удалось скопировать:', err);
  }
}`,
    example: `if (navigator.share) {\n  await navigator.share({ title: 'DevShelf', url: location.href });\n}`,
    points: [
      'Clipboard API работает асинхронно (возвращает Promise) и требует безопасного контекста (HTTPS или localhost) и клика пользователя.',
      'Всегда меняй текст или иконку кнопки на «✓ Скопировано» на 1.5–2 секунды, чтобы пользователь видел мгновенное подтверждение.',
      'navigator.share() на смартфонах открывает родную системную шторку выбора мессенджера (Telegram, WhatsApp).'
    ],
    tags: ['JavaScript', 'clipboard', 'writeText', 'share', 'копировать', 'буфер обмена', 'поделиться'],
    when: 'Для кнопок копирования сниппетов кода, промокодов, реферальных ссылок и репоста статей.',
    alternatives: 'Устаревший document.execCommand("copy") оставлен только как крайний фолбэк для старых HTTP-страниц.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Clipboard_API'
  },
  {
    lang: 'javascript',
    id: 'js-formdata-file-reader',
    title: 'JS: сбор данных формы через FormData и превью файлов (URL.createObjectURL)',
    summary: 'Чтение всех полей формы в один объект без ручного поиска каждого инпута и мгновенный показ выбранного аватара.',
    code: `const form = document.querySelector('#profile-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  // Превращаем в обычный JS-объект (если нужно отправить JSON)
  const payload = Object.fromEntries(formData.entries());
  console.log(payload);
});

// Мгновенное превью выбранной картинки до отправки на сервер
fileInput.addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if (file) avatarImg.src = URL.createObjectURL(file);
});`,
    example: `await fetch('/api/upload', { method: 'POST', body: new FormData(form) });`,
    points: [
      'new FormData(form) автоматически собирает значения всех <input>, <select> и <textarea>, у которых задан атрибут name!',
      'При отправке FormData напрямую в body метода fetch() НЕ нужно вручную ставить заголовок Content-Type — браузер сам выставит multipart/form-data с правильным boundary.',
      'URL.createObjectURL(file) работает мгновенно и не тратит память на кодирование файла в длинную строку Base64 (в отличие от FileReader.readAsDataURL).'
    ],
    tags: ['JavaScript', 'FormData', 'createObjectURL', 'file', 'upload', 'форма', 'загрузка файла', 'превью'],
    when: 'При обработке любых форм, загрузке аватаров, документов и отправке данных на сервер.',
    alternatives: 'Ручной сбор document.getElementById() для 10 полей формы создаёт лишний дублирующийся код.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/FormData'
  },

  // ==========================================
  // PHP 8.x: Строгая типизация, Массивы, Строки, ООП, Формы, Сессии, Файлы, Безопасность
  // ==========================================
  {
    lang: 'php',
    id: 'php-strict-types-variables',
    title: 'PHP 8: строгая типизация declare(strict_types=1), типы и оператор ??',
    summary: 'Включение строгой проверки типов аргументов и возвращаемых значений, union-типы и безопасная работа с null.',
    code: `<?php
declare(strict_types=1);

function calculateTotal(float $price, int $qty = 1, ?float $discount = null): float {
    $subtotal = $price * $qty;
    return $discount !== null ? $subtotal * (1 - $discount) : $subtotal;
}

// Оператор объединения с null (??) и присваивания (??=)
$page = (int) ($_GET['page'] ?? 1);
$config['timeout'] ??= 30;`,
    example: `function parseId(int|string $id): string { return (string) $id; }`,
    points: [
      'Директива declare(strict_types=1); в первой строке файла запрещает PHP молча превращать строку "42abc" в число 42 и спасает от скрытых багов.',
      'Знак вопроса перед типом (?float) означает, что параметр или результат может быть либо float, либо null.',
      'В PHP 8 поддерживаются объединённые типы (int|string) и тип возврата void / never.'
    ],
    tags: ['PHP', 'strict_types', 'types', 'null', 'переменные', 'типизация', 'функции'],
    when: 'Ставь declare(strict_types=1); в начале каждого нового PHP-файла проекта.',
    alternatives: 'Без указания типов в сигнатурах функций сложнее искать ошибки при рефакторинге.',
    url: 'https://www.php.net/manual/ru/language.types.declarations.php'
  },
  {
    lang: 'php',
    id: 'php-strings-heredoc',
    title: 'PHP 8: функции строк (str_contains, str_starts_with, mb_strlen, sprintf)',
    summary: 'Современная проверка подстрок в PHP 8, корректная работа с кириллицей в UTF-8 через mb_* и мультистроки.',
    code: `<?php
declare(strict_types=1);

$title = 'Руководство по PHP 8.3';

// Корректная длина кириллической строки в UTF-8
$length = mb_strlen($title, 'UTF-8'); // 22 (обычный strlen вернул бы 39 байт!)
$upper  = mb_strtoupper($title, 'UTF-8');

// Нативные функции проверки подстрок из PHP 8
if (str_contains($title, 'PHP') && str_starts_with($title, 'Руководство')) {
    echo sprintf('Найдена статья "%s" (%d симв.)', $title, $length);
}`,
    example: `$parts = explode(',', 'html,css,php');\n$joined = implode(' · ', $parts);`,
    points: [
      'В UTF-8 каждая русская буква занимает 2 байта, поэтому для подсчёта символов, обрезки и смены регистра ВСЕГДА используй функции с префиксом mb_ (mb_strlen, mb_substr, mb_strtolower)!',
      'Функции PHP 8 str_contains(), str_starts_with() и str_ends_with() навсегда избавили от путаницы с strpos() !== false.',
      'Функция trim($str) удаляет пробелы и переносы строк по краям пользовательского ввода.'
    ],
    tags: ['PHP', 'str_contains', 'str_starts_with', 'mb_strlen', 'mb_substr', 'explode', 'implode', 'строки', 'utf-8'],
    when: 'При валидации текста на русском языке, проверке URL/префиксов и форматировании сообщений.',
    alternatives: 'Никогда не используй обычный substr() на русском тексте — он разрежет двухбайтовый символ пополам и выдаст «кракозябры» ().',
    url: 'https://www.php.net/manual/ru/function.str-contains.php'
  },
  {
    lang: 'php',
    id: 'php-arrays-functions',
    title: 'PHP 8: работа с массивами (array_map, array_filter, array_column, in_array)',
    summary: 'Трансформация, фильтрация ассоциативных массивов, быстрая индексация по ID и строгий поиск значений.',
    code: `<?php
declare(strict_types=1);

$users = [
    ['id' => 10, 'name' => 'Анна', 'role' => 'admin'],
    ['id' => 20, 'name' => 'Игорь', 'role' => 'editor'],
];

// Короткие стрелочные функции fn() имеют доступ к внешним переменным
$admins = array_values(array_filter($users, fn(array $u): bool => $u['role'] === 'admin'));

// Извлечение колонки или переиндексация массива по полю 'id' за один вызов!
$namesById = array_column($users, 'name', 'id'); // [10 => 'Анна', 20 => 'Игорь']

// ВСЕГДА передавай третий параметр true (strict) в in_array!
$isAllowed = in_array('admin', ['user', 'admin'], true);`,
    example: `$merged = [...$defaultConfig, ...$customConfig]; /* Распаковка массивов в PHP 8.1+ */`,
    points: [
      'Обязательно передавай третий аргумент true в in_array($needle, $haystack, true), иначе из-за нестрогого сравнения in_array(0, ["admin"]) вернёт true!',
      'После array_filter() ключи массива сохраняют старые номера (например, [0, 3, 5]). Оберни результат в array_values(), чтобы получить чистый список [0, 1, 2] для JSON.',
      'Функция array_column($rows, null, "id") превращает результат SQL-запроса в словарь с мгновенным поиском по ID.'
    ],
    tags: ['PHP', 'array_map', 'array_filter', 'array_column', 'in_array', 'array_values', 'fn', 'массивы'],
    when: 'При подготовке выборок из базы данных к выводу в шаблон или отдаче по JSON API.',
    alternatives: 'Обычный цикл foreach часто читается проще, если внутри нужно одновременно фильтровать и менять структуру.',
    url: 'https://www.php.net/manual/ru/function.array-column.php'
  },
  {
    lang: 'php',
    id: 'php-match-nullsafe',
    title: 'PHP 8: выражение match, именованные аргументы и оператор ?-> (Nullsafe)',
    summary: 'Строгая современная замена громоздкому switch-case, вызов функций по именам параметров и безопасные цепочки.',
    code: `<?php
declare(strict_types=1);

// match возвращает значение, сравнивает строго (===) и не требует break!
$statusText = match ($httpCode) {
    200, 201 => 'Успешно',
    400, 422 => 'Ошибка валидации данных',
    404      => 'Страница не найдена',
    default  => 'Внутренняя ошибка сервера',
};

// Nullsafe оператор ?-> не упадёт с Fatal Error, если $user или getProfile() вернёт null
$country = $user?->getProfile()?->getAddress()?->country ?? 'RU';

// Именованные аргументы делают вызов самодокументируемым
setcookie(name: 'theme', value: 'dark', httponly: true, samesite: 'Lax');`,
    example: `/* Если в match не сработает ни одна ветка и нет default, PHP выбросит UnhandledMatchError */`,
    points: [
      'В отличие от старого switch, выражение match использует строгое сравнение (===) и никогда «не проваливается» в следующую ветку из-за забытого break.',
      'Оператор ?-> (nullsafe) мгновенно обрывает цепочку вызовов и возвращает null, если любой промежуточный объект оказался пустым.',
      'Именованные аргументы позволяют пропускать необязательные параметры в середине списка без передачи десятка пустых значений.'
    ],
    tags: ['PHP', 'match', 'nullsafe', '?->', 'named arguments', 'switch', 'условия'],
    when: 'При маппинге статусов заказов, HTTP-кодов, ролей и настройке функций со множеством флагов.',
    alternatives: 'Используй if/elseif, если нужно проверить сложные составные условия, не сводящиеся к одному значению.',
    url: 'https://www.php.net/manual/ru/control-structures.match.php'
  },
  {
    lang: 'php',
    id: 'php-oop-enums',
    title: 'PHP 8: классы, продвижение свойств конструктора, readonly и перечисления (enum)',
    summary: 'Лаконичное объявление DTO и сервисов без шаблонного кода и типобезопасные перечисления статусов.',
    code: `<?php
declare(strict_types=1);

enum OrderStatus: string {
    case Pending = 'pending';
    case Paid    = 'paid';
    case Shipped = 'shipped';
}

readonly class OrderDto {
    // Свойства объявляются и присваиваются прямо в круглых скобках конструктора!
    public function __construct(
        public int $id,
        public float $amount,
        public OrderStatus $status = OrderStatus::Pending,
    ) {}
}

$order = new OrderDto(id: 42, amount: 2500.0);`,
    example: `$status = OrderStatus::tryFrom($_POST['status'] ?? '') ?? OrderStatus::Pending;`,
    points: [
      'Constructor Property Promotion сокращает код класса в 3 раза: больше не нужно дублировать поля сверху и писать $this->id = $id внутри конструктора.',
      'Модификатор readonly на классе гарантирует, что объект нельзя случайно изменить после создания (идеально для DTO и конфигураций).',
      'Backed Enum (enum Status: string) имеет встроенный метод Status::tryFrom($val), который безопасно парсит строку из БД или формы.'
    ],
    tags: ['PHP', 'class', 'readonly', 'enum', 'construct', 'oop', 'классы', 'перечисления'],
    when: 'При проектировании моделей данных, сервисов, статусов заказов и ролей пользователей.',
    alternatives: 'Старые константы класса STATUS_PAID = "paid" не дают проверки типов в аргументах функций.',
    url: 'https://www.php.net/manual/ru/language.enumerations.php'
  },
  {
    lang: 'php',
    id: 'php-forms-xss-csrf',
    title: 'PHP 8: обработка форм ($_POST), фильтрация filter_input и защита от XSS / CSRF',
    summary: 'Безопасный приём данных от пользователя, валидация email, экранирование HTML-вывода и проверка CSRF-токена.',
    code: `<?php
declare(strict_types=1);
session_start();

// Защита от подделки межсайтовых запросов (CSRF)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = $_POST['csrf_token'] ?? '';
    if (!hash_equals($_SESSION['csrf_token'] ?? '', $token)) {
        http_response_code(403);
        exit('Неверный CSRF-токен');
    }

    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $name  = trim((string) ($_POST['name'] ?? ''));
}

// Функция безопасного вывода в HTML-шаблон (защита от XSS)
function e(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}`,
    example: `<input type="hidden" name="csrf_token" value="<?= e($_SESSION['csrf_token']) ?>">`,
    points: [
      'Любые данные от пользователя ($name, $_GET["q"]) при выводе в HTML ОБЯЗАТЕЛЬНО пропускай через htmlspecialchars(..., ENT_QUOTES, "UTF-8"), иначе злоумышленник внедрит <script>!',
      'Для проверки email и URL используй встроенный filter_var($val, FILTER_VALIDATE_EMAIL) вместо самописных регулярок.',
      'Сравнивай секретные токены только через функцию hash_equals(), защищённую от атак по времени (timing attacks).'
    ],
    tags: ['PHP', 'POST', 'GET', 'htmlspecialchars', 'XSS', 'CSRF', 'filter_input', 'безопасность', 'формы'],
    when: 'В каждом обработчике форм обратной связи, авторизации, комментариев и личного кабинета.',
    alternatives: 'Шаблонизаторы вроде Twig и Blade экранируют вывод {{ $name }} автоматически по умолчанию.',
    url: 'https://www.php.net/manual/ru/function.htmlspecialchars.php'
  },
  {
    lang: 'php',
    id: 'php-sessions-passwords',
    title: 'PHP 8: хеширование паролей (password_hash / password_verify) и безопасные сессии',
    summary: 'Надёжное хранение паролей с солью (bcrypt / Argon2) и защита сессионных кук от перехвата.',
    code: `<?php
declare(strict_types=1);

// 1. При регистрации: создаём криптостойкий хеш с автоматической солью
$passwordHash = password_hash($plainPassword, PASSWORD_DEFAULT);

// 2. При входе: проверяем введённый пароль против хеша из БД
if (password_verify($plainPassword, $userFromDb['password_hash'])) {
    // Защита от фиксации сессии (Session Fixation) после успешного входа!
    session_regenerate_id(true);
    $_SESSION['user_id'] = (int) $userFromDb['id'];
}`,
    example: `session_set_cookie_params(['httponly' => true, 'secure' => true, 'samesite' => 'Lax']);\nsession_start();`,
    points: [
      'НИКОГДА не используй md5() или sha1() для паролей — они взламываются по радужным таблицам за секунды. Используй только password_hash() и password_verify()!',
      'Флаг httponly => true запрещает JavaScript-скриптам читать сессионную куку через document.cookie в случае XSS.',
      'Вызов session_regenerate_id(true) сразу после логина меняет ID сессии, защищая пользователя от кражи сессии.'
    ],
    tags: ['PHP', 'password_hash', 'password_verify', 'session_start', 'cookie', 'авторизация', 'пароли', 'сессии'],
    when: 'При реализации регистрации, входа на сайт и смены пароля пользователя.',
    alternatives: 'Для stateless REST API и мобильных приложений вместо сессий часто используют подписанные токены или БД-токены.',
    url: 'https://www.php.net/manual/ru/function.password-hash.php'
  },
  {
    lang: 'php',
    id: 'php-pdo-connection-transactions',
    title: 'PHP 8: подключение PDO к MySQL/PostgreSQL и транзакции (beginTransaction / commit)',
    summary: 'Правильная конфигурация PDO с выбросом исключений и атомарное выполнение нескольких SQL-запросов.',
    code: `<?php
declare(strict_types=1);

$dsn = 'mysql:host=127.0.0.1;dbname=app_db;charset=utf8mb4';
$pdo = new PDO($dsn, $dbUser, $dbPass, [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Выбрасывать исключения при ошибках SQL
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Возвращать ассоциативные массивы
    PDO::ATTR_EMULATE_PREPARES   => false,                  // Честные подготовленные запросы на стороне БД
]);

// Транзакция: либо выполнятся оба запроса, либо ни один!
try {
    $pdo->beginTransaction();
    $pdo->prepare('UPDATE accounts SET balance = balance - ? WHERE id = ?')->execute([500, $fromId]);
    $pdo->prepare('UPDATE accounts SET balance = balance + ? WHERE id = ?')->execute([500, $toId]);
    $pdo->commit();
} catch (Throwable $e) {
    if ($pdo->inTransaction()) $pdo->rollBack();
    throw $e;
}`,
    example: `$lastId = (int) $pdo->lastInsertId();`,
    points: [
      'В DSN для MySQL всегда указывай charset=utf8mb4 (а не старый utf8), чтобы база корректно сохраняла любые символы и эмодзи.',
      'PDO::ATTR_EMULATE_PREPARES => false заставляет MySQL возвращать числа как int/float, а не превращать все поля в строки.',
      'Транзакции (beginTransaction / commit / rollBack) гарантируют целостность данных при создании заказа, списании баланса и сложных обновлениях.'
    ],
    tags: ['PHP', 'PDO', 'MySQL', 'transaction', 'beginTransaction', 'commit', 'rollBack', 'база данных', 'sql'],
    when: 'В едином файле подключения к БД и при любых операциях, изменяющих сразу несколько связанных таблиц.',
    alternatives: 'Не используй устаревшие функции mysql_* или склейку переменных прямо в строку SQL-запроса.',
    url: 'https://www.php.net/manual/ru/pdo.transactions.php'
  },
  {
    lang: 'php',
    id: 'php-json-rest-api',
    title: 'PHP 8: создание JSON API эндпоинта (json_encode, json_decode, php://input)',
    summary: 'Приём JSON-тела запроса от fetch(), корректная работа с кириллицей JSON_UNESCAPED_UNICODE и коды ответа.',
    code: `<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

// Читаем JSON-тело POST/PUT запроса из потока php://input
$rawBody = file_get_contents('php://input');
try {
    $data = json_decode($rawBody ?: '{}', true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $e) {
    http_response_code(400);
    echo json_encode(['error' => 'Некорректный JSON'], JSON_UNESCAPED_UNICODE);
    exit;
}

http_response_code(201);
echo json_encode([
    'status' => 'ok',
    'received' => $data['title'] ?? null,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);`,
    example: `/* При отправке fetch() с заголовком application/json массив $_POST остаётся пустым — читай php://input! */`,
    points: [
      'Когда фронтенд отправляет JSON через fetch(), данные попадают НЕ в $_POST, а в поток php://input!',
      'Флаг JSON_UNESCAPED_UNICODE оставляет русские буквы читаемыми ("Привет"), вместо превращения их в "\\u041f\\u0440...".',
      'Флаг JSON_THROW_ON_ERROR выбрасывает понятное исключение JsonException при битом JSON вместо молчаливого возврата null.'
    ],
    tags: ['PHP', 'json_encode', 'json_decode', 'php://input', 'REST API', 'JSON_UNESCAPED_UNICODE', 'api'],
    when: 'При написании бэкенда для AJAX-запросов, SPA-приложений, вебхуков Telegram и мобильных клиентов.',
    alternatives: 'Для обычных HTML-форм с multipart/form-data данные по-прежнему приходят в $_POST и $_FILES.',
    url: 'https://www.php.net/manual/ru/function.json-encode.php'
  },
  {
    lang: 'php',
    id: 'php-files-uploads',
    title: 'PHP 8: работа с файлами и безопасная загрузка изображений ($_FILES)',
    summary: 'Чтение и атомарная запись файлов с блокировкой LOCK_EX и проверка реального MIME-типа загружаемых картинок.',
    code: `<?php
declare(strict_types=1);

if (!empty($_FILES['avatar']['tmp_name']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {
    $tmpPath = $_FILES['avatar']['tmp_name'];

    // Проверяем реальный MIME-тип содержимого файла, а не расширение из имени!
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime  = $finfo->file($tmpPath);
    $allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];

    if (!isset($allowed[$mime])) {
        exit('Разрешены только изображения JPG, PNG и WebP');
    }

    // Генерируем безопасное случайное имя файла
    $newName = bin2hex(random_bytes(12)) . '.' . $allowed[$mime];
    move_uploaded_file($tmpPath, __DIR__ . '/uploads/' . $newName);
}`,
    example: `file_put_contents(__DIR__ . '/app.log', $line . PHP_EOL, FILE_APPEND | LOCK_EX);`,
    points: [
      'Никогда не доверяй $_FILES["file"]["type"] и оригинальному имени файла — злоумышленник может загрузить скрипт shell.php под видом картинки!',
      'Всегда проверяй реальное содержимое через finfo(FILEINFO_MIME_TYPE) и генерируй новое имя через bin2hex(random_bytes(12)).',
      'При записи логов через file_put_contents() используй флаги FILE_APPEND | LOCK_EX, чтобы параллельные запросы не повредили файл.'
    ],
    tags: ['PHP', 'FILES', 'move_uploaded_file', 'file_get_contents', 'file_put_contents', 'finfo', 'загрузка файлов'],
    when: 'При загрузке аватаров, прайс-листов, документов и ведении файловых логов или кэша.',
    alternatives: 'В папке /uploads обязательно запрети исполнение PHP-скриптов через настройки Nginx или .htaccess.',
    url: 'https://www.php.net/manual/ru/features.file-upload.post-method.php'
  },
  {
    lang: 'php',
    id: 'php-curl-datetime',
    title: 'PHP 8: HTTP-запросы через cURL и неизменяемые даты DateTimeImmutable',
    summary: 'Отправка серверных запросов к внешним API (Telegram Bot API, платёжные шлюзы) и точные расчёты дат.',
    code: `<?php
declare(strict_types=1);

// 1. DateTimeImmutable не меняет исходный объект при прибавлении дней!
$now = new DateTimeImmutable('now', new DateTimeZone('Europe/Moscow'));
$expiresAt = $now->modify('+7 days')->format('Y-m-d H:i:s');

// 2. Отправка JSON POST-запроса к внешнему API через cURL
$ch = curl_init('https://api.example.com/v1/notify');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 10,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS     => json_encode(['date' => $expiresAt]),
]);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);`,
    example: `$diff = $now->diff($expiresAt)->days;`,
    points: [
      'Всегда используй DateTimeImmutable вместо старого DateTime, чтобы вызов ->modify("+1 day") создавал новую дату, а не мутировал исходную переменную в коде!',
      'В cURL обязательно задавай CURLOPT_TIMEOUT (например, 10 секунд), чтобы зависший внешний сервис не заблокировал воркеры твоего сервера.',
      'Для крупных проектов поверх cURL удобно использовать PSR-18 HTTP-клиент Guzzle.'
    ],
    tags: ['PHP', 'curl', 'DateTimeImmutable', 'DateTimeZone', 'http', 'запрос', 'дата', 'время'],
    when: 'Для интеграции с внешними API, отправки уведомлений в Telegram и расчёта срока действия подписок.',
    alternatives: 'file_get_contents("https://...") не позволяет гибко контролировать заголовки, коды ошибок и таймауты как cURL.',
    url: 'https://www.php.net/manual/ru/class.datetimeimmutable.php'
  },

  // ==========================================
  // XML, SVG, SEO & Конфигурация сервера
  // ==========================================
  {
    lang: 'xml',
    id: 'xml-svg-inline',
    title: 'SVG & XML: векторная графика <svg>, viewBox и перекрашивание через currentColor',
    summary: 'Устройство векторных иконок, масштабируемая сетка координат viewBox и управление цветом и обводкой из CSS.',
    code: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <circle cx="11" cy="11" r="8"></circle>
  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>`,
    example: `.btn:hover svg {\n  color: #38bdf8;\n  transform: scale(1.1);\n}`,
    points: [
      'Атрибут viewBox="0 0 24 24" задаёт внутреннюю систему координат холста: благодаря ему иконка идеально масштабируется под любые width и height без потери чёткости.',
      'Значение stroke="currentColor" или fill="currentColor" заставляет SVG автоматически наследовать цвет текста родительской кнопки или ссылки!',
      'Декоративным иконкам рядом с текстом кнопки добавляй aria-hidden="true", чтобы скринридер не пытался озвучить векторные пути.'
    ],
    tags: ['XML', 'SVG', 'viewBox', 'currentColor', 'stroke', 'fill', 'path', 'иконки', 'вектор'],
    when: 'Для всех интерфейсных иконок, логотипов, графиков и анимированных иллюстраций.',
    alternatives: 'Подключение SVG через <img src="icon.svg"> не позволяет менять цвет иконки при наведении через CSS.',
    url: 'https://developer.mozilla.org/ru/docs/Web/SVG'
  },
  {
    lang: 'xml',
    id: 'xml-rss-feed',
    title: 'XML: лента новостей и блога RSS 2.0 (feed.xml)',
    summary: 'Стандартный XML-формат для автоматической трансляции новых статей блога в агрегаторы, Telegram-боты и Яндекс.Дзен.',
    code: `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DevShelf — Блог о веб-разработке</title>
    <link>https://example.com/</link>
    <description>Свежие руководства по HTML, CSS, JS и PHP</description>
    <language>ru</language>
    <item>
      <title>Полное руководство по CSS Grid и Subgrid</title>
      <link>https://example.com/blog/css-grid</link>
      <guid isPermaLink="true">https://example.com/blog/css-grid</guid>
      <pubDate>Mon, 15 Sep 2026 12:00:00 +0300</pubDate>
      <description><![CDATA[<p>Разбираем практические примеры верстки сеток...</p>]]></description>
    </item>
  </channel>
</rss>`,
    example: `<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml">`,
    points: [
      'Внутри тега <description> используй секцию <![CDATA[ ... ]]>, чтобы HTML-теги абзацев и ссылок не ломали парсинг XML.',
      'Дата публикации <pubDate> в RSS 2.0 должна быть в формате RFC 2822 (в PHP это константа DATE_RSS).',
      'Добавь тег <link rel="alternate" type="application/rss+xml" href="/rss.xml"> в <head> сайта для автообнаружения ленты браузерами.'
    ],
    tags: ['XML', 'RSS', 'feed', 'CDATA', 'pubDate', 'лента', 'блог', 'новости', 'синдикация'],
    when: 'Для новостных сайтов, технических блогов, подкастов и автопостинга в соцсети.',
    alternatives: 'Формат Atom (application/atom+xml) или JSON Feed выполняют ту же задачу.',
    url: 'https://www.rssboard.org/rss-specification'
  },
  {
    lang: 'xml',
    id: 'seo-meta-robots-canonical',
    title: 'SEO: управление индексацией (<meta name="robots">, canonical, X-Robots-Tag)',
    summary: 'Точечный запрет индексации служебных страниц, защита от дублей с GET-параметрами и управление сниппетами.',
    code: `<head>
  <!-- Основной канонический адрес страницы без UTM-меток и параметров сортировки -->
  <link rel="canonical" href="https://example.com/catalog/laptops">

  <!-- Запретить индексацию страницы поиска или личного кабинета, но разрешить переход по ссылкам -->
  <meta name="robots" content="noindex, follow">

  <!-- Разрешить крупные превью картинок в выдаче Google Discover -->
  <meta name="robots" content="index, follow, max-image-preview:large">
</head>`,
    example: `/* В PHP для PDF-файлов или ответов API: header('X-Robots-Tag: noindex, nofollow'); */`,
    points: [
      'Важно: если страница закрыта в файле robots.txt через Disallow, поисковый бот НЕ зайдёт на неё и НЕ увидит тег <meta name="robots" content="noindex">! Чтобы гарантированно удалить страницу из выдачи, открой её в robots.txt и поставь meta noindex.',
      'Тег <link rel="canonical"> спасает сайт от потери позиций из-за дублей вида ?utm_source=tg или ?sort=price.',
      'HTTP-заголовок X-Robots-Tag: noindex позволяет закрыть от индексации не только HTML, но и PDF-документы или тестовый поддомен.'
    ],
    tags: ['XML', 'SEO', 'robots', 'noindex', 'nofollow', 'canonical', 'индексация', 'дубли', 'поисковики'],
    when: 'На всех страницах каталога с фильтрами (canonical), в личных кабинетах, корзине и результатах поиска (noindex).',
    alternatives: 'Для склейки старых переехавших адресов со сменой URL используй серверный 301 редирект.',
    url: 'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=ru'
  },
  {
    lang: 'xml',
    id: 'seo-htaccess-apache',
    title: 'Server & SEO: настройка .htaccess (кэширование, Gzip, защита и ЧПУ-роутинг)',
    summary: 'Конфигурация веб-сервера Apache для единой точки входа SPA/PHP, сжатия статики и заголовков безопасности.',
    code: `Options -Indexes
DirectoryIndex index.html index.php

<IfModule mod_rewrite.c>
  RewriteEngine On
  # Перенаправляем все несуществующие пути на index.php (или index.html для SPA)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>`,
    example: `ErrorDocument 404 /404.html`,
    points: [
      'Options -Indexes запрещает серверу показывать список файлов в папке, если в ней нет индексного файла.',
      'На виртуальных хостингах (например, Beget) редирект на HTTPS лучше включать галочкой в панели управления, чтобы не создать бесконечный цикл редиректов (ERR_TOO_MANY_REDIRECTS) между Nginx и Apache!',
      'Условия !-f и !-d проверяют, что запрашиваемый URL не является реальным файлом (картинкой, CSS) или папкой на диске.'
    ],
    tags: ['XML', 'SEO', 'htaccess', 'apache', 'rewrite', 'безопасность', 'сервер', 'редирект', 'beget'],
    when: 'При размещении сайтов и веб-приложений на хостингах с веб-сервером Apache.',
    alternatives: 'На VPS с чистым Nginx вместо .htaccess используется блок try_files $uri $uri/ /index.html; в nginx.conf.',
    url: 'https://httpd.apache.org/docs/current/howto/htaccess.html'
  },

  // ==========================================
  // Интерактивные Рецепты (Готовые решения частых задач)
  // ==========================================
  {
    lang: 'recipes',
    id: 'recipe-dropdown-menu',
    title: 'Рецепт: Выпадающее меню (Dropdown) с закрытием по клику вне блока',
    summary: 'Доступное выпадающее меню профиля или действий с поддержкой клавиши Esc и автоматическим закрытием при клике мимо.',
    code: `<div class="dropdown" id="user-dropdown">
  <button type="button" class="dropdown-trigger" aria-expanded="false">
    Аккаунт ▾
  </button>
  <div class="dropdown-menu" hidden>
    <a href="#profile">Мой профиль</a>
    <a href="#billing">Подписка и счета</a>
    <hr>
    <button type="button" class="danger">Выйти</button>
  </div>
</div>

<script>
const dd = document.getElementById('user-dropdown');
const btn = dd.querySelector('.dropdown-trigger');
const menu = dd.querySelector('.dropdown-menu');

function toggleDropdown(force) {
  const isOpen = typeof force === 'boolean' ? force : menu.hidden;
  menu.hidden = !isOpen;
  btn.setAttribute('aria-expanded', String(isOpen));
}

btn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleDropdown();
});

document.addEventListener('click', (e) => {
  if (!dd.contains(e.target)) toggleDropdown(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') toggleDropdown(false);
});
</script>`,
    example: `.dropdown { position: relative; display: inline-block; }\n.dropdown-menu { position: absolute; right: 0; top: calc(100% + 6px); }`,
    points: [
      'Проверка !dd.contains(e.target) на документе надёжно закрывает меню при клике в любое место страницы за пределами компонента.',
      'Синхронизация атрибута hidden и aria-expanded гарантирует правильную работу со скринридерами.',
      'Позиционирование top: calc(100% + 6px) располагает выпадающий список ровно на 6px ниже кнопки.'
    ],
    tags: ['рецепт', 'dropdown', 'выпадающее меню', 'меню профиля', 'клик вне', 'поповер'],
    when: 'Для меню профиля в шапке, выбора языка, сортировки и меню «три точки» в таблицах.',
    alternatives: 'В современных браузерах можно также использовать нативный атрибут popover.',
    url: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/'
  },
  {
    lang: 'recipes',
    id: 'recipe-toast-notifications',
    title: 'Рецепт: Всплывающие уведомления (Toast) с автоскрытием и стеком',
    summary: 'Лёгкая функция вызова неблокирующих уведомлений в углу экрана с плавной анимацией и поддержкой aria-live.',
    code: `<div id="toast-stack" class="toast-stack" aria-live="polite"></div>
<button type="button" onclick="showToast('Настройки успешно сохранены!', 'success')">
  Показать уведомление
</button>

<script>
function showToast(message, type = 'info') {
  const stack = document.getElementById('toast-stack');
  const toast = document.createElement('div');
  toast.className = \`toast-item toast-\${type}\`;
  toast.textContent = message;
  stack.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('is-leaving');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 3000);
}
</script>`,
    example: `.toast-stack { position: fixed; bottom: 20px; right: 20px; display: flex; flex-direction: column; gap: 8px; z-index: 1000; }`,
    points: [
      'Контейнер со свойством display: flex; flex-direction: column; gap: 8px аккуратно выстраивает несколько уведомлений друг над другом.',
      'pointer-events: none на самом контейнере гарантирует, что невидимая область стека не перекроет кнопки под ней.',
      'Атрибут aria-live="polite" автоматически зачитывает текст уведомления незрячим пользователям.'
    ],
    tags: ['рецепт', 'toast', 'тост', 'уведомление', 'алерт', 'нотификация', 'всплывашка'],
    when: 'При копировании в буфер обмена, сохранении формы, добавлении товара в корзину и сетевых ошибках.',
    alternatives: 'Никогда не используй блокирующий системный window.alert() в современных интерфейсах.',
    url: 'https://developer.mozilla.org/ru/docs/Web/Accessibility/ARIA/Roles/status_role'
  },
  {
    lang: 'recipes',
    id: 'recipe-theme-switcher',
    title: 'Рецепт: Переключатель тёмной и светлой темы с localStorage и prefers-color-scheme',
    summary: 'Мгновенное переключение темы оформления с сохранением выбора пользователя и учётом системной темы ОС.',
    code: `<button type="button" id="theme-btn" aria-label="Сменить тему">
  Переключить тему
</button>

<script>
const root = document.documentElement;
const saved = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialTheme = saved ?? (systemDark ? 'dark' : 'light');
root.dataset.theme = initialTheme;

document.getElementById('theme-btn').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});
</script>`,
    example: `:root[data-theme="dark"] { --bg: #090d14; --text: #f8fafc; }\n:root[data-theme="light"] { --bg: #f8fafc; --text: #0f172a; }`,
    points: [
      'Чтобы избежать белой вспышки (FOUC) при загрузке страницы, маленький скрипт проверки localStorage ставят синхронно в <head>.',
      'Свойство color-scheme: dark / light на :root автоматически перекрашивает системные полосы прокрутки (scrollbars) и календари инпутов!',
      'Если пользователь ещё не выбирал тему вручную, matchMedia("(prefers-color-scheme: dark)") бережно подстроится под настройки его системы.'
    ],
    tags: ['рецепт', 'dark mode', 'тема', 'тёмная тема', 'светлая тема', 'localStorage', 'переключатель'],
    when: 'В документации, дашбордах, читалках и веб-приложениях.',
    alternatives: 'Функция CSS light-dark() позволяет описывать обе палитры прямо в одной CSS-переменной.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/@media/prefers-color-scheme'
  },
  {
    lang: 'recipes',
    id: 'recipe-live-search-filter',
    title: 'Рецепт: Живой поиск и фильтрация карточек на странице без перезагрузки',
    summary: 'Мгновенная фильтрация списка карточек или таблицы по введённому тексту с подсчётом найденных элементов и пустым состоянием.',
    code: `<input type="search" id="filter-input" placeholder="Поиск по карточкам...">
<ul id="cards-list">
  <li class="item">Адаптивная сетка CSS Grid</li>
  <li class="item">Модальное окно HTML Dialog</li>
  <li class="item">Запросы к серверу Fetch API</li>
</ul>
<p id="empty-msg" hidden>Ничего не найдено</p>

<script>
const input = document.getElementById('filter-input');
const items = Array.from(document.querySelectorAll('#cards-list .item'));
const emptyMsg = document.getElementById('empty-msg');

input.addEventListener('input', () => {
  const query = input.value.trim().toLowerCase();
  let visibleCount = 0;

  items.forEach(item => {
    const match = item.textContent.toLowerCase().includes(query);
    item.hidden = !match;
    if (match) visibleCount++;
  });

  emptyMsg.hidden = visibleCount > 0;
});
</script>`,
    example: `/* Использование item.hidden = !match чисто скрывает несовпадающие карточки */`,
    points: [
      'Приведение строки и текста карточки к единому регистру через .toLowerCase() делает поиск нечувствительным к заглавным буквам.',
      'Скрытие через атрибут item.hidden не удаляет узлы из DOM, поэтому при очистке поля поиска все карточки мгновенно возвращаются на место.',
      'Обязательно показывай блок «Ничего не найдено» (empty state), когда visibleCount === 0.'
    ],
    tags: ['рецепт', 'поиск', 'фильтр', 'живой поиск', 'search', 'filter', 'список'],
    when: 'Для фильтрации FAQ, справочников, таблиц тарифов, списков контактов и каталогов до 500 элементов.',
    alternatives: 'Для базы из десятков тысяч товаров фильтрацию лучше выполнять на сервере с debounce.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/hidden'
  },
  {
    lang: 'recipes',
    id: 'recipe-copy-code-button',
    title: 'Рецепт: Блок кода с кнопкой «Скопировать» и подсветкой статуса',
    summary: 'Готовый компонент сниппета документации с копированием в буфер обмена и сменой состояния кнопки.',
    code: `<div class="code-card">
  <div class="code-header">
    <span>bash</span>
    <button type="button" class="copy-trigger">Копировать</button>
  </div>
  <pre><code>npm create vite@latest my-app</code></pre>
</div>

<script>
document.querySelectorAll('.copy-trigger').forEach(btn => {
  btn.addEventListener('click', async () => {
    const code = btn.closest('.code-card').querySelector('code').textContent;
    await navigator.clipboard.writeText(code);
    btn.textContent = '✓ Скопировано';
    btn.classList.add('is-copied');
    setTimeout(() => {
      btn.textContent = 'Копировать';
      btn.classList.remove('is-copied');
    }, 1800);
  });
});
</script>`,
    example: `.copy-trigger.is-copied { color: #10b981; border-color: #10b981; }`,
    points: [
      'Навигация через btn.closest(".code-card").querySelector("code") позволяет иметь сколько угодно блоков кода на странице без привязки к уникальным ID.',
      'Чтение через .textContent берёт чистый текст команды без HTML-тегов подсветки синтаксиса.',
      'Визуальный класс .is-copied меняет цвет рамки и текста на зелёный на 1.8 секунды.'
    ],
    tags: ['рецепт', 'копировать код', 'copy', 'clipboard', 'сниппет', 'документация'],
    when: 'В технических блогах, документации API, личных кабинетах с API-ключами и промокодами.',
    alternatives: 'Можно также использовать делегирование событий на document вместо цикла по кнопкам.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Clipboard/writeText'
  }
];
