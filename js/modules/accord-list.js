export default class AccordList {
  constructor(list) {
    this.accordList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  /* Adicionar eventos na FAQ */
  addAccordionEvent() {
    this.accordList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  /* Iniciar Funcao */
  init() {
    if (this.accordList.length) {
      /* Ativar primeiro Item */
      this.toggleAccordion(this.accordList[0]);
      this.addAccordionEvent();
    }
  }
}
