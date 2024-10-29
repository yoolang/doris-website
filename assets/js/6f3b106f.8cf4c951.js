"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[317179],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>d});var i=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=i.createContext({}),c=function(e){var a=i.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=c(e.components);return i.createElement(o.Provider,{value:a},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},u=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=c(t),u=n,d=h["".concat(o,".").concat(u)]||h[u]||p[u]||r;return t?i.createElement(d,l(l({ref:a},m),{},{components:t})):i.createElement(d,l({ref:a},m))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=u;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[h]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},195562:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(58168),n=(t(296540),t(15680));const r={title:"Metadata Cache",language:"en"},l=void 0,s={unversionedId:"lakehouse/metacache",id:"version-3.0/lakehouse/metacache",title:"Metadata Cache",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/lakehouse/metacache.md",sourceDirName:"lakehouse",slug:"/lakehouse/metacache",permalink:"/docs/3.0/lakehouse/metacache",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Metadata Cache",language:"en"},sidebar:"docs",previous:{title:"Data Cache",permalink:"/docs/3.0/lakehouse/filecache"},next:{title:"Elastic Compute Node",permalink:"/docs/3.0/lakehouse/compute-node"}},o={},c=[{value:"Cache Policy Explanation",id:"cache-policy-explanation",level:2},{value:"Cache Types",id:"cache-types",level:2},{value:"Database and Table Name Lists",id:"database-and-table-name-lists",level:3},{value:"Database and Table Objects",id:"database-and-table-objects",level:3},{value:"Table Schema",id:"table-schema",level:3},{value:"Hive Metastore Table Partition List",id:"hive-metastore-table-partition-list",level:3},{value:"Hive Metastore Table Partition Properties",id:"hive-metastore-table-partition-properties",level:3},{value:"Hive Metastore Table Partition File List",id:"hive-metastore-table-partition-file-list",level:3},{value:"Hudi Table Partition",id:"hudi-table-partition",level:3},{value:"Iceberg Table Information",id:"iceberg-table-information",level:3},{value:"Iceberg Table Snapshot",id:"iceberg-table-snapshot",level:3},{value:"Cache Refresh",id:"cache-refresh",level:2},{value:"Manual Refresh",id:"manual-refresh",level:3},{value:"Scheduled Refresh",id:"scheduled-refresh",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Default Behavior",id:"default-behavior",level:3},{value:"Disabling Hive Catalog Metadata Cache",id:"disabling-hive-catalog-metadata-cache",level:3},{value:"Version Behavior Changes",id:"version-behavior-changes",level:2}],m={toc:c},h="wrapper";function p(e){let{components:a,...t}=e;return(0,n.yg)(h,(0,i.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"To improve the performance of accessing external data sources, Apache Doris caches the ",(0,n.yg)("strong",{parentName:"p"},"metadata")," of external data sources."),(0,n.yg)("p",null,"Metadata includes information about databases, tables, columns, partitions, snapshots, file column names, and more."),(0,n.yg)("p",null,"This document provides detailed information on the types, strategies, and related parameter configurations of cached metadata."),(0,n.yg)("p",null,"For information on ",(0,n.yg)("strong",{parentName:"p"},"data caching"),", refer to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/lakehouse/filecache"},"Data Cache Documentation"),"."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"This document is applicable for versions 2.1.6 and later.")),(0,n.yg)("h2",{id:"cache-policy-explanation"},"Cache Policy Explanation"),(0,n.yg)("p",null,"Most caches have the following three policy metrics:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Maximum Cache Count"),(0,n.yg)("p",{parentName:"li"},"The maximum number of objects that the cache can hold. For example, caching up to 1000 tables. When the cache count exceeds the threshold, the LRU (Least-Recently-Used) policy is used to remove some cache entries.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Eviction Time"),(0,n.yg)("p",{parentName:"li"},"After a certain period of time, an object written to the cache will be automatically removed from the cache. Upon the next access, the cache will fetch the latest information from the data source and update the cache."),(0,n.yg)("p",{parentName:"li"},"For example, if a user accesses table A for the first time at 08:00 and it is cached, with an eviction time of 4 hours, between 08:00 and 14:00 without being evicted due to capacity issues, the user will directly access table A from the cache. After 14:00, the cache is evicted. If the user accesses table A again, the cache will be updated with the latest information from the data source."),(0,n.yg)("p",{parentName:"li"},"This policy is mainly used to automatically remove objects from the cache that are no longer accessed, reducing cache space usage.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Minimum Refresh Time"),(0,n.yg)("p",{parentName:"li"},"After a certain period of time, an object written to the cache will be automatically refreshed."),(0,n.yg)("p",{parentName:"li"},"For example, if a user accesses table A for the first time at 08:00 and it is cached, with a minimum refresh time of 10 minutes, between 08:00 and 08:10 without being evicted due to capacity issues, the user will directly access table A from the cache. At 08:10, the cache object will be marked as ",(0,n.yg)("strong",{parentName:"p"},"ready to refresh"),". When the user accesses this cache object again, the cache refresh operation will be triggered. Assuming the cache update takes 1 minute, accessing the cache again after 1 minute will return the updated cache object."),(0,n.yg)("p",{parentName:"li"},"Note that the cache refresh is triggered when the cache object is accessed for the first time after exceeding the minimum refresh time, and it is done asynchronously. Therefore, a minimum refresh time of 10 minutes does not guarantee that the latest object will be obtained after 10 minutes."),(0,n.yg)("p",{parentName:"li"},"This policy differs from the ",(0,n.yg)("strong",{parentName:"p"},"Eviction Time")," and is mainly used to adjust the timeliness of the cache and avoid blocking current operations by updating the cache asynchronously."))),(0,n.yg)("h2",{id:"cache-types"},"Cache Types"),(0,n.yg)("h3",{id:"database-and-table-name-lists"},"Database and Table Name Lists"),(0,n.yg)("p",null,"The database name list refers to a list of names of all databases under a Catalog."),(0,n.yg)("p",null,"The table name list refers to a list of names of all tables under a database."),(0,n.yg)("p",null,"Name lists are used only for operations that require listing names, such as ",(0,n.yg)("inlineCode",{parentName:"p"},"SHOW TABLES")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"SHOW DATABASES")," statements."),(0,n.yg)("p",null,"Each Catalog has a database name list cache, and each database has a table name list cache."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Maximum Cache Count"),(0,n.yg)("p",{parentName:"li"},"Each cache has only one entry. Therefore, the maximum cache count is 1.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Eviction Time"),(0,n.yg)("p",{parentName:"li"},"Fixed at 86400 seconds.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Minimum Refresh Time"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access"),". The unit is minutes, with a default of 10 minutes. Reducing this time allows for more real-time viewing of the latest name lists in Doris but increases the frequency of accessing external data sources."))),(0,n.yg)("h3",{id:"database-and-table-objects"},"Database and Table Objects"),(0,n.yg)("p",null,"Cache individual library and table objects. Any access operations on libraries or tables, such as queries, writes, etc., will retrieve the corresponding objects from this cache."),(0,n.yg)("p",null,"Note that the list of objects in this cache may be inconsistent with the cache of ",(0,n.yg)("strong",{parentName:"p"},"Database and Table Name Lists")," Cache ."),(0,n.yg)("p",null,"For example, by using the ",(0,n.yg)("inlineCode",{parentName:"p"},"SHOW TABLES")," command, you can retrieve tables ",(0,n.yg)("inlineCode",{parentName:"p"},"A"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"B"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"C")," from the name list cache. Suppose an external data source adds table ",(0,n.yg)("inlineCode",{parentName:"p"},"D")," at this time, then ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT * FROM D")," can access table ",(0,n.yg)("inlineCode",{parentName:"p"},"D"),", and the cache of table objects will add the object of table ",(0,n.yg)("inlineCode",{parentName:"p"},"D"),", but the cache of table names may still be ",(0,n.yg)("inlineCode",{parentName:"p"},"A"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"B"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"C"),". Only when the cache of table names is refreshed, it will become ",(0,n.yg)("inlineCode",{parentName:"p"},"A"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"B"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"C"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"D"),"."),(0,n.yg)("p",null,"Each Catalog has a cache of library names. Each library has a cache of table names."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Maximum cache count"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"max_meta_object_cache_num"),", default is 1000. This parameter can be adjusted according to the number of databases under a single Catalog or the number of tables under a single database.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Eviction time"),(0,n.yg)("p",{parentName:"li"},"Fixed at 86400 seconds.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Minimum refresh time"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access"),". Unit is minutes. Default is 10 minutes. Decreasing this time can provide more real-time access to the latest libraries or tables in Doris, but will increase the frequency of accessing external data sources."))),(0,n.yg)("h3",{id:"table-schema"},"Table Schema"),(0,n.yg)("p",null,"Cache schema information of tables, such as column names. This cache is mainly used to lazily load the schema of tables that are accessed to prevent synchronizing the schema of a large number of tables that are not needed to be accessed and occupying the FE's memory."),(0,n.yg)("p",null,"This cache is shared by all Catalogs and is globally unique."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Maximum cache count"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"max_external_schema_cache_num"),", default is 10000."),(0,n.yg)("p",{parentName:"li"},"This parameter can be adjusted according to the number of all tables under a Catalog.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Eviction time"),(0,n.yg)("p",{parentName:"li"},"Fixed at 86400 seconds.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Minimum refresh time"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access"),". Unit is minutes. Default is 10 minutes. Decreasing this time can provide more real-time access to the latest Schema in Doris, but will increase the frequency of accessing external data sources."))),(0,n.yg)("h3",{id:"hive-metastore-table-partition-list"},"Hive Metastore Table Partition List"),(0,n.yg)("p",null,"Used to cache the partition list of tables synchronized from Hive Metastore. The partition list is used for partition pruning during queries."),(0,n.yg)("p",null,"Each Hive Catalog has this cache."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Maximum cache count"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"max_hive_partition_table_cache_num"),", default is 1000."),(0,n.yg)("p",{parentName:"li"},"This parameter can be adjusted according to the number of all tables under a Catalog.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Eviction time"),(0,n.yg)("p",{parentName:"li"},"Fixed at 28800 seconds.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Minimum refresh time"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access"),". Unit is minutes. Default is 10 minutes. Decreasing this time can provide more real-time access to the latest partition list in Doris, but will increase the frequency of accessing external data sources."))),(0,n.yg)("h3",{id:"hive-metastore-table-partition-properties"},"Hive Metastore Table Partition Properties"),(0,n.yg)("p",null,"Used to cache the properties of each partition of Hive tables, such as file format, partition root path, etc. After each query, when the partition list to be accessed is obtained through partition pruning, this cache is used to retrieve detailed properties of each partition."),(0,n.yg)("p",null,"Each Hive Catalog has this cache."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Maximum cache count"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"max_hive_partition_cache_num"),", default is 10000."),(0,n.yg)("p",{parentName:"li"},"This parameter can be adjusted according to the total number of partitions that need to be accessed under a Catalog.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Eviction time"),(0,n.yg)("p",{parentName:"li"},"Fixed at 28800 seconds.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Minimum refresh time"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access"),". Unit is minutes. Default is 10 minutes. Decreasing this time can provide more real-time access to the latest partition properties in Doris, but will increase the frequency of accessing external data sources."))),(0,n.yg)("h3",{id:"hive-metastore-table-partition-file-list"},"Hive Metastore Table Partition File List"),(0,n.yg)("p",null,"Used to cache the file list information of files under a single partition of Hive tables. This cache is used to reduce the overhead of listing operations on the file system."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Maximum cache count"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"max_external_file_cache_num"),", default is 100000."),(0,n.yg)("p",{parentName:"li"},"This parameter can be adjusted according to the number of files that need to be accessed.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Eviction time"),(0,n.yg)("p",{parentName:"li"},"Default is 28800 seconds. If the ",(0,n.yg)("inlineCode",{parentName:"p"},"file.meta.cache.ttl-second")," property is set in the Catalog attributes, then the set time will be used."),(0,n.yg)("p",{parentName:"li"},"In some cases, the data files of Hive tables may change frequently, making the cache unable to meet the timeliness. By setting this parameter to 0, the cache can be disabled. In this case, the file list will be obtained in real-time for each query, which may reduce performance but improve file timeliness.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Minimum Refresh Time"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access"),". Unit is in minutes. Default is 10 minutes. Decreasing this time allows for more real-time access to the latest partition properties in Doris, but will increase the frequency of accessing external data sources."))),(0,n.yg)("h3",{id:"hudi-table-partition"},"Hudi Table Partition"),(0,n.yg)("p",null,"Used to cache partition information for Hudi tables."),(0,n.yg)("p",null,"Each Hudi Catalog has this cache."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Maximum Cache Count"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"max_hive_table_cache_num"),", default is 1000."),(0,n.yg)("p",{parentName:"li"},"This parameter can be adjusted based on the number of Hudi tables.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Eviction Time"),(0,n.yg)("p",{parentName:"li"},"Fixed at 28800 seconds.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Minimum Refresh Time"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access"),". Unit is in minutes. Default is 10 minutes. Decreasing this time allows for more real-time access to the latest Hudi partition properties in Doris, but will increase the frequency of accessing external data sources."))),(0,n.yg)("h3",{id:"iceberg-table-information"},"Iceberg Table Information"),(0,n.yg)("p",null,"Used to cache Iceberg table objects. These objects are loaded and constructed through the Iceberg API."),(0,n.yg)("p",null,"Each Iceberg Catalog has this cache."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Maximum Cache Count"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"max_hive_table_cache_num"),", default is 1000."),(0,n.yg)("p",{parentName:"li"},"This parameter can be adjusted based on the number of Iceberg tables.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Eviction Time"),(0,n.yg)("p",{parentName:"li"},"Fixed at 28800 seconds.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Minimum Refresh Time"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access"),". Unit is in minutes. Default is 10 minutes. Decreasing this time allows for more real-time access to the latest Iceberg table properties in Doris, but will increase the frequency of accessing external data sources."))),(0,n.yg)("h3",{id:"iceberg-table-snapshot"},"Iceberg Table Snapshot"),(0,n.yg)("p",null,"Used to cache the Snapshot list of Iceberg tables. These objects are loaded and constructed through the Iceberg API."),(0,n.yg)("p",null,"Each Iceberg Catalog has this cache."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Maximum Cache Count"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"max_hive_table_cache_num"),", default is 1000."),(0,n.yg)("p",{parentName:"li"},"This parameter can be adjusted based on the number of Iceberg tables.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Eviction Time"),(0,n.yg)("p",{parentName:"li"},"Fixed at 28800 seconds.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Minimum Refresh Time"),(0,n.yg)("p",{parentName:"li"},"Controlled by the FE configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access"),". Unit is in minutes. Default is 10 minutes. Decreasing this time allows for more real-time access to the latest Iceberg table properties in Doris, but will increase the frequency of accessing external data sources."))),(0,n.yg)("h2",{id:"cache-refresh"},"Cache Refresh"),(0,n.yg)("p",null,"In addition to the individual refresh and eviction strategies for each cache mentioned above, users can also manually or periodically refresh metadata caches directly."),(0,n.yg)("h3",{id:"manual-refresh"},"Manual Refresh"),(0,n.yg)("p",null,"Users can manually refresh metadata using the ",(0,n.yg)("inlineCode",{parentName:"p"},"REFRESH")," command."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"REFRESH CATALOG"),(0,n.yg)("p",{parentName:"li"},"Refreshes the specified Catalog."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},'REFRESH CATALOG ctl1 PROPERTIES("invalid_cache" = "true");')),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"This command will refresh the library list, table column names, and all cache information of the specified Catalog."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"invalid_cache")," indicates whether to refresh cache such as partition and file lists. Default is true. If set to false, it will only refresh the library and table lists of the Catalog without refreshing cache information like partition and file lists. This parameter is useful when users only want to synchronize newly added or deleted library and table information, it can be set to false."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"REFRESH DATABASE"),(0,n.yg)("p",{parentName:"li"},"Refreshes the specified Database."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},'REFRESH DATABASE [ctl.]db1 PROPERTIES("invalid_cache" = "true");')),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"This command will refresh the table column names of the specified Database and all cache information under the Database."),(0,n.yg)("li",{parentName:"ul"},"The meaning of ",(0,n.yg)("inlineCode",{parentName:"li"},"invalid_cache")," property is the same as above. Default is true. If set to false, it will only refresh the table lists of the Database without refreshing cache information. This parameter is useful when users only want to synchronize newly added or deleted table information."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"REFRESH TABLE"),(0,n.yg)("p",{parentName:"li"},"Refreshes the specified Table."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"REFRESH TABLE [ctl.][db.]tbl1;")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"This command will refresh all cache information under the specified Table.")))),(0,n.yg)("h3",{id:"scheduled-refresh"},"Scheduled Refresh"),(0,n.yg)("p",null,"Users can set a scheduled refresh for a Catalog when creating it."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'metadata_refresh_interval_sec' = '3600'\n);\n")),(0,n.yg)("p",null,"In the above example, ",(0,n.yg)("inlineCode",{parentName:"p"},"metadata_refresh_interval_sec")," indicates refreshing the Catalog every 3600 seconds. This is equivalent to automatically executing:"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},'REFRESH CATALOG ctl1 PROPERTIES("invalid_cache" = "true");')," every 3600 seconds."),(0,n.yg)("h2",{id:"best-practices"},"Best Practices"),(0,n.yg)("p",null,"Caching can significantly improve the accessibility of metadata, avoiding frequent remote access to metadata causing performance fluctuations or putting pressure on metadata services. However, caching will reduce the timeliness of data. For example, if the cache refresh time is 10 minutes, only cached metadata can be read within ten minutes. Therefore, it is necessary to set the cache reasonably according to the situation."),(0,n.yg)("h3",{id:"default-behavior"},"Default Behavior"),(0,n.yg)("p",null,"Here mainly introduces the caching behavior that users may be concerned about under default parameter configurations."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"After adding a new database or table in an external data source, it can be queried in Doris in real-time using SELECT. However, SHOW DATABASES and SHOW TABLES may not be visible and require manual cache refresh or a maximum wait of 10 minutes."),(0,n.yg)("li",{parentName:"ul"},"After adding a new partition in an external data source, manual cache refresh is required, or after a maximum wait of 10 minutes, data from the new partition can be queried."),(0,n.yg)("li",{parentName:"ul"},"If there are changes in partition data files, manual cache refresh is required, or after a maximum wait of 10 minutes, data from the new partition can be queried.")),(0,n.yg)("h3",{id:"disabling-hive-catalog-metadata-cache"},"Disabling Hive Catalog Metadata Cache"),(0,n.yg)("p",null,"For Hive Catalog, if you want to disable the cache to query real-time updated data, you can configure the following parameter:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'-- fe.conf\nmax_hive_partition_table_cache_num=0  // Close partition list cache\nmax_external_file_cache_num=0    // Close file list cache\n\n-- Catalog property\n"file.meta.cache.ttl-second" = "0" // Close file list cache for certain catalog\n')),(0,n.yg)("p",null,"After setting the above parameter:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"New partitions from external data sources can be queried in real-time."),(0,n.yg)("li",{parentName:"ul"},"Changes in partition data files can be queried in real-time.")),(0,n.yg)("p",null,"However, this may increase the access pressure on external data sources (such as Hive Metastore and HDFS), which may lead to unstable metadata access delays and other phenomena."),(0,n.yg)("h2",{id:"version-behavior-changes"},"Version Behavior Changes"),(0,n.yg)("p",null,"In version 2.1.5, the ",(0,n.yg)("inlineCode",{parentName:"p"},"use_meta_cache")," attribute was added to the Catalog properties, defaulting to false."),(0,n.yg)("admonition",{type:"warning"},(0,n.yg)("p",{parentName:"admonition"},"Do not set ",(0,n.yg)("inlineCode",{parentName:"p"},"use_meta_cache")," to true before 2.1.6.")),(0,n.yg)("p",null,"In version 2.1.6, for newly created Catalogs, this attribute is default changed to true to correspond to the caching behavior described in this document. It is recommended that users upgrade to version 2.1.6 and rebuild existing Catalogs to align the default behavior with the description in this document."))}p.isMDXComponent=!0}}]);