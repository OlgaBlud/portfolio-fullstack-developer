// import Swiper from 'swiper';
import { refs } from './refs';
import Swiper from 'swiper/bundle';

new Swiper(refs.skillsSwiper, {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      width: 260,
    },
    768: {
      slidesPerView: 3,
      width: 600,
    },
    1440: {
      slidesPerView: 5,
      width: 1000,
    },
  },
});
