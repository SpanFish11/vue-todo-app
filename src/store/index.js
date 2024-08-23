import { createStore } from 'vuex'
import { mutations, STORAGE_KEY } from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'
import plugins from '@/store/plugins'
import { FILTERS } from '@/constants/constants'

const state = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
  filters: {
    [FILTERS.ALL]: (todos) => todos,
    [FILTERS.ACTIVE]: (todos) => todos.filter((todo) => !todo.completed),
    [FILTERS.COMPLETED]: (todos) => todos.filter((todo) => todo.completed),
  },
  activeFilter: FILTERS.ALL,
}

export default createStore({
  state,
  actions,
  getters,
  mutations,
  plugins,
})
