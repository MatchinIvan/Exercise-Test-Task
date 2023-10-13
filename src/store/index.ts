import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { ExerciseListReducers } from './slices/exercise';
import createDebugger from 'redux-flipper';

export const reduxStore = configureStore({
  reducer: {
    exercises: ExerciseListReducers,
  },
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });
    if (__DEV__) {
      middlewares.push(createDebugger());
    }
    return middlewares;
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
export type AppStore = typeof reduxStore;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
