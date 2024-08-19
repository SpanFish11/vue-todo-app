<script setup>
import AppCheckboxInput from '@/components/atoms/AppCheckboxInput.vue'
import AppButton from '@/components/atoms/AppButton.vue'

const props = defineProps({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
})
</script>

<template>
  <div class="todo-item">
    <AppCheckboxInput :checked="props.completed" />
    <div>
      <span
        :class="{
          'todo-item-completed': props.completed,
        }"
        >{{ props.name }}</span
      >
      <AppButton :class="['button', 'item__button--delete']" label="X" />
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
    background-color: #f1f1f1;

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
