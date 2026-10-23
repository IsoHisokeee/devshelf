export const quickRefTopics = [
  // ==========================================
  // 45+ дополнительных карточек по тегам HTML, свойствам CSS, методам JS, функциям PHP и SEO/XML
  // ==========================================
  {
    lang: 'html',
    id: 'html-meta-charset-viewport',
    title: 'HTML: <meta name="viewport"> и управление масштабом на смартфонах',
    summary: 'Точная настройка ширины области просмотра, запрет нежелательного сдвига клавиатуры и доступный зум.',
    code: `<meta name="viewport" content="width=device-width, initial-scale=1, interactive-widget=resizes-content">`,
    example: `/* Не используй user-scalable=no или maximum-scale=1 — это блокирует зум слабовидящим и снижает балл Lighthouse! */`,
    points: [
      'width=device-width сообщает мобильному браузеру использовать реальную CSS-ширину экрана (например, 390px), а не эмулировать десктопный монитор 980px.',
      'Новый параметр interactive-widget=resizes-content корректно сжимает высоту 100dvh при появлении экранной клавиатуры на Android/iOS!',
      'Никогда не ставь user-scalable=no: чтобы iOS Safari сам не зумил страницу при клике в инпут, просто задай всем <input> размер шрифта не меньше 16px (font-size: 16px)!'
    ],
    tags: ['HTML', 'viewport', 'meta', 'mobile', 'scale', 'zoom', 'клавиатура', 'мобильная верстка'],
    when: 'В секции <head> абсолютно каждой адаптивной страницы.',
    alternatives: 'Для предотвращения автозума инпутов на iPhone используй font-size: max(16px, 1rem) на полях форм.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Viewport_meta_tag'
  },
  {
    lang: 'html',
    id: 'html-table-colgroup-tfoot',
    title: 'HTML: итоги таблицы <tfoot> и стилизация колонок <colgroup>, <col>',
    summary: 'Семантический подвал таблицы с итоговой суммой и задание ширины или фона целым столбцам через <colgroup>.',
    code: `<table>
  <colgroup>
    <col style="width: 60%">
    <col style="width: 20%">
    <col class="highlight-col" style="width: 20%">
  </colgroup>
  <thead>
    <tr><th>Услуга</th><th>Часы</th><th>Сумма</th></tr>
  </thead>
  <tbody>
    <tr><td>Разработка фронтенда</td><td>40</td><td>80 000 ₽</td></tr>
  </tbody>
  <tfoot>
    <tr><th colspan="2">Итого к оплате:</th><td><strong>80 000 ₽</strong></td></tr>
  </tfoot>
</table>`,
    example: `table { table-layout: fixed; width: 100%; } /* Быстрая отрисовка таблицы по ширине первой строки */`,
    points: [
      'Тег <colgroup> с вложенными <col> позволяет задать width или background сразу всему столбцу таблицы без дублирования класса на каждой ячейке <td>.',
      '<tfoot> размечает строку с итоговыми суммами и при печати многостраничной таблицы автоматически дублируется внизу каждого листа.',
      'CSS-свойство table-layout: fixed ускоряет расчёт широких таблиц: браузер берёт ширину колонок из <colgroup> или первой строки, не пересчитывая все 1000 строк.'
    ],
    tags: ['HTML', 'tfoot', 'colgroup', 'col', 'table-layout', 'таблица', 'итого', 'столбцы'],
    when: 'В счетах на оплату, корзинах товаров, сметах и сравнительных таблицах тарифов.',
    alternatives: 'Если итоговая строка не нужна, секцию <tfoot> можно не указывать.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/colgroup'
  },
  {
    lang: 'html',
    id: 'html-input-range-number-step',
    title: 'HTML: ползунок <input type="range"> с делениями <datalist> и шагом step',
    summary: 'Настройка ползунков громкости, цены или калькулятора кредита с магнитными засечками и выводом значения.',
    code: `<label for="loan-term">Срок: <output id="term-val">12</output> мес.</label>
<input
  type="range"
  id="loan-term"
  min="3"
  max="36"
  step="3"
  value="12"
  list="term-ticks"
  oninput="document.getElementById('term-val').value = this.value"
>
<datalist id="term-ticks">
  <option value="3" label="3м"></option>
  <option value="12" label="1г"></option>
  <option value="24" label="2г"></option>
  <option value="36" label="3г"></option>
</datalist>`,
    example: `<input type="number" min="0" max="100" step="0.01"> /* Разрешает ввод дробных копеек! */`,
    points: [
      'По умолчанию у <input type="number"> и <input type="range"> шаг step равен 1 (разрешены только целые числа). Чтобы разрешить ввод копеек или дробных чисел, укажи step="0.01" или step="any"!',
      'Привязка <datalist> через атрибут list к ползунку type="range" рисует нативные риски-деления вдоль дорожки ползунка.',
      'Событие input срабатывает непрерывно в момент перетаскивания ползунка, а событие change — только когда пользователь отпустил палец.'
    ],
    tags: ['HTML', 'range', 'number', 'step', 'min', 'max', 'output', 'ползунок', 'калькулятор'],
    when: 'В визуальных генераторах CSS, фильтрах цены, калькуляторах доставки и настройках звука.',
    alternatives: 'Для выбора диапазона «от и до» двумя бегунками используют два наложенных друг на друга <input type="range">.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/range'
  },
  {
    lang: 'html',
    id: 'html-svg-sprite-use',
    title: 'HTML & SVG: векторный спрайт иконок (<svg><use href="#icon-id">)</use>',
    summary: 'Переиспользование одних и тех же SVG-иконок на странице без дублирования громоздких координат <path>.',
    code: `<!-- 1. Скрытый набор символов один раз в начале страницы (или во внешнем sprite.svg) -->
<svg hidden aria-hidden="true">
  <symbol id="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="20 6 9 17 4 12"></polyline>
  </symbol>
</svg>

<!-- 2. Компактная вставка иконки в любом месте с поддержкой currentColor -->
<svg width="18" height="18" aria-hidden="true">
  <use href="#icon-check"></use>
</svg>`,
    example: `<svg width="20" height="20"><use href="/assets/icons.svg#search"></use></svg>`,
    points: [
      'Если одна и та же иконка (галочка, звезда, корзина) повторяется в 50 карточках каталога, вынеси её в <symbol id="..."> и вызывай через <use href="#..."> — HTML-код страницы станет легче в разы!',
      'Используй современный атрибут href="#id" вместо устаревшего xlink:href="#id".',
      'Внутри <symbol> обязательно задавай stroke="currentColor" или fill="currentColor", чтобы каждый экземпляр <use> можно было красить своим CSS-цветом.'
    ],
    tags: ['HTML', 'SVG', 'symbol', 'use', 'sprite', 'спрайт', 'иконки', 'оптимизация'],
    when: 'В каталогах товаров, таблицах и панелях инструментов с повторяющимися иконками.',
    alternatives: 'Для одиночных уникальных иллюстраций проще вставить инлайновый <svg> напрямую.',
    url: 'https://developer.mozilla.org/ru/docs/Web/SVG/Element/use'
  },

  // ==========================================
  // Дополнительные карточки CSS3
  // ==========================================
  {
    lang: 'css',
    id: 'css-visibility-opacity-display',
    title: 'CSS: разница между display: none, visibility: hidden, opacity: 0 и content-visibility',
    summary: 'Шпаргалка по 4 способам скрытия элемента: влияние на поток документа, клики мышью, скринридеры и анимацию.',
    code: `/* 1. Полное удаление из верстки и дерева доступности (нельзя анимировать плавно без allow-discrete) */
.is-removed { display: none; }

/* 2. Место в сетке сохраняется, но элемент невидим и НЕ кликабелен */
.is-invisible { visibility: hidden; }

/* 3. Прозрачен, но ОСТАЁТСЯ кликабельным! Всегда комбинируй с pointer-events: none */
.is-faded {
  opacity: 0;
  pointer-events: none;
}`,
    example: `.dropdown {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 200ms, visibility 200ms;\n}`,
    points: [
      'Главная ошибка новичков: скрыть выпадающее меню или попап только через opacity: 0! Невидимое меню продолжит перехватывать все клики мышью по кнопкам под ним. Обязательно добавляй visibility: hidden или pointer-events: none!',
      'Связка opacity: 0 + visibility: hidden идеально анимируется через transition: элемент плавно растворяется и после этого перестаёт реагировать на мышь и клавишу Tab.',
      'display: none полностью освобождает занимаемое блоком место в потоке.'
    ],
    tags: ['CSS', 'display none', 'visibility hidden', 'opacity', 'скрыть элемент', 'разница', 'анимация'],
    when: 'При реализации выпадающих меню, тултипов, модальных окон и табов.',
    alternatives: 'Для скрытия текста только от глаз с сохранением для скринридера используй паттерн .sr-only.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/visibility'
  },
  {
    lang: 'css',
    id: 'css-writing-mode-text-orientation',
    title: 'CSS: вертикальный текст (writing-mode: vertical-rl) и поворот подписей',
    summary: 'Оформление вертикальных боковых подписей секций, корешков книг и заголовков узких столбцов таблицы.',
    code: `.side-label {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg); /* Чтобы текст читался снизу вверх */
  letter-spacing: 0.08em;
  text-transform: uppercase;
}`,
    example: `writing-mode: horizontal-tb; /* Стандартный горизонтальный режим по умолчанию */`,
    points: [
      'В отличие от transform: rotate(-90deg), свойство writing-mode: vertical-rl честно меняет блочную модель: ширина блока становится узкой по высоте букв, и соседние элементы аккуратно прижимаются к нему!',
      'Добавление transform: rotate(180deg) к vertical-rl разворачивает строку так, чтобы она читалась снизу вверх (привычно для европейских корешков и боковых лейблов).',
      'Очень удобно для узких заголовков столбцов таблицы с чекбоксами или датами.'
    ],
    tags: ['CSS', 'writing-mode', 'vertical-rl', 'text-orientation', 'вертикальный текст', 'типографика'],
    when: 'Для декоративных боковых индикаторов секций, билетов, бейджей и компактных таблиц.',
    alternatives: 'Поворот через rotate(-90deg) оставляет вокруг элемента старую широкую горизонтальную коробку.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/writing-mode'
  },
  {
    lang: 'css',
    id: 'css-scroll-margin-padding',
    title: 'CSS: отступ при прокрутке к якорю (scroll-margin-top под фиксированную шапку)',
    summary: 'Изящное решение проблемы, когда при клике по оглавлению заголовок секции прячется под фиксированным навбаром.',
    code: `/* Задаём всем заголовкам с id запас сверху, равный высоте шапки (56px) + 20px воздуха! */
h2[id],
h3[id],
section[id] {
  scroll-margin-top: 76px;
}`,
    example: `html {\n  scroll-behavior: smooth;\n}`,
    points: [
      'Когда на сайте есть sticky или fixed шапка высотой 56px, переход по ссылке <a href="#faq"> прижимает заголовок #faq к самому верху окна — прямо ПОД шапку!',
      'Одно свойство scroll-margin-top: 76px на целевых секциях заставляет браузер останавливать прокрутку ровно на 76px выше заголовка.',
      'Работает как при клике по якорной ссылке #hash, так и при вызове element.scrollIntoView() из JavaScript!'
    ],
    tags: ['CSS', 'scroll-margin-top', 'scroll-padding-top', 'anchor', 'sticky', 'якорь', 'оглавление', 'шапка'],
    when: 'На всех страницах с фиксированной шапкой и якорной навигацией (лендинги, документация, статьи).',
    alternatives: 'Раньше для этого городили невидимые псевдоэлементы ::before с отрицательным margin-top.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top'
  },
  {
    lang: 'css',
    id: 'css-inset-center-absolute',
    title: 'CSS: центрирование абсолютного/фиксированного блока через inset: 0 и margin: auto',
    summary: 'Современный способ центрирования модалки или иконки с известными размерами без сдвига translate(-50%, -50%).',
    code: `.floating-dialog {
  position: fixed;
  inset: 0;              /* Растягивает привязку ко всем 4 краям экрана (top/right/bottom/left: 0) */
  width: min(480px, 92vw);
  height: fit-content;   /* Высота подстраивается под контент внутри! */
  margin: auto;          /* Браузер сам центрирует блок по вертикали и горизонтали! */
}`,
    example: `.badge-center {\n  position: absolute;\n  inset-inline: 0;\n  margin-inline: auto;\n  width: max-content;\n}`,
    points: [
      'Благодаря поддержке height: fit-content и width: fit-content теперь можно центрировать абсолютный или фиксированный блок через inset: 0; margin: auto; даже не зная его точной высоты в пикселях!',
      'В отличие от transform: translate(-50%, -50%), этот способ оставляет свойство transform свободным для анимаций scale() и не размывает шрифты на нечётных пикселях.',
      'Для центрирования только по горизонтали используй пару inset-inline: 0; margin-inline: auto;.'
    ],
    tags: ['CSS', 'inset', 'margin auto', 'absolute', 'fixed', 'fit-content', 'центрирование'],
    when: 'При позиционировании всплывающих окон, тостов по центру, тултипов и декоративных плашек.',
    alternatives: 'Если родитель не обязан быть absolute, проще задать родителю display: grid; place-items: center;.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/inset'
  },
  {
    lang: 'css',
    id: 'css-selection-scrollbar-styling',
    title: 'CSS: кроссбраузерная стилизация полос прокрутки (scrollbar-width и ::-webkit-scrollbar)',
    summary: 'Аккуратные тёмные и тонкие скроллбары для редакторов кода, боковых панелей и модальных окон.',
    code: `/* Стандартное свойство (Firefox, Chrome 121+, Edge) */
.custom-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(148, 163, 184, 0.3) transparent;
}

/* Тонкая настройка для WebKit / Safari */
.custom-scroll::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.3);
  border-radius: 3px;
}`,
    example: `:root { color-scheme: dark; } /* Автоматически делает системный скроллбар тёмным! */`,
    points: [
      'Прежде чем городить кастомный скроллбар, проверь: свойство color-scheme: dark на :root само переключает стандартный белый скроллбар Windows в аккуратный тёмный режим!',
      'Свойство scrollbar-width: thin и scrollbar-color теперь поддерживаются и в Firefox, и в современных версиях Chrome/Edge.',
      'Никогда не скрывай скроллбар полностью (scrollbar-width: none) на длинных блоках кода или текста, иначе пользователь с мышью не поймёт, что контент можно прокрутить.'
    ],
    tags: ['CSS', 'scrollbar', 'scrollbar-width', 'scrollbar-color', 'webkit-scrollbar', 'полоса прокрутки'],
    when: 'Во внутренних панелях сайдбара, блоках кода <pre>, выпадающих списках и чатах.',
    alternatives: 'Для горизонтальной ленты табов на мобильном экране допустимо скрыть полосу через scrollbar-width: none.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width'
  },
  {
    lang: 'css',
    id: 'css-list-style-details-marker',
    title: 'CSS: кастомные маркеры списков (::marker, list-style-type: "→ ")',
    summary: 'Замена стандартных круглых точек списка на любой символ, тире или эмодзи прямо в CSS-свойстве list-style-type.',
    code: `/* Любая строка в кавычках как маркер списка! */
.feature-list {
  list-style-type: "✓ ";
  padding-left: 20px;
}

.feature-list li {
  padding-left: 6px;
}

.feature-list li::marker {
  color: #10b981;
  font-weight: 700;
}`,
    example: `list-style-type: "— "; /* Классическое русское тире в качестве буллита списка */`,
    points: [
      'Мало кто знает, что в свойство list-style-type можно передать любую строку в кавычках: list-style-type: "→ ", "— " или "✓ "!',
      'Псевдоэлемент li::marker позволяет покрасить этот символ в акцентный цвет и задать ему жирный шрифт, не создавая ручных псевдоэлементов ::before с position: absolute.',
      'При сбросе маркеров навигационного меню через list-style: none в Safari старых версий используй семантический тег <nav> вокруг <ul>, чтобы сохранить роль списка.'
    ],
    tags: ['CSS', 'list-style-type', 'marker', 'ul', 'li', 'список', 'маркеры', 'буллиты'],
    when: 'В списках преимуществ тарифа («✓ Безлимитный трафик»), чек-листах и текстовых статьях.',
    alternatives: 'Если в качестве буллита нужна многоцветная SVG-иконка, используй display: flex на li или background-image.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/list-style-type'
  },

  // ==========================================
  // Дополнительные карточки JavaScript (Массивы, Строки, Объекты, События, BOM)
  // ==========================================
  {
    lang: 'javascript',
    id: 'js-array-from-fill-range',
    title: 'JS: генерация массивов и последовательностей (Array.from, Array.fill)',
    summary: 'Создание массива чисел от 1 до N для пагинации, звёзд рейтинга или сетки календаря в одну строчку.',
    code: `// 1. Генерация массива чисел [1, 2, 3, 4, 5] для кнопок пагинации
const pages = Array.from({ length: 5 }, (_, index) => index + 1);

// 2. Генерация шага чисел (например, годы с 2020 по 2026)
const range = (start, stop, step = 1) =>
  Array.from({ length: Math.floor((stop - start) / step) + 1 }, (_, i) => start + i * step);

console.log(range(2020, 2026)); // [2020, 2021, 2022, 2023, 2024, 2025, 2026]

// 3. Превращение NodeList или Set в настоящий массив с маппингом за один шаг!
const texts = Array.from(document.querySelectorAll('h2'), el => el.textContent.trim());`,
    example: `const emptyGrid = Array.from({ length: 3 }, () => Array(3).fill(null));`,
    points: [
      'Второй аргумент в Array.from(iterable, mapFn) работает как встроенный .map() без создания промежуточного массива!',
      'Осторожно с Array(3).fill({}): метод .fill({}) заполнит все ячейки ссылкой на ОДИН И ТОТ ЖЕ объект в памяти! Чтобы создать независимые объекты или вложенные массивы, всегда используй Array.from({ length: 3 }, () => ({}))!',
      'Конструкция Array.from({ length: N }, (_, i) => i + 1) — стандартный идиоматический генератор диапазона в JS.'
    ],
    tags: ['JavaScript', 'Array.from', 'fill', 'range', 'пагинация', 'последовательность', 'массивы'],
    when: 'При рендеринге номеров страниц пагинации, скелетонов загрузки, звёзд рейтинга и игровых сеток.',
    alternatives: 'Цикл for (let i = 1; i <= n; i++) делает то же самое императивно.',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from'
  },
  {
    lang: 'javascript',
    id: 'js-number-parse-isnan',
    title: 'JS: безопасное преобразование чисел (Number, parseInt, Number.isFinite, toFixed)',
    summary: 'Чтение числовых значений из инпутов и атрибутов, проверка на валидное число и защита от NaN.',
    code: `const rawValue = inputElement.value; // всегда строка, например "42.5"

// Быстрое преобразование через Number() или чтение сразу как числа:
const num = inputElement.valueAsNumber; // встроенное свойство для <input type="number" / "range">!

// Надёжная проверка, что значение — реальное конечное число (отсекает NaN, Infinity и "42px")
if (Number.isFinite(num)) {
  console.log(num.toFixed(2)); // "42.50"
}

// Целое число из строки с единицами измерения ("16px" -> 16)
const px = Number.parseInt('16px', 10);`,
    example: `const quantity = Math.max(1, Number.parseInt(input.value, 10) || 1);`,
    points: [
      'У полей <input type="number">, <input type="range"> и <input type="date"> есть готовое свойство input.valueAsNumber, которое сразу возвращает тип number без ручного парсинга строк!',
      'Используй строгий Number.isFinite(val) или Number.isNaN(val) вместо старой глобальной функции isNaN(), которая сначала пытается привести строку к числу.',
      'Помни, что метод num.toFixed(2) возвращает СТРОКУ ("42.50"), поэтому если дальше нужно складывать числа, сначала выполни всю математику и вызывай toFixed() только перед самым выводом на экран!'
    ],
    tags: ['JavaScript', 'Number', 'parseInt', 'parseFloat', 'isFinite', 'isNaN', 'valueAsNumber', 'toFixed', 'числа'],
    when: 'При чтении ползунков, цен, количества товара в корзине и калькуляторов.',
    alternatives: 'Унарный плюс (+str) работает как Number(str), но хуже читается в длинных выражениях.',
    url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite'
  },
  {
    lang: 'javascript',
    id: 'js-object-freeze-assign-clone',
    title: 'JS: глубокое клонирование (structuredClone) и неизменяемые константы (Object.freeze)',
    summary: 'Нативное создание полной независимой копии вложенных объектов/массивов и защита словарей конфигурации от мутации.',
    code: `const originalState = {
  user: { name: 'Павел', prefs: { theme: 'dark' } },
  history: ['html-dialog', 'css-grid']
};

// Глубокая копия на уровне браузера (копирует вложенные объекты, массивы, Date, Map, Set!)
const nextState = structuredClone(originalState);
nextState.user.prefs.theme = 'light'; // originalState.user.prefs.theme остался 'dark'!

// Защита объекта констант от случайного изменения
const ROLES = Object.freeze({ ADMIN: 'admin', USER: 'user' });`,
    example: `/* structuredClone работает быстрее и точнее старого хака JSON.parse(JSON.stringify(obj)) */`,
    points: [
      'Оператор расширения {...obj} копирует только первый уровень, оставляя вложенные объекты общими по ссылке. Встроенная функция structuredClone(obj) создаёт полноценную глубокую копию!',
      'В отличие от старого трюка JSON.parse(JSON.stringify(obj)), метод structuredClone не ломает объекты Date, RegExp, Map, Set и Blob.',
      'Object.freeze(obj) замораживает объект первого уровня: в строгом режиме ("use strict" / ES-модули) попытка перезаписать свойство выбросит TypeError.'
    ],
    tags: ['JavaScript', 'structuredClone', 'Object.freeze', 'Object.assign', 'clone', 'копия объекта', 'иммутабельность'],
    when: 'При сохранении снимков состояния (undo/redo в редакторах), работе со стейтом и объявлении констант.',
    alternatives: 'Учитывай, что structuredClone не копирует функции и DOM-элементы.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Window/structuredClone'
  },
  {
    lang: 'javascript',
    id: 'js-async-iterators-generators',
    title: 'JS: загрузка с повтором при сбое сети (fetch Retry с экспоненциальной паузой)',
    summary: 'Надёжная обёртка вокруг fetch() для автоматического повтора запроса при кратковременном обрыве мобильного интернета.',
    code: `async function fetchWithRetry(url, options = {}, retries = 3, delayMs = 500) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok && response.status >= 500 && attempt < retries) {
        throw new Error(\`HTTP \${response.status}\`);
      }
      return response;
    } catch (err) {
      if (attempt === retries || err.name === 'AbortError') throw err;
      // Экспоненциальная пауза перед повтором: 500мс -> 1000мс -> 2000мс
      await new Promise(r => setTimeout(r, delayMs * (2 ** (attempt - 1))));
    }
  }
}`,
    example: `const res = await fetchWithRetry('/api/catalog');`,
    points: [
      'Повторять запрос (retry) имеет смысл только при сетевом обрыве или временных серверных ошибках 502 / 503 / 504 (но НЕ при клиентских ошибках 400 / 401 / 403 / 404!).',
      'Экспоненциальная задержка (500 мс, 1000 мс, 2000 мс) даёт серверу или мобильной сети время восстановиться, не заваливая его лавиной повторных запросов.',
      'Если запрос был отменён намеренно через AbortController (err.name === "AbortError"), цикл повторов немедленно прерывается.'
    ],
    tags: ['JavaScript', 'fetch', 'retry', 'backoff', 'async', 'await', 'сеть', 'ошибки сети'],
    when: 'При загрузке важных справочников, сохранении черновиков и работе в условиях нестабильного мобильного интернета.',
    alternatives: 'Для POST-запросов оплаты используй заголовок Idempotency-Key, чтобы повтор не создал дубль заказа.',
    url: 'https://developer.mozilla.org/ru/docs/Web/API/Fetch_API'
  }
];
