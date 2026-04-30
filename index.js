import{a as g,S as d,i as c}from"./assets/vendor-D1AWmRWP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function f(i){return g.get("https://pixabay.com/api/",{params:{key:"55643429-294578a097483c19c7f77277b",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:"21"}}).then(r=>r.data)}const p=new d(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});function y(i){const r=i.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:l,comments:n,downloads:u})=>`<li class="gallery-item">
            <a class="gallery-link" href="${o}"><img class="gallery-img" src="${a}" alt="${e}"></a>
            <div class="gallery-info">
            <div class="gallery-info-part">
            <h3 class="gallery-title">Likes</h3>
            <p class="gallery-text">${t}</p>
            </div>
            <div class="gallery-info-part">
            <h3 class="gallery-title">Views</h3>
            <p class="gallery-text">${l}</p>
            </div>
            <div class="gallery-info-part">
            <h3 class="gallery-title">Comments</h3>
            <p class="gallery-text">${n}</p>
            </div>
            <div class="gallery-info-part"> 
            <h3 class="gallery-title">Downloads</h3>
            <p class="gallery-text">${u}</p>
            </div>
            </div>
          </li>`).join("");s.galleryList.innerHTML=r,p.refresh()}function m(){s.galleryList.innerHTML=""}function h(){s.loader.classList.add("is-active")}function L(){s.loader.classList.remove("is-active")}const s={searchForm:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function v(i){i.preventDefault();const r=i.target.elements.search_text.value.trim();if(!r){c.error({message:"The search field must be filled in!",position:"topRight"});return}m(),h(),f(r).then(a=>{if(a.totalHits===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(a.hits)}).catch(a=>{console.log(a),c.error({message:`${a}`,position:"topRight"})}).finally(()=>L()),s.searchForm.reset()}s.searchForm.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
