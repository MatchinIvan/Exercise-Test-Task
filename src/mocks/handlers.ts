import {rest} from 'msw';
import {BASE_URL} from '../constants';

export const handlers = [
  // Handles a POST /login request
  rest.post(BASE_URL, null),

  // Handles a GET /user request
  rest.get(BASE_URL, null),
];
