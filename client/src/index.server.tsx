import React from 'react';
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(<div>Server Side Rendering</div>);

console.log(html);
