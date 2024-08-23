import { beforeEach, describe, expect, it } from '@jest/globals'
import { shallowMount } from '@vue/test-utils'
import AppButton from '@/components/atoms/AppButton.vue'

describe('Given the AppButton component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(AppButton, {})
  })

  it.each([
    [{ label: 'label', customClass: ['custom-class-1', 'custom-class-2'] }],
    [{ customClass: ['custom-class-1', 'custom-class-2'] }],
    [{ label: 'label' }],
    [{}],
  ])('should render', (props) => {
    wrapper.setProps(props)

    expect(wrapper.element).toMatchSnapshot()
  })

  it('should emits a click event when button is clicked', async () => {
    await wrapper.find('button').trigger('click')
    const onClickButtonEvent = wrapper.emitted('onClickButton')

    expect(wrapper.emitted()).toHaveProperty('onClickButton')
    expect(onClickButtonEvent).toHaveLength(1)
  })
})
