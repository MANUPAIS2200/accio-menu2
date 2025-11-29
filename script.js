// script.js
document.addEventListener('DOMContentLoaded', function () {
  const map = document.querySelector('.js-map');
  if (!map) return;

  map.addEventListener('click', function () {
    map.classList.toggle('active');
  });
});
