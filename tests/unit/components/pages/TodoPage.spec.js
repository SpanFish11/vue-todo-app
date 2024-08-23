import { beforeEach, describe, expect, it } from '@jest/globals'
import { shallowMount } from '@vue/test-utils'
import TodoPage from '@/components/pages/TodoPage.vue'

describe('Given the TodoPage component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TodoPage, {})
  })

  it('should render', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
