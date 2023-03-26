import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { httpGet } from '../util/http';

// 통신 에러 시 보여줄 에러 메세지의 타입
interface FetchError {
  errorMessage: string;
}

interface TodoResponseInterface {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface NewTodo {
  newTodo: TodoResponseInterface;
}

// 비동기 통신 구현
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const data = await httpGet(`/todos`);
  return data;
});

export type TodoSliceState = { loading: boolean; error: null | FetchError; todos: TodoResponseInterface[] };

const initialState: TodoSliceState = { loading: false, error: null, todos: [] };

export const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<NewTodo>) {
      return {
        ...state,
        todos: [...state.todos, action.payload.newTodo],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // 통신 중
      .addCase(fetchTodos.pending, (state) => ({ ...state, loading: true, error: null }))
      // 통신 성공
      .addCase(fetchTodos.fulfilled, (state, { payload }) => ({
        ...state,
        error: null,
        loading: false,
        todos: payload,
      }))
      // 통신 에러
      .addCase(fetchTodos.rejected, (state, { payload }) => ({
        ...state,
        error: payload as FetchError,
        loading: false,
      }));
  },
});

export const { addTodo } = todoList.actions;
export default todoList.reducer;
