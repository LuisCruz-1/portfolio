document.addEventListener("DOMContentLoaded", () => {
  const stackGrid = document.getElementById("main-stack-grid");
  const modalGrid = document.getElementById("stack-modal-grid");
  
  // Renderizar Slider dinámicamente
  if (stackGrid && typeof stackData !== 'undefined') {
    stackData.forEach(tech => {
      let innerHTML = '';
      let classes = 'stack-icon';
      
      if (tech.isWide) {
        classes += ' flutterflow-icon';
        innerHTML = `<img src="${tech.icon}" alt="${tech.name}" style="width: 24px; height: 24px;" /><span>${tech.name}</span>`;
      } else {
        innerHTML = `<img src="${tech.icon}" alt="${tech.name}" loading="lazy" />`;
      }
      
      const div = document.createElement('div');
      div.className = classes;
      div.style.gridArea = tech.gridArea;
      div.title = tech.name; // Agregamos el title para el tooltip nativo
      div.innerHTML = innerHTML;
      
      stackGrid.appendChild(div);
    });
    
    // Clonar para el efecto de marquee infinito
    const stackTrack = document.querySelector(".stack-track");
    if (stackTrack) {
      const clone = stackGrid.cloneNode(true);
      clone.removeAttribute('id');
      clone.setAttribute("aria-hidden", "true");
      stackTrack.appendChild(clone);
    }
  }

  // Renderizar Modal Grid dinámicamente
  if (modalGrid && typeof stackData !== 'undefined') {
    stackData.forEach(tech => {
      let innerHTML = '';
      let classes = 'stack-icon';
      
      if (tech.isWide) {
        classes += ' flutterflow-icon';
        innerHTML = `<img src="${tech.icon}" alt="${tech.name}" style="width: 24px; height: 24px;" /><span>${tech.name}</span>`;
      } else {
        innerHTML = `<img src="${tech.icon}" alt="${tech.name}" loading="lazy" />`;
      }

      const div = document.createElement('div');
      div.className = classes;
      div.title = tech.name;
      div.innerHTML = innerHTML;
      
      if (tech.isWide) {
        div.style.gridColumn = "span 2";
      }

      modalGrid.appendChild(div);
    });
  }

  // Lógica del Modal
  const openBtn = document.getElementById('open-stack-modal');
  const stackModal = document.getElementById('stack-modal');
  const closeBtn = stackModal ? stackModal.querySelector('.close-button') : null;

  if (openBtn && stackModal) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      stackModal.style.display = 'block';
      // Pequeño delay para la transición de CSS
      setTimeout(() => stackModal.classList.add('show'), 10);
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && stackModal) {
    closeBtn.addEventListener('click', () => {
      stackModal.classList.remove('show');
      setTimeout(() => {
        stackModal.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    });
  }

  window.addEventListener('click', (event) => {
    if (event.target === stackModal) {
      stackModal.classList.remove('show');
      setTimeout(() => {
        stackModal.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    }
  });
});