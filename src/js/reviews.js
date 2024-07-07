import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import iziToast from 'izitoast';
import { createReviewsList } from './render-functions';
import 'swiper/css/bundle';

const urlapi = 'https://portfolio-js.b.goit.study/api/reviews';
let reviewsswiper;
const reviewlist = document.querySelector('.reviews-list');
const prevbtnEl = document.querySelector('.js-btn-prev');
const nextbtnEl = document.querySelector('.js-btn-next');
prevbtnEl.classList.add('swiper-button-disabled');

const fetchReviews = async url => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    reviewlist.innerHTML =
      '<li class="not-found-item"><p class="not-found-message">Not found</p></li>';

    iziToast.show({
      title: 'Помилка завантаження!',
      message: 'Повторіть спробу пізніше.',
      messageSize: 'large',
      backgroundColor: '#242527',
      theme: 'dark',
      position: 'center',
      timeout: 4000,
      progressBar: false,
      progressBarColor: '#3b3b3b',
      onOpening: () => {
        nextbtnEl.style.display = 'none';
        prevbtnEl.style.display = 'none';
      },
    });

    return {};
  }
};
fetchReviews(urlapi).then(reviews => {
  reviewlist.innerHTML = createReviewsList(reviews);

  reviewsswiper = new Swiper('.swiper-reviews', {
    modules: [Navigation],
    direction: 'horizontal',
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
      tabKeys: true,
    },
    slidesPerView: 1,
    autoplay: false,
    grabCursor: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    on: {
      slideChange: () => {
        updateButtonsState();
      },
    },
  });
});

const updateButtonsState = () => {
  if (reviewsswiper.isBeginning) {
    prevbtnEl.disabled = true;
    prevbtnEl.classList.add('swiper-button-disabled');
  } else {
    prevbtnEl.disabled = false;
    prevbtnEl.classList.remove('swiper-button-disabled');
  }

  if (reviewsswiper.isEnd) {
    nextbtnEl.disabled = true;
    nextbtnEl.classList.add('swiper-button-disabled');
  } else {
    nextbtnEl.disabled = false;
    nextbtnEl.classList.remove('swiper-button-disabled');
  }
};

nextbtnEl.addEventListener('click', event => {
  event.preventDefault();
  reviewsswiper.slideNext();
  updateButtonsState();
});
prevbtnEl.addEventListener('click', event => {
  event.preventDefault();
  reviewsswiper.slidePrev();
  updateButtonsState();
});

reviewlist.addEventListener('click', event => {
  event.preventDefault();
  let targetElement = event.target;
  let children = reviewlist.children;
  Array.from(children).forEach(child => {
    if (child.contains(targetElement)) {
      child.classList.toggle('click');
    }
  });
});
window.addEventListener('resize', () => {
  updateButtonsState();
});