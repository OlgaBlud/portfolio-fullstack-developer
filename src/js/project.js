import { refs } from './refs';
import Swiper from 'swiper/bundle';

new Swiper(refs.projectsList, {
  direction: 'horizontal',
  loop: true,
  touch: true,
  slidesPerView: 1,
  slideClass: 'project-swiper-slide',
  wrapperClass: 'project-swiper-wrapper',
  slideActiveClass: 'project-swiper-slide-active',
  navigation: {
    nextEl: '.project-slider-next-btn',
    prevEl: '.project-slider-prev-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
