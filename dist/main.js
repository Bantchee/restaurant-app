(()=>{"use strict";var e={21:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(213),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,":root, body {\n    padding: 0px;\n    margin: 0px;\n\n    --black: #000000;\n    --white: #FEFEFC;\n    --gold: #ffd700;\n    --light-green: #9CA193;\n    --green: #818D74;\n    --dark-green: #555944;\n\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n/* Body */\nbody {\n    background-color: black;\n\n    display: grid;\n    grid-template-rows: 150px calc(100vh - 150px) 150px;\n}\n\n#background-img {\n    width: 75vw;\n    /* height: 120vh; */\n    display: block;\n    position: fixed;\n    z-index: -1;\n    left: 12.5%;\n    top: -10%;\n}\n\n#background-tint {\n    background-color: rgba(0, 0, 0, 0.35);\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: -1;\n}\n\n/* Header */\nheader {\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 0px;\n}\n\nheader .title {\n    color: white;\n    font-weight: normal;\n    font-size: 48px;\n    padding: 0px;\n    margin: 0px;\n}\n\nheader nav {\n    display: flex;\n    column-gap: 16px;\n}\n\nheader nav .nav-link {\n    color: var(--white);\n    font-size: 30px;\n    text-decoration: none;\n}\n\nheader nav .nav-link:hover {\n    color: var(--gold);\n}\n\nheader nav .current-page {\n    text-decoration: underline;\n}\n\n/* Content */\n\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#content .slide-show .slide-container {\n    position: relative;\n}\n\n/* hide slides by default */\n#content .slide-show .slide-container .slide {\n    display: none;\n}\n\n#content .slide-show .slide-container .slide {\n    width: 450px;\n    height: 450px;\n    border-radius: 100%;\n    border: 5px var(--black) solid;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n/* Next and previous buttons */\n#content .slide-show .slide-container .arrow {\n    color: var(--white);\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    width: auto;\n    margin-top: -22px;\n    padding: 16px;\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    user-select: none;\n}\n\n/* Next arrow positioning to right of slides*/\n#content .slide-show .slide-container .next {\n    right: 5px;\n    border-radius: 3px 0 0 3px;\n}\n\n#content .slide-show .slide-container .prev {\n    left: 5px;\n}\n\n/* Prev arrow positioning to left of slides*/\n#content .slide-show .slide-container .arrow:hover {\n    background-color: rgba(0,0,0,0.8);\n}\n\n/* Footer */\n\nfooter .title {\n    color: var(--white);\n    font-size: 1.5rem;\n}\n\nfooter .text {\n    color: var(--white);\n    font-size: 1rem;\n}\n\nfooter p {\n    padding: 0px;\n    margin: 0px;\n}\n\nfooter button {\n    cursor: pointer;\n}\n\nfooter .social-container {\n    display: flex;\n    column-gap: 8px;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter button.social {\n    width: 48px;\n    height: 48px;\n    background-color: rgba(0, 0, 0, 0.6);\n    border: 2px solid white;\n    border-radius: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter button.social:hover {\n    background-color: black;\n}\n\nfooter button.social img {\n    width: 30px;\n    height: 30px;\n}\n\nfooter .restaurant {\n    background-color: var(--green);\n    padding: 16px 0px;\n    display: flex;\n    justify-content: center;\n    column-gap: 24px;\n}\n\nfooter .restaurant .text {\n    padding-left: 8px;\n}\n\nfooter .restaurant ul {\n    padding: 0px;\n    margin: 0px;\n    list-style: none;\n}\n\nfooter .restaurant .newsletter-container button {\n    background-color: rgba(255, 255, 255, 0.9);\n    border: 1px solid black;\n    border-radius: 8px;\n    display: block;\n    justify-self: center;\n    width: 100px;\n    height: 30px;\n    font-size: 1em;\n    margin-left: 40px;\n    margin-top: 8px;\n}\n\nfooter .restaurant .newsletter-container input[type=\"email\"] {\n    border-radius: 8px;\n    font-size: 1em;\n}\n\nfooter .restaurant .newsletter-container button:hover {\n    background-color: rgba(255, 255, 255, 1);\n}\n\nfooter .github-footer {\n    background-color: var(--light-green);\n    padding: 8px 0px;\n    display: flex;\n    column-gap: 8px;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter .github-footer .text {\n    font-size: 1.5em;\n}",""]);const d=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},213:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=o.base?c[0]+o.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,o);o.byIndex=d,n.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var c=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"887edf39f5d118cd64f3.jpg",n=t.p+"58343ea253613167c66a.svg",o=t.p+"fa4a85219b1e451aabbc.svg",r=t.p+"cace40f86d59be2debfe.svg",a=t.p+"678001e7b52306104fc3.svg",i=t.p+"1a56b48d7fa5d46c4901.jpg",d=t.p+"14b7fb7bbc8f7a1d711b.jpg",c=t.p+"aa7f7e845ce14ca057d2.jpg";var s=t(379),l=t.n(s),p=t(795),u=t.n(p),m=t(569),h=t.n(m),f=t(565),g=t.n(f),x=t(216),b=t.n(x),v=t(589),C=t.n(v),y=t(21),E={};E.styleTagTransform=C(),E.setAttributes=g(),E.insert=h().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=b(),l()(y.Z,E),y.Z&&y.Z.locals&&y.Z.locals,(()=>{const t=document.body,i=document.createElement("img");t.appendChild(i),i.setAttribute("src",e),i.setAttribute("id","background-img");const d=document.createElement("div");d.setAttribute("id","background-tint"),t.appendChild(d);const c=document.createElement("header");t.appendChild(c);const s=document.createElement("h1");c.appendChild(s),s.classList.add("title"),s.textContent="Spring's Clover";const l=document.createElement("nav");c.appendChild(l);const p=document.createElement("a");l.appendChild(p),p.classList.add("nav-link","current-page"),p.setAttribute("href",""),p.textContent="Home";const u=document.createElement("a");l.appendChild(u),u.classList.add("nav-link"),u.setAttribute("href",""),u.textContent="Menu";const m=document.createElement("a");l.appendChild(m),m.classList.add("nav-link"),m.setAttribute("href",""),m.textContent="About";const h=document.createElement("a");l.appendChild(h),h.classList.add("nav-link"),h.setAttribute("href",""),h.textContent="Contact";const f=document.createElement("div");f.setAttribute("id","content"),t.appendChild(f);const g=document.createElement("footer");t.appendChild(g);const x=document.createElement("div");g.appendChild(x),x.classList.add("restaurant");const b=document.createElement("div");x.appendChild(b),b.classList.add("address-container","container");const v=document.createElement("p");b.appendChild(v),v.classList.add("title"),v.textContent="Address";const C=document.createElement("p");b.appendChild(C),C.classList.add("text"),C.textContent="420 Greendale Lane, Reed City";const y=document.createElement("div");x.appendChild(y),y.classList.add("hours-container","container");const E=document.createElement("p");y.appendChild(E),E.classList.add("title"),E.textContent="Hours";const w=document.createElement("ul");y.appendChild(w);const L=document.createElement("li");w.appendChild(L),L.classList.add("text"),L.textContent="Mon-Fri : 8AM-8PM";const k=document.createElement("li");w.appendChild(k),k.classList.add("text"),k.textContent="Sat-Sun : 8AM-4PM";const A=document.createElement("div");x.appendChild(A),A.classList.add("contact-container","container");const S=document.createElement("para");A.appendChild(S),S.classList.add("title"),S.textContent="Contact";const j=document.createElement("ul");A.appendChild(j);const M=document.createElement("li");j.appendChild(M),M.classList.add("text"),M.textContent="Call : +1 (312) 532 5464";const T=document.createElement("li");j.appendChild(T),T.classList.add("text"),T.textContent="Email : support@springsclover.com";const I=document.createElement("div");x.appendChild(I),I.classList.add("newsletter-container","container");const N=document.createElement("p");I.appendChild(N),N.classList.add("title"),N.textContent="Newsletter";const z=document.createElement("form");I.appendChild(z);const F=document.createElement("label");z.appendChild(F),F.textContent="Email : ",F.classList.add("text");const H=document.createElement("input");z.appendChild(H),H.setAttribute("type","email");const P=document.createElement("button");z.appendChild(P),P.classList.add("sign-up"),P.textContent="Sign Up";const O=document.createElement("div");x.appendChild(O),O.classList.add("social-container","container");const B=document.createElement("button");O.appendChild(B),B.classList.add("instagram","social");const Z=document.createElement("img");B.appendChild(Z),Z.setAttribute("src",n);const $=document.createElement("button");O.appendChild($),$.classList.add("youtube","social");const U=document.createElement("img");$.appendChild(U),U.setAttribute("src",o);const R=document.createElement("button");O.appendChild(R),R.classList.add("twitter","social");const J=document.createElement("img");R.appendChild(J),J.setAttribute("src",r);const q=document.createElement("div");g.appendChild(q),q.classList.add("github-footer");const D=document.createElement("p");q.appendChild(D),D.classList.add("text"),D.innerHTML="&#169; Jar'Zeno Jarrett";const _=document.createElement("button");q.appendChild(_),_.classList.add("github","social");const G=document.createElement("img");_.appendChild(G),G.setAttribute("src",a)})(),(()=>{const e={content:document.querySelector("#content"),slideIndex:1},n=()=>{const n=document.createElement("div");e.slideShow.appendChild(n),e.slideContainer=n,n.classList.add("slide-container"),t(0,i),t(1,d),t(2,c);const o=document.createElement("a");n.appendChild(o),e.prevArrow=o,o.classList.add("arrow","prev"),o.innerHTML="&#10094;";const r=document.createElement("a");n.appendChild(r),e.nextArrow=r,r.classList.add("arrow","next"),r.innerHTML="&#10095;"},t=(n,t)=>{const o=document.createElement("div");e.slideContainer.appendChild(o),e[`slide${n}`]=o,o.classList.add("slide",`slide${n}`),o.style.backgroundImage=`url(${t})`},o=()=>{const n=document.createElement("div");e.slideShow.appendChild(n),e.dotContainer=n,n.classList.add("dot-container")},r=n=>{a(e.slideIndex+=n)},a=n=>{let t,o=document.getElementsByClassName("slide");for(n>o.length&&(e.slideIndex=1),n<1&&(e.slideIndex=o.length),t=0;t<o.length;t++)o[t].style.display="none";o[e.slideIndex-1].style.display="block"};return Object.assign({},e,{render:()=>{(()=>{const t=document.createElement("div");e.content.appendChild(t),e.slideShow=t,t.classList.add("slide-show"),n(),o(),a(e.slideIndex)})(),(()=>{const e=document.getElementsByClassName("next")[0],n=document.getElementsByClassName("prev")[0];e.addEventListener("click",(()=>{console.log("nextArrow"),r(1)})),n.addEventListener("click",(()=>{console.log("prevArrow"),r(-1)}))})()}})})().render()})()})();