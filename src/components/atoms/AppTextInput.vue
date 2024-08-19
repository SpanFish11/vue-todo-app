<script setup>
const props = defineProps({
  placeholder: { type: String, required: false, default: 'Add your task' },
})
</script>

<template>
  <input type="text" class="text-input" :placeholder="props.placeholder" />
</template>

<style scoped lang="scss">
.text-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
</style>
