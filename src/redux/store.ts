import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import guessNoteSlice from './guessNoteSlice';

export const store = configureStore({
  reducer: {
    app: guessNoteSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
