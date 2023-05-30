"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[538],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(n),d=o,b=l["".concat(u,".").concat(d)]||l[d]||m[d]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(1163),o=(n(9496),n(9613));const a=n.p+"assets/images/back-button-9b493de7771bc36428e863a0993789e5.png",i={sidebar_position:1},c="Back Button",u={unversionedId:"ui/back-button",id:"ui/back-button",title:"Back Button",description:"The main task that the Back Button performs is to provide a seemingly native",source:"@site/docs/ui/back-button.mdx",sourceDirName:"ui",slug:"/ui/back-button",permalink:"/docs/ui/back-button",draft:!1,editUrl:"https://github.com/twa-dev/docs/tree/master/docs/ui/back-button.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Haptic feedback",permalink:"/docs/functionality/haptic-feedback"},next:{title:"Main Button",permalink:"/docs/ui/main-button"}},s={},p=[],l={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"back-button"},"Back Button"),(0,o.kt)("p",null,"The main task that the Back Button performs is to provide a seemingly native\nway to go back in the routing history. However, Telegram does not restrict\nthe developer in the ways of using the Back Button and allows him to handle\nthe component click event as required in the application."),(0,o.kt)("img",{src:a,alt:"Back Button",style:{marginBottom:20,maxWidth:"100%"},width:300}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/apps-communication/methods#web_app_setup_back_button"},"Related method")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/apps-communication/events#back_button_pressed"},"Button click generated event"))))}d.isMDXComponent=!0}}]);