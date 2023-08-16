export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip");

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = `${event.pageY+20}px`;
      this.toolTipBox.style.left = `${event.pageX+20}px`;
    },
  };
  const onMouseLeave = {
    toolTipBox: "",
    element: "",
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function createToolTipBox(elemenent) {
    const toolTipBox = document.createElement("div");
    const textToolTip = elemenent.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerHTML = textToolTip;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }

  function onMouseOver() {
    const toolTipBox = createToolTipBox(this);

    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}