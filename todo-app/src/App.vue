<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <TodoList/> -->
    <!-- <todo-list></todo-list> -->
    <Todos v-bind:todos="todos"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Todos from './components/TodoList'

export default {
  name: 'App',
  components: {
    Todos,
  },
  data() {
    return {
      todos: [
      {
        id: 1,
        title: 'Go workout',
        completed: false
      }, {
        id: 2,
        title: 'Do laundry',
        completed: false
      }, {
        id: 3,
        title: 'Cook food',
        completed: false
      }, {
        id: 4,
        title: 'Clean up room',
        completed: false
      }, {
        id: 5,
        title: 'Finish work',
        completed: false
      }
      ],
    };
  },
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
