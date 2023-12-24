import View from "./View";

export default class Controls extends View {
  constructor() {
    super();
    this._html = `
      <div class="board-container">
        <div data-id="board" class="board"></div>
      </div>`;
  }
}
