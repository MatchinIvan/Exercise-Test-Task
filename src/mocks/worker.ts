import { rest, setupWorker } from 'msw';
import { BASE_URL } from '../constants';

const worker = setupWorker(
  rest.get(BASE_URL, (req, res, ctx) => {

  })
);

worker.start();
