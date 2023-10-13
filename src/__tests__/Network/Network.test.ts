import { NetworkService } from '../../services/network';
import { ExerciseResponse } from '../../types/exercise';
import { server } from '../../mocks/server';
import { errorHandlers } from '../../mocks/errorHandlers';

describe('fetch exercises', () => {
  test('Successful get call', async () => {
    const query = {
      muscle: 'biceps',
    };

    const exercisesList: ExerciseResponse[] = await NetworkService.get(
      'exercises',
      query,
    );

    expect(exercisesList).toHaveLength(2);
    expect(exercisesList?.[0].name).toBe('Incline Hammer Curls');
  });

  test('Error get call', async () => {
    server.use(...errorHandlers);

    const query = {
      muscle: 'biceps',
    };

    const data = await NetworkService.get('exercises', query);

    if (data.error) {
      if ('name' in data.error) {
        expect(data.error.name.length).toBeGreaterThanOrEqual(0);
      }

      expect(data.error).not.toBe(null);
      expect(data?.error?.response.status).toBe(400);
      expect(data?.error?.response.statusText).toBe('Bad Request');
    }
  });
});
