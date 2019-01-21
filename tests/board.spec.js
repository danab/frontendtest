import { mount } from "@vue/test-utils";

import Board from "@/components/Board";

describe("Board component", () => {
  const wrapper = mount(Board, {
    propsData: {
      handleClick: () => {},
      handleFlip: () => {},
      flipped: false,
      selected: null
    }
  });
  it("renders correctly", () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  const flipped = mount(Board, {
    propsData: {
      handleClick: () => {},
      handleFlip: () => {},
      flipped: true,
      selected: null
    }
  });
  it("should add the flipped class", () => {
    expect(flipped.vm.$el).toMatchSnapshot();
  });

  const selected = mount(Board, {
    propsData: {
      handleClick: () => {},
      handleFlip: () => {},
      flipped: false,
      selected: 10
    }
  });
  it("should add the selected class", () => {
    expect(selected.vm.$el).toMatchSnapshot();
  });
});
