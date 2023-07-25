"use strict";(self.webpackChunkviolet_eco_github_io=self.webpackChunkviolet_eco_github_io||[]).push([[9870],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var r=a.createContext({}),p=function(e){var t=a.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),u=n,h=d["".concat(r,".").concat(u)]||d[u]||m[u]||o;return i?a.createElement(h,s(s({ref:t},c),{},{components:i})):a.createElement(h,s({ref:t},c))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=i[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},7874:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=i(7462),n=(i(7294),i(3905));const o={slug:"applications",sidebar_position:1,description:"Applications are the primary way to run software in Violet."},s="Applications in Violet",l={unversionedId:"concepts/applications",id:"concepts/applications",title:"Applications in Violet",description:"Applications are the primary way to run software in Violet.",source:"@site/docs/concepts/applications.md",sourceDirName:"concepts",slug:"/concepts/applications",permalink:"/docs/concepts/applications",draft:!1,editUrl:"https://github.com/violet-eco/docs/tree/main/docs/docs/concepts/applications.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"applications",sidebar_position:1,description:"Applications are the primary way to run software in Violet."},sidebar:"violetSidebar",previous:{title:"Concepts",permalink:"/docs/concepts/"},next:{title:"Libraries in Violet",permalink:"/docs/concepts/libraries"}},r={},p=[{value:"Application Types",id:"application-types",level:2},{value:"Installation Methods",id:"installation-methods",level:2},{value:"From Violet Store",id:"from-violet-store",level:3},{value:"Sideloading",id:"sideloading",level:3},{value:"Volatile Applications",id:"volatile-applications",level:3},{value:"Commands",id:"commands",level:2},{value:"System Applications",id:"system-applications",level:2},{value:"Application Development",id:"application-development",level:2},{value:"Application SDK",id:"application-sdk",level:3},{value:"Services",id:"services",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"applications-in-violet"},"Applications in Violet"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Applications")," are the primary way to run software in Violet. They are responsible for\nexecuting code and providing functionality to the users."),(0,n.kt)("h2",{id:"application-types"},"Application Types"),(0,n.kt)("p",null,"Violet supports a variety of application types, each of which has a special function and offers unique features:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Native Applications:")," These programs have been specially created and enhanced to work with Violet. They may utilize Violet's special features and have complete access to system resources, resulting in a smooth and effective user experience."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Web Applications:")," In a web browser, Violet also supports web-based programs. These programs make use of web technologies and are accessible through widely used web browsers that are already installed on the computer."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Emulated Applications:")," Violet offers the possibility to run emulation-based apps for backwards compatibility. Violetians are able to access older apps without jeopardizing system integrity because to the virtualized environment in which these applications operate.")),(0,n.kt)("h2",{id:"installation-methods"},"Installation Methods"),(0,n.kt)("p",null,"Violet applications are installed using application packages. Several installation techniques are available:"),(0,n.kt)("h3",{id:"from-violet-store"},"From Violet Store"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/applications/store"},"Violet Store")," is where you may download and install\napplications. Users may explore and install programs using Store's unified platform.\nThe shop sells precompiled programs for closed-source apps. Store enables both\nprecompiled apps and source code compilation for open-source applications."),(0,n.kt)("h3",{id:"sideloading"},"Sideloading"),(0,n.kt)("p",null,"Sideloading refers to the installation of an application directly from its package without going through the official store. Violet offers different sideloading modes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Disable mode:")," Sideloading is completely blocked, and applications can only be installed from the store. Volatile applications can still be run."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Safe mode:")," Sideloading is allowed, but the system performs security checks. It verifies if the application's AID (Application ID) matches an application available in the store. It also compares the signature of the application with the signature of the store application. If the AID or the signatures do not match, the application is considered malicious and will not be installed. Note that this mode requires an internet connection to check against the store."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Insecure mode:")," Sideloading is allowed without any security checks. This mode is considered less secure, as it allows for potential spoofing or installation of untrusted applications.")),(0,n.kt)("p",null,"Violetians can switch between sideloading modes in the Settings, depending on their\ndesired level of security and control over application installation."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"By default, sideloading is disabled in Violet for security reasons. Users can\nenable sideloading in the system settings, but it is recommended to exercise caution and\nonly install applications from trusted sources.")),(0,n.kt)("h3",{id:"volatile-applications"},"Volatile Applications"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Volatile applications")," offer an alternative way to run applications without installing\nthem to disk permanently. Violet provides different modes for running volatile\napplications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-volatile:")," All data associated with the application is deleted once the application is closed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Session-scoped:")," The application's data is kept on disk until the system is shut down."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Local-persistent:")," The application's data is stored in a data file with the extension `*.vad`` (Volatile Application Data) created in the same folder as the application package."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Persistent:")," The application's data is stored in a dedicated folder, allowing for persistent storage across multiple sessions.")),(0,n.kt)("p",null,"By default, volatile applications run in local-persistent mode. In this mode, the system\nsearches for a file with the same name as the application's package file but with the\n",(0,n.kt)("inlineCode",{parentName:"p"},"*.vad")," extension. If the file is found, it serves as the application's storage, and any\ndata the application wants to store is written to this file."),(0,n.kt)("p",null,"Persistently running volatile applications are not listed in the application list and can\nonly be managed through an option in the Settings. While their data is stored on\ndisk, their executables are not stored separately but reside within the application\npackage. This allows running the same application multiple times without worrying about\ndata conflicts. Additionally, it supports shared data storage between users."),(0,n.kt)("p",null,"Violet Store provides an option to install applications as volatile."),(0,n.kt)("h2",{id:"commands"},"Commands"),(0,n.kt)("p",null,"Applications in Violet can provide shell commands, allowing users to interact with the\napplication's functionality from the command line. To prevent conflicts between command\nnames, application commands are prefixed with the AID (Application ID) using dots instead\nof two colons. This approach ensures unique command names for each application and avoids\nnaming conflicts."),(0,n.kt)("p",null,"For example, if an application with the AID ",(0,n.kt)("inlineCode",{parentName:"p"},"developer::app")," provides the command\n",(0,n.kt)("inlineCode",{parentName:"p"},"get_time"),", the full command name would be ",(0,n.kt)("inlineCode",{parentName:"p"},"developer.app.get_time"),". However, in shell\nprompts (not scripts), if no other application provides a command with the same name, the\nshort form ",(0,n.kt)("inlineCode",{parentName:"p"},"get_time")," can be used directly."),(0,n.kt)("p",null,"Commands in Violet work by executing the application within a specific execution context."),(0,n.kt)("h2",{id:"system-applications"},"System Applications"),(0,n.kt)("p",null,"Some applications are part of the system itself and are known as system applications.\nThese applications have special privileges and access to system-reserved features. System\napplications also have the ability to create system services, which are processes that\nrun at startup with system permissions."),(0,n.kt)("p",null,"System applications ",(0,n.kt)("strong",{parentName:"p"},"CANNOT BE UNINSTALLED")," as they are critical to the proper functioning\nof the system. Non-system native applications, however, can be uninstalled if desired."),(0,n.kt)("p",null,"Some native applications are part of the system itself and\nare called ",(0,n.kt)("em",{parentName:"p"},"system applications"),". These applications have some special privileges:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access to system-reserved features"),(0,n.kt)("li",{parentName:"ul"},"Permission to create ",(0,n.kt)("em",{parentName:"li"},"system service")),(0,n.kt)("li",{parentName:"ul"},"They cannot be uninstalled")),(0,n.kt)("p",null,"System applications cannot be removed ",(0,n.kt)("em",{parentName:"p"},"by any means")," as\nthey are critical to the correct functioning of the system.\nNative applications which are not system applications can be removed, though."),(0,n.kt)("h2",{id:"application-development"},"Application Development"),(0,n.kt)("p",null,"By designing and releasing their apps, developers may contribute to Violet's application\necosystem:"),(0,n.kt)("h3",{id:"application-sdk"},"Application SDK"),(0,n.kt)("p",null,"Violet provides a robust official Software Development Kit (SDK). It includes a\ncomprehensive collection of tools, libraries, and documentation to assist developers in\ncreating powerful and innovative applications that interface smoothly with the operating\nsystem."),(0,n.kt)("h2",{id:"services"},"Services"),(0,n.kt)("p",null,"Applications can create ",(0,n.kt)("em",{parentName:"p"},"services")," by specifying them in their manifests.\nThe services will run at startup with the application's permissions."),(0,n.kt)("p",null,"There is exactly one process for each service per active user."))}m.isMDXComponent=!0}}]);