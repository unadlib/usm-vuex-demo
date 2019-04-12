import Module, { state, action, computed } from "../../lib/baseModule";

export default class Counter extends Module {
  count: number;

  constructor(...args: []) {
    super(...args);
    this.count = 0;
    this.defineStates('count');
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
