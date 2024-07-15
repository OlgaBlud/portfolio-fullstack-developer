import { postForm } from './work-together-api';
import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

const emailInput = document.querySelector('.mail-input');
const messageInput = document.querySelector('.message-input');
const formEl = document.querySelector('.footer-form');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-close-btn');

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  if (emailInput.value === '') {
    console.log('sos');
  }
});
//   const emailValue = emailInput.value.trim();
//   const messageValue = messageInput.value.trim();
//   try {
//     const data = await postForm(emailValue, messageValue);
//     if (data.title === 'Thank you for your interest in cooperation!') {
//       backdrop.classList.add('is-open');
//       backdrop.addEventListener('click', e => {
//         if (e.target === e.currentTarget) {
//           backdrop.classList.remove('is-open');
//         }
//       });
//       closeBtn.addEventListener('click', e => {
//         backdrop.classList.remove('is-open');
//       });

//       window.addEventListener('keydown', e => {
//         if (e.code === 'Escape') {
//           backdrop.classList.remove('is-open');
//         }
//       });
//     } else {
//       alert('Something went wrong,');
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
