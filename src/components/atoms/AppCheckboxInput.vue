<script setup>
const props = defineProps({
  disabled: { type: Boolean, required: false, default: false },
  checked: { type: Boolean, required: false, default: false },
})

const emit = defineEmits(['onChange'])
</script>
`
<template>
  <input
    class="form-check-input"
    type="checkbox"
    :disabled="props.disabled"
    :checked="props.checked"
    @change="emit('onChange')"
  />
</template>

<style scoped lang="scss">
.form-check-input {
  border: transparent;
  width: 23px;
  height: 23px;
  background: #c0c0c0;
  -webkit-mask: url('../../assets/icons/circle.svg') no-repeat center;
  -webkit-mask-size: contain;
  mask: url('../../assets/icons/circle.svg') no-repeat center;
  mask-size: contain;
  stroke: none;

  &:focus {
    box-shadow: none;
  }

  &:checked {
    border: none;
    width: 23px;
    height: 23px;
    background: linear-gradient(130deg, rgba(25, 134, 217, 0.65), rgba(200, 57, 222, 0.72));
    -webkit-mask: url('../../assets/icons/check-circle-fill.svg') no-repeat center;
    -webkit-mask-size: contain;
    mask: url('../../assets/icons/check-circle-fill.svg') no-repeat center;
    mask-size: contain;
  }

  &:hover {
    cursor: pointer;
    background: linear-gradient(130deg, rgba(38, 121, 180, 0.6526260162268032), rgba(189, 58, 208, 0.7198529069831057));
  }
}
</style>
