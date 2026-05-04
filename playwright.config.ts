import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests', // Коренева папка для всіх тестів
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 30000,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    headless: true,
    // ПРИБРАНО: глобальні extraHTTPHeaders, які ламали логін
  },

  projects: [
    {
      name: 'ui-tests',
      testMatch: 'e2e/**/*.spec.ts', // Запускає лише тести з папки tests/e2e
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: process.env.UI_BASE_URL || 'https://the-internet.herokuapp.com',
        // Тут немає JSON заголовків, тому логін пройде успішно
      },
    },

    {
      name: 'api-tests',
      testMatch: 'api/**/*.spec.ts', // Якщо API тести лежать у tests/api
      use: {
        baseURL: 'https://reqres.in',
        extraHTTPHeaders: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      },
    },
  ],
});
