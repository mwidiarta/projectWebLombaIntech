const closeMenu = document.getElementById("closeMenu");
const menuBtn = document.getElementById("menuBtn");
const isiMenu = document.getElementById("isiMenu");

menuBtn.addEventListener("click", () => {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    // kalau layar lg
    menuBtn.classList.toggle("hidden"); // toggle tombol
    isiMenu.classList.toggle("hidden"); // toggle isi menu
  } else {
    // layar kecil → cuma toggle menu
    isiMenu.classList.toggle("hidden");
  }
});
closeMenu.addEventListener("click", () => {
  menuBtn.classList.toggle("hidden");
  isiMenu.classList.toggle("hidden");
});

// Titik3
const titik3Btn = document.querySelectorAll(".titik3Btn");
const isiTitik3 = document.getElementById("isiTitik3");
titik3Btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    isiTitik3.classList.toggle("hidden");
  });
});

const settingBtn = document.querySelectorAll(".settingBtn");
const isiSetting = document.getElementById("isiSetting");
settingBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    isiSetting.classList.toggle("hidden");
  });
});

// DiskusiForm
const diskusiBtn = document.querySelectorAll(".diskusiBtn");
const isiDiskusi = document.getElementById("isiDiskusi");
diskusiBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    isiDiskusi.classList.toggle("hidden");
  });
});

// Mode Web
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

lightBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  isiSetting.classList.toggle("hidden");
});
darkBtn.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  isiSetting.classList.toggle("hidden");
});
