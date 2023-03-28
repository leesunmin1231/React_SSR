import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { Location } from 'react-router-dom';
import path from 'path';
import fs from 'fs';
import { Provider } from 'react-redux';
import App from './App';
import { initStore } from './module/store';
import { TodoSliceState } from './module/todos';
import PreloadContext, { ServerContext } from './lib/PreloaderContext';

type Request = { url: string | Partial<Location> };
type Response = {
  status(arg0: number): void;
  send: (arg0: string) => void;
};

declare global {
  interface Window {
    __PRELOADED_STATE__?: TodoSliceState;
  }
}

const manifest = JSON.parse(fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8'));

const createPage = (root: string, stateScript: string) => `
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
      ${stateScript}
      <script src="${manifest.files['main.js']}"></script>
    </body>
  </html>
  `;

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = async (req: Request, res: Response) => {
  // 이 함수는 404가 떠야하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해준다.
  // 따라서 Not Found 처리가 반드시 이뤄져야함
  const preloadContext: ServerContext = {
    done: false,
    promises: [],
  };
  const store = initStore();
  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );
  ReactDOMServer.renderToStaticMarkup(jsx);
  try {
    await Promise.all(preloadContext.promises);
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx); // 렌더링
  const stateString = JSON.stringify(store.getState().todos).replace(/</g, '\\u003c');
  const stateScript = `<script>__PRELOADED_STATE__=${stateString}</script>`; // 리덕스 초기 상태를 스크립트로 주입
  return res.send(createPage(root, stateScript)); // 클라이언트에 결과물 응답
};

const serve = express.static(path.resolve('./build'), {
  index: false, // "/"경로에서 index.html을 보여주지 않도록 설정
});

app.use(serve); // 순서 중요. serverRender 전에 위치해야한다.
app.use(serverRender);

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log(`Now listening on port 3000`);
});
