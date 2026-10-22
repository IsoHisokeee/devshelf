#!/usr/bin/env python3
"""Build a static, license-attributed mirror of Russian MDN references and PHP Manual."""
from __future__ import annotations

import concurrent.futures
import html
import json
import os
import re
import shutil
import tarfile
import time
from pathlib import Path
from urllib.parse import quote, urljoin, urlsplit

import requests
from bs4 import BeautifulSoup

OUT = Path("build/reference-library")
MDN_ROOT = Path("mdn-source/files/ru/web")
PHP_TAR = Path("build/php_manual_ru.tar.gz")
MDN_BASE = "https://developer.mozilla.org"
PHP_ARCHIVE = "https://www.php.net/distributions/manual/php_manual_ru.tar.gz"
ATTRIBUTION = (
    '<aside class="license"><strong>Источник: документация MDN Web Docs</strong>. '
    'Материал подготовлен Mozilla Contributors и участниками MDN. '
    'Лицензия текста: <a href="https://creativecommons.org/licenses/by-sa/2.5/">CC BY-SA 2.5 или позднее</a>. '
    'Перенесено в локальную справочную библиотеку; ссылки и оформление адаптированы для автономной страницы. '
    '<a href="https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Attrib_copyright_license">Условия атрибуции</a>.'
)
PHP_ATTRIBUTION = (
    '<aside class="license"><strong>Источник: PHP Manual, PHP Documentation Group</strong>. '
    'Русский перевод руководства PHP. Лицензия текста: '
    '<a href="https://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 (CC BY 3.0)</a>. '
    'Исходное оформление дополнено отметкой источника. '
    '<a href="https://www.php.net/license/">Сведения о лицензии</a>.'
)
STYLE = """
:root{color-scheme:light dark}body{font:16px/1.65 system-ui,sans-serif;max-width:1120px;margin:2rem auto;padding:0 1rem;background:#0b111b;color:#e7eef8}
a{color:#78b6ff}h1,h2,h3{line-height:1.25}pre{overflow:auto;padding:1rem;background:#121c2b;border-radius:8px}code{font-family:ui-monospace,monospace}
img{max-width:100%;height:auto}.license{margin:2rem 0;padding:1rem;border:1px solid #42536b;border-radius:8px;font-size:.9rem;color:#c8d4e4}
nav{margin:1rem 0}li{margin:.3rem 0}table{border-collapse:collapse}td,th{border:1px solid #526176;padding:.4rem}
"""
SLUGS = set()
SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "DevShelf-reference-mirror/1.0 (personal learning site; contact via GitHub repository)"})


def safe_slug(slug: str) -> str:
    slug = slug.strip("/")
    if not slug or ".." in slug.split("/"):
        raise ValueError(f"Unsafe MDN slug: {slug!r}")
    return slug


def get_mdn_pages():
    roots = [
        MDN_ROOT / "html/reference",
        MDN_ROOT / "css/reference",
        MDN_ROOT / "javascript/reference",
        MDN_ROOT / "api",
    ]
    pages = {}
    for root in roots:
        if not root.exists():
            raise SystemExit(f"Expected Russian MDN source directory is missing: {root}")
        for source in root.rglob("index.md"):
            text = source.read_text(encoding="utf-8", errors="replace")
            front = text.split("---", 2)
            if len(front) < 3:
                continue
            slug_match = re.search(r"^slug:\s*['\"]?([^\r\n'\"#]+)", front[1], re.M)
            title_match = re.search(r"^title:\s*['\"]?([^\r\n'\"#]+)", front[1], re.M)
            if not slug_match:
                continue
            slug = safe_slug(slug_match.group(1))
            title = title_match.group(1).strip() if title_match else slug.rsplit("/", 1)[-1]
            pages[slug] = {"title": title, "source": str(source)}
    if len(pages) < 1000:
        raise SystemExit(f"Only {len(pages)} MDN pages found; refusing incomplete mirror.")
    global SLUGS
    SLUGS = set(pages)
    return pages


def mdn_path(slug: str) -> Path:
    return OUT / "mdn" / (safe_slug(slug) + ".html")


