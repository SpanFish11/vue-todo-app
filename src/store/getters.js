export default {
  getTodos: (state) => state.filters[state.activeFilter](state.todos),
  undoneTodosCount: (state) => state.todos.filter((todo) => !todo.completed).length,
  getFilters: (state) => state.filters,
  getActiveFilter: (state) => state.activeFilter,
}
