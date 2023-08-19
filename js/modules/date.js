export default class DateObject {
  constructor(target, objectTarget) {
    this.now = new Date();
    this.span = document.querySelectorAll(target);
    this.animesYears = objectTarget;
  }

  /* Inserir Objeto Data e colocar valor no span */
  createObjectDate() {
    this.animesYears.forEach((item, index) => {
      const Anos = this.now.getFullYear() - item.year;
      this.span[index].innerText = `${Anos} anos atrás`;
    });
  }

  init() {
    if (this.span.length && this.animesYears.length) {
      this.createObjectDate();
    }
  }
}
