import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import useModal from '../hooks/useModal';
import { MiddleButton } from '../styles/common';
import { getListKey } from '../util/getListKey';
import { ModalInfo } from '../module/modalInfo';
import { ReducerType } from '../module/rootReducer';

export default function Modal() {
  const { display, message, buttons } = useSelector<ReducerType, ModalInfo>((state) => state.modalInfo);
  const { closeModal } = useModal();
  return (
    <Wrapper isDisplay={display}>
      <BackGround isDisplay={display} onClick={closeModal} />
      {display && (
        <ModalBox>
          <Message>{message}</Message>
          <ButtonWrapper>
            {buttons.map((btn) => (
              <MiddleButton key={getListKey() + btn.name} onClick={btn.handler}>
                {btn.name}
              </MiddleButton>
            ))}
          </ButtonWrapper>
        </ModalBox>
      )}
    </Wrapper>
  );
}

const BackGround = styled.div<{ isDisplay: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BLACK};
  opacity: 0.8;
  overflow: hidden;
`;

const Wrapper = styled.div<{ isDisplay: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const ModalBox = styled.div`
  width: min-content;
  height: min-content;
  position: relative;
  z-index: 2;
  padding: 50px 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  width: min-content;
  line-height: 30px;
  margin-bottom: 20px;
  height: max-content;
  text-align: center;
  white-space: pre;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 60px;
  justify-content: space-evenly;
  align-items: center;
`;
