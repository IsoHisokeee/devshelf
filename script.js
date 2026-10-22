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
  reference: true
})));
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const read = (k, fallback) => { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const state = { filter:"all", query:"", sort:"recommended", favorites:read("devshelf-favorites",[]) };
const names = {all:"Обзор",favorites:"Избранное",html:"HTML",css:"CSS",javascript:"JavaScript",php:"PHP"};
function safe(s) { return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function render() {
  $$(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.filter === state.filter));
  $("#current-section").textContent = names[state.filter] || "Обзор";
  $("#resources-title").textContent = state.filter === "all" ? "Полезные источники" : state.filter === "favorites" ? "Избранное" : "Источники: " + names[state.filter];
  $("#total-count").textContent = resources.length;
  $("#favorite-count").textContent = state.favorites.length;
  const q = state.query.trim().replace(/[<>]/g,"").trim().toLocaleLowerCase("ru");
  let list = resources.filter(r => (state.filter === "all" || (state.filter === "favorites" ? state.favorites.includes(r.id) : r.category === state.filter)) && (!q || [r.title,r.brand,r.description,r.category,...r.tags].join(" ").replace(/[<>]/g,"").toLocaleLowerCase("ru").includes(q)));
  list.sort(state.sort === "az" ? (a,b) => a.title.localeCompare(b.title,"ru") : (a,b) => a.rank - b.rank);
  $("#summary").textContent = state.query ? "Результаты по запросу «" + state.query + "»: " + list.length : "Материалов: " + list.length + ". Открывай первоисточник и изучай детали.";
  $("#clear-search").hidden = !state.query;
  $("#resource-grid").innerHTML = list.map(r => '<article class="resource-card" data-url="' + safe(r.url) + '" tabindex="0" role="link"><div class="resource-top"><div class="source-brand"><span class="source-logo ' + r.logoClass + '">' + safe(r.logo) + '</span>' + safe(r.brand) + '</div><button class="favorite-button ' + (state.favorites.includes(r.id) ? "is-favorite" : "") + '" data-favorite="' + r.id + '" aria-label="Избранное" title="Избранное">' + (state.favorites.includes(r.id) ? "★" : "☆") + '</button></div><h3>' + safe(r.title) + '</h3><p>' + safe(r.description) + '</p><div class="resource-tags">' + r.tags.map(t => '<span class="resource-tag">' + safe(t) + '</span>').join("") + '</div><div class="resource-bottom"><span class="official-label"><span>●</span>' + (r.reference ? "Русская справка" : (r.internal ? "Интерактивный урок" : (r.official ? "Первоисточник" : "Учебный материал"))) + '</span><a class="resource-link" href="' + r.url + '" target="' + (r.internal ? '_self' : '_blank') + '" rel="noopener noreferrer">' + (r.reference ? 'Открыть справку' : (r.internal ? 'Изучить и попробовать' : 'Открыть ресурс')) + ' ↗</a></div></article>').join("");
  $("#empty-state").hidden = list.length > 0;
  $("#resource-grid").hidden = list.length === 0;
}
let toastTimer;
function toast(message) { const el = $("#toast"); el.textContent = message; el.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 1900); }
$$("[data-filter]").forEach(b => b.addEventListener("click", () => { state.filter = b.dataset.filter; render(); $("#sidebar").classList.remove("open"); if (innerWidth < 760) $("#resources-title").scrollIntoView({behavior:"smooth",block:"start"}); }));
$("#search").addEventListener("input", e => { state.query = e.target.value; render(); });
$("#search").addEventListener("keydown", e => { if (e.key === "Enter") $("#resources-title").scrollIntoView({behavior:"smooth",block:"start"}); });
$("#clear-search").addEventListener("click", () => { state.query = ""; $("#search").value = ""; render(); $("#search").focus(); });
$$("[data-query]").forEach(b => b.addEventListener("click", () => { $("#search").value = b.dataset.query; state.query = b.dataset.query; render(); $("#search").focus(); }));
$("#sort").addEventListener("change", e => { state.sort = e.target.value; render(); });
$("#reset").addEventListener("click", () => { state.filter = "all"; state.query = ""; $("#search").value = ""; render(); });
$("#resource-grid").addEventListener("click", e => {
  const b = e.target.closest("[data-favorite]");
  if (b) {
    const id = b.dataset.favorite;
    state.favorites = state.favorites.includes(id) ? state.favorites.filter(x => x !== id) : [...state.favorites,id];
    write("devshelf-favorites",state.favorites);
    toast(state.favorites.includes(id) ? "Сохранено в избранное ★" : "Убрано из избранного");
    render();
    return;
  }
  const card = e.target.closest(".resource-card");
  if (card && !e.target.closest("a,button")) location.href = card.dataset.url;
});
$("#resource-grid").addEventListener("keydown", e => {
  const card = e.target.closest(".resource-card");
  if (card && !e.target.closest("a,button") && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    location.href = card.dataset.url;
  }
});
$("#theme-toggle").addEventListener("click", () => { document.body.classList.toggle("light"); const light = document.body.classList.contains("light"); $("#theme-toggle").textContent = light ? "☀" : "☾"; write("devshelf-theme",light ? "light" : "dark"); });
if (read("devshelf-theme","dark") === "light") { document.body.classList.add("light"); $("#theme-toggle").textContent = "☀"; }
$("#menu-toggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
document.addEventListener("keydown", e => { if (e.key === "/" && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) { e.preventDefault(); $("#search").focus(); } if (e.key === "Escape") { $("#sidebar").classList.remove("open"); if (document.activeElement === $("#search")) $("#search").blur(); } });
document.addEventListener("click", e => { if (innerWidth < 760 && $("#sidebar").classList.contains("open") && !$("#sidebar").contains(e.target) && !$("#menu-toggle").contains(e.target)) $("#sidebar").classList.remove("open"); });
render();
