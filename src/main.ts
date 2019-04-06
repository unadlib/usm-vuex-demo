import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import "./registerServiceWorker";
import Portal from "./modules/Portal";
import Counter from "./modules/Counter";
import Todos from "./modules/Todos";

Vue.config.productionTip = false;
const counter = new Counter();
const todos = new Todos();
const portal = Portal.create({
  modules: {
    todos,
    counter,
  }
})
Vue.prototype.portal = portal;

new Vue({
  router,
  store: portal.store as any,
  render: h => h(App)
}).$mount("#app");
