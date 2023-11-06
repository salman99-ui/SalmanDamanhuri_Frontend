import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

export default setupServer([
  http.get('https://jsonplaceholder.typicode.com/users', () =>
    HttpResponse.json({
      data: 'ok',
    })
  ),
]);
