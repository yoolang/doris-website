"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[408341],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var o=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},p="mdxType",j={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},y=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),y=r,f=p["".concat(i,".").concat(y)]||p[y]||j[y]||s;return t?o.createElement(f,c(c({ref:n},u),{},{components:t})):o.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,c=new Array(s);c[0]=y;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[p]="string"==typeof e?e:r,c[1]=a;for(var l=2;l<s;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},428114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>j,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(58168),r=(t(296540),t(15680));const s={title:"json_object",language:"zh-CN"},c=void 0,a={unversionedId:"sql-manual/sql-functions/json-functions/json_object",id:"version-1.2/sql-manual/sql-functions/json-functions/json_object",title:"json_object",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/json-functions/json_object.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json_object",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/json_object",draft:!1,tags:[],version:"1.2",frontMatter:{title:"json_object",language:"zh-CN"},sidebar:"docs",previous:{title:"json_array",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/json_array"},next:{title:"json_quote",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/json_quote"}},i={},l=[{value:"json_object",id:"json_object",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},p="wrapper";function j(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,o.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"json_object"},"json_object"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"VARCHAR json_object(VARCHAR,...)")),(0,r.yg)("p",null,"\u751f\u6210\u4e00\u4e2a\u5305\u542b\u6307\u5b9aKey-Value\u5bf9\u7684json object, \u5f53Key\u503c\u4e3aNULL\u6216\u8005\u4f20\u5165\u53c2\u6570\u4e3a\u5947\u6570\u4e2a\u65f6\uff0c\u8fd4\u56de\u5f02\u5e38\u9519\u8bef"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"MySQL> select json_object();\n+---------------+\n| json_object() |\n+---------------+\n| {}            |\n+---------------+\n\nMySQL> select json_object('time',curtime());\n+--------------------------------+\n| json_object('time', curtime()) |\n+--------------------------------+\n| {\"time\": \"10:49:18\"}           |\n+--------------------------------+\n\n\nMySQL> SELECT json_object('id', 87, 'name', 'carrot');\n+-----------------------------------------+\n| json_object('id', 87, 'name', 'carrot') |\n+-----------------------------------------+\n| {\"id\": 87, \"name\": \"carrot\"}            |\n+-----------------------------------------+\n\n\nMySQL> select json_object('username',null);\n+---------------------------------+\n| json_object('username', 'NULL') |\n+---------------------------------+\n| {\"username\": NULL}              |\n+---------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"json,object,json_object"))}j.isMDXComponent=!0}}]);