// import Swiper from 'swiper';
import { refs } from './refs';
import Swiper from 'swiper/bundle';

new Swiper(refs.skillsSwiper, {
  direction: 'horizontal',
  loop: true,

  slidesPerView: 2,
  width: 260,
  //   spaceBetween: 0,
  //   slidesPerGroup: 2,

  navigation: {
    nextEl: '.swiper-button-next',
  },
});
