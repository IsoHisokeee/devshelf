import './reference-data.js';
import './preview-engine.js';
import { getRecipePrerequisites } from './recipe-knowledge.js';

const rawTopics = Array.isArray(window.DEVSHELF_REFERENCE_TOPICS)
  ? window.DEVSHELF_REFERENCE_TOPICS
  : [];

const categoryLabels = {
  html: 'HTML5',
  css: 'CSS3',
  javascript: 'JavaScript',
  frameworks: 'Фреймворк',
  recipes: 'Рецепт',
  php: 'PHP 8.3',
  xml: 'XML / SEO'
};

const defaultMetaByCategory = {
  html: {
    when: 'При проектировании семантической структуры документа, форм, медиа и доступного интерфейса.',
    alternatives: 'Специализированные ARIA-атрибуты или веб-компоненты при нестандартном поведении.',
    points: [
      'Используйте тег строго по смыслу контента, а не ради визуального размера по умолчанию.',
      'Соблюдайте иерархию заголовков и связывайте подписи <label> с полями ввода.',
      'Проверяйте навигацию с клавиатуры (Tab / Shift+Tab / Enter).'
    ]
  },
  css: {
    when: 'При построении адаптивных сеток, отступов, рамок, типографики и микро-анимаций.',
    alternatives: 'Утилитарные классы Tailwind CSS или компонентные токены дизайн-системы.',
    points: [
      'Выносите повторяющиеся цвета, радиусы и тени в CSS-переменные (:root).',
      'Для анимаций отдавайте приоритет свойствам transform и opacity.',
      'Проверяйте поведение блока на узких экранах (320px–768px).'
    ]
  },
  javascript: {
    when: 'Для обработки пользовательских событий, работы с DOM, сетевых запросов и состояния.',
    alternatives: 'Декларативные фреймворки (React, Vue, Alpine.js) или нативные HTML/CSS-механизмы.',
    points: [
      'Отделяйте чистую обработку данных от прямых манипуляций с DOM.',
      'Всегда оборачивайте сетевые вызовы fetch и JSON.parse в блок try / catch.',
      'Следите за очисткой таймеров и слушателей событий.'
    ]
  },
  frameworks: {
    when: 'Для ускорения разработки, устранения рутинного шаблонного кода и масштабирования архитектуры.',
    alternatives: 'Нативный стек HTML5 + CSS3 + Vanilla JS для небольших проектов без сборщика.',
    points: [
      'Для быстрых прототипов подключайте CDN-версию, а для продакшена используйте сборщик Vite.',
      'Изучите базовый нативный аналог перед внедрением фреймворка.',
      'Следите за итоговым весом JS/CSS бандла при сборке.'
    ]
  },
  recipes: {
    when: 'Когда нужен готовый проверенный модуль интерфейса (вход, регистрация, корзина, фильтр, модалка).',
    alternatives: 'Готовые UI-библиотеки или кастомная разработка с нуля.',
    points: [
      'Все рецепты объединяют семантический HTML, изолированный CSS и чистый JS.',
      'В окне «Код и синтаксис» вы можете переключаться между слитным кодом и отдельными вкладками HTML / CSS / JS.',
      'Адаптируйте CSS-переменные под фирменную палитру вашего проекта.'
    ]
  },
  php: {
    when: 'На серверной стороне для валидации форм, авторизации, работы с MySQL/PostgreSQL и API.',
    alternatives: 'Фреймворк Laravel 11 или серверные среды Node.js / Go / Python.',
    points: [
      'Никогда не подставляйте пользовательский ввод напрямую в SQL — используйте только PDO prepare/execute.',
      'Храните пароли только в виде хеша password_hash() и проверяйте через password_verify().',
      'Экранируйте вывод в HTML через htmlspecialchars($val, ENT_QUOTES, "UTF-8").'
    ]
  },
  xml: {
    when: 'Для настройки веб-сервера (.htaccess / Nginx), SEO-индексации (sitemap.xml, robots.txt, Schema.org) и векторной графики SVG.',
    alternatives: 'JSON-конфигурации для клиентских приложений.',
    points: [
      'Следите за строгим закрытием тегов и кодировкой UTF-8 без BOM.',
      'Проверяйте валидность микроразметки и карты сайта перед выкладкой на продакшен.',
      'Делайте резервную копию конфигурационных файлов сервера перед правками.'
    ]
  }
};

const FAVORITES_KEY = 'devshelf_favorites_v2';

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function saveFavorites(favSet) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favSet]));
  } catch {
    // ignore storage errors
  }
}

const favorites = loadFavorites();

function normalizeTopic(item) {
  const category = item.lang || item.category || 'html';
  const fallback = defaultMetaByCategory[category] || defaultMetaByCategory.html;
  const prereqs = getRecipePrerequisites(item.id);

  return {
    id: item.id,
    lang: category,
    category,
    title: item.title || 'Без названия',
    summary: item.summary || '',
    when: item.when || fallback.when,
    alternatives: item.alternatives || fallback.alternatives,
    tags: Array.isArray(item.tags) ? item.tags : [],
    points: Array.isArray(item.points) && item.points.length ? item.points : fallback.points,
    code: item.code || '',
    example: item.example || '',
    prerequisites: prereqs
  };
}

const referenceItems = rawTopics.map(normalizeTopic);
const topicsById = new Map(referenceItems.map((item) => [item.id, item]));

const state = {
  search: '',
  category: 'all',
  tag: 'all',
  searchScope: 'all', // 'all' | 'recipes'
  modalMobileView: 'info', // 'info' | 'code' | 'preview'
  activeModalTopicId: null,
  activeCodePart: 'combined',
  activeRawCode: ''
};

const cardsGrid = document.querySelector('#cards-grid');
const searchInput = document.querySelector('#search-input');
const searchClearBtn = document.querySelector('#search-clear-btn');
const searchLabelText = document.querySelector('#search-label-text');
const categorySelect = document.querySelector('#category-select');
const topicTabs = document.querySelector('#topic-tabs');
const quickFilters = document.querySelector('#quick-filters');
const resultsMeta = document.querySelector('#results-meta');
const totalCount = document.querySelector('#total-count');
const scopeAllBtn = document.querySelector('#scope-all-btn');
const scopeRecipesBtn = document.querySelector('#scope-recipes-btn');

