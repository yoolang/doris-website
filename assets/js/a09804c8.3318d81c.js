"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[532758],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,y=d["".concat(o,".").concat(p)]||d[p]||h[p]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},541801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"SQL Cache",language:"en"},l=void 0,s={unversionedId:"query/query-cache/sql-cache-manual",id:"version-2.0/query/query-cache/sql-cache-manual",title:"SQL Cache",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/query/query-cache/sql-cache-manual.md",sourceDirName:"query/query-cache",slug:"/query/query-cache/sql-cache-manual",permalink:"/docs/2.0/query/query-cache/sql-cache-manual",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SQL Cache",language:"en"},sidebar:"docs",previous:{title:"Query Caches Overview",permalink:"/docs/2.0/query/query-cache/"},next:{title:"Partition Cache",permalink:"/docs/2.0/query/query-cache/partition-cache-manual"}},o={},c=[{value:"Demand scenarios &amp; solutions",id:"demand-scenarios--solutions",level:2},{value:"Design principles",id:"design-principles",level:2},{value:"Usage",id:"usage",level:2},{value:"Cache conditions",id:"cache-conditions",level:2},{value:"Unfinished business",id:"unfinished-business",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sql-cache"},"SQL Cache"),(0,a.yg)("p",null,"The SQL statement will hit the cache if it is completely consistent."),(0,a.yg)("h2",{id:"demand-scenarios--solutions"},"Demand scenarios & solutions"),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.0/query/query-cache/"},"Query Caches Overview")),(0,a.yg)("h2",{id:"design-principles"},"Design principles"),(0,a.yg)("p",null,"SQLCache stores and obtains the cache based on the SQL signature, the partition ID of the queried table, and the latest version of the partition. The combination of the three determines a cached data set. If any one of them changes, such as the SQL changes, the query fields or conditions are different, or the version changes after the data is updated, the cache will not be hit."),(0,a.yg)("p",null,"If multiple tables are joined, the most recently updated partition ID and latest version number are used. If one of the tables is updated, the partition ID or version number will be different, and the cache will not be hit."),(0,a.yg)("p",null,"SQLCache is more suitable for T+1 update scenarios. Data is updated in the early morning. The first query obtains the results from BE and puts them into the cache. Subsequent queries of the same nature obtain the results from the cache. Real-time update data can also be used, but there may be a problem of low hit rate."),(0,a.yg)("p",null,"Currently supports OlapTable internal table and Hive external table."),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("p",null,"Make sure cache_enable_sql_mode=true in fe.conf (default is true)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_enable_sql_mode=true\n")),(0,a.yg)("p",null,"Set variables in MySQL command line"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> set [global] enable_sql_cache=true;\n")),(0,a.yg)("p",null,"Note: global is a global variable and does not refer to the current session variable."),(0,a.yg)("h2",{id:"cache-conditions"},"Cache conditions"),(0,a.yg)("p",null,"After the first query, if the following three conditions are met, the query results will be cached."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"(Current time - the last update time of the queried partition) is greater than cache_last_version_interval_second in fe.conf.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The number of query result rows is less than cache_result_max_row_count in fe.conf.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The query result bytes is less than cache_result_max_data_size in fe.conf."))),(0,a.yg)("p",null,"For detailed parameter introduction and unfinished matters, see query-cache.md."),(0,a.yg)("h2",{id:"unfinished-business"},"Unfinished business"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"SQL contains functions that generate random values, such as random(). Using QueryCache will cause the query results to lose their randomness, and the same results will be obtained every time they are executed.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Similar SQL, 2 indicators were queried before, and now 3 indicators are queried. Can the cache of 2 indicators be used? Not currently supported"))))}h.isMDXComponent=!0}}]);