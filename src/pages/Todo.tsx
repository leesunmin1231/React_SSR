import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import TodoList from '../components/TodoList';
import { TodoFrame } from '../styles/frame';
import { MiddleButton } from '../styles/common';

export default function Todo() {
  return (
    <TodoFrame>
      <TopBar>
        <Title>LOGO</Title>
        <Link to="/about">
          <MiddleButton>About</MiddleButton>
        </Link>
      </TopBar>
      <TodoList />
    </TodoFrame>
  );
}

const Title = styled.div`
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 30px;
  font-weight: 500;
`;

const TopBar = styled.nav`
  width: 100%;
  height: 60px;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px 1px;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 20px;
`;
