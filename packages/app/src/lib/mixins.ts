import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare a mixin as the same style as components.
@Component
export class FoobarMixin extends Vue {
  mixinValue = 'Hello'

  add(a: number, b: number): number {
    return a + b;
  }
}
