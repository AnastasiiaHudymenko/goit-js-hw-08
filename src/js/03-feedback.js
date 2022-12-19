import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textares: document.querySelector('textarea'),
};
const FORM_STATS = 'feedback-form-state';
const feedbackForm = JSON.parse(localStorage.getItem(FORM_STATS)) || {};

populateFormInput();

refs.form.addEventListener('input', throttle(onForminput, 500));
refs.form.addEventListener('submit', onSubmitForm);

function onForminput({ target }) {
  feedbackForm[target.name] = target.value;

  localStorage.setItem(FORM_STATS, JSON.stringify(feedbackForm));
}

function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(FORM_STATS)));
  localStorage.removeItem(FORM_STATS);
}

function populateFormInput() {
  const saveDateForm = JSON.parse(localStorage.getItem(FORM_STATS));
  if (saveDateForm) {
    if (saveDateForm.email) {
      refs.inputEmail.value = saveDateForm.email;
    }
    if (saveDateForm.message) {
      refs.textares.value = saveDateForm.message;
    }
  }
}

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   inputEmail: document.querySelector('input'),
//   textarea: document.querySelector('textarea'),
// };

// const CURRENT_KEY = 'feedback-form-state';
// const formDate = {};

// searchLocalStorageKey();
// refs.form.addEventListener('input', throttle(onInputForm, 500));
// refs.form.addEventListener('submit', onSubmitForm);

// function onInputForm({ target }) {
//   formDate[target.name] = target.value;
//   localStorage.setItem(CURRENT_KEY, JSON.stringify(formDate));
// }

// function onSubmitForm(evt) {
//   evt.preventDefault();
//   console.log(JSON.parse(localStorage.getItem(CURRENT_KEY)));
//   refs.form.reset();
//   localStorage.removeItem(CURRENT_KEY);
// }

// function searchLocalStorageKey() {
//   if (localStorage.getItem(CURRENT_KEY)) {
//     const formData = JSON.parse(localStorage.getItem(CURRENT_KEY));
//     if (formData.email) {
//       refs.inputEmail.value = formData.email;
//     }
//     if (formData.message) {
//       refs.textarea.value = formData.message;
//     }
//   }
// }
