// api //
import axios from 'axios';

const messageInput = document.querySelector('.message-input');
const formEl = document.querySelector('.footer-form');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-close-btn');

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function postForm(emailValue, messageValue) {
  const response = await axios.post('/requests', {
    email: emailValue,
    comment: messageValue,
  });
  return response.data;
}
// api //

// validation //
const emailInput = document.querySelector('.mail-input');
const errEl = document.querySelector('.email-err');

emailInput.addEventListener('input', () => {
  const value = emailInput.value.trim();

  if (!value.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    errEl.innerHTML = 'Invalid email, try again';
    emailInput.style.borderBottomColor = 'red';
    errEl.style.color = 'red';
  } else {
    emailInput.style.borderBottomColor = 'green';
    errEl.style.color = 'green';
    errEl.innerHTML = 'Succes';
  }
});

emailInput.addEventListener('blur', () => {
  errEl.innerHTML = '';
  emailInput.style.borderBottomColor = '';
});

//validation //

// modal //

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();
  if (emailValue && messageValue) {
    const data = loadFromLs('UserData');
    console.log(data);
    formEl.reset();
    localStorage.removeItem('UserData');
  }
  try {
    const data = await postForm(emailValue, messageValue);
    if (data.title === 'Thank you for your interest in cooperation!') {
      backdrop.classList.add('is-open');
      formEl.reset();

      backdrop.addEventListener('click', e => {
        if (e.target === e.currentTarget) {
          backdrop.classList.remove('is-open');
        }
      });
      closeBtn.addEventListener('click', e => {
        backdrop.classList.remove('is-open');
      });

      window.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
          backdrop.classList.remove('is-open');
        }
      });
    } else {
      alert('Something went wrong,');
    }
  } catch (error) {
    console.log(error);
  }
});

// modal //

// local Storage

function saveToLs(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLs(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}

const formData = {
  email: '',
  message: '',
};

formEl.addEventListener('input', () => {
  const formInfo = new FormData(formEl);
  const inEmail = formInfo.get('email');
  const inMessage = formInfo.get('message');
  formData.email = inEmail;
  formData.message = inMessage;
  saveToLs('UserData', formData);
});

window.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLs('UserData');
  formEl.elements.email.value = data?.email ?? '';
  formEl.elements.message.value = data?.message ?? '';
});

// local Storage
