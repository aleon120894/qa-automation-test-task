import { test, expect } from '@playwright/test';

test.describe('Resources API', () => {
  test('get users list and validate schema', async ({ request }) => {
    const start = Date.now();

    const response = await request.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    const duration = Date.now() - start;

    expect(response.status()).toBe(200);
    expect(duration).toBeLessThan(1000);

    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('name');
    expect(body[0]).toHaveProperty('email');
  });

  test('create resource', async ({ request }) => {
    const response = await request.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        data: {
          title: 'morpheus',
          body: 'leader',
          userId: 1,
        },
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.title).toBe('morpheus');
  });
});
