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
  align-items: center;
  padding: 15px 10px;
}
</style>
