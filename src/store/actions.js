export default {
  addTodo({ commit }, text) {
    commit('addTodo', {
      id: crypto.randomUUID(),
      title: text.value,
      completed: false,
    })
  },

  changeActiveFilter({ commit }, filter) {
    commit('changeActiveFilter', filter)
  },

  removeTodo({ commit }, todo) {
    commit('removeTodo', todo)
  },

  toggleTodo: ({ commit }, todo) => {
    commit('toggleTodo', { todo, completed: !todo.completed })
  },

  clearCompleted({ state, commit }) {
    state.todos
      .filter((todo) => todo.completed)
      .forEach((todo) => {
        commit('removeTodo', todo)
      })
  },
}
