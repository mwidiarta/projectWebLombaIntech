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

// Section Fitur
const allBoxes = document.querySelectorAll(".fiturBox");
allBoxes.forEach((box) => {
  const btn = box.querySelector(".fiturBtn");
  const icon = box.querySelector(".fiturIcon");
  const isi = box.querySelector(".isiFitur");

  function toggleFitur() {
    const isOpen = isi.classList.contains("max-h-40");

    // Tutup semua card
    allBoxes.forEach((otherBox) => {
      const otherBtn = otherBox.querySelector(".fiturBtn");
      const otherIcon = otherBox.querySelector(".fiturIcon");
      const otherIsi = otherBox.querySelector(".isiFitur");

      otherIsi.classList.add("max-h-0");
      otherIsi.classList.remove("max-h-40");
      otherIcon.classList.add("fa-circle-chevron-down");
      otherIcon.classList.remove("fa-circle-chevron-up");
      otherBtn.classList.add("text-primary");
      otherBtn.classList.remove("text-dark", "underline", "underline-offset-6");
      otherIcon.classList.add("text-primary");
      otherIcon.classList.remove("text-dark");
      otherBox.classList.add("bg-none");
      otherBox.classList.remove("bg-linear-50");
    });

    // buka card
    if (!isOpen) {
      isi.classList.remove("max-h-0");
      isi.classList.add("max-h-40");
      icon.classList.remove("fa-circle-chevron-down");
      icon.classList.add("fa-circle-chevron-up");
      btn.classList.add("text-dark", "underline", "underline-offset-6");
      btn.classList.remove("text-primary");
      icon.classList.add("text-dark");
      icon.classList.remove("text-primary");
      box.classList.remove("bg-none");
      box.classList.add("bg-linear-50");
    }
  }

  // event listener
  btn.addEventListener("click", toggleFitur);
  icon.addEventListener("click", toggleFitur);
  box.addEventListener("click", (e) => {
    if (!e.target.closest(".fiturBtn") && !e.target.closest(".fiturIcon")) {
      toggleFitur();
    }
  });
});

// Newsletter
const btnNews = document.querySelectorAll(".btnNews");
const newsletter = document.getElementById("newsletter");
btnNews.forEach((btn) => {
  btn.addEventListener("click", () => {
    newsletter.classList.toggle("hidden");
  });
});
