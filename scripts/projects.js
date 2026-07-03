// La variable projectsData se carga desde data.js

const modal = document.getElementById('project-modal');
const modalContent = modal.querySelector('.modal-content');
const closeModalButton = modal.querySelector('.close-button');
const prevButton = document.getElementById('prev-project');
const nextButton = document.getElementById('next-project');

const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const imageCaption = document.getElementById('image-caption');
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
          <img src="${project.images[0]}" alt="${project.title}" loading="lazy">
          <span>
            <p>${project.title}</p>
            <p>${project.date.replace('Fecha de inicio: ', '')}</p>
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

  modalContent.querySelector('#project-title').innerHTML = projectData.title;
  modalContent.querySelector('#project-subtitle').innerHTML = projectData.subtitle;
  modalContent.querySelector('#project-date').innerHTML = projectData.date;
  modalContent.querySelector('#project-status').innerHTML = projectData.status;
  modalContent.querySelector('#project-client').innerHTML = projectData.client;
  modalContent.querySelector('#project-description').innerHTML = projectData.description;
  modalContent.querySelector('#project-context').innerHTML = projectData.context;
  modalContent.querySelector('#project-technology').innerHTML = projectData.technology;

  const featuresList = modalContent.querySelector('#project-features');
  featuresList.innerHTML = '';
  projectData.features.forEach(feature => {
    const li = document.createElement('li');
    li.innerHTML = feature;
    featuresList.appendChild(li);
  });

  modalContent.querySelector('#project-development').innerHTML = projectData.development;
  modalContent.querySelector('#project-results').innerHTML = projectData.results;
  modalContent.querySelector('#project-lessons').innerHTML = projectData.lessons;

  const gallery = modalContent.querySelector('#project-gallery');
  gallery.innerHTML = '';
  projectData.images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = `Imagen ${index + 1} del proyecto ${projectData.title}`;
    img.loading = 'lazy';
    img.addEventListener('click', () => openImageModal(image, img.alt));
    gallery.appendChild(img);
  });

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

function openImageModal(imageSrc, imageAlt) {
  modalImage.src = imageSrc;
  imageCaption.textContent = imageAlt;
  /* imageModal.style.display = 'block'; */
  imageModal.classList.add('image-styles')
  setTimeout(() => {
    imageModal.classList.add('show');
  }, 10);
}

function closeImageModal() {
  imageModal.classList.remove('show');
  setTimeout(() => {
    /* imageModal.style.display = 'none'; */
    imageModal.classList.remove('image-styles')
  }, 300);
}

// Asegúrate de que este evento esté correctamente asignado
imageModal.querySelector('.close-button').addEventListener('click', closeImageModal);

// Añade este evento para cerrar el modal de imagen al hacer clic fuera de la imagen
imageModal.addEventListener('click', (event) => {
  if (event.target === imageModal) {
    closeImageModal();
  }
});

// Event Listeners

closeModalButton.addEventListener('click', closeModal);
prevButton.addEventListener('click', () => navigateProject(-1));
nextButton.addEventListener('click', () => navigateProject(1));

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
  if (event.target === imageModal) {
    closeImageModal();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'block' || imageModal.style.display === 'block') {
    if (e.key === 'Escape') {
      closeModal();
      closeImageModal();
    }
    if (modal.style.display === 'block') {
      if (e.key === 'ArrowLeft') navigateProject(-1);
      if (e.key === 'ArrowRight') navigateProject(1);
    }
  }
});