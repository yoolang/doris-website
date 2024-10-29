"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[394304],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},803553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(58168),i=(n(296540),n(15680));const o={title:"INTERSECT_COUNT",language:"en"},a=void 0,c={unversionedId:"sql-manual/sql-functions/bitmap-functions/intersect-count",id:"version-3.0/sql-manual/sql-functions/bitmap-functions/intersect-count",title:"INTERSECT_COUNT",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/bitmap-functions/intersect-count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/intersect-count",permalink:"/docs/3.0/sql-manual/sql-functions/bitmap-functions/intersect-count",draft:!1,tags:[],version:"3.0",frontMatter:{title:"INTERSECT_COUNT",language:"en"},sidebar:"docs",previous:{title:"BITMAP_MIN",permalink:"/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-min"},next:{title:"BITMAP_INTERSECT",permalink:"/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-intersect"}},s={},l=[{value:"intersect_count",id:"intersect_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"intersect_count"},"intersect_count"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BITMAP INTERSECT_COUNT(bitmap_column, column_to_filter, filter_values)"),"\nCalculate the intersection of two or more bitmaps\nUsage: intersect_count(bitmap_column_to_count, filter_column, filter_values ...)\nExample: intersect_count(user_id, event, 'A', 'B', 'C'), meaning find the intersect count of user_id in all A/B/C 3 bitmaps"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"MySQL [test_query_qa]> select dt,bitmap_to_string(user_id) from pv_bitmap where dt in (3,4);\n+------+-----------------------------+\n| dt   | bitmap_to_string(`user_id`) |\n+------+-----------------------------+\n|    4 | 1,2,3                       |\n|    3 | 1,2,3,4,5                   |\n+------+-----------------------------+\n2 rows in set (0.012 sec)\n\nMySQL [test_query_qa]> select intersect_count(user_id,dt,3,4) from pv_bitmap;\n+----------------------------------------+\n| intersect_count(`user_id`, `dt`, 3, 4) |\n+----------------------------------------+\n|                                      3 |\n+----------------------------------------+\n1 row in set (0.014 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"INTERSECT_COUNT,BITMAP\n")))}m.isMDXComponent=!0}}]);