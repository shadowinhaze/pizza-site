(()=>{var e={874:()=>{const e=document.querySelector(".button-auth"),t=document.querySelector(".button-out"),a=document.querySelector(".user-name"),n=document.querySelector(".modal-auth"),s=document.querySelector(".close-auth"),r=document.getElementById("logInForm"),c=document.getElementById("login"),i=document.getElementById("password"),d=s=>{e.classList.add("is-hidden"),t.classList.remove("is-hidden"),a.classList.remove("is-hidden"),a.innerText=s.login,n.classList.remove("is-open")};r.addEventListener("submit",(e=>{e.preventDefault();const t={login:c.value,pass:i.value};(e=>{localStorage.setItem("user",JSON.stringify(e))})(t),d(t)})),e.addEventListener("click",(()=>{n.classList.toggle("is-open")})),s.addEventListener("click",(()=>{n.classList.toggle("is-open")})),t.addEventListener("click",(()=>{localStorage.getItem("user")&&localStorage.removeItem("user"),e.classList.remove("is-hidden"),t.classList.add("is-hidden"),a.classList.add("is-hidden"),a.innerText=""})),(()=>{const e=JSON.parse(localStorage.getItem("user"));e&&d(e)})()},51:()=>{if(window.location.pathname.includes("restaurant")){const e=localStorage.getItem("restaurant"),t=JSON.parse(e),a=()=>{const e=document.querySelector(".restaurant-title"),a=document.querySelector(".card-info .rating"),n=document.querySelector(".card-info .price"),s=document.querySelector(".card-info .category");e.innerText=`${t.name}`,a.innerText=`${t.stars}`,n.innerText=`От ${t.price} ₽`,s.innerText=`${t.kitchen}`};e?(a(),async function(){const e=await fetch(`https://pizza-site-720d3-default-rtdb.europe-west1.firebasedatabase.app/db/${t.products}`),a=await e.json();n(a)}()):window.location.href="./";const n=e=>{const t=document.querySelector(".cards-menu");e.forEach((({description:e,id:a,image:n,name:s,price:r})=>{const c=document.createElement("div");c.classList.add("card"),c.innerHTML=`\n                <img src="./assets/${n}" alt="${s}" class="card-image" />\n                <div class="card-text">\n                    <div class="card-heading">\n                        <h3 class="card-title card-title-reg">${s}</h3>\n                    </div>\n                    <div class="card-info">\n                        <div class="ingredients">${e}</div>\n                    </div>\n                    <div class="card-buttons">\n                        <button class="button button-primary button-add-cart">\n                            <span class="button-card-text">В корзину</span>\n                            <span class="button-cart-svg"></span>\n                        </button>\n                        <strong class="card-price-bold">${r} ₽</strong>\n                    </div>\n                </div>\n            `,t.appendChild(c)}))}}},819:()=>{if(!window.location.pathname.includes("restaurant")){(async()=>{const t=await fetch("https://pizza-site-720d3-default-rtdb.europe-west1.firebasedatabase.app/db/partners.json"),a=await t.json();e(a)})();const e=e=>{const t=document.querySelector(".cards-restaurants");e.forEach((e=>{const{image:a,kitchen:n,name:s,price:r,products:c,stars:i,time_of_delivery:d}=e,o=document.createElement("a");o.setAttribute("href","restaurant.html"),o.classList.add("card","card-restaurant"),o.innerHTML=`\n            <img src="./assets/${a}" alt="Доставка - ${s}" class="card-image" />\n            <div class="card-text">\n                <div class="card-heading">\n                    <h3 class="card-title">${s}</h3>\n                    <span class="card-tag tag">${d} мин</span>\n                </div>\n                <div class="card-info">\n                    <div class="rating">${i}</div>\n                    <div class="price">От ${r} ₽</div>\n                    <div class="category">${n}</div>\n                </div>\n            </div>\n            `,t.appendChild(o),o.addEventListener("click",(t=>{t.preventDefault(),localStorage.setItem("restaurant",JSON.stringify(e)),window.location.href="./restaurant.html"}))}))}}}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";a(874),a(51),a(819)})()})();