// Modal DOM Elements
const modalBackdrop = document.querySelector('#topic-modal-backdrop');
const modalDialog = document.querySelector('.topic-modal');
const modalMobileTabs = document.querySelector('#modal-mobile-tabs');
const modalPrereqContainer = document.querySelector('#modal-prereq-container');
const modalTitle = document.querySelector('#modal-title');
const modalBadges = document.querySelector('#modal-badges');
const modalSummary = document.querySelector('#modal-summary');
const modalWhen = document.querySelector('#modal-when');
const modalAlternatives = document.querySelector('#modal-alternatives');
const modalPoints = document.querySelector('#modal-points');
const modalCode = document.querySelector('#modal-code');
const modalCodeTabs = document.querySelector('#modal-code-tabs');
const modalCopyBtn = document.querySelector('#modal-copy-btn');
const modalCloseBtn = document.querySelector('#modal-close-btn');
const modalSandboxLink = document.querySelector('#modal-sandbox-link');
const modalPreviewFrame = document.querySelector('#modal-preview-frame');
const modalRefreshPreview = document.querySelector('#modal-refresh-preview');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function updateCategoryCounts() {
  if (totalCount) {
    totalCount.textContent = `${referenceItems.length} тем`;
  }

  const counts = {
    all: referenceItems.length,
    html: 0,
    css: 0,
    javascript: 0,
    frameworks: 0,
    recipes: 0,
    php: 0,
    xml: 0,
    favorites: favorites.size
  };

  for (const item of referenceItems) {
    if (typeof counts[item.category] === 'number') {
      counts[item.category] += 1;
    }
  }

  document.querySelectorAll('[data-count-for]').forEach((node) => {
    const key = node.getAttribute('data-count-for');
    if (!key || typeof counts[key] !== 'number') return;
    node.textContent = String(counts[key]);
  });

  const scopeAllCount = document.querySelector('#scope-count-all');
  if (scopeAllCount) scopeAllCount.textContent = String(referenceItems.length);
  const scopeRecipesCount = document.querySelector('#scope-count-recipes');
  if (scopeRecipesCount) scopeRecipesCount.textContent = String(counts.recipes);
}

function syncCategoryControls() {
  if (categorySelect && categorySelect.value !== state.category) {
    categorySelect.value = state.category;
  }

  if (topicTabs) {
    topicTabs.querySelectorAll('.topic-tab').forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.category === state.category);
    });
  }

  if (scopeAllBtn && scopeRecipesBtn) {
    const isRecipesMode = state.searchScope === 'recipes' || state.category === 'recipes';
    scopeRecipesBtn.classList.toggle('active', isRecipesMode);
    scopeAllBtn.classList.toggle('active', !isRecipesMode);
  }
}

function matchesSearch(item, query) {
  if (!query) return true;
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  let prereqText = '';
  if (item.prerequisites) {
    const funcs = (item.prerequisites.functions || []).join(' ');
    const guide = item.prerequisites.guide || '';
    const topics = (item.prerequisites.topics || []).map((t) => `${t.name} ${t.id}`).join(' ');
    prereqText = `${funcs} ${guide} ${topics}`;
  }

  const haystack = [
    item.id,
    item.title,
    item.summary,
    item.when,
    item.alternatives,
    item.tags.join(' '),
    item.points.join(' '),
    item.code,
    prereqText
  ]
    .join(' ')
    .toLowerCase();

  return terms.every((term) => haystack.includes(term));
}

function matchesTag(item, tag) {
  if (tag === 'all') return true;
  const lowTag = tag.toLowerCase();
  return (
    item.tags.some((t) => String(t).toLowerCase().includes(lowTag)) ||
    item.title.toLowerCase().includes(lowTag) ||
    item.id.toLowerCase().includes(lowTag)
  );
}

function filterItems() {
  return referenceItems.filter((item) => {
    // Если активен специальный режим поиска по готовым решениям
    if (state.searchScope === 'recipes') {
      const isRecipe = item.category === 'recipes' || !!item.prerequisites;
      if (!isRecipe) return false;
      const byTag = matchesTag(item, state.tag);
      const bySearch = matchesSearch(item, state.search);
      return byTag && bySearch;
    }

    const byCategory =
      state.category === 'all'
        ? true
        : state.category === 'favorites'
        ? favorites.has(item.id)
        : item.category === state.category;
    const byTag = matchesTag(item, state.tag);
    const bySearch = matchesSearch(item, state.search);
    return byCategory && byTag && bySearch;
  });
}

