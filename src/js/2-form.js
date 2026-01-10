const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email ?? '';
  formData.message = parsedData.message ?? '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', e => {
  const { name, value } = e.target;
  if (!formData.hasOwnProperty(name)) return;
  formData[name] = value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Please, fill all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
  formData.email = '';
  formData.message = '';
});
