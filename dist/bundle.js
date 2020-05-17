!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var i=function(){return'  <div class="logo">\n  <a href="/cart-app-vanilla"><i class="logo-img fas fa-star"></i></a>\n</div>\n<ul class="nav-links">\n    <li class="nav-link search">\n        <input type="text" id="search-bar" placeholder="search">\n    </li>\n    <li id="cart-link" class="cart nav-link" href="#cart">\n        <i id="cart-add" class="fas fa-shopping-cart">\n      </i></li>\n</ul>'};function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"displayList",value:function(t){localStorage.getItem("Cart")&&JSON.parse(localStorage.getItem("Cart")).length>0&&this.setCartCount(JSON.parse(localStorage.getItem("Cart")).length);for(var n=document.querySelector("#shopping-items"),i=n.lastElementChild;i;)n.removeChild(i),i=n.lastElementChild;t.forEach((function(t){e.addToProductList(t)}))}},{key:"discountCalculation",value:function(t){t.map((function(e){e.discountedPrice=e.price-e.discount,e.discountPercentage=e.discount/e.price*100}));var n=a(t);return e.displayList(t),n}},{key:"addToProductList",value:function(e){var t=document.querySelector("#shopping-items"),n=document.getElementById(e.id);n&&t.removeChild(n),document.querySelector("#cart-total").style.display="none";var i=document.createElement("div");i.className="product-container",i.id=e.id,i.innerHTML='\n         <div class="product-image-container"><img alt="No preview Available" class="product-image" src='.concat(e.img_url,'></div>\n         <div class="product-name">').concat(e.name,'</div>\n         <div class="prices">\n         <div class="discount-price"><i class="fas fa-rupee-sign">').concat(e.discountedPrice,'</i></div>\n         <div class="product-price">').concat(e.price,'</div>\n         <div class="discount-percentage">').concat(e.discount,' % Off</div>\n         </div>\n         <button class="addtocartbtn" id=').concat(e.id,">Add to Cart</button>\n        "),t.appendChild(i)}},{key:"sortItemList",value:function(e,t){1==e?t=t.sort((function(e,t){return e.discountedPrice-t.discountedPrice})):2==e?t=t.sort((function(e,t){return t.discountedPrice-e.discountedPrice})):3==e&&(t=t.sort((function(e,t){return t.discountPercentage-e.discountPercentage}))),this.displayList(t)}},{key:"addToCart",value:function(e,t){var n=t.find((function(t){return t.id==e&&t}));if("undefined"!=typeof window&&localStorage){var i=localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):[];if(i.length>0){var a=i.findIndex((function(e){return e.id===n.id}));-1!==a?i[a].quantity+=1:(n.quantity=1,i.push(n))}else n.quantity=1,i.push(n);localStorage.setItem("Cart",JSON.stringify(i)),this.setCartCount(i.length)}}},{key:"searchProduct",value:function(t){var n=document.getElementById("search-bar").value,i=a(t);n&&""!==n&&(i=i.filter((function(e){return e.name.toLowerCase()===n.toLowerCase()}))),e.displayList(i)}},{key:"setCartCount",value:function(e){var t=document.getElementById("cart-add");t.hasChildNodes()&&t.removeChild(t.childNodes[0]);var n=document.createElement("input");n.type="text",n.className="cart-count",n.value=e,t.appendChild(n)}},{key:"callSortFunction",value:function(e){for(var t=document.getElementsByName("sort"),n=0;n<t.length;n++)if(t[n].checked){this.sortItemList(t[n].value,e);break}}},{key:"filterItemsArray",value:function(t,n,i){t=t.filter((function(e){return e.discountedPrice>=n&&e.discountedPrice<=i})),e.displayList(t)}}],(n=null)&&o(t.prototype,n),i&&o(t,i),e}();function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"removeItem",value:function(e){var t=localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):[];t=t.filter((function(t){return t.id!=e})),localStorage.setItem("Cart",JSON.stringify(t));var n=document.querySelector("#cart-items"),i=document.getElementById("cart"+e);i&&n.removeChild(i);var a=document.getElementsByClassName("cart-count"),r=document.getElementById("cart-add");if(0===t.length){var o=document.createElement("div");o.id="no-item",o.innerHTML="<h3>No item in the cart</h3>",n.appendChild(o),a&&r.removeChild(r.childNodes[0])}else c.setCartCount(t.length);this.cartTotal()}},{key:"increaseQuantity",value:function(e){var t=localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):[];t=t.map((function(t){return t.quantity=t.id==e?t.quantity+=1:t.quantity,t})),localStorage.setItem("Cart",JSON.stringify(t)),this.openCartPage()}},{key:"decreaseQuantity",value:function(e){var t=this,n=localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):[];n.forEach((function(n){n.id==e&&(1===n.quantity&&t.removeItem(n.id),n.quantity-=1)})),n=n.filter((function(e){return 0!==e.quantity})),localStorage.setItem("Cart",JSON.stringify(n)),this.openCartPage()}},{key:"cartTotal",value:function(){var e=localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):[];if(e.length>0){var t=document.querySelector("#cart-total");t.style.display="block",t&&t.removeChild(t.childNodes[0]);var n=document.createElement("div"),i=0,a=0;e.forEach((function(e){i+=e.price*e.quantity,a+=e.discount*e.quantity})),n.innerHTML='\n        <div class="total-header">PRICE DETAILS</div>\n        <div class="total-body">\n        <div class="price-text">\n        <div class="total-price-text">Price('.concat(e.length,' items) :</div>\n        <div class="discount-text">Discount :</div>\n        </div>\n        <div class="total-prices">\n        <div class="total-price"><i class="fas fa-rupee-sign">').concat(i,'</i></div>\n        <div class="discount-price"><i class="fas fa-rupee-sign">').concat(a,'</i></div>\n        </div>\n        </div>\n        <div class="total-footer">\n        <div class="net-amount-text">Total Payable :</div><div class="net-amount"><i class="fas fa-rupee-sign">').concat(i-a,"</i></div>\n        </div>"),t.appendChild(n)}else document.querySelector("#cart-total").style.display="none"}},{key:"openCartPage",value:function(){var t=document.querySelector("#cart-items");t.style.display="block",document.getElementById("main-body").style.display="none";var n=localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):[];if(n.length<1){if(!document.getElementById("no-item")){var i=document.createElement("div");i.id="no-item",i.innerHTML="<h3>No item in the cart</h3>",t.appendChild(i)}}else n.forEach((function(e){var n=document.getElementById("cart"+e.id),i=document.getElementById("no-item");i&&t.removeChild(i),n&&t.removeChild(n);var a=document.createElement("div");a.className="cart-container",a.id="cart"+e.id,a.innerHTML='\n             <div class="cart-image-container"><img class="product-image" src='.concat(e.img_url,'></div>\n             <div class="cart-details">\n             <div class="product-name">').concat(e.name,'</div>\n             <div class="rest-details">\n             <div class="cart-prices">\n             <div class="discount-price"><i class="fas fa-rupee-sign">').concat(e.discountedPrice,'</i></div>\n             <div class="product-price">').concat(e.price,'</div>\n             <div class="discount-percentage">').concat(e.discount,' % Off</div>\n             </div>\n             <div class="quantity-control">\n            <button class="decrement" id=').concat(e.id,'>-</button>\n          <input class="box" value = ').concat(e.quantity,' type="text" readonly>\n          <button class="increment" id=').concat(e.id,'>+</button></div>\n          <div class="remove-div">\n          <a class="remove" id=').concat(e.id,">REMOVE</a></div> \n          </div>  \n          </div>        \n            "),t.appendChild(a)}));e.removeCartItemButtonClick(),e.increaseQuantityButtonClick(),e.decreaseQuantityButtonClick(),e.cartTotal()}},{key:"removeCartItemButtonClick",value:function(){for(var t=document.getElementsByClassName("remove"),n=function(n){t[n].addEventListener("click",(function(){t[n]?e.removeItem(t[n].id):t.length>0&&e.removeItem(t[0].id)}))},i=0;i<t.length;i++)n(i)}},{key:"increaseQuantityButtonClick",value:function(){for(var t=document.getElementsByClassName("increment"),n=function(n){t[n].addEventListener("click",(function(){e.increaseQuantity(t[n].id)}))},i=0;i<t.length;i++)n(i)}},{key:"decreaseQuantityButtonClick",value:function(){for(var t=document.getElementsByClassName("decrement"),n=function(n){t[n].addEventListener("click",(function(){e.decreaseQuantity(t[n].id)}))},i=0;i<t.length;i++)n(i)}}],(n=null)&&s(t.prototype,n),i&&s(t,i),e}(),u=[{id:9090,name:"Item1",price:200,discount:10,category:"fiction",img_url:"http://lorempixel.com/500/600/technics/"},{id:9091,name:"Item2",price:250,discount:15,category:"literature",img_url:"http://lorempixel.com/500/600/technics/"},{id:9092,name:"Item3",price:320,discount:5,category:"literature",img_url:"http://lorempixel.com/500/600/technics/"},{id:9093,name:"Item4",price:290,discount:0,category:"thriller",img_url:"http://lorempixel.com/500/600/technics/"},{id:9094,name:"Item1",price:500,discount:25,category:"thriller",img_url:"http://lorempixel.com/500/600/technics/"},{id:9095,name:"Item2",price:150,discount:5,category:"literature",img_url:"http://lorempixel.com/500/600/technics/"},{id:9096,name:"Item3",price:700,discount:22,category:"literature",img_url:"http://lorempixel.com/500/600/technics/"},{id:9097,name:"Item4",price:350,discount:18,category:"fiction",img_url:"http://lorempixel.com/500/600/technics/"}],d=function(e){var t=this,n=0,i=0,a=document.getElementById(e),r=a.querySelector(".slider-touch-left"),o=a.querySelector(".slider-touch-right"),c=a.querySelector(".slider-line span"),s=parseFloat(a.getAttribute("se-min")),l=parseFloat(a.getAttribute("se-max")),u=s;a.hasAttribute("se-min-value")&&(u=parseFloat(a.getAttribute("se-min-value")));var d=l;a.hasAttribute("se-max-value")&&(d=parseFloat(a.getAttribute("se-max-value"))),u<s&&(u=s),d>l&&(d=l),u>d&&(u=d);var f=0;a.getAttribute("se-step")&&(f=Math.abs(parseFloat(a.getAttribute("se-step"))));t.slider=a,t.reset=function(){r.style.left="0px",o.style.left=a.offsetWidth-r.offsetWidth+"px",c.style.marginLeft="0px",c.style.width=a.offsetWidth-r.offsetWidth+"px",n=0,i=0},t.setMinValue=function(e){var t=(e-s)/(l-s);r.style.left=Math.ceil(t*(a.offsetWidth-(r.offsetWidth+26)))+"px",c.style.marginLeft=r.offsetLeft+"px",c.style.width=o.offsetLeft-r.offsetLeft+"px",a.setAttribute("se-min-value",e)},t.setMaxValue=function(e){var t=(e-s)/(l-s);o.style.left=Math.ceil(t*(a.offsetWidth-(r.offsetWidth+26))+26)+"px",c.style.marginLeft=r.offsetLeft+"px",c.style.width=o.offsetLeft-r.offsetLeft+"px",a.setAttribute("se-max-value",e)},t.reset();var m=a.offsetWidth-o.offsetWidth,v=null,g=c.offsetWidth-26;function p(e){e.preventDefault();var t=e;e.touches&&(t=e.touches[0]),i=this===r?r.offsetLeft:o.offsetLeft,n=t.pageX-i,v=this,document.addEventListener("mousemove",y),document.addEventListener("mouseup",h),document.addEventListener("touchmove",y),document.addEventListener("touchend",h)}function y(e){var s=e;(e.touches&&(s=e.touches[0]),i=s.pageX-n,v===r?(i>o.offsetLeft-v.offsetWidth+10?i=o.offsetLeft-v.offsetWidth+10:i<0&&(i=0),v.style.left=i+"px"):v===o&&(i<r.offsetLeft+r.offsetWidth-10?i=r.offsetLeft+r.offsetWidth-10:i>m&&(i=m),v.style.left=i+"px"),c.style.marginLeft=r.offsetLeft+"px",c.style.width=o.offsetLeft-r.offsetLeft+"px",C(),a.getAttribute("on-change"))&&new Function("min, max",a.getAttribute("on-change"))(a.getAttribute("se-min-value"),a.getAttribute("se-max-value"));t.onChange&&t.onChange(a.getAttribute("se-min-value"),a.getAttribute("se-max-value"))}function h(e){(document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",h),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",h),v=null,C(),a.getAttribute("did-changed"))&&new Function("min, max",a.getAttribute("did-changed"))(a.getAttribute("se-min-value"),a.getAttribute("se-max-value"));t.didChanged&&t.didChanged(a.getAttribute("se-min-value"),a.getAttribute("se-max-value"))}function C(){var e=(c.offsetWidth-26)/g,t=(n=c.offsetLeft/g)+e,n=n*(l-s)+s;t=t*(l-s)+s;if(0!==f){var i=Math.floor(n/f);n=f*i,i=Math.floor(t/f),t=f*i}a.setAttribute("se-min-value",n),a.setAttribute("se-max-value",t)}t.setMinValue(u),t.setMaxValue(d),r.addEventListener("mousedown",p),o.addEventListener("mousedown",p),r.addEventListener("touchstart",p),o.addEventListener("touchstart",p)},f=[];function m(e){for(var t=document.getElementsByClassName("addtocartbtn"),n=function(n){t[n].addEventListener("click",(function(){c.addToCart(t[n].id,e)}))},i=0;i<t.length;i++)n(i)}document.getElementById("header").innerHTML=i(),document.addEventListener("DOMContentLoaded",(function(){m(f=c.discountCalculation(u)),document.getElementById("sortApply").addEventListener("click",(function(){c.callSortFunction(f)})),document.getElementById("cart-link").addEventListener("click",l.openCartPage);var e=document.getElementById("sortHighToLow"),t=document.getElementById("sortLowToHigh"),n=document.getElementById("sortDiscount");e.addEventListener("click",(function(){c.sortItemList(2,f),m(f)})),t.addEventListener("click",(function(){c.sortItemList(1,f),m(f)})),n.addEventListener("click",(function(){c.sortItemList(3,f),m(f)})),document.getElementById("search-bar").addEventListener("keyup",(function(){setTimeout(c.searchProduct(f),1500)}));document.getElementById("filter");var i=new d("my-slider"),a=0,r=1e3;i.onChange=function(e,t){a=e,r=t,document.getElementById("result").innerHTML='Min Price:  <i class="fas fa-rupee-sign">'.concat(e,'</i>   Max Price:  <i class="fas fa-rupee-sign">').concat(t,"</i>")},i.didChanged=function(e,t){document.getElementById("result").innerHTML='Min Price:  <i class="fas fa-rupee-sign">'.concat(e,'</i>   Max Price:  <i class="fas fa-rupee-sign">').concat(t,"</i>")};var o=new d("modal-slider");o.onChange=function(e,t){a=e,r=t,document.getElementById("result-modal").innerHTML='Min Price:  <i class="fas fa-rupee-sign">'.concat(e,'</i>   Max Price:  <i class="fas fa-rupee-sign">').concat(t,"</i>")},o.didChanged=function(e,t){document.getElementById("result-modal").innerHTML='Min Price:  <i class="fas fa-rupee-sign">'.concat(e,'</i>   Max Price:  <i class="fas fa-rupee-sign">').concat(t,"</i>")},document.getElementById("filterApplyBtn").addEventListener("click",(function(){c.filterItemsArray(f,a,r),m(f)})),document.getElementById("filterApply").addEventListener("click",(function(){c.filterItemsArray(f,a,r),m(f)}))}))},function(e,t){}]);