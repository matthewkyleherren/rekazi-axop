(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9068],{1117:function(e,t,a){Promise.resolve().then(a.bind(a,12612)),Promise.resolve().then(a.bind(a,25715)),Promise.resolve().then(a.bind(a,73240)),Promise.resolve().then(a.bind(a,2046)),Promise.resolve().then(a.bind(a,5468)),Promise.resolve().then(a.bind(a,32976)),Promise.resolve().then(a.bind(a,26349)),Promise.resolve().then(a.bind(a,58814)),Promise.resolve().then(a.bind(a,76926)),Promise.resolve().then(a.bind(a,93336)),Promise.resolve().then(a.bind(a,1042)),Promise.resolve().then(a.bind(a,43873))},12612:function(e,t,a){"use strict";function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)({}).hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(null,arguments)}a.d(t,{default:function(){return r}});var s=a(2265),n=a(54480);function r(e){let{locale:t,...a}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return s.createElement(n.IntlProvider,i({locale:t},a))}},2046:function(e,t,a){"use strict";var i=a(57437),s=a(2265),n=a(44839),r=a(60019),l=a(49582),c=a(11799),o=a(73236),d=a(87142),m=a(61488),p=a(79313),b=a(45710),u=a(3325);t.default=e=>{let t="https://static-media-cdn.xapobank.com",a=(0,c.LZ)(),{loadingGeoData:h,isGB:x}=(0,d.Z)(),f=(0,m.Z)(),v=(0,s.useRef)(null),j=(0,s.useRef)(null);return(0,r.V)(()=>{e.video&&l.p8.timeline({scrollTrigger:{trigger:v.current,start:"top bottom"}}).from(j.current,{scale:1.25,duration:1.8,ease:"power4.out"},0)},[a]),(0,i.jsxs)("section",{className:"Modules-HeroTabs",ref:f,children:[(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h1",{className:"title col-end-13 tb:col-end-7","data-animation":"fade-words",children:(0,i.jsx)(b.Z,{text:e.title,spanClassName:"span-serif"})}),(0,i.jsxs)("div",{className:"description-wrapper tb:col-start-8 col-end-12",children:[e.description_uk?(0,i.jsx)("div",{style:{opacity:h?0:1},children:(0,i.jsx)("p",{className:"description text-subheading","data-animation":"fade","data-delay":.4,children:x()?(0,o.Cr)(e.description_uk||e.description):(0,o.Cr)(e.description)})}):(0,i.jsx)("p",{className:"description text-subheading","data-animation":"fade","data-delay":.4,children:e.description}),e.secondDescription&&(0,i.jsx)("p",{className:"text-subheading-small body-text-color","data-animation":"fade","data-delay":.55,children:e.secondDescription})]}),e.tabs&&(0,i.jsx)("div",{className:(0,n.Z)("tabs-wrapper",{"overflow-enabled":e.overflowEnabled}),children:(0,i.jsxs)("div",{className:"tabs",children:[Object.keys(e.tabs).map((t,a)=>(0,i.jsx)(u.default,{href:"beneficiary"===t?e.tabs.beneficiary.url:"/".concat(e.page,"/").concat((0,o.mB)(t)),className:(0,n.Z)("tab","text-subheading-small",{current:t===e.currentTab}),analyticsMetadata:{eventName:"tab_navigation_link",parentComponent:"main_wrapper",elementType:"navigation_link",elementText:t},children:"beneficiary"===t?e.tabs.beneficiary.label:e.tabs[t]},t)),(0,i.jsx)("div",{className:"line","data-animation":"line"})]})})]}),(e.picture||e.video)&&(0,i.jsxs)("div",{className:(0,n.Z)("media-container",{"no-tabs":!e.tabs}),ref:v,children:[e.picture&&(0,i.jsx)(p.default,{src:e.picture,alt:"Hero picture",animation:"scale"}),e.video&&(0,i.jsxs)("video",{muted:!0,autoPlay:!0,playsInline:!0,loop:!0,ref:j,children:[e.videoWebM&&(0,i.jsx)("source",{src:"".concat(t).concat(e.videoWebM),type:"video/webm"}),(0,i.jsx)("source",{src:"".concat(t).concat(e.video),type:"video/mp4"})]})]})]})}},5468:function(e,t,a){"use strict";var i=a(57437),s=a(44839),n=a(73236),r=a(76645),l=a(61488);t.default=e=>{let t=(0,s.Z)("Modules-Listing",e.classes),a=e.data,c=(0,l.Z)();if(a)return(0,i.jsxs)("div",{className:t,ref:c,children:[(0,i.jsx)("section",{children:a.map((e,t)=>(0,i.jsxs)("div",{className:"container","data-animation":"border-fade","data-border-bottom":!0,children:[(0,i.jsx)("p",{className:"text-subheading tb:col-start-2 tb:col-end-6","data-animation":"fade",children:e.title}),(0,i.jsxs)("div",{className:"description-wrapper  col-start-3 tb:col-start-7 tb:col-end-12",children:[e.description&&(0,i.jsx)("p",{className:"text-body","data-animation":"fade",children:(0,n.Cr)(e.description)}),e.cta&&(0,i.jsx)(r.Z,{text:e.cta.text,href:e.cta.href,theme:"light",animation:"fade"})]})]},t))}),e.disclaimer&&(0,i.jsx)("div",{className:"container listing-disclaimer",children:(0,i.jsx)("p",{className:"text-caption body-text-color tb:col-start-2","data-animation":"fade",children:(0,n.Cr)(e.disclaimer)})})]})}},76926:function(e,t,a){"use strict";var i=a(57437),s=a(44839),n=a(73236),r=a(45710),l=a(61488);t.default=e=>{let t=(0,s.Z)("Modules-TitleDescription",e.classes),a=e.data,c=(0,l.Z)();return(0,i.jsx)("section",{className:t,ref:c,children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h2",{className:"text-h2-sans tb:col-start-2 tb:col-end-6","data-animation":"fade-words",children:(0,i.jsx)(r.Z,{text:a.title,spanClassName:"text-h2-serif"})}),a.description||a.subtitle?(0,i.jsxs)("div",{className:"description-wrapper tb:col-start-7 tb:col-end-12",children:[a.description&&(0,i.jsx)("p",{className:"text-subheading","data-animation":"text-line",children:(0,n.Cr)(a.description)}),a.subtitle&&(0,i.jsx)("p",{className:"text-body","data-animation":"text-line",children:(0,n.Cr)(a.subtitle)})]}):null]})})}}},function(e){e.O(0,[922,7481,9582,2291,6268,982,1799,620,1204,5742,9494,9927,3873,5715,3336,6043,3241,2971,7023,1744],function(){return e(e.s=1117)}),_N_E=e.O()}]);