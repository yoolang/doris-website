"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[107889],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>d});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),y=p(a),u=l,d=y["".concat(s,".").concat(u)]||y[u]||c[u]||o;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[y]="string"==typeof e?e:l,i[1]=r;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(58168),l=(a(296540),a(15680));const o={title:"ALTER-TABLE-PROPERTY",language:"en"},i=void 0,r={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",title:"ALTER-TABLE-PROPERTY",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ALTER-TABLE-PROPERTY",language:"en"},sidebar:"docs",previous:{title:"ALTER-TABLE-REPLACE",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE"},next:{title:"ALTER-TABLE-COMMENT",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT"}},s={},p=[{value:"ALTER-TABLE-PROPERTY",id:"alter-table-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},y="wrapper";function c(e){let{components:t,...a}=e;return(0,l.yg)(y,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"alter-table-property"},"ALTER-TABLE-PROPERTY"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"ALTER TABLE PROPERTY"),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"Differences between Partition Attributes and Table Attributes"),(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"Partition attributes generally focus on the number of buckets (buckets), storage medium (storage_medium), replication num (replication_num), and hot/cold data separation policies (storage_policy).",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"For existing partitions, you can use ALTER TABLE {tableName} MODIFY PARTITION ({partitionName}) SET ({key}={value}) to modify them, but the number of buckets (buckets) cannot be changed."),(0,l.yg)("li",{parentName:"ul"},"For not-created dynamic partitions, you can use ALTER TABLE {tableName} SET (dynamic_partition.{key} = {value}) to modify their attributes."),(0,l.yg)("li",{parentName:"ul"},"For not-created auto partitions, you can use ALTER TABLE {tableName} SET ({key} = {value}) to modify their attributes."),(0,l.yg)("li",{parentName:"ul"},"If users want to modify partition attributes, they need to modify the attributes of the already created partitions, as well as the attributes of not-created partitions."))),(0,l.yg)("li",{parentName:"ul"},"Aside from the above attributes, all others are at the table level."),(0,l.yg)("li",{parentName:"ul"},"For the specific attributes, please refer to ",(0,l.yg)("a",{parentName:"li",href:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE#properties"},"create table attributes")))),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"This statement is used to modify the properties of an existing table. This operation is synchronous, and the return of the command indicates the completion of the execution."),(0,l.yg)("p",null,"Modify the properties of the table, currently supports modifying the bloom filter column, the colocate_with attribute and the dynamic_partition attribute,  the replication_num and default.replication_num."),(0,l.yg)("p",null,"grammar:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,l.yg)("p",null,"The alter_clause of property supports the following modification methods."),(0,l.yg)("p",null,"Note:"),(0,l.yg)("p",null,"Can also be merged into the above schema change operation to modify, see the example below"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Modify the bloom filter column of the table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table SET ("bloom_filter_columns"="k1,k2,k3");\n')),(0,l.yg)("p",null,"Can also be incorporated into the schema change operation above (note that the syntax for multiple clauses is slightly different)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nDROP COLUMN col2\nPROPERTIES ("bloom_filter_columns"="k1,k2,k3");\n')),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"Modify the Colocate property of the table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("colocate_with" = "t1");\n')),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"Change the bucketing method of the table from Hash Distribution to Random Distribution")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("distribution_type" = "random");\n')),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"Modify the dynamic partition attribute of the table (support adding dynamic partition attribute to the table without dynamic partition attribute)")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "false");\n')),(0,l.yg)("p",null,"If you need to add dynamic partition attributes to tables without dynamic partition attributes, you need to specify all dynamic partition attributes\n(Note: adding dynamic partition attributes is not supported for non-partitioned tables)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set (\n  "dynamic_partition.enable" = "true", \n  "dynamic_partition.time_unit" = "DAY", \n  "dynamic_partition.end" = "3", \n  "dynamic_partition.prefix" = "p", \n  "dynamic_partition. buckets" = "32"\n);\n')),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},"Modify the in_memory attribute of the table, only can set value 'false'")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("in_memory" = "false");\n')),(0,l.yg)("ol",{start:6},(0,l.yg)("li",{parentName:"ol"},"Enable batch delete function")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table ENABLE FEATURE "BATCH_DELETE";\n')),(0,l.yg)("p",null,"Note:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Only support unique tables"),(0,l.yg)("li",{parentName:"ul"},"Batch deletion is supported for old tables, while new tables are already supported when they are created")),(0,l.yg)("ol",{start:7},(0,l.yg)("li",{parentName:"ol"},"Enable the function of ensuring the import order according to the value of the sequence column")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES (\n  "function_column.sequence_type" = "Date"\n);\n')),(0,l.yg)("p",null,"Note:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Only support unique tables"),(0,l.yg)("li",{parentName:"ul"},"The sequence_type is used to specify the type of the sequence column, which can be integral and time type"),(0,l.yg)("li",{parentName:"ul"},"Only the orderliness of newly imported data is supported. Historical data cannot be changed")),(0,l.yg)("ol",{start:8},(0,l.yg)("li",{parentName:"ol"},"Change the default number of buckets for the table to 50")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table MODIFY DISTRIBUTION DISTRIBUTED BY HASH(k1) BUCKETS 50;\n")),(0,l.yg)("p",null,"Note:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Only support non colocate table with RANGE partition and HASH distribution")),(0,l.yg)("ol",{start:9},(0,l.yg)("li",{parentName:"ol"},"Modify table comments")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table MODIFY COMMENT "new comment";\n')),(0,l.yg)("ol",{start:10},(0,l.yg)("li",{parentName:"ol"},"Modify column comments")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table MODIFY COLUMN k1 COMMENT "k1", MODIFY COLUMN k2 COMMENT "k2";\n')),(0,l.yg)("ol",{start:11},(0,l.yg)("li",{parentName:"ol"},"Modify the engine type")),(0,l.yg)("p",null,"Only the MySQL type can be changed to the ODBC type. The value of driver is the name of the driver in the odbc.init configuration."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.mysql_table MODIFY ENGINE TO odbc PROPERTIES("driver" = "MySQL");\n')),(0,l.yg)("ol",{start:12},(0,l.yg)("li",{parentName:"ol"},"Modify the number of copies")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.mysql_table SET ("replication_num" = "2");\nALTER TABLE example_db.mysql_table SET ("default.replication_num" = "2");\nALTER TABLE example_db.mysql_table SET ("replication_allocation" = "tag.location.default: 1");\nALTER TABLE example_db.mysql_table SET ("default.replication_allocation" = "tag.location.default: 1");\n')),(0,l.yg)("p",null,"Note:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"The property with the default prefix indicates the default replica distribution for the modified table. This modification does not modify the current actual replica distribution of the table, but only affects the replica distribution of newly created partitions on the partitioned table."),(0,l.yg)("li",{parentName:"ol"},"For non-partitioned tables, modifying the replica distribution property without the default prefix will modify both the default replica distribution and the actual replica distribution of the table. That is, after the modification, through the ",(0,l.yg)("inlineCode",{parentName:"li"},"show create table")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"show partitions from tbl")," statements, you can see that the replica distribution has been modified.\nchanged."),(0,l.yg)("li",{parentName:"ol"},"For partitioned tables, the actual replica distribution of the table is at the partition level, that is, each partition has its own replica distribution, which can be viewed through the ",(0,l.yg)("inlineCode",{parentName:"li"},"show partitions from tbl")," statement. If you want to modify the actual replica distribution, see ",(0,l.yg)("inlineCode",{parentName:"li"},"ALTER TABLE PARTITION"),".")),(0,l.yg)("p",null,"13","."," ",(0,l.yg)("strong",{parentName:"p"},"[Experimental]")," turn on ",(0,l.yg)("inlineCode",{parentName:"p"},"light_schema_change")),(0,l.yg)("p",null,"  For tables that were not created with light_schema_change enabled, you can enable it by using the following statement."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.mysql_table SET ("light_schema_change" = "true");\n')),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Modify the bloom filter column of the table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table SET ("bloom_filter_columns"="k1,k2,k3");\n')),(0,l.yg)("p",null,"Can also be incorporated into the schema change operation above (note that the syntax for multiple clauses is slightly different)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nDROP COLUMN col2\nPROPERTIES ("bloom_filter_columns"="k1,k2,k3");\n')),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"Modify the Colocate property of the table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("colocate_with" = "t1");\n')),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"Change the bucketing method of the table from Hash Distribution to Random Distribution")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("distribution_type" = "random");\n')),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"Modify the dynamic partition attribute of the table (support adding dynamic partition attribute to the table without dynamic partition attribute)")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "false");\n')),(0,l.yg)("p",null,"If you need to add dynamic partition attributes to tables without dynamic partition attributes, you need to specify all dynamic partition attributes\n(Note: adding dynamic partition attributes is not supported for non-partitioned tables)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "true", "dynamic_partition.time_unit" = "DAY", "dynamic_partition.end" = "3", "dynamic_partition.prefix" = "p", "dynamic_partition. buckets" = "32");\n')),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},"Modify the in_memory attribute of the table, only can set value 'false'")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("in_memory" = "false");\n')),(0,l.yg)("ol",{start:6},(0,l.yg)("li",{parentName:"ol"},"Enable batch delete function")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table ENABLE FEATURE "BATCH_DELETE";\n')),(0,l.yg)("ol",{start:7},(0,l.yg)("li",{parentName:"ol"},"Enable the function of ensuring the import order according to the value of the sequence column")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date");\n')),(0,l.yg)("ol",{start:8},(0,l.yg)("li",{parentName:"ol"},"Change the default number of buckets for the table to 50")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table MODIFY DISTRIBUTION DISTRIBUTED BY HASH(k1) BUCKETS 50;\n")),(0,l.yg)("ol",{start:9},(0,l.yg)("li",{parentName:"ol"},"Modify table comments")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table MODIFY COMMENT "new comment";\n')),(0,l.yg)("ol",{start:10},(0,l.yg)("li",{parentName:"ol"},"Modify column comments")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table MODIFY COLUMN k1 COMMENT "k1", MODIFY COLUMN k2 COMMENT "k2";\n')),(0,l.yg)("ol",{start:11},(0,l.yg)("li",{parentName:"ol"},"Modify the engine type")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.mysql_table MODIFY ENGINE TO odbc PROPERTIES("driver" = "MySQL");\n')),(0,l.yg)("ol",{start:12},(0,l.yg)("li",{parentName:"ol"},"Add a cold and hot separation data migration strategy to the table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},' ALTER TABLE create_table_not_have_policy set ("storage_policy" = "created_create_table_alter_policy");\n')),(0,l.yg)("p",null,"NOTE\uff1aThe table can be successfully added only if it hasn't been associated with a storage policy. A table just can have one storage policy."),(0,l.yg)("ol",{start:13},(0,l.yg)("li",{parentName:"ol"},"Add a hot and cold data migration strategy to the partition of the table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE create_table_partition MODIFY PARTITION (*) SET("storage_policy"="created_create_table_partition_alter_policy");\n')),(0,l.yg)("p",null,"NOTE\uff1aThe table's partition can be successfully added only if it hasn't been associated with a storage policy. A table just can have one storage policy."),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, PROPERTY, ALTER TABLE\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);