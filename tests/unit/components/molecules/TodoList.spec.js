import { describe, expect, it } from '@jest/globals'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import TodoList from '@/components/molecules/TodoList.vue'

describe('Given the TodoList component', () => {
  it('should render', () => {
    const store = createStore({})
    store.getters.getTodos = [
      { title: 'title-1', completed: false, id: '1' },
      { title: 'title-2', completed: false, id: '2' },
      { title: 'title-3', completed: true, id: '3' },
    ]

    const wrapper = mount(TodoList, {
      global: {
        plugins: [store],
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
