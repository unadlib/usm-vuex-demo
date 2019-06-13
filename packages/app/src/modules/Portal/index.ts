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

interface PortalDeps {
  counter: Counter;
  todos: Todos;
  navigation: Navigation;
  appOptions: AppOptions;
}
@injectable()
export default class Portal extends Module<PortalDeps> {
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
        todos,
        appOptions
      }
    };
    super(params);
  }

  get counter() {
    return this._modules.counter;
  }

  get todos() {
    return this._modules.todos;
  }

  get navigation() {
    return this._modules.navigation;
  }

  get main() {
    return this._modules.appOptions.main;
  }

  get routes() {
    return Object.entries(this._modules.appOptions.components)
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
