"use strict";(self.webpackChunkviolet_eco_github_io=self.webpackChunkviolet_eco_github_io||[]).push([[1873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={slug:"pci-e",sidebar_position:1,description:"Peripheral Component Interconnect Express (PCIe) is a high-speed interface widely used to connect various hardware components, such as graphic cards, network adapters, storage devices and more."},i="Peripheral Component Interconnect Express",s={unversionedId:"specs/kernel/hardware/pci-e",id:"specs/kernel/hardware/pci-e",title:"Peripheral Component Interconnect Express",description:"Peripheral Component Interconnect Express (PCIe) is a high-speed interface widely used to connect various hardware components, such as graphic cards, network adapters, storage devices and more.",source:"@site/docs/specs/kernel/hardware/pci-e.md",sourceDirName:"specs/kernel/hardware",slug:"/specs/kernel/hardware/pci-e",permalink:"/docs/specs/kernel/hardware/pci-e",draft:!1,editUrl:"https://github.com/violet-eco/docs/tree/main/docs/docs/specs/kernel/hardware/pci-e.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"pci-e",sidebar_position:1,description:"Peripheral Component Interconnect Express (PCIe) is a high-speed interface widely used to connect various hardware components, such as graphic cards, network adapters, storage devices and more."},sidebar:"violetSidebar",previous:{title:"Hardware",permalink:"/docs/specs/kernel/hardware/"},next:{title:"Universal Serial Bus",permalink:"/docs/specs/kernel/hardware/usb"}},c={},p=[{value:"Detection Procedure",id:"detection-procedure",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"peripheral-component-interconnect-express"},"Peripheral Component Interconnect Express"),(0,o.kt)("p",null,"Peripheral Component Interconnect Express (PCIe) is a high-speed interface widely\nused to connect various hardware components, such as graphic cards, network adapters,\nstorage devices and more."),(0,o.kt)("h2",{id:"detection-procedure"},"Detection Procedure"),(0,o.kt)("p",null,"The detection procedure includes the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Enumeration:")," Nova enumerates all available PCIe slots on the motherboard during system initialization to discover possible device connections."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Configuration Space Access:")," Nova accesses the Configuration Space of each slot once the slots have been enumerated. The Configuration Space stores important information about PCIe devices, such as vendor and deviceIDs, device class and capabilities."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Device Identification:")," Nova parses Configuration Space data to identify connected PCIe devices based on vendor and device IDs. This phase allows the kernel to identify the type of device connected to each slot."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Device Initialization:")," Nova begins device initialization procedures after identifying the devices. This procedure involves configuring numerous settings and establishing communication channels with the devices in order to ensure flawless data flow and performance."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Driver Assignment:")," Nova assigns the appropriate device driver to each discovered PCIe device after successful initialization. Device drivers are software components that facilitate communication between the kernel and hardware devices, allowing and operating system to fully utilize device capabilities.")))}u.isMDXComponent=!0}}]);