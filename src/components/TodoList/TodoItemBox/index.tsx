import React, { useState, KeyboardEvent, useEffect } from 'react';
import styled from '@emotion/styled';
import { useMutation, useQueryClient } from 'react-query';
import { SmallButton, EmojiButton, WriteDetail } from '../../../styles/common';
import type todoResponseType from '../../../types/TodoResponse';
import type todoItemType from '../../../types/TodoItem';
import type errorResponseType from '../../../types/ErrorResponse';
import useModal from '../../../hooks/useModal';
import { httpDelete, httpPut } from '../../../util/http';

function TodoItemBox({ currentTodo }: { currentTodo: todoResponseType }) {
  const queryClient = useQueryClient();
  const [newTodo, setNewTodo] = useState({ title: currentTodo.title, content: currentTodo.content });
  const [editing, setEditing] = useState(false);
  const [toggleContentBox, setToggleContentBox] = useState(false);
  const [openContentBox, setOpenContentBox] = useState(false);
  const { setContent, closeModal } = useModal();

  const updateTodoMutate = useMutation(
    'updateTodo',
    (todo: todoItemType) => httpPut(`/todos/${currentTodo.id}`, todo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos']);
      },
      onError: (error: errorResponseType) => {
        setContent(`${error.response.status}: ${error.response.statusText}\nmessage: ${error.response.data.message}`, [
          { name: '확인', handler: closeModal },
        ]);
      },
    }
  );

  const deleteTodoMutate = useMutation('deleteTodo', () => httpDelete(`/todos/${currentTodo.id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
    onError: (error: errorResponseType) => {
      setContent(`${error.response.status}: ${error.response.statusText}\nmessage: ${error.response.data.message}`, [
        { name: '확인', handler: closeModal },
      ]);
    },
  });

  const handleTodoSubmit = () => {
    setEditing(false);
    setToggleContentBox(false);
    updateTodoMutate.mutate(newTodo);
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return;
    const { key } = e;
    if (key === 'Enter') {
      handleTodoSubmit();
    }
  };

  const editHandler = () => {
    setEditing(true);
    setToggleContentBox(true);
  };
  const deleteTodo = () => {
    deleteTodoMutate.mutate();
    closeModal();
  };
  const deleteHandler = () => {
    setContent('삭제 하시겠습니까?', [
      { name: '취소', handler: closeModal },
      { name: '삭제', handler: deleteTodo },
    ]);
  };
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (toggleContentBox) {
      setOpenContentBox(true);
    } else {
      timer = setTimeout(() => setOpenContentBox(false), 200);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [toggleContentBox]);

  return (
    <Wrapper displayWriteBox={toggleContentBox}>
      {editing ? (
        <TitleBox>
          <InputBox
            type="text"
            placeholder=""
            onChange={(e) => setNewTodo((prevState) => ({ ...prevState, title: e.target.value }))}
            onKeyDown={handleKeyDown}
            value={newTodo.title}
            autoFocus
          />
          <EmojiButton onClick={handleTodoSubmit}>✓</EmojiButton>
        </TitleBox>
      ) : (
        <TitleBox>
          <ToggleDetailButton onClick={() => setToggleContentBox(!toggleContentBox)}>
            <IncompleteText>{currentTodo.title}</IncompleteText>
          </ToggleDetailButton>
          <ButtonWrapper>
            <SmallButton onClick={() => editHandler()} isDelete={false}>
              수정
            </SmallButton>
            <SmallButton onClick={() => deleteHandler()} isDelete>
              삭제
            </SmallButton>
          </ButtonWrapper>
        </TitleBox>
      )}
      <ContentBox displayWriteBox={toggleContentBox}>
        {openContentBox && (
          <WriteDetail
            placeholder=""
            onChange={(e) => setNewTodo((prevState) => ({ ...prevState, content: e.target.value }))}
            value={newTodo.content}
            disabled={!editing}
          />
        )}
      </ContentBox>
    </Wrapper>
  );
}

export default React.memo(TodoItemBox);

const Wrapper = styled.div<{ displayWriteBox: boolean }>`
  width: 100%;
  height: ${({ displayWriteBox }) => (displayWriteBox ? '255px' : '55px')};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.GRAY3};
`;

const TitleBox = styled.div`
  display: flex;
  width: 95%;
  height: 54px;
  align-items: center;
`;

const ContentBox = styled.div<{ displayWriteBox: boolean }>`
  width: 100%;
  height: ${({ displayWriteBox }) => (displayWriteBox ? '200px' : '0px')};
  transition: all 0.3s ease;
`;

const InputBox = styled.input`
  width: 100%;
  height: 54px;
  border: 0px;
  font-size: 30px;
  &:focus {
    outline-style: none;
  }
  &::placeholder {
    user-select: none;
    color: ${({ theme }) => theme.colors.GRAY4};
  }
`;

const ButtonWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`;

const ToggleDetailButton = styled.button`
  flex: 1;
  border: 0px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  text-align: left;
  cursor: pointer;
`;

const IncompleteText = styled.div`
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 25px;
`;
