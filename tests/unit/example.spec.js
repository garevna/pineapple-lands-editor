import { shallowMount } from '@vue/test-utils'
import ErrorPopup from '@/components/editor/ErrorPopup.vue'

describe('ErrorPopup.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ErrorPopup, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
