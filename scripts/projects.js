// La variable projectsData se carga desde data.js

const modal = document.getElementById('project-modal');
const modalContent = modal.querySelector('.modal-content');
const closeModalButton = modal.querySelector('.close-button');
const prevButton = document.getElementById('prev-project');
const nextButton = document.getElementById('next-project');

const projectsContainer = document.getElementById('projects-container');

let currentProjectId = null;

// Generar proyectos dinámicamente
function renderProjects() {
  if (!projectsContainer) return;
  
  Object.keys(projectsData).forEach(id => {
    const project = projectsData[id];
    const projectHTML = `
      <div class="project box-gen shadow" data-id="${id}">
        <div class="content">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <span>
            <p>${project.title}</p>
            <p>${project.date}</p>
          </span>
        </div>
        <a class="link" target="_blank">Detalles del Proyecto
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-arrow-up-right">
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </a>
      </div>
    `;
    projectsContainer.insertAdjacentHTML('beforeend', projectHTML);
  });

  // Event Listeners for new project elements
  document.querySelectorAll('.project').forEach(projectElement => {
    projectElement.addEventListener('click', () => {
      const projectId = projectElement.getAttribute('data-id');
      openModal(projectId);
    });
  });
}

// Inicializar
document.addEventListener('DOMContentLoaded', renderProjects);

function openModal(projectId) {
  currentProjectId = projectId;
  const projectData = projectsData[projectId];

  modalContent.querySelector('#project-title').textContent = projectData.title;
  modalContent.querySelector('#project-subtitle').textContent = projectData.subtitle;
  modalContent.querySelector('#project-date').textContent = projectData.date;
  modalContent.querySelector('#project-description').textContent = projectData.description;
  
  const coverImage = modalContent.querySelector('#project-cover');
  coverImage.src = projectData.image;
  coverImage.alt = `Portada de ${projectData.title}`;

  const linkContainer = modalContent.querySelector('#project-link-container');
  const projectLink = modalContent.querySelector('#project-link');
  
  if (projectData.link && projectData.link.trim() !== '') {
    linkContainer.style.display = 'block';
    projectLink.href = projectData.link;
  } else {
    linkContainer.style.display = 'none';
  }

  modal.style.display = 'block';
  document.body.style.overflow='hidden';
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);

  scrollModalToTop();
  updateNavigationButtons();
}

function closeModal() {
  modal.classList.remove('show');
  document.body.style.overflow='auto';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

function navigateProject(direction) {
  const projectIds = Object.keys(projectsData);
  const currentIndex = projectIds.indexOf(currentProjectId.toString());
  let newIndex = currentIndex + direction;

  if (newIndex < 0) newIndex = projectIds.length - 1;
  if (newIndex >= projectIds.length) newIndex = 0;

  openModal(projectIds[newIndex]);

  scrollModalToTop();
}

function updateNavigationButtons() {
  const projectIds = Object.keys(projectsData);
  const currentIndex = projectIds.indexOf(currentProjectId.toString());

  /*   prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === projectIds.length - 1; */
}

function scrollModalToTop() {
  const modalContent = document.querySelector('.modal');
  modalContent.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners

closeModalButton.addEventListener('click', closeModal);
prevButton.addEventListener('click', () => navigateProject(-1));
nextButton.addEventListener('click', () => navigateProject(1));

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'block') {
    if (e.key === 'Escape') {
      closeModal();
    }
    if (e.key === 'ArrowLeft') navigateProject(-1);
    if (e.key === 'ArrowRight') navigateProject(1);
  }
});