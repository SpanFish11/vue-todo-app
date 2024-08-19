export default {
  getTodos: (state) => state.filters[state.visibility](state.todos),
  undoneTodosCount: (state) => state.todos.filter((todo) => !todo.completed).length,
  getFilters: (state) => state.filters,
}
