<script setup>
import { computed, ref } from 'vue'
import TodoItem from '@/components/molecules/TodoItem.vue'
import draggable from 'vuedraggable'
import { useStore } from 'vuex'

const drag = ref(false)

const store = useStore()
const todos = computed(() => store.getters.getTodos)
</script>

<template>
  <draggable :list="todos" @start="drag = true" @end="drag = false" item-key="id" class="list">
    <template #item="{ element }">
      <TodoItem :todo="element" />
    </template>
  </draggable>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  width: 650px;
  flex-direction: column;
  border-radius: 0.4em;
  background-color: #ffffff;

  > :first-child {
    border-top-left-radius: 0.4em;
    border-top-right-radius: 0.4em;
  }

  > :last-child {
    border-bottom-left-radius: 0.4em;
    border-bottom-right-radius: 0.4em;
    border-bottom: none;
  }
}
</style>
