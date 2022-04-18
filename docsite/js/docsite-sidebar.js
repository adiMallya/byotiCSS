const sideBar = document.getElementById('my-sidebar');
const sideBarMenu =  document.querySelector('.drop-down-menu');
const sideBarNavLinks = document.querySelectorAll('.nav-link__item');

const arrayOfClickablesToToggle = [
  sideBarMenu,
  ...sideBarNavLinks,
];

arrayOfClickablesToToggle.forEach((item) =>{
  item.addEventListener('click', () => {
    sideBar.classList.toggle('sidebar-active');
  });
})
