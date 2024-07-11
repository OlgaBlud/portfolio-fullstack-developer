import { refs } from './refs';

//===============Відкриття модального вікна
refs.headerOpenMenuBtn.addEventListener('click', () => {
  refs.modalOverlay.classList.add('show');
});
// =================Закриття модального вікна кнопкою
refs.closeBtnModal.addEventListener('click', () => {
  refs.modalOverlay.classList.remove('show');
});

// =================Закриття модального вікна пр переході за посиланням

refs.closeModalHeader.addEventListener('click', () => {
  refs.modalOverlay.classList.remove('show');
});

refs.closeModalHeaderBtn.addEventListener('click', () => {
  refs.modalOverlay.classList.remove('show');
});

refs.headerMenuBtn.addEventListener('click', () => {
  refs.dropdownMenuList.classList.toggle('show');
});
