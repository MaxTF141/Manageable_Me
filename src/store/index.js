import { createStore } from 'vuex'
import axios from 'axios'

const api = 'https://manageable-me.onrender.com/'
// const api = 'http://localhost:1234/'

export default createStore({
  state: {
    tasks: null,
    task: null,
    subtasks: null,
    subtasksData: null,
    updatedSubtask: null,
    message: null,
    categories: null
  },

  getters :{
    getSubtaskLength: (state) => (taskID) => {
      return state.subtasksData.filter((subtask) => subtask.TaskID === taskID).length;
    },
  },

  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setTask(state, task) {
      state.task = task
    },
    setSubtasks(state, subtasks) {
      state.subtasks = subtasks
    },
    updateSubtask(state, updatedSubtask) {
      state.updatedSubtask = updatedSubtask
    },
    setMessage(state, message) {
      state.message = message
    },
    setCategories(state, categories) {
      state.categories = categories
    }
  },

  actions: {
    async getTasks(context) {
      const res = await axios.get(`${api}user/2/tasks/`)
      context.commit('setTasks', res.data)
    },
    async getTask(context, id) {
      const res = await axios.get(`${api}user/2/tasks/${id}`)
      context.commit('setTask', res.data)
    },
    async getSubtasks(context, id) {
      const res = await axios.get(`${api}user/2/tasks/${id}/sub`)
      context.commit('setSubtasks', res.data)
    },
    async updateSubtask(context, {taskID, subtaskID, payload}) {
      const res = await axios.put(`${api}user/2/tasks/${taskID}/sub/${subtaskID}`, payload)
      context.commit('updateSubtask', res.data)
    },
    async addTask(context, payload) {
      const res = await axios.post(`${api}user/2/tasks/`, payload);
        context.commit('setTasks', res);  
    },
    async getCategories(context) {
      const res = await axios.post(`${api}tasks/categories`);
      context.commit('setCategories', res.data);
    }
  },
  modules: {
  }
})
