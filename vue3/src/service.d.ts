import { Counter } from './counter.service';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    counter: Counter;
  }
}