import Vue from 'vue'
import { Counter } from './counter.service';

declare module 'vue/types/vue' {
  interface Vue {
    counter: Counter
  }
}