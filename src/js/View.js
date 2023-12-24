export default class View {
  constructor() {
    this._container = null;
    this._html = "";
    this._element = document.createElement("div");
  }

  set сontainer(value) {
    this._container = value;
    this.show();
  }

  get сontainer() {
    return this._container;
  }

  get element() {
    return this._element;
  }

  set html(value) {
    this._html = value;
  }

  get html() {
    return this._html;
  }

  show() {
    if (this._container) {
      const _child = this._container.appendChild(this._element);
      _child.outerHTML = this._html;
    }
  }
}
