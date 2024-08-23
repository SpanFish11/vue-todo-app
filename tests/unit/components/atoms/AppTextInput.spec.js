import { describe, expect, it, beforeEach } from '@jest/globals'
import { shallowMount } from '@vue/test-utils'
import AppTextInput from '@/components/atoms/AppTextInput.vue'

describe('Given the AppTextInput component', () => {
  const propsWithOptional = {
    placeholder: 'placeholder',
    maxlength: 5,
  }

  const propsWithoutOptional = {
    placeholder: 'placeholder',
  }

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(AppTextInput, {})
  })

  it.each([[propsWithOptional], [propsWithoutOptional]])('should render', (props) => {
    wrapper.setProps(props)

    expect(wrapper.element).toMatchSnapshot()
  })

  it('should sets the value', async () => {
    const input = wrapper.find('input')
    await input.setValue('test')

    expect(input.element.value).toBe('test')
  })

  describe('should emit when', () => {
    let input

    beforeEach(() => {
      input = wrapper.find('input')
    })

    it('pressed enter button', async () => {
      await input.trigger('keyup.enter')

      const onPressEnterEvent = wrapper.emitted('onPressEnter')

      expect(wrapper.emitted()).toHaveProperty('onPressEnter')
      expect(onPressEnterEvent).toHaveLength(1)
    })

    it('pressed esc button', async () => {
      await input.trigger('keyup.esc')

      const onPressEscEvent = wrapper.emitted('onPressEsc')

      expect(wrapper.emitted()).toHaveProperty('onPressEsc')
      expect(onPressEscEvent).toHaveLength(1)
    })
  })
})
