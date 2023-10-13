import { rest } from 'msw';
import { BASE_URL } from '../constants';

const mockUrl = BASE_URL + 'exercises';

export const errorHandlers = [
  rest.get(mockUrl, (req, res, context) => {
    const params = req.url.searchParams;

    const query = params.get('muscle');

    if (query === 'biceps') {
      const errorMessage = 'Bad Request';
      return res(context.status(400), context.json({ message: errorMessage }));
    }
  }),
];
