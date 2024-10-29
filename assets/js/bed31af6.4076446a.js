"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[242901],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,c=p["".concat(m,".").concat(u)]||p[u]||g[u]||i;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},122913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const i={title:"Group Commit",language:"en"},l=void 0,o={unversionedId:"data-operate/import/import-way/group-commit-manual",id:"version-3.0/data-operate/import/import-way/group-commit-manual",title:"Group Commit",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/data-operate/import/import-way/group-commit-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/group-commit-manual",permalink:"/docs/3.0/data-operate/import/import-way/group-commit-manual",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Group Commit",language:"en"},sidebar:"docs",previous:{title:"MySQL Load",permalink:"/docs/3.0/data-operate/import/import-way/mysql-load-manual"},next:{title:"Import Data Formats",permalink:"/docs/3.0/data-operate/import/load-data-format"}},m={},s=[{value:"Group Commit Mode",id:"group-commit-mode",level:2},{value:"Basic operations",id:"basic-operations",level:2},{value:"Use <code>JDBC</code>",id:"use-jdbc",level:3},{value:"INSERT INTO VALUES",id:"insert-into-values",level:3},{value:"Stream Load",id:"stream-load",level:3},{value:"Http Stream",id:"http-stream",level:3},{value:"Group commit condition",id:"group-commit-condition",level:2},{value:"Modify the time interval condition",id:"modify-the-time-interval-condition",level:3},{value:"Modify the data size condition",id:"modify-the-data-size-condition",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Relevant system configuration",id:"relevant-system-configuration",level:2},{value:"BE configuration",id:"be-configuration",level:3},{value:"<code>group_commit_wal_path</code>",id:"group_commit_wal_path",level:4},{value:"<code>group_commit_memory_rows_for_max_filter_ratio</code>",id:"group_commit_memory_rows_for_max_filter_ratio",level:4},{value:"Performance",id:"performance",level:2},{value:"Stream Load",id:"stream-load-1",level:3},{value:"Environment",id:"environment",level:4},{value:"DataSet",id:"dataset",level:4},{value:"Test Tool",id:"test-tool",level:4},{value:"Test Method",id:"test-method",level:4},{value:"Test Result",id:"test-result",level:4},{value:"JDBC",id:"jdbc",level:3},{value:"Environment",id:"environment-1",level:4},{value:"DataSet",id:"dataset-1",level:4},{value:"Test Method",id:"test-method-1",level:4},{value:"Test Method",id:"test-method-2",level:4},{value:"Test Result",id:"test-result-1",level:4}],d={toc:s},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"group-commit"},"Group Commit"),(0,r.yg)("p",null,"Group commit load does not introduce a new data import method, but an extension of ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO tbl VALUS(...)"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Stream Load")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Http Stream"),". It is a way to improve the write performance of Doris with high-concurrency and small-data writes. Your application can directly use JDBC to do high-concurrency insert operation into Doris, at the same time, combining PreparedStatement can get even higher performance. In logging scenarios, you can also do high-concurrency Stream Load or Http Stream into Doris. "),(0,r.yg)("h2",{id:"group-commit-mode"},"Group Commit Mode"),(0,r.yg)("p",null,"Group Commit provides 3 modes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"off_mode"))),(0,r.yg)("p",null,"Disable group commit, keep the original behavior for ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO VALUES"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Stream Load")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Http Stream"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"sync_mode"))),(0,r.yg)("p",null,"Doris groups multiple loads into one transaction commit based on the ",(0,r.yg)("inlineCode",{parentName:"p"},"group_commit_interval")," table property. The load is returned after the transaction commit. This mode is suitable for high-concurrency writing scenarios and requires immediate data visibility after the load is finished."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"async_mode"))),(0,r.yg)("p",null,"Doris writes data to the Write Ahead Log (WAL) firstly, then the load is returned. Doris groups multiple loads into one transaction commit based on the ",(0,r.yg)("inlineCode",{parentName:"p"},"group_commit_interval")," table property, and the data is visible after the commit. To prevent excessive disk space usage by the WAL, it automatically switches to ",(0,r.yg)("inlineCode",{parentName:"p"},"sync_mode"),". This is suitable for latency-sensitive and high-frequency writing."),(0,r.yg)("h2",{id:"basic-operations"},"Basic operations"),(0,r.yg)("p",null,"If the table schema is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `dt` (\n    `id` int(11) NOT NULL,\n    `name` varchar(50) NULL,\n    `score` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n    "replication_num" = "1"\n);\n')),(0,r.yg)("h3",{id:"use-jdbc"},"Use ",(0,r.yg)("inlineCode",{parentName:"h3"},"JDBC")),(0,r.yg)("p",null,"To reduce the CPU cost of SQL parsing and query planning, we provide the ",(0,r.yg)("inlineCode",{parentName:"p"},"PreparedStatement")," in the FE. When using ",(0,r.yg)("inlineCode",{parentName:"p"},"PreparedStatement"),", the SQL and its plan will be cached in the session level memory cache and will be reused later on, which reduces the CPU cost of FE. The following is an example of using PreparedStatement in JDBC:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Setup JDBC url and enable server side prepared statement")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"url = jdbc:mysql://127.0.0.1:9030/db?useServerPrepStmts=true\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Set ",(0,r.yg)("inlineCode",{parentName:"li"},"group_commit")," session variable, there are two ways to do it:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add ",(0,r.yg)("inlineCode",{parentName:"li"},"sessionVariables=group_commit=async_mode")," in JDBC url")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"url = jdbc:mysql://127.0.0.1:9030/db?useServerPrepStmts=true&sessionVariables=group_commit=async_mode\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use ",(0,r.yg)("inlineCode",{parentName:"li"},"SET group_commit = async_mode;")," command")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'try (Statement statement = conn.createStatement()) {\n    statement.execute("SET group_commit = async_mode;");\n}\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Using ",(0,r.yg)("inlineCode",{parentName:"li"},"PreparedStatement"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'private static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";\nprivate static final String URL_PATTERN = "jdbc:mysql://%s:%d/%s?useServerPrepStmts=true";\nprivate static final String HOST = "127.0.0.1";\nprivate static final int PORT = 9087;\nprivate static final String DB = "db";\nprivate static final String TBL = "dt";\nprivate static final String USER = "root";\nprivate static final String PASSWD = "";\nprivate static final int INSERT_BATCH_SIZE = 10;\n\nprivate static void groupCommitInsert() throws Exception {\n    Class.forName(JDBC_DRIVER);\n    try (Connection conn = DriverManager.getConnection(String.format(URL_PATTERN, HOST, PORT, DB), USER, PASSWD)) {\n        // set session variable \'group_commit\'\n        try (Statement statement = conn.createStatement()) {\n            statement.execute("SET group_commit = async_mode;");\n        }\n\n        String query = "insert into " + TBL + " values(?, ?, ?)";\n        try (PreparedStatement stmt = conn.prepareStatement(query)) {\n            for (int i = 0; i < INSERT_BATCH_SIZE; i++) {\n                stmt.setInt(1, i);\n                stmt.setString(2, "name" + i);\n                stmt.setInt(3, i + 10);\n                int result = stmt.executeUpdate();\n                System.out.println("rows: " + result);\n            }\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    }\n}   \n\nprivate static void groupCommitInsertBatch() throws Exception {\n    Class.forName(JDBC_DRIVER);\n    // add rewriteBatchedStatements=true and cachePrepStmts=true in JDBC url\n    // set session variables by sessionVariables=group_commit=async_mode in JDBC url\n    try (Connection conn = DriverManager.getConnection(\n            String.format(URL_PATTERN + "&rewriteBatchedStatements=true&cachePrepStmts=true&sessionVariables=group_commit=async_mode", HOST, PORT, DB), USER, PASSWD)) {\n\n        String query = "insert into " + TBL + " values(?, ?, ?)";\n        try (PreparedStatement stmt = conn.prepareStatement(query)) {\n            for (int j = 0; j < 5; j++) {\n                // 10 rows per insert\n                for (int i = 0; i < INSERT_BATCH_SIZE; i++) {\n                    stmt.setInt(1, i);\n                    stmt.setString(2, "name" + i);\n                    stmt.setInt(3, i + 10);\n                    stmt.addBatch();\n                }\n                int[] result = stmt.executeBatch();\n            }\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    }\n}\n')),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"./insert-into-manual"},"Synchronize Data Using Insert Method")," for more details about ",(0,r.yg)("strong",{parentName:"p"},"JDBC"),"."),(0,r.yg)("h3",{id:"insert-into-values"},"INSERT INTO VALUES"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"async_mode")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"# Config session variable to enable the async group commit, the default value is off_mode\nmysql> set group_commit = async_mode;\n\n# The retured label is start with 'group_commit', which is the label of the real load job\nmysql> insert into dt values(1, 'Bob', 90), (2, 'Alice', 99);\nQuery OK, 2 rows affected (0.05 sec)\n{'label':'group_commit_a145ce07f1c972fc-bd2c54597052a9ad', 'status':'PREPARE', 'txnId':'181508'}\n\n# The returned label and txn_id are the same as the above, which means they are handled in on load job  \nmysql> insert into dt(id, name) values(3, 'John');\nQuery OK, 1 row affected (0.01 sec)\n{'label':'group_commit_a145ce07f1c972fc-bd2c54597052a9ad', 'status':'PREPARE', 'txnId':'181508'}\n\n# The data is not visible\nmysql> select * from dt;\nEmpty set (0.01 sec)\n\n# After about 10 seconds, the data is visible\nmysql> select * from dt;\n+------+-------+-------+\n| id   | name  | score |\n+------+-------+-------+\n|    1 | Bob   |    90 |\n|    2 | Alice |    99 |\n|    3 | John  |  NULL |\n+------+-------+-------+\n3 rows in set (0.02 sec)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"sync_mode")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"# Config session variable to enable the sync group commit\nmysql> set group_commit = sync_mode;\n\n# The retured label is start with 'group_commit', which is the label of the real load job. \n# The insert costs at least the group_commit_interval_ms of table property.\nmysql> insert into dt values(4, 'Bob', 90), (5, 'Alice', 99);\nQuery OK, 2 rows affected (10.06 sec)\n{'label':'group_commit_d84ab96c09b60587_ec455a33cb0e9e87', 'status':'PREPARE', 'txnId':'3007', 'query_id':'fc6b94085d704a94-a69bfc9a202e66e2'}\n\n# The data is visible after the insert is returned\nmysql> select * from dt;\n+------+-------+-------+\n| id   | name  | score |\n+------+-------+-------+\n|    1 | Bob   |    90 |\n|    2 | Alice |    99 |\n|    3 | John  |  NULL |\n|    4 | Bob   |    90 |\n|    5 | Alice |    99 |\n+------+-------+-------+\n5 rows in set (0.03 sec)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"off_mode")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set group_commit = off_mode;\n")),(0,r.yg)("h3",{id:"stream-load"},"Stream Load"),(0,r.yg)("p",null,"If the content of ",(0,r.yg)("inlineCode",{parentName:"p"},"data.csv")," is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"6,Amy,60\n7,Ross,98\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"async_mode")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# Add \'group_commit:async_mode\' configuration in the http header\n\ncurl --location-trusted -u {user}:{passwd} -T data.csv -H "group_commit:async_mode"  -H "column_separator:,"  http://{fe_host}:{http_port}/api/db/dt/_stream_load\n{\n    "TxnId": 7009,\n    "Label": "group_commit_c84d2099208436ab_96e33fda01eddba8",\n    "Comment": "",\n    "GroupCommit": true,\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 2,\n    "NumberLoadedRows": 2,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 19,\n    "LoadTimeMs": 35,\n    "StreamLoadPutTimeMs": 5,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 26\n}\n\n# The returned \'GroupCommit\' is \'true\', which means this is a group commit load\n# The retured label is start with \'group_commit\', which is the label of the real load job\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"sync_mode")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# Add \'group_commit:sync_mode\' configuration in the http header\n\ncurl --location-trusted -u {user}:{passwd} -T data.csv -H "group_commit:sync_mode"  -H "column_separator:,"  http://{fe_host}:{http_port}/api/db/dt/_stream_load\n{\n    "TxnId": 3009,\n    "Label": "group_commit_d941bf17f6efcc80_ccf4afdde9881293",\n    "Comment": "",\n    "GroupCommit": true,\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 2,\n    "NumberLoadedRows": 2,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 19,\n    "LoadTimeMs": 10044,\n    "StreamLoadPutTimeMs": 4,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 10038\n}\n\n# The returned \'GroupCommit\' is \'true\', which means this is a group commit load\n# The retured label is start with \'group_commit\', which is the label of the real load job\n')),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0/data-operate/import/import-way/stream-load-manual"},"Stream Load")," for more detailed syntax used by ",(0,r.yg)("strong",{parentName:"p"},"Stream Load"),"."),(0,r.yg)("h3",{id:"http-stream"},"Http Stream"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"async_mode")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# Add \'group_commit:async_mode\' configuration in the http header\n\ncurl --location-trusted -u {user}:{passwd} -T data.csv  -H "group_commit:async_mode" -H "sql:insert into db.dt select * from http_stream(\'column_separator\'=\',\', \'format\' = \'CSV\')"  http://{fe_host}:{http_port}/api/_http_stream\n{\n    "TxnId": 7011,\n    "Label": "group_commit_3b45c5750d5f15e5_703428e462e1ebb0",\n    "Comment": "",\n    "GroupCommit": true,\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 2,\n    "NumberLoadedRows": 2,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 19,\n    "LoadTimeMs": 65,\n    "StreamLoadPutTimeMs": 41,\n    "ReadDataTimeMs": 47,\n    "WriteDataTimeMs": 23\n}\n\n# The returned \'GroupCommit\' is \'true\', which means this is a group commit load\n# The retured label is start with \'group_commit\', which is the label of the real load job\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"sync_mode")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# Add \'group_commit:sync_mode\' configuration in the http header\n\ncurl --location-trusted -u {user}:{passwd} -T data.csv  -H "group_commit:sync_mode" -H "sql:insert into db.dt select * from http_stream(\'column_separator\'=\',\', \'format\' = \'CSV\')"  http://{fe_host}:{http_port}/api/_http_stream\n{\n    "TxnId": 3011,\n    "Label": "group_commit_fe470e6752aadbe6_a8f3ac328b02ea91",\n    "Comment": "",\n    "GroupCommit": true,\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 2,\n    "NumberLoadedRows": 2,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 19,\n    "LoadTimeMs": 10066,\n    "StreamLoadPutTimeMs": 31,\n    "ReadDataTimeMs": 32,\n    "WriteDataTimeMs": 10034\n}\n\n# The returned \'GroupCommit\' is \'true\', which means this is a group commit load\n# The retured label is start with \'group_commit\', which is the label of the real load job\n')),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0/data-operate/import/import-way/stream-load-manual"},"Stream Load")," for more detailed syntax used by ",(0,r.yg)("strong",{parentName:"p"},"Http Stream"),"."),(0,r.yg)("h2",{id:"group-commit-condition"},"Group commit condition"),(0,r.yg)("p",null,"The data will be automatically committed either when the time interval (default is 10 seconds) or the data size (default is 64 MB) conditions meet."),(0,r.yg)("h3",{id:"modify-the-time-interval-condition"},"Modify the time interval condition"),(0,r.yg)("p",null,"The default group commit interval is 10 seconds. Users can modify the configuration of the table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# Modify the group commit interval to 2 seconds\nALTER TABLE dt SET ("group_commit_interval_ms" = "2000");\n')),(0,r.yg)("h3",{id:"modify-the-data-size-condition"},"Modify the data size condition"),(0,r.yg)("p",null,"The default group commit data size is 64 MB. Users can modify the configuration of the table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# Modify the group commit data size to 128MB\nALTER TABLE dt SET ("group_commit_data_bytes" = "134217728");\n')),(0,r.yg)("h2",{id:"limitations"},"Limitations"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When the group commit is enabled, some ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO VALUES")," sqls are not executed in the group commit way if they meet the following conditions:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Transaction insert, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"BEGIN"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO VALUES"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"COMMIT"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Specify the label, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO dt WITH LABEL {label} VALUES"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Expressions within VALUES, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO dt VALUES (1 + 100)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Column update")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Tables that do not support light schema changes")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When the group commit is enabled, some ",(0,r.yg)("inlineCode",{parentName:"p"},"Stream Load")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Http Stream")," are not executed in the group commit way if they meet the following conditions:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Two phase commit")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Specify the label  by set header ",(0,r.yg)("inlineCode",{parentName:"p"},'-H "label:my_label"'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Column update")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Tables that do not support light schema changes")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For unique table, because the group commit can not guarantee the commit order, users can use sequence column to ensure the data consistency.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The limit of ",(0,r.yg)("inlineCode",{parentName:"p"},"max_filter_ratio")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For non group commit load, filter_ratio is calculated by the failed rows and total rows when load is finished. If the filter_ratio does not match, the transaction will not commit")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In the group commit mode, multiple user loads are executed by one internal load. The internal load will commit all user loads.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Currently, group commit supports a certain degree of max_filter_ratio semantics. When the total number of rows does not exceed group_commit_memory_rows_for_max_filter_ratio (configured in ",(0,r.yg)("inlineCode",{parentName:"p"},"be.conf"),", defaulting to ",(0,r.yg)("inlineCode",{parentName:"p"},"10000")," rows), max_filter_ratio will work.")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The limit of WAL"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For async_mode group commit, data is written to the Write Ahead Log (WAL). If the internal load succeeds, the WAL is immediately deleted. If the internal load fails, data is recovery by importing the WAL.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Currently, WAL files are stored only on one disk of one BE. If the BE's disk is damaged or the file is mistakenly deleted, it may result in data loss.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When decommissioning a BE node, please use the ",(0,r.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND"},(0,r.yg)("inlineCode",{parentName:"a"},"DECOMMISSION"))," command to safely decommission the node. This prevents potential data loss if the WAL files are not processed before the node is taken offline.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For async_mode group commit writes, to protect disk space, it switches to sync_mode under the following conditions:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For an import with large amount of data: exceeding 80% of the disk space of a WAL directory. ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Chunked stream loads with an unknown data amount.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Insufficient disk space, even with it is an import with small amount of data.")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"During hard weight schema changes (adding or dropping columns, modifying varchar length, and renaming columns are lightweight schema changes, others are hard weight), to ensure WAL file is compatibility with the table's schema, the final stage of metadata modification in FE will reject group commit writes. Clients get ",(0,r.yg)("inlineCode",{parentName:"p"},"insert table ${table_name} is blocked on schema change")," exception and can retry the import."))))),(0,r.yg)("h2",{id:"relevant-system-configuration"},"Relevant system configuration"),(0,r.yg)("h3",{id:"be-configuration"},"BE configuration"),(0,r.yg)("h4",{id:"group_commit_wal_path"},(0,r.yg)("inlineCode",{parentName:"h4"},"group_commit_wal_path")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"WAL")," directory of group commit."),(0,r.yg)("li",{parentName:"ul"},"Default: A directory named ",(0,r.yg)("inlineCode",{parentName:"li"},"wal")," is created under each directory of the ",(0,r.yg)("inlineCode",{parentName:"li"},"storage_root_path"),". Configuration examples:",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"group_commit_wal_path=/data1/storage/wal;/data2/storage/wal;/data3/storage/wal\n")))),(0,r.yg)("h4",{id:"group_commit_memory_rows_for_max_filter_ratio"},(0,r.yg)("inlineCode",{parentName:"h4"},"group_commit_memory_rows_for_max_filter_ratio")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Description: The ",(0,r.yg)("inlineCode",{parentName:"li"},"max_filter_ratio")," limit can only work if the total rows of ",(0,r.yg)("inlineCode",{parentName:"li"},"group commit")," is less than this value."),(0,r.yg)("li",{parentName:"ul"},"Default: 10000")),(0,r.yg)("h2",{id:"performance"},"Performance"),(0,r.yg)("p",null,"We have separately tested the write performance of group commit in high-concurrency scenarios with small data volumes using ",(0,r.yg)("inlineCode",{parentName:"p"},"Stream Load")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"JDBC")," (in ",(0,r.yg)("inlineCode",{parentName:"p"},"async mode"),")."),(0,r.yg)("h3",{id:"stream-load-1"},"Stream Load"),(0,r.yg)("h4",{id:"environment"},"Environment"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"1 FE: 8-core CPU, 16 GB RAM, 1 200 GB SSD disk"),(0,r.yg)("li",{parentName:"ul"},"3 BE: 16-core CPU, 64 GB RAM, 1 2 TB SSD disk"),(0,r.yg)("li",{parentName:"ul"},"1 Client: 8-core CPU, 64 GB RAM, 1 100 GB SSD disk")),(0,r.yg)("h4",{id:"dataset"},"DataSet"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"httplogs"),", 31 GB, 247249096 (247 million) rows")),(0,r.yg)("h4",{id:"test-tool"},"Test Tool"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/ecosystem/doris-streamloader"},"doris-streamloader"))),(0,r.yg)("h4",{id:"test-method"},"Test Method"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Setting different single-concurrency data size and concurrency num between ",(0,r.yg)("inlineCode",{parentName:"li"},"non group_commit")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"group_commit")," modes.")),(0,r.yg)("h4",{id:"test-result"},"Test Result"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Load Way"),(0,r.yg)("th",{parentName:"tr",align:null},"Single-concurrency Data Size"),(0,r.yg)("th",{parentName:"tr",align:null},"Concurrency"),(0,r.yg)("th",{parentName:"tr",align:null},"Cost Seconds"),(0,r.yg)("th",{parentName:"tr",align:null},"Rows / Seconds"),(0,r.yg)("th",{parentName:"tr",align:null},"MB / Seconds"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"group_commit")),(0,r.yg)("td",{parentName:"tr",align:null},"10 KB"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"3707"),(0,r.yg)("td",{parentName:"tr",align:null},"66,697"),(0,r.yg)("td",{parentName:"tr",align:null},"8.56")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"group_commit")),(0,r.yg)("td",{parentName:"tr",align:null},"10 KB"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"3385"),(0,r.yg)("td",{parentName:"tr",align:null},"73,042"),(0,r.yg)("td",{parentName:"tr",align:null},"9.38")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"group_commit")),(0,r.yg)("td",{parentName:"tr",align:null},"100 KB"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"473"),(0,r.yg)("td",{parentName:"tr",align:null},"522,725"),(0,r.yg)("td",{parentName:"tr",align:null},"67.11")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"group_commit")),(0,r.yg)("td",{parentName:"tr",align:null},"100 KB"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"390"),(0,r.yg)("td",{parentName:"tr",align:null},"633,972"),(0,r.yg)("td",{parentName:"tr",align:null},"81.39")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"group_commit")),(0,r.yg)("td",{parentName:"tr",align:null},"500 KB"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"323"),(0,r.yg)("td",{parentName:"tr",align:null},"765,477"),(0,r.yg)("td",{parentName:"tr",align:null},"98.28")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"group_commit")),(0,r.yg)("td",{parentName:"tr",align:null},"500 KB"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"309"),(0,r.yg)("td",{parentName:"tr",align:null},"800,158"),(0,r.yg)("td",{parentName:"tr",align:null},"102.56")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"group_commit")),(0,r.yg)("td",{parentName:"tr",align:null},"1 MB"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"304"),(0,r.yg)("td",{parentName:"tr",align:null},"813,319"),(0,r.yg)("td",{parentName:"tr",align:null},"104.24")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"group_commit")),(0,r.yg)("td",{parentName:"tr",align:null},"1 MB"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"286"),(0,r.yg)("td",{parentName:"tr",align:null},"864,507"),(0,r.yg)("td",{parentName:"tr",align:null},"110.88")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"group_commit")),(0,r.yg)("td",{parentName:"tr",align:null},"10 MB"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"290"),(0,r.yg)("td",{parentName:"tr",align:null},"852,583"),(0,r.yg)("td",{parentName:"tr",align:null},"109.28")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"non group_commit")),(0,r.yg)("td",{parentName:"tr",align:null},"1 MB"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-235 error")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"non group_commit")),(0,r.yg)("td",{parentName:"tr",align:null},"10 MB"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"519"),(0,r.yg)("td",{parentName:"tr",align:null},"476,395"),(0,r.yg)("td",{parentName:"tr",align:null},"61.12")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"non group_commit")),(0,r.yg)("td",{parentName:"tr",align:null},"10 MB"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-235 error")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("p",null,"In the above test, the CPU usage of BE fluctuates between 10-40%."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"group_commit")," effectively enhances import performance while reducing the number of versions, thereby alleviating the pressure on compaction."),(0,r.yg)("h3",{id:"jdbc"},"JDBC"),(0,r.yg)("h4",{id:"environment-1"},"Environment"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"1 FE: 8-core CPU, 16 GB RAM, 1 200 GB SSD disk"),(0,r.yg)("li",{parentName:"ul"},"1 BE: 16-core CPU, 64 GB RAM, 1 2 TB SSD disk"),(0,r.yg)("li",{parentName:"ul"},"1 Client: 16-core CPU, 64 GB RAM, 1 100 GB SSD disk")),(0,r.yg)("h4",{id:"dataset-1"},"DataSet"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The data of tpch sf10 ",(0,r.yg)("inlineCode",{parentName:"li"},"lineitem")," table, 20 files, 14 GB, 120 million rows")),(0,r.yg)("h4",{id:"test-method-1"},"Test Method"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/alibaba/DataX"},"DataX"))),(0,r.yg)("h4",{id:"test-method-2"},"Test Method"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use ",(0,r.yg)("inlineCode",{parentName:"li"},"txtfilereader")," wtite data to ",(0,r.yg)("inlineCode",{parentName:"li"},"mysqlwriter"),", config different concurrenncy and rows for per ",(0,r.yg)("inlineCode",{parentName:"li"},"INSERT")," sql.")),(0,r.yg)("h4",{id:"test-result-1"},"Test Result"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Rows per insert"),(0,r.yg)("th",{parentName:"tr",align:null},"Concurrency"),(0,r.yg)("th",{parentName:"tr",align:null},"Rows / Second"),(0,r.yg)("th",{parentName:"tr",align:null},"MB / Second"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"106931"),(0,r.yg)("td",{parentName:"tr",align:null},"11.46")))),(0,r.yg)("p",null,"In the above test, the CPU usage of BE fluctuates between 10-20%, FE fluctuates between 60-70%."))}g.isMDXComponent=!0}}]);