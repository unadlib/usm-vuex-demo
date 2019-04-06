import Module, { state, action, computed } from "../../lib/baseModule";

export default class Counter extends Module {
  @state count: number = 0;

  @action
  calculate(num: number, state: any) {
    state.count += num;
  }
}
