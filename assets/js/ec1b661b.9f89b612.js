"use strict";(self.webpackChunkviolet_eco_github_io=self.webpackChunkviolet_eco_github_io||[]).push([[3279],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=i,k=c["".concat(o,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(k,r(r({ref:t},d),{},{components:a})):n.createElement(k,r({ref:t},d))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:i,r[1]=p;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const l={slug:"applications",sidebar_position:2,description:"This document describes application-specific structure and behaviour."},r="Applications",p={unversionedId:"specs/applications",id:"specs/applications",title:"Applications",description:"This document describes application-specific structure and behaviour.",source:"@site/docs/specs/applications.md",sourceDirName:"specs",slug:"/specs/applications",permalink:"/docs/specs/applications",draft:!1,editUrl:"https://github.com/violet-eco/docs/tree/main/docs/docs/specs/applications.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"applications",sidebar_position:2,description:"This document describes application-specific structure and behaviour."},sidebar:"violetSidebar",previous:{title:"Applications and Libraries",permalink:"/docs/specs/apps-and-libraries"},next:{title:"Filesystem",permalink:"/docs/specs/filesystem"}},o={},s=[{value:"Application Package",id:"application-package",level:2},{value:"Content",id:"content",level:3},{value:"Pre-compiled Applications",id:"pre-compiled-applications",level:3},{value:"Embedding Libraries",id:"embedding-libraries",level:3},{value:"Value Encoding",id:"value-encoding",level:3},{value:"Returning and Failing",id:"returning-and-failing",level:3},{value:"Volatile Applications",id:"volatile-applications",level:3},{value:"Commands",id:"commands",level:2},{value:"Execution Context",id:"execution-context",level:3},{value:"Startup Reason",id:"startup-reason",level:3},{value:"Context Header",id:"context-header",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"applications"},"Applications"),(0,i.kt)("p",null,"This document describes application-specific structure and behaviour."),(0,i.kt)("h2",{id:"application-package"},"Application Package"),(0,i.kt)("p",null,"Application packages are files that have either the\n",(0,i.kt)("inlineCode",{parentName:"p"},"*.vap")," (Violet Application Package) or\n",(0,i.kt)("inlineCode",{parentName:"p"},"*.vva")," (Violet Volatile Application) extension."),(0,i.kt)("h3",{id:"content"},"Content"),(0,i.kt)("p",null,"VAP and VVA files are ZStandard archives that contain ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.toml"),"\ndescribing the archive and ",(0,i.kt)("inlineCode",{parentName:"p"},"hash.md5")," file that confirm that the archive\nis not corrupted."),(0,i.kt)("h3",{id:"pre-compiled-applications"},"Pre-compiled Applications"),(0,i.kt)("p",null,"By default, the system tries to install\n",(0,i.kt)("a",{parentName:"p",href:"/docs/technical/pre-compiling"},"pre-compiled programs")," from\nthe application's package if possible."),(0,i.kt)("h3",{id:"embedding-libraries"},"Embedding Libraries"),(0,i.kt)("p",null,"Although it's a better practice to split applications and libraries\ninto different packages, sometimes it's more easy to embed both in\nthe same package, especially in two cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the application is just a thin layer ahead of the library (e.g. CLI tool)"),(0,i.kt)("li",{parentName:"ul"},"When the library's API changes rapidly and the application relies on it")),(0,i.kt)("p",null,"For such scenarios, it's possible for an application package to embed one or more libraries, and publish them all at once."),(0,i.kt)("h3",{id:"value-encoding"},"Value Encoding"),(0,i.kt)("p",null,"The application's startup arguments and output value use the following encoding:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type code"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Representation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x00")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"nothing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x01")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bool")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"1 byte, ",(0,i.kt)("inlineCode",{parentName:"td"},"0x00")," = false, ",(0,i.kt)("inlineCode",{parentName:"td"},"0x01")," = true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x02")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:null},"64-bit signed integer number"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x03")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:null},"64-bit signed floating-point number"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x04")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"char")),(0,i.kt)("td",{parentName:"tr",align:null},"UTF-8 grapheme cluster"),(0,i.kt)("td",{parentName:"tr",align:null},"character's length (8 bytes), followed by the UTF-8 grapheme cluster")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x05")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"UTF-8 string"),(0,i.kt)("td",{parentName:"tr",align:null},"string's length (8 bytes), followed by the UTF-8 encoded string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x06")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"list")),(0,i.kt)("td",{parentName:"tr",align:null},"Typed linear list"),(0,i.kt)("td",{parentName:"tr",align:null},"Type code of the list's number of items (1 byte), length in bytes (64 bits), encoded items")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x07")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:null},"Filesystem path"),(0,i.kt)("td",{parentName:"tr",align:null},"Represented as an UTF-8 string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x08")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"command")),(0,i.kt)("td",{parentName:"tr",align:null},"Shell command"),(0,i.kt)("td",{parentName:"tr",align:null},"Represented as an UTF-8 string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x09")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"stream")),(0,i.kt)("td",{parentName:"tr",align:null},"Pipe RC"),(0,i.kt)("td",{parentName:"tr",align:null},"RC identifier (8 bytes)")))),(0,i.kt)("h3",{id:"returning-and-failing"},"Returning and Failing"),(0,i.kt)("p",null,"The value must be returned using the ",(0,i.kt)("inlineCode",{parentName:"p"},"CMDOUT")," pipe. The data sent through\nthis pipe must follow the above ",(0,i.kt)("a",{parentName:"p",href:"#value-encoding"},"encoding"),"."),(0,i.kt)("p",null,"A command may also fail. To incidate so, the process must send the ",(0,i.kt)("inlineCode",{parentName:"p"},"0xFF"),"\nvalue through the pipi."),(0,i.kt)("h3",{id:"volatile-applications"},"Volatile Applications"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/applications#volatile-applications"},"Volatile applications"),"\ncannot expose commands globally as they are technically not installed.\nThey can though be used in shell scripts through ",(0,i.kt)("em",{parentName:"p"},"volatile imports"),"."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"execution-context"},"Execution Context"),(0,i.kt)("p",null,"Execution context consists of the information given to the\napplication when the application starts and explains why\nthe application was started and what it is expected to do."),(0,i.kt)("h3",{id:"startup-reason"},"Startup Reason"),(0,i.kt)("p",null,"It's one-byte long and made of following bits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bits 0-4",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0b0001"),": the application was started as part of its post-installation process"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0b0010"),": the application was started as part of its pre-update process"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0b0011"),": the application was started as part of its post-update process"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0b0100"),": the application was started as part of its pre-uninstallation process"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0b0101"),": the application was started by the system as an application service"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0b0110"),": the application was started by the desktop environment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0b0111"),": the application was started by itself (from another process of the same application)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0b1000"),": the application was started by another application"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0b1001"),": the application was started using one its exposed shell commands"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0b1010"),": the application was started as a desktop environment"))),(0,i.kt)("li",{parentName:"ul"},"Bit 5: set if the application was started automatically after a crash"),(0,i.kt)("li",{parentName:"ul"},"Bit 6: set if the application's raw output will be read (e.g. through the use of a shell operator)")),(0,i.kt)("h3",{id:"context-header"},"Context Header"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The startup reason (1 byte)"),(0,i.kt)("li",{parentName:"ul"},"Informations (1 byte)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bit 0: set if the application is starting for the very first time since it was installed"),(0,i.kt)("li",{parentName:"ul"},"Bit 1: set if the application is starting for the very first time for this specific user"),(0,i.kt)("li",{parentName:"ul"},"Bit 2: set if the application is starting for the very first time as this specific service"),(0,i.kt)("li",{parentName:"ul"},"Bit 3: set if the application is starting for the first time after an update"),(0,i.kt)("li",{parentName:"ul"},"Bit 4: set if other instances of this application are running"))),(0,i.kt)("li",{parentName:"ul"},"Special assignment (1 byte)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bit 0: set if the application is starting for the first time after being assigned as the new desktop environment"),(0,i.kt)("li",{parentName:"ul"},"Bit 1: set if the application is starting for the first time after being assigned as the new default file manager"))),(0,i.kt)("li",{parentName:"ul"},"Service type (1 byte)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x00"),": not run as a service"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x01"),": run as the application's main service"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x02"),": run as an application's scoped service"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x10"),": run as the application's desktop environment service"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x11"),": run as the application's file manager service"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x12"),": run as the application's file opener service"))),(0,i.kt)("li",{parentName:"ul"},"The application's ANID (4 bytes)")))}m.isMDXComponent=!0}}]);