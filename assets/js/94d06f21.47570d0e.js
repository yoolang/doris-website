"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[331343],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>O});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,O=p["".concat(i,".").concat(y)]||p[y]||m[y]||l;return t?n.createElement(O,o(o({ref:r},u),{},{components:t})):n.createElement(O,o({ref:r},u))}));function O(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=y;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},604048:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=t(58168),a=(t(296540),t(15680));const l={title:"SHOW-SQL-BLOCK-RULE",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",title:"SHOW-SQL-BLOCK-RULE",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-SQL-BLOCK-RULE",language:"en"},sidebar:"docs",previous:{title:"SHOW-SNAPSHOT",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT"},next:{title:"SHOW-ROUTINE-LOAD",permalink:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD"}},i={},c=[{value:"SQL-BLOCK-RULE",id:"sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"sql-block-rule"},"SQL-BLOCK-RULE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW SQL BLOCK RULE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"View the configured SQL blocking rules. If you do not specify a rule name, you will view all rules."),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW SQL_BLOCK_RULE [FOR RULE_NAME];\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"View all rules."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW SQL_BLOCK_RULE;\n+------------+----------------------------+---------+- -------------+------------+-------------+--------+- -------+\n| Name | Sql | SqlHash | PartitionNum | TabletNum | Cardinality | Global | Enable |\n+------------+----------------------------+---------+- -------------+------------+-------------+--------+- -------+\n| test_rule | select * from order_analysis | NULL | 0 | 0 | 0 | true | true |\n| test_rule2 | NULL | NULL | 30 | 0 | 10000000000 | false | true |\n+------------+----------------------------+---------+- -------------+------------+-------------+--------+- -------+\n2 rows in set (0.01 sec)\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Make a rule name query"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW SQL_BLOCK_RULE FOR test_rule2;\n+------------+------+---------+---------------+---- -------+-------------+--------+--------+\n| Name | Sql | SqlHash | PartitionNum | TabletNum | Cardinality | Global | Enable |\n+------------+------+---------+---------------+---- -------+-------------+--------+--------+\n| test_rule2 | NULL | NULL | 30 | 0 | 10000000000 | false | true |\n+------------+------+---------+---------------+---- -------+-------------+--------+--------+\n1 row in set (0.00 sec)\n\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, SQL_BLOCK_RULE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);