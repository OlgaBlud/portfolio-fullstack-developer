import{A as i,S as d}from"./assets/vendor-8b9fa5ec.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const e={btnClose:document.querySelector(".close-btn"),btnOpenMenu:document.querySelector(".btn-open-menu"),modalOverlay:document.querySelector(".modal-overlay"),modal:document.querySelector(".modal"),close1:document.querySelector(".close1"),close2:document.querySelector(".close2"),close3:document.querySelector(".close3"),close4:document.querySelector(".close4"),close5:document.querySelector(".close5"),menuTablet:document.querySelector(".menu"),listMenu:document.querySelector(".list-menu"),skillsList:document.querySelector(".skills-list"),aboutMeList:document.querySelector(".about-me-list"),skillsSwiper:document.querySelector(".skills-swiper")};new i(e.aboutMeList,{openOnInit:[0]});new d(e.skillsSwiper,{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,width:260},768:{slidesPerView:3,width:600},1440:{slidesPerView:5,width:1e3}}});e.btnOpenMenu.addEventListener("click",()=>{e.modalOverlay.classList.add("show")});e.btnClose.addEventListener("click",()=>{e.modalOverlay.classList.remove("show")});e.close1.addEventListener("click",()=>{setTimeout(e.modalOverlay.classList.remove("show"),2e3)});e.close2.addEventListener("click",()=>{e.modalOverlay.classList.remove("show")});e.close3.addEventListener("click",()=>{e.modalOverlay.classList.remove("show")});e.close4.addEventListener("click",()=>{e.modalOverlay.classList.remove("show")});e.close5.addEventListener("click",()=>{e.modalOverlay.classList.remove("show")});let a=e.modalOverlay.classList.contains("show");console.log(a);e.menuTablet.addEventListener("click",c=>{e.modalOverlay.classList.toggle("show")});
//# sourceMappingURL=commonHelpers.js.map
