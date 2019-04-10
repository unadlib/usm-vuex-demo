import Module, { state, action, computed } from "../../lib/baseModule";

interface Todo {
  text: string;
  completed: boolean;
}

function defineState(target: any, states: any) {
  Object.entries(states).forEach(([key, value]) => {
    Object.defineProperty(target, key, state(target, key, { initializer: () => value }));
  });
}

export default class Counter extends Module {
  // @state list = [];
  list: Todo[];
  constructor(...args: []) {
    super(...args);
    this.list = [];
    defineState(this, {
      list: this.list,
    });
  }

  @action
  add(text: string, state?: any) {
    state.list.push({ text, completed: false });
  }

  @action
  toggle(index: number, state?: any) {
    const todo = state.list[index];
    todo.completed = !todo.completed;
  }

  @action
  edit(text: string, index: number, state?: any) {
    state.list[index].text = text;
  }

  @action
  remove(index: number, state?: any) {
    state.list.splice(index, 1);
  }

  @action
  clearAllCompleted(state?: any) {
    state.list = state.list.filter(({ completed }: Todo) => !completed);
  }
}