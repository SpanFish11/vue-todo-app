<script setup>
import ContentHeader from '@/components/molecules/ContentHeader.vue'
import AddTodo from '@/components/molecules/AddTodo.vue'
import TodoList from '@/components/organisms/TodoList.vue'
import TodoActions from '@/components/molecules/TodoActions.vue'
</script>

<template>
  <div>
    <ContentHeader />
    <AddTodo />
    <TodoList />
    <TodoActions />
  </div>
</template>
