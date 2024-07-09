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
  refs.modalOverlay.classList.remove('show');
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

refs.headerMenuBtn.addEventListener('click', () => {
  refs.dropdownMenuList.classList.toggle('show');
});
