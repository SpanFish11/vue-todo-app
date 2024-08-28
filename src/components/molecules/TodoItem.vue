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
  <div class="list-group-item d-flex align-items-center">
    <AppCheckboxInput class="ms-2" :checked="props.todo.completed" @onChange="toggleTodo(todo)" />
    <span
      :class="[
        {
          'todo-item-completed': props.todo.completed,
        },
        'ms-4',
        'custom-span',
      ]"
      @click="toggleTodo(todo)"
      >{{ props.todo.title }}</span
    >
    <AppButton
      :customClass="['button', 'item__button--delete', 'btn-close', 'ms-auto']"
      @onClickButton="removeTodo(props.todo)"
    />
  </div>
</template>

<style scoped lang="scss">
.list-group-item {
  padding: 15px;
  color: #505050;

  .btn-close {
    &:focus {
      cursor: pointer;
      border: none;
      box-shadow: none;
    }
  }

  .button {
    display: none;

    &:active {
      border: none;
    }
  }

  &:hover {
    .item__button--delete {
      display: block;
    }
  }

  .item__button--delete {
    visibility: visible;
  }
}

.todo-item-completed {
  text-decoration-line: line-through;
  color: #c2c2c2;
}

span.custom-span {
  cursor: pointer;
}
</style>