function createCompactCardMarkup(item, index) {
  const categoryName = categoryLabels[item.category] || item.category.toUpperCase();
  const isFav = favorites.has(item.id);
  const numStr = String(index + 1).padStart(3, '0');
  const isRecipe = item.category === 'recipes' || !!item.prerequisites;

  // Если это готовый рецепт или в режиме поиска решений — рендерим обогащённую карточку с разбором функций
  if (isRecipe && item.prerequisites) {
    const prereq = item.prerequisites;
    return `
      <article class="card-compact card-recipe-mode" data-topic-id="${escapeHtml(item.id)}" tabindex="0" role="button" aria-label="Открыть рецепт: ${escapeHtml(item.title)}">
        <div class="card-recipe-head">
          <div class="card-compact-left">
            <span class="card-index">#${numStr}</span>
            <span class="card-recipe-badge">⚡ РЕЦЕПТ С РАЗБОРОМ</span>
            <h3 class="card-recipe-title">${escapeHtml(item.title)}</h3>
          </div>
          <div class="card-compact-right">
            <span class="badge lang-recipes">Готовое решение</span>
            <button
              type="button"
              class="fav-btn ${isFav ? 'active' : ''}"
              data-fav-id="${escapeHtml(item.id)}"
              title="${isFav ? 'Убрать из избранного' : 'В избранное'}"
              aria-label="Избранное"
            >${isFav ? '★' : '☆'}</button>
          </div>
        </div>

        <p class="card-recipe-summary">${escapeHtml(item.summary)}</p>

        <div class="card-prereq-panel">
          <div class="card-prereq-title">
            <span class="prereq-bulb">💡</span>
            <strong>Что изучить, чтобы написать самостоятельно из головы:</strong>
          </div>
          <div class="card-prereq-funcs">
            ${prereq.functions.slice(0, 5).map((f) => `<code class="prereq-func-pill">${escapeHtml(f)}</code>`).join('')}
          </div>
          <div class="card-prereq-topics">
            <span class="prereq-topics-label">Темы справочника:</span>
            <div class="card-prereq-links">
              ${prereq.topics.map((t) => `
                <button
                  type="button"
                  class="prereq-chip-btn"
                  data-open-prereq="${escapeHtml(t.id)}"
                  title="Открыть справочную статью: ${escapeHtml(t.name)}"
                >
                  📖 ${escapeHtml(t.name.replace(/^(HTML|CSS|JS|PHP):\s*/, ''))} →
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // Стандартная компактная карточка для обычных тем справочника
  return `
    <article class="card-compact" data-topic-id="${escapeHtml(item.id)}" tabindex="0" role="button" aria-label="Открыть справку: ${escapeHtml(item.title)}">
      <div class="card-compact-left">
        <span class="card-index">#${numStr}</span>
        <h3>${escapeHtml(item.title)}</h3>
      </div>
      <div class="card-compact-right">
        <span class="badge lang-${escapeHtml(item.category)}">${escapeHtml(categoryName)}</span>
        <button
          type="button"
          class="fav-btn ${isFav ? 'active' : ''}"
          data-fav-id="${escapeHtml(item.id)}"
          title="${isFav ? 'Убрать из избранного' : 'В избранное'}"
          aria-label="Избранное"
        >${isFav ? '★' : '☆'}</button>
      </div>
    </article>
  `;
}

function renderActiveModalCode() {
  if (!state.activeModalTopicId || !modalCode) return;
  const item = topicsById.get(state.activeModalTopicId);
  if (!item) return;

  const parts = window.DevShelfPreview
    ? window.DevShelfPreview.splitTopicIntoCodeParts(item)
    : { combined: item.code, html: item.code, css: '', js: '' };

  const selectedCode = parts[state.activeCodePart] || parts.combined || item.code;
  state.activeRawCode = selectedCode;

  let highlightMode = item.category || 'html';
  if (state.activeCodePart === 'html') highlightMode = 'html';
  else if (state.activeCodePart === 'css') highlightMode = 'css';
  else if (state.activeCodePart === 'js') highlightMode = 'javascript';

  if (window.DevShelfPreview && typeof window.DevShelfPreview.highlightCode === 'function') {
    modalCode.innerHTML = window.DevShelfPreview.highlightCode(selectedCode, highlightMode);
  } else {
    modalCode.textContent = selectedCode;
  }

  if (modalCodeTabs) {
    modalCodeTabs.querySelectorAll('.code-split-tab').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.part === state.activeCodePart);
    });
  }
}

function setModalMobileView(view) {
  state.modalMobileView = view;
  const modalEl = document.querySelector('.topic-modal');
  if (modalEl) {
    modalEl.dataset.mobileView = view;
  }
  if (modalMobileTabs) {
    modalMobileTabs.querySelectorAll('.modal-mobile-tab').forEach((b) => {
      b.classList.toggle('active', b.dataset.view === view);
    });
  }
}

