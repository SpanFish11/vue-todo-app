<script setup>
const props = defineProps({
  label: { type: String, required: false, default: '' },
  customClass: { type: Array, required: false },
})

const emit = defineEmits(['onClickButton'])
</script>

<template>
  <button :class="[customClass]" @click="emit('onClickButton')">
    {{ props.label }}
  </button>
</template>
