import View from "./View";

export default class Controls extends View {
  constructor() {
    super();
    this._html = `<div class="controls">
        <button data-id="action-start" class="btn start">Начать</button>
        <button data-id="action-stop" class="btn stop">Остановить</button>
      </div>`;
  }
}
