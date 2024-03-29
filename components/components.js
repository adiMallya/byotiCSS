// Alerts
const btnShowAlert = document.querySelector('.show-alert-example-btn');
const alert = document.getElementById('alert-example-warning');
const btnCloseAlert = document.getElementById('alert-example-close-btn');

btnShowAlert.addEventListener('click', () => {
  alert.style.display = alert.style.display === 'none' ? 'block':'none';
});

btnCloseAlert.addEventListener('click', () => {
  alert.style.display = 'none';
});

// Form validation
const forms = document.querySelectorAll('.submit-form-example');

forms.forEach((form) => {
  form.addEventListener(
    'submit',
    (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
      }
      e.preventDefault();
      form.classList.add('form-validated');
    },
    false,
  );
});

// Toast
const btnShowToast = document.querySelector('.show-toast-example-btn');
const toast = document.getElementById('toast-example-success');
const btnCloseToast = document.getElementById('toast-example-success-btn');

btnShowToast.addEventListener('click', () => {
  toast.style.display = 'block';
  timeIdForToast = setTimeout(() => {
    toast.style.display = 'none';
  }, 2000);
});

btnCloseToast.addEventListener('click', () => {
  clearTimeout(timeIdForToast);
  toast.style.display = 'none';
});
