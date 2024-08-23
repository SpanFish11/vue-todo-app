import { beforeEach, describe, expect, it } from '@jest/globals'
import { mount, shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import TodoItem from '@/components/molecules/TodoItem.vue'

describe('Given the TodoItem component', () => {
  const completedTodo = { title: 'title', completed: true, id: 'id' }
  const uncompletedTodo = { title: 'title', completed: false, id: 'id' }

  let wrapper
  let store

  describe('when it is rendered', () => {
    beforeEach(() => {
      store = createStore({})
      store.dispatch = jest.fn()
    })

    it.each([[completedTodo], [uncompletedTodo]])('should match the snapshot', (todo) => {
      wrapper = shallowMount(TodoItem, {
        global: {
          plugins: [store],
        },
        props: {
          todo: todo,
        },
      })

      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('should dispatch', () => {
    beforeEach(() => {
      store = createStore({})
      store.dispatch = jest.fn()

      wrapper = mount(TodoItem, {
        global: {
          plugins: [store],
        },
        props: {
          todo: uncompletedTodo,
        },
      })
    })

    it('toggleTodo when click on title', async () => {
      await wrapper.find('span').trigger('click')
      await wrapper.vm.$nextTick()

      expect(store.dispatch.mock.calls).toHaveLength(1)
      expect(store.dispatch).toHaveBeenCalledWith('toggleTodo', uncompletedTodo)
    })

    it('toggleTodo when click on checkbox', async () => {
      await wrapper.find('input').trigger('change')
      await wrapper.vm.$nextTick()

      expect(store.dispatch.mock.calls).toHaveLength(1)
      expect(store.dispatch).toHaveBeenCalledWith('toggleTodo', uncompletedTodo)
    })

    it('removeTodo when click on delete button', async () => {
      await wrapper.find('button').trigger('click')
      await wrapper.vm.$nextTick()

      expect(store.dispatch.mock.calls).toHaveLength(1)
      expect(store.dispatch).toHaveBeenCalledWith('removeTodo', uncompletedTodo)
    })
  })
})
