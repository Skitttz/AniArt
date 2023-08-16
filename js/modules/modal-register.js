export default function initModalRegister() {
  const bOpen = document.querySelector("[data-modal='openR']");
  const bClose = document.querySelector("[data-modal='closeR']");
  const bInto = document.querySelector("[data-modal='intoR']");
  const containerModalR = document.querySelector("[data-modal='containerR']");

  function toggleModalR(event) {
    event.preventDefault();
    containerModalR.classList.toggle("ativo");
    const ModalHeight = document
      .getElementById("modalR")
      .offsetHeight.toString();
    document
      .getElementById("bg-register")
      .setAttribute("style", `height:${ModalHeight}px`);
  }

  function clickOutModalR(event) {
    if (event.target === this) {
      toggleModalR(event);
    }
  }
  function intoModalR() {}

  if (bOpen && bClose && containerModalR) {
    bOpen.addEventListener("click", toggleModalR);
    bClose.addEventListener("click", toggleModalR);
    bInto.addEventListener("click", intoModalR);
    containerModalR.addEventListener("click", clickOutModalR);
  }
}
