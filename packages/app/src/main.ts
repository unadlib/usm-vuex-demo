import "reflect-metadata";
import Vue from "vue";
import "./registerServiceWorker";
import { load } from './lib/loader';
import Portal from "./modules/Portal";
import Counter from "./modules/Counter";
import Todos from "./modules/Todos";
import Navigation from "./modules/Navigation";
import App from "./App.vue";
import TodosView from "./components/Todos";
import CounterView from "./components/Counter";

Vue.config.productionTip = false;

const {
  portal,
  app,
} = load({
  bootstrap: 'Portal',
  modules: {
    Counter,
    Todos,
    Portal,
    Navigation
  },
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

Vue.prototype.portal = portal;

new Vue(app).$mount("#app");
