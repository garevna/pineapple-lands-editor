import { shallowMount } from '@vue/test-utils'
import Popup from '@/components/editor/Popup.vue'

describe('Popup.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Popup, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
