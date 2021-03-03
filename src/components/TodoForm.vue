<template>
  <form class="todo-form" @submit="submitTodo">
    <input
      class="todo-input"
      name="todo"
      v-model="todo"
      placeholder="Start typing..."
      required
    />
    <button class="todo-btn" type="submit">Add Todo</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    submitTodo: function(event) {
      event.preventDefault();
      this.$store.commit('addTodo', this.todo);
      this.todo = '';
    },
  },
};
</script>

<style></style>
