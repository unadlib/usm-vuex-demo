import "reflect-metadata";
import Vue from "vue";
import { Container } from 'inversify';
import "./registerServiceWorker";
import Portal, { AppOptions } from "./modules/Portal";
import Counter from "./modules/Counter";
import Todos from "./modules/Todos";
import Navigation from "./modules/Navigation";
import App from "./App.vue";
import TodosView from "./components/Todos";
import CounterView from "./components/Counter";

Vue.config.productionTip = false;
const container = new Container({ skipBaseClassChecks: true });
container.bind<Counter>("Counter").to(Counter);
container.bind<Todos>("Todos").to(Todos);
container.bind<Portal>("Portal").to(Portal);
container.bind<Navigation>("Navigation").to(Navigation);
container.bind<AppOptions>("AppOptions").toConstantValue({
  main: App,
  components: {
    home: {
      screen: TodosView,
      path: '/',
      module: 'todos',
    },
    counter: {
      screen: CounterView,
      // screen: () => import("./views/Counter.vue"),
      path: '/counter',
      module: 'counter',
    },
  }
});
const portal = container.get<Portal>("Portal");
portal.bootstrap();
const app = portal.createApp();
Vue.prototype.portal = portal;

new Vue(app).$mount("#app");
