"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[668211],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=o,m=p["".concat(s,".").concat(y)]||p[y]||u[y]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},456352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(296540),n(15680));const a={title:"SQL Converter for Apache Doris",language:"en"},i=void 0,l={unversionedId:"lakehouse/sql-dialect",id:"version-2.1/lakehouse/sql-dialect",title:"SQL Converter for Apache Doris",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/lakehouse/sql-dialect.md",sourceDirName:"lakehouse",slug:"/lakehouse/sql-dialect",permalink:"/docs/lakehouse/sql-dialect",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SQL Converter for Apache Doris",language:"en"},sidebar:"docs",previous:{title:"Cloud Service Authentication",permalink:"/docs/lakehouse/cloud-auth"},next:{title:"Cluster Upgrade",permalink:"/docs/admin-manual/cluster-management/upgrade"}},s={},c=[{value:"Deploy service",id:"deploy-service",level:2},{value:"Use SQL dialect",id:"use-sql-dialect",level:2},{value:"Clickhouse",id:"clickhouse",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"sql-dialect"},"SQL Dialect"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Starting from version 2.1, Doris can support multiple SQL dialects, such as Presto, Trino, Hive, PostgreSQL, Spark, Oracle, Clickhouse, and more. Through this feature, users can directly use the corresponding SQL dialect to query data in Doris, which facilitates users to smoothly migrate their original business to Doris.")),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"This function is currently an experimental function. If you encounter any problems during use, you are welcome to provide feedback through the mail group, ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues"},"GitHub issue"))),(0,o.yg)("h2",{id:"deploy-service"},"Deploy service"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Download latest ",(0,o.yg)("a",{parentName:"li",href:"https://www.selectdb.com/tools/doris-sql-convertor"},"SQL Converter for Apache Doris"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},":::info NOTE\nThe SQL dialect conversion tool is based on the open-source [SQLGlot](https://github.com/tobymao/sqlglot) and has been further developed by SelectDB. For more information about SQLGlot, please refer to the [SQLGlot official website](https://sqlglot.com/sqlglot.html).\n")),(0,o.yg)("p",null,"The SQL Convertor is not maintained or endorsed by Apache Doris; these efforts are supervised by Committers and the Doris PMC. The use of these resources and services is entirely at your own discretion, and the community does not verify the licensing or validity of these tools.\n:::"),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"On any FE node, start the service through the following command:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# Configuring the service port\nvim apiserver/conf/config.conf\n# Start the SQL Converter for Apache Doris conversion service\nsh apiserver/bin/start.sh\n# If you need a front-end interface, you can configure the corresponding port in the webserver and start it. If you don't need a front-end, you can ignore the following operations.\nvim webserver/conf/config.conf\n# Start the front-end interface\nsh webserver/bin/start.sh\n")))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},":::tip\n  1. This service is a stateless service and can be started and stopped at any time.\n\n  2. Configure port in `apiserver/conf/config.conf` to specify any available port, and configure workers to specify the number of threads to start. In concurrent scenarios, you can adjust as needed, the default is 1.\n\n  3. It is recommended to start a separate service on each FE node.\n\n4. If you need to start the front-end interface, you can configure the SQL Converter for Apache Doris conversion service address in `webserver/conf/config`.conf. The default is `API_HOST=http://127.0.0.1:5001`\n:::\n")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Start the Doris cluster (version 2.1 or higher)")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Set the URL of the SQL Dialect Conversion Service with the following command in Doris:"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},'MySQL> set global sql_converter_service_url = "http://127.0.0.1:5001/api/v1/convert"')),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"127.0.0.1:5001")," is the deployment node IP and port of the SQL dialect conversion service.")))),(0,o.yg)("h2",{id:"use-sql-dialect"},"Use SQL dialect"),(0,o.yg)("p",null,"Currently supported dialect types include:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"presto")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"trino")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"clickhouse")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"hive")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"spark")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"postgres")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"oracle"))),(0,o.yg)("p",null,"example:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Presto")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE TABLE  test_sqlconvert (\n         id int,\n         start_time DateTime,\n         value String,\n         arr_int ARRAY<Int>,\n         arr_str ARRAY<String>\n     ) ENGINE=OLAP\n     DUPLICATE KEY(`id`)\n     COMMENT 'OLAP'\n     DISTRIBUTED BY HASH(`id`) BUCKETS 1\n     PROPERTIES (\n     \"replication_allocation\" = \"tag.location.default: 1\"\n     );\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> INSERT INTO test_sqlconvert values(1, '2024-05-20 13:14:52', '2024-01-14',[1, 2, 3, 3], ['Hello', 'World']);\nQuery OK, 1 row affected (0.08 sec)\n\nmysql> set sql_dialect=presto;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SELECT cast(start_time as varchar(20)) as col1,\n            array_distinct(arr_int) as col2,\n            FILTER(arr_str, x -> x LIKE '%World%') as col3,\n            to_date(value,'%Y-%m-%d') as col4,\n            YEAR(start_time) as col5,\n            date_add('month', 1, start_time) as col6,\n            REGEXP_EXTRACT_ALL(value, '-.') as col7,\n            JSON_EXTRACT('{\"id\": \"33\"}', '$.id')as col8,\n            element_at(arr_int, 1) as col9,\n            date_trunc('day',start_time) as col10\n         FROM test_sqlconvert\n         where date_trunc('day',start_time)= DATE'2024-05-20'     \n     order by id;\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n1 row in set (0.03 sec)\n\n")),(0,o.yg)("h3",{id:"clickhouse"},"Clickhouse"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set sql_dialect=clickhouse;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> select  toString(start_time) as col1,\n             arrayCompact(arr_int) as col2,\n             arrayFilter(x -> x like '%World%',arr_str)as col3,\n             toDate(value) as col4,\n             toYear(start_time)as col5,\n             addMonths(start_time, 1)as col6,\n             extractAll(value, '-.')as col7,\n             JSONExtractString('{\"id\": \"33\"}' , 'id')as col8,\n             arrayElement(arr_int, 1) as col9,\n             date_trunc('day',start_time) as col10\n          FROM test_sqlconvert\n          where date_trunc('day',start_time)= '2024-05-20 00:00:00'     \n     order by id;\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n1 row in set (0.02 sec)\n")))}u.isMDXComponent=!0}}]);