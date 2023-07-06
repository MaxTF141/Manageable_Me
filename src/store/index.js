import { createStore } from 'vuex'
import axios from 'axios'

const api = 'https://manageable-me.onrender.com/'

export default createStore({
  state: {
    tasks: null,
    subtasks: null
  },

  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setSubtasks(state, subtasks) {
      state.subtasks = subtasks
    }
  },

  actions: {
    async getTasks(context) {
      const res = await axios.get(`${api}user/2/tasks/`)
      context.commit('setTasks', res.data)
    },
    async getSubtasks(context) {
      const res = await axios.get(`${api}user/2/tasks/19/sub`)
      console.log(res.data)
      context.commit('setSubtasks', res.data)
    }
  },
  modules: {
  }
})
