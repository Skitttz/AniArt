import outsideClick from "./outsideclick.js";

export default function initMenu() {
  const eventos = ["click", "touchstart"];
  const menuHamburguer = document.querySelector(".hMenu");
  const menu = document.querySelector(".menu");
  const navMenu = document.querySelector(".listLinks");
  const bar = document.querySelector(".last");

  menuHamburguer.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    menuHamburguer.classList.toggle("ativo");
    navMenu.classList.toggle("ativo");
    bar.classList.toggle("ativo");
  });

  document.querySelectorAll(".link").forEach((n) =>
    n.addEventListener("click", () => {
      menuHamburguer.classList.remove("ativo");
      navMenu.classList.remove("ativo");
      menu.classList.remove("ativo");
      bar.classList.remove("ativo");
    })
  );

  menuHamburguer.addEventListener("click", () => {
    outsideClick(navMenu, eventos, () => {
      menuHamburguer.classList.remove("ativo");
      navMenu.classList.remove("ativo");
      menu.classList.remove("ativo");
      bar.classList.remove("ativo");
    });
  });
}
