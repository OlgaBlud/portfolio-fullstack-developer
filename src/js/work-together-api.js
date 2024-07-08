import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function postForm(emailValue, messageValue) {
  const response = await axios.post('/requests', {
    email: emailValue,
    comment: messageValue,
  });
  return response.data;
}
