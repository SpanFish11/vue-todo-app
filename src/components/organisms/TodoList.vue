<script setup>
import { ref } from 'vue'
import TodoItem from '@/components/molecules/TodoItem.vue'
import draggable from 'vuedraggable'

const todos = ref([
  { id: 1, title: 'Complete online JavaScript course', completed: true },
  { id: 2, title: 'Jog around the park 3x', completed: false },
  { id: 3, title: '10 minutes meditation', completed: false },
  { id: 4, title: 'Read for 1 hour', completed: false },
  { id: 5, title: 'Pick up groceries', completed: false },
  { id: 6, title: 'Complete Todo App on Frontend Mentor', completed: false },
])

const drag = ref(false)
</script>

<template>
  <draggable v-model="todos" @start="drag = true" @end="drag = false" item-key="id">
    <template #item="{ element }">
      <TodoItem :name="element.title" :completed="element.completed" />
    </template>
  </draggable>
</template>
