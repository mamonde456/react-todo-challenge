(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{53:function(e,n,t){"use strict";t.r(n);var o,r=t(0),c=t.n(r),i=t(18),a=t.n(i),l=t(35),s=t(7),b=t(22),d=t(28),u=t(1),j=t(3),O=t(29);!function(e){e.TO_DO="TO_DO",e.DOING="DOING",e.DONE="DONE",e.DLELTE="DLELTE"}(o||(o={}));var h=Object(s.b)({key:"category",default:o.TO_DO}),f=Object(O.recoilPersist)().persistAtom,m=Object(s.b)({key:"toDo",default:[],effects_UNSTABLE:[f]}),g=Object(s.c)({key:"toDoSelector",get:function(e){var n=e.get,t=n(m),o=n(h);return t.filter((function(e){return e.category===o}))}}),p=t(5),x=t(30),D=t(4);var v=function(){var e=Object(s.f)(m),n=Object(s.e)(h),t=Object(x.a)(),o=t.register,r=t.handleSubmit,c=t.setValue;return Object(D.jsxs)("form",{onSubmit:r((function(t){var o=t.toDo;e((function(e){return[{text:o,id:Date.now(),category:n}].concat(Object(p.a)(e))})),c("toDo","")})),children:[Object(D.jsx)("input",Object(u.a)(Object(u.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(D.jsx)("button",{children:"add"})]})};var y=function(e){var n=e.text,t=e.category,r=e.id,c=Object(s.f)(m),i=function(e){var t=e.currentTarget.name;c((function(e){var c=e.findIndex((function(e){return e.id===r})),i={text:n,id:r,category:t};return t===o.DLELTE?[].concat(Object(p.a)(e.slice(0,c)),Object(p.a)(e.slice(c+1))):[].concat(Object(p.a)(e.slice(0,c)),[i],Object(p.a)(e.slice(c+1)))}))};return Object(D.jsxs)("li",{children:[Object(D.jsx)("span",{children:n}),t!==o.DOING&&Object(D.jsx)("button",{name:o.DOING,onClick:i,children:"Doing"}),t!==o.TO_DO&&Object(D.jsx)("button",{name:o.TO_DO,onClick:i,children:"todo"}),t!==o.DONE&&Object(D.jsx)("button",{name:o.DONE,onClick:i,children:"done"}),Object(D.jsx)("button",{name:o.DLELTE,onClick:i,children:"delete"})]})};var k,T=function(){var e=Object(s.e)(g),n=Object(s.d)(h),t=Object(j.a)(n,2),r=t[0],c=t[1];return Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:"To Dos"}),Object(D.jsx)("hr",{}),Object(D.jsxs)("select",{value:r,onInput:function(e){c(e.currentTarget.value)},children:[Object(D.jsx)("option",{value:o.TO_DO,children:"Todo"}),Object(D.jsx)("option",{value:o.DOING,children:"Doing"}),Object(D.jsx)("option",{value:o.DONE,children:"Done"})]}),Object(D.jsx)(v,{}),null===e||void 0===e?void 0:e.map((function(e){return Object(D.jsx)(y,Object(u.a)({},e),e.id)}))]})},E=Object(b.b)(k||(k=Object(d.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var w=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(E,{}),Object(D.jsx)(T,{})]})};a.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(l.a,{basename:"/mamonde456.github.io/react-todo-challenge",children:Object(D.jsx)(s.a,{children:Object(D.jsx)(b.a,{theme:{bgColor:"#3F8CF2",boardColor:"#DADFE9",cardColor:"white",textColor:"black"},children:Object(D.jsx)(w,{})})})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.df3efaed.chunk.js.map