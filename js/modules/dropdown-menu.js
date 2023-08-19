import outsideClick from "./outsideclick.js";

export default class DropDownMenu {
  constructor(dropDownsMenu, tabDropMenu, tabContents, events) {
    // Selecionar os nodes do dropMenu
    this.dropDownMenus = document.querySelectorAll(dropDownsMenu);
    // Para mudar as sections dos animes
    this.tabDropMenu = document.querySelectorAll(tabDropMenu);
    this.tabContent = document.querySelectorAll(tabContents);
    this.activeClass = "ativo";

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);

    /* Define Touchstart e click como arg padrao de events */
    if (events === undefined) {
      this.eventos = ["touchstart", "click", "mousemove"];
    } else {
      this.eventos = events;
    }
  }

  /* Ativa o Drop dowm Menu */
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeClass);
    outsideClick(element, this.eventos, () => {
      element.classList.remove(this.activeClass);
    });
  }

  /* Adiciona o evento no menu */
  addDropDownMenusEvent() {
    this.dropDownMenus.forEach((menu) => {
      ["touchstart", "click", "mousemove"].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
    this.switchAnimes();
  }

  /* Ativar respectiva tab com o index do mesmo */
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });

    const direction = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  /* Muda o content pelo clique no menu */
  switchAnimes() {
    if (this.tabDropMenu.length && this.tabContent.length) {
      this.tabDropMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => {
          this.activeTab(index);
        });
        itemMenu.addEventListener("touchstart", () => {
          this.activeTab(index);
        });
      });
    }
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropDownMenusEvent();
    }
    return this;
  }
}
