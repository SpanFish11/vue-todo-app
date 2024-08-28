import { describe, expect, it } from '@jest/globals'
import { shallowMount } from '@vue/test-utils'
import ContentHeader from '@/components/molecules/ContentHeader.vue'

describe('Given the ContentHeader component', () => {
  it('should render', () => {
    const wrapper = shallowMount(ContentHeader, {})

    expect(wrapper.element).toMatchSnapshot()
  })
})
