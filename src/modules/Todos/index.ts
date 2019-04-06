import Module, { state, action, computed } from "../../lib/baseModule";

interface Todo {
  text: string;
  completed: boolean;
}

interface State {
  list: Todo[];
}

export default class Counter extends Module {
  @state list = [];

  @action
  add(text: string, state: State) {
    state.list.push({ text, completed: false });
  }

  @action
  toggle(index: number, state: State) {
    const todo = state.list[index];
    todo.completed = !todo.completed;
  }

  @action
  edit(text: string, index: number, state: State) {
    state.list[index].text = text;
  }

  @action
  remove(index: number, state: State) {
    state.list.splice(index, 1);
  }

  @action
  clearAllCompleted(state: State) {
    state.list = state.list.filter(({ completed }) => !completed);
  }
}