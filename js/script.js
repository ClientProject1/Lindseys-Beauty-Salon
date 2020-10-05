const hamburger = document.querySelector('.menu-icon');
const nav = document.querySelector('.hamburger-navs');
const menuIcon = document.querySelector('.menu-icon');

// treatments
const appointment = document.getElementById('appointmentBtn');
const waxing = document.getElementById('waxingBtn');
const tanning = document.getElementById('tanningBtn');
const lashess = document.getElementById('lashesBtn');
const bodyTreatments = document.getElementById('bodyTreatmentsBtn');
const facial = document.getElementById('facialBtn');
const manicure = document.getElementById('manicureBtn');

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
  localStorage.setItem("storageName", "Spray Tan");
})

// lashes and Brows
lashess.addEventListener('click', () => {
  localStorage.setItem("storageName", "Lashes & Brows");
})

// body treatments
bodyTreatments.addEventListener('click', () => {
  localStorage.setItem("storageName", "Body Treatments");
})

// facial
facial.addEventListener('click', () => {
  localStorage.setItem("storageName", "Derminological");
})

// manicure
manicure.addEventListener('click', () => {
  localStorage.setItem("storageName", "Manicure");
})
