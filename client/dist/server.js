(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("react/jsx-runtime"),o=require("react-dom/server");var n=e.n(o);const r=require("express");var s=e.n(r);const i=require("react-router-dom/server"),l=require("path");var a=e.n(l);const d=require("fs");var c=e.n(d);const h=require("react-router-dom"),p=require("@emotion/react"),u=require("react-query"),x=require("recoil"),m=require("@emotion/styled");var g=e.n(m);const f=p.css`
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
`,b=require("react");var j=e.n(b);const y=g().button`
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
`,v=g().button`
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
`,w=g().button`
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
`,R=g().textarea`
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
`,$=require("axios");var k=e.n($);async function C(e,t){return k().post(e,t,{headers:{"Content-Type":"application/json"}})}const A=(0,x.atom)({key:"modal",default:{display:!1,message:"",buttons:[]}});function E(){const e=(0,x.useSetRecoilState)(A);return{setContent:(t,o=[])=>{e({display:!0,message:t,buttons:o})},closeModal:()=>{e({display:!1,message:"",buttons:[]})}}}function T(){const{setContent:e,closeModal:o}=E(),n=(0,u.useQueryClient)(),[r,s]=(0,b.useState)(!1),i=(0,b.useRef)(null),[l,a]=(0,b.useState)({title:"",content:""}),d=(0,u.useMutation)(["postNewTodo"],(e=>async function(e,t){const o=localStorage.getItem("token");if(null===o)throw new Error("token error");return(await k().post("/todos",t,{headers:{"Content-Type":"application/json",Authorization:o}})).data.data}(0,{...e})),{onSuccess:()=>{n.invalidateQueries(["todos"])},onError:t=>{e(`${t.response.status}: ${t.response.statusText}\nmessage: ${t.response.data.message}`,[{name:"확인",handler:o}])}}),c=()=>{d.mutate(l),a({title:"",content:""}),s(!r)};return(0,b.useEffect)((()=>{i.current&&i.current.focus()}),[r]),(0,t.jsx)(S,{displayWriteBox:r,children:r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(q,{children:[(0,t.jsx)(I,{type:"text",placeholder:"제목",onChange:e=>a((t=>({...t,title:e.target.value}))),onKeyDown:e=>{if(e.nativeEvent.isComposing)return;const{key:t}=e;"Enter"===t&&c()},value:l.title,ref:i}),(0,t.jsx)(w,{onClick:c,children:"✓"})]}),(0,t.jsx)(R,{placeholder:"상세 내용을 입력하세요",onChange:e=>a((t=>({...t,content:e.target.value})))})]}):(0,t.jsxs)(q,{onClick:()=>s(!r),children:[(0,t.jsx)(I,{type:"text",placeholder:"무엇을 해야하나요?",value:l.title,disabled:!0}),(0,t.jsx)(w,{children:"+"})]})})}const S=g().div`
  width: 100%;
  height: ${({displayWriteBox:e})=>e?"260px":"60px"};
  transition: all 0.3s ease;
`,q=g().div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`,I=g().input`
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
`,Y=j().memo((function({currentTodo:e}){const o=(0,u.useQueryClient)(),[n,r]=(0,b.useState)({title:e.title,content:e.content}),[s,i]=(0,b.useState)(!1),[l,a]=(0,b.useState)(!1),[d,c]=(0,b.useState)(!1),{setContent:h,closeModal:p}=E(),x=(0,u.useMutation)("updateTodo",(t=>async function(e,t){const o=localStorage.getItem("token");if(null===o)throw new Error("token error");return(await k().put(e,t,{headers:{"Content-Type":"application/json",Authorization:o}})).data.data}(`/todos/${e.id}`,t)),{onSuccess:()=>{o.invalidateQueries(["todos"])},onError:e=>{h(`${e.response.status}: ${e.response.statusText}\nmessage: ${e.response.data.message}`,[{name:"확인",handler:p}])}}),m=(0,u.useMutation)("deleteTodo",(()=>async function(e){const t=localStorage.getItem("token");if(null===t)throw new Error("token error");return(await k().delete(e,{headers:{"Content-Type":"application/json",Authorization:t}})).data.data}(`/todos/${e.id}`)),{onSuccess:()=>{o.invalidateQueries(["todos"])},onError:e=>{h(`${e.response.status}: ${e.response.statusText}\nmessage: ${e.response.data.message}`,[{name:"확인",handler:p}])}}),g=()=>{i(!1),a(!1),x.mutate(n)},f=()=>{m.mutate(),p()};return(0,b.useEffect)((()=>{let e;return l?c(!0):e=setTimeout((()=>c(!1)),200),()=>{clearTimeout(e)}}),[l]),(0,t.jsxs)(G,{displayWriteBox:l,children:[s?(0,t.jsxs)(D,{children:[(0,t.jsx)(M,{type:"text",placeholder:"",onChange:e=>r((t=>({...t,title:e.target.value}))),onKeyDown:e=>{if(e.nativeEvent.isComposing)return;const{key:t}=e;"Enter"===t&&g()},value:n.title,autoFocus:!0}),(0,t.jsx)(w,{onClick:g,children:"✓"})]}):(0,t.jsxs)(D,{children:[(0,t.jsx)(F,{onClick:()=>a(!l),children:(0,t.jsx)(W,{children:e.title})}),(0,t.jsxs)(B,{children:[(0,t.jsx)(v,{onClick:()=>(i(!0),void a(!0)),isDelete:!1,children:"수정"}),(0,t.jsx)(v,{onClick:()=>{h("삭제 하시겠습니까?",[{name:"취소",handler:p},{name:"삭제",handler:f}])},isDelete:!0,children:"삭제"})]})]}),(0,t.jsx)(z,{displayWriteBox:l,children:d&&(0,t.jsx)(R,{placeholder:"",onChange:e=>r((t=>({...t,content:e.target.value}))),value:n.content,disabled:!s})})]})})),G=g().div`
  width: 100%;
  height: ${({displayWriteBox:e})=>e?"255px":"55px"};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({theme:e})=>e.colors.GRAY3};
