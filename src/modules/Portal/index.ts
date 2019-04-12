import { injectable, inject } from 'inversify';
import Module from "../../lib/baseModule";
import Counter from "../Counter";
import Todos from "../Todos";
import Navigation from "../Navigation";

export interface AppOptions {
  main: any;
  components: any;
}
@injectable()
export default class Portal extends Module {
  public _counter: Counter;
  public _todos: Todos;
  public _navigation: Navigation;
  public _appOptions: AppOptions;

  constructor(
    @inject("Counter") counter: Counter,
    @inject("Todos") todos: Todos,
    @inject("Navigation") navigation: Navigation,
    @inject("AppOptions") appOptions: AppOptions,
  ) {
    const modules = {
      counter,
      navigation,
      todos
    };
    super({ modules });
    this._counter = counter;
    this._todos = todos;
    this._navigation = navigation;
    this._appOptions = appOptions;
  }

  get counter() {
    return this._counter;
  }

  get todos() {
    return this._todos;
  }

  get navigation() {
    return this._navigation;
  }

  get main() {
    return this._appOptions.main;
  }

  get routes() {
    return Object.entries(this._appOptions.components)
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
