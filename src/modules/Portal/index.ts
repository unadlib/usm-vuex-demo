import Module, { state, action, computed } from "../../lib/baseModule";

export default class Portal extends Module {
  get counter() {
    return this._modules.counter;
  }

  get todos() {
    return this._modules.todos;
  }
}
