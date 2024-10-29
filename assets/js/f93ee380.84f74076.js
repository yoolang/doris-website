"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[354952],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},871464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(296540),n(15680));const a={title:"Used by Root users",language:"en"},s=void 0,l={unversionedId:"install/cluster-deployment/k8s-deploy/compute-storage-coupled/root-user-use",id:"version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/root-user-use",title:"Used by Root users",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/root-user-use.md",sourceDirName:"install/cluster-deployment/k8s-deploy/compute-storage-coupled",slug:"/install/cluster-deployment/k8s-deploy/compute-storage-coupled/root-user-use",permalink:"/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/root-user-use",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Used by Root users",language:"en"},sidebar:"docs",previous:{title:"Upgrading Apache Doris cluster deployed by Doris Operator",permalink:"/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/doris-cluster-upgrade"},next:{title:"Service expansion and contraction",permalink:"/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/expansion-and-contraction"}},i={},c=[{value:"Modify root account and password",id:"modify-root-account-and-password",level:2},{value:"Precautions",id:"precautions",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Doris-Operator uses the root account without password mode when deploying and managing related service nodes. The username and password can only be reset after deployment."),(0,o.yg)("h2",{id:"modify-root-account-and-password"},"Modify root account and password"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Refer to the ",(0,o.yg)("a",{parentName:"p",href:"../../../admin-manual/auth/authentication-and-authorization.md"},"Authentication and Authorization")," document, modify or create the corresponding password or account name, and give the account the permission to manage nodes in Doris.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"An example of adding spec.adminUser.* to the configuration in the DorisCluster CRD file is as follows:"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"  apiVersion: doris.selectdb.com/v1\n  kind: DorisCluster\n  metadata:\n    annotations:\n      selectdb/doriscluster: doriscluster-sample\n    labels:\n      app.kubernetes.io/instance: doris-sample\n    name: doris-sample\n    namespace: doris\n  spec:\n    adminUser:\n      name: root\n      password: root_pwd\n")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Update the new account and password to the deployed DorisCluster, and issue them through Doris-Operator so that each node can sense and take effect. Reference command:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"  kubectl apply --namespace ${your_namespace} -f ${your_crd_yaml_file} \n")),(0,o.yg)("h3",{id:"precautions"},"Precautions"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The cluster management account is root and has no password by default."),(0,o.yg)("li",{parentName:"ul"},"The username and password can only be reset after successful deployment. During initial deployment, adding ",(0,o.yg)("inlineCode",{parentName:"li"},"adminUser")," may cause startup exceptions."),(0,o.yg)("li",{parentName:"ul"},"Modifying the user name and password is not a necessary operation. Only when the current cluster management user (default root) or password is modified in Doris, it needs to be issued through Doris-Operator."),(0,o.yg)("li",{parentName:"ul"},"If you modify the user name ",(0,o.yg)("inlineCode",{parentName:"li"},"spec.adminUser.name"),", you need to assign the new user the permission to manage Doris nodes."),(0,o.yg)("li",{parentName:"ul"},"This operation restarts all nodes in sequence.")))}d.isMDXComponent=!0}}]);