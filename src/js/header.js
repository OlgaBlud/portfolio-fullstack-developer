import { refs } from './refs';

//===============Відкриття модального вікна
refs.btnOpenMenu.addEventListener('click', () => {
  modalOverlay.classList.remove('.is-open');
});

// =================Закриття модального вікна кнопкою
refs.btnClose.addEventListener('click', () => {
  modalOverlay.classList.add('.is-open');
});

// =================Закриття модального вікна пр переході за посиланням
refs.closeMenu.addEventListener('click', () => {
  modalOverlay.classList.add('.is-open');
});
