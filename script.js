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
const ICONS = {
  html: '<svg class="lang-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><title>HTML5</title><path fill="#E44D26" d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3z"/><path fill="#F16529" d="M12 3.8v16.3l5.6-1.9 1.4-14.4H12z"/><path fill="#EBEBEB" d="M12 7.8H7.3l.3 3.2H12v-1.7H9.1l-.1-1.5H12V7.8zm0 5.4H9.9l.2 2 1.9.5v1.6l-3.3-.9-.3-4.2H12v1z"/><path fill="#FFFFFF" d="M12 7.8v1.5h3.6l-.3 3.8H12v1h2.2l-.2 2.3-2 .5v1.6l3.3-.9.7-7.3.1-1H12z"/></svg>',
  css: '<svg class="lang-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><title>CSS3</title><path fill="#1572B6" d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3z"/><path fill="#33A9DC" d="M12 3.8v16.3l5.6-1.9 1.4-14.4H12z"/><path fill="#EBEBEB" d="M12 7.8H7.3l.3 3.2H12v-1.7H9.1l-.1-1.5H12V7.8zm0 5.4H9.9l.2 2 1.9.5v1.6l-3.3-.9-.3-4.2H12v1z"/><path fill="#FFFFFF" d="M12 7.8v1.5h3.6l-.3 3.2-3.3.9v1.6l3.3-.9.4-4.8H12v-1.5h5.3l.1-1.5.1-1.5H12z"/></svg>',
  javascript: '<svg class="lang-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><title>JavaScript</title><rect width="24" height="24" rx="4" fill="#F7DF1E"/><path d="M6.2 17.5c.5.8 1.2 1.4 2.2 1.4 1.2 0 2-.6 2-2.1v-7.2h2.4v7.3c0 2.6-1.6 3.7-3.9 3.7-1.8 0-3-.9-3.7-2.3l1-.8zm8.6-.2c.5.8 1.3 1.3 2.3 1.3 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6l-.6-.3c-1.7-.7-2.8-1.6-2.8-3.5 0-1.9 1.5-3.3 3.7-3.3 1.6 0 2.8.6 3.5 1.9l-1.8 1.1c-.4-.7-.9-1-1.7-1-.8 0-1.3.5-1.3 1.1 0 .7.5 1 1.5 1.4l.6.3c2 .9 3 1.8 3 3.7 0 2.1-1.6 3.5-4.1 3.5-2.3 0-3.7-1.1-4.4-2.5l2.2-1.2z" fill="#000000"/></svg>',
  php: '<svg class="lang-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><title>PHP</title><rect width="24" height="24" rx="4" fill="#777BB4"/><path d="M4.2 8.4h3.4c1.4 0 2.2.8 2.2 2 0 1.3-.8 2.1-2.2 2.1H5.8v3.1H4.2V8.4zm1.6 2.8h1.6c.5 0 .9-.3.9-.8s-.4-.8-.9-.8H5.8v1.6zm5.5-2.8h1.6v2.8h2.5v-2.8h1.6v7.2h-1.6v-3h-2.5v3h-1.6V8.4zm7.2 0h3.4c1.4 0 2.2.8 2.2 2 0 1.3-.8 2.1-2.2 2.1h-1.8v3.1h-1.6V8.4zm1.6 2.8h1.6c.5 0 .9-.3.9-.8s-.4-.8-.9-.8h-1.6v1.6z" fill="#FFFFFF"/></svg>',
  api: '<svg class="lang-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><title>Web API</title><rect width="24" height="24" rx="4" fill="#319795"/><path d="M4.6 15.2l2.2-6.4h1.8l2.2 6.4H9.4l-.4-1.4H6.8l-.4 1.4H4.6zm2.7-2.6h1.2l-.6-2.1-.6 2.1zm4.7 2.6V8.8h2.6c1.3 0 2.1.8 2.1 1.8 0 1.1-.8 1.8-2.1 1.8h-1.2v2.8H12zm1.4-4h1.1c.5 0 .8-.3.8-.7s-.3-.7-.8-.7h-1.1v1.4zm5.1 4V8.8h1.6v6.4h-1.6z" fill="#FFFFFF"/></svg>'
};
const getIcon = cat => ICONS[cat] || '<span class="mark-fallback">•</span>';
const NAMES = {all:"Подборка", favorites:"Избранное", html:"HTML", css:"CSS", javascript:"JavaScript", php:"PHP"};
const ARCHIVE_SECTIONS = {html:["HTML"], css:["CSS"], javascript:["JavaScript","Web API"], php:["PHP"]};
const SECTION_CLASS = {"HTML":"html","CSS":"css","JavaScript":"javascript","Web API":"api","PHP":"php"};
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
  return '<li class="row"><span class="mark" aria-hidden="true">' + getIcon(r.category) + '</span>'
    + '<div class="row-main"><a class="row-title" href="' + safe(r.url) + '"' + ext + '>' + safe(r.title) + (r.internal ? "" : '<span class="ext" aria-hidden="true"> ↗</span>') + '</a>'
    + '<span class="row-desc">' + safe(r.description) + '</span></div>'
    + '<div class="row-meta"><span class="badge' + (r.official ? " official" : "") + '">' + kind + '</span><span aria-hidden="true">·</span><span>' + safe(r.brand) + '</span></div>'
    + '<button class="fav" data-favorite="' + safe(r.id) + '" aria-pressed="' + fav + '" aria-label="Избранное: ' + safe(r.title) + '" title="Избранное">' + (fav ? "★" : "☆") + '</button></li>';
}
function archiveRow(r) {
  const where = r.path.replace(/^mdn\/Web\//i, "").replace(/^php\/(php-chunked-xhtml\/)?/, "").replace(/\.x?html$/i, "");
  const cat = SECTION_CLASS[r.section] || "api";
  return '<li class="row archive"><span class="mark" aria-hidden="true">' + getIcon(cat) + '</span>'
    + '<div class="row-main"><a class="row-title" href="' + safe(archiveHref(r.path)) + '">' + safe(r.title) + '</a><span class="row-desc">' + safe(where) + '</span></div>'
    + '<div class="row-meta"><span class="badge">' + (r.section === "PHP" ? "PHP Manual" : "MDN") + '</span><span aria-hidden="true">·</span><span>Архив</span></div></li>';
}

/* ---- Компактный справочник готовых рецептов (Task/Recipe Intent Index) ---- */
function stemRussian(w) {
  if (w.length <= 3) return w.toLowerCase();
  return String(w)
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'<>]/g, "")
    .trim()
    .replace(/(ами|ями|ов|ев|ей|ия|ие|ое|ые|ую|юю|ая|яя|ом|ем|ам|ям|ах|ях|ость|ости|ть|ти|ся|сь|ла|ли|ло|а|я|у|ю|е|и|ы|о)$/, "");
}

const RECIPES = [
  {
    id: "burger-menu",
    keys: ["бургер", "гамбургер", "шторк", "выездн мен", "боков мен", "drawer", "burger"],
    title: "Как сделать адаптивное бургер-меню",
    desc: "Для создания бургер-меню нужны семантическая разметка (<nav>, <button>), стили выезда и адаптивности (position: fixed, transitions, @media) и JS-переключение классов.",
    topics: [
      "lesson-nav",
      "lesson-button",
      "ref-html-semantic",
      "ref-html-buttons",
      "ref-css-position",
      "ref-css-transitions",
      "ref-css-responsive",
      "ref-css-display",
      "js-events",
      "js-dom",
      "ref-css-has",
      "ref-html-accessibility"
    ]
  },
  {
    id: "modal-dialog",
    keys: ["модал", "попап", "всплывающ окн", "диалог", "popup", "modal", "dialog"],
    title: "Как сделать модальное окно / попап",
    desc: "Современное модальное окно собирается через нативный тег <dialog>, стили размытия фона (backdrop-filter) и JS-методы showModal() и close().",
    topics: [
      "ref-html-dialog",
      "lesson-button",
      "ref-css-backdrop-filter",
      "ref-css-position",
      "ref-css-transitions",
      "js-events",
      "js-dom",
      "ref-html-accessibility"
    ]
  },
  {
    id: "theme-toggle",
    keys: ["темн тем", "светл тем", "переключен тем", "смен тем", "dark mode", "theme"],
    title: "Как реализовать переключение тёмной/светлой темы",
    desc: "Используй CSS-переменные (:root и body.light), медиа-запрос prefers-color-scheme и сохранение выбора пользователя в localStorage.",
    topics: [
      "ref-css-custom-properties",
      "ref-css-responsive",
      "ref-js-localstorage-api",
      "js-events",
      "lesson-button",
      "ref-css-colors"
    ]
  },
  {
    id: "slider-carousel",
    keys: ["слайдер", "карусел", "галере", "swiper", "slider", "carousel"],
    title: "Как сделать слайдер / карусель контента",
    desc: "Слайдер без тяжелых библиотек создается с помощью CSS scroll-snap, overflow-x и flexbox с управлением кнопками вперед/назад.",
    topics: [
      "ref-css-scroll-snap",
      "ref-css-overflow",
      "ref-css-flexbox",
      "ref-css-transitions",
      "lesson-button",
      "js-events",
      "ref-html-images"
    ]
  },
  {
    id: "form-validation",
    keys: ["валидац", "проверк форм", "ошибк ввод", "validation", "валидн"],
    title: "Как сделать валидацию и проверку форм",
    desc: "Клиентская валидация через атрибуты HTML5 (required, pattern) и псевдоклассы CSS (:valid, :invalid), плюс обязательная проверка на бэкенде через filter_var.",
    topics: [
      "ref-html-forms",
      "ref-html-input-types",
      "ref-css-pseudo",
      "ref-js-forms",
      "ref-php-filter-var",
      "ref-php-validation",
      "ref-form"
    ]
  },
  {
    id: "auth-sessions",
    keys: ["авторизац", "регистрац", "логин", "парол", "сесси", "auth", "login", "password"],
    title: "Как сделать авторизацию и безопасные сессии",
    desc: "Полная связка: безопасное хэширование паролей (password_hash), старт сессий (session_start), CSRF-токены и выборка пользователя через PDO.",
    topics: [
      "ref-php-sessions-auth",
      "ref-php-password-hash",
      "ref-php-csrf-protection",
      "ref-php-pdo-crud",
      "ref-pdo",
      "lesson-form",
      "lesson-input"
    ]
  },
  {
    id: "ajax-fetch",
    keys: ["аякс", "ajax", "без перезагрузк", "отправк форм", "fetch", "запрос"],
    title: "Как отправлять данные формы без перезагрузки (AJAX)",
    desc: "Перехватывай событие submit (e.preventDefault()), собирай данные в FormData и отправляй на сервер через fetch() с обработкой JSON-ответа.",
    topics: [
      "ref-js-fetch-method",
      "ref-js-promise-methods",
      "ref-js-forms",
      "js-events",
      "ref-php-json-encode-decode",
      "lesson-form"
    ]
  },
  {
    id: "sticky-header",
    keys: ["липк шапк", "прилипающ", "закреплен шапк", "sticky", "fixed header"],
    title: "Как сделать липкую шапку (Sticky Header)",
    desc: "Используй CSS position: sticky с top: 0, z-index и эффектом матового стекла backdrop-filter: blur() при прокрутке страницы.",
    topics: [
      "ref-css-position",
      "ref-css-backdrop-filter",
      "lesson-header",
      "lesson-nav",
      "ref-css-box-model"
    ]
  },
  {
    id: "connect-css-fonts",
    keys: ["подключен css", "подключит стил", "подключен шрифт", "шрифт", "google fonts", "font face"],
    title: "Как правильно подключить стили и шрифты",
    desc: "Подключение CSS через тег <link rel='stylesheet'>, Google Fonts с предзагрузкой preconnect и локальные файлы шрифтов через @font-face.",
    topics: [
      "ref-html-link-css",
      "ref-html-google-fonts",
      "ref-css-font-face",
      "ref-css-cascade",
      "ref-css-typography",
      "ref-html-metadata"
    ]
  },
  {
    id: "crud-database",
    keys: ["баз данн", "бд", "crud", "запрос бд", "таблиц баз", "pdo crud"],
    title: "Как реализовать работу с базой данных (CRUD)",
    desc: "Подключение PDO к MySQL, подготовленные выражения (prepare/execute), выборка (fetch/fetchAll) и безопасное сохранение данных без SQL-инъекций.",
    topics: [
      "ref-php-pdo-crud",
      "ref-pdo",
      "ref-php-transactions",
      "ref-php-sessions-auth"
    ]
  },
  {
    id: "responsive-design",
    keys: ["адаптивн", "мобильн верстк", "резинов верстк", "адаптив", "responsive", "медиа запрос"],
    title: "Как сделать адаптивную вёрстку под все экраны",
    desc: "Метатег viewport, гибкие сетки Flexbox и Grid, адаптивная типографика clamp() и медиа-запросы @media для мобильных и планшетов.",
    topics: [
      "ref-css-responsive",
      "ref-css-clamp",
      "ref-css-flexbox",
      "ref-css-grid",
      "ref-html-metadata",
      "ref-css-units"
    ]
  },
  {
    id: "infinite-scroll",
    keys: ["бесконечн скролл", "подгрузк", "ленил загрузк", "lazy load", "lazy"],
    title: "Как сделать бесконечный скролл и ленивую загрузку (Lazy Loading)",
    desc: "Отслеживание видимости триггера через IntersectionObserver, подгрузка порции данных через fetch() и нативный атрибут loading='lazy' для картинок.",
    topics: [
      "ref-js-intersection-observer",
      "ref-js-fetch-method",
      "ref-html-images",
      "ref-js-debounce-throttle"
    ]
  },
  {
    id: "accordion-spoiler",
    keys: ["аккордеон", "спойлер", "раскрывающ", "accordion", "spoiler", "details"],
    title: "Как сделать аккордеон / раскрывающийся список",
    desc: "Используй нативные HTML-теги <details> и <summary> без JavaScript или кастомную сборку с кнопкой, aria-expanded и плавным переходом.",
    topics: [
      "ref-html-details",
      "ref-css-transitions",
      "lesson-button",
      "js-events"
    ]
  },
  {
    id: "localstorage-cart",
    keys: ["корзин", "сохранен данн", "localstorage", "сохранит в браузер"],
    title: "Как сохранять данные в браузере (Корзина / Настройки)",
    desc: "Запись и чтение объектов через localStorage с сериализацией в JSON.stringify и распарсиванием в JSON.parse.",
    topics: [
      "ref-js-localstorage-api",
      "ref-js-json-methods",
      "ref-js-array-methods",
      "js-events"
    ]
  },
  {
    id: "toast-notification",
    keys: ["уведомлен", "тост", "toast", "всплывающ сообщени", "alert"],
    title: "Как сделать всплывающие уведомления (Toast)",
    desc: "Контейнер с position: fixed, плавное появление через transform и opacity с авто-скрытием через setTimeout.",
    topics: [
      "ref-css-position",
      "ref-css-transitions",
      "ref-css-animation",
      "ref-js-timers",
      "ref-js-dom-create",
      "js-events"
    ]
  },
  {
    id: "center-element",
    keys: ["центрирован", "по центр", "выравниван", "отцентрирова", "center"],
    title: "Как отцентрировать элемент по горизонтали и вертикали",
    desc: "Современные способы центрирования: Flexbox (justify-content + align-items), Grid (place-items: center) или margin: auto.",
    topics: [
      "ref-css-centering",
      "ref-css-flexbox",
      "ref-css-grid",
      "ref-css-position"
    ]
  },
  {
    id: "clipboard-copy",
    keys: ["буфер обмен", "скопирова", "копирован", "clipboard", "copy"],
    title: "Как скопировать текст в буфер обмена",
    desc: "Современный API navigator.clipboard.writeText(text) с обработкой успешного промиса и таймером сброса подсказки.",
    topics: [
      "ref-js-clipboard",
      "lesson-button",
      "ref-js-timers"
    ]
  },
  {
    id: "file-upload",
    keys: ["загрузк файл", "аплоад", "загрузит файл", "file upload", "картинк сервер"],
    title: "Как сделать загрузку файлов на сервер",
    desc: "Форма с enctype='multipart/form-data', поле <input type='file'>, серверная валидация типа и размера в PHP ($_FILES) и защита CSRF.",
    topics: [
      "ref-php-file-uploads",
      "ref-html-input-types",
      "ref-php-csrf-protection",
      "ref-html-forms"
    ]
  },
  {
    id: "seo-metadata",
    keys: ["метаданн", "meta", "сео", "seo", "opengraph", "og", "твиттер карт", "twitter card", "микроразметк", "json ld", "schema org", "robots", "sitemap"],
    title: "Как настроить метаданные, SEO и OpenGraph для соцсетей",
    desc: "Полная подготовка страницы к поиску и репостам: базовые <meta>, протокол OpenGraph для Telegram/VK, Twitter Cards, Schema.org JSON-LD, robots.txt и sitemap.xml.",
    topics: [
      "ref-html-metadata",
      "ref-html-meta-seo",
      "ref-html-opengraph",
      "ref-seo-sitemap-robots",
      "ref-html-json-ld",
      "ref-xml-basics"
    ]
  },
  {
    id: "xml-guides",
    keys: ["xml", "написан xml", "синтаксис xml", "xml файл", "xml тег", "cdata", "rss", "пролог xml"],
    title: "Как писать валидный XML (структура, синтаксис и CDATA)",
    desc: "Спецификация XML: обязательный пролог <?xml version='1.0'?>, единственный корень, экранирование спецсимволов (&lt;, &gt;, &amp;), блоки CDATA и парсинг через DOMParser.",
    topics: [
      "ref-xml-basics",
      "ref-xml-advanced",
      "ref-seo-sitemap-robots",
      "ref-html-json-ld"
    ]
  }
];

function findRecipe(query) {
  if (!query || query.length < 2) return null;
  const qClean = normalize(query).trim();
  const qStems = qClean.split(/\s+/).map(stemRussian).filter(s => s.length >= 2);
  if (!qStems.length) return null;

  for (const r of RECIPES) {
    for (const key of r.keys) {
      const keyWords = key.split(/\s+/).map(stemRussian);
      const allMatch = keyWords.every(kw => qStems.some(qs => qs.includes(kw) || kw.includes(qs)));
      if (allMatch) return r;
    }
  }
  return null;
}

function render() {
  $$(".tab").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.filter === state.filter)));
  $("#total-count").textContent = resources.length;
  $("#favorite-count").textContent = state.favorites.length;
  $("#resources-title").textContent = state.query.trim() ? "Подборка DevShelf" : NAMES[state.filter] || "Подборка";
  const q = normalize(state.query).trim();
  const terms = q.split(/\s+/).filter(Boolean);
  const activeRecipe = findRecipe(q);

  // Обновление баннера задачи/рецепта
  const recipeBanner = $("#recipe-banner");
  if (recipeBanner) {
    if (activeRecipe) {
      $("#recipe-title").textContent = activeRecipe.title;
      $("#recipe-desc").textContent = activeRecipe.desc;
      recipeBanner.removeAttribute("hidden");
    } else {
      recipeBanner.setAttribute("hidden", "");
    }
  }

  let list = [];
  if (activeRecipe) {
    const recipeTopicSet = new Set(activeRecipe.topics);
    list = resources.filter(r => {
      if (state.filter === "favorites" ? !state.favorites.includes(r.id) : state.filter !== "all" && r.category !== state.filter) return false;
      if (recipeTopicSet.has(r.id)) return true;
      const hay = normalize([r.title, r.brand, r.description, r.category, ...r.tags, r.searchText].join(" "));
      return terms.length > 0 && terms.every(t => hay.includes(t));
    });

    list.sort((a, b) => {
      const isRecA = recipeTopicSet.has(a.id);
      const isRecB = recipeTopicSet.has(b.id);
      if (isRecA && !isRecB) return -1;
      if (!isRecA && isRecB) return 1;
      if (isRecA && isRecB) {
        return activeRecipe.topics.indexOf(a.id) - activeRecipe.topics.indexOf(b.id);
      }
      return state.sort === "az" ? a.title.localeCompare(b.title, "ru") : a.rank - b.rank;
    });
  } else {
    const qStems = terms.map(stemRussian);
    list = resources.filter(r => {
      if (state.filter === "favorites" ? !state.favorites.includes(r.id) : state.filter !== "all" && r.category !== state.filter) return false;
      if (!terms.length) return true;
      const hay = normalize([r.title, r.brand, r.description, r.category, ...r.tags, r.searchText].join(" "));
      return terms.every(t => hay.includes(t)) || (qStems.length > 0 && qStems.every(st => hay.includes(st)));
    });
    list.sort(state.sort === "az" ? (a, b) => a.title.localeCompare(b.title, "ru") : (a, b) => a.rank - b.rank);
  }

  $("#resource-grid").innerHTML = list.map(curatedRow).join("");

  const wantArchive = q && state.filter !== "favorites" && archive.status === "ready";
  const found = wantArchive ? searchArchive(q) : [];
  const shown = found.slice(0, state.archiveLimit);
  $("#archive-block").hidden = !(wantArchive && found.length);
  $("#archive-list").innerHTML = shown.map(archiveRow).join("");
  $("#archive-summary").textContent = found.length ? "Найдено страниц: " + fmt(found.length) + (shown.length < found.length ? ", показано " + fmt(shown.length) : "") : "";
  $("#archive-more").hidden = shown.length >= found.length;

  if (activeRecipe) {
    $("#summary").textContent = "Справочники для задачи: " + list.length;
  } else {
    $("#summary").textContent = q
      ? "Совпадений в подборке: " + list.length
      : "Материалов: " + list.length;
  }
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

