export default class AniNumber {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    /* bind o this do objeto ao CallBack colocar Bind */
    this.handleMutation = this.handleMutation.bind(this);
  }

  /* Incrimentar Numero e recebe um Elemento do DOM preferivel numero */
  static incNumber(numero) {
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
  }

  /* Node de numeros e ativar incNumber numero para cada numero selecionado do DOM */
  aniNumbers() {
    this.numeros.forEach((numero) => this.constructor.incNumber(numero));
  }

  /* Observer e Funcao que Ocorre quando a mutacoes acontecer */
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.aniNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
  }
}
