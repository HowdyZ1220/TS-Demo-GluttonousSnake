export class ScorePanel {
  score = 0;
  level = 1;

  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  maxLevel: number;
  upScore: number;

  constructor(maxLevel: number, upScore: number) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  addScore() {
    this.scoreEle.innerHTML = "SCORE: " + ++this.score + " ";
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = "LEVEL: " + ++this.level + "";
    }
  }
}
