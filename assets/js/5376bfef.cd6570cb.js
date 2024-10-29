"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[564997],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(a),d=i,h=g["".concat(l,".").concat(d)]||g[d]||p[d]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},956176:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(58168),i=(a(296540),a(15680));const o={title:"Database dissection: how fast data queries are implemented",description:"What's more important than quick performance itself is the architectural design and mechanism that enable it.",date:"2023-07-16",author:"Rong Hou",tags:["Best Practice"],image:"/images/how-fast-data-queries-are-implemented.png"},r=void 0,s={permalink:"/blog/Database-Dissection-How-Fast-Data-Queries-Are-Implemented",source:"@site/blog/Database-Dissection-How-Fast-Data-Queries-Are-Implemented.md",title:"Database dissection: how fast data queries are implemented",description:"What's more important than quick performance itself is the architectural design and mechanism that enable it.",date:"2023-07-16T00:00:00.000Z",formattedDate:"July 16, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Rong Hou"}],frontMatter:{title:"Database dissection: how fast data queries are implemented",description:"What's more important than quick performance itself is the architectural design and mechanism that enable it.",date:"2023-07-16",author:"Rong Hou",tags:["Best Practice"],image:"/images/how-fast-data-queries-are-implemented.png"},prevItem:{title:"Apache Doris announced the official release of version 1.2.6",permalink:"/blog/release-note-1.2.6"},nextItem:{title:"Listen to that poor BI engineer: we need fast joins",permalink:"/blog/Listen-to-That-Poor-BI-Engineer-We-Need-Fast-Joins"}},l={authorsImageUrls:[void 0]},u=[{value:"How to Enable Quick Queries on Huge Dataset",id:"how-to-enable-quick-queries-on-huge-dataset",level:2},{value:"1.Distribute the data",id:"1distribute-the-data",level:3},{value:"2.Pre-bind a data group to a machine",id:"2pre-bind-a-data-group-to-a-machine",level:3},{value:"3.Merge the operators",id:"3merge-the-operators",level:3},{value:"How to Quickly Ingest Large Amounts of Data",id:"how-to-quickly-ingest-large-amounts-of-data",level:2},{value:"A Vectorized Execution Engine",id:"a-vectorized-execution-engine",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},g="wrapper";function p(e){let{components:t,...o}=e;return(0,i.yg)(g,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In data analytics, fast query performance is more of a result than a guarantee. What's more important than the result itself is the architectural design and mechanism that enables quick performance. This is exactly what this post is about. I will put you into context with a typical use case of Apache Doris, an open-source MPP-based analytic database."),(0,i.yg)("p",null,"The user in this case is an all-category Q&A website. As a billion-dollar listed company, they have their own data management platform. What Doris does is to support the data filtering, packaging, analyzing, and monitoring workloads of that platform. Based on their huge data size, the user demands quick data loading and quick response to queries. "),(0,i.yg)("h2",{id:"how-to-enable-quick-queries-on-huge-dataset"},"How to Enable Quick Queries on Huge Dataset"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Scenario"),": user segmentation for the website"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Data size"),": 100 billion data objects, 2.4 million tags"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Requirements"),": query response time < 1 second; result packaging < 10 seconds")),(0,i.yg)("p",null,"For these goals, the engineers have made three critical changes in their data processing pipeline."),(0,i.yg)("h3",{id:"1distribute-the-data"},"1.Distribute the data"),(0,i.yg)("p",null,"User segmentation is when analysts pick out a group of website users that share certain characteristics (tags). In the database system, this process is implemented by a bunch of set operations (union, intersection, and difference). "),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Narration from the engineers:")),(0,i.yg)("p",null,"We realize that instead of executing set operations on one big dataset, we can divide our dataset into smaller ones, execute set operations on each of them, and then merge all the results. In this way, each small dataset is computed by one thread/queue. Then we have a queue to do the final merging. It's simple distributed computing thinking."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"distributed-computing-in-database",src:a(645340).A,width:"1280",height:"651"})),(0,i.yg)("p",null,"Example:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Every 1 million users are put into one group with a ",(0,i.yg)("inlineCode",{parentName:"li"},"group_id"),"."),(0,i.yg)("li",{parentName:"ol"},"All user tags in that same group will relate to the corresponding ",(0,i.yg)("inlineCode",{parentName:"li"},"group_id"),"."),(0,i.yg)("li",{parentName:"ol"},"Calculate the union/intersection/difference within each group. (Enable multi-thread mode to increase computation efficiency.)"),(0,i.yg)("li",{parentName:"ol"},"Merge the results from the groups.")),(0,i.yg)("p",null,"The problem here is, since user tags are randomly distributed across various machines, the computation entails multi-time shuffling, which brings huge network overhead. That leads to the second change."),(0,i.yg)("h3",{id:"2pre-bind-a-data-group-to-a-machine"},"2.Pre-bind a data group to a machine"),(0,i.yg)("p",null,"This is enabled by the Colocate mechanism of Apache Doris. The idea of Colocate is to place data chunks that are often accessed together onto the same node, so as to reduce cross-node data transfer and thus, get lower latency."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"colocate-mechanism",src:a(352919).A,width:"1280",height:"331"})),(0,i.yg)("p",null,"The implementation is simple: Bind one group key to one machine. Then naturally, data corresponding to that group key will be pre-bound to that machine. "),(0,i.yg)("p",null,"The following is the query plan before we adopted Collocate: It is complicated, with a lot of data shuffling."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"complicated-data-shuffling",src:a(169774).A,width:"720",height:"765"})),(0,i.yg)("p",null,"This is the query plan after. It is much simpler, which is why queries are much faster and less costly."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"simpler-query-plan-after-colocation-join",src:a(968257).A,width:"1280",height:"616"})),(0,i.yg)("h3",{id:"3merge-the-operators"},"3.Merge the operators"),(0,i.yg)("p",null,"In data queries, the engineers realized that they often use a couple of functions in combination, so they decided to develop compound functions to further improve execution efficiency. They came to the Doris ",(0,i.yg)("a",{parentName:"p",href:"https://t.co/XD4uUSROft"},"community")," and talked about their thoughts. The Doris developers provided support for them and soon the compound functions are ready for use on Doris. These are a few examples:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"bitmap_and_count == bitmap_count(bitmap_and(bitmap1, bitmap2))\nbitmap_and_not_count == bitmap_count(bitmap_not(bitmap1, bitmap_and(bitmap1, bitmap2))\northogonal_bitmap_union_count==bitmap_and(bitmap1,bitmap_and(bitmap2,bitmap3)\n")),(0,i.yg)("p",null,"Query execution with one compound function is much faster than that with a chain of simple functions, as you can tell from the lengths of the flow charts:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"operator-merging",src:a(747128).A,width:"1280",height:"396"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Multiple Simple functions"),": This involves three function executions and two intermediate storage. It's a long and slow process."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"One compound function"),": Simple in and out.")),(0,i.yg)("h2",{id:"how-to-quickly-ingest-large-amounts-of-data"},"How to Quickly Ingest Large Amounts of Data"),(0,i.yg)("p",null,"This is about putting the right workload on the right component. Apache Doris supports a variety of data loading methods. After trials and errors, the user settled on Spark Load and thus decreased their data loading time by 90%.  "),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Narration from the engineers:")),(0,i.yg)("p",null,"In offline data ingestion, we used to perform most computation in Apache Hive, write the data files to HDFS, and pull data regularly from HDFS to Apache Doris. However, after Doris obtains parquet files from HDFS, it performs a series of operations on them before it can turn them into segment files: decompressing, bucketing, sorting, aggregating, and compressing. These workloads will be borne by Doris backends, which have to undertake a few bitmap operations at the same time. So there is a huge pressure on the CPU. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Broker-Load",src:a(542739).A,width:"1280",height:"629"})),(0,i.yg)("p",null,"So we decided on the Spark Load method. It allows us to split the ingestion process into two parts: computation and storage, so we can move all the bucketing, sorting, aggregating, and compressing to Spark clusters. Then Spark writes the output to HDFS, from which Doris pulls data and flushes it to the local disks."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Spark-Load",src:a(810826).A,width:"1280",height:"372"})),(0,i.yg)("p",null,"When ingesting 1.2 TB data (that's 110 billion rows), the Spark Load method only took 55 minutes. "),(0,i.yg)("h2",{id:"a-vectorized-execution-engine"},"A Vectorized Execution Engine"),(0,i.yg)("p",null,"In addition to the above changes, a large part of the performance of a database relies on its execution engine. In the case of Apache Doris, it has fully vectorized its storage and computation layers since version 1.1. The longtime user also witnessed this revolution, so we invited them to test how the vectorized engine worked."),(0,i.yg)("p",null,"They compared query response time before and after the vectorization in seven of its frequent scenarios:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Scenario 1: Simple user segmentation (hundreds of filtering conditions), data packaging of a multi-million user group."),(0,i.yg)("li",{parentName:"ul"},"Scenario 2: Complicated user segmentation (thousands of filtering conditions), data packaging of a tens-of-million user group."),(0,i.yg)("li",{parentName:"ul"},"Scenario 3: Multi-dimensional filtering (6 dimensions), single-table query, ",(0,i.yg)("strong",{parentName:"li"},"single-date flat table"),", data aggregation, 180 million rows per day."),(0,i.yg)("li",{parentName:"ul"},"Scenario 4: Multi-dimensional filtering (6 dimensions), single-table query, ",(0,i.yg)("strong",{parentName:"li"},"multi-date flat table"),", data aggregation, 180 million rows per day."),(0,i.yg)("li",{parentName:"ul"},"Scenario 5: ",(0,i.yg)("strong",{parentName:"li"},"Single-table query"),", COUNT, 180 million rows per day."),(0,i.yg)("li",{parentName:"ul"},"Scenario 6: ",(0,i.yg)("strong",{parentName:"li"},"Multi-table query"),", (Table A: 180 million rows, SUM, COUNT; Table B: 1.5 million rows, bitmap aggregation), aggregate Table A and Table B, join them with Table C, and then join the sub-tables, six joins in total."),(0,i.yg)("li",{parentName:"ul"},"Scenario 7: Single-table query, 500 million rows of itemized data")),(0,i.yg)("p",null,"The results are as below:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"performance-after-vectorization",src:a(137949).A,width:"1280",height:"591"})),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"In short, what contributed to the fast data loading and data queries in this case?"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The Colocate mechanism that's designed for distributed computing"),(0,i.yg)("li",{parentName:"ul"},"Collaboration between database users and ",(0,i.yg)("a",{parentName:"li",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2kl08hzc0-SPJe4VWmL_qzrFd2u2XYQA"},"developers")," that enables the operator merging"),(0,i.yg)("li",{parentName:"ul"},"Support for a wide range of data loading methods to choose from"),(0,i.yg)("li",{parentName:"ul"},"A vectorized engine that brings overall performance increase")),(0,i.yg)("p",null,"It takes efforts from both the database developers and users to make fast performance possible. The user's experience and knowledge of their own status quo will allow them to figure out the quickest path, while a good database design will help pave the way and make users' life easier."))}p.isMDXComponent=!0},645340:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Zhihu_1-7c5ee52877c98c9502ba57d03becdd9b.png"},352919:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Zhihu_2-6f75c0c47ef7106018774d6a70bf0e99.png"},169774:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Zhihu_3-a6af7fe391aa9eaa717e558112e38d18.png"},968257:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Zhihu_4-ad4a6e9be6d812a88220544a77ce1c73.png"},747128:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Zhihu_5-8ad26e082d2a60188e8928ab82192330.png"},542739:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Zhihu_6-10aa0935e2acd8774b0cb1f70d7013e8.png"},810826:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Zhihu_7-5eacf11ecef47a4bdebd2b820d1f2bd6.png"},137949:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Zhihu_8-db8b7d375c494f0e806a2286ea9144b0.png"}}]);