import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TodosView extends Vue {
  value = '';

  @Prop(Function) add!: any; // shit type check with Vue
  @Prop(Array) list!: any[];

  addTodo() {
    this.add(this.value);
    this.value = '';
  }

  render() {
    return (
      <div class="home">
        <input v-model={this.value}/>
        <button onClick={() => this.addTodo()}>Add</button>
        <ul>
          {
            this.list.map(({ text }) => <li>{text}</li>)
          }
        </ul>
      </div>
    )
  }
}
