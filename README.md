# QA Automation Framework

Сучасний фреймворк для автоматизації тестування API та UI, побудований на базі **Playwright** та **TypeScript**. Проект створений як демонстрація підходів до архітектури тестування (POM, API Clients, CI/CD).

## 🛠 Stack
- **Language:** TypeScript
- **Test Runner:** [Playwright](https://playwright.dev/)
- **Env Management:** [Dotenvx](https://dotenvx.com/)
- **CI/CD:** GitHub Actions
- **Reporting:** Playwright HTML Report

## 🏗 Project Structure
```text
├── .github/workflows/    # CI/CD pipelines (GitHub Actions)
├── api/
│   ├── clients/          # API Client classes (Encapsulation of requests)
├── e2e/
│   ├── pages/            # Page Object Models (UI Locators and Actions)
├── tests/
│   ├── api/              # API test suites (ReqRes.in)
│   ├── e2e/              # UI/End-to-End tests (HerokuApp)
├── .env                  # Environment variables
└── playwright.config.ts  # Playwright configuration ```

## 🚀 Швидкий старт

### Попередні вимоги
*   Встановлений **Node.js** (v18 або новіше)

### Інсталяція
```bash
# Клонування проекту
git clone <your-repo-url>
cd qa-automation-test-task

# Встановлення залежностей
npm install

# Встановлення необхідних браузерів Playwright
npx playwright install --with-deps

Запуск тестів
Bash
# Запуск усіх тестів (API + UI)
npx playwright test

# Запуск через dotenvx (якщо змінні зашифровані)
dotenvx run -- npx playwright test

# Відкриття останнього звіту після завершення
npx playwright show-report

# 📈 Стратегія тест-покриття (Частина 4.2)
## 1. Підхід до автоматизації на новому проекті
### Мій підхід базується на стратегії Risk-Based Testing:

 Аналіз критичного шляху: Першочергове покриття функцій, що є критичними для бізнесу (авторизація, створення основних ресурсів).

 Smoke API Layer: Створення швидких тестів на ключові ендпоінти для отримання миттєвого фідбеку про стан бекенду.

 Progressive UI Automation: Автоматизація стабільних "Happy Path" сценаріїв на інтерфейсі користувача.

## 2. Розподіл між API та E2E
API Тести: Використовуються для перевірки бізнес-логіки, валідації схем даних та статус-кодів. Це фундамент фреймворку завдяки їхній високій швидкості та стабільності.

E2E (UI) Тести: Перевіряють інтеграцію всіх систем (фронтенд + бекенд) через реальні дії користувача в браузері.

## 3. Робота з тестовими даними
Ізоляція: Кожен тест незалежний. Я уникаю використання спільних даних, що можуть змінюватися в процесі виконання інших тестів.

Підготовка (Pre-conditions): Для UI тестів дані готуються через API клієнти, що значно пришвидшує виконання порівняно з підготовкою даних через інтерфейс.

Cleanup: Очищення середовища виконується в блоках afterAll або через API-запити в кінці сесії.

# ⚙️ CI/CD Інтеграція (Частина 4.1)
Фреймворк інтегровано з GitHub Actions (конфігурація у файлі .github/workflows/playwright.yml).

Особливості пайплайну:

Автоматизація: Запуск при кожному push у main гілку або при створенні pull request.

Контроль якості: Пайплайн встановлює чисте оточення через npm ci, інсталює браузери та виконує тести в паралельному режимі.

Артефакти: Після кожного запуску генерується HTML-звіт. У разі падіння тесту звіт автоматично зберігається як артефакт GitHub терміном на 30 днів для аналізу помилок.


