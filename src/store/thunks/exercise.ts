import {createAsyncThunk} from '@reduxjs/toolkit';
import {NetworkService} from '../../services/network';
import {Endpoint} from '../../constants';
import {ExerciseRequestOptions, ExerciseResponse} from '../../types/exercise';

export const getExerciseList = createAsyncThunk(
  'exercise/getList',
  async (
    options?: ExerciseRequestOptions,
  ): Promise<ExerciseResponse[] | null> => {
    try {
      return await NetworkService.get(Endpoint.exercises, options);
    } catch (e) {
      return Promise.reject('Error');
    }
  },
);
