<script setup>
import AppTextInput from '@/components/atoms/AppTextInput.vue'
import AppCheckboxInput from '@/components/atoms/AppCheckboxInput.vue'
</script>

<template>
  <div class="add-todo">
    <AppCheckboxInput disabled />
    <AppTextInput />
  </div>
</template>

<style scoped lang="scss">
.add-todo {
  display: flex;
  width: 600px;
  background-color: #ffffff;
  padding: 1em 1.5em 1em 1em;
  border-radius: 0.4em;
  margin-bottom: 1.5em;
}
</style>
