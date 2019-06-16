import { Component, Vue, Prop } from "vue-property-decorator";
import AddTodo from "../AddTodo";
@Component
export default class TodosView extends Vue {
  // value = "";

  // addTodo() {
  //   this.add(this.value);
  //   this.value = "";
  // }

  @Prop(Function) add!: (input: string) => void;
  @Prop(Array) list!: any[];
  @Prop(Number) count!: number;

  render() {
    return (
      <div class="home">
        {/* <input v-model={this.value} />
        <button onClick={this.addTodo}>Add</button> */}
        <AddTodo
          {...{
            attrs: {
              add: this.add,
            },
            scopedSlots: {
              default: (scope: any) => {
                return <div>
                  <input value={scope.value} onChange={scope.change} />
                  <button onClick={scope.addTodo}>Add</button>
                </div>
            }
          }}
        }
        />
        <p>Counter Module: {this.count}</p>
        <ul>
          {this.list.map(({ text }) => (
            <li>{text}</li>
          ))}
        </ul>
      </div>
    );
  }
}
