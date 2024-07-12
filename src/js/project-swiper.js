import Swiper from 'swiper';

const swiper = document.querySelector('.swiper-container');
const leftBtn = document.querySelector('.proj-slider-left-btn');
const rightBtn = document.querySelector('.proj-slider-right-btn');

new Swiper(swiper, {
  slidesPerView: 1,
  navigation: {
    nextEl: rightBtn,
    prevEl: leftBtn,
  },
  spaceBetween: 16,
  breakpoints: {
    768: { spaceBetween: 64 },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    invert: true,
  },
});
