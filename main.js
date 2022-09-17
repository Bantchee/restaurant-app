(()=>{"use strict";var e={832:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(213),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,".home-page .slide-show .slide-container {\n    position: relative;\n}\n\n/* hide slides by default */\n.home-page .slide-show .slide-container .slide {\n    display: none;\n}\n\n.home-page .slide-show .slide-container .slide {\n    width: 450px;\n    height: 450px;\n    border-radius: 100%;\n    border: 5px var(--black) solid;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n/* Next and previous buttons */\n.home-page .slide-show .slide-container .arrow {\n    color: var(--white);\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    width: auto;\n    margin-top: -22px;\n    padding: 16px;\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    user-select: none;\n}\n\n/* Next arrow positioning to right of slides*/\n.home-page .slide-show .slide-container .next {\n    right: 5px;\n    border-radius: 3px 0 0 3px;\n}\n\n/* Prev arrow positioning to left of slides*/\n.home-page .slide-show .slide-container .prev {\n    left: 5px;\n}\n\n.home-page .slide-show .slide-container .arrow:hover {\n    background-color: rgba(0,0,0,0.8);\n}\n\n.home-page .slide-show .dot-container {\n    text-align: center;\n}\n\n/* The dots/bullets/indicators */\n.home-page .dot {\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    margin: 0 2px;\n    background-color: #bbb;\n    border-radius: 50%;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n}\n\n.home-page .active, .dot:hover {\n    background-color: #717171;\n}",""]);const d=i},21:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(213),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,":root, body {\n    padding: 0px;\n    margin: 0px;\n\n    --black: #000000;\n    --white: #FEFEFC;\n    --gold: #ffd700;\n    --light-green: #9CA193;\n    --green: #818D74;\n    --dark-green: #555944;\n\n    --tint: rgba(0, 0, 0, 0.35);\n\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n/* Body */\nbody {\n    background-color: black;\n\n    display: grid;\n    grid-template-rows: 150px calc(100vh - 150px) 150px;\n}\n\n#background-img {\n    width: 75vw;\n    /* height: 120vh; */\n    display: block;\n    position: fixed;\n    z-index: -1;\n    left: 12.5%;\n    top: -10%;\n}\n\n#background-tint {\n    background-color: var(--tint);\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: -1;\n}\n\n/* Header */\nheader {\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 0px;\n}\n\nheader .title {\n    color: white;\n    font-weight: normal;\n    font-size: 48px;\n    padding: 0px;\n    margin: 0px;\n}\n\nheader nav {\n    display: flex;\n    column-gap: 16px;\n}\n\nheader nav .nav-link {\n    color: var(--white);\n    font-size: 30px;\n    text-decoration: none;\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n\nheader nav .nav-link:hover {\n    color: var(--gold);\n}\n\nheader nav .current-page {\n    text-decoration: underline;\n}\n\n/* Content */\n\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/* Footer */\n\nfooter .title {\n    color: var(--white);\n    font-size: 1.5rem;\n}\n\nfooter .text {\n    color: var(--white);\n    font-size: 1rem;\n}\n\nfooter p {\n    padding: 0px;\n    margin: 0px;\n}\n\nfooter button {\n    cursor: pointer;\n}\n\nfooter .social-container {\n    display: flex;\n    column-gap: 8px;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter a.social {\n    width: 48px;\n    height: 48px;\n    background-color: rgba(0, 0, 0, 0.6);\n    border: 2px solid white;\n    border-radius: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter a.social:hover {\n    background-color: black;\n}\n\nfooter a.social img {\n    width: 30px;\n    height: 30px;\n}\n\nfooter .restaurant {\n    background-color: var(--green);\n    padding: 16px 0px;\n    display: flex;\n    justify-content: center;\n    column-gap: 24px;\n}\n\nfooter .restaurant .text {\n    padding-left: 8px;\n}\n\nfooter .restaurant ul {\n    padding: 0px;\n    margin: 0px;\n    list-style: none;\n}\n\nfooter .restaurant .newsletter-container button {\n    background-color: rgba(255, 255, 255, 0.9);\n    border: 1px solid black;\n    border-radius: 8px;\n    display: block;\n    justify-self: center;\n    width: 100px;\n    height: 30px;\n    font-size: 1em;\n    margin-left: 40px;\n    margin-top: 8px;\n}\n\nfooter .restaurant .newsletter-container input[type=\"email\"] {\n    border-radius: 8px;\n    font-size: 1em;\n}\n\nfooter .restaurant .newsletter-container button:hover {\n    background-color: rgba(255, 255, 255, 1);\n}\n\nfooter .github-footer {\n    background-color: var(--light-green);\n    padding: 8px 0px;\n    display: flex;\n    column-gap: 8px;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter .github-footer .text {\n    font-size: 1.5em;\n}",""]);const d=i},424:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(213),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,'.menu-page {\n    display: grid !important; \n    grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-areas: \n        "burger burger pizza pizza fries fries"\n        "drinks drinks drinks iceCream iceCream iceCream";\n    width: 60%;\n    justify-self: center;\n}\n\n.menu-page .item-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu-page .burger {\n    grid-area: burger;\n}\n\n.menu-page .pizza {\n    grid-area: pizza;\n}\n\n.menu-page .fries {\n    grid-area: fries;\n}\n\n.menu-page .drinks {\n    grid-area: drinks;\n    margin-left: 125px;\n}\n\n.menu-page .ice-cream {\n    grid-area: iceCream;\n    margin-right: 125px;\n}\n\n.menu-page .item-container .img {\n    width: 150px;\n    height: 150px;\n    border-radius: 100%;\n    border: 5px var(--black) solid;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.menu-page .item-container .text {\n    color: var(--white);\n    text-align: center;\n    font-size: 36px;\n    margin: 0px;\n}\n\n/* Modal */\n.menu-modal {\n    display: none;\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--tint);\n\n    /* display: flex; */\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-modal .menu-modal-content {\n    padding: 16px;\n    color: var(--white);\n    background-color: var(--light-green);\n    border: 5px var(--green) solid;\n    border-radius: 5%;\n    display: flex;\n    flex-direction: column;\n}\n\n.menu-modal .menu-modal-content .exit-div {\n    display: grid;\n}\n\n.menu-modal .menu-modal-content .exit {\n    font-size: 24px;\n    color: black;\n    margin: 0px;\n    justify-self: right;\n    cursor: pointer;\n}\n.menu-modal .menu-modal-content .exit:hover {\n    color: red;\n}\n\n\n.menu-modal .menu-modal-content .title {\n    font-size: 36px;\n    margin: 0px;\n}\n\n.menu-modal .menu-modal-content li {\n    font-size: 24px;\n    list-style: none;\n    padding: 0px;\n}',""]);const d=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},213:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],d=0;d<e.length;d++){var c=e[d],s=o.base?c[0]+o.base:c[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,o);o.byIndex=d,n.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var d=t(r[i]);n[d].references--}for(var c=o(e,a),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"887edf39f5d118cd64f3.jpg",n=t.p+"58343ea253613167c66a.svg",o=t.p+"fa4a85219b1e451aabbc.svg",a=t.p+"cace40f86d59be2debfe.svg",r=t.p+"678001e7b52306104fc3.svg",i=t.p+"1a56b48d7fa5d46c4901.jpg",d=t.p+"14b7fb7bbc8f7a1d711b.jpg",c=t.p+"aa7f7e845ce14ca057d2.jpg",s=t.p+"9573e384c9c91fea06cf.jpg",l=t.p+"9f5088a2c891a9a18d2f.jpg";var p=t(379),u=t.n(p),m=t(795),h=t.n(m),g=t(569),f=t.n(g),x=t(565),b=t.n(x),C=t(216),v=t.n(C),y=t(589),E=t.n(y),L=t(21),k={};k.styleTagTransform=E(),k.setAttributes=b(),k.insert=f().bind(null,"head"),k.domAPI=h(),k.insertStyleElement=v(),u()(L.Z,k),L.Z&&L.Z.locals&&L.Z.locals;var w=t(832),S={};S.styleTagTransform=E(),S.setAttributes=b(),S.insert=f().bind(null,"head"),S.domAPI=h(),S.insertStyleElement=v(),u()(w.Z,S),w.Z&&w.Z.locals&&w.Z.locals;var A=t(424),z={};z.styleTagTransform=E(),z.setAttributes=b(),z.insert=f().bind(null,"head"),z.domAPI=h(),z.insertStyleElement=v(),u()(A.Z,z),A.Z&&A.Z.locals&&A.Z.locals,(()=>{const t=document.body,i=document.createElement("img");t.appendChild(i),i.setAttribute("src",e),i.setAttribute("id","background-img");const d=document.createElement("div");d.setAttribute("id","background-tint"),t.appendChild(d);const c=document.createElement("header");t.appendChild(c);const s=document.createElement("h1");c.appendChild(s),s.classList.add("title"),s.textContent="Spring's Clover";const l=document.createElement("nav");c.appendChild(l);const p=document.createElement("button");l.appendChild(p),p.classList.add("nav-link","home-link","current-page"),p.setAttribute("href",""),p.textContent="Home";const u=document.createElement("button");l.appendChild(u),u.classList.add("nav-link","menu-link"),u.setAttribute("href",""),u.textContent="Menu";const m=document.createElement("button");l.appendChild(m),m.classList.add("nav-link","about-link"),m.setAttribute("href",""),m.textContent="About";const h=document.createElement("button");l.appendChild(h),h.classList.add("nav-link","contact-link"),h.setAttribute("href",""),h.textContent="Contact";const g=document.createElement("div");g.setAttribute("id","content"),t.appendChild(g);const f=document.createElement("footer");t.appendChild(f);const x=document.createElement("div");f.appendChild(x),x.classList.add("restaurant");const b=document.createElement("div");x.appendChild(b),b.classList.add("address-container","container");const C=document.createElement("p");b.appendChild(C),C.classList.add("title"),C.textContent="Address";const v=document.createElement("p");b.appendChild(v),v.classList.add("text"),v.textContent="420 Greendale Lane, Reed City";const y=document.createElement("div");x.appendChild(y),y.classList.add("hours-container","container");const E=document.createElement("p");y.appendChild(E),E.classList.add("title"),E.textContent="Hours";const L=document.createElement("ul");y.appendChild(L);const k=document.createElement("li");L.appendChild(k),k.classList.add("text"),k.textContent="Mon-Fri : 8AM-8PM";const w=document.createElement("li");L.appendChild(w),w.classList.add("text"),w.textContent="Sat-Sun : 8AM-4PM";const S=document.createElement("div");x.appendChild(S),S.classList.add("contact-container","container");const A=document.createElement("para");S.appendChild(A),A.classList.add("title"),A.textContent="Contact";const z=document.createElement("ul");S.appendChild(z);const j=document.createElement("li");z.appendChild(j),j.classList.add("text"),j.textContent="Call : +1 (312) 532 5464";const M=document.createElement("li");z.appendChild(M),M.classList.add("text"),M.textContent="Email : support@springsclover.com";const q=document.createElement("div");x.appendChild(q),q.classList.add("newsletter-container","container");const $=document.createElement("p");q.appendChild($),$.classList.add("title"),$.textContent="Newsletter";const T=document.createElement("form");q.appendChild(T);const I=document.createElement("label");T.appendChild(I),I.textContent="Email : ",I.classList.add("text");const Z=document.createElement("input");T.appendChild(Z),Z.setAttribute("type","email");const N=document.createElement("button");T.appendChild(N),N.classList.add("sign-up"),N.textContent="Sign Up";const F=document.createElement("div");x.appendChild(F),F.classList.add("social-container","container");const P=document.createElement("a");F.appendChild(P),P.classList.add("instagram","social"),P.setAttribute("href","https://instagram.com"),P.setAttribute("target","_blank");const B=document.createElement("img");P.appendChild(B),B.setAttribute("src",n);const H=document.createElement("a");F.appendChild(H),H.classList.add("youtube","social"),H.setAttribute("href","https://youtube.com"),H.setAttribute("target","_blank");const O=document.createElement("img");H.appendChild(O),O.setAttribute("src",o);const U=document.createElement("a");F.appendChild(U),U.classList.add("twitter","social"),U.setAttribute("href","https://twitter.com"),U.setAttribute("target","_blank");const _=document.createElement("img");U.appendChild(_),_.setAttribute("src",a);const R=document.createElement("div");f.appendChild(R),R.classList.add("github-footer");const D=document.createElement("p");R.appendChild(D),D.classList.add("text"),D.innerHTML="&#169; Jar'Zeno Jarrett";const J=document.createElement("a");R.appendChild(J),J.classList.add("github","social"),J.setAttribute("href","https://github.com/Bantchee"),J.setAttribute("target","_blank");const G=document.createElement("img");J.appendChild(G),G.setAttribute("src",r)})();const j=(()=>{const e={content:document.querySelector("#content"),slideIndex:1},n=()=>{const n=document.createElement("div");e.slideShow.appendChild(n),e.slideContainer=n,n.classList.add("slide-container"),t(0,i),t(1,d),t(2,c);const o=document.createElement("a");n.appendChild(o),e.prevArrow=o,o.classList.add("arrow","prev"),o.innerHTML="&#10094;";const a=document.createElement("a");n.appendChild(a),e.nextArrow=a,a.classList.add("arrow","next"),a.innerHTML="&#10095;"},t=(n,t)=>{const o=document.createElement("div");e.slideContainer.appendChild(o),o.classList.add("slide",`slide${n}`),o.style.backgroundImage=`url(${t})`},o=()=>{const n=document.createElement("div");e.slideShow.appendChild(n),e.dotContainer=n,n.classList.add("dot-container"),a(1),a(2),a(3)},a=n=>{const t=document.createElement("span");e.dotContainer.appendChild(t),t.classList.add("dot",`dot-${n}`)},r=n=>{l(e.slideIndex+=n)},s=n=>{l(e.slideIndex=n)},l=n=>{let t,o=document.getElementsByClassName("slide"),a=document.getElementsByClassName("dot");for(n>o.length&&(e.slideIndex=1),n<1&&(e.slideIndex=o.length),t=0;t<o.length;t++)o[t].style.display="none";for(t=0;t<a.length;t++)a[t].classList.remove("active");o[e.slideIndex-1].style.display="block",a[e.slideIndex-1].classList.add("active")};return Object.assign({},e,{render:()=>{e.content.classList="",e.content.classList.add("home-page"),(()=>{const t=document.createElement("div");e.content.appendChild(t),e.slideShow=t,t.classList.add("slide-show"),n(),o(),l(e.slideIndex)})(),(()=>{const e=document.getElementsByClassName("next")[0],n=document.getElementsByClassName("prev")[0];e.addEventListener("click",(()=>{r(1)})),n.addEventListener("click",(()=>{r(-1)}));const t=document.getElementsByClassName("dot");for(let e=0;e<t.length;e++)t[e].addEventListener("click",(()=>{s(e+1)}))})()}})})(),M=(()=>{const e={content:document.querySelector("#content"),modal:null},n=()=>{document.querySelector(".exit").addEventListener("click",(()=>{const n=document.querySelector(".menu-modal-content");for(;n.firstChild;)n.removeChild(n.firstChild);e.modal.style.display="none"}))},t=(n,t)=>{const o=document.createElement("div");e.content.appendChild(o),o.classList.add("item-container",n.includes(" ")?"ice-cream":n);const a=document.createElement("div");o.appendChild(a),a.classList.add("img"),a.style.backgroundImage=`url(${t})`;const r=document.createElement("p");o.appendChild(r),r.classList.add("text"),r.textContent=n[0].toUpperCase()+n.slice(1)},o=n=>{const t=e.modal.querySelector(".menu-modal-content"),o=document.createElement("div");t.appendChild(o),o.classList.add("exit-div");const a=document.createElement("span");switch(o.appendChild(a),a.classList.add("exit"),a.innerHTML="&#10005;",n){case"burger":const e=document.createElement("p");t.appendChild(e),e.textContent="Burger Sizes :",e.classList.add("title");const n=document.createElement("ul");t.appendChild(n);const o=document.createElement("li");n.appendChild(o),o.textContent="Small $5";const a=document.createElement("li");n.appendChild(a),a.textContent="Medium $10";const r=document.createElement("li");n.appendChild(r),r.textContent="Large $15";break;case"pizza":const i=document.createElement("p");t.appendChild(i),i.textContent="Pizza Sizes :",i.classList.add("title");const d=document.createElement("ul");t.appendChild(d);const c=document.createElement("li");d.appendChild(c),c.textContent="Small $10";const s=document.createElement("li");d.appendChild(s),s.textContent="Medium $15";const l=document.createElement("li");d.appendChild(l),l.textContent="Large $20";break;case"fries":const p=document.createElement("p");t.appendChild(p),p.textContent="Fries Sizes :",p.classList.add("title");const u=document.createElement("ul");t.appendChild(u);const m=document.createElement("li");u.appendChild(m),m.textContent="Small $1";const h=document.createElement("li");u.appendChild(h),h.textContent="Medium $3";const g=document.createElement("li");u.appendChild(g),g.textContent="Large $5";break;case"drinks":const f=document.createElement("p");t.appendChild(f),f.textContent="Drink Sizes :",f.classList.add("title");const x=document.createElement("ul");t.appendChild(x);const b=document.createElement("li");x.appendChild(b),b.textContent="Small $1";const C=document.createElement("li");x.appendChild(C),C.textContent="Medium $3";const v=document.createElement("li");x.appendChild(v),v.textContent="Large $5";break;case"ice-cream":const y=document.createElement("p");t.appendChild(y),y.textContent="Ice Cream Flavors :",y.classList.add("title");const E=document.createElement("ul");t.appendChild(E);const L=document.createElement("li");E.appendChild(L),L.textContent="Vanilla $3";const k=document.createElement("li");E.appendChild(k),k.textContent="Chocolate $3";const w=document.createElement("li");E.appendChild(w),w.textContent="Strawberry $3"}};return Object.assign({},e,{render:()=>{e.content.classList="",e.content.classList.add("menu-page"),t("burger",i),t("pizza",d),t("fries",s),t("drinks",l),t("ice cream",c),(()=>{const n=document.createElement("div");document.body.appendChild(n),e.modal=n,n.classList.add("menu-modal");const t=document.createElement("div");n.appendChild(t),t.classList.add("menu-modal-content")})(),(()=>{const t=document.querySelector(".burger"),a=document.querySelector(".pizza"),r=document.querySelector(".fries"),i=document.querySelector(".drinks"),d=document.querySelector(".ice-cream");t.addEventListener("click",(()=>{o("burger"),e.modal.style.display="flex",n()})),a.addEventListener("click",(()=>{o("pizza"),e.modal.style.display="flex",n()})),r.addEventListener("click",(()=>{o("fries"),e.modal.style.display="flex",n()})),i.addEventListener("click",(()=>{o("drinks"),e.modal.style.display="flex",n()})),d.addEventListener("click",(()=>{o("ice-cream"),e.modal.style.display="flex",n()}))})()}})})(),q=(()=>{const e={content:document.querySelector("#content")};return Object.assign({},e,{render:()=>{e.content.classList="",e.content.classList.add("about-page")}})})(),$=(()=>{const e={content:document.querySelector("#content")};return Object.assign({},e,{render:()=>{e.content.classList="",e.content.classList.add("contact-page")}})})();j.render(),((e,n,t,o)=>{const a=document.querySelectorAll(".nav-link"),r=document.querySelector(".home-link"),i=document.querySelector(".menu-link"),d=document.querySelector(".about-link"),c=document.querySelector(".contact-link");r.addEventListener("click",(()=>{const n=document.querySelector("#content");for(let e=0;e<a.length;e++)a[e].classList.remove("current-page");for(r.classList.add("current-page");n.firstChild;)n.removeChild(n.firstChild);e.render()})),i.addEventListener("click",(()=>{const e=document.querySelector("#content");for(let e=0;e<a.length;e++)a[e].classList.remove("current-page");for(i.classList.add("current-page");e.firstChild;)e.removeChild(e.firstChild);n.render()})),d.addEventListener("click",(()=>{const e=document.querySelector("#content");for(let e=0;e<a.length;e++)a[e].classList.remove("current-page");for(d.classList.add("current-page");e.firstChild;)e.removeChild(e.firstChild);t.render()})),c.addEventListener("click",(()=>{const e=document.querySelector("#content");for(let e=0;e<a.length;e++)a[e].classList.remove("current-page");for(c.classList.add("current-page");e.firstChild;)e.removeChild(e.firstChild);o.render()}))})(j,M,q,$)})()})();