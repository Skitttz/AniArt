export default class ModalRegister {
  constructor(bOpen, bClose, bInto, containerModalR) {
    this.bOpen = document.querySelector(bOpen);
    this.bClose = document.querySelector(bClose);
    this.bInto = document.querySelector(bInto);
    this.containerModalR = document.querySelector(containerModalR);

    this.activeClass = "ativo";

    this.eventToggleModalR = this.eventToggleModalR.bind(this);
    this.clickOutModalR = this.clickOutModalR.bind(this);
  }

  toggleModalR() {
    this.containerModalR.classList.toggle(this.activeClass);
  }

  eventToggleModalR(event) {
    event.preventDefault();
    this.toggleModalR();
    /* Imagem ficar na mesma altura do modal, o ID do container: modalR e a ID da imagem:bg-register  */
    const ModalHeight = document
      .getElementById("modalR")
      .offsetHeight.toString();
    document
      .getElementById("bg-register")
      .setAttribute("style", `height:${ModalHeight}px`);
  }

  /* Fecha Modal se clicar fora */
  clickOutModalR(event) {
    if (event.target === this.containerModalR) {
      this.toggleModalR(event);
    }
  }

  init() {
    if (this.bOpen && this.bClose && this.containerModalR) {
      this.bOpen.addEventListener("click", this.eventToggleModalR);
      this.bClose.addEventListener("click", this.eventToggleModalR);
      this.containerModalR.addEventListener("click", this.clickOutModalR);
    }
  }
}
