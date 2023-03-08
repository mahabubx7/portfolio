/* eslint-disable array-callback-return */
// store of projects
const projects = [
  {
    image: 'assets/Snapshoot Portfolio.png',
    name: 'multi-post stories gain+glory',
    preview: '',
    code: '',
    tags: ['Html', 'CSS', 'Ruby on Rails'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    image: 'assets/Snapshoot Portfolio.png',
    name: 'multi-post stories gain+glory',
    preview: '',
    code: '',
    tags: ['Html', 'CSS', 'Ruby on Rails'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    image: 'assets/Snapshoot Portfolio.png',
    name: 'multi-post stories gain+glory',
    preview: '',
    code: '',
    tags: ['Html', 'CSS', 'Ruby on Rails'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    image: 'assets/Snapshoot Portfolio.png',
    name: 'multi-post stories gain+glory',
    preview: '',
    code: '',
    tags: ['Html', 'CSS', 'Ruby on Rails'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    image: 'assets/Snapshoot Portfolio.png',
    name: 'multi-post stories gain+glory',
    preview: '',
    code: '',
    tags: ['Html', 'CSS', 'Ruby on Rails'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    image: 'assets/Snapshoot Portfolio.png',
    name: 'multi-post stories gain+glory',
    preview: '',
    code: '',
    tags: ['Html', 'CSS', 'Ruby on Rails'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
];

// create projects dynamically
const projectContainer = document.getElementById('projects');
projects.map((project) => {
  const item = document.createElement('div');
  item.classList.add('grid-item');
  const content = document.createElement('div');
  content.innerHTML = `
  <div class="image">
    <!-- <img src="${project.image}" alt="${project.name}" /> -->
  </div>
   <div class="work-info">
     <h3>${project.name}</h3>
     <ul class="tags">
       <li>Ruby on Rails</li>
       <li>CSS</li>
       <li>JavaScript</li>
       <li>Html</li>
     </ul>
     <div class="btn-container">
        <a href="${project.preview}" class="btn-preview btn-project">see project</a>
     </div>
  </div>
  `;
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.classList.add('d-none');
  const modalContent = document.createElement('div');
  modalContent.innerHTML = `
  <div class="modal-container">
    <div class="modal-content">
      <div class="control">
        <button class="btn close-modal"><i class="ri-close-line"></i></button>
      </div>
      <div class="content">
        <img src="${project.image}" alt="${project.name}">
        <div class="head">
          <h2>Keeping track of hundreds of
            components</h2>
          <div class="btns">
            <a href="${project.preview}" class="btn btn-link">
              <span>see live</span>
              <span><i class="ri-external-link-line"></i></span>
            </a>
            <a href="${project.code}" class="btn btn-link">
              <span>see source</span>
              <span><i class="ri-github-fill"></i></span>
            </a>
          </div>
        </div>
        <ul class="tags">
          <li>Codekit</li>
          <li>GitHub</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>Terminal</li>
          <li>Codepen</li>
        </ul>
        <p class="description">${project.description}</p>
      </div>
    </div>
  </div>
  `;

  modal.appendChild(modalContent);
  item.appendChild(content);
  item.appendChild(modal);
  projectContainer.appendChild(item);

  // interactions for pop-up
  const openModal = item.querySelector('.btn-project');
  const closeModal = item.querySelector('.close-modal');

  openModal.addEventListener('click', (event) => {
    modal.classList.remove('d-none');
    event.preventDefault();
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('d-none');
  });
});

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

// validation for contact form
const form = document.getElementById('contactForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  let hasError = false;

  const fullName = document.querySelector('input[name="full_name"]').value;
  const fname = document.querySelector('#names input[name="first_name"]').value;
  const lname = document.querySelector('#names input[name="last_name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  let finalName = '';

  function checkField(str) {
    if (!str || typeof (str) !== 'string' || str.length < 3) {
      hasError = true;
    } else if (str.length < 3) {
      hasError = true;
    }
  }

  function checkEmail(str) {
    return str === str.toLowerCase();
  }

  if (fullName) {
    checkField(fullName);
    finalName = fullName;
  } else if (!fullName && (!fname || !lname)) {
    hasError = true;
  } else if (!fullName && fname && lname) {
    checkField(fname);
    checkField(lname);
    if (!hasError) {
      finalName = `${fname} ${lname}`;
    }
  }

  const formInfo = {
    name: finalName,
    email,
    feedback: message,
  };

  if (!hasError && checkEmail(formInfo.email)) {
    const sent = document.createElement('p');
    sent.innerText = 'Form is sent.';
    sent.classList.add('success');
    if (sent.classList.contains('error')) {
      sent.classList.remove('error');
    }
    form.appendChild(sent);
    form.submit();
  } else {
    const error = document.createElement('p');
    error.innerText = 'Error! Form not sent.';
    error.classList.add('error');
    form.appendChild(error);
  }
});
