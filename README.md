# DevShelf

Личная адаптивная библиотека документации по HTML, CSS, JavaScript и PHP.

## Возможности
- Поиск по названиям, описаниям, категориям и тегам.
- Фильтры по языкам и избранному.
- Светлая и тёмная темы.
- Избранное и настройки темы сохраняются в localStorage браузера.
- Адаптивный интерфейс для телефона, планшета и компьютера.
- Ссылки на официальные документации и авторитетные учебные материалы.
- Не требует сборки, сервера или зависимостей.

## Поиск по полному справочнику

Workflow `reference-archive` при сборке архива MDN и PHP Manual создаёт файл `reference-library/search-index.json` (название, раздел и путь каждой страницы). Поиск на главной загружает его при первом обращении и ищет сразу по подборке DevShelf и по всему архиву. Пока индекс не опубликован, ищется только подборка; на GitHub Pages и при открытии файла напрямую индекс не используется.

## Запуск локально
Откройте index.html в браузере.

## Публикация
Проект настроен на GitHub Pages через GitHub Actions. После первого запуска workflow проверьте Settings → Pages. На GitHub Pages публикуются только файлы сайта; архив `reference-library/` создаётся отдельным workflow только на Beget, поэтому на Pages ссылка на него скрывается.

Основной хостинг — Beget: workflow `beget-deploy.yml` загружает файлы сайта по FTPS при каждом изменении этих файлов. PHP-код на GitHub Pages не исполняется; справочник PHP и ссылки на документацию работают как обычно.

## Основные источники
- [MDN Web Docs](https://developer.mozilla.org/ru/)
- [HTML Living Standard](https://html.spec.whatwg.org/)
- [PHP Manual](https://www.php.net/manual/ru/)
- [javascript.info](https://javascript.info/)
- [ECMAScript specification](https://tc39.es/ecma262/)
