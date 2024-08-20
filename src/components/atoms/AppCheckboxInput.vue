<script setup>
const props = defineProps({
  disabled: { type: Boolean, required: false, default: false },
  checked: { type: Boolean, required: false, default: false },
})
</script>

<template>
  <input type="checkbox" :disabled="props.disabled" :checked="props.checked" />
</template>
