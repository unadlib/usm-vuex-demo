import Module, { state, action, computed } from "../../lib/baseModule";
import Counter from "../Counter";
import Todos from "../Todos";
import Navigation from "../Navigation";

export default class Portal extends Module {
  get counter() {
    return this._modules.counter as Counter;
  }

  get todos() {
    return this._modules.todos as Todos;
  }

  get navigation() {
    return this._modules.navigation as Navigation;
  }

  get main() {
    return this._arguments.main;
  }

  get routes() {
    return Object.entries(this._arguments.components)
      .map((item: any) => {
        return {
          path: item[1].path,
          name: item[0],
          component: item[1].screen
        }
      });
  }

  createApp() {
    const router = this.navigation.createRouter(this.routes);
    return {
      router,
      store: this.store,
      render: (h: any) => h(this.main)
    }
  }
}
