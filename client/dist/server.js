(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("react/jsx-runtime"),o=require("react-dom/server");var n=e.n(o);const r=require("express");var s=e.n(r);const i=require("react-router-dom/server"),l=require("react-router-dom"),a=require("@emotion/react"),d=require("react-query"),c=require("recoil"),h=require("@emotion/styled");var p=e.n(h);const u=a.css`
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
`,x=require("react");var m=e.n(x);const g=p().button`
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
`,f=p().button`
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
`,j=p().button`
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
`,b=p().textarea`
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
`,y=require("axios");var v=e.n(y);async function w(e,t){return v().post(e,t,{headers:{"Content-Type":"application/json"}})}const R=(0,c.atom)({key:"modal",default:{display:!1,message:"",buttons:[]}});function $(){const e=(0,c.useSetRecoilState)(R);return{setContent:(t,o=[])=>{e({display:!0,message:t,buttons:o})},closeModal:()=>{e({display:!1,message:"",buttons:[]})}}}function k(){const{setContent:e,closeModal:o}=$(),n=(0,d.useQueryClient)(),[r,s]=(0,x.useState)(!1),i=(0,x.useRef)(null),[l,a]=(0,x.useState)({title:"",content:""}),c=(0,d.useMutation)(["postNewTodo"],(e=>async function(e,t){const o=localStorage.getItem("token");if(null===o)throw new Error("token error");return(await v().post("/todos",t,{headers:{"Content-Type":"application/json",Authorization:o}})).data.data}(0,{...e})),{onSuccess:()=>{n.invalidateQueries(["todos"])},onError:t=>{e(`${t.response.status}: ${t.response.statusText}\nmessage: ${t.response.data.message}`,[{name:"확인",handler:o}])}}),h=()=>{c.mutate(l),a({title:"",content:""}),s(!r)};return(0,x.useEffect)((()=>{i.current&&i.current.focus()}),[r]),(0,t.jsx)(C,{displayWriteBox:r,children:r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(E,{type:"text",placeholder:"제목",onChange:e=>a((t=>({...t,title:e.target.value}))),onKeyDown:e=>{if(e.nativeEvent.isComposing)return;const{key:t}=e;"Enter"===t&&h()},value:l.title,ref:i}),(0,t.jsx)(j,{onClick:h,children:"✓"})]}),(0,t.jsx)(b,{placeholder:"상세 내용을 입력하세요",onChange:e=>a((t=>({...t,content:e.target.value})))})]}):(0,t.jsxs)(A,{onClick:()=>s(!r),children:[(0,t.jsx)(E,{type:"text",placeholder:"무엇을 해야하나요?",value:l.title,disabled:!0}),(0,t.jsx)(j,{children:"+"})]})})}const C=p().div`
  width: 100%;
  height: ${({displayWriteBox:e})=>e?"260px":"60px"};
  transition: all 0.3s ease;
`,A=p().div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`,E=p().input`
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
`,T=m().memo((function({currentTodo:e}){const o=(0,d.useQueryClient)(),[n,r]=(0,x.useState)({title:e.title,content:e.content}),[s,i]=(0,x.useState)(!1),[l,a]=(0,x.useState)(!1),[c,h]=(0,x.useState)(!1),{setContent:p,closeModal:u}=$(),m=(0,d.useMutation)("updateTodo",(t=>async function(e,t){const o=localStorage.getItem("token");if(null===o)throw new Error("token error");return(await v().put(e,t,{headers:{"Content-Type":"application/json",Authorization:o}})).data.data}(`/todos/${e.id}`,t)),{onSuccess:()=>{o.invalidateQueries(["todos"])},onError:e=>{p(`${e.response.status}: ${e.response.statusText}\nmessage: ${e.response.data.message}`,[{name:"확인",handler:u}])}}),g=(0,d.useMutation)("deleteTodo",(()=>async function(e){const t=localStorage.getItem("token");if(null===t)throw new Error("token error");return(await v().delete(e,{headers:{"Content-Type":"application/json",Authorization:t}})).data.data}(`/todos/${e.id}`)),{onSuccess:()=>{o.invalidateQueries(["todos"])},onError:e=>{p(`${e.response.status}: ${e.response.statusText}\nmessage: ${e.response.data.message}`,[{name:"확인",handler:u}])}}),y=()=>{i(!1),a(!1),m.mutate(n)},w=()=>{g.mutate(),u()};return(0,x.useEffect)((()=>{let e;return l?h(!0):e=setTimeout((()=>h(!1)),200),()=>{clearTimeout(e)}}),[l]),(0,t.jsxs)(I,{displayWriteBox:l,children:[s?(0,t.jsxs)(S,{children:[(0,t.jsx)(Y,{type:"text",placeholder:"",onChange:e=>r((t=>({...t,title:e.target.value}))),onKeyDown:e=>{if(e.nativeEvent.isComposing)return;const{key:t}=e;"Enter"===t&&y()},value:n.title,autoFocus:!0}),(0,t.jsx)(j,{onClick:y,children:"✓"})]}):(0,t.jsxs)(S,{children:[(0,t.jsx)(D,{onClick:()=>a(!l),children:(0,t.jsx)(M,{children:e.title})}),(0,t.jsxs)(G,{children:[(0,t.jsx)(f,{onClick:()=>(i(!0),void a(!0)),isDelete:!1,children:"수정"}),(0,t.jsx)(f,{onClick:()=>{p("삭제 하시겠습니까?",[{name:"취소",handler:u},{name:"삭제",handler:w}])},isDelete:!0,children:"삭제"})]})]}),(0,t.jsx)(q,{displayWriteBox:l,children:c&&(0,t.jsx)(b,{placeholder:"",onChange:e=>r((t=>({...t,content:e.target.value}))),value:n.content,disabled:!s})})]})})),I=p().div`
  width: 100%;
  height: ${({displayWriteBox:e})=>e?"255px":"55px"};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({theme:e})=>e.colors.GRAY3};
