<script setup>
import MainContent from '@/components/templates/MainContent.vue'
</script>

<template>
  <MainContent />
</template>

<style lang="scss">
#app {
  background-image: linear-gradient(
      142deg,
      rgba(189, 58, 208, 0.7198529069831057) 30%,
      rgba(153, 90, 194, 0.5237744756105567) 55%,
      rgba(38, 121, 180, 0.6526260162268032) 79%
    ),
    url('../../assets/images/header.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 450px;
}
</style>
