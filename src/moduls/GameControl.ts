import { Snake } from "./Snake";
import { Food } from "./Food";
import { ScorePanel } from "./ScorePanel";

//游戏控制器，控制其他的所有类
export class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(20, 10);
    this.init();
    this.direction = "ArrowRight";
    // console.log("game");
  }

  init() {
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    // console.log();
    // console.log(this.run());

    // console.log("进来了");
  }

  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
    console.log(this);

    this.run();
  }

  //创建让蛇移动的方法

  //获取蛇现在的坐标
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;
    console.log("x", X, "Y", Y);
    console.log(this.direction);

    switch (this.direction) {
      case "ArrowUp":
        Y = Y - 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
      case "ArrowDown":
        Y = Y + 10;
        break;
    }
    this.snake.X = X;
    this.snake.Y = Y;
    // setTimeout(this.run.bind(this), 300);
  }
}
