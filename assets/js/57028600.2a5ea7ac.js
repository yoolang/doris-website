"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[948507],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),y=a,g=p["".concat(o,".").concat(y)]||p[y]||m[y]||l;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},197076:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"SET-PROPERTY",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",id:"version-2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",title:"SET-PROPERTY",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",permalink:"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SET-PROPERTY",language:"en"},sidebar:"docs",previous:{title:"SET-PASSWORD",permalink:"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD"},next:{title:"LDAP",permalink:"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/LDAP"}},o={},c=[{value:"SET-PROPERTY",id:"set-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"set-property"},"SET-PROPERTY"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SET PROPERTY"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"Set user attributes, including resources assigned to users, importing clusters, etc."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']\n")),(0,a.yg)("p",null,"The user attribute set here is for user, not user_identity. That is, if two users 'jack'@'%' and 'jack'@'192.%' are created through the CREATE USER statement, the SET PROPERTY statement can only be used for the user jack, not 'jack'@'% ' or 'jack'@'192.%'"),(0,a.yg)("p",null,"key:"),(0,a.yg)("p",null,"Super user privileges:"),(0,a.yg)("p",null," max_user_connections: The maximum number of connections."),(0,a.yg)("p",null," max_query_instances: The number of instances that a user can use to execute a query at the same time."),(0,a.yg)("p",null," sql_block_rules: Set sql block rules. Once set, queries sent by this user will be rejected if they match the rules."),(0,a.yg)("p",null," cpu_resource_limit: Limit the cpu resources for queries. See the introduction to the session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"cpu_resource_limit")," for details. -1 means not set."),(0,a.yg)("p",null," exec_mem_limit: Limit the memory usage of the query. See the introduction to the session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," for details. -1 means not set."),(0,a.yg)("p",null," resource_tags: Specifies the user's resource tag permissions."),(0,a.yg)("p",null," query_timeout: Specifies the user's query timeout permissions."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Note: If the attributes `cpu_resource_limit`, `exec_mem_limit` are not set, the value in the session variable will be used by default.\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the maximum number of user jack connections to 1000"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the number of available instances for user jack's query to 3000"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_query_instances' = '3000';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the sql block rule of user jack"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'sql_block_rules' = 'rule1, rule2';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the cpu usage limit of user jack"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'cpu_resource_limit' = '2';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the user's resource tag permissions"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'resource_tags.location' = 'group_a, group_b';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the user's query memory usage limit, in bytes"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'exec_mem_limit' = '2147483648';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the user's query timeout limit, in second"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'query_timeout' = '500';\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SET, PROPERTY\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);