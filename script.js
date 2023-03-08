// mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const menuItems = document.querySelectorAll('#mobile-menu a');
const hamberger = document.getElementById('hamberger');
const close = document.getElementById('close-menu');

// re-usable code
function closeMenu() {
  if (!mobileMenu.classList.contains('d-none')) {
    mobileMenu.classList.add('d-none');
  }
}

// all-interaction-scripts
function interactions() {
  hamberger.addEventListener('click', () => {
    mobileMenu.classList.remove('d-none');
  });

  menuItems.forEach((item) => {
    item.addEventListener('click', () => closeMenu());
  });

  close.addEventListener('click', () => {
    closeMenu();
  });
}

interactions(); // scripts setting up


// validation for contact form
const form = document.getElementById('contactForm');

function checkEmail(str) {
  return typeof(str) === 'string' && str === str.toLowerCase();
}

let formData = {};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formData = Object.assign({
    name: event.currentTarget.name.value || '',
    email: event.currentTarget.email.value || '',
    feedback: event.currentTarget.feedback.value || '',
  });

  if (checkEmail(formData['email'])) {
    form.submit();
  } else {
    // console.log("Error!", formData);
    const error = document.createElement('p');
    error.innerText = "Invalid Email Address!";
    error.classList.add('error');
    form.appendChild(error);
  }
});
