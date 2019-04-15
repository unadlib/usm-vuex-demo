import { Component, Prop, Mixins } from "vue-property-decorator";
import { FoobarMixin } from '../../lib/mixins';
import './style.scss';

type Calculate = (sum: number) => void;

@Component
export default class CounterView extends Mixins<FoobarMixin>(FoobarMixin) {
  @Prop() count!: number;
  @Prop(Function) calculate!: Calculate;
  
  created () {
    console.log(this.add(1, 1), this.mixinValue);
  }

  render(){
    return (
      <div class="body">
        <button onClick={()=> this.calculate(1)}>+</button>
        <span>{this.count}</span>
        <button onClick={()=> this.calculate(-1)}>-</button>
      </div>
    )
  }
}