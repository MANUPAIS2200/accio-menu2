document.addEventListener("DOMContentLoaded", () => {
  const mapBase = document.querySelector(".js-map");
  if (!mapBase) return;

  let alreadyOpened = false;

  mapBase.addEventListener("click", () => {
    if (alreadyOpened) return;      // solo la primera vez
    mapBase.classList.add("active");
    alreadyOpened = true;
  });
});
