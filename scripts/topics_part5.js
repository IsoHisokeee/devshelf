export const catalogTopics = [
  // ==========================================
  // Быстрый справочник тегов HTML5, свойств CSS3, функций JS и PHP 8
  // ==========================================
  {
    lang: 'html',
    id: 'html-main-element',
    title: 'HTML: главный контент страницы <main>',
    summary: 'Семантический контейнер для уникального содержимого текущей страницы (без сквозной шапки, меню и подвала).',
    code: `<body>
  <header>Шапка сайта</header>
  <main id="main-content">
    <h1>Каталог ноутбуков</h1>
    <p>Основное содержимое страницы...</p>
  </main>
  <footer>Подвал сайта</footer>
</body>`,
    example: `<a href="#main-content" class="skip-link">Перейти к контенту</a>`,
    points: [
      'На странице должен быть только один видимый элемент <main> (допускается больше только если остальные скрыты атрибутом hidden).',
      'Не вкладывай <main> внутрь <article>, <aside>, <footer>, <header> или <nav>.',
      'Добавь id="main-content" на <main>, чтобы пользователи с клавиатурой могли сразу перепрыгнуть навигацию.'
    ],
    tags: ['HTML', 'main', 'семантика', 'контент', 'skip-link', 'каркас'],
    when: 'На каждой веб-странице вокруг центральной рабочей области.',
    alternatives: 'Устаревший <div id="main" role="main"> полностью заменён нативным тегом <main>.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/main'
  },
  {
    lang: 'html',
    id: 'html-nav-breadcrumbs',
    title: 'HTML: навигация <nav> и разметка «хлебных крошек» (Breadcrumbs)',
    summary: 'Доступная разметка главного меню, оглавления статьи и цепочки навигации с атрибутом aria-current="page".',
    code: `<nav aria-label="Хлебные крошки">
  <ol class="breadcrumbs">
    <li><a href="/">Главная</a></li>
    <li><a href="/docs">Справочник</a></li>
    <li><span aria-current="page">CSS Grid</span></li>
  </ol>
</nav>`,
    example: `[aria-current="page"] {\n  color: var(--accent);\n  font-weight: 600;\n}`,
    points: [
      'Если на странице несколько блоков <nav> (в шапке, в сайдбаре и хлебные крошки), обязательно дай каждому понятный aria-label!',
      'Для хлебных крошек используй нумерованный список <ol>, так как порядок уровней вложенности здесь важен.',
      'Атрибут aria-current="page" на активном пункте меню сообщает скринридеру, что пользователь уже находится на этой странице.'
    ],
    tags: ['HTML', 'nav', 'breadcrumbs', 'aria-current', 'хлебные крошки', 'меню', 'навигация'],
    when: 'Для главного меню сайта, бокового оглавления документации, пагинации и хлебных крошек.',
    alternatives: 'Обычный блок ссылок в футере (политика, соцсети) не обязательно оборачивать в <nav>, достаточно <footer>.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/nav'
  },
  {
    lang: 'html',
    id: 'html-article-section-aside',
    title: 'HTML: разница между <article>, <section> и <aside>',
    summary: 'Чёткое правило выбора между независимой карточкой (<article>), тематической главой (<section>) и боковым блоком (<aside>).',
    code: `<section aria-labelledby="news-heading">
  <h2 id="news-heading">Последние статьи</h2>

  <article class="post-card">
    <h3>Обзор PHP 8.3</h3>
    <p>Что нового появилось в типизации классов и JSON...</p>
  </article>
</section>

<aside aria-label="Рекламный блок">
  <p>Подпишитесь на наш Telegram-канал</p>
</aside>`,
    example: `/* Правило: если блок можно вырвать со страницы и отправить в RSS без потери смысла — это <article>! */`,
    points: [
      'Используй <article> для самодостаточной единицы контента: карточка товара, пост в блоге, виджет погоды, комментарий пользователя.',
      'Используй <section> для логического раздела страницы со своим заголовком <h2> (например: «Преимущества», «Отзывы», «Тарифы»).',
      'Если контейнер нужен исключительно для CSS-сетки или флекса и не несёт смысловой роли — используй обычный <div>!'
    ],
    tags: ['HTML', 'article', 'section', 'aside', 'div', 'семантика', 'разница', 'карточка'],
    when: 'При проектировании структуры лендингов, магазинов, новостных порталов и документации.',
    alternatives: 'Не заменяй каждый <div> на <section> — пустые секции без заголовков только засоряют дерево доступности.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/article'
  },
  {
    lang: 'html',
    id: 'html-label-for',
    title: 'HTML: подпись поля формы <label> и увеличение кликабельной зоны',
    summary: 'Связывание текстовой метки с полем ввода для удобства нажатия пальцем и обязательной доступности форм.',
    code: `<!-- Способ 1: вложенный инпут (не требует придумывать уникальный id!) -->
<label class="field">
  <span>Электронная почта</span>
  <input type="email" name="email" required>
</label>

<!-- Способ 2: связь через атрибуты for и id -->
<div class="checkbox-row">
  <input type="checkbox" id="agree-terms" name="agree" required>
  <label for="agree-terms">Согласен с условиями оферты</label>
</div>`,
    example: `label { cursor: pointer; }`,
    points: [
      'Клик по тексту <label> автоматически ставит курсор в связанное текстовое поле или переключает галочку чекбокса/радиокнопки!',
      'Никогда не используй placeholder вместо <label>: как только пользователь начнёт печатать, подсказка исчезнет, и он забудет, что требовалось ввести.',
      'Вкладывание <input> прямо внутрь <label> избавляет от необходимости генерировать десятки уникальных id.'
    ],
    tags: ['HTML', 'label', 'for', 'input', 'форма', 'подпись', 'доступность', 'чекбокс'],
    when: 'Для абсолютно каждого поля ввода, чекбокса, радиокнопки и выпадающего списка <select>.',
    alternatives: 'Если у поля поиска в шапке нет видимой текстовой подписи, добавь инпуту aria-label="Поиск по сайту".',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/label'
  },
  {
    lang: 'html',
    id: 'html-optgroup-multiple',
    title: 'HTML: атрибуты форм (autocomplete, autofocus, readonly vs disabled)',
    summary: 'Тонкое управление поведением полей формы: автозаполнение карт и адресов, отличие readonly от disabled.',
    code: `<form>
  <!-- Включает автозаполнение имени и адреса из профиля браузера -->
  <input type="text" name="name" autocomplete="name">
  <input type="password" name="new_pass" autocomplete="new-password">

  <!-- readonly: нельзя редактировать, НО значение ОТПРАВЛЯЕТСЯ на сервер и копируется! -->
  <input type="text" name="promo" value="DEVSHELF2026" readonly>

  <!-- disabled: поле полностью выключено и НЕ отправляется в $_POST / FormData! -->
  <input type="text" name="legacy_id" value="104" disabled>
</form>`,
    example: `<input type="search" autofocus>`,
    points: [
      'Ключевая разница: поле с readonly можно выделить мышью, скопировать, и его значение уходит на сервер при отправке формы. Поле с disabled полностью игнорируется при отправке формы!',
      'Правильные значения autocomplete ("username", "current-password", "new-password", "cc-number", "tel") позволяют менеджеру паролей заполнить форму в один тап.',
      'Атрибут autofocus автоматически ставит курсор в поле при открытии страницы или модального окна <dialog>.'
    ],
    tags: ['HTML', 'readonly', 'disabled', 'autocomplete', 'autofocus', 'form', 'атрибуты форм'],
    when: 'В формах входа, регистрации, оформления заказа и полях с промокодами/реферальными ссылками.',
    alternatives: 'Если нужно передать служебный ID на сервер вообще без показа поля пользователю, используй <input type="hidden">.',
    url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/autocomplete'
  },
  {
    lang: 'html',
    id: 'html-iframe-lazy-loading',
    title: 'HTML: оптимизация изображений (loading="lazy", decoding="async", fetchpriority="high")',
    summary: 'Ускорение загрузки первого экрана (LCP) за счёт приоритета главного баннера и ленивой подгрузки остальных фото.',
    code: `<!-- Главный баннер на первом экране (LCP): грузим с максимальным приоритетом! -->
<img
  src="/img/hero-dashboard.webp"
  alt="Интерфейс панели управления"
  width="1200"
  height="675"
  fetchpriority="high"
>

<!-- Картинки ниже первого экрана: грузим лениво по мере скролла -->
<img
  src="/img/card-1.webp"
  alt="Превью шаблона"
  width="400"
  height="300"
  loading="lazy"
  decoding="async"
>`,
    example: `/* Всегда указывай атрибуты width и height, чтобы страница не прыгала при загрузке фото (CLS = 0) */`,
    points: [
      'Золотое правило производительности: главному изображению на первом экране ставь fetchpriority="high" (и НЕ ставь loading="lazy"), а всем картинкам ниже первого экрана — loading="lazy"!',
      'Явное указание атрибутов width и height позволяет браузеру заранее зарезервировать пропорции места до скачивания картинки, избавляя от скачков контента (Cumulative Layout Shift).',
      'decoding="async" разрешает браузеру декодировать сжатый растр в фоновом потоке без фризов скролла.'
    ],
    tags: ['HTML', 'img', 'loading', 'lazy', 'fetchpriority', 'decoding', 'lcp', 'cls', 'оптимизация картинок'],
    when: 'На всех изображениях лендингов, карточек товаров и статей.',
    alternatives: 'Старые JS-скрипты ленивой загрузки через data-src больше не нужны в современных браузерах.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority'
  },

  // ==========================================
  // Быстрый справочник свойств CSS3
  // ==========================================
  {
    lang: 'css',
    id: 'css-gap-property',
    title: 'CSS: отступы между элементами сетки (gap, row-gap, column-gap)',
    summary: 'Единое свойство внутренних промежутков между карточками для CSS Grid, Flexbox и многоколоночной верстки.',
    code: `.cards-container {
  display: flex;
  flex-wrap: wrap;
  /* 24px между рядами по вертикали, 16px между карточками по горизонтали */
  gap: 24px 16px;
}

.toolbar {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}`,
    example: `row-gap: 20px;\ncolumn-gap: 12px;`,
    points: [
      'Свойство gap создаёт отступы ТОЛЬКО между соседними элементами, не добавляя лишних отступов по внешним краям контейнера!',
      'Если задано одно значение (gap: 16px), оно применяется и по вертикали, и по горизонтали. Если два (gap: 24px 12px) — сначала row-gap, затем column-gap.',
      'В Flexbox при использовании режимов распределения свободного места (justify-content: space-between, space-around, space-evenly) расстояние между элементами вычисляется автоматически из ширины контейнера, поэтому фиксированный gap используется с start/center/end.'
    ],
    tags: ['CSS', 'gap', 'row-gap', 'column-gap', 'flex', 'grid', 'отступы', 'сетка'],
    when: 'В любых флекс- и грид-контейнерах вместо старых отрицательных margin и :not(:last-child).',
    alternatives: 'В обычном блочном потоке (display: block) свойство gap не работает — там используют margin-bottom.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/gap'
  },
  {
    lang: 'css',
    id: 'css-place-items-centering',
    title: 'CSS: мгновенное центрирование блока (place-items: center и place-content)',
    summary: 'Самый короткий способ отцентрировать элемент по вертикали и горизонтали в две строчки через CSS Grid.',
    code: `.center-box {
  display: grid;
  place-items: center; /* Сокращение для align-items: center + justify-items: center */
  min-height: 300px;
}

/* Наложение двух элементов друг на друга в одной ячейке без position: absolute! */
.hero-stack {
  display: grid;
  place-items: center;
}
.hero-stack > * {
  grid-area: 1 / 1;
}`,
    example: `margin: auto; /* Внутри display: flex или display: grid также центрирует дочерний блок! */`,
    points: [
      'display: grid; place-items: center; — самый лаконичный способ отцентрировать иконку в кнопке или карточку на экране.',
      'Трюк grid-area: 1 / 1 для всех детей грида помещает фоновую картинку и текст в одну ячейку друг над другом без вырывания из потока через position: absolute!',
      'Внутри флекс- или грид-контейнера дочернему элементу можно просто написать margin: auto для центрирования.'
    ],
    tags: ['CSS', 'place-items', 'place-content', 'align-items', 'justify-content', 'центрирование', 'grid'],
    when: 'Для центрирования иконок, заглушек пустых состояний (empty state), лоадеров и модалок.',
    alternatives: 'Старое центрирование через position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) длиннее и вырывает блок из потока.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/place-items'
  },
  {
    lang: 'css',
    id: 'css-text-decoration-underline',
    title: 'CSS: красивое подчёркивание ссылок (text-underline-offset и text-decoration-thickness)',
    summary: 'Тонкая настройка отступа, толщины и цвета линии подчёркивания текста без костылей с border-bottom.',
    code: `a {
  color: #38bdf8;
  text-decoration: underline;
  text-decoration-color: rgba(56, 189, 248, 0.35);
  text-decoration-thickness: 1.5px;
  text-underline-offset: 4px; /* Опускает линию на 4px ниже базовой линии букв! */
  transition: text-decoration-color 150ms ease;
}

a:hover {
  text-decoration-color: #38bdf8;
}`,
    example: `text-decoration-style: dashed; /* Пунктирное подчёркивание для тултипов и модальных ссылок */`,
    points: [
      'Раньше для красивого отступа линии под ссылкой приходилось отключать text-decoration и лепить border-bottom, который ломался на многострочных ссылках!',
      'Свойство text-underline-offset: 4px аккуратно отодвигает нативное подчёркивание вниз и отлично работает даже если ссылка перенеслась на 2–3 строки.',
      'Браузер по умолчанию включает text-decoration-skip-ink: auto, чтобы линия не перечёркивала нижние хвостики букв «р», «у», «д», «ц».'
    ],
    tags: ['CSS', 'text-underline-offset', 'text-decoration', 'text-decoration-color', 'подчёркивание', 'ссылки', 'типографика'],
    when: 'Для всех текстовых ссылок в статьях, документации и навигации.',
    alternatives: 'Анимированную линию, выезжающую слева направо, делают через background-image: linear-gradient(...) и background-size.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset'
  },
  {
    lang: 'css',
    id: 'css-Sticky-table-header',
    title: 'CSS: липкая шапка таблицы (sticky <th>) и фиксированная первая колонка',
    summary: 'Закрепление заголовков столбцов при вертикальной прокрутке больших таблиц данных и прайс-листов.',
    code: `.table-scroll {
  max-height: 420px;
  overflow: auto;
  border: 1px solid var(--line);
}

table {
  width: 100%;
  border-collapse: separate; /* Важно для сохранения рамок у sticky-ячеек! */
  border-spacing: 0;
}

thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  background: #121827; /* Непрозрачный фон обязателен, чтобы строки не просвечивали */
  border-bottom: 1px solid var(--line-strong);
}`,
    example: `tbody th:first-child {\n  position: sticky;\n  left: 0;\n  background: #0e1320;\n}`,
    points: [
      'При position: sticky на ячейках <th> используй border-collapse: separate; border-spacing: 0 вместо border-collapse: collapse — иначе нижняя рамка шапки пропадёт при скролле!',
      'Обязательно задай ячейкам <th> плотный непрозрачный background, чтобы прокручиваемые строки таблицы не просвечивали сквозь шапку.',
      'Аналогично через position: sticky; left: 0 можно зафиксировать первый столбец с названиями товаров при горизонтальном скролле на телефоне.'
    ],
    tags: ['CSS', 'table', 'sticky', 'thead', 'th', 'border-collapse', 'липкая шапка', 'таблица'],
    when: 'В админ-панелях, CRM, таблицах сравнения характеристик и финансовых отчётах.',
    alternatives: 'Две отдельные таблицы (одна для шапки, вторая для тела) ломают совпадение ширины колонок.',
    url: 'https://developer.mozilla.org/ru/docs/Web/CSS/border-collapse'
  },
  {
    lang: 'css',
    id: 'css-sr-only-visually-hidden',
    title: 'CSS: доступное скрытие текста для скринридеров (.visually-hidden / .sr-only)',
    summary: 'Стандартный паттерн скрытия подписи кнопки или заголовка секции для глаз с полным сохранением для голосового чтения.',
    code: `.sr-only,
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`,
    example: `<button type="button">\n  <svg aria-hidden="true">...</svg>\n  <span class="sr-only">Удалить из избранного</span>\n</button>`,
    points: [
      'Обычные display: none и visibility: hidden полностью вырезают элемент и для глаз, и для программ экранного доступа (скринридеров)!',
      'Класс .sr-only (screen reader only) сжимает текст до 1 пикселя без удаления из дерева доступности — незрячий пользователь услышит чёткую подпись кнопки.',
      'Полезно также для ссылки «Перейти к основному контенту» (.skip-link:focus-visible), которая проявляется при первом нажатии Tab.'
    ],
    tags: ['CSS', 'sr-only', 'visually-hidden', 'accessibility', 'a11y', 'скринридер', 'скрыть элемент'],
    when: 'Для кнопок, содержащих только иконку, скрытых заголовков секций и таблиц.',
    alternatives: 'На самой кнопке без текста можно также использовать атрибут aria-label="Удалить".',
    url: 'https://www.w3.org/WAI/tutorials/forms/labels/#note-on-hiding-elements'
  },
  {
    lang: 'css',
    id: 'css-will-change-contain',
    title: 'CSS: аппаратное ускорение и изоляция рендеринга (contain, content-visibility: auto)',
    summary: 'Кратный прирост скорости отрисовки длинных страниц с сотнями карточек за счёт пропуска рендеринга вне экрана.',
    code: `.catalog-card,
.doc-section {
  /* Браузер пропускает расчёт лейаута и отрисовку карточек, находящихся далеко за пределами экрана! */
  content-visibility: auto;
  /* Примерная высота карточки, чтобы ползунок скроллбара не прыгал */
  contain-intrinsic-size: auto 260px;
}`,
    example: `/* Прирост скорости начальной отрисовки на длинных списках достигает 3–5 раз! */`,
    points: [
      'content-visibility: auto — одно из самых мощных свойств современного CSS: браузер не тратит ресурсы на рендеринг блоков, пока пользователь не подскроллит к ним!',
      'Свойство contain-intrinsic-size: auto 260px сообщает браузеру ориентировочную высоту скрытого блока, чтобы общая высота страницы оставалась точной.',
      'Свойство will-change: transform ставь точечно только на элементы, которые реально постоянно двигаются (иначе переполнится видеопамять GPU).'
    ],
    tags: ['CSS', 'content-visibility', 'contain-intrinsic-size', 'contain', 'will-change', 'производительность', 'оптимизация'],
    when: 'На длинных страницах документации, лендингах с 10+ секциями и больших списках карточек.',
    alternatives: 'Виртуализация списков на JS (Virtual Scroll) сложнее и ломает встроенный поиск по странице Ctrl+F.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility'
  }
];
