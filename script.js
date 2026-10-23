// DevShelf Client Core & Developer Workbench
(function () {
  'use strict';

  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];

  const readStorage = (key, fallback) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch {
      return fallback;
    }
  };

  const writeStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage write error:', e);
    }
  };

  function safe(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/[&<>"']/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c]));
  }

  function normalize(str) {
    return String(str || '').replace(/[<>]/g, '').toLowerCase().trim();
  }

  const LANG_LABELS = {
    html: 'HTML5',
    css: 'CSS3',
    javascript: 'JavaScript',
    php: 'PHP 8',
    xml: 'XML & SEO',
    recipes: 'Рецепт',
    frameworks: 'Фреймворк'
  };

  const rawTopics = window.DEVSHELF_REFERENCE_TOPICS || [];
  const resources = rawTopics.map(t => ({
    id: t.id,
    lang: t.lang || 'html',
    title: t.title,
    category: t.lang || 'html',
    summary: t.summary || '',
    code: t.code || '',
    example: t.example || '',
    points: t.points || [],
    tags: t.tags || [],
    when: t.when || '',
    alternatives: t.alternatives || '',
    playgroundUrl: `playground.html?topic=${encodeURIComponent(t.id)}`,
    titleLower: (t.title || '').toLowerCase(),
    tagsLower: (t.tags || []).map(x => x.toLowerCase()),
    searchText: [t.id, t.title, t.summary, ...(t.tags || []), t.when, t.alternatives, ...(t.points || [])].join(' ').toLowerCase()
  }));

  const resourcesById = Object.fromEntries(resources.map(r => [r.id, r]));

  const state = {
    filter: 'all',
    query: '',
    sort: 'recommended',
    favorites: readStorage('devshelf-favorites', []),
    activeTopicId: null,
    activeCodeTab: 'all',
    modalCodeParts: { all: '', html: '', css: '', js: '' }
  };

  // ========================================================
  // UNIFIED REFERENCE MODAL WITH 4-TAB CODE VIEWER (ALL / HTML / CSS / JS)
  // ========================================================
  const topicModal = $('#topic-modal');
  const tmCodeEditor = $('#tm-code-editor');
  const tmPreviewIframe = $('#tm-preview-iframe');

  function syncActiveTabToParts() {
    if (!tmCodeEditor) return;
    const val = tmCodeEditor.value;
    state.modalCodeParts[state.activeCodeTab] = val;
    if (state.activeCodeTab !== 'all' && window.DevShelfPreview?.mergeCodeParts) {
      state.modalCodeParts.all = window.DevShelfPreview.mergeCodeParts(state.modalCodeParts);
    }
  }

  function updateModalPreview(item) {
    if (!tmPreviewIframe || !item) return;
    syncActiveTabToParts();
    const codeToRun = state.activeCodeTab === 'all'
      ? state.modalCodeParts.all
      : (window.DevShelfPreview?.mergeCodeParts ? window.DevShelfPreview.mergeCodeParts(state.modalCodeParts) : state.modalCodeParts.all);

    if (window.DevShelfPreview && typeof window.DevShelfPreview.buildTopicPreviewDoc === 'function') {
      tmPreviewIframe.srcdoc = window.DevShelfPreview.buildTopicPreviewDoc(item, codeToRun);
    }
  }

  function setCodeTab(tabName) {
    syncActiveTabToParts();
    state.activeCodeTab = tabName;
    $$('.tm-code-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.codeTab === tabName);
    });
    if (tmCodeEditor) {
      tmCodeEditor.value = state.modalCodeParts[tabName] || '';
    }
  }

  function updateModalFavButton(topicId) {
    const favBtn = $('#tm-fav-btn');
    if (!favBtn) return;
    const isFav = state.favorites.includes(topicId);
    favBtn.textContent = isFav ? '★ В избранном' : '☆ В избранное';
    favBtn.style.borderColor = isFav ? 'var(--star)' : 'var(--line)';
    favBtn.style.color = isFav ? 'var(--star)' : 'var(--text-dim)';
  }

  function openTopicModal(topicId) {
    const item = resourcesById[topicId];
    if (!item || !topicModal) return;

    state.activeTopicId = item.id;
    const catLabel = LANG_LABELS[item.category] || item.category.toUpperCase();

    $('#tm-kicker').textContent = `СПРАВОЧНИК DEVSHELF · ${catLabel}`;
    $('#tm-title').textContent = item.title;
    $('#tm-summary').textContent = item.summary;
    $('#tm-pg-link').href = item.playgroundUrl;

    updateModalFavButton(item.id);

    $('#tm-points').innerHTML = (item.points || []).map(p => `<li>${safe(p)}</li>`).join('');
    $('#tm-when').textContent = item.when || 'Применяется по стандарту языка.';
    $('#tm-alt').textContent = item.alternatives || 'Выбирайте по контексту задачи.';

    // Разбиваем код на 4 вкладки: Слитый (all), HTML, CSS, JS
    if (window.DevShelfPreview && typeof window.DevShelfPreview.splitTopicIntoCodeParts === 'function') {
      state.modalCodeParts = window.DevShelfPreview.splitTopicIntoCodeParts(item);
    } else {
      state.modalCodeParts = { all: item.code, html: item.code, css: '', js: '' };
    }

    state.activeCodeTab = 'all';
    $$('.tm-code-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.codeTab === 'all');
    });
    if (tmCodeEditor) {
      tmCodeEditor.value = state.modalCodeParts.all;
    }

    const exWrap = $('#tm-example-wrap');
    const exCode = $('#tm-example');
    if (exWrap && exCode) {
      if (item.example) {
        exWrap.hidden = false;
        exCode.textContent = item.example;
      } else {
        exWrap.hidden = true;
      }
    }

    updateModalPreview(item);

    if (!topicModal.open) {
      topicModal.showModal();
    }

    // Обновляем URL без перезагрузки для удобного шаринга
    try {
      const nextUrl = new URL(window.location.href);
      nextUrl.searchParams.set('topic', item.id);
      window.history.replaceState({}, '', nextUrl.toString());
    } catch {}
  }

  function closeTopicModal() {
    if (topicModal && topicModal.open) {
      topicModal.close();
    }
    try {
      const nextUrl = new URL(window.location.href);
      nextUrl.searchParams.delete('topic');
      window.history.replaceState({}, '', nextUrl.toString());
    } catch {}
  }

  if ($('#tm-close')) {
    $('#tm-close').addEventListener('click', closeTopicModal);
  }
  if (topicModal) {
    topicModal.addEventListener('click', (e) => {
      if (e.target === topicModal) closeTopicModal();
    });
    topicModal.addEventListener('close', () => {
      try {
        const nextUrl = new URL(window.location.href);
        nextUrl.searchParams.delete('topic');
        window.history.replaceState({}, '', nextUrl.toString());
      } catch {}
    });
  }

  $$('.tm-code-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      setCodeTab(btn.dataset.codeTab);
    });
  });

  if ($('#tm-run-code')) {
    $('#tm-run-code').addEventListener('click', () => {
      const item = resourcesById[state.activeTopicId];
      if (item) {
        updateModalPreview(item);
        showToast('Предпросмотр обновлён ▶');
      }
    });
  }

  let modalEditTimer = null;
  if (tmCodeEditor) {
    tmCodeEditor.addEventListener('input', () => {
      clearTimeout(modalEditTimer);
      modalEditTimer = setTimeout(() => {
        const item = resourcesById[state.activeTopicId];
        if (item) updateModalPreview(item);
      }, 280);
    });
  }

  if ($('#tm-copy-code')) {
    $('#tm-copy-code').addEventListener('click', async () => {
      if (!tmCodeEditor) return;
      try {
        await navigator.clipboard.writeText(tmCodeEditor.value);
        showToast('Код вкладки скопирован в буфер!');
      } catch {
        showToast('Не удалось скопировать');
      }
    });
  }

  if ($('#tm-fav-btn')) {
    $('#tm-fav-btn').addEventListener('click', () => {
      const id = state.activeTopicId;
      if (!id) return;
      toggleFavorite(id);
      updateModalFavButton(id);
    });
  }

  // ========================================================
  // RENDER CARD (Пункт 1 ТЗ: только название и мета-строка без предпросмотра функций)
  // ========================================================
  function renderCard(item) {
    const isFav = state.favorites.includes(item.id);
    const catLabel = LANG_LABELS[item.category] || item.category.toUpperCase();

    return `
      <li class="row" data-open-topic="${safe(item.id)}">
        <div class="row-main">
          <span class="row-title">${safe(item.title)}</span>
          <div class="row-meta-line">
            <span class="category-label">${safe(catLabel)}</span>
            <span aria-hidden="true">·</span>
            <span>${safe(item.tags.slice(0, 4).join(', '))}</span>
          </div>
        </div>
        <button type="button" class="fav" data-fav-id="${safe(item.id)}" aria-pressed="${isFav}" title="${isFav ? 'В избранном' : 'Добавить в избранное'}" aria-label="Избранное">
          ${isFav ? '★' : '☆'}
        </button>
      </li>
    `;
  }

  // ========================================================
  // INTENT / RECIPE DETECTION (Включая вход, регистрацию, border-radius, фреймворки)
  // ========================================================
  const RECIPES = [
    {
      id: 'login',
      keywords: ['вход', 'логин', 'login', 'авторизац', 'sign in', 'пароль', 'auth'],
      title: 'Рецепт: Форма входа и авторизации (Login + показ пароля)',
      desc: 'Готовая карточка входа в аккаунт с переключением видимости пароля, валидацией и чекбоксом «Запомнить меня».',
      targetId: 'recipe-login-form'
    },
    {
      id: 'register',
      keywords: ['регистрац', 'signup', 'register', 'создать аккаунт'],
      title: 'Рецепт: Регистрация с индикатором надёжности пароля',
      desc: 'Форма создания аккаунта с живой оценкой сложности пароля по 4 критериям.',
      targetId: 'recipe-register-form'
    },
    {
      id: 'border-radius',
      keywords: ['border-radius', 'скруглен', 'круг', 'углы'],
      title: 'CSS: скругление углов (border-radius)',
      desc: 'Скругление от мягких карточек (14px) до идеальных кругов (50%), капсул (9999px) и органических форм.',
      targetId: 'css-border-radius'
    },
    {
      id: 'border',
      keywords: ['border', 'рамка', 'границ'],
      title: 'CSS: границы элементов (border, border-style, border-color)',
      desc: 'Задание толщины, стиля (solid, dashed) и цвета рамки вокруг карточек и полей ввода.',
      targetId: 'css-border'
    },
    {
      id: 'burger',
      keywords: ['бургер', 'гамбургер', 'drawer', 'выездное меню', 'шторка'],
      title: 'Рецепт: Адаптивное бургер-меню (CSS + JS)',
      desc: 'Семантическая кнопка <button>, фиксация скролла, плавная шторка и закрытие по Esc.',
      targetId: 'recipe-burger-menu'
    },
    {
      id: 'modal',
      keywords: ['модал', 'попап', 'dialog', 'popup', 'всплывающее окно'],
      title: 'Нативное модальное окно на теге <dialog>',
      desc: 'Метод dialog.showModal(), стилизация фона через ::backdrop и автоматическое закрытие по Esc.',
      targetId: 'html-dialog'
    },
    {
      id: 'tailwind',
      keywords: ['tailwind', 'тейлвинд', 'утилит'],
      title: 'Фреймворк: Tailwind CSS v4 (Утилитарная вёрстка)',
      desc: 'Подключение через CDN или Vite и замена ручного написания CSS-классов готовыми утилитами.',
      targetId: 'fw-tailwind-css'
    },
    {
      id: 'react',
      keywords: ['react', 'реакт', 'usestate', 'jsx'],
      title: 'Фреймворк: React 19 (Компоненты и хуки состояния)',
      desc: 'Декларативные компоненты и useState вместо ручного поиска элементов через querySelector.',
      targetId: 'fw-react'
    },
    {
      id: 'alpine',
      keywords: ['alpine', 'x-data', 'jquery'],
      title: 'Фреймворк: Alpine.js (Легковесная замена jQuery прямо в HTML)',
      desc: 'Подключение одной строкой CDN и реактивность через атрибуты x-data, x-show и @click.',
      targetId: 'fw-alpinejs'
    }
  ];

  let currentRecipeTargetId = null;

  function checkRecipes(query) {
    const banner = $('#recipe-banner');
    if (!banner) return;

    if (!query || query.length < 2) {
      banner.hidden = true;
      currentRecipeTargetId = null;
      return;
    }

    const q = query.toLowerCase();
    const match = RECIPES.find(r => r.keywords.some(k => q.includes(k)));

    if (match && resourcesById[match.targetId]) {
      currentRecipeTargetId = match.targetId;
      $('#recipe-title').textContent = match.title;
      $('#recipe-desc').textContent = match.desc;
      const sbLink = $('#recipe-sandbox-link');
      if (sbLink) sbLink.href = `playground.html?topic=${encodeURIComponent(match.targetId)}`;
      banner.hidden = false;
    } else {
      banner.hidden = true;
      currentRecipeTargetId = null;
    }
  }

  const recipeOpenBtn = $('#recipe-open-btn');
  if (recipeOpenBtn) {
    recipeOpenBtn.addEventListener('click', () => {
      if (currentRecipeTargetId) openTopicModal(currentRecipeTargetId);
    });
  }

  // ========================================================
  // SMART SEARCH RANKING & RENDERING
  // ========================================================
  function computeMatchScore(item, q) {
    let score = 0;
    if (item.id.toLowerCase() === q || item.tagsLower.includes(q)) score += 100;
    if (item.titleLower.includes(q)) score += 60;
    if (item.tagsLower.some(t => t.includes(q))) score += 40;
    if (item.summary.toLowerCase().includes(q)) score += 20;
    if (item.searchText.includes(q)) score += 5;
    return score;
  }

  function filterAndRender() {
    const q = normalize(state.query);
    checkRecipes(q);

    let list = resources.filter(item => {
      if (state.filter === 'favorites') {
        if (!state.favorites.includes(item.id)) return false;
      } else if (state.filter !== 'all') {
        if (item.category !== state.filter) return false;
      }

      if (q) {
        return item.searchText.includes(q);
      }
      return true;
    });

    if (state.sort === 'az') {
      list.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
    } else if (q) {
      list.sort((a, b) => computeMatchScore(b, q) - computeMatchScore(a, q));
    }

    const grid = $('#resource-grid');
    const empty = $('#empty-state');
    const summary = $('#summary');

    if (summary) {
      summary.textContent = `Найдено справочников: ${list.length} из ${resources.length}`;
    }

    if (list.length === 0) {
      grid.innerHTML = '';
      empty.hidden = false;
    } else {
      empty.hidden = true;
      grid.innerHTML = list.map(renderCard).join('');
    }

    const totalEl = $('#total-count');
    if (totalEl) totalEl.textContent = resources.length;

    const favEl = $('#favorite-count');
    if (favEl) favEl.textContent = state.favorites.length;
  }

  function toggleFavorite(id) {
    const idx = state.favorites.indexOf(id);
    if (idx >= 0) {
      state.favorites.splice(idx, 1);
      showToast('Удалено из избранного');
    } else {
      state.favorites.push(id);
      showToast('Добавлено в избранное ★');
    }
    writeStorage('devshelf-favorites', state.favorites);
    filterAndRender();
  }

  let toastTimer = null;
  function showToast(message) {
    const toast = $('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  // ========================================================
  // EVENT LISTENERS & DELEGATION
  // ========================================================
  document.addEventListener('click', (e) => {
    // 1. Favorite star click (must be checked before card click)
    const favBtn = e.target.closest('.fav');
    if (favBtn) {
      e.stopPropagation();
      const id = favBtn.getAttribute('data-fav-id');
      if (id) toggleFavorite(id);
      return;
    }

    // 2. Open Topic Modal when clicking a card
    const topicTrigger = e.target.closest('[data-open-topic]');
    if (topicTrigger) {
      e.preventDefault();
      const topicId = topicTrigger.getAttribute('data-open-topic');
      if (topicId) openTopicModal(topicId);
      return;
    }

    // 3. Tab navigation
    const tabBtn = e.target.closest('.tab[data-filter]');
    if (tabBtn) {
      const filter = tabBtn.getAttribute('data-filter');
      $$('.tab[data-filter]').forEach(t => t.setAttribute('aria-pressed', 'false'));
      tabBtn.setAttribute('aria-pressed', 'true');
      state.filter = filter;
      filterAndRender();
      return;
    }

    // 4. Quick Hint Buttons
    const hintBtn = e.target.closest('.hints button[data-query]');
    if (hintBtn) {
      const q = hintBtn.getAttribute('data-query');
      const input = $('#search');
      if (input) {
        input.value = q;
        state.query = q;
        state.filter = 'all';
        $$('.tab[data-filter]').forEach(t => t.setAttribute('aria-pressed', t.getAttribute('data-filter') === 'all'));
        $('#clear-search').hidden = false;
        filterAndRender();
        input.focus();
      }
      return;
    }

    // 5. Reset button
    if (e.target.id === 'reset') {
      state.filter = 'all';
      state.query = '';
      const input = $('#search');
      if (input) input.value = '';
      $('#clear-search').hidden = true;
      $$('.tab[data-filter]').forEach(t => t.setAttribute('aria-pressed', t.getAttribute('data-filter') === 'all'));
      filterAndRender();
      return;
    }

    // 6. Clear search button
    if (e.target.id === 'clear-search') {
      const input = $('#search');
      if (input) input.value = '';
      state.query = '';
      e.target.hidden = true;
      filterAndRender();
      input.focus();
      return;
    }
  });

  const searchInput = $('#search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.query = e.target.value;
      const clearBtn = $('#clear-search');
      if (clearBtn) clearBtn.hidden = !e.target.value;
      filterAndRender();
    });
  }

  const sortSelect = $('#sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      filterAndRender();
    });
  }

  // ========================================================
  // COMMAND PALETTE (Ctrl+K / Cmd+K)
  // ========================================================
  const cmdPalette = $('#cmd-palette');
  const cmdInput = $('#cmd-search-input');
  const cmdResults = $('#cmd-results');
  let cmdActiveIndex = 0;

  function openPalette() {
    if (!cmdPalette) return;
    cmdPalette.showModal();
    if (cmdInput) {
      cmdInput.value = '';
      cmdInput.focus();
    }
    renderPaletteResults('');
  }

  function closePalette() {
    if (cmdPalette) cmdPalette.close();
  }

  function renderPaletteResults(query) {
    if (!cmdResults) return;
    const q = normalize(query);
    let matches = resources.filter(r => !q || r.searchText.includes(q));
    if (q) {
      matches.sort((a, b) => computeMatchScore(b, q) - computeMatchScore(a, q));
    }
    matches = matches.slice(0, 14);
    cmdActiveIndex = 0;

    if (matches.length === 0) {
      cmdResults.innerHTML = '<li class="cmd-item" style="color:var(--faint);">Ничего не найдено</li>';
      return;
    }

    cmdResults.innerHTML = matches.map((item, idx) => `
      <li class="cmd-item ${idx === 0 ? 'active' : ''}" data-topic-id="${safe(item.id)}">
        <span>${safe(item.title)}</span>
        <span class="cmd-item-meta">${safe(LANG_LABELS[item.category] || '')}</span>
      </li>
    `).join('');
  }

  $('#open-palette-btn')?.addEventListener('click', openPalette);

  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => renderPaletteResults(e.target.value));
    cmdInput.addEventListener('keydown', (e) => {
      const items = $$('#cmd-results .cmd-item[data-topic-id]');
      if (!items.length) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        items[cmdActiveIndex]?.classList.remove('active');
        cmdActiveIndex = (cmdActiveIndex + 1) % items.length;
        items[cmdActiveIndex]?.classList.add('active');
        items[cmdActiveIndex]?.scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        items[cmdActiveIndex]?.classList.remove('active');
        cmdActiveIndex = (cmdActiveIndex - 1 + items.length) % items.length;
        items[cmdActiveIndex]?.classList.add('active');
        items[cmdActiveIndex]?.scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const active = items[cmdActiveIndex];
        if (active) {
          const topicId = active.getAttribute('data-topic-id');
          closePalette();
          if (topicId) openTopicModal(topicId);
        }
      }
    });
  }

  if (cmdResults) {
    cmdResults.addEventListener('click', (e) => {
      const item = e.target.closest('.cmd-item[data-topic-id]');
      if (item) {
        const topicId = item.getAttribute('data-topic-id');
        closePalette();
        if (topicId) openTopicModal(topicId);
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdPalette && cmdPalette.open) closePalette();
      else openPalette();
    } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      searchInput?.focus();
    } else if (e.key.toLowerCase() === 't' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      toggleTheme();
    }
  });

  function toggleTheme() {
    const isLight = document.body.classList.toggle('light');
    writeStorage('devshelf-theme', isLight ? 'light' : 'dark');
    const btn = $('#theme-toggle');
    if (btn) btn.textContent = isLight ? '☀' : '☾';
  }

  $('#theme-toggle')?.addEventListener('click', toggleTheme);
  if (readStorage('devshelf-theme', 'dark') === 'light') {
    document.body.classList.add('light');
    if ($('#theme-toggle')) $('#theme-toggle').textContent = '☀';
  }

  // ========================================================
  // STANDALONE APPLICATION & SINGLE-FILE OFFLINE BUNDLER (Пункт 9 ТЗ)
  // ========================================================
  let deferredPrompt = null;
  const standaloneBtn = $('#standalone-app-btn');
  const standaloneModal = $('#standalone-modal');
  const closeStandaloneBtn = $('#close-standalone-modal');
  const triggerPwaBtn = $('#trigger-pwa-install');
  const downloadStandaloneBtn = $('#download-standalone-html');
  const pwaManualHint = $('#pwa-manual-hint');
  const offlineBanner = $('#offline-banner');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });

  standaloneBtn?.addEventListener('click', () => {
    standaloneModal?.showModal();
  });

  closeStandaloneBtn?.addEventListener('click', () => {
    standaloneModal?.close();
  });

  standaloneModal?.addEventListener('click', (e) => {
    if (e.target === standaloneModal) standaloneModal.close();
  });

  triggerPwaBtn?.addEventListener('click', async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        showToast('✓ Приложение установлено на устройство!');
      }
      deferredPrompt = null;
    } else if (pwaManualHint) {
      pwaManualHint.hidden = false;
      const isIOS = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
      pwaManualHint.innerHTML = isIOS
        ? '<strong>Установка на iOS / iPadOS:</strong> Нажмите иконку <strong>«Поделиться»</strong> в панели Safari и выберите <strong>«На экран Домой»</strong>.'
        : '<strong>Установка на ПК (Chrome / Edge / Яндекс):</strong> Нажмите на иконку установки <strong>⊕ / 🖥</strong> справа в адресной строке браузера (или меню ⋮ → «Сохранить и поделиться» → «Установить как приложение»).';
    }
  });

  // Генерация полностью автономного однофайлового приложения devshelf-standalone.html
  downloadStandaloneBtn?.addEventListener('click', () => {
    const standaloneDoc = `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>DevShelf Standalone — Офлайн-база веб-разработчика (${rawTopics.length} тем)</title>
<style>
  :root { --bg:#090d14; --surface:#0e1320; --panel:#141c2e; --line:rgba(255,255,255,0.1); --text:#f8fafc; --muted:#94a3b8; --accent:#38bdf8; }
  * { box-sizing:border-box; }
  body { margin:0; background:var(--bg); color:var(--text); font-family:system-ui,-apple-system,sans-serif; font-size:14px; line-height:1.55; }
  header { position:sticky; top:0; z-index:20; background:rgba(9,13,20,0.92); backdrop-filter:blur(10px); border-bottom:1px solid var(--line); padding:12px 20px; display:flex; flex-wrap:wrap; gap:12px; align-items:center; justify-content:space-between; }
  .brand { font-weight:800; font-size:16px; color:var(--text); }
  .brand span { color:var(--accent); }
  .tabs { display:flex; gap:6px; overflow-x:auto; }
  .tab { padding:6px 12px; border-radius:6px; border:1px solid var(--line); background:var(--surface); color:var(--muted); cursor:pointer; font-size:12.5px; white-space:nowrap; }
  .tab.active { background:var(--accent); color:#090d14; border-color:var(--accent); font-weight:700; }
  main { max-width:1320px; margin:20px auto; padding:0 16px; }
  .search { width:100%; padding:12px 14px; border-radius:8px; border:1px solid var(--line); background:var(--surface); color:var(--text); font-size:14px; margin-bottom:16px; }
  .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr)); gap:10px; }
  .card { padding:13px 15px; border-radius:8px; background:var(--surface); border:1px solid var(--line); cursor:pointer; }
  .card:hover { border-color:var(--accent); background:var(--panel); }
  .card strong { display:block; font-size:14px; margin-bottom:4px; }
  .card small { color:var(--muted); font-family:monospace; font-size:11px; }
  dialog { max-width:1080px; width:calc(100% - 24px); background:var(--surface); color:var(--text); border:1px solid var(--accent); border-radius:12px; padding:0; }
  dialog::backdrop { background:rgba(0,0,0,0.75); }
  .m-head { padding:14px 18px; background:var(--panel); border-bottom:1px solid var(--line); display:flex; justify-content:space-between; align-items:center; }
  .m-body { padding:18px; display:grid; grid-template-columns:1.1fr 0.9fr; gap:18px; max-height:80vh; overflow-y:auto; }
  @media(max-width:800px){ .m-body { grid-template-columns:1fr; } }
  textarea { width:100%; min-height:200px; background:#070a10; color:#e2e8f0; border:1px solid var(--line); border-radius:8px; padding:12px; font-family:monospace; font-size:12.5px; }
  iframe { width:100%; height:260px; border:1px solid var(--line); border-radius:8px; background:#0b101b; }
</style>
</head>
<body>
<header>
  <div class="brand">&lt;/&gt; dev<span>shelf</span> standalone (${rawTopics.length})</div>
  <div class="tabs" id="tabs">
    <button class="tab active" data-cat="all">Всё (${rawTopics.length})</button>
    <button class="tab" data-cat="html">HTML5</button>
    <button class="tab" data-cat="css">CSS3</button>
    <button class="tab" data-cat="javascript">JavaScript</button>
    <button class="tab" data-cat="php">PHP 8</button>
    <button class="tab" data-cat="xml">XML &amp; SEO</button>
    <button class="tab" data-cat="recipes">Рецепты</button>
    <button class="tab" data-cat="frameworks">Фреймворки</button>
  </div>
</header>
<main>
  <input type="search" id="q" class="search" placeholder="Поиск по автономной базе (border-radius, форма входа, tailwind, react, flexbox)...">
  <div id="grid" class="grid"></div>
</main>
<dialog id="dlg">
  <div class="m-head">
    <strong id="m-title"></strong>
    <button onclick="document.getElementById('dlg').close()" style="background:var(--accent);color:#090d14;border:0;padding:6px 12px;border-radius:6px;font-weight:700;cursor:pointer;">Закрыть ✕</button>
  </div>
  <div class="m-body">
    <div>
      <p id="m-sum" style="color:var(--muted);margin-top:0;"></p>
      <ul id="m-pts" style="padding-left:18px;color:var(--muted);font-size:13px;"></ul>
      <p style="font-size:12.5px;"><strong>Применение:</strong> <span id="m-when"></span></p>
      <textarea id="m-code" spellcheck="false"></textarea>
    </div>
    <div>
      <div style="font-size:11px;font-family:monospace;color:var(--accent);margin-bottom:6px;">ЖИВОЙ ПРЕДПРОСМОТР</div>
      <iframe id="m-frame"></iframe>
    </div>
  </div>
</dialog>
<script>
const TOPICS = ${JSON.stringify(rawTopics)};
let cat = 'all';
const grid = document.getElementById('grid');
const qInp = document.getElementById('q');
function render() {
  const q = qInp.value.toLowerCase().trim();
  const list = TOPICS.filter(t => (cat === 'all' || t.lang === cat) && (!q || (t.title + ' ' + t.summary + ' ' + (t.tags||[]).join(' ')).toLowerCase().includes(q)));
  grid.innerHTML = list.map(t => '<div class="card" onclick="openT(\\'' + t.id + '\\')"><strong>' + t.title.replace(/</g,'&lt;') + '</strong><small>' + (t.lang||'').toUpperCase() + ' · ' + (t.tags||[]).slice(0,3).join(', ') + '</small></div>').join('');
}
window.openT = function(id) {
  const t = TOPICS.find(x => x.id === id);
  if (!t) return;
  document.getElementById('m-title').textContent = t.title;
  document.getElementById('m-sum').textContent = t.summary;
  document.getElementById('m-pts').innerHTML = (t.points||[]).map(p => '<li>' + p.replace(/</g,'&lt;') + '</li>').join('');
  document.getElementById('m-when').textContent = t.when || '';
  document.getElementById('m-code').value = t.code || '';
  document.getElementById('m-frame').srcdoc = '<!doctype html><html><head><meta charset="utf-8"><style>body{background:#0b101b;color:#f8fafc;font-family:system-ui,sans-serif;padding:16px;}</style></head><body>' + (t.lang === 'css' ? '<style>' + t.code + '</style>' + (t.example || '<div class="card">Предпросмотр CSS</div>') : t.code) + '</body></html>';
  document.getElementById('dlg').showModal();
};
document.querySelectorAll('.tab').forEach(b => b.onclick = () => {
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  cat = b.dataset.cat;
  render();
});
qInp.oninput = render;
render();
<\/script>
</body>
</html>`;

    const blob = new Blob([standaloneDoc], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'devshelf-standalone.html';
    a.click();
    URL.revokeObjectURL(url);
    showToast('✓ Файл devshelf-standalone.html скачан!');
  });

  function updateOnlineStatus() {
    if (offlineBanner) offlineBanner.hidden = navigator.onLine;
  }
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

  // Initial Boot
  filterAndRender();

  // Если в URL передан ?topic=<id> или ?lang=<lang>, сразу открываем нужную тему/раздел
  const initParams = new URLSearchParams(window.location.search);
  const initLang = initParams.get('lang');
  const initTopic = initParams.get('topic');
  if (initLang && LANG_LABELS[initLang]) {
    state.filter = initLang;
    $$('.tab[data-filter]').forEach(t => t.setAttribute('aria-pressed', String(t.getAttribute('data-filter') === initLang)));
    filterAndRender();
  }
  if (initTopic && resourcesById[initTopic]) {
    openTopicModal(initTopic);
  }
})();
