const hamburger = document.querySelector('.menu-icon');
const nav = document.querySelector('.hamburger-navs');
const menuIcon = document.querySelector('.menu-icon');

// treatments
const waxing = document.getElementById('waxingBtn');

// Booking
const treatment = document.getElementById('treatment');

// hamburger menu button
hamburger.addEventListener('click', (e) => {
  if (nav.classList.contains("addNav")) {
    nav.classList.remove('addNav')
    menuIcon.src = "img/menu-icon.svg";
  } else {
    nav.classList.add('addNav');
    menuIcon.src = "img/close.svg";
  }
})

// hash tag scroll
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 86);
});

treatment.value = localStorage.getItem("storageName");
