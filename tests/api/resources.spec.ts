import { test, expect } from '@playwright/test';

test.describe('Resources API', () => {
  test('get users list and validate schema', async ({ request }) => {
    const start = Date.now();

    const response = await request.get(
      `${process.env.API_BASE_URL}/api/users?page=2`
    );

    const duration = Date.now() - start;

    expect(response.status()).toBe(200);
    expect(duration).toBeLessThan(1000);

    const body = await response.json();

    expect(Array.isArray(body.data)).toBeTruthy();
    expect(body.data.length).toBeGreaterThan(0);

    const user = body.data[0];
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('email');
  });

  test('create user', async ({ request }) => {
    const response = await request.post(
      `${process.env.API_BASE_URL}/api/users`,
      {
        data: {
          name: 'morpheus',
          job: 'leader',
        },
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe('morpheus');
    expect(body.job).toBe('leader');
  });
});
