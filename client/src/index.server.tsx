import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { Location } from 'react-router-dom';
import App from './App';

type Request = { url: string | Partial<Location> };
type Response = { send: (arg0: string) => void };

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = (req: Request, res: Response) => {
  // 이 함수는 404가 떠야하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해준다.
  // 따라서 Not Found 처리가 반드시 이뤄져야함
  const jsx = (
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx); // 렌더링
  res.send(root); // 클라이언트에 결과물 응답
};

app.use(serverRender);

app.listen(5050, () => {
  console.log(`Now listening on port 5050`);
});
