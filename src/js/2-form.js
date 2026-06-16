const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

// загружаємо дані з localStorage при завантаженні сторінки
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// слухаємо input події на формі (делегування)
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// обробка сабміту форми
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // очищаємо все
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
