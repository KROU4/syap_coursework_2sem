(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7835],{6858:function(e,a,t){"use strict";var r=t(5893),n=t(7294),l=t(2538),s=t(1664),c=t.n(s),i=t(5675),o=t.n(i);a.Z=function(){var e=function(e,a,t){return t.indexOf(e)===a},a=(0,n.useState)(null),t=a[0],s=a[1],i=(0,n.useState)(l.D_),d=i[0],u=i[1],f=(0,n.useState)(l.D_.map((function(e){return e.category}))),h=f[0],m=f[1],b=(0,n.useState)(""),p=b[0],x=b[1];return(0,n.useEffect)((function(){m(h.filter(e))}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"tab-pane fade",children:(0,r.jsxs)("div",{className:"lg:flex",children:[(0,r.jsx)("div",{className:"mb-10 shrink-0 basis-8/12 space-y-5 lg:mb-0 lg:pr-10",children:d.slice(0,5).map((function(e){var a=e.id,t=e.image,n=e.title,l=e.price,s=e.time,i=e.category,d=t.split("/").slice(-1).toString().replace(".jpg","").replace(".gif","").replace("_sm","").replace("avatar","item");return(0,r.jsx)(c(),{href:"/item/".concat(d),children:(0,r.jsxs)("a",{className:"dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg",children:[(0,r.jsx)("figure",{className:"mr-5 self-start",children:(0,r.jsx)(o(),{src:t,alt:n,height:50,width:50,objectFit:"cover",className:"rounded-2lg",loading:"lazy"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white",children:n}),(0,r.jsx)("span",{className:"dark:text-jacarta-200 text-jacarta-500 mb-3 block text-sm",children:l}),(0,r.jsx)("span",{className:"text-jacarta-300 block text-xs",children:s})]}),(0,r.jsx)("div",{className:"dark:border-jacarta-600 border-jacarta-100 ml-auto rounded-full border p-3",children:(0,r.jsx)("svg",{className:"icon fill-jacarta-700 dark:fill-white h-6 w-6",children:(0,r.jsx)("use",{xlinkHref:"/icons.svg#icon-".concat(i)})})})]})},a)}))}),(0,r.jsxs)("aside",{className:"basis-4/12 lg:pl-5",children:[(0,r.jsxs)("form",{action:"search",className:"relative mb-12 block",onSubmit:function(e){e.preventDefault();var a=l.D_.filter((function(e){return e.title.toLowerCase().includes(p)}));u(a),x("")},children:[(0,r.jsx)("input",{type:"search",className:"text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white",placeholder:"Search",value:p,onChange:function(e){return x(e.target.value)}}),(0,r.jsx)("button",{type:"submit",className:"absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"fill-jacarta-500 h-4 w-4 dark:fill-white",children:[(0,r.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,r.jsx)("path",{d:"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"})]})})]}),(0,r.jsx)("h3",{className:"font-display text-jacarta-500 mb-4 font-semibold dark:text-white",children:"Filters"}),(0,r.jsx)("div",{className:"flex flex-wrap",children:h.map((function(e,a){return(0,r.jsxs)("button",{className:t===a?"dark:border-jacarta-600 group bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border px-4 py-3 border-transparent text-white dark:border-transparent":"dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent",onClick:function(){!function(e){u(l.D_.filter((function(a){return a.category===e})))}(e),s(a)},children:[(0,r.jsx)("svg",{className:t===a?"icon mr-2 h-4 w-4 fill-white":"icon fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",children:(0,r.jsx)("use",{xlinkHref:"/icons.svg#icon-".concat(e)})}),(0,r.jsx)("span",{className:"text-2xs font-medium capitalize",children:e})]},a)}))})]})]})})})}},3125:function(e,a,t){"use strict";var r=t(5893),n=(t(7294),t(1664)),l=t.n(n),s=t(7083);t(3372);a.Z=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white",children:(0,r.jsx)(s.ZP,{animation:"fade",arrow:!1,trigger:"click",interactive:"true",placement:"bottom",className:"tooltip-container",content:(0,r.jsxs)("div",{className:"dark:bg-jacarta-800 text-jacarta-700 z-10 min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show",children:[(0,r.jsx)(l(),{href:"#",children:(0,r.jsxs)("a",{className:"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",children:[(0,r.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook",className:"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,r.jsx)("path",{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"})}),(0,r.jsx)("span",{className:"mt-1 inline-block",children:"Facebook"})]})}),(0,r.jsx)(l(),{href:"#",children:(0,r.jsxs)("a",{className:"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",children:[(0,r.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",className:"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,r.jsx)("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})}),(0,r.jsx)("span",{className:"mt-1 inline-block",children:"Twitter"})]})}),(0,r.jsx)(l(),{href:"#",children:(0,r.jsxs)("a",{className:"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",children:[(0,r.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"discord",className:"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,r.jsx)("path",{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"})}),(0,r.jsx)("span",{className:"mt-1 inline-block",children:"Discord"})]})}),(0,r.jsx)(l(),{href:"#",children:(0,r.jsxs)("a",{className:"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white",children:[(0,r.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,r.jsx)("path",{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"})]}),(0,r.jsx)("span",{className:"mt-1 inline-block",children:"Email"})]})}),(0,r.jsx)(l(),{href:"#",children:(0,r.jsxs)("a",{className:"dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"group-hover:fill-accent fill-jacarta-300 mr-2 h-4 w-4 dark:group-hover:fill-white",children:[(0,r.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,r.jsx)("path",{d:"M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"})]}),(0,r.jsx)("span",{className:"mt-1 inline-block",children:"Copy"})]})})]}),children:(0,r.jsx)("button",{className:"inline-flex h-10 w-10 items-center justify-center text-sm",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"dark:fill-jacarta-200 fill-jacarta-500 h-4 w-4",children:[(0,r.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,r.jsx)("path",{d:"M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z"})]})})})})})}},3372:function(){},2875:function(e,a,t){"use strict";t.d(a,{OK:function(){return O},td:function(){return y},x4:function(){return I},mQ:function(){return g}});var r=t(7294);function n(e){return function(a){return!!a.type&&a.type.tabsRole===e}}var l=n("Tab"),s=n("TabList"),c=n("TabPanel");function i(e,a){return r.Children.map(e,(function(e){return null===e?null:function(e){return l(e)||s(e)||c(e)}(e)?a(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,r.cloneElement)(e,Object.assign({},e.props,{children:i(e.props.children,a)})):e}))}function o(e,a){return r.Children.forEach(e,(function(e){null!==e&&(l(e)||c(e)?a(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(s(e)&&a(e),o(e.props.children,a)))}))}function d(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=d(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}var u=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=d(e))&&(r&&(r+=" "),r+=a);return r};function f(e){var a=0;return o(e,(function(e){l(e)&&a++})),a}var h,m=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function b(e){return e&&"getAttribute"in e}function p(e){return b(e)&&e.getAttribute("data-rttab")}function x(e){return b(e)&&"true"===e.getAttribute("aria-disabled")}var v=function(e){var a=(0,r.useRef)([]),t=(0,r.useRef)([]),n=(0,r.useRef)();function o(a,t){a<0||a>=v()||(0,e.onSelect)(a,e.selectedIndex,t)}function d(e){for(var a=v(),t=e+1;t<a;t++)if(!x(j(t)))return t;for(var r=0;r<e;r++)if(!x(j(r)))return r;return e}function b(e){for(var a=e;a--;)if(!x(j(a)))return a;for(a=v();a-- >e;)if(!x(j(a)))return a;return e}function v(){return f(e.children)}function j(e){return a.current["tabs-"+e]}function w(e){var a=e.target;do{if(g(a)){if(x(a))return;return void o([].slice.call(a.parentNode.children).filter(p).indexOf(a),e)}}while(null!=(a=a.parentNode))}function g(e){if(!p(e))return!1;var a=e.parentElement;do{if(a===n.current)return!0;if(a.getAttribute("data-rttabs"))break;a=a.parentElement}while(a);return!1}e.children;var N=e.className,k=(e.disabledTabClassName,e.domRef),y=(e.focus,e.forceRenderTabPanel,e.onSelect,e.selectedIndex,e.selectedTabClassName,e.selectedTabPanelClassName,e.environment,e.disableUpDownKeys,e.disableLeftRightKeys,function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,m));return r.createElement("div",Object.assign({},y,{className:u(N),onClick:w,onKeyDown:function(a){var t=e.direction,r=e.disableUpDownKeys,n=e.disableLeftRightKeys;if(g(a.target)){var l=e.selectedIndex,s=!1,c=!1;"Space"!==a.code&&32!==a.keyCode&&"Enter"!==a.code&&13!==a.keyCode||(s=!0,c=!1,w(a)),(n||37!==a.keyCode&&"ArrowLeft"!==a.code)&&(r||38!==a.keyCode&&"ArrowUp"!==a.code)?(n||39!==a.keyCode&&"ArrowRight"!==a.code)&&(r||40!==a.keyCode&&"ArrowDown"!==a.code)?35===a.keyCode||"End"===a.code?(l=function(){for(var e=v();e--;)if(!x(j(e)))return e;return null}(),s=!0,c=!0):36!==a.keyCode&&"Home"!==a.code||(l=function(){for(var e=v(),a=0;a<e;a++)if(!x(j(a)))return a;return null}(),s=!0,c=!0):(l="rtl"===t?b(l):d(l),s=!0,c=!0):(l="rtl"===t?d(l):b(l),s=!0,c=!0),s&&a.preventDefault(),c&&o(l,a)}},ref:function(e){n.current=e,k&&k(e)},"data-rttabs":!0}),function(){var n=0,o=e.children,d=e.disabledTabClassName,u=e.focus,f=e.forceRenderTabPanel,m=e.selectedIndex,b=e.selectedTabClassName,p=e.selectedTabPanelClassName,x=e.environment;t.current=t.current||[];for(var w=t.current.length-v(),g=(0,r.useId)();w++<0;)t.current.push(""+g+t.current.length);return i(o,(function(e){var o=e;if(s(e)){var v=0,w=!1;null==h&&function(e){var a=e||("undefined"!==typeof window?window:void 0);try{h=!("undefined"===typeof a||!a.document||!a.document.activeElement)}catch(t){h=!1}}(x);var g=x||("undefined"!==typeof window?window:void 0);h&&g&&(w=r.Children.toArray(e.props.children).filter(l).some((function(e,a){return g.document.activeElement===j(a)}))),o=(0,r.cloneElement)(e,{children:i(e.props.children,(function(e){var n="tabs-"+v,l=m===v,s={tabRef:function(e){a.current[n]=e},id:t.current[v],selected:l,focus:l&&(u||w)};return b&&(s.selectedClassName=b),d&&(s.disabledClassName=d),v++,(0,r.cloneElement)(e,s)}))})}else if(c(e)){var N={id:t.current[n],selected:m===n};f&&(N.forceRender=f),p&&(N.selectedClassName=p),n++,o=(0,r.cloneElement)(e,N)}return o}))}())};v.defaultProps={className:"react-tabs",focus:!1},v.propTypes={};var j=v,w=function(e){var a=e.children,t=e.defaultFocus,n=e.defaultIndex,l=e.focusTabOnClick,s=e.onSelect,c=(0,r.useState)(t),i=c[0],o=c[1],d=(0,r.useState)(function(e){return null===e.selectedIndex?1:0}(e)),u=d[0],h=(0,r.useState)(1===u?n||0:null),m=h[0],b=h[1];if((0,r.useEffect)((function(){o(!1)}),[]),1===u){var p=f(a);(0,r.useEffect)((function(){if(null!=m){var e=Math.max(0,p-1);b(Math.min(m,e))}}),[p])}var x=Object.assign({},e);return x.focus=i,x.onSelect=function(e,a,t){"function"===typeof s&&!1===s(e,a,t)||(l&&o(!0),1===u&&b(e))},null!=m&&(x.selectedIndex=m),delete x.defaultFocus,delete x.defaultIndex,delete x.focusTabOnClick,r.createElement(j,x,a)};w.propTypes={},w.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},w.tabsRole="Tabs";var g=w,N=["children","className"];var k=function(e){var a=e.children,t=e.className,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,N);return r.createElement("ul",Object.assign({},n,{className:u(t),role:"tablist"}),a)};k.tabsRole="TabList",k.propTypes={},k.defaultProps={className:"react-tabs__tab-list"};var y=k,C=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];var T="react-tabs__tab",R={className:T,disabledClassName:T+"--disabled",focus:!1,id:null,selected:!1,selectedClassName:T+"--selected"},E=function(e){var a,t=(0,r.useRef)(),n=e.children,l=e.className,s=e.disabled,c=e.disabledClassName,i=e.focus,o=e.id,d=e.selected,f=e.selectedClassName,h=e.tabIndex,m=e.tabRef,b=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,C);return(0,r.useEffect)((function(){d&&i&&t.current.focus()}),[d,i]),r.createElement("li",Object.assign({},b,{className:u(l,(a={},a[f]=d,a[c]=s,a)),ref:function(e){t.current=e,m&&m(e)},role:"tab",id:"tab"+o,"aria-selected":d?"true":"false","aria-disabled":s?"true":"false","aria-controls":"panel"+o,tabIndex:h||(d?"0":null),"data-rttab":!0}),n)};E.propTypes={},E.tabsRole="Tab",E.defaultProps=R;var O=E,S=["children","className","forceRender","id","selected","selectedClassName"];var A="react-tabs__tab-panel",z={className:A,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},_=function(e){var a,t=e.children,n=e.className,l=e.forceRender,s=e.id,c=e.selected,i=e.selectedClassName,o=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,S);return r.createElement("div",Object.assign({},o,{className:u(n,(a={},a[i]=c,a)),role:"tabpanel",id:"panel"+s,"aria-labelledby":"tab"+s}),l||c?t:null)};_.tabsRole="TabPanel",_.propTypes={},_.defaultProps=z;var I=_}}]);
//# sourceMappingURL=7835-9e29d0b896d428af.js.map