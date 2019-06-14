import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class AddTodo extends Vue {
  value = "";

  @Prop(Function) add!: (input: string) => void;;

  addTodo() {
    this.add(this.value);
    this.value = "";
  }

  change(e: any) {
    this.value = e.target.value;
  }

  render() {
    return this.$scopedSlots.default!({
      addTodo: this.addTodo,
      value: this.value,
      change: this.change,
    })
  }
}
