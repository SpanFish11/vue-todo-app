<script setup>
const props = defineProps({
  placeholder: { type: String, required: true },
  maxlength: { type: Number, required: false },
})

const model = defineModel({ type: String, required: true })

const emit = defineEmits(['onPressEnter', 'onPressEsc'])
</script>

<template>
  <input
    v-model="model"
    type="text"
    :placeholder="props.placeholder"
    :maxlength="props.maxlength"
    @keyup.enter="emit('onPressEnter')"
    @keyup.esc="emit('onPressEsc')"
  />
</template>
