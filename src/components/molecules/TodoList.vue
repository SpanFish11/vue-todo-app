<script setup>
import { computed, ref } from 'vue'
import TodoItem from '@/components/molecules/TodoItem.vue'
import draggable from 'vuedraggable'
import { useStore } from 'vuex'
import EmptyTodo from '@/components/atoms/EmptyTodo.vue'

const drag = ref(false)

const store = useStore()
const todos = computed(() => store.getters.getTodos)
</script>

<template>
  <draggable
    v-if="todos.length"
    :list="todos"
    @start="drag = true"
    @end="drag = false"
    item-key="id"
    tag="ul"
    class="list-group list-group-flush"
  >
    <template #item="{ element }">
      <TodoItem :todo="element" />
    </template>
  </draggable>

  <EmptyTodo v-else />
</template>
