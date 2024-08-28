import { beforeEach, describe, expect, it } from '@jest/globals'
import { shallowMount } from '@vue/test-utils'
import MainContent from '@/components/templates/MainContent.vue'

describe('Given the MainContent component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(MainContent, {})
  })

  it('should render', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
