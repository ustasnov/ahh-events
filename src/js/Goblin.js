import View from "./View";

export default class Goblin extends View {
  constructor() {
    super();
    this.html = `<div class="goblin"></div>`;
  }

  show() {
    super.show();
    this._element = this._container.querySelector(".goblin");
  }

  hide() {
    if (this._container) {
      this._container.innerHTML = "";
    }
  }
}
