import { beforeEach, describe, expect, it } from '@jest/globals'
import { mount, shallowMount } from '@vue/test-utils'
import TodoActions from '@/components/molecules/TodoActions.vue'
import { createStore } from 'vuex'
import { FILTER_LABELS, FILTERS } from '@/constants/constants'
import AppButton from '@/components/atoms/AppButton.vue'

describe('Given the TodoActions component', () => {
  let wrapper
  let store

  describe('when it is rendered', () => {
    beforeEach(() => {
      store = createStore({})
      store.dispatch = jest.fn()
      store.getters.undoneTodosCount = 0
      store.getters.getActiveFilter = FILTERS.ALL

      wrapper = shallowMount(TodoActions, {
        global: {
          plugins: [store],
        },
      })
    })

    it('should match the snapshot', () => {
      expect(wrapper.element).toMatchSnapshot()
    })

    it.each([
      [0, 'No items left'],
      [1, '1 item left'],
      [5, '5 items left'],
    ])('should render remaining text correctly', (value, expected) => {
      store = createStore({})
      store.getters.undoneTodosCount = value

      wrapper = shallowMount(TodoActions, {
        global: {
          plugins: [store],
        },
      })

      expect(wrapper.find('span').text()).toBe(expected)
    })

    it('should show active filter', async () => {
      expect(
        wrapper
          .findAllComponents(AppButton)
          .filter((b) => b.props().label === FILTER_LABELS.all)[0]
          .props().customClass
      ).toContainEqual({ active: true })
    })
  })

  describe('when interacting with buttons', () => {
    beforeEach(() => {
      store = createStore({})
      store.dispatch = jest.fn()
      store.getters.undoneTodosCount = 0
      store.getters.getActiveFilter = FILTERS.ALL

      wrapper = mount(TodoActions, {
        global: {
          plugins: [store],
        },
      })
    })

    it('should dispatch changeActiveFilter', async () => {
      await wrapper.findByText(FILTER_LABELS.active).trigger('click')
      await wrapper.vm.$nextTick()

      expect(store.dispatch.mock.calls).toHaveLength(1)
      expect(store.dispatch).toHaveBeenCalledWith('changeActiveFilter', FILTERS.ACTIVE)
    })

    it('should dispatch clearCompleted', async () => {
      await wrapper.findByText('Clear Completed').trigger('click')
      await wrapper.vm.$nextTick()

      expect(store.dispatch.mock.calls).toHaveLength(1)
      expect(store.dispatch).toHaveBeenCalledWith('clearCompleted')
    })
  })
})
