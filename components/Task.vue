<template>
  <div
    class="
      text-white
      bg-gray-600
      shadow
      mb-5
      px-4
      py-2
      rounded
      flex
      justify-between
      items-center
    "
    :class="task.done ? 'opacity-25' : ''"
  >
    {{ task.content }}
    <div class="grid grid-cols-2 gap-3">
      <button @click="toggleDone" class="btn btn-primary" :class="task.done ? '!bg-teal-700' : ''">
        <RefreshIcon v-if="task.done" class="h-4 w-4" />
        <CheckIcon v-else class="h-4 w-4" />
      </button>
      <button @click="removeTask" class="btn bg-red-400 hover:bg-red-600">
        <TrashIcon class="h-4 w-4" />
      </button>
    </div>
  </div>
</template>

<script>
import { CheckIcon, TrashIcon, RefreshIcon } from "@vue-hero-icons/outline";

export default {
  props: ["task"],
  components: {
    CheckIcon,
    TrashIcon,
    RefreshIcon,
  },
  methods: {
    toggleDone() {
      this.$store.commit('TOGGLE_TASK', this.task)
    },
    removeTask() {
      this.$store.commit('REMOVE_TASK', this.task)
    }
  }
};
</script>
