import View from "./View";

export default class Score extends View {
  constructor() {
    super();
    this._data = [0, 0];
    this._html = `<div class="score title">Счет  0 : 0</div>`;
  }

  get data() {
    return Array.from(this._data);
  }

  set data(value) {
    this._data = Array.from(value);
    this._element.textContent = `Счет  ${this._data[0]} : ${this._data[1]}`;
  }

  show() {
    super.show();
    this._element = this._container.querySelector(".score");
  }
}
