export default class Modal {
  constructor(
    bOpen,
    bClose,
    bInto,
    containerModal,
    containerModalR,
    registerModal,
    IdIconOpen,
    IdIconClose
  ) {
    this.bOpen = document.querySelector(bOpen);
    this.bClose = document.querySelector(bClose);
    this.bInto = document.querySelector(bInto);
    this.containerModal = document.querySelector(containerModal);
    this.containerModalR = document.querySelector(containerModalR);
    this.registerModal = document.querySelector(registerModal);

    this.eyeIcon = document.getElementById(IdIconOpen);
    this.password = document.getElementById(IdIconClose);

    this.activeClass = "ativo";

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.LoginToRegister = this.LoginToRegister.bind(this);
  }

  showPassword() {
    if (this.password.type === "password") {
      this.password.type = "text";
      this.eyeIcon.src = "./img/eye-open.png";
    } else {
      this.password.type = "password";
      this.eyeIcon.src = "./img/eye-close.png";
    }
  }

  toggleModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  LoginToRegister(event) {
    event.preventDefault();
    this.containerModal.classList.toggle(this.activeClass);
    this.containerModalR.classList.toggle(this.activeClass);
    const ModalHeight = document
      .getElementById("modalR")
      .offsetHeight.toString();
    document
      .getElementById("bg-register")
      .setAttribute("style", `height:${ModalHeight}px`);
  }

  addModalEvents() {
    this.bOpen.addEventListener("click", this.eventToggleModal);
    this.bClose.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOutModal);
    this.registerModal.addEventListener("click", this.LoginToRegister);
    this.eyeIcon.addEventListener("click", this.showPassword);
  }

  init() {
    if (this.bOpen && this.bClose && this.containerModal) {
      this.addModalEvents();
    }
  }
}
