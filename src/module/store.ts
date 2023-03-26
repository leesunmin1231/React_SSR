import { configureStore, StateFromReducersMapObject, PreloadedState } from '@reduxjs/toolkit';
import reducer from './rootReducer';

export type RootState = StateFromReducersMapObject<typeof reducer>;

export function initStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer,
    preloadedState,
  });
}

type Store = ReturnType<typeof initStore>;

export type AppDispatch = Store['dispatch'];
export const store = initStore();
