import { mount } from "@vue/test-utils";

import Sidebar from "@/components/Sidebar";

describe("Sidebar component", () => {
  const wrapper = mount(Sidebar, {
    propsData: {
      handleReset: () => {},
      handleFlip: () => {},
      history: [12]
    }
  });
  it("renders correctly", () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
