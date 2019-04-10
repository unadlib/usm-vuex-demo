<template>
  <div class="counter">
    <button @click="increase">+</button>
    <span>{{count}}</span>
    <button @click="decrease">-</button>
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
  
  get count() {
    return this.counter.count;
  }

  increase() {
    this.counter.calculate(1);
  }

  decrease() {
    this.counter.calculate(-1);
  }
}
</script>
