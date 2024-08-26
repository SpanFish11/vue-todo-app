<script setup>
import { computed } from 'vue'
import AppButton from '@/components/atoms/AppButton.vue'
import { useStore } from 'vuex'
import { FILTER_LABELS, FILTERS } from '@/constants/constants'

const store = useStore()

const remaining = computed(() => store.getters.undoneTodosCount)
const activeFilter = computed(() => store.getters.getActiveFilter)
const clearCompleted = () => store.dispatch('clearCompleted')
const changeActiveFilter = (filter) => store.dispatch('changeActiveFilter', filter)

const remainingText = computed(() => {
  const value = remaining.value

  switch (value) {
    case 0:
      return 'No items left'
    case 1:
      return '1 item left'
    default:
      return value + ' items left'
  }
})
</script>

<template>
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-center">
      <span class="remaining">{{ remainingText }}</span>
      <div>
        <AppButton
          v-for="filter in FILTERS"
          :key="filter"
          :customClass="[
            'btn-sm',
            'me-2',
            {
              active: activeFilter === filter,
            },
          ]"
          :label="FILTER_LABELS[filter]"
          @onClickButton="changeActiveFilter(filter)"
        />
      </div>
      <AppButton label="Clear Completed" :customClass="['btn-sm']" @onClickButton="clearCompleted" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.btn-sm {
  border: none;
  font-weight: 600;
  background: none;
  font-size: 15px;
  color: #a6a6a6;

  &:hover {
    color: black;
  }
}

.active {
  color: #4b7fe0;
}

.remaining {
  font-size: 12px;
  font-weight: 600;
  color: #a6a6a6;
}

.card-body {
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
