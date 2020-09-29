const hamburger = document.querySelector('.menu-icon');
const nav = document.querySelector('.hamburger-navs');
const menuIcon = document.querySelector('.menu-icon');

hamburger.addEventListener('click', (e) => {
  if (nav.classList.contains("addNav")) {
    nav.classList.remove('addNav')
    menuIcon.src = "img/menu-icon.svg";
  } else {
    nav.classList.add('addNav');
    menuIcon.src = "img/close.svg";
  }
})
