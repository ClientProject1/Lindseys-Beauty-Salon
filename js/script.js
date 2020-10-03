const hamburger = document.querySelector('.menu-icon');
const nav = document.querySelector('.hamburger-navs');
const menuIcon = document.querySelector('.menu-icon');

// treatments
const appointment = document.getElementById('appointmentBtn');
const waxing = document.getElementById('waxingBtn');
const tanning = document.getElementById('tanningBtn');

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

// Appointment
appointment.addEventListener('click', () => {
  localStorage.setItem("storageName", "");
})

// waxing
waxing.addEventListener('click', () => {
  localStorage.setItem("storageName", "Waxing");
})

// tanning
tanning.addEventListener('click', () => {
  localStorage.setItem("storageName", "Tanning");
})
