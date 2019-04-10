import Vue from "vue";
import Router from "vue-router";
import Todos from "./views/Todos.vue";
import Counter from "./views/Counter.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Todos
    },
    {
      path: "/counter",
      name: "counter",
      // component: Counter
      component: () => import("./views/Counter.vue")
    }
  ]
});
