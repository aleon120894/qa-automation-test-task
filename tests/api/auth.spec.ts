import { test, expect } from '@playwright/test';
import { ReqResClient } from '../api/clients/reqres.client';

test.describe('Auth API', () => {
  test('successful login', async ({ request }) => {
    console.log('DEBUG: ReqResClient is:', ReqResClient);
    const client = new ReqResClient(request);

    const response = await client.login(
      'eve.holt@reqres.in',
      'cityslicka'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.token).toBeDefined();
  });

  test('login with invalid data', async ({ request }) => {
    const client = new ReqResClient(request);

    const response = await client.login('peter@klaven', '');

    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.error).toBeDefined();
  });
});
