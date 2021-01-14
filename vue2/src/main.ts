import Vue from "vue";
import { createStore } from "usm-vuex";
import App from "./App.vue";
import { Counter } from "./counter.service";

Vue.config.productionTip = false;

const counter = new Counter();

const store = createStore({
  modules: [counter],
});

Vue.prototype.counter = counter;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
