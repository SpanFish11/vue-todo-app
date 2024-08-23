<script setup>
import AppTextInput from '@/components/atoms/AppTextInput.vue'
import AppCheckboxInput from '@/components/atoms/AppCheckboxInput.vue'
</script>

<template>
  <div class="card mb-4">
    <div class="card-body">
      <div class="input-group">
        <div class="input-group-text">
          <AppCheckboxInput disabled />
        </div>
        <AppTextInput class="form-control" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-body {
  padding: 10px;
  margin-left: 10px;
}

.form-control {
  border: none;

  &:focus {
    box-shadow: none;
  }
}

.input-group-text {
  border: none;
  background-color: white;
  padding-left: 0;
}
</style>
