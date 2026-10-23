export const referenceEncyclopedia = [
  // ==========================================
  // Дополнительные 40+ карточек справочника (HTML5, CSS3, JS, PHP 8, SQL/PDO, XML/SEO)
  // ==========================================
  {
    lang: 'html',
    id: 'html-dfn-var-samp-output',
    title: 'HTML: техническая типографика (<dfn>, <var>, <abbr>, <cite>, <q>)',
    summary: 'Семантическая разметка определений терминов, математических переменных и строчных цитат в документации.',
    code: `<p>
  <dfn id="term-dom"><abbr title="Document Object Model">DOM</abbr></dfn> — это объектная модель документа,
  представляющая HTML в виде дерева узлов.
</p>

<p>
  Формула расчёта отступа сетки: <var>totalWidth</var> = <var>columns</var> × <var>colWidth</var> + (<var>columns</var> - 1) × <var>gap</var>.
</p>`,
    example: `<p>Как гласит стандарт <cite>HTML Living Standard</cite>: <q>Семантика важнее визуального вида</q>.</p>`,
    points: [
      '<dfn> отмечает место в тексте, где термин вводится и объясняется впервые (на него можно ссылаться по #id из других статей).',
      '<var> выделяет имена математических переменных и аргументов формул курсивом, отличая их от обычного программного кода <code>.',
      'Тег <q> автоматически оборачивает строчную цитату в правильные типографские кавычки («ёлочки» для lang="ru")!'
    ],
    tags: ['HTML', 'dfn', 'var', 'q', 'cite', 'abbr', 'термин', 'переменная', 'кавычки', 'типографика'],
    when: 'В обучающих статьях, документации API, технических спецификациях и учебниках.',
    alternatives: 'Для программного кода функций и тегов всегда используй <code>, а не <var>.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/dfn'
  },
  {
    lang: 'html',
    id: 'html-map-area-object',
    title: 'HTML: встраивание PDF-документов (<object> / <iframe>) и интерактивные области',
    summary: 'Просмотр PDF-прайсов и инструкций прямо внутри веб-страницы с запасной ссылкой на скачивание.',
    code: `<object
  data="/files/specification.pdf"
  type="application/pdf"
  width="100%"
  height="600"
>
  <p>
    Ваш браузер не поддерживает встроенный просмотр PDF.
    <a href="/files/specification.pdf" download>Скачать PDF-файл (2.4 МБ)</a>
  </p>
</object>`,
    example: `<a href="/price.pdf" target="_blank" rel="noopener">Открыть прайс-лист (PDF) ↗</a>`,
    points: [
      'Преимущество тега <object> над <iframe> для PDF в том, что всё содержимое между <object> и </object> автоматически показывается как аккуратная кнопка скачивания на мобильных браузерах, где нет встроенного PDF-ридера!',
      'Обязательно указывай атрибут type="application/pdf" и понятную ссылку с атрибутом download внутри фолбэка.',
      'Для интерактивных планов этажей и карт залов сегодня вместо старого <map><area> используют инлайновый <svg> с кликабельными <path>.'
    ],
    tags: ['HTML', 'object', 'pdf', 'embed', 'map', 'area', 'документ', 'просмотр pdf'],
    when: 'При выводе договоров, сертификатов, презентаций и технических паспортов на странице.',
    alternatives: 'На мобильных экранах удобнее сразу давать прямую кнопку скачивания PDF с указанием размера файла.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/object'
  },
  {
    lang: 'html',
    id: 'html-tabindex-focus-management',
    title: 'HTML: управление фокусом клавиатуры (tabindex="0", tabindex="-1", inert)',
    summary: 'Правила навигации клавишей Tab по странице, программный перевод фокуса на модалку и отключение фона.',
    code: `<!-- 1. Элемент участвует в обычном порядке нажатия клавиши Tab -->
<div class="custom-card" tabindex="0" role="region" aria-label="Превью">...</div>

<!-- 2. Элемент НЕ попадает под Tab, но на него можно перевести фокус из JS: el.focus()! -->
<h2 id="modal-heading" tabindex="-1">Окно настроек</h2>

<!-- 3. Полное отключение интерактивности и фокуса для всей фоновой секции -->
<main inert>...</main>`,
    example: `/* НИКОГДА не используй положительные значения tabindex="1", tabindex="2" — они ломают порядок обхода страницы! */`,
    points: [
      'tabindex="0" включает нестандартный элемент в естественный порядок обхода клавишей Tab (но для кнопок всегда лучше сразу взять <button>, у которого фокус уже есть из коробки).',
      'tabindex="-1" незаменим для заголовков открывшихся модальных окон или блоков ошибок формы: пользователь не спотыкается о них при обычном Tab, но скрипт может вызвать heading.focus()!',
      'Никогда не пиши tabindex="1", "2", "3": положительные числа заставляют курсор прыгать по странице в хаотичном порядке.'
    ],
    tags: ['HTML', 'tabindex', 'focus', 'inert', 'клавиатура', 'фокус', 'доступность', 'tab'],
    when: 'При управлении фокусом в модальных окнах, табах (roving tabindex) и пропускающих ссылках.',
    alternatives: 'Нативный <dialog> при вызове showModal() сам делает остальную страницу инертной (inert).',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/tabindex'
  },
  {
    lang: 'html',
    id: 'html-form-attributes-novalidate',
    title: 'HTML: атрибуты тега <form> (action, method, enctype="multipart/form-data", novalidate)',
    summary: 'Конфигурация отправки формы на сервер, обязательный enctype для загрузки файлов и привязка кнопки вне формы.',
    code: `<!-- При наличии <input type="file"> атрибут enctype="multipart/form-data" ОБЯЗАТЕЛЕН! -->
<form id="checkout-form" action="/api/orders" method="POST" enctype="multipart/form-data">
  <input type="text" name="customer" required>
  <input type="file" name="receipt">
</form>

<!-- Кнопка в шапке или подвале может отправлять форму по её id через атрибут form! -->
<button type="submit" form="checkout-form">Оформить заказ</button>`,
    example: `<form novalidate> /* Отключает системные тултипы браузера для показа собственной кастомной валидации */`,
    points: [
      'Частая ошибка: если в форме есть <input type="file">, но на самом теге <form> забыли написать enctype="multipart/form-data", массив $_FILES в PHP придёт совершенно пустым!',
      'Атрибут form="checkout-form" на кнопке <button> или <input> позволяет вынести кнопку «Сохранить» в липкую шапку или футер модалки за пределы самого тега <form>!',
      'Метод GET подставляет поля в адресную строку (?q=flex&sort=az) и используется для поиска/фильтров, а метод POST передаёт данные в теле запроса для изменения/сохранения.'
    ],
    tags: ['HTML', 'form', 'action', 'method', 'enctype', 'multipart/form-data', 'novalidate', 'отправка формы'],
    when: 'Во всех формах поиска (GET), авторизации (POST) и загрузки файлов (multipart/form-data).',
    alternatives: 'При отправке через JS new FormData(form) браузер автоматически кодирует файлы как multipart/form-data.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/form'
  },

  // ==========================================
  // Дополнительные карточки CSS3
  // ==========================================
  {
    lang: 'css',
    id: 'css-object-position-background-attachment',
    title: 'CSS: фокус кадрирования фото (object-position) и плавная загрузка картинок',
    summary: 'Смещение точки фокуса при обрезке портретов через object-fit: cover, чтобы у людей на фото не обрезалась голова.',
    code: `.portrait-photo {
  width: 100%;
  height: 280px;
  object-fit: cover;
  /* Фокус по горизонтали в центре (50%), а по вертикали ближе к верху (20%), чтобы сохранить лицо в кадре! */
  object-position: 50% 20%;
  background-color: #121827; /* Цвет-заглушка до загрузки картинки */
}`,
    example: `object-position: top center;`,
    points: [
      'По умолчанию object-fit: cover центрирует фото строго посередине (50% 50%), из-за чего на вертикальных портретах часто обрезается макушка головы. Свойство object-position: 50% 20% решает эту проблему!',
      'Задавай тегу <img> спокойный фоновый цвет background-color: var(--panel), чтобы во время подгрузки картинки не было пустой дырки.',
      'Стилизовать текст атрибута alt (на случай битой картинки) можно прямо в CSS на самом селекторе img.'
    ],
    tags: ['CSS', 'object-position', 'object-fit', 'cover', 'img', 'портрет', 'кадрирование', 'фото'],
    when: 'В карточках команды, аватарах, обложках статей и баннерах с людьми.',
    alternatives: 'Для фоновых декоративных картинок аналогично работает свойство background-position: 50% 20%.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/object-position'
  },
  {
    lang: 'css',
    id: 'css-touch-action-overscroll',
    title: 'CSS: отзывчивость на тач-экранах (touch-action: manipulation и -webkit-tap-highlight-color)',
    summary: 'Отключение синей вспышки при тапе на Android/iOS и мгновенный отклик кнопок без задержки двойного зума.',
    code: `html {
  /* Убирает стандартную полупрозрачную синюю/серую вспышку при тапе пальцем на смартфонах */
  -webkit-tap-highlight-color: transparent;
}

button, a, input, label {
  /* Разрешает скролл и пинч-зум, но отключает задержку ожидания двойного тапа на кнопках! */
  touch-action: manipulation;
}`,
    example: `.canvas-drawing-area {\n  touch-action: none; /* Перехватывает движения пальца для рисования без прокрутки страницы */\n}`,
    points: [
      '-webkit-tap-highlight-color: transparent убирает грубую системную подсветку тапа на мобильных устройствах, позволяя использовать собственные аккуратные стили :active.',
      'touch-action: manipulation делает быстрые многократные нажатия по кнопкам («+ / -» количества товара в корзине) мгновенными без срабатывания зума браузера.',
      'На кастомных ползунках и холстах <canvas> используй touch-action: none или touch-action: pan-y, чтобы движение пальца влево-вправо не дёргало страницу.'
    ],
    tags: ['CSS', 'touch-action', 'tap-highlight-color', 'manipulation', 'mobile', 'тач', 'смартфон', 'кнопки'],
    when: 'В базовом CSS-сбросе любого веб-приложения и PWA.',
    alternatives: 'При отключении tap-highlight обязательно задай заметный отклик кнопки через :active { transform: scale(0.98); }.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/touch-action'
  },
  {
    lang: 'css',
    id: 'css-grid-minmax-auto-fill-vs-fit',
    title: 'CSS Grid: разница между auto-fill и auto-fit в адаптивной сетке',
    summary: 'Наглядное объяснение того, как ведёт себя строка сетки, когда карточек в ней меньше, чем помещается по ширине экрана.',
    code: `/* 1. auto-fill: сохраняет пустые колонки справа — одна карточка НЕ растянется на весь экран! */
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: 16px;
}

/* 2. auto-fit: схлопывает пустые колонки в 0 — если карточек всего 2, они растянутся по 50% каждая */
.features-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 16px;
}`,
    example: `/* Обрати внимание на min(280px, 100%) внутри minmax — это защищает от скролла на узких экранах 320px! */`,
    points: [
      'Ключевое отличие проявляется, когда карточек мало (например, в результатах поиска нашлась всего 1 карточка): с auto-fill она займёт аккуратную 1 колонку слева (~300px), а с auto-fit раздуется на всю ширину монитора (1360px)!',
      'Поэтому для каталогов товаров, статей и результатов поиска ВСЕГДА используй auto-fill, а для плашек преимуществ (где всегда 3–4 блока) — auto-fit.',
      'Формула minmax(min(280px, 100%), 1fr) гарантирует, что даже если экран уже 280px, колонка сожмётся до 100% без горизонтального скролла.'
    ],
    tags: ['CSS', 'auto-fill', 'auto-fit', 'minmax', 'grid-template-columns', 'разница', 'сетка', 'каталог'],
    when: 'Используй auto-fill в списках с переменным числом карточек (поиск, избранное, каталог).',
    alternatives: 'Flexbox с flex-wrap: wrap всегда растягивает последнюю одинокую карточку при flex-grow: 1, поэтому для ровных каталогов лучше подходит Grid с auto-fill.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/repeat'
  },
  {
    lang: 'css',
    id: 'css-empty-only-child-target',
    title: 'CSS: псевдоклассы состояния страницы (:target, :only-child, :placeholder-shown)',
    summary: 'Подсветка секции, к которой перешли по якорной ссылке (#id), и плавающий лейбл инпута на чистом CSS.',
    code: `/* Подсвечивает раздел или комментарий, чей #id сейчас указан в адресной строке браузера! */
section:target {
  border-color: #38bdf8;
  background: rgba(56, 189, 248, 0.06);
  scroll-margin-top: 80px;
}

/* Показываем кнопку «Очистить поиск» только когда в инпуте набран текст (плейсхолдер скрыт)! */
.search-input:not(:placeholder-shown) ~ .clear-btn {
  display: inline-flex;
}`,
    example: `<input placeholder=" "> /* Пробел в placeholder нужен для работы трюка с :placeholder-shown */`,
    points: [
      'Псевдокласс :target автоматически срабатывает на элементе, чей id совпадает с хешем в URL (например, страница открыта по ссылке page.html#faq-3)!',
      'Псевдокласс :placeholder-shown проверяет, пуст ли сейчас <input> (показывается ли его placeholder). С его помощью делают «плавающие подписи» (Floating Labels) и показ крестика очистки на чистом CSS!',
      ':only-child выбирает элемент только в том случае, если у него нет других соседей внутри родителя.'
    ],
    tags: ['CSS', ':target', ':placeholder-shown', ':only-child', 'floating label', 'якорь', 'инпут'],
    when: 'Для подсветки выбранного в оглавлении раздела или процитированного комментария (:target) и умных полей ввода (:placeholder-shown).',
    alternatives: 'Для сложной логики очистки инпута по клику на крестик добавь 3 строчки JS.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/:target'
  },

  // ==========================================
  // Дополнительные карточки PHP 8.x & SQL
  // ==========================================
  {
    lang: 'php',
    id: 'php-sql-joins-indexes',
    title: 'PHP & SQL: объединение таблиц (INNER JOIN vs LEFT JOIN), GROUP BY и индексы',
    summary: 'Практическая шпаргалка по выборке связанных данных из нескольких таблиц БД и ускорению медленных запросов.',
    code: `-- 1. LEFT JOIN: выбираем ВСЕ статьи и количество комментариев к каждой (даже если комментариев 0!)
SELECT
    a.id,
    a.title,
    u.name AS author_name,
    COUNT(c.id) AS comments_count
FROM articles a
INNER JOIN users u ON u.id = a.author_id
LEFT JOIN comments c ON c.article_id = a.id
WHERE a.is_published = 1
GROUP BY a.id
ORDER BY a.created_at DESC
LIMIT 20;

-- 2. Создание составного индекса для мгновенной фильтрации и сортировки
CREATE INDEX idx_articles_pub_created ON articles (is_published, created_at DESC);`,
    example: `/* INNER JOIN отбрасывает строки без совпадения, а LEFT JOIN сохраняет все строки левой таблицы */`,
    points: [
      'Главное отличие: INNER JOIN возвращает только те записи, которые есть в обеих таблицах. Если считать комментарии к статьям через INNER JOIN, статьи без единого комментария просто пропадут из выборки! Поэтому для необязательных связей всегда используй LEFT JOIN.',
      'Обязательно создавай индексы (CREATE INDEX) на все внешние ключи (author_id, category_id) и поля, участвующие в WHERE и ORDER BY.',
      'Не пиши SELECT * в продакшене — перечисляй только нужные колонки, чтобы не гонять тяжёлые текстовые поля по сети впустую.'
    ],
    tags: ['PHP', 'SQL', 'JOIN', 'LEFT JOIN', 'INNER JOIN', 'GROUP BY', 'INDEX', 'база данных', 'запросы'],
    when: 'При выводе списков статей с авторами, заказов с клиентами и категорий с количеством товаров.',
    alternatives: 'Избегай проблемы N+1 запросов (когда внутри цикла foreach по 20 статьям выполняется ещё 20 отдельных SQL-запросов за автором каждой статьи!).',
    url: 'https://www.php.net/manual/ru/book.pdo.php'
  },
  {
    lang: 'php',
    id: 'php-password-token-random-bytes',
    title: 'PHP 8: генерация криптостойких токенов (random_bytes, random_int) и HMAC-подписи',
    summary: 'Создание безопасных ссылок сброса пароля, API-ключей, одноразовых СМС-кодов и проверка подписи вебхуков.',
    code: `<?php
declare(strict_types=1);

// 1. 64-символьный криптостойкий токен для сброса пароля или API-ключа
$resetToken = bin2hex(random_bytes(32));

// 2. Криптостойкий 6-значный код подтверждения для СМС / Email
$smsCode = (string) random_int(100000, 999999);

// 3. Проверка цифровой подписи вебхука (HMAC-SHA256) от платёжной системы
$expectedSig = hash_hmac('sha256', $rawWebhookBody, $webhookSecretKey);
if (!hash_equals($expectedSig, $receivedSignatureHeader)) {
    http_response_code(401);
    exit('Неверная подпись вебхука');
}`,
    example: `/* НИКОГДА не используй rand(), mt_rand() или uniqid() для токенов безопасности — они легко предсказываются! */`,
    points: [
      'Старые функции rand(), mt_rand() и uniqid() НЕ являются криптографически безопасными. Для любых токенов, паролей и кодов из СМС используй ТОЛЬКО random_bytes() и random_int()!',
      'Функция hash_hmac("sha256", $payload, $secret) позволяет гарантировать, что пришедший на твой сервер вебхук об оплате действительно отправлен банком, а не подделан.',
      'При хранении токенов сброса пароля в БД хорошей практикой является хранение их хеша hash("sha256", $token) с ограниченным временем жизни (например, 30 минут).'
    ],
    tags: ['PHP', 'random_bytes', 'random_int', 'bin2hex', 'hash_hmac', 'hash_equals', 'токен', 'безопасность', 'вебхук'],
    when: 'При генерации ссылок восстановления пароля, ключей API, пин-кодов и приёме платёжных уведомлений.',
    alternatives: 'Для генерации стандартного UUID v4 в PHP также используют random_bytes(16).',
    url: 'https://www.php.net/manual/ru/function.random-bytes.php'
  },
  {
    lang: 'php',
    id: 'php-output-buffering-templates',
    title: 'PHP 8: нативная шаблонизация через буферизацию вывода (ob_start / ob_get_clean)',
    summary: 'Чистое разделение PHP-логики и HTML-верстки без тяжёлых сторонних библиотек в 10 строчек кода.',
    code: `<?php
declare(strict_types=1);

/**
 * Рендерит PHP-шаблон с переданными переменными и возвращает готовую HTML-строку
 */
function renderView(string $templatePath, array $vars = []): string {
    extract($vars, EXTR_SKIP); // EXTR_SKIP защищает от перезаписи существующих переменных
    ob_start();
    include $templatePath;
    return (string) ob_get_clean();
}

// Использование: собираем карточку и вставляем её внутрь главного layout.php
$contentHtml = renderView(__DIR__ . '/views/catalog.php', ['items' => $products]);
echo renderView(__DIR__ . '/views/layout.php', ['title' => 'Каталог', 'content' => $contentHtml]);`,
    example: `<h1><?= htmlspecialchars($title, ENT_QUOTES, 'UTF-8') ?></h1>`,
    points: [
      'Пара функций ob_start() и ob_get_clean() перехватывает весь HTML-вывод подключаемого файла в строку вместо немедленной отправки в браузер!',
      'Это позволяет сначала отрендерить внутреннюю страницу (и узнать её заголовок и метатеги), а затем обернуть результат в общий каркас шапки и подвала (layout.php).',
      'Внутри HTML-шаблонов используй короткий эхо-тег <?= e($var) ?> и альтернативный синтаксис foreach ($items as $item): ... endforeach;.'
    ],
    tags: ['PHP', 'ob_start', 'ob_get_clean', 'include', 'require', 'шаблонизатор', 'views', 'layout'],
    when: 'При создании лёгких сайтов, лендингов и личных кабинетов на чистом PHP без сложного фреймворка.',
    alternatives: 'В крупных командных проектах используют шаблонизаторы Twig или Blade с автоэкранированием.',
    url: 'https://www.php.net/manual/ru/function.ob-get-clean.php'
  },
  {
    lang: 'xml',
    id: 'seo-security-headers-csp',
    title: 'SEO & Безопасность: ключевые HTTP-заголовки защиты (CSP, HSTS, X-Frame-Options)',
    summary: 'Защита сайта от внедрения чужих скриптов (XSS), кликджекинга в чужих iframe и принудительный HTTPS.',
    code: `# Конфигурация для Nginx (или через header() в PHP / .htaccess в Apache):
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;`,
    example: `/* Именно из-за заголовка X-Frame-Options: DENY сайты вроде MDN и Google нельзя открыть внутри чужого <iframe>! */`,
    points: [
      'Заголовок X-Frame-Options: SAMEORIGIN (или CSP frame-ancestors \'self\') запрещает мошенническим сайтам встраивать твой сайт в прозрачный <iframe> поверх чужих кнопок (защита от Clickjacking).',
      'X-Content-Type-Options: nosniff запрещает браузеру пытаться угадать и выполнить загруженный текстовый файл как JavaScript.',
      'Strict-Transport-Security (HSTS) заставляет браузер обращаться к домену строго по защищённому протоколу HTTPS.'
    ],
    tags: ['XML', 'SEO', 'CSP', 'HSTS', 'X-Frame-Options', 'nosniff', 'безопасность', 'заголовки сервера'],
    when: 'При настройке продакшен-сервера Nginx, Apache или Cloudflare для любого веб-проекта.',
    alternatives: 'Не включай HSTS (Strict-Transport-Security) на локальном тестовом домене без SSL-сертификата.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy'
  }
];
