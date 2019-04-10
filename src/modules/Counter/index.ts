import Module, { state, action, computed } from "../../lib/baseModule";

function defineState(target: any, states: any) {
  Object.entries(states).forEach(([key, value]) => {
    Object.defineProperty(target, key, state(target, key, { initializer: () => value }));
  });
}

export default class Counter extends Module {
  count: number;

  constructor(...args: []) {
    super(...args);
    this.count = 0;
    defineState(this, {
      count: this.count,
    });
  }

  @action
  calculate(num: number, state?: any) {
    state.count += num;
  }

  // data() {
  //   return {
  //     count: this.count,
  //   }
  // }

  // get methods() {
  //   return {
  //     increase: () => this.calculate(1),
  //     decrease: () => this.calculate(1),
  //   }
  // }
}
