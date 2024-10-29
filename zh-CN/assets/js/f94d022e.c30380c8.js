"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[643881],{15680:(e,a,r)=>{r.d(a,{xA:()=>s,yg:()=>d});var i=r(296540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function m(e,a){if(null==e)return{};var r,i,n=function(e,a){if(null==e)return{};var r,i,n={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)r=t[i],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=i.createContext({}),B=function(e){var a=i.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},s=function(e){var a=B(e.components);return i.createElement(o.Provider,{value:a},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},p=i.forwardRef((function(e,a){var r=e.components,n=e.mdxType,t=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),y=B(r),p=n,d=y["".concat(o,".").concat(p)]||y[p]||c[p]||t;return r?i.createElement(d,l(l({ref:a},s),{},{components:r})):i.createElement(d,l({ref:a},s))}));function d(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=r.length,l=new Array(t);l[0]=p;var m={};for(var o in a)hasOwnProperty.call(a,o)&&(m[o]=a[o]);m.originalType=e,m[y]="string"==typeof e?e:n,l[1]=m;for(var B=2;B<t;B++)l[B]=r[B];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},503741:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>m,toc:()=>B});var i=r(58168),n=(r(296540),r(15680));const t={title:"\u5185\u5b58\u65e5\u5fd7\u5206\u6790",language:"zh-CN"},l=void 0,m={unversionedId:"admin-manual/memory-management/memory-analysis/memory-log-analysis",id:"version-2.1/admin-manual/memory-management/memory-analysis/memory-log-analysis",title:"\u5185\u5b58\u65e5\u5fd7\u5206\u6790",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/memory-management/memory-analysis/memory-log-analysis.md",sourceDirName:"admin-manual/memory-management/memory-analysis",slug:"/admin-manual/memory-management/memory-analysis/memory-log-analysis",permalink:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/memory-log-analysis",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u5185\u5b58\u65e5\u5fd7\u5206\u6790",language:"zh-CN"},sidebar:"docs",previous:{title:"OOM Killer Crash \u5206\u6790",permalink:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/oom-crash-analysis"},next:{title:"Heap Profile \u5206\u6790\u5185\u5b58",permalink:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis"}},o={},B=[{value:"\u8fdb\u7a0b\u5185\u5b58\u72b6\u6001\u65e5\u5fd7\u5206\u6790",id:"\u8fdb\u7a0b\u5185\u5b58\u72b6\u6001\u65e5\u5fd7\u5206\u6790",level:2},{value:"\u8fdb\u7a0b\u5185\u5b58\u7edf\u8ba1\u65e5\u5fd7\u5206\u6790",id:"\u8fdb\u7a0b\u5185\u5b58\u7edf\u8ba1\u65e5\u5fd7\u5206\u6790",level:2}],s={toc:B},y="wrapper";function c(e){let{components:a,...r}=e;return(0,n.yg)(y,(0,i.A)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"be/log/be.INFO")," \u4e2d\u7684\u8fdb\u7a0b\u5185\u5b58\u65e5\u5fd7\u4e3b\u8981\u5206\u4e3a\u4e24\u7c7b\uff0c\u4e00\u662f\u8fdb\u7a0b\u5185\u5b58\u72b6\u6001\u65e5\u5fd7\uff0c\u5305\u62ec\u8fdb\u7a0b\u5185\u5b58\u5927\u5c0f\u548c\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u5927\u5c0f\u3002\u4e8c\u662f\u66f4\u52a0\u8be6\u7ec6\u7684\u8fdb\u7a0b\u5185\u5b58\u7edf\u8ba1\u65e5\u5fd7\uff0c\u5305\u542b Memory Tracker \u7edf\u8ba1\u7684\u5185\u5b58\u5927\u5c0f\u3002"),(0,n.yg)("h2",{id:"\u8fdb\u7a0b\u5185\u5b58\u72b6\u6001\u65e5\u5fd7\u5206\u6790"},"\u8fdb\u7a0b\u5185\u5b58\u72b6\u6001\u65e5\u5fd7\u5206\u6790"),(0,n.yg)("p",null,"Doris BE \u8fdb\u7a0b\u5185\u5b58\u6bcf\u6b21\u589e\u957f\u6216\u51cf\u5c11 256 MB \u90fd\u4f1a\u5728 ",(0,n.yg)("inlineCode",{parentName:"p"},"log/be.INFO")," \u65e5\u5fd7\u6253\u5370\u4e00\u6b21\u8fdb\u7a0b\u5185\u5b58\u72b6\u6001\uff0c\u53e6\u5916\u8fdb\u7a0b\u5185\u5b58\u4e0d\u8db3\u65f6\uff0c\u4e5f\u4f1a\u968f\u5176\u4ed6\u65e5\u5fd7\u4e00\u8d77\u6253\u5370\u8fdb\u7a0b\u5185\u5b58\u72b6\u6001\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"os physical memory 375.81 GB. process memory used 4.09 GB(= 3.49 GB[vm/rss] - 410.44 MB[tc/jemalloc_cache] + 1 GB[reserved] + 0B[waiting_refresh]), limit 3.01 GB, soft limit 2.71 GB. sys available memory 134.41 GB(= 135.41 GB[proc/available] - 1 GB[reserved] - 0B[waiting_refresh]), low water mark 3.20 GB, warning water mark 6.40 GB.\n")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"os physical memory 375.81 GB")," \u6307\u7cfb\u7edf\u7269\u7406\u5185\u5b58 375.81 GB\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"process memory used 4.09 GB(= 3.49 GB[vm/rss] - 410.44 MB[tc/jemalloc_cache] + 1 GB[reserved] + 0B[waiting_refresh])")))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5f53\u524d\u6211\u4eec\u8ba4\u4e3a BE \u8fdb\u7a0b\u4f7f\u7528\u4e86 4.09 GB \u5185\u5b58\uff0c\u5b9e\u9645 BE \u8fdb\u7a0b\u4f7f\u7528\u7684\u7269\u7406\u5185\u5b58 ",(0,n.yg)("inlineCode",{parentName:"li"},"vm/rss")," \u662f 3.49 GB\uff0c"),(0,n.yg)("li",{parentName:"ul"},"\u5176\u4e2d\u6709 410.44 MB \u662f ",(0,n.yg)("inlineCode",{parentName:"li"},"tc/jemalloc_cache"),"\uff0c\u8fd9\u90e8\u5206 Cache \u4f1a\u5728\u4e4b\u540e\u6267\u884c\u8fc7\u7a0b\u4e2d\u88ab\u4f18\u5148\u590d\u7528\uff0c\u6240\u4ee5\u8fd9\u91cc\u4e0d\u5c06\u5176\u7b97\u4f5c BE \u8fdb\u7a0b\u5185\u5b58\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"reserved")," \u662f\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u88ab\u9884\u7559\u7684\u5185\u5b58\uff0c\u901a\u5e38\u5728\u6784\u5efa HashTable \u7b49\u4f1a\u8017\u8d39\u5927\u91cf\u5185\u5b58\u7684\u64cd\u4f5c\u524d\u4f1a\u63d0\u524d\u9884\u7559 HashTable \u7684\u5185\u5b58\uff0c\u786e\u4fdd\u6784\u5efa HashTable \u7684\u8fc7\u7a0b\u4e0d\u4f1a\u56e0\u4e3a\u5185\u5b58\u4e0d\u8db3\u800c\u7ec8\u6b62\uff0c\u8fd9\u90e8\u5206\u9884\u7559\u7684\u5185\u5b58\u88ab\u8ba1\u7b97\u5728 BE \u8fdb\u7a0b\u5185\u5b58\u4e2d\uff0c\u5373\u4f7f\u5b9e\u9645\u4e0a\u8fd8\u6ca1\u6709\u88ab\u5206\u914d\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"waiting_refresh")," \u662f\u4e24\u6b21\u5185\u5b58\u72b6\u6001\u5237\u65b0\u7684\u95f4\u9694\u4e2d\u7533\u8bf7\u7684\u5927\u5185\u5b58\uff0cDoris \u5185\u5b58\u72b6\u6001\u5237\u65b0\u7684\u95f4\u9694\u9ed8\u8ba4\u662f 100ms\uff0c\u4e3a\u907f\u514d\u4e24\u6b21\u5185\u5b58\u72b6\u6001\u5237\u65b0\u7684\u95f4\u9694\u4e2d\u53d1\u751f\u5927\u91cf\u5185\u5b58\u7533\u8bf7\uff0c\u5728\u5185\u5b58\u8d85\u9650\u540e\u6ca1\u6709\u53ca\u65f6\u611f\u77e5\u548c\u89e6\u53d1\u5185\u5b58 GC\uff0c\u6240\u4ee5\u95f4\u9694\u4e2d\u7533\u8bf7\u7684\u5927\u5185\u5b58\u88ab\u8ba1\u7b97\u5728 BE \u8fdb\u7a0b\u5185\u5b58\u4e2d\uff0c\u6bcf\u6b21\u5185\u5b58\u72b6\u6001\u5237\u65b0\u540e",(0,n.yg)("inlineCode",{parentName:"li"},"waiting_refresh"),"\u90fd\u5c06\u6e050\uff0c")),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"sys available memory 134.41 GB(= 135.41 GB[proc/available] - 1 GB[reserved] - 0B[waiting_refresh])"))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5f53\u524d BE \u8fdb\u7a0b\u5269\u4f59\u53ef\u4f7f\u7528\u7684\u5185\u5b58\u662f 134.41 GB\uff0c\u7cfb\u7edf\u4e2d\u5b9e\u9645\u53ef\u63d0\u4f9b\u7ed9 BE \u8fdb\u7a0b\u4f7f\u7528\u7684\u5185\u5b58 ",(0,n.yg)("inlineCode",{parentName:"li"},"proc/available")," \u662f 135.41 GB."),(0,n.yg)("li",{parentName:"ul"},"\u5176\u4e2d\u6709 1GB \u7684\u5185\u5b58\u5df2\u7ecf\u88ab\u9884\u7559\uff0c\u6240\u4ee5\u5728\u8ba1\u7b97 BE \u8fdb\u7a0b\u5269\u4f59\u53ef\u7528\u5185\u5b58\u65f6\u51cf\u53bb ",(0,n.yg)("inlineCode",{parentName:"li"},"reserved"),"\uff0c\u5173\u4e8e ",(0,n.yg)("inlineCode",{parentName:"li"},"reserved")," \u548c ",(0,n.yg)("inlineCode",{parentName:"li"},"waiting_refresh")," \u7684\u4ecb\u7ecd\u53c2\u8003\u4e0a\u9762\u5bf9 BE \u8fdb\u7a0b\u5185\u5b58\u7684\u6ce8\u89e3\u3002")),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"limit 3.01 GB, soft limit 2.71 GB")," \u548c ",(0,n.yg)("inlineCode",{parentName:"li"},"low water mark 3.20 GB, warning water mark 6.40 GB"),"\uff0c\u6709\u5173 MemLimit \u548c WaterMark \u7684\u66f4\u591a\u4ecb\u7ecd\u89c1 ","[\u5185\u5b58\u9650\u5236\u548c\u6c34\u4f4d\u7ebf\u8ba1\u7b97\u65b9\u6cd5]","\u3002")),(0,n.yg)("h2",{id:"\u8fdb\u7a0b\u5185\u5b58\u7edf\u8ba1\u65e5\u5fd7\u5206\u6790"},"\u8fdb\u7a0b\u5185\u5b58\u7edf\u8ba1\u65e5\u5fd7\u5206\u6790"),(0,n.yg)("p",null,"\u5f53\u8fdb\u7a0b\u53ef\u7528\u5185\u5b58\u4e0d\u8db3\u540e\uff0cBE \u5927\u591a\u6570\u4f4d\u7f6e\u7684\u5185\u5b58\u7533\u8bf7\u90fd\u4f1a\u611f\u77e5\uff0c\u5c1d\u8bd5\u505a\u51fa\u9884\u5b9a\u7684\u56de\u8c03\u65b9\u6cd5\uff0c\u5305\u62ec\u89e6\u53d1 Memory GC \u6216 Cancel \u67e5\u8be2\u7b49\uff0c\u5e76\u6253\u5370\u8fdb\u7a0b\u5185\u5b58\u7edf\u8ba1\u65e5\u5fd7\uff0c\u6253\u5370\u9ed8\u8ba4\u95f4\u9694\u662f 1s\uff0c\u65e5\u5fd7\u5206\u4e3a\u4e24\u90e8\u5206 ",(0,n.yg)("inlineCode",{parentName:"p"},"Process Memory Summary")," \u548c ",(0,n.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary")," \u4e24\u90e8\u5206\uff0c\u5728",(0,n.yg)("inlineCode",{parentName:"p"},"be/log/be.INFO")," \u4e2d\u53ef\u4ee5\u627e\u5230\uff0c\u636e\u6b64\u786e\u8ba4\u5f53\u524d\u8fdb\u7a0b\u5185\u5b58\u4f7f\u7528\u662f\u5426\u7b26\u5408\u9884\u671f\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"Process Memory Summary:\n    os physical memory 375.81 GB. process memory used 4.09 GB(= 3.49 GB[vm/rss] - 410.44 MB[tc/jemalloc_cache] + 1 GB[reserved] + 0B[waiting_refresh]), limit 3.01 GB, soft limit 2.71 GB. sys available memory 134.41 GB(= 135.41 GB[proc/available] - 1 GB[reserved] - 0B[waiting_refresh]), low water mark 3.20 GB, warning water mark 6.40 GB.\nMemory Tracker Summary:\n    MemTrackerLimiter Label=other, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=schema_change, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=compaction, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=load, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=query, Type=overview, Limit=-1.00 B(-1 B), Used=83.32 MB(87369024 B), Peak=88.33 MB(92616000 B)\n    MemTrackerLimiter Label=global, Type=overview, Limit=-1.00 B(-1 B), Used=199.37 MB(209053204 B), Peak=199.37 MB(209053204 B)\n    MemTrackerLimiter Label=tc/jemalloc_cache, Type=overview, Limit=-1.00 B(-1 B), Used=410.44 MB(430376896 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=tc/jemalloc_metadata, Type=overview, Limit=-1.00 B(-1 B), Used=144 MB(151759440 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=sum of all trackers, Type=overview, Limit=-1.00 B(-1 B), Used=114.80 MB(726799124 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=process resident memory, Type=overview, Limit=-1.00 B(-1 B), Used=3.49 GB(3743289344 B), Peak=3.49 GB(3743289344 B)\n    MemTrackerLimiter Label=reserved_memory, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=process virtual memory, Type=overview, Limit=-1.00 B(-1 B), Used=44.25 GB(47512956928 B), Peak=44.25 GB(47512956928 B)\n    MemTrackerLimiter Label=Orphan, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DetailsTrackerSet, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=IOBufBlockMemory, Parent Label=DetailsTrackerSet, Used=1.41 MB(1474560 B), Peak=1.41 MB(1474560 B)\n    MemTracker Label=SegmentCache[size], Parent Label=DetailsTrackerSet, Used=1.64 MB(1720543 B), Peak=18.78 MB(19691997 B)\n    MemTracker Label=SchemaCache[number], Parent Label=DetailsTrackerSet, Used=9.21 KB(9428 B), Peak=9.21 KB(9428 B)\n    MemTracker Label=TabletSchemaCache[number], Parent Label=DetailsTrackerSet, Used=9.29 MB(9738798 B), Peak=9.29 MB(9738798 B)\n    MemTracker Label=TabletMeta(experimental), Parent Label=DetailsTrackerSet, Used=25.08 MB(26303456 B), Peak=25.08 MB(26303456 B)\n    MemTracker Label=RuntimeFilterMergeControllerEntity(experimental), Parent Label=DetailsTrackerSet, Used=32.00 B(32 B), Peak=32.00 B(32 B)\n    MemTrackerLimiter Label=SegCompaction, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=PointQueryExecutor, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=BlockCompression, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=RowIdStorageReader, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SubcolumnsTree, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=S3FileBuffer, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DataPageCache[size](AllocByAllocator), Type=global, Limit=-1.00 B(-1 B), Used=198.70 MB(208357157 B), Peak=198.73 MB(208381892 B)\n    MemTrackerLimiter Label=IndexPageCache[size](AllocByAllocator), Type=global, Limit=-1.00 B(-1 B), Used=679.73 KB(696047 B), Peak=679.73 KB(696047 B)\n    MemTrackerLimiter Label=PKIndexPageCache[size](AllocByAllocator), Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=Query#Id=529e3cb37dff464c-93bd9eafa8944ea6, Type=query, Limit=2.00 GB(2147483648 B), Used=83.32 MB(87369024 B), Peak=88.33 MB(92616000 B)\n    MemTrackerLimiter Label=MemTableTrackerSet, Type=load, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SnapshotManager, Type=other, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=AllMemTableMemory, Parent Label=DetailsTrackerSet, Used=0(0 B), Peak=0(0 B)\n")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Process Memory Summary")," \u662f\u8fdb\u7a0b\u5185\u5b58\u72b6\u6001\uff0c\u53c2\u8003\u4e0a\u6587 ","[\u8fdb\u7a0b\u5185\u5b58\u72b6\u6001\u65e5\u5fd7\u5206\u6790]","\u3002"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary")," \u662f\u8fdb\u7a0b Memory Tracker \u6c47\u603b\uff0c\u5305\u542b\u6240\u6709 ",(0,n.yg)("inlineCode",{parentName:"p"},"Type=overview")," \u548c ",(0,n.yg)("inlineCode",{parentName:"p"},"Type=global")," \u7684 Memory Tracker\uff0c\u5e2e\u52a9\u4f7f\u7528\u8005\u5206\u6790\u5f53\u65f6\u7684\u5185\u5b58\u72b6\u6001\uff0c\u53c2\u8003 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/admin-manual/memory-management/overview"},"Overview")," \u5206\u6790\u6bcf\u4e00\u90e8\u5206\u5185\u5b58\u7684\u542b\u4e49\u3002"))}c.isMDXComponent=!0}}]);