`,S=p().div`
  display: flex;
  width: 95%;
  height: 54px;
  align-items: center;
`,q=p().div`
  width: 100%;
  height: ${({displayWriteBox:e})=>e?"200px":"0px"};
  transition: all 0.3s ease;
`,Y=p().input`
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
`,G=p().div`
  width: 100px;
  display: flex;
  align-items: center;
`,D=p().button`
  flex: 1;
  border: 0px;
  background-color: ${({theme:e})=>e.colors.WHITE};
  text-align: left;
  cursor: pointer;
`,M=p().div`
  color: ${({theme:e})=>e.colors.BLACK};
  font-size: 25px;
`,z=require("react-loading");var B=e.n(z);function F(){return(0,t.jsx)(L,{children:(0,t.jsx)(B(),{type:"spin",color:"#5A85E3"})})}const L=p().div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,W=m().memo((function(){const{setContent:e,closeModal:o}=$(),{data:n,isLoading:r}=(0,d.useQuery)(["todos"],(()=>async function(e){const t=localStorage.getItem("token");if(null===t)throw new Error("token error");return(await v().get("/todos",{headers:{"Content-Type":"application/json",Authorization:t}})).data.data}()),{refetchOnWindowFocus:!0,staleTime:6e4,suspense:!0,onError:t=>e(`${t}`,[{name:"확인",handler:o}])});return(0,t.jsxs)(P,{children:[(0,t.jsx)(K,{children:"Todo List"}),r?(0,t.jsx)(F,{}):(0,t.jsxs)(H,{children:[(0,t.jsx)(k,{}),n.map((e=>(0,t.jsx)(T,{currentTodo:e},e.id)))]})]})})),H=p().div`
  width: 100%;
  height: min-content;
  background-color: ${({theme:e})=>e.colors.WHITE};
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 5px 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,P=p().section`
  width: 700px;
  padding-bottom: 50px;
  margin-top: 30px;
`,K=p().header`
  font-size: 40px;
  width: 700px;
  height: 60px;
  text-align: center;
  color: ${({theme:e})=>e.colors.PRIMARY};
`,O=p().div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,_=p().div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;function N(){const e=(0,l.useNavigate)(),{isLogined:o}=function(){const[e,t]=(0,x.useState)(!1),{setContent:o,closeModal:n}=$(),r=(0,l.useNavigate)();return(0,x.useEffect)((()=>{null===localStorage.getItem("token")&&(r("/auth/login"),o("로그인이 필요한 페이지 입니다.",[{name:"확인",handler:n}])),t(!0)}),[]),{isLogined:e}}();return(0,t.jsxs)(_,{children:[(0,t.jsxs)(U,{children:[(0,t.jsx)(Q,{children:"LOGO"}),o?(0,t.jsx)(g,{onClick:()=>{localStorage.removeItem("token"),e("/auth/login")},children:"로그아웃"}):(0,t.jsx)(l.Link,{to:"/auth/login",children:(0,t.jsx)(g,{children:"로그인"})})]}),o?(0,t.jsx)(W,{}):(0,t.jsx)(F,{})]})}const Q=p().div`
  color: ${({theme:e})=>e.colors.WHITE};
  font-size: 30px;
  font-weight: 500;
`,U=p().nav`
  width: 100%;
  height: 60px;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px 1px;
  background-color: ${({theme:e})=>e.colors.PRIMARY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 20px;
`,V=require("react-hook-form"),J=require("yup"),X=require("@hookform/resolvers/yup"),Z=p().input`
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
`,ee=p().div`
  width: 500px;
  height: min-content;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({theme:e})=>e.colors.PRIMARY_DARK};
  border-radius: 15px;
`,te=p().form`
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
`,oe=p().div`
  width: 80%;
  height: 35px;
  text-align: left;
  font-size: 12px;
  padding: 8px 5px;
  div {
    color: ${({theme:e})=>e.colors.RED};
  }
`,ne=p().div`
  width: 80%;
  text-align: left;
  font-size: 15px;
  padding: 0px 5px;
  color: ${({theme:e})=>e.colors.LIGHT_BLACK};
`,re=p().div`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.PRIMARY_LIGHT};
`,se=J.object({email:J.string().required("이메일을 입력하세요.").email("이메일 형식에 맞지 않습니다."),password:J.string().required("비밀번호를 입력하세요.")}).required();function ie(){const[e,o]=(0,x.useState)(!0),n=(0,l.useNavigate)(),{register:r,handleSubmit:s,formState:{errors:i}}=(0,V.useForm)({resolver:(0,X.yupResolver)(se),mode:"onBlur"}),{setContent:a,closeModal:d}=$(),[c,h]=(0,x.useState)({email:"",password:""});(0,x.useEffect)((()=>{""!==c.email&&""!==c.password&&o(!1)}),[c]);const p=e=>{const{target:t}=e;h({...c,[t.name]:t.value})};return(0,t.jsxs)(ee,{children:[(0,t.jsx)(re,{children:"로그인"}),(0,t.jsxs)(te,{onSubmit:s((async()=>{try{e=(await w("/users/login",{email:c.email,password:c.password})).data.token,localStorage.setItem("token",e),d(),n("/")}catch(e){a(`${e.response.statusText}.`,[{name:"확인",handler:d}])}var e})),children:[(0,t.jsx)(ne,{children:"이메일"}),(0,t.jsx)(Z,{type:"text",...r("email"),placeholder:"이메일",onChange:p}),(0,t.jsx)(oe,{children:i.email&&(0,t.jsx)("div",{children:i.email.message})}),(0,t.jsx)(ne,{children:"비밀번호"}),(0,t.jsx)(Z,{type:"password",...r("password"),placeholder:"비밀번호",onChange:p}),(0,t.jsx)(oe,{children:i.password&&(0,t.jsx)("div",{children:i.password.message})}),(0,t.jsx)(g,{type:"submit",disabled:e,children:"로그인"})]}),(0,t.jsxs)(le,{children:[(0,t.jsx)(ae,{children:"계정이 없으세요?"}),(0,t.jsx)(l.Link,{to:"/auth/signup",children:(0,t.jsx)(de,{children:"회원가입"})})]})]})}const le=p().div`
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ae=p().div`
  width: 100px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.GRAY1};
  font-size: 12px;
