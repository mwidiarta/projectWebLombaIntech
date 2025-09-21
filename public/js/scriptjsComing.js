// Navbar
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const closeNav = document.getElementById("closeNav");
const overlay = document.getElementById("overlay");
const materiBtn = document.getElementById("materiBtn");
const materiMenu = document.getElementById("materiMenu");
const materiIcon = document.getElementById("materiIcon");

function toggleMenu() {
  navbar.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
}
function toggleMenuMateri() {
  materiMenu.classList.toggle("max-h-0");
  materiMenu.classList.toggle("max-h-44");
  materiIcon.classList.toggle("fa-angle-down");
  materiIcon.classList.toggle("fa-angle-up");
}

hamburger.addEventListener("click", toggleMenu);
closeNav.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

materiBtn.addEventListener("click", toggleMenuMateri);
materiIcon.addEventListener("click", toggleMenuMateri);
