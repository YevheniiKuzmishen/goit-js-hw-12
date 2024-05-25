import{S as y,a as g,i as f}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();let h=new y(".gallery a");const b=document.querySelector(".imagesFetch");function w(s){const t=s.reduce((n,r)=>n+=`
          <li class="imagesFetch-item">
          <div class="gallery">
                 <a href="${r.largeImageURL}">
                    <img src="${r.webformatURL}" alt="1"/>
                 </a>
          </div>
          <div class="imagesFetch-item-description">
              <ul class="description-list">
              <li class="description-list-item">
                  <p class="item-name">Likes</p>
                  <span>${r.likes}</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Views</p>
                  <span>${r.views}900290</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Comments</p>
                  <span>${r.comments}229</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Downloads</p>
                  <span>${r.downloads}610937</span>
              </li>
              </ul>
          </div>
          </li>  `,"");b.insertAdjacentHTML("beforeend",t),h.refresh()}async function d(s,t){const n="43947691-9c404bec92b20484d2e4a6bea",r=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:!0,per_page:15,page:t}),{data:e}=await g.get(`https://pixabay.com/api/?key=${n}&q=${s}&${r}`);return e}const v=document.querySelector(".form"),L=document.querySelector(".imagesFetch"),o=document.querySelector(".loader"),a=document.querySelector(".btn"),p=document.querySelector(".form-input");let l=1;const c=s=>{f.error({title:"Error",message:s,position:"topRight"})},u=(s,t)=>s.length===0?(c("Sorry, there are no images matching your search query. Please try again!"),a.style.display="none",!1):(w(s.hits),a.style.display=s.hits.length<15?"none":"block",s.hits.length<15&&c("We're sorry, there are no more posts to load"),a.dataset.inputValue=t,!0);v.addEventListener("submit",async s=>{s.preventDefault();const t=p.value.trim();if(L.innerHTML="",a.style.display="none",t===""){c("Enter search images value");return}try{o.style.display="block",l=1;const n=await d(t,l);u(n,t)&&(o.style.display="none")}catch{c("Something went wrong. Please try again!"),o.style.display="none"}p.value=""});a.addEventListener("click",async s=>{s.preventDefault(),l++,o.style.display="block";try{const t=s.currentTarget.dataset.inputValue,n=await d(t,l);if(u(n,t)){o.style.display="none";const e=document.querySelectorAll(".imagesFetch-item")[0].getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})}}catch{c("Something went wrong. Please try again!"),o.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