`,de=p().button`
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
`;function ce(){return(0,t.jsx)(O,{children:(0,t.jsx)(ie,{})})}const he=J.object({email:J.string().required("이메일을 입력하세요.").email("이메일 형식에 맞지 않습니다."),password:J.string().required("비밀번호를 입력하세요.").min(8,"8글자 이상 입력하세요."),passwordConfirm:J.string().required("비밀번호 확인을 입력하세요.").oneOf([J.ref("password"),null],"비밀번호가 일치하지 않습니다.")}).required();function pe(){const[e,o]=(0,x.useState)(!0),n=(0,l.useNavigate)(),{register:r,handleSubmit:s,formState:{errors:i}}=(0,V.useForm)({resolver:(0,X.yupResolver)(he),mode:"onBlur"}),{setContent:a,closeModal:d}=$(),[c,h]=(0,x.useState)({email:"",password:"",passwordConfirm:""});(0,x.useEffect)((()=>{""!==c.email&&""!==c.password&&""!==c.passwordConfirm&&o(!1)}),[c]);const p=e=>{const{target:t}=e;h({...c,[t.name]:t.value})};return(0,t.jsxs)(ee,{children:[(0,t.jsx)(re,{children:"회원가입"}),(0,t.jsxs)(te,{onSubmit:s((async()=>{try{const e=await w("/users/create",{email:c.email,password:c.password});a(`${e.data.message}. 바로 로그인 하시겠습니까?`,[{name:"취소",handler:d},{name:"확인",handler:()=>{return t=e.data.token,localStorage.setItem("token",t),d(),void n("/");var t}}])}catch(e){a(`${e.response.statusText}.`,[{name:"확인",handler:d}])}})),children:[(0,t.jsx)(ne,{children:"이메일"}),(0,t.jsx)(Z,{type:"text",...r("email"),placeholder:"이메일",onChange:p}),(0,t.jsx)(oe,{children:i.email&&(0,t.jsx)("div",{children:i.email.message})}),(0,t.jsx)(ne,{children:"비밀번호"}),(0,t.jsx)(Z,{type:"password",...r("password"),placeholder:"비밀번호",onChange:p}),(0,t.jsx)(oe,{children:i.password&&(0,t.jsx)("div",{children:i.password.message})}),(0,t.jsx)(ne,{children:"비밀번호 확인"}),(0,t.jsx)(Z,{type:"password",...r("passwordConfirm"),placeholder:"비밀번호 확인",onChange:p}),(0,t.jsx)(oe,{children:i.passwordConfirm&&(0,t.jsx)("div",{children:i.passwordConfirm.message})}),(0,t.jsx)(g,{type:"submit",disabled:e,children:"회원가입"})]})]})}function ue(){return(0,t.jsx)(O,{children:(0,t.jsx)(pe,{})})}const xe={colors:{PRIMARY:"#5A85E3",PRIMARY_DARK:"#1F59D7",PRIMARY_LIGHT:"#B5C8F3",OFF_WHITE:"#F7F4FD",WHITE:"#FFFFFF",BLACK:"#333333",GRAY1:"#888888",GRAY2:"#BBBBBB",GRAY3:"#D7D7D7",GRAY4:"#EEEEEE",GRAY5:"#F5F5F5",RED:"#C83A68",LIGHT_BLACK:"#464646",POINT_COLOR:"#C75DE0",BACKGROUND:"#f8f9f9"}};function me(){const e=(0,c.useRecoilValue)(R),{closeModal:o}=$();return(0,t.jsxs)(fe,{isDisplay:e.display,children:[(0,t.jsx)(ge,{isDisplay:e.display,onClick:o}),e.display&&(0,t.jsxs)(je,{children:[(0,t.jsx)(be,{children:e.message}),(0,t.jsx)(ye,{children:e.buttons.map((e=>(0,t.jsx)(g,{onClick:e.handler,children:e.name},(()=>{const e=new Date;return String(e.getTime())})()+e.name)))})]})]})}const ge=p().div`
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
`,fe=p().div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${({isDisplay:e})=>e?"flex":"none"};
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,je=p().div`
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
`,be=p().div`
  width: min-content;
  line-height: 30px;
  margin-bottom: 20px;
  height: max-content;
  text-align: center;
  white-space: pre;
