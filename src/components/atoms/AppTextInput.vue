<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'

const props = defineProps({
  placeholder: { type: String, required: false, default: 'Add your todo' },
})

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
  <input
    v-model="inputValue"
    type="text"
    :placeholder="props.placeholder"
    @keyup.enter="doneEdit"
    @keyup.esc="cancelEdit"
    maxlength="150"
  />
</template>
