export class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.querySelector("#food")!;
  }
  get X() {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop;
  }
  change() {
    const left = Math.floor(Math.random() * 29) * 10;
    const top = Math.floor(Math.random() * 29) * 10;
    console.log(this.element.style);

    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}