`,ye=p().div`
  display: flex;
  width: 300px;
  height: 60px;
  justify-content: space-evenly;
  align-items: center;
`,ve=p().div`
  height: 100%;
  width: 100%;
  position: absolute;
`,we=function(){const e=new d.QueryClient;return(0,t.jsx)(a.ThemeProvider,{theme:xe,children:(0,t.jsx)(c.RecoilRoot,{children:(0,t.jsxs)(d.QueryClientProvider,{client:e,children:[(0,t.jsx)(a.Global,{styles:u}),(0,t.jsx)(ve,{children:(0,t.jsxs)(l.Routes,{children:[(0,t.jsx)(l.Route,{path:"/auth/login",element:(0,t.jsx)(ce,{})}),(0,t.jsx)(l.Route,{path:"/auth/signup",element:(0,t.jsx)(ue,{})}),(0,t.jsx)(l.Route,{path:"/",element:(0,t.jsx)(N,{})})]})}),(0,t.jsx)(me,{})]})})})},Re=s()();Re.use(((e,o)=>{const r=(0,t.jsx)(i.StaticRouter,{location:e.url,children:(0,t.jsx)(we,{})}),s=n().renderToString(r);o.send(s)})),Re.listen(5050,(()=>{console.log("Now listening on port 5050")}))})();