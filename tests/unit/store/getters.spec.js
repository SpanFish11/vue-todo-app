import { describe, expect, it } from '@jest/globals'
import { FILTERS } from '@/constants/constants'
import getters from '@/store/getters'

describe('Test getters', () => {
  const state = {
    todos: [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
    ],
    filters: {
      [FILTERS.ALL]: (todos) => todos,
      [FILTERS.ACTIVE]: (todos) => todos.filter((todo) => !todo.completed),
      [FILTERS.COMPLETED]: (todos) => todos.filter((todo) => todo.completed),
    },
    activeFilter: FILTERS.ALL,
  }

  it.each([
    [FILTERS.ALL, state.todos],
    [FILTERS.ACTIVE, [state.todos[0]]],
    [FILTERS.COMPLETED, [state.todos[1]]],
  ])('should get todos when filter %s', (filter, expected) => {
    const stateCopy = { ...state }

    stateCopy.activeFilter = filter

    const result = getters.getTodos(stateCopy)

    expect(result).toEqual(expected)
  })

  it('should get undone todos count', () => {
    const result = getters.undoneTodosCount(state)

    expect(result).toEqual(1)
  })

  it('should get active filter', () => {
    const result = getters.getActiveFilter(state)

    expect(result).toEqual(FILTERS.ALL)
  })
})
