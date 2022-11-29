function updateLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const state = () => ({
  tasks: []
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks]

    updateLocalStorage(state.tasks)
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)

    updateLocalStorage(state.tasks)
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done

    updateLocalStorage(state.tasks)
  },
  updateTaskFromLocalStorage(state) {
    const tasks = localStorage.getItem('tasks')
    if(tasks) {
      state.tasks = JSON.parse(tasks)
    }
  }
}