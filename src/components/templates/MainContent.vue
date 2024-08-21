<script setup>
import ContentHeader from '@/components/molecules/ContentHeader.vue'
import AddTodo from '@/components/molecules/AddTodo.vue'
import TodoList from '@/components/organisms/TodoList.vue'
import TodoActions from '@/components/molecules/TodoActions.vue'
</script>

<template>
  <div class="content">
    <ContentHeader />
    <AddTodo />
    <TodoList />
    <TodoActions />
  </div>
</template>

<style scoped lang="scss">
.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 40%;
  top: 10%;
}
</style>
