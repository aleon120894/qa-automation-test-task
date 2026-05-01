import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  env: process.env.ENV || 'dev',
  apiBaseUrl: process.env.API_BASE_URL!,
  uiBaseUrl: process.env.UI_BASE_URL!,
};
