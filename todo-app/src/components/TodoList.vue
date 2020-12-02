<template>
  <div>
      <!-- <p>Completed Tasks: {{ todo.done === true }} </p> -->
      <!-- <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p> -->
      <!-- <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p> -->
      <!-- <todo v-for="todo in todos" v-bind:todo="todo" :key="todo"></todo> -->

      <h2>My todolist </h2>







      <!-- <div class="ui centered card" v-for="todo in todos" :key="todo.id">
          <div class="content">
              <div class="header">
                  {{ todo.title }}
              </div>
              <div class="meta">
                  {{ todo.project }}
              </div>
              <div class="extra content">
                  <span class="right floated edit icon">
                      <i class="edit icon"></i>
                  </span>
              </div>
          </div>
          <div class="ui bottom attached green basic button" v-show="todo.done">
              Completed
          </div>
          <div class="ui bottom attached red basic button" v-show="!todo.done">
              Complete
          </div>
      </div> -->




<!-- 
    <ul>
        <li> Todo A </li> 
        <li> Todo B </li> 
        <li> Todo C </li> 
    </ul>  -->
  </div>
</template>

<script type = "text/javascript" >

import Todo from './Todo';

export default {
    // props: ['todos'],
    name: 'Todos',
    components: {
        Todo,
    },
};
</script>
<style>
</style>