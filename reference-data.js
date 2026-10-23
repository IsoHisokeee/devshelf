window.DEVSHELF_REFERENCE_TOPICS = [
  {
    "lang": "html",
    "id": "html-document",
    "title": "HTML: структура документа",
    "summary": "Каркас HTML-файла: тип документа, корневой элемент, заголовок и содержимое.",
    "code": "<!doctype html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Моя страница</title>\n</head>\n<body>\n  <h1>Привет!</h1>\n</body>\n</html>",
    "example": "<main>\n  <h1>План на сегодня</h1>\n  <p>Изучить структуру HTML.</p>\n</main>",
    "points": [
      "<!doctype html> включает современный режим отображения.",
      "<html lang> задаёт язык содержимого страницы.",
      "<head> хранит метаданные, а <body> — видимое содержимое."
    ],
    "tags": [
      "HTML",
      "doctype",
      "html",
      "head",
      "body",
      "структура"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML",
    "search": true,
    "when": "Начинай с этой структуры любой новой HTML-страницы: браузеру нужны объявление типа документа, язык страницы и разделы head/body.",
    "alternatives": "Для встраиваемых фрагментов документа полный каркас не нужен; для шаблонов сайта общий каркас обычно выносят в layout.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-metadata",
    "title": "HTML: метаданные страницы",
    "summary": "Настрой кодировку, заголовок вкладки, описание и адаптивность.",
    "code": "<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"Короткое описание страницы\">\n  <title>Название страницы</title>\n</head>",
    "example": "<meta name=\"theme-color\" content=\"#10151f\">",
    "points": [
      "Кодировку UTF-8 указывай в начале head.",
      "title отображается в заголовке вкладки и результатах поиска.",
      "description — краткое описание страницы; оно не заменяет видимый контент."
    ],
    "tags": [
      "HTML",
      "meta",
      "title",
      "description",
      "viewport",
      "метаданные"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/meta",
    "search": true,
    "when": "Добавляй эти данные при настройке новой страницы, особенно кодировку и viewport; title и description подбирай под конкретное содержимое.",
    "alternatives": "Для иконки и подключения стилей служат link и отдельные файлы; видимое название страницы задаётся заголовком в body.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-semantic",
    "title": "HTML: семантические области",
    "summary": "Используй теги, которые описывают назначение частей страницы.",
    "code": "<header>Шапка сайта</header>\n<nav aria-label=\"Основная навигация\">...</nav>\n<main>\n  <article>\n    <h1>Заголовок статьи</h1>\n    <section><h2>Раздел</h2></section>\n  </article>\n</main>\n<footer>Подвал</footer>",
    "example": "<main>\n  <h1>Каталог книг</h1>\n  <section aria-labelledby=\"popular\">\n    <h2 id=\"popular\">Популярное</h2>\n  </section>\n</main>",
    "points": [
      "header и footer могут относиться ко всей странице или отдельной статье.",
      "На странице обычно один основной main.",
      "section группирует тему, article — самостоятельный материал; nav — важные навигационные ссылки."
    ],
    "tags": [
      "HTML",
      "header",
      "nav",
      "main",
      "article",
      "section",
      "footer",
      "семантика",
      "структура"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Learn_web_development/Core/Structuring_content",
    "search": true,
    "when": "Выбирай смысловые области, когда делишь страницу на шапку, навигацию, основное содержимое и независимые материалы.",
    "alternatives": "Если подходящего смыслового элемента нет, используй div; для небольшой фразы без собственного блока — span.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-text",
    "title": "HTML: текст и заголовки",
    "summary": "Размечай абзацы, цитаты, выделения и иерархию заголовков.",
    "code": "<h1>Тема страницы</h1>\n<h2>Раздел</h2>\n<p>Обычный абзац с <strong>важной</strong> частью.</p>\n<blockquote>\n  <p>Цитата из отдельного источника.</p>\n</blockquote>",
    "example": "<p>Название книги: <cite>Мастер и Маргарита</cite>.</p>\n<p>Формула: H<sub>2</sub>O; степень: x<sup>2</sup>.</p>",
    "points": [
      "Уровень заголовка выбирай по структуре, а не по размеру.",
      "strong сообщает о важности, em — об ударении; оформление задаёт CSS.",
      "Для цитаты используй blockquote, для короткой цитаты — q."
    ],
    "tags": [
      "HTML",
      "h1",
      "h2",
      "p",
      "strong",
      "em",
      "blockquote",
      "текст",
      "заголовки"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs",
    "search": true,
    "when": "Используй текстовые элементы по смыслу документа: заголовки строят иерархию, а не только визуальный размер.",
    "alternatives": "Стили заголовков и выделений задавай CSS; для текста без смыслового акцента оставляй обычный p.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-links",
    "title": "HTML: ссылки и адреса",
    "summary": "Создавай переходы на страницы, файлы, разделы, email и телефон.",
    "code": "<a href=\"/about.html\">О нас</a>\n<a href=\"#contacts\">Контакты</a>\n<a href=\"mailto:hello@example.com\">Написать</a>",
    "example": "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">\n  Открыть сайт в новой вкладке\n</a>",
    "points": [
      "href содержит адрес назначения.",
      "Для открытия новой вкладки добавляй rel=\"noopener noreferrer\".",
      "Текст ссылки должен объяснять, куда она ведёт; для действия используй button."
    ],
    "tags": [
      "HTML",
      "a",
      "href",
      "ссылка",
      "ссылки",
      "target",
      "rel"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/a",
    "search": true,
    "when": "Создавай ссылку, когда действие должно привести на другой адрес, файл или раздел страницы.",
    "alternatives": "Для действия на текущей странице используй button; для перехода между разделами — ссылку с href.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-images",
    "title": "HTML: изображения",
    "summary": "Добавляй изображения с альтернативным текстом и размерами.",
    "code": "<img src=\"photo.jpg\" alt=\"Кот спит на подоконнике\"\n     width=\"640\" height=\"480\">",
    "example": "<figure>\n  <img src=\"chart.png\" alt=\"Продажи росли с января по март\">\n  <figcaption>Продажи за первый квартал</figcaption>\n</figure>",
    "points": [
      "alt описывает смысл изображения; декоративному изображению подходит пустой alt=\"\".",
      "Указывай width и height, чтобы зарезервировать место до загрузки.",
      "Для подписи используй figure и figcaption."
    ],
    "tags": [
      "HTML",
      "img",
      "alt",
      "figure",
      "figcaption",
      "изображение",
      "картинки"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/img",
    "search": true,
    "when": "Добавляй img для содержательных изображений и указывай текстовую замену; размеры полезны для стабильной раскладки.",
    "alternatives": "Для декоративной графики используй пустой alt; если изображение нужно строить стилями как фон, подходит CSS background-image.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-lists",
    "title": "HTML: списки",
    "summary": "Выбирай маркированный, нумерованный или список терминов.",
    "code": "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n<ol>\n  <li>Открой редактор</li>\n  <li>Сохрани файл</li>\n</ol>",
    "example": "<dl>\n  <dt>DOM</dt>\n  <dd>Объектная модель документа.</dd>\n</dl>",
    "points": [
      "ul — порядок пунктов не важен; ol — последовательность имеет значение.",
      "Каждый пункт списка помещай в li.",
      "dl, dt и dd подходят для терминов и описаний."
    ],
    "tags": [
      "HTML",
      "ul",
      "ol",
      "li",
      "dl",
      "список",
      "списки"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Learn_web_development/Core/Structuring_content/Lists",
    "search": true,
    "when": "Группируй связанные пункты списком; выбирай нумерацию, только если порядок важен.",
    "alternatives": "Для набора полей-значений используй dl; для табличных отношений строк и столбцов — table.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-tables",
    "title": "HTML: таблицы данных",
    "summary": "Представляй табличные данные с заголовками столбцов и строк.",
    "code": "<table>\n  <caption>Расписание</caption>\n  <thead><tr><th scope=\"col\">День</th><th scope=\"col\">Тема</th></tr></thead>\n  <tbody><tr><th scope=\"row\">Пн</th><td>HTML</td></tr></tbody>\n</table>",
    "example": "<td colspan=\"2\">Объединённые столбцы</td>",
    "points": [
      "Таблица подходит для отношений строк и столбцов, не для общей раскладки страницы.",
      "caption задаёт название таблицы.",
      "Связывай th с данными через scope; большие таблицы дели на thead и tbody."
    ],
    "tags": [
      "HTML",
      "table",
      "tr",
      "td",
      "th",
      "caption",
      "таблица"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/table",
    "search": true,
    "when": "Используй таблицу для данных, где важно сопоставление строк и столбцов, и связывай заголовки с ячейками.",
    "alternatives": "Для визуальной раскладки применяй CSS Grid/Flexbox; последовательность простых пунктов лучше представить списком.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-forms",
    "title": "HTML: формы и отправка",
    "summary": "Собирай данные через form, label, input и кнопку отправки.",
    "code": "<form action=\"/search\" method=\"get\">\n  <label for=\"query\">Поиск</label>\n  <input id=\"query\" name=\"q\" type=\"search\" required>\n  <button type=\"submit\">Найти</button>\n</form>",
    "example": "<label for=\"email\">Почта</label>\n<input id=\"email\" name=\"email\" type=\"email\" autocomplete=\"email\">",
    "points": [
      "label связывай с полем через for и id.",
      "name — ключ, под которым значение попадёт в отправляемые данные.",
      "Браузерная валидация помогает пользователю, но сервер всё равно проверяет данные."
    ],
    "tags": [
      "HTML",
      "form",
      "label",
      "input",
      "submit",
      "форма",
      "формы"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Learn_web_development/Extensions/Forms",
    "search": true,
    "when": "Форма нужна, когда пользователь отправляет данные на сервер или обрабатывает их единым действием.",
    "alternatives": "Для фильтрации без отправки используй JavaScript; подписи label и серверная проверка нужны в любом случае.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-input-types",
    "title": "HTML: типы полей ввода",
    "summary": "Подбирай input type под ожидаемые данные.",
    "code": "<input type=\"text\" name=\"name\">\n<input type=\"email\" name=\"email\">\n<input type=\"number\" name=\"age\" min=\"0\">\n<input type=\"date\" name=\"date\">\n<input type=\"checkbox\" name=\"agree\" required>",
    "example": "<fieldset>\n  <legend>Способ связи</legend>\n  <label><input type=\"radio\" name=\"contact\" value=\"email\"> Почта</label>\n  <label><input type=\"radio\" name=\"contact\" value=\"phone\"> Телефон</label>\n</fieldset>",
    "points": [
      "Тип поля включает подходящую клавиатуру и базовую проверку.",
      "Для группы radio у всех вариантов одно имя name.",
      "Используй required, min, max и pattern как подсказки; перепроверяй на сервере."
    ],
    "tags": [
      "HTML",
      "input",
      "email",
      "number",
      "date",
      "checkbox",
      "radio",
      "поле ввода"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/input",
    "search": true,
    "when": "Подбирай type по виду значения, чтобы браузер помогал с вводом и мобильной клавиатурой.",
    "alternatives": "Если готового типа нет, используй text с подходящими атрибутами; не заменяй нативное поле самодельным без необходимости.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-buttons",
    "title": "HTML: кнопки и действия",
    "summary": "Различай отправку формы и обычное действие на странице.",
    "code": "<button type=\"button\">Открыть меню</button>\n<button type=\"submit\">Отправить форму</button>",
    "example": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"details\">\n  Показать подробности\n</button>",
    "points": [
      "Внутри формы button по умолчанию может отправлять форму — задавай type явно.",
      "type=submit отправляет форму, type=reset сбрасывает значения.",
      "Имя кнопки должно описывать действие; для иконки добавляй доступное название."
    ],
    "tags": [
      "HTML",
      "button",
      "submit",
      "reset",
      "кнопка",
      "кнопки"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/button",
    "search": true,
    "when": "Кнопка подходит для действия на текущей странице и отправки формы; задавай type явно.",
    "alternatives": "Для навигации используй a с href; для отправки данных — submit-кнопку внутри form.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-audio-video",
    "title": "HTML: аудио и видео",
    "summary": "Встраивай медиа с запасными форматами и доступными элементами управления.",
    "code": "<video controls width=\"640\" poster=\"cover.jpg\">\n  <source src=\"movie.webm\" type=\"video/webm\">\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  <track src=\"captions.vtt\" kind=\"captions\" srclang=\"ru\" label=\"Русские субтитры\">\n</video>",
    "example": "<audio controls>\n  <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n  Ваш браузер не поддерживает аудио.\n</audio>",
    "points": [
      "controls показывает встроенные кнопки управления.",
      "source позволяет предложить несколько форматов.",
      "Для речи добавляй субтитры или текстовую расшифровку."
    ],
    "tags": [
      "HTML",
      "video",
      "audio",
      "source",
      "track",
      "медиа",
      "видео",
      "аудио"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/video",
    "search": true,
    "when": "Используй audio/video, когда нужно встроенное воспроизведение и пользовательский контроль.",
    "alternatives": "Для фоновой декоративной анимации чаще подходит CSS; если медиа не должно запускаться без согласия, не включай autoplay.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-details",
    "title": "HTML: раскрывающийся блок",
    "summary": "Создавай нативный блок, который посетитель может раскрыть.",
    "code": "<details>\n  <summary>Как изменить пароль?</summary>\n  <p>Открой настройки профиля и выбери новый пароль.</p>\n</details>",
    "example": "<details open>\n  <summary>Открытый по умолчанию раздел</summary>\n  <p>Атрибут open показывает содержимое сразу.</p>\n</details>",
    "points": [
      "summary должен быть первым дочерним элементом details.",
      "Атрибут open управляет начальным состоянием.",
      "Для сложной логики используй кнопку и состояние в JavaScript."
    ],
    "tags": [
      "HTML",
      "details",
      "summary",
      "аккордеон",
      "раскрывающийся блок"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/details",
    "search": true,
    "when": "Применяй details/summary для короткого раскрываемого пояснения без сложного сценария.",
    "alternatives": "Для постоянно видимого текста оставь обычный раздел; для сложных вкладок или управляемого диалога понадобится JavaScript.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-data-attributes",
    "title": "HTML: data-* атрибуты",
    "summary": "Передавай пользовательские данные элементам для JavaScript.",
    "code": "<button data-product-id=\"42\">В корзину</button>",
    "example": "const button = document.querySelector('button');\nconsole.log(button.dataset.productId);",
    "points": [
      "Имена data-* доступны через элемент.dataset.",
      "В JavaScript camelCase соответствует имени после data-.",
      "Не храни в data-* секреты и не подставляй непроверенные значения в HTML."
    ],
    "tags": [
      "HTML",
      "data",
      "dataset",
      "атрибуты",
      "JavaScript"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/data-*",
    "search": true,
    "when": "Храни в data-* небольшие несекретные значения, нужные обработчику конкретного элемента.",
    "alternatives": "Для состояния интерфейса, которое часто меняется, используй состояние приложения; для передачи данных на сервер — name в форме.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-accessibility",
    "title": "HTML: доступность интерфейса",
    "summary": "Строй разметку так, чтобы сайтом можно было пользоваться с клавиатуры и скринридером.",
    "code": "<label for=\"city\">Город</label>\n<select id=\"city\" name=\"city\">\n  <option value=\"msk\">Москва</option>\n</select>\n<button type=\"button\" aria-label=\"Закрыть\">×</button>",
    "example": "<main>\n  <h1>Настройки</h1>\n  <a href=\"#content\">Перейти к содержимому</a>\n</main>",
    "points": [
      "Используй семантические элементы и правильный порядок заголовков.",
      "Каждому полю ввода нужна подпись.",
      "Не передавай значение только цветом; сохраняй видимый фокус клавиатуры."
    ],
    "tags": [
      "HTML",
      "доступность",
      "aria",
      "скринридер",
      "клавиатура",
      "a11y"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Learn_web_development/Core/Accessibility",
    "search": true,
    "when": "Проверяй доступность при создании каждого интерфейса: семантика, клавиатура, подписи и видимый фокус нужны всем посетителям.",
    "alternatives": "Сначала выбирай нативный HTML; ARIA добавляй, когда семантика HTML не выражает нужное состояние.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-scripts",
    "title": "HTML: подключение JavaScript",
    "summary": "Подключай внешний скрипт так, чтобы разметка не блокировала загрузку страницы.",
    "code": "<script src=\"app.js\" defer></script>",
    "example": "<script type=\"module\" src=\"src/main.js\"></script>",
    "points": [
      "defer запускает обычный скрипт после разбора HTML и сохраняет порядок.",
      "Модули используют import и export и работают в строгом режиме.",
      "Не вставляй исполняемые данные пользователя в содержимое script."
    ],
    "tags": [
      "HTML",
      "script",
      "defer",
      "module",
      "подключить JavaScript"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/script",
    "search": true,
    "when": "Подключай внешний скрипт с defer для обычного сценария или type=module для модулей с import/export.",
    "alternatives": "Для небольшого разового действия допустим inline-скрипт, но отдельный файл проще сопровождать и кешировать.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-selectors",
    "title": "CSS: селекторы",
    "summary": "Выбирай элементы по тегу, классу, атрибуту и состоянию.",
    "code": "p { line-height: 1.6; }\n.card { padding: 1rem; }\n#main { max-width: 70rem; }\ninput[type=\"email\"] { border-color: teal; }\na:hover { text-decoration: underline; }",
    "example": ".card > h2 { margin-top: 0; }\nnav a[aria-current=\"page\"] { color: limegreen; }",
    "points": [
      "Класс подходит для повторного применения; ID должен быть уникальным.",
      "Комбинаторы связывают элементы по структуре.",
      "Псевдоклассы описывают состояние, например :hover, :focus-visible и :checked."
    ],
    "tags": [
      "CSS",
      "селектор",
      "класс",
      "id",
      "псевдокласс",
      "атрибут"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/Selectors",
    "search": true,
    "when": "Используй селекторы, чтобы применить оформление к нужной группе элементов; начинай с простых классов.",
    "alternatives": "Для состояния бери псевдокласс, для части элемента — псевдоэлемент; избегай длинных цепочек селекторов.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-cascade",
    "title": "CSS: каскад и специфичность",
    "summary": "Понимай, почему одно правило переопределяет другое.",
    "code": ".card { color: #243044; }\narticle.card { color: #152030; }\n#featured { color: #102010; }",
    "example": "/* Позднее правило той же специфичности победит раннее. */\n.button { color: white; }\n.button { color: navy; }",
    "points": [
      "Учитывай происхождение, важность, специфичность и порядок правил.",
      "ID обычно специфичнее класса, класс — селектора тега.",
      "Не злоупотребляй !important: он затрудняет дальнейшие изменения."
    ],
    "tags": [
      "CSS",
      "cascade",
      "каскад",
      "специфичность",
      "important",
      "наследование"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/Cascade",
    "search": true,
    "when": "Разбирай каскад, когда правило не применяется или неожиданно переопределено; проверяй происхождение, специфичность и порядок.",
    "alternatives": "Вместо повышения специфичности часто лучше сузить область стилей или исправить порядок правил; !important оставляй для обоснованных исключений.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-box-model",
    "title": "CSS: блочная модель",
    "summary": "Рассчитывай размеры через содержимое, внутренний отступ, рамку и внешний отступ.",
    "code": ".card {\n  width: 320px;\n  padding: 20px;\n  border: 1px solid #ccd;\n  margin: 16px;\n  box-sizing: border-box;\n}",
    "example": "*, *::before, *::after { box-sizing: border-box; }",
    "points": [
      "При content-box padding и border добавляются поверх width.",
      "border-box включает padding и border в заданную ширину.",
      "margin — внешнее расстояние; padding — внутреннее."
    ],
    "tags": [
      "CSS",
      "box model",
      "width",
      "height",
      "padding",
      "margin",
      "border",
      "блочная модель"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_box_model",
    "search": true,
    "when": "Учитывай модель блока при настройке размеров, отступов и границ компонентов.",
    "alternatives": "Для равномерного внутреннего отступа используй padding, для расстояния между соседями — gap или margin.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-units",
    "title": "CSS: единицы измерения",
    "summary": "Сочетай относительные и абсолютные единицы по задаче.",
    "code": ":root { font-size: 16px; }\nh1 { font-size: 2rem; }\n.card { width: min(100%, 60rem); padding: 1.25em; }\n.hero { min-height: 70vh; }",
    "example": "img { width: 100%; max-width: 40rem; height: auto; }",
    "points": [
      "px удобны для тонких границ и точных деталей.",
      "rem считается от корневого размера шрифта; em — от размера текущего контекста.",
      "%, vw, vh и современные динамические единицы помогают строить адаптивные размеры."
    ],
    "tags": [
      "CSS",
      "px",
      "rem",
      "em",
      "vw",
      "vh",
      "единицы"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Values_and_Units",
    "search": true,
    "when": "Подбирай единицы по смыслу: rem для масштаба относительно корня, %, fr и гибкие единицы для адаптивной раскладки.",
    "alternatives": "Фиксированные px подходят для тонких границ и точных деталей; для текста и размеров интерфейса обычно гибче относительные единицы.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-colors",
    "title": "CSS: цвет и прозрачность",
    "summary": "Задавай цвета в HEX, RGB, HSL и через системные переменные.",
    "code": ":root {\n  --accent: hsl(100 78% 70%);\n  --text: #e9eef7;\n}\n.button { color: rgb(12 18 28); background: var(--accent); }",
    "example": ".overlay { background: rgb(0 0 0 / 55%); }",
    "points": [
      "HEX подходит для компактных фиксированных значений.",
      "HSL удобно менять по тону, насыщенности и светлоте.",
      "Проверяй контраст текста и фона; прозрачность влияет на итоговый цвет."
    ],
    "tags": [
      "CSS",
      "color",
      "цвет",
      "hex",
      "rgb",
      "hsl",
      "opacity"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/color_value",
    "search": true,
    "when": "Задавай цвет текста, фона и границ так, чтобы сохранялся достаточный контраст.",
    "alternatives": "Для единых тем используй CSS-переменные; прозрачность элемента целиком регулируй opacity только если нужно сделать прозрачными и потомков.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-typography",
    "title": "CSS: текст и шрифты",
    "summary": "Настраивай семейство шрифта, размер, ширину строки и межстрочное расстояние.",
    "code": "body {\n  font-family: system-ui, sans-serif;\n  font-size: 1rem;\n  line-height: 1.6;\n}\nh1 { font-weight: 800; letter-spacing: -0.03em; }",
    "example": "p { max-width: 68ch; }",
    "points": [
      "Указывай резервные семейства после основного шрифта.",
      "ch помогает ограничить удобную ширину текстовой строки.",
      "Не отключай масштабирование и не делай основной текст слишком мелким."
    ],
    "tags": [
      "CSS",
      "font-family",
      "font-size",
      "line-height",
      "шрифт",
      "типографика"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/font",
    "search": true,
    "when": "Настраивай типографику после базовой структуры: размер, высота строки, длина строки и переносы влияют на читаемость.",
    "alternatives": "Для выравнивания и интервалов используй свойства текста; не вставляй пробелы и переносы вручную ради визуального эффекта.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-display",
    "title": "CSS: display и поток",
    "summary": "Определи, участвует ли элемент в блочном, строчном или гибком потоке.",
    "code": ".hidden { display: none; }\n.inline { display: inline; }\n.row { display: flex; }\n.grid { display: grid; }",
    "example": ".badge { display: inline-flex; align-items: center; gap: .4rem; }",
    "points": [
      "block занимает доступную ширину строки и начинается с новой строки.",
      "inline остаётся в текстовом потоке; размеры ведут себя иначе.",
      "none убирает элемент из раскладки; visibility:hidden сохраняет место."
    ],
    "tags": [
      "CSS",
      "display",
      "block",
      "inline",
      "none",
      "поток"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/display",
    "search": true,
    "when": "Выбирай display по роли элемента в раскладке: поток, гибкий ряд, сетка или скрытие.",
    "alternatives": "Для двухмерной раскладки предпочитай grid, для одного направления — flex; visibility:hidden сохраняет занимаемое место.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-flexbox",
    "title": "CSS: Flexbox",
    "summary": "Распределяй элементы вдоль одной основной оси.",
    "code": ".toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}",
    "example": ".actions { display: flex; gap: .75rem; }",
    "points": [
      "flex-direction меняет направление основной оси.",
      "justify-content распределяет элементы вдоль основной оси.",
      "align-items выравнивает по поперечной оси; gap задаёт промежуток."
    ],
    "tags": [
      "CSS",
      "flex",
      "flexbox",
      "justify-content",
      "align-items",
      "gap",
      "раскладка"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_flexible_box_layout",
    "search": true,
    "when": "Применяй Flexbox для расположения элементов в одном основном направлении и распределения свободного места.",
    "alternatives": "Для строк и колонок с явными треками удобнее Grid; для обычного потока достаточно block и margin.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-grid",
    "title": "CSS: CSS Grid",
    "summary": "Строй двухмерные сетки строк и колонок.",
    "code": ".cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n  gap: 1rem;\n}",
    "example": ".layout { display: grid; grid-template-columns: 16rem 1fr; }",
    "points": [
      "Grid удобен, когда нужно управлять одновременно строками и столбцами.",
      "minmax задаёт диапазон размера дорожки.",
      "auto-fit и auto-fill помогают строить адаптивные колонки."
    ],
    "tags": [
      "CSS",
      "grid",
      "grid-template-columns",
      "minmax",
      "сетка"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout",
    "search": true,
    "when": "Используй Grid для двумерных макетов с колонками и строками, карточных сеток и областей страницы.",
    "alternatives": "Для простого ряда или вертикального стека проще Flexbox; если элементы текут в обычном тексте — не задавай сетку.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-position",
    "title": "CSS: position и слои",
    "summary": "Управляй размещением элемента относительно потока и якоря.",
    "code": ".container { position: relative; }\n.badge {\n  position: absolute;\n  inset-block-start: .5rem;\n  inset-inline-end: .5rem;\n}\n.sticky { position: sticky; top: 0; }",
    "example": "dialog[open] { position: fixed; inset: 0; margin: auto; }",
    "points": [
      "static — обычное положение; relative сохраняет место и создаёт якорь.",
      "absolute позиционируется относительно ближайшего позиционированного предка.",
      "fixed закрепляется относительно окна; sticky прилипает в пределах своего контейнера."
    ],
    "tags": [
      "CSS",
      "position",
      "absolute",
      "relative",
      "fixed",
      "sticky",
      "z-index"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/position",
    "search": true,
    "when": "Используй position для локального смещения, закрепления панели или размещения элемента поверх контейнера.",
    "alternatives": "Для обычной раскладки предпочитай Grid/Flexbox; фиксированное позиционирование применяй только если элемент должен оставаться у окна.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-responsive",
    "title": "CSS: адаптивная вёрстка",
    "summary": "Подстраивай интерфейс под доступную ширину и предпочтения пользователя.",
    "code": ".cards { display: grid; grid-template-columns: repeat(3, 1fr); }\n@media (max-width: 760px) {\n  .cards { grid-template-columns: 1fr; }\n}",
    "example": "@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; }\n}",
    "points": [
      "Начинай с гибких размеров и ограничений max-width.",
      "Медиазапросы добавляй там, где ломается содержимое, а не под каждую модель устройства.",
      "Уважай prefers-reduced-motion и ориентацию экрана."
    ],
    "tags": [
      "CSS",
      "media query",
      "адаптивность",
      "responsive",
      "медиазапрос"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries",
    "search": true,
    "when": "Добавляй адаптивные правила, когда макет должен работать на разных ширинах окна и при увеличении текста.",
    "alternatives": "Сначала используй гибкие размеры и minmax; медиазапрос нужен, когда сам макет перестаёт быть удобным.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-custom-properties",
    "title": "CSS: переменные и темы",
    "summary": "Храни повторяющиеся значения в пользовательских свойствах.",
    "code": ":root {\n  --surface: #121b29;\n  --text: #edf3fc;\n  --accent: #a6f078;\n}\n.card { color: var(--text); background: var(--surface); }",
    "example": "body.light {\n  --surface: #fff;\n  --text: #172033;\n}",
    "points": [
      "Свойства с префиксом -- наследуются по обычным правилам CSS.",
      "var() может принимать запасное значение: var(--accent, green).",
      "Переменные удобно переопределять на контейнере темы."
    ],
    "tags": [
      "CSS",
      "--custom-property",
      "var",
      "переменные",
      "тема"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties",
    "search": true,
    "when": "Вводи переменные для повторяющихся цветов, размеров и значений темы, чтобы менять их централизованно.",
    "alternatives": "Для одноразового значения оставь обычное свойство; препроцессорные переменные полезны на этапе сборки, но CSS custom properties меняются во время работы.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-pseudo",
    "title": "CSS: псевдоклассы и псевдоэлементы",
    "summary": "Стилизуй состояние и части элемента без лишней разметки.",
    "code": "a:hover { color: #9b4c20; }\nbutton:focus-visible { outline: 3px solid orange; }\nli::marker { color: green; }\n.card::before { content: \"✦\"; }",
    "example": "input:invalid { border-color: crimson; }",
    "points": [
      "Псевдоклассы начинаются с :, например :hover и :focus-visible.",
      "Псевдоэлементы начинаются с ::, например ::before и ::marker.",
      "Не полагайся только на hover: обеспечь управление клавиатурой."
    ],
    "tags": [
      "CSS",
      "pseudo-class",
      "pseudo-element",
      "hover",
      "focus-visible",
      "before",
      "after"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-classes",
    "search": true,
    "when": "Используй псевдоклассы для состояний и структурных условий, псевдоэлементы — для декоративной части элемента.",
    "alternatives": "Если контент важен для смысла, помести его в HTML; не имитируй интерактивность одним :hover.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-transitions",
    "title": "CSS: переходы",
    "summary": "Анимируй изменение свойства при смене состояния.",
    "code": ".button {\n  background: #a6f078;\n  transition: background-color 160ms ease, transform 160ms ease;\n}\n.button:hover { transform: translateY(-2px); }",
    "example": "@media (prefers-reduced-motion: reduce) {\n  .button { transition: none; }\n}",
    "points": [
      "Перечисляй конкретные свойства, которые нужно анимировать.",
      "Длительность обычно короткая для отклика управления.",
      "Пользователям с уменьшением движения отключай декоративные переходы."
    ],
    "tags": [
      "CSS",
      "transition",
      "переход",
      "анимация",
      "hover"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_transitions",
    "search": true,
    "when": "Применяй transition для плавного перехода между двумя состояниями, например при наведении или раскрытии.",
    "alternatives": "Для последовательности ключевых кадров используй animation; мгновенное изменение не требует transition.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-animation",
    "title": "CSS: keyframes и анимации",
    "summary": "Определи последовательность кадров и настрой повторение.",
    "code": "@keyframes appear {\n  from { opacity: 0; transform: translateY(8px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n.notice { animation: appear 240ms ease-out both; }",
    "example": "@media (prefers-reduced-motion: reduce) {\n  .notice { animation: none; }\n}",
    "points": [
      "@keyframes задаёт состояния анимации.",
      "animation-duration и timing-function задают время и характер движения.",
      "Не анимируй много тяжёлых свойств одновременно; проверяй производительность."
    ],
    "tags": [
      "CSS",
      "@keyframes",
      "animation",
      "кадры",
      "анимация"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_animations",
    "search": true,
    "when": "Используй @keyframes, если эффект повторяется или проходит несколько промежуточных состояний.",
    "alternatives": "Для простого перехода между двумя значениями проще transition; учитывай prefers-reduced-motion для уменьшения анимации.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-overflow",
    "title": "CSS: переполнение и обрезка",
    "summary": "Решай, что делать с содержимым, выходящим за границы блока.",
    "code": ".panel {\n  max-height: 20rem;\n  overflow: auto;\n}\n.title {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}",
    "example": ".code { overflow-x: auto; }",
    "points": [
      "visible показывает переполнение; hidden обрезает; auto добавляет прокрутку при необходимости.",
      "Для длинного кода часто нужен overflow-x:auto.",
      "text-overflow:ellipsis требует ограничения размера и управления переносом."
    ],
    "tags": [
      "CSS",
      "overflow",
      "scroll",
      "ellipsis",
      "переполнение",
      "обрезка"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/overflow",
    "search": true,
    "when": "Настраивай overflow, когда содержимое может выйти за границы блока; для прокручиваемых областей задавай ось осознанно.",
    "alternatives": "Для обрезки одного текстового ряда используй text-overflow вместе с нужными условиями; видимый поток лучше оставить без ограничения.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-borders",
    "title": "CSS: рамки, радиус и тени",
    "summary": "Оформи границы и глубину компонентов.",
    "code": ".card {\n  border: 1px solid #2b394d;\n  border-radius: 14px;\n  box-shadow: 0 12px 32px rgb(0 0 0 / 18%);\n}",
    "example": "button { border: 0; border-radius: 999px; }",
    "points": [
      "border задаёт толщину, стиль и цвет рамки.",
      "border-radius скругляет углы; большое значение создаёт капсулу.",
      "Тени используй для иерархии, не заменяй ими реальные границы везде."
    ],
    "tags": [
      "CSS",
      "border",
      "border-radius",
      "box-shadow",
      "рамка",
      "тень"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/border",
    "search": true,
    "when": "Используй границы для разделителей, контуров и скругления компонентов.",
    "alternatives": "Для внешнего фокуса без изменения размеров подходит outline; тень может создать визуальный край, но не заменяет границу во всех состояниях.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-containment",
    "title": "CSS: размеры и ограничения",
    "summary": "Контролируй минимальные, максимальные и пропорциональные размеры.",
    "code": ".content { width: min(100% - 2rem, 72rem); margin-inline: auto; }\n.avatar { width: 3rem; aspect-ratio: 1; border-radius: 50%; }\n.media { max-width: 100%; height: auto; }",
    "example": "h1 { font-size: clamp(2rem, 5vw, 4.5rem); }",
    "points": [
      "min-width и min-height защищают содержимое от слишком малого контейнера.",
      "max-width часто помогает изображениям и строкам текста.",
      "clamp(min, preferred, max) задаёт адаптивный диапазон."
    ],
    "tags": [
      "CSS",
      "width",
      "height",
      "min-width",
      "max-width",
      "aspect-ratio",
      "clamp"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/length",
    "search": true,
    "when": "Добавляй containment в больших интерфейсах, если изоляция отрисовки или расчётов реально помогает производительности.",
    "alternatives": "Не включай изоляцию наугад: сперва профилируй; для простой раскладки достаточно обычного потока и локальных контейнеров.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-values",
    "title": "JavaScript: значения и типы",
    "summary": "Различай примитивы, объекты, отсутствие значения и проверку типа.",
    "code": "const title = \"DevShelf\";\nconst count = 3;\nconst active = true;\nconst missing = null;\nlet result;\nconsole.log(typeof title, typeof count);",
    "example": "const user = {name: \"Аня\"};\nconsole.log(user.name);",
    "points": [
      "Примитивы включают строки, числа, bigint, boolean, null, undefined и symbol.",
      "Объекты хранят коллекции и имеют ссылочную семантику.",
      "typeof null исторически возвращает \"object\"; проверяй null сравнением."
    ],
    "tags": [
      "JavaScript",
      "тип",
      "typeof",
      "null",
      "undefined",
      "примитив"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Data_structures",
    "search": true,
    "when": "Обращайся к типам значений, когда выбираешь операции и проверяешь данные; различай null, undefined и отсутствие свойства.",
    "alternatives": "Для списка значений используй массив, для именованных полей — объект; специальные структуры Map/Set удобны для ключей и уникальности.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-operators",
    "title": "JavaScript: операторы и сравнения",
    "summary": "Вычисляй значения и сравнивай их без скрытых преобразований.",
    "code": "const total = price * quantity;\nconst canSubmit = name.trim() !== \"\" && email.includes(\"@\");\nconst same = value === expected;",
    "example": "const label = count === 1 ? \"раз\" : \"раза\";",
    "points": [
      "=== и !== сравнивают без неявного приведения типа.",
      "&&, || и ! работают с логическими условиями.",
      "Оператор ?? выбирает запасное значение только при null или undefined."
    ],
    "tags": [
      "JavaScript",
      "операторы",
      "сравнение",
      "равенство",
      "условия"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_operators",
    "search": true,
    "when": "Выбирай оператор по смыслу выражения и следи за приоритетом, особенно в длинных условиях.",
    "alternatives": "Для проверки равенства обычно используй ===; для ветвления по множеству вариантов удобнее switch или отдельная таблица.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-conditionals",
    "title": "JavaScript: условия и ветвления",
    "summary": "Выбирай поведение программы по логическому условию.",
    "code": "if (score >= 90) {\n  console.log(\"Отлично\");\n} else if (score >= 60) {\n  console.log(\"Зачёт\");\n} else {\n  console.log(\"Попробуй ещё раз\");\n}",
    "example": "const message = isOpen ? \"Закрыть\" : \"Открыть\";",
    "points": [
      "if выполняет ветку при истинном условии.",
      "switch подходит для выбора среди нескольких фиксированных вариантов.",
      "Условия пиши явно и избегай глубокой вложенности."
    ],
    "tags": [
      "JavaScript",
      "if",
      "else",
      "switch",
      "условие",
      "ветвление"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
    "search": true,
    "when": "Используй условие, когда нужно выбрать действие по состоянию или значению.",
    "alternatives": "Для короткого выбора значения подходит тернарный оператор; для множества вариантов — switch или объект-словарь.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-loops",
    "title": "JavaScript: циклы",
    "summary": "Повторяй код для последовательности или пока истинно условие.",
    "code": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}\nfor (const item of items) {\n  console.log(item);\n}",
    "example": "let attempts = 0;\nwhile (attempts < 3) {\n  attempts += 1;\n}",
    "points": [
      "for удобен, если нужен индекс или известен диапазон.",
      "for...of перебирает значения итерируемых коллекций.",
      "Не меняй условие цикла так, чтобы он стал бесконечным."
    ],
    "tags": [
      "JavaScript",
      "for",
      "while",
      "for of",
      "цикл",
      "циклы"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration",
    "search": true,
    "when": "Цикл нужен для повторяемой операции над набором данных или пока условие остаётся истинным.",
    "alternatives": "Для преобразования и отбора массивов читаемее map/filter; for...of удобен, когда нужна последовательная обработка с await.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-objects",
    "title": "JavaScript: объекты",
    "summary": "Объединяй связанные данные в именованные свойства.",
    "code": "const user = {\n  name: \"Аня\",\n  active: true,\n  greet() {\n    return \"Привет, \" + this.name;\n  }\n};\nconsole.log(user.greet());",
    "example": "const {name, active} = user;\nconst copy = {...user, active: false};",
    "points": [
      "Свойства доступны через точку или квадратные скобки.",
      "Деструктуризация извлекает нужные свойства в переменные.",
      "Spread создаёт поверхностную копию; вложенные объекты остаются общими."
    ],
    "tags": [
      "JavaScript",
      "object",
      "объект",
      "свойства",
      "методы",
      "деструктуризация"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_objects",
    "search": true,
    "when": "Используй объект для связанных именованных свойств и методов.",
    "alternatives": "Для ключей произвольного типа подходит Map; для упорядоченной последовательности — массив.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-scope",
    "title": "JavaScript: область видимости",
    "summary": "Понимай, где переменная существует и когда замыкание сохраняет доступ.",
    "code": "const page = \"home\";\nfunction show() {\n  const message = \"Раздел: \" + page;\n  return message;\n}\nconsole.log(show());",
    "example": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
    "points": [
      "let и const ограничены блоком; var — функцией или глобальной областью.",
      "Внутренняя функция может читать внешние переменные — это замыкание.",
      "Не создавай случайные глобальные переменные."
    ],
    "tags": [
      "JavaScript",
      "scope",
      "область видимости",
      "замыкание",
      "closure"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Closures",
    "search": true,
    "when": "Разбирай область видимости, чтобы понимать где доступна переменная и почему замыкание хранит значение.",
    "alternatives": "Для переменных используй const по умолчанию и let при переназначении; избегай var в новом коде.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-errors",
    "title": "JavaScript: ошибки и исключения",
    "summary": "Обрабатывай ожидаемые сбои и показывай понятное состояние.",
    "code": "try {\n  const data = JSON.parse(text);\n  render(data);\n} catch (error) {\n  console.error(\"Не удалось прочитать данные:\", error.message);\n}",
    "example": "function parseAge(value) {\n  if (!Number.isFinite(value)) {\n    throw new TypeError(\"Возраст должен быть числом\");\n  }\n  return value;\n}",
    "points": [
      "throw создаёт исключение и передаёт управление ближайшему catch.",
      "finally выполняется и при успехе, и при ошибке.",
      "Не скрывай ошибку пустым catch; сообщай пользователю безопасно."
    ],
    "tags": [
      "JavaScript",
      "ошибка",
      "try",
      "catch",
      "throw",
      "исключения"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
    "search": true,
    "when": "Обрабатывай исключения вокруг операций, которые ожидаемо могут завершиться ошибкой, и показывай понятный результат.",
    "alternatives": "Для обычной ветки проверки используй if/return; для асинхронного кода можно выбрать try/catch или обработку Promise через catch.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-modules",
    "title": "JavaScript: модули import и export",
    "summary": "Разделяй программу на файлы с явными зависимостями.",
    "code": "// math.js\nexport function sum(a, b) {\n  return a + b;\n}\n// main.js\nimport {sum} from \"./math.js\";\nconsole.log(sum(2, 3));",
    "example": "export default function formatDate(date) {\n  return new Intl.DateTimeFormat(\"ru-RU\").format(date);\n}",
    "points": [
      "Именованный экспорт позволяет импортировать конкретные значения.",
      "У модуля может быть один default export.",
      "В браузере подключай entry-файл с type=\"module\"."
    ],
    "tags": [
      "JavaScript",
      "import",
      "export",
      "модуль",
      "modules"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules",
    "search": true,
    "when": "Разделяй код на модули, когда файлы имеют самостоятельные обязанности и повторно используемые части.",
    "alternatives": "Для маленького скрипта без сборки можно оставить один файл; динамический import подходит для отложенной загрузки.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-dom-create",
    "title": "JavaScript: изменение DOM",
    "summary": "Создавай, находи и обновляй HTML-элементы из JavaScript.",
    "code": "const list = document.querySelector(\"#list\");\nconst item = document.createElement(\"li\");\nitem.textContent = \"Изучить DOM\";\nlist.append(item);",
    "example": "document.querySelector(\".notice\")?.classList.add(\"is-visible\");",
    "points": [
      "createElement создаёт узел; append добавляет его в DOM.",
      "textContent безопасно вставляет обычный текст.",
      "Избегай частого чтения и записи layout-свойств в длинных циклах."
    ],
    "tags": [
      "JavaScript",
      "DOM",
      "createElement",
      "append",
      "textContent",
      "элемент"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Web/API/Document_Object_Model",
    "search": true,
    "when": "Меняй DOM, когда интерфейс должен реагировать на действие пользователя или данные приложения.",
    "alternatives": "Для статичного содержимого проще HTML; для безопасного текста задавай textContent, а не вставляй строку через innerHTML.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-event-delegation",
    "title": "JavaScript: делегирование событий",
    "summary": "Обрабатывай события дочерних элементов одним слушателем на контейнере.",
    "code": "document.querySelector(\"#list\").addEventListener(\"click\", event => {\n  const button = event.target.closest(\"[data-remove]\");\n  if (!button) return;\n  button.closest(\"li\").remove();\n});",
    "example": "form.addEventListener(\"submit\", event => {\n  event.preventDefault();\n  saveForm();\n});",
    "points": [
      "Событие всплывает от дочернего узла к предкам.",
      "closest помогает найти элемент действия рядом с целью клика.",
      "Делегирование удобно для списков, элементы которых добавляются динамически."
    ],
    "tags": [
      "JavaScript",
      "event",
      "событие",
      "делегирование",
      "closest",
      "всплытие"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Learn_web_development/Core/Scripting/Event_bubbling",
    "search": true,
    "when": "Делегируй события на общем предке, когда однотипных дочерних элементов много или они появляются динамически.",
    "alternatives": "Для одного постоянного элемента достаточно прямого addEventListener; делегирование требует проверить event.target или closest.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-forms",
    "title": "JavaScript: работа с формами",
    "summary": "Считывай значения, проверяй форму и показывай ошибки.",
    "code": "const form = document.querySelector(\"#signup\");\nform.addEventListener(\"submit\", event => {\n  event.preventDefault();\n  const data = new FormData(form);\n  console.log(data.get(\"email\"));\n});",
    "example": "const email = form.elements.email.value.trim();",
    "points": [
      "submit обрабатывает отправку кнопкой или клавишей Enter.",
      "FormData собирает поля по атрибуту name.",
      "Клиентская проверка улучшает удобство, но не заменяет серверную."
    ],
    "tags": [
      "JavaScript",
      "форма",
      "FormData",
      "submit",
      "валидация",
      "поля"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Web/API/FormData",
    "search": true,
    "when": "Обрабатывай submit, если нужно валидировать форму, отправить её без перезагрузки или изменить интерфейс.",
    "alternatives": "Для обычной отправки оставь нативную форму; клиентскую проверку считай удобством, а не заменой серверной.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-storage",
    "title": "JavaScript: localStorage и sessionStorage",
    "summary": "Сохраняй небольшие строковые данные в браузере.",
    "code": "localStorage.setItem(\"theme\", \"dark\");\nconst theme = localStorage.getItem(\"theme\");\nlocalStorage.removeItem(\"theme\");",
    "example": "const favorites = JSON.parse(localStorage.getItem(\"favorites\") || \"[]\");\nlocalStorage.setItem(\"favorites\", JSON.stringify([...favorites, \"nav\"]));",
    "points": [
      "Хранилища синхронны и принимают строки.",
      "Для объектов используй JSON.stringify и JSON.parse.",
      "Не сохраняй секреты, пароли или чувствительные данные."
    ],
    "tags": [
      "JavaScript",
      "localStorage",
      "sessionStorage",
      "хранилище",
      "избранное"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Web/API/Web_Storage_API",
    "search": true,
    "when": "Используй localStorage для небольших несекретных настроек, которые должны пережить перезапуск вкладки.",
    "alternatives": "Для временного состояния вкладки подходит sessionStorage; для большого структурированного хранилища — IndexedDB.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-date",
    "title": "JavaScript: даты и форматирование",
    "summary": "Создавай даты и выводи локализованный текст через Intl.",
    "code": "const now = new Date();\nconst label = new Intl.DateTimeFormat(\"ru-RU\", {\n  dateStyle: \"long\",\n  timeStyle: \"short\"\n}).format(now);",
    "example": "const iso = new Date().toISOString();",
    "points": [
      "Date хранит момент времени в миллисекундах относительно UTC.",
      "Локальный вывод создавай через Intl.DateTimeFormat.",
      "ISO-строку удобно передавать в API, но не обязательно показывать напрямую."
    ],
    "tags": [
      "JavaScript",
      "Date",
      "дата",
      "время",
      "Intl",
      "форматирование"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date",
    "search": true,
    "when": "Используй Date для временных отметок и простых вычислений с датой; явно учитывай часовой пояс и формат.",
    "alternatives": "Для календарных расчётов и локализованного отображения нужна Intl или подходящая библиотека даты; формат ISO лучше для обмена данными.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-map-set",
    "title": "JavaScript: Map и Set",
    "summary": "Используй коллекции для ключей и уникальных значений.",
    "code": "const visits = new Map();\nvisits.set(\"home\", 3);\nconsole.log(visits.get(\"home\"));\nconst uniqueTags = new Set([\"php\", \"js\", \"php\"]);",
    "example": "const seen = new Set(items.map(item => item.id));",
    "points": [
      "Map хранит пары ключ—значение; ключом может быть объект.",
      "Set сохраняет только уникальные значения.",
      "Выбирай обычный объект для записи свойств, Map — для коллекции пар."
    ],
    "tags": [
      "JavaScript",
      "Map",
      "Set",
      "коллекции",
      "уникальность"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Keyed_collections",
    "search": true,
    "when": "Бери Map для пар ключ-значение с произвольными типами ключей, Set — для уникальных значений.",
    "alternatives": "Обычный объект удобен для записи с фиксированными строковыми ключами; массив подходит для упорядоченных повторяющихся значений.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-array-methods",
    "title": "JavaScript: map, filter, reduce",
    "summary": "Преобразуй, отбирай и своди значения массивов.",
    "code": "const names = users.map(user => user.name);\nconst adults = users.filter(user => user.age >= 18);\nconst total = prices.reduce((sum, price) => sum + price, 0);",
    "example": "const match = users.find(user => user.id === selectedId);",
    "points": [
      "map возвращает преобразованный массив той же длины.",
      "filter оставляет элементы, прошедшие условие.",
      "reduce сводит коллекцию к одному значению; для простых задач предпочитай понятные методы."
    ],
    "tags": [
      "JavaScript",
      "map",
      "filter",
      "reduce",
      "find",
      "массивы"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array",
    "search": true,
    "when": "Используй методы массива для преобразования, поиска и отбора коллекций; выбирай метод по результату операции.",
    "alternatives": "Если нужно прервать обход или выполнять await по очереди, используй цикл; forEach не возвращает преобразованный массив.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-network-errors",
    "title": "JavaScript: отмена и тайм-аут fetch",
    "summary": "Управляй жизненным циклом сетевого запроса.",
    "code": "const controller = new AbortController();\nconst timeout = setTimeout(() => controller.abort(), 5000);\ntry {\n  const response = await fetch(\"/api/items\", {signal: controller.signal});\n  if (!response.ok) throw new Error(\"HTTP \" + response.status);\n  const items = await response.json();\n} finally {\n  clearTimeout(timeout);\n}",
    "example": "const response = await fetch(\"/api/profile\", {\n  headers: {Accept: \"application/json\"}\n});",
    "points": [
      "AbortController отменяет запрос через сигнал.",
      "fetch отклоняется при сетевой ошибке, но не автоматически при статусе 404.",
      "Проверяй response.ok и корректно показывай состояние загрузки."
    ],
    "tags": [
      "JavaScript",
      "fetch",
      "AbortController",
      "запрос",
      "ошибка сети",
      "тайм-аут"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Web/API/Fetch_API/Using_Fetch",
    "search": true,
    "when": "Обрабатывай ошибки сети отдельно от неуспешного HTTP-статуса: fetch обычно отклоняется только при сетевой ошибке.",
    "alternatives": "Для простого запроса подходит fetch; для повтора или сложной отмены добавь AbortController и явную политику повторов.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "php",
    "id": "array",
    "title": "PHP: массивы",
    "summary": "Индексированные и ассоциативные наборы данных.",
    "code": "$languages = ['PHP', 'JavaScript', 'HTML'];\n$languages[] = 'CSS';\necho $languages[0];",
    "example": "$user = ['name' => 'Анна', 'role' => 'разработчик'];\necho $user['name'];",
    "points": [
      "Индексы индексированного массива начинаются с нуля.",
      "Ассоциативный массив хранит пары ключ => значение.",
      "Массив PHP может содержать смешанные типы и служит базовой коллекцией."
    ],
    "tags": [
      "PHP",
      "array",
      "массив",
      "массивы",
      "ключ",
      "значение"
    ],
    "url": "https://www.php.net/manual/ru/language.types.array.php",
    "search": false,
    "when": "Выбирай массив, когда данные образуют список или соответствуют ключам; ассоциативный массив в PHP хранит пары ключ-значение.",
    "alternatives": "Для фиксированной записи с типами удобен объект или DTO; для уникального набора значений используй отдельную логику проверки.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "foreach",
    "title": "PHP: цикл foreach",
    "summary": "Перебирай индексированные и ассоциативные массивы.",
    "code": "$fruits = ['яблоко', 'груша'];\nforeach ($fruits as $fruit) {\n    echo $fruit . PHP_EOL;\n}",
    "example": "foreach ($prices as $product => $price) {\n    echo $product . ': ' . $price . PHP_EOL;\n}",
    "points": [
      "В цикле доступны текущее значение и при необходимости ключ.",
      "Для изменения значения по ссылке нужен префикс &; избегай его без необходимости.",
      "Для числового счётчика часто подходит for."
    ],
    "tags": [
      "PHP",
      "foreach",
      "цикл",
      "перебор",
      "массив"
    ],
    "url": "https://www.php.net/manual/ru/control-structures.foreach.php",
    "search": false,
    "when": "Применяй foreach для последовательного обхода массива или Traversable, особенно когда ключ важен.",
    "alternatives": "Если нужен счётчик и шаг, используй for; для фильтрации и преобразования можно выразить задачу отдельными функциями.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "function",
    "title": "PHP: функции",
    "summary": "Объявляй функции с понятными параметрами, типами и результатом.",
    "code": "function greet(string $name): string\n{\n    return 'Привет, ' . $name . '!';\n}",
    "example": "function total(float $price, int $count = 1): float\n{\n    return $price * $count;\n}",
    "points": [
      "return возвращает значение и завершает выполнение функции.",
      "Типы параметров и возвращаемого значения фиксируют ожидания.",
      "Параметрам можно задавать значения по умолчанию."
    ],
    "tags": [
      "PHP",
      "function",
      "функция",
      "функции",
      "параметры",
      "return"
    ],
    "url": "https://www.php.net/manual/ru/language.functions.php",
    "search": false,
    "when": "Выноси повторяемую логику в функцию и задавай параметры/результат так, чтобы её было легко проверить.",
    "alternatives": "Для простого однократного выражения функция может быть излишней; для поведения с состоянием лучше рассмотреть метод класса.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "form",
    "title": "PHP: формы и $_GET / $_POST",
    "summary": "Читай данные формы на сервере и безопасно показывай значения.",
    "code": "if ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    $name = trim($_POST['name'] ?? '');\n    echo htmlspecialchars($name, ENT_QUOTES, 'UTF-8');\n}",
    "example": "<form method=\"post\">\n  <label>Имя <input name=\"name\" required></label>\n  <button type=\"submit\">Отправить</button>\n</form>",
    "points": [
      "Поле формы должно иметь атрибут name.",
      "GET передаёт параметры в URL; POST отправляет данные в теле запроса.",
      "Экранируй данные перед выводом в HTML и валидируй их на сервере."
    ],
    "tags": [
      "PHP",
      "form",
      "форма",
      "GET",
      "POST",
      "$_GET",
      "$_POST"
    ],
    "url": "https://www.php.net/manual/ru/tutorial.forms.php",
    "search": false,
    "when": "Используй PHP для серверной обработки формы после отправки и проверяй каждое входящее значение.",
    "alternatives": "Для передачи фильтров подходит GET; для изменения данных — POST; браузерная проверка не заменяет серверную.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "pdo",
    "title": "PHP: PDO и подготовленные запросы",
    "summary": "Выполняй параметризованные SQL-запросы через PDO.",
    "code": "$statement = $pdo->prepare(\n    'SELECT id, name FROM users WHERE email = :email'\n);\n$statement->execute(['email' => $email]);\n$user = $statement->fetch();",
    "example": "$pdo = new PDO($dsn, $username, $password, [\n    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,\n    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n]);",
    "points": [
      "Передавай значения отдельно, не вставляй их конкатенацией в SQL.",
      "Выбирай драйвер через строку DSN.",
      "Ошибки запросов обрабатывай исключениями и логируй без раскрытия секретов."
    ],
    "tags": [
      "PHP",
      "PDO",
      "SQL",
      "база данных",
      "подготовленный запрос"
    ],
    "url": "https://www.php.net/manual/ru/book.pdo.php",
    "search": false,
    "when": "Выбирай PDO для доступа к поддерживаемой базе с единым API и параметризованными запросами.",
    "alternatives": "Если проект использует специфичный драйвер, может подойти его API; ORM строится поверх PDO/драйвера, но не отменяет понимание SQL.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "class",
    "title": "PHP: классы и объекты",
    "summary": "Объединяй состояние и операции в классах.",
    "code": "class User\n{\n    public function __construct(public string $name) {}\n\n    public function greet(): string\n    {\n        return 'Привет, ' . $this->name;\n    }\n}",
    "example": "$user = new User('Мир');\necho $user->greet();",
    "points": [
      "new создаёт экземпляр класса.",
      "$this обращается к текущему объекту.",
      "public, protected и private задают видимость свойств и методов."
    ],
    "tags": [
      "PHP",
      "class",
      "класс",
      "объект",
      "ООП",
      "метод"
    ],
    "url": "https://www.php.net/manual/ru/language.oop5.php",
    "search": false,
    "when": "Создавай класс, когда у сущности есть связанное состояние и поведение или нужен контракт для нескольких реализаций.",
    "alternatives": "Для простой функции преобразования достаточно функции; для неизменяемой группы данных можно использовать value object/DTO.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "echo",
    "title": "PHP: echo и вывод",
    "summary": "Выводи текст и безопасно включай значения в HTML.",
    "code": "$name = 'Мир';\necho 'Привет, ' . $name . '!';",
    "example": "$title = 'Моя страница';\n?>\n<h1><?= htmlspecialchars($title, ENT_QUOTES, 'UTF-8') ?></h1>\n<?php",
    "points": [
      "Точка соединяет строки.",
      "Короткая форма <?= ... ?> выводит выражение.",
      "Пользовательские значения экранируй под контекст вывода."
    ],
    "tags": [
      "PHP",
      "echo",
      "вывод",
      "htmlspecialchars",
      "строки"
    ],
    "url": "https://www.php.net/manual/ru/function.echo.php",
    "search": false,
    "when": "Применяй echo для вывода строки в ответ; перед вставкой пользовательского текста в HTML экранируй его.",
    "alternatives": "Для получения результата без немедленного вывода используй возвращаемое значение функции; printf нужен, когда важен формат.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-syntax",
    "title": "PHP: синтаксис и блоки кода",
    "summary": "Встраивай серверный код между открывающим и закрывающим тегами PHP.",
    "code": "<?php\ndeclare(strict_types=1);\n\n$message = 'Привет!';\necho $message;\n?>",
    "example": "<?php if ($isReady): ?>\n  <p>Готово</p>\n<?php else: ?>\n  <p>Ожидаем</p>\n<?php endif; ?>",
    "points": [
      "PHP исполняется на сервере; браузер получает результат, обычно HTML.",
      "Инструкции обычно заканчиваются точкой с запятой.",
      "В файлах, состоящих только из PHP, закрывающий тег обычно опускают."
    ],
    "tags": [
      "PHP",
      "синтаксис",
      "теги",
      "<?php",
      "точка с запятой"
    ],
    "url": "https://www.php.net/manual/ru/language.basic-syntax.php",
    "search": true,
    "when": "Эта тема нужна при создании PHP-файла или встраивании PHP в HTML; PHP-код исполняется сервером.",
    "alternatives": "Для статической страницы серверный PHP не нужен; для динамического ответа можно использовать другой серверный стек.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-types",
    "title": "PHP: типы и преобразования",
    "summary": "Используй значения корректного типа и контролируй преобразования.",
    "code": "$count = 3;\n$price = 12.50;\n$title = 'Книга';\n$active = true;\n$nothing = null;",
    "example": "function add(int $a, int $b): int\n{\n    return $a + $b;\n}",
    "points": [
      "PHP переменные начинаются с $.",
      "Типы включают int, float, string, bool, array, object, null и другие.",
      "Строгая типизация файла включается declare(strict_types=1); в его начале."
    ],
    "tags": [
      "PHP",
      "типы",
      "int",
      "string",
      "bool",
      "null",
      "переменные"
    ],
    "url": "https://www.php.net/manual/ru/language.types.php",
    "search": true,
    "when": "Используй типы, чтобы выражать допустимые значения и ловить ошибки на границе функции.",
    "alternatives": "При необходимости неизвестного набора вариантов применяй union/nullable типы; не полагайся на неявное преобразование в критичной логике.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-strings",
    "title": "PHP: строки",
    "summary": "Соединяй, форматируй и безопасно выводи текст.",
    "code": "$first = 'Анна';\n$message = 'Привет, ' . $first . '!';\n$length = mb_strlen($message, 'UTF-8');",
    "example": "$path = \"Документы\\Отчёт.pdf\";",
    "points": [
      "Одинарные кавычки подходят для строк без интерполяции.",
      "Точка соединяет строки.",
      "Для длины и обработки Unicode используй mb_* при доступном расширении."
    ],
    "tags": [
      "PHP",
      "строка",
      "string",
      "кавычки",
      "конкатенация",
      "mb_strlen"
    ],
    "url": "https://www.php.net/manual/ru/language.types.string.php",
    "search": true,
    "when": "Применяй строковые операции для формирования текста и учитывай Unicode при поиске или подсчёте символов.",
    "alternatives": "Для шаблонов с множеством значений удобнее форматирование или шаблонизатор; SQL/HTML вывод требует отдельного безопасного экранирования.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-conditionals",
    "title": "PHP: условия и match",
    "summary": "Выбирай ветку выполнения по значению и условию.",
    "code": "if ($score >= 60) {\n    echo 'Зачёт';\n} else {\n    echo 'Попробуй ещё раз';\n}",
    "example": "$label = match ($status) {\n    'new' => 'Новый',\n    'paid' => 'Оплачен',\n    default => 'Неизвестно',\n};",
    "points": [
      "if / elseif / else обрабатывают логические условия.",
      "match сравнивает строго и возвращает значение.",
      "Для нескольких независимых проверок избегай чрезмерно вложенных условий."
    ],
    "tags": [
      "PHP",
      "if",
      "else",
      "match",
      "условие",
      "ветвление"
    ],
    "url": "https://www.php.net/manual/ru/control-structures.if.php",
    "search": true,
    "when": "Используй if для ветвления по условиям, match — когда одно значение выбирает одно из результатов.",
    "alternatives": "Для диапазонов и сложных логических условий подходит if; match удобнее для точного сопоставления значений.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-loops",
    "title": "PHP: циклы for и while",
    "summary": "Повторяй блок кода по счётчику или пока условие истинно.",
    "code": "for ($i = 0; $i < 3; $i++) {\n    echo $i . PHP_EOL;\n}",
    "example": "while ($row = $statement->fetch()) {\n    process($row);\n}",
    "points": [
      "for задаёт старт, условие и изменение счётчика.",
      "while проверяет условие перед каждой итерацией.",
      "Для массива чаще используй foreach."
    ],
    "tags": [
      "PHP",
      "for",
      "while",
      "цикл",
      "циклы"
    ],
    "url": "https://www.php.net/manual/ru/control-structures.for.php",
    "search": true,
    "when": "Применяй for при известном счётчике и while, когда повторение зависит от условия.",
    "alternatives": "Для элементов массива обычно читабельнее foreach; для преобразований можно использовать array_map, если это упрощает код.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-errors",
    "title": "PHP: ошибки и исключения",
    "summary": "Перехватывай ожидаемые исключения, логируй детали безопасно.",
    "code": "try {\n    $user = loadUser($id);\n} catch (NotFoundException $error) {\n    http_response_code(404);\n    echo 'Пользователь не найден';\n}",
    "example": "throw new InvalidArgumentException('Некорректный идентификатор');",
    "points": [
      "Исключение передаёт управление блоку catch.",
      "Наследуй доменные ошибки от подходящего типа исключения.",
      "Посетителю показывай нейтральное сообщение, технические детали храни в журнале."
    ],
    "tags": [
      "PHP",
      "try",
      "catch",
      "throw",
      "ошибки",
      "исключения"
    ],
    "url": "https://www.php.net/manual/ru/language.exceptions.php",
    "search": true,
    "when": "Обрабатывай ожидаемые исключения там, где можно восстановиться или вернуть контролируемый ответ.",
    "alternatives": "Не перехватывай Throwable без причины; для проверки обычных условий используй if, а детали ошибок записывай в журнал.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-include",
    "title": "PHP: include и require",
    "summary": "Подключай общие файлы и разделяй код на части.",
    "code": "require_once __DIR__ . '/bootstrap.php';\ninclude __DIR__ . '/partials/header.php';",
    "example": "require_once __DIR__ . '/config/database.php';",
    "points": [
      "require прекращает выполнение при ошибке подключения; include выдаёт предупреждение.",
      "_once предотвращает повторное подключение файла.",
      "Строить путь удобно от __DIR__; не доверяй пользовательскому пути."
    ],
    "tags": [
      "PHP",
      "include",
      "require",
      "require_once",
      "подключение файлов"
    ],
    "url": "https://www.php.net/manual/ru/function.include.php",
    "search": true,
    "when": "Подключай файлы для переиспользуемых частей или настроек и строй путь от __DIR__.",
    "alternatives": "Для классов в приложении используй автозагрузку Composer; include оставь для шаблонов и простых файлов.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-json",
    "title": "PHP: JSON",
    "summary": "Преобразуй массивы и объекты в JSON для обмена с браузером.",
    "code": "$json = json_encode(\n    ['ok' => true, 'count' => 3],\n    JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR\n);",
    "example": "$data = json_decode($body, true, 512, JSON_THROW_ON_ERROR);",
    "points": [
      "json_encode кодирует PHP-значение; json_decode разбирает JSON.",
      "Обрабатывай ошибки кодирования и декодирования.",
      "Для HTTP-ответа укажи Content-Type: application/json; charset=utf-8."
    ],
    "tags": [
      "PHP",
      "JSON",
      "json_encode",
      "json_decode",
      "API"
    ],
    "url": "https://www.php.net/manual/ru/function.json-encode.php",
    "search": true,
    "when": "Используй JSON для обмена данными с браузером или API; явно обрабатывай ошибку кодирования и декодирования.",
    "alternatives": "Для формы браузера удобен form-urlencoded/multipart; для внутреннего хранения выбирай формат с подходящей схемой и типами.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-sessions",
    "title": "PHP: сессии",
    "summary": "Храни серверное состояние между запросами одного посетителя.",
    "code": "session_start();\n$_SESSION['user_id'] = 42;",
    "example": "session_start();\n$userId = $_SESSION['user_id'] ?? null;",
    "points": [
      "session_start вызывай до отправки HTML в ответе.",
      "В сессии храни минимум данных, обычно идентификатор.",
      "Для учётных данных настрой безопасные cookie и обновляй идентификатор после входа."
    ],
    "tags": [
      "PHP",
      "session",
      "сессия",
      "$_SESSION",
      "авторизация"
    ],
    "url": "https://www.php.net/manual/ru/book.session.php",
    "search": true,
    "when": "Используй сессию для небольшого серверного состояния между запросами, например идентификатора вошедшего пользователя.",
    "alternatives": "Для постоянного хранения используй базу данных; не держи в сессии лишние секреты и защищай cookie.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-passwords",
    "title": "PHP: пароли и хеширование",
    "summary": "Храни проверочные хеши паролей вместо исходных паролей.",
    "code": "$hash = password_hash($password, PASSWORD_DEFAULT);\nif (password_verify($input, $hash)) {\n    echo 'Пароль подходит';\n}",
    "example": "if (password_needs_rehash($hash, PASSWORD_DEFAULT)) {\n    $hash = password_hash($password, PASSWORD_DEFAULT);\n}",
    "points": [
      "Никогда не сохраняй и не журналируй исходный пароль.",
      "password_hash автоматически управляет солью.",
      "Используй password_verify для проверки."
    ],
    "tags": [
      "PHP",
      "пароль",
      "password_hash",
      "password_verify",
      "безопасность"
    ],
    "url": "https://www.php.net/manual/ru/function.password-hash.php",
    "search": true,
    "when": "Используй password_hash при создании пароля и password_verify при проверке входа.",
    "alternatives": "Не применяй обычный hash/MD5/SHA для паролей; специализированный password_hash управляет солью и алгоритмом.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-namespaces",
    "title": "PHP: пространства имён",
    "summary": "Избегай конфликтов имён в больших проектах.",
    "code": "namespace App\\Service;\n\nclass Mailer\n{\n    public function send(): void {}\n}",
    "example": "use App\\Service\\Mailer;\n$mailer = new Mailer();",
    "points": [
      "namespace указывается до обычного кода файла.",
      "use создаёт короткое имя для класса, функции или константы.",
      "Пространство имён отражает организацию кода, но не подключает сам файл."
    ],
    "tags": [
      "PHP",
      "namespace",
      "use",
      "пространство имён",
      "класс"
    ],
    "url": "https://www.php.net/manual/ru/language.namespaces.php",
    "search": true,
    "when": "Разделяй имена классов и функций пространствами имён в приложениях с несколькими модулями или зависимостями.",
    "alternatives": "Для маленького однофайлового скрипта namespace не обязателен; автозагрузка PSR-4 помогает сопоставить классы с файлами.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-composer",
    "title": "PHP: Composer и зависимости",
    "summary": "Управляй библиотеками и автозагрузкой через Composer.",
    "code": "composer require vendor/package",
    "example": "{\n  \"autoload\": {\n    \"psr-4\": {\"App\\\\\": \"src/\"}\n  }\n}",
    "points": [
      "composer.json описывает зависимости и настройки проекта.",
      "composer.lock фиксирует версии для воспроизводимой установки.",
      "vendor/autoload.php подключает автозагрузку классов."
    ],
    "tags": [
      "PHP",
      "Composer",
      "composer.json",
      "composer.lock",
      "зависимости",
      "автозагрузка"
    ],
    "url": "https://www.php.net/manual/ru/language.oop5.autoload.php",
    "search": true,
    "when": "Используй Composer для управления внешними пакетами и автозагрузки классов проекта.",
    "alternatives": "Для маленького скрипта без зависимостей Composer не обязателен; системные расширения PHP подключаются отдельно.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-validation",
    "title": "PHP: проверка данных на сервере",
    "summary": "Проверяй типы, диапазоны и формат входящих данных на сервере.",
    "code": "$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);\nif ($email === false || $email === null) {\n    http_response_code(400);\n    exit('Проверь адрес почты');\n}",
    "example": "$age = filter_input(INPUT_POST, 'age', FILTER_VALIDATE_INT, [\n    'options' => ['min_range' => 0, 'max_range' => 120],\n]);",
    "points": [
      "Проверка на клиенте не защищает сервер от поддельного запроса.",
      "Валидируй по ожидаемому формату и бизнес-правилам.",
      "Разделяй проверку значения и экранирование при выводе."
    ],
    "tags": [
      "PHP",
      "валидация",
      "filter_input",
      "безопасность",
      "проверка формы"
    ],
    "url": "https://www.php.net/manual/ru/filter.filters.validation.php",
    "search": true,
    "when": "Проверяй данные на сервере при каждом внешнем вводе: форма, URL, API или заголовки запроса.",
    "alternatives": "Валидация отвечает на вопрос «допустимо ли значение», экранирование — «как безопасно вывести»; это разные этапы.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-files",
    "title": "PHP: чтение и запись файлов",
    "summary": "Работай с файлами по явному пути и проверяй результат операции.",
    "code": "$contents = file_get_contents(__DIR__ . '/data.txt');\nif ($contents === false) {\n    throw new RuntimeException('Не удалось прочитать файл');\n}",
    "example": "file_put_contents(\n    __DIR__ . '/log.txt',\n    $message . PHP_EOL,\n    FILE_APPEND | LOCK_EX\n);",
    "points": [
      "Проверяй false при чтении и записи.",
      "Не используй пользовательский ввод как путь без строгой проверки.",
      "Для одновременной записи нескольких процессов применяй блокировку, если подходит задаче."
    ],
    "tags": [
      "PHP",
      "файл",
      "file_get_contents",
      "file_put_contents",
      "чтение",
      "запись"
    ],
    "url": "https://www.php.net/manual/ru/filesystem.file-access.php",
    "search": true,
    "when": "Читай и записывай файлы, когда данные действительно должны быть файловыми; проверяй ошибки и права доступа.",
    "alternatives": "Для конкурентных структурированных данных используй базу; для пользовательских загрузок проверяй размер, тип, имя и целевой путь.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-transactions",
    "title": "PHP: транзакции базы данных",
    "summary": "Объединяй несколько изменений базы в атомарную операцию.",
    "code": "$pdo->beginTransaction();\ntry {\n    updateBalance($pdo, $from, -100);\n    updateBalance($pdo, $to, 100);\n    $pdo->commit();\n} catch (Throwable $error) {\n    $pdo->rollBack();\n    throw $error;\n}",
    "example": "$pdo->beginTransaction();\n// изменить связанные записи\n$pdo->commit();",
    "points": [
      "Транзакция подтверждается commit или отменяется rollback.",
      "Откатывай транзакцию при исключении.",
      "Транзакция не заменяет подготовленные запросы и проверку бизнес-правил."
    ],
    "tags": [
      "PHP",
      "PDO",
      "транзакция",
      "commit",
      "rollback",
      "база данных"
    ],
    "url": "https://www.php.net/manual/ru/pdo.transactions.php",
    "search": true,
    "when": "Объединяй связанные записи в транзакцию, если они должны выполниться все вместе или не выполниться вовсе.",
    "alternatives": "Для независимого чтения транзакция обычно не нужна; атомарность зависит от возможностей выбранной базы и движка таблиц.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "javascript",
    "id": "js-array-map",
    "title": "JavaScript: Array.prototype.map()",
    "summary": "Трансформирует каждый элемент массива с помощью переданной функции и возвращает новый массив той же длины.",
    "code": "const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconsole.log('Удвоенные числа:', doubled);\n\nconst users = [\n  { name: 'Алексей', score: 85 },\n  { name: 'Елена', score: 92 }\n];\nconst labels = users.map((u, i) => `${i + 1}. ${u.name}: ${u.score} баллов`);\nconsole.log('Список участников:', labels);",
    "example": "// Извлечение одного поля из коллекции объектов:\nconst products = [\n  { id: 101, title: 'Ноутбук', price: 75000 },\n  { id: 102, title: 'Мышь', price: 2500 }\n];\nconst titles = products.map(p => p.title);\nconsole.log('Названия товаров:', titles);",
    "points": [
      "Всегда возвращает новый массив той же длины, не мутируя исходный.",
      "Callback-функция принимает три аргумента: (текущий_элемент, индекс, исходный_массив).",
      "Если вам не нужен возвращаемый массив, используйте forEach() вместо map()."
    ],
    "tags": [
      "JavaScript",
      "map",
      "Array.prototype.map",
      "массив",
      "трансформация",
      "функции",
      "методы"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    "search": true,
    "when": "Используйте map(), когда нужно получить преобразованный список объектов, строк или чисел без изменения начальных данных.",
    "alternatives": "Для отбора элементов используйте filter(); для вычисления единого результата (суммы, объекта) — reduce(); для простого цикла без возврата — forEach() или for..of.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/",
    "playground": {
      "html": "<div class=\"box\">\n  <h3>Демо Array.prototype.map()</h3>\n  <label>Введи числа через запятую:</label>\n  <input id=\"num-input\" value=\"3, 7, 12, 5, 20\" style=\"width:100%;padding:8px;margin:8px 0;border-radius:6px;border:1px solid #cbd5e1;\">\n  <button id=\"calc-btn\" style=\"background:#0284c7;color:#fff;border:0;padding:8px 14px;border-radius:6px;cursor:pointer;\">Умножить на 2 (map)</button>\n  <div id=\"res\" style=\"margin-top:12px;padding:12px;background:#f1f5f9;border-radius:6px;font-family:monospace;\"></div>\n</div>",
      "css": "body { font-family: system-ui, sans-serif; padding: 18px; color: #1e293b; background: #fff; }\n.box { max-width: 500px; padding: 16px; border: 1px solid #e2e8f0; border-radius: 10px; }",
      "js": "function runMap() {\n  const raw = document.getElementById('num-input').value;\n  const list = raw.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));\n  const doubled = list.map(n => n * 2);\n  document.getElementById('res').innerHTML = 'Исходный: [' + list.join(', ') + ']<br><b>Результат map(*2): [' + doubled.join(', ') + ']</b>';\n  console.log('Исходный массив:', list);\n  console.log('Результат map:', doubled);\n}\ndocument.getElementById('calc-btn').addEventListener('click', runMap);\nrunMap();"
    }
  },
  {
    "lang": "javascript",
    "id": "js-array-filter",
    "title": "JavaScript: Array.prototype.filter()",
    "summary": "Создаёт новый массив, содержащий только те элементы исходного массива, которые удовлетворяют условию предиката.",
    "code": "const numbers = [12, 5, 8, 130, 44, 3];\nconst bigNumbers = numbers.filter(n => n >= 10);\nconsole.log('Числа >= 10:', bigNumbers);\n\nconst tasks = [\n  { id: 1, title: 'Купить молоко', done: true },\n  { id: 2, title: 'Написать код', done: false },\n  { id: 3, title: 'Позвонить другу', done: false }\n];\nconst pending = tasks.filter(t => !t.done);\nconsole.log('Невыполненные задачи:', pending);",
    "example": "// Фильтрация уникальных значений или удаление пустых строк:\nconst words = ['код', '', 'дизайн', null, 'тест', undefined];\nconst clean = words.filter(Boolean);\nconsole.log('Очищенный список:', clean);",
    "points": [
      "Возвращает новый отфильтрованный массив, исходный массив остаётся нетронутым.",
      "Callback должен возвращать истинное (truthy) значение, чтобы элемент попал в результат.",
      "Если ни один элемент не прошёл проверку, возвращается пустой массив []."
    ],
    "tags": [
      "JavaScript",
      "filter",
      "Array.prototype.filter",
      "массив",
      "поиск",
      "отбор"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
    "search": true,
    "when": "Используйте filter(), когда нужно исключить элементы из списка по статусу, цене, дате или поисковому запросу.",
    "alternatives": "Если вам нужен только один первый элемент, используйте find(); для проверки факта существования хотя бы одного — some().",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/",
    "playground": {
      "html": "<div class=\"box\">\n  <h3>Демо Array.prototype.filter()</h3>\n  <input id=\"search-box\" placeholder=\"Поиск товара...\" style=\"width:100%;padding:8px;margin-bottom:10px;border-radius:6px;border:1px solid #cbd5e1;\">\n  <div id=\"catalog\"></div>\n</div>",
      "css": "body { font-family: system-ui; padding: 18px; color: #1e293b; }\n.card { padding: 8px 12px; margin: 5px 0; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; }",
      "js": "const items = ['Клавиатура механическая', 'Мышь беспроводная', 'Монитор 4K', 'Коврик для мыши', 'Наушники с шумоподавлением'];\nfunction filterItems() {\n  const q = document.getElementById('search-box').value.toLowerCase().trim();\n  const matched = items.filter(name => name.toLowerCase().includes(q));\n  document.getElementById('catalog').innerHTML = matched.map(i => '<div class=\"card\">' + i + '</div>').join('') || 'Ничего не найдено';\n  console.log('Найдено совпадений:', matched.length);\n}\ndocument.getElementById('search-box').addEventListener('input', filterItems);\nfilterItems();"
    }
  },
  {
    "lang": "javascript",
    "id": "js-array-reduce",
    "title": "JavaScript: Array.prototype.reduce()",
    "summary": "Последовательно применяет функцию-редьюсер к каждому элементу массива, сворачивая его в одно итоговое значение (число, объект, строку или массив).",
    "code": "const prices = [150, 300, 450, 100];\nconst total = prices.reduce((sum, price) => sum + price, 0);\nconsole.log('Итоговая сумма:', total);\n\n// Подсчёт количества вхождений элементов:\nconst votes = ['да', 'нет', 'да', 'да', 'воздержался'];\nconst tally = votes.reduce((acc, vote) => {\n  acc[vote] = (acc[vote] || 0) + 1;\n  return acc;\n}, {});\nconsole.log('Результаты голосования:', tally);",
    "example": "// Группировка объектов по категории:\nconst inventory = [\n  { name: 'Яблоко', type: 'фрукт' },\n  { name: 'Морковь', type: 'овощ' },\n  { name: 'Банан', type: 'фрукт' }\n];\nconst grouped = inventory.reduce((acc, item) => {\n  (acc[item.type] = acc[item.type] || []).push(item.name);\n  return acc;\n}, {});\nconsole.log('Сгруппировано:', grouped);",
    "points": [
      "Всегда передавайте начальное значение аккумулятора (второй аргумент reduce(fn, initialValue)).",
      "Callback принимает (аккумулятор, текущий_элемент, индекс, массив).",
      "Обязательно возвращайте обновленный аккумулятор из callback на каждой итерации."
    ],
    "tags": [
      "JavaScript",
      "reduce",
      "Array.prototype.reduce",
      "свертка",
      "сумма",
      "группировка"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
    "search": true,
    "when": "Используйте reduce, когда из массива элементов нужно получить единый агрегированный результат: общую стоимость корзины, хэш-таблицу или сложный вложенный объект.",
    "alternatives": "Для простого сложения чисел подходит цикл for..of; для создания нового массива той же длины предпочтительнее map().",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/",
    "playground": {
      "html": "<div class=\"box\">\n  <h3>Корзина покупок (reduce)</h3>\n  <ul id=\"cart-list\" style=\"padding-left:18px;\"></ul>\n  <div id=\"total-price\" style=\"font-size:18px;font-weight:700;color:#059669;margin-top:10px;\"></div>\n</div>",
      "css": "body { font-family: system-ui; padding: 18px; color: #1e293b; }",
      "js": "const cart = [\n  { item: 'Кофе зерновой 1кг', qty: 2, price: 1200 },\n  { item: 'Фильтры для кофе', qty: 1, price: 350 },\n  { item: 'Кружка керамическая', qty: 2, price: 450 }\n];\nconst listEl = document.getElementById('cart-list');\nlistEl.innerHTML = cart.map(c => '<li>' + c.item + ' (' + c.qty + ' шт × ' + c.price + ' ₽)</li>').join('');\nconst total = cart.reduce((acc, c) => acc + (c.qty * c.price), 0);\ndocument.getElementById('total-price').textContent = 'Итого: ' + total.toLocaleString('ru-RU') + ' ₽';\nconsole.log('Расчёт корзины завершён. Итог:', total);"
    }
  },
  {
    "lang": "javascript",
    "id": "js-array-find",
    "title": "JavaScript: Array.prototype.find() и findIndex()",
    "summary": "Находит и возвращает первый элемент массива, удовлетворяющий условию предиката. findIndex() возвращает его индекс.",
    "code": "const users = [\n  { id: 1, name: 'Мария', role: 'user' },\n  { id: 2, name: 'Игорь', role: 'admin' },\n  { id: 3, name: 'Светлана', role: 'user' }\n];\n\nconst admin = users.find(u => u.role === 'admin');\nconsole.log('Найденный админ:', admin.name);\n\nconst index = users.findIndex(u => u.id === 2);\nconsole.log('Индекс админа в массиве:', index); // 1",
    "example": "// Если элемент не найден:\nconst notFound = users.find(u => u.id === 999);\nconsole.log(notFound); // undefined\nconst notFoundIdx = users.findIndex(u => u.id === 999);\nconsole.log(notFoundIdx); // -1",
    "points": [
      "Останавливает перебор сразу, как только нашёл первый подходящий элемент (O(n) в лучшем случае быстрее filter).",
      "Если элемент не найден, find() возвращает undefined, а findIndex() возвращает -1.",
      "В стандарте ES2023 также добавлены методы findLast() и findLastIndex() для поиска с конца массива."
    ],
    "tags": [
      "JavaScript",
      "find",
      "findIndex",
      "Array.prototype.find",
      "поиск",
      "элемент"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
    "search": true,
    "when": "Используйте find(), когда вам нужен ровно один конкретный объект из коллекции (например, по ID или уникальному email).",
    "alternatives": "Для получения всех подходящих элементов используйте filter(); для проверки простого примитива в массиве — includes().",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-array-includes",
    "title": "JavaScript: Array.prototype.includes()",
    "summary": "Определяет, содержит ли массив указанный элемент, возвращая true или false.",
    "code": "const allowedRoles = ['admin', 'moderator', 'editor'];\n\nconsole.log(allowedRoles.includes('admin')); // true\nconsole.log(allowedRoles.includes('guest')); // false\n\n// Второй аргумент — индекс, с которого начинать поиск:\nconst numbers = [10, 20, 30, 40, 20];\nconsole.log(numbers.includes(20, 2)); // true (находит на индексе 4)",
    "example": "// В отличие от indexOf, корректно распознаёт NaN:\nconst arr = [1, 2, NaN];\nconsole.log(arr.includes(NaN)); // true\nconsole.log(arr.indexOf(NaN));  // -1",
    "points": [
      "Использует алгоритм SameValueZero, поэтому [NaN].includes(NaN) возвращает true.",
      "Возвращает понятный булевый тип true/false вместо числовых индексов.",
      "Для поиска объектов по свойствам используйте some() или find(), так как объекты сравниваются по ссылке."
    ],
    "tags": [
      "JavaScript",
      "includes",
      "Array.prototype.includes",
      "наличие",
      "проверка"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
    "search": true,
    "when": "Используйте includes(), когда нужно быстро проверить наличие строки или числа в списке разрешённых значений.",
    "alternatives": "Если вам нужен номер позиции элемента, используйте indexOf(); для поиска по сложному предикату — some().",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-array-some-every",
    "title": "JavaScript: Array.prototype.some() и every()",
    "summary": "some() проверяет, удовлетворяет ли хотя бы один элемент условию; every() проверяет, удовлетворяют ли условию все элементы.",
    "code": "const ages = [16, 22, 19, 15];\n\nconst hasAdults = ages.some(age => age >= 18);\nconsole.log('Есть ли совершеннолетние:', hasAdults); // true\n\nconst allAdults = ages.every(age => age >= 18);\nconsole.log('Все ли совершеннолетние:', allAdults); // false",
    "example": "// Проверка валидности полей формы:\nconst fields = [\n  { name: 'login', valid: true },\n  { name: 'email', valid: true },\n  { name: 'password', valid: false }\n];\nconst isFormValid = fields.every(f => f.valid);\nconsole.log('Форма готова к отправке?', isFormValid); // false",
    "points": [
      "some() мгновенно прекращает обход, как только встретил первое true.",
      "every() мгновенно прекращает обход, как только встретил первое false.",
      "Для пустого массива: [].some(...) возвращает false, а [].every(...) всегда возвращает true."
    ],
    "tags": [
      "JavaScript",
      "some",
      "every",
      "Array.prototype.some",
      "условие",
      "проверка"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
    "search": true,
    "when": "Используйте every() для валидации правил (все ли согласия отмечены, все ли поля заполнены) и some() для проверки наличия хотя бы одного активного элемента.",
    "alternatives": "Если нужно получить сам найденный элемент, используйте find(); для фильтрации всех подходящих — filter().",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-array-slice-splice",
    "title": "JavaScript: Array.prototype.slice() и splice()",
    "summary": "slice() извлекает копию части массива без изменения оригинала. splice() изменяет исходный массив, удаляя или вставляя элементы.",
    "code": "const fruits = ['яблоко', 'банан', 'апельсин', 'киви'];\n\n// slice(start, end) — не мутирует!\nconst citrus = fruits.slice(1, 3);\nconsole.log('Срез slice:', citrus); // ['банан', 'апельсин']\nconsole.log('Оригинал не изменился:', fruits.length); // 4\n\n// splice(start, deleteCount, ...items) — МУТИРУЕТ оригинал!\nconst removed = fruits.splice(1, 2, 'груша', 'слива');\nconsole.log('Удалённые элементы:', removed); // ['банан', 'апельсин']\nconsole.log('Массив после splice:', fruits); // ['яблоко', 'груша', 'слива', 'киви']",
    "example": "// Быстрое поверхностное клонирование массива:\nconst copy = fruits.slice();\nconsole.log('Клон массива:', copy);",
    "points": [
      "Главное отличие: slice() чистый и безопасный; splice() мутирует исходный массив на месте.",
      "В slice(start, end) конечный индекс end не включается в диапазон.",
      "В современном JS есть toSpliced() — иммутабельная версия splice, возвращающая новый массив."
    ],
    "tags": [
      "JavaScript",
      "slice",
      "splice",
      "срез",
      "удаление",
      "мутация"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
    "search": true,
    "when": "Используйте slice для пагинации списков (например, items.slice(offset, offset + limit)) и безопасного копирования. Используйте splice, когда нужно намеренно удалить элемент из массива на месте.",
    "alternatives": "Для иммутабельного удаления элемента лучше использовать filter(x => x.id !== targetId) или toSpliced().",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-array-flat",
    "title": "JavaScript: Array.prototype.flat() и flatMap()",
    "summary": "flat() выпрямляет вложенные массивы до указанной глубины. flatMap() сначала вызывает функцию маппинга, а затем выпрямляет результат на 1 уровень.",
    "code": "const nested = [1, [2, 3], [[4, 5]]];\nconsole.log(nested.flat()); // [1, 2, 3, [4, 5]]\nconsole.log(nested.flat(2)); // [1, 2, 3, 4, 5] (или flat(Infinity))\n\n// flatMap: объединение map и flat(1)\nconst sentences = ['Привет мир', 'DevShelf веб'];\nconst words = sentences.flatMap(s => s.split(' '));\nconsole.log('Слова:', words); // ['Привет', 'мир', 'DevShelf', 'веб']",
    "example": "// Удаление или размножение элементов за один проход:\nconst numbers = [1, 2, 3, 4];\nconst result = numbers.flatMap(n => (n % 2 === 0 ? [n, n * 10] : []));\nconsole.log('Только чётные с дублированием десятков:', result); // [2, 20, 4, 40]",
    "points": [
      "flat() удаляет пустые слоты (разреженные массивы).",
      "По умолчанию flat() сглаживает ровно на 1 уровень вложенности.",
      "flatMap() намного производительнее, чем последовательный вызов .map().flat()."
    ],
    "tags": [
      "JavaScript",
      "flat",
      "flatMap",
      "вложенность",
      "массив",
      "выпрямление"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat",
    "search": true,
    "when": "Используйте flat(), когда API возвращает вложенные списки или группы данных, которые нужно объединить в один плоский список.",
    "alternatives": "Для старых браузеров использовали Array.prototype.concat.apply([], arr) или рекурсивный reduce.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-array-sort",
    "title": "JavaScript: Array.prototype.sort()",
    "summary": "Сортирует элементы массива на месте и возвращает отсортированный массив. По умолчанию сортирует как строки по Unicode-кодам.",
    "code": "// ВНИМАНИЕ: Без compareFunction числа сортируются как строки!\nconst numbers = [10, 5, 40, 25, 100, 1];\nnumbers.sort(); \nconsole.log('Ошибка по умолчанию:', numbers); // [1, 10, 100, 25, 40, 5]!\n\n// Правильная сортировка чисел:\nnumbers.sort((a, b) => a - b);\nconsole.log('По возрастанию:', numbers); // [1, 5, 10, 25, 40, 100]\n\nnumbers.sort((a, b) => b - a);\nconsole.log('По убыванию:', numbers); // [100, 40, 25, 10, 5, 1]",
    "example": "// Сортировка строк на русском языке с учётом алфавита:\nconst names = ['Ярослав', 'Анна', 'Борис', 'Ёлка'];\nnames.sort((a, b) => a.localeCompare(b, 'ru'));\nconsole.log('Алфавитный порядок:', names);",
    "points": [
      "sort() мутирует исходный массив! Для создания новой копии используйте toSorted() или [...arr].sort().",
      "Для чисел функция сравнения должна возвращать: отрицательное число, если a < b; положительное, если a > b; 0 если равны.",
      "Для строк на естественных языках всегда применяйте string.localeCompare()."
    ],
    "tags": [
      "JavaScript",
      "sort",
      "Array.prototype.sort",
      "сортировка",
      "алфавит",
      "числа"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
    "search": true,
    "when": "Применяйте sort() для упорядочивания каталогов товаров по цене, рейтингу или названию от А до Я.",
    "alternatives": "Используйте modern Array.prototype.toSorted() для иммутабельной сортировки без мутации исходного состояния.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-object-methods",
    "title": "JavaScript: Object.keys(), Object.values(), Object.entries()",
    "summary": "Статические методы для получения массивов собственных перечисляемых ключей, значений или пар [ключ, значение] объекта.",
    "code": "const user = { name: 'Дмитрий', age: 28, role: 'developer' };\n\nconsole.log('Ключи:', Object.keys(user));\n// ['name', 'age', 'role']\n\nconsole.log('Значения:', Object.values(user));\n// ['Дмитрий', 28, 'developer']\n\nconsole.log('Пары [ключ, значение]:', Object.entries(user));\n// [['name', 'Дмитрий'], ['age', 28], ['role', 'developer']]",
    "example": "// Итерация по объекту и трансформация:\nfor (const [key, value] of Object.entries(user)) {\n  console.log(`${key}: ${value}`);\n}\n\n// Преобразование обратно в объект:\nconst upperKeys = Object.fromEntries(\n  Object.entries(user).map(([k, v]) => [k.toUpperCase(), v])\n);\nconsole.log(upperKeys);",
    "points": [
      "Возвращают только собственные (не унаследованные) перечисляемые свойства.",
      "Порядок ключей совпадает с порядком в цикле for..in.",
      "Object.entries() идеально сочетается с Object.fromEntries() для функциональных преобразований объектов."
    ],
    "tags": [
      "JavaScript",
      "Object.keys",
      "Object.values",
      "Object.entries",
      "объекты",
      "ключи"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",
    "search": true,
    "when": "Используйте эти методы, когда вам нужно посчитать количество свойств объекта (Object.keys(obj).length) или перебрать объект методами массивов.",
    "alternatives": "Для прямого обхода подходит цикл for (const key in obj) с проверкой Object.hasOwn(obj, key).",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-json-methods",
    "title": "JavaScript: JSON.stringify() и JSON.parse()",
    "summary": "JSON.stringify() преобразует JavaScript-значение в строку формата JSON. JSON.parse() разбирает строку JSON и восстанавливает объект.",
    "code": "const settings = { theme: 'dark', fontSize: 16, notifications: true };\n\n// Сериализация в строку с красивыми отступами (форматированием):\nconst jsonStr = JSON.stringify(settings, null, 2);\nconsole.log('Строка JSON:\\n' + jsonStr);\n\n// Десериализация обратно в объект:\nconst parsed = JSON.parse(jsonStr);\nconsole.log('Восстановленное свойство theme:', parsed.theme);",
    "example": "// Безопасный парсинг с обработкой ошибок:\nfunction safeParse(str, fallback) {\n  try {\n    return JSON.parse(str);\n  } catch (err) {\n    console.warn('Некорректный JSON:', err.message);\n    return fallback;\n  }\n}",
    "points": [
      "JSON.stringify игнорирует функции, undefined и Symbol свойства объекта.",
      "JSON.parse выбрасывает SyntaxError при некорректном синтаксисе — всегда оборачивайте в try/catch.",
      "Третий аргумент JSON.stringify(value, replacer, space) задаёт отступ для читаемого вывода."
    ],
    "tags": [
      "JavaScript",
      "JSON",
      "JSON.stringify",
      "JSON.parse",
      "сериализация",
      "данные"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON",
    "search": true,
    "when": "Используйте при сохранении настроек в localStorage, передаче данных на сервер в теле fetch-запроса и логировании сложных объектов.",
    "alternatives": "Для глубокого клонирования объектов сегодня лучше использовать нативный structuredClone() вместо трюка JSON.parse(JSON.stringify()).",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-string-methods",
    "title": "JavaScript: String: includes(), replace(), split(), trim()",
    "summary": "Популярные методы строк: includes() для поиска подстроки, replace()/replaceAll() для замены, split() для разбиения в массив, trim() для очистки пробелов.",
    "code": "const text = \"  Привет, прекрасный мир JavaScript!  \";\n\n// Очистка от внешних пробелов:\nconst clean = text.trim();\nconsole.log('Очищено:', clean);\n\n// Проверка наличия:\nconsole.log(clean.includes('мир')); // true\nconsole.log(clean.startsWith('Привет')); // true\n\n// Замена подстроки:\nconst replaced = clean.replaceAll(' ', '_');\nconsole.log('С заменой пробелов:', replaced);\n\n// Разбиение в массив:\nconst words = clean.split(' ');\nconsole.log('Слова:', words);",
    "example": "// Форматирование телефонного номера:\nconst rawPhone = \" +7 (999) 123-45-67 \";\nconst digitsOnly = rawPhone.replace(/\\D/g, '');\nconsole.log('Только цифры:', digitsOnly); // 79991234567",
    "points": [
      "Строки в JavaScript неизменяемы (immutable): все методы возвращают новую строку, не меняя оригинал.",
      "replaceAll() заменяет все вхождения, тогда как replace(string, ...) меняет только первое.",
      "includes(), startsWith() и endsWith() чувствительны к регистру символов."
    ],
    "tags": [
      "JavaScript",
      "String",
      "includes",
      "replace",
      "replaceAll",
      "split",
      "trim",
      "строки"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String",
    "search": true,
    "when": "Используйте для очистки пользовательского ввода из полей форм, форматирования текста, генерации URL-слагов и поиска ключевых слов.",
    "alternatives": "Для сложного синтаксического разбора используйте регулярные выражения RegExp и метод matchAll().",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-promise-methods",
    "title": "JavaScript: Promise.all(), Promise.allSettled(), Promise.race()",
    "summary": "Методы для координации нескольких асинхронных операций. Promise.all() ждёт завершения всех, Promise.allSettled() возвращает статусы каждого, Promise.race() возвращает результат первого выполнившегося.",
    "code": "const fetchUsers = Promise.resolve(['Ольга', 'Михаил']);\nconst fetchPosts = Promise.resolve(['Пост 1', 'Пост 2']);\n\n// Выполняются параллельно, а не последовательно:\nconst [users, posts] = await Promise.all([fetchUsers, fetchPosts]);\nconsole.log('Пользователи:', users);\nconsole.log('Посты:', posts);",
    "example": "// Promise.allSettled никогда не падает целиком, если один промис вернул ошибку:\nconst req1 = Promise.resolve('Успех сервиса A');\nconst req2 = Promise.reject(new Error('Сбой сервиса B'));\n\nconst results = await Promise.allSettled([req1, req2]);\nresults.forEach((res, i) => {\n  if (res.status === 'fulfilled') {\n    console.log(`Запрос ${i}: Успешно (${res.value})`);\n  } else {\n    console.log(`Запрос ${i}: Ошибка (${res.reason.message})`);\n  }\n});",
    "points": [
      "Promise.all() отклоняется сразу же при первой возникшей ошибке (fail-fast).",
      "Promise.allSettled() гарантированно дожидается завершения всех промисов независимо от их успешности.",
      "Параллельный вызов через Promise.all сокращает время ожидания до длительности самого долгого запроса."
    ],
    "tags": [
      "JavaScript",
      "Promise.all",
      "Promise.allSettled",
      "асинхронность",
      "промисы"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all",
    "search": true,
    "when": "Используйте Promise.all для одновременной загрузки независимых данных для страницы (профиль пользователя + уведомления + баланс).",
    "alternatives": "Если сбой второстепенного запроса не должен ломать основную страницу, используйте Promise.allSettled().",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-timers",
    "title": "JavaScript: setTimeout() и setInterval()",
    "summary": "Управляют асинхронным отложенным выполнением функций по таймеру в миллисекундах.",
    "code": "// Однократный отложенный запуск через 1 секунду:\nconst timerId = setTimeout(() => {\n  console.log('Прошла 1 секунда!');\n}, 1000);\n\n// Отмена таймера при необходимости:\n// clearTimeout(timerId);\n\nlet count = 0;\n// Периодический запуск каждые 500мс:\nconst intervalId = setInterval(() => {\n  count++;\n  console.log('Тик:', count);\n  if (count >= 3) {\n    clearInterval(intervalId);\n    console.log('Интервал остановлен.');\n  }\n}, 500);",
    "example": "// Простейший debounce (отложенный поиск при вводе):\nlet debounceTimer;\nfunction onSearchInput(query) {\n  clearTimeout(debounceTimer);\n  debounceTimer = setTimeout(() => {\n    console.log('Отправка запроса на сервер:', query);\n  }, 300);\n}",
    "points": [
      "Таймеры не гарантируют абсолютную точность до миллисекунды, так как зависят от загруженности Event Loop.",
      "Всегда очищайте интервалы и таймеры через clearTimeout() и clearInterval() при размонтировании интерфейсов во избежание утечек памяти.",
      "Для плавной графической анимации вместо setInterval используйте requestAnimationFrame()."
    ],
    "tags": [
      "JavaScript",
      "setTimeout",
      "setInterval",
      "clearTimeout",
      "таймеры",
      "асинхронность"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/API/setTimeout",
    "search": true,
    "when": "Используйте для дебаунса поисковых запросов, задержки показа всплывающих окон, обратного отсчёта и автосохранения.",
    "alternatives": "Для анимаций используйте requestAnimationFrame; для ожидания в async/await создавайте Promise-обертку new Promise(r => setTimeout(r, ms)).",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-math-methods",
    "title": "JavaScript: Math: floor(), ceil(), round(), random(), max(), min()",
    "summary": "Встроенный объект математических констант и функций для округления, вычисления экстремумов и генерации случайных чисел.",
    "code": "// Округление:\nconsole.log(Math.floor(4.9)); // 4 (всегда вниз)\nconsole.log(Math.ceil(4.1));  // 5 (всегда вверх)\nconsole.log(Math.round(4.5)); // 5 (к ближайшему целому)\n\n// Случайное число в диапазоне от min до max включительно:\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nconsole.log('Случайное число от 1 до 10:', getRandomInt(1, 10));\n\n// Поиск минимума и максимума:\nconst scores = [80, 95, 42, 99, 73];\nconsole.log('Максимум:', Math.max(...scores)); // 99\nconsole.log('Минимум:', Math.min(...scores));  // 42",
    "example": "// Ограничение числа диапазоном (clamp):\nconst clamp = (val, min, max) => Math.min(Math.max(val, min), max);\nconsole.log(clamp(120, 0, 100)); // 100\nconsole.log(clamp(-5, 0, 100));   // 0",
    "points": [
      "Math.random() возвращает псевдослучайное число с плавающей точкой в диапазоне [0, 1).",
      "Math.max() и Math.min() принимают аргументы списком через запятую, поэтому для массивов используют spread-оператор (...).",
      "Для криптографически безопасных случайных чисел используйте crypto.getRandomValues()."
    ],
    "tags": [
      "JavaScript",
      "Math",
      "Math.random",
      "Math.floor",
      "округление",
      "числа"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math",
    "search": true,
    "when": "Используйте для расчётов цен, случайной сортировки, расчёта количества страниц пагинации Math.ceil(total / perPage) и ограничения координат.",
    "alternatives": "Для форматирования валют и разрядов чисел используйте Intl.NumberFormat.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-dom-elements",
    "title": "JavaScript: document.querySelector(), createElement(), classList",
    "summary": "Фундаментальные методы манипуляции веб-страницей: поиск элементов по селекторам, динамическое создание узлов и управление классами оформления.",
    "code": "// 1. Поиск элемента:\nconst title = document.querySelector('h1');\nconst buttons = document.querySelectorAll('.btn');\n\n// 2. Создание нового узла:\nconst card = document.createElement('div');\ncard.textContent = 'Новая карточка создана динамически!';\n\n// 3. Управление классами:\ncard.classList.add('card', 'highlight');\ncard.classList.toggle('active');\nconsole.log('Есть ли класс active?', card.classList.contains('active'));\n\n// 4. Вставка в документ:\ndocument.body.appendChild(card);",
    "example": "// Удаление элемента:\nconst oldNotice = document.querySelector('.notice');\nif (oldNotice) oldNotice.remove();",
    "points": [
      "querySelector возвращает первый найденный элемент или null; querySelectorAll возвращает NodeList.",
      "classList.toggle(className, forceBool) позволяет легко переключать видимость и темы.",
      "Используйте textContent для текста вместо innerHTML для защиты от внедрения вредоносного скрипта (XSS)."
    ],
    "tags": [
      "JavaScript",
      "DOM",
      "querySelector",
      "createElement",
      "classList",
      "элементы"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Document/querySelector",
    "search": true,
    "when": "Используйте для построения интерактивных интерфейсов, добавления карточек в список, модальных окон и переключения стилей по действиям пользователя.",
    "alternatives": "Для массовых вставок в DOM используйте DocumentFragment во избежание лишних перерисовок (reflow).",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-localstorage-api",
    "title": "JavaScript: localStorage и sessionStorage",
    "summary": "Веб-хранилища ключ-значение в браузере. localStorage сохраняет данные даже после перезапуска браузера; sessionStorage очищается при закрытии вкладки.",
    "code": "// Сохранение примитива:\nlocalStorage.setItem('devshelf-theme', 'dark');\n\n// Сохранение объекта через JSON:\nconst userProfile = { name: 'Екатерина', role: 'developer' };\nlocalStorage.setItem('user', JSON.stringify(userProfile));\n\n// Чтение данных:\nconst theme = localStorage.getItem('devshelf-theme');\nconsole.log('Текущая тема:', theme);\n\nconst savedUser = JSON.parse(localStorage.getItem('user') || '{}');\nconsole.log('Имя пользователя:', savedUser.name);\n\n// Удаление:\n// localStorage.removeItem('user');\n// localStorage.clear(); // очистить всё",
    "example": "// Безопасная функция чтения с обработкой приватного режима браузера:\nfunction loadSetting(key, fallback) {\n  try {\n    return JSON.parse(localStorage.getItem(key)) ?? fallback;\n  } catch {\n    return fallback;\n  }\n}",
    "points": [
      "Хранит только строки (String). Сложные объекты и массивы нужно сериализовать через JSON.stringify().",
      "Объём обычно ограничен ~5 МБ на домен; данные хранятся синхронно.",
      "Никогда не храните в localStorage конфиденциальные пароли или токены доступа из-за риска XSS-кражи."
    ],
    "tags": [
      "JavaScript",
      "localStorage",
      "sessionStorage",
      "хранилище",
      "память",
      "куки"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage",
    "search": true,
    "when": "Используйте для сохранения пользовательских тем (светлая/тёмная), состояния сворачиваемых меню, корзины покупок и черновиков полей формы.",
    "alternatives": "Для больших объёмов структурированных данных и файлов используйте IndexedDB; для сессионных меток сервера — HTTP-only cookies.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-fetch-method",
    "title": "JavaScript: Fetch API и асинхронные HTTP-запросы",
    "summary": "Современный стандарт для выполнения сетевых HTTP-запросов (GET, POST, PUT, DELETE) и работы с REST API.",
    "code": "async function loadData() {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');\n    \n    // ВАЖНО: fetch не отклоняет промис при HTTP-ошибках 404 или 500!\n    if (!response.ok) {\n      throw new Error(`HTTP ошибка: ${response.status}`);\n    }\n    \n    const data = await response.json();\n    console.log('Полученные данные:', data);\n  } catch (error) {\n    console.error('Сетевой сбой:', error.message);\n  }\n}\nloadData();",
    "example": "// Отправка POST-запроса с JSON:\nasync function createPost(newPost) {\n  const res = await fetch('/api/posts', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(newPost)\n  });\n  return res.json();\n}",
    "points": [
      "Всегда проверяйте response.ok (возвращает true для статусов 200–299).",
      "Для отмены висящего сетевого запроса используйте AbortController.",
      "Тело ответа можно прочитать только один раз (методами .json(), .text(), .blob())."
    ],
    "tags": [
      "JavaScript",
      "fetch",
      "HTTP",
      "REST API",
      "запросы",
      "JSON"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch",
    "search": true,
    "when": "Используйте для загрузки данных из внешних API, отправки форм без перезагрузки страницы и взаимодействия с бэкендом.",
    "alternatives": "Для автоматической отмены и перехватчиков (interceptors) иногда используют сторонние библиотеки вроде axios, но нативный fetch поддерживается повсеместно без зависимостей.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "php",
    "id": "php-array-map",
    "title": "PHP: array_map()",
    "summary": "Применяет функцию обратного вызова ко всем элементам указанных массивов и возвращает новый массив полученных значений.",
    "code": "<?php\n$numbers = [1, 2, 3, 4, 5];\n$squares = array_map(fn($n) => $n * $n, $numbers);\nprint_r($squares);\n// Array ( [0] => 1 [1] => 4 [2] => 9 [3] => 16 [4] => 25 )\n\n$names = ['  Иван ', ' АННА', 'Сергей  '];\n$cleaned = array_map('trim', $names);\nprint_r($cleaned);\n?>",
    "example": "<?php\n// Одновременный обход нескольких массивов:\n$keys = ['id', 'name', 'role'];\n$vals = [101, 'Дмитрий', 'Админ'];\n$combined = array_map(fn($k, $v) => \"$k = $v\", $keys, $vals);\nprint_r($combined);\n?>",
    "points": [
      "Первым аргументом передаётся callback, а затем массив(ы) — в отличие от array_filter!",
      "Не изменяет исходный массив, а возвращает новый.",
      "Ключи исходного массива не сохраняются, если передано несколько массивов."
    ],
    "tags": [
      "PHP",
      "array_map",
      "массивы",
      "функции",
      "преобразование"
    ],
    "url": "https://www.php.net/manual/ru/function.array-map.php",
    "search": true,
    "when": "Применяйте array_map для форматирования списка строк, очистки входных данных или извлечения расчетных значений из массива.",
    "alternatives": "Если нужно отфильтровать элементы, используйте array_filter(); для простого обхода без создания массива — foreach.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-array-filter",
    "title": "PHP: array_filter()",
    "summary": "Фильтрует элементы массива с помощью callback-функции. Если функция не передана, удаляет все пустые и ложные (falsey) значения.",
    "code": "<?php\n$scores = [85, 42, 90, 58, 100, 31];\n$passed = array_filter($scores, fn($score) => $score >= 60);\nprint_r($passed);\n// Сохраняются исходные ключи!\n\n// Очистка массива от null, false и пустых строк без callback:\n$raw = ['яблоко', '', null, 'банан', 0, false, 'груша'];\n$clean = array_filter($raw);\nprint_r($clean);\n?>",
    "example": "<?php\n// Фильтрация по ключам (ARRAY_FILTER_USE_KEY):\n$params = ['page' => 1, 'sort' => 'desc', '_token' => 'abc123'];\n$publicParams = array_filter(\n    $params, \n    fn($k) => !str_starts_with($k, '_'), \n    ARRAY_FILTER_USE_KEY\n);\nprint_r($publicParams);\n?>",
    "points": [
      "Внимание на порядок аргументов: первым идёт $array, вторым $callback (наоборот по сравнению с array_map).",
      "array_filter сохраняет ключи элементов; чтобы сбросить ключи в 0, 1, 2..., вызовите array_values($filtered).",
      "Третий параметр позволяет передать флаг ARRAY_FILTER_USE_KEY или ARRAY_FILTER_USE_BOTH."
    ],
    "tags": [
      "PHP",
      "array_filter",
      "массивы",
      "фильтрация",
      "поиск"
    ],
    "url": "https://www.php.net/manual/ru/function.array-filter.php",
    "search": true,
    "when": "Используйте для отсеивания неактивных записей, удаления пустых полей формы и выборки нужных элементов коллекции.",
    "alternatives": "Для поиска ровно одного элемента проще использовать перебор через foreach с break.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-array-merge",
    "title": "PHP: array_merge() и оператор +",
    "summary": "Сливает один или несколько массивов в один. Числовые ключи перенумеровываются; строковые ключи перезаписываются последующими массивами.",
    "code": "<?php\n$defaults = ['theme' => 'light', 'lang' => 'ru', 'perPage' => 20];\n$custom   = ['theme' => 'dark', 'perPage' => 50];\n\n// Слияние настроек:\n$settings = array_merge($defaults, $custom);\nprint_r($settings);\n// theme => dark, lang => ru, perPage => 50\n\n$list1 = ['красный', 'синий'];\n$list2 = ['зелёный', 'жёлтый'];\n$allColors = array_merge($list1, $list2);\nprint_r($allColors); // 4 элемента с индексами 0..3\n?>",
    "example": "<?php\n// Оператор объединения массивов (+) НЕ перезаписывает существующие ключи:\n$base = ['a' => 1, 'b' => 2];\n$add  = ['b' => 99, 'c' => 3];\n$result = $base + $add; // 'b' останется равным 2!\nprint_r($result);\n?>",
    "points": [
      "При array_merge строковые ключи с одинаковыми именами заменяются значениями из более поздних массивов.",
      "Числовые ключи не перезаписываются, а добавляются в конец и перенумеровываются с нуля.",
      "Начиная с PHP 7.4 доступна распаковка массивов: [...$list1, ...$list2]."
    ],
    "tags": [
      "PHP",
      "array_merge",
      "массивы",
      "слияние",
      "объединение"
    ],
    "url": "https://www.php.net/manual/ru/function.array-merge.php",
    "search": true,
    "when": "Используйте для объединения конфигураций по умолчанию с пользовательскими настройками и склеивания списков записей.",
    "alternatives": "Для рекурсивного слияния многомерных массивов используйте array_merge_recursive().",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-in-array",
    "title": "PHP: in_array()",
    "summary": "Проверяет, присутствует ли указанное значение в массиве. Всегда включайте строгий режим (strict = true) во избежание ложных совпадений.",
    "code": "<?php\n$allowedRoles = ['admin', 'manager', 'editor'];\n\nif (in_array('admin', $allowedRoles, true)) {\n    echo \"Доступ разрешён!\";\n}\n\n// ОПАСНОСТЬ: без третьего параметра true PHP может привести типы:\n$items = ['apple', 'banana', 'orange'];\n// Без строгости 0 == 'apple' в старых версиях PHP!\nvar_dump(in_array(0, $items, false)); // может быть true без строгости!\nvar_dump(in_array(0, $items, true));  // гарантированно false\n?>",
    "example": "<?php\n// Проверка допустимости загружаемого расширения файла:\n$extension = strtolower(pathinfo('photo.JPG', PATHINFO_EXTENSION));\n$validExtensions = ['jpg', 'jpeg', 'png', 'webp'];\n\nif (in_array($extension, $validExtensions, true)) {\n    echo \"Формат допустим для загрузки.\";\n}\n?>",
    "points": [
      "ВСЕГДА передавайте третий аргумент true (строгое сравнение с учётом типов ===).",
      "Поиск регистрозависимый ('Admin' !== 'admin').",
      "Для частых поисков в огромных массивах быстрее использовать isset($hash[$key]) или array_key_exists."
    ],
    "tags": [
      "PHP",
      "in_array",
      "массивы",
      "проверка",
      "поиск"
    ],
    "url": "https://www.php.net/manual/ru/function.in-array.php",
    "search": true,
    "when": "Используйте для проверки ролей, разрешённых HTTP-методов, поддерживаемых языков и форматов файлов.",
    "alternatives": "Если вам нужна позиция элемента в массиве, используйте array_search(); для проверки наличия ключа — array_key_exists().",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-array-keys-values",
    "title": "PHP: array_keys() и array_values()",
    "summary": "array_keys() возвращает массив всех ключей или подмножество ключей массива. array_values() возвращает все значения с перенумерацией индексов.",
    "code": "<?php\n$user = [\n    'id' => 42,\n    'login' => 'alex',\n    'status' => 'active'\n];\n\n$keys = array_keys($user);\nprint_r($keys);\n// ['id', 'login', 'status']\n\n$values = array_values($user);\nprint_r($values);\n// [42, 'alex', 'active']",
    "example": "<?php\n// Сброс разреженных ключей после фильтрации:\n$items = [1 => 'первый', 4 => 'четвертый', 9 => 'девятый'];\n$reindexed = array_values($items);\nprint_r($reindexed);\n// [0 => 'первый', 1 => 'четвертый', 2 => 'девятый']\n?>",
    "points": [
      "array_values() идеально подходит для преобразования ассоциативного массива в последовательный список для json_encode (в виде [] вместо {}).",
      "array_keys() принимает необязательный параметр $filter_value для поиска всех ключей с заданным значением.",
      "Работают как с ассоциативными, так и с численными массивами."
    ],
    "tags": [
      "PHP",
      "array_keys",
      "array_values",
      "массивы",
      "ключи",
      "значения"
    ],
    "url": "https://www.php.net/manual/ru/function.array-keys.php",
    "search": true,
    "when": "Применяйте array_values перед отправкой ответа в JSON, когда фронтенд ожидает обычный массив, а не объект.",
    "alternatives": "Для одновременного обхода пар ключ-значение используйте стандартный foreach ($array as $key => $value).",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-array-column",
    "title": "PHP: array_column()",
    "summary": "Возвращает массив значений из одного столбца переданного многомерного массива или массива объектов.",
    "code": "<?php\n$users = [\n    ['id' => 101, 'name' => 'Михаил', 'role' => 'admin'],\n    ['id' => 102, 'name' => 'Анна',   'role' => 'user'],\n    ['id' => 103, 'name' => 'Олег',   'role' => 'user'],\n];\n\n// Извлечение всех имён:\n$names = array_column($users, 'name');\nprint_r($names);\n// ['Михаил', 'Анна', 'Олег']\n\n// Извлечение имён с индексацией по их ID:\n$namesById = array_column($users, 'name', 'id');\nprint_r($namesById);\n// [101 => 'Михаил', 102 => 'Анна', 103 => 'Олег']\n?>",
    "example": "<?php\n// Быстрая проверка наличия ID в списке записей базы данных:\n$ids = array_column($users, 'id');\nif (in_array(102, $ids, true)) {\n    echo \"Пользователь с ID 102 существует.\";\n}\n?>",
    "points": [
      "Третий аргумент index_key позволяет сделать любое поле массива новыми ключами результирующего массива.",
      "Работает как с ассоциативными массивами строк из БД, так и с публичными свойствами объектов.",
      "Если передать null вторым аргументом, элементы сохранятся целиком, но будут переиндексированы по ключу column_key."
    ],
    "tags": [
      "PHP",
      "array_column",
      "база данных",
      "столбцы",
      "массивы"
    ],
    "url": "https://www.php.net/manual/ru/function.array-column.php",
    "search": true,
    "when": "Незаменимая функция при работе с результатами запросов PDO: извлечение списка ID, построение словарей {id: record}.",
    "alternatives": "Без этой функции пришлось бы писать цикл foreach или array_map(fn($u) => $u['field'], $items).",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-count",
    "title": "PHP: count()",
    "summary": "Подсчитывает количество элементов в массиве или в объекте, реализующем интерфейс Countable.",
    "code": "<?php\n$fruits = ['яблоко', 'апельсин', 'банан'];\necho \"Количество фруктов: \" . count($fruits); // 3\n\n// Проверка на пустоту:\nif (count($fruits) === 0) {\n    echo \"Корзина пуста\";\n}\n\n// Рекурсивный подсчёт всех вложенных элементов:\n$tree = [\n    'фрукты' => ['яблоко', 'груша'],\n    'овощи'  => ['томат', 'огурец']\n];\necho \"Рекурсивно: \" . count($tree, COUNT_RECURSIVE); // 6\n?>",
    "example": "<?php\n// Пагинация:\n$totalItems = count($allRecords);\n$perPage = 15;\n$totalPages = ceil($totalItems / $perPage);\n?>",
    "points": [
      "В PHP 8+ передача в count() не-массива или не-Countable объекта вызывает ошибку TypeError.",
      "Для простой проверки «пустой ли массив» быстрее и читаемее использовать empty($array).",
      "Функция sizeof() является полным синонимом count()."
    ],
    "tags": [
      "PHP",
      "count",
      "sizeof",
      "массивы",
      "длина",
      "количество"
    ],
    "url": "https://www.php.net/manual/ru/function.count.php",
    "search": true,
    "when": "Используйте для расчёта количества страниц, проверки размера корзины и ограничения лимитов загрузки.",
    "alternatives": "Для проверки пустоты массива используйте empty($arr); для строк используйте strlen() или mb_strlen().",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-explode-implode",
    "title": "PHP: explode() и implode()",
    "summary": "explode() разбивает строку на подстроки по разделителю и возвращает массив. implode() объединяет элементы массива в единую строку.",
    "code": "<?php\n$tagsString = \"html, css, javascript, php\";\n\n// Разделение строки в массив:\n$tags = explode(', ', $tagsString);\nprint_r($tags);\n// ['html', 'css', 'javascript', 'php']\n\n// Сборка массива обратно в строку:\n$formatted = implode(' | ', $tags);\necho $formatted;\n// html | css | javascript | php\n?>",
    "example": "<?php\n// Ограничение количества частей:\n$path = \"user/profile/settings/avatar\";\n$parts = explode('/', $path, 2);\nprint_r($parts);\n// ['user', 'profile/settings/avatar']\n?>",
    "points": [
      "Разделитель в explode() не может быть пустой строкой '' (в этом случае используйте str_split или mb_str_split).",
      "В implode() порядок аргументов implode($separator, $array) стандартизирован.",
      "join() является полным синонимом implode()."
    ],
    "tags": [
      "PHP",
      "explode",
      "implode",
      "join",
      "строки",
      "массивы"
    ],
    "url": "https://www.php.net/manual/ru/function.explode.php",
    "search": true,
    "when": "Используйте для разбора CSV-файлов, обработки тегов, разбиения путей URL и генерации SQL-списков IN (...).",
    "alternatives": "Для сложных регулярных разделителей применяйте preg_split().",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-str-contains",
    "title": "PHP: str_contains(), str_starts_with(), str_ends_with()",
    "summary": "Современные функции (PHP 8.0+) для понятной и безопасной проверки наличия, начала или окончания подстроки в строке.",
    "code": "<?php\n$url = \"https://developer.mozilla.org/ru/docs\";\n\n// Проверка наличия:\nif (str_contains($url, 'mozilla.org')) {\n    echo \"Это ссылка на MDN!\\n\";\n}\n\n// Проверка протокола:\nif (str_starts_with($url, 'https://')) {\n    echo \"Защищённое HTTPS-соединение\\n\";\n}\n\n// Проверка суффикса/расширения:\n$file = \"archive.tar.gz\";\nif (str_ends_with($file, '.gz')) {\n    echo \"Сжатый архив\\n\";\n}\n?>",
    "example": "<?php\n// Проверка почтового домена:\n$email = \"student@university.edu\";\nif (str_ends_with($email, '.edu')) {\n    echo \"Предоставлена академическая скидка.\";\n}\n?>",
    "points": [
      "Возвращают чистый булев тип true или false.",
      "Регистрозависимы ('HTTPS' !== 'https').",
      "Избавили от частой ошибки с strpos($str, $sub) !== false, когда индекс 0 приводился к false."
    ],
    "tags": [
      "PHP",
      "str_contains",
      "str_starts_with",
      "str_ends_with",
      "PHP 8",
      "строки"
    ],
    "url": "https://www.php.net/manual/ru/function.str-contains.php",
    "search": true,
    "when": "Используйте для валидации ссылок, проверки прав доступа по путям, анализа расширений файлов и поиска ключевых слов.",
    "alternatives": "Для регистронезависимого поиска используйте stripos() !== false или mb_stripos().",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-str-replace",
    "title": "PHP: str_replace() и str_ireplace()",
    "summary": "Заменяет все вхождения строки поиска на строку замены. Поддерживает замену как единичных строк, так и массивов.",
    "code": "<?php\n$text = \"Привет, %username%! Добро пожаловать на %site%.\";\n\n// Замена нескольких плейсхолдеров за один вызов:\n$search  = ['%username%', '%site%'];\n$replace = ['Александр', 'DevShelf'];\n\n$message = str_replace($search, $replace, $text);\necho $message;\n// Привет, Александр! Добро пожаловать на DevShelf.\n\n// Подсчёт количества произведённых замен:\n$clean = str_replace('badword', '***', 'Это badword и снова badword', $count);\necho \"\\nСделано замен: $count\"; // 2\n?>",
    "example": "<?php\n// Очистка номера телефона от лишних символов:\n$phone = \"+7 (999) 123-45-67\";\n$cleanPhone = str_replace([' ', '(', ')', '-'], '', $phone);\necho $cleanPhone; // +79991234567\n?>",
    "points": [
      "str_replace() чувствительна к регистру; str_ireplace() производит замену без учёта регистра.",
      "Безопасна для бинарных данных и UTF-8 строк.",
      "Четвёртый необязательный аргумент &$count принимает переменную, куда запишется число замен."
    ],
    "tags": [
      "PHP",
      "str_replace",
      "str_ireplace",
      "строки",
      "замена",
      "шаблоны"
    ],
    "url": "https://www.php.net/manual/ru/function.str-replace.php",
    "search": true,
    "when": "Применяйте для простой шаблонизации, нормализации входных строк и удаления запрещённых символов.",
    "alternatives": "Для поиска и замены по шаблонам с шаблонами регулярных выражений используйте preg_replace().",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-mb-string",
    "title": "PHP: mb_strlen() и mb_substr()",
    "summary": "Многобайтовые строковые функции для корректной работы с кириллицей и кодировкой UTF-8 без искажения символов.",
    "code": "<?php\n$ru = \"Привет!\";\n\n// Обычный strlen считает байты (в UTF-8 русская буква = 2 байта):\necho \"strlen (байты): \" . strlen($ru); // 13 байт (6 букв * 2 + 1 знак)\n\n// mb_strlen считает реальные символы:\necho \"\\nmb_strlen (символы): \" . mb_strlen($ru, 'UTF-8'); // 7 символов\n\n// Правильное усечение текста:\n$long = \"Длинная статья о веб-разработке\";\n$preview = mb_substr($long, 0, 15, 'UTF-8') . '...';\necho \"\\nПревью: \" . $preview;\n// Превью: Длинная статья...\n?>",
    "example": "<?php\n// Поиск позиции подстроки в русском тексте:\n$title = \"Курс по JavaScript и PHP\";\n$pos = mb_strpos($title, \"JavaScript\", 0, 'UTF-8');\necho \"Начало с позиции: \" . $pos; // 8\n?>",
    "points": [
      "Никогда не используйте обычные substr() и strlen() для русского текста — они могут разрезать 2-байтовый символ пополам, породив символ битой кодировки ().",
      "Всегда явно указывайте кодировку 'UTF-8' или настройте mb_internal_encoding('UTF-8').",
      "Требует расширения ext-mbstring, включённого по умолчанию на большинстве хостингов."
    ],
    "tags": [
      "PHP",
      "mb_strlen",
      "mb_substr",
      "UTF-8",
      "русский язык",
      "кириллица"
    ],
    "url": "https://www.php.net/manual/ru/book.mbstring.php",
    "search": true,
    "when": "Обязательно используйте для любого русского текста, валидации длины логина/пароля, обрезки превью статей и поиска подстрок.",
    "alternatives": "В PHP 8.4+ появляется класс \\Pdo и расширенные функции grapheme_*, но mbstring остаётся фундаментом.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-json-encode-decode",
    "title": "PHP: json_encode() и json_decode()",
    "summary": "json_encode() преобразует значение в формат JSON. json_decode() декодирует строку JSON в массив или объект PHP.",
    "code": "<?php\n$data = [\n    'status' => 'success',\n    'code' => 200,\n    'message' => 'Данные успешно обновлены',\n    'items' => ['HTML', 'CSS', 'JS']\n];\n\n// Кодирование с флагами UTF-8 и читаемого форматирования:\n$json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);\necho $json;\n\n// Декодирование: второй аргумент true возвращает ассоциативный массив:\n$decodedArray = json_decode($json, true);\necho \"\\nСтатус: \" . $decodedArray['status'];\n?>",
    "example": "<?php\n// Безопасное чтение JSON с флагом обработки ошибок (PHP 7.3+):\ntry {\n    $parsed = json_decode('{\"invalid\": json', true, 512, JSON_THROW_ON_ERROR);\n} catch (JsonException $e) {\n    echo \"Ошибка парсинга JSON: \" . $e->getMessage();\n}\n?>",
    "points": [
      "Всегда передавайте флаг JSON_UNESCAPED_UNICODE, иначе кириллица запишется как \\u041f\\u0440\\u0438\\u0432\\u0435\\u0442.",
      "Второй параметр json_decode($json, true) критически важен: true вернёт ассоциативный массив, а false (по умолчанию) — объект stdClass.",
      "Флаг JSON_THROW_ON_ERROR вызывает исключение JsonException вместо молчаливого возврата null."
    ],
    "tags": [
      "PHP",
      "json_encode",
      "json_decode",
      "JSON",
      "API",
      "сериализация"
    ],
    "url": "https://www.php.net/manual/ru/function.json-encode.php",
    "search": true,
    "when": "Используйте для создания REST API ответов, сохранения конфигураций и передачи данных между JavaScript и PHP.",
    "alternatives": "Для сохранения бинарных состояний PHP объектов есть serialize()/unserialize(), но JSON более безопасен и переносим.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-password-hash",
    "title": "PHP: password_hash() и password_verify()",
    "summary": "Стандарт безопасного криптографического хеширования паролей в PHP с автоматической генерацией надёжной соли (Bcrypt / Argon2id).",
    "code": "<?php\n$userPassword = \"SuperSecretPassword123!\";\n\n// 1. Создание хеша при регистрации (Bcrypt по умолчанию):\n$hash = password_hash($userPassword, PASSWORD_DEFAULT);\necho \"Хеш для базы данных:\\n\" . $hash . \"\\n\\n\";\n\n// 2. Проверка пароля при входе (логине):\n$inputPassword = \"SuperSecretPassword123!\";\n\nif (password_verify($inputPassword, $hash)) {\n    echo \"Пароль верный, добро пожаловать!\";\n} else {\n    echo \"Неверный пароль.\";\n}\n?>",
    "example": "<?php\n// Проверка необходимости обновления стоимости хеша:\nif (password_needs_rehash($hash, PASSWORD_DEFAULT)) {\n    $newHash = password_hash($userPassword, PASSWORD_DEFAULT);\n    // сохранить $newHash в базу данных\n}\n?>",
    "points": [
      "НИКОГДА не используйте устаревшие md5() или sha1() для паролей!",
      "password_hash() сам генерирует криптографически стойкую соль и включает её прямо в строку хеша.",
      "password_verify() защищён от атак по времени (timing attacks)."
    ],
    "tags": [
      "PHP",
      "password_hash",
      "password_verify",
      "пароли",
      "безопасность",
      "хеширование"
    ],
    "url": "https://www.php.net/manual/ru/function.password-hash.php",
    "search": true,
    "when": "Обязательно используйте во всех формах регистрации, аутентификации и смены паролей пользователей.",
    "alternatives": "Для хеширования файлов или неконфиденциальных данных используйте hash('sha256', $data).",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-htmlspecialchars",
    "title": "PHP: htmlspecialchars()",
    "summary": "Преобразует специальные символы HTML (&, <, >, \", ') в соответствующие HTML-сущности для защиты от XSS-атак.",
    "code": "<?php\n$userInput = '<script>alert(\"Взлом!\");</script>';\n\n// Опасный вывод (может выполнить вредоносный JS):\n// echo $userInput;\n\n// Безопасный экранированный вывод:\n$safe = htmlspecialchars($userInput, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');\necho $safe;\n// &lt;script&gt;alert(&quot;Взлом!&quot;);&lt;/script&gt;\n?>",
    "example": "<?php\n// Вывод имени пользователя внутри атрибута формы:\n$name = 'ООО \"Вектор\"';\n?>\n<input type=\"text\" name=\"company\" value=\"<?= htmlspecialchars($name, ENT_QUOTES, 'UTF-8') ?>\">",
    "points": [
      "Всегда передавайте флаг ENT_QUOTES, чтобы экранировались как двойные, так и одинарные кавычки.",
      "Всегда указывайте кодировку 'UTF-8'.",
      "Экранируйте данные именно в момент вывода в HTML-шаблон, а не при сохранении в базу данных."
    ],
    "tags": [
      "PHP",
      "htmlspecialchars",
      "XSS",
      "безопасность",
      "экранирование"
    ],
    "url": "https://www.php.net/manual/ru/function.htmlspecialchars.php",
    "search": true,
    "when": "Применяйте при любом выводе данных пользователя, URL, комментариев и отзывов на HTML-страницу.",
    "alternatives": "Современные шаблонизаторы вроде Twig или Blade выполняют экранирование автоматически ({{ var }}).",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-file-ops",
    "title": "PHP: file_get_contents() и file_put_contents()",
    "summary": "Простые и эффективные функции для чтения всего файла в строку и записи данных в файл за одну операцию.",
    "code": "<?php\n$filename = \"storage/log.txt\";\n\n// Запись строки в файл (с добавлением в конец, флаг FILE_APPEND):\n$logMessage = \"[\" . date('Y-m-d H:i:s') . \"] Действие выполнено\\n\";\nfile_put_contents($filename, $logMessage, FILE_APPEND | LOCK_EX);\n\n// Чтение всего содержимого файла:\nif (file_exists($filename)) {\n    $content = file_get_contents($filename);\n    echo \"Содержимое файла:\\n\" . $content;\n}\n?>",
    "example": "<?php\n// Загрузка данных по HTTP:\n$html = file_get_contents('https://example.com');\n?>",
    "points": [
      "Флаг LOCK_EX в file_put_contents обеспечивает эксклюзивную блокировку файла от одновременных записей.",
      "Для чтения файлов огромного размера (сотни МБ) используйте потоковые fopen() и fgets() вместо загрузки всего файла в память.",
      "Всегда проверяйте существование файла через file_exists() перед чтением."
    ],
    "tags": [
      "PHP",
      "file_get_contents",
      "file_put_contents",
      "файлы",
      "чтение",
      "запись"
    ],
    "url": "https://www.php.net/manual/ru/function.file-get-contents.php",
    "search": true,
    "when": "Используйте для простых текстовых логов, сохранения JSON-кэша на диске и чтения шаблонов.",
    "alternatives": "Для построчного чтения больших CSV или логов используйте SplFileObject или fopen.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-filter-var",
    "title": "PHP: filter_var()",
    "summary": "Фильтрует и проверяет переменную с помощью фильтров валидации (email, URL, IP, целые числа) или очистки.",
    "code": "<?php\n$email = \"user@example.com\";\nif (filter_var($email, FILTER_VALIDATE_EMAIL)) {\n    echo \"Email корректен!\\n\";\n}\n\n$url = \"https://developer.mozilla.org\";\nif (filter_var($url, FILTER_VALIDATE_URL)) {\n    echo \"URL адрес корректен!\\n\";\n}\n\n// Проверка числа с диапазоном:\n$age = \"25\";\n$validAge = filter_var($age, FILTER_VALIDATE_INT, [\n    'options' => ['min_range' => 18, 'max_range' => 100]\n]);\nvar_dump($validAge); // int(25)\n?>",
    "example": "<?php\n// Очистка целого числа из строки:\n$raw = \"Количество: 42 шт\";\n$number = filter_var($raw, FILTER_SANITIZE_NUMBER_INT);\necho \"Число: \" . $number; // 42\n?>",
    "points": [
      "Использует встроенные регулярные правила стандарта RFC для email и URL.",
      "При неудачной валидации возвращает false (или null с флагом FILTER_NULL_ON_FAILURE).",
      "Позволяет передавать опции проверки (диапазоны чисел, флаги протоколов)."
    ],
    "tags": [
      "PHP",
      "filter_var",
      "валидация",
      "email",
      "url",
      "проверка"
    ],
    "url": "https://www.php.net/manual/ru/function.filter-var.php",
    "search": true,
    "when": "Используйте при проверке почты, веб-адресов, номеров страниц и IP-адресов клиентов.",
    "alternatives": "Для получения и одновременной валидации из суперглобальных массивов используйте filter_input(INPUT_POST, 'email', ...).",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-date-time",
    "title": "PHP: DateTimeImmutable и date()",
    "summary": "Современная работа с датами, временем и часовыми поясами. Класс DateTimeImmutable гарантирует неизменяемость объектов времени.",
    "code": "<?php\n// Простой вывод текущей даты:\necho date('d.m.Y H:i:s') . \"\\n\"; // например: 23.10.2026 14:30:00\n\n// Создание неизменяемого объекта даты:\n$now = new DateTimeImmutable('now', new DateTimeZone('Europe/Moscow'));\necho \"Москва: \" . $now->format('Y-m-d H:i:s') . \"\\n\";\n\n// Добавление интервала времени:\n$nextWeek = $now->modify('+7 days');\necho \"Через неделю: \" . $nextWeek->format('d.m.Y') . \"\\n\";\n// $now при этом остаётся неизменным!\n?>",
    "example": "<?php\n// Расчёт разницы между двумя датами:\n$start = new DateTimeImmutable('2026-01-01');\n$end   = new DateTimeImmutable('2026-10-23');\n$diff  = $start->diff($end);\necho \"Прошло дней: \" . $diff->days;\n?>",
    "points": [
      "Всегда предпочитайте DateTimeImmutable старому DateTime во избежание случайных мутаций даты в других частях программы.",
      "Всегда явно задавайте timezone (date_default_timezone_set или объект DateTimeZone).",
      "Строка формата: Y (4 цифры года), m (месяц 01-12), d (день 01-31), H (часы 00-23), i (минуты), s (секунды)."
    ],
    "tags": [
      "PHP",
      "date",
      "DateTimeImmutable",
      "время",
      "даты",
      "календарь"
    ],
    "url": "https://www.php.net/manual/ru/class.datetimeimmutable.php",
    "search": true,
    "when": "Используйте для расчета сроков подписок, отображения времени публикации постов и валидации сроков действия акций.",
    "alternatives": "Для простых меток времени без часовых поясов подходит time() и strtotime().",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "html",
    "id": "html-dialog",
    "title": "HTML: Тег <dialog> (модальные окна)",
    "summary": "Нативный элемент HTML5 для создания модальных окон, диалогов и всплывающих панелей с автоматической блокировкой фона и доступностью.",
    "code": "<dialog id=\"my-modal\">\n  <h2>Заголовок окна</h2>\n  <p>Это нативное модальное окно без сторонних библиотек!</p>\n  <button id=\"close-btn\" type=\"button\">Закрыть</button>\n</dialog>\n\n<button id=\"open-btn\" type=\"button\">Открыть модальное окно</button>",
    "example": "<script>\nconst modal = document.querySelector('#my-modal');\ndocument.querySelector('#open-btn').addEventListener('click', () => modal.showModal());\ndocument.querySelector('#close-btn').addEventListener('click', () => modal.close());\n</script>",
    "points": [
      "Метод showModal() открывает диалог поверх страницы с затемнением ::backdrop и фокусом внутри.",
      "Нажатие клавиши Escape закрывает модальное окно автоматически из коробки.",
      "Форма внутри с method=\"dialog\" автоматически закрывает диалог при отправке."
    ],
    "tags": [
      "HTML",
      "<dialog>",
      "dialog",
      "модальное окно",
      "popup",
      "доступность"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog",
    "search": true,
    "when": "Используйте <dialog> для любых диалоговых окон подтверждения, форм авторизации и настроек вместо громоздких JS-плагинов.",
    "alternatives": "Раньше делали кастомные div с position: fixed и aria-modal='true', но <dialog> стандартизирован и поддерживается всеми браузерами.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/",
    "playground": {
      "html": "<button id=\"btn-open\" style=\"background:#0284c7;color:#fff;border:0;padding:10px 16px;border-radius:8px;font-weight:600;cursor:pointer;\">Показать <dialog></button>\n\n<dialog id=\"fav-dialog\" style=\"padding:24px;border:1px solid #cbd5e1;border-radius:12px;box-shadow:0 10px 25px rgba(0,0,0,0.2);max-width:360px;\">\n  <h3 style=\"margin-top:0;\">Нативное модальное окно</h3>\n  <p>Оно открыто через <code>showModal()</code>. Фоновый слой автоматически блокируется!</p>\n  <button id=\"btn-close\" style=\"background:#ef4444;color:#fff;border:0;padding:6px 12px;border-radius:6px;cursor:pointer;\">Закрыть</button>\n</dialog>",
      "css": "body { font-family: system-ui; padding: 24px; }\ndialog::backdrop { background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(4px); }",
      "js": "const dlg = document.getElementById('fav-dialog');\ndocument.getElementById('btn-open').addEventListener('click', () => {\n  dlg.showModal();\n  console.log('Модальное окно открыто');\n});\ndocument.getElementById('btn-close').addEventListener('click', () => {\n  dlg.close();\n  console.log('Модальное окно закрыто');\n});"
    }
  },
  {
    "lang": "html",
    "id": "html-template-slot",
    "title": "HTML: Теги <template> и <slot>",
    "summary": "Механизм хранения клиентского фрагмента разметки, который не отображается при загрузке страницы, но может клонироваться через JavaScript.",
    "code": "<template id=\"user-card-template\">\n  <div class=\"user-card\">\n    <h3 class=\"name\"></h3>\n    <span class=\"role\"></span>\n  </div>\n</template>\n\n<div id=\"users-container\"></div>",
    "example": "<script>\nconst template = document.querySelector('#user-card-template');\nconst clone = template.content.cloneNode(true);\nclone.querySelector('.name').textContent = 'Алексей';\nclone.querySelector('.role').textContent = 'Дизайнер';\ndocument.querySelector('#users-container').appendChild(clone);\n</script>",
    "points": [
      "Браузер парсит содержимое <template>, но не запускает скрипты, не загружает картинки и не рендерит его до клонирования.",
      "Клонирование выполняется через template.content.cloneNode(true).",
      "Основа для Web Components и Shadow DOM совместно с элементом <slot>."
    ],
    "tags": [
      "HTML",
      "template",
      "slot",
      "шаблоны",
      "компоненты",
      "DOM"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/template",
    "search": true,
    "when": "Используйте для динамической генерации карточек, строк таблиц и комментариев без сборщиков шаблонов.",
    "alternatives": "Генерация разметки строками шаблонных литералов JS (template literals) проще, но <template> сохраняет валидную валидацию HTML.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-picture",
    "title": "HTML: Тег <picture> и адаптивные изображения",
    "summary": "Контейнер, позволяющий браузеру выбрать наиболее оптимальное изображение по ширине экрана, плотности пикселей или формату (AVIF, WebP).",
    "code": "<picture>\n  <!-- Современный ультрасжатый формат AVIF -->\n  <source srcset=\"hero.avif\" type=\"image/avif\">\n  <!-- Формат WebP для поддерживающих браузеров -->\n  <source srcset=\"hero.webp\" type=\"image/webp\">\n  <!-- Запасное изображение для всех остальных -->\n  <img src=\"hero.jpg\" alt=\"Красивый пейзаж\" width=\"800\" height=\"400\" loading=\"lazy\">\n</picture>",
    "example": "<!-- Адаптация под разную ширину экрана (Art Direction): -->\n<picture>\n  <source media=\"(max-width: 600px)\" srcset=\"square-mobile.jpg\">\n  <source media=\"(min-width: 601px)\" srcset=\"wide-desktop.jpg\">\n  <img src=\"fallback.jpg\" alt=\"Баннер\">\n</picture>",
    "points": [
      "Внутри <picture> обязательно должен быть один тег <img> — именно он отображает выбранный источник.",
      "Браузер выбирает первый подходящий <source>, удовлетворяющий media или type.",
      "Экономит до 70% трафика за счёт сжатия в AVIF/WebP."
    ],
    "tags": [
      "HTML",
      "picture",
      "source",
      "адаптивные картинки",
      "WebP",
      "AVIF"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/picture",
    "search": true,
    "when": "Применяйте для баннеров, каталогов товаров и фотографий для ускорения загрузки и идеальной адаптивности.",
    "alternatives": "Для простого изменения разрешения картинки при одинаковом соотношении сторон достаточно атрибутов srcset и sizes на самом теге <img>.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-has",
    "title": "CSS: Псевдокласс :has() (родительский селектор)",
    "summary": "Функциональный селектор, позволяющий стилизовать родительский элемент или предыдущего соседа в зависимости от того, содержит ли он указанного потомка.",
    "code": "/* Стилизовать карточку, если внутри есть картинка: */\n.card:has(img) {\n  grid-template-columns: 120px 1fr;\n}\n\n/* Стилизовать форму, если в ней есть невалидное поле: */\nform:has(input:invalid) {\n  border-left: 4px solid #ef4444;\n}\n\n/* Изменить цвет шапки, если меню открыто: */\nheader:has(nav.is-open) {\n  background: #0f172a;\n}",
    "example": "/* Стилизация метки чекбокса, когда он выбран: */\nlabel:has(input:checked) {\n  background: #e0f2fe;\n  border-color: #0284c7;\n  font-weight: 700;\n}",
    "points": [
      "Решил главную историческую проблему CSS: возможность выбирать родителя без помощи JavaScript.",
      "Поддерживается всеми современными браузерами (Chrome, Safari, Firefox, Edge).",
      "Можно комбинировать с другими селекторами: .article:has(> h2)."
    ],
    "tags": [
      "CSS",
      ":has",
      "родительский селектор",
      "псевдокласс",
      "селекторы"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:has",
    "search": true,
    "when": "Используйте для контекстной стилизации карточек, форм с ошибками, переключения тем и состояний меню без лишних JS-классов на родителях.",
    "alternatives": "Раньше приходилось с помощью JavaScript вешать класс вроде .card--has-image на родительский контейнер.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-clamp",
    "title": "CSS: clamp(), min(), max()",
    "summary": "Математические функции для адаптивной типографики и плавных размеров: clamp(min, preferred, max) задаёт идеальный размер с жесткими границами.",
    "code": "/* Адаптивный размер шрифта без медиазапросов:\n   минимум 18px, плавно 4vw на планшетах, максимум 36px на десктопе */\nh1 {\n  font-size: clamp(1.125rem, 4vw, 2.25rem);\n}\n\n/* Адаптивная ширина контейнера: */\n.container {\n  width: min(90%, 1200px);\n  padding: clamp(12px, 3vw, 32px);\n}",
    "example": "/* Гарантия минимальной высоты: */\n.hero {\n  height: max(500px, 80vh);\n}",
    "points": [
      "clamp(MIN, VAL, MAX) эквивалентно max(MIN, min(VAL, MAX)).",
      "Позволяет забыть о десятках жестких медиазапросов @media (max-width: ...).",
      "Всегда используйте относительные единицы (rem/vw) в preferred-значении для доступности масштабирования пользователем."
    ],
    "tags": [
      "CSS",
      "clamp",
      "min",
      "max",
      "адаптивная типографика",
      "размеры"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/clamp",
    "search": true,
    "when": "Применяйте для заголовков h1..h3, паддингов секций и ширины макетов, чтобы интерфейс гармонично выглядел на любом экране от iPhone SE до 4K монитора.",
    "alternatives": "Устаревший подход требовал кучи контрольных точек @media для каждой ширины экрана.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-aspect-ratio",
    "title": "CSS: aspect-ratio",
    "summary": "Устанавливает предпочтительное соотношение сторон для блока, которое сохраняется при любых изменениях ширины или высоты.",
    "code": "/* Видео-контейнер 16:9 */\n.video-player {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  background: #000;\n}\n\n/* Квадратная карточка или аватар 1:1 */\n.avatar {\n  width: 80px;\n  aspect-ratio: 1 / 1;\n  border-radius: 50%;\n  object-fit: cover;\n}",
    "example": "/* Вертикальный постер 2:3 */\n.poster {\n  width: 100%;\n  max-width: 300px;\n  aspect-ratio: 2 / 3;\n}",
    "points": [
      "Полностью заменяет старый грязный хак с padding-top: 56.25%!",
      "Предотвращает скачки макета (CLS — Cumulative Layout Shift) до загрузки картинок и видео.",
      "Отлично работает в связке с object-fit: cover."
    ],
    "tags": [
      "CSS",
      "aspect-ratio",
      "соотношение сторон",
      "пропорции",
      "видео"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/aspect-ratio",
    "search": true,
    "when": "Используйте для видеоплееров, фотогалерей, превью постов, аватаров и слайдеров.",
    "alternatives": "Раньше делали обертку с padding-top в процентах и абсолютным позиционированием содержимого.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-backdrop-filter",
    "title": "CSS: backdrop-filter (эффект матового стекла)",
    "summary": "Применяет графические эффекты (размытие blur, затемнение, насыщенность) к области позади элемента, создавая эффект Glassmorphism.",
    "code": "/* Закреплённая шапка с эффектом матового стекла: */\nheader.sticky {\n  position: sticky;\n  top: 0;\n  background: rgba(15, 23, 42, 0.75);\n  backdrop-filter: blur(12px) saturate(180%);\n  -webkit-backdrop-filter: blur(12px) saturate(180%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}",
    "example": "/* Всплывающая плашка: */\n.glass-card {\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  border-radius: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}",
    "points": [
      "Элемент должен иметь полупрозрачный фон (например, rgba(...) или hsla(...)), иначе размытия под ним не будет видно.",
      "Включайте префикс -webkit-backdrop-filter для совместимости с Safari.",
      "Повышает читаемость текста поверх ярких фоновых изображений или видео."
    ],
    "tags": [
      "CSS",
      "backdrop-filter",
      "blur",
      "glassmorphism",
      "размытие",
      "эффекты"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/backdrop-filter",
    "search": true,
    "when": "Используйте для современных плавающих меню, навигационных панелей, диалоговых окон и плашек над фотографиями.",
    "alternatives": "Обычный filter: blur(...) размывает сам элемент и его содержимое, а backdrop-filter размывает только то, что находится ПОЗАДИ него.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-link-css",
    "title": "HTML & CSS: Подключение CSS к HTML (<link>, <style>, @import)",
    "summary": "Три способа подключения стилей к веб-странице: внешний файл через <link>, внутренний блок <style> и правило @import.",
    "code": "<!-- 1. Основной и рекомендуемый способ: внешний файл стилей -->\n<link rel=\"stylesheet\" href=\"styles.css\">\n\n<!-- 2. Внутренние стили в <head> для критического CSS -->\n<style>\n  body {\n    margin: 0;\n    font-family: system-ui, sans-serif;\n    background: #0f172a;\n    color: #f8fafc;\n  }\n</style>\n\n<!-- 3. Подключение через @import внутри CSS (менее производительно) -->\n/* styles.css */\n@import url(\"layout.css\");",
    "example": "<!-- Подключение стилей для печати страницы: -->\n<link rel=\"stylesheet\" href=\"print.css\" media=\"print\">\n\n<!-- Подключение стилей только для тёмной темы: -->\n<link rel=\"stylesheet\" href=\"dark.css\" media=\"(prefers-color-scheme: dark)\">",
    "points": [
      "<link rel=\"stylesheet\"> — приоритетный способ: стили кэшируются браузером и не дублируются между страницами.",
      "Тег <style> размещают в <head> для стилизации первого экрана (Critical CSS) без ожидания внешних файлов.",
      "Избегайте @import внутри CSS: он создает цепочку последовательных сетевых запросов (waterfall), замедляя рендеринг."
    ],
    "tags": [
      "HTML",
      "CSS",
      "подключение css",
      "link",
      "style",
      "@import",
      "стили",
      "head"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics/Styling_basics_getting_started",
    "search": true,
    "when": "Используйте <link> для всех основных файлов стилей сайта; инлайновый <style> используйте только для критических стилей первого экрана (LCP).",
    "alternatives": "Инлайновые атрибуты style=\"...\" на тегах допустимы для динамических вычислений в JS, но загрязняют разметку.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/",
    "playground": {
      "html": "<div class=\"banner\">\n  <h2>CSS успешно подключён!</h2>\n  <p>Этот блок стилизован внешними правилами. Попробуй поменять цвет фона во вкладке CSS.</p>\n  <button class=\"cta-btn\">Тестовая кнопка</button>\n</div>",
      "css": "body { font-family: system-ui, sans-serif; padding: 20px; background: #0f172a; color: #f8fafc; }\n.banner { background: #1e293b; padding: 24px; border-radius: 12px; border: 1px solid #334155; }\nh2 { margin-top: 0; color: #38bdf8; }\n.cta-btn { background: #38bdf8; color: #0f172a; border: 0; padding: 10px 18px; border-radius: 8px; font-weight: 700; cursor: pointer; }\n.cta-btn:hover { background: #7dd3fc; }",
      "js": "console.log(\"Стили применены. Демо-страница готова!\");"
    }
  },
  {
    "lang": "html",
    "id": "html-google-fonts",
    "title": "HTML & CSS: Подключение шрифтов Google Fonts и @font-face",
    "summary": "Быстрое и оптимизированное подключение кастомных шрифтов: через CDN Google Fonts с preconnect или локально через директиву @font-face.",
    "code": "<!-- 1. Google Fonts в <head> с оптимизацией preconnect: -->\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@800&display=swap\" rel=\"stylesheet\">\n\n<!-- 2. Использование шрифта в CSS: -->\nbody {\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n}\nh1, h2 {\n  font-family: 'Montserrat', sans-serif;\n}",
    "example": "/* 3. Подключение локального файла шрифта через @font-face: */\n@font-face {\n  font-family: 'CustomFont';\n  src: url('/fonts/custom.woff2') format('woff2'),\n       url('/fonts/custom.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap; /* предотвращает невидимый текст до загрузки */\n}",
    "points": [
      "Теги <link rel=\"preconnect\"> ускоряют загрузку шрифтов на 100–300 мс, заранее устанавливая TLS-соединение с серверами Google.",
      "Параметр &display=swap указывает браузеру показывать системный шрифт (FOUT), пока скачивается веб-шрифт.",
      "Всегда указывайте стек резервных шрифтов (fallback fonts) после названия основного шрифта.",
      "Для локальных файлов используйте формат WOFF2 — он на 30–50% компактнее старых TTF/OTF."
    ],
    "tags": [
      "HTML",
      "CSS",
      "Google Fonts",
      "шрифты",
      "@font-face",
      "woff2",
      "font-family",
      "preconnect"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics/Web_fonts",
    "search": true,
    "when": "Используйте Google Fonts для быстрого прототипирования и проектов, а локальный @font-face с WOFF2 — для максимальной независимости от сторонних CDN и соответствия GDPR.",
    "alternatives": "Для максимальной скорости интерфейса можно использовать нативный system-ui (системный шрифт ОС без загрузки из сети).",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/",
    "playground": {
      "html": "<div class=\"font-demo\">\n  <div class=\"serif-title\">Шрифт с засечками (Playfair Display)</div>\n  <div class=\"sans-text\">Это современный гротеск (Roboto / Inter). Читаемый, лаконичный и идеально сбалансированный для длинных текстов на экранах любой плотности пикселей.</div>\n</div>",
      "css": "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Roboto:wght@400;500&display=swap');\nbody { padding: 24px; background: #0f172a; color: #e2e8f0; font-family: 'Roboto', sans-serif; }\n.font-demo { max-width: 520px; background: #1e293b; padding: 24px; border-radius: 12px; border: 1px solid #334155; }\n.serif-title { font-family: 'Playfair Display', serif; font-size: 26px; color: #f8fafc; margin-bottom: 12px; }\n.sans-text { font-family: 'Roboto', sans-serif; font-size: 14px; line-height: 1.7; color: #94a3b8; }",
      "js": "console.log(\"Шрифты Google Fonts успешно применены!\");"
    }
  },
  {
    "lang": "html",
    "id": "html-favicons",
    "title": "HTML: Подключение Favicon и иконок сайта (SVG, PNG, Manifest)",
    "summary": "Современный стандарт подключения иконки сайта во вкладке браузера, закладках, мобильных экранах iOS и Android.",
    "code": "<!-- 1. Современная векторная иконка в формате SVG (масштабируется на любых экранах) -->\n<link rel=\"icon\" href=\"/favicon.svg\" type=\"image/svg+xml\">\n\n<!-- 2. Запасная растровая иконка для старых браузеров -->\n<link rel=\"icon\" href=\"/favicon.ico\" sizes=\"32x32\">\n\n<!-- 3. Иконка для добавления на экран iPhone/iPad -->\n<link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\">\n\n<!-- 4. Манифест для Android и PWA -->\n<link rel=\"manifest\" href=\"/site.webmanifest\">",
    "example": "<!-- Генерация SVG favicon прямо в data: URL (без отдельных файлов!): -->\n<link rel=\"icon\" href=\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>\">",
    "points": [
      "SVG-фавиконка позволяет поддерживать тёмную тему через @media (prefers-color-scheme: dark) прямо внутри SVG-файла!",
      "Apple Touch Icon должен иметь размер 180×180 пикселей без скругления углов (iOS скругляет их автоматически).",
      "Размещение файла favicon.ico в корне сайта полезно, так как боты и сканеры ищут его там по умолчанию."
    ],
    "tags": [
      "HTML",
      "favicon",
      "иконка сайта",
      "apple-touch-icon",
      "svg favicon",
      "вкладка"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/link#favicon",
    "search": true,
    "when": "Обязательно добавляйте на каждую страницу для узнаваемости вкладки, добавления в закладки и мобильных ярлыков.",
    "alternatives": "Data URI favicon (data:image/svg+xml,...) отлично подходит для прототипов и DevShelf без внешних картинок.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-script-defer-async",
    "title": "HTML: Подключение JavaScript (атрибуты defer, async, type=\"module\")",
    "summary": "Правильное подключение JavaScript файлов без блокировки парсинга HTML: разница между обычным скриптом, defer, async и ES-модулями.",
    "code": "<!-- 1. Рекомендуемый стандарт для обычных скриптов:\n     Скачивается параллельно, выполняется ПОСЛЕ полного разбора HTML, сохраняет порядок: -->\n<script src=\"app.js\" defer></script>\n\n<!-- 2. Независимые внешние счетчики и метрики:\n     Скачивается параллельно, выполняется СРАЗУ по готовности (может нарушить порядок!): -->\n<script src=\"analytics.js\" async></script>\n\n<!-- 3. Современные ES-модули (import / export):\n     По умолчанию работают в строгом режиме ('use strict') и имеют поведение defer: -->\n<script type=\"module\" src=\"main.js\"></script>",
    "example": "<!-- Подключение запасного скрипта для устаревших браузеров: -->\n<script type=\"module\" src=\"modern.js\"></script>\n<script nomodule src=\"legacy.js\"></script>",
    "points": [
      "Обычный <script src=\"app.js\"> блокирует разбор HTML до окончания загрузки и выполнения скрипта.",
      "defer загружает скрипт в фоновом режиме и гарантирует выполнение строго в порядке подключения перед событием DOMContentLoaded.",
      "type=\"module\" позволяет использовать синтаксис import/export, скрипты изолированы в собственной области видимости (не засоряют window)."
    ],
    "tags": [
      "HTML",
      "JavaScript",
      "script",
      "defer",
      "async",
      "type=module",
      "производительность"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/script",
    "search": true,
    "when": "Используйте defer для всех скриптов приложения, работающих с DOM; async — только для независимой аналитики и рекламных пикселей.",
    "alternatives": "Устаревший приём помещать скрипты в самый конец перед </body> хуже, так как браузер не начинает скачивать файл до тех пор, пока не дойдёт до конца разметки.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-modern-reset",
    "title": "CSS: Современный сброс стилей (Modern CSS Reset)",
    "summary": "Универсальный базовый шаблон сброса стилей: box-sizing, сброс внешних отступов, адаптивные картинки и плавная прокрутка.",
    "code": "/* 1. Интуитивная блочная модель для всех элементов */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n/* 2. Сброс лишних отступов у базовых элементов */\nbody, h1, h2, h3, h4, p, figure, blockquote, dl, dd {\n  margin: 0;\n}\n\n/* 3. Базовые настройки страницы */\nbody {\n  min-height: 100vh;\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n/* 4. Адаптивные медиа-элементы (не вылезают за границы) */\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n\n/* 5. Наследование шрифтов для элементов форм */\ninput, button, textarea, select {\n  font: inherit;\n}",
    "example": "/* Отключение анимаций для пользователей с чувствительностью к движению: */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}",
    "points": [
      "border-box включает padding и border в общую ширину элемента, предотвращая горизонтальную прокрутку.",
      "max-width: 100% на изображениях предотвращает поломку макета на мобильных устройствах.",
      "font: inherit на кнопках и полях ввода устраняет некрасивые системные шрифты браузера."
    ],
    "tags": [
      "CSS",
      "reset",
      "normalize",
      "box-sizing",
      "сброс стилей",
      "верстка"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing",
    "search": true,
    "when": "Добавляйте в начало каждого нового веб-проекта перед написанием основных стилей интерфейса.",
    "alternatives": "Устаревшие громоздкие библиотеки вроде Eric Meyer Reset или Normalize.css часто избыточны по сравнению с 15 строками современного CSS-сброса.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-centering",
    "title": "CSS: Все способы центрирования элементов (Flexbox, Grid, Absolute)",
    "summary": "Надёжные и современные методы центрирования по вертикали и горизонтали: от 2 строк CSS Grid до классического Flexbox.",
    "code": "/* Способ 1: Абсолютный чемпион (2 строки в CSS Grid) */\n.parent-grid {\n  display: grid;\n  place-items: center; /* центрирует и по X, и по Y */\n  min-height: 300px;\n}\n\n/* Способ 2: Через Flexbox */\n.parent-flex {\n  display: flex;\n  justify-content: center; /* по главной оси (X) */\n  align-items: center;     /* по поперечной оси (Y) */\n  min-height: 300px;\n}\n\n/* Способ 3: Flexbox + auto-margin (идеально для потомка) */\n.parent { display: flex; }\n.child { margin: auto; }",
    "example": "/* Способ 4: Абсолютное позиционирование с translate: */\n.child-absolute {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}",
    "points": [
      "display: grid; place-items: center — самый лаконичный современный способ центрирования одного блока.",
      "Flexbox с justify-content и align-items гибче, когда нужно центрировать цепочку элементов.",
      "margin: auto внутри flex- или grid-контейнера автоматически забирает всё свободное пространство со всех сторон."
    ],
    "tags": [
      "CSS",
      "центрирование",
      "place-items",
      "flexbox",
      "grid",
      "выравнивание"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/CSS_layout",
    "search": true,
    "when": "Применяйте place-items: center для модальных окон, экранов загрузки, карточек авторизации и баннеров.",
    "alternatives": "Старый способ с line-height и vertical-align применим только к строчным элементам.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/",
    "playground": {
      "html": "<div class=\"container\">\n  <div class=\"card\">\n    <h3>Идеально по центру!</h3>\n    <p>Всего 2 строки: <code>display: grid; place-items: center;</code></p>\n  </div>\n</div>",
      "css": "body { margin: 0; padding: 16px; background: #0f172a; font-family: system-ui; }\n.container { display: grid; place-items: center; min-height: 280px; background: #1e293b; border-radius: 14px; border: 1px dashed #475569; }\n.card { background: #38bdf8; color: #0f172a; padding: 20px 24px; border-radius: 10px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.3); }\nh3 { margin: 0 0 8px; }\np { margin: 0; font-size: 13px; }",
      "js": "console.log(\"Элемент отцентрирован по центру родительского контейнера.\");"
    }
  },
  {
    "lang": "css",
    "id": "css-gradients",
    "title": "CSS: Градиенты (linear-gradient, radial-gradient, conic-gradient)",
    "summary": "Создание плавных цветовых переходов для фонов, кнопок и карточек без использования тяжелых графических картинок.",
    "code": "/* 1. Линейный градиент под углом: */\n.gradient-linear {\n  background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #ec4899 100%);\n}\n\n/* 2. Радиальный градиент от центра к краям: */\n.gradient-radial {\n  background: radial-gradient(circle at center, #38bdf8 0%, #0f172a 70%);\n}\n\n/* 3. Конический градиент (для диаграмм и красивых подсветок): */\n.gradient-conic {\n  background: conic-gradient(from 45deg, #ef4444, #f59e0b, #10b981, #3b82f6, #ef4444);\n}",
    "example": "/* Градиентный текст с помощью clip-path: */\n.gradient-text {\n  background: linear-gradient(90deg, #38bdf8, #a855f7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 32px;\n  font-weight: 800;\n}",
    "points": [
      "Градиенты рендерятся браузером как фоновые изображения (background-image), поэтому на них не работает свойство background-color.",
      "Можно накладывать полупрозрачные градиенты поверх фотографий: background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(bg.jpg).",
      "Градиентный текст создается через -webkit-background-clip: text в связке с прозрачным цветом текста."
    ],
    "tags": [
      "CSS",
      "gradient",
      "linear-gradient",
      "radial-gradient",
      "градиенты",
      "фоны"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/gradient",
    "search": true,
    "when": "Используйте для красивых баннеров, кнопок призыва к действию (CTA), подсветок карточек и акцентного текста.",
    "alternatives": "Использование растровых картинок фона увеличивает вес страницы на сотни килобайт.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "css",
    "id": "css-scroll-snap",
    "title": "CSS: scroll-snap (постраничная прокрутка и слайдеры)",
    "summary": "Нативная фиксация прокрутки: позволяет легко создавать слайдеры картинок, карусели и постраничную прокрутку без JavaScript.",
    "code": "/* Родительский контейнер с горизонтальной прокруткой */\n.slider {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scroll-behavior: smooth;\n  gap: 16px;\n  padding: 16px;\n}\n\n/* Элементы слайдера */\n.slide {\n  flex: 0 0 85%;\n  scroll-snap-align: center;\n  border-radius: 12px;\n  background: #1e293b;\n  min-height: 200px;\n}",
    "example": "/* Полноэкранная вертикальная презентация: */\n.fullpage-container {\n  height: 100vh;\n  overflow-y: scroll;\n  scroll-snap-type: y mandatory;\n}\n.section {\n  height: 100vh;\n  scroll-snap-align: start;\n}",
    "points": [
      "scroll-snap-type задает ось (x или y) и строгость привязки (mandatory или proximity).",
      "scroll-snap-align определяет, к какой части привязываться: start, center или end.",
      "Работает плавно с мобильным свайпом и трекпадами без задержек и дерганий сторонних библиотек."
    ],
    "tags": [
      "CSS",
      "scroll-snap",
      "слайдер",
      "карусель",
      "прокрутка"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_scroll_snap",
    "search": true,
    "when": "Идеально для каруселей отзывов, каталогов товаров и мобильных сторис без тяжелых библиотек вроде Swiper.",
    "alternatives": "Сторонние JS-слайдеры весят от 30 до 100 КБ, тогда как CSS Scroll Snap встроен в браузер нативно.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-url-params",
    "title": "JavaScript: URL и URLSearchParams (работа с параметрами адресной строки)",
    "summary": "Удобный стандартный API для разбора, чтения, добавления и модификации параметров поисковой строки (?query=value) в URL.",
    "code": "// 1. Чтение параметров текущего адреса:\nconst params = new URLSearchParams(window.location.search);\n\nconst currentTab = params.get('tab') || 'all';\nconst page = parseInt(params.get('page') || '1', 10);\nconsole.log('Параметр tab:', currentTab);\n\n// 2. Добавление и изменение параметров:\nparams.set('sort', 'price');\nparams.set('order', 'asc');\nparams.delete('filter');\n\n// 3. Получение новой строки запроса:\nconsole.log('Итоговый URL-запрос:', params.toString());\n// \"tab=all&page=1&sort=price&order=asc\"",
    "example": "// Обновление URL в браузере без перезагрузки страницы:\nfunction updateQueryParam(key, value) {\n  const url = new URL(window.location);\n  url.searchParams.set(key, value);\n  window.history.pushState({}, '', url);\n}",
    "points": [
      "Автоматически экранирует спецсимволы и пробелы (encodeURIComponent / decodeURIComponent больше не нужны вручную).",
      "Метод params.has('key') проверяет факт наличия параметра.",
      "Можно перебирать как Map через for (const [k, v] of params) { ... }."
    ],
    "tags": [
      "JavaScript",
      "URLSearchParams",
      "URL",
      "query",
      "параметры",
      "адресная строка"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/API/URLSearchParams",
    "search": true,
    "when": "Используйте при реализации поиска, фильтров каталога, пагинации и шаринга ссылок с выбранными опциями.",
    "alternatives": "Устаревший ручной парсинг через location.search.substring(1).split('&') чреват ошибками с кодированием.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/",
    "playground": {
      "html": "<div class=\"box\">\n  <h3>URLSearchParams в действии</h3>\n  <label>Строка запроса:</label>\n  <input id=\"q-input\" value=\"topic=javascript&sort=popular&page=2\" style=\"width:100%;padding:8px;margin:8px 0;border-radius:6px;border:1px solid #cbd5e1;\">\n  <button id=\"parse-btn\" style=\"background:#0284c7;color:#fff;border:0;padding:8px 14px;border-radius:6px;cursor:pointer;\">Разобрать параметры</button>\n  <pre id=\"q-res\" style=\"margin-top:12px;padding:12px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0;\"></pre>\n</div>",
      "css": "body { font-family: system-ui; padding: 20px; } .box { max-width: 480px; }",
      "js": "function parseQuery() {\n  const str = document.getElementById('q-input').value;\n  const p = new URLSearchParams(str);\n  const out = [];\n  for (const [k, v] of p) {\n    out.push(`Ключ: \"${k}\" => Значение: \"${v}\"`);\n  }\n  document.getElementById('q-res').textContent = out.join('\\n');\n  console.log('Параметры разобраны:', Object.fromEntries(p));\n}\ndocument.getElementById('parse-btn').addEventListener('click', parseQuery);\nparseQuery();"
    }
  },
  {
    "lang": "javascript",
    "id": "js-clipboard",
    "title": "JavaScript: Clipboard API (копирование текста в буфер обмена)",
    "summary": "Асинхронный браузерный API для безопасного чтения и записи текста и изображений в системный буфер обмена пользователя.",
    "code": "// Копирование текста в буфер обмена:\nasync function copyToClipboard(text) {\n  try {\n    await navigator.clipboard.writeText(text);\n    console.log('Текст успешно скопирован в буфер!');\n  } catch (err) {\n    console.error('Ошибка копирования:', err);\n  }\n}\n\n// Пример вызова:\ncopyToClipboard('https://example.com/share-link');",
    "example": "// Кнопка с обратной связью:\nconst copyBtn = document.querySelector('#copy');\ncopyBtn.addEventListener('click', async () => {\n  await navigator.clipboard.writeText('console.log(\"Hello!\");');\n  copyBtn.textContent = 'Скопировано ✓';\n  setTimeout(() => copyBtn.textContent = 'Копировать', 2000);\n});",
    "points": [
      "Работает только в защищённом контексте HTTPS (или localhost).",
      "Вызов navigator.clipboard должен быть следствием прямого пользовательского действия (клик по кнопке).",
      "Полностью заменяет устаревший и нестабильный document.execCommand('copy')."
    ],
    "tags": [
      "JavaScript",
      "clipboard",
      "буфер обмена",
      "копирование",
      "navigator.clipboard"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Clipboard_API",
    "search": true,
    "when": "Используйте для кнопок «Скопировать код», «Скопировать ссылку», промокодов и реферальных адресов.",
    "alternatives": "Устаревший document.execCommand('copy') признан deprecated и не рекомендуется к использованию.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-intl-format",
    "title": "JavaScript: Intl.NumberFormat и Intl.DateTimeFormat (локализация)",
    "summary": "Встроенный международный API для правильного форматирования цен, валют, процентов и дат в соответствии с правилами языка пользователя.",
    "code": "// 1. Форматирование рублей / валюты:\nconst priceFormatter = new Intl.NumberFormat('ru-RU', {\n  style: 'currency',\n  currency: 'RUB',\n  maximumFractionDigits: 0\n});\nconsole.log(priceFormatter.format(1250000));\n// \"1 250 000 ₽\"\n\n// 2. Форматирование процентов:\nconst percentFormatter = new Intl.NumberFormat('ru-RU', {\n  style: 'percent',\n  minimumFractionDigits: 1\n});\nconsole.log(percentFormatter.format(0.854));\n// \"85,4%\"",
    "example": "// 3. Форматирование даты на русском:\nconst dateFormatter = new Intl.DateTimeFormat('ru-RU', {\n  dateStyle: 'full',\n  timeStyle: 'short'\n});\nconsole.log(dateFormatter.format(new Date()));\n// например: \"пятница, 23 октября 2026 г., 14:30\"",
    "points": [
      "Автоматически ставит неразрывные пробелы между цифрами и символом валюты.",
      "Учитывает региональные соглашения (в России запятая отделяет десятичные, в США — точка).",
      "Гораздо производительнее и легче любых внешних библиотек вроде moment.js или date-fns."
    ],
    "tags": [
      "JavaScript",
      "Intl",
      "локализация",
      "валюта",
      "рубли",
      "форматирование дат"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl",
    "search": true,
    "when": "Обязательно используйте для любого интернет-магазина, цен в каталогах, банковских данных и отображения дат публикаций.",
    "alternatives": "Самодельные регулярные выражения для разделителей тысяч часто ломаются на копейках и других валютах.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-intersection-observer",
    "title": "JavaScript: IntersectionObserver (ленивая загрузка и анимации при скролле)",
    "summary": "Высокопроизводительный API для отслеживания пересечения элементов с областью видимости экрана (viewport).",
    "code": "// Отслеживание появления элементов на экране:\nconst observer = new IntersectionObserver((entries, obs) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      // Элемент появился в поле зрения:\n      entry.target.classList.add('visible');\n      console.log('Элемент появился:', entry.target);\n      \n      // Перестаём наблюдать за ним, если анимация однократная:\n      obs.unobserve(entry.target);\n    }\n  });\n}, {\n  threshold: 0.2 // сработает при показе 20% элемента\n});\n\n// Наблюдение за всеми анимируемыми блоками:\ndocument.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));",
    "example": "// Ленивая подгрузка изображений (Lazy Loading):\nconst imgObserver = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src;\n      imgObserver.unobserve(img);\n    }\n  });\n});",
    "points": [
      "Работает асинхронно в фоновом потоке, не вызывая просадок FPS и перегрузки события window.onscroll.",
      "Параметр rootMargin позволяет начать подгрузку картинок заранее, пока пользователь ещё не доскроллил 200px.",
      "Обязательно вызывайте unobserve() или disconnect() для отработанных элементов."
    ],
    "tags": [
      "JavaScript",
      "IntersectionObserver",
      "скролл",
      "ленивая загрузка",
      "анимация",
      "lazy load"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API",
    "search": true,
    "when": "Используйте для бесконечной ленты постов (infinite scroll), запуска анимаций появления карточек и отложенной загрузки тяжелых медиа.",
    "alternatives": "Устаревший scroll event listener с getBoundingClientRect() вызывает принудительный пересчет макета (layout thrashing) и тормозит браузер.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-debounce-throttle",
    "title": "JavaScript: Debounce и Throttle (оптимизация частых событий)",
    "summary": "Паттерны контроля частоты вызова функций для оптимизации событий ввода текста (input), изменения размера окна (resize) и прокрутки (scroll).",
    "code": "// 1. Debounce (вызывает функцию только ПОСЛЕ паузы в событиях):\nfunction debounce(func, delay = 300) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => func.apply(this, args), delay);\n  };\n}\n\n// Применение для поля живого поиска:\nconst onSearch = debounce(query => {\n  console.log('Отправка запроса на сервер:', query);\n}, 400);\n\n// 2. Throttle (вызывает функцию не чаще, чем раз в указанный период):\nfunction throttle(func, limit = 200) {\n  let inThrottle = false;\n  return function(...args) {\n    if (!inThrottle) {\n      func.apply(this, args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}",
    "example": "const searchInput = document.querySelector('#search');\nif (searchInput) {\n  searchInput.addEventListener('input', e => onSearch(e.target.value));\n}",
    "points": [
      "Debounce идеален для поисковых подсказок и автосохранения форм: ждёт, пока пользователь закончит печатать.",
      "Throttle идеален для событий прокрутки, свайпов и отслеживания координат курсора: срабатывает регулярно, но с ограничением частоты.",
      "Предотвращает отправку сотен лишних сетевых запросов на сервер при быстром вводе текста."
    ],
    "tags": [
      "JavaScript",
      "debounce",
      "throttle",
      "оптимизация",
      "производительность",
      "поиск"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/API/setTimeout",
    "search": true,
    "when": "Обязательно используйте при создании любых полей живого поиска, фильтрации списков и обработки событий окна.",
    "alternatives": "В библиотеке lodash есть готовые _.debounce и _.throttle, но компактная чистая функция пишется в 6 строк без зависимостей.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "javascript",
    "id": "js-structured-clone",
    "title": "JavaScript: structuredClone() (глубокое клонирование)",
    "summary": "Нативная стандартная функция для настоящего глубокого клонирования объектов, массивов, Map, Set, Date и вложенных структур.",
    "code": "const original = {\n  name: 'Проект DevShelf',\n  created: new Date(),\n  tags: new Set(['web', 'dev', 'docs']),\n  config: {\n    nested: { count: 42 }\n  }\n};\n\n// Глубокий клон:\nconst copy = structuredClone(original);\n\n// Изменение клона не затрагивает оригинал:\ncopy.config.nested.count = 999;\nconsole.log('Оригинал не изменился:', original.config.nested.count); // 42\nconsole.log('Копия изменилась:', copy.config.nested.count); // 999",
    "example": "// Поддерживает циклические ссылки без падений:\nconst circular = { title: 'Круг' };\ncircular.self = circular;\nconst clonedCircular = structuredClone(circular);\nconsole.log(clonedCircular.self === clonedCircular); // true",
    "points": [
      "Корректно сохраняет типы Date, Set, Map, RegExp, ArrayBuffer.",
      "В отличие от старого трюка JSON.parse(JSON.stringify(obj)), не теряет даты и не ломается на циклических ссылках.",
      "Не может клонировать функции и DOM-узлы (выбрасывает DataCloneError)."
    ],
    "tags": [
      "JavaScript",
      "structuredClone",
      "клонирование",
      "копирование",
      "объекты"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/API/structuredClone",
    "search": true,
    "when": "Используйте всякий раз, когда нужно создать независимую копию сложного вложенного объекта или состояния перед редактированием.",
    "alternatives": "Оператор spread {...obj} делает только поверхностную копию (вложенные объекты остаются общими ссылками).",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "php",
    "id": "php-pdo-crud",
    "title": "PHP: PDO — Полное руководство по безопасной работе с БД (CRUD)",
    "summary": "Стандарт подключения и выполнения безопасных запросов SELECT, INSERT, UPDATE, DELETE через подготовленные выражения PDO.",
    "code": "<?php\n// 1. Безопасное подключение к PostgreSQL / MySQL:\n$dsn = \"mysql:host=localhost;dbname=devshelf;charset=utf8mb4\";\n$options = [\n    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // бросать исключения при ошибках\n    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // возвращать ассоциативные массивы\n    PDO::ATTR_EMULATE_PREPARES   => false,                  // настоящие подготовленные выражения\n];\n$pdo = new PDO($dsn, 'db_user', 'secret_password', $options);\n\n// 2. Безопасный SELECT с параметрами (защита от SQL-инъекций):\n$stmt = $pdo->prepare('SELECT id, name, email FROM users WHERE status = :status LIMIT :limit');\n$stmt->execute(['status' => 'active', 'limit' => 10]);\n$users = $stmt->fetchAll();\n\n// 3. Безопасный INSERT:\n$insert = $pdo->prepare('INSERT INTO logs (user_id, action) VALUES (?, ?)');\n$insert->execute([42, 'login']);\n$newId = $pdo->lastInsertId();\n?>",
    "example": "<?php\n// Использование транзакций для неделимых операций:\ntry {\n    $pdo->beginTransaction();\n    $pdo->prepare('UPDATE accounts SET balance = balance - 100 WHERE id = 1')->execute();\n    $pdo->prepare('UPDATE accounts SET balance = balance + 100 WHERE id = 2')->execute();\n    $pdo->commit();\n} catch (Exception $e) {\n    $pdo->rollBack();\n    echo \"Ошибка транзакции: \" . $e->getMessage();\n}\n?>",
    "points": [
      "НИКОГДА не подставляйте переменные в строку SQL через конкатенацию ($sql = \"... WHERE id = \" . $id)!",
      "Всегда используйте подготавливаемые плейсхолдеры (? или :name) и метод execute().",
      "Опция PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION гарантирует, что ошибки БД не останутся незамеченными."
    ],
    "tags": [
      "PHP",
      "PDO",
      "SQL",
      "база данных",
      "prepared statements",
      "безопасность",
      "CRUD"
    ],
    "url": "https://www.php.net/manual/ru/book.pdo.php",
    "search": true,
    "when": "Обязательный фундамент для любой работы с реляционными базами данных MySQL, PostgreSQL, SQLite в PHP.",
    "alternatives": "Устаревшее расширение mysql_* удалено из PHP; mysqli поддерживается, но привязано только к MySQL, тогда как PDO универсален.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-sessions-auth",
    "title": "PHP: Сессии и авторизация пользователей (session_start, $_SESSION)",
    "summary": "Управление состоянием сеанса пользователя: защищенный запуск сессии, сохранение данных авторизации и безопасное завершение.",
    "code": "<?php\n// 1. Безопасная настройка параметров cookie сессии:\nsession_start([\n    'cookie_lifetime' => 86400 * 7, // 7 дней\n    'cookie_httponly' => true,      // защита от кражи через JavaScript (XSS)\n    'cookie_secure'   => true,      // передавать только по HTTPS\n    'cookie_samesite' => 'Lax',     // защита от CSRF-атак\n]);\n\n// 2. Сохранение данных пользователя при успешном логине:\n$_SESSION['user_id'] = 105;\n$_SESSION['role'] = 'admin';\n\n// 3. Защита от фиксации сессии (Session Fixation):\nsession_regenerate_id(true);\n\n// 4. Проверка авторизации:\nif (isset($_SESSION['user_id'])) {\n    echo \"Привет, пользователь #\" . $_SESSION['user_id'];\n}\n?>",
    "example": "<?php\n// 5. Полное и безопасное завершение сессии (Logout):\nfunction logout() {\n    $_SESSION = [];\n    if (ini_get(\"session.use_cookies\")) {\n        $params = session_get_cookie_params();\n        setcookie(session_name(), '', time() - 42000,\n            $params[\"path\"], $params[\"domain\"],\n            $params[\"secure\"], $params[\"httponly\"]\n        );\n    }\n    session_destroy();\n}\n?>",
    "points": [
      "session_start() должен вызываться до любого вывода данных в браузер (до вывода HTML или echo).",
      "Флаг cookie_httponly: true делает cookie сессии недоступной для document.cookie в JavaScript, защищая сессию при XSS.",
      "Всегда вызывайте session_regenerate_id(true) сразу после успешной авторизации пользователя."
    ],
    "tags": [
      "PHP",
      "session_start",
      "сессии",
      "авторизация",
      "безопасность",
      "$_SESSION"
    ],
    "url": "https://www.php.net/manual/ru/book.session.php",
    "search": true,
    "when": "Используйте для личных кабинетов, сохранения авторизации, корзины покупок и flash-уведомлений.",
    "alternatives": "Для stateless микросервисов и мобильных API чаще используют токены JWT в заголовке Authorization: Bearer.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-csrf-protection",
    "title": "PHP: Защита от CSRF-атак (CSRF Tokens)",
    "summary": "Генерация и проверка одноразовых криптографических токенов для защиты форм и действий от межсайтовой подделки запроса.",
    "code": "<?php\nsession_start();\n\n// 1. Генерация случайного криптографически стойкого CSRF-токена:\nif (empty($_SESSION['csrf_token'])) {\n    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));\n}\n$token = $_SESSION['csrf_token'];\n?>\n\n<!-- 2. Вставка токена в скрытое поле HTML-формы: -->\n<form action=\"/delete-account\" method=\"POST\">\n  <input type=\"hidden\" name=\"csrf_token\" value=\"<?= htmlspecialchars($token, ENT_QUOTES) ?>\">\n  <button type=\"submit\">Удалить аккаунт</button>\n</form>",
    "example": "<?php\n// 3. Проверка токена в обработчике формы:\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    $submittedToken = $_POST['csrf_token'] ?? '';\n    \n    // hash_equals защищает от timing attacks:\n    if (!hash_equals($_SESSION['csrf_token'], $submittedToken)) {\n        http_response_code(403);\n        die('Ошибка: недействительный CSRF-токен.');\n    }\n    \n    echo \"Токен подтверждён, действие безопасно!\";\n}\n?>",
    "points": [
      "CSRF-атака вынуждает браузер жертвы незаметно отправить запрос на сайт, где она уже авторизована.",
      "Для сравнения токенов всегда используйте функцию hash_equals(), а не обычное == или === (защита от атак по времени).",
      "Случайные байты следует генерировать функцией random_bytes(), а не устаревшими rand() или mt_rand()."
    ],
    "tags": [
      "PHP",
      "CSRF",
      "безопасность",
      "токены",
      "random_bytes",
      "hash_equals",
      "формы"
    ],
    "url": "https://www.php.net/manual/ru/function.hash-equals.php",
    "search": true,
    "when": "Обязательно добавляйте проверку CSRF-токенов во все формы, выполняющие мутирующие действия: удаление, перевод денег, смена пароля.",
    "alternatives": "Cookie с параметром SameSite=Strict помогают снизить риск CSRF, но явные токены остаются отраслевым золотым стандартом.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-file-uploads",
    "title": "PHP: Безопасная загрузка файлов ($_FILES и move_uploaded_file)",
    "summary": "Правила безопасной загрузки картинок и документов на сервер: проверка ошибок, размера, MIME-типа и переименование.",
    "code": "<?php\nif ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['avatar'])) {\n    $file = $_FILES['avatar'];\n\n    // 1. Проверка системной ошибки загрузки:\n    if ($file['error'] !== UPLOAD_ERR_OK) {\n        die(\"Ошибка при загрузке файла.\");\n    }\n\n    // 2. Ограничение размера (например, до 2 МБ):\n    if ($file['size'] > 2 * 1024 * 1024) {\n        die(\"Файл слишком большой (максимум 2 МБ).\");\n    }\n\n    // 3. Проверка реального MIME-типа через finfo (не доверяйте $_FILES['type']!):\n    $finfo = new finfo(FILEINFO_MIME_TYPE);\n    $mimeType = $finfo->file($file['tmp_name']);\n    $allowedMimes = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];\n\n    if (!array_key_exists($mimeType, $allowedMimes)) {\n        die(\"Недопустимый формат файла.\");\n    }\n\n    // 4. Генерация нового уникального имени (защита от перезаписи и вредоносных имен):\n    $extension = $allowedMimes[$mimeType];\n    $newFileName = bin2hex(random_bytes(16)) . '.' . $extension;\n    $destination = __DIR__ . '/uploads/' . $newFileName;\n\n    // 5. Безопасное перемещение:\n    if (move_uploaded_file($file['tmp_name'], $destination)) {\n        echo \"Файл успешно сохранён как \" . $newFileName;\n    }\n}\n?>",
    "example": "<!-- Форма обязательно должна содержать enctype=\"multipart/form-data\": -->\n<form action=\"upload.php\" method=\"POST\" enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"avatar\" accept=\"image/png, image/jpeg, image/webp\" required>\n  <button type=\"submit\">Загрузить аватар</button>\n</form>",
    "points": [
      "Форма загрузки ОБЯЗАТЕЛЬНО должна иметь атрибут enctype=\"multipart/form-data\".",
      "НИКОГДА не доверяйте $file['name'] и $file['type'] — эти данные присылает клиент и их легко подделать.",
      "Всегда переименовывайте загруженные файлы в случайные имена и проверяйте MIME-тип через finfo_file."
    ],
    "tags": [
      "PHP",
      "загрузка файлов",
      "$_FILES",
      "move_uploaded_file",
      "finfo",
      "безопасность"
    ],
    "url": "https://www.php.net/manual/ru/features.file-upload.post-method.php",
    "search": true,
    "when": "Используйте для загрузки аватаров пользователей, сканов документов, фотогалерей и вложений к письмам.",
    "alternatives": "Для масштабных сервисов файлы загружают напрямую в облачные объектные хранилища (S3, Cloud Storage) через Pre-signed URLs.",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "php",
    "id": "php-curl",
    "title": "PHP: cURL — Выполнение внешних HTTP-запросов и интеграция с API",
    "summary": "Библиотека cURL для отправки GET и POST запросов к внешним REST API, авторизации через Bearer-токены и обработки JSON-ответов.",
    "code": "<?php\n// Выполнение GET-запроса к внешнему API:\n$ch = curl_init('https://api.github.com/users/octocat');\n\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true, // вернуть результат в переменную, а не выводить в браузер\n    CURLOPT_TIMEOUT        => 10,   // таймаут в секундах\n    CURLOPT_HTTPHEADER     => [\n        'User-Agent: DevShelf-App',\n        'Accept: application/json'\n    ]\n]);\n\n$response = curl_exec($ch);\n$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);\n\nif (curl_errno($ch)) {\n    echo 'Ошибка cURL: ' . curl_error($ch);\n} else if ($httpCode === 200) {\n    $data = json_decode($response, true);\n    echo \"Имя пользователя: \" . $data['name'];\n}\ncurl_close($ch);\n?>",
    "example": "<?php\n// Отправка POST-запроса с JSON:\n$ch = curl_init('https://api.example.com/orders');\ncurl_setopt_array($ch, [\n    CURLOPT_POST           => true,\n    CURLOPT_POSTFIELDS     => json_encode(['productId' => 10, 'qty' => 2]),\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER     => [\n        'Content-Type: application/json',\n        'Authorization: Bearer my_api_secret_token'\n    ]\n]);\n$res = curl_exec($ch);\ncurl_close($ch);\n?>",
    "points": [
      "CURLOPT_RETURNTRANSFER => true обязателен, иначе cURL сразу выведет тело ответа в браузер.",
      "Всегда задавайте CURLOPT_TIMEOUT, чтобы медленный сторонний сервис не повесил ваш PHP-процесс.",
      "Всегда проверяйте HTTP-код через curl_getinfo($ch, CURLINFO_HTTP_CODE)."
    ],
    "tags": [
      "PHP",
      "cURL",
      "HTTP",
      "REST API",
      "интеграция",
      "JSON",
      "запросы"
    ],
    "url": "https://www.php.net/manual/ru/book.curl.php",
    "search": true,
    "when": "Используйте для интеграции с платежными шлюзами, CRM-системами, отправки SMS и получения курсов валют.",
    "alternatives": "Для объектно-ориентированного кода часто используют библиотеку Guzzle (через Composer).",
    "sourceName": "PHP Documentation Group",
    "licenseName": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "lang": "html",
    "id": "html-meta-seo",
    "title": "HTML: Метатеги и базовое SEO (charset, viewport, description, robots)",
    "summary": "Базовые и продвинутые метатеги в <head>: кодировка UTF-8, отзывчивый viewport, поисковое описание, директивы robots и цвет темы.",
    "code": "<head>\n  <!-- 1. Кодировка (всегда первой в head) -->\n  <meta charset=\"utf-8\">\n\n  <!-- 2. Адаптивность для мобильных экранов -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  <!-- 3. Название страницы (вкладка и заголовок в поиске) -->\n  <title>Купить кофе свежей обжарки — CoffeeLab</title>\n\n  <!-- 4. Сниппет описания для поисковиков (до 160 символов) -->\n  <meta name=\"description\" content=\"Свежеобжаренный зерновой кофе с доставкой по всей стране. Скидки для новых клиентов.\">\n\n  <!-- 5. Инструкции для поисковых роботов (индексация и переход по ссылкам) -->\n  <meta name=\"robots\" content=\"index, follow\">\n\n  <!-- 6. Канонический URL для предотвращения дублей -->\n  <link rel=\"canonical\" href=\"https://example.com/catalog/coffee\">\n\n  <!-- 7. Цвет адресной строки мобильного браузера -->\n  <meta name=\"theme-color\" content=\"#10151f\">\n</head>",
    "example": "<!-- Запрет индексации для приватной страницы (например, ЛК или корзины): -->\n<meta name=\"robots\" content=\"noindex, nofollow\">\n<!-- Управление реферером при переходе по внешним ссылкам: -->\n<meta name=\"referrer\" content=\"strict-origin-when-cross-origin\">",
    "points": [
      "<meta charset=\"utf-8\"> должен идти в первых 1024 байтах head, чтобы браузер не переключал кодировку на лету.",
      "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> отключает искусственное отдаление на смартфонах.",
      "meta description не влияет напрямую на ранжирование, но сильно влияет на CTR (кликабельность) сниппета в поиске.",
      "Всегда указывайте канонический link rel=\"canonical\" при наличии параметров в URL (?page=2, ?sort=asc)."
    ],
    "tags": [
      "HTML",
      "meta",
      "SEO",
      "head",
      "viewport",
      "description",
      "robots",
      "canonical",
      "метаданные",
      "индексация"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/meta",
    "search": true,
    "when": "Добавляйте этот обязательный набор в тег <head> каждого сайта для правильного отображения на смартфонах и индексации в Яндексе и Google.",
    "alternatives": "Для соцсетей (Telegram, VK, Twitter) дополнительно подключайте протоколы OpenGraph и Twitter Cards.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "html-opengraph",
    "title": "HTML: OpenGraph и Twitter Cards для ссылок в мессенджерах и соцсетях",
    "summary": "Метаданные протокола Open Graph (og:*) и Twitter Cards: превью-изображение, заголовок и описание для Telegram, WhatsApp, VK и X.",
    "code": "<head>\n  <!-- Протокол Open Graph (Telegram, WhatsApp, VK, Facebook, Discord) -->\n  <meta property=\"og:type\" content=\"article\">\n  <meta property=\"og:site_name\" content=\"DevShelf\">\n  <meta property=\"og:title\" content=\"Гайд по написанию чистого кода на JavaScript\">\n  <meta property=\"og:description\" content=\"Узнайте, как организовать структуру проекта и писать читаемый поддерживаемый код.\">\n  <meta property=\"og:image\" content=\"https://example.com/images/og-preview.jpg\">\n  <meta property=\"og:image:width\" content=\"1200\">\n  <meta property=\"og:image:height\" content=\"630\">\n  <meta property=\"og:image:alt\" content=\"Логотип DevShelf и пример кода\">\n  <meta property=\"og:url\" content=\"https://example.com/guide/clean-js\">\n  <meta property=\"og:locale\" content=\"ru_RU\">\n\n  <!-- Карточки Twitter (X) -->\n  <meta name=\"twitter:card\" content=\"summary_large_image\">\n  <meta name=\"twitter:title\" content=\"Гайд по написанию чистого кода на JavaScript\">\n  <meta name=\"twitter:description\" content=\"Узнайте, как организовать структуру проекта и писать читаемый поддерживаемый код.\">\n  <meta name=\"twitter:image\" content=\"https://example.com/images/og-preview.jpg\">\n</head>",
    "example": "<!-- Компактная карточка (квадратное превью): -->\n<meta name=\"twitter:card\" content=\"summary\">\n<!-- Указание аккаунта автора в соцсетях: -->\n<meta name=\"twitter:site\" content=\"@devshelf_app\">",
    "points": [
      "Идеальный размер изображения для Open Graph — 1200x630 пикселей (соотношение 1.91:1) в формате JPG, PNG или WebP.",
      "URL изображения в og:image обязательно должен быть абсолютным (начинаться с https://), а не относительным.",
      "Большинство современных мессенджеров (Telegram, WhatsApp, Slack) используют og:* разметку.",
      "Для проверки сниппетов используйте официальные валидаторы: Telegram @WebpageBot, Facebook Sharing Debugger и Twitter Card Validator."
    ],
    "tags": [
      "HTML",
      "OpenGraph",
      "og",
      "Twitter Cards",
      "соцсети",
      "мессенджеры",
      "превью",
      "метаданные",
      "Telegram",
      "VK"
    ],
    "url": "https://ogp.me/",
    "search": true,
    "when": "Используйте для любой страницы статьи, каталога или лендинга, чтобы при отправке ссылки в Telegram или соцсети появлялась красивая плашка с картинкой и описанием.",
    "alternatives": "Если Open Graph не указан, соцсети попытаются автоматически спарсить title и первое попавшееся изображение со страницы.",
    "sourceName": "Open Graph Protocol",
    "licenseName": "Open Web Foundation Agreement",
    "licenseUrl": "https://ogp.me/"
  },
  {
    "lang": "html",
    "id": "xml-basics",
    "title": "XML: Синтаксис, пролог и строгие правила написания XML",
    "summary": "Основы языка eXtensible Markup Language: пролог, единственный корень, строгий синтаксис, закрытие всех тегов и кавычки в атрибутах.",
    "code": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!-- Корневой элемент должен быть строго один на весь документ -->\n<library company=\"DevShelf\" version=\"2.0\">\n  <book id=\"bk101\" category=\"web\">\n    <title>Современный веб-разработчик</title>\n    <author>Алексей Смирнов</author>\n    <year>2026</year>\n    <price currency=\"RUB\">1250.00</price>\n    <!-- Пустой тег обязательно закрывается через слэш -->\n    <available inStock=\"true\" />\n    <description>Полное руководство по HTML, CSS, JavaScript и XML.</description>\n  </book>\n  <book id=\"bk102\" category=\"backend\">\n    <title>Архитектура REST API</title>\n    <author>Елена Морозова</author>\n    <year>2025</year>\n    <price currency=\"RUB\">1500.00</price>\n    <available inStock=\"false\" />\n    <description>Разработка надежных микросервисов.</description>\n  </book>\n</library>",
    "example": "<!-- 5 предопределенных сущностей для экранирования в тексте XML: -->\n<!-- &lt; для < , &gt; для > , &amp; для & , &quot; для \" , &apos; для ' -->\n<condition>Price &lt; 500 &amp;&amp; qty &gt; 0</condition>",
    "points": [
      "Пролог <?xml version=\"1.0\" encoding=\"UTF-8\"?> должен быть самой первой строкой документа без пробелов перед ним.",
      "В отличие от HTML, в XML регистр тегов имеет значение: <item> и <Item> — это разные элементы.",
      "Каждый открывающий тег обязан иметь парный закрывающий или быть самозакрывающимся: <tag />.",
      "Значения атрибутов всегда обязаны быть в кавычках: id=\"123\", а не id=123.",
      "Спецсимволы < и & в тексте обязаны экранироваться как &lt; и &amp;."
    ],
    "tags": [
      "XML",
      "синтаксис",
      "пролог",
      "структура",
      "валидация",
      "теги",
      "атрибуты",
      "документ"
    ],
    "url": "https://www.w3.org/XML/",
    "search": true,
    "when": "Используйте при создании файлов обмена данными, RSS-лент, карт сайта sitemap.xml, манифестов robots.xml и конфигурационных файлов.",
    "alternatives": "Для легковесного обмена данными во фронтенде и REST API сегодня чаще выбирают JSON.",
    "sourceName": "W3C XML Recommendation",
    "licenseName": "W3C Document License",
    "licenseUrl": "https://www.w3.org/Consortium/Legal/copyright-documents"
  },
  {
    "lang": "html",
    "id": "xml-advanced",
    "title": "XML: Секции CDATA, пространства имен (xmlns) и валидация",
    "summary": "Вставка сырого HTML/JS без ручного экранирования через CDATA, изоляция тегов пространствами имен (xmlns) и валидация схемы.",
    "code": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<rss version=\"2.0\" \n     xmlns:content=\"http://purl.org/rss/1.0/modules/content/\"\n     xmlns:dc=\"http://purl.org/dc/elements/1.1/\">\n  <channel>\n    <title>Блог DevShelf</title>\n    <link>https://example.com</link>\n    <description>Новости и статьи о веб-разработке</description>\n    <item>\n      <title>Как работает разметка XML</title>\n      <dc:creator>Иван Петров</dc:creator>\n      <pubDate>Fri, 23 Oct 2026 12:00:00 GMT</pubDate>\n      <!-- Секция CDATA позволяет вставлять сырой HTML/код без экранирования спецсимволов -->\n      <content:encoded><![CDATA[\n        <article>\n          <h2>Введение</h2>\n          <p>Внутри блока CDATA можно свободно писать <p>, <div>, & и \".</p>\n          <pre>if (x < 10 && y > 20) { return true; }</pre>\n        </article>\n      ]]></content:encoded>\n    </item>\n  </channel>\n</rss>",
    "example": "// Чтение и парсинг XML в браузере с помощью DOMParser:\nconst xmlString = '<user id=\"42\"><name>Анна</name></user>';\nconst parser = new DOMParser();\nconst xmlDoc = parser.parseFromString(xmlString, \"application/xml\");\nconst name = xmlDoc.querySelector(\"name\").textContent;\nconsole.log(name); // \"Анна\"",
    "points": [
      "Блок <![CDATA[ ... ]]> сообщает парсеру XML не интерпретировать содержащиеся символы как разметку.",
      "Единственная последовательность, запрещенная внутри CDATA — это закрывающая комбинация ]]>.",
      "Атрибут xmlns объявляет пространство имен для предотвращения конфликта одинаковых имен тегов из разных спецификаций.",
      "Для проверки структуры XML применяются DTD или XML Schema (XSD)."
    ],
    "tags": [
      "XML",
      "CDATA",
      "xmlns",
      "пространства имен",
      "DOMParser",
      "RSS",
      "парсинг",
      "валидация"
    ],
    "url": "https://developer.mozilla.org/ru/docs/Web/XML",
    "search": true,
    "when": "Используйте CDATA при экспорте статей с HTML-разметкой в RSS, передаче скриптов или сложных формул через XML.",
    "alternatives": "В JSON для этого строки экранируются стандартным способом через обратный слэш \\.",
    "sourceName": "MDN Contributors",
    "licenseName": "CC BY-SA 2.5 or later",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    "lang": "html",
    "id": "seo-sitemap-robots",
    "title": "SEO: robots.txt, robots.xml и Sitemap.xml — управление краулерами",
    "summary": "Правила индексации для поисковиков: файл robots.txt, XML-карта sitemap.xml и robots.xml для управления обходом сайта ботами.",
    "code": "# Пример файла /robots.txt\nUser-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nDisallow: /checkout/\n\n# Специфичные правила для Яндекс и Google\nUser-agent: YandexBot\nCrawl-delay: 2\n\n# Ссылки на карты сайта для краулеров\nSitemap: https://example.com/sitemap.xml\nSitemap: https://example.com/robots.xml",
    "example": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!-- Пример файла /sitemap.xml по стандарту sitemaps.org -->\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <url>\n    <loc>https://example.com/</loc>\n    <lastmod>2026-10-23</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>https://example.com/catalog</loc>\n    <lastmod>2026-10-20</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>",
    "points": [
      "robots.txt должен располагаться строго в корне сайта по адресу /robots.txt (регистр важен!).",
      "Директива Disallow не гарантирует удаление из индекса, если на страницу есть внешние ссылки — для гарантированного исключения используйте <meta name=\"robots\" content=\"noindex\">.",
      "Каждый URL в sitemap.xml обязан быть полным абсолютным адресом с указанием протокола https://.",
      "Регулярное обновление даты <lastmod> ускоряет переиндексацию измененных страниц поисковыми ботами."
    ],
    "tags": [
      "SEO",
      "robots.txt",
      "robots.xml",
      "sitemap.xml",
      "индексация",
      "поисковые роботы",
      "краулеры",
      "Яндекс",
      "Google"
    ],
    "url": "https://developers.google.com/search/docs/crawling-indexing/robots/intro",
    "search": true,
    "when": "Настраивайте robots.txt и sitemap.xml при публикации сайта в интернет, чтобы поисковики мгновенно находили новые разделы и не тратили краулинговый бюджет на служебные страницы.",
    "alternatives": "Для блокировки отдельных страниц от поисковых роботов используйте HTTP-заголовок X-Robots-Tag: noindex.",
    "sourceName": "Google Search Central",
    "licenseName": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "lang": "html",
    "id": "html-json-ld",
    "title": "SEO: Микроразметка Schema.org и JSON-LD для красивых сниппетов",
    "summary": "Внедрение структурированных данных через JSON-LD в тег <script type=\"application/ld+json\"> для расширенных сниппетов в поиске.",
    "code": "<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"TechArticle\",\n  \"headline\": \"Полное руководство по метаданным и XML\",\n  \"description\": \"Пошаговое практическое руководство по структуре XML, поисковым тегам и сниппетам.\",\n  \"image\": \"https://example.com/images/meta-guide.jpg\",\n  \"datePublished\": \"2026-10-23T10:00:00+03:00\",\n  \"dateModified\": \"2026-10-23T12:00:00+03:00\",\n  \"author\": {\n    \"@type\": \"Person\",\n    \"name\": \"Иван Смирнов\",\n    \"url\": \"https://example.com/authors/smirnov\"\n  },\n  \"publisher\": {\n    \"@type\": \"Organization\",\n    \"name\": \"DevShelf\",\n    \"logo\": {\n      \"@type\": \"ImageObject\",\n      \"url\": \"https://example.com/logo.png\"\n    }\n  },\n  \"mainEntityOfPage\": {\n    \"@type\": \"WebPage\",\n    \"@id\": \"https://example.com/articles/metadata-guide\"\n  }\n}\n</script>",
    "example": "<!-- Микроразметка хлебных крошек (BreadcrumbList): -->\n<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"BreadcrumbList\",\n  \"itemListElement\": [\n    { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Главная\", \"item\": \"https://example.com\" },\n    { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Справочник\", \"item\": \"https://example.com/reference.html\" }\n  ]\n}\n</script>",
    "points": [
      "Формат JSON-LD рекомендован Google как наиболее удобный и надежный способ передачи семантических данных.",
      "В отличие от микроразметки Microdata, JSON-LD не требует добавления атрибутов в HTML-элементы и размещается в отдельном блоке <script>.",
      "Правильно настроенная микроразметка позволяет получать расширенные сниппеты (звезды рейтинга, цены, хлебные крошки, FAQ-аккордеоны) в поисковой выдаче.",
      "Проверяйте валидность разметки инструментом Google Rich Results Test или Яндекс Валидатором микроразметки."
    ],
    "tags": [
      "SEO",
      "JSON-LD",
      "Schema.org",
      "микроразметка",
      "сниппеты",
      "структурированные данные",
      "TechArticle",
      "Breadcrumbs"
    ],
    "url": "https://schema.org/",
    "search": true,
    "when": "Добавляйте JSON-LD на статьи, карточки товаров (Product), рецепты (Recipe), мероприятия (Event) и контакты организации (Organization).",
    "alternatives": "Устаревшие альтернативы — Microdata (атрибуты itemprop, itemscope) и RDFa.",
    "sourceName": "Schema.org",
    "licenseName": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  }
];
