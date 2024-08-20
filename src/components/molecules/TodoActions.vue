<script setup>
import { ref } from 'vue'
import AppButton from '@/components/atoms/AppButton.vue'

const filterButtons = ref([
  { id: 1, title: 'All' },
  { id: 2, title: 'Active' },
  { id: 3, title: 'Completed' },
])
</script>

<template>
  <div class="task-actions">
    <span>5 items left</span>
    <AppButton v-for="button in filterButtons" :key="button.id" :label="button.title" />
    <AppButton label="Clear Completed" />
  </div>
</template>

<style scoped lang="scss">
.task-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
}
</style>
