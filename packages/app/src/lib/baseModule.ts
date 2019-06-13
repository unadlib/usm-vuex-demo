import Module, { state, action, computed } from "usm-vuex";
import createLogger from 'vuex/dist/logger';

class BaseModule<T = {}> extends Module<T> {
   plugins = [createLogger()];
}

export {
   BaseModule as default,
   state,
   action,
   computed
}
