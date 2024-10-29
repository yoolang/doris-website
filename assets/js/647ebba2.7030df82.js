"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[320232],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,d=u["".concat(i,".").concat(m)]||u[m]||y[m]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},909311:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-TYPECAST",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-TYPECAST",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-TYPECAST",title:"SHOW-TYPECAST",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-TYPECAST.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-TYPECAST",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TYPECAST",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-TYPECAST",language:"en"},sidebar:"docs",previous:{title:"SHOW-FUNCTIONS",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS"},next:{title:"SHOW-FILE",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-FILE"}},i={},c=[{value:"SHOW-TYPECAST",id:"show-typecast",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-typecast"},"SHOW-TYPECAST"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW TYPECAST"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"View all type cast under the database. If the user specifies a database, then view the corresponding database, otherwise directly query the database where the current session is located"),(0,a.yg)("p",null,"Requires ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW")," permission on this database"),(0,a.yg)("p",null,"grammar"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TYPE_CAST [IN|FROM db]\n")),(0,a.yg)("p",null," Parameters"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"db"),": database name to query")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show type_cast in testDb\\G\n**************************** 1. row ******************** ******\nOrigin Type: TIMEV2\n  Cast Type: TIMEV2\n**************************** 2. row ******************** ******\nOrigin Type: TIMEV2\n  Cast Type: TIMEV2\n**************************** 3. row ******************** ******\nOrigin Type: TIMEV2\n  Cast Type: TIMEV2\n\n3 rows in set (0.00 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, TYPECAST\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}y.isMDXComponent=!0}}]);