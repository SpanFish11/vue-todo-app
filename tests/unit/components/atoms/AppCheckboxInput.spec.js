import { beforeEach, describe, expect, it } from '@jest/globals'
import { shallowMount } from '@vue/test-utils'
import AppCheckboxInput from '@/components/atoms/AppCheckboxInput.vue'

describe('Given the AppCheckboxInput component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(AppCheckboxInput, {})
  })

  it.each([
    [{ disabled: false, checked: false }],
    [{ disabled: true, checked: false }],
    [{ disabled: false, checked: true }],
    [{}],
  ])('should render', (props) => {
    wrapper.setProps(props)

    expect(wrapper.element).toMatchSnapshot()
  })

  it('should emits a click event when input is clicked', async () => {
    await wrapper.find('input').trigger('change')
    const onClickEvent = wrapper.emitted('onChange')

    expect(wrapper.emitted()).toHaveProperty('onChange')
    expect(onClickEvent).toHaveLength(1)
  })
})
