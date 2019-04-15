import Module, { state, action, computed } from "usm-vuex";
import createLogger from 'vuex/dist/logger';

class BaseModule extends Module {
   plugins = [createLogger()];
}

export {
   BaseModule as default,
   state,
   action,
   computed
}
