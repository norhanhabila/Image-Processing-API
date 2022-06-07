import routes from '../router';
import request from 'supertest';

describe('Router tests', () => {
  it('checks if it sends image not available when accessing a photo not in the database', () => {
    request(routes)
      .get('http://localhost:3000/?filename=ice.jpg&width=300&height=350')
      .expect('This image is not available..');
  });
});
