"use strict";(self.webpackChunkviolet_eco_github_io=self.webpackChunkviolet_eco_github_io||[]).push([[3502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={slug:"syscalls",sidebar_position:3,description:"System calls (syscalls) are a type of KPC. They allow a process to ask Sakura to perform a task."},i="System Calls",o={unversionedId:"specs/kernel/syscalls",id:"specs/kernel/syscalls",title:"System Calls",description:"System calls (syscalls) are a type of KPC. They allow a process to ask Sakura to perform a task.",source:"@site/docs/specs/kernel/syscalls.md",sourceDirName:"specs/kernel",slug:"/specs/kernel/syscalls",permalink:"/docs/specs/kernel/syscalls",draft:!1,editUrl:"https://github.com/violet-eco/docs/tree/main/docs/docs/specs/kernel/syscalls.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"syscalls",sidebar_position:3,description:"System calls (syscalls) are a type of KPC. They allow a process to ask Sakura to perform a task."},sidebar:"violetSidebar",previous:{title:"Kernel-process Communication",permalink:"/docs/specs/kernel/kpc"},next:{title:"Signals",permalink:"/docs/specs/kernel/signals"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"List of syscalls",id:"list-of-syscalls",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-calls"},"System Calls"),(0,a.kt)("p",null,"System calls (syscalls) are a type of ",(0,a.kt)("a",{parentName:"p",href:"/docs/specs/kernel/kpc"},"KPC"),".\nThey allow a process to ask Sakura to perform\na task."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Syscalls are performed using CPU interruptions to notify Sakura."),(0,a.kt)("p",null,"System calls always return two numbers: a 8-bit errcode and\n8 bytes return value. If the errcode is not null, then an\nerror occured during the syscall. Certain error codes\nindicate certain errors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x00"),": cannot read syscall's code or arguments"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x01"),": syscall does not exists"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x02"),": at least one argument is invalid (e.g. providing a pointer to the ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," address)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x03"),": unmapped memory pointer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x04"),": memory permission error"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x10")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"0x1F"),": invalid argument(s) provided"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x20")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"0x2F"),": provided arguments are not valid in the current context (in relation with other arguments)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x30")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"0x3F"),": provided arguments are not valid (after resources checking)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x40")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"0x4F"),": resource access error"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x50")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"0x5F"),": hardware errors"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x60")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"0x6F"),": other types of errors")),(0,a.kt)("p",null,"The codes of system calls are also categorized as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x00")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"0x0F"),": signal handling"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x10")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"0x1F"),": process management"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x20")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"0x2F"),": pipes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x30")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"0x3F"),": memory management"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x40")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"0x4F"),": process management"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0x50")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"0x5F"),": hardware interaction"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TODO..."))),(0,a.kt)("h2",{id:"list-of-syscalls"},"List of syscalls"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TODO")))}u.isMDXComponent=!0}}]);