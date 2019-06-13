import { Component, Vue } from "vue-property-decorator";

export default (ViewContainer: any, module: string) => {
  @Component({
    components: {
      ViewContainer
    }
  })
  class Container extends Vue {
    get module() {
      const portal = this.portal as any;
      return portal[module];
    }

    render(createElement: any) {
      const props = this.module.getViewProps();
      return createElement(ViewContainer, {
        props
      });
    }
  }
  return Container;
};
