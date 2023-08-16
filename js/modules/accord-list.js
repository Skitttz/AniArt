export default function initAccordList() {
  const accordList = document.querySelectorAll(
    '[data-animation="accordList"] dt'
  );
  const active = "ativo";

  if (accordList.length) {
    accordList[0].classList.add(active);
    accordList[0].nextElementSibling.classList.add(active);
  }

  function activeAcc() {
    this.classList.toggle(active);
    this.nextElementSibling.classList.toggle(active);
  }
  accordList.forEach((item) => {
    item.addEventListener("click", activeAcc);
  });
}
