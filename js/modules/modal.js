export default function initModal() {
  const bOpen = document.querySelector("[data-modal='open']");
  const bClose = document.querySelector("[data-modal='close']");
  const bInto = document.querySelector("[data-modal='into']");
  const containerModal = document.querySelector("[data-modal='container']");
  const containerModalR = document.querySelector("[data-modal='containerR']");
  const registerModal = document.querySelector(
    "[data-modal='openRegisterIntoLogin']"
  );
  const eyeIcon = document.getElementById("eyeIcon");
  const password = document.getElementById("password");

  function showPassword() {
    eyeIcon.onclick = function passworClick() {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.src = "./img/eye-open.png";
      } else {
        password.type = "password";
        eyeIcon.src = "./img/eye-close.png";
      }
    };
  }

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function clickOutModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }
  function intoModal() {}

  function LoginToRegister(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
    containerModalR.classList.toggle("ativo");
    const ModalHeight = document
      .getElementById("modalR")
      .offsetHeight.toString();
    document
      .getElementById("bg-register")
      .setAttribute("style", `height:${ModalHeight}px`);
  }

  if (bOpen && bClose && containerModal) {
    bOpen.addEventListener("click", toggleModal);
    bClose.addEventListener("click", toggleModal);
    bInto.addEventListener("click", intoModal);
    containerModal.addEventListener("click", clickOutModal);
    registerModal.addEventListener("click", LoginToRegister);
    showPassword();
  }
}
