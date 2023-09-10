import { RootState } from '../index';

const getExerciseState = (state: RootState) => state.exercises.data;
const getExerciseLoadingState = (state: RootState) => state.exercises.loading;

export const ExerciseSelectors = {
  getExerciseState,
  getExerciseLoadingState
}
