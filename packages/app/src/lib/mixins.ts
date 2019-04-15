import Vue from 'vue'
import Component from 'vue-class-component'

export type Value = {
  text: string;
};
@Component
export class FoobarMixin extends Vue {
  mixinValue = 'Hello'

  add(a: number, b: number): number {
    this.log({ text: 'test' });
    return a + b;
  }

  log(str: Value): void {
    throw new Error("Method not implemented.");
  }
}
