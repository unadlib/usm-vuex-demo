<template>
  <div class="counter">
    <button @click="counter.calculate(1)">+</button>
    <span>{{counter.count}}</span>
    <button @click="counter.calculate(-1)">-</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Counter from "../modules/Counter";

@Component({
  components: {
    // Todos
  }
})
export default class CounterView extends Vue {
  get counter() {
    return this.portal.counter;
  }
}
</script>
