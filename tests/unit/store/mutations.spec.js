import { describe, expect, it } from '@jest/globals'
import { FILTERS } from '@/constants/constants'
import { mutations } from '@/store/mutations'

describe('Test mutations', () => {
  const state = {
    todos: [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
    ],
    activeFilter: FILTERS.ALL,
  }

  it('should add todo', () => {
    const todo = { id: 3, title: 'Todo 3', completed: false }

    mutations.addTodo(state, todo)

    expect(state.todos).toContainEqual(todo)
  })

  it('should remove todo', () => {
    const todo = { id: 1, title: 'Todo 1', completed: false }

    mutations.removeTodo(state, todo)

    expect(state.todos).not.toContain(todo)
  })

  it('should toggle todo', () => {
    const expected = { id: 1, title: 'Todo 1', completed: true }

    mutations.toggleTodo(state, { todo: state.todos[0], completed: true })

    expect(state.todos).toContainEqual(expected)
  })

  it('should change active filter', () => {
    const filter = FILTERS.ACTIVE

    mutations.changeActiveFilter(state, filter)

    expect(state.activeFilter).toEqual(filter)
  })
})
