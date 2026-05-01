import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 30000,

  reporter: 'html',

  use: {
    // Якщо UI_BASE_URL не задано, буде використано reqres як фолбек для API тестів
    baseURL: process.env.UI_BASE_URL || 'https://reqres.in',
    trace: 'on-first-retry',
    headless: true,
    // Додаємо заголовки за замовчуванням для API
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
