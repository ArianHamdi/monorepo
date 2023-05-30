"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[452],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),s=l,k=m["".concat(p,".").concat(s)]||m[s]||c[s]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(1163),l=(n(9496),n(9613));const r={sidebar_position:3},i="\u0421\u043e\u0431\u044b\u0442\u0438\u044f",o={unversionedId:"apps-communication/events",id:"apps-communication/events",title:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f",description:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f - \u044d\u0442\u043e \u0441\u0438\u0433\u043d\u0430\u043b\u044b, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043d\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c Telegram \u0432 \u0441\u043b\u0443\u0447\u0430\u0435,",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/apps-communication/events.mdx",sourceDirName:"apps-communication",slug:"/apps-communication/events",permalink:"/ru/docs/apps-communication/events",draft:!1,editUrl:"https://github.com/twa-dev/docs/tree/master/docs/apps-communication/events.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"\u041c\u0435\u0442\u043e\u0434\u044b",permalink:"/ru/docs/apps-communication/methods"},next:{title:"\u041f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f",permalink:"/ru/docs/functionality/closing-behavior"}},p={},d=[{value:"Web",id:"web",level:2},{value:"Desktop, mobile \u0438 Windows Phone",id:"desktop-mobile-\u0438-windows-phone",level:2},{value:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f",id:"\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435-\u0441\u043e\u0431\u044b\u0442\u0438\u044f",level:2},{value:"v6.0",id:"v60",level:3},{value:"<code>invoice_closed</code>",id:"invoice_closed",level:4},{value:"<code>main_button_pressed</code>",id:"main_button_pressed",level:4},{value:"<code>popup_closed</code>",id:"popup_closed",level:4},{value:"<code>set_custom_style</code>",id:"set_custom_style",level:4},{value:"<code>theme_changed</code>",id:"theme_changed",level:4},{value:"<code>viewport_changed</code>",id:"viewport_changed",level:4},{value:"v6.1",id:"v61",level:3},{value:"<code>back_button_pressed</code>",id:"back_button_pressed",level:4},{value:"<code>settings_button_pressed</code>",id:"settings_button_pressed",level:4},{value:"v6.4",id:"v64",level:3},{value:"<code>qr_text_received</code>",id:"qr_text_received",level:4},{value:"<code>scan_qr_popup_closed</code>",id:"scan_qr_popup_closed",level:4},{value:"<code>clipboard_text_received</code>",id:"clipboard_text_received",level:4}],u={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u0441\u043e\u0431\u044b\u0442\u0438\u044f"},"\u0421\u043e\u0431\u044b\u0442\u0438\u044f"),(0,l.kt)("p",null,"\u0421\u043e\u0431\u044b\u0442\u0438\u044f - \u044d\u0442\u043e \u0441\u0438\u0433\u043d\u0430\u043b\u044b, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043d\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c Telegram \u0432 \u0441\u043b\u0443\u0447\u0430\u0435,\n\u0435\u0441\u043b\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u043a\u0430\u043a\u043e\u0435-\u0442\u043e \u0432\u043d\u0435\u0448\u043d\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435. \u0420\u0430\u0432\u043d\u043e \u043a\u0430\u043a \u0438 \u043c\u0435\u0442\u043e\u0434\u044b, \u0441\u043e\u0431\u044b\u0442\u0438\u044f\n\u0438\u043c\u0435\u044e\u0442 \u0441\u0432\u043e\u0451 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b."),(0,l.kt)("h2",{id:"web"},"Web"),(0,l.kt)("p",null,"\u041a\u0430\u043a \u0443\u0436\u0435 \u0438 \u0431\u044b\u043b\u043e \u0443\u043f\u043e\u043c\u044f\u043d\u0443\u0442\u043e \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,l.kt)("a",{parentName:"p",href:"methods#web"},"\u041c\u0435\u0442\u043e\u0434\u044b"),", web-\u0432\u0435\u0440\u0441\u0438\u044f Telegram\n\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0444\u0440\u0435\u0439\u043c\u0430\u043c\u0438. \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e\n\u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0444\u0440\u0435\u0439\u043c \u0438\u043c\u0435\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0432\u044b\u0437\u043e\u0432\u0430\n\u0442\u0430\u043a\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"window.postMessage"),". \u0414\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0442\u0430\u043a\u0438\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e\n\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0441\u043e\u0431\u044b\u0442\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," \u0432 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"window"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"window.addEventListener('message', ...)\n")),(0,l.kt)("p",null,"\u041d\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"data: string"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435\n\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 JSON \u043e\u0431\u044a\u0435\u043a\u0442, \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u0439 \u043a \u0441\u0442\u0440\u043e\u043a\u0435. \u042d\u0442\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u0438\u043c\u0435\u0435\u0442\n\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MessageJSON {\n  eventType: string;\n  eventData: any;\n}\n")),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043c\u043e\u0433\u043b\u0430 \u0431\u044b \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043e\u0442 \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\nTelegram:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"window.addEventListener('message', ({data, origin}) => {\n  // Check if data is really a string. Also, check if send data is from\n  // verified source.\n  if (typeof data !== 'string' || origin !== 'https://web.telegram.org') {\n    return;\n  }\n\n  try {\n    // Try parsing data as JSON as long as we expect it to JSON object\n    // converted to string. In case, it is invalid, we will just jump to\n    // catch and leave the function.\n    const json = JSON.parse(data);\n\n    // We need exactly object. Not null and array.\n    if (typeof json !== 'object' || json === null || Array.isArray(json)) {\n      return;\n    }\n\n    // Extract required properties, validate the type of eventType property.\n    const {eventType, eventData} = json;\n\n    if (typeof eventType !== 'string') {\n      return;\n    }\n\n    // We got it!\n    console.log(eventType, eventData);\n  } catch (e) {\n  }\n})\n")),(0,l.kt)("h2",{id:"desktop-mobile-\u0438-windows-phone"},"Desktop, mobile \u0438 Windows Phone"),(0,l.kt)("p",null,"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 Telegram \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u043a\u0430\u043a\u043e\u0435-\u043b\u0438\u0431\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0435,\n\u043e\u043d\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0451\u0442 \u0432\u0441\u0442\u0430\u0432\u043a\u0443 JavaScript-\u043a\u043e\u0434\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"window.Telegram.WebView.receiveEvent('popup_closed', {button_id: 'cancel'});\n")),(0,l.kt)("p",null,"\u0412\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"window.TelegramGameProxy.receiveEvent")," - desktop;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"window.Telegram.WebView.receiveEvent")," - mobile;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"window.TelegramGameProxy_receiveEvent")," - Windows Phone")),(0,l.kt)("p",null,"\u041a\u0430\u0436\u0434\u0430\u044f \u0438\u0437 \u044d\u0442\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0438\u043c\u0435\u0435\u0442 \u043e\u0434\u043d\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0443:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type ReceiveEvent = (eventType: string, eventData: unknown) => void;\n")),(0,l.kt)("p",null,"\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0442\u0430\u043a\u0438\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u044b\u043c.\n\u041f\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u043f\u0443\u0442\u0438 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0431\u044a\u044f\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u044e\n\u0444\u0443\u043d\u043a\u0446\u0438\u044e-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0438 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c Telegram \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f\n\u043a\u0430\u043a\u043e\u0433\u043e-\u043b\u0438\u0431\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u044f."),(0,l.kt)("h2",{id:"\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435-\u0441\u043e\u0431\u044b\u0442\u0438\u044f"},"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),(0,l.kt)("p",null,"\u042d\u0442\u0430 \u0441\u0435\u043a\u0446\u0438\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u043e\u0431\u044b\u0442\u0438\u0439, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u043d\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c\nTelegram: \u0438\u0445 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u044f, \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435. \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0435\u043a\u0446\u0438\u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\n\u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e Telegram Web Apps, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\n\u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f."),(0,l.kt)("h3",{id:"v60"},"v6.0"),(0,l.kt)("h4",{id:"invoice_closed"},(0,l.kt)("inlineCode",{parentName:"h4"},"invoice_closed")),(0,l.kt)("p",null,"\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0439 \u0441\u0447\u0451\u0442 \u0431\u044b\u043b \u0437\u0430\u043a\u0440\u044b\u0442."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u041f\u043e\u043b\u0435"),(0,l.kt)("th",null,"\u0422\u0438\u043f"),(0,l.kt)("th",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"slug"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u043c\u0435\u0442\u043e\u0434\u0430\xa0",(0,l.kt)("a",{href:"methods#web_app_open_invoice"},(0,l.kt)("code",null,"web_app_open_invoice")),"\xa0 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,l.kt)("code",null,"slug"),".")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"status"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,(0,l.kt)("p",null,"\u0421\u0442\u0430\u0442\u0443\u0441 \u043f\u043b\u0430\u0442\u0435\u0436\u0430. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"paid"),", \u043f\u043b\u0430\u0442\u0435\u0436 \u0431\u044b\u043b \u043f\u0440\u043e\u0432\u0435\u0434\u0451\u043d"),(0,l.kt)("li",null,(0,l.kt)("code",null,"failed"),", \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0430 \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u043b\u0430\u0441\u044c"),(0,l.kt)("li",null,(0,l.kt)("code",null,"pending"),", \u043f\u043b\u0430\u0442\u0451\u0436 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"),(0,l.kt)("li",null,(0,l.kt)("code",null,"cancelled"),", \u043f\u043b\u0430\u0442\u0451\u0436 \u0431\u044b\u043b \u043e\u0442\u043c\u0435\u043d\u0451\u043d")))))),(0,l.kt)("h4",{id:"main_button_pressed"},(0,l.kt)("inlineCode",{parentName:"h4"},"main_button_pressed")),(0,l.kt)("p",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0436\u0430\u043b \u043d\u0430 ",(0,l.kt)("a",{parentName:"p",href:"../ui/main-button"},"\u0413\u043b\u0430\u0432\u043d\u0443\u044e \u041a\u043d\u043e\u043f\u043a\u0443"),"."),(0,l.kt)("h4",{id:"popup_closed"},(0,l.kt)("inlineCode",{parentName:"h4"},"popup_closed")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../ui/popup"},"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043e\u043a\u043d\u043e")," \u0431\u044b\u043b\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u043e."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u043e\u043b\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0422\u0438\u043f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"button_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435"),". \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u043d\u043e\u043f\u043a\u0438, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0430\u0436\u0430\u043b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043e\u043a\u043d\u043e \u0431\u044b\u043b\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u043e \u0431\u0435\u0437 \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u043d\u0430 \u043e\u0434\u043d\u0443 \u0438\u0437 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043d\u043e\u043f\u043e\u043a, \u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c.")))),(0,l.kt)("h4",{id:"set_custom_style"},(0,l.kt)("inlineCode",{parentName:"h4"},"set_custom_style")),(0,l.kt)("p",null,"\u0421\u043e\u0431\u044b\u0442\u0438\u0435, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u043e\u0435 web-\u0432\u0435\u0440\u0441\u0438\u0435\u0439 Telegram. \u0415\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\nHTML-\u0442\u0435\u0433\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"<style/>"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a. \u041d\u0430\u0431\u043e\u0440 \u0441\u0442\u0438\u043b\u0435\u0439,\n\u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0438, \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043c\u043e\u0447\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443 \u0441\u0442\u0438\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043a\u0440\u043e\u043b\u043b-\u0431\u0430\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\nTWA."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u044d\u0442\u043e\u0433\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043d\u043e\u0441\u0438\u0442 \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c\n\u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430.")),(0,l.kt)("h4",{id:"theme_changed"},(0,l.kt)("inlineCode",{parentName:"h4"},"theme_changed")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../ui/theme-params"},"\u0422\u0435\u043c\u0430")," \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f Telegram (\u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\n\u043d\u0430 \u043d\u043e\u0447\u043d\u043e\u0439 \u043b\u0438\u0431\u043e \u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0440\u0435\u0436\u0438\u043c) \u0431\u044b\u043b\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u043e\u043b\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0422\u0438\u043f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"theme_params"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Record<string, string>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0431\u044a\u0435\u043a\u0442, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043a\u043b\u044e\u0447\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u043a\u043b\u044e\u0447 \u0442\u0435\u043c\u044b, \u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 - \u0446\u0432\u0435\u0442 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,l.kt)("inlineCode",{parentName:"td"},"#RRGGBB"),".")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"',title:'"\u041f\u0440\u0438\u043c\u0435\u0440','\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"':!0},'{\n  "bg_color": "#212121",\n  "text_color": "#ffffff",\n  "hint_color": "#aaaaaa",\n  "link_color": "#8774e1",\n  "button_color": "#8774e1",\n  "button_text_color": "#ffffff",\n  "secondary_bg_color": "#0f0f0f"\n}\n')),(0,l.kt)("h4",{id:"viewport_changed"},(0,l.kt)("inlineCode",{parentName:"h4"},"viewport_changed")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../ui/viewport"},"Viewport")," \u0431\u044b\u043b \u0438\u0437\u043c\u0435\u043d\u0451\u043d. \u041a\n\u043f\u0440\u0438\u043c\u0435\u0440\u0443, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 \u043f\u0435\u0440\u0435\u0442\u044f\u0433\u0438\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435,\n\u043a\u043e\u0433\u0434\u0430 \u0431\u044b\u043b \u0432\u044b\u0437\u0432\u0430\u043d \u043c\u0435\u0442\u043e\u0434 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f viewport-\u0430."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u0427\u0430\u0441\u0442\u043e\u0442\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u044d\u0442\u043e\u0433\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0433\u043b\u0430\u0434\u043a\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c\n\u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u0438\u0434\u0438\u043c\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0421\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u0432\u0430\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u043e\u0434\u043e\u0439\u0434\u0435\u0442\n\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0432\u044b\u0441\u043e\u0442\u044b \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u043e\u043b\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0422\u0438\u043f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430 \u0432\u0438\u0434\u0438\u043c\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435"),". \u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0448\u0438\u0440\u0438\u043d\u0430 \u0432\u0438\u0434\u0438\u043c\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_expanded"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0412\u0438\u0434\u0438\u043c\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0438\u043c\u0435\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0443\u044e \u0432\u044b\u0441\u043e\u0442\u0443.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_state_stable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0412\u0438\u0434\u0438\u043c\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439. \u0418\u043d\u044b\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438, \u0433\u043e\u0432\u043e\u0440\u0438\u0442 \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0435\u0451 \u0440\u0430\u0437\u043c\u0435\u0440 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438.")))),(0,l.kt)("h3",{id:"v61"},"v6.1"),(0,l.kt)("h4",{id:"back_button_pressed"},(0,l.kt)("inlineCode",{parentName:"h4"},"back_button_pressed")),(0,l.kt)("p",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0436\u0430\u043b \u043d\u0430 ",(0,l.kt)("a",{parentName:"p",href:"../ui/back-button"},"\u041a\u043d\u043e\u043f\u043a\u0443 \u041d\u0430\u0437\u0430\u0434"),"."),(0,l.kt)("h4",{id:"settings_button_pressed"},(0,l.kt)("inlineCode",{parentName:"h4"},"settings_button_pressed")),(0,l.kt)("p",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0436\u0430\u043b \u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")," \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u043e\u0433\u043e\n\u043c\u0435\u043d\u044e \u0448\u0430\u043f\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u041d\u0435 \u0432\u0441\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u044e\u0442 \u044d\u0442\u0443 \u043a\u043d\u043e\u043f\u043a\u0443."),(0,l.kt)("h3",{id:"v64"},"v6.4"),(0,l.kt)("h4",{id:"qr_text_received"},(0,l.kt)("inlineCode",{parentName:"h4"},"qr_text_received")),(0,l.kt)("p",null,"QR-\u0441\u043a\u0430\u043d\u043d\u0435\u0440 \u043f\u0440\u043e\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043b QR-\u043a\u043e\u0434 \u0438 \u0438\u0437\u0432\u043b\u0451\u043a \u043a\u043e\u043d\u0442\u0435\u043d\u0442."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u043e\u043b\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0422\u0438\u043f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435"),". \u041a\u043e\u043d\u0442\u0435\u043d\u0442 QR-\u043a\u043e\u0434\u0430.")))),(0,l.kt)("h4",{id:"scan_qr_popup_closed"},(0,l.kt)("inlineCode",{parentName:"h4"},"scan_qr_popup_closed")),(0,l.kt)("p",null,"QR-\u0441\u043a\u0430\u043d\u043d\u0435\u0440 \u0431\u044b\u043b \u0437\u0430\u043a\u0440\u044b\u0442."),(0,l.kt)("h4",{id:"clipboard_text_received"},(0,l.kt)("inlineCode",{parentName:"h4"},"clipboard_text_received")),(0,l.kt)("p",null,"\u0422\u0435\u043a\u0441\u0442 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u043e\u0431\u043c\u0435\u043d\u0430 \u0431\u044b\u043b \u0438\u0437\u0432\u043b\u0435\u0447\u0451\u043d. \u041d\u0435 \u0432\u0441\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u044e\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\n\u043a \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u043d\u043e\u043c\u0443 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0443."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u043e\u043b\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0422\u0438\u043f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"req_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,l.kt)("a",{parentName:"td",href:"methods#web_app_read_text_from_clipboard"},(0,l.kt)("inlineCode",{parentName:"a"},"web_app_read_text_from_clipboard"))," \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,l.kt)("inlineCode",{parentName:"td"},"req_id"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435"),". \u0422\u0435\u043a\u0441\u0442 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u043e\u0431\u043c\u0435\u043d\u0430. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0442\u0438\u043f ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," \u0432 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0431\u0443\u0444\u0435\u0440\u0443 \u043e\u0431\u043c\u0435\u043d\u0430.")))))}c.isMDXComponent=!0}}]);