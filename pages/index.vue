<template>
  <main>
    <div
      class="
        relative
        w-full
        md:w-96
        h-full
        text-center
        bg-slate-800
        overflow-hidden
        md:rounded-3xl md:shadow-2xl md:shadow-gray-900/50
        px-5 py-10 md:p-10
      "
    >
      <h1 class="text-4xl font-bold mb-2">Todo List</h1>
      <small class="text-gray-100/50 mb-5">This app save your todo list on your local storage</small>

      <div class="h-4/5 md:rounded-b-2xl overflow-y-auto scrollbar-hide">
        <Task
          v-for="(task, index) in this.$store.state.tasks"
          :key="index"
          :task="task"
        />
      </div>

      <div class="grid grid-cols-3 gap-3 mt-2 md:mt-5">
        <input
          class="form-input col-span-2"
          type="text"
          v-model="newTask"
          placeholder="Add a new task"
          @keypress.enter="addTask"
        />
        <button @click="addTask" class="btn btn-primary">Add</button>
      </div>
      <!-- <Modal :class="isOpen ? '' : 'hidden'" :isOpen="isOpen">
        <button
          @click="openModal"
          type="button"
          class="
            mt-3
            inline-flex
            w-full
            justify-center
            rounded-md
            border border-gray-300
            bg-white
            px-4
            py-2
            text-base
            font-medium
            text-gray-700
            shadow-sm
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:ring-offset-2
            sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
          "
          slot="close-button"
        >
          Cancel
        </button>
      </Modal> -->
      <!-- <Modal v-if="showModal" @close="openModal">
        <h3 slot="header">custom header</h3>
        <button
          @click="openModal"
          type="button"
          class="
            mt-3
            inline-flex
            w-full
            justify-center
            rounded-md
            border border-gray-300
            bg-white
            px-4
            py-2
            text-base
            font-medium
            text-gray-700
            shadow-sm
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:ring-offset-2
            sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
          "
          slot="close-button"
        >
          Cancel
        </button>
      </Modal>
      <button
        @click="openModal"
        class="
          btn btn-primary
          !rounded-full
          fixed
          md:absolute
          bottom-4
          inset-x-auto
          md:bottom-10
        "
      >
        +
      </button> -->
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      showModal: false,
    };
  },
  created() {
    this.$store.commit("updateTaskFromLocalStorage");
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit("ADD_TASK", this.newTask);
        this.newTask = "";
      }
    },
    openModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
