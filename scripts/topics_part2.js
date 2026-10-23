export const moreTopics = [
  // ==========================================
  // HTML5: Текст, Списки, Таблицы, Атрибуты, Интерактив, Доступность
  // ==========================================
  {
    lang: 'html',
    id: 'html-headings',
    title: 'HTML: заголовки <h1>–<h6> и иерархия документа',
    summary: 'Шесть уровней заголовков, формирующих оглавление страницы для пользователей, поисковых роботов и скринридеров.',
    code: `<article>
  <h1>Руководство по архитектуре CSS</h1>
  <p>Вводный абзац статьи с кратким обзором темы.</p>

  <h2>1. Методология БЭМ</h2>
  <p>Описание блока, элемента и модификатора.</p>

  <h3>1.1. Именование модификаторов</h3>
  <p>Примеры булевых и ключ-значение модификаторов.</p>
</article>`,
    example: `<h1>Главный заголовок страницы (один на документ)</h1>\n<h2>Заголовок секции</h2>\n<h3>Подзаголовок</h3>`,
    points: [
      'Тег <h1> должен быть один на страницу и отражать её главную тему (совпадать по смыслу с <title>).',
      'Не пропускай уровни вложенности (например, не переходи с <h1> сразу на <h4> ради размера шрифта).',
      'Размер текста заголовка всегда задавай через CSS (font-size: clamp(...)), а уровень тега выбирай по смыслу.'
    ],
    tags: ['HTML', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'заголовки', 'иерархия', 'типографика', 'seo'],
    when: 'Используй для озаглавливания страницы, каждого раздела <section> и карточек <article>.',
    alternatives: 'Не заменяй заголовки на <div class="title"> — страница потеряет структуру для SEO и незрячих пользователей.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/Heading_Elements'
  },
  {
    lang: 'html',
    id: 'html-text-inline',
    title: 'HTML: текстовая семантика <p>, <strong>, <em>, <mark>, <small>',
    summary: 'Теги для разметки абзацев, смысловых акцентов, важных предупреждений, подсвеченного текста и сносок.',
    code: `<p>
  <strong>Внимание:</strong> перед удалением базы данных создайте <em>резервную копию</em>.
</p>
<p>
  Результаты поиска по запросу <mark>flexbox</mark>: найдено 14 статей.
</p>
<p><small>Лицензия MIT · Обновлено в 2026 году</small></p>`,
    example: `<p>Обычный текст, <strong>важный фрагмент</strong> и <mark>выделенное совпадение</mark>.</p>`,
    points: [
      '<strong> указывает на высокую важность текста (скринридер произносит с усиленной интонацией), а <b> — просто полужирное начертание без важности.',
      '<em> задаёт логическое ударение в предложении, тогда как <i> используется для терминов, мыслей или иконок.',
      '<mark> подсвечивает совпадения в поиске или актуальную часть цитаты.'
    ],
    tags: ['HTML', 'p', 'strong', 'em', 'mark', 'small', 'b', 'i', 'абзац', 'жирный', 'курсив', 'текст'],
    when: 'При разметке любого текстового контента, статей, карточек и уведомлений.',
    alternatives: 'Если нужно сделать весь блок жирным чисто декоративно — используй CSS-свойство font-weight: 600.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/strong'
  },
  {
    lang: 'html',
    id: 'html-code-pre-kbd',
    title: 'HTML: разметка кода <code>, <pre>, <kbd> и <samp>',
    summary: 'Специализированные элементы для вывода фрагментов исходного кода, сочетаний клавиш и вывода терминала.',
    code: `<p>Нажмите <kbd>Ctrl</kbd> + <kbd>K</kbd> для вызова командной строки.</p>

<pre><code>function sum(a, b) {
  return a + b;
}</code></pre>

<p>Ответ сервера: <samp>HTTP/1.1 200 OK</samp></p>`,
    example: `<kbd>Esc</kbd> закрывает окно, а <code>Array.isArray()</code> проверяет массив.`,
    points: [
      'Тег <code> используется для инлайновых имён функций и переменных прямо внутри текста.',
      'Связка <pre><code>...</code></pre> сохраняет все пробелы, отступы и переносы строк для многострочных сниппетов.',
      'Символы < и > внутри <code> необходимо экранировать как &lt; и &gt;, чтобы браузер не посчитал их HTML-тегами.'
    ],
    tags: ['HTML', 'code', 'pre', 'kbd', 'samp', 'код', 'клавиши', 'терминал', 'сниппет'],
    when: 'В документации, технических блогах, подсказках горячих клавиш и логах.',
    alternatives: 'Для интерактивного редактирования кода используй <textarea> или редакторы CodeMirror / Monaco.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/code'
  },
  {
    lang: 'html',
    id: 'html-blockquote-figure',
    title: 'HTML: цитаты <blockquote>, <q> и иллюстрации <figure>, <figcaption>',
    summary: 'Семантическое оформление блочных цитат с указанием автора и автономных иллюстраций с подписями.',
    code: `<figure class="quote-card">
  <blockquote cite="https://martinfowler.com">
    <p>Любой дурак может написать код, который поймёт компьютер. Хорошие программисты пишут код, который может понять человек.</p>
  </blockquote>
  <figcaption>— Мартин Фаулер, <cite>Рефакторинг</cite></figcaption>
</figure>`,
    example: `<figure>\n  <img src="chart.svg" alt="График роста">\n  <figcaption>Рис. 1 — Динамика запросов за 2026 год</figcaption>\n</figure>`,
    points: [
      '<figure> связывает изображение, диаграмму, сниппет кода или цитату с её подписью <figcaption>.',
      '<blockquote> предназначен для крупных цитат, а <q> — для коротких цитат внутри строки (браузер сам добавит кавычки).',
      '<cite> используется для названия произведения (книги, статьи, стандарта), на которое ссылаются.'
    ],
    tags: ['HTML', 'blockquote', 'figure', 'figcaption', 'cite', 'q', 'цитата', 'подпись', 'иллюстрация'],
    when: 'Для оформления отзывов клиентов, цитат в статьях, графиков, фото с подписями и схем.',
    alternatives: 'Обычный <img> без подписи не требует обёртки в <figure>.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/figure'
  },
  {
    lang: 'html',
    id: 'html-time-address-abbr',
    title: 'HTML: даты <time>, аббревиатуры <abbr> и контакты <address>',
    summary: 'Машиночитаемые даты для поисковиков, расшифровка терминов и контактный блок автора или компании.',
    code: `<p>Релиз состоится <time datetime="2026-09-15T10:00:00+03:00">15 сентября в 10:00 МСК</time>.</p>

<p>Протокол <abbr title="HyperText Transfer Protocol Secure">HTTPS</abbr> шифрует трафик.</p>

<address>
  Связаться с редакцией: <a href="mailto:team@devshelf.ru">team@devshelf.ru</a>
</address>`,
    example: `<time datetime="2026-05-01">1 мая 2026</time>`,
    points: [
      'Атрибут datetime в <time> хранит дату в формате ISO 8601, понятном поисковикам и календарям, а внутри тега пишется текст для людей.',
      '<abbr title="..."> показывает расшифровку аббревиатуры при наведении курсора и помогает скринридерам.',
      '<address> предназначен для контактов автора статьи или владельца сайта, а не для любого почтового адреса доставки.'
    ],
    tags: ['HTML', 'time', 'datetime', 'abbr', 'address', 'дата', 'время', 'аббревиатура', 'контакты'],
    when: 'В карточках новостей, блогах, событиях, футере сайта и глоссариях.',
    alternatives: 'Для сложных всплывающих подсказок на тач-устройствах лучше дополнить <abbr> кастомным поповером.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/time'
  },
  {
    lang: 'html',
    id: 'html-links-navigation',
    title: 'HTML: ссылки <a>, якоря, скачивание и безопасность rel="noopener"',
    summary: 'Гиперссылки для навигации между страницами, перехода к секциям, звонков, писем и скачивания файлов.',
    code: `<!-- Обычная и внешняя ссылка -->
<a href="/catalog">Каталог</a>
<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub ↗</a>

<!-- Якорная ссылка внутри страницы -->
<a href="#pricing">К тарифам</a>

<!-- Скачивание файла, телефон и почта -->
<a href="/files/guide.pdf" download="DevShelf-Guide.pdf">Скачать PDF</a>
<a href="tel:+79990001122">+7 (999) 000-11-22</a>
<a href="mailto:hello@example.com">hello@example.com</a>`,
    example: `<a href="#section-2">Перейти к разделу</a>`,
    points: [
      'Если ссылка меняет URL или переводит на другую страницу/якорь — это всегда <a>. Если выполняет действие на месте (открыть модалку) — это <button>.',
      'Атрибут download подсказывает браузеру сохранить файл вместо открытия его во вкладке (работает для файлов с того же домена).',
      'При target="_blank" всегда добавляй rel="noopener", чтобы открытая вкладка не имела доступа к window.opener.'
    ],
    tags: ['HTML', 'a', 'href', 'link', 'target', 'download', 'mailto', 'tel', 'noopener', 'ссылка', 'якорь'],
    when: 'Для любой навигации, оглавлений статей, контактов и ссылок на скачивание.',
    alternatives: 'Никогда не используй <a href="#"> для кнопок открытия меню — используй <button type="button">.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/a'
  },
  {
    lang: 'html',
    id: 'html-buttons',
    title: 'HTML: элемент кнопки <button> и типы button / submit / reset',
    summary: 'Интерактивный элемент для запуска действий, отправки форм и управления интерфейсом с поддержкой клавиатуры.',
    code: `<!-- Обычная кнопка для JS-действий -->
<button type="button" class="btn-primary">Открыть фильтр</button>

<!-- Кнопка отправки формы -->
<button type="submit">Сохранить изменения</button>

<!-- Кнопка только с иконкой (обязателен aria-label) -->
<button type="button" aria-label="Закрыть окно">✕</button>`,
    example: `<button type="button" disabled>Загрузка...</button>`,
    points: [
      'По умолчанию внутри <form> кнопка без атрибута type считается type="submit" и перезагружает страницу при клике! Всегда явно пиши type="button" для обычных кнопок.',
      'Нативный <button> автоматически получает фокус по клавише Tab и нажимается по Пробелу и Enter.',
      'Атрибут disabled полностью блокирует клики, фокус и отправку формы.'
    ],
    tags: ['HTML', 'button', 'submit', 'reset', 'disabled', 'кнопка', 'форма', 'клик'],
    when: 'Для всех кликабельных элементов, которые не меняют адрес страницы (модалки, табы, бургер, лайки, отправка форм).',
    alternatives: 'Никогда не делай кнопки из <div onclick="..."> — они недоступны с клавиатуры и невидимы для скринридеров.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/button'
  },
  {
    lang: 'html',
    id: 'html-lists',
    title: 'HTML: списки <ul>, <ol> и список определений <dl>, <dt>, <dd>',
    summary: 'Маркированные списки, нумерованные инструкции и списки пар «ключ — значение» для характеристик.',
    code: `<!-- Нумерованный список со стартом с 3 -->
<ol start="3">
  <li>Настроить сборщик Vite</li>
  <li>Подключить стили</li>
</ol>

<!-- Список характеристик (ключ — значение) -->
<dl class="specs">
  <dt>Движок</dt>
  <dd>Chromium / V8</dd>
  <dt>Лицензия</dt>
  <dd>MIT</dd>
</dl>`,
    example: `<ul>\n  <li>Пункт меню 1</li>\n  <li>Пункт меню 2</li>\n</ul>`,
    points: [
      'Непосредственными дочерними элементами <ul> и <ol> могут быть только теги <li>.',
      '<ol> имеет полезные атрибуты: reversed (обратный отсчёт) и start="5" (начать нумерацию с 5).',
      '<dl> идеален для карточек характеристик товара, метаданных и глоссариев (внутри пары <dt> термин и <dd> описание).'
    ],
    tags: ['HTML', 'ul', 'ol', 'li', 'dl', 'dt', 'dd', 'список', 'нумерация', 'характеристики'],
    when: 'Для навигационных меню, чек-листов, пошаговых инструкций и таблиц характеристик.',
    alternatives: 'Если у данных больше двух измерений (строки и несколько колонок), используй <table> вместо <dl>.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/dl'
  },
  {
    lang: 'html',
    id: 'html-tables',
    title: 'HTML: таблицы данных <table>, <thead>, <tbody>, <th>, <td>',
    summary: 'Полная семантическая разметка табличных данных с заголовками столбцов, объединением ячеек и подписью.',
    code: `<table>
  <caption>Тарифные планы облачного хостинга</caption>
  <thead>
    <tr>
      <th scope="col">Тариф</th>
      <th scope="col">RAM</th>
      <th scope="col">Цена / мес</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Start</th>
      <td>4 ГБ</td>
      <td>490 ₽</td>
    </tr>
    <tr>
      <th scope="row">Pro</th>
      <td>16 ГБ</td>
      <td>1 490 ₽</td>
    </tr>
  </tbody>
</table>`,
    example: `<td colspan="2">Ячейка на две колонки</td>`,
    points: [
      'Атрибут scope="col" или scope="row" у тега <th> сообщает скринридерам, заголовок ли это столбца или строки.',
      '<caption> задаёт доступный заголовок таблицы и должен идти сразу после открывающего <table>.',
      'Для адаптивности на мобильных оборачивай таблицу в <div style="overflow-x: auto">.'
    ],
    tags: ['HTML', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'colspan', 'rowspan', 'таблица'],
    when: 'Для прайс-листов, финансовых отчётов, сравнения характеристик и расписаний.',
    alternatives: 'Никогда не используй таблицы для раскладки страницы — для этого есть CSS Grid и Flexbox.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/table'
  },
  {
    lang: 'html',
    id: 'html-input-types',
    title: 'HTML: современные типы полей <input> и мобильные клавиатуры',
    summary: 'Выбор правильного type и inputmode для показа удобной экранной клавиатуры на смартфонах и встроенной валидации.',
    code: `<input type="email" placeholder="name@company.ru" autocomplete="email">
<input type="tel" placeholder="+7 (999) 000-00-00" autocomplete="tel">
<input type="text" inputmode="numeric" pattern="[0-9]{6}" placeholder="Код из СМС">
<input type="search" placeholder="Поиск по каталогу...">
<input type="date" min="2026-01-01">
<input type="range" min="0" max="100" value="50">
<input type="color" value="#38bdf8">`,
    example: `<input type="password" autocomplete="current-password" required minlength="8">`,
    points: [
      'type="email" и type="tel" автоматически переключают клавиатуру iOS/Android на раскладку с @ или цифрами.',
      'Для пин-кодов, номеров карт и кодов из СМС используй <input type="text" inputmode="numeric"> вместо type="number" (у number есть стрелочки и скролл).',
      'Атрибут autocomplete="one-time-code" позволяет iOS и Android автоматически подставлять код из пришедшего СМС.'
    ],
    tags: ['HTML', 'input', 'email', 'tel', 'number', 'date', 'range', 'color', 'search', 'inputmode', 'поля'],
    when: 'В любых формах регистрации, оплаты, фильтрации и настроек.',
    alternatives: 'Для многострочного ввода текста используй <textarea rows="4">.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/input'
  },
  {
    lang: 'html',
    id: 'html-select-datalist',
    title: 'HTML: выпадающие списки <select>, <optgroup> и автодополнение <datalist>',
    summary: 'Нативный выбор значения из списка и текстовое поле с выпадающими подсказками без единой строчки JavaScript.',
    code: `<!-- Выпадающий список с группами -->
<label for="Stack">Технология:</label>
<select id="Stack" name="stack">
  <optgroup label="Frontend">
    <option value="ts">TypeScript</option>
    <option value="css">CSS Grid</option>
  </optgroup>
  <optgroup label="Backend">
    <option value="php" selected>PHP 8.3</option>
    <option value="node">Node.js</option>
  </optgroup>
</select>

<!-- Поле ввода с автодополнением -->
<input list="cities" placeholder="Начните вводить город...">
<datalist id="cities">
  <option value="Москва"></option>
  <option value="Санкт-Петербург"></option>
  <option value="Казань"></option>
</datalist>`,
    example: `<select required><option value="">Выберите...</option><option value="1">Вариант 1</option></select>`,
    points: [
      '<datalist> связывается с <input> через совпадение атрибута list у поля и id у datalist.',
      'В отличие от <select>, поле с <datalist> позволяет пользователю ввести собственное значение, которого нет в списке.',
      '<optgroup label="..."> визуально группирует опции внутри длинного списка <select>.'
    ],
    tags: ['HTML', 'select', 'option', 'optgroup', 'datalist', 'список', 'автодополнение', 'выбор'],
    when: 'Для выбора города, категории, страны или быстрых подсказок при поиске.',
    alternatives: 'Кастомный выпадающий список на JS нужен только если внутри опций требуются сложные иконки или аватары.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/datalist'
  },
  {
    lang: 'html',
    id: 'html-fieldset-legend',
    title: 'HTML: группировка полей <fieldset>, <legend>, чекбоксы и радиокнопки',
    summary: 'Доступное объединение радиокнопок и чекбоксов в смысловые блоки с общим заголовком и групповой блокировкой.',
    code: `<fieldset>
  <legend>Способ доставки</legend>
  <label>
    <input type="radio" name="delivery" value="courier" checked>
    Курьером до двери
  </label>
  <label>
    <input type="radio" name="delivery" value="pickup">
    Пункт выдачи
  </label>
</fieldset>`,
    example: `<fieldset disabled>\n  <legend>Недоступные настройки</legend>\n  <input type="text">\n</fieldset>`,
    points: [
      'Радиокнопки (type="radio") объединяются в группу одинаковым атрибутом name — выбрать можно только одну.',
      'Оборачивание текста и инпута в общий <label> увеличивает область клика (можно нажимать прямо на текст).',
      'Если добавить атрибут disabled самому тегу <fieldset>, все поля внутри него разом станут неактивными!'
    ],
    tags: ['HTML', 'fieldset', 'legend', 'radio', 'checkbox', 'label', 'группа', 'чекбокс', 'радиокнопка'],
    when: 'При верстке групп радиокнопок, чекбоксов фильтров и многошаговых анкет (адрес, оплата).',
    alternatives: 'Без <fieldset> и <legend> скринридер прочитает подпись радиокнопки («Да» / «Нет»), но не прочитает сам вопрос.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/fieldset'
  },
  {
    lang: 'html',
    id: 'html-form-validation',
    title: 'HTML: нативная валидация форм (required, pattern, minlength, min/max)',
    summary: 'Встроенная в браузер проверка полей до отправки формы и стилизация валидных/ошибочных состояний через CSS.',
    code: `<form>
  <label>
    Логин (от 3 до 16 латинских символов):
    <input type="text" name="username" required minlength="3" maxlength="16" pattern="[a-zA-Z0-9_]+" title="Только латинские буквы, цифры и _">
  </label>
  <button type="submit">Создать аккаунт</button>
</form>`,
    example: `input:user-invalid {\n  border-color: #ef4444;\n}\ninput:user-valid {\n  border-color: #10b981;\n}`,
    points: [
      'Атрибут pattern принимает регулярное выражение, а атрибут title выводит подсказку пользователю при ошибке.',
      'В CSS используй современный псевдокласс :user-invalid вместо :invalid — он подсвечивает ошибку только ПОСЛЕ того, как пользователь начал вводить текст!',
      'Нативная валидация улучшает UX, но никогда не заменяет проверку данных на сервере (PHP/Node.js).'
    ],
    tags: ['HTML', 'validation', 'required', 'pattern', 'minlength', 'maxlength', 'user-invalid', 'валидация', 'форма'],
    when: 'На всех клиентских формах для мгновенной обратной связи без лишнего JS-кода.',
    alternatives: 'Для кастомных текстов ошибок используй Constraint Validation API (input.setCustomValidity()).',
    url: 'https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Forms/Form_validation'
  },
  {
    lang: 'html',
    id: 'html-progress-meter',
    title: 'HTML: индикаторы <progress>, <meter> и <output>',
    summary: 'Нативные семантические элементы для отображения прогресс-бара загрузки, уровня заряда/диска и результата расчёта.',
    code: `<!-- Прогресс выполнения задачи -->
<label for="upload">Загрузка файла:</label>
<progress id="upload" value="72" max="100">72%</progress>

<!-- Измеритель в заданном диапазоне (зелёный/жёлтый/красный) -->
<label for="disk">Занято на диске:</label>
<meter id="disk" min="0" max="100" low="60" high="85" optimum="20" value="88">88%</meter>

<!-- Вывод результата калькулятора -->
<output name="result">1 450 ₽</output>`,
    example: `<progress></progress> <!-- Без value показывает бесконечную анимацию загрузки -->`,
    points: [
      '<progress> используется для процесса во времени (загрузка, шаг анкеты). Без атрибута value он работает как бесконечный спиннер.',
      '<meter> показывает статическую величину с порогами low, high и optimum (заряд батареи, надёжность пароля, место на диске).',
      '<output> автоматически озвучивает изменение значения скринридерам при пересчёте ползунков в калькуляторах.'
    ],
    tags: ['HTML', 'progress', 'meter', 'output', 'прогресс', 'индикатор', 'калькулятор', 'загрузка'],
    when: 'В загрузчиках файлов, дашбордах мониторинга, индикаторах пароля и онлайн-калькуляторах.',
    alternatives: 'Кастомный <div role="progressbar" aria-valuenow="72"> требует ручной поддержки ARIA-атрибутов.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/progress'
  },
  {
    lang: 'html',
    id: 'html-popover-api',
    title: 'HTML: нативный Popover API (атрибуты popover и popovertarget)',
    summary: 'Современный стандарт HTML для создания выпадающих меню, тултипов и тостов поверх всех слоёв без единой строчки JS.',
    code: `<button type="button" popovertarget="profile-menu">
  Профиль ▾
</button>

<div id="profile-menu" popover>
  <p><strong>Алексей</strong> · Pro аккаунт</p>
  <hr>
  <a href="#settings">Настройки</a>
  <button type="button" popovertarget="profile-menu" popovertargetaction="hide">Закрыть</button>
</div>`,
    example: `[popover]:popover-open {\n  border: 1px solid #38bdf8;\n  border-radius: 8px;\n}`,
    points: [
      'Элемент с атрибутом popover рендерится в верхнем слое браузера (#top-layer), поэтому ему никогда не мешают чужие z-index и overflow: hidden!',
      'Режим по умолчанию popover="auto" автоматически закрывает поповер при клике вне него (light dismiss) или нажатии Esc.',
      'Режим popover="manual" не закрывается при клике мимо и отлично подходит для тост-уведомлений.'
    ],
    tags: ['HTML', 'popover', 'popovertarget', 'поповер', 'выпадающее меню', 'тултип', 'top-layer'],
    when: 'Для выпадающих меню профиля, фильтров, подсказок и уведомлений без привлечения JS-библиотек.',
    alternatives: 'Если нужно заблокировать остальную страницу (модальный режим), используй <dialog> с showModal().',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Popover_API'
  },
  {
    lang: 'html',
    id: 'html-template-slot',
    title: 'HTML: инертные шаблоны <template> для динамического рендеринга',
    summary: 'Хранение HTML-заготовок в разметке страницы, которые не рендерятся и не грузят картинки до клонирования через JS.',
    code: `<template id="card-tpl">
  <article class="user-card">
    <h3 class="user-name"></h3>
    <p class="user-role"></p>
  </article>
</template>

<div id="list"></div>

<script>
  const tpl = document.getElementById('card-tpl');
  const clone = tpl.content.cloneNode(true);
  clone.querySelector('.user-name').textContent = 'Мария Иванова';
  clone.querySelector('.user-role').textContent = 'Frontend Lead';
  document.getElementById('list').appendChild(clone);
</script>`,
    example: `const fragment = template.content.cloneNode(true);`,
    points: [
      'Содержимое внутри <template> находится в DocumentFragment: браузер парсит его, но не выполняет скрипты и не скачивает изображения.',
      'Метод tpl.content.cloneNode(true) создаёт глубокую копию узлов, готовую к заполнению через textContent.',
      'Использование <template> защищает от XSS-уязвимостей, так как не требует склейки строк через innerHTML.'
    ],
    tags: ['HTML', 'template', 'cloneNode', 'шаблон', 'динамический', 'рендер', 'компонент'],
    when: 'При рендеринге списков карточек, комментариев и строк таблиц на чистом JavaScript.',
    alternatives: 'Создание десятков вложенных узлов через document.createElement() вручную делает код громоздким.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/template'
  },
  {
    lang: 'html',
    id: 'html-video-audio',
    title: 'HTML: мультимедиа <video>, <audio>, <source> и субтитры <track>',
    summary: 'Встраивание видео и аудиоплееров с несколькими кодеками, обложкой poster и автозапуском без звука.',
    code: `<video controls width="640" height="360" poster="/img/preview.jpg" preload="metadata" playsinline>
  <source src="/video/demo.webm" type="video/webm">
  <source src="/video/demo.mp4" type="video/mp4">
  <track kind="captions" src="/video/subs-ru.vtt" srclang="ru" label="Русские субтитры" default>
  Ваш браузер не поддерживает встроенное видео.
</video>`,
    example: `<video autoplay muted loop playsinline src="hero-bg.mp4"></video>`,
    points: [
      'Современные браузеры разрешают автозапуск (autoplay) ТОЛЬКО если у видео указан атрибут muted (без звука).',
      'На iPhone (iOS Safari) обязательно добавляй атрибут playsinline, иначе видео при старте принудительно раскроется на весь экран.',
      'preload="metadata" загружает только длительность и первый кадр, экономя мобильный трафик пользователя.'
    ],
    tags: ['HTML', 'video', 'audio', 'source', 'track', 'autoplay', 'playsinline', 'poster', 'видео', 'аудио'],
    when: 'Для фоновых видео на лендингах, обучающих роликов, подкастов и превью продуктов.',
    alternatives: 'Для больших стриминговых видео с адаптивным битрейтом (HLS) используй связку <video> + hls.js или YouTube/Kinescope.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/video'
  },
  {
    lang: 'html',
    id: 'html-iframe-sandbox',
    title: 'HTML: встраивание <iframe sandbox> и изоляция виджетов',
    summary: 'Безопасное встраивание внешних страниц, карт, видео и интерактивных песочниц с гранулярным контролем прав.',
    code: `<iframe
  src="https://example.com/widget"
  title="Интерактивная карта офиса"
  width="100%"
  height="400"
  loading="lazy"
  sandbox="allow-scripts allow-same-origin"
  referrerpolicy="no-referrer"
></iframe>`,
    example: `<iframe srcdoc="<h1>Привет из изолированного документа!</h1>"></iframe>`,
    points: [
      'Атрибут title у <iframe> обязателен для доступности, чтобы незрячие пользователи понимали, что находится внутри фрейма.',
      'Атрибут sandbox без значений включает максимальные ограничения (запрещены скрипты, формы, всплывающие окна). Права выдаются точечно: allow-scripts, allow-forms.',
      'loading="lazy" откладывает загрузку тяжелых сторонних фреймов (карт, видео), пока пользователь не доскроллит до них.'
    ],
    tags: ['HTML', 'iframe', 'sandbox', 'srcdoc', 'фрейм', 'встраивание', 'карта', 'безопасность'],
    when: 'При встраивании карт, виджетов оплаты, видеоплееров и превью кода.',
    alternatives: 'Внешние сайты с заголовком X-Frame-Options: DENY нельзя открыть в iframe — используй обычную ссылку target="_blank".',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/iframe'
  },
  {
    lang: 'html',
    id: 'html-data-attributes',
    title: 'HTML: пользовательские атрибуты data-* и глобальные атрибуты',
    summary: 'Хранение произвольных параметров прямо в HTML-элементах для удобной связи верстки с JavaScript и CSS.',
    code: `<button
  type="button"
  class="tab-btn"
  data-tab-target="pricing"
  data-plan-id="42"
  hidden
>
  Показать тариф
</button>

<script>
  const btn = document.querySelector('.tab-btn');
  console.log(btn.dataset.tabTarget); // "pricing"
  console.log(btn.dataset.planId);    // "42"
</script>`,
    example: `.badge::after {\n  content: attr(data-count);\n}`,
    points: [
      'Любой атрибут вида data-user-role автоматически превращается в camelCase-свойство element.dataset.userRole в JavaScript.',
      'В CSS к значению data-атрибута можно обратиться по селектору [data-state="active"] или вывести его текст через content: attr(data-label).',
      'Глобальные атрибуты hidden,inert, contenteditable="true" и spellcheck="false" работают на любых HTML-тегах.'
    ],
    tags: ['HTML', 'data', 'dataset', 'inert', 'hidden', 'contenteditable', 'атрибуты'],
    when: 'Для передачи ID сущностей, состояния компонентов (data-state="open"), тем оформления (data-theme="dark") и табов.',
    alternatives: 'Не придумывай нестандартные атрибуты без префикса data- — они не пройдут валидацию HTML5.',
    url: 'https://developer.mozilla.org/ru/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes'
  },
  {
    lang: 'html',
    id: 'html-aria-accessibility',
    title: 'HTML: доступность WAI-ARIA (aria-label, aria-expanded, aria-live)',
    summary: 'Атрибуты доступности для динамических интерфейсов, позволяющие управлять фокусом и озвучивать изменения на странице.',
    code: `<!-- Кнопка бургер-меню с состоянием открытия -->
<button
  type="button"
  aria-label="Главное меню"
  aria-expanded="false"
  aria-controls="nav-drawer"
>
  ☰
</button>

<!-- Живая область для озвучивания уведомлений и тостов -->
<div role="status" aria-live="polite" class="toast">
  Изменения успешно сохранены
</div>`,
    example: `<span aria-hidden="true">★</span> <!-- Декоративная иконка скрыта от скринридера -->`,
    points: [
      'Первое правило ARIA: не используй ARIA, если есть нативный HTML-тег (используй <button> вместо <div role="button">).',
      'aria-expanded="true/false" сообщает пользователю скринридера, раскрыто ли сейчас выпадающее меню или аккордеон.',
      'aria-live="polite" заставляет скринридер автоматически прочитать появившийся текст уведомления или ошибку формы.'
    ],
    tags: ['HTML', 'aria', 'accessibility', 'a11y', 'aria-label', 'aria-expanded', 'aria-live', 'aria-hidden', 'доступность'],
    when: 'На всех интерактивных компонентах: кнопках с иконками, модалках, табах, аккордеонах и тостах.',
    alternatives: 'Декоративные SVG и эмодзи прячь через aria-hidden="true", чтобы скринридер не читал лишний шум.',
    url: 'https://developer.mozilla.org/ru/docs/Web/Accessibility/ARIA'
  },
  {
    lang: 'html',
    id: 'html-resource-hints',
    title: 'HTML: ускорение загрузки (preconnect, preload, defer, async)',
    summary: 'Управление приоритетами загрузки скриптов, шрифтов и внешних доменов для максимального показателя Core Web Vitals.',
    code: `<head>
  <!-- Заранее устанавливаем DNS + TCP + TLS соединение с CDN шрифтов -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- Приоритетная подгрузка главного шрифта -->
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>

  <!-- Скрипт загружается фоном и выполняется после сборки DOM -->
  <script src="/app.js" defer></script>
</head>`,
    example: `<script type="module" src="/main.js"></script> <!-- Модули имеют defer по умолчанию -->`,
    points: [
      'Атрибут defer у <script> скачивает файл параллельно с парсингом HTML и запускает его строго по порядку после готовности DOM.',
      'Атрибут async запускает скрипт сразу после скачивания, прерывая парсинг — подходит только для независимых счетчиков аналитики.',
      'rel="preconnect" экономит 100–300 мс на установке соединения со сторонними API и CDN.'
    ],
    tags: ['HTML', 'defer', 'async', 'preload', 'preconnect', 'prefetch', 'производительность', 'скорость', 'script'],
    when: 'При подключении любых JS-скриптов, кастомных шрифтов и критических ресурсов в <head>.',
    alternatives: 'Никогда не ставь обычный <script src="..."> без defer в <head> — это заблокирует отрисовку всей страницы.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/rel/preload'
  },

  // ==========================================
  // CSS3: Блочная модель, Раскладка, Flexbox, Grid, Селекторы, Анимации, Эффекты
  // ==========================================
  {
    lang: 'css',
    id: 'css-box-model',
    title: 'CSS: блочная модель (box-sizing: border-box, width, padding, border)',
    summary: 'Фундаментальный принцип расчёта размеров элементов, при котором внутренние отступы и рамки входят в заданную ширину.',
    code: `*,
*::before,
*::after {
  box-sizing: border-box;
}

.card {
  width: 320px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 16px;
}`,
    example: `/* При border-box итоговая ширина .card останется ровно 320px, а не 362px */`,
    points: [
      'По умолчанию в CSS действует box-sizing: content-box, где padding и border прибавляются к width, ломая сетку.',
      'Глобальный сброс box-sizing: border-box делает вёрстку предсказуемой: width: 100% + padding: 20px никогда не вызовет горизонтальный скролл.',
      'Внешние отступы margin не входят в размер коробки и могут схлопываться по вертикали в обычном потоке.'
    ],
    tags: ['CSS', 'box-sizing', 'border-box', 'padding', 'margin', 'border', 'width', 'блочная модель'],
    when: 'Добавляй правило box-sizing: border-box в самом начале каждого CSS-файла проекта.',
    alternatives: 'content-box практически никогда не нужен в современной компонентной верстке.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing'
  },
  {
    lang: 'css',
    id: 'css-display-modes',
    title: 'CSS: режимы отображения display (block, inline, inline-block, flex, grid, contents)',
    summary: 'Управление тем, как элемент ведёт себя в потоке документа и как располагаются его дочерние элементы.',
    code: `.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
}

.wrapper-transparent {
  display: contents; /* Сам враппер исчезает из дерева раскладки, его дети становятся детьми родителя */
}`,
    example: `[hidden] {\n  display: none !important;\n}`,
    points: [
      'Строчные элементы (display: inline, например <span>, <a>) игнорируют width, height и вертикальные margin.',
      'inline-flex и inline-grid ведут себя снаружи как строчный элемент (подстраиваются под ширину контента), а внутри работают как полноценный флекс или грид.',
      'display: contents позволяет «растворить» техническую обёртку в DOM, чтобы её дочерние элементы напрямую участвовали в CSS Grid родителя.'
    ],
    tags: ['CSS', 'display', 'block', 'inline', 'inline-flex', 'contents', 'none', 'поток'],
    when: 'При создании кнопок с иконками (inline-flex), сеток (grid) и скрытии элементов (none).',
    alternatives: 'Если нужно скрыть элемент визуально, но оставить место под него, используй visibility: hidden или opacity: 0.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/display'
  },
  {
    lang: 'css',
    id: 'css-logical-properties',
    title: 'CSS: логические свойства (margin-inline, padding-block, inset)',
    summary: 'Современные сокращения для одновременного задания горизонтальных и вертикальных отступов и размеров.',
    code: `.container {
  max-inline-size: 1200px;
  margin-inline: auto;    /* Заменяет margin-left: auto; margin-right: auto */
  padding-inline: 24px;   /* Горизонтальные отступы слева и справа */
  padding-block: 48px;    /* Вертикальные отступы сверху и снизу */
}`,
    example: `.btn {\n  padding-block: 8px;\n  padding-inline: 16px;\n}`,
    points: [
      'Ось inline отвечает за направление текста (по горизонтали: лево + право), а ось block — за направление блоков (по вертикали: верх + низ).',
      'margin-inline: auto центрирует блок по горизонтали, не трогая его верхний и нижний отступы (в отличие от margin: 0 auto).',
      'Логические свойства автоматически адаптируют интерфейс для языков с письмом справа налево (RTL).'
    ],
    tags: ['CSS', 'margin-inline', 'padding-inline', 'padding-block', 'margin-block', 'inset-inline', 'центрирование'],
    when: 'Для центрирования контейнеров (margin-inline: auto) и задания симметричных отступов без дублирования значений.',
    alternatives: 'Классические padding: 10px 20px перезаписывают сразу все 4 стороны.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values'
  },
  {
    lang: 'css',
    id: 'css-flex-items',
    title: 'CSS: управление флекс-элементами (flex: 1, flex-grow, flex-shrink, flex-basis)',
    summary: 'Контроль того, как дочерние элементы внутри Flexbox растягиваются, сжимаются и делят свободное место.',
    code: `.layout {
  display: flex;
  gap: 16px;
}

.sidebar {
  flex: 0 0 260px; /* Не растягивать, не сжимать, фиксированная база 260px */
}

.content {
  flex: 1 1 0%;    /* Занять всё оставшееся свободное место */
  min-width: 0;    /* Важно: позволяет тексту и коду внутри сжиматься без переполнения! */
}`,
    example: `.card-footer {\n  margin-top: auto; /* Прижимает футер карточки к самому низу флекс-колонки */\n}`,
    points: [
      'Сокращение flex: 1 эквивалентно flex: 1 1 0% — элемент забирает свободное пространство пропорционально остальным.',
      'У флекс-элементов по умолчанию стоит min-width: auto, из-за чего длинный текст или <pre> внутри флекса может раздуть колонку. Добавление min-width: 0 решает эту проблему!',
      'margin-left: auto или margin-top: auto внутри флекс-контейнера работает как пружина, отталкивая элемент в самый край.'
    ],
    tags: ['CSS', 'flex-grow', 'flex-shrink', 'flex-basis', 'flex', 'min-width', 'align-self', 'order'],
    when: 'При верстке сайдбаров, карточек одинаковой высоты и шапок с прижатыми к краю кнопками.',
    alternatives: 'Для жёстких двумерных сеток, где важна одинаковая ширина колонок в разных строках, используй CSS Grid.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex'
  },
  {
    lang: 'css',
    id: 'css-grid-areas',
    title: 'CSS: именованные области сетки (grid-template-areas)',
    summary: 'Наглядное проектирование каркаса страницы в виде текстовой ASCII-карты прямо в CSS-коде.',
    code: `.app-shell {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 56px 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "sidebar footer";
  min-height: 100vh;
}

.app-header  { grid-area: header; }
.app-sidebar { grid-area: sidebar; }
.app-main    { grid-area: main; }
.app-footer  { grid-area: footer; }`,
    example: `@media (max-width: 768px) {\n  .app-shell {\n    grid-template-columns: 1fr;\n    grid-template-areas: "header" "main" "sidebar" "footer";\n  }\n}`,
    points: [
      'Каждая строка в кавычках внутри grid-template-areas представляет ряд сетки, а каждое слово — ячейку.',
      'Точка "." внутри строки обозначает пустую ячейку сетки.',
      'На мобильных экранах весь каркас страницы перестраивается простым переопределением grid-template-areas в @media без изменения HTML!'
    ],
    tags: ['CSS', 'grid-template-areas', 'grid-area', 'grid', 'каркас', 'шаблон', 'layout', 'сетка'],
    when: 'Для общих лейаутов приложения (шапка + сайдбар + контент + подвал) и сложных дашбордов.',
    alternatives: 'Для однотипных карточек в каталоге удобнее использовать repeat(auto-fill, minmax(260px, 1fr)).',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-areas'
  },
  {
    lang: 'css',
    id: 'css-subgrid',
    title: 'CSS: наследование сетки родителя (grid-template-rows: subgrid)',
    summary: 'Идеальное выравнивание заголовков, текста и кнопок внутри соседних карточек по единым горизонтальным линиям.',
    code: `.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.card {
  display: grid;
  grid-row: span 3;               /* Карточка занимает 3 дорожки родителя */
  grid-template-rows: subgrid;    /* Внутренние ряды синхронизируются с соседями! */
  gap: 12px;
}`,
    example: `/* Заголовки, описания и кнопки всех карточек в ряду встанут строго на одном уровне */`,
    points: [
      'Обычный CSS Grid выравнивает только внешние рамки карточек, но если в одной карточке заголовок в 3 строки, кнопка под ним съезжает.',
      'subgrid позволяет дочерним элементам карточки (заголовку, тексту, футеру) выстраиваться по общей сетке родителя.',
      'Поддерживается во всех современных браузерах (Chrome, Edge, Firefox, Safari).'
    ],
    tags: ['CSS', 'subgrid', 'grid', 'карточки', 'выравнивание', 'сетка', 'grid-row'],
    when: 'В витринах товаров, тарифных планах и списках статей, где карточки должны иметь идеально ровные внутренние блоки.',
    alternatives: 'Флекс-карточка с margin-top: auto выравнивает только нижнюю кнопку, но не середину карточки.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid'
  },
  {
    lang: 'css',
    id: 'css-positioning',
    title: 'CSS: позиционирование (relative, absolute, fixed, sticky и inset)',
    summary: 'Управление положением элементов вне стандартного потока: липкие шапки, бейджи, оверлеи и модальные окна.',
    code: `.card {
  position: relative; /* Точка отсчёта для абсолютных элементов внутри */
}

.card-badge {
  position: absolute;
  top: 12px;
  right: 12px;
}

.overlay {
  position: fixed;
  inset: 0; /* Заменяет top: 0; right: 0; bottom: 0; left: 0 */
  z-index: 100;
}`,
    example: `.sticky-header {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}`,
    points: [
      'position: absolute позиционируется относительно ближайшего предка с position, отличным от static (обычно родителю задают position: relative).',
      'position: sticky ведёт себя как обычный блок, пока при скролле не достигнет порога (например, top: 16px), после чего «прилипает».',
      'Важно: position: sticky перестаёт работать, если у любого из родителей задан overflow: hidden или overflow: auto!'
    ],
    tags: ['CSS', 'position', 'relative', 'absolute', 'fixed', 'sticky', 'inset', 'z-index', 'позиционирование'],
    when: 'Для липких шапок и оглавлений (sticky), бейджей и кнопок закрытия (absolute), полноэкранных подложек (fixed).',
    alternatives: 'Для наложения текста поверх картинки без absolute можно поместить оба элемента в одну ячейку CSS Grid (grid-area: 1 / 1).',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/position'
  },
  {
    lang: 'css',
    id: 'css-selectors-is-where-not',
    title: 'CSS: функциональные селекторы :is(), :where() и :not()',
    summary: 'Сокращение длинных цепочек селекторов, управление специфичностью и исключение элементов по условию.',
    code: `/* Группировка без дублирования префикса */
.article :is(h1, h2, h3) {
  line-height: 1.25;
  color: var(--text);
}

/* Нулевая специфичность — легко переопределить ниже */
:where(ul, ol) {
  margin: 0;
  padding-left: 20px;
}

/* Все кнопки, кроме заблокированных и активных */
.btn:not(:disabled, .active):hover {
  border-color: var(--accent);
}`,
    example: `.nav-item:not(:last-child) {\n  border-bottom: 1px solid var(--line);\n}`,
    points: [
      ':is() принимает список селекторов и берёт специфичность самого «тяжёлого» из них.',
      ':where() работает идентично :is(), но его специфичность ВСЕГДА равна нулю (0,0,0) — идеален для базовых CSS-сбросов и библиотек.',
      'Современный :not() поддерживает перечисление нескольких селекторов через запятую: :not(.primary, .danger).'
    ],
    tags: ['CSS', 'is', 'where', 'not', 'селекторы', 'специфичность', 'псевдоклассы'],
    when: 'При стилизации типографики внутри статей, написании UI-китов и исключении крайних элементов.',
    alternatives: 'Перечисление .article h1, .article h2, .article h3 вручную раздувает CSS-код.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/:is'
  },
  {
    lang: 'css',
    id: 'css-nth-child',
    title: 'CSS: структурные псевдоклассы :nth-child(), :first-child, :empty',
    summary: 'Выборка чётных/нечётных строк таблицы, каждого N-го элемента сетки и пустых контейнеров.',
    code: `/* Зебра для строк таблицы (каждая чётная строка) */
tbody tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.03);
}

/* Первые 3 элемента списка */
.top-list li:nth-child(-n + 3) {
  font-weight: 700;
}

/* Скрыть блок уведомлений, если внутри него нет элементов */
.alerts-container:empty {
  display: none;
}`,
    example: `li:nth-child(3n + 1) { /* 1-й, 4-й, 7-й... элемент */ }`,
    points: [
      'Формула An + B позволяет выбирать любые последовательности: odd (нечётные), even (чётные), 3n (каждый третий), n + 4 (все начиная с четвёртого).',
      'Современный синтаксис :nth-child(even of .visible) считает только элементы, подходящие под фильтр .visible!',
      ':empty срабатывает только если внутри тега нет вообще ничего (даже пробелов и переносов строк).'
    ],
    tags: ['CSS', 'nth-child', 'first-child', 'last-child', 'empty', 'even', 'odd', 'зебра', 'селекторы'],
    when: 'Для чередования фона строк таблиц, выделения топ-3 позиций и скрытия пустых оберток.',
    alternatives: 'Для отступов между элементами используй свойство gap во флексах и гридах вместо :not(:last-child).',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/:nth-child'
  },
  {
    lang: 'css',
    id: 'css-focus-visible',
    title: 'CSS: состояния интерактивности (:hover, :focus-visible, :focus-within)',
    summary: 'Доступная подсветка фокуса только при навигации с клавиатуры и реакция контейнера на фокус внутри него.',
    code: `/* Показываем чёткое кольцо фокуса только при нажатии Tab (но не при клике мышью) */
:focus-visible {
  outline: 2px solid #38bdf8;
  outline-offset: 2px;
}

/* Подсвечиваем всю рамку поиска, когда курсор стоит внутри <input> */
.search-box:focus-within {
  border-color: #38bdf8;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
}`,
    example: `@media (hover: hover) {\n  .card:hover { transform: translateY(-2px); }\n}`,
    points: [
      'Никогда не пиши outline: none без замены на :focus-visible — иначе пользователи с клавиатурой потеряют видимость курсора.',
      ':focus-visible умно отличает клик мышкой от навигации клавишей Tab.',
      ':focus-within срабатывает на родителе, когда любой дочерний input или button внутри него получил фокус.'
    ],
    tags: ['CSS', 'focus-visible', 'focus-within', 'hover', 'active', 'outline', 'фокус', 'доступность'],
    when: 'Для всех кнопок, ссылок, инпутов и составных полей поиска.',
    alternatives: 'Обычный :focus оставляет рамку даже после клика мышью по кнопке.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/:focus-visible'
  },
  {
    lang: 'css',
    id: 'css-pseudo-elements',
    title: 'CSS: псевдоэлементы ::before, ::after, ::placeholder, ::selection',
    summary: 'Декоративные элементы без лишней разметки, стилизация маркеров списков, плейсхолдеров и выделения текста.',
    code: `.external-link::after {
  content: " ↗";
  font-size: 0.85em;
  opacity: 0.7;
}

::selection {
  background: rgba(56, 189, 248, 0.25);
  color: #ffffff;
}

li::marker {
  color: #38bdf8;
}`,
    example: `.tooltip::before {\n  content: attr(data-tip);\n}`,
    points: [
      'Псевдоэлементы ::before и ::after не существуют без свойства content (даже для пустой фигуры обязательно пиши content: "").',
      '::marker позволяет напрямую задать цвет и шрифт буллитам <ul> и цифрам <ol> без сброса list-style.',
      '::backdrop стилизует затемнённый фон за открытым модальным окном <dialog> или поповером.'
    ],
    tags: ['CSS', 'before', 'after', 'placeholder', 'selection', 'marker', 'backdrop', 'псевдоэлементы'],
    when: 'Для декоративных стрелок, бейджей, оверлеев, буллитов списка и кастомного выделения текста.',
    alternatives: 'Не помещай в content важный смысловой текст — он не индексируется и не выделяется мышью.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-elements'
  },
  {
    lang: 'css',
    id: 'css-math-functions',
    title: 'CSS: математические функции calc(), min(), max() и clamp()',
    summary: 'Вычисление размеров из разных единиц измерения и гибкие ограничения ширины без медиазапросов.',
    code: `.container {
  /* Выбирает меньшее: либо 1200px, либо 100% экрана минус 32px по бокам */
  width: min(1200px, 100% - 32px);
  margin-inline: auto;
}

.main-panel {
  /* Высота экрана минус фиксированная шапка 56px */
  min-height: calc(100dvh - 56px);
}

.card-title {
  /* Плавно меняется от 18px до 28px в зависимости от ширины окна */
  font-size: clamp(1.125rem, 2vw + 0.5rem, 1.75rem);
}`,
    example: `padding: max(16px, 3vw); /* Минимум 16px, но на больших экранах 3vw */`,
    points: [
      'Внутри calc() вокруг знаков + и - ОБЯЗАТЕЛЬНО должны стоять пробелы: calc(100% - 24px).',
      'Запись width: min(1200px, 100% - 32px) заменяет собой сразу три свойства: width, max-width и боковые padding!',
      'Внутри min(), max() и clamp() можно писать математические выражения без обёртки в calc().'
    ],
    tags: ['CSS', 'calc', 'min', 'max', 'clamp', 'математика', 'вычисления', 'резиновая верстка'],
    when: 'Для адаптивных контейнеров, вычитания высоты шапки и плавной типографики.',
    alternatives: 'Ручное переключение размеров через 4–5 @media-брейкпоинтов даёт резкие скачки.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/calc'
  },
  {
    lang: 'css',
    id: 'css-viewport-units',
    title: 'CSS: современные единицы измерения (rem, em, dvh, svh, ch)',
    summary: 'Правильный выбор единиц для шрифтов, отступов, длины строки чтения и мобильных экранов с адресной строкой.',
    code: `.hero-fullscreen {
  min-height: 100dvh; /* Подстраивается под динамическую адресную строку мобильного браузера */
}

.article-body {
  font-size: 1rem;    /* 16px от корня html */
  max-width: 65ch;    /* Оптимальная длина строки ~65 символов для комфортного чтения */
}`,
    example: `:root { font-size: 16px; } /* 1rem = 16px, 1.5rem = 24px */`,
    points: [
      'rem зависит от размера шрифта корневого тега <html> и уважает настройки масштаба шрифта в браузере пользователя.',
      '100vh на мобильных телефонах часто обрезает нижнюю кнопку из-за плавающей адресной строки браузера. Используй 100dvh (dynamic viewport height) или 100svh!',
      'Единица ch равна ширине символа "0" текущего шрифта — идеальна для ограничения ширины текстовых абзацев (60ch–72ch).'
    ],
    tags: ['CSS', 'rem', 'em', 'vh', 'dvh', 'svh', 'vw', 'ch', 'единицы измерения', 'мобильная верстка'],
    when: 'Используй rem для шрифтов, px для тонких рамок, ch для ширины текста и dvh для полноэкранных секций.',
    alternatives: 'Жёсткие px на шрифтах мешают слабовидящим пользователям увеличить масштаб текста в настройках ОС.',
    url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units'
  },
  {
    lang: 'css',
    id: 'css-modern-colors',
    title: 'CSS: современные цвета (oklch, color-mix, light-dark, currentColor)',
    summary: 'Перцептивно равномерное цветовое пространство OKLCH и динамическое смешивание оттенков прямо в CSS.',
    code: `:root {
  color-scheme: light dark;
  --brand: oklch(72% 0.16 230);
  /* Автоматически меняет цвет в зависимости от светлой/тёмной темы */
  --surface: light-dark(#ffffff, #0e1320);
}

.badge-soft {
  /* Смешиваем акцентный цвет с прозрачностью без дублирования RGB-переменных */
  background: color-mix(in srgb, var(--brand) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--brand) 35%, transparent);
}`,
    example: `svg {\n  fill: currentColor; /* Иконка автоматически наследует цвет текста кнопки */\n}`,
    points: [
      'color-mix(in srgb, var(--accent) 20%, transparent) позволяет создавать полупрозрачные версии любой CSS-переменной на лету!',
      'OKLCH гарантирует одинаковую воспринимаемую глазом яркость при смене оттенка (Hue), в отличие от HSL.',
      'Ключевое слово currentColor передаёт текущий color текста в border, box-shadow или SVG-иконку.'
    ],
    tags: ['CSS', 'oklch', 'color-mix', 'light-dark', 'currentColor', 'hsl', 'rgb', 'цвет', 'палитра'],
    when: 'При построении дизайн-систем, тем оформления и полупрозрачных плашек/ховеров.',
    alternatives: 'Хранение отдельных переменных --accent-rgb: 56, 189, 248 для rgba() больше не требуется благодаря color-mix().',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix'
  },
  {
    lang: 'css',
    id: 'css-gradients',
    title: 'CSS: градиенты (linear-gradient, radial-gradient, conic-gradient)',
    summary: 'Плавные цветовые переходы, фоновые свечения, круговые диаграммы и градиентный текст.',
    code: `/* Линейный градиент под углом 135 градусов */
.hero-banner {
  background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%);
}

/* Мягкое радиальное свечение на фоне */
.glow-bg {
  background: radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.18), transparent 70%);
}

/* Градиентный текст */
.gradient-title {
  background: linear-gradient(90deg, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}`,
    example: `.pie-chart {\n  background: conic-gradient(#38bdf8 0% 65%, #1e293b 65% 100%);\n  border-radius: 50%;\n}`,
    points: [
      'Градиенты в CSS являются фоновыми изображениями, поэтому задаются через background или background-image, а не background-color.',
      'Для более сочных переходов без серой «грязи» посередине указывай интерполяцию: linear-gradient(in oklch 90deg, ...).',
      'conic-gradient позволяет сверстать круговую диаграмму или прогресс-кольцо на чистом CSS.'
    ],
    tags: ['CSS', 'linear-gradient', 'radial-gradient', 'conic-gradient', 'background-clip', 'градиент', 'свечение'],
    when: 'Для акцентных кнопок, фоновых подсветок, круговых графиков и заголовков.',
    alternatives: 'Не используй кричащие радужные градиенты на обычных карточках текста — это ухудшает читаемость.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/gradient'
  },
  {
    lang: 'css',
    id: 'css-shadows-glass',
    title: 'CSS: тени (box-shadow, filter: drop-shadow) и матовое стекло (backdrop-filter)',
    summary: 'Многослойные мягкие тени для глубины интерфейса, контурные тени для PNG/SVG и эффект размытия фона под панелью.',
    code: `/* Навигационная панель с эффектом матового стекла */
.glass-navbar {
  background: rgba(14, 19, 32, 0.78);
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Двухслойная реалистичная тень карточки */
.elevated-card {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.25),
    0 12px 28px -4px rgba(0, 0, 0, 0.45);
}`,
    example: `.transparent-icon {\n  filter: drop-shadow(0 4px 8px rgba(56, 189, 248, 0.4));\n}`,
    points: [
      'box-shadow отбрасывает тень от прямоугольной рамки блока, а filter: drop-shadow() повторяет точный контур прозрачной PNG-картинки или SVG-иконки!',
      'Для работы backdrop-filter: blur() собственный background элемента обязательно должен быть полупрозрачным (например, rgba с alpha < 0.85).',
      'Отрицательный четвёртый параметр (spread-radius, например -4px) у box-shadow делает тень аккуратной и собранной под элементом.'
    ],
    tags: ['CSS', 'box-shadow', 'drop-shadow', 'backdrop-filter', 'blur', 'glassmorphism', 'тень', 'размытие', 'стекло'],
    when: 'Для липких шапок, модальных окон, выпадающих меню и приподнятых карточек.',
    alternatives: 'В тёмной теме глубокие чёрные тени почти не видны — обязательно дополняй карточку тонкой светлой рамкой border: 1px solid rgba(255,255,255,0.08).',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/backdrop-filter'
  },
  {
    lang: 'css',
    id: 'css-transforms',
    title: 'CSS: 2D и 3D трансформации (translate, scale, rotate, perspective)',
    summary: 'Перемещение, масштабирование и вращение элементов на GPU без пересчёта геометрии соседних блоков.',
    code: `.card-interactive {
  transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1);
}

.card-interactive:hover {
  /* Независимые свойства трансформации в современном CSS */
  translate: 0 -4px;
  scale: 1.02;
}

.icon-spin {
  rotate: 45deg;
  transform-origin: center;
}`,
    example: `.centered-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  translate: -50% -50%;\n}`,
    points: [
      'В современном CSS свойства translate, rotate и scale можно писать отдельно друг от друга, не склеивая их в длинную строку transform!',
      'Трансформации выполняются видеокартой (GPU) на этапе композитинга и не толкают соседние элементы страницы (не вызывают reflow).',
      'Для 3D-эффектов наклона карточек задай родителю perspective: 900px, а элементу rotateX() / rotateY().'
    ],
    tags: ['CSS', 'transform', 'translate', 'scale', 'rotate', 'skew', 'perspective', 'трансформация', '3d'],
    when: 'Для микроанимаций при наведении, плавных выезжающих панелей (drawer) и поворота иконок.',
    alternatives: 'Никогда не анимируй смещение через top/left или margin — это вызывает лаги на слабых устройствах.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/transform'
  },
  {
    lang: 'css',
    id: 'css-transitions',
    title: 'CSS: плавные переходы (transition и кривые cubic-bezier)',
    summary: 'Анимация смены состояний (hover, focus, active) с контролем длительности, задержки и кривой ускорения.',
    code: `.btn {
  background: #121827;
  border-color: rgba(255, 255, 255, 0.1);
  /* Перечисляем только конкретные свойства, а не transition: all! */
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    transform 160ms cubic-bezier(0.22, 1, 0.36, 1);
}

.btn:hover {
  background: #161e31;
  border-color: #38bdf8;
  transform: translateY(-1px);
}`,
    example: `@media (prefers-reduced-motion: reduce) {\n  * { transition-duration: 0.01ms !important; }\n}`,
    points: [
      'Избегай антипаттерна transition: all 0.3s — браузер будет пытаться анимировать даже padding и width при ресайзе окна.',
      'Оптимальная длительность отклика для кнопок и ховеров в интерфейсе — от 120ms до 220ms.',
      'Кривая cubic-bezier(0.22, 1, 0.36, 1) (ease-out-quint) даёт мгновенный старт и мягкое торможение в конце.'
    ],
    tags: ['CSS', 'transition', 'cubic-bezier', 'ease', 'анимация', 'переход', 'hover'],
    when: 'Для всех интерактивных состояний кнопок, карточек, ссылок и переключателей.',
    alternatives: 'Для многошаговых и бесконечных анимаций (спиннеры, пульсация) используй @keyframes.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/transition'
  },
  {
    lang: 'css',
    id: 'css-keyframes-animation',
    title: 'CSS: покадровые анимации (@keyframes и animation)',
    summary: 'Создание сложных многошаговых, зацикленных и стартовых анимаций появления элементов.',
    code: `@keyframes pulse-ring {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  70% {
    transform: scale(1.15);
    opacity: 0;
  }
  100% {
    transform: scale(1.15);
    opacity: 0;
  }
}

.status-dot::after {
  animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}`,
    example: `.fade-in {\n  animation: slideUp 300ms ease-out forwards;\n}`,
    points: [
      'Ключевое слово forwards (animation-fill-mode: forwards) фиксирует элемент в финальном состоянии (100%) после окончания анимации.',
      'Для высокой кадровой частоты (60–120 FPS) анимируй внутри @keyframes только transform и opacity.',
      'Свойство animation-play-state: paused позволяет поставить анимацию на паузу при наведении курсора.'
    ],
    tags: ['CSS', 'keyframes', 'animation', 'infinite', 'forwards', 'анимация', 'пульсация', 'спиннер'],
    when: 'Для скелетонов загрузки, спиннеров, индикаторов статуса и анимации появления модальных окон.',
    alternatives: 'Для простых переходов из точки А в точку Б при наведении достаточно свойства transition.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/@keyframes'
  },
  {
    lang: 'css',
    id: 'css-typography-truncation',
    title: 'CSS: типографика, обрезка строк (line-clamp) и text-wrap: balance',
    summary: 'Красивая балансировка заголовков, обрезка длинного текста троеточием на 1 или несколько строк и табулярные цифры.',
    code: `/* Автоматический баланс длины строк в заголовках */
h1, h2, h3 {
  text-wrap: balance;
}

/* Обрезка описания карточки ровно на 3 строках с троеточием */
.card-excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Выравнивание ширины цифр в таймерах и таблицах цен */
.price-num {
  font-variant-numeric: tabular-nums;
}`,
    example: `.single-line-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}`,
    points: [
      'text-wrap: balance равномерно распределяет слова по строкам заголовка, избавляя от одинокого «висячего» слова на последней строке!',
      'Для обычных абзацев текста используй text-wrap: pretty.',
      'font-variant-numeric: tabular-nums делает все цифры одинаковой ширины, чтобы счётчики и колонки цен не дрожали при смене цифр.'
    ],
    tags: ['CSS', 'line-clamp', 'text-wrap', 'balance', 'ellipsis', 'tabular-nums', 'типографика', 'обрезка текста'],
    when: 'В карточках товаров и статей (line-clamp), заголовках секций (balance) и финансовых таблицах (tabular-nums).',
    alternatives: 'Обрезка текста по числу символов в JS работает хуже, так как не учитывает реальную ширину окна.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp'
  },
  {
    lang: 'css',
    id: 'css-aspect-ratio-object-fit',
    title: 'CSS: пропорции медиа (aspect-ratio и object-fit: cover)',
    summary: 'Железная фиксация соотношения сторон для карточек, видео и аватаров без искажения пропорций картинок.',
    code: `.video-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
}

.product-thumb {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;      /* Заполняет рамку без сплющивания, обрезая лишние края */
  object-position: center;
}`,
    example: `.avatar {\n  width: 48px;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 50%;\n}`,
    points: [
      'aspect-ratio: 16 / 9 автоматически вычисляет высоту блока от его текущей ширины — старый хак с padding-top: 56.25% больше не нужен!',
      'object-fit: cover работает для <img> и <video> точно так же, как background-size: cover для фонов.',
      'object-fit: contain вписывает картинку целиком внутри рамки (удобно для логотипов брендов и иконок).'
    ],
    tags: ['CSS', 'aspect-ratio', 'object-fit', 'cover', 'contain', 'пропорции', 'картинки', 'видео'],
    when: 'Для всех превью статей, фотографий товаров, аватаров пользователей и видеоплееров.',
    alternatives: 'Задание фиксированных width и height без object-fit: cover сплющит или растянет загруженное пользователем фото.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/aspect-ratio'
  },
  {
    lang: 'css',
    id: 'css-scroll-snap',
    title: 'CSS: плавная прокрутка, карусели (scroll-snap) и overscroll-behavior',
    summary: 'Нативные тач-карусели с магнитной фиксацией слайдов и отступы при прокрутке к якорям под фиксированной шапкой.',
    code: `html {
  scroll-behavior: smooth;
  scroll-padding-top: 72px; /* Чтобы фиксированная шапка не перекрывала заголовок при клике по якорю! */
}

.carousel {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
}

.slide {
  flex: 0 0 280px;
  scroll-snap-align: start;
}`,
    example: `.modal-body {\n  overscroll-behavior: contain; /* Скролл внутри модалки не прокручивает фон под ней */\n}`,
    points: [
      'scroll-padding-top на теге <html> решает вечную проблему, когда переход по якорю #section прячет заголовок под sticky-шапкой.',
      'scroll-snap-type: x mandatory создаёт отзывчивый горизонтальный слайдер с инерцией на телефонах без единой строчки JS.',
      'overscroll-behavior: contain запрещает прокрутку страницы на фоне, когда пользователь докрутил до конца меню или модального окна.'
    ],
    tags: ['CSS', 'scroll-snap', 'scroll-behavior', 'scroll-padding', 'overscroll-behavior', 'скролл', 'карусель', 'слайдер'],
    when: 'Для горизонтальных лент карточек, галерей, якорных меню и модальных окон со скроллом.',
    alternatives: 'Тяжёлые JS-слайдеры (Swiper) нужны только если требуется автопрокрутка или бесконечное кольцо.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/scroll-snap-type'
  },
  {
    lang: 'css',
    id: 'css-filters-clip-path',
    title: 'CSS: графические фильтры (filter) и фигурная обрезка (clip-path)',
    summary: 'Цветокоррекция изображений (ч/б, яркость, контраст, размытие) и вырезание многоугольных геометрических форм.',
    code: `/* Чёрно-белые логотипы партнёров, становящиеся цветными при наведении */
.partner-logo {
  filter: grayscale(100%) opacity(0.6);
  transition: filter 200ms ease;
}
.partner-logo:hover {
  filter: grayscale(0%) opacity(1);
}

/* Скошенный угол карточки или кнопки */
.angled-box {
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);
}`,
    example: `filter: brightness(1.1) contrast(1.05) saturate(1.2);`,
    points: [
      'В свойстве filter можно комбинировать через пробел: blur(), brightness(), contrast(), grayscale(), hue-rotate(), invert(), saturate(), sepia().',
      'clip-path обрезает элемент по кругу circle(), эллипсу ellipse(), прямоугольнику со скруглением inset() или произвольному многоугольнику polygon().',
      'Обрати внимание: обычный box-shadow на элементе с clip-path тоже обрежется. Чтобы тень шла по контуру фигуры, задай filter: drop-shadow() её родителю!'
    ],
    tags: ['CSS', 'filter', 'clip-path', 'grayscale', 'brightness', 'contrast', 'polygon', 'фильтр', 'маска'],
    when: 'Для эффектов наведения на изображения, затемнения фоновых фото и нестандартных геометрических блоков.',
    alternatives: 'Для сложных криволинейных масок со скруглёнными углами используй SVG <clipPath> или mask-image.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/filter'
  },
  {
    lang: 'css',
    id: 'css-nesting-layers',
    title: 'CSS: нативная вложенность (CSS Nesting) и каскадные слои (@layer)',
    summary: 'Вложенная запись селекторов прямо в браузере без препроцессоров Sass/Less и предсказуемый контроль приоритета слоёв.',
    code: `@layer reset, base, components, utilities;

@layer components {
  .card {
    padding: 16px;
    border: 1px solid var(--line);

    & .card-title {
      font-weight: 600;
    }

    &:hover {
      border-color: var(--accent);
    }

    @media (max-width: 640px) {
      padding: 12px;
    }
  }
}`,
    example: `/* Правило из @layer utilities всегда перебьёт @layer base независимо от специфичности селектора */`,
    points: [
      'Нативный CSS Nesting позволяет вкладывать дочерние селекторы, псевдоклассы (&:hover) и даже @media-запросы прямо внутрь селектора компонента!',
      'Директива @layer задаёт жёсткий порядок приоритета слоёв: стили из последнего объявленного слоя всегда побеждают предыдущие.',
      'Это навсегда избавляет от войн специфичности и необходимости писать !important при переопределении сторонних стилей.'
    ],
    tags: ['CSS', 'nesting', 'layer', 'каскад', 'вложенность', 'архитектура', 'специфичность'],
    when: 'При организации модульных стилей компонентов и построении архитектуры CSS без сборщиков.',
    alternatives: 'Не делай вложенность глубже 3 уровней, чтобы селекторы оставались читаемыми и быстрыми.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting'
  },
  {
    lang: 'css',
    id: 'css-form-styling-accent',
    title: 'CSS: стилизация форм (accent-color, appearance, resize)',
    summary: 'Быстрая перекраска чекбоксов, радиокнопок и ползунков в фирменный цвет сайта одной строчкой кода.',
    code: `:root {
  accent-color: #38bdf8; /* Перекрашивает все checkbox, radio, range и progress! */
}

textarea {
  resize: vertical;      /* Разрешаем тянуть поле только вверх-вниз, чтобы не сломать ширину колонки */
  min-height: 96px;
}

input::placeholder {
  color: #64748b;
  opacity: 1;
}`,
    example: `.custom-checkbox {\n  appearance: none; /* Полный сброс системного вида для отрисовки с нуля */\n}`,
    points: [
      'accent-color мгновенно стилизует нативные элементы форм под бренд, автоматически выбирая контрастный цвет галочки внутри чекбокса.',
      'У <textarea> по умолчанию включён resize: both, из-за чего пользователь может растянуть поле вбок и сломать верстку — всегда ставь resize: vertical.',
      'Если нужен полностью кастомный дизайн чекбокса или свитча (toggle), используй appearance: none и псевдоэлемент ::before.'
    ],
    tags: ['CSS', 'accent-color', 'appearance', 'resize', 'placeholder', 'чекбокс', 'формы', 'ползунок'],
    when: 'В базовых стилях любого проекта для аккуратного вида форм.',
    alternatives: 'Скрытие чекбокса через display: none ломает навигацию с клавиатуры (используй appearance: none).',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color'
  }
];