`,D=g().div`
  display: flex;
  width: 95%;
  height: 54px;
  align-items: center;
`,z=g().div`
  width: 100%;
  height: ${({displayWriteBox:e})=>e?"200px":"0px"};
  transition: all 0.3s ease;
`,M=g().input`
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
`,B=g().div`
  width: 100px;
  display: flex;
  align-items: center;
`,F=g().button`
  flex: 1;
  border: 0px;
  background-color: ${({theme:e})=>e.colors.WHITE};
  text-align: left;
  cursor: pointer;
`,W=g().div`
  color: ${({theme:e})=>e.colors.BLACK};
  font-size: 25px;
`,H=require("react-loading");var L=e.n(H);function P(){return(0,t.jsx)(K,{children:(0,t.jsx)(L(),{type:"spin",color:"#5A85E3"})})}const K=g().div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,O=j().memo((function(){const{setContent:e,closeModal:o}=E(),{data:n}=(0,u.useQuery)(["todos"],(()=>async function(e){const t=localStorage.getItem("token");if(null===t)throw new Error("token error");return(await k().get("/todos",{headers:{"Content-Type":"application/json",Authorization:t}})).data.data}()),{refetchOnWindowFocus:!0,staleTime:6e4,suspense:!0,onError:t=>e(`${t}`,[{name:"확인",handler:o}])});return(0,t.jsxs)(N,{children:[(0,t.jsx)(Q,{children:"Todo List"}),(0,t.jsx)(b.Suspense,{fallback:(0,t.jsx)(P,{}),children:(0,t.jsxs)(_,{children:[(0,t.jsx)(T,{}),n&&n.map((e=>(0,t.jsx)(Y,{currentTodo:e},e.id)))]})})]})})),_=g().div`
  width: 100%;
  height: min-content;
  background-color: ${({theme:e})=>e.colors.WHITE};
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 5px 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,N=g().section`
  width: 700px;
  padding-bottom: 50px;
  margin-top: 30px;
`,Q=g().header`
  font-size: 40px;
  width: 700px;
  height: 60px;
  text-align: center;
  color: ${({theme:e})=>e.colors.PRIMARY};
`,J=g().div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,U=g().div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;function V(){return(0,t.jsxs)(U,{children:[(0,t.jsxs)(Z,{children:[(0,t.jsx)(X,{children:"LOGO"}),(0,t.jsx)(h.Link,{to:"/auth/login",children:(0,t.jsx)(y,{children:"Login"})})]}),(0,t.jsx)(b.Suspense,{fallback:(0,t.jsx)(P,{}),children:(0,t.jsx)(O,{})})]})}const X=g().div`
  color: ${({theme:e})=>e.colors.WHITE};
  font-size: 30px;
  font-weight: 500;
`,Z=g().nav`
  width: 100%;
  height: 60px;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px 1px;
  background-color: ${({theme:e})=>e.colors.PRIMARY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 20px;
`,ee=require("react-hook-form"),te=require("yup"),oe=require("@hookform/resolvers/yup"),ne=g().input`
  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${({theme:e})=>e.colors.GRAY2};
  color: ${({theme:e})=>e.colors.BLACK};
  padding: 7px 10px;
  font-size: 14px;
  margin-top: 5px;
  &:focus {
    outline-color: ${({theme:e})=>e.colors.GRAY1};
  }
  &::placeholder {
    user-select: none;
  }
  &:disabled {
    background-color: ${({theme:e})=>e.colors.GRAY3};
    -webkit-box-shadow: 0 0 0 30px ${({theme:e})=>e.colors.GRAY3} inset !important;
    box-shadow: 0 0 0 30px ${({theme:e})=>e.colors.GRAY3} inset !important;
  }
`,re=g().div`
  width: 500px;
  height: min-content;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({theme:e})=>e.colors.PRIMARY_DARK};
  border-radius: 15px;
`,se=g().form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-top: 30px;
  padding-bottom: 20px;
  button {
    margin-top: 10px;
  }
