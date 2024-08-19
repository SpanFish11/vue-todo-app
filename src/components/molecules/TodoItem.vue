<script setup>
import AppCheckboxInput from '@/components/atoms/AppCheckboxInput.vue'
import AppButton from '@/components/atoms/AppButton.vue'
import { useStore } from 'vuex'

const props = defineProps({
  todo: { type: Object, required: true },
})

const store = useStore()
const removeTodo = (todo) => store.dispatch('removeTodo', todo)
const toggleTodo = (todo) => store.dispatch('toggleTodo', todo)
</script>

<template>
  <div class="todo-item">
    <AppCheckboxInput :checked="props.todo.completed" @change="toggleTodo(todo)" />
    <div>
      <span
        :class="{
          'todo-item-completed': props.todo.completed,
        }"
        >{{ props.todo.title }}</span
      >
      <AppButton :class="['button', 'item__button--delete']" label="X" @click="removeTodo(props.todo)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.todo-item {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 15px 10px;
  border-bottom: 1px solid #eee;

  .button {
    visibility: hidden;
  }

  &:hover {
    .item__button--delete {
      visibility: visible;
    }
  }
}

.todo-item-completed {
  text-decoration-line: line-through;
  color: #808080;
}
</style>
