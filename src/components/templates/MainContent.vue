<script setup>
import ContentHeader from '@/components/molecules/ContentHeader.vue'
import AddTodo from '@/components/molecules/AddTodo.vue'
import TodoCard from '@/components/organisms/TodoCard.vue'
</script>

<template>
  <div class="container">
    <ContentHeader />
    <AddTodo />
    <TodoCard />
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 550px;
  padding-top: 7%;
}

.card {
  border-color: #e8e8e8;
  font-family: 'Open Sans', cursive, sans-serif;
}
</style>
