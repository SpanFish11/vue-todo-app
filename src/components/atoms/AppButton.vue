<script setup>
const props = defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <button>
    {{ props.label }}
  </button>
</template>
