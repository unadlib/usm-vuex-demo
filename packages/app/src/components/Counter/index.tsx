import { Component, Vue, Prop } from "vue-property-decorator";
import './style.scss';

type Calculate = (sum: number) => void;

@Component
export default class CounterView extends Vue {
  @Prop() count!: number;
  @Prop(Function) calculate!: Calculate; 

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