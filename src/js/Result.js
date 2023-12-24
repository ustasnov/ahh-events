import View from "./View";

export default class Result extends View {
  constructor() {
    super();
    this._data = "";
    this._html = `<div class="result title"></div>`;
  }

  set data(value) {
    this._data = value;
    this._element.textContent = this._data;
  }

  show() {
    super.show();
    this._element = this._container.querySelector(".result");
  }
}
