"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[302],{7522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(3223),r=(n(9901),n(7522));const a={sidebar_label:"@twa.js/bridge",sidebar_position:1},o="@twa.js/bridge",s={unversionedId:"libraries/twa-js-bridge",id:"libraries/twa-js-bridge",title:"@twa.js/bridge",description:"The package provides utilities to simplify communication between web applications and the Telegram native application. It also addresses cross-platform data differences, safeguarding developers' code and saving their time.",source:"@site/docs/libraries/twa-js-bridge.mdx",sourceDirName:"libraries",slug:"/libraries/twa-js-bridge",permalink:"/docs/libraries/twa-js-bridge",draft:!1,editUrl:"https://github.com/twa-dev/docs/tree/master/docs/libraries/twa-js-bridge.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"@twa.js/bridge",sidebar_position:1},sidebar:"sidebar",previous:{title:"Creating new app",permalink:"/docs/guides/creating-new-app"},next:{title:"@twa.js/init-data",permalink:"/docs/libraries/twa-js-init-data"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Calling methods",id:"calling-methods",level:2},{value:"Listening to events",id:"listening-to-events",level:2},{value:"<code>on</code> and <code>off</code>",id:"on-and-off",level:3},{value:"<code>subscribe</code> and <code>unsubscribe</code>",id:"subscribe-and-unsubscribe",level:3},{value:"Checking method support",id:"checking-method-support",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Target origin",id:"target-origin",level:2},{value:"Higher-level control",id:"higher-level-control",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("LibraryBadges"),u=c("NpmInstall"),g={toc:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"twajsbridge"},"@twa.js/bridge"),(0,r.kt)(d,{pkg:"@twa.js/bridge",mdxType:"LibraryBadges"}),(0,r.kt)("p",null,"The package provides utilities to simplify communication between web applications and the Telegram native application. It also addresses cross-platform data differences, safeguarding developers' code and saving their time."),(0,r.kt)("p",null,"Developers can utilize this package to create their software development kit (SDK), as it offers the utmost level of control over cross-application communication."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(u,{pkg:"@twa.js/bridge",mdxType:"NpmInstall"}),(0,r.kt)("h2",{id:"calling-methods"},"Calling methods"),(0,r.kt)("p",null,"To call the Telegram Web Apps methods, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"postEvent")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { postEvent } from '@twa.js/bridge';\n\npostEvent('web_app_setup_back_button', {is_visible: true});\n")),(0,r.kt)("p",null,"This function automatically finds the correct way to send this event based on the current environment features. For greater accuracy, it determines the current Telegram application type and selects the appropriate flow."),(0,r.kt)("h2",{id:"listening-to-events"},"Listening to events"),(0,r.kt)("h3",{id:"on-and-off"},(0,r.kt)("inlineCode",{parentName:"h3"},"on")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"off")),(0,r.kt)("p",null,"To start working with events, we could use ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"off")," functions. Here is how basic ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," function usage looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { on } from '@twa.js/bridge';\n\n// Start listening to \"viewport_changed\" event. Returned value\n// is a function, which removes this event listener.\nconst removeListener = on('viewport_changed', payload => {\n  console.log('Viewport changed:', payload);\n});\n\n// Remove this event listener.\nremoveListener();\n")),(0,r.kt)("p",null,"To stop listening to events, you could alternatively use ",(0,r.kt)("inlineCode",{parentName:"p"},"off")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { on, off, EventListener } from '@twa.js/bridge';\n\nconst listener: EventListener<'viewport_changed'> = payload => {\n  console.log('Viewport changed:', payload);\n};\n\n// Start listening to event.\non('viewport_changed', listener);\n\n// Remove event listener.\noff('viewport_changed', listener);\n")),(0,r.kt)("h3",{id:"subscribe-and-unsubscribe"},(0,r.kt)("inlineCode",{parentName:"h3"},"subscribe")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"unsubscribe")),(0,r.kt)("p",null,"To listen to all events sent from the native Telegram application,\nwe utilize such functions as ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { subscribe, unsubscribe, GlobalEventListener } from '@twa.js/bridge';\n\nconst listener: GlobalEventListener = (event, data) => {\n  console.log('Received event', event, 'with data', data);\n};\n\n// Listen to all events.\nsubscribe(listener);\n\n// Remove this listener.\nunsubscribe(listener);\n")),(0,r.kt)("h2",{id:"checking-method-support"},"Checking method support"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"postEvent")," function itself is not checking if specified method supported by current native Telegram application. To do this, we could use ",(0,r.kt)("inlineCode",{parentName:"p"},"supports")," function which accepts Telegram Web Apps method name and current platform version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { supports } from '@twa.js/bridge';\n\nsupports('web_app_trigger_haptic_feedback', '6.0'); // false\nsupports('web_app_trigger_haptic_feedback', '6.1'); // true\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to use this function before calling Web Apps methods to prevent applications from stalling and other unexpected behavior.")),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"Package supports enabling the debug mode, which leads to logging\nmessages related to events handling. To change debug mode, use ",(0,r.kt)("inlineCode",{parentName:"p"},"setDebug"),"\nfunction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { setDebug } from '@twa.js/bridge';\n\nsetDebug(true);\n")),(0,r.kt)("h2",{id:"target-origin"},"Target origin"),(0,r.kt)("p",null,"If the package is being used in a browser environment (iframe), we employ the function ",(0,r.kt)("inlineCode",{parentName:"p"},"window.parent.postMessage"),". This function requires specifying the target origin to ensure events are only sent to trusted parent iframes. By default, the package utilizes ",(0,r.kt)("inlineCode",{parentName:"p"},"https://web.telegram.org")," as the origin. To enable event transmission to other origins, you should utilize the ",(0,r.kt)("inlineCode",{parentName:"p"},"setTargetOrigin")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { setTargetOrigin } from '@twa.js/bridge';\n\nsetTargetOrigin('https://myendpoint.org');\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It is strongly recommended not to override this value as long as it could lead to security issues. Specify this value only for test purposes.")),(0,r.kt)("h2",{id:"higher-level-control"},"Higher-level control"),(0,r.kt)("p",null,"As long as the package provides only low-level control, we recommend using ",(0,r.kt)("a",{parentName:"p",href:"/docs/libraries/twa-js-sdk/about"},"SDK")," which implements package methods. It also provides additional some automatic parameters checks, more intuitive method names, and easier usage."))}b.isMDXComponent=!0}}]);