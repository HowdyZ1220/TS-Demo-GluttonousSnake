export class Snake {
  //获取蛇头
  head: HTMLElement;
  //获取蛇的身体
  bodies: HTMLCollection;
  //获取蛇的容器
  element: HTMLElement;
  constructor() {
    this.head = document.querySelector("#snake>div")!;
    this.element = document.getElementById("snake")!;
    this.bodies = this.element.getElementsByTagName("div");
  }

  //获取蛇的坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetHeight;
  }

  //设置蛇的坐标
  set X(value) {
    this.head.style.left = value + "px";
  }
  set Y(value) {
    this.head.style.height = value + "px";
  }

  //添加蛇的身体
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
}
