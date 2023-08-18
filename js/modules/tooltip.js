export default class Tooltip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  /* Move a Tooltip com seus estilos de acordo com a posicao do Mouse */
  onMouseMove(event) {
    this.toolTipBox.style.top = `${event.pageY + 20}px`;
    this.toolTipBox.style.left = `${event.pageX + 20}px`;
    /* Caso fosse uma Imagem de Mapa */
    // if (event.pageX + 240 > window.innerWidth) {
    //   this.toolTipBox.style.left = `${event.pageX - 150}px`;
    // } else {
    //   this.toolTipBox.style.left = `${event.pageX + 20}px`;
    // }
  }

  /* Remove a Tooltip com seus estilos de acordo com a posicao do Mouse */
  onMouseLeave({ currentTarget }) {
    this.toolTipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  /* Criar tooltip box e insere no body */
  createToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const textToolTip = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerHTML = textToolTip;
    document.body.appendChild(toolTipBox);
    this.toolTipBox = toolTipBox;
  }

  /* Criar ToolTip e add events de MouseMove e MouseLeave ao target */
  onMouseOver({ currentTarget }) {
    /* Cria a ToolTip e cria prop */
    this.createToolTipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  /* Adicionar os eventos de MouseOver a cada Tooltip */
  addToolTipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addToolTipEvent();
    }
    return this;
  }
}
