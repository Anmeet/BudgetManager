import request from 'supertest';
import App from '../app';
import IndexRoute from '@/routes/index.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 15000));
});

describe('Testing Index', () => {
  describe('[GET] /', () => {
    test('response statusCode 200', () => {
      const indexRoute = new IndexRoute();
      const app = new App([indexRoute]);

      return request(app.getServer()).get(`${indexRoute.path}`).expect(200);
    });
  });
});
