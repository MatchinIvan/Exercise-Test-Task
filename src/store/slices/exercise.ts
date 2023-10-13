import { createSlice } from '@reduxjs/toolkit';
import { getExerciseList } from '../thunks/exercise';
import { ExerciseResponse } from '../../types/exercise';

export interface ExerciseInitialStateType {
  data: ExerciseResponse[];
  loading: boolean;
}

export const initialExerciseState: ExerciseInitialStateType = {
  data: [],
  loading: false,
};

export const ExerciseSlice = createSlice({
  name: 'exerciseList',
  initialState: initialExerciseState,
  reducers: {
    clear: () => {
      return {
        ...initialExerciseState,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getExerciseList.fulfilled, (state, action) => {
        return {
          data: action.payload as ExerciseResponse[],
          loading: false,
        };
      })
      .addCase(getExerciseList.pending, () => {
        return {
          data: [],
          loading: true,
        };
      })
      .addCase(getExerciseList.rejected, () => {
        return {
          data: [],
          loading: false,
        };
      });
  },
});

export const ExerciseListActions = ExerciseSlice.actions;
export const ExerciseListReducers = ExerciseSlice.reducer;
