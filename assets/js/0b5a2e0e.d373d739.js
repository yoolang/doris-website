"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[626045],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,c=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return a?n.createElement(c,o(o({ref:t},d),{},{components:a})):n.createElement(c,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},36964:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"Error Data Handling",language:"en"},o=void 0,i={unversionedId:"data-operate/import/error-data-handling",id:"version-2.1/data-operate/import/error-data-handling",title:"Error Data Handling",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/data-operate/import/error-data-handling.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/error-data-handling",permalink:"/docs/data-operate/import/error-data-handling",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Error Data Handling",language:"en"},sidebar:"docs",previous:{title:"Import Data Formats",permalink:"/docs/data-operate/import/load-data-format"},next:{title:"Converting Source Data",permalink:"/docs/data-operate/import/load-data-convert"}},s={},p=[{value:"Strict Mode",id:"strict-mode",level:2},{value:"Filtering of Failed Column Type Conversions",id:"filtering-of-failed-column-type-conversions",level:3},{value:"Limiting Partial Column Updates to Existing Columns",id:"limiting-partial-column-updates-to-existing-columns",level:3},{value:"Configuration Method",id:"configuration-method",level:3},{value:"Maximum Error Rate",id:"maximum-error-rate",level:2},{value:"Error Rate Calculation Method",id:"error-rate-calculation-method",level:3},{value:"Configuration Method",id:"configuration-method-1",level:3}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"During the import process, the data types of the original columns may not be completely consistent with the target columns. The import process will convert the values of the original columns with inconsistent data types. During the conversion process, failures such as field type mismatch, field overflow, and precision mismatch may occur."),(0,r.yg)("p",null,"Strict mode (strict_mode) is used to control whether to filter out these conversion failure error rows during the import process."),(0,r.yg)("p",null,"The maximum error rate (max_filter_ratio) is used to control the maximum proportion of filtered error rows that can be tolerated."),(0,r.yg)("h2",{id:"strict-mode"},"Strict Mode"),(0,r.yg)("p",null,"Strict mode has two purposes: filtering out error rows with failed column type conversions during the import process, and limiting partial column updates to only update existing columns."),(0,r.yg)("h3",{id:"filtering-of-failed-column-type-conversions"},"Filtering of Failed Column Type Conversions"),(0,r.yg)("p",null,"The filtering strategy of strict mode is as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When strict mode is disabled, the failed converted error fields will be converted to NULL values, and these error rows containing NULL values will be imported together with the correct data rows.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},'When strict mode is enabled, the failed error rows with conversion failures will be filtered out, and only the correct data rows will be imported. Here, the error rows refer to the rows where the original data is not NULL, but the result after column type conversion is NULL. The term "column type conversion" does not include NULL values calculated by functions.')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Both correct data rows and error data rows may contain NULL values. If the target column does not allow NULL values, these data rows containing NULL values will also be filtered out."))),(0,r.yg)("p",null,"For columns with range restrictions in the import, if the original data can be successfully converted by the type conversion but fails the range restriction, strict mode does not have any impact on it. For example, if the type is ",(0,r.yg)("inlineCode",{parentName:"p"},"decimal(1,0)")," and the original data is 10, it can be converted by the type conversion but is not within the range declared by the column. Strict mode does not have any impact on this kind of data."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. Example with column type TinyInt:")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Original Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Original Data Example"),(0,r.yg)("th",{parentName:"tr",align:null},"Value after Conversion to TinyInt"),(0,r.yg)("th",{parentName:"tr",align:null},"Strict Mode"),(0,r.yg)("th",{parentName:"tr",align:null},"Result"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\\N"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"Enabled or Disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Non-NULL"),(0,r.yg)("td",{parentName:"tr",align:null},'"abc" or 2000'),(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"Enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Invalid value (filtered out)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Non-NULL"),(0,r.yg)("td",{parentName:"tr",align:null},'"abc"'),(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"Disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Non-NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Enabled or Disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Correct import")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The columns in the table allow importing NULL values.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"abc")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"2000")," will be converted to NULL after being converted to TinyInt due to type or precision issues. In the case of strict mode being enabled, these data will be filtered out. If it is disabled, ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," will be imported.")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. Example with column type Decimal(1,0):")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Original Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Original Data Example"),(0,r.yg)("th",{parentName:"tr",align:null},"Value after Conversion to Decimal"),(0,r.yg)("th",{parentName:"tr",align:null},"Strict Mode"),(0,r.yg)("th",{parentName:"tr",align:null},"Result"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\\N"),(0,r.yg)("td",{parentName:"tr",align:null},"null"),(0,r.yg)("td",{parentName:"tr",align:null},"Enabled or Disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Non-NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"aaa"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"Enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Invalid value (filtered out)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Non-NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"aaa"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"Disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Non-NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"1 or 10"),(0,r.yg)("td",{parentName:"tr",align:null},"1 or 10"),(0,r.yg)("td",{parentName:"tr",align:null},"Enabled or Disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Correct import")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The columns in the table allow importing NULL values.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"abc")," will be converted to NULL after being converted to Decimal due to type issues. In the case of strict mode being enabled, these data will be filtered out. If it is disabled, ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," will be imported.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Although ",(0,r.yg)("inlineCode",{parentName:"p"},"10")," is a value that exceeds the range, it is not affected by strict mode because its type meets the requirements of decimal. ",(0,r.yg)("inlineCode",{parentName:"p"},"10")," will be filtered out in other import processing flows, but not by strict mode.")))),(0,r.yg)("h3",{id:"limiting-partial-column-updates-to-existing-columns"},"Limiting Partial Column Updates to Existing Columns"),(0,r.yg)("p",null,"In strict mode, each row of data inserted through partial column updates must have a Key that already exists in the table. In non-strict mode, partial column updates can update rows with existing Keys or insert new rows with non-existing Keys."),(0,r.yg)("p",null,"For example, consider the following table structure:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> desc user_profile;\n+------------------+-----------------+------+-------+---------+-------+\n| Field            | Type            | Null | Key   | Default | Extra |\n+------------------+-----------------+------+-------+---------+-------+\n| id               | INT             | Yes  | true  | NULL    |       |\n| name             | VARCHAR(10)     | Yes  | false | NULL    | NONE  |\n| age              | INT             | Yes  | false | NULL    | NONE  |\n| city             | VARCHAR(10)     | Yes  | false | NULL    | NONE  |\n| balance          | DECIMALV3(9, 0) | Yes  | false | NULL    | NONE  |\n| last_access_time | DATETIME        | Yes  | false | NULL    | NONE  |\n+------------------+-----------------+------+-------+---------+-------+\n")),(0,r.yg)("p",null,"There is a data record in the table as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'1,"kevin",18,"shenzhen",400,"2023-07-01 12:00:00"\n')),(0,r.yg)("p",null,"When users use non-strict mode of Stream Load for partial column updates to insert the following data into the table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"1,500,2023-07-03 12:00:01\n3,23,2023-07-03 12:00:02\n18,9999999,2023-07-03 12:00:03\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl  --location-trusted -u root -H "partial_columns:true" -H "strict_mode:false" -H "column_separator:," -H "columns:id,balance,last_access_time" -T /tmp/test.csv http://host:port/api/db1/user_profile/_stream_load\n')),(0,r.yg)("p",null,"One existing data record in the table will be updated, and two new data records will be inserted into the table. For columns in the inserted data where the user does not specify a value, if the column has a default value, it will be filled with the default value. Otherwise, if the column allows NULL values, it will be filled with NULL. If neither of these conditions is met, the insertion will fail."),(0,r.yg)("p",null,"When users use strict mode of Stream Load for partial column updates to insert the above data into the table, the import will fail because strict mode is enabled and the keys (",(0,r.yg)("inlineCode",{parentName:"p"},"(3)"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"(18)"),") of the second and third rows are not present in the original table."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl  --location-trusted -u root -H "partial_columns:true" -H "strict_mode:true" -H "column_separator:," -H "columns:id,balance,last_access_time" -T /tmp/test.csv http://host:port/api/db1/user_profile/_stream_load\n')),(0,r.yg)("h3",{id:"configuration-method"},"Configuration Method"),(0,r.yg)("p",null,"By default, strict mode is set to False, which means it is disabled. The method of setting strict mode varies depending on the import method."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/stream-load-manual"},"STREAM LOAD")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl --location-trusted -u user:passwd \\\n-H "strict_mode: true" \\\n-T 1.txt \\\nhttp://host:port/api/example_db/my_table/_stream_load\n')),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/broker-load-manual"},"BROKER LOAD")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.exmpale_label_1\n(\n    DATA INFILE("s3://your_bucket_name/your_file.txt")\n    INTO TABLE load_test\n    COLUMNS TERMINATED BY ","\n)\nWITH S3\n(\n    "AWS_ENDPOINT" = "AWS_ENDPOINT",\n    "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n    "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n    "AWS_REGION" = "AWS_REGION"\n)\nPROPERTIES\n(\n     "strict_mode" = "true"\n);\n')),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/routine-load-manual"},"ROUTINE LOAD")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test_job ON my_table\nPROPERTIES\n(\n    "strict_mode" = "true"\n) \nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic"\n);\n')),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/mysql-load-manual"},"MySQL Load")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES\n(\n    "strict_mode" = "true"\n);\n')),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/insert-into-manual"},"INSERT INTO")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET enable_insert_strict = true;\nINSERT INTO my_table ...;\n")),(0,r.yg)("h2",{id:"maximum-error-rate"},"Maximum Error Rate"),(0,r.yg)("p",null,"The import task allows users to set a maximum error rate (",(0,r.yg)("inlineCode",{parentName:"p"},"max_filter_ratio"),"). If the error rate of the imported data is below the maximum error rate, these error rows will be ignored and the other correct data will be imported. Otherwise, the import will fail."),(0,r.yg)("h3",{id:"error-rate-calculation-method"},"Error Rate Calculation Method"),(0,r.yg)("p",null,"The data rows processed in the import job can be divided into the following three categories:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Filtered Rows: Data that is filtered out due to data quality issues. Data quality issues include type errors, precision errors, string length exceeding the limit, mismatched file column count, and data rows filtered out due to missing partitions.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Unselected Rows: Data rows that are filtered out due to ",(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/import/load-data-convert"},"pre-filtering")," or ",(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/import/load-data-convert"},"post-filtering")," conditions.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Loaded Rows: Data rows that are successfully imported."))),(0,r.yg)("p",null,"The error rate is calculated as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"#Filtered Rows / (#Filtered Rows + #Loaded Rows)\n")),(0,r.yg)("p",null,"In other words, ",(0,r.yg)("inlineCode",{parentName:"p"},"Unselected Rows")," will not be included in the error rate calculation."),(0,r.yg)("h3",{id:"configuration-method-1"},"Configuration Method"),(0,r.yg)("p",null,"The default value of ",(0,r.yg)("inlineCode",{parentName:"p"},"max_filter_ratio")," is 0, which means that if there is any error data, the entire import task will fail."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/stream-load-manual"},"Stream Load")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl --location-trusted -u user:passwd \\\n-H "max_filter_ratio: 0.1" \\\n-T 1.txt \\\nhttp://host:port/api/example_db/my_table/_stream_load\n')),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/broker-load-manual"},"Broker Load")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.exmpale_label_1\n(\n     DATA INFILE("s3://your_bucket_name/your_file.txt")\n     INTO TABLE load_test\n     COLUMNS TERMINATED BY ","\n)\nWITH S3\n(\n     "AWS_ENDPOINT" = "AWS_ENDPOINT",\n     "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n     "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n     "AWS_REGION" = "AWS_REGION"\n)\nPROPERTIES\n(\n     "max_filter_ratio" = "0.1"\n);\n')),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/routine-load-manual"},"Routine Load")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test_job ON my_table\nPROPERTIES\n(\n     "max_filter_ratio" = "0.1"\n) \nFROM KAFKA\n(\n     "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n     "kafka_topic" = "my_topic"\n);\n')),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/mysql-load-manual"},"MySQL Load")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES (\n     "max_filter_ratio"="0.1"\n );\n')),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/insert-into-manual"},"INSERT INTO")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET insert_max_filter_ratio = 0.1;\nINSERT INTO my_table FROM S3/HDFS/LOCAL();\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"insert_max_filter_ratio")," only takes effect when the value of ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),", and it is used to control the maximum error rate of ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO FROM S3/HDFS/LOCAL()"),". The default value is 1.0, which means tolerating all errors.")))}u.isMDXComponent=!0}}]);