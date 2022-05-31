export class Snake {
  //获取蛇头
  head: HTMLElement;
  //获取蛇的身体
  bodies: HTMLElement;
  //获取蛇的容器
  element: HTMLElement;
  constructor() {
    console.log("snack");
    this.bodies = document.getElementById("snake")!;

    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.element = document.getElementById("snake")!;
  }

  //获取蛇的坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  //设置蛇的坐标
  set X(value) {
    this.head.style.left = value + "px";
  }
  set Y(value) {
    console.log("进来了");
    console.log(value);

    this.head.style.top = value + "px";
  }

  //添加蛇的身体
  addBody() {
    let div = document.createElement("div");
    this.bodies.appendChild(div);
    this.bodies.appendChild(div);
    this.bodies.appendChild(div);
    this.bodies.appendChild(div);
    this.bodies.appendChild(div);
  }
}
