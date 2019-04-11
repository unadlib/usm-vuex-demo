import Vue from "vue";
import "./registerServiceWorker";
import Portal from "./modules/Portal";
import Counter from "./modules/Counter";
import Todos from "./modules/Todos";
import Navigation from "./modules/Navigation";
import App from "./App.vue";
import TodosView from "./views/Todos.vue";
import CounterView from "./views/Counter.vue";

Vue.config.productionTip = false;
const counter = new Counter();
const todos = new Todos();
const navigation = new Navigation();
export const portal = Portal.create({
  modules: {
    todos,
    counter,
    navigation,
  },
  main: App,
  components: {
    home: {
      screen: TodosView,
      path: '/',
      module: todos,
    },
    counter: {
      screen: CounterView,
      // screen: () => import("./views/Counter.vue"),
      path: '/counter',
      module: counter,
    },
  }
});
const app = portal.createApp(Vue);
Vue.prototype.portal = portal;

new Vue(app).$mount("#app");
