import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    todoList: [],
  },
  mutations: {
    addTodo(state, title) {
      state.todoList = [
        ...state.todoList,
        {
          id: state.todoList.length + 1,
          title,
          completed: false,
        },
      ];
    },
    addTodos(state, todos) {
      state.todoList = todos;
    },

    updateTodo(state, todoId) {
      state.todoList = state.todoList.map((item) => {
        if (item.id === todoId) {
          item.completed = !item.completed;
        }
        return item;
      });
    },
  },
  getters: {
    completeTodosLength: (state) => {
      const completeTodos = state.todoList.filter((item) => item.completed);
      return completeTodos.length;
    },
  },
  actions: {
    getTodos({ commit }) {
      fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
        .then((res) => res.json())
        .then((data) => commit('addTodos', data))
        .catch((error) => console.log(error));
    },
  },
});
