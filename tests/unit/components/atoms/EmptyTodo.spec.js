import { beforeEach, describe, expect, it } from '@jest/globals'
import { shallowMount } from '@vue/test-utils'
import EmptyTodo from '@/components/atoms/EmptyTodo.vue'

describe('Given the EmptyTodo component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(EmptyTodo, {})
  })

  it('should render', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
