"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[654140],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},699962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(58168),r=(a(296540),a(15680));const l={title:"Insert Into",language:"en"},i=void 0,o={unversionedId:"data-operate/import/import-way/insert-into-manual",id:"version-3.0/data-operate/import/import-way/insert-into-manual",title:"Insert Into",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/data-operate/import/import-way/insert-into-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/insert-into-manual",permalink:"/docs/3.0/data-operate/import/import-way/insert-into-manual",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Insert Into",language:"en"},sidebar:"docs",previous:{title:"Routine Load",permalink:"/docs/3.0/data-operate/import/import-way/routine-load-manual"},next:{title:"MySQL Load",permalink:"/docs/3.0/data-operate/import/import-way/mysql-load-manual"}},s={},u=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Get started",id:"get-started",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Create an INSERT INTO job",id:"create-an-insert-into-job",level:3},{value:"View INSERT INTO jobs",id:"view-insert-into-jobs",level:3},{value:"Cancel INSERT INTO jobs",id:"cancel-insert-into-jobs",level:3},{value:"Manual",id:"manual",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameter configuration",id:"parameter-configuration",level:3},{value:"Return values",id:"return-values",level:3},{value:"Best practice",id:"best-practice",level:2},{value:"Data size",id:"data-size",level:3},{value:"View error rows",id:"view-error-rows",level:3},{value:"Ingest external data via Multi-Catalog",id:"ingest-external-data-via-multi-catalog",level:2},{value:"Create Hive Catalog",id:"create-hive-catalog",level:3},{value:"Ingest data",id:"ingest-data",level:3},{value:"Notes",id:"notes",level:3},{value:"Ingest data by TVF",id:"ingest-data-by-tvf",level:2},{value:"Automatic column type inference",id:"automatic-column-type-inference",level:3},{value:"Notes",id:"notes-1",level:3},{value:"More help",id:"more-help",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The INSERT INTO statement supports importing the results of a Doris query into another table. INSERT INTO is a synchronous import method, where the import result is returned after the import is executed. Whether the import is successful can be determined based on the returned result. INSERT INTO ensures the atomicity of the import task, meaning that either all the data is imported successfully or none of it is imported."),(0,r.yg)("p",null,"There are primarily two main forms of the INSERT INTO command:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"INSERT INTO tbl SELECT..."),(0,r.yg)("li",{parentName:"ul"},"INSERT INTO tbl (col1, col2, ...) VALUES (1, 2, ...), (1,3, ...)")),(0,r.yg)("h2",{id:"applicable-scenarios"},"Applicable scenarios"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"If a user wants to import only a few test data records to verify the functionality of the Doris system, the INSERT INTO VALUES syntax is applicable. It is similar to the MySQL syntax. However, it is not recommended to use INSERT INTO VALUES in a production environment."),(0,r.yg)("li",{parentName:"ol"},"If a user wants to perform ETL on existing data in a Doris table and then import it into a new Doris table, the INSERT INTO SELECT syntax is applicable."),(0,r.yg)("li",{parentName:"ol"},"In conjunction with the Multi-Catalog external table mechanism, tables from MySQL or Hive systems can be mapped via Multi-Catalog. Then, data from external tables can be imported into Doris tables using the INSERT INTO SELECT syntax."),(0,r.yg)("li",{parentName:"ol"},"Utilizing the Table Value Functions (TVFs), users can directly query data stored in object storage or files on HDFS as tables, with automatic column type inference. Then, data from external tables can be imported into Doris tables using the INSERT INTO SELECT syntax.")),(0,r.yg)("h2",{id:"implementation"},"Implementation"),(0,r.yg)("p",null,"When using INSERT INTO, the import job needs to be initiated and submitted to the FE node using the MySQL protocol. The FE generates an execution plan, which includes query-related operators, with the last operator being the OlapTableSink. The OlapTableSink operator is responsible for writing the query result to the target table. The execution plan is then sent to the BE nodes for execution. Doris designates one BE node as the Coordinator, which receives and distributes the data to other BE nodes."),(0,r.yg)("h2",{id:"get-started"},"Get started"),(0,r.yg)("p",null,"An INSERT INTO job is submitted and transmitted using the MySQL protocol. The following example demonstrates submitting an import job using INSERT INTO through the MySQL command-line interface."),(0,r.yg)("p",null,"Detailed syntax can be found in the INSERT INTO documentation."),(0,r.yg)("h3",{id:"preparation"},"Preparation"),(0,r.yg)("p",null,"INSERT INTO requires INSERT permissions on the target table. You can grant permissions to user accounts using the GRANT command."),(0,r.yg)("h3",{id:"create-an-insert-into-job"},"Create an INSERT INTO job"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"INSERT INTO VALUES")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a source table")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'CREATE TABLE testdb.test_table(\n    user_id            BIGINT       NOT NULL COMMENT "User ID",\n    name               VARCHAR(20)           COMMENT "User name",\n    age                INT                   COMMENT "User age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Import data into the source table using ",(0,r.yg)("inlineCode",{parentName:"li"},"INSERT INTO VALUES")," (not recommended for production environments).")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'INSERT INTO testdb.test_table (user_id, name, age)\nVALUES (1, "Emily", 25),\n       (2, "Benjamin", 35),\n       (3, "Olivia", 28),\n       (4, "Alexander", 60),\n       (5, "Ava", 17);\n')),(0,r.yg)("p",null,"INSERT INTO is a synchronous import method, where the import result is directly returned to the user. You can enable ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0/data-operate/import/import-way/group-commit-manual"},"group commit")," to achieve high performance. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-JSON"},"Query OK, 5 rows affected (0.308 sec)\n{'label':'label_3e52da787aab4222_9126d2fce8f6d1e5', 'status':'VISIBLE', 'txnId':'9081'}\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"View imported data.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"MySQL> SELECT COUNT(*) FROM testdb.test_table;\n+----------+\n| count(*) |\n+----------+\n|        5 |\n+----------+\n1 row in set (0.179 sec)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"INSERT INTO SELECT")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Building upon the above operations, create a new table as the target table (with the same schema as the source table).")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE TABLE testdb.test_table2 LIKE testdb.test_table;\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Ingest data into the new table using ",(0,r.yg)("inlineCode",{parentName:"li"},"INSERT INTO SELECT"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"INSERT INTO testdb.test_table2\nSELECT * FROM testdb.test_table WHERE age < 30;\nQuery OK, 3 rows affected (0.544 sec)\n{'label':'label_9c2bae970023407d_b2c5b78b368e78a7', 'status':'VISIBLE', 'txnId':'9084'}\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"View imported data.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"MySQL> SELECT COUNT(*) FROM testdb.test_table2;\n+----------+\n| count(*) |\n+----------+\n|        3 |\n+----------+\n1 row in set (0.071 sec)\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You can use ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0/data-operate/scheduler/job-scheduler"},"JOB")," make the INSERT operation execute asynchronously.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Sources can be ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0/lakehouse/file"},"tvf")," or tables in a ",(0,r.yg)("a",{parentName:"p",href:"../../../lakehouse/database"},"catalog"),"."))),(0,r.yg)("h3",{id:"view-insert-into-jobs"},"View INSERT INTO jobs"),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW LOAD")," command to view the completed INSERT INTO tasks."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'MySQL> SHOW LOAD FROM testdb;\n+--------+-----------------------------------------+----------+--------------------+--------+---------+----------------------------------------------------------------------+----------+---------------------+---------------------+---------------------+---------------------+---------------------+------+-----------------------------------------------------------------------------------------------------------------------+---------------+--------------+------+---------+\n| JobId  | Label                                   | State    | Progress           | Type   | EtlInfo | TaskInfo                                                             | ErrorMsg | CreateTime          | EtlStartTime        | EtlFinishTime       | LoadStartTime       | LoadFinishTime      | URL  | JobDetails                                                                                                            | TransactionId | ErrorTablets | User | Comment |\n+--------+-----------------------------------------+----------+--------------------+--------+---------+----------------------------------------------------------------------+----------+---------------------+---------------------+---------------------+---------------------+---------------------+------+-----------------------------------------------------------------------------------------------------------------------+---------------+--------------+------+---------+\n| 376416 | label_3e52da787aab4222_9126d2fce8f6d1e5 | FINISHED | Unknown id: 376416 | INSERT | NULL    | cluster:N/A; timeout(s):26200; max_filter_ratio:0.0; priority:NORMAL | NULL     | 2024-02-27 01:22:17 | 2024-02-27 01:22:17 | 2024-02-27 01:22:17 | 2024-02-27 01:22:17 | 2024-02-27 01:22:18 |      | {"Unfinished backends":{},"ScannedRows":0,"TaskNumber":0,"LoadBytes":0,"All backends":{},"FileNumber":0,"FileSize":0} | 9081          | {}           | root |         |\n| 376664 | label_9c2bae970023407d_b2c5b78b368e78a7 | FINISHED | Unknown id: 376664 | INSERT | NULL    | cluster:N/A; timeout(s):26200; max_filter_ratio:0.0; priority:NORMAL | NULL     | 2024-02-27 01:39:37 | 2024-02-27 01:39:37 | 2024-02-27 01:39:37 | 2024-02-27 01:39:37 | 2024-02-27 01:39:38 |      | {"Unfinished backends":{},"ScannedRows":0,"TaskNumber":0,"LoadBytes":0,"All backends":{},"FileNumber":0,"FileSize":0} | 9084          | {}           | root |         |\n+--------+-----------------------------------------+----------+--------------------+--------+---------+----------------------------------------------------------------------+----------+---------------------+---------------------+---------------------+---------------------+---------------------+------+-----------------------------------------------------------------------------------------------------------------------+---------------+--------------+------+---------+\n')),(0,r.yg)("h3",{id:"cancel-insert-into-jobs"},"Cancel INSERT INTO jobs"),(0,r.yg)("p",null,"You can cancel the currently executing INSERT INTO job via Ctrl-C."),(0,r.yg)("h2",{id:"manual"},"Manual"),(0,r.yg)("h3",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,"The syntax of INSERT INTO is as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"INSERT INTO SELECT")),(0,r.yg)("p",null,"INSERT INTO SELECT is used to write the query results to the target table."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"INSERT INTO target_table SELECT ... FROM source_table;\n")),(0,r.yg)("p",null,"The SELECT statement above is similar to a regular SELECT query, allowing operations such as WHERE and JOIN."),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"INSERT INTO VALUES")),(0,r.yg)("p",null,"INSERT INTO VALUES is typically used for testing purposes. It is not recommended for production environments."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"INSERT INTO target_table (col1, col2, ...)\nVALUES (val1, val2, ...), (val3, val4, ...), ...;\n")),(0,r.yg)("h3",{id:"parameter-configuration"},"Parameter configuration"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"FE")," ",(0,r.yg)("strong",{parentName:"p"},"configuration")),(0,r.yg)("p",null,"insert_load_default_timeout_second"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Default value: 14400s (4 hours)"),(0,r.yg)("li",{parentName:"ul"},"Description: Timeout for import tasks, measured in seconds. If the import task does not complete within this timeout period, it will be canceled by the system and marked as CANCELLED.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Environment parameters")),(0,r.yg)("p",null,"insert_timeout"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Default value: 14400s (4 hours)"),(0,r.yg)("li",{parentName:"ul"},"Description: Timeout for INSERT INTO as an SQL statement, measured in seconds. ")),(0,r.yg)("p",null,"enable_insert_strict"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Default value: true"),(0,r.yg)("li",{parentName:"ul"},"Description: If this is set to true, INSERT INTO will fail when the task involves invalid data. If set to false, INSERT INTO will ignore invalid rows, and the import will be considered successful as long as at least one row is imported successfully."),(0,r.yg)("li",{parentName:"ul"},"Explanation: INSERT INTO cannot control the error rate, so this parameter is used to either strictly check data quality or completely ignore invalid data. Common reasons for data invalidity include: source data column length exceeding destination column length, column type mismatch, partition mismatch, and column order mismatch.")),(0,r.yg)("p",null,"insert_max_filter_ratio"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Default value: 1.0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Description: Since version 2.1.5. Only effective when ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," is false. Used to control the error tolerance when using ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO FROM S3/HDFS/LOCAL()"),". The default value is 1.0, which means all errors are tolerated. It can be a decimal between 0 and 1. It means that when the number of error rows exceeds this ratio, the INSERT task will fail."))),(0,r.yg)("h3",{id:"return-values"},"Return values"),(0,r.yg)("p",null,"INSERT INTO an SQL statement, and it returns different results based on different query outcomes:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Empty result set")),(0,r.yg)("p",null,"If the query result set of the SELECT statement in INSERT INTO is empty, the returned value will be as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql> INSERT INTO tbl1 SELECT * FROM empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Query OK")," indicates successful execution. ",(0,r.yg)("inlineCode",{parentName:"p"},"0 rows affected")," means no data was imported."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Non-empty result set and successful INSERT")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql> INSERT INTO tbl1 SELECT * FROM tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'INSERT_8510c568-9eda-4173-9e36-6adc7d35291c', 'status':'visible', 'txnId':'4005'}\n\nmysql> INSERT INTO tbl1 WITH LABEL my_label1 SELECT * FROM tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n\nmysql> INSERT INTO tbl1 SELECT * FROM tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'INSERT_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'visible', 'txnId':'4005'}\n\nmysql> INSERT INTO tbl1 SELECT * FROM tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'INSERT_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Query OK")," indicates successful execution. ",(0,r.yg)("inlineCode",{parentName:"p"},"4 rows affected")," indicates that a total of 4 rows of data have been imported. ",(0,r.yg)("inlineCode",{parentName:"p"},"2 warnings")," indicates the number of rows that were filtered out. "),(0,r.yg)("p",null,"Additionally, a JSON string is returned:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'INSERT_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n")),(0,r.yg)("p",null,"Parameter description:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TxnId"),(0,r.yg)("td",{parentName:"tr",align:null},"ID of the import transaction")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Label"),(0,r.yg)("td",{parentName:"tr",align:null},'Label of the import job: can be specified using "INSERT INTO tbl WITH LABEL label..."')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Status"),(0,r.yg)("td",{parentName:"tr",align:null},'Visibility of the imported data: If it is visible, it will be displayed as "visible." If not, it will be displayed as "committed." In the "committed" state, the import is completed, but the data may be delayed in becoming visible. There is no need to retry in this case.',(0,r.yg)("inlineCode",{parentName:"td"},"visible"),": The import is successful and the data is visible.",(0,r.yg)("inlineCode",{parentName:"td"},"committed"),": The import is completed, but the data may be delayed in becoming visible. There is no need to retry in this case.Label Already Exists: The specified label already exists and needs to be changed to a different one.Fail: The import fails.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Err"),(0,r.yg)("td",{parentName:"tr",align:null},"Error message")))),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-statements/Show-Statements/SHOW-LOAD/"},"SHOW LOAD")," statement to view the filtered rows."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'SHOW LOAD WHERE label="xxx";\n')),(0,r.yg)("p",null,'The result of this statement will include a URL that can be used to query the error data. For more details, refer to the "View error rows" section below.'),(0,r.yg)("p",null,"The invisible state of data is temporary, and the data will eventually become visible. "),(0,r.yg)("p",null,"You can check the visibility status of a batch of data using the ",(0,r.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION/"},"SHOW TRANSACTION")," statement."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW TRANSACTION WHERE id=4005;\n")),(0,r.yg)("p",null,"If the ",(0,r.yg)("inlineCode",{parentName:"p"},"TransactionStatus")," column in the result is ",(0,r.yg)("inlineCode",{parentName:"p"},"visible"),", it indicates that the data is visible."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'INSERT_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Non-empty result set but failed INSERT")),(0,r.yg)("p",null,"Failed execution means that no data was successfully imported. An error message will be returned:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'mysql> INSERT INTO tbl1 SELECT * FROM tbl2 WHERE k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. url: http://10.74.167.16:8042/api/_load_error_log?file=_shard_2/error_loginsert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0bf8a2\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ERROR 1064 (HY000): all partitions have no load data"),' indicates the root cause for the failure. The URL provided in the error message can be used to locate the error data. For more details, refer to the "View error rows" section below.'),(0,r.yg)("h2",{id:"best-practice"},"Best practice"),(0,r.yg)("h3",{id:"data-size"},"Data size"),(0,r.yg)("p",null,"INSERT INTO imposes no limitations on data volume and can support large-scale data imports. However, if you are importing a large amount of data, it is recommended to adjust the system's INSERT INTO timeout settings to ensure that ",(0,r.yg)("inlineCode",{parentName:"p"},"import timeout >= data volume ``/`` estimated import speed"),"."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"FE configuration parameter ",(0,r.yg)("inlineCode",{parentName:"li"},"insert_load_default_timeout_second")),(0,r.yg)("li",{parentName:"ol"},"Environment parameter ",(0,r.yg)("inlineCode",{parentName:"li"},"insert_timeout"))),(0,r.yg)("h3",{id:"view-error-rows"},"View error rows"),(0,r.yg)("p",null,"When the INSERT INTO result includes a URL field, you can use the following command to view the error rows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'SHOW LOAD WARNINGS ON "url";\n')),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'SHOW LOAD WARNINGS ON "http://ip:port/api/_load_error_log?file=_shard_13/error_loginsert_stmt_d2cac0a0a16d482d-9041c949a4b71605_d2cac0a0a16d482d_9041c949a4b71605";\n')),(0,r.yg)("p",null,"Common reasons for errors include: source data column length exceeding destination column length, column type mismatch, partition mismatch, and column order mismatch."),(0,r.yg)("p",null,"You can control whether INSERT INTO ignores error rows by configuring the environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),"."),(0,r.yg)("h2",{id:"ingest-external-data-via-multi-catalog"},"Ingest external data via Multi-Catalog"),(0,r.yg)("p",null,"Doris supports the creation of external tables. Once created, data from external tables can be imported into Doris internal tables using ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO SELECT"),", or queried directly using SELECT statements."),(0,r.yg)("p",null,"With its Multi-Catalog feature, Doris supports connections to various mainstream data lakes and databases including Apache Hive, Apache Iceberg, Apache Hudi, Apache Paimon (Incubating), Elasticsearch, MySQL, Oracle, and SQL Server."),(0,r.yg)("p",null,"For more information on Multi-Catalog, please refer to ",(0,r.yg)("a",{parentName:"p",href:"../../../lakehouse/lakehouse-overview/#multi-catalog"},"Lakehouse overview"),"."),(0,r.yg)("p",null,"The followings illustrate importing data from a Hive external table into a Doris internal table."),(0,r.yg)("h3",{id:"create-hive-catalog"},"Create Hive Catalog"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:8088',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:8088',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("h3",{id:"ingest-data"},"Ingest data"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a target table for the data import in Doris.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'CREATE TABLE `target_tbl` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n)\nCOMMENT "Doris Table"\nDISTRIBUTED BY HASH(k1) BUCKETS 2\nPROPERTIES (\n    "replication_num" = "1"\n);\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"For detailed instructions on creating Doris tables, please refer to ",(0,r.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE/"},"CREATE TABLE"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Importing data (from the ",(0,r.yg)("inlineCode",{parentName:"p"},"hive.db1.source_tbl")," table into the ",(0,r.yg)("inlineCode",{parentName:"p"},"target_tbl")," table)."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"INSERT INTO target_tbl SELECT k1,k2,k3 FROM  hive.db1.source_tbl limit 100;\n")),(0,r.yg)("p",null,"The INSERT command is a synchronous command. If it returns a result, that indicates successful import."),(0,r.yg)("h3",{id:"notes"},"Notes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Ensure that the external data source and the Doris cluster can communicate, including mutual network accessibility between BE nodes and external data sources.")),(0,r.yg)("h2",{id:"ingest-data-by-tvf"},"Ingest data by TVF"),(0,r.yg)("p",null,"Doris can directly query and analyze files stored in object storage or HDFS as tables through the Table Value Functions (TVFs), which supports automatic column type inference. For detailed information, please refer to the Lakehouse/TVF documentation."),(0,r.yg)("h3",{id:"automatic-column-type-inference"},"Automatic column type inference"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},'DESC FUNCTION s3 (\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style"="true"\n);\n+---------------+--------------+------+-------+---------+-------+\n| Field         | Type         | Null | Key   | Default | Extra |\n+---------------+--------------+------+-------+---------+-------+\n| p_partkey     | INT          | Yes  | false | NULL    | NONE  |\n| p_name        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_mfgr        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_brand       | TEXT         | Yes  | false | NULL    | NONE  |\n| p_type        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_size        | INT          | Yes  | false | NULL    | NONE  |\n| p_container   | TEXT         | Yes  | false | NULL    | NONE  |\n| p_retailprice | DECIMAL(9,0) | Yes  | false | NULL    | NONE  |\n| p_comment     | TEXT         | Yes  | false | NULL    | NONE  |\n+---------------+--------------+------+-------+---------+-------+\n')),(0,r.yg)("p",null,"In this example of an S3 TVF, the file path, connection information, and authentication information are specified."),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"DESC FUNCTION")," syntax to view the schema of this file."),(0,r.yg)("p",null,"It can be seen that for Parquet files, Doris automatically infers column types based on the metadata within the file."),(0,r.yg)("p",null,"Currently, Doris supports analysis and column type inference for Parquet, ORC, CSV, and JSON formats."),(0,r.yg)("p",null,"It can be used in combination with the ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO SELECT")," syntax to quickly import files into Doris tables for faster analysis."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},'// 1. Create Doris internal table\nCREATE TABLE IF NOT EXISTS test_table\n(\n    id int,\n    name varchar(50),\n    age int\n)\nDISTRIBUTED BY HASH(id) BUCKETS 4\nPROPERTIES("replication_num" = "1");\n\n// 2. Insert data by S3 Table Value Function\nINSERT INTO test_table (id,name,age)\nSELECT cast(id as INT) as id, name, cast (age as INT) as age\nFROM s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style" = "true");\n')),(0,r.yg)("h3",{id:"notes-1"},"Notes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the URI specified in the ",(0,r.yg)("inlineCode",{parentName:"li"},"S3 / hdfs")," TVF does not match any files, or if all matched files are empty, the ",(0,r.yg)("inlineCode",{parentName:"li"},"S3 / hdfs")," TVF will return an empty result set. In such cases, if you use ",(0,r.yg)("inlineCode",{parentName:"li"},"DESC FUNCTION")," to view the schema of the file, you will see a dummy column ",(0,r.yg)("inlineCode",{parentName:"li"},"__dummy_col"),", which can be ignored."),(0,r.yg)("li",{parentName:"ul"},"If the format specified for the TVF is CSV and the file being read is not empty but the first line of the file is empty, an error will be prompted: ",(0,r.yg)("inlineCode",{parentName:"li"},"The first line is empty, can not parse column numbers"),". This is because the schema cannot be parsed from the first line of the file.")),(0,r.yg)("h2",{id:"more-help"},"More help"),(0,r.yg)("p",null,"For more detailed syntax on INSERT INTO, refer to the ",(0,r.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT/"},"INSERT INTO")," command manual. You can also type ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP INSERT")," at the MySQL client command line for further information."))}d.isMDXComponent=!0}}]);