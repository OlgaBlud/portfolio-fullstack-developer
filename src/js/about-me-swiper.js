import { refs } from './refs';
import Swiper from 'swiper/bundle';

new Swiper(refs.skillsSwiper, {
  direction: 'horizontal',
  loop: true,
  touch: true,
  slidesPerView: 2,
  slideClass: 'about-me-skills-item',
  wrapperClass: 'about-me-skills-list',
  slideActiveClass: 'about-me-skills-item-active',
  navigation: {
    nextEl: '.about-me-skills-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
