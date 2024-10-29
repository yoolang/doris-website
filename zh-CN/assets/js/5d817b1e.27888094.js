"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[206544],{15680:(e,t,n)=>{n.d(t,{xA:()=>E,yg:()=>A});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},E=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,E=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,A=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return n?r.createElement(A,o(o({ref:t},E),{},{components:n})):r.createElement(A,o({ref:t},E))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},694826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-CREATE-ASYNC-MATERIALIZED-VIEW",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-CREATE-ASYNC-MATERIALIZED-VIEW",id:"version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-ASYNC-MATERIALIZED-VIEW",title:"SHOW-CREATE-ASYNC-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-ASYNC-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-ASYNC-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-ASYNC-MATERIALIZED-VIEW",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SHOW-CREATE-ASYNC-MATERIALIZED-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-CREATE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW"},next:{title:"SHOW-CHARSET",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Show-Statements/SHOW-CHARSET"}},i={},c=[{value:"SHOW-CREATE-ASYNC-MATERIALIZED-VIEW",id:"show-create-async-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],E={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-create-async-materialized-view"},"SHOW-CREATE-ASYNC-MATERIALIZED-VIEW"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW CREATE ASYNC MATERIALIZED VIEW"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u521b\u5efa\u8bed\u53e5\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE MATERIALIZED VIEW [DBNAME.]MV_NAME\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"DBNAMNE")," : \u6570\u636e\u5e93\u540d\u79f0"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"MV_NAME")," : \u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u540d\u79f0")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b mv1 \u7684\u521b\u5efa\u8bed\u53e5"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE MATERIALIZED VIEW mv1;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, CREATE, MATERIALIZED, VIEW, ASYNC\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);