<template>
  <div id="app" class="container">
    <h1>todos...</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
};
</script>

<style>
@import './style.css';
</style>
