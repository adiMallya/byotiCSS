const nav = document.getElementById('my-navbar');
const toggler = document.getElementById('my-toggler');

toggler.addEventListener('click', () => {
  nav.classList.toggle('active');
});
