import Goblin from "./Goblin";
import Score from "./Score";
import Controls from "./Controls";
import Board from "./Board";
import Result from "./Result";

export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
    this.startGameListeners = [];
    this.stopGameListeners = [];
    this.goblinListeners = [];
    this.currentPosition = -1;
    this.goblin = new Goblin();
    this.controls = new Controls();
    this.score = new Score();
    this.board = new Board();
    this.result = new Result();
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }
    this.container = container;
  }

  drawUi(theme) {
    this.checkBinding();

    this.controls.сontainer = this.container;
    this.score.сontainer = this.container;
    this.board.сontainer = this.container;
    this.result.сontainer = this.container;

    this.startGameEl = this.container.querySelector(".start");
    this.stopGameEl = this.container.querySelector(".stop");

    this.startGameEl.addEventListener("click", (event) =>
      this.onStartGameClick(event)
    );

    this.stopGameEl.addEventListener("click", (event) =>
      this.onStopGameClick(event)
    );

    this.boardEl = this.container.querySelector(".board");

    this.boardEl.classList.add(theme);
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add("cell", "map-tile", "map-tile-center");
      this.boardEl.appendChild(cellEl);
    }

    this.cells = Array.from(this.boardEl.children);
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error("GamePlay not bind to DOM");
    }
  }

  addStartGameListener(callback) {
    this.startGameListeners.push(callback);
  }

  addStopGameListener(callback) {
    this.stopGameListeners.push(callback);
  }

  addGoblinListener(callback) {
    this.goblinListeners.push(callback);
  }

  onStartGameClick(event) {
    event.preventDefault();
    this.startGameListeners.forEach((o) => o.call(null));
  }

  onStopGameClick(event) {
    event.preventDefault();
    this.stopGameListeners.forEach((o) => o.call(null));
  }

  onGoblinClick(event) {
    event.preventDefault();
    this.goblinListeners.forEach((o) => o.call(null));
  }

  static showMessage(message) {
    alert(message);
  }

  showGoblin(position) {
    if (position != this.currentPosition) {
      this.goblin.hide();
      this.goblin.сontainer = this.boardEl.children[position];

      this.goblin.element.addEventListener("click", (event) =>
        this.onGoblinClick(event)
      );

      this.currentPosition = position;
    }
  }

  clearCell() {
    if (this.currentPosition > -1) {
      this.goblin.hide();
    }
  }
}
