import { refs } from "./refs";


console.log(refs.coversSection)
console.log(refs.marqueeLine)

// refs.marqueeLine.classList.add('marquee_animation')

document.addEventListener('DOMContentLoaded', function () {
    const refs = {
        coversSection: document.querySelector('.covers'),
        marqueeLine: document.querySelector('.marquee__line')
    };

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        if (isElementInViewport(refs.coversSection)) {
            refs.marqueeLine.classList.add('marquee_animation');
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    if (refs.coversSection) {
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Перевірка при завантаженні сторінки
    }
});