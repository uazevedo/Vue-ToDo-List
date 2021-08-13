<template>
  <div>
    <h1 class="text-center">ToDo List</h1>

    <input
      class="form-control"
      v-model="newTask"
      type="text"
      v-on:keyup.enter="addTask(newTask)"
      placeholder="Nova Tarefa"
    />
    <div v-if="addingError" class="mt-3 alert alert-danger" role="alert">
      {{ addingErrorMessage }}
    </div>
    <br />
    <ul class="list-group">
      <li class="list-group-item" v-for="(task, i) in tasks" :key="i">
        <div>
          <input
            class="form-check-input ms-3"
            v-model="task.isComplete"
            type="checkbox"
            value="task"
            :id="i"
            @click="toggleTaskStatus(task)"
          />
          <label
            class="ms-3"
            :class="{
              'text-decoration-line-through': task.isComplete,
              'text-muted': task.isComplete,
            }"
            >{{ task.description }}</label
          >
          <button
            class="btn btn-close ms-5 float-end"
            tile
            @click="removeTask(task)"
          ></button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import localStorageManager from '../../../mixins/localStorageManager'
export default {
  mixins:[localStorageManager],
  data: function () {
    return {
      newTask: "",
      addingError: false,
      addingErrorMessage: "O item já existe",
      tasks: [
        { isComplete: false, description: "Brincar com filhos" },
        { isComplete: false, description: "Lavar louça" },
        { isComplete: false, description: "A" },
        { isComplete: false, description: "Estudar teste unitários" },
      ],
      selectedTask: "",
    };
  },
  methods: {
    searchInTaskDescription(newTaskDescription) {
      const finded = this.tasks.find(
        (task) => task.description.toUpperCase() === newTaskDescription.toUpperCase()
      );
      return finded;
    },
    addTask(newTask) {
      this.addingError = false;
      if (!this.searchInTaskDescription(newTask)) {
        this.tasks.push({ isComplete: false, description: newTask });
        this.saveIntoLocalStorage('vueTasks',this.tasks);
      } else {
        this.addingError = true;
      }
      this.newTask = "";
    },
    removeTask(task) {
      this.tasks = this.tasks.filter(
        (element) => element.description != task.description
      );
      this.saveIntoLocalStorage('vueTasks',this.tasks);
    },
    toggleTaskStatus(task) {
      task.isComplete = !task.isComplete;
      this.saveIntoLocalStorage('vueTasks',this.tasks);
    },
  },
  created: function () {
    this.persistInLocalStorage('vueTasks',this.tasks);
  },
};
</script>

<style>
</style>