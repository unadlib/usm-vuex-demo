declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

import Vue from "vue";
import Portal from "./modules/Portal";

declare module 'vue/types/vue' {
  interface Vue {
    portal: Portal
  }
}