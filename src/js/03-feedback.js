import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textares: document.querySelector('textarea'),
  btnSubmit: document.querySelector('button'),
};
const FORM_STATS = 'feedback-form-state';
const feedbackForm = {};
populateFormInput();

refs.form.addEventListener('input', throttle(onForminput, 500));
refs.form.addEventListener('submit', onSubmitForm);

function onForminput(e) {
  feedbackForm[e.target.name] = e.target.value;

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
    refs.inputEmail.value = saveDateForm.email;
    refs.textares.value = saveDateForm.message;
  }
}
