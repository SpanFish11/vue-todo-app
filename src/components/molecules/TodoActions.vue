<script setup>
import { computed } from 'vue'
import AppButton from '@/components/atoms/AppButton.vue'
import { useStore } from 'vuex'

const store = useStore()

const filters = computed(() => store.getters.getFilters)
const remaining = computed(() => store.getters.undoneTodosCount)
const clearCompleted = () => store.dispatch('clearCompleted')
const changeVisibility = (visibility) => store.dispatch('changeVisibility', visibility)

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)
</script>

<template>
  <div class="task-actions">
    <span>{{ remaining }} items left</span>
    <ul>
      <AppButton
        v-for="(val, key) in filters"
        :key="key"
        :label="capitalize(key)"
        @click="changeVisibility(key)"
        class="b"
      />
    </ul>
    <AppButton label="Clear Completed" @click="clearCompleted" />
  </div>
</template>

<style scoped lang="scss">
.task-actions {
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
}

.b {
  margin: 5px;
}
</style>
