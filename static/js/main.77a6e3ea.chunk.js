(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{53:function(n,e,t){"use strict";t.r(e);var r,c,o,i,a,s,u,d,l,j,b,h,f,x,O,m,p,g,k,v,w,y,z=t(0),C=t.n(z),D=t(21),T=t.n(D),S=t(19),E=t(8),F=t(34),M=t(9),U=t(20),I="tasks",L=function(n){return localStorage.setItem(I,JSON.stringify(n))},P=Object(U.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(I))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toogleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},setAllDone:function(n){n.tasks.forEach((function(n){n.done=!0}))},fetchExampleTasks:function(n){n.loading=!0},fetchExampleTasksSuccess:function(n,e){var t=e.payload;n.tasks=t,n.loading=!1},fetchExampleTasksError:function(n){n.loading=!1}}}),J=P.actions,R=J.addTask,H=J.toggleHideDone,N=J.toogleTaskDone,A=J.removeTask,B=J.setAllDone,q=J.fetchExampleTasks,K=J.fetchExampleTasksSuccess,W=(J.fetchExampleTasksError,function(n){return n.tasks}),Z=function(n){return W(n).tasks},G=function(n){return W(n).hideDone},Q=function(n){return 0===Z(n).length},V=function(n){return Z(n).every((function(n){return n.done}))},X=function(n){return W(n).loading},Y=P.reducer,$=t(5),_=t(4),nn=_.d.form(r||(r=Object($.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n    grid-gap: 15px;\n  }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),en=_.d.button(c||(c=Object($.a)(["\n  cursor: pointer;\n  background-color: ",";\n  color: ",";\n  padding: 10px;\n  cursor: pointer;\n  border: none;\n  margin-left: 10px;\n  transition: transform 1s;\n  &:hover {\n    filter: brightness(120%);\n    transform: scale(1.1);\n  }\n  &:active {\n    transition: none;\n    filter: brightness(150%);\n  }\n  @media (max-width: ","px) {\n    margin-left: 0px;\n    &:hover {\n      transform: none;\n    }\n  } ;\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobileMax})),tn=_.d.input(o||(o=Object($.a)(["\n  border: 2px solid ",";\n  padding: 10px;\n"])),(function(n){return n.theme.color.mercury})),rn=t(2),cn=function(){var n=Object(z.useRef)(null),e=Object(z.useState)(""),t=Object(F.a)(e,2),r=t[0],c=t[1],o=Object(M.b)();return Object(rn.jsxs)(nn,{onSubmit:function(e){e.preventDefault();var t=r.trim();t&&(o(R({content:t,done:!1,id:Object(U.c)()})),c(" "),n.current.focus())},children:[Object(rn.jsx)(tn,{ref:n,value:r,autoFocus:!0,required:!0,placeholder:"Co jest do zrobienia?",onChange:function(n){return c(n.target.value)}}),Object(rn.jsx)(en,{children:"Dodaj zadanie"})]})},on=_.d.ul(i||(i=Object($.a)(["\n  list-style: none;\n  padding: 0px;\n"]))),an=_.d.li(a||(a=Object($.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  border-bottom: 2px solid ",";\n  ","\n"])),(function(n){return n.theme.color.mercury}),(function(n){return n.hidden&&Object(_.c)(s||(s=Object($.a)(["\n      display: none;\n    "])))})),sn=_.d.span(u||(u=Object($.a)(["\n  margin: 15px;\n  word-break: break-word;\n  flex-basis: 100%;\n  ","\n"])),(function(n){return n.done&&Object(_.c)(d||(d=Object($.a)(["\n      text-decoration: line-through;\n    "])))})),un=_.d.button(l||(l=Object($.a)(["\n  height: 30px;\n  width: 30px;\n  border: none;\n  color: ",";\n  transition: 1s;\n  margin: 0 10px;\n  cursor: pointer;\n  ",";\n  &:hover {\n    filter: brightness(150%);\n  }\n  &:active {\n    filter: brightness(180%);\n    transition: none;\n  }\n  ",";\n  &:hover {\n    filter: brightness(150%);\n    transition: 1s;\n  }\n  &:active {\n    filter: brightness(200%);\n    transition: none;\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.toggleDone&&Object(_.c)(j||(j=Object($.a)(["\n      background-color: ",";\n    "])),(function(n){return n.theme.color.green}))}),(function(n){return n.remove&&Object(_.c)(b||(b=Object($.a)(["\n      background-color: ",";\n    "])),(function(n){return n.theme.color.red}))})),dn=Object(_.d)(S.c).attrs((function(){return{activeClassName:"active"}}))(h||(h=Object($.a)(["\n  text-decoration: none;\n  color: ",";\n  &.active {\n    font-weight: ",";\n  }\n\n  &:hover {\n    transition: 1s;\n    color: ",";\n    border-bottom: 1px solid;\n    filter: brightness(120%);\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.weight.medium}),(function(n){return n.theme.color.red})),ln=Object(_.d)(S.b)(f||(f=Object($.a)(["\n  text-decoration: none;\n  color: ",";\n"])),(function(n){return n.theme.color.teal})),jn="szukaj",bn=function(){var n=Object(E.h)(),e=new URLSearchParams(n.search).get(jn),t=Object(M.c)((function(n){return function(n,e){var t=Z(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(n,e)})),r=Object(M.c)(G),c=Object(M.b)();return Object(rn.jsx)(on,{children:t.map((function(n){return Object(rn.jsxs)(an,{hidden:n.done&&r,children:[Object(rn.jsx)(un,{toggleDone:!0,onClick:function(){return c(N(n.id))},children:n.done?"\u2714":""}),Object(rn.jsx)(sn,{done:n.done,children:Object(rn.jsx)(ln,{to:"zadania/".concat(n.id),children:n.content})}),Object(rn.jsxs)(un,{remove:!0,onClick:function(){return c(A(n.id))},children:["\ud83d\uddd1"," "]})]},n.id)}))})},hn=_.d.div(x||(x=Object($.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  font-size: 16px;\n  @media (max-width: ","px) {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-auto-rows: 20px;\n    margin-top: 30px;\n  }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),fn=_.d.button(O||(O=Object($.a)(["\n  border: none;\n  margin: 10px;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  transition: 1s;\n  &:disabled {\n    color: ",";\n    cursor: default;\n  }\n  &:disabled:hover {\n    color: ",";\n  }\n  &:hover {\n    filter: brightness(120%);\n  }\n  &:active {\n    filter: brightness(140%);\n    transition: none;\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.green}),(function(n){return n.theme.color.grey})),xn=function(){var n=Object(M.c)(Q),e=Object(M.c)(V),t=Object(M.c)(G),r=Object(M.b)();return Object(rn.jsx)(hn,{children:!n&&Object(rn.jsxs)(rn.Fragment,{children:[Object(rn.jsxs)(fn,{onClick:function(){return r(H())},children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(rn.jsx)(fn,{onClick:function(){return r(B())},disabled:e,children:"Uko\u0144cz wszytskie"})]})})},On=function(){var n=Object(M.b)(),e=Object(M.c)(X);return Object(rn.jsx)(hn,{children:Object(rn.jsx)(fn,{disabled:e,onClick:function(){return n(q())},children:e?"\u0141adowanie...":"Pobierz przyk\u0142adowe zadania"})})},mn=_.d.section(m||(m=Object($.a)(["\n  background-color: ",";\n"])),(function(n){return n.theme.color.white})),pn=_.d.div(p||(p=Object($.a)(["\n  padding: 20px 15px 20px;\n  ","\n"])),(function(n){return n.author&&Object(_.c)(g||(g=Object($.a)(["\n      line-height: 1.5;\n    "])))})),gn=_.d.h2(k||(k=Object($.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid ",";\n  margin-top: 15px;\n  margin-bottom: 0px;\n\n  @media (max-width: ","px) {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.color.mercury}),(function(n){return n.theme.breakpoint.mobileMax})),kn=function(n){var e=n.title,t=n.sectionContent,r=n.extraHeaderContent;return Object(rn.jsxs)(mn,{children:[Object(rn.jsxs)(gn,{children:[e,r]}),Object(rn.jsx)(pn,{children:t})]})},vn=_.d.h1(v||(v=Object($.a)(["\n  text-align: left;\n  margin-top: 30px;\n  font-weight: 700;\n"]))),wn=function(n){var e=n.title;return Object(rn.jsx)(vn,{children:e})},yn=_.d.main(w||(w=Object($.a)(["\n  max-width: 815px;\n  margin: 0 auto;\n  padding: 10px;\n"]))),zn=function(n){return Object(rn.jsx)(yn,{children:n.children})},Cn=_.d.div(y||(y=Object($.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n"]))),Dn=function(){var n=function(n){var e=Object(E.h)();return new URLSearchParams(e.search).get(n)}(jn),e=function(){var n=Object(E.h)(),e=Object(E.g)();return function(t){var r=t.key,c=t.value,o=new URLSearchParams(n.search);void 0===c?o.delete(r):o.set(r,c);var i=o.toString();e.push("".concat(n.pathname,"?").concat(i))}}();return Object(rn.jsx)(Cn,{children:Object(rn.jsx)(tn,{placeholder:"Filtruj zadania",value:n||"",onChange:function(n){var t=n.target;e({key:jn,value:""===t.value.trim()?void 0:t.value})}})})};var Tn=function(){return Object(rn.jsxs)(zn,{children:[Object(rn.jsx)(wn,{title:"Lista zada\u0144"}),Object(rn.jsx)(kn,{title:"Dodaj nowe zadanie",sectionContent:Object(rn.jsx)(cn,{}),extraHeaderContent:Object(rn.jsx)(On,{})}),Object(rn.jsx)(kn,{title:"Wyszukiwarka",sectionContent:Object(rn.jsx)(Dn,{})}),Object(rn.jsx)(kn,{title:"Lista zada\u0144",sectionContent:Object(rn.jsx)(bn,{}),extraHeaderContent:Object(rn.jsx)(xn,{})})]})};var Sn,En,Fn,Mn=function(){var n=Object(E.i)().id,e=Object(M.c)((function(e){return function(n,e){return Z(n).find((function(n){return n.id===e}))}(e,n)}));return Object(rn.jsxs)(zn,{children:[Object(rn.jsx)(wn,{title:"Szczeg\xf3\u0142y zadania"}),Object(rn.jsx)(kn,{title:e?e.content:"Nie znaleziono zadania \ud83d\ude25",sectionContent:e&&Object(rn.jsxs)(rn.Fragment,{children:[Object(rn.jsx)("strong",{children:"Uko\u0144czono "})," ",e.done?"Tak":"Nie"]})})]})},Un=function(){return Object(rn.jsxs)(zn,{children:[Object(rn.jsx)(wn,{title:"O autorze"}),Object(rn.jsx)(kn,{title:"Dominik Blak",sectionContent:Object(rn.jsx)(rn.Fragment,{children:Object(rn.jsx)(pn,{author:!0,children:Object(rn.jsxs)("p",{children:[Object(rn.jsx)("b",{children:"Mam na imi\u0119 Dominik."}),Object(rn.jsx)("br",{}),"Obecnie mieszkam oraz pracuj\u0119 w Krakowie. Informatyka to tak\u017ce moje hobby, dlatego postanowi\u0142em po\u0142\u0105czy\u0107 przyjemne z po\u017cytecznym i si\u0119 przebran\u017cowi\u0107. Mia\u0142em ju\u017c styczno\u015b\u0107 z",Object(rn.jsx)("i",{children:" Jav\u0105 "}),"oraz",Object(rn.jsx)("i",{children:" Angularem, "}),Object(rn.jsxs)("strong",{children:["jednak najbardziej przypda\u0142 mi do gustu",Object(rn.jsx)("i",{children:" JavaScript"})," i ",Object(rn.jsx)("i",{children:" React."})]})]})})})})]})},In=_.d.ul(Sn||(Sn=Object($.a)(["\n  background-color: ",";\n  margin: 0;\n  padding: 0;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: auto auto;\n"])),(function(n){return n.theme.color.teal})),Ln=_.d.li(En||(En=Object($.a)(["\n  list-style: none;\n  margin: 20px;\n"]))),Pn=function(){return Object(rn.jsxs)(In,{children:[Object(rn.jsx)(Ln,{children:Object(rn.jsx)(dn,{to:"/zadania",children:"Zadania"})}),Object(rn.jsx)(Ln,{children:Object(rn.jsx)(dn,{to:"/autor",children:"O autorze"})})]})},Jn=function(){return Object(rn.jsx)(S.a,{children:Object(rn.jsxs)("nav",{children:[Object(rn.jsx)(Pn,{}),Object(rn.jsxs)(E.d,{children:[Object(rn.jsx)(E.b,{path:"/zadania/:id",children:Object(rn.jsx)(Mn,{})}),Object(rn.jsx)(E.b,{path:"/zadania",children:Object(rn.jsx)(Tn,{})}),Object(rn.jsx)(E.b,{path:"/autor",children:Object(rn.jsx)(Un,{})}),Object(rn.jsx)(E.b,{path:"/",children:Object(rn.jsx)(E.a,{to:"/zadania"})})]})]})})},Rn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,54)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),o(n),i(n)}))},Hn=Object(_.b)(Fn||(Fn=Object($.a)(["\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n::after,\n::before {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: ",';\n  font-family: "Montserrat", sans-serif;\n}\n'])),(function(n){return n.theme.color.mercury})),Nn=t(35),An=t(13),Bn=t.n(An),qn=t(16),Kn=t(33),Wn=function(){var n=Object(Kn.a)(Bn.a.mark((function n(){var e;return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/Todo-list-React/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Zn=Bn.a.mark(Vn),Gn=Bn.a.mark(Xn),Qn=Bn.a.mark(Yn);function Vn(){var n;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(qn.c)(1e3);case 3:return e.next=5,Object(qn.b)(Wn);case 5:return n=e.sent,e.next=8,Object(qn.d)(K(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(qn.b)(alert,"Co\u015b posz\u0142o nie tak");case 14:case"end":return e.stop()}}),Zn,null,[[0,10]])}function Xn(){var n;return Bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qn.e)(Z);case 2:return n=e.sent,e.next=5,Object(qn.b)(L,n);case 5:case"end":return e.stop()}}),Gn)}function Yn(){return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("saga jest pod\u0142\u0105czona"),n.next=3,Object(qn.g)(q.type,Vn);case 3:return n.next=5,Object(qn.f)("*",Xn);case 5:case"end":return n.stop()}}),Qn)}var $n=Bn.a.mark(_n);function _n(){return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(qn.a)([Yn()]);case 2:case"end":return n.stop()}}),$n)}var ne=Object(Nn.a)(),ee=Object(U.a)({reducer:{tasks:Y},middleware:[ne]});ne.run(_n);var te=ee;T.a.render(Object(rn.jsx)(C.a.StrictMode,{children:Object(rn.jsx)(M.a,{store:te,children:Object(rn.jsxs)(_.a,{theme:{color:{white:"#ffffff",grey:"#808080",teal:"#008080",mercury:"#e6e6e6",green:"#008000",red:"#FF3333"},breakpoint:{mobileMax:767},weight:{medium:700}},children:[Object(rn.jsx)(Hn,{}),Object(rn.jsx)(Jn,{})]})})}),document.getElementById("root")),Rn()}},[[53,1,2]]]);
//# sourceMappingURL=main.77a6e3ea.chunk.js.map