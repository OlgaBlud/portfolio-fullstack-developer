import { refs } from './refs';

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const inViewVertical =
    rect.top <= windowHeight && rect.top + rect.height >= 0;
  return inViewVertical;
}

function animateElementOnScroll() {
  window.addEventListener('scroll', function () {
    if (isInViewport(refs.coversSection)) {
      refs.animateElements.forEach(element =>
        addClass(element, 'marquee_animation')
      );
    } else {
      refs.animateElements.forEach(element =>
        removeClass(element, 'marquee_animation')
      );
    }
  });
}
function addClass(element, className) {
  element.classList.add(className);
}
function removeClass(element, className) {
  element.classList.remove(className);
}

document.addEventListener('DOMContentLoaded', animateElementOnScroll);
