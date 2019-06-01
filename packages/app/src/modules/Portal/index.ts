import { injectable, inject } from 'inversify';
import Module from "../../lib/baseModule";
import Counter from "../Counter";
import Todos from "../Todos";
import Navigation from "../Navigation";
import moduleConnect from '../../lib/moduleConnect';

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
    const params = {
      modules: {
        counter,
        navigation,
        todos
      }
    };
    super(params as any);
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
        const [name, {path, screen, module}] = item;
        const component = moduleConnect(screen, module);
        return {
          path,
          name,
          component
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
