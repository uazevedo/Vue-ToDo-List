<template>
  <div id="app">
    <div class="container">
      <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-sm-12">
        <div class="card shadow-lg mt-5">
          <div class="card-title">
            <div class="w-75 bg-dark bg-gradient text-white myCardTitle negative-margin-left">
              <h1 class="text-center mt-3">ToDo List</h1>
            </div>
          </div>
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
.negative-margin-left{
  margin-left:-10px;
}
.myCardTitle{
  border-radius: 0 25px 25px 0;
}
</style>
