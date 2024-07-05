import Swiper from 'swiper';
import axios from 'axios';
import {createReviewsList} from './render-functions';
import 'swiper/css/bundle';
const urlapi = 'https://portfolio-js.b.goit.study/api/reviews';

const reviewlist = document.querySelector('.reviews-list');

var mySwiper = new Swiper('.swiper-container', {
  // Налаштування слайдера
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: false,
  // Додайте навігаційні кнопки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const fetchReviews = async url => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Помилка завантаження даних:', error);

    return {};
  }
};
fetchReviews(urlapi).then(reviews => {
  console.log('Отримані відгуки:', reviews);
  reviewlist.innerHTML = createReviewsList(reviews);
});