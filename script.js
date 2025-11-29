// script.js
document.addEventListener('DOMContentLoaded', function () {
  const map = document.querySelector('.js-map');
  const wrapper = document.querySelector('.map-wrapper');

  if (!map || !wrapper) return;

  map.addEventListener('click', function () {
    const isActive = map.classList.toggle('active');

    // Sólo hacemos el auto-scroll en pantallas chicas (celu / tablet)
    if (window.innerWidth <= 768) {
      if (isActive) {
        // Mapa ABIERTO -> nos movemos hacia la derecha (contenido va a la izquierda)
        // para dejar espacio a las hojas que se abren del lado izquierdo.
        wrapper.scrollTo({
          left: 0,          // vemos el extremo izquierdo del contenido
          behavior: 'smooth'
        });
      } else {
        // Mapa CERRADO -> volvemos a centrar más o menos el mapa
        const centerOffset = Math.max(
          0,
          (wrapper.scrollWidth - wrapper.clientWidth) / 2
        );

        wrapper.scrollTo({
          left: centerOffset,
          behavior: 'smooth'
        });
      }
    }
  });
});
