import { shallowMount } from "@vue/test-utils";

import App from "@/App";

describe("App component", () => {
  const wrapper = shallowMount(App, {});
  it("renders correctly", () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