function openTopicModal(topicId) {
  const item = topicsById.get(topicId);
  if (!item || !modalBackdrop) return;

  state.activeModalTopicId = item.id;
  state.activeCodePart = 'combined';
  setModalMobileView('info');

  const categoryName = categoryLabels[item.category] || item.category.toUpperCase();
  if (modalBadges) {
    modalBadges.innerHTML = `
      <span class="badge lang-${escapeHtml(item.category)}">${escapeHtml(categoryName)}</span>
      ${item.tags.map((t) => `<span class="chip" style="pointer-events:none;">#${escapeHtml(t)}</span>`).join('')}
    `;
  }

  if (modalTitle) modalTitle.textContent = item.title;
  if (modalSummary) modalSummary.textContent = item.summary;
  if (modalWhen) modalWhen.textContent = item.when;
  if (modalAlternatives) modalAlternatives.textContent = item.alternatives;
  if (modalPoints) {
    modalPoints.innerHTML = item.points.map((p) => `<li>${escapeHtml(p)}</li>`).join('');
  }

  // Рендеринг дорожной карты изучения: Что изучить, чтобы написать шаблон из головы
  if (modalPrereqContainer) {
    if (item.prerequisites) {
      const prereq = item.prerequisites;
      modalPrereqContainer.innerHTML = `
        <div class="modal-info-block modal-prereq-block">
          <div class="modal-prereq-header">
            <span class="prereq-badge">ROADMAP // ИЗУЧЕНИЕ С НУЛЯ</span>
            <h4>Как написать этот шаблон самостоятельно из головы</h4>
          </div>
          <p class="prereq-guide-text">${escapeHtml(prereq.guide)}</p>

          <div class="prereq-section">
            <span class="prereq-section-title">Ключевые функции, методы и свойства:</span>
            <div class="prereq-funcs-list">
              ${prereq.functions.map((f) => `<code class="prereq-func-badge">${escapeHtml(f)}</code>`).join('')}
            </div>
          </div>

          <div class="prereq-section">
            <span class="prereq-section-title">Изучите базовые темы справочника (нажмите для перехода):</span>
            <div class="prereq-topics-list">
              ${prereq.topics.map((t) => `
                <button type="button" class="prereq-modal-jump-btn" data-modal-jump="${escapeHtml(t.id)}">
                  <span class="jump-arrow">↳</span>
                  <span class="jump-title">${escapeHtml(t.name)}</span>
                  <span class="jump-tag">Изучить тему →</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else {
      modalPrereqContainer.innerHTML = '';
    }
  }

  renderActiveModalCode();

  if (modalSandboxLink) {
    modalSandboxLink.href = `./playground.html?topic=${encodeURIComponent(item.id)}`;
  }

  if (modalPreviewFrame && window.DevShelfPreview) {
    modalPreviewFrame.srcdoc = window.DevShelfPreview.buildTopicPreviewDoc(item);
  }

  modalBackdrop.hidden = false;
  document.body.style.overflow = 'hidden';

  const url = new URL(window.location.href);
  url.searchParams.set('topic', item.id);
  window.history.replaceState({}, '', url);
}

function closeTopicModal() {
  if (!modalBackdrop) return;
  modalBackdrop.hidden = true;
  document.body.style.overflow = '';
  state.activeModalTopicId = null;

  const url = new URL(window.location.href);
  if (url.searchParams.has('topic')) {
    url.searchParams.delete('topic');
    window.history.replaceState({}, '', url);
  }
}

function renderCards() {
  if (!cardsGrid || !resultsMeta) return;

  syncCategoryControls();
  const filtered = filterItems();

  const isRecipesScope = state.searchScope === 'recipes' || state.category === 'recipes';
  const categoryText = isRecipesScope
    ? 'ГОТОВЫЕ РЕШЕНИЯ С РАЗБОРОМ'
    : state.category === 'all'
    ? 'ВСЕ КАТЕГОРИИ'
    : state.category === 'favorites'
    ? 'ИЗБРАННОЕ'
    : (categoryLabels[state.category] || state.category).toUpperCase();

  resultsMeta.textContent = `НАЙДЕНО: ${filtered.length} ИЗ ${referenceItems.length} // РАЗДЕЛ: ${categoryText} — НАЖМИТЕ НА КАРТОЧКУ ДЛЯ СПРАВКИ ИЛИ НА ТЕМУ ДЛЯ ИЗУЧЕНИЯ`;

  if (!filtered.length) {
    cardsGrid.innerHTML = `
      <article class="workflow-card" style="grid-column: 1 / -1;">
        <h3>По вашему запросу ничего не найдено</h3>
        <p>Попробуйте сбросить фильтр или ввести название нужной функции (например: showModal, reduce, Intl, dataTransfer, preventDefault, localStorage).</p>
      </article>
    `;
    return;
  }

  cardsGrid.innerHTML = filtered.map((item, idx) => createCompactCardMarkup(item, idx)).join('');
}

// Event delegation on cardsGrid
if (cardsGrid) {
  cardsGrid.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    // Клик по чипу темы для изучения ("Что изучить из головы")
    const prereqBtn = target.closest('[data-open-prereq]');
    if (prereqBtn instanceof HTMLElement) {
      event.stopPropagation();
      const pId = prereqBtn.dataset.openPrereq;
      if (pId && topicsById.has(pId)) {
        openTopicModal(pId);
      }
      return;
    }

    const favButton = target.closest('.fav-btn');
    if (favButton instanceof HTMLElement) {
      event.stopPropagation();
      const favId = favButton.dataset.favId;
      if (favId) {
        if (favorites.has(favId)) {
          favorites.delete(favId);
        } else {
          favorites.add(favId);
        }
        saveFavorites(favorites);
        updateCategoryCounts();
        renderCards();
      }
      return;
    }

    const card = target.closest('.card-compact');
    if (card instanceof HTMLElement && card.dataset.topicId) {
      openTopicModal(card.dataset.topicId);
    }
  });

  cardsGrid.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      const target = event.target;
      if (target instanceof HTMLElement && target.classList.contains('card-compact') && target.dataset.topicId) {
        event.preventDefault();
        openTopicModal(target.dataset.topicId);
      }
    }
  });
}

// Переход по темам из дорожной карты внутри модального окна
if (modalPrereqContainer) {
  modalPrereqContainer.addEventListener('click', (event) => {
    const jumpBtn = event.target.closest('[data-modal-jump]');
    if (jumpBtn instanceof HTMLElement && jumpBtn.dataset.modalJump) {
      const jumpId = jumpBtn.dataset.modalJump;
      if (topicsById.has(jumpId)) {
        openTopicModal(jumpId);
      }
    }
  });
}

// Мобильное переключение вкладок в модальном окне: Спецификация vs Код vs Превью
if (modalMobileTabs) {
  modalMobileTabs.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const tabBtn = target.closest('.modal-mobile-tab');
    if (tabBtn instanceof HTMLElement && tabBtn.dataset.view) {
      setModalMobileView(tabBtn.dataset.view);
    }
  });
}

// Modal events
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeTopicModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', (event) => {
    if (event.target === modalBackdrop) {
      closeTopicModal();
    }
  });
}

if (modalCodeTabs) {
  modalCodeTabs.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const tabBtn = target.closest('.code-split-tab');
    if (tabBtn instanceof HTMLElement && tabBtn.dataset.part) {
      state.activeCodePart = tabBtn.dataset.part;
      renderActiveModalCode();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalBackdrop && !modalBackdrop.hidden) {
    closeTopicModal();
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    if (searchInput) searchInput.focus();
  }
});

if (modalCopyBtn) {
  modalCopyBtn.addEventListener('click', async () => {
    if (!modalCode) return;
    try {
      await navigator.clipboard.writeText(state.activeRawCode || modalCode.textContent || '');
      modalCopyBtn.textContent = '✓ Скопировано!';
      setTimeout(() => {
        modalCopyBtn.textContent = 'Копировать';
      }, 1400);
    } catch {
      modalCopyBtn.textContent = 'Ошибка';
    }
  });
}

if (modalRefreshPreview) {
  modalRefreshPreview.addEventListener('click', () => {
    if (!state.activeModalTopicId || !modalPreviewFrame || !window.DevShelfPreview) return;
    const item = topicsById.get(state.activeModalTopicId);
    if (item) {
      modalPreviewFrame.srcdoc = window.DevShelfPreview.buildTopicPreviewDoc(item);
    }
  });
}

// Поиск и кнопка быстрой очистки
if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    state.search = event.target.value.trim();
    if (searchClearBtn) {
      searchClearBtn.hidden = !event.target.value;
    }
    renderCards();
  });
}

if (searchClearBtn) {
  searchClearBtn.addEventListener('click', () => {
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    state.search = '';
    searchClearBtn.hidden = true;
    renderCards();
  });
}

