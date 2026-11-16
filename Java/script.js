document.documentElement.classList.add("js");

const tombolMenu = document.querySelector(".tombol-menu");
const menu = document.querySelector(".menu");

tombolMenu.addEventListener("click", function () {
  const terbuka = menu.classList.toggle("terbuka");
  tombolMenu.setAttribute("aria-expanded", terbuka);
  tombolMenu.textContent = terbuka ? "✕" : "☰";
});