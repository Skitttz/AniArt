export default function initAniNumber() {
  /* Node de numeros */
  const numeros = document.querySelectorAll("[data-number]");

  function aniNumbers() {
    numeros.forEach((numero) => {
      let start = 0;
      const total = +numero.innerText;
      const inc = Math.floor(total / 100);
      const timer = setInterval(() => {
        start += inc;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 50 * Math.random());
    });
  }

  /* Observer */
  const observerTarget = document.querySelector(".number");
  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      aniNumbers();
    }
  }
  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
