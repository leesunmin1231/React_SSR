(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("react/jsx-runtime"),o=require("react-dom/server");var n=e.n(o);const i=require("express");var r=e.n(i);const s=require("react-router-dom/server"),l=require("path");var d=e.n(l);const a=require("fs");var c=e.n(a);const h=require("react-redux"),p=require("react-router-dom"),u=require("@emotion/react"),x=require("@emotion/styled");var m=e.n(x);const g=u.css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: "Noto Sans KR", sans-serif;
    color: #333;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body {
    height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  #root {
    height: 100%;
  }

  *:link {
    text-decoration: none;
  }

  a:hover {
    color: #333;
  }
`,f=require("react");var b=e.n(f);const y=require("@reduxjs/toolkit"),j=require("axios");var v=e.n(j);const w=e=>`http://localhost:8080${e}`,R=(0,y.createAsyncThunk)("todos/fetchTodos",(async()=>await async function(e){return(await v().get(e,{headers:{"Content-Type":"application/json"}})).data}(w("/todos")))),T=(0,y.createSlice)({name:"todoList",initialState:{loading:!1,error:null,todos:[]},reducers:{addTodo:(e,t)=>({...e,todos:[...e.todos,t.payload.newTodo]}),updateTodo(e,t){const o=t.payload.newTodo;return{...e,todos:e.todos.map((e=>e.id===o.id?o:e))}},removeTodo:(e,t)=>({...e,todos:e.todos.filter((e=>e.id!==t.payload))})},extraReducers:e=>{e.addCase(R.pending,(e=>({...e,loading:!0,error:null}))).addCase(R.fulfilled,((e,{payload:t})=>({...e,error:null,loading:!1,todos:t}))).addCase(R.rejected,((e,{payload:t})=>({...e,error:t,loading:!1})))}}),{addTodo:k,removeTodo:A,updateTodo:C}=T.actions,$=T.reducer,E=m().button`
  width: 110px;
  height: 32px;
  border-radius: 5px;
  border: 0px solid;
  background-color: ${({theme:e})=>e.colors.PRIMARY};
  color: ${({theme:e})=>e.colors.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: 7px 10px;
  font-size: 14px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${({theme:e})=>e.colors.PRIMARY_DARK};
  }
  &:active:enabled {
    filter: brightness(0.7);
  }
  &:disabled {
    background-color: ${({theme:e})=>e.colors.GRAY2};
  }
`,D=m().button`
  width: 50px;
  height: 30px;
  cursor: pointer;
  color: ${({isDelete:e})=>e?({theme:e})=>e.colors.RED:({theme:e})=>e.colors.PRIMARY_DARK};
  border: 0px;
  background-color: ${({theme:e})=>e.colors.WHITE};
  border-radius: 5px;
  &:hover {
    background-color: ${({theme:e})=>e.colors.GRAY4};
  }
  &:active {
    filter: brightness(0.7);
  }
