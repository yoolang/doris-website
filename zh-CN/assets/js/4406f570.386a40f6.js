"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[638939],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>u});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),s=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),y=s(t),d=r,u=y["".concat(o,".").concat(d)]||y[d]||g[d]||l;return t?n.createElement(u,i(i({ref:a},m),{},{components:t})):n.createElement(u,i({ref:a},m))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[y]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43816:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=t(58168),r=(t(296540),t(15680));const l={title:"OUTFILE",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE",id:"version-2.1/sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE",title:"OUTFILE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE.md",sourceDirName:"sql-manual/sql-statements/Data-Manipulation-Statements",slug:"/sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"OUTFILE",language:"zh-CN"},sidebar:"docs",previous:{title:"ANALYZE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE"},next:{title:"SHOW ALTER TABLE MATERIALIZED VIEW",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW"}},o={},s=[{value:"OUTFILE",id:"outfile",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"\u8bed\u6cd5\uff1a",id:"\u8bed\u6cd5",level:4},{value:"\u8bf4\u660e\uff1a",id:"\u8bf4\u660e",level:4},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s},y="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(y,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"outfile"},"OUTFILE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"OUTFILE"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null," ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," \u547d\u4ee4\u7528\u4e8e\u5c06\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u4e3a\u6587\u4ef6\u3002\u76ee\u524d\u652f\u6301\u901a\u8fc7 Broker \u8fdb\u7a0b, S3 \u534f\u8bae\u6216HDFS \u534f\u8bae\uff0c\u5bfc\u51fa\u5230\u8fdc\u7aef\u5b58\u50a8\uff0c\u5982 HDFS\uff0cS3\uff0cBOS\uff0cCOS\uff08\u817e\u8baf\u4e91\uff09\u4e0a\u3002"),(0,r.yg)("h4",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'query_stmt\nINTO OUTFILE "file_path"\n[format_as]\n[properties]\n')),(0,r.yg)("h4",{id:"\u8bf4\u660e"},"\u8bf4\u660e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"file_path"),(0,r.yg)("p",{parentName:"li"},"\u6587\u4ef6\u5b58\u50a8\u7684\u8def\u5f84\u53ca\u6587\u4ef6\u524d\u7f00\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"file_path \u6307\u5411\u6587\u4ef6\u5b58\u50a8\u7684\u8def\u5f84\u4ee5\u53ca\u6587\u4ef6\u524d\u7f00\u3002\u5982 `hdfs://path/to/my_file_`\u3002\n\n\u6700\u7ec8\u7684\u6587\u4ef6\u540d\u5c06\u7531 `my_file_`\u3001\u6587\u4ef6\u5e8f\u53f7\u4ee5\u53ca\u6587\u4ef6\u683c\u5f0f\u540e\u7f00\u7ec4\u6210\u3002\u5176\u4e2d\u6587\u4ef6\u5e8f\u53f7\u75310\u5f00\u59cb\uff0c\u6570\u91cf\u4e3a\u6587\u4ef6\u88ab\u5206\u5272\u7684\u6570\u91cf\u3002\u5982\uff1a\nmy_file_abcdefg_0.csv\nmy_file_abcdefg_1.csv\nmy_file_abcdegf_2.csv\n")),(0,r.yg)("p",{parentName:"li"},"\u4e5f\u53ef\u4ee5\u7701\u7565\u6587\u4ef6\u524d\u7f00\uff0c\u53ea\u6307\u5b9a\u6587\u4ef6\u76ee\u5f55\uff0c\u5982",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"format_as"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"FORMAT AS CSV\n")),(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f. \u652f\u6301 CSV\u3001PARQUET\u3001CSV_WITH_NAMES\u3001CSV_WITH_NAMES_AND_TYPES\u3001ORC. \u9ed8\u8ba4\u4e3a CSV\u3002"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\uff1aPARQUET\u3001CSV_WITH_NAMES\u3001CSV_WITH_NAMES_AND_TYPES\u3001ORC \u5728 1.2 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"properties"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'\u6307\u5b9a\u76f8\u5173\u5c5e\u6027\u3002\u76ee\u524d\u652f\u6301\u901a\u8fc7 Broker \u8fdb\u7a0b, \u6216\u901a\u8fc7 S3/HDFS\u534f\u8bae\u8fdb\u884c\u5bfc\u51fa\u3002\n\n\u8bed\u6cd5\uff1a\n[PROPERTIES ("key"="value", ...)]\n\u652f\u6301\u5982\u4e0b\u5c5e\u6027\uff1a\n\n\u6587\u4ef6\u76f8\u5173\u7684\u5c5e\u6027\uff1a\n    column_separator: \u5217\u5206\u9694\u7b26\uff0c\u53ea\u7528\u4e8ecsv\u76f8\u5173\u683c\u5f0f\u3002\u5728 1.2 \u7248\u672c\u5f00\u59cb\u652f\u6301\u591a\u5b57\u8282\u5206\u9694\u7b26\uff0c\u5982\uff1a"\\\\x01", "abc"\u3002\n    line_delimiter: \u884c\u5206\u9694\u7b26\uff0c\u53ea\u7528\u4e8ecsv\u76f8\u5173\u683c\u5f0f\u3002\u5728 1.2 \u7248\u672c\u5f00\u59cb\u652f\u6301\u591a\u5b57\u8282\u5206\u9694\u7b26\uff0c\u5982\uff1a"\\\\x01", "abc"\u3002\n    max_file_size: \u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u9650\u5236\uff0c\u5982\u679c\u7ed3\u679c\u8d85\u8fc7\u8fd9\u4e2a\u503c\uff0c\u5c06\u5207\u5272\u6210\u591a\u4e2a\u6587\u4ef6, max_file_size\u53d6\u503c\u8303\u56f4\u662f[5MB, 2GB], \u9ed8\u8ba4\u4e3a1GB\u3002\uff08\u5f53\u6307\u5b9a\u5bfc\u51fa\u4e3aorc\u6587\u4ef6\u683c\u5f0f\u65f6\uff0c\u5b9e\u9645\u5207\u5206\u6587\u4ef6\u7684\u5927\u5c0f\u5c06\u662f64MB\u7684\u500d\u6570\uff0c\u5982\uff1a\u6307\u5b9amax_file_size = 5MB, \u5b9e\u9645\u5c06\u4ee564MB\u4e3a\u5207\u5206\uff1b\u6307\u5b9amax_file_size = 65MB, \u5b9e\u9645\u5c06\u4ee5128MB\u4e3a\u5207\u5206\uff09\n    delete_existing_files: \u9ed8\u8ba4\u4e3afalse\uff0c\u82e5\u6307\u5b9a\u4e3atrue,\u5219\u4f1a\u5148\u5220\u9664file_path\u6307\u5b9a\u7684\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\uff0c\u7136\u540e\u5bfc\u51fa\u6570\u636e\u5230\u8be5\u76ee\u5f55\u4e0b\u3002\u4f8b\u5982\uff1a"file_path" = "/user/tmp", \u5219\u4f1a\u5220\u9664"/user/"\u4e0b\u6240\u6709\u6587\u4ef6\u53ca\u76ee\u5f55\uff1b"file_path" = "/user/tmp/", \u5219\u4f1a\u5220\u9664"/user/tmp/"\u4e0b\u6240\u6709\u6587\u4ef6\u53ca\u76ee\u5f55\u3002\n    file_suffix: \u6307\u5b9a\u5bfc\u51fa\u6587\u4ef6\u7684\u540e\u7f00\uff0c\u82e5\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5c06\u4f7f\u7528\u6587\u4ef6\u683c\u5f0f\u7684\u9ed8\u8ba4\u540e\u7f00\u3002\n\nBroker \u76f8\u5173\u5c5e\u6027\u9700\u52a0\u524d\u7f00 `broker.`\uff1a\n    broker.name: broker\u540d\u79f0\n    broker.hadoop.security.authentication: \u6307\u5b9a\u8ba4\u8bc1\u65b9\u5f0f\u4e3a kerberos\n    broker.kerberos_principal: \u6307\u5b9a kerberos \u7684 principal\n    broker.kerberos_keytab: \u6307\u5b9a kerberos \u7684 keytab \u6587\u4ef6\u8def\u5f84\u3002\u8be5\u6587\u4ef6\u5fc5\u987b\u4e3a Broker \u8fdb\u7a0b\u6240\u5728\u670d\u52a1\u5668\u4e0a\u7684\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\u3002\u5e76\u4e14\u53ef\u4ee5\u88ab Broker \u8fdb\u7a0b\u8bbf\u95ee\n\nHDFS \u76f8\u5173\u5c5e\u6027:\n    fs.defaultFS: namenode \u5730\u5740\u548c\u7aef\u53e3\n    hadoop.username: hdfs \u7528\u6237\u540d\n    dfs.nameservices: name service\u540d\u79f0\uff0c\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4\n    dfs.ha.namenodes.[nameservice ID]: namenode\u7684id\u5217\u8868,\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4\n    dfs.namenode.rpc-address.[nameservice ID].[name node ID]: Name node\u7684rpc\u5730\u5740\uff0c\u6570\u91cf\u4e0enamenode\u6570\u91cf\u76f8\u540c\uff0c\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4\n    dfs.client.failover.proxy.provider.[nameservice ID]: HDFS\u5ba2\u6237\u7aef\u8fde\u63a5\u6d3b\u8dc3namenode\u7684java\u7c7b\uff0c\u901a\u5e38\u662f"org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n\n    \u5bf9\u4e8e\u5f00\u542fkerberos\u8ba4\u8bc1\u7684Hadoop \u96c6\u7fa4\uff0c\u8fd8\u9700\u8981\u989d\u5916\u8bbe\u7f6e\u5982\u4e0b PROPERTIES \u5c5e\u6027:\n    dfs.namenode.kerberos.principal: HDFS namenode \u670d\u52a1\u7684 principal \u540d\u79f0\n    hadoop.security.authentication: \u8ba4\u8bc1\u65b9\u5f0f\u8bbe\u7f6e\u4e3a kerberos\n    hadoop.kerberos.principal: \u8bbe\u7f6e Doris \u8fde\u63a5 HDFS \u65f6\u4f7f\u7528\u7684 Kerberos \u4e3b\u4f53\n    hadoop.kerberos.keytab: \u8bbe\u7f6e keytab \u672c\u5730\u6587\u4ef6\u8def\u5f84\n\nS3 \u534f\u8bae\u5219\u76f4\u63a5\u6267\u884c S3 \u534f\u8bae\u914d\u7f6e\u5373\u53ef:\n    s3.endpoint\n    s3.access_key\n    s3.secret_key\n    s3.region\n    use_path_style: (\u9009\u586b) \u9ed8\u8ba4\u4e3afalse \u3002S3 SDK \u9ed8\u8ba4\u4f7f\u7528 virtual-hosted style \u65b9\u5f0f\u3002\u4f46\u67d0\u4e9b\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u53ef\u80fd\u6ca1\u5f00\u542f\u6216\u4e0d\u652f\u6301virtual-hosted style \u65b9\u5f0f\u7684\u8bbf\u95ee\uff0c\u6b64\u65f6\u53ef\u4ee5\u6dfb\u52a0 use_path_style \u53c2\u6570\u6765\u5f3a\u5236\u4f7f\u7528 path style \u8bbf\u95ee\u65b9\u5f0f\u3002\n')),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u82e5\u8981\u4f7f\u7528delete_existing_files\u53c2\u6570\uff0c\u8fd8\u9700\u8981\u5728fe.conf\u4e2d\u6dfb\u52a0\u914d\u7f6e",(0,r.yg)("inlineCode",{parentName:"p"},"enable_delete_existing_files = true"),"\u5e76\u91cd\u542ffe\uff0c\u6b64\u65f6delete_existing_files\u624d\u4f1a\u751f\u6548\u3002delete_existing_files = true \u662f\u4e00\u4e2a\u5371\u9669\u7684\u64cd\u4f5c\uff0c\u5efa\u8bae\u53ea\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u4f7f\u7528\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5bfc\u51fa\u7684\u6570\u636e\u7c7b\u578b"),(0,r.yg)("p",{parentName:"li"},"\u6240\u6709\u6587\u4ef6\u7c7b\u578b\u90fd\u652f\u6301\u5bfc\u51fa\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u800c\u5bf9\u4e8e\u590d\u6742\u6570\u636e\u7c7b\u578b\uff08ARRAY/MAP/STRUCT\uff09\uff0c\u5f53\u524d\u53ea\u6709csv/orc/csv_with_names/csv_with_names_and_types\u652f\u6301\u5bfc\u51fa\u590d\u6742\u7c7b\u578b,\u4e14\u4e0d\u652f\u6301\u5d4c\u5957\u590d\u6742\u7c7b\u578b\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5e76\u53d1\u5bfc\u51fa"),(0,r.yg)("p",{parentName:"li"},"\u8bbe\u7f6esession\u53d8\u91cf",(0,r.yg)("inlineCode",{parentName:"p"},"set enable_parallel_outfile = true;"),"\u53ef\u5f00\u542foutfile\u5e76\u53d1\u5bfc\u51fa\uff0c\u8be6\u7ec6\u4f7f\u7528\u65b9\u6cd5\u89c1",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/export/outfile"},"\u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c\u96c6"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5bfc\u51fa\u5230\u672c\u5730"),(0,r.yg)("p",{parentName:"li"},"\u5bfc\u51fa\u5230\u672c\u5730\u6587\u4ef6\u65f6\u9700\u8981\u5148\u5728fe.conf\u4e2d\u914d\u7f6e",(0,r.yg)("inlineCode",{parentName:"p"},"enable_outfile_to_local=true")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select * from tbl1 limit 10 \nINTO OUTFILE "file:///home/work/path/result_";\n')))),(0,r.yg)("h4",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("p",null,"parquet\u3001orc\u6587\u4ef6\u683c\u5f0f\u62e5\u6709\u81ea\u5df1\u7684\u6570\u636e\u7c7b\u578b\uff0cDoris\u7684\u5bfc\u51fa\u529f\u80fd\u80fd\u591f\u81ea\u52a8\u5c06Doris\u7684\u6570\u636e\u7c7b\u578b\u5bfc\u51fa\u5230parquet/orc\u6587\u4ef6\u683c\u5f0f\u7684\u5bf9\u5e94\u6570\u636e\u7c7b\u578b\uff0c\u4ee5\u4e0b\u662fDoris\u6570\u636e\u7c7b\u578b\u548cparquet/orc\u6587\u4ef6\u683c\u5f0f\u7684\u6570\u636e\u7c7b\u578b\u6620\u5c04\u5173\u7cfb\u8868\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Doris\u5bfc\u51fa\u5230Orc\u6587\u4ef6\u683c\u5f0f\u7684\u6570\u636e\u7c7b\u578b\u6620\u5c04\u8868\uff1a"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Orc Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"tinyint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"smallint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"int")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"largeInt"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datev2"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetimev2"),(0,r.yg)("td",{parentName:"tr",align:null},"timestamp")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char / varchar / string"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"decimal")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"struct"),(0,r.yg)("td",{parentName:"tr",align:null},"struct")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"map")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"array")))))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Doris\u5bfc\u51fa\u5230Parquet\u6587\u4ef6\u683c\u5f0f\u65f6\uff0c\u4f1a\u5148\u5c06Doris\u5185\u5b58\u6570\u636e\u8f6c\u6362\u4e3aarrow\u5185\u5b58\u6570\u636e\u683c\u5f0f\uff0c\u7136\u540e\u7531arrow\u5199\u51fa\u5230parquet\u6587\u4ef6\u683c\u5f0f\u3002Doris\u6570\u636e\u7c7b\u578b\u5230arrow\u6570\u636e\u7c7b\u7684\u6620\u5c04\u5173\u7cfb\u4e3a\uff1a"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Arrow Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"int8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"int16")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"int32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"int64")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"largeInt"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datev2"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetimev2"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"float64")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char / varchar / string"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"decimal128")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"struct"),(0,r.yg)("td",{parentName:"tr",align:null},"struct")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"map")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"list")))))),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528 broker \u65b9\u5f0f\u5bfc\u51fa\uff0c\u5c06\u7b80\u5355\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/result.txt"),"\u3002\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a CSV\u3002\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"my_broker")," \u5e76\u8bbe\u7f6e kerberos \u8ba4\u8bc1\u4fe1\u606f\u3002\u6307\u5b9a\u5217\u5206\u9694\u7b26\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},","),"\uff0c\u884c\u5206\u9694\u7b26\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"\\n"),"\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "100MB"\n);\n')),(0,r.yg)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u6587\u4ef6\u5982\u5982\u679c\u4e0d\u5927\u4e8e 100MB\uff0c\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"result_0.csv"),"\u3002\n\u5982\u679c\u5927\u4e8e 100MB\uff0c\u5219\u53ef\u80fd\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"result_0.csv, result_1.csv, ..."),"\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u7b80\u5355\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/result.parquet"),"\u3002\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a PARQUET\u3002\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"my_broker")," \u5e76\u8bbe\u7f6e kerberos \u8ba4\u8bc1\u4fe1\u606f\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06 CTE \u8bed\u53e5\u7684\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/result.txt"),"\u3002\u9ed8\u8ba4\u5bfc\u51fa\u683c\u5f0f\u4e3a CSV\u3002\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"my_broker")," \u5e76\u8bbe\u7f6e hdfs \u9ad8\u53ef\u7528\u4fe1\u606f\u3002\u4f7f\u7528\u9ed8\u8ba4\u7684\u884c\u5217\u5206\u9694\u7b26\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'WITH\nx1 AS\n(SELECT k1, k2 FROM tbl1),\nx2 AS\n(SELECT k3 FROM tbl2)\nSELEC k1 FROM x1 UNION SELECT k3 FROM x2\nINTO OUTFILE "hdfs://path/to/result_"\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.username"="user",\n    "broker.password"="passwd",\n    "broker.dfs.nameservices" = "my_ha",\n    "broker.dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')),(0,r.yg)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u6587\u4ef6\u5982\u5982\u679c\u4e0d\u5927\u4e8e 1GB\uff0c\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"result_0.csv"),"\u3002\n\u5982\u679c\u5927\u4e8e 1GB\uff0c\u5219\u53ef\u80fd\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"result_0.csv, result_1.csv, ..."),"\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06 UNION \u8bed\u53e5\u7684\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"bos://bucket/result.txt"),"\u3002\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a PARQUET\u3002\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"my_broker")," \u5e76\u8bbe\u7f6e hdfs \u9ad8\u53ef\u7528\u4fe1\u606f\u3002PARQUET \u683c\u5f0f\u65e0\u9700\u6307\u5b9a\u5217\u5206\u5272\u7b26\u3002\n\u5bfc\u51fa\u5b8c\u6210\u540e\uff0c\u751f\u6210\u4e00\u4e2a\u6807\u8bc6\u6587\u4ef6\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "bos://bucket/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.bos_endpoint" = "http://bj.bcebos.com",\n    "broker.bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "broker.bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06 select \u8bed\u53e5\u7684\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"s3a://${bucket_name}/path/result.txt"),"\u3002\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a csv\u3002\n\u5bfc\u51fa\u5b8c\u6210\u540e\uff0c\u751f\u6210\u4e00\u4e2a\u6807\u8bc6\u6587\u4ef6\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select k1,k2,v1 from tbl1 limit 100000\ninto outfile "s3a://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "hdfs_broker",\n    "broker.fs.s3a.access.key" = "xxx",\n    "broker.fs.s3a.secret.key" = "xxxx",\n    "broker.fs.s3a.endpoint" = "https://cos.xxxxxx.myqcloud.com/",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n')),(0,r.yg)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u6587\u4ef6\u5982\u5982\u679c\u4e0d\u5927\u4e8e 1GB\uff0c\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"my_file_0.csv"),"\u3002\n\u5982\u679c\u5927\u4e8e 1GB\uff0c\u5219\u53ef\u80fd\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"my_file_0.csv, result_1.csv, ..."),"\u3002\n\u5728cos\u4e0a\u9a8c\u8bc1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"}," 1. \u4e0d\u5b58\u5728\u7684path\u4f1a\u81ea\u52a8\u521b\u5efa\n 2. access.key/secret.key/endpoint\u9700\u8981\u548ccos\u7684\u540c\u5b66\u786e\u8ba4\u3002\u5c24\u5176\u662fendpoint\u7684\u503c\uff0c\u4e0d\u9700\u8981\u586b\u5199bucket_name\u3002\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528 s3 \u534f\u8bae\u5bfc\u51fa\u5230 bos\uff0c\u5e76\u4e14\u5e76\u53d1\u5bfc\u51fa\u5f00\u542f\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'set enable_parallel_outfile = true;\nselect k1 from tb1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "s3.endpoint" = "http://s3.bd.bcebos.com",\n    "s3.access_key" = "xxxx",\n    "s3.secret_key" = "xxx",\n    "s3.region" = "bd"\n)\n')),(0,r.yg)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u7684\u6587\u4ef6\u524d\u7f00\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"my_file_{fragment_instance_id}_"),"\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528 s3 \u534f\u8bae\u5bfc\u51fa\u5230 bos\uff0c\u5e76\u4e14\u5e76\u53d1\u5bfc\u51fa session \u53d8\u91cf\u5f00\u542f\u3002\n\u6ce8\u610f\uff1a\u4f46\u7531\u4e8e\u67e5\u8be2\u8bed\u53e5\u5e26\u4e86\u4e00\u4e2a\u9876\u5c42\u7684\u6392\u5e8f\u8282\u70b9\uff0c\u6240\u4ee5\u8fd9\u4e2a\u67e5\u8be2\u5373\u4f7f\u5f00\u542f\u5e76\u53d1\u5bfc\u51fa\u7684 session \u53d8\u91cf\uff0c\u4e5f\u662f\u65e0\u6cd5\u5e76\u53d1\u5bfc\u51fa\u7684\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'set enable_parallel_outfile = true;\nselect k1 from tb1 order by k1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "s3.endpoint" = "http://s3.bd.bcebos.com",\n    "s3.access_key" = "xxxx",\n    "s3.secret_key" = "xxx",\n    "s3.region" = "bd"\n)\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528 hdfs \u65b9\u5f0f\u5bfc\u51fa\uff0c\u5c06\u7b80\u5355\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://${host}:${fileSystem_port}/path/to/result.txt"),"\u3002\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a CSV\uff0c\u7528\u6237\u540d\u4e3awork\u3002\u6307\u5b9a\u5217\u5206\u9694\u7b26\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},","),"\uff0c\u884c\u5206\u9694\u7b26\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"\\n"),"\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'-- fileSystem_port\u9ed8\u8ba4\u503c\u4e3a9000\nSELECT * FROM tbl\nINTO OUTFILE "hdfs://${host}:${fileSystem_port}/path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "fs.defaultFS" = "hdfs://ip:port",\n    "hadoop.username" = "work"\n);\n')),(0,r.yg)("p",{parentName:"li"},"\u5982\u679cHadoop \u96c6\u7fa4\u5f00\u542f\u9ad8\u53ef\u7528\u5e76\u4e14\u542f\u7528 Kerberos \u8ba4\u8bc1\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0bSQL\u8bed\u53e5\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM tbl\nINTO OUTFILE \"hdfs://path/to/result_\"\nFORMAT AS CSV\nPROPERTIES\n(\n'fs.defaultFS'='hdfs://hacluster/',\n'dfs.nameservices'='hacluster',\n'dfs.ha.namenodes.hacluster'='n1,n2',\n'dfs.namenode.rpc-address.hacluster.n1'='192.168.0.1:8020',\n'dfs.namenode.rpc-address.hacluster.n2'='192.168.0.2:8020',\n'dfs.client.failover.proxy.provider.hacluster'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n'dfs.namenode.kerberos.principal'='hadoop/_HOST@REALM.COM'\n'hadoop.security.authentication'='kerberos',\n'hadoop.kerberos.principal'='doris_test@REALM.COM',\n'hadoop.kerberos.keytab'='/path/to/doris_test.keytab'\n);\n")),(0,r.yg)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u6587\u4ef6\u5982\u5982\u679c\u4e0d\u5927\u4e8e 100MB\uff0c\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"result_0.csv"),"\u3002\n\u5982\u679c\u5927\u4e8e 100MB\uff0c\u5219\u53ef\u80fd\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"result_0.csv, result_1.csv, ..."),"\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06 select \u8bed\u53e5\u7684\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u817e\u8baf\u4e91cos\u7684\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"cosn://${bucket_name}/path/result.txt"),"\u3002\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a csv\u3002\n\u5bfc\u51fa\u5b8c\u6210\u540e\uff0c\u751f\u6210\u4e00\u4e2a\u6807\u8bc6\u6587\u4ef6\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select k1,k2,v1 from tbl1 limit 100000\ninto outfile "cosn://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "broker_name",\n    "broker.fs.cosn.userinfo.secretId" = "xxx",\n    "broker.fs.cosn.userinfo.secretKey" = "xxxx",\n    "broker.fs.cosn.bucket.endpoint_suffix" = "cos.xxxxxx.myqcloud.com",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n')))),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SELECT, INTO, OUTFILE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5bfc\u51fa\u6570\u636e\u91cf\u548c\u5bfc\u51fa\u6548\u7387"),(0,r.yg)("p",{parentName:"li"},"\u8be5\u529f\u80fd\u672c\u8d28\u4e0a\u662f\u6267\u884c\u4e00\u4e2a SQL \u67e5\u8be2\u547d\u4ee4\u3002\u6700\u7ec8\u7684\u7ed3\u679c\u662f\u5355\u7ebf\u7a0b\u8f93\u51fa\u7684\u3002\u6240\u4ee5\u6574\u4e2a\u5bfc\u51fa\u7684\u8017\u65f6\u5305\u62ec\u67e5\u8be2\u672c\u8eab\u7684\u8017\u65f6\uff0c\u548c\u6700\u7ec8\u7ed3\u679c\u96c6\u5199\u51fa\u7684\u8017\u65f6\u3002\u5982\u679c\u67e5\u8be2\u8f83\u5927\uff0c\u9700\u8981\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf ",(0,r.yg)("inlineCode",{parentName:"p"},"query_timeout")," \u9002\u5f53\u7684\u5ef6\u957f\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5bfc\u51fa\u6587\u4ef6\u7684\u7ba1\u7406"),(0,r.yg)("p",{parentName:"li"},"Doris \u4e0d\u4f1a\u7ba1\u7406\u5bfc\u51fa\u7684\u6587\u4ef6\u3002\u5305\u62ec\u5bfc\u51fa\u6210\u529f\u7684\uff0c\u6216\u8005\u5bfc\u51fa\u5931\u8d25\u540e\u6b8b\u7559\u7684\u6587\u4ef6\uff0c\u90fd\u9700\u8981\u7528\u6237\u81ea\u884c\u5904\u7406\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5bfc\u51fa\u5230\u672c\u5730\u6587\u4ef6"),(0,r.yg)("p",{parentName:"li"},"\u5bfc\u51fa\u5230\u672c\u5730\u6587\u4ef6\u7684\u529f\u80fd\u4e0d\u9002\u7528\u4e8e\u516c\u6709\u4e91\u7528\u6237\uff0c\u4ec5\u9002\u7528\u4e8e\u79c1\u6709\u5316\u90e8\u7f72\u7684\u7528\u6237\u3002\u5e76\u4e14\u9ed8\u8ba4\u7528\u6237\u5bf9\u96c6\u7fa4\u8282\u70b9\u6709\u5b8c\u5168\u7684\u63a7\u5236\u6743\u9650\u3002Doris \u5bf9\u4e8e\u7528\u6237\u586b\u5199\u7684\u5bfc\u51fa\u8def\u5f84\u4e0d\u4f1a\u505a\u5408\u6cd5\u6027\u68c0\u67e5\u3002\u5982\u679c Doris \u7684\u8fdb\u7a0b\u7528\u6237\u5bf9\u8be5\u8def\u5f84\u65e0\u5199\u6743\u9650\uff0c\u6216\u8def\u5f84\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u62a5\u9519\u3002\u540c\u65f6\u5904\u4e8e\u5b89\u5168\u6027\u8003\u8651\uff0c\u5982\u679c\u8be5\u8def\u5f84\u5df2\u5b58\u5728\u540c\u540d\u7684\u6587\u4ef6\uff0c\u5219\u4e5f\u4f1a\u5bfc\u51fa\u5931\u8d25\u3002"),(0,r.yg)("p",{parentName:"li"},"Doris \u4e0d\u4f1a\u7ba1\u7406\u5bfc\u51fa\u5230\u672c\u5730\u7684\u6587\u4ef6\uff0c\u4e5f\u4e0d\u4f1a\u68c0\u67e5\u78c1\u76d8\u7a7a\u95f4\u7b49\u3002\u8fd9\u4e9b\u6587\u4ef6\u9700\u8981\u7528\u6237\u81ea\u884c\u7ba1\u7406\uff0c\u5982\u6e05\u7406\u7b49\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7ed3\u679c\u5b8c\u6574\u6027\u4fdd\u8bc1"),(0,r.yg)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u662f\u4e00\u4e2a\u540c\u6b65\u547d\u4ee4\uff0c\u56e0\u6b64\u6709\u53ef\u80fd\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u4efb\u52a1\u8fde\u63a5\u65ad\u5f00\u4e86\uff0c\u4ece\u800c\u65e0\u6cd5\u83b7\u6089\u5bfc\u51fa\u7684\u6570\u636e\u662f\u5426\u6b63\u5e38\u7ed3\u675f\uff0c\u6216\u662f\u5426\u5b8c\u6574\u3002\u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"success_file_name")," \u53c2\u6570\u8981\u6c42\u4efb\u52a1\u6210\u529f\u540e\uff0c\u5728\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2a\u6210\u529f\u6587\u4ef6\u6807\u8bc6\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u6587\u4ef6\uff0c\u6765\u5224\u65ad\u5bfc\u51fa\u662f\u5426\u6b63\u5e38\u7ed3\u675f\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"),(0,r.yg)("p",{parentName:"li"},"\u89c1",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/export/outfile"},"\u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c\u96c6")))))}g.isMDXComponent=!0}}]);