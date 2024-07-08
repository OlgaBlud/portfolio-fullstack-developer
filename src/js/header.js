import { refs } from './refs';

//===============Відкриття модального вікна
refs.btnOpenMenu.addEventListener('click', () => {
  refs.modalOverlay.classList.add('show');
});
// =================Закриття модального вікна кнопкою
refs.btnClose.addEventListener('click', () => {
  refs.modalOverlay.classList.remove('show');
});

// =================Закриття модального вікна пр переході за посиланням

refs.close1.addEventListener('click', () => {
  setTimeout(refs.modalOverlay.classList.remove('show'), 2000);
});

refs.close2.addEventListener('click', () => {
  refs.modalOverlay.classList.remove('show');
});

refs.close3.addEventListener('click', () => {
  refs.modalOverlay.classList.remove('show');
});

refs.close4.addEventListener('click', () => {
  refs.modalOverlay.classList.remove('show');
});

refs.close5.addEventListener('click', () => {
  refs.modalOverlay.classList.remove('show');
});

let eventStateMenu = refs.modalOverlay.classList.contains('show');
console.log(eventStateMenu);

refs.menuTablet.addEventListener('click', e => {
  refs.modalOverlay.classList.toggle('show');
  // e.preventDefault();
  // if (eventStateMenu === true) {
  //   refs.modalOverlay..remove('show');
  //   console.log(eventStateMenu);
  // }
  // refs.modalOverlay.classList.add('show');
});
