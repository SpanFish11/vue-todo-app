export const STORAGE_KEY = 'todos-vuejs'

// for testing
if (navigator.webdriver) {
  window.localStorage.clear()
}

export const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo)
  },

  removeTodo(state, todo) {
    const index = state.todos.indexOf(todo)
    if (index !== -1) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    }
  },

  toggleTodo(state, { todo, completed }) {
    const index = state.todos.indexOf(todo)
    if (index !== -1) {
      state.todos[index].completed = completed
    }
  },

  changeVisibility(state, filter) {
    state.visibility = filter
  },
}
