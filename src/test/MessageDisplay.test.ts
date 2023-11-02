import { mount } from '@vue/test-utils'
import MessageDisplay from "../components/MessageDisplay.vue";

test("MessageDisplay.vue", () => {
  it("renders props.message when passed", () => {
    const message = "new message";
    const wrapper = mount(MessageDisplay, {
      props: { message },
    });
    expect(wrapper.text()).toContain(message);
  });
});
