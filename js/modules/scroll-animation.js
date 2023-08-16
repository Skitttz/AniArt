export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-animation='scroll']");
  let animationInZoom = 0.8;
  const windowScreenSplit = window.innerHeight * animationInZoom;

  function animationScroll() {
    const ZoomLevel = Math.round(window.devicePixelRatio * 100);
    if (ZoomLevel <= 68) {
      animationInZoom = 1.1;
    } else if (ZoomLevel > 100) {
      animationInZoom = 0;
    } else {
      animationInZoom = 0.8;
    }

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      const isSectionVisible = sectionTop - windowScreenSplit < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  if (sections.length) {
    animationScroll();
    window.addEventListener("scroll", animationScroll);
  }
}