`,ie=g().div`
  width: 80%;
  height: 35px;
  text-align: left;
  font-size: 12px;
  padding: 8px 5px;
  div {
    color: ${({theme:e})=>e.colors.RED};
  }
`,le=g().div`
  width: 80%;
  text-align: left;
  font-size: 15px;
  padding: 0px 5px;
  color: ${({theme:e})=>e.colors.LIGHT_BLACK};
`,ae=g().div`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.PRIMARY_LIGHT};
`,de=te.object({email:te.string().required("이메일을 입력하세요.").email("이메일 형식에 맞지 않습니다."),password:te.string().required("비밀번호를 입력하세요.")}).required();function ce(){const[e,o]=(0,b.useState)(!0),n=(0,h.useNavigate)(),{register:r,handleSubmit:s,formState:{errors:i}}=(0,ee.useForm)({resolver:(0,oe.yupResolver)(de),mode:"onBlur"}),{setContent:l,closeModal:a}=E(),[d,c]=(0,b.useState)({email:"",password:""});(0,b.useEffect)((()=>{""!==d.email&&""!==d.password&&o(!1)}),[d]);const p=e=>{const{target:t}=e;c({...d,[t.name]:t.value})};return(0,t.jsxs)(re,{children:[(0,t.jsx)(ae,{children:"로그인"}),(0,t.jsxs)(se,{onSubmit:s((async()=>{try{e=(await C("/users/login",{email:d.email,password:d.password})).data.token,localStorage.setItem("token",e),a(),n("/")}catch(e){l(`${e.response.statusText}.`,[{name:"확인",handler:a}])}var e})),children:[(0,t.jsx)(le,{children:"이메일"}),(0,t.jsx)(ne,{type:"text",...r("email"),placeholder:"이메일",onChange:p}),(0,t.jsx)(ie,{children:i.email&&(0,t.jsx)("div",{children:i.email.message})}),(0,t.jsx)(le,{children:"비밀번호"}),(0,t.jsx)(ne,{type:"password",...r("password"),placeholder:"비밀번호",onChange:p}),(0,t.jsx)(ie,{children:i.password&&(0,t.jsx)("div",{children:i.password.message})}),(0,t.jsx)(y,{type:"submit",disabled:e,children:"로그인"})]}),(0,t.jsxs)(he,{children:[(0,t.jsx)(pe,{children:"계정이 없으세요?"}),(0,t.jsx)(h.Link,{to:"/auth/signup",children:(0,t.jsx)(ue,{children:"회원가입"})})]})]})}const he=g().div`
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,pe=g().div`
  width: 100px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.GRAY1};
  font-size: 12px;
`,ue=g().button`
  width: 60px;
  height: 20px;
  text-align: center;
  color: ${({theme:e})=>e.colors.GRAY1};
  font-size: 12px;
  background-color: ${({theme:e})=>e.colors.WHITE};
  border: 0px;
  border-radius: 5px;
  &:hover {
    background-color: ${({theme:e})=>e.colors.GRAY4};
  }
  &:active {
    filter: brightness(0.7);
  }
`;function xe(){return(0,t.jsx)(J,{children:(0,t.jsx)(ce,{})})}const me=te.object({email:te.string().required("이메일을 입력하세요.").email("이메일 형식에 맞지 않습니다."),password:te.string().required("비밀번호를 입력하세요.").min(8,"8글자 이상 입력하세요."),passwordConfirm:te.string().required("비밀번호 확인을 입력하세요.").oneOf([te.ref("password"),null],"비밀번호가 일치하지 않습니다.")}).required();function ge(){const[e,o]=(0,b.useState)(!0),n=(0,h.useNavigate)(),{register:r,handleSubmit:s,formState:{errors:i}}=(0,ee.useForm)({resolver:(0,oe.yupResolver)(me),mode:"onBlur"}),{setContent:l,closeModal:a}=E(),[d,c]=(0,b.useState)({email:"",password:"",passwordConfirm:""});(0,b.useEffect)((()=>{""!==d.email&&""!==d.password&&""!==d.passwordConfirm&&o(!1)}),[d]);const p=e=>{const{target:t}=e;c({...d,[t.name]:t.value})};return(0,t.jsxs)(re,{children:[(0,t.jsx)(ae,{children:"회원가입"}),(0,t.jsxs)(se,{onSubmit:s((async()=>{try{const e=await C("/users/create",{email:d.email,password:d.password});l(`${e.data.message}. 바로 로그인 하시겠습니까?`,[{name:"취소",handler:a},{name:"확인",handler:()=>{return t=e.data.token,localStorage.setItem("token",t),a(),void n("/");var t}}])}catch(e){l(`${e.response.statusText}.`,[{name:"확인",handler:a}])}})),children:[(0,t.jsx)(le,{children:"이메일"}),(0,t.jsx)(ne,{type:"text",...r("email"),placeholder:"이메일",onChange:p}),(0,t.jsx)(ie,{children:i.email&&(0,t.jsx)("div",{children:i.email.message})}),(0,t.jsx)(le,{children:"비밀번호"}),(0,t.jsx)(ne,{type:"password",...r("password"),placeholder:"비밀번호",onChange:p}),(0,t.jsx)(ie,{children:i.password&&(0,t.jsx)("div",{children:i.password.message})}),(0,t.jsx)(le,{children:"비밀번호 확인"}),(0,t.jsx)(ne,{type:"password",...r("passwordConfirm"),placeholder:"비밀번호 확인",onChange:p}),(0,t.jsx)(ie,{children:i.passwordConfirm&&(0,t.jsx)("div",{children:i.passwordConfirm.message})}),(0,t.jsx)(y,{type:"submit",disabled:e,children:"회원가입"})]})]})}function fe(){return(0,t.jsx)(J,{children:(0,t.jsx)(ge,{})})}const be={colors:{PRIMARY:"#5A85E3",PRIMARY_DARK:"#1F59D7",PRIMARY_LIGHT:"#B5C8F3",OFF_WHITE:"#F7F4FD",WHITE:"#FFFFFF",BLACK:"#333333",GRAY1:"#888888",GRAY2:"#BBBBBB",GRAY3:"#D7D7D7",GRAY4:"#EEEEEE",GRAY5:"#F5F5F5",RED:"#C83A68",LIGHT_BLACK:"#464646",POINT_COLOR:"#C75DE0",BACKGROUND:"#f8f9f9"}};function je(){const e=(0,x.useRecoilValue)(A),{closeModal:o}=E();return(0,t.jsxs)(ve,{isDisplay:e.display,children:[(0,t.jsx)(ye,{isDisplay:e.display,onClick:o}),e.display&&(0,t.jsxs)(we,{children:[(0,t.jsx)(Re,{children:e.message}),(0,t.jsx)($e,{children:e.buttons.map((e=>(0,t.jsx)(y,{onClick:e.handler,children:e.name},(()=>{const e=new Date;return String(e.getTime())})()+e.name)))})]})]})}const ye=g().div`
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
`,ve=g().div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${({isDisplay:e})=>e?"flex":"none"};
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,we=g().div`
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
`,Re=g().div`
  width: min-content;
  line-height: 30px;
  margin-bottom: 20px;
  height: max-content;
  text-align: center;
  white-space: pre;
`,$e=g().div`
  display: flex;
  width: 300px;
  height: 60px;
  justify-content: space-evenly;
  align-items: center;
`,ke=g().div`
  height: 100%;
  width: 100%;
  position: absolute;
`,Ce=function(){const e=new u.QueryClient;return(0,t.jsx)(p.ThemeProvider,{theme:be,children:(0,t.jsx)(x.RecoilRoot,{children:(0,t.jsxs)(u.QueryClientProvider,{client:e,children:[(0,t.jsx)(p.Global,{styles:f}),(0,t.jsx)(ke,{children:(0,t.jsxs)(h.Routes,{children:[(0,t.jsx)(h.Route,{path:"/auth/login",element:(0,t.jsx)(xe,{})}),(0,t.jsx)(h.Route,{path:"/auth/signup",element:(0,t.jsx)(fe,{})}),(0,t.jsx)(h.Route,{path:"/",element:(0,t.jsx)(V,{})})]})}),(0,t.jsx)(je,{})]})})})},Ae=JSON.parse(c().readFileSync(a().resolve("./build/asset-manifest.json"),"utf8")),Ee=s()(),Te=s().static(a().resolve("./build"),{index:!1});Ee.use(Te),Ee.use(((e,o)=>{const r=(0,t.jsx)(i.StaticRouter,{location:e.url,children:(0,t.jsx)(Ce,{})}),s=n().renderToString(r);o.send((e=>`\n  <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta\n        name="viewport"\n        content="width=device-width,initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n    </head>\n    <body>\n      <div id="root">\n        ${e}\n      </div>\n      <script src="${Ae.files["main.js"]}"><\/script>\n    </body>\n  </html>\n  `)(s))})),Ee.listen(3e3,(()=>{console.log("Now listening on port 3000")}))})();