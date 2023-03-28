import { configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import { TodoSliceState } from './todos';

export type RootState = StateFromReducersMapObject<typeof reducer>;

export function initStore(preloadedState?: TodoSliceState) {
  return configureStore({
    reducer,
    preloadedState: {
      todos: preloadedState,
    },
  });
}

type Store = ReturnType<typeof initStore>;

export type AppDispatch = Store['dispatch'];
