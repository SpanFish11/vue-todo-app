import { config, createWrapperError } from '@vue/test-utils'

const Plugin = (wrapper) => {
  function findByText(str, selector = '*') {
    const items = wrapper.findAll(selector)

    for (const element of items) {
      const item = element

      if (item.text().trim() === str.trim()) {
        return item
      }
    }

    return createWrapperError('DOMWrapper')
  }

  return {
    findByText,
  }
}

config.plugins.VueWrapper.install(Plugin)