`,I=m().button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: 0px;
  background-color: ${({theme:e})=>e.colors.WHITE};
  border-radius: 30px;
  font-size: 20px;
  color: ${({theme:e})=>e.colors.PRIMARY};
  &:hover {
    background-color: ${({theme:e})=>e.colors.GRAY4};
  }
  &:active {
    filter: brightness(0.7);
  }
`,S=m().textarea`
  width: 100%;
  height: 200px;
  resize: none;
  border: 0px;
  border-top: 1px solid ${({theme:e})=>e.colors.GRAY3};
  font-size: 16px;
  padding: 10px 15px;
  &:focus {
    outline-style: none;
  }
  &::placeholder {
    user-select: none;
    color: ${({theme:e})=>e.colors.GRAY3};
  }
  &:disabled {
    background-color: ${({theme:e})=>e.colors.WHITE};
  }
`;function q(){const[e,o]=(0,f.useState)(!1),n=(0,f.useRef)(null),[i,r]=(0,f.useState)({title:"",content:""}),s=(0,h.useDispatch)(),l=()=>{(async()=>{const e=await async function(e,t){return(await v().post(e,t,{headers:{"Content-Type":"application/json"}})).data}(w("/todos"),{...i});s(k({newTodo:e})),r({title:"",content:""})})(),o(!e)};return(0,f.useEffect)((()=>{n.current&&n.current.focus()}),[e]),(0,t.jsx)(Y,{displayWriteBox:e,children:e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(F,{children:[(0,t.jsx)(P,{type:"text",placeholder:"제목",onChange:e=>r((t=>({...t,title:e.target.value}))),onKeyDown:e=>{if(e.nativeEvent.isComposing)return;const{key:t}=e;"Enter"===t&&l()},value:i.title,ref:n}),(0,t.jsx)(I,{onClick:l,children:"✓"})]}),(0,t.jsx)(S,{placeholder:"상세 내용을 입력하세요",onChange:e=>r((t=>({...t,content:e.target.value})))})]}):(0,t.jsxs)(F,{onClick:()=>o(!e),children:[(0,t.jsx)(P,{type:"text",placeholder:"무엇을 해야하나요?",value:i.title,disabled:!0}),(0,t.jsx)(I,{children:"+"})]})})}const Y=m().div`
  width: 100%;
  height: ${({displayWriteBox:e})=>e?"260px":"60px"};
  transition: all 0.3s ease;
`,F=m().div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`,P=m().input`
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
    color: ${({theme:e})=>e.colors.GRAY3};
  }
  &:disabled {
    background-color: ${({theme:e})=>e.colors.WHITE};
  }
`,B=(0,y.createSlice)({name:"modalInfo",initialState:{display:!1,message:"",buttons:[]},reducers:{addContent:(e,t)=>({...t.payload})}}),{addContent:G}=B.actions,M=B.reducer;function W(){const e=(0,h.useDispatch)();return{setContent:(t,o=[])=>{e(G({display:!0,message:t,buttons:o}))},closeModal:()=>{e(G({display:!1,message:"",buttons:[]}))}}}const H=b().memo((function({currentTodo:e}){const[o,n]=(0,f.useState)({title:e.title,content:e.content}),[i,r]=(0,f.useState)(!1),[s,l]=(0,f.useState)(!1),[d,a]=(0,f.useState)(!1),{setContent:c,closeModal:p}=W(),u=(0,h.useDispatch)(),x=async()=>{r(!1),l(!1);const t=await async function(e,t){return(await v().put(e,t,{headers:{"Content-Type":"application/json"}})).data}(w(`/todos/${e.id}`),o);u(C({newTodo:t}))},m=()=>{u(A(e.id)),async function(e){(await v().delete(e,{headers:{"Content-Type":"application/json"}})).data}(w(`/todos/${e.id}`)),p()};return(0,f.useEffect)((()=>{let e;return s?a(!0):e=setTimeout((()=>a(!1)),200),()=>{clearTimeout(e)}}),[s]),(0,t.jsxs)(L,{displayWriteBox:s,children:[i?(0,t.jsxs)(O,{children:[(0,t.jsx)(z,{type:"text",placeholder:"",onChange:e=>n((t=>({...t,title:e.target.value}))),onKeyDown:e=>{if(e.nativeEvent.isComposing)return;const{key:t}=e;"Enter"===t&&x()},value:o.title,autoFocus:!0}),(0,t.jsx)(I,{onClick:x,children:"✓"})]}):(0,t.jsxs)(O,{children:[(0,t.jsx)(N,{onClick:()=>l(!s),children:(0,t.jsx)(J,{children:e.title})}),(0,t.jsxs)(K,{children:[(0,t.jsx)(D,{onClick:()=>(r(!0),void l(!0)),isDelete:!1,children:"수정"}),(0,t.jsx)(D,{onClick:()=>{c("삭제 하시겠습니까?",[{name:"취소",handler:p},{name:"삭제",handler:m}])},isDelete:!0,children:"삭제"})]})]}),(0,t.jsx)(_,{displayWriteBox:s,children:d&&(0,t.jsx)(S,{placeholder:"",onChange:e=>n((t=>({...t,content:e.target.value}))),value:o.content,disabled:!i})})]})})),L=m().div`
  width: 100%;
  height: ${({displayWriteBox:e})=>e?"255px":"55px"};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({theme:e})=>e.colors.GRAY3};
