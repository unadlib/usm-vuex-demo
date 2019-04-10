<template>
  <div class="home">
    <input v-model="input" />
    <button @click="add">Add</button>
    <ul id="example-1">
      <li v-for="item in list">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todos from "../modules/Todos";

@Component({
  components: {
    // Todos
  }
})
export default class TodosView extends Vue {
  input = '';

  get todos() {
    return this.portal.todos;
  }

  get list() {
    return this.todos.list;
  }

  add() {
    this.todos.add(this.input);
    this.input = '';
  }

  toggle(index: number) {
    this.todos.toggle(index);
  }

  edit(text: string, index: number) {
    this.todos.edit(text, index);
  }

  remove(index: number) {
    this.todos.remove(index);
  }

  clearAllCompleted() {
    this.todos.clearAllCompleted();
  }
}
</script>
