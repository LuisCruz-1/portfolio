const projects = {
  1: {
      title: 'ANAVI CRM',
      subtitle: 'Desarrollo y Mejora Continua',
      date: 'Fecha de inicio: [Fecha no especificada]',
      status: 'Estado: En curso (2024)',
      client: 'Colegio ANAVI',
      description: 'ANAVI CRM es una aplicación de gestión integral desarrollada para el Colegio ANAVI, diseñada para optimizar varios procesos críticos de la institución. El proyecto se centra en tres áreas principales: admisiones, gestión de vacacional, e inventario, con un módulo adicional para manejar solicitudes de los padres de familia.',
      context: 'Antes de la implementación de ANAVI CRM, el colegio enfrentaba desafíos significativos en la organización y gestión de sus procesos de admisión. Esto resultaba en problemas de seguimiento, comunicación con los padres y coordinación de entrevistas. El proyecto buscó resolver estas ineficiencias y proporcionar una plataforma centralizada para múltiples aspectos de la gestión escolar.',
      technology: 'Plataforma de Desarrollo: Flutterflow\nBase de Datos: Firebase\nIntegración: API de Idukay para la obtención de datos de estudiantes',
      features: [
          'Gestión de Admisiones: Seguimiento detallado de aspirantes para el período lectivo 2024-2025, Gestión de cada etapa del proceso de admisión, Agendamiento de entrevistas con notificaciones automáticas vía WhatsApp, Sincronización de datos con la API de Idukay, permitiendo adaptabilidad a otros colegios',
          'Gestión de Vacacional: Registro y administración de inscritos en el vacacional 2024, Almacenamiento de información general, datos de padres y asignación de grupos, Base de datos en Firebase para fácil acceso y gestión',
          'Sistema de Inventario: Inventario detallado de insumos de la academia, Categorización por tipo, ubicación, cantidad, estado y observaciones',
          'Gestión de Solicitudes: Interfaz para administradores para manejar solicitudes de padres de familia, Procesamiento de peticiones como solicitud de documentos, justificación de faltas y atrasos'
      ],
      development: 'El proyecto se llevó a cabo mediante un enfoque iterativo, permitiendo ajustes y mejoras continuas basadas en el feedback y las necesidades emergentes del cliente. Como desarrollador principal, fui responsable de la maquetación, diseño UI/UX y desarrollo de la aplicación.',
      results: 'Mejora en la Experiencia de Admisión: Simplificación del proceso para padres de familia y personal administrativo. Optimización de Comunicaciones: Implementación de notificaciones automáticas por WhatsApp para entrevistas, mejorando significativamente la coordinación. Centralización de Datos: Integración de múltiples aspectos de la gestión escolar en una sola plataforma. Flexibilidad y Escalabilidad: Diseño que permite adaptación a otros colegios mediante cambios en la API.',
      lessons: 'El desarrollo de ANAVI CRM ha destacado la importancia de la flexibilidad en el diseño de sistemas educativos. A medida que el proyecto continúa evolucionando, se están explorando formas de simplificar los procesos de desarrollo interno para una mejor optimización. El éxito de este proyecto demuestra el potencial de las soluciones tecnológicas personalizadas en la mejora de la eficiencia administrativa en entornos educativos.',
      images: [
          'https://via.placeholder.com/200',
          'https://via.placeholder.com/200',
          'https://via.placeholder.com/200',
          'https://via.placeholder.com/200'
      ]
  },
  2: {
      title: 'Proyecto 2',
      subtitle: 'Descripción breve del proyecto 2',
      date: 'Fecha de inicio: [Fecha no especificada]',
      status: 'Estado: En curso (2024)',
      client: 'Cliente del proyecto 2',
      description: 'Descripción general del proyecto 2.',
      context: 'Contexto del proyecto 2.',
      technology: 'Tecnologías utilizadas en el proyecto 2.',
      features: [
          'Característica 1 del proyecto 2',
          'Característica 2 del proyecto 2',
          'Característica 3 del proyecto 2'
      ],
      development: 'Proceso de desarrollo del proyecto 2.',
      results: 'Resultados del proyecto 2.',
      lessons: 'Lecciones aprendidas del proyecto 2.',
      images: [
          'https://via.placeholder.com/200',
          'https://via.placeholder.com/200',
          'https://via.placeholder.com/200',
          'https://via.placeholder.com/200'
      ]
  },
  3: {
      title: 'Proyecto 3',
      subtitle: 'Descripción breve del proyecto 3',
      date: 'Fecha de inicio: [Fecha no especificada]',
      status: 'Estado: En curso (2024)',
      client: 'Cliente del proyecto 3',
      description: 'Descripción general del proyecto 3.',
      context: 'Contexto del proyecto 3.',
      technology: 'Tecnologías utilizadas en el proyecto 3.',
      features: [
          'Característica 1 del proyecto 3',
          'Característica 2 del proyecto 3',
          'Característica 3 del proyecto 3'
      ],
      development: 'Proceso de desarrollo del proyecto 3.',
      results: 'Resultados del proyecto 3.',
      lessons: 'Lecciones aprendidas del proyecto 3.',
      images: [
          'https://via.placeholder.com/200',
          'https://via.placeholder.com/200',
          'https://via.placeholder.com/200',
          'https://via.placeholder.com/200'
      ]
  }
};

const modal = document.getElementById('project-modal');
const modalContent = modal.querySelector('.modal-content');
const closeModalButton = modal.querySelector('.close-button');
const prevButton = document.getElementById('prev-project');
const nextButton = document.getElementById('next-project');

const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const imageCaption = document.getElementById('image-caption');

let currentProjectId = null;

function openModal(projectId) {
  currentProjectId = projectId;
  const projectData = projects[projectId];
  
  modalContent.querySelector('#project-title').textContent = projectData.title;
  modalContent.querySelector('#project-subtitle').textContent = projectData.subtitle;
  modalContent.querySelector('#project-date').textContent = projectData.date;
  modalContent.querySelector('#project-status').textContent = projectData.status;
  modalContent.querySelector('#project-client').textContent = projectData.client;
  modalContent.querySelector('#project-description').textContent = projectData.description;
  modalContent.querySelector('#project-context').textContent = projectData.context;
  modalContent.querySelector('#project-technology').textContent = projectData.technology;
  
  const featuresList = modalContent.querySelector('#project-features');
  featuresList.innerHTML = '';
  projectData.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
  });
  
  modalContent.querySelector('#project-development').textContent = projectData.development;
  modalContent.querySelector('#project-results').textContent = projectData.results;
  modalContent.querySelector('#project-lessons').textContent = projectData.lessons;
  
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
  
  modal.classList.add('show');
  modal.style.display = 'block';
  
  updateNavigationButtons();
}

function closeModal() {
  modal.classList.remove('show');
  setTimeout(() => {
      modal.style.display = 'none';
  }, 300);
}

function navigateProject(direction) {
  const projectIds = Object.keys(projects);
  const currentIndex = projectIds.indexOf(currentProjectId.toString());
  let newIndex = currentIndex + direction;
  
  if (newIndex < 0) newIndex = projectIds.length - 1;
  if (newIndex >= projectIds.length) newIndex = 0;
  
  openModal(projectIds[newIndex]);
}

function updateNavigationButtons() {
  const projectIds = Object.keys(projects);
  const currentIndex = projectIds.indexOf(currentProjectId.toString());
  
/*   prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === projectIds.length - 1; */
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
document.querySelectorAll('.project').forEach(projectElement => {
  projectElement.addEventListener('click', () => {
      const projectId = projectElement.getAttribute('data-id');
      openModal(projectId);
  });
});

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