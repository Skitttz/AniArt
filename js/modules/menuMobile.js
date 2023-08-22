import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuH, menu, navMenu, itemMenus, lastItem, events) {
    this.menuHamburguer = document.querySelector(menuH);
    this.menu = document.querySelector(menu);
    this.navMenu = document.querySelector(navMenu);
    this.itemMenus = document.querySelectorAll(itemMenus);
    this.activeClass = "ativo";

    /* Feito para o ultimo item */
    this.bar = document.querySelector(lastItem);

    if (events === undefined) {
      this.eventos = ["click", "touchstart"];
    } else {
      this.eventos = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    /* Iniciar Menu ao clicar */
    this.menu.classList.toggle(this.activeClass);
    this.menuHamburguer.classList.toggle(this.activeClass);
    this.navMenu.classList.toggle(this.activeClass);
    this.bar.classList.toggle(this.activeClass);

    /* Clicar do lado de fora do menu fechara */
    outsideClick(this.navMenu, this.eventos, () => {
      this.menuHamburguer.classList.remove(this.activeClass);
      this.navMenu.classList.remove(this.activeClass);
      this.menu.classList.remove(this.activeClass);
      this.bar.classList.remove(this.activeClass);
      this.menuBar.remove(this.activeClass);
    });

    /* Clicar em um item fechar o menu */
    const arrayItemsMenu = [...this.itemMenus];
    this.eventos.forEach((event) => {
      arrayItemsMenu.forEach((item) => {
        item.addEventListener(event, () => {
          this.menuHamburguer.classList.remove(this.activeClass);
          this.navMenu.classList.remove(this.activeClass);
          this.menu.classList.remove(this.activeClass);
          this.bar.classList.remove(this.activeClass);
          this.menuBar.remove(this.activeClass);
        });
      });
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach((evento) =>
      this.menuHamburguer.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuHamburguer && this.menu) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
