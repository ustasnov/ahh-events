import { randomInteger } from "./utils";

export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.intervalId = null;
    this.score = gamePlay.score;
    this.result = gamePlay.result;
    this.hit = false;
  }

  init() {
    this.gamePlay.drawUi(this.theme);
    this.gamePlay.addStartGameListener(this.onStartGame.bind(this));
    this.gamePlay.addStopGameListener(this.onStopGame.bind(this));
    this.gamePlay.addGoblinListener(this.onGoblin.bind(this));
  }

  showGoblin() {
    let position = randomInteger(0, this.gamePlay.boardSize ** 2 - 1);
    this.gamePlay.showGoblin(position);
  }

  onStartGame() {
    this.hit = false;
    this.score.data = [0, 0];
    this.result.data = "";

    this.showGoblin();
    this.intervalId = setInterval(() => {
      this.showGoblin();
      if (this.hit) {
        this.hit = false;
      } else {
        this.score.data = [this.score.data[0], this.score.data[1] + 1];
        this.checkEndOfGame();
      }
    }, 1000);
  }

  onStopGame() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.gamePlay.clearCell();
  }

  onGoblin() {
    this.hit = true;
    this.gamePlay.clearCell();
    this.score.data = [this.score.data[0] + 1, this.score.data[1]];
    this.checkEndOfGame();
  }

  checkEndOfGame() {
    if (this.score.data[0] === 5 || this.score.data[1] === 5) {
      this.onStopGame();
      if (this.score.data[0] === 5) {
        this.result.data = "Победа! :)";
      } else {
        this.result.data = "Проигрыш :(";
      }
    }
  }
}
