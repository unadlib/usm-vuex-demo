import Module, { state, action, computed } from "usm-vuex";
import createLogger from 'vuex/dist/logger';
import VuexORM from '@vuex-orm/core';
 
const database = new VuexORM.Database()

class BaseModule extends Module {
  constructor(...args: any[]) {
    super(...args);
    this.models.forEach((model: any) => {
      database.register(model);
      this[model.entity] = model;
    });
  }

  get models() {
    return [];
  }

  plugins = [createLogger(), VuexORM.install(database)];
}

export {
   BaseModule as default,
   state,
   action,
   computed
}
