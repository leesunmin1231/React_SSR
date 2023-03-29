import { combineReducers } from '@reduxjs/toolkit';
import todos from './todos';
import modalInfo from './modalInfo';

// 만들어 놓은 리듀서들을 합친다.
const reducer = combineReducers({
  todos,
  modalInfo,
});

// React에서 사용할 수 있도록 타입을 만들어 export 해준다.
export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
