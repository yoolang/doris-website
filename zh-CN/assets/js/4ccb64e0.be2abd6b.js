"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[511794],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||s;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=f;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},341738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const s={title:"MASK_LAST_N",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/mask/mask-last-n",id:"version-2.1/sql-manual/sql-functions/string-functions/mask/mask-last-n",title:"MASK_LAST_N",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/string-functions/mask/mask-last-n.md",sourceDirName:"sql-manual/sql-functions/string-functions/mask",slug:"/sql-manual/sql-functions/string-functions/mask/mask-last-n",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/mask/mask-last-n",draft:!1,tags:[],version:"2.1",frontMatter:{title:"MASK_LAST_N",language:"zh-CN"},sidebar:"docs",previous:{title:"MASK_FIRST_N",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/mask/mask-first-n"},next:{title:"LIKE",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/like/"}},i={},c=[{value:"mask_last_n",id:"mask_last_n",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"mask_last_n"},"mask_last_n"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR mask_last_n(VARCHAR str[, INT n])")),(0,a.yg)("p",null,'\u8fd4\u56de str \u7684\u63a9\u7801\u7248\u672c\uff0c\u5176\u4e2d\u6700\u540e n \u4e2a\u5b57\u7b26\u88ab\u8f6c\u6362\u4e3a\u63a9\u7801\u3002 \u5927\u5199\u5b57\u6bcd\u8f6c\u6362\u4e3a\u201cX\u201d\uff0c\u5c0f\u5199\u5b57\u6bcd\u8f6c\u6362\u4e3a\u201cx\u201d\uff0c\u6570\u5b57\u8f6c\u6362\u4e3a\u201cn\u201d\u3002 \u4f8b\u5982\uff0cmask_last_n("1234-5678-8765-4321", 4) \u7ed3\u679c\u4e3a 1234-5678-8765-nnnn\u3002'),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// table test\n+-----------+\n| name      |\n+-----------+\n| abc123EFG |\n| NULL      |\n| 456AbCdEf |\n+-----------+\n\nmysql> select mask_last_n(name, 5) from test;\n+------------------------+\n| mask_last_n(`name`, 5) |\n+------------------------+\n| abc1nnXXX              |\n| NULL                   |\n| 456AxXxXx              |\n+------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mask_last_n\n")))}m.isMDXComponent=!0}}]);