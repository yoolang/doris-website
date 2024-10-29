"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[528332],{15680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>y});var t=n(296540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),u=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=u(e.components);return t.createElement(p.Provider,{value:r},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,y=s["".concat(p,".").concat(m)]||s[m]||c[m]||a;return n?t.createElement(y,l(l({ref:r},d),{},{components:n})):t.createElement(y,l({ref:r},d))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29681:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=n(58168),o=(n(296540),n(15680));const a={title:"Download Log about Load Error",language:"en"},l=void 0,i={unversionedId:"admin-manual/be/download",id:"version-2.0/admin-manual/be/download",title:"Download Log about Load Error",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/be/download.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/download",permalink:"/docs/2.0/admin-manual/be/download",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Download Log about Load Error",language:"en"},sidebar:"docs",previous:{title:"Checksum",permalink:"/docs/2.0/admin-manual/be/checksum"},next:{title:"Pad Rowset",permalink:"/docs/2.0/admin-manual/be/pad-rowset"}},p={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u},s="wrapper";function c(e){let{components:r,...n}=e;return(0,o.yg)(s,(0,t.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"download-log-about-load-error"},"Download Log about Load Error"),(0,o.yg)("h2",{id:"request"},"Request"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /api/_load_error_log?token={string}&file={string}")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Download log file about load error"),(0,o.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"file"),"\nPath of log")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"token"),"\ntoken         "))),(0,o.yg)("h2",{id:"request-body"},"Request body"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"response"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"File of log\n")),(0,o.yg)("h2",{id:"examples"},"Examples"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'```\ncurl "http://127.0.0.1:8040/api/_load_error_log?file=a&token=1"\n```\n')))}c.isMDXComponent=!0}}]);