def fetch_mdn(item):
    slug, meta = item
    url = MDN_BASE + "/ru/docs/" + quote(slug, safe="/")
    last_error = None
    for attempt in range(4):
        try:
            response = requests.get(url, headers=SESSION.headers, timeout=45)
            if response.status_code == 404:
                return slug, meta, None, f"HTTP 404: {url}"
            if response.status_code in (429, 500, 502, 503, 504):
                delay = response.headers.get("Retry-After")
                time.sleep(max(float(delay) if delay and delay.isdigit() else 0, 5 * (attempt + 1)))
                continue
            response.raise_for_status()
            soup = BeautifulSoup(response.text, "html.parser")
            article = soup.select_one("main article") or soup.select_one("article") or soup.select_one("main")
            if not article:
                return slug, meta, None, f"No article body: {url}"
            for node in article.select("script,style,nav,button,.article-actions,.metadata,.breadcrumbs"):
                node.decompose()
            for link in article.select("a[href]"):
                href = link.get("href", "")
                absolute = urljoin(url, href)
                parts = urlsplit(absolute)
                if parts.netloc == "developer.mozilla.org" and parts.path.startswith("/ru/docs/"):
                    target = parts.path[len("/ru/docs/"):].strip("/")
                    if target and target in SLUGS:
                        link["href"] = os.path.relpath(mdn_path(target), mdn_path(slug).parent).replace("\\", "/") + (("#" + parts.fragment) if parts.fragment else "")
                    else:
                        link["href"] = absolute
                elif parts.netloc == "developer.mozilla.org" and parts.path.startswith("/en-US/docs/"):
                    link["href"] = absolute
            for media in article.select("[src]"):
                media["src"] = urljoin(url, media["src"])
            title = html.escape(meta["title"])
            body = str(article)
            source = f'<a href="{url}">Оригинальная страница «{title}»</a>'
            attribution = ATTRIBUTION.replace("Материал подготовлен", source + ". Материал подготовлен")
            index_link = os.path.relpath(OUT / "index.html", mdn_path(slug).parent).replace("\\", "/")
            doc = f'<!doctype html><html lang="ru"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{title} — DevShelf</title><style>{STYLE}</style><body><nav><a href="{index_link}">← Справочная библиотека</a></nav><h1>{title}</h1>{body}{attribution}</body></html>'
            return slug, meta, doc, None
        except Exception as exc:
            last_error = str(exc)
            time.sleep(1.5 * (attempt + 1))
    return slug, meta, None, f"{url}: {last_error}"


def write_mdn(pages):
    successes, failures = [], []
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        for slug, meta, document, error in pool.map(fetch_mdn, pages.items()):
            if error:
                failures.append({"slug": slug, "error": error})
                continue
            path = mdn_path(slug)
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(document, encoding="utf-8")
            successes.append({"slug": slug, "title": meta["title"], "path": path.relative_to(OUT).as_posix()})
    # Fail closed on an incomplete corpus. A transient upstream error must never publish a partial library.
    if failures:
        Path("build/mdn-failures.json").write_text(json.dumps(failures, ensure_ascii=False, indent=2), encoding="utf-8")
        print("Failed MDN page samples:")
        for failure in failures[:30]:
            print(f"{failure['slug']}: {failure['error']}")
        raise SystemExit(f"MDN mirror incomplete: {len(failures)} of {len(pages)} pages failed; see build/mdn-failures.json")
    return successes


