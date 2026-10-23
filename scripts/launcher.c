#define UNICODE
#define _UNICODE
#include <windows.h>
#include <shellapi.h>
#include <stdio.h>
#include <string.h>
#include <wchar.h>

static BOOL FileExists(const WCHAR* path) {
    if (!path || !path[0]) return FALSE;
    DWORD attr = GetFileAttributesW(path);
    return (attr != INVALID_FILE_ATTRIBUTES && !(attr & FILE_ATTRIBUTE_DIRECTORY));
}

static BOOL FindInAppPaths(HKEY root, const WCHAR* exeName, WCHAR* outPath, DWORD maxLen) {
    WCHAR subkey[MAX_PATH * 2];
    swprintf(subkey, sizeof(subkey)/sizeof(WCHAR), L"SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\%ls", exeName);
    HKEY hKey;
    if (RegOpenKeyExW(root, subkey, 0, KEY_READ, &hKey) == ERROR_SUCCESS) {
        DWORD size = maxLen * sizeof(WCHAR);
        DWORD type = 0;
        if (RegQueryValueExW(hKey, NULL, NULL, &type, (LPBYTE)outPath, &size) == ERROR_SUCCESS) {
            RegCloseKey(hKey);
            // Strip surrounding quotes if present
            if (outPath[0] == L'\"') {
                size_t len = wcslen(outPath);
                if (len > 1 && outPath[len - 1] == L'\"') outPath[len - 1] = L'\0';
                memmove(outPath, outPath + 1, len * sizeof(WCHAR));
            }
            if (FileExists(outPath)) return TRUE;
        }
        RegCloseKey(hKey);
    }
    return FALSE;
}

static BOOL ResolveEnvPath(const WCHAR* envVar, const WCHAR* relative, WCHAR* outPath, DWORD maxLen) {
    WCHAR base[MAX_PATH];
    DWORD len = GetEnvironmentVariableW(envVar, base, MAX_PATH);
    if (len > 0 && len < MAX_PATH) {
        swprintf(outPath, maxLen, L"%ls\\%ls", base, relative);
        if (FileExists(outPath)) return TRUE;
    }
    return FALSE;
}

