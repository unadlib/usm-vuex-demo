import { injectable, inject } from "inversify";
import Module, { state, action, computed } from "../../lib/baseModule";
import Counter from "../Counter";
import Todo from 'todo';
console.log(Todo);

interface Todo {
  text: string;
  done: boolean;
}

interface TodosDeps {
  counter: Counter;
}

@injectable()
export default class Todos extends Module<TodosDeps> {
  @state list: Todo[] = [];

  constructor(
    @inject("Counter") counter: Counter,
  ) {
    super({
      modules: {
        counter,
      }
    });
  }

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

  @computed
  get count() {
    console.log('computed');
    return this._modules.counter.count;
  }

  getViewProps() {
    return {
      list: this.list,
      count: this.count,
      add: (text: string) => this.addTodo(text),
    }
  }
}