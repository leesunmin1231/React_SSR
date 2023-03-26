import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../module/store';
import { ReducerType } from '../../module/rootReducer';
import { fetchTodos, TodoSliceState } from '../../module/todos';
import TodoInputBox from './TodoInputBox';
import TodoItemBox from './TodoItemBox';
import Loading from '../Loading';
import useModal from '../../hooks/useModal';
import todoResponseType from '../../types/TodoResponse';
import { Preloader } from '../../lib/PreloaderContext';

function TodoList() {
  const { setContent, closeModal } = useModal();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, todos } = useSelector<ReducerType, TodoSliceState>((state) => state.todos);
  useEffect(() => {
    if (todos && todos.length !== 0) return;
    try {
      dispatch(fetchTodos());
    } catch (e) {
      setContent(`${e}`, [{ name: 'Confirm', handler: closeModal }]);
    }
  }, [dispatch, todos]);
  return (
    <TodoSection>
      <Header>Todo List</Header>
      <ListBox>
        <TodoInputBox />
        {loading ? (
          <Loading />
        ) : (
          todos && todos.map((item: todoResponseType) => <TodoItemBox key={item.id} currentTodo={item} />)
        )}
        <Preloader resolve={() => dispatch(fetchTodos)} />
      </ListBox>
    </TodoSection>
  );
}

export default React.memo(TodoList);

const ListBox = styled.div`
  width: 100%;
  height: min-content;
  background-color: ${({ theme }) => theme.colors.WHITE};
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 5px 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoSection = styled.section`
  width: 700px;
  padding-bottom: 50px;
  margin-top: 30px;
`;

const Header = styled.header`
  font-size: 40px;
  width: 700px;
  height: 60px;
  text-align: center;
  color: ${({ theme }) => theme.colors.PRIMARY};
`;
