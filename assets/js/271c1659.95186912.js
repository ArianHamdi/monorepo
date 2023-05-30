"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[156],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(1163),o=(r(9496),r(9613));const a={sidebar_position:5},i="Theme parameters",l={unversionedId:"ui/theme-params",id:"ui/theme-params",title:"Theme parameters",description:"Web Apps are web applications which are meant to look native. It includes not",source:"@site/docs/ui/theme-params.mdx",sourceDirName:"ui",slug:"/ui/theme-params",permalink:"/docs/ui/theme-params",draft:!1,editUrl:"https://github.com/twa-dev/docs/tree/master/docs/ui/theme-params.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Viewport",permalink:"/docs/ui/viewport"},next:{title:"Test environment",permalink:"/docs/test-environment"}},p={},c=[{value:"Getting theme",id:"getting-theme",level:2},{value:"Background and header colors",id:"background-and-header-colors",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"theme-parameters"},"Theme parameters"),(0,o.kt)("p",null,"Web Apps are web applications which are meant to look native. It includes not\nonly usage of components which mimic the native components, but parent\napplication colors too."),(0,o.kt)("p",null,"Web App is being provided with colors, which are currently used by Telegram app.\nThese colors should be used by Web App to look consistently with native\napplication."),(0,o.kt)("h2",{id:"getting-theme"},"Getting theme"),(0,o.kt)("p",null,"To learn how to get theme information, you will probably need these links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/apps-communication/methods#web_app_request_theme"},"Getting with Web Apps method"))),(0,o.kt)("h2",{id:"background-and-header-colors"},"Background and header colors"),(0,o.kt)("p",null,"The developer's application is displayed in a native component, which consists\nof 2 parts: header and body. The developer himself is allowed to control\ntheir background colors."),(0,o.kt)("p",null,"To change them, it is required to use the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/apps-communication/methods#web_app_set_background_color"},"Method to set the background color")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/apps-communication/methods#web_app_set_header_color"},"Method to set the header color"))))}m.isMDXComponent=!0}}]);