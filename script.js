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
];
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
  const q = state.query.trim().toLocaleLowerCase("ru");
  let list = resources.filter(r => (state.filter === "all" || (state.filter === "favorites" ? state.favorites.includes(r.id) : r.category === state.filter)) && (!q || [r.title,r.brand,r.description,r.category,...r.tags].join(" ").toLocaleLowerCase("ru").includes(q)));
  list.sort(state.sort === "az" ? (a,b) => a.title.localeCompare(b.title,"ru") : (a,b) => a.rank - b.rank);
  $("#summary").textContent = state.query ? "Результаты по запросу «" + state.query + "»: " + list.length : "Материалов: " + list.length + ". Открывай первоисточник и изучай детали.";
  $("#clear-search").hidden = !state.query;
  $("#resource-grid").innerHTML = list.map(r => '<article class="resource-card"><div class="resource-top"><div class="source-brand"><span class="source-logo ' + r.logoClass + '">' + safe(r.logo) + '</span>' + safe(r.brand) + '</div><button class="favorite-button ' + (state.favorites.includes(r.id) ? "is-favorite" : "") + '" data-favorite="' + r.id + '" aria-label="Избранное" title="Избранное">' + (state.favorites.includes(r.id) ? "★" : "☆") + '</button></div><h3>' + safe(r.title) + '</h3><p>' + safe(r.description) + '</p><div class="resource-tags">' + r.tags.map(t => '<span class="resource-tag">' + safe(t) + '</span>').join("") + '</div><div class="resource-bottom"><span class="official-label"><span>●</span>' + (r.official ? "Первоисточник" : "Учебный материал") + '</span><a class="resource-link" href="' + r.url + '" target="_blank" rel="noopener noreferrer">Открыть ресурс ↗</a></div></article>').join("");
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
$("#resource-grid").addEventListener("click", e => { const b = e.target.closest("[data-favorite]"); if (!b) return; const id = b.dataset.favorite; state.favorites = state.favorites.includes(id) ? state.favorites.filter(x => x !== id) : [...state.favorites,id]; write("devshelf-favorites",state.favorites); toast(state.favorites.includes(id) ? "Сохранено в избранное ★" : "Убрано из избранного"); render(); });
$("#theme-toggle").addEventListener("click", () => { document.body.classList.toggle("light"); const light = document.body.classList.contains("light"); $("#theme-toggle").textContent = light ? "☀" : "☾"; write("devshelf-theme",light ? "light" : "dark"); });
if (read("devshelf-theme","dark") === "light") { document.body.classList.add("light"); $("#theme-toggle").textContent = "☀"; }
$("#menu-toggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
document.addEventListener("keydown", e => { if (e.key === "/" && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) { e.preventDefault(); $("#search").focus(); } if (e.key === "Escape") { $("#sidebar").classList.remove("open"); if (document.activeElement === $("#search")) $("#search").blur(); } });
document.addEventListener("click", e => { if (innerWidth < 760 && $("#sidebar").classList.contains("open") && !$("#sidebar").contains(e.target) && !$("#menu-toggle").contains(e.target)) $("#sidebar").classList.remove("open"); });
render();