`,O=m().div`
  display: flex;
  width: 95%;
  height: 54px;
  align-items: center;
`,_=m().div`
  width: 100%;
  height: ${({displayWriteBox:e})=>e?"200px":"0px"};
  transition: all 0.3s ease;
`,z=m().input`
  width: 100%;
  height: 54px;
  border: 0px;
  font-size: 30px;
  &:focus {
    outline-style: none;
  }
  &::placeholder {
    user-select: none;
    color: ${({theme:e})=>e.colors.GRAY4};
  }
`,K=m().div`
  width: 100px;
  display: flex;
  align-items: center;
`,N=m().button`
  flex: 1;
  border: 0px;
  background-color: ${({theme:e})=>e.colors.WHITE};
  text-align: left;
  cursor: pointer;
`,J=m().div`
  color: ${({theme:e})=>e.colors.BLACK};
  font-size: 25px;
`,U=require("react-loading");var Q=e.n(U);function V(){return(0,t.jsx)(X,{children:(0,t.jsx)(Q(),{type:"spin",color:"#5A85E3"})})}const X=m().div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,Z=(0,f.createContext)(null),ee=Z,te=b().memo((function(){const{setContent:e,closeModal:o}=W(),n=(0,h.useDispatch)();(e=>{const t=(0,f.useContext)(Z);t&&(t.done||t.promises.push(Promise.resolve(n(R()))))})();const{todos:i,loading:r}=(0,h.useSelector)((e=>e.todos));return(0,f.useEffect)((()=>{if(!i||0===i.length)try{n(R())}catch(t){e(`${t}`,[{name:"Confirm",handler:o}])}}),[n,i]),(0,t.jsxs)(ne,{children:[(0,t.jsx)(ie,{children:"Todo List"}),(0,t.jsxs)(oe,{children:[(0,t.jsx)(q,{}),r?(0,t.jsx)(V,{}):i&&i.map((e=>(0,t.jsx)(H,{currentTodo:e},e.id)))]})]})})),oe=m().div`
  width: 100%;
  height: min-content;
  background-color: ${({theme:e})=>e.colors.WHITE};
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 5px 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ne=m().section`
  width: 700px;
  padding-bottom: 50px;
  margin-top: 30px;
`,ie=m().header`
  font-size: 40px;
  width: 700px;
  height: 60px;
  text-align: center;
  color: ${({theme:e})=>e.colors.PRIMARY};
`,re=m().div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,se=m().div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;function le(){return(0,t.jsxs)(se,{children:[(0,t.jsxs)(ae,{children:[(0,t.jsx)(de,{children:"LOGO"}),(0,t.jsx)(p.Link,{to:"/about",children:(0,t.jsx)(E,{children:"About"})})]}),(0,t.jsx)(te,{})]})}const de=m().div`
  color: ${({theme:e})=>e.colors.WHITE};
  font-size: 30px;
  font-weight: 500;
`,ae=m().nav`
  width: 100%;
  height: 60px;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px 1px;
  background-color: ${({theme:e})=>e.colors.PRIMARY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 20px;
`;function ce(){return(0,t.jsxs)(re,{children:[(0,t.jsx)("div",{children:"About"}),(0,t.jsx)(p.Link,{to:"/",children:(0,t.jsx)(E,{children:"Todo"})})]})}function he(){return(0,t.jsx)("div",{children:"NotFound"})}const pe={colors:{PRIMARY:"#5A85E3",PRIMARY_DARK:"#1F59D7",PRIMARY_LIGHT:"#B5C8F3",OFF_WHITE:"#F7F4FD",WHITE:"#FFFFFF",BLACK:"#333333",GRAY1:"#888888",GRAY2:"#BBBBBB",GRAY3:"#D7D7D7",GRAY4:"#EEEEEE",GRAY5:"#F5F5F5",RED:"#C83A68",LIGHT_BLACK:"#464646",POINT_COLOR:"#C75DE0",BACKGROUND:"#f8f9f9"}};function ue(){const{display:e,message:o,buttons:n}=(0,h.useSelector)((e=>e.modalInfo)),{closeModal:i}=W();return(0,t.jsxs)(me,{isDisplay:e,children:[(0,t.jsx)(xe,{isDisplay:e,onClick:i}),e&&(0,t.jsxs)(ge,{children:[(0,t.jsx)(fe,{children:o}),(0,t.jsx)(be,{children:n.map((e=>(0,t.jsx)(E,{onClick:e.handler,children:e.name},(()=>{const e=Math.random();return String(e)})()+e.name)))})]})]})}const xe=m().div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  display: ${({isDisplay:e})=>e?"flex":"none"};
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.BLACK};
  opacity: 0.8;
  overflow: hidden;
