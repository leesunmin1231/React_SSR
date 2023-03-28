(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("react/jsx-runtime"),o=require("react-dom/server");var n=e.n(o);const r=require("express");var s=e.n(r);const i=require("react-router-dom/server"),a=require("path");var l=e.n(a);const d=require("fs");var c=e.n(d);const h=require("react-redux"),p=require("react-router-dom"),u=require("@emotion/react"),x=require("react-query"),m=require("recoil"),g=require("@emotion/styled");var f=e.n(g);const b=u.css`
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
`,j=require("react");var y=e.n(j);const v=require("@reduxjs/toolkit"),w=require("axios");var R=e.n(w);async function $(e,t){return R().post(e,t,{headers:{"Content-Type":"application/json"}})}const k=(0,v.createAsyncThunk)("todos/fetchTodos",(async()=>await async function(e){return(await R().get(e,{headers:{"Content-Type":"application/json",Authorization:"token"}})).data}("http://localhost:8080/todos"))),C=(0,v.createSlice)({name:"todoList",initialState:{loading:!1,error:null,todos:[]},reducers:{addTodo:(e,t)=>({...e,todos:[...e.todos,t.payload.newTodo]})},extraReducers:e=>{e.addCase(k.pending,(e=>({...e,loading:!0,error:null}))).addCase(k.fulfilled,((e,{payload:t})=>({...e,error:null,loading:!1,todos:t}))).addCase(k.rejected,((e,{payload:t})=>({...e,error:t,loading:!1})))}}),{addTodo:A}=C.actions,T=C.reducer,E=f().button`
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
`,S=f().button`
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
`,q=f().button`
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
`,I=f().textarea`
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
`,Y=(0,m.atom)({key:"modal",default:{display:!1,message:"",buttons:[]}});function G(){const e=(0,m.useSetRecoilState)(Y);return{setContent:(t,o=[])=>{e({display:!0,message:t,buttons:o})},closeModal:()=>{e({display:!1,message:"",buttons:[]})}}}function D(){const{setContent:e,closeModal:o}=G(),n=(0,x.useQueryClient)(),[r,s]=(0,j.useState)(!1),i=(0,j.useRef)(null),[a,l]=(0,j.useState)({title:"",content:""}),d=(0,x.useMutation)(["postNewTodo"],(e=>async function(e,t){const o=localStorage.getItem("token");if(null===o)throw new Error("token error");return(await R().post("/todos",t,{headers:{"Content-Type":"application/json",Authorization:o}})).data.data}(0,{...e})),{onSuccess:()=>{n.invalidateQueries(["todos"])},onError:t=>{e(`${t.response.status}: ${t.response.statusText}\nmessage: ${t.response.data.message}`,[{name:"확인",handler:o}])}}),c=()=>{d.mutate(a),l({title:"",content:""}),s(!r)};return(0,j.useEffect)((()=>{i.current&&i.current.focus()}),[r]),(0,t.jsx)(M,{displayWriteBox:r,children:r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(B,{type:"text",placeholder:"제목",onChange:e=>l((t=>({...t,title:e.target.value}))),onKeyDown:e=>{if(e.nativeEvent.isComposing)return;const{key:t}=e;"Enter"===t&&c()},value:a.title,ref:i}),(0,t.jsx)(q,{onClick:c,children:"✓"})]}),(0,t.jsx)(I,{placeholder:"상세 내용을 입력하세요",onChange:e=>l((t=>({...t,content:e.target.value})))})]}):(0,t.jsxs)(z,{onClick:()=>s(!r),children:[(0,t.jsx)(B,{type:"text",placeholder:"무엇을 해야하나요?",value:a.title,disabled:!0}),(0,t.jsx)(q,{children:"+"})]})})}const M=f().div`
  width: 100%;
  height: ${({displayWriteBox:e})=>e?"260px":"60px"};
  transition: all 0.3s ease;
`,z=f().div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`,B=f().input`
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
`,P=y().memo((function({currentTodo:e}){const o=(0,x.useQueryClient)(),[n,r]=(0,j.useState)({title:e.title,content:e.content}),[s,i]=(0,j.useState)(!1),[a,l]=(0,j.useState)(!1),[d,c]=(0,j.useState)(!1),{setContent:h,closeModal:p}=G(),u=(0,x.useMutation)("updateTodo",(t=>async function(e,t){const o=localStorage.getItem("token");if(null===o)throw new Error("token error");return(await R().put(e,t,{headers:{"Content-Type":"application/json",Authorization:o}})).data.data}(`/todos/${e.id}`,t)),{onSuccess:()=>{o.invalidateQueries(["todos"])},onError:e=>{h(`${e.response.status}: ${e.response.statusText}\nmessage: ${e.response.data.message}`,[{name:"확인",handler:p}])}}),m=(0,x.useMutation)("deleteTodo",(()=>async function(e){const t=localStorage.getItem("token");if(null===t)throw new Error("token error");return(await R().delete(e,{headers:{"Content-Type":"application/json",Authorization:t}})).data.data}(`/todos/${e.id}`)),{onSuccess:()=>{o.invalidateQueries(["todos"])},onError:e=>{h(`${e.response.status}: ${e.response.statusText}\nmessage: ${e.response.data.message}`,[{name:"확인",handler:p}])}}),g=()=>{i(!1),l(!1),u.mutate(n)},f=()=>{m.mutate(),p()};return(0,j.useEffect)((()=>{let e;return a?c(!0):e=setTimeout((()=>c(!1)),200),()=>{clearTimeout(e)}}),[a]),(0,t.jsxs)(F,{displayWriteBox:a,children:[s?(0,t.jsxs)(L,{children:[(0,t.jsx)(H,{type:"text",placeholder:"",onChange:e=>r((t=>({...t,title:e.target.value}))),onKeyDown:e=>{if(e.nativeEvent.isComposing)return;const{key:t}=e;"Enter"===t&&g()},value:n.title,autoFocus:!0}),(0,t.jsx)(q,{onClick:g,children:"✓"})]}):(0,t.jsxs)(L,{children:[(0,t.jsx)(O,{onClick:()=>l(!a),children:(0,t.jsx)(K,{children:e.title})}),(0,t.jsxs)(_,{children:[(0,t.jsx)(S,{onClick:()=>(i(!0),void l(!0)),isDelete:!1,children:"수정"}),(0,t.jsx)(S,{onClick:()=>{h("삭제 하시겠습니까?",[{name:"취소",handler:p},{name:"삭제",handler:f}])},isDelete:!0,children:"삭제"})]})]}),(0,t.jsx)(W,{displayWriteBox:a,children:d&&(0,t.jsx)(I,{placeholder:"",onChange:e=>r((t=>({...t,content:e.target.value}))),value:n.content,disabled:!s})})]})})),F=f().div`
  width: 100%;
  height: ${({displayWriteBox:e})=>e?"255px":"55px"};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({theme:e})=>e.colors.GRAY3};
