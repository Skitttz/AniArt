export default function initScrollSmooth() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="smooth"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    let topSection = section.offsetTop;
    if (href === "#animes") {
      topSection = 0;
    }
    if (href === "#cm") {
      topSection *= 0.8;
    }

    window.scrollTo({
      top: topSection,
      behavior: "smooth",
    });
  }

  const eventos = ["click", "touchstart"];

  eventos.forEach((evento) => {
    linksInternos.forEach((link) => {
      link.addEventListener(evento, scrollToSection);
    });
  });
  // linksInternos.forEach((link) => {
  //   link.addEventListener("click",scrollToSection)
  // });
  // linksInternos.forEach((link) => {
  //   link.addEventListener("touchstart",scrollToSection)
  // });
}
