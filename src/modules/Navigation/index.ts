import Vue from "vue";
import Router from "vue-router";
import Module, { state, action, computed } from "../../lib/baseModule";

export default class Navigation extends Module {
  constructor(...args: []) {
    super(...args);
    Vue.use(Router);
  }

  createRouter(routes: any) {
    return new Router({
      mode: "history",
      base: process.env.BASE_URL,
      routes
    });
  }
}
