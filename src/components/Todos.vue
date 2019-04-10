<template>
  <div class="todos">
    {{msg}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
}
</script>
<style scoped lang="scss">
</style>
