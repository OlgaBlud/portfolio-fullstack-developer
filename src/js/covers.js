// import { refs } from "./refs";

// console.log(refs.coversSection)
// console.log(refs.marqueeLine)

// // refs.marqueeLine.classList.add('marquee_animation')

// document.addEventListener('DOMContentLoaded', function () {
//     const refs = {
//         coversSection: document.querySelector('.covers'),
//         marqueeLine: document.querySelector('.marquee__line')
//     };

//     function isElementInViewport(el) {
//         const rect = el.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     function checkVisibility() {
//         if (isElementInViewport(refs.coversSection)) {
//             refs.marqueeLine.classList.add('marquee_animation');
//             window.removeEventListener('scroll', checkVisibility);
//         }
//     }

//     if (refs.coversSection) {
//         window.addEventListener('scroll', checkVisibility);
//         checkVisibility(); // Перевірка при завантаженні сторінки
//     }
// });

import { refs } from './refs';

console.log(refs.coversSection);
console.log(refs.marqueeLine);

// refs.marqueeLine.classList.add('marquee_animation')

// document.addEventListener('DOMContentLoaded', function () {
//     const refs = {
//         coversSection: document.querySelector('.covers'),
//         marqueeLine: document.querySelector('.marquee__line')
//     };

//     function isElementInViewport(el) {
//         const rect = el.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     function checkVisibility() {
//         if (isElementInViewport(refs.coversSection)) {
//             refs.marqueeLine.classList.add('marquee_animation');
//             window.removeEventListener('scroll', checkVisibility);
//         }
//     }

//     if (refs.coversSection) {
//         window.addEventListener('scroll', checkVisibility);
//         checkVisibility(); // Перевірка при завантаженні сторінки
//     }
// });

function isPartiallyInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  console.log('Vert:', vertInView, 'Hor:', horInView);
  return vertInView && horInView;
}

function animateElementOnScroll() {
  const covers = document.querySelector('#covers');
  const animateElements = document.querySelectorAll('.marquee__line');

  window.addEventListener('scroll', function () {
    if (isPartiallyInViewport(covers)) {
      console.log('animate');
      animateElements.forEach(function (animateElement) {
        animateElement.classList.add('marquee_animation');
      });
    } else {
      console.log('NO_______animate');
      animateElements.forEach(function (animateElement) {
        animateElement.classList.remove('marquee_animation');
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', animateElementOnScroll);
