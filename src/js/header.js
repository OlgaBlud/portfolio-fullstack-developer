import { refs } from './refs';

//===============Відкриття модального вікна
refs.btnOpenMenu.addEventListener('click', () => {
  refs.modalOverlay.classList.add('is-open');
});
// =================Закриття модального вікна кнопкою
refs.btnClose.addEventListener('click', () => {
  refs.modalOverlay.classList.remove('is-open');
});

// =================Закриття модального вікна пр переході за посиланням

refs.close1.addEventListener('click', () => {
  setTimeout(refs.modalOverlay.classList.remove('is-open'), 2000);
});

refs.close2.addEventListener('click', () => {
  refs.modalOverlay.classList.remove('is-open');
});

const eventStateMenu = refs.menuTablet.classList.toggle('is-open');
// const eventStateModal = refs.modal.classList.toggle('is-open');

refs.menuTablet.addEventListener('click', e => {
  e.preventDefault();
  if (eventStateMenu === true) {
    refs.modalOverlay.classList.remove('is-open');
  }
  refs.modalOverlay.classList.add('is-open');
});
