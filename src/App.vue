<template>
  <div id="app">
    <div class="container">
      <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-sm-12">
        <div class="card shadow-lg mt-5">
          <div class="card-body">
            <to-do-list></to-do-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoList from "./components/pages/TodoList/TodoList.vue";

export default {
  name: "App",
  components: {
    "to-do-list": ToDoList,
  },
};
</script>

<style>
/* *{
  border: 1px solid #3c3c3c;
} */
</style>
