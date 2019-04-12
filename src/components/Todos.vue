<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
import Todos from "../modules/Todos";

@Component
export default class TodosView extends Vue {
  value = '';

  get todos() {
    return this.portal.todos;
  }

  add() {
    this.todos.add(this.value);
    this.value = '';
  }

  render() {
    return (
      <div class="home">
        <input value={this.value} onInput={(e: any) => { this.value = e.target.value; }}/>
        <button onClick={() => this.add()}>Add</button>
        <ul>
          {
            this.todos.list.map(({ text }) => <li>{text}</li>)
          }
        </ul>
      </div>
    )
  }
}
</script>
