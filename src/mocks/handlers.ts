import { rest } from 'msw';
import { BASE_URL } from '../constants';

const mockUrl = BASE_URL + 'exercises';

export const handlers = [
  rest.get(mockUrl, (req, res, context) => {
    const mockResponse = [
      {
        name: 'Incline Hammer Curls',
        type: 'strength',
        muscle: 'biceps',
        equipment: 'dumbbell',
        difficulty: 'beginner',
        instructions:
          'Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.',
      },
      {
        name: 'Wide-grip barbell curl',
        type: 'strength',
        muscle: 'biceps',
        equipment: 'barbell',
        difficulty: 'beginner',
        instructions:
          'Stand up with your torso upright while holding a barbell at the wide outer handle. The palm of your hands should be facing forward. The elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations:  You can also perform this movement using an E-Z bar or E-Z attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes.',
      },
    ];

    const params = req.url.searchParams;

    const query = params.get('muscle');

    if (query === 'biceps') {
      return res(context.status(200), context.json(mockResponse));
    } else {
      return res(context.status(404), context.json({ message: 'Not Found' }));
    }
  }),

  rest.get(mockUrl, (req, res, ctx) => {
    const errorMessage = 'Bad Request: Invalid request data';
    return res(ctx.status(400), ctx.json({ message: errorMessage }));
  }),
];
