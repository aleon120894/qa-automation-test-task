import { APIRequestContext } from '@playwright/test';

class ReqResClient {
  constructor(private request: APIRequestContext) {}

  async login(email: string, password: string) {
    return this.request.post('/api/login', { data: { email, password } });
  }
}
  