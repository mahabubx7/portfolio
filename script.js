// mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const menuItems = document.querySelectorAll('#mobile-menu a');
const hamberger = document.getElementById('hamberger');
const close = document.getElementById('close-menu');
const modalOpen = document.querySelectorAll('.btn-project');
const modalClose = document.querySelectorAll('.close-modal');
const modal = document.querySelector('.modal');

// re-usable code
function closeMenu() {
  if (!mobileMenu.classList.contains('d-none')) {
    mobileMenu.classList.add('d-none');
  }
}

function closeModal() {
  if (!modal.classList.contains('d-none')) {
    modal.classList.add('d-none');
  }
}

// all-interaction-scripts
function interactions() {
  // modal
  modalOpen.forEach((it) => {
    it.addEventListener('click', (event) => {
      modal.classList.remove('d-none');
      event.preventDefault();
    });
  });

  modalClose.forEach((it) => {
    it.addEventListener('click', closeModal);
  });

  // mobile menu
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
