import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { Location } from 'react-router-dom';
import path from 'path';
import fs from 'fs';
import App from './App';

type Request = { url: string | Partial<Location> };
type Response = { send: (arg0: string) => void };

const manifest = JSON.parse(fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8'));

const createPage = (root: string) => `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <title>React App</title>
    </head>
    <body>
      <div id="root">
        ${root}
      </div>
      <script src="${manifest.files['main.js']}"></script>
    </body>
  </html>
  `;

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
  res.send(createPage(root)); // 클라이언트에 결과물 응답
};

const serve = express.static(path.resolve('./build'), {
  index: false, // "/"경로에서 index.html을 보여주지 않도록 설정
});

app.use(serve); // 순서 중요. serverRender 전에 위치해야한다.
app.use(serverRender);

app.listen(5050, () => {
  console.log(`Now listening on port 5050`);
});