`,L=f().div`
  display: flex;
  width: 95%;
  height: 54px;
  align-items: center;
`,W=f().div`
  width: 100%;
  height: ${({displayWriteBox:e})=>e?"200px":"0px"};
  transition: all 0.3s ease;
`,H=f().input`
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
`,_=f().div`
  width: 100px;
  display: flex;
  align-items: center;
`,O=f().button`
  flex: 1;
  border: 0px;
  background-color: ${({theme:e})=>e.colors.WHITE};
  text-align: left;
  cursor: pointer;
`,K=f().div`
  color: ${({theme:e})=>e.colors.BLACK};
  font-size: 25px;
`,N=require("react-loading");var Q=e.n(N);function J(){return(0,t.jsx)(U,{children:(0,t.jsx)(Q(),{type:"spin",color:"#5A85E3"})})}const U=f().div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,V=(0,j.createContext)(null),X=V,Z=y().memo((function(){const{setContent:e,closeModal:o}=G(),n=(0,h.useDispatch)();(e=>{const t=(0,j.useContext)(V);t&&(t.done||t.promises.push(Promise.resolve(n(k()))))})();const{todos:r,loading:s}=(0,h.useSelector)((e=>e.todos));return(0,j.useEffect)((()=>{if(!r||0===r.length)try{n(k())}catch(t){e(`${t}`,[{name:"Confirm",handler:o}])}}),[n,r]),(0,t.jsxs)(te,{children:[(0,t.jsx)(oe,{children:"Todo List"}),(0,t.jsxs)(ee,{children:[(0,t.jsx)(D,{}),s?(0,t.jsx)(J,{}):r&&r.map((e=>(0,t.jsx)(P,{currentTodo:e},e.id)))]})]})})),ee=f().div`
  width: 100%;
  height: min-content;
  background-color: ${({theme:e})=>e.colors.WHITE};
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 5px 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,te=f().section`
  width: 700px;
  padding-bottom: 50px;
  margin-top: 30px;
`,oe=f().header`
  font-size: 40px;
  width: 700px;
  height: 60px;
  text-align: center;
  color: ${({theme:e})=>e.colors.PRIMARY};
`,ne=f().div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,re=f().div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;function se(){return(0,t.jsxs)(re,{children:[(0,t.jsxs)(ae,{children:[(0,t.jsx)(ie,{children:"LOGO"}),(0,t.jsx)(p.Link,{to:"/auth/login",children:(0,t.jsx)(E,{children:"Login"})})]}),(0,t.jsx)(Z,{})]})}const ie=f().div`
  color: ${({theme:e})=>e.colors.WHITE};
  font-size: 30px;
  font-weight: 500;
`,ae=f().nav`
  width: 100%;
  height: 60px;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px 1px;
  background-color: ${({theme:e})=>e.colors.PRIMARY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 20px;
`,le=require("react-hook-form"),de=require("yup"),ce=require("@hookform/resolvers/yup"),he=f().input`
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
`,pe=f().div`
  width: 500px;
  height: min-content;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({theme:e})=>e.colors.PRIMARY_DARK};
  border-radius: 15px;
`,ue=f().form`
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
`,xe=f().div`
  width: 80%;
  height: 35px;
  text-align: left;
  font-size: 12px;
  padding: 8px 5px;
  div {
    color: ${({theme:e})=>e.colors.RED};
  }
`,me=f().div`
  width: 80%;
  text-align: left;
  font-size: 15px;
  padding: 0px 5px;
  color: ${({theme:e})=>e.colors.LIGHT_BLACK};
`,ge=f().div`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.PRIMARY_LIGHT};
`,fe=de.object({email:de.string().required("이메일을 입력하세요.").email("이메일 형식에 맞지 않습니다."),password:de.string().required("비밀번호를 입력하세요.")}).required();function be(){const[e,o]=(0,j.useState)(!0),n=(0,p.useNavigate)(),{register:r,handleSubmit:s,formState:{errors:i}}=(0,le.useForm)({resolver:(0,ce.yupResolver)(fe),mode:"onBlur"}),{setContent:a,closeModal:l}=G(),[d,c]=(0,j.useState)({email:"",password:""});(0,j.useEffect)((()=>{""!==d.email&&""!==d.password&&o(!1)}),[d]);const h=e=>{const{target:t}=e;c({...d,[t.name]:t.value})};return(0,t.jsxs)(pe,{children:[(0,t.jsx)(ge,{children:"로그인"}),(0,t.jsxs)(ue,{onSubmit:s((async()=>{try{e=(await $("/users/login",{email:d.email,password:d.password})).data.token,localStorage.setItem("token",e),l(),n("/")}catch(e){a(`${e.response.statusText}.`,[{name:"확인",handler:l}])}var e})),children:[(0,t.jsx)(me,{children:"이메일"}),(0,t.jsx)(he,{type:"text",...r("email"),placeholder:"이메일",onChange:h}),(0,t.jsx)(xe,{children:i.email&&(0,t.jsx)("div",{children:i.email.message})}),(0,t.jsx)(me,{children:"비밀번호"}),(0,t.jsx)(he,{type:"password",...r("password"),placeholder:"비밀번호",onChange:h}),(0,t.jsx)(xe,{children:i.password&&(0,t.jsx)("div",{children:i.password.message})}),(0,t.jsx)(E,{type:"submit",disabled:e,children:"로그인"})]}),(0,t.jsxs)(je,{children:[(0,t.jsx)(ye,{children:"계정이 없으세요?"}),(0,t.jsx)(p.Link,{to:"/auth/signup",children:(0,t.jsx)(ve,{children:"회원가입"})})]})]})}const je=f().div`
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ye=f().div`
  width: 100px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.GRAY1};
  font-size: 12px;
