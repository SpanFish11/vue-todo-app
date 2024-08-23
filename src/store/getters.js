export default {
  getTodos: (state) => state.filters[state.activeFilter](state.todos),
  undoneTodosCount: (state) => state.todos.filter((todo) => !todo.completed).length,
  getActiveFilter: (state) => state.activeFilter,
}
