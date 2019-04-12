import { injectable } from "inversify";
import Module, { state, action, computed } from "../../lib/baseModule";
import Todo from 'todo';
console.log(Todo);

interface Todo {
  text: string;
  completed: boolean;
}

@injectable()
export default class Counter extends Module {
  @state list: Todo[] = [];

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