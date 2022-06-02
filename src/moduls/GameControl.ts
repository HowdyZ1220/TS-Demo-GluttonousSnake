import { Snake } from "./Snake";
import { Food } from "./Food";
import { ScorePanel } from "./ScorePanel";

//游戏控制器，控制其他的所有类
export class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string;
  //记录游戏是否结束
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(20, 10);
    this.init();
    this.direction = "ArrowRight";
    // this.isLive = true;
  }

  init() {
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }

  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;

    // this.run();
  }

  //创建让蛇移动的方法

  //获取蛇现在的坐标
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

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
    this.checkEat(X, Y);
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      alert((e as any).message + "GAME OVER");
      this.isLive = false;
    }
    clearTimeout();
    this.isLive && setTimeout(this.run.bind(this), 300);
  }

  //蛇吃到食物
  checkEat(X: number, Y: number) {
    console.log(this.food.X, this.food.Y, X, Y);

    if (X === this.food.X && Y === this.food.Y) {
      console.log(X, "X", Y, "Y");
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
      console.log("吃到十五");
    }
  }
}
