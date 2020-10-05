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

// Treatment value
treatment.value = localStorage.getItem("storageName");

// form validation
const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.innerHTML = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if(!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  // Set the styling appropriately
  emailError.className = 'error active';
}
