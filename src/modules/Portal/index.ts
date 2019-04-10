import Module, { state, action, computed } from "../../lib/baseModule";
import Counter from "../Counter";
import Todos from "../Todos";

export default class Portal extends Module {
  get counter() {
    return this._modules.counter as Counter;
  }

  get todos() {
    return this._modules.todos as Todos;
  }
}