`,ve=f().button`
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
`;function we(){return(0,t.jsx)(ne,{children:(0,t.jsx)(be,{})})}const Re=de.object({email:de.string().required("이메일을 입력하세요.").email("이메일 형식에 맞지 않습니다."),password:de.string().required("비밀번호를 입력하세요.").min(8,"8글자 이상 입력하세요."),passwordConfirm:de.string().required("비밀번호 확인을 입력하세요.").oneOf([de.ref("password"),null],"비밀번호가 일치하지 않습니다.")}).required();function $e(){const[e,o]=(0,j.useState)(!0),n=(0,p.useNavigate)(),{register:r,handleSubmit:s,formState:{errors:i}}=(0,le.useForm)({resolver:(0,ce.yupResolver)(Re),mode:"onBlur"}),{setContent:a,closeModal:l}=G(),[d,c]=(0,j.useState)({email:"",password:"",passwordConfirm:""});(0,j.useEffect)((()=>{""!==d.email&&""!==d.password&&""!==d.passwordConfirm&&o(!1)}),[d]);const h=e=>{const{target:t}=e;c({...d,[t.name]:t.value})};return(0,t.jsxs)(pe,{children:[(0,t.jsx)(ge,{children:"회원가입"}),(0,t.jsxs)(ue,{onSubmit:s((async()=>{try{const e=await $("/users/create",{email:d.email,password:d.password});a(`${e.data.message}. 바로 로그인 하시겠습니까?`,[{name:"취소",handler:l},{name:"확인",handler:()=>{return t=e.data.token,localStorage.setItem("token",t),l(),void n("/");var t}}])}catch(e){a(`${e.response.statusText}.`,[{name:"확인",handler:l}])}})),children:[(0,t.jsx)(me,{children:"이메일"}),(0,t.jsx)(he,{type:"text",...r("email"),placeholder:"이메일",onChange:h}),(0,t.jsx)(xe,{children:i.email&&(0,t.jsx)("div",{children:i.email.message})}),(0,t.jsx)(me,{children:"비밀번호"}),(0,t.jsx)(he,{type:"password",...r("password"),placeholder:"비밀번호",onChange:h}),(0,t.jsx)(xe,{children:i.password&&(0,t.jsx)("div",{children:i.password.message})}),(0,t.jsx)(me,{children:"비밀번호 확인"}),(0,t.jsx)(he,{type:"password",...r("passwordConfirm"),placeholder:"비밀번호 확인",onChange:h}),(0,t.jsx)(xe,{children:i.passwordConfirm&&(0,t.jsx)("div",{children:i.passwordConfirm.message})}),(0,t.jsx)(E,{type:"submit",disabled:e,children:"회원가입"})]})]})}function ke(){return(0,t.jsx)(ne,{children:(0,t.jsx)($e,{})})}const Ce={colors:{PRIMARY:"#5A85E3",PRIMARY_DARK:"#1F59D7",PRIMARY_LIGHT:"#B5C8F3",OFF_WHITE:"#F7F4FD",WHITE:"#FFFFFF",BLACK:"#333333",GRAY1:"#888888",GRAY2:"#BBBBBB",GRAY3:"#D7D7D7",GRAY4:"#EEEEEE",GRAY5:"#F5F5F5",RED:"#C83A68",LIGHT_BLACK:"#464646",POINT_COLOR:"#C75DE0",BACKGROUND:"#f8f9f9"}};function Ae(){const e=(0,m.useRecoilValue)(Y),{closeModal:o}=G();return(0,t.jsxs)(Ee,{isDisplay:e.display,children:[(0,t.jsx)(Te,{isDisplay:e.display,onClick:o}),e.display&&(0,t.jsxs)(Se,{children:[(0,t.jsx)(qe,{children:e.message}),(0,t.jsx)(Ie,{children:e.buttons.map((e=>(0,t.jsx)(E,{onClick:e.handler,children:e.name},(()=>{const e=Math.random();return String(e)})()+e.name)))})]})]})}const Te=f().div`
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
`,Ee=f().div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${({isDisplay:e})=>e?"flex":"none"};
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,Se=f().div`
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
`,qe=f().div`
  width: min-content;
  line-height: 30px;
  margin-bottom: 20px;
  height: max-content;
  text-align: center;
  white-space: pre;