// Переключатель области поиска: Все разделы vs Готовые решения с разбором
function setScope(scope) {
  state.searchScope = scope;
  if (scope === 'recipes') {
    state.category = 'recipes';
    if (scopeRecipesBtn) scopeRecipesBtn.classList.add('active');
    if (scopeAllBtn) scopeAllBtn.classList.remove('active');
    if (categorySelect) categorySelect.value = 'recipes';
    if (searchInput) {
      searchInput.placeholder = 'Поиск по готовым решениям и функциям: вход, модалка, корзина, reduce, showModal, Intl...';
    }
    if (searchLabelText) {
      searchLabelText.textContent = 'Поиск по готовым решениям и функциям для изучения';
    }
  } else {
    state.category = 'all';
    if (scopeAllBtn) scopeAllBtn.classList.add('active');
    if (scopeRecipesBtn) scopeRecipesBtn.classList.remove('active');
    if (categorySelect) categorySelect.value = 'all';
    if (searchInput) {
      searchInput.placeholder = 'Например: border-radius, вход, tailwind, react, flex, fetch, pdo...';
    }
    if (searchLabelText) {
      searchLabelText.textContent = 'Поиск по названию, свойству, тегу или задаче';
    }
  }
  syncCategoryControls();
  renderCards();
}

if (scopeAllBtn) {
  scopeAllBtn.addEventListener('click', () => setScope('all'));
}

if (scopeRecipesBtn) {
  scopeRecipesBtn.addEventListener('click', () => setScope('recipes'));
}

if (categorySelect) {
  categorySelect.addEventListener('change', (event) => {
    state.category = event.target.value;
    state.searchScope = event.target.value === 'recipes' ? 'recipes' : 'all';
    syncCategoryControls();
    renderCards();
  });
}

if (topicTabs) {
  topicTabs.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const button = target.closest('.topic-tab');
    if (!(button instanceof HTMLButtonElement)) return;
    const cat = button.dataset.category || 'all';
    state.category = cat;
    state.searchScope = cat === 'recipes' ? 'recipes' : 'all';
    syncCategoryControls();
    renderCards();
  });
}

if (quickFilters) {
  quickFilters.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains('chip')) return;

    quickFilters.querySelectorAll('.chip').forEach((chip) => chip.classList.remove('active'));
    target.classList.add('active');
    state.tag = target.dataset.tag || 'all';
    renderCards();
  });
}

