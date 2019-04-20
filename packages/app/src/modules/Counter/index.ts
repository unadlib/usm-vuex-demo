import { injectable } from "inversify";
import { Model } from '@vuex-orm/core';
import Module, { state, action, computed } from "../../lib/baseModule";

class User extends Model {
  static entity = 'users'
  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      email: this.attr('')
    }
  }
}
class Post extends Model {
  static entity = 'posts' 
  static fields () {
    return {
      id: this.attr(null),
      user_id: this.attr(null),
      title: this.attr(''),
      body: this.attr(''),
      published: this.attr(false),
      author: this.belongsTo(User, 'user_id')
    }
  }
}

@injectable()
export default class Counter extends Module {
  @state count: number = 0;

  @action
  calculate(num: number, state?: any) {
    state.count += num;
  }

  getViewProps() {
    return {
      count: this.count,
      calculate: (num: number) => this.calculate(num)
    }
  }

  get models(): any {
    return [
      User,
      Post
    ]
  }
}
