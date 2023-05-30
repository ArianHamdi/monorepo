"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[514,340],{4096:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce});var a=n(9496),o=n(5924),l=n(2393),r=n(9361),c=n(7884),i=n(3516),s=n(4533),d=n(540),m=n(4031),u=n(1817),b=n(9701),p=n(860);const h={backToTopButton:"backToTopButton_GuJc",backToTopButtonShow:"backToTopButtonShow_CTVM"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(l.current?l.current=!1:a>=r?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.S)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}const g={root:"root_rS2H"};function f(e){return a.createElement("div",{className:g.root},a.createElement(E,e))}var v=n(3442),k=n(3746),_=n(3209),C=n(840),S=n(1163);function I(e){return a.createElement("svg",(0,S.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N={collapseSidebarButton:"collapseSidebarButton_he8D",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_bo9t"};function x(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",N.collapseSidebarButton),onClick:t},a.createElement(I,{className:N.collapseSidebarButtonIcon}))}var T=n(6051),Z=n(5659);const y=Symbol("EmptyContext"),B=a.createContext(y);function w(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(B.Provider,{value:l},t)}var A=n(8439),L=n(6271),P=n(2068),W=n(8131);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function M(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),g=function(e){const t=(0,W.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),f=(0,i._F)(t,l),v=(0,L.Mg)(h,l),{collapsed:k,setCollapsed:C}=(0,A.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(B);if(e===y)throw new Z.i6("DocSidebarItemsExpandedStateProvider");return e}(),x=function(e){void 0===e&&(e=!k),N(e?null:s),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,Z.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:f,collapsed:k,updateCollapsed:x}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&E&&C(!0)}),[b,I,s,C,E]),a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(P.Z,(0,S.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?e=>{n?.(t),h?x(!1):(e.preventDefault(),x())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!k:void 0,href:b?g??"#":g},d),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),x()}})),a.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(j,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:l,level:c+1})))}var F=n(6033),D=n(7262);const R={menuExternalLink:"menuExternalLink_qS_b"};function V(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,l),E=(0,F.Z)(m);return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(P.Z,(0,S.Z)({className:(0,o.Z)("menu__link",!E&&R.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(D.Z,null)))}const z={menuHtmlItem:"menuHtmlItem_JJQ9"};function J(e){let{item:t,level:n,index:l}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),i&&[z.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:c}})}function G(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(M,(0,S.Z)({item:t},n));case"html":return a.createElement(J,(0,S.Z)({item:t},n));default:return a.createElement(V,(0,S.Z)({item:t},n))}}function K(e){let{items:t,...n}=e;return a.createElement(w,null,t.map(((e,t)=>a.createElement(G,(0,S.Z)({key:t,item:e,index:t},n)))))}const j=(0,a.memo)(K),q={menu:"menu_Gj3_",menuWithAnnouncementBar:"menuWithAnnouncementBar_bbzB"};function Q(e){let{path:t,sidebar:n,className:l}=e;const c=function(){const{isActive:e}=(0,T.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",q.menu,c&&q.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:n,activePath:t,level:1})))}const U="sidebar_yi8W",Y="sidebarWithHideableNavbar_Cc3b",O="sidebarHidden_o77P",X="sidebarLogo_RxZa";function $(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,_.L)();return a.createElement("div",{className:(0,o.Z)(U,c&&Y,r&&O)},c&&a.createElement(C.Z,{tabIndex:-1,className:X}),a.createElement(Q,{path:t,sidebar:n}),i&&a.createElement(x,{onClick:l}))}const ee=a.memo($);var te=n(6571),ne=n(7763);const ae=e=>{let{sidebar:t,path:n}=e;const l=(0,ne.e)();return a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function oe(e){return a.createElement(te.Zo,{component:ae,props:e})}const le=a.memo(oe);function re(e){const t=(0,k.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ee,e),o&&a.createElement(le,e))}const ce={expandButton:"expandButton_Vjud",expandButtonIcon:"expandButtonIcon_rBWP"};function ie(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ce.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:ce.expandButtonIcon}))}const se={docSidebarContainer:"docSidebarContainer_vZ36",docSidebarContainerHidden:"docSidebarContainerHidden_PxCw",sidebarViewport:"sidebarViewport_iXfJ"};function de(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function me(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:c}=(0,v.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,se.docSidebarContainer,n&&se.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(se.docSidebarContainer)&&n&&s(!0)}},a.createElement(de,null,a.createElement("div",{className:(0,o.Z)(se.sidebarViewport,i&&se.sidebarViewportHidden)},a.createElement(re,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(ie,{toggleSidebar:d}))))}const ue={root:"root_Dgn7",sticky:"sticky_i8QA",logoWrapper:"logoWrapper_KKua",logoText:"logoText_COcz"},be=n.p+"assets/images/logo-102b19e0b98aa72967c15ef826f442f1.png";function pe(e){return a.createElement("div",{className:ue.root},a.createElement("div",{className:ue.sticky},a.createElement("div",{className:ue.logoWrapper},a.createElement("img",{width:32,height:32,src:be,alt:"twa dev logo"}),a.createElement("span",{className:ue.logoText},"Web Apps")),a.createElement(me,e)))}const he={docMainContainer:"docMainContainer_nJQ0",docMainContainerEnhanced:"docMainContainerEnhanced_sgGN",docItemWrapperEnhanced:"docItemWrapperEnhanced_jAMP"};function Ee(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.V)();return a.createElement("main",{className:(0,o.Z)(he.docMainContainer,(t||!l)&&he.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,t&&he.docItemWrapperEnhanced)},n))}const ge={docPage:"docPage_WDkx",docsWrapper:"docsWrapper__iZK"};function fe(e){let{children:t}=e;const n=(0,d.V)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:ge.docsWrapper},a.createElement(f,null),a.createElement("div",{className:ge.docPage},n&&a.createElement(pe,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(Ee,{hiddenSidebarContainer:o},t)))}var ve=n(6617),ke=n(2394);function _e(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ce(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(ve.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(_e,e),a.createElement(l.FG,{className:(0,o.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(fe,null,c)))))}},6617:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(9496),o=n(1817),l=n(2393),r=n(4031);function c(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4533:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>r});var a=n(9496),o=n(5659);const l=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocsVersionProvider");return e}}}]);