"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[824192],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},271935:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=a(58168),i=(a(296540),a(15680));const s={title:"Transaction",language:"en"},o=void 0,r={unversionedId:"data-operate/transaction",id:"version-2.1/data-operate/transaction",title:"Transaction",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/data-operate/transaction.md",sourceDirName:"data-operate",slug:"/data-operate/transaction",permalink:"/docs/data-operate/transaction",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Transaction",language:"en"},sidebar:"docs",previous:{title:"Job Scheduler",permalink:"/docs/data-operate/scheduler/job-scheduler"},next:{title:"MySQL Compatibility",permalink:"/docs/query-data/mysql-compatibility"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Explicit and Implicit Transactions",id:"explicit-and-implicit-transactions",level:2},{value:"Explicit Transactions",id:"explicit-transactions",level:3},{value:"Implicit Transactions",id:"implicit-transactions",level:3},{value:"Isolation Level",id:"isolation-level",level:3},{value:"No Duplicates, No Loss",id:"no-duplicates-no-loss",level:3},{value:"Label Mechanism",id:"label-mechanism",level:4},{value:"StreamLoad 2PC",id:"streamload-2pc",level:4},{value:"Transaction Operations",id:"transaction-operations",level:2},{value:"Start a Transaction",id:"start-a-transaction",level:3},{value:"Commit a Transaction",id:"commit-a-transaction",level:3},{value:"Transaction with multiple sql statements",id:"transaction-with-multiple-sql-statements",level:2},{value:"Multiple <code>INSERT INTO VALUES</code> for one table",id:"multiple-insert-into-values-for-one-table",level:3},{value:"QA",id:"qa",level:4},{value:"Stream Load 2PC",id:"stream-load-2pc",level:2},{value:"Broker Load into muti tables with a transaction",id:"broker-load-into-muti-tables-with-a-transaction",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"A transaction is an operation that contains one or more SQL statements. The execution of these statements must either be completely successful or completely fail. It is an indivisible work unit."),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"Queries and DDL single statements are implicit transactions and are not supported within multi-statement transactions. Each individual write is an implicit transaction by default, and multiple writes can form an explicit transaction. Currently, Doris does not support nested transactions."),(0,i.yg)("h2",{id:"explicit-and-implicit-transactions"},"Explicit and Implicit Transactions"),(0,i.yg)("h3",{id:"explicit-transactions"},"Explicit Transactions"),(0,i.yg)("p",null,"Explicit transactions require users to actively start, commit transactions. Only insert into values statement is supported in 2.1."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"```sql\nBEGIN;\n[INSERT INTO VALUES]\nCOMMIT;\n```\n")),(0,i.yg)("p",null,"Rollback is not supported in 2.1."),(0,i.yg)("h3",{id:"implicit-transactions"},"Implicit Transactions"),(0,i.yg)("p",null,"Implicit transactions refer to SQL statements that are executed without explicitly adding statements to start and commit transactions before and after the statements."),(0,i.yg)("p",null,"In Doris, except for ",(0,i.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/group-commit-manual"},"Group Commit"),", each import statement opens a transaction when it starts executing. The transaction is automatically committed after the statement is executed, or automatically rolled back if the statement fails. Each query or DDL statement is also an implicit transaction."),(0,i.yg)("h3",{id:"isolation-level"},"Isolation Level"),(0,i.yg)("p",null,"The only isolation level currently supported by Doris is READ COMMITTED. Under the READ COMMITTED isolation level, a statement sees only data that was committed before the statement began execution. It does not see uncommitted data."),(0,i.yg)("p",null,"When a single statement is executed, it captures a snapshot of the tables involved at the start of the statement, meaning that a single statement can only see commits from other transactions made before it began execution. Other transactions' commits are not visible during the execution of a single statement."),(0,i.yg)("p",null,"When a statement is executed inside a multi-statement transaction:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"It sees only data that was committed before the statement began execution. If another transaction commits between the execution of the first and the second statements, two successive statements in the same transaction may see different data."),(0,i.yg)("li",{parentName:"ul"},"Currently, it cannot see changes made by previous statements within the same transaction.")),(0,i.yg)("h3",{id:"no-duplicates-no-loss"},"No Duplicates, No Loss"),(0,i.yg)("p",null,"Doris supports mechanisms to ensure no duplicates and no loss during data writes. The Label mechanism ensures no duplicates within a single transaction, while two-phase commit coordinates to prevent duplicates across multiple transactions."),(0,i.yg)("h4",{id:"label-mechanism"},"Label Mechanism"),(0,i.yg)("p",null,"Transactions or writes in Doris can be assigned a Label. This Label is typically a user-defined string with some business logic attributes. If not set, a UUID string will be generated internally. The main purpose of a Label is to uniquely identify a transaction or import task and ensure that a transaction or import with the same Label will only execute successfully once. The Label mechanism ensures that data imports are neither lost nor duplicated. If the upstream data source guarantees at-least-once semantics, combined with Doris's Label mechanism, exactly-once semantics can be achieved. Labels are unique within a database."),(0,i.yg)("p",null,"Doris will clean up Labels based on time and number. By default, if the number of Labels exceeds 2000, cleanup will be triggered. Labels older than three days will also be cleaned up by default. Once a Label is cleaned up, a Label with the same name can execute successfully again, meaning it no longer has deduplication semantics."),(0,i.yg)("p",null,"Labels are usually set in the format of ",(0,i.yg)("inlineCode",{parentName:"p"},"business_logic+timestamp"),", such as ",(0,i.yg)("inlineCode",{parentName:"p"},"my_business1_20220330_125000"),". This Label typically represents a batch of data generated by the business ",(0,i.yg)("inlineCode",{parentName:"p"},"my_business1")," at ",(0,i.yg)("inlineCode",{parentName:"p"},"2022-03-30 12:50:00"),". By setting Labels this way, the business can query the import task status using the Label to clearly determine whether the batch of data at that time has been successfully imported. If not, the import can be retried using the same Label."),(0,i.yg)("h4",{id:"streamload-2pc"},"StreamLoad 2PC"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"#stream-load"},"StreamLoad 2PC")," is mainly used to support exactly-once semantics (EOS) when writing to Doris with Flink."),(0,i.yg)("h2",{id:"transaction-operations"},"Transaction Operations"),(0,i.yg)("h3",{id:"start-a-transaction"},"Start a Transaction"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\n\nBEGIN WITH LABEL {user_label}; \n")),(0,i.yg)("p",null,"If this statement is executed while the current session is in the middle of a transaction, Doris will ignore the statement, which can also be understood as transactions cannot be nested."),(0,i.yg)("h3",{id:"commit-a-transaction"},"Commit a Transaction"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"COMMIT;\n")),(0,i.yg)("p",null,"Used to commit all modifications made in the current transaction."),(0,i.yg)("h2",{id:"transaction-with-multiple-sql-statements"},"Transaction with multiple sql statements"),(0,i.yg)("p",null,"Currently, Doris supports only one way of transaction loading."),(0,i.yg)("h3",{id:"multiple-insert-into-values-for-one-table"},"Multiple ",(0,i.yg)("inlineCode",{parentName:"h3"},"INSERT INTO VALUES")," for one table"),(0,i.yg)("p",null,"Suppose the table schema is:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `dt` (\n    `id` INT(11) NOT NULL,\n    `name` VARCHAR(50) NULL,\n    `score` INT(11) NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n    "replication_num" = "1"\n);\n')),(0,i.yg)("p",null,"Do transaction load:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> BEGIN;\nQuery OK, 0 rows affected (0.01 sec)\n{'label':'txn_insert_b55db21aad7451b-b5b6c339704920c5', 'status':'PREPARE', 'txnId':''}\n\nmysql> INSERT INTO dt (id, name, score) VALUES (1, \"Emily\", 25), (2, \"Benjamin\", 35), (3, \"Olivia\", 28), (4, \"Alexander\", 60), (5, \"Ava\", 17);\nQuery OK, 5 rows affected (0.08 sec)\n{'label':'txn_insert_b55db21aad7451b-b5b6c339704920c5', 'status':'PREPARE', 'txnId':'10013'}\n\nmysql> INSERT INTO dt VALUES (6, \"William\", 69), (7, \"Sophia\", 32), (8, \"James\", 64), (9, \"Emma\", 37), (10, \"Liam\", 64);\nQuery OK, 5 rows affected (0.00 sec)\n{'label':'txn_insert_b55db21aad7451b-b5b6c339704920c5', 'status':'PREPARE', 'txnId':'10013'}\n\nmysql> COMMIT;\nQuery OK, 0 rows affected (1.02 sec)\n{'label':'txn_insert_b55db21aad7451b-b5b6c339704920c5', 'status':'VISIBLE', 'txnId':'10013'}\n")),(0,i.yg)("p",null,"This method not only achieves atomicity, but also in Doris, it enhances the writing performance of ",(0,i.yg)("inlineCode",{parentName:"p"},"INSERT INTO VALUES"),"."),(0,i.yg)("p",null,"If user enables ",(0,i.yg)("inlineCode",{parentName:"p"},"Group Commit")," and transaction insert at the same time, the transaction insert will work. "),(0,i.yg)("h4",{id:"qa"},"QA"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Writing to multiple tables must belong to the same Database; otherwise, you will encounter the error ",(0,i.yg)("inlineCode",{parentName:"p"},"Transaction insert must be in the same database"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If the time-consuming from ",(0,i.yg)("inlineCode",{parentName:"p"},"BEGIN")," statement exceeds the timeout configured in Doris, the transaction will be rolled back. Currently, the timeout uses the maximum value of session variables ",(0,i.yg)("inlineCode",{parentName:"p"},"insert_timeout")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"query_timeout"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"When using JDBC to connect to Doris for transaction operations, please add ",(0,i.yg)("inlineCode",{parentName:"p"},"useLocalSessionState=true")," in the JDBC URL; otherwise, you may encounter the error ",(0,i.yg)("inlineCode",{parentName:"p"},"This is in a transaction, only insert, update, delete, commit, rollback is acceptable"),"."))),(0,i.yg)("h2",{id:"stream-load-2pc"},"Stream Load 2PC"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1. Enable two-phase commit by setting ",(0,i.yg)("inlineCode",{parentName:"strong"},"two_phase_commit:true")," in the HTTP Header.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'curl --location-trusted -u user:passwd -H "two_phase_commit:true" -T test.txt http://fe_host:http_port/api/{db}/{table}/_stream_load\n{\n    "TxnId": 18036,\n    "Label": "55c8ffc9-1c40-4d51-b75e-f2265b3602ef",\n    "TwoPhaseCommit": "true",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 100,\n    "NumberLoadedRows": 100,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 1031,\n    "LoadTimeMs": 77,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 1,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 58,\n    "CommitAndPublishTimeMs": 0\n}\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2. Trigger the commit operation for a transaction (can be sent to FE or BE).")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Specify the transaction using the Transaction ID:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT --location-trusted -u user:passwd -H "txn_id:18036" -H "txn_operation:commit" http://fe_host:http_port/api/{db}/{table}/_stream_load_2pc\n{\n    "status": "Success",\n    "msg": "transaction [18036] commit successfully."\n}\n'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Specify the transaction using the label:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT --location-trusted -u user:passwd -H "label:55c8ffc9-1c40-4d51-b75e-f2265b3602ef" -H "txn_operation:commit"  http://fe_host:http_port/api/{db}/{table}/_stream_load_2pc\n{\n    "status": "Success",\n    "msg": "label [55c8ffc9-1c40-4d51-b75e-f2265b3602ef] commit successfully."\n}\n')))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"3. Trigger the abort operation for a transaction (can be sent to FE or BE).")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Specify the transaction using the Transaction ID:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT --location-trusted -u user:passwd -H "txn_id:18037" -H "txn_operation:abort"  http://fe_host:http_port/api/{db}/{table}/_stream_load_2pc\n{\n    "status": "Success",\n    "msg": "transaction [18037] abort successfully."\n}\n'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Specify the transaction using the label:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT --location-trusted -u user:passwd -H "label:55c8ffc9-1c40-4d51-b75e-f2265b3602ef" -H "txn_operation:abort"  http://fe_host:http_port/api/{db}/{table}/_stream_load_2pc\n{\n    "status": "Success",\n    "msg": "label [55c8ffc9-1c40-4d51-b75e-f2265b3602ef] abort successfully."\n}\n')))),(0,i.yg)("h2",{id:"broker-load-into-muti-tables-with-a-transaction"},"Broker Load into muti tables with a transaction"),(0,i.yg)("p",null,"All Broker Load tasks are atomic and ensure atomicity even when loading multiple tables within the same task. The Label mechanism can be used to ensure data load without loss or duplication."),(0,i.yg)("p",null,"The following example demonstrates loading data from HDFS by using wildcard patterns to match two sets of files and load them into two different tables."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label2\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-10*")\n    INTO TABLE `my_table1`\n    PARTITION (p1)\n    COLUMNS TERMINATED BY ","\n    (k1, tmp_k2, tmp_k3)\n    SET (\n        k2 = tmp_k2 + 1,\n        k3 = tmp_k3 + 1\n    )\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-20*")\n    INTO TABLE `my_table2`\n    COLUMNS TERMINATED BY ","\n    (k1, k2, k3)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n')),(0,i.yg)("p",null,"The wildcard pattern is used to match and load two sets of files, ",(0,i.yg)("inlineCode",{parentName:"p"},"file-10*")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"file-20*"),", into ",(0,i.yg)("inlineCode",{parentName:"p"},"my_table1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"my_table2")," respectively. In the case of ",(0,i.yg)("inlineCode",{parentName:"p"},"my_table1"),", the load is specified to the ",(0,i.yg)("inlineCode",{parentName:"p"},"p1")," partition, and the values of thesecond and third columns in the source file are incremented by 1 before being loaded."))}u.isMDXComponent=!0}}]);