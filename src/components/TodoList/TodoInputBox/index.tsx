import React, { KeyboardEvent, useState, useRef, useEffect, RefObject } from 'react';
import styled from '@emotion/styled';
import { useMutation, useQueryClient } from 'react-query';
import type todoItemType from '../../../types/TodoItem';
import type errorResponseType from '../../../types/ErrorResponse';
import { EmojiButton, WriteDetail } from '../../../styles/common';
import { httpPost } from '../../../util/http';
import useModal from '../../../hooks/useModal';

export default function TodoInputBox() {
  const { setContent, closeModal } = useModal();
  const queryClient = useQueryClient();
  const [toggleWriteBox, setToggleWriteBox] = useState(false);
  const titleInputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const [newTodo, setNewTodo] = useState({ title: '', content: '' });

  const postNewTodoMutate = useMutation(['postNewTodo'], (todo: todoItemType) => httpPost('/todos', { ...todo }), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
    onError: (error: errorResponseType) => {
      setContent(`${error.response.status}: ${error.response.statusText}\nmessage: ${error.response.data.message}`, [
        { name: '확인', handler: closeModal },
      ]);
    },
  });
  const createNewTodo = () => {
    postNewTodoMutate.mutate(newTodo);
    setNewTodo({ title: '', content: '' });
  };

  const handleTodoSubmit = () => {
    createNewTodo();
    setToggleWriteBox(!toggleWriteBox);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return;
    const { key } = e;
    if (key === 'Enter') {
      handleTodoSubmit();
    }
  };

  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [toggleWriteBox]);
  return (
    <Wrapper displayWriteBox={toggleWriteBox}>
      {toggleWriteBox ? (
        <>
          <TitleBox>
            <InputBox
              type="text"
              placeholder="제목"
              onChange={(e) => setNewTodo((prevState) => ({ ...prevState, title: e.target.value }))}
              onKeyDown={handleKeyDown}
              value={newTodo.title}
              ref={titleInputRef}
            />
            <EmojiButton onClick={handleTodoSubmit}>✓</EmojiButton>
          </TitleBox>
          <WriteDetail
            placeholder="상세 내용을 입력하세요"
            onChange={(e) => setNewTodo((prevState) => ({ ...prevState, content: e.target.value }))}
          />
        </>
      ) : (
        <TitleBox onClick={() => setToggleWriteBox(!toggleWriteBox)}>
          <InputBox type="text" placeholder="무엇을 해야하나요?" value={newTodo.title} disabled />
          <EmojiButton>+</EmojiButton>
        </TitleBox>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div<{ displayWriteBox: boolean }>`
  width: 100%;
  height: ${({ displayWriteBox }) => (displayWriteBox ? '260px' : '60px')};
  transition: all 0.3s ease;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;
const InputBox = styled.input`
  width: 100%;
  height: 60px;
  border: 0px;
  font-size: 30px;
  padding: 0px 15px;
  &:focus {
    outline-style: none;
  }
  &::placeholder {
    user-select: none;
    color: ${({ theme }) => theme.colors.GRAY3};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.WHITE};
  }
`;
