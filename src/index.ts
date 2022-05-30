import "./style/style.less";
import { Food } from "./moduls/Food";
import { ScorePanel } from "./moduls/ScorePanel";

//定义食物类Food

const food = new Food();
console.log(food.X, food.Y);
food.change();
console.log(food.X, food.Y);
