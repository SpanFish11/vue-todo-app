import { createStore } from 'vuex'
import { mutations, STORAGE_KEY } from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'
import plugins from '@/store/plugins'

const state = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
  filters: {
    all: (todos) => todos,
    active: (todos) => todos.filter((todo) => !todo.completed),
    completed: (todos) => todos.filter((todo) => todo.completed),
  },
  visibility: 'all',
}

export default createStore({
  state,
  actions,
  getters,
  mutations,
  plugins,
})