static BOOL FindBrowser(WCHAR* outPath, DWORD maxLen) {
    const WCHAR* appNames[] = {
        L"browser.exe",  // Yandex Browser
        L"msedge.exe",   // Microsoft Edge
        L"chrome.exe",   // Google Chrome
        L"brave.exe",    // Brave
        L"opera.exe"     // Opera
    };

    // 1. Registry HKCU App Paths
    for (size_t i = 0; i < sizeof(appNames)/sizeof(appNames[0]); i++) {
        if (FindInAppPaths(HKEY_CURRENT_USER, appNames[i], outPath, maxLen)) return TRUE;
    }

    // 2. Registry HKLM App Paths
    for (size_t i = 0; i < sizeof(appNames)/sizeof(appNames[0]); i++) {
        if (FindInAppPaths(HKEY_LOCAL_MACHINE, appNames[i], outPath, maxLen)) return TRUE;
    }

    // 3. Common filesystem locations
    // Yandex Browser (default install is per-user in LOCALAPPDATA)
    if (ResolveEnvPath(L"LOCALAPPDATA", L"Yandex\\YandexBrowser\\Application\\browser.exe", outPath, maxLen)) return TRUE;
    if (ResolveEnvPath(L"ProgramFiles(x86)", L"Yandex\\YandexBrowser\\Application\\browser.exe", outPath, maxLen)) return TRUE;
    if (ResolveEnvPath(L"ProgramFiles", L"Yandex\\YandexBrowser\\Application\\browser.exe", outPath, maxLen)) return TRUE;

    // Microsoft Edge (installed on every modern Windows 10/11 system)
    if (ResolveEnvPath(L"ProgramFiles(x86)", L"Microsoft\\Edge\\Application\\msedge.exe", outPath, maxLen)) return TRUE;
    if (ResolveEnvPath(L"ProgramFiles", L"Microsoft\\Edge\\Application\\msedge.exe", outPath, maxLen)) return TRUE;

    // Google Chrome
    if (ResolveEnvPath(L"ProgramFiles", L"Google\\Chrome\\Application\\chrome.exe", outPath, maxLen)) return TRUE;
    if (ResolveEnvPath(L"ProgramFiles(x86)", L"Google\\Chrome\\Application\\chrome.exe", outPath, maxLen)) return TRUE;
    if (ResolveEnvPath(L"LOCALAPPDATA", L"Google\\Chrome\\Application\\chrome.exe", outPath, maxLen)) return TRUE;

    // Brave
    if (ResolveEnvPath(L"ProgramFiles", L"BraveSoftware\\Brave-Browser\\Application\\brave.exe", outPath, maxLen)) return TRUE;
    if (ResolveEnvPath(L"LOCALAPPDATA", L"BraveSoftware\\Brave-Browser\\Application\\brave.exe", outPath, maxLen)) return TRUE;

    // Opera
    if (ResolveEnvPath(L"LOCALAPPDATA", L"Programs\\Opera\\launcher.exe", outPath, maxLen)) return TRUE;
    if (ResolveEnvPath(L"ProgramFiles", L"Opera\\launcher.exe", outPath, maxLen)) return TRUE;

    return FALSE;
}

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow) {
    WCHAR exePath[MAX_PATH];
    GetModuleFileNameW(NULL, exePath, MAX_PATH);
    WCHAR* lastSlash = wcsrchr(exePath, L'\\');
    if (lastSlash) {
        *lastSlash = L'\0';
    }

    WCHAR htmlPath[MAX_PATH];
    swprintf(htmlPath, MAX_PATH, L"%ls\\devshelf-core.html", exePath);

    // Extract embedded devshelf-core.html if it doesn't already exist or has 0 bytes
    DWORD attrib = GetFileAttributesW(htmlPath);
    BOOL needExtract = (attrib == INVALID_FILE_ATTRIBUTES);
    if (!needExtract) {
        HANDLE hFile = CreateFileW(htmlPath, GENERIC_READ, FILE_SHARE_READ, NULL, OPEN_EXISTING, 0, NULL);
        if (hFile != INVALID_HANDLE_VALUE) {
            LARGE_INTEGER sz;
            if (GetFileSizeEx(hFile, &sz) && sz.QuadPart < 1000) {
                needExtract = TRUE;
            }
            CloseHandle(hFile);
        }
    }

    if (needExtract) {
        HRSRC hRes = FindResourceW(NULL, MAKEINTRESOURCEW(101), MAKEINTRESOURCEW(10));
        if (hRes) {
            HGLOBAL hData = LoadResource(NULL, hRes);
            if (hData) {
                DWORD size = SizeofResource(NULL, hRes);
                void* p = LockResource(hData);
                if (p && size > 0) {
                    FILE* f = _wfopen(htmlPath, L"wb");
                    if (f) {
                        fwrite(p, 1, size, f);
                        fclose(f);
                    }
                }
            }
        }
    }

    // Convert htmlPath to valid file:/// URI with forward slashes
    WCHAR fileUri[MAX_PATH + 16];
    swprintf(fileUri, sizeof(fileUri)/sizeof(WCHAR), L"file:///%ls", htmlPath);
    for (int i = 8; fileUri[i] != L'\0'; i++) {
        if (fileUri[i] == L'\\') fileUri[i] = L'/';
    }

    // Isolate user data profile in %TEMP%\DevShelf_Profile so Chromium doesn't dock into existing browser tabs
    WCHAR tempDir[MAX_PATH];
    DWORD tempLen = GetTempPathW(MAX_PATH, tempDir);
    WCHAR profileDir[MAX_PATH + 32];
    if (tempLen > 0 && tempLen < MAX_PATH) {
        swprintf(profileDir, sizeof(profileDir)/sizeof(WCHAR), L"%lsDevShelf_Profile", tempDir);
    } else {
        swprintf(profileDir, sizeof(profileDir)/sizeof(WCHAR), L"%ls\\DevShelf_Profile", exePath);
    }

    // Find full path to Chromium browser (Yandex Browser, Edge, Chrome, Brave, Opera)
    WCHAR browserPath[MAX_PATH];
    if (FindBrowser(browserPath, MAX_PATH)) {
        WCHAR cmdLine[MAX_PATH * 4];
        // --app opens as a standalone window (no address bar, no tabs, no bookmark bar)
        // --user-data-dir ensures it does NOT dock into an existing browser session
        // --window-size sets comfortable initial dimensions
        swprintf(cmdLine, sizeof(cmdLine)/sizeof(WCHAR),
            L"\"%ls\" --app=\"%ls\" --user-data-dir=\"%ls\" --window-size=1380,880 --class=DevShelf --no-first-run --no-default-browser-check",
            browserPath, fileUri, profileDir);

        STARTUPINFOW si = { sizeof(si) };
        PROCESS_INFORMATION pi = { 0 };
        if (CreateProcessW(NULL, cmdLine, NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi)) {
            CloseHandle(pi.hProcess);
            CloseHandle(pi.hThread);
            return 0;
        }
    }

    // Fallback if browser detection or CreateProcess failed: ShellExecute with default association
    ShellExecuteW(NULL, L"open", htmlPath, NULL, NULL, SW_SHOWNORMAL);
    return 0;
}
