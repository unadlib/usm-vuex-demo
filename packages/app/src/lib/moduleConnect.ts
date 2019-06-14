import { Component, Vue } from "vue-property-decorator";

export default (ViewContainer: any, module: string) => {
  @Component({
    components: {
      ViewContainer
    }
  })
  class Container extends Vue {
    props = ViewContainer.props;

    get module() {
      const portal = this.portal as any;
      return portal[module];
    }

    render(createElement: any) {
      const slots = Object.entries(this.$slots)
        .map(([_, node]: [string, any]) => {
          node.context = (this as any)._self
          return node
        });
      const props = this.module.getViewProps(this.$props, this.$attrs);
      return createElement(ViewContainer, {
        props,
        scopedSlots: this.$scopedSlots,
        on: this.$listeners,
        attrs: this.$attrs,
      }, slots);
    }
  }
  return Container;
};
