export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-animation='scroll']");
  let animationInZoom = 0.8;
  let isZoomLow = false;
  let value = 300;
  const windowScreenSplit = window.innerHeight * animationInZoom;

  function animationScroll() {
    const ZoomLevel = Math.round(window.devicePixelRatio * 100);
    if (ZoomLevel > 50 && ZoomLevel <= 68) {
      animationInZoom = 2;
      isZoomLow = false;
      value = 300;
    } else if (ZoomLevel > 34 && ZoomLevel <= 50) {
      animationInZoom = 5;
      isZoomLow = false;
      value = 200;
    } else if (ZoomLevel <= 34) {
      animationInZoom = 33;
      isZoomLow = true;
    } else if (ZoomLevel > 100) {
      animationInZoom = 0;
      isZoomLow = false;
      value = 300;
    } else {
      animationInZoom = 0.8;
      isZoomLow = false;
    }

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowScreenSplit + value < 0;
      if (isSectionVisible || isZoomLow) {
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
