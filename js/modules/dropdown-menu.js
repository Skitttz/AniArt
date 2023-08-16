import outsideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  // Selecionar os nodes do dropMenu
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");
  // Para mudar as sections dos animes
  const tabDropMenu = document.querySelectorAll(".dropdown-menu li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const eventos = ["touchstart", "click", "mousemove"];

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
    outsideClick(this, eventos, () => {
      this.classList.remove("ativo");
    });
  }

  dropDownMenus.forEach((menu) => {
    ["touchstart", "click", "mousemove"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });

    const direction = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direction);
  }

  function switchAnimes() {
    if (tabDropMenu.length && tabContent.length) {
      tabDropMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => {
          activeTab(index);
        });
        itemMenu.addEventListener("touchstart", () => {
          activeTab(index);
        });
      });
    }
  }

  switchAnimes();
}
