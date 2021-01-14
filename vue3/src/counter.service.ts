import { state, action } from 'usm-vuex';

export class Counter {
  @state
  count = { sum: 0 };

  @action
  increase() {
    this.count.sum += 1;
  }
}