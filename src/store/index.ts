import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import {ExerciseListReducers} from './slices/exercise';
import createDebugger from 'redux-flipper';

export const store = configureStore({
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
