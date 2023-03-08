import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import styled from '@emotion/styled';
import globalStyle from './styles/global';
import Todo from './pages/Todo';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AppTheme from './styles/theme';
import Modal from './components/Modal';

function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={AppTheme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyle} />
          <AppStyle>
            <Router>
              <Routes>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="/" element={<Todo />} />
              </Routes>
            </Router>
          </AppStyle>
          <Modal />
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

const AppStyle = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export default App;
