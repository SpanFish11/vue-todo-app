import { describe, expect, it, beforeEach } from '@jest/globals'
import { FILTERS } from '@/constants/constants'
import actions from '@/store/actions'
import sinon from 'sinon'

describe('Test actions', () => {
  const commit = sinon.spy()
  const todo = { id: 'mocked-uuid', title: 'Todo 1', completed: false }

  global.crypto = {
    randomUUID: () => 'mocked-uuid',
  }

  beforeEach(() => {
    commit.resetHistory()
  })

  it('should add todo', () => {
    actions.addTodo({ commit }, { value: 'Todo 1' })

    expect(commit.args).toEqual([['addTodo', todo]])
  })

  it('should change active filter', () => {
    const filter = FILTERS.ACTIVE

    actions.changeActiveFilter({ commit }, filter)

    expect(commit.args).toEqual([['changeActiveFilter', filter]])
  })

  it('should remove todo', () => {
    actions.removeTodo({ commit }, todo)

    expect(commit.args).toEqual([['removeTodo', todo]])
  })

  it('should clear completed todo', () => {
    actions.toggleTodo({ commit }, todo)

    expect(commit.args).toEqual([['toggleTodo', { todo, completed: true }]])
  })

  it('should clear completed todo', () => {
    const state = {
      todos: [
        { id: 1, title: 'Todo 1', completed: true },
        { id: 2, title: 'Todo 2', completed: true },
        { id: 3, title: 'Todo 3', completed: false },
      ],
    }

    actions.clearCompleted({ state, commit })

    expect(commit.args).toEqual([
      ['removeTodo', state.todos[0]],
      ['removeTodo', state.todos[1]],
    ])
  })
})
