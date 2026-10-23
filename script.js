const resources = [
{id:"html-mdn",title:"HTML: язык гипертекстовой разметки",brand:"MDN Web Docs",logo:"H",logoClass:"logo-html",category:"html",description:"Элементы, атрибуты, формы, семантика и доступность HTML-документов.",tags:["HTML","Справочник","Все уровни"],url:"https://developer.mozilla.org/ru/docs/Web/HTML",official:true,rank:1},
{id:"html-standard",title:"HTML Living Standard",brand:"WHATWG",logo:"W",logoClass:"logo-w3",category:"html",description:"Живой стандарт HTML — первоисточник по точному поведению элементов и браузеров.",tags:["HTML","Стандарт","Продвинутый"],url:"https://html.spec.whatwg.org/",official:true,rank:2},
{id:"html-forms",title:"HTML-формы: руководство",brand:"MDN Web Docs",logo:"H",logoClass:"logo-html",category:"html",description:"Поля ввода, кнопки, отправка данных и встроенная валидация форм.",tags:["HTML","Формы","Валидация"],url:"https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Forms",official:true,rank:3},
{id:"css-mdn",title:"CSS: каскадные таблицы стилей",brand:"MDN Web Docs",logo:"#",logoClass:"logo-css",category:"css",description:"Свойства, селекторы, каскад, Flexbox, Grid, анимации и адаптивная вёрстка.",tags:["CSS","Справочник","Все уровни"],url:"https://developer.mozilla.org/ru/docs/Web/CSS",official:true,rank:4},
{id:"css-layout",title:"Flexbox и CSS Grid",brand:"MDN Web Docs",logo:"#",logoClass:"logo-css",category:"css",description:"Руководства по двум основным инструментам современной раскладки.",tags:["CSS","Flexbox","Grid"],url:"https://developer.mozilla.org/ru/docs/Learn_web_development/Core/CSS_layout",official:true,rank:5},
{id:"css-tricks",title:"CSS-Tricks: Almanac",brand:"CSS-Tricks",logo:"✳",logoClass:"logo-web",category:"css",description:"Тематический справочник по CSS-селекторам и свойствам с примерами.",tags:["CSS","Примеры","Справочник"],url:"https://css-tricks.com/almanac/",official:false,rank:10},
{id:"js-mdn",title:"JavaScript — справочник",brand:"MDN Web Docs",logo:"JS",logoClass:"logo-js",category:"javascript",description:"Синтаксис языка, типы данных, функции, объекты, массивы, Promise и Web API.",tags:["JavaScript","Справочник","Все уровни"],url:"https://developer.mozilla.org/ru/docs/Web/JavaScript",official:true,rank:6},
{id:"js-info",title:"Современный JavaScript",brand:"javascript.info",logo:"JS",logoClass:"logo-js",category:"javascript",description:"Подробный учебник от основ языка до DOM, событий, сетевых запросов и классов.",tags:["JavaScript","Учебник","Практика"],url:"https://javascript.info/",official:false,rank:7},
{id:"js-ecma",title:"Спецификация ECMAScript",brand:"ECMA International",logo:"ES",logoClass:"logo-w3",category:"javascript",description:"Официальная спецификация стандарта ECMAScript для уточнения деталей языка.",tags:["JavaScript","Стандарт","Продвинутый"],url:"https://tc39.es/ecma262/",official:true,rank:11},
{id:"js-api",title:"Web APIs: браузерные возможности",brand:"MDN Web Docs",logo:"API",logoClass:"logo-mdn",category:"javascript",description:"Справочник по DOM, событиям, хранилищам, сети и другим браузерным API.",tags:["JavaScript","Web API","События"],url:"https://developer.mozilla.org/ru/docs/Web/API",official:true,rank:8},
{id:"php-manual",title:"Официальный PHP Manual",brand:"PHP.net",logo:"php",logoClass:"logo-php",category:"php",description:"Основной справочник PHP: синтаксис, встроенные функции, классы и расширения.",tags:["PHP","Официально","Справочник"],url:"https://www.php.net/manual/ru/",official:true,rank:1},
{id:"php-pdo",title:"PDO и работа с базами данных",brand:"PHP.net",logo:"DB",logoClass:"logo-php",category:"php",description:"Подключение к базам данных, подготовленные выражения и безопасные SQL-запросы.",tags:["PHP","PDO","Запросы к базе"],url:"https://www.php.net/manual/ru/book.pdo.php",official:true,rank:9}
,
{"id":"lesson-nav","title":"HTML: тег <nav>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Блок навигации: меню, оглавление и ссылки по странице.","tags":["HTML","nav","<nav>","навигация","меню","теги"],"url":"playground.html?topic=nav","official":false,"rank":0,"internal":true},
{"id":"lesson-header","title":"HTML: тег <header>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Вводная область страницы или раздела.","tags":["HTML","header","<header>","шапка","заголовок","теги"],"url":"playground.html?topic=header","official":false,"rank":0,"internal":true},
{"id":"lesson-main","title":"HTML: тег <main>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Основное уникальное содержимое страницы.","tags":["HTML","main","<main>","основное содержимое","теги"],"url":"playground.html?topic=main","official":false,"rank":0,"internal":true},
{"id":"lesson-section","title":"HTML: тег <section>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Тематический раздел с заголовком и содержимым.","tags":["HTML","section","<section>","раздел","теги"],"url":"playground.html?topic=section","official":false,"rank":0,"internal":true},
{"id":"lesson-a","title":"HTML: тег <a>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Ссылки на другие страницы и разделы.","tags":["HTML","a","<a>","ссылка","ссылки","теги"],"url":"playground.html?topic=a","official":false,"rank":0,"internal":true},
{"id":"lesson-button","title":"HTML: тег <button>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Кнопки для действий и интерактивности.","tags":["HTML","button","<button>","кнопка","теги"],"url":"playground.html?topic=button","official":false,"rank":0,"internal":true},
{"id":"lesson-div","title":"HTML: тег <div>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Универсальный контейнер для группировки элементов.","tags":["HTML","div","<div>","контейнер","теги"],"url":"playground.html?topic=div","official":false,"rank":0,"internal":true},
{"id":"lesson-p","title":"HTML: тег <p>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Абзацы текста и базовая структура содержимого.","tags":["HTML","p","<p>","абзац","теги"],"url":"playground.html?topic=p","official":false,"rank":0,"internal":true},
{"id":"lesson-h1","title":"HTML: заголовки <h1>–<h6>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Иерархия заголовков для структуры документа.","tags":["HTML","h1","<h1>","h2","заголовок","теги"],"url":"playground.html?topic=h1","official":false,"rank":0,"internal":true},
{"id":"lesson-ul","title":"HTML: списки <ul> и <li>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Маркированные списки и их пункты.","tags":["HTML","ul","<ul>","li","список","списки","теги"],"url":"playground.html?topic=ul","official":false,"rank":0,"internal":true},
{"id":"lesson-form","title":"HTML: тег <form>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Формы для сбора и отправки данных.","tags":["HTML","form","<form>","формы","форма","теги"],"url":"playground.html?topic=form","official":false,"rank":0,"internal":true},
{"id":"lesson-input","title":"HTML: тег <input>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Поля ввода текста, почты, чисел и других данных.","tags":["HTML","input","<input>","поле ввода","формы","теги"],"url":"playground.html?topic=input","official":false,"rank":0,"internal":true},
{"id":"lesson-footer","title":"HTML: тег <footer>","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"html","description":"Подвал страницы или самостоятельного раздела.","tags":["HTML","footer","<footer>","подвал","теги"],"url":"playground.html?topic=footer","official":false,"rank":0,"internal":true},
{"id":"js-variable","title":"JavaScript: переменные let и const","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"javascript","description":"Сохраняй значения и используй их в программе.","tags":["JavaScript","let","const","переменные","var"],"url":"playground.html?topic=js-variable","official":false,"rank":0,"internal":true},
{"id":"js-array","title":"JavaScript: массивы и методы","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"javascript","description":"Храни наборы значений и преобразуй их.","tags":["JavaScript","массив","массивы","map","filter","find"],"url":"playground.html?topic=js-array","official":false,"rank":0,"internal":true},
{"id":"js-function","title":"JavaScript: функции и параметры","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"javascript","description":"Выноси повторяемые действия в отдельные блоки.","tags":["JavaScript","функция","функции","параметры","return"],"url":"playground.html?topic=js-function","official":false,"rank":0,"internal":true},
{"id":"js-dom","title":"JavaScript: поиск элементов DOM","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"javascript","description":"Находи HTML-элементы и меняй страницу.","tags":["JavaScript","DOM","querySelector","элемент","элементы","поиск"],"url":"playground.html?topic=js-dom","official":false,"rank":0,"internal":true},
{"id":"js-events","title":"JavaScript: события и addEventListener","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"javascript","description":"Реагируй на нажатия и ввод пользователя.","tags":["JavaScript","события","click","addEventListener","обработчик"],"url":"playground.html?topic=js-events","official":false,"rank":0,"internal":true},
{"id":"js-promise","title":"JavaScript: Promise и async/await","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"javascript","description":"Работай с результатами асинхронных операций.","tags":["JavaScript","Promise","async","await","асинхронность"],"url":"playground.html?topic=js-promise","official":false,"rank":0,"internal":true},
{"id":"js-fetch","title":"JavaScript: fetch и запросы","brand":"DevShelf · практика","logo":"</>","logoClass":"logo-mdn","category":"javascript","description":"Получай данные с сервера по HTTP.","tags":["JavaScript","fetch","HTTP","запрос","API"],"url":"playground.html?topic=js-fetch","official":false,"rank":0,"internal":true},
{"id":"php-array","title":"PHP: массивы","brand":"DevShelf · справка","logo":"PHP","logoClass":"logo-mdn","category":"php","reference":true,"description":"Индексы, ассоциативные массивы и добавление элементов.","tags":["PHP","массив","массивы","array","ключ","значение"],"url":"reference.html?topic=array","official":false,"rank":0,"internal":true},
{"id":"php-foreach","title":"PHP: цикл foreach","brand":"DevShelf · справка","logo":"PHP","logoClass":"logo-mdn","category":"php","reference":true,"description":"Перебор элементов массива и пар ключ — значение.","tags":["PHP","foreach","цикл","циклы","перебор","массив"],"url":"reference.html?topic=foreach","official":false,"rank":0,"internal":true},
{"id":"php-function","title":"PHP: функции","brand":"DevShelf · справка","logo":"PHP","logoClass":"logo-mdn","category":"php","reference":true,"description":"Параметры, типы и возвращаемое значение.","tags":["PHP","function","функция","функции","параметры","return"],"url":"reference.html?topic=function","official":false,"rank":0,"internal":true},
{"id":"php-form","title":"PHP: формы и $_GET / $_POST","brand":"DevShelf · справка","logo":"PHP","logoClass":"logo-mdn","category":"php","reference":true,"description":"Обработка данных формы, проверка и безопасный вывод.","tags":["PHP","форма","формы","form","GET","POST","$_GET","$_POST"],"url":"reference.html?topic=form","official":false,"rank":0,"internal":true},
{"id":"php-pdo","title":"PHP: PDO и SQL-запросы","brand":"DevShelf · справка","logo":"PHP","logoClass":"logo-mdn","category":"php","reference":true,"description":"Подключение к базе и подготовленные запросы.","tags":["PHP","PDO","база данных","SQL","запрос","подготовленный запрос"],"url":"reference.html?topic=pdo","official":false,"rank":0,"internal":true},
{"id":"php-class","title":"PHP: классы и объекты","brand":"DevShelf · справка","logo":"PHP","logoClass":"logo-mdn","category":"php","reference":true,"description":"Свойства, методы, конструктор и экземпляры классов.","tags":["PHP","class","класс","классы","объект","объекты","ООП"],"url":"reference.html?topic=class","official":false,"rank":0,"internal":true},
{"id":"php-echo","title":"PHP: echo и вывод","brand":"DevShelf · справка","logo":"PHP","logoClass":"logo-mdn","category":"php","reference":true,"description":"Вывод строк и безопасное включение данных в HTML.","tags":["PHP","echo","вывод","строка","htmlspecialchars"],"url":"reference.html?topic=echo","official":false,"rank":0,"internal":true}
];

resources.push(...(window.DEVSHELF_REFERENCE_TOPICS || []).filter(topic => topic.search !== false).map(topic => ({
  id: "ref-" + topic.id,
  title: topic.title,
  brand: "DevShelf · справочник",
  logo: ({html:"H",css:"C",javascript:"JS",php:"PHP"})[topic.lang],
  logoClass: ({html:"logo-html",css:"logo-css",javascript:"logo-js",php:"logo-php"})[topic.lang],
  category: topic.lang,
  description: topic.summary,
  tags: [({html:"HTML",css:"CSS",javascript:"JavaScript",php:"PHP"})[topic.lang], ...topic.tags],
  url: "reference.html?topic=" + encodeURIComponent(topic.id),
  official: false,
  rank: 0,
  internal: true,
  reference: true,
  searchText: [topic.when, topic.alternatives, ...(topic.points || [])].filter(Boolean).join(" ")
})));
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const read = (k, fallback) => { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const MARKS = {html:"H", css:"C", javascript:"JS", php:"php"};
const NAMES = {all:"Подборка", favorites:"Избранное", html:"HTML", css:"CSS", javascript:"JavaScript", php:"PHP"};
const ARCHIVE_SECTIONS = {html:["HTML"], css:["CSS"], javascript:["JavaScript","Web API"], php:["PHP"]};
const SECTION_CLASS = {"HTML":"html","CSS":"css","JavaScript":"javascript","Web API":"api","PHP":"php"};
const SECTION_MARK = {"HTML":"H","CSS":"C","JavaScript":"JS","Web API":"API","PHP":"php"};
const ARCHIVE_STEP = 50;
const state = { filter:"all", query:"", sort:"recommended", favorites:read("devshelf-favorites",[]), archiveLimit:ARCHIVE_STEP };
const fmt = n => n.toLocaleString("ru");
function safe(s) { return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
const normalize = s => String(s).replace(/[<>]/g, "").toLocaleLowerCase("ru");

/* ---- полный справочник: индекс загружается один раз, при первом поиске ---- */
const ARCHIVE_URL = "reference-library/search-index.json";
const canUseArchive = location.protocol !== "file:" && !/\.github\.io$/.test(location.hostname);
const archive = { status: canUseArchive ? "idle" : "off", rows: [] };
function setLibraryLink(available) {
  const link = $("#library-link");
  if (link) link.hidden = !available;
}
function loadArchive() {
  if (archive.status !== "idle") return;
  archive.status = "loading"; render();
  fetch(ARCHIVE_URL)
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(rows => {
      archive.rows = rows.map(([title, section, path]) => ({
        title, section, path,
        key: normalize(title + " " + path.replace(/^mdn\/Web\//i, "").replace(/^php\/(php-chunked-xhtml\/)?/, "").replace(/\.x?html$/i, ""))
      }));
      archive.status = "ready"; setLibraryLink(true); render();
    })
    .catch(() => { archive.status = "missing"; setLibraryLink(false); render(); });
}
function searchArchive(q) {
  const terms = q.split(/\s+/).filter(Boolean);
  const sections = ARCHIVE_SECTIONS[state.filter];
  const found = [];
  for (const row of archive.rows) {
    if (sections && !sections.includes(row.section)) continue;
    if (!terms.every(t => row.key.includes(t))) continue;
    const title = normalize(row.title);
    found.push({ row, score: title === q ? 0 : title.startsWith(q) ? 1 : title.includes(q) ? 2 : 3 });
  }
  found.sort((a, b) => a.score - b.score || a.row.title.length - b.row.title.length || a.row.title.localeCompare(b.row.title, "ru"));
  return found.map(x => x.row);
}
const archiveHref = path => "reference-library/" + path.split("/").map(encodeURIComponent).join("/");

/* ---- строки списков ---- */
function curatedRow(r) {
  const fav = state.favorites.includes(r.id);
  const kind = r.reference ? "Справка" : r.internal ? "Урок" : r.official ? "Первоисточник" : "Материал";
  const ext = r.internal ? "" : ' target="_blank" rel="noopener noreferrer"';
  return '<li class="row"><span class="mark m-' + safe(r.category) + '" aria-hidden="true">' + safe(MARKS[r.category] || "•") + '</span>'
    + '<div class="row-main"><a class="row-title" href="' + safe(r.url) + '"' + ext + '>' + safe(r.title) + (r.internal ? "" : '<span class="ext" aria-hidden="true"> ↗</span>') + '</a>'
    + '<span class="row-desc">' + safe(r.description) + '</span></div>'
    + '<div class="row-meta"><span class="badge' + (r.official ? " official" : "") + '">' + kind + '</span><span>' + safe(r.brand) + '</span></div>'
    + '<button class="fav" data-favorite="' + safe(r.id) + '" aria-pressed="' + fav + '" aria-label="Избранное: ' + safe(r.title) + '" title="Избранное">' + (fav ? "★" : "☆") + '</button></li>';
}
function archiveRow(r) {
  const where = r.path.replace(/^mdn\/Web\//i, "").replace(/^php\/(php-chunked-xhtml\/)?/, "").replace(/\.x?html$/i, "");
  return '<li class="row archive"><span class="mark m-' + SECTION_CLASS[r.section] + '" aria-hidden="true">' + SECTION_MARK[r.section] + '</span>'
    + '<div class="row-main"><a class="row-title" href="' + safe(archiveHref(r.path)) + '">' + safe(r.title) + '</a><span class="row-desc">' + safe(where) + '</span></div>'
    + '<div class="row-meta"><span class="badge">' + (r.section === "PHP" ? "PHP Manual" : "MDN") + '</span></div></li>';
}

function render() {
  $$(".tab").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.filter === state.filter)));
  $("#total-count").textContent = resources.length;
  $("#favorite-count").textContent = state.favorites.length;
  $("#resources-title").textContent = state.query.trim() ? "Подборка DevShelf" : NAMES[state.filter] || "Подборка";
  const q = normalize(state.query).trim();
  const terms = q.split(/\s+/).filter(Boolean);

  const list = resources.filter(r => {
    if (state.filter === "favorites" ? !state.favorites.includes(r.id) : state.filter !== "all" && r.category !== state.filter) return false;
    if (!terms.length) return true;
    const hay = normalize([r.title, r.brand, r.description, r.category, ...r.tags, r.searchText].join(" "));
    return terms.every(t => hay.includes(t));
  });
  list.sort(state.sort === "az" ? (a, b) => a.title.localeCompare(b.title, "ru") : (a, b) => a.rank - b.rank);
  $("#resource-grid").innerHTML = list.map(curatedRow).join("");

  const wantArchive = q && state.filter !== "favorites" && archive.status === "ready";
  const found = wantArchive ? searchArchive(q) : [];
  const shown = found.slice(0, state.archiveLimit);
  $("#archive-block").hidden = !(wantArchive && found.length);
  $("#archive-list").innerHTML = shown.map(archiveRow).join("");
  $("#archive-summary").textContent = found.length ? "Найдено страниц: " + fmt(found.length) + (shown.length < found.length ? ", показано " + fmt(shown.length) : "") : "";
  $("#archive-more").hidden = shown.length >= found.length;

  $("#summary").textContent = q
    ? "Совпадений в подборке: " + list.length
    : "Материалов: " + list.length;
  const status = {
    off: "Поиск по подборке DevShelf. Полный справочник доступен на основном сайте.",
    idle: "Поиск идёт по подборке и по полному справочнику MDN и PHP.",
    loading: "Загружаю индекс полного справочника…",
    ready: "Поиск идёт по подборке и по полному справочнику: " + fmt(archive.rows.length) + " страниц MDN и PHP.",
    missing: "Индекс полного справочника пока не опубликован: ищу только по подборке."
  }[archive.status];
  $("#archive-status").textContent = status;
  $("#clear-search").hidden = !state.query;
  const archivePending = q && (archive.status === "loading" || archive.status === "idle");
  const nothing = list.length === 0 && !(wantArchive && found.length) && !archivePending;
  $("#empty-state").hidden = !nothing;
  $("#resource-grid").hidden = list.length === 0;
}

let toastTimer;
function toast(message) { const el = $("#toast"); el.textContent = message; el.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 1800); }
function setQuery(value) { state.query = value; state.archiveLimit = ARCHIVE_STEP; if (value.trim()) loadArchive(); render(); }

$$(".tab").forEach(b => b.addEventListener("click", () => { state.filter = b.dataset.filter; state.archiveLimit = ARCHIVE_STEP; render(); }));
let searchTimer;
$("#search").addEventListener("focus", loadArchive);
$("#search").addEventListener("input", e => { clearTimeout(searchTimer); const v = e.target.value; state.query = v; state.archiveLimit = ARCHIVE_STEP; if (v.trim()) loadArchive(); searchTimer = setTimeout(render, 150); });
$("#clear-search").addEventListener("click", () => { $("#search").value = ""; setQuery(""); $("#search").focus(); });
$$("[data-query]").forEach(b => b.addEventListener("click", () => { $("#search").value = b.dataset.query; setQuery(b.dataset.query); $("#search").focus(); }));
$("#sort").addEventListener("change", e => { state.sort = e.target.value; render(); });
$("#reset").addEventListener("click", () => { state.filter = "all"; $("#search").value = ""; setQuery(""); });
$("#archive-more").addEventListener("click", () => { state.archiveLimit += ARCHIVE_STEP; render(); $("#archive-more").focus({ preventScroll: true }); });
$("#resource-grid").addEventListener("click", e => {
  const b = e.target.closest("[data-favorite]");
  if (!b) return;
  const id = b.dataset.favorite;
  state.favorites = state.favorites.includes(id) ? state.favorites.filter(x => x !== id) : [...state.favorites, id];
  write("devshelf-favorites", state.favorites);
  toast(state.favorites.includes(id) ? "Сохранено в избранное ★" : "Убрано из избранного");
  render();
  const again = $$("[data-favorite]").find(x => x.dataset.favorite === id);
  if (again) again.focus({ preventScroll: true });
});
$("#theme-toggle").addEventListener("click", () => { document.body.classList.toggle("light"); const light = document.body.classList.contains("light"); $("#theme-toggle").textContent = light ? "☀" : "☾"; write("devshelf-theme", light ? "light" : "dark"); });
if (read("devshelf-theme", "dark") === "light") { document.body.classList.add("light"); $("#theme-toggle").textContent = "☀"; }

document.addEventListener("keydown", e => {
  const active = document.activeElement;
  const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(active.tagName);
  if (e.key === "/" && !typing) { e.preventDefault(); $("#search").focus(); return; }
  if (e.key === "Escape" && active === $("#search")) { if ($("#search").value) { $("#search").value = ""; setQuery(""); } else $("#search").blur(); return; }
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    const links = $$(".row-title");
    const i = links.indexOf(active);
    if (active === $("#search") && e.key === "ArrowDown" && links.length) { e.preventDefault(); links[0].focus(); }
    else if (i >= 0) { e.preventDefault(); if (e.key === "ArrowDown") (links[i + 1] || links[i]).focus(); else (links[i - 1] || $("#search")).focus(); }
  }
});

if (/\.github\.io$/.test(location.hostname)) { const lib = $("#library-link"); if (lib) lib.remove(); }
else {
  fetch("reference-library/index.html", { method: "HEAD" })
    .then(r => setLibraryLink(r.ok))
    .catch(() => setLibraryLink(false));
}
const initial = new URLSearchParams(location.search).get("q");
if (initial) { $("#search").value = initial; state.query = initial; loadArchive(); }
render();
