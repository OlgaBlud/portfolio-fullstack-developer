// import Swiper from 'swiper';
import { refs } from './refs';
import Swiper from 'swiper/bundle';

new Swiper(refs.skillsSwiper, {
  direction: 'horizontal',
  loop: true,

  slidesPerView: 2,
  width: 260,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      width: 600,
    },
    1440: { slidesPerView: 6, width: 1200 },
  },
});
