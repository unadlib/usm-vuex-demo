import Vue from "vue";
import Router from "vue-router";
import { injectable } from "inversify";
import Module from "../../lib/baseModule";

@injectable()
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
