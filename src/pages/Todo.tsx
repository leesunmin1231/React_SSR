import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import TodoList from '../components/TodoList';
import { TodoFrame } from '../styles/frame';
import { MiddleButton } from '../styles/common';
import Loading from '../components/Loading';

export default function Todo() {
  return (
    <TodoFrame>
      <TopBar>
        <Title>LOGO</Title>
        <Link to="/auth/login">
          <MiddleButton>Login</MiddleButton>
        </Link>
      </TopBar>
      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>
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

// const TodoSection = styled.section`
//   width: 700px;
//   padding-bottom: 50px;
//   margin-top: 30px;
// `;

// const Header = styled.header`
//   font-size: 40px;
//   width: 700px;
//   height: 60px;
//   text-align: center;
//   color: ${({ theme }) => theme.colors.PRIMARY};
// `;
