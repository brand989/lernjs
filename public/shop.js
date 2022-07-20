(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),i=n.n(r),s=n(645),o=n.n(s)()(i());o.push([e.id,"body {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nheader {\r\n    background: linear-gradient(to right, #cb11ab 0, #481173 100%) no-repeat;\r\n    justify-content: right;\r\n    min-height: 50px;\r\n    position: relative;\r\n\r\n}\r\n\r\nmain {\r\n    padding: 15px;\r\n}\r\n\r\n.openBasket {\r\n    display: none;\r\n}\r\n\r\n.basket {\r\n    position: absolute;\r\n    color: white;\r\n    background-color: #eb6fd6;\r\n    right: 10px;\r\n    top: 50px;\r\n    padding: 15px;\r\n}\r\n\r\n.button {\r\n    background-color: antiquewhite;\r\n    border-radius: 3px;\r\n    box-shadow: inset 5px black;\r\n    display: inline-block;\r\n    padding: 5px;\r\n    margin: 3px;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n.button:active {\r\n    background-color: rgb(248, 207, 153);\r\n}\r\n\r\n.button-header {\r\n    float: right;\r\n    margin: 10px;\r\n}\r\n\r\n\r\n.catalog {\r\n    display: flex;\r\n}\r\n\r\n.catalog-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    margin-right: 10px;\r\n    border: 1px solid black;\r\n    padding: 5px;\r\n}\r\n\r\nform {\r\n    width: 500px;\r\n    border: solid 1px black;\r\n    margin: 10px;\r\n}\r\n\r\nfieldset {\r\n    border: 0px;\r\n    \r\n}\r\n\r\ninput {\r\n    width: 100%;\r\n    outline:none;\r\n}\r\n\r\n.red-border{\r\n    border: solid 1px red;\r\n}",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&o[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},o=[],a=0;a<e.length;a++){var c=e[a],d=r.base?c[0]+r.base:c[0],u=s[d]||0,l="".concat(d," ").concat(u);s[d]=u+1;var p=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var m=i(h,r);r.byIndex=a,t.splice(a,0,{identifier:l,updater:m,references:1})}o.push(l)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var s=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var a=n(s[o]);t[a].references--}for(var c=r(e,i),d=0;d<s.length;d++){var u=n(s[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{constructor(e,t,n){var r;(r="text")in this?Object.defineProperty(this,r,{value:"",enumerable:!0,configurable:!0,writable:!0}):this.text="",this.text=e,this.clss=t,this.clb=n}onClick(e,t){e(t)}getHTML(){const e=document.createElement("div");return e.innerHTML=`<span>${this.text}</span>`,e.classList.add("button"),e.classList.add(this.clss),e}render(e){const t=this.getHTML();e.appendChild(t),t.addEventListener("click",(()=>this.onClick(this.clb)))}}var t=n(379),r=n.n(t),i=n(795),s=n.n(i),o=n(569),a=n.n(o),c=n(565),d=n.n(c),u=n(216),l=n.n(u),p=n(589),h=n.n(p),m=n(426),f={};function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}f.styleTagTransform=h(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=l(),r()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;class v{constructor(e,t){this.name=e,this.price=t,this.count=1}render(){let e=document.querySelector(".catalog"),t=document.createElement("div");e.appendChild(t),t.className="catalog-items";let n=document.createElement("div");n.innerHTML=`Название: ${this.name}`,t.appendChild(n);let r=document.createElement("div");r.innerHTML=`Стоимость: ${this.price} рублей`,t.appendChild(r),new y("Купить","catalog-button",(e=>{(new x).addProducts(e)}),this).render(t)}inc(){this.count++}dec(){this.count>0&&this.count--}}class g{constructor(...e){b(this,"_products",[]),this._products.push(...e)}render(){this._products.forEach((e=>e.render()))}}class x extends g{constructor(...e){if(super(...e),b(this,"_products",[]),x._instance)return x._instance;x._instance=this,this.init()}init(){let t=document.querySelector("header"),n=document.createElement("div");n.className="basket",n.classList.add("openBasket"),new e("корзина","button-header",(function(){n.classList.toggle("openBasket")})).render(t),t.appendChild(n);let r=document.createElement("div");r.innerHTML="Корзина пуста",n.appendChild(r)}countBasketPrice(){return this._products.reduce((function(e,t){return e+t.price*t.count}),0)}findProduct(e){return this._products.filter((t=>e.name==t.name)).length>0}addProducts(e){this.findProduct(e)?e.inc():this._products.push(e),this.render()}decProducts(e){if(!this.findProduct(e))return e;1==e.count?this._products.splice(this._products.indexOf(e),1):e.dec(),this.render()}deleteProduct(e){if(!this.findProduct(e))return e;e.count=1,this._products.splice(this._products.indexOf(e),1),this.render()}render(){let e=document.querySelector(".basket"),t=document.createElement("div");if(e.innerHTML="",e.appendChild(t),t.className="basket-list",this._products.forEach((e=>{let n=document.createElement("div");n.innerHTML=`${e.name} по цене ${e.price} в количестве  ${e.count}`,t.appendChild(n),new y("+","butten-count",this.addProducts.bind(this),e).render(n),new y("-","butten-count",this.decProducts.bind(this),e).render(n),new y("Удалить товар","butten-count",this.deleteProduct.bind(this),e).render(n)})),this._products.length){let t=document.createElement("div");t.innerHTML=`Итого стоимость ${this.countBasketPrice()}`,e.appendChild(t)}else{let t=document.createElement("div");t.innerHTML="Корзина пуста",e.appendChild(t)}}}class y extends e{constructor(e,t,n,r){super(e,t,n),this.obj=r}render(e){const t=this.getHTML();e.appendChild(t),t.addEventListener("click",(()=>this.onClick(this.clb,this.obj)))}}new x,(new class extends g{constructor(...e){super(...e),this.numProduct=0,this.availableProducts=!0}addCatalogList(e){this._products.push(e)}async fetchPoducts(){let e=await fetch("http://localhost:3000/database.json"),t=await e.json();(await t.data).forEach((e=>{this._products.push(new v(e.name,e.price))})),this.render()}render(){let t=document.querySelector(".catalog");t.innerHTML="";for(let e=0;e<this.numProduct+2;e++)this._products[e]&&this._products[e].render();this.numProduct+=2,this.availableProducts=this._products[this.numProduct],this.availableProducts&&new e("Добавить еще","button-add",this.render.bind(this)).render(t)}}).fetchPoducts();class w{constructor(e,t,n){b(this,"value",""),b(this,"type",""),b(this,"name",""),b(this,"valid",!0),this.value,this.type=e,this.name=t,this.regexp=n}isValid(e){const t=this.regexp;return e.match(t)}render(e){e=document.querySelector("form");const t=document.createElement("fieldset");"text"==this.type&&(t.innerHTML=`<legend>${this.name}</legend>`);const n=document.createElement("input");n.setAttribute("type",this.type),n.setAttribute("name",this.name),this.valid?n.classList.remove("red-border"):(n.classList.add("red-border"),console.log("red-border")),n.addEventListener("input",(e=>{this.isValid(n.value)?n.classList.remove("red-border"):n.classList.add("red-border")})),e.appendChild(t),t.appendChild(n)}}const L=new w("text","name",/^[a-zA-Z]+$/),P=new w("text","phone",/^\+[78]\(\d{3}\)\d{3}-\d{4}\b/),E=new w("text","mail",/^[a-z]+[\.\-]*?[a-z]+\@[a-z]+\.ru/),C=new w("submit","button");new class{constructor(...e){b(this,"inputs",[]),this.inputs.push(...e)}render(){const e=document.createElement("form"),t=document.querySelector(".feedback");e.setAttribute("action","Post"),t.appendChild(e),e.innerHTML="\n            <p>Заполните форму</p>\n        ",this.inputs.forEach((e=>e.render())),document.createElement("input").setAttribute("type","submit")}}(L,P,E,C).render()})()})();