// Shortcuts modal
const shortcutsDialog = $("#shortcuts-dialog");
const shortcutsBtn = $("#shortcuts-btn");
const closeShortcutsBtn = $("#close-shortcuts");
function toggleShortcuts(show) {
  if (!shortcutsDialog) return;
  if (show === undefined) show = !shortcutsDialog.open;
  if (show) shortcutsDialog.showModal();
  else shortcutsDialog.close();
}
if (shortcutsBtn) shortcutsBtn.addEventListener("click", () => toggleShortcuts(true));
if (closeShortcutsBtn) closeShortcutsBtn.addEventListener("click", () => toggleShortcuts(false));

// Keyboard navigation helper
function getVisibleRows() {
  return $$(".row");
}

function getSelectedRowIndex() {
  const rows = getVisibleRows();
  const active = document.activeElement;
  return rows.findIndex(row => row === active || row.contains(active) || row.classList.contains("selected"));
}

function selectRow(index) {
  const rows = getVisibleRows();
  if (!rows.length) return;
  index = Math.max(0, Math.min(index, rows.length - 1));
  rows.forEach((r, i) => r.classList.toggle("selected", i === index));
  const link = rows[index].querySelector(".row-title");
  if (link) {
    link.focus({ preventScroll: true });
  }
  rows[index].scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function clearRowSelection() {
  $$(".row.selected").forEach(r => r.classList.remove("selected"));
}

document.addEventListener("keydown", e => {
  const active = document.activeElement;
  const isInput = ["INPUT", "TEXTAREA", "SELECT"].includes(active?.tagName);
  const searchInput = $("#search");

  // Esc handling
  if (e.key === "Escape") {
    if (shortcutsDialog && shortcutsDialog.open) {
      e.preventDefault();
      toggleShortcuts(false);
      return;
    }
    if (active === searchInput) {
      if (searchInput.value) {
        searchInput.value = "";
        setQuery("");
      } else {
        searchInput.blur();
      }
      return;
    }
    if (state.query) {
      searchInput.value = "";
      setQuery("");
      clearRowSelection();
      return;
    }
    clearRowSelection();
    if (document.activeElement) document.activeElement.blur();
    return;
  }

  // Focus search with '/'
  if (e.key === "/" && !isInput) {
    e.preventDefault();
    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
    return;
  }

  // Toggle shortcuts with '?'
  if (e.key === "?" && !isInput) {
    e.preventDefault();
    toggleShortcuts();
    return;
  }

  // If typing in search box:
  if (active === searchInput) {
    if (e.key === "ArrowDown" || e.key === "Enter") {
      const rows = getVisibleRows();
      if (rows.length) {
        e.preventDefault();
        selectRow(0);
      }
    }
    return;
  }

  // If typing in other inputs, don't intercept navigation keys
  if (isInput) return;

  // Toggle theme with 't' or 'T' (or Russian 'е'/'Е')
  if (e.key === "t" || e.key === "T" || e.key === "е" || e.key === "Е") {
    e.preventDefault();
    $("#theme-toggle").click();
    return;
  }

  // Tab quick switches with 1-6
  const tabFilterMap = { "1": "all", "2": "html", "3": "css", "4": "javascript", "5": "php", "6": "favorites" };
  if (tabFilterMap[e.key]) {
    e.preventDefault();
    const targetTab = $$(".tab").find(b => b.dataset.filter === tabFilterMap[e.key]);
    if (targetTab) targetTab.click();
    return;
  }

  // J / K and ArrowDown / ArrowUp navigation (also supports Russian keyboard layout)
  if (e.key === "j" || e.key === "J" || e.key === "ArrowDown" || e.key === "о" || e.key === "О") {
    e.preventDefault();
    const currentIndex = getSelectedRowIndex();
    if (currentIndex === -1) {
      selectRow(0);
    } else {
      selectRow(currentIndex + 1);
    }
    return;
  }

  if (e.key === "k" || e.key === "K" || e.key === "ArrowUp" || e.key === "л" || e.key === "Л") {
    e.preventDefault();
    const currentIndex = getSelectedRowIndex();
    if (currentIndex <= 0) {
      clearRowSelection();
      if (searchInput) searchInput.focus();
    } else {
      selectRow(currentIndex - 1);
    }
    return;
  }

  // Enter or 'o' to open selected item
  if (e.key === "Enter" || e.key === "o" || e.key === "O" || e.key === "щ" || e.key === "Щ") {
    const currentIndex = getSelectedRowIndex();
    if (currentIndex >= 0) {
      const rows = getVisibleRows();
      const link = rows[currentIndex]?.querySelector(".row-title");
      if (link) {
        link.click();
      }
    }
    return;
  }

  // 'f' or 's' to toggle favorite for current row
  if (e.key === "f" || e.key === "F" || e.key === "s" || e.key === "S" || e.key === "а" || e.key === "А" || e.key === "ы" || e.key === "Ы") {
    const currentIndex = getSelectedRowIndex();
    if (currentIndex >= 0) {
      e.preventDefault();
      const rows = getVisibleRows();
      const favBtn = rows[currentIndex]?.querySelector("[data-favorite]");
      if (favBtn) favBtn.click();
    }
    return;
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
