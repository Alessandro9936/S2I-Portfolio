"use script";

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.remove("hide");
  openMenu.classList.add("hide");
  closeMenu.classList.remove("hide");
});

closeMenu.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.add("hide");
  closeMenu.classList.add("hide");
  openMenu.classList.remove("hide");
});
