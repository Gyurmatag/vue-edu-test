import { mount } from '@vue/test-utils'
import ToggleButton from "../components/ToggleButton.vue";

test("ToggleButton.vue", () => {
  it("emits a toggle event when clicked", async () => {
    const wrapper = mount(ToggleButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted().toggle).toBeTruthy();
  });
});