// ============================================================================
// STANDALONE GENERATOR (.HTML & WINDOWS NATIVE .EXE BUILDER)
// ============================================================================
function generateSelfContainedHtmlDocument() {
  // CRITICAL: Escape closing </script tags inside JSON so the browser HTML parser never closes <script> early!
  const safeTopicsJson = JSON.stringify(referenceItems).replace(/<\//g, '<\\/');

  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DevShelf Standalone // Инженерный справочник (${referenceItems.length} тем)</title>
<style>
  :root {
    --bg: #0b0c0e;
    --panel: #14171c;
    --card: #191c23;
    --text: #f4f4f6;
    --muted: #9ca3af;
    --line: #272b33;
    --line-strong: #3a404d;
    --primary: #facc15;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background-color: var(--bg);
    background-image:
      linear-gradient(to right, rgba(250, 204, 21, 0.025) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(250, 204, 21, 0.025) 1px, transparent 1px);
    background-size: 32px 32px;
    color: var(--text);
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.5;
  }
  header {
    padding: 16px 24px;
    background: #101216;
    border-bottom: 2px solid var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    position: sticky;
    top: 0;
    z-index: 20;
  }
  .brand-row { display: flex; align-items: center; gap: 12px; }
  .brand-box {
    width: 38px;
    height: 38px;
    border: 2px solid var(--primary);
    border-radius: 4px;
    display: grid;
    place-items: center;
    font-family: monospace;
    font-weight: 900;
    color: var(--primary);
    background: #0b0c0e;
  }
  .wrap { max-width: 1400px; margin: 0 auto; padding: 20px; }
  .bar { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 14px; }
  input, select, button {
    padding: 9px 12px;
    border-radius: 4px;
    border: 1px solid var(--line-strong);
    background: var(--panel);
    color: var(--text);
    font-size: 13.5px;
  }
  input { flex: 1; min-width: 240px; }
  input:focus, select:focus { outline: none; border-color: var(--primary); }
  .cat-bar { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
  .cat-btn { cursor: pointer; font-weight: 700; font-size: 12px; text-transform: uppercase; font-family: monospace; }
  .cat-btn.active { background: var(--primary); color: #09090b; border-color: var(--primary); }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 8px; }
  .item {
    padding: 11px 13px;
    border-radius: 4px;
    background: var(--card);
    border: 1px solid var(--line);
    border-left: 3px solid var(--line-strong);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .item:hover { border-color: var(--primary); border-left-color: var(--primary); background: #21252e; }
  .item h4 { margin: 0; font-size: 13.5px; }
  .tag {
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 2px;
    background: rgba(250, 204, 21, 0.12);
    color: var(--primary);
    border: 1px solid rgba(250, 204, 21, 0.4);
    text-transform: uppercase;
    font-weight: 800;
    font-family: monospace;
    white-space: nowrap;
  }
  .modal-bg {
    position: fixed;
    inset: 0;
    background: rgba(5, 6, 8, 0.88);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    z-index: 100;
  }
  .modal-bg[hidden] { display: none !important; }
  .modal {
    background: #121418;
    border: 1px solid var(--primary);
    border-top: 3px solid var(--primary);
    border-radius: 6px;
    width: min(1180px, 100%);
    max-height: 92vh;
    overflow: auto;
    padding: 20px;
  }
  .modal-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 16px; margin-top: 14px; }
  .info-box {
    background: var(--panel);
    border: 1px solid var(--line);
    border-left: 3px solid var(--primary);
    padding: 12px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .info-box h5 { margin: 0 0 6px; color: var(--primary); font-family: monospace; text-transform: uppercase; font-size: 11px; }
  .info-box p, .info-box ul { margin: 0; font-size: 13.5px; color: #d4d4d8; }
  .code-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    background: #090a0c;
    border: 1px solid var(--line-strong);
    border-bottom: none;
    flex-wrap: wrap;
  }
  .tab-btn { padding: 4px 9px; font-size: 11px; font-family: monospace; cursor: pointer; }
  .tab-btn.active { background: var(--primary); color: #09090b; border-color: var(--primary); font-weight: 800; }
  pre {
    background: #08090b;
    padding: 14px;
    border-radius: 0 0 4px 4px;
    overflow: auto;
    color: #f4f4f6;
    border: 1px solid var(--line-strong);
    margin: 0 0 12px;
    max-height: 280px;
    font-size: 12.5px;
    line-height: 1.55;
    white-space: pre-wrap;
  }
  .tok-tag { color: #facc15; font-weight: 700; }
  .tok-attr { color: #fde047; }
  .tok-kw { color: #fb923c; font-weight: 700; }
  .tok-fn { color: #fef08a; font-weight: 600; }
  .tok-str { color: #86efac; }
  .tok-num { color: #f472b6; }
  .tok-var { color: #67e8f9; }
  .tok-text { color: #f4f4f6; }
  .tok-punc { color: #9ca3af; }
  .tok-comment { color: #6b7280; font-style: italic; }
  iframe {
    width: 100%;
    height: 250px;
    border: 1px solid var(--line-strong);
    border-radius: 4px;
    background: #101216;
  }
  @media (max-width: 860px) { .modal-grid { grid-template-columns: 1fr; } }
</style>
</head>
<body>
<header>
  <div class="brand-row">
    <div class="brand-box">&lt;/&gt;</div>
    <div>
      <strong style="font-size:16px;letter-spacing:0.04em;">DEVSHELF // STANDALONE</strong>
      <div style="font-size:11.5px;color:#9ca3af;font-family:monospace;">Автономная инженерная база (${referenceItems.length} тем, работает без интернета)</div>
    </div>
  </div>
  <div id="count-stat" style="font-family:monospace;color:#facc15;font-weight:800;"></div>
</header>
<div class="wrap">
  <div class="bar">
    <input id="q" type="search" placeholder="Поиск по ${referenceItems.length} темам (border-radius, вход, tailwind, react, flex, pdo)...">
  </div>
  <div class="cat-bar" id="cats">
    <button class="cat-btn active" data-c="all">Все (${referenceItems.length})</button>
    <button class="cat-btn" data-c="html">HTML5</button>
    <button class="cat-btn" data-c="css">CSS3</button>
    <button class="cat-btn" data-c="javascript">JavaScript</button>
    <button class="cat-btn" data-c="frameworks">Фреймворки</button>
    <button class="cat-btn" data-c="recipes">Рецепты</button>
    <button class="cat-btn" data-c="php">PHP 8.3</button>
    <button class="cat-btn" data-c="xml">XML &amp; SEO</button>
  </div>
  <div id="list" class="grid"></div>
</div>

<div id="m" class="modal-bg" hidden>
  <div class="modal">
    <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;border-bottom:1px solid #272b33;padding-bottom:12px;">
      <h2 id="mt" style="margin:0;font-size:20px;"></h2>
      <button onclick="document.getElementById('m').hidden=true" style="background:#facc15;color:#09090b;font-weight:800;cursor:pointer;">✕ Закрыть</button>
    </div>
    <div class="modal-grid">
      <div>
        <div class="info-box"><h5>Описание</h5><p id="ms"></p></div>
        <div class="info-box"><h5>Когда применять</h5><p id="mw"></p></div>
        <div class="info-box"><h5>Альтернативы</h5><p id="ma"></p></div>
        <div class="info-box"><h5>Ключевые правила</h5><ul id="mp"></ul></div>
      </div>
      <div>
        <div class="code-bar">
          <div style="display:flex;gap:4px;" id="ctabs">
            <button class="tab-btn active" data-p="combined">Все вместе</button>
            <button class="tab-btn" data-p="html">HTML</button>
            <button class="tab-btn" data-p="css">CSS</button>
            <button class="tab-btn" data-p="js">JS</button>
          </div>
          <button id="copy-b" class="tab-btn">Копировать</button>
        </div>
        <pre><code id="mc"></code></pre>
        <div style="font-family:monospace;font-size:11px;color:#facc15;margin-bottom:6px;font-weight:800;">ЖИВОЙ ПРЕДПРОСМОТР:</div>
        <iframe id="mf" sandbox="allow-scripts"></iframe>
      </div>
    </div>
  </div>
</div>

<script>
const TOPICS = ${safeTopicsJson};
const q = document.getElementById('q');
const list = document.getElementById('list');
const stat = document.getElementById('count-stat');
let activeCat = 'all';
let currentTopic = null;
let currentPart = 'combined';

function splitCode(t) {
  const lang = (t.lang || 'html').toLowerCase();
  const raw = String(t.code || '').trim();
  const ex = String(t.example || '').trim();
  let html = '', css = '', js = '';
  if (lang === 'css') {
    css = raw;
    html = ex.startsWith('<') ? ex : '<div class="card box item" style="padding:16px;border:1px solid #facc15;">CSS Демо</div>';
    js = '// Без JS';
  } else if (lang === 'javascript') {
    js = raw;
    html = ex.startsWith('<') ? ex : '<div id="app">JS Демо</div>';
    css = '/* Базовые стили */';
  } else {
    let rest = raw.includes('<') ? raw : (ex.includes('<') ? ex : raw);
    const sm = [...rest.matchAll(/<style[^>]*>([\\s\\S]*?)<\\/style>/gi)];
    if (sm.length) { css = sm.map(m => m[1].trim()).join('\\n'); rest = rest.replace(/<style[^>]*>[\\s\\S]*?<\\/style>/gi, '').trim(); }
    const jm = [...rest.matchAll(/<script[^>]*>([\\s\\S]*?)<\\/script>/gi)];
    if (jm.length) { js = jm.map(m => m[1].trim()).join('\\n'); rest = rest.replace(/<script[^>]*>[\\s\\S]*?<\\/script>/gi, '').trim(); }
    html = rest;
  }
  return { combined: raw, html: html || raw, css: css || '/* Стили не требуются */', js: js || '// JS не требуется' };
}

function buildPreview(t) {
  const base = '<style>*{box-sizing:border-box}body{margin:0;padding:14px;background:#101216;color:#f4f4f6;font-family:system-ui,sans-serif;font-size:14px}button:not([class]){background:#facc15;color:#09090b;border:none;padding:8px 14px;border-radius:4px;font-weight:800}</style>';
  if (t.lang === 'css') {
    const h = (t.example && t.example.startsWith('<')) ? t.example : '<div class="card box item" style="padding:16px;border:1px solid #facc15;">' + t.title + '</div>';
    return '<!doctype html><html><head><meta charset="utf-8">' + base + '<style>' + t.code + '</style></head><body>' + h + '</body></html>';
  }
  if (t.lang === 'javascript') {
    return '<!doctype html><html><head><meta charset="utf-8">' + base + '</head><body><div id="out" style="font-family:monospace;color:#fef08a;white-space:pre-wrap;"></div><script>const o=document.getElementById("out");console.log=(...a)=>{o.textContent+="> "+a.map(x=>typeof x==="object"?JSON.stringify(x):x).join(" ")+"\\\\n"};try{' + t.code + '}catch(e){o.textContent+="Error: "+e.message}<\\/script></body></html>';
  }
  const body = (t.example && t.example.startsWith('<')) ? t.example : t.code;
  return '<!doctype html><html><head><meta charset="utf-8">' + base + '</head><body>' + body + '</body></html>';
}

function renderCodePart() {
  if (!currentTopic) return;
  const parts = splitCode(currentTopic);
  document.getElementById('mc').textContent = parts[currentPart] || parts.combined;
  document.querySelectorAll('#ctabs .tab-btn').forEach(b => b.classList.toggle('active', b.dataset.p === currentPart));
}

window.openItem = (id) => {
  const t = TOPICS.find(x => x.id === id);
  if (!t) return;
  currentTopic = t;
  currentPart = 'combined';
  document.getElementById('mt').textContent = t.title;
  document.getElementById('ms').textContent = t.summary;
  document.getElementById('mw').textContent = t.when || '';
  document.getElementById('ma').textContent = t.alternatives || '';
  document.getElementById('mp').innerHTML = (t.points || []).map(p => '<li>' + p + '</li>').join('');
  renderCodePart();
  document.getElementById('mf').srcdoc = buildPreview(t);
  document.getElementById('m').hidden = false;
};

document.getElementById('ctabs').addEventListener('click', (e) => {
  const b = e.target.closest('.tab-btn');
  if (b && b.dataset.p) { currentPart = b.dataset.p; renderCodePart(); }
});

document.getElementById('copy-b').addEventListener('click', () => {
  navigator.clipboard.writeText(document.getElementById('mc').textContent || '');
  document.getElementById('copy-b').textContent = '✓ Скопировано';
  setTimeout(() => document.getElementById('copy-b').textContent = 'Копировать', 1200);
});

function render() {
  const s = q.value.toLowerCase().trim();
  const filtered = TOPICS.filter(t => (activeCat === 'all' || t.lang === activeCat) && (!s || (t.title + ' ' + t.summary + ' ' + (t.tags||[]).join(' ')).toLowerCase().includes(s)));
  stat.textContent = 'НАЙДЕНО: ' + filtered.length + ' / ' + TOPICS.length;
  list.innerHTML = filtered.map((t, idx) => '<div class="item" onclick="openItem(\\'' + t.id + '\\')"><h4>#' + String(idx+1).padStart(3,'0') + ' ' + t.title.replace(/</g,'&lt;') + '</h4><span class="tag">' + t.lang + '</span></div>').join('');
}

document.getElementById('cats').addEventListener('click', (e) => {
  const b = e.target.closest('.cat-btn');
  if (!b) return;
  document.querySelectorAll('.cat-btn').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  activeCat = b.dataset.c;
  render();
});
q.oninput = render;
render();
<\/script>
</body>
</html>`;
}

// 1. Download Standalone .HTML
const standaloneBtn = document.querySelector('#download-standalone-btn');
if (standaloneBtn) {
  standaloneBtn.addEventListener('click', () => {
    const standaloneDoc = generateSelfContainedHtmlDocument();
    const blob = new Blob([standaloneDoc], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'devshelf-standalone.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
}

// 2. Download Windows Native .EXE Builder & Launcher (.bat that compiles real DevShelf.exe via Windows built-in .NET csc.exe)
const exeBtn = document.querySelector('#download-exe-btn');
if (exeBtn) {
  exeBtn.addEventListener('click', () => {
    const standaloneDoc = generateSelfContainedHtmlDocument();
    const base64Html = btoa(unescape(encodeURIComponent(standaloneDoc)));
    const chunkedBase64 = (base64Html.match(/.{1,64}/g) || [base64Html]).join('\r\n');

    const batContent = [
      '@echo off',
      'setlocal',
      'chcp 65001 >nul',
      'title DevShelf // Сборка нативного приложения DevShelf.exe',
      'echo ========================================================',
      'echo [DEVSHELF] Сборка автономного приложения DevShelf.exe',
      'echo Папка назначения: %~dp0',
      'echo ========================================================',
      'echo [1/2] Распаковка автономной базы (276 тем)...',
      'certutil -f -decode "%~f0" "%~dp0devshelf-core.html" >nul 2>&1',
      'echo [2/2] Компиляция нативного исполняемого файла DevShelf.exe...',
      'powershell -NoProfile -ExecutionPolicy Bypass -Command "$src = \'using System; using System.IO; using System.Diagnostics; using Microsoft.Win32; class Program { [STAThread] static void Main() { string d = AppDomain.CurrentDomain.BaseDirectory; string h = Path.Combine(d, \\\"devshelf-core.html\\\"); string u = new Uri(h).AbsoluteUri; string prof = Path.Combine(Path.GetTempPath(), \\\"DevShelf_Profile\\\"); string args = \\\"--app=\\\\\\\"\\\" + u + \\\"\\\\\\\" --user-data-dir=\\\\\\\"\\\" + prof + \\\"\\\\\\\" --window-size=1380,880 --class=DevShelf --no-first-run --no-default-browser-check\\\"; string[] n = new string[] { \\\"browser.exe\\\", \\\"msedge.exe\\\", \\\"chrome.exe\\\", \\\"brave.exe\\\" }; foreach (var name in n) { try { using (var k = Registry.CurrentUser.OpenSubKey(@\\\"SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\App Paths\\\\\\\" + name)) { if (k != null) { string p = (k.GetValue(\\\"\\\") as string ?? \\\"\\\").Trim(\\\'\\\"\\\'); if (File.Exists(p)) { Process.Start(p, args); return; } } } using (var k = Registry.LocalMachine.OpenSubKey(@\\\"SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\App Paths\\\\\\\" + name)) { if (k != null) { string p = (k.GetValue(\\\"\\\") as string ?? \\\"\\\").Trim(\\\'\\\"\\\'); if (File.Exists(p)) { Process.Start(p, args); return; } } } } catch {} } string local = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData); string prog86 = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86); string prog = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles); string[] paths = new string[] { Path.Combine(local, @\\\"Yandex\\\\YandexBrowser\\\\Application\\\\browser.exe\\\"), Path.Combine(prog86, @\\\"Microsoft\\\\Edge\\\\Application\\\\msedge.exe\\\"), Path.Combine(prog, @\\\"Microsoft\\\\Edge\\\\Application\\\\msedge.exe\\\"), Path.Combine(prog, @\\\"Google\\\\Chrome\\\\Application\\\\chrome.exe\\\"), Path.Combine(prog86, @\\\"Google\\\\Chrome\\\\Application\\\\chrome.exe\\\"), Path.Combine(local, @\\\"Google\\\\Chrome\\\\Application\\\\chrome.exe\\\") }; foreach (var p in paths) { try { if (File.Exists(p)) { Process.Start(p, args); return; } } catch {} } try { Process.Start(new ProcessStartInfo(h) { UseShellExecute = true }); } catch {} } }\'; Add-Type -TypeDefinition $src -OutputAssembly (Join-Path \'%~dp0\' \'DevShelf.exe\') -OutputType WindowsApplication" >nul 2>&1',
      'if not exist "%~dp0DevShelf.exe" (',
      '  set "CSC=%SystemRoot%\\Microsoft.NET\\Framework64\\v4.0.30319\\csc.exe"',
      '  if not exist "%CSC%" set "CSC=%SystemRoot%\\Microsoft.NET\\Framework\\v4.0.30319\\csc.exe"',
      '  if exist "%CSC%" (',
      '    powershell -NoProfile -ExecutionPolicy Bypass -Command "[IO.File]::WriteAllText((Join-Path $env:TEMP \'DevShelfLauncher.cs\'), \'using System; using System.IO; using System.Diagnostics; using Microsoft.Win32; class Program { [STAThread] static void Main() { string d = AppDomain.CurrentDomain.BaseDirectory; string h = Path.Combine(d, \\\"devshelf-core.html\\\"); string u = new Uri(h).AbsoluteUri; string prof = Path.Combine(Path.GetTempPath(), \\\"DevShelf_Profile\\\"); string args = \\\"--app=\\\\\\\"\\\" + u + \\\"\\\\\\\" --user-data-dir=\\\\\\\"\\\" + prof + \\\"\\\\\\\" --window-size=1380,880 --class=DevShelf --no-first-run --no-default-browser-check\\\"; string[] n = new string[] { \\\"browser.exe\\\", \\\"msedge.exe\\\", \\\"chrome.exe\\\", \\\"brave.exe\\\" }; foreach (var name in n) { try { using (var k = Registry.CurrentUser.OpenSubKey(@\\\"SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\App Paths\\\\\\\" + name)) { if (k != null) { string p = (k.GetValue(\\\"\\\") as string ?? \\\"\\\").Trim(\\\'\\\"\\\'); if (File.Exists(p)) { Process.Start(p, args); return; } } } using (var k = Registry.LocalMachine.OpenSubKey(@\\\"SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\App Paths\\\\\\\" + name)) { if (k != null) { string p = (k.GetValue(\\\"\\\") as string ?? \\\"\\\").Trim(\\\'\\\"\\\'); if (File.Exists(p)) { Process.Start(p, args); return; } } } } catch {} } string local = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData); string prog86 = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86); string prog = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles); string[] paths = new string[] { Path.Combine(local, @\\\"Yandex\\\\YandexBrowser\\\\Application\\\\browser.exe\\\"), Path.Combine(prog86, @\\\"Microsoft\\\\Edge\\\\Application\\\\msedge.exe\\\"), Path.Combine(prog, @\\\"Microsoft\\\\Edge\\\\Application\\\\msedge.exe\\\"), Path.Combine(prog, @\\\"Google\\\\Chrome\\\\Application\\\\chrome.exe\\\"), Path.Combine(prog86, @\\\"Google\\\\Chrome\\\\Application\\\\chrome.exe\\\"), Path.Combine(local, @\\\"Google\\\\Chrome\\\\Application\\\\chrome.exe\\\") }; foreach (var p in paths) { try { if (File.Exists(p)) { Process.Start(p, args); return; } } catch {} } try { Process.Start(new ProcessStartInfo(h) { UseShellExecute = true }); } catch {} } }\')"',
      '    "%CSC%" /nologo /target:winexe /out:"%~dp0DevShelf.exe" "%TEMP%\\DevShelfLauncher.cs" >nul 2>&1',
      '    del /q "%TEMP%\\DevShelfLauncher.cs" >nul 2>&1',
      '  )',
      ')',
      'if exist "%~dp0DevShelf.exe" (',
      '  echo [OK] Готово! Исполняемый файл создан: "%~dp0DevShelf.exe"',
      '  start "" "%~dp0DevShelf.exe"',
      ') else (',
      '  echo [INFO] Открываем ядро справочника в браузере...',
      '  start "" "%~dp0devshelf-core.html"',
      ')',
      'exit /b 0',
      '-----BEGIN CERTIFICATE-----',
      chunkedBase64,
      '-----END CERTIFICATE-----'
    ].join('\r\n');

    const blob = new Blob([batContent], { type: 'application/bat;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DevShelf-Build-EXE.bat';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
}

// Initial boot
updateCategoryCounts();
renderCards();

// Deep link: open topic modal if ?topic= is in URL
const initialTopic = new URLSearchParams(window.location.search).get('topic');
if (initialTopic && topicsById.has(initialTopic)) {
  openTopicModal(initialTopic);
}