`,Ie=f().div`
  display: flex;
  width: 300px;
  height: 60px;
  justify-content: space-evenly;
  align-items: center;
`,Ye=f().div`
  height: 100%;
  width: 100%;
  position: absolute;
`,Ge=function(){const e=new x.QueryClient;return(0,t.jsx)(u.ThemeProvider,{theme:Ce,children:(0,t.jsx)(m.RecoilRoot,{children:(0,t.jsxs)(x.QueryClientProvider,{client:e,children:[(0,t.jsx)(u.Global,{styles:b}),(0,t.jsx)(Ye,{children:(0,t.jsxs)(p.Routes,{children:[(0,t.jsx)(p.Route,{path:"/auth/login",element:(0,t.jsx)(we,{})}),(0,t.jsx)(p.Route,{path:"/auth/signup",element:(0,t.jsx)(ke,{})}),(0,t.jsx)(p.Route,{path:"/",element:(0,t.jsx)(se,{})})]})}),(0,t.jsx)(Ae,{})]})})})},De=(0,v.combineReducers)({todos:T}),Me=JSON.parse(c().readFileSync(l().resolve("./build/asset-manifest.json"),"utf8")),ze=s()(),Be=s().static(l().resolve("./build"),{index:!1});ze.use(Be),ze.use((async(e,o)=>{const r={done:!1,promises:[]},s=(0,v.configureStore)({reducer:De,preloadedState:{todos:undefined}});const a=(0,t.jsx)(X.Provider,{value:r,children:(0,t.jsx)(h.Provider,{store:s,children:(0,t.jsx)(i.StaticRouter,{location:e.url,children:(0,t.jsx)(Ge,{})})})});n().renderToStaticMarkup(a);try{await Promise.all(r.promises)}catch(e){return o.status(500)}r.done=!0;const l=n().renderToString(a),d=`<script>__PRELOADED_STATE__=${JSON.stringify(s.getState().todos).replace(/</g,"\\u003c")}<\/script>`;return o.send(((e,t)=>`\n  <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta\n        name="viewport"\n        content="width=device-width,initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n    </head>\n    <body>\n      <div id="root">\n        ${e}\n      </div>\n      ${t}\n      <script src="${Me.files["main.js"]}"><\/script>\n    </body>\n  </html>\n  `)(l,d))})),ze.listen(3e3,(()=>{console.log("Now listening on port 3000")}))})();