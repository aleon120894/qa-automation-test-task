import { test, expect } from '@playwright/test';
import { ReqResClient } from '../api/clients/reqres.client';

test.describe('Auth API', () => {
  test('fake login', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);
   });
});
