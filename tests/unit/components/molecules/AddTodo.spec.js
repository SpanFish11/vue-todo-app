import { beforeEach, describe, expect, it } from '@jest/globals'
import { shallowMount, mount } from '@vue/test-utils'
import AddTodo from '@/components/molecules/AddTodo.vue'
import { createStore } from 'vuex'
import AppCheckboxInput from '@/components/atoms/AppCheckboxInput.vue'
import AppTextInput from '@/components/atoms/AppTextInput.vue'

describe('Given the AddTodo component', () => {
  describe('when it is rendered', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallowMount(AddTodo, {})
    })

    it('should match the snapshot', () => {
      expect(wrapper.element).toMatchSnapshot()
    })

    it('should render InputCheckbox with default props', () => {
      const appCheckboxInput = wrapper.findComponent(AppCheckboxInput)

      expect(appCheckboxInput.exists()).toBe(true)
      expect(appCheckboxInput.props('disabled')).toBe(true)
      expect(appCheckboxInput.props('checked')).toBe(false)
    })

    it('should render TextInput with default props', () => {
      const appTextInput = wrapper.findComponent(AppTextInput)

      expect(appTextInput.exists()).toBe(true)
      expect(appTextInput.props('placeholder')).toBe('Add your todo')
      expect(appTextInput.props('maxlength')).toBe(150)
    })
  })

  describe('when interacting with AppTextInput', () => {
    let store
    let wrapper

    beforeEach(() => {
      store = createStore({})
      store.dispatch = jest.fn()

      wrapper = mount(AddTodo, {
        global: {
          plugins: [store],
        },
      })
    })

    it('should dispatch and clear the input when Enter is pressed', async () => {
      const appTextInput = wrapper.findComponent(AppTextInput)

      expect(appTextInput.props().modelValue).toBe('')

      await appTextInput.setValue(' test ')
      await appTextInput.trigger('keyup.enter')
      await wrapper.vm.$nextTick()

      expect(store.dispatch).toHaveBeenCalledWith('addTodo', { value: 'test' })
      expect(appTextInput.props().modelValue).toBe('')
    })

    it('should do nothing when the input is clear and Enter is pressed', async () => {
      const appTextInput = wrapper.findComponent(AppTextInput)

      await appTextInput.trigger('keyup.enter')
      await wrapper.vm.$nextTick()

      expect(store.dispatch).not.toBeCalled()
      expect(appTextInput.props().modelValue).toBe('')
    })

    it('should clear the input when Escape is pressed', async () => {
      const appTextInput = wrapper.findComponent(AppTextInput)

      await appTextInput.setValue(' test ')

      expect(appTextInput.props().modelValue).toBe(' test ')

      await appTextInput.trigger('keyup.esc')
      await wrapper.vm.$nextTick()

      expect(store.dispatch).not.toBeCalled()
      expect(appTextInput.props().modelValue).toBe('')
    })
  })
})
