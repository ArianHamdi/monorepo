"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[201],{7522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||p;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<p;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var o=n(3223),r=(n(9901),n(7522));const p={},i="Popup",a={unversionedId:"libraries/twa-js-sdk/components/popup",id:"libraries/twa-js-sdk/components/popup",title:"Popup",description:"The component which controls the currently displayed application popup. It allows developers to open new custom popups and detect popup-connected events. There is more information about this component in this documentation.",source:"@site/docs/libraries/twa-js-sdk/components/popup.mdx",sourceDirName:"libraries/twa-js-sdk/components",slug:"/libraries/twa-js-sdk/components/popup",permalink:"/docs/libraries/twa-js-sdk/components/popup",draft:!1,editUrl:"https://github.com/twa-dev/docs/tree/master/docs/libraries/twa-js-sdk/components/popup.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"MainButton",permalink:"/docs/libraries/twa-js-sdk/components/main-button"},next:{title:"QRScanner",permalink:"/docs/libraries/twa-js-sdk/components/qr-scanner"}},s={},l=[{value:"Initialization",id:"initialization",level:2},{value:"Opening new popup",id:"opening-new-popup",level:2},{value:"Events",id:"events",level:2},{value:"Methods support",id:"methods-support",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("ComponentSupportedEvents"),d=c("ComponentMethodsSupport"),m={toc:l},f="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"popup"},(0,r.kt)("inlineCode",{parentName:"h1"},"Popup")),(0,r.kt)("p",null,"The component which controls the currently displayed application popup. It allows developers to open new custom popups and detect popup-connected events. There is more information about this component in this ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui/popup"},"documentation"),"."),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Popup } from '@twa.js/sdk';\n\nconst popup = new Popup('6.3');\n")),(0,r.kt)("h2",{id:"opening-new-popup"},"Opening new popup"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," function returns a promise which will be resolved in case, the opened popup was closed. ",(0,r.kt)("inlineCode",{parentName:"p"},"Popup")," will resolve a button identifier in case, a user clicked it. Otherwise, ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," will be resolved."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"popup.open({\n  title: 'Hello!',\n  message: 'Here is a test message.',\n  buttons: [{id: 'my-id', type: 'default', text: 'Default text'}]\n});\nconsole.log(popup.isOpened); // true\n")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)(u,{events:{isOpenedChanged:"(isOpened: boolean) => void"},mdxType:"ComponentSupportedEvents"}),(0,r.kt)("h2",{id:"methods-support"},"Methods support"),(0,r.kt)(d,{methods:["open"],mdxType:"ComponentMethodsSupport"}))}v.isMDXComponent=!0}}]);