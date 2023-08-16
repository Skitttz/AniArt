export default function initDarkMode() {
  const moon = document.querySelector('[data-mode="light"] a');
  const sections = document.querySelectorAll("[data-dark]");
  const eventos = ["click", "touchstart"];

  moon.style.fontSize = "1.2rem";

  function changeMode() {
    sections.forEach((e) => {
      if (e.dataset.dark === "off") {
        e.dataset.dark = "on";
      } else if (e.dataset.dark === "on") {
        e.dataset.dark = "off";
      }
    });
  }

  function changeIcon(event) {
    event.preventDefault();
    if (moon.innerText === "🌕") {
      moon.innerText = "🌑";
      changeMode();
    } else {
      moon.innerText = "🌕";
      changeMode();
    }
  }

  eventos.forEach((event) => {
    moon.addEventListener(event, changeIcon);
  });
}
