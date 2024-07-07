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
