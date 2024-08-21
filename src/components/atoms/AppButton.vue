<script setup>
const props = defineProps({
  label: { type: String, required: false, default: '' },
  customClass: { type: Array, required: false },
})
</script>

<template>
  <button :class="[customClass]">
    {{ props.label }}
  </button>
</template>
