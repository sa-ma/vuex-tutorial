<template>
  <div class="todo-list">
    <div class="todo-item" v-for="todo in todos" :key="todo.id">
      <p>{{ todo.title }}</p>
      <input
        type="checkbox"
        name="todo.id"
        v-on:change="updateTodo(todo)"
        v-bind:checked="todo.completed"
      />
    </div>

    <p>Completed Todos: {{ todosCount }}</p>
  </div>
</template>

<script>
export default {
  created: function() {
    this.getTodos;
  },
  computed: {
    todos() {
      return this.$store.state.todoList;
    },
    todosCount() {
      return this.$store.getters.completeTodosLength;
    },
    getTodos() {
      return this.$store.dispatch('getTodos');
    },
  },
  methods: {
    updateTodo: function(todo) {
      this.$store.commit('updateTodo', todo.id);
    },
  },
};
</script>

<style></style>
