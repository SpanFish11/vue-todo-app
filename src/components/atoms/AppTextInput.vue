<script setup>
import { useStore } from 'vuex'

const props = defineProps({
  placeholder: { type: String, required: false, default: 'Add your todo' },
})

const store = useStore()

const addTodo = (value) => store.dispatch('addTodo', { value })

const doneEdit = (e) => {
  const value = e.target.value.trim()
  if (value) {
    addTodo(value)
    e.target.value = ''
  }
}

const cancelEdit = (e) => (e.target.value = '')
</script>

<template>
  <input
    type="text"
    class="text-input"
    :placeholder="props.placeholder"
    @keyup.enter="doneEdit"
    @keyup.esc="cancelEdit"
    maxlength="150"
  />
</template>

<style scoped lang="scss">
.text-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ffffff;
}
</style>
