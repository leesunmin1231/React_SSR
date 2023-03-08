import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import TodoInputBox from './TodoInputBox';
import TodoItemBox from './TodoItemBox';
import { httpGet } from '../../util/http';
import Loading from '../Loading';
import useModal from '../../hooks/useModal';
import todoResponseType from '../../types/TodoResponse';

interface SystemError {
  code: string;
  message: string;
}

function TodoList() {
  const { setContent, closeModal } = useModal();

  const { data, isLoading } = useQuery(['todos'], () => httpGet('/todos'), {
    refetchOnWindowFocus: true,
    staleTime: 60 * 1000,
    suspense: true,
    onError: (error: SystemError) => setContent(`${error}`, [{ name: '확인', handler: closeModal }]),
  });
  return (
    <TodoSection>
      <Header>Todo List</Header>
      {isLoading ? (
        <Loading />
      ) : (
        <ListBox>
          <TodoInputBox />
          {data.map((item: todoResponseType) => (
            <TodoItemBox key={item.id} currentTodo={item} />
          ))}
        </ListBox>
      )}
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
