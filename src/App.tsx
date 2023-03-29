import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import globalStyle from './styles/global';
import Todo from './pages/Todo';
import About from './pages/About';
import AppTheme from './styles/theme';
import Modal from './components/Modal';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Global styles={globalStyle} />
      <AppStyle>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Todo />} />
        </Routes>
      </AppStyle>
      <Modal />
    </ThemeProvider>
  );
}

const AppStyle = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export default App;
