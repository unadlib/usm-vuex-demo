import Vue from "vue";
declare module "*.vue" {
  export default Vue;
}

// import Vue from "vue";
import Portal from "./modules/Portal";

declare module 'vue/types/vue' {
  interface Vue {
    portal: Portal
  }
}