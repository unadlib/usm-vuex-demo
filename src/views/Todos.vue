<template>
  <div class="home">
    <input v-model="input" />
    <button @click="add">Add</button>
    <ul id="example-1">
      <li v-for="item in todos.list">
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

  add() {
    this.todos.add(this.input);
    this.input = '';
  }
}
</script>
