import { createStore } from 'vuex'
import axios from 'axios'

const api = 'https://manageable-me.onrender.com/'

export default createStore({
  state: {
    tasks: null,
    subtasks: null,
    message: null,
    categories: null
  },

  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setSubtasks(state, subtasks) {
      state.subtasks = subtasks
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
    async getSubtasks(context) {
      const res = await axios.get(`${api}user/2/tasks/19/sub`)
      console.log(res.data)
      context.commit('setSubtasks', res.data)
    },
    async addTask(context, payload) {
      const res = await axios.post(`${api}user/2/tasks/`, payload);
      const {result, err} = await res.data;
      if(err) {
        context.commit('setMessage', err);
      } else {
        context.commit('setTasks', result);
        console.log(result)
      }
    },
    async getCategories(context) {
      const res = await axios.post(`${api}tasks/categories`);
      context.commit('setCategories', res.data);
      console.log(res.data);
    }
  },
  modules: {
  }
})
