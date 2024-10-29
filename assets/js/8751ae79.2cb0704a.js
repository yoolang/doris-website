"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[579096],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,y=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(y,r(r({ref:t},d),{},{components:a})):n.createElement(y,r({ref:t},d))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},889508:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(58168),l=(a(296540),a(15680));const i={title:"Deleting Data with DELETE Command",language:"en"},r=void 0,o={unversionedId:"data-operate/delete/delete-manual",id:"data-operate/delete/delete-manual",title:"Deleting Data with DELETE Command",description:"\x3c!--",source:"@site/docs/data-operate/delete/delete-manual.md",sourceDirName:"data-operate/delete",slug:"/data-operate/delete/delete-manual",permalink:"/docs/dev/data-operate/delete/delete-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"Deleting Data with DELETE Command",language:"en"},sidebar:"docs",previous:{title:"Updating Transaction",permalink:"/docs/dev/data-operate/update/unique-update-transaction"},next:{title:"Batch Deletion",permalink:"/docs/dev/data-operate/delete/batch-delete-manual"}},s={},p=[{value:"Delete by Specifying a Filter Predicate",id:"delete-by-specifying-a-filter-predicate",level:3},{value:"Required Parameters",id:"required-parameters",level:3},{value:"Optional Parameters",id:"optional-parameters",level:3},{value:"Note",id:"note",level:3},{value:"Examples",id:"examples",level:3},{value:"Delete via the USING clause",id:"delete-via-the-using-clause",level:2},{value:"Required parameters",id:"required-parameters-1",level:3},{value:"Optional parameters",id:"optional-parameters-1",level:3},{value:"Note",id:"note-1",level:3},{value:"Example",id:"example",level:3},{value:"Returned Results",id:"returned-results",level:2},{value:"Implementation Success",id:"implementation-success",level:3},{value:"Submitted Successfully but Invisible",id:"submitted-successfully-but-invisible",level:3},{value:"Commit Failed, Transaction Cancelled",id:"commit-failed-transaction-cancelled",level:3},{value:"Summary",id:"summary",level:3},{value:"Configurations",id:"configurations",level:2},{value:"View History",id:"view-history",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Example",id:"example-1",level:3}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"The DELETE statement conditionally deletes data from a specified table or partition using the MySQL protocol.The Delete operation differs from import-based bulk deletion in that it is similar to the INSERT INTO statement, which is a synchronous process.All Delete operations are a separate import job in Doris."),(0,l.yg)("p",null,"The DELETE statement generally requires the specification of tables and partitions as well as deletion conditions to filter the data to be deleted, and will delete data from both the base and rollup tables."),(0,l.yg)("p",null,"The syntax of the DELETE statement is detailed in the ",(0,l.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/DELETE"},"DELETE")," syntax. Unlike the Insert into command, Delete cannot specify ",(0,l.yg)("inlineCode",{parentName:"p"},"label")," manually. For the concept of ",(0,l.yg)("inlineCode",{parentName:"p"},"label")," , refer to the ",(0,l.yg)("a",{parentName:"p",href:"../../data-operate/import/insert-into-manual"},"Insert Into")," documentation."),(0,l.yg)("h3",{id:"delete-by-specifying-a-filter-predicate"},"Delete by Specifying a Filter Predicate"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    WHERE column_name op { value | value_list } [ AND column_name op { value | value_list } ...];\n")),(0,l.yg)("h3",{id:"required-parameters"},"Required Parameters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"table_name: Specify the table from which the data should be deleted;")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"column_name: Columns belonging to table_name")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"op: Logical comparison operators, optional types include: =, >, <, >=, <=, !=, in, not in")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"value | value_list: Values or lists of values for logical comparisons"))),(0,l.yg)("h3",{id:"optional-parameters"},"Optional Parameters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"PARTITION partition_name | PARTITIONS (partition_name ","[, partition_name]","): Specify the name of the partition in which the deletion is to be performed. If the partition does not exist in the table, an error will be reported.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"table_alias: Aliases of the Table"))),(0,l.yg)("h3",{id:"note"},"Note"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"When using the table model Aggregate, you can only specify conditions on the key column.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If the selected key column does not exist in a rollup, it cannot be deleted.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},'Conditions can only be related to each other by "and". If you want an "or" relationship, you need to write the conditions in two separate DELETE statements;')),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If the table is partitioned, you need to specify the partition. If not, doris will infer the partition from the condition.In two cases, doris cannot infer the partition from the condition:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"The condition does not contain a partition column")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},'The op for the partition column is "not in". When the partition table does not specify a partition, or a partition cannot be inferred from the condition, you need to set the session variable ',(0,l.yg)("inlineCode",{parentName:"p"},"delete_without_partition")," to true, in which case delete is applied to all partitions.")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"This statement may reduce query efficiency for a period of time after execution. The extent of the impact depends on the number of deleted conditions specified in the statement. The more conditions specified, the greater the impact."))),(0,l.yg)("h3",{id:"examples"},"Examples"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. Delete the row in my_table partition p1 where column k1 is 3.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM my_table PARTITION p1\n    WHERE k1 = 3;\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},'2. Delete rows in my_table partition p1 where column k1 is greater than or equal to 3 and column k2 is "abc".')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITION p1\nWHERE k1 = 3 AND k2 = "abc";\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},'3. Delete rows in my_table partition (p1, p2) where column k1 is greater than or equal to 3 and column k2 is "abc".')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITIONS (p1, p2)\nWHERE k1 = 3 AND k2 = "abc";\n')),(0,l.yg)("h2",{id:"delete-via-the-using-clause"},"Delete via the USING clause"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    [USING additional_tables]\n    WHERE condition\n")),(0,l.yg)("h3",{id:"required-parameters-1"},"Required parameters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"table_name: Specify the table from which the data should be deleted;")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"WHERE condition: Specify a condition for selecting rows for deletion;"))),(0,l.yg)("h3",{id:"optional-parameters-1"},"Optional parameters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"PARTITION partition_name | PARTITIONS (partition_name ","[, partition_name]","): Specify the name of the partition in which the deletion is to be performed. If the partition does not exist in the table, an error will be reported.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"table_alias: Aliases of the Table"))),(0,l.yg)("h3",{id:"note-1"},"Note"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Only conditions on the key column can be specified when using the UNIQUE model.")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("p",null,"Use the result of joining the ",(0,l.yg)("inlineCode",{parentName:"p"},"t2")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"t3")," tables to delete the data in ",(0,l.yg)("inlineCode",{parentName:"p"},"t1"),". The deleted table only supports the UNIQUE model."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"-- Create t1, t2, t3 tables\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- insert data\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- remove rows from t1\nDELETE FROM t1\n  USING t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n")),(0,l.yg)("p",null,"The expected result is that the column with ",(0,l.yg)("inlineCode",{parentName:"p"},"id=1")," in table ",(0,l.yg)("inlineCode",{parentName:"p"},"t1")," is deleted."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n")),(0,l.yg)("h2",{id:"returned-results"},"Returned Results"),(0,l.yg)("p",null,"Delete command is a SQL command that return results synchronously. The results are classified as follows:"),(0,l.yg)("h3",{id:"implementation-success"},"Implementation Success"),(0,l.yg)("p",null,"If Delete completes successfully and is visible, the following results are returned.",(0,l.yg)("inlineCode",{parentName:"p"},"Query OK"),"indicates success."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'VISIBLE', 'txnId':'4005'}\n")),(0,l.yg)("h3",{id:"submitted-successfully-but-invisible"},"Submitted Successfully but Invisible"),(0,l.yg)("p",null,"Doris transaction commit is divided into two steps: commit and release version, only after the completion of the release version step, the results will be visible to the user."),(0,l.yg)("p",null,"If the commit has been successful, then it can be assumed that it will eventually be published successfully, Doris will try to wait for a certain period of time after the commit is completed, if the timeout period is exceeded even if the published version is not yet complete, it will be preferred to return to the user, prompting the user that the commit has been completed."),(0,l.yg)("p",null," If Delete has been submitted and executed, but the release version is still not published and visible, the following result will be returned:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'COMMITTED', 'txnId':'4005', 'err':'delete job is committed but may be taking effect later' }\n")),(0,l.yg)("p",null,"The result will also return a json string:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"affected rows"),"\uff1aIndicates the rows affected by this deletion. Since Doris deletion is currently a logical deletion, this value is constant at 0;")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"label"),"\uff1aThe automatically generated label identifies the import job. Each import job has a Label that is unique within a single database;")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"status"),"\uff1aIndicates whether the data deletion is visible. If it's visible, the result displays ",(0,l.yg)("inlineCode",{parentName:"p"},"VISIBLE"),"; if  it's invisible, the result displays ",(0,l.yg)("inlineCode",{parentName:"p"},"COMMITTED"),";")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"txnId"),"\uff1aThe transaction id corresponding to Delete;")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"err"),"\uff1aThis field will display the details of Delete."))),(0,l.yg)("h3",{id:"commit-failed-transaction-cancelled"},"Commit Failed, Transaction Cancelled"),(0,l.yg)("p",null,"If the Delete statement fails to commit, the transaction will be automatically aborted by Doris and the following result will be returned:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql delete from test_tbl partition p1 where k1  80;\nERROR 1064 (HY000): errCode = 2, detailMessage = {Cause of error}\n")),(0,l.yg)("p",null,"For example, a timeout deletion will return the timeout time and the outstanding ",(0,l.yg)("inlineCode",{parentName:"p"},"(tablet=replica)")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql delete from test_tbl partition p1 where k1  80;\nERROR 1064 (HY000): errCode = 2, detailMessage = failed to delete replicas from job: 4005, Unfinished replicas:10000=60000, 10001=60000, 10002=60000\n")),(0,l.yg)("h3",{id:"summary"},"Summary"),(0,l.yg)("p",null,"The correct logic for handling the results returned by Delete is:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If returns ",(0,l.yg)("inlineCode",{parentName:"p"},"ERROR 1064 (HY000)")," , the deletion failed;")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If returns",(0,l.yg)("inlineCode",{parentName:"p"},"Query OK"),", the deletion is successful;"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If ",(0,l.yg)("inlineCode",{parentName:"p"},"status")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"COMMITTED"),", it means that the data is still not visible, users can wait for a while and then check the result with ",(0,l.yg)("inlineCode",{parentName:"p"},"show delete"),";")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If ",(0,l.yg)("inlineCode",{parentName:"p"},"STATUS")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"VISIBLE"),", the deletion is successful."))))),(0,l.yg)("h2",{id:"configurations"},"Configurations"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"TIMEOUT Configurations")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"insert_timeout"))),(0,l.yg)("p",null,"Because delete itself is a SQL command and treated as a special kind of insert, the delete statement also subject to session limitations. Timeout is determined by the ",(0,l.yg)("inlineCode",{parentName:"p"},"insert_timeout")," value in the session, which can be increased in seconds by ",(0,l.yg)("inlineCode",{parentName:"p"},"SET insert_timeout = xxx"),"."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"IN Predicate Configuration")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"max_allowed_in_element_num_of_delete"))),(0,l.yg)("p",null,"If the user needs to occupy more elements when using the in predicate, the user can adjust the maximum number of elements allowed to be carried by ",(0,l.yg)("inlineCode",{parentName:"p"},"max_allowed_in_element_num_of_delete"),". The default value is 1024."),(0,l.yg)("h2",{id:"view-history"},"View History"),(0,l.yg)("p",null,"Users can view the history of deletions that have been performed by using the show delete statement."),(0,l.yg)("h3",{id:"syntax"},"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DELETE [FROM db_name]\n")),(0,l.yg)("h3",{id:"example-1"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql show delete from test_db;\n+-----------+---------------+---------------------+-----------------+----------+\n| TableName | PartitionName | CreateTime          | DeleteCondition | State    |\n+-----------+---------------+---------------------+-----------------+----------+\n| empty_tbl | p3            | 2020-04-15 23:09:35 | k1 EQ "1"       | FINISHED |\n| test_tbl  | p4            | 2020-04-15 23:09:53 | k1 GT "80"      | FINISHED |\n+-----------+---------------+---------------------+-----------------+----------+\n2 rows in set (0.00 sec)\n')))}u.isMDXComponent=!0}}]);