export const existingTopics = [
  {
    "lang": "html",
    "id": "html-document",
    "title": "HTML: структура документа (HTML5 Boilerplate)",
    "summary": "Обязательный стандартный каркас веб-страницы: объявление стандарта, язык страницы, метаданные и тело.",
    "code": "<!doctype html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Заголовок страницы</title>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Основной заголовок</h1>\n  <script src=\"script.js\" defer></script>\n</body>\n</html>",
    "example": "<main>\n  <h1>Добро пожаловать</h1>\n  <p>Контент страницы.</p>\n</main>",
    "points": [
      "<!doctype html> переводит браузер в режим соответствия стандартам (Standards Mode) без quirks-режима.",
      "Атрибут lang=\"ru\" критически важен для синтезаторов речи (screen readers), автопереводчиков и поисковиков.",
      "Тег <meta name=\"viewport\"> гарантирует правильный масштаб и отсутствие зума на мобильных экранах."
    ],
    "tags": [
      "HTML",
      "doctype",
      "html",
      "head",
      "body",
      "структура",
      "каркас",
      "boilerplate",
      "lang",
      "viewport"
    ],
    "when": "Начинай с этого каркаса любую страницу или шаблон в проекте.",
    "alternatives": "Для AJAX-фрагментов и компонентов каркас опускается; для фреймворков каркас выносится в index.html или layout.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML"
  },
  {
    "lang": "html",
    "id": "html-metadata",
    "title": "HTML: метаданные страницы и мобильный viewport",
    "summary": "Настройка кодировки, заголовка вкладки, описания для поисковиков и темы мобильного браузера.",
    "code": "<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"Краткое емкое описание (до 160 символов) для сниппета в поисковиках\">\n  <meta name=\"theme-color\" content=\"#090d14\">\n  <link rel=\"canonical\" href=\"https://example.com/page\">\n  <title>Понятный заголовок вкладки | Название бренда</title>\n</head>",
    "example": "<meta name=\"theme-color\" content=\"#090d14\" media=\"(prefers-color-scheme: dark)\">",
    "points": [
      "<meta charset=\"utf-8\"> должен стоять в числе первых тегов внутри <head>, чтобы браузер сразу декодировал текст.",
      "<title> является главным фактором ранжирования в поисковиках и заголовком вкладки в браузере.",
      "canonical указывает поисковику основную версию страницы, предотвращая склейку и дубли контента."
    ],
    "tags": [
      "HTML",
      "meta",
      "title",
      "description",
      "viewport",
      "theme-color",
      "canonical",
      "метаданные",
      "кодировка"
    ],
    "when": "Обязательно настраивай для всех публичных страниц сайта для правильного отображения и SEO.",
    "alternatives": "Для страниц админ-панелей description и canonical обычно опускают.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/meta"
  },
  {
    "lang": "html",
    "id": "html-opengraph",
    "title": "HTML: разметка Open Graph и Twitter Cards для соцсетей",
    "summary": "Специальные метатеги, формирующие красивую карточку с превью, заголовком и картинкой при репосте в Telegram, VK и WhatsApp.",
    "code": "<!-- Open Graph (Telegram, VK, Facebook) -->\n<meta property=\"og:type\" content=\"website\">\n<meta property=\"og:site_name\" content=\"DevShelf\">\n<meta property=\"og:title\" content=\"Заголовок для ссылки в соцсети\">\n<meta property=\"og:description\" content=\"Краткое превью статьи, отображаемое под заголовком.\">\n<meta property=\"og:image\" content=\"https://example.com/og-image.jpg\">\n<meta property=\"og:image:width\" content=\"1200\">\n<meta property=\"og:image:height\" content=\"630\">\n<meta property=\"og:url\" content=\"https://example.com/page\">\n\n<!-- Twitter Cards -->\n<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:title\" content=\"Заголовок карточки\">\n<meta name=\"twitter:description\" content=\"Описание статьи для карточки\">\n<meta name=\"twitter:image\" content=\"https://example.com/og-image.jpg\">",
    "example": "<!-- Минимальный набор для Telegram: og:title, og:description, og:image -->",
    "points": [
      "Разрешение картинки og:image должно быть 1200x630 пикселей (пропорция 1.91:1) для четкого отображения на Retina.",
      "Ссылка на картинку должна быть абсолютной (https://...), иначе боты Telegram и VK её не загрузят.",
      "После изменения og-тегов в Telegram используй бота @WebpageBot, чтобы сбросить кэш превью ссылки."
    ],
    "tags": [
      "HTML",
      "opengraph",
      "og",
      "twitter",
      "social",
      "telegram",
      "vk",
      "превью",
      "репост",
      "карточка"
    ],
    "when": "Добавляй на все лендинги, статьи блога и страницы, на которые пользователи будут делиться ссылками.",
    "alternatives": "Без og: тегов соцсети выдернут первую попавшуюся картинку со страницы или оставят пустую серую плашку.",
    "url": "https://ogp.me/"
  },
  {
    "lang": "html",
    "id": "html-schema-jsonld",
    "title": "HTML: микроразметка Schema.org (JSON-LD)",
    "summary": "Структурированные данные для поисковых систем Google и Яндекс, позволяющие получить расширенные сниппеты (звезды, цены, FAQ).",
    "code": "<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebApplication\",\n  \"name\": \"DevShelf\",\n  \"url\": \"https://example.com\",\n  \"description\": \"Справочник веб-разработчика и интерактивная песочница\",\n  \"applicationCategory\": \"DeveloperApplication\",\n  \"operatingSystem\": \"All\",\n  \"offers\": {\n    \"@type\": \"Offer\",\n    \"price\": \"0\",\n    \"priceCurrency\": \"RUB\"\n  }\n}\n</script>",
    "example": "<!-- Для статей используй @type: \"Article\", для интернет-магазинов @type: \"Product\" -->",
    "points": [
      "Формат JSON-LD рекомендован Google, так как он отделен от HTML-верстки и не ломается при смене дизайна.",
      "Размещается внутри тега <script type=\"application/ld+json\"> в секции <head> или перед </body>.",
      "Проверить корректность синтаксиса можно в официальном валидаторе Google Rich Results Test."
    ],
    "tags": [
      "HTML",
      "schema",
      "json-ld",
      "микроразметка",
      "сео",
      "seo",
      "google",
      "яндекс",
      "структура"
    ],
    "when": "Используй для интернет-магазинов (товары, отзывы), блогов (автор, дата публикации), FAQ и рецептов.",
    "alternatives": "Устаревшие атрибуты Microdata (itemscope, itemprop) сложнее поддерживать при редизайне верстки.",
    "url": "https://schema.org/"
  },
  {
    "lang": "html",
    "id": "html-semantic",
    "title": "HTML: семантическая структура страницы",
    "summary": "Использование осмысленных тегов вместо бесконечных <div> для доступности, SEO и правильной архитектуры документа.",
    "code": "<header>\n  <nav aria-label=\"Основная навигация\">\n    <a href=\"/\">Главная</a>\n    <a href=\"/catalog\">Каталог</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <header>\n      <h1>Заголовок статьи</h1>\n      <p><time datetime=\"2026-03-15\">15 марта 2026</time></p>\n    </header>\n    <p>Основной текст статьи...</p>\n    <section>\n      <h2>Подраздел статьи</h2>\n      <p>Текст раздела...</p>\n    </section>\n  </article>\n\n  <aside aria-label=\"Связанные материалы\">\n    <h3>Смотрите также</h3>\n  </aside>\n</main>\n\n<footer>\n  <p>&copy; 2026 Компания</p>\n</footer>",
    "example": "<main id=\"content\">\n  <!-- Уникальное содержимое страницы -->\n</main>",
    "points": [
      "На странице должен быть ровно один тег <main>, содержащий неповторяющийся контент страницы.",
      "<article> используется для самодостаточных фрагментов (пост в блоге, комментарий, карточка товара).",
      "<section> группирует тематический блок контента и должен содержать свой заголовок h2-h6.",
      "<aside> обозначает косвенно связанный контент (сайдбар, реклама, связанные статьи)."
    ],
    "tags": [
      "HTML",
      "семантика",
      "header",
      "nav",
      "main",
      "article",
      "section",
      "aside",
      "footer",
      "структура"
    ],
    "when": "Всегда применяй семантические теги при верстке каркасов страниц и компонентов.",
    "alternatives": "Откажись от «div-супа» (верстки на сплошных div class=\"main_header\"), снижающего доступность и ухудшающего SEO.",
    "url": "https://developer.mozilla.org/ru/docs/Glossary/Semantics"
  },
  {
    "lang": "html",
    "id": "html-dialog",
    "title": "HTML: нативное модальное окно <dialog>",
    "summary": "Встроенный в HTML5 элемент всплывающего или модального окна с автоматической поддержкой клавиши Esc, блокировкой фона и фокусом.",
    "code": "<!-- Разметка модального окна -->\n<dialog id=\"modal\">\n  <h2>Заголовок диалога</h2>\n  <p>Текст сообщения или форма внутри модалки.</p>\n  <button type=\"button\" id=\"close-modal\">Закрыть</button>\n</dialog>\n\n<button type=\"button\" id=\"open-modal\">Открыть окно</button>\n\n<script>\n  const dialog = document.getElementById('modal');\n  document.getElementById('open-modal').onclick = () => dialog.showModal();\n  document.getElementById('close-modal').onclick = () => dialog.close();\n\n  // Закрытие по клику на затемненный фон (backdrop)\n  dialog.onclick = (e) => {\n    if (e.target === dialog) dialog.close();\n  };\n</script>",
    "example": "dialog::backdrop {\n  background: rgba(0, 0, 0, 0.65);\n  backdrop-filter: blur(4px);\n}",
    "points": [
      "Метод showModal() открывает окно как модальное (блокирует взаимодействие с остальной страницей и добавляет ::backdrop).",
      "Метод show() открывает обычный немодальный попап.",
      "Клавиша Esc закрывает окно автоматически из коробки без написания JS-обработчиков.",
      "Фокус клавиатуры автоматически захватывается внутри диалога (focus trap) и возвращается на кнопку открытия при закрытии."
    ],
    "tags": [
      "HTML",
      "dialog",
      "modal",
      "модальное окно",
      "попап",
      "showModal",
      "backdrop",
      "интерактив"
    ],
    "when": "Используй для форм подтверждения, всплывающих окон входа, корзины и карточек подробностей.",
    "alternatives": "Заменяет устаревшие самописные JS-модалки с кучей кода блокировки скролла и фокус-ловушек.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog"
  },
  {
    "lang": "html",
    "id": "html-details",
    "title": "HTML: спойлер и аккордеон без JavaScript (<details> и <summary>)",
    "summary": "Нативный интерактивный раскрывающийся блок, управляемый кликом пользователя без единой строчки скриптов.",
    "code": "<details>\n  <summary>Как работает доставка?</summary>\n  <p>Доставка осуществляется курьером по всей России в течение 2-4 рабочих дней.</p>\n</details>\n\n<!-- Аккордеон с эксклюзивным раскрытием (name в современных браузерах) -->\n<details name=\"faq\">\n  <summary>Вопрос 1: Какие способы оплаты?</summary>\n  <p>Карты, СБП, безналичный расчет.</p>\n</details>\n<details name=\"faq\">\n  <summary>Вопрос 2: Как оформить возврат?</summary>\n  <p>В личном кабинете в течение 14 дней.</p>\n</details>",
    "example": "details[open] summary {\n  color: #38bdf8;\n}\ndetails summary {\n  cursor: pointer;\n}",
    "points": [
      "Атрибут open указывает, открыт ли блок по умолчанию (можно добавлять программно).",
      "Атрибут name=\"group\" позволяет связывать несколько <details> в единый аккордеон (открывается только один).",
      "Полная поддержка клавиатуры: пробел и Enter раскрывают блок, когда фокус на <summary>."
    ],
    "tags": [
      "HTML",
      "details",
      "summary",
      "спойлер",
      "аккордеон",
      "faq",
      "раскрывающийся блок"
    ],
    "when": "Идеально для страниц FAQ, раскрывающихся фильтров каталога, списков изменений (Changelog).",
    "alternatives": "Не требует подключения JS-библиотек или фреймворков для простых выпадающих списков.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/details"
  },
  {
    "lang": "html",
    "id": "html-template",
    "title": "HTML: шаблоны без отображения (<template> и <slot>)",
    "summary": "Тег <template> хранит разметку на клиенте, которую браузер парсит, но не отображает до клонирования в JavaScript.",
    "code": "<template id=\"card-template\">\n  <div class=\"user-card\">\n    <h3 class=\"user-name\"></h3>\n    <p class=\"user-role\"></p>\n    <button type=\"button\" class=\"action-btn\">Написать</button>\n  </div>\n</template>\n\n<div id=\"users-list\"></div>\n\n<script>\n  const tmpl = document.getElementById('card-template');\n  const clone = tmpl.content.cloneNode(true);\n  clone.querySelector('.user-name').textContent = 'Иван Петров';\n  clone.querySelector('.user-role').textContent = 'Frontend Developer';\n  document.getElementById('users-list').appendChild(clone);\n</script>",
    "example": "const clone = template.content.cloneNode(true);",
    "points": [
      "Содержимое <template> не выполняется при загрузке страницы: скрипты не исполняются, картинки не скачиваются.",
      "Для вставки разметки используется template.content.cloneNode(true).",
      "Широко применяется в веб-компонентах (Web Components) совместно с Shadow DOM и тегом <slot>."
    ],
    "tags": [
      "HTML",
      "template",
      "slot",
      "шаблон",
      "компонент",
      "cloneNode",
      "web components"
    ],
    "when": "Используй для рендеринга списков данных на чистом JS без сборки через шаблонизаторы.",
    "alternatives": "Безопаснее и быстрее конкатенации строк через innerHTML, так как защищает от XSS-инъекций.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/template"
  },
  {
    "lang": "html",
    "id": "html-form",
    "title": "HTML: форма <form> и методы передачи данных",
    "summary": "Контейнер для сбора пользовательского ввода с настройкой методов GET/POST и типа кодирования.",
    "code": "<form action=\"/api/feedback\" method=\"POST\" enctype=\"multipart/form-data\">\n  <label for=\"user-email\">Ваш Email:</label>\n  <input type=\"email\" id=\"user-email\" name=\"email\" required placeholder=\"name@example.com\">\n\n  <label for=\"user-msg\">Сообщение:</label>\n  <textarea id=\"user-msg\" name=\"message\" rows=\"4\" required></textarea>\n\n  <button type=\"submit\">Отправить заявку</button>\n</form>",
    "example": "<form id=\"search-form\" method=\"GET\" action=\"/search\">\n  <input type=\"search\" name=\"q\">\n</form>",
    "points": [
      "Для загрузки файлов через форму обязателен атрибут enctype=\"multipart/form-data\" и method=\"POST\".",
      "Для поисковых запросов и фильтров используй method=\"GET\", чтобы параметры сохранялись в URL.",
      "Атрибут novalidate отключает стандартную браузерную всплывающую валидацию, если ты настраиваешь свою."
    ],
    "tags": [
      "HTML",
      "form",
      "форма",
      "method",
      "action",
      "post",
      "get",
      "enctype",
      "submit"
    ],
    "when": "Используй для авторизации, оформления заказа, обратной связи и поисковых панелей.",
    "alternatives": "В SPA отправка перехватывается через e.preventDefault() в событии submit и отправляется через fetch().",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/form"
  },
  {
    "lang": "html",
    "id": "html-input-text",
    "title": "HTML: текстовые поля ввода <input>",
    "summary": "Разновидности полей ввода для текста, почты, паролей, поиска и телефонных номеров с правильными экранными клавиатурами.",
    "code": "<!-- Текстовое поле -->\n<input type=\"text\" name=\"username\" autocomplete=\"username\" required>\n\n<!-- Email (открывает клавиатуру с символом @ на смартфонах) -->\n<input type=\"email\" name=\"email\" autocomplete=\"email\" required>\n\n<!-- Пароль (скрывает символы точками) -->\n<input type=\"password\" name=\"password\" autocomplete=\"current-password\" minlength=\"8\" required>\n\n<!-- Поле поиска (содержит крестик очистки в браузерах) -->\n<input type=\"search\" name=\"query\" placeholder=\"Поиск по сайту...\">\n\n<!-- Телефон (открывает цифровую клавиатуру на смартфонах) -->\n<input type=\"tel\" name=\"phone\" autocomplete=\"tel\" pattern=\"\\+7\\s?\\(?\\d{3}\\)?\\s?\\d{3}-?\\d{2}-?\\d{2}\">",
    "example": "<input type=\"email\" inputmode=\"email\" enterkeyhint=\"next\">",
    "points": [
      "Атрибут autocomplete помогает браузеру подставить данные из менеджера паролей или профиля.",
      "Атрибут inputmode управляет типом вызываемой виртуальной клавиатуры на смартфонах.",
      "Каждый <input> должен быть связан с <label> через атрибуты for=\"id\" или быть вложен внутрь него."
    ],
    "tags": [
      "HTML",
      "input",
      "text",
      "email",
      "password",
      "tel",
      "search",
      "поля ввода",
      "клавиатура"
    ],
    "when": "Используй для любых форм ввода персональных и учетных данных.",
    "alternatives": "Для многострочного текста всегда используй тег <textarea>, а не <input>.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input"
  },
  {
    "lang": "html",
    "id": "html-input-choice",
    "title": "HTML: чекбоксы и радиокнопки (<fieldset> и <legend>)",
    "summary": "Элементы одиночного и множественного выбора с группировкой по стандарту доступности.",
    "code": "<!-- Группа радиокнопок (выбор 1 из нескольких) -->\n<fieldset>\n  <legend>Выберите тарифный план:</legend>\n  <label>\n    <input type=\"radio\" name=\"plan\" value=\"free\" checked>\n    Бесплатный (0 ₽)\n  </label>\n  <label>\n    <input type=\"radio\" name=\"plan\" value=\"pro\">\n    Профессиональный (990 ₽/мес)\n  </label>\n</fieldset>\n\n<!-- Чекбокс (множественный выбор или согласие) -->\n<label>\n  <input type=\"checkbox\" name=\"terms\" required>\n  Я согласен с правилами сервиса\n</label>",
    "example": "<input type=\"checkbox\" id=\"theme\" role=\"switch\">",
    "points": [
      "У связанных радиокнопок должен быть одинаковый атрибут name, чтобы браузер переключал их взаимоисключающе.",
      "<fieldset> объединяет связанные поля, а <legend> служит заголовком группы для скринридеров.",
      "Для стилизации под тумблер (switch) часто добавляют атрибут role=\"switch\"."
    ],
    "tags": [
      "HTML",
      "checkbox",
      "radio",
      "fieldset",
      "legend",
      "чекбокс",
      "радиокнопка",
      "выбор"
    ],
    "when": "Используй для опросов, фильтров в интернет-магазинах, согласий и выбора тарифов.",
    "alternatives": "Для кастомного оформления скрывай нативный input через opacity: 0 или appearance: none, сохраняя фокус с клавиатуры.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/checkbox"
  },
  {
    "lang": "html",
    "id": "html-select-datalist",
    "title": "HTML: списки <select> и автодополнение <datalist>",
    "summary": "Выпадающие меню выбора и текстовые поля с предложенными вариантами автозаполнения.",
    "code": "<!-- Выпадающий список select -->\n<label for=\"city-select\">Выберите город:</label>\n<select id=\"city-select\" name=\"city\">\n  <option value=\"\" disabled selected>-- Выберите вариант --</option>\n  <optgroup label=\"Россия\">\n    <option value=\"msk\">Москва</option>\n    <option value=\"spb\">Санкт-Петербург</option>\n  </optgroup>\n  <optgroup label=\"Беларусь\">\n    <option value=\"minsk\">Минск</option>\n  </optgroup>\n</select>\n\n<!-- Текстовое поле с автодополнением datalist -->\n<label for=\"lang-input\">Язык программирования:</label>\n<input list=\"lang-options\" id=\"lang-input\" name=\"language\" placeholder=\"Начните ввод...\">\n<datalist id=\"lang-options\">\n  <option value=\"JavaScript\">\n  <option value=\"TypeScript\">\n  <option value=\"PHP\">\n  <option value=\"Python\">\n</datalist>",
    "example": "<select name=\"skills\" multiple size=\"4\">\n  <!-- Множественный выбор -->\n</select>",
    "points": [
      "<datalist> в отличие от <select> разрешает пользователю ввести свой собственный вариант, отсутствующий в списке.",
      "<optgroup> группирует опции внутри <select> с логическими заголовками.",
      "Для множественного выбора в <select> добавляется атрибут multiple."
    ],
    "tags": [
      "HTML",
      "select",
      "datalist",
      "option",
      "optgroup",
      "список",
      "выпадающий список",
      "автодополнение"
    ],
    "when": "Используй <select> при строгом наборе значений, а <datalist> — для подсказок в строках поиска и городах.",
    "alternatives": "Для сложных выпадающих меню с картинками используют кастомные ARIA-компоненты (combobox).",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/select"
  },
  {
    "lang": "html",
    "id": "html-images-responsive",
    "title": "HTML: адаптивные изображения (<picture>, srcset, loading=\"lazy\")",
    "summary": "Оптимальная загрузка графики под разные экраны, форматы WebP/AVIF и отложенная загрузка для ускорения сайта.",
    "code": "<picture>\n  <!-- Современный сверхсжатый формат AVIF -->\n  <source type=\"image/avif\" srcset=\"hero.avif\">\n  <!-- Формат WebP для браузеров без AVIF -->\n  <source type=\"image/webp\" srcset=\"hero.webp\">\n  <!-- Разные картинки под экраны разной ширины -->\n  <source media=\"(min-width: 1024px)\" srcset=\"hero-desktop.jpg\">\n  <source media=\"(min-width: 640px)\" srcset=\"hero-tablet.jpg\">\n  <!-- Обязательный запасной вариант -->\n  <img src=\"hero-mobile.jpg\"\n       alt=\"Разработчик за рабочим местом с кодом на мониторе\"\n       width=\"800\"\n       height=\"600\"\n       loading=\"lazy\"\n       decoding=\"async\">\n</picture>",
    "example": "<img src=\"thumb.webp\" srcset=\"thumb.webp 1x, thumb-2x.webp 2x\" alt=\"Миниатюра\">",
    "points": [
      "Всегда указывай атрибуты width и height на <img> — это предотвращает сдвиг макета (CLS, Cumulative Layout Shift).",
      "loading=\"lazy\" указывает браузеру не загружать картинку, пока пользователь не доскроллит до неё.",
      "Атрибут alt обязателен для доступности и индексации картинок поисковиками."
    ],
    "tags": [
      "HTML",
      "picture",
      "img",
      "srcset",
      "webp",
      "avif",
      "lazy",
      "адаптивные картинки",
      "оптимизация"
    ],
    "when": "Обязательно для фотогалерей, баннеров, карточек каталога и медиа-тяжелых сайтов.",
    "alternatives": "Простой <img src=\"huge.jpg\"> приводит к медленной загрузке сайта и снижению позиций в Google PageSpeed.",
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Structuring_content/Responsive_images"
  },
  {
    "lang": "html",
    "id": "html-video-audio",
    "title": "HTML: видео и аудиоплеер (<video> и <audio>)",
    "summary": "Нативное воспроизведение мультимедиа без флеша и сторонних плагинов с управлением через интерфейс и JavaScript.",
    "code": "<!-- Видеоплеер -->\n<video controls\n       preload=\"metadata\"\n       poster=\"/images/poster.jpg\"\n       width=\"800\"\n       height=\"450\"\n       playsinline>\n  <source src=\"/media/video.mp4\" type=\"video/mp4\">\n  <source src=\"/media/video.webm\" type=\"video/webm\">\n  <track kind=\"subtitles\" src=\"/media/subs-ru.vtt\" srclang=\"ru\" label=\"Русский\" default>\n  Ваш браузер не поддерживает встроенное видео.\n</video>\n\n<!-- Фоновое автовоспроизводимое видео (muted обязателен) -->\n<video autoplay loop muted playsinline poster=\"/images/bg-poster.jpg\" class=\"bg-video\">\n  <source src=\"/media/ambient.mp4\" type=\"video/mp4\">\n</video>",
    "example": "<audio controls src=\"/audio/track.mp3\"></audio>",
    "points": [
      "Браузеры блокируют autoplay видео со звуком: для автозапуска видео обязательно должен быть указан атрибут muted.",
      "Атрибут playsinline критически важен для iOS Safari, иначе видео принудительно разворачивается на весь экран.",
      "Элемент <track> позволяет подключать субтитры и транскрипцию в формате WebVTT (.vtt)."
    ],
    "tags": [
      "HTML",
      "video",
      "audio",
      "плеер",
      "видео",
      "аудио",
      "poster",
      "autoplay",
      "мультимедиа"
    ],
    "when": "Используй для видеопрезентаций, курсов, фоновых динамических обложек и подкастов.",
    "alternatives": "Для YouTube и Vimeo используются вставки <iframe>, но нативный <video> дает полный контроль над стилями.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video"
  },
  {
    "lang": "html",
    "id": "html-aria-accessibility",
    "title": "HTML: доступность WAI-ARIA и клавиатурная навигация",
    "summary": "Атрибуты для корректной работы со скринридерами (программами чтения экрана для незрячих пользователей) и управления с клавиатуры.",
    "code": "<!-- Кнопка с понятной меткой, если внутри только иконка -->\n<button type=\"button\" aria-label=\"Закрыть модальное окно\">\n  <svg aria-hidden=\"true\" width=\"16\" height=\"16\"><path d=\"...\"/></svg>\n</button>\n\n<!-- Индикатор раскрытого состояния меню -->\n<button type=\"button\" aria-expanded=\"false\" aria-controls=\"mobile-nav\">\n  Меню\n</button>\n<nav id=\"mobile-nav\" hidden>\n  <a href=\"/\">Главная</a>\n</nav>\n\n<!-- Живой регион для динамических уведомлений без перезагрузки -->\n<div id=\"status-msg\" role=\"status\" aria-live=\"polite\">\n  Товар успешно добавлен в корзину!\n</div>",
    "example": "<div role=\"alert\" aria-live=\"assertive\">Ошибка подключения к серверу!</div>",
    "points": [
      "Первое правило ARIA: если есть нативный HTML-тег (button, a, dialog, input), используй его, а не div с role=\"button\".",
      "aria-hidden=\"true\" скрывает декоративные элементы (иконки, фоновые иллюстрации) от скринридеров.",
      "aria-live=\"polite\" сообщает пользователю скринридера о произошедшем событии в паузе речи."
    ],
    "tags": [
      "HTML",
      "aria",
      "accessibility",
      "a11y",
      "доступность",
      "скринридер",
      "aria-label",
      "aria-live"
    ],
    "when": "Обязательно для иконочных кнопок, интерактивных меню, тостов и динамических виджетов.",
    "alternatives": "Недоступные интерфейсы теряют пользователей с ограничениями и получают штрафы в поисковом ранжировании.",
    "url": "https://developer.mozilla.org/ru/docs/Web/Accessibility/ARIA"
  },
  {
    "lang": "css",
    "id": "css-box-model",
    "title": "CSS: блочная модель и box-sizing: border-box",
    "summary": "Фундамент верстки: расчет ширины и высоты элементов, внутренние (padding) и внешние (margin) отступы, схлопывание отступов.",
    "code": "/* Универсальный сброс для всех проектов */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 320px;\n  padding: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  margin-bottom: 16px;\n  /* При border-box реальная ширина блока останется ровно 320px! */\n}",
    "example": "margin: 0 auto; /* Горизонтальное центрирование блока с фиксированной шириной */",
    "points": [
      "При стандартном content-box padding и border прибавляются к width, ломая сетку (320 + 48 + 2 = 370px).",
      "При border-box размеры padding и border включаются внутрь заданной ширины и высоты.",
      "Схлопывание внешних отступов (margin collapsing) происходит у соседних вертикальных блоков: побеждает больший отступ."
    ],
    "tags": [
      "CSS",
      "box-sizing",
      "border-box",
      "блочная модель",
      "padding",
      "margin",
      "отступы",
      "каркас"
    ],
    "when": "Базовое правило для первой строки любого CSS-файла в современной веб-разработке.",
    "alternatives": "Старый режим content-box используется только в специфических legacy-проектах.",
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics/Box_model"
  },
  {
    "lang": "css",
    "id": "css-flexbox-container",
    "title": "CSS: Flexbox контейнер (направление и отступы gap)",
    "summary": "Одномерная система раскладки по главной и поперечной осям. Управление направлением элементов и интервалами.",
    "code": ".flex-container {\n  display: flex;\n  flex-direction: row; /* row | row-reverse | column | column-reverse */\n  flex-wrap: wrap;     /* nowrap | wrap | wrap-reverse */\n  gap: 16px;           /* Расстояние между колонками и рядами */\n}\n\n/* Колончатая раскладка для мобильных */\n@media (max-width: 768px) {\n  .flex-container {\n    flex-direction: column;\n    gap: 12px;\n  }\n}",
    "example": "display: inline-flex; /* Ведет себя как строчный элемент снаружи и flex внутри */",
    "points": [
      "Свойство gap заменяет костыли со сложными отрицательными margin и псевдоклассами :last-child.",
      "flex-direction: column меняет главную ось на вертикальную (justify-content теперь управляет высотой).",
      "flex-wrap: wrap разрешает элементам переноситься на новую строку при нехватке места."
    ],
    "tags": [
      "CSS",
      "flexbox",
      "flex",
      "flex-direction",
      "flex-wrap",
      "gap",
      "раскладка",
      "флекс"
    ],
    "when": "Идеально для навигационных панелей, кнопочных групп, шапок сайтов и однострочных панелей.",
    "alternatives": "Для двумерных табличных сеток (строки + столбцы одновременно) предпочтительнее CSS Grid.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox"
  },
  {
    "lang": "css",
    "id": "css-flexbox-alignment",
    "title": "CSS: выравнивание во Flexbox (justify-content, align-items)",
    "summary": "Выравнивание элементов по главной оси (горизонталь) и поперечной оси (вертикаль), центрирование элементов.",
    "code": ".parent {\n  display: flex;\n  /* Выравнивание по главной оси (X при row) */\n  justify-content: space-between; \n  /* center | flex-start | flex-end | space-between | space-around | space-evenly */\n\n  /* Выравнивание по поперечной оси (Y при row) */\n  align-items: center; \n  /* stretch | center | flex-start | flex-end | baseline */\n}\n\n/* Идеальное центрирование блока по центру экрана */\n.hero-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}",
    "example": "margin-left: auto; /* Во Flexbox прижимает конкретный элемент к правому краю! */",
    "points": [
      "Знаменитая задача «центрирование по вертикали и горизонтали» решается тремя строками: display: flex; justify-content: center; align-items: center.",
      "Во Flexbox правило margin-left: auto или margin-top: auto поглощает всё свободное пространство с соответствующей стороны.",
      "align-items: stretch по умолчанию растягивает дочерние элементы на всю высоту самого высокого соседа."
    ],
    "tags": [
      "CSS",
      "flexbox",
      "justify-content",
      "align-items",
      "центрирование",
      "выравнивание",
      "флекс"
    ],
    "when": "Для центрирования модальных окон, распределения пунктов шапки (логотип слева, профиль справа).",
    "alternatives": "Старые методы центрирования через position: absolute; transform: translate(-50%, -50%) больше не нужны.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container"
  },
  {
    "lang": "css",
    "id": "css-flexbox-items",
    "title": "CSS: элементы Flexbox (flex-grow, flex-shrink, flex-basis)",
    "summary": "Управление тем, как конкретные дочерние элементы сжимаются, растягиваются и делят доступное место.",
    "code": ".flex-item {\n  /* Сокращенная запись: grow | shrink | basis */\n  flex: 1 1 auto;\n}\n\n/* Сайдбар фиксированной ширины и эластичный контент */\n.sidebar {\n  flex: 0 0 280px; /* Не растет, не сжимается, ровно 280px */\n}\n\n.content {\n  flex: 1 1 0;     /* Забирает ВСЁ оставшееся свободное пространство */\n  min-width: 0;    /* Критично для предотвращения выпадания текста при flex! */\n}",
    "example": "align-self: flex-end; /* Переопределяет выравнивание для одного конкретного элемента */",
    "points": [
      "flex: 1 (эквивалент 1 1 0) распределяет место поровну между соседями.",
      "min-width: 0 на flex-элементе предотвращает распирание контейнера длинными словами или блоками кода с overflow: auto.",
      "Свойство order позволяет визуально менять порядок блоков без изменения HTML-разметки."
    ],
    "tags": [
      "CSS",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "min-width",
      "order",
      "align-self"
    ],
    "when": "Для верстки двухколоночных макетов «сайдбар + контент», адаптивных карточек и гибких тулбаров.",
    "alternatives": "Указание жестких width в процентах без flex-basis часто приводит к переносу и переполнению.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/flex"
  },
  {
    "lang": "css",
    "id": "css-grid-container",
    "title": "CSS Grid: двумерная сетка (колонки fr, repeat, minmax)",
    "summary": "Мощнейшая система двумерных сеток. Управление колонками, строками и пропорциями с помощью единицы fr.",
    "code": ".grid-layout {\n  display: grid;\n  /* 3 колонки: сайдбар 260px, контент берет 2 доли, правая колонка 1 долю */\n  grid-template-columns: 260px 2fr 1fr;\n  grid-template-rows: auto 1fr auto;\n  gap: 24px;\n  min-height: 100vh;\n}\n\n/* Компактная запись повторения: 4 равные колонки */\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}",
    "example": "display: inline-grid;",
    "points": [
      "Единица fr (fraction) делит свободное место пропорционально заданным долям.",
      "repeat(count, track) сокращает повторение колонок: repeat(12, 1fr) создаст 12-колоночную классическую сетку.",
      "gap задает интервал между ячейками без краевых отступов у первой и последней колонки."
    ],
    "tags": [
      "CSS",
      "grid",
      "css grid",
      "сетка",
      "grid-template-columns",
      "fr",
      "repeat",
      "gap"
    ],
    "when": "Для дашбордов, сложных страниц порталов, галерей товаров и каталогов.",
    "alternatives": "Flexbox требует вложенных оберток row/col, тогда как Grid описывает всю сетку в одном месте.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout"
  },
  {
    "lang": "css",
    "id": "css-grid-autofit",
    "title": "CSS Grid: адаптивная сетка без медиа-запросов (auto-fit & minmax)",
    "summary": "Золотой стандарт адаптивности: карточки автоматически перестраиваются из 4 колонок в 3, 2 и 1 при сужении экрана.",
    "code": ".responsive-grid {\n  display: grid;\n  /* Колонки не меньше 280px, при наличии места делят пространство поровну */\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n\n/* Разница между auto-fill и auto-fit:\n   - auto-fit: растягивает карточки на всю ширину, если их мало.\n   - auto-fill: оставляет пустые пустые места для будущих колонок. */",
    "example": "grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));",
    "points": [
      "Позволяет избавиться от десятков @media экранов: браузер сам вычисляет оптимальное количество колонок.",
      "Конструкция min(100%, 280px) внутри minmax гарантирует, что на экранах уже 280px не появится горизонтальный скролл.",
      "Отлично сочетается с CSS-свойством subgrid для выравнивания заголовков и кнопок внутри карточек."
    ],
    "tags": [
      "CSS",
      "grid",
      "auto-fit",
      "auto-fill",
      "minmax",
      "адаптивность",
      "карточки",
      "каталог"
    ],
    "when": "Основное решение для сетки карточек товаров, статей блога и портфолио.",
    "alternatives": "Ручные @media (max-width: 1200px), @media (max-width: 900px), @media (max-width: 600px).",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout"
  },
  {
    "lang": "css",
    "id": "css-container-queries",
    "title": "CSS: контейнерные запросы (@container)",
    "summary": "Стилизация компонентов в зависимости от ширины их родительского контейнера, а не всего экрана браузера.",
    "code": "/* 1. Объявляем родителя контекстом контейнера */\n.card-wrapper {\n  container-type: inline-size;\n  container-name: card;\n}\n\n/* 2. Стили по умолчанию (для узких колонок / мобильных) */\n.user-card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n/* 3. Когда родитель шире 500px — компонент перестраивается в горизонтальный ряд! */\n@container card (min-width: 500px) {\n  .user-card {\n    flex-direction: row;\n    align-items: center;\n  }\n}",
    "example": "@container (min-width: 400px) and (max-width: 700px) { ... }",
    "points": [
      "Решает главную проблему медиа-запросов: карточка выглядит одинаково адаптивно и в сайдбаре, и в центре страницы.",
      "container-type: inline-size отслеживает ширину по горизонтальной оси.",
      "Поддерживается во всех современных браузерах (Chrome 105+, Safari 16+, Firefox 110+)."
    ],
    "tags": [
      "CSS",
      "container queries",
      "@container",
      "container-type",
      "компоненты",
      "адаптивность"
    ],
    "when": "Для создания переиспользуемых UI-виджетов, виджетов сайдбара и независимых дизайн-систем.",
    "alternatives": "Медиа-запросы @media реагируют только на окно браузера, заставляя писать классы .card--sidebar.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_containment/Container_queries"
  },
  {
    "lang": "css",
    "id": "css-has-selector",
    "title": "CSS: родительский селектор :has()",
    "summary": "Стилизация элемента на основе того, какие потомки находятся внутри него или в каком они состоянии.",
    "code": "/* Стилизовать карточку, только если внутри есть изображение */\n.card:has(img) {\n  grid-template-columns: 200px 1fr;\n}\n\n/* Стилизовать форму, если хоть одно поле невалидно */\nform:has(input:invalid) {\n  border-left: 2px solid #ef4444;\n}\n\n/* Подсветить метку label, когда связанный чекбокс отмечен */\nlabel:has(input:checked) {\n  color: #38bdf8;\n  font-weight: 600;\n}\n\n/* Заблокировать скролл страницы при открытом нативном диалоге */\nhtml:has(dialog[open]) {\n  overflow: hidden;\n}",
    "example": "header:has(.nav-open) { backdrop-filter: blur(8px); }",
    "points": [
      ":has() долгое время называли «святым граалем CSS» — возможность влиять на предков без JavaScript.",
      "Позволяет полностью избавиться от JS-обработчиков добавления классов вроде \"has-error\", \"is-checked\".",
      "Поддерживается во всех современных браузерах с 2023 года."
    ],
    "tags": [
      "CSS",
      ":has",
      "селектор предка",
      "родительский селектор",
      "псевдокласс",
      "селекторы"
    ],
    "when": "Для стилизации форм, состояний карточек, навигационных переключателей.",
    "alternatives": "Раньше требовалось вешать JS-слушатели событий change/input и переключать класс родителю.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:has"
  },
  {
    "lang": "css",
    "id": "css-is-where",
    "title": "CSS: современные селекторы :is() и :where()",
    "summary": "Группировка длинных цепочек селекторов и управление весом (специфичностью) правил.",
    "code": "/* Вместо длинного перечисления: */\n/* header h1, header h2, main h1, main h2, footer h1, footer h2 */\n:is(header, main, footer) :is(h1, h2) {\n  margin-bottom: 0.5rem;\n  font-weight: 700;\n}\n\n/* :where() работает аналогично, но ЕГО СПЕЦИФИЧНОСТЬ ВСЕГДА РАВНА 0! */\n:where(article, section) p {\n  color: #94a3b8;\n  /* Любой отдельный класс .text легко переопределит это свойство без !important */\n}",
    "example": ":where(button, input, select) { font-family: inherit; }",
    "points": [
      ":is() принимает специфичность самого «тяжелого» селектора из переданного списка.",
      ":where() ВСЕГДА имеет нулевую специфичность (0,0,0) — идеально для базовых сбросов (reset/normalize).",
      "Селекторы являются прощающими (forgiving): если один пункт синтаксически не поддерживается, остальные продолжат работать."
    ],
    "tags": [
      "CSS",
      ":is",
      ":where",
      "специфичность",
      "группировка",
      "селекторы",
      "сброс"
    ],
    "when": "Используй :where() для библиотек компонентов и CSS-сбросов, а :is() — для сокращения DRY кода.",
    "alternatives": "Устаревшие громоздкие селекторы на 5 строк с дублированием стилей.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/:is"
  },
  {
    "lang": "css",
    "id": "css-variables",
    "title": "CSS: пользовательские переменные (Custom Properties var())",
    "summary": "Динамические переменные на уровне браузера: легкое переключение темной/светлой темы и наследование стилей.",
    "code": ":root {\n  --bg-primary: #090d14;\n  --text-main: #f8fafc;\n  --accent: #38bdf8;\n  --radius: 8px;\n}\n\nbody.light {\n  --bg-primary: #ffffff;\n  --text-main: #0f172a;\n  --accent: #0284c7;\n}\n\n.button {\n  background: var(--accent);\n  color: #ffffff;\n  border-radius: var(--radius);\n  /* Запасное значение, если переменная не объявлена: */\n  padding: var(--btn-padding, 8px 16px);\n}",
    "example": "element.style.setProperty('--x', event.clientX + 'px'); /* Изменение из JS! */",
    "points": [
      "В отличие от SASS/LESS переменных, CSS-переменные вычисляются на лету в браузере и реагируют на DOM-дерево.",
      "Переменными можно легко управлять из JavaScript через element.style.setProperty(\"--color\", val).",
      "Поддерживают fallback: var(--main-color, #333333)."
    ],
    "tags": [
      "CSS",
      "variables",
      "var",
      "custom properties",
      "переменные",
      "темизация",
      "dark mode"
    ],
    "when": "Обязательно для дизайн-систем, переключения тем (светлая/темная) и гибких компонентов.",
    "alternatives": "Жестко захардкоженные цвета в коде делают редизайн и смену темы мучительными.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/Using_CSS_custom_properties"
  },
  {
    "lang": "css",
    "id": "css-math-functions",
    "title": "CSS: математические функции (clamp, min, max, calc)",
    "summary": "Отзывчивая типографика и динамические размеры без дискретных медиа-запросов.",
    "code": "/* Адаптивный размер заголовка: \n   минимум 28px, идеально 4vw, максимум 48px */\nh1 {\n  font-size: clamp(1.75rem, 4vw, 3rem);\n}\n\n/* Отступы, плавно уменьшающиеся на мобильных */\n.container {\n  padding: clamp(16px, 5vw, 48px);\n  width: min(100% - 32px, 1200px);\n  /* Элемент центрирован, не шире 1200px, с полями минимум по 16px по бокам */\n  margin-inline: auto;\n}\n\n.sidebar {\n  /* Выбираем большее: 300px или треть экрана */\n  width: max(300px, 33vw);\n}",
    "example": "width: calc(100% - 240px); /* Вычитание пикселей из процентов */",
    "points": [
      "clamp(min, val, max) избавляет от написания 5 медиа-запросов под разные разрешения экранов для шрифтов.",
      "margin-inline: auto является современным стандартом для margin: 0 auto с поддержкой RTL.",
      "Внутри clamp, min, max можно опускать слово calc(): calc(100% - 20px) пишется просто 100% - 20px."
    ],
    "tags": [
      "CSS",
      "clamp",
      "min",
      "max",
      "calc",
      "математика",
      "типографика",
      "флюидный дизайн"
    ],
    "when": "Для плавно масштабируемых заголовков, отступов секций и адаптивных контейнеров сайтов.",
    "alternatives": "Ступенчатые медиа-запросы @media (max-width: 768px) { h1 { font-size: 24px; } } выглядят дергано.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/clamp"
  },
  {
    "lang": "css",
    "id": "css-sticky-position",
    "title": "CSS: липкое позиционирование (position: sticky)",
    "summary": "Фиксация шапки или сайдбара при скролле внутри родительского контейнера.",
    "code": ".sticky-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(9, 13, 20, 0.85);\n  backdrop-filter: blur(8px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n\n/* Липкий сайдбар при скролле длинной статьи */\n.sticky-sidebar {\n  position: sticky;\n  top: 24px;\n  align-self: flex-start; /* Обязательно во флекс-контейнере! */\n}",
    "example": "thead th { position: sticky; top: 0; } /* Залипание шапки таблицы данных */",
    "points": [
      "Главная причина, почему sticky не работает: у одного из родителей установлен overflow: hidden, auto или scroll.",
      "Во Flexbox контейнере элемент по умолчанию растягивается на всю высоту (stretch). Чтобы sticky заработал, укажи align-self: flex-start.",
      "Обязательно должно быть указано хотя бы одно координатное свойство (top, bottom, left или right)."
    ],
    "tags": [
      "CSS",
      "sticky",
      "position",
      "липкая шапка",
      "сайдбар",
      "скролл",
      "позиционирование"
    ],
    "when": "Для фиксированных шапок сайтов, плавающего оглавления документации и шапок таблиц данных.",
    "alternatives": "position: fixed вырывает элемент из потока навсегда, требуя компенсирующего padding у body.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/position#sticky"
  },
  {
    "lang": "css",
    "id": "css-transitions-animations",
    "title": "CSS: плавные переходы (transition) и @keyframes",
    "summary": "Создание естественных микроанимаций интерфейса и аппаратное ускорение через transform и opacity.",
    "code": "/* Плавный отклик кнопок (compositor-only свойства) */\n.btn {\n  background: #2563eb;\n  transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1),\n              background-color 150ms ease,\n              box-shadow 150ms ease;\n}\n\n.btn:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n}\n\n.btn:active {\n  transform: translateY(1px);\n}\n\n/* Бесконечная плавная анимация спиннера загрузки */\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n.spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-top-color: #38bdf8;\n  border-radius: 50%;\n  animation: spin 700ms linear infinite;\n}",
    "example": "@media (prefers-reduced-motion: reduce) {\n  * { animation: none !important; transition: none !important; }\n}",
    "points": [
      "Для производительности анимируй только transform и opacity (они обрабатываются видеокартой без перерасчета макета Reflow/Repaint).",
      "Никогда не анимируй width, height, top, left, margin на hover — это вызывает лаги (jank) и просадку FPS.",
      "Всегда уважай настройку prefers-reduced-motion для пользователей с вестибулярными расстройствами."
    ],
    "tags": [
      "CSS",
      "transition",
      "animation",
      "@keyframes",
      "анимация",
      "микроанимации",
      "transform"
    ],
    "when": "Для интерактивных кнопок, карточек, выпадающих меню, модалок и индикаторов загрузки.",
    "alternatives": "Тяжелые JS-библиотеки анимаций избыточны для 95% задач верстки интерфейсов.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_transitions/Using_CSS_transitions"
  },
  {
    "lang": "css",
    "id": "css-backdrop-blur",
    "title": "CSS: эффект матового стекла (Glassmorphism & backdrop-filter)",
    "summary": "Размытие фонового содержимого под полупрозрачными панелями, шапками и карточками.",
    "code": ".glass-panel {\n  background: rgba(13, 18, 29, 0.75);\n  backdrop-filter: blur(12px) saturate(160%);\n  -webkit-backdrop-filter: blur(12px) saturate(160%); /* Для Safari */\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.5);\n}",
    "example": "backdrop-filter: blur(8px);",
    "points": [
      "Для работы эффекта фон самого элемента должен быть полупрозрачным (rgba() или прозрачный hex).",
      "Обязательно добавляй префикс -webkit-backdrop-filter для полной поддержки в iOS Safari и macOS.",
      "Добавление saturate(160%) делает просвечивающие цвета под стеклом более сочными и чистыми."
    ],
    "tags": [
      "CSS",
      "glassmorphism",
      "backdrop-filter",
      "blur",
      "стекло",
      "матовое стекло",
      "эффекты"
    ],
    "when": "Идеально для плавающих шапок сайта, контекстных меню, модальных оверлеев и тулбаров.",
    "alternatives": "Устаревшие сплошные непрозрачные плашки выглядят тяжело в современных интерфейсах.",
    "url": "https://developer.mozilla.org/ru/docs/Web/CSS/backdrop-filter"
  },
  {
    "lang": "javascript",
    "id": "js-dom-selection",
    "title": "JS: выборка и обход элементов DOM (querySelector, closest)",
    "summary": "Быстрый и надежный поиск элементов в документе по CSS-селекторам и поиск ближайших предков.",
    "code": "// Выборка одного элемента\nconst searchInput = document.querySelector('#search-input');\n\n// Выборка коллекции элементов\nconst buttons = document.querySelectorAll('.action-btn');\nbuttons.forEach(btn => {\n  btn.classList.add('ready');\n});\n\n// closest: поиск ближайшего родителя по селектору вверх по дереву\ndocument.addEventListener('click', (event) => {\n  const card = event.target.closest('.recipe-card');\n  if (card) {\n    console.log('Кликнули внутри карточки:', card.dataset.id);\n  }\n});",
    "example": "if (element.matches(':hover')) { ... }",
    "points": [
      "querySelector возвращает первый найденный элемент или null (если ничего не найдено).",
      "querySelectorAll возвращает статичный NodeList, который можно напрямую обходить через .forEach().",
      "Метод closest() ищет элемент среди предков (включая сам целевой элемент), решая 99% задач делегирования."
    ],
    "tags": [
      "JavaScript",
      "DOM",
      "querySelector",
      "querySelectorAll",
      "closest",
      "matches",
      "поиск в DOM"
    ],
    "when": "Базовые методы для инициализации любых скриптов и компонентов на странице.",
    "alternatives": "Устаревшие getElementsByClassName и getElementsByTagName возвращают «живые» HTMLCollection, создающие утечки.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Document/querySelector"
  },
  {
    "lang": "javascript",
    "id": "js-event-delegation",
    "title": "JS: делегирование событий и CustomEvent",
    "summary": "Эффективная обработка событий на сотнях элементов через одного общего родителя и создание собственных событий.",
    "code": "// Делегирование: 1 слушатель на весь список вместо 100 на каждую кнопку\nconst list = document.querySelector('#items-list');\n\nlist.addEventListener('click', (event) => {\n  // Находим кнопку удаления, даже если кликнули по вложенной иконке <svg>\n  const deleteBtn = event.target.closest('.delete-btn');\n  if (!deleteBtn) return;\n\n  const row = deleteBtn.closest('.item-row');\n  row.remove();\n\n  // Отправляем кастомное событие об изменении\n  document.dispatchEvent(new CustomEvent('cart:updated', {\n    detail: { remainingCount: list.children.length },\n    bubbles: true\n  }));\n});\n\n// Подписка на кастомное событие в другом модуле\ndocument.addEventListener('cart:updated', (e) => {\n  console.log('Осталось товаров:', e.detail.remainingCount);\n});",
    "example": "event.preventDefault(); // Отмена стандартного действия (перехода по ссылке, отправки формы)",
    "points": [
      "Делегирование работает даже для динамически добавленных элементов, которых еще не было в DOM при загрузке.",
      "Существенно экономит оперативную память и ускоряет работу сайта при рендеринге больших списков.",
      "CustomEvent позволяет создавать слабую связанность (Decoupling) между независимыми модулями приложения."
    ],
    "tags": [
      "JavaScript",
      "события",
      "делегирование",
      "addEventListener",
      "CustomEvent",
      "click",
      "оптимизация"
    ],
    "when": "Используй для каталогов, таблиц данных, динамических списков задач и интерактивных меню.",
    "alternatives": "Навешивание addEventListener в цикле на каждый элемент приводит к утечкам памяти при обновлении списка.",
    "url": "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Scripting/Event_bubbling"
  },
  {
    "lang": "javascript",
    "id": "js-fetch-async",
    "title": "JS: сетевые запросы Fetch API и AbortController",
    "summary": "Отправка асинхронных GET/POST запросов, обработка ответов в формате JSON и отмена запросов при повторном вводе.",
    "code": "// Функция загрузки данных с отменой предыдущего запроса (для live-поиска)\nlet currentController = null;\n\nasync function searchApi(query) {\n  // Если предыдущий запрос еще выполняется — отменяем его!\n  if (currentController) {\n    currentController.abort();\n  }\n  currentController = new AbortController();\n\n  try {\n    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {\n      method: 'GET',\n      headers: { 'Accept': 'application/json' },\n      signal: currentController.signal\n    });\n\n    if (!response.ok) {\n      throw new Error(`Ошибка сервера: ${response.status}`);\n    }\n\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    if (error.name === 'AbortError') {\n      console.log('Предыдущий запрос был отменен');\n      return null;\n    }\n    console.error('Ошибка сети:', error);\n    throw error;\n  }\n}",
    "example": "await fetch('/api', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });",
    "points": [
      "fetch() отклоняет промис (reject) ТОЛЬКО при физическом обрыве сети. HTTP 404 и 500 считаются успешным ответом: проверяй response.ok!",
      "AbortController предотвращает Race Conditions («состояние гонки»), когда устаревший долгий ответ перезаписывает свежие данные.",
      "Для таймаутов в современном JS доступен удобный флаг: AbortSignal.timeout(5000)."
    ],
    "tags": [
      "JavaScript",
      "fetch",
      "async",
      "await",
      "json",
      "AbortController",
      "api",
      "ajax",
      "сеть"
    ],
    "when": "Для отправки форм без перезагрузки страницы, живого поиска, загрузки списков товаров и данных с бэкенда.",
    "alternatives": "Устаревшие библиотеки axios и jQuery.ajax избыточны, когда нативный fetch есть во всех браузерах.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch"
  },
  {
    "lang": "javascript",
    "id": "js-intersection-observer",
    "title": "JS: отслеживание видимости элементов (IntersectionObserver)",
    "summary": "Аппаратно-эффективное отслеживание момента появления элемента в поле зрения пользователя без тяжелых scroll-слушателей.",
    "code": "// 1. Создаем наблюдатель\nconst observer = new IntersectionObserver((entries, obs) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      // Элемент появился на экране!\n      const el = entry.target;\n      el.classList.add('visible');\n\n      // Если нужно анимировать только 1 раз — отключаем наблюдение\n      obs.unobserve(el);\n    }\n  });\n}, {\n  rootMargin: '0px 0px -50px 0px', // Срабатывать за 50px до границы\n  threshold: 0.15                  // 15% площади элемента должно быть видно\n});\n\n// 2. Начинаем наблюдение за карточками\ndocument.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));",
    "example": "// Бесконечный скролл: вешаем наблюдатель на невидимый лоадер внизу страницы",
    "points": [
      "IntersectionObserver не блокирует главный поток (Main Thread) и работает с частотой обновления экрана 60/120 FPS.",
      "Идеально подходит для анимаций появления при скролле, ленивой подгрузки контента и бесконечных лент (Infinite Scroll).",
      "Для завершения наблюдения используй observer.unobserve(element) или observer.disconnect()."
    ],
    "tags": [
      "JavaScript",
      "IntersectionObserver",
      "скролл",
      "анимация появления",
      "lazy load",
      "видимость"
    ],
    "when": "Для лендингов с эффектами появления, подгрузки страниц в каталоге, отслеживания дочитывания статей.",
    "alternatives": "Слушатель window.addEventListener(\"scroll\", handler) с getBoundingClientRect() вызывает жуткие тормоза.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API"
  },
  {
    "lang": "javascript",
    "id": "js-localstorage",
    "title": "JS: локальное хранилище данных (localStorage & JSON)",
    "summary": "Сохранение настроек пользователя, корзины, избранного и тем оформления в браузере между перезагрузками страницы.",
    "code": "// Безопасная работа с localStorage через обертку\nconst storage = {\n  get(key, defaultValue = null) {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : defaultValue;\n    } catch (e) {\n      console.warn('Ошибка чтения localStorage:', e);\n      return defaultValue;\n    }\n  },\n  set(key, value) {\n    try {\n      localStorage.setItem(key, JSON.stringify(value));\n    } catch (e) {\n      console.error('Ошибка записи (квота превышена?):', e);\n    }\n  },\n  remove(key) {\n    localStorage.removeItem(key);\n  }\n};\n\n// Пример: сохранение списка избранного\nstorage.set('devshelf:favorites', ['html-dialog', 'css-grid']);\nconst favs = storage.get('devshelf:favorites', []);",
    "example": "localStorage.clear(); // Полная очистка хранилища сайта",
    "points": [
      "Данные в localStorage сохраняются даже после закрытия вкладки и перезагрузки компьютера.",
      "Квота хранилища обычно составляет около 5 МБ на домен.",
      "Всегда оборачивай вызовы в try...catch: в режиме инкогнито в некоторых браузерах или при запрете cookie запись может выбросить исключение."
    ],
    "tags": [
      "JavaScript",
      "localStorage",
      "sessionStorage",
      "хранилище",
      "избранное",
      "кэш",
      "JSON"
    ],
    "when": "Используй для сохранения темы (светлая/темная), черновиков форм, закладок и недавних действий.",
    "alternatives": "sessionStorage очищается сразу при закрытии вкладки; IndexedDB используется для гигабайтов данных и офлайн-БД.",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage"
  },
  {
    "lang": "javascript",
    "id": "js-clipboard-api",
    "title": "JS: копирование в буфер обмена (Clipboard API)",
    "summary": "Современный способ скопировать текст, сниппет кода или ссылку в буфер обмена пользователя в один клик.",
    "code": "async function copyCodeToClipboard(text, triggerButton) {\n  try {\n    await navigator.clipboard.writeText(text);\n\n    // Визуальная обратная связь\n    const originalText = triggerButton.textContent;\n    triggerButton.textContent = 'Скопировано!';\n    triggerButton.classList.add('copied');\n\n    setTimeout(() => {\n      triggerButton.textContent = originalText;\n      triggerButton.classList.remove('copied');\n    }, 2000);\n  } catch (err) {\n    console.error('Не удалось скопировать:', err);\n    // Запасной fallback для устаревших контекстов\n    prompt('Скопируйте вручную:', text);\n  }\n}",
    "example": "const text = await navigator.clipboard.readText(); // Чтение из буфера (требует разрешения)",
    "points": [
      "Clipboard API работает только в безопасном контексте HTTPS (или на localhost/127.0.0.1).",
      "Вызов writeText() должен быть вызван в ответ на прямое действие пользователя (клик, нажатие клавиши).",
      "Заменяет устаревший и нестабильный метод document.execCommand(\"copy\")."
    ],
    "tags": [
      "JavaScript",
      "clipboard",
      "буфер обмена",
      "копирование",
      "writeText",
      "сниппет"
    ],
    "when": "Для кнопок «Скопировать код», «Поделиться ссылкой», копирования номеров телефонов и промокодов.",
    "alternatives": "Старый трюк со скрытым textarea и execCommand(\"copy\") объявлен устаревшим (deprecated).",
    "url": "https://developer.mozilla.org/ru/docs/Web/API/Clipboard_API"
  },
  {
    "lang": "javascript",
    "id": "js-array-methods",
    "title": "JS: современные методы массивов (map, filter, reduce, toSorted)",
    "summary": "Неизменяемая (immutable) обработка данных: фильтрация списков, трансформация, поиск и сортировка без мутаций.",
    "code": "const items = [\n  { id: 1, name: 'HTML5', category: 'markup', stars: 45 },\n  { id: 2, name: 'CSS Grid', category: 'style', stars: 89 },\n  { id: 3, name: 'Flexbox', category: 'style', stars: 120 }\n];\n\n// 1. Фильтрация (только стили)\nconst styles = items.filter(item => item.category === 'style');\n\n// 2. Трансформация (массив только названий)\nconst names = items.map(item => item.name);\n\n// 3. Подсчет суммы через reduce\nconst totalStars = items.reduce((sum, item) => sum + item.stars, 0);\n\n// 4. Безопасная сортировка без изменения исходного массива (ES2023)\nconst sortedByStars = items.toSorted((a, b) => b.stars - a.stars);",
    "example": "const found = items.find(item => item.id === 2);",
    "points": [
      "Новые методы ES2023 (toSorted, toReversed, toSpliced, with) не мутируют исходный массив в отличие от sort() и reverse().",
      "reduce(fn, initialValue) всегда должен получать начальное значение вторым аргументом во избежание ошибок на пустых массивах.",
      "flatMap объединяет map и flat(1), полезен для разворачивания вложенных тегов."
    ],
    "tags": [
      "JavaScript",
      "массивы",
      "map",
      "filter",
      "reduce",
      "toSorted",
      "find",
      "es2023",
      "иммутабельность"
    ],
    "when": "Для фильтрации каталога, поиска по тегам, сортировки списков и подсчета итоговых сумм.",
    "alternatives": "Императивные циклы for (let i = 0; ...) громоздки и подвержены ошибкам вылета за границы.",
    "url": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array"
  },
  {
    "lang": "php",
    "id": "php-pdo-connection",
    "title": "PHP: безопасное подключение к базе данных через PDO",
    "summary": "Современный стандарт работы с СУБД (MySQL, PostgreSQL, SQLite) с активацией строгого режима ошибок и UTF-8.",
    "code": "<?php\ndeclare(strict_types=1);\n\nfunction getDbConnection(): PDO {\n    $host = '127.0.0.1';\n    $db   = 'devshelf_db';\n    $user = 'db_user';\n    $pass = 'secure_password';\n    $charset = 'utf8mb4';\n\n    $dsn = \"mysql:host=$host;dbname=$db;charset=$charset\";\n    $options = [\n        // Выбрасывать настоящие исключения PDOException при ошибках SQL\n        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,\n        // Возвращать результат в виде ассоциативного массива\n        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n        // Использовать нативные подготовленные выражения\n        PDO::ATTR_EMULATE_PREPARES   => false,\n    ];\n\n    try {\n        return new PDO($dsn, $user, $pass, $options);\n    } catch (PDOException $e) {\n        // Логируем ошибку в системный журнал, не показывая пароли пользователю!\n        error_log('Database Connection Error: ' . $e->getMessage());\n        throw new RuntimeException('Ошибка подключения к базе данных.');\n    }\n}",
    "example": "$pdo = getDbConnection();",
    "points": [
      "Всегда отключай эмуляцию prepared statements (PDO::ATTR_EMULATE_PREPARES => false) для гарантированной защиты от SQL Injection.",
      "Кодировка utf8mb4 обязательна: она поддерживает все символы, включая эмодзи и спецсимволы (обычный utf8 в MySQL обрезан).",
      "Никогда не выводи $e->getMessage() напрямую в браузер пользователя — в тексте ошибки могут оказаться пароли и структура БД."
    ],
    "tags": [
      "PHP",
      "PDO",
      "MySQL",
      "база данных",
      "подключение",
      "безопасность",
      "SQL",
      "utf8mb4"
    ],
    "when": "Используй для подключения к БД во всех PHP-проектах (блоги, интернет-магазины, личные кабинеты).",
    "alternatives": "Устаревшие функции mysql_* давно удалены из PHP, а mysqli привязан только к MySQL.",
    "url": "https://www.php.net/manual/ru/book.pdo.php"
  },
  {
    "lang": "php",
    "id": "php-pdo-prepared",
    "title": "PHP: подготовленные выражения PDO (защита от SQL-инъекций)",
    "summary": "Единственный правильный способ подстановки пользовательских параметров в SQL-запросы.",
    "code": "<?php\n// ПРАВИЛЬНО: параметры передаются отдельно от SQL-кода\n$email = $_POST['email'] ?? '';\n$status = 'active';\n\n$sql = 'SELECT id, username, email, created_at \n        FROM users \n        WHERE email = :email AND status = :status \n        LIMIT 1';\n\n$stmt = $pdo->prepare($sql);\n$stmt->execute([\n    ':email'  => $email,\n    ':status' => $status\n]);\n\n$user = $stmt->fetch(); // Возвращает массив или false\n\nif ($user) {\n    echo \"Привет, \" . htmlspecialchars($user['username'], ENT_QUOTES, 'UTF-8');\n} else {\n    echo \"Пользователь не найден.\";\n}",
    "example": "// Выборка нескольких строк:\n$users = $stmt->fetchAll();",
    "points": [
      "Никогда не склеивай строки: \"WHERE email = '\" . $email . \"'\" — это 100% уязвимость к взлому сайта через SQL-инъекцию.",
      "В подготовленных выражениях данные отправляются на сервер БД в отдельном протоколе и физически не могут изменить структуру SQL.",
      "При выводе данных в HTML всегда применяй htmlspecialchars() для защиты от XSS."
    ],
    "tags": [
      "PHP",
      "PDO",
      "prepared statements",
      "SQL injection",
      "безопасность",
      "SQL",
      "fetch",
      "execute"
    ],
    "when": "Обязательно для ЛЮБЫХ запросов с параметрами от пользователя (логин, поиск, фильтры, оформление заказа).",
    "alternatives": "Функции экранирования вроде addslashes() ненадежны и не защищают от всех типов инъекций.",
    "url": "https://www.php.net/manual/ru/pdo.prepared-statements.php"
  },
  {
    "lang": "php",
    "id": "php-pdo-transactions",
    "title": "PHP: транзакции в базе данных (beginTransaction, commit, rollBack)",
    "summary": "Атомарное выполнение цепочки операций: если хоть один запрос завершился ошибкой, все изменения откатываются назад.",
    "code": "<?php\ntry {\n    // Начинаем транзакцию\n    $pdo->beginTransaction();\n\n    // 1. Списываем деньги у отправителя\n    $stmt1 = $pdo->prepare('UPDATE accounts SET balance = balance - :amount WHERE id = :from_id');\n    $stmt1->execute([':amount' => 500, ':from_id' => 1]);\n\n    // 2. Начисляем получателю\n    $stmt2 = $pdo->prepare('UPDATE accounts SET balance = balance + :amount WHERE id = :to_id');\n    $stmt2->execute([':amount' => 500, ':to_id' => 2]);\n\n    // 3. Записываем лог операции\n    $stmt3 = $pdo->prepare('INSERT INTO transactions (from_id, to_id, amount) VALUES (?, ?, ?)');\n    $stmt3->execute([1, 2, 500]);\n\n    // Все шаги прошли успешно — фиксируем изменения в БД!\n    $pdo->commit();\n    echo \"Перевод успешно выполнен.\";\n} catch (Throwable $e) {\n    // В случае сбоя откатываем ВСЕ изменения назад!\n    if ($pdo->inTransaction()) {\n        $pdo->rollBack();\n    }\n    error_log('Ошибка транзакции: ' . $e->getMessage());\n    echo \"Операция отменена из-за ошибки.\";\n}",
    "example": "$pdo->beginTransaction();\n// ... запросы\n$pdo->commit();",
    "points": [
      "Транзакции гарантируют принцип ACID: деньги никогда не спишутся в никуда, если на втором шаге упал сервер.",
      "Для поддержки транзакций в MySQL таблицы должны быть на движке InnoDB (не MyISAM).",
      "Проверяй $pdo->inTransaction() перед вызовом rollBack(), чтобы не выбросить вторичную ошибку."
    ],
    "tags": [
      "PHP",
      "PDO",
      "транзакции",
      "beginTransaction",
      "commit",
      "rollBack",
      "ACID",
      "база данных"
    ],
    "when": "Для переводов, оформления заказов со списанием остатков на складе и комплексных изменений.",
    "alternatives": "Разрозненные запросы без транзакций оставляют базу в поломанном рассинхронизированном состоянии при сбоях.",
    "url": "https://www.php.net/manual/ru/pdo.begintransaction.php"
  },
  {
    "lang": "php",
    "id": "php-syntax-8",
    "title": "PHP: синтаксис PHP 8 (nullsafe ?->, match, constructor promotion)",
    "summary": "Современные возможности PHP 8.x, делающие код чище, надежнее и лаконичнее.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// 1. Продвижение свойств в конструкторе и readonly (PHP 8.1+)\nclass UserDto {\n    public function __construct(\n        public readonly int $id,\n        public readonly string $name,\n        public readonly ?string $email = null\n    ) {}\n}\n\n// 2. Nullsafe оператор ?-> (безопасный вызов без проверок if !== null)\n$country = $user?->getAddress()?->getCountry()?->name ?? 'Не указана';\n\n// 3. Выражение match (строгая замена громоздкому switch)\n$statusText = match ($orderStatus) {\n    'new'       => 'Новый заказ',\n    'paid'      => 'Оплачен, формируется к отправке',\n    'shipped'   => 'В пути',\n    'delivered' => 'Доставлен клиенту',\n    default     => 'Неизвестный статус'\n};",
    "example": "// Union Types: public int|float $amount;",
    "points": [
      "match выполняет строгое сравнение (===) и возвращает значение, не требуя операторов break.",
      "Nullsafe оператор ?-> останавливает цепочку и возвращает null, если любое промежуточное звено равно null.",
      "Constructor Property Promotion уменьшает шаблонный boilerplate-код DTO и моделей в 3 раза."
    ],
    "tags": [
      "PHP",
      "PHP 8",
      "match",
      "nullsafe",
      "конструктор",
      "readonly",
      "современный php"
    ],
    "when": "Используй во всех новых проектах на PHP 8.1, 8.2 и 8.3.",
    "alternatives": "Устаревшие конструкции switch-case с нестрогим приведением типов (0 == \"hello\") приводили к багам.",
    "url": "https://www.php.net/releases/8.0/ru.php"
  },
  {
    "lang": "php",
    "id": "php-rest-api",
    "title": "PHP: создание REST JSON API и заголовки",
    "summary": "Построение чистого бэкенд API endpoint для отдачи и приема JSON в SPA или мобильных приложениях.",
    "code": "<?php\ndeclare(strict_types=1);\n\n// Обязательные заголовки для REST API\nheader('Content-Type: application/json; charset=utf-8');\nheader('X-Content-Type-Options: nosniff');\n\n// Чтение входящего сырого JSON-тела запроса (POST/PUT)\n$rawInput = file_get_contents('php://input');\n$data = json_decode($rawInput, true, 512, JSON_THROW_ON_ERROR | JSON_INVALID_UTF8_SUBSTITUTE);\n\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    if (empty($data['title'])) {\n        http_response_code(422); // Unprocessable Entity\n        echo json_encode([\n            'success' => false,\n            'error'   => 'Поле title обязательно для заполнения'\n        ]);\n        exit;\n    }\n\n    // Успешный ответ\n    http_response_code(201); // Created\n    echo json_encode([\n        'success' => true,\n        'id'      => 42,\n        'message' => 'Ресурс успешно создан'\n    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);\n    exit;\n}",
    "example": "http_response_code(404); echo json_encode(['error' => 'Not Found']);",
    "points": [
      "Для чтения JSON из тела запроса используй file_get_contents(\"php://input\"), так как в $_POST попадают только form-urlencoded данные.",
      "Флаг JSON_UNESCAPED_UNICODE сохраняет читаемые русские буквы вместо \\u043f\\u0440\\u0438...",
      "Всегда отправляй правильные HTTP-коды статуса (200, 201, 400, 401, 403, 404, 422, 500)."
    ],
    "tags": [
      "PHP",
      "REST",
      "API",
      "JSON",
      "json_encode",
      "json_decode",
      "HTTP",
      "бэкенд"
    ],
    "when": "Для создания API для фронтенда на Vue, React, мобильных приложений и микросервисов.",
    "alternatives": "Отдача смешанного HTML и JSON ломает клиентские парсеры.",
    "url": "https://www.php.net/manual/ru/function.json-encode.php"
  },
  {
    "lang": "php",
    "id": "php-password-security",
    "title": "PHP: безопасное хеширование паролей (password_hash)",
    "summary": "Правильное сохранение и проверка пользовательских паролей с автоматической солью по алгоритмам Bcrypt и Argon2.",
    "code": "<?php\n// Регистрация: создание надежного хеша с автоматической случайной солью\n$userPassword = $_POST['password'];\n\n$hashedPassword = password_hash($userPassword, PASSWORD_DEFAULT);\n// Сохраняем $hashedPassword в базу данных (колонка VARCHAR(255))\n\n// Авторизация: сверка введенного пароля с сохраненным хешем\n$loginPassword = $_POST['password'];\n$hashFromDb = $user['password_hash'];\n\nif (password_verify($loginPassword, $hashFromDb)) {\n    // Пароль верный!\n    // Проверяем, не пора ли обновить хеш до более стойкого\n    if (password_needs_rehash($hashFromDb, PASSWORD_DEFAULT)) {\n        $newHash = password_hash($loginPassword, PASSWORD_DEFAULT);\n        // Обновляем хеш в БД...\n    }\n    echo \"Успешная авторизация!\";\n} else {\n    echo \"Неверный логин или пароль.\";\n}",
    "example": "password_hash($pass, PASSWORD_ARGON2ID); // Максимальная стойкость на серверах с поддержкой Argon2",
    "points": [
      "НИКОГДА не используй md5(), sha1() или sha256() для паролей: они мгновенно вскрываются по радужным таблицам.",
      "password_hash сам генерирует криптографически стойкую соль и встраивает её в результирующую строку.",
      "При ошибке входа всегда говори «Неверный логин или пароль», не подсказывая злоумышленнику, что именно не совпало."
    ],
    "tags": [
      "PHP",
      "пароли",
      "password_hash",
      "password_verify",
      "безопасность",
      "хеширование",
      "авторизация"
    ],
    "when": "Обязательно для любой формы регистрации, смены пароля и авторизации пользователей.",
    "alternatives": "Самодельные алгоритмы со склейкой $salt . $password в md5 — грубейшая ошибка безопасности.",
    "url": "https://www.php.net/manual/ru/function.password-hash.php"
  },
  {
    "lang": "xml",
    "id": "xml-syntax-rules",
    "title": "XML: строгие правила синтаксиса и структуры",
    "summary": "Формат хранения и передачи данных со строгой иерархией: обязательный пролог, закрытие всех тегов и регистрозависимость.",
    "code": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<library xmlns=\"https://example.com/schema\">\n  <book id=\"bk101\" available=\"true\">\n    <title>Современный веб-разработчик</title>\n    <author>Иван Петров</author>\n    <price currency=\"RUB\">1200</price>\n    <description><![CDATA[Здесь можно безопасно писать <любые> теги & спецсимволы без экранирования!]]></description>\n  </book>\n</library>",
    "example": "<!-- Комментарий в формате XML -->",
    "points": [
      "В отличие от HTML, в XML обязан быть ровно один корневой элемент (Root Element), охватывающий весь документ.",
      "XML строго чувствителен к регистру: <Title> и <title> — это два совершенно разных тега.",
      "Секция <![CDATA[ ... ]]> позволяет вставлять сырой текст с символами <, > и & без замены на &lt; и &amp;."
    ],
    "tags": [
      "XML",
      "синтаксис",
      "структура",
      "пролог",
      "cdata",
      "валидация",
      "спецификация"
    ],
    "when": "Для конфигурационных файлов, RSS-лент, карт сайта sitemap.xml, обмена данными с 1С и банками.",
    "alternatives": "Для чистого веб-обмена данными браузер-сервер чаще выбирают JSON, но в фидах стандартом остается XML.",
    "url": "https://developer.mozilla.org/ru/docs/Web/XML"
  },
  {
    "lang": "xml",
    "id": "xml-sitemap",
    "title": "XML: создание карты сайта sitemap.xml",
    "summary": "Стандартный файл для поисковых систем (Яндекс, Google), сообщающий о всех страницах сайта и дате их изменения.",
    "code": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <!-- Главная страница -->\n  <url>\n    <loc>https://example.com/</loc>\n    <lastmod>2026-03-20T10:00:00+03:00</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n  \n  <!-- Раздел каталога -->\n  <url>\n    <loc>https://example.com/catalog</loc>\n    <lastmod>2026-03-18T14:30:00+03:00</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>",
    "example": "<!-- Ссылка на sitemap обязательно указывается в robots.txt: Sitemap: https://example.com/sitemap.xml -->",
    "points": [
      "Тег <loc> должен содержать полный канонический URL с протоколом (https://) и доменом.",
      "Дата в <lastmod> указывается в формате W3C Datetime (ГГГГ-ММ-ДД), помогая поисковику быстрее индексировать свежие статьи.",
      "Максимальный размер одного sitemap.xml — 50 МБ и 50 000 URL. Если страниц больше — используют <sitemapindex>."
    ],
    "tags": [
      "XML",
      "sitemap",
      "карта сайта",
      "seo",
      "поисковики",
      "яндекс",
      "google",
      "lastmod"
    ],
    "when": "Обязательно для любого сайта, который должен индексироваться поисковыми системами.",
    "alternatives": "Без sitemap поисковым роботам требуется значительно больше времени для нахождения глубоких страниц.",
    "url": "https://www.sitemaps.org/ru/protocol.html"
  },
  {
    "lang": "xml",
    "id": "seo-robots-txt",
    "title": "SEO: настройка файла robots.txt",
    "summary": "Инструкции для поисковых роботов: какие разделы сайта разрешено сканировать, а какие нужно скрыть (админка, корзина, поиск).",
    "code": "# robots.txt для DevShelf / веб-сайта\nUser-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nDisallow: /checkout/\nDisallow: /*?*search=\n\n# Ссылка на карту сайта\nSitemap: https://example.com/sitemap.xml",
    "example": "User-agent: Yandex\nClean-param: ref /catalog/ # Игнорировать UTM метки при индексации в Яндексе",
    "points": [
      "Файл должен лежать строго в корне сайта: https://example.com/robots.txt (регистр букв имеет значение).",
      "Директива Disallow закрывает сканирование роботом, но НЕ гарантирует удаления из поиска, если на страницу есть внешние ссылки.",
      "Чтобы гарантированно скрыть секретную страницу от индекса, используй метатег <meta name=\"robots\" content=\"noindex, nofollow\">."
    ],
    "tags": [
      "SEO",
      "robots.txt",
      "robots",
      "индексация",
      "поисковики",
      "яндекс",
      "google",
      "директивы"
    ],
    "when": "Обязательный файл для любого домена перед публикацией в открытый интернет.",
    "alternatives": "Отсутствие robots.txt приводит к тому, что боты сканируют тяжелые скрипты и страницы поиска, перегружая хостинг.",
    "url": "https://developers.google.com/search/docs/crawling-indexing/robots/intro"
  },
  {
    "lang": "xml",
    "id": "svg-vector-graphics",
    "title": "SVG: векторная графика и стилизация через CSS",
    "summary": "Безупречная четкость иконок и логотипов на любых дисплеях Retina, масштабирование без потери качества и управление цветом через fill: currentColor.",
    "code": "<svg xmlns=\"http://www.w3.org/2000/svg\" \n     viewBox=\"0 0 24 24\" \n     width=\"24\" \n     height=\"24\" \n     fill=\"none\" \n     stroke=\"currentColor\" \n     stroke-width=\"2\" \n     stroke-linecap=\"round\" \n     stroke-linejoin=\"round\"\n     aria-hidden=\"true\">\n  <!-- Иконка закладки / избранного -->\n  <path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"/>\n</svg>",
    "example": ".icon { color: #38bdf8; } /* stroke: currentColor автоматически подхватит цвет текста! */",
    "points": [
      "Атрибут viewBox=\"minX minY width height\" определяет внутреннюю систему координат и пропорции векторного полотна.",
      "Использование stroke=\"currentColor\" или fill=\"currentColor\" позволяет красить иконку простым свойством color родителя в CSS.",
      "В инлайн-SVG можно управлять стилями отдельных элементов прямо по классам или псевдоклассам :hover."
    ],
    "tags": [
      "SVG",
      "вектор",
      "иконки",
      "графика",
      "viewBox",
      "currentColor",
      "дизайн"
    ],
    "when": "Для логотипов, иконок кнопок, иллюстраций и декоративных разделителей секций.",
    "alternatives": "Растровые PNG/JPG на иконках весят больше и размываются на экранах смартфонов высокого разрешения.",
    "url": "https://developer.mozilla.org/ru/docs/Web/SVG"
  },
  {
    "lang": "recipes",
    "id": "recipe-burger-menu",
    "title": "Рецепт: Адаптивное бургер-меню (CSS + JS)",
    "summary": "Готовое мобильное меню с анимированной кнопкой-гамбургером, плавно выезжающей шторкой, блокировкой скролла и закрытием по Esc.",
    "code": "<!-- 1. Кнопка бургер -->\n<button class=\"burger-btn\" id=\"burger-btn\" aria-label=\"Открыть меню\" aria-expanded=\"false\">\n  <span class=\"bar\"></span>\n  <span class=\"bar\"></span>\n  <span class=\"bar\"></span>\n</button>\n\n<!-- 2. Выезжающее меню -->\n<nav class=\"mobile-drawer\" id=\"mobile-drawer\" hidden>\n  <div class=\"drawer-content\">\n    <a href=\"#home\">Главная</a>\n    <a href=\"#catalog\">Каталог</a>\n    <a href=\"#contacts\">Контакты</a>\n  </div>\n</nav>\n\n<style>\n.burger-btn { display: flex; flex-direction: column; gap: 5px; background: none; border: 0; cursor: pointer; padding: 8px; }\n.burger-btn .bar { width: 24px; height: 2px; background: currentColor; transition: transform 0.2s, opacity 0.2s; }\n.burger-btn[aria-expanded=\"true\"] .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }\n.burger-btn[aria-expanded=\"true\"] .bar:nth-child(2) { opacity: 0; }\n.burger-btn[aria-expanded=\"true\"] .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }\n\n.mobile-drawer { position: fixed; inset: 0; background: rgba(9, 13, 20, 0.95); backdrop-filter: blur(8px); z-index: 99; display: flex; align-items: center; justify-content: center; }\n.mobile-drawer[hidden] { display: none; }\n</style>\n\n<script>\nconst btn = document.getElementById('burger-btn');\nconst drawer = document.getElementById('mobile-drawer');\n\nfunction toggleMenu() {\n  const isOpen = btn.getAttribute('aria-expanded') === 'true';\n  btn.setAttribute('aria-expanded', !isOpen);\n  drawer.hidden = isOpen;\n  document.body.style.overflow = isOpen ? '' : 'hidden';\n}\n\nbtn.addEventListener('click', toggleMenu);\nwindow.addEventListener('keydown', (e) => {\n  if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') toggleMenu();\n});\n</script>",
    "example": "// Нажми «Открыть в песочнице», чтобы сразу протестировать и кастомизировать это меню!",
    "points": [
      "Доступность: атрибут aria-expanded сообщает скринридерам текущее состояние меню (открыто или закрыто).",
      "Блокировка body.style.overflow = \"hidden\" предотвращает неприятную прокрутку страницы под открытым меню.",
      "Клавиша Escape позволяет пользователю интуитивно закрыть меню без поиска крестика."
    ],
    "tags": [
      "рецепт",
      "бургер меню",
      "меню",
      "мобильное меню",
      "drawer",
      "навигация",
      "гамбургер"
    ],
    "when": "Обязательный элемент адаптивной шапки любого сайта на экранах смартфонов.",
    "alternatives": "Готовые громоздкие jQuery-плагины, добавляющие лишние мегабайты в бандл.",
    "url": "https://developer.mozilla.org/ru/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"
  },
  {
    "lang": "recipes",
    "id": "recipe-modal-dialog",
    "title": "Рецепт: Модальное окно на нативном <dialog>",
    "summary": "Надежное модальное окно: правильное кадрирование, плавное затемнение фона, ловушка фокуса и закрытие по клику мимо.",
    "code": "<button id=\"show-dialog-btn\" class=\"btn\">Открыть окно</button>\n\n<dialog id=\"custom-modal\" class=\"modal-window\">\n  <div class=\"modal-header\">\n    <h3>Подтверждение действия</h3>\n    <button type=\"button\" class=\"close-btn\" id=\"close-dialog-btn\" aria-label=\"Закрыть\">&times;</button>\n  </div>\n  <p>Вы уверены, что хотите сохранить изменения в проекте?</p>\n  <div class=\"modal-actions\">\n    <button type=\"button\" class=\"btn secondary\" id=\"cancel-btn\">Отмена</button>\n    <button type=\"button\" class=\"btn primary\" id=\"confirm-btn\">Да, сохранить</button>\n  </div>\n</dialog>\n\n<style>\n.modal-window { border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; background: #111726; color: #f8fafc; padding: 24px; max-width: 440px; width: 90%; }\n.modal-window::backdrop { background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(4px); }\n.modal-actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px; }\n</style>\n\n<script>\nconst modal = document.getElementById('custom-modal');\ndocument.getElementById('show-dialog-btn').onclick = () => modal.showModal();\ndocument.getElementById('close-dialog-btn').onclick = () => modal.close();\ndocument.getElementById('cancel-btn').onclick = () => modal.close();\n\n// Закрытие при клике по затемненному оверлею\nmodal.addEventListener('click', (e) => {\n  if (e.target === modal) modal.close();\n});\n</script>",
    "example": "modal.close(); // Программное закрытие после отправки формы",
    "points": [
      "showModal() помещает диалог в специальный Top Layer браузера поверх всех z-index на странице.",
      "Фокус клавиатуры автоматически захватывается внутри окна и не улетает на скрытые элементы под оверлеем.",
      "Клавиша Esc закрывает модальное окно по умолчанию."
    ],
    "tags": [
      "рецепт",
      "модалка",
      "модальное окно",
      "диалог",
      "dialog",
      "popup",
      "попап"
    ],
    "when": "Для окон авторизации, предупреждений перед удалением, галерей предпросмотра.",
    "alternatives": "Самодельные оверлеи на div требуют сотен строк кода для корректного фокуса и доступности.",
    "url": "https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog"
  },
  {
    "lang": "recipes",
    "id": "recipe-tabs",
    "title": "Рецепт: Доступные вкладки (Tabs Component)",
    "summary": "Переключение вкладок с сохранением состояния, поддержкой стрелок клавиатуры и атрибутами ARIA.",
    "code": "<div class=\"tabs-widget\">\n  <div role=\"tablist\" class=\"tab-buttons\">\n    <button role=\"tab\" aria-selected=\"true\" id=\"tab-1\" aria-controls=\"panel-1\">HTML</button>\n    <button role=\"tab\" aria-selected=\"false\" id=\"tab-2\" aria-controls=\"panel-2\" tabindex=\"-1\">CSS</button>\n    <button role=\"tab\" aria-selected=\"false\" id=\"tab-3\" aria-controls=\"panel-3\" tabindex=\"-1\">JS</button>\n  </div>\n  <div role=\"tabpanel\" id=\"panel-1\" aria-labelledby=\"tab-1\">\n    <h3>Содержимое вкладки HTML</h3>\n    <p>Структура и семантика веб-документа.</p>\n  </div>\n  <div role=\"tabpanel\" id=\"panel-2\" aria-labelledby=\"tab-2\" hidden>\n    <h3>Содержимое вкладки CSS</h3>\n    <p>Стили, сетки Flexbox и CSS Grid.</p>\n  </div>\n  <div role=\"tabpanel\" id=\"panel-3\" aria-labelledby=\"tab-3\" hidden>\n    <h3>Содержимое вкладки JS</h3>\n    <p>Интерактивная логика и современные Web APIs.</p>\n  </div>\n</div>\n\n<script>\nconst tabButtons = document.querySelectorAll('[role=\"tab\"]');\nconst panels = document.querySelectorAll('[role=\"tabpanel\"]');\n\ntabButtons.forEach(btn => {\n  btn.addEventListener('click', () => {\n    // Снимаем выбор со всех вкладок\n    tabButtons.forEach(b => {\n      b.setAttribute('aria-selected', 'false');\n      b.tabIndex = -1;\n    });\n    panels.forEach(p => p.hidden = true);\n\n    // Активируем выбранную\n    btn.setAttribute('aria-selected', 'true');\n    btn.tabIndex = 0;\n    const activePanelId = btn.getAttribute('aria-controls');\n    document.getElementById(activePanelId).hidden = false;\n  });\n});\n</script>",
    "example": "// Позволяет разделить интерфейс на вкладки без перезагрузки страницы",
    "points": [
      "Использует спецификацию WAI-ARIA Tabs: role=\"tablist\", role=\"tab\", role=\"tabpanel\".",
      "Скрытие панелей через атрибут hidden гарантирует доступность и отсутствие сдвигов.",
      "tabindex=\"-1\" на неактивных вкладках обеспечивает правильную клавиатурную навигацию."
    ],
    "tags": [
      "рецепт",
      "вкладки",
      "табы",
      "tabs",
      "tablist",
      "переключатель"
    ],
    "when": "Для личных кабинетов, настроек профиля, многоязычных блоков и карточек товара.",
    "alternatives": "Перезагрузка страницы на каждую вкладку создает лишние HTTP-запросы.",
    "url": "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/"
  }
];
