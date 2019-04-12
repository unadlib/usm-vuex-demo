import { injectable } from "inversify";
import Module, { state, action, computed } from "../../lib/baseModule";

@injectable()
export default class Counter extends Module {
  @state count: number;

  constructor(...args: []) {
    super(...args);
    this.count = 0;
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
