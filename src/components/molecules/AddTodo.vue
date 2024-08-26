<script setup>
import AppTextInput from '@/components/atoms/AppTextInput.vue'
import AppCheckboxInput from '@/components/atoms/AppCheckboxInput.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const inputValue = ref('')

const addTodo = (value) => store.dispatch('addTodo', { value })

const doneEdit = () => {
  const value = inputValue.value.trim()
  if (value) {
    addTodo(value)
    inputValue.value = ''
  }
}

const cancelEdit = () => (inputValue.value = '')
</script>

<template>
  <div class="card mb-4">
    <div class="card-body">
      <div class="input-group">
        <div class="input-group-text">
          <AppCheckboxInput disabled />
        </div>
        <AppTextInput
          class="form-control"
          v-model="inputValue"
          placeholder="Add your todo"
          :maxlength="150"
          @onPressEnter="doneEdit"
          @onPressEsc="cancelEdit"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-body {
  padding: 10px;
  margin-left: 10px;
}

.form-control {
  border: none;

  &:focus {
    box-shadow: none;
  }
}

.input-group-text {
  border: none;
  background-color: white;
  padding-left: 0;
}
</style>