def download_php():
    PHP_TAR.parent.mkdir(parents=True, exist_ok=True)
    with SESSION.get(PHP_ARCHIVE, stream=True, timeout=90) as response:
        response.raise_for_status()
        with PHP_TAR.open("wb") as out:
            for chunk in response.iter_content(1024 * 1024):
                if chunk:
                    out.write(chunk)
    php_dir = OUT / "php"
    php_dir.mkdir(parents=True, exist_ok=True)
    with tarfile.open(PHP_TAR, "r:gz") as archive:
        root = php_dir.resolve()
        members = []
        for member in archive.getmembers():
            target = (php_dir / member.name).resolve()
            if root != target and root not in target.parents:
                raise SystemExit(f"Unsafe path in PHP archive: {member.name}")
            if member.issym() or member.islnk() or member.isdev():
                continue
            members.append(member)
        archive.extractall(php_dir, members=members, filter="data")
    shutil.rmtree(PHP_TAR.parent, ignore_errors=True)
    html_files = list(php_dir.rglob("*.html"))
    if len(html_files) < 1000:
        raise SystemExit(f"PHP archive looks incomplete: only {len(html_files)} HTML pages")
    for path in html_files:
        raw = path.read_text(encoding="utf-8", errors="replace")
        relative_manual = path.relative_to(php_dir).as_posix()
        if relative_manual.startswith("php-chunked-xhtml/"):
            relative_manual = relative_manual[len("php-chunked-xhtml/"):]
        source_url = "https://www.php.net/manual/ru/" + quote(relative_manual, safe="/")
        attribution = PHP_ATTRIBUTION.replace("Русский перевод", f'<a href="{source_url}">Оригинальная страница руководства</a>. Русский перевод')
        if "</body>" in raw.lower():
            at = raw.lower().rfind("</body>")
            raw = raw[:at] + attribution + raw[at:]
        else:
            raw += PHP_ATTRIBUTION
        path.write_text(raw, encoding="utf-8")
    return len(html_files)


def write_index(mdn_pages, php_count):
    sections = {}
    for item in mdn_pages:
        slug = item["slug"]
        if slug.startswith("Web/HTML/"):
            section = "HTML"
        elif slug.startswith("Web/CSS/"):
            section = "CSS"
        elif slug.startswith("Web/JavaScript/"):
            section = "JavaScript"
        else:
            section = "Web API"
        sections.setdefault(section, []).append(item)
    chunks = []
    for section, items in sections.items():
        links = []
        for item in sorted(items, key=lambda x: x["title"].casefold()):
            href = Path("mdn") / (item["slug"] + ".html")
            links.append(f'<li><a href="{href.as_posix()}">{html.escape(item["title"])}</a></li>')
        chunks.append(f'<h2>{html.escape(section)} — {len(items)}</h2><ul>{"".join(links)}</ul>')
    php_index = '<h2>PHP — русское руководство</h2><p><a href="php/php-chunked-xhtml/index.html">Открыть руководство PHP</a> (' + str(php_count) + ' HTML-страниц)</p>'
    (OUT / "index.html").write_text(
        '<!doctype html><html lang="ru"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Полные справочники — DevShelf</title><style>' + STYLE + '</style><body><h1>Справочники DevShelf</h1><p>Русские справочники HTML, CSS, JavaScript, Web API и PHP с отдельными страницами и оглавлением. Внешние изображения и некоторые ссылки требуют подключения к интернету.</p>' + "".join(chunks) + php_index + '<h2>Лицензии и источники</h2><p>MDN Web Docs: Mozilla Contributors, CC BY-SA 2.5 или позднее. <a href="https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Attrib_copyright_license">Атрибуция и лицензирование MDN</a>.</p><p>PHP Documentation Group, русский PHP Manual, CC BY 3.0. <a href="https://www.php.net/license/">Информация о лицензии PHP</a>. Русский перевод может содержать непереведённые или устаревшие разделы; сверяйся с <a href="https://www.php.net/manual/en/">английским руководством</a>.</p><p>Счётчик: MDN ' + str(len(mdn_pages)) + ' страниц; PHP ' + str(php_count) + ' страниц.</p></body></html>',
        encoding="utf-8",
    )


def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    pages = get_mdn_pages()
    mdn_pages = write_mdn(pages)
    php_count = download_php()
    write_index(mdn_pages, php_count)
    all_files = [p for p in OUT.rglob("*") if p.is_file()]
    total = sum(p.stat().st_size for p in all_files)
    # Keep room for the live site, future changes, and Beget's account limits.
    if len(all_files) > 20000 or total > 700 * 1024 * 1024:
        raise SystemExit(f"Archive exceeds safe Beget budget: {len(all_files)} files, {total} bytes")
    manifest = {
        "mdn_pages": len(mdn_pages),
        "php_html_pages": php_count,
        "files": len(all_files) + 1,
        "bytes": total,
        "mdn_license": "CC BY-SA 2.5 or later",
        "php_license": "CC BY 3.0",
    }
    (OUT / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(manifest, ensure_ascii=False))


if __name__ == "__main__":
    main()
