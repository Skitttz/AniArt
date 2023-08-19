export default class DarkMode {
  constructor(targetClick, elements) {
    this.moon = document.querySelector(targetClick);
    this.sections = document.querySelectorAll(elements);
    this.eventos = ["click", "touchstart"];
    this.moon.style.fontSize = "1.2rem";
    this.changeIcon = this.changeIcon.bind(this);
  }

  changeMode() {
    this.sections.forEach((e) => {
      if (e.dataset.dark === "off") {
        e.dataset.dark = "on";
      } else if (e.dataset.dark === "on") {
        e.dataset.dark = "off";
      }
    });
  }

  changeIcon(event) {
    event.preventDefault();
    if (this.moon.innerText === "🌕") {
      this.moon.innerText = "🌑";
      this.changeMode();
    } else {
      this.moon.innerText = "🌕";
      this.changeMode();
    }
  }

  addEventDarkMode() {
    this.eventos.forEach((event) => {
      this.moon.addEventListener(event, this.changeIcon);
    });
  }

  init() {
    if (this.moon && this.sections) {
      this.addEventDarkMode();
    }
  }
}
