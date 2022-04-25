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
