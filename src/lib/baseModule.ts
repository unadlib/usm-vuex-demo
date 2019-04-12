import Module, { state, action, computed } from "usm-vuex";

class BaseModule extends Module {
   defineStates(...stateKeys: string[]) {
      stateKeys.forEach(key => {
         Object.defineProperty(this, key, state(this, key, { initializer: () => this[key] }));
      });
   }
}

export {
   BaseModule as default,
   state,
   action,
   computed
}
