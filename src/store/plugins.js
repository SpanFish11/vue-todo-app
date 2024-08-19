import { createLogger } from 'vuex'
import { STORAGE_KEY } from './mutations'

const localStoragePlugin = (store) => {
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

// eslint-disable-next-line
export default process.env.NODE_ENV !== 'production' ? [createLogger(), localStoragePlugin] : [localStoragePlugin]
