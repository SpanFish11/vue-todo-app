import { beforeEach, describe, expect, it } from '@jest/globals'
import { shallowMount } from '@vue/test-utils'
import TodoCard from '@/components/organisms/TodoCard.vue'

describe('Given the TodoCard component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TodoCard, {})
  })

  it('should render', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
