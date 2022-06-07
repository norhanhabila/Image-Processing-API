import request from 'supertest';
describe('server tests', () => {
  it('shows the server is running', () => {
    request('https://localhost:3000/').get('/').expect(200);
  });
});