`,me=m().div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${({isDisplay:e})=>e?"flex":"none"};
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,ge=m().div`
  width: min-content;
  height: min-content;
  position: relative;
  z-index: 2;
  padding: 50px 30px;
  border-radius: 10px;
  background-color: ${({theme:e})=>e.colors.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,fe=m().div`
  width: min-content;
  line-height: 30px;
  margin-bottom: 20px;
  height: max-content;
  text-align: center;
  white-space: pre;
`,be=m().div`
  display: flex;
  width: 300px;
  height: 60px;
  justify-content: space-evenly;
  align-items: center;
`,ye=m().div`
  height: 100%;
  width: 100%;
  position: absolute;
`,je=function(){return(0,t.jsxs)(u.ThemeProvider,{theme:pe,children:[(0,t.jsx)(u.Global,{styles:g}),(0,t.jsx)(ye,{children:(0,t.jsxs)(p.Routes,{children:[(0,t.jsx)(p.Route,{path:"/about",element:(0,t.jsx)(ce,{})}),(0,t.jsx)(p.Route,{path:"/",element:(0,t.jsx)(le,{})}),(0,t.jsx)(p.Route,{path:"*",element:(0,t.jsx)(he,{})})]})}),(0,t.jsx)(ue,{})]})},ve=(0,y.combineReducers)({todos:$,modalInfo:M}),we=JSON.parse(c().readFileSync(d().resolve("./build/asset-manifest.json"),"utf8")),Re=r()(),Te=r().static(d().resolve("./build"),{index:!1});Re.use(Te),Re.use((async(e,o)=>{const i={done:!1,promises:[]},r=(0,y.configureStore)({reducer:ve,preloadedState:{todos:undefined}});const l=(0,t.jsx)(ee.Provider,{value:i,children:(0,t.jsx)(h.Provider,{store:r,children:(0,t.jsx)(s.StaticRouter,{location:e.url,children:(0,t.jsx)(je,{})})})});n().renderToStaticMarkup(l);try{await Promise.all(i.promises)}catch(e){return o.status(500)}i.done=!0;const d=n().renderToString(l),a=`<script>__PRELOADED_STATE__=${JSON.stringify(r.getState().todos).replace(/</g,"\\u003c")}<\/script>`;return o.send(((e,t)=>`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><link rel="shortcut icon" href="/favicon.ico" /><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/><meta name="theme-color" content="#000000" /><title>React App</title></head><body><div id="root">${e}</div>${t}<script src="${we.files["main.js"]}"><\/script></body></html>`)(d,a))})),Re.listen(3e3,(()=>{console.log("Now listening on port 3000")}))})();