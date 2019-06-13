import { injectable } from "inversify";
import Module, { state, action, computed } from "../../lib/baseModule";
import Todo from 'todo';
console.log(Todo);

interface Todo {
  text: string;
  done: boolean;
}

@injectable()
export default class Todos extends Module {
  @state list: Todo[] = [];

  @action
  addTodo(text: string, state?: any) {
    state.list.push({ text, done: false });
  }

  @action
  removeTodo(todo: Todo, state?: any) {
    const index = state.list.indexOf(todo);
    state.list.splice(index, 1);
  }

  clearCompleted() {
    this.list.filter((todo: Todo) => todo.done)
      .forEach((todo: Todo) => {
        this.removeTodo(todo);
      });
  }

  getViewProps() {
    return {
      list: this.list,
      add: (text: string) => this.addTodo(text)
    }
  }
}