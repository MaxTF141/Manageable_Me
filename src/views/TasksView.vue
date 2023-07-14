<template>
  <section id="task" class=" d-flex justify-content-center flex-column">
    <header>
      <h1>Hey</h1>
      <div class="search-bar d-flex justify-content-center gap-2 align-items-center">
        <input type="search" placeholder="Search your tasks">
        <button><Icon class="searchBtn" icon="ic:sharp-search" color="#ffff" /></button>
      </div>
    </header>
    <div class="categories">
      <h2 class="my-3 ms-3">Categories</h2>
      <div class="category-list gap-2 d-flex">
        <div class=" text-center d-inline-flex flex-column align-items-center" v-for="category in categories" :key="category.CategoryID" @click="filterTasksByCategory(category)">
          <div :class="categoryClass(category)" :style="overlayBorderStyling(category)">
            <img class="image" :src="category.CategoryImage" alt="" :style="imageBorderStyling(category)">
          </div>
          <h4 class="">{{category.CategoryName}}</h4> 
        </div>
      </div>
    </div>
    <div class="tasks-list" v-if="filteredTasks && filteredTasks.length">
      <div class="task-heading d-flex justify-content-between align-items-center m-3">
        <h2 class="">Your Tasks</h2>
        <button><router-link to="/addTask"><Icon class="add-button" icon="uil:plus" color="white" /></router-link></button>
      </div>
      <div v-for="task in filteredTasks" :key="task.TaskID" class="single-task mx-auto" :style="borderStyling(task)">
        <router-link class="single-link d-flex flex-column justify-content-between p-2 h-100" :to="{name: 'tasks', params: {id: task.TaskID}}" >
        <h3 class="">{{ task.TaskTitle }}</h3>
        <h4>Progress: <span>78%</span></h4>
        <div class="icon-list d-flex justify-content-between gap-5">
          <div class="due-date d-flex align-items-end">
            <Icon icon="fluent-mdl2:date-time" :color="task.CategoryColor" style="font-size: 1.3rem;"/>
            <h4>{{ formatDate(task.DueDate) }}</h4>
          </div>
          <div class="subtasks d-flex align-items-end">
            <Icon icon="mdi:subtasks" :color="task.CategoryColor" style="font-size: 1.4rem;"/>
            <h4>{{ getSubtaskCount(task) }}</h4>
          </div>
        </div>
      </router-link>
      </div>
    </div>
    <div class="empty mt-5" v-else>
      <h2 class="w-75 text-center mx-auto">No Task found in this category :(</h2>
    </div>
  </section>
</template>
<script>

import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon,
  },
  props: 'id',
  data() {
    return {
      currentCategory: null,
      categoryActive: true
    }
  },
  computed: {

    categories() {
     return this.$store.state.categories
    },
    tasks() {
      return this.$store.state.tasks;
    },
    subtasks() {
      return this.$store.state.subtasks
    },
    filteredTasks() {
      if (this.currentCategory) {
        return this.tasks.filter(task =>
        task.CategoryName === this.currentCategory
        );
      }
      return this.tasks;
    },
  },
  mounted(){
    this.$store.dispatch('getCategories');
    this.$store.dispatch('getTasks');
    this.$store.dispatch('getSubtasks');
  },
  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleString('en-UK', options);
    },
    getSubtaskCount(task) {
      if (!this.subtasks || !Array.isArray(this.subtasks)) {
        return 0;
      }
      return this.subtasks.filter(subtask => subtask.TaskID === task.TaskID).length;
    },
    filterTasksByCategory(category) {
      this.currentCategory = category.CategoryName;
      const ret = this.filteredTasks.every((x) => x.CategoryName === this.currentCategory);
      console.log(ret)
      return ret;
    },
    borderStyling(task) {
      return `border-left: 1.2rem solid ${task.CategoryColor}; 
              box-shadow: -10px 0px 10px -10px ${task.CategoryColor};`
    },
    categoryClass(category) {
      return category.CategoryName === this.currentCategory? 'overlay' : null;
    },
    overlayBorderStyling(category){
      return `border: 3px solid ${category.CategoryName == this.currentCategory? category.CategoryColor : null };`
    },
    imageBorderStyling(category) {
      return `${category.CategoryName == this.currentCategory? null : `border: 3px solid ${category.CategoryColor};` }`
    }
}

}
</script>
<style scoped>
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#task {
  background-color: #f5f5f5;
}
h1 {
  font-family: 'Comfortaa', cursive;
  font-size: 2.25rem;
  font-weight: 400;
  margin: 1rem 0 2rem 1rem;
}

h2 {
  font-family: 'Comfortaa', cursive;
  font-size: 1.25rem;
  font-weight: 300;
}

h3{
  font-family: 'Comfortaa', cursive;
  font-size: 0.9rem;
  font-weight: 400;
}

h4{
  font-family: 'Comfortaa', cursive;
  font-size: 0.9rem;
  font-weight: 400;
}

h5{
  font-family: 'Comfortaa', cursive;
  font-size: 0.7rem;
  font-weight: 400;
}

input {
  background-color: #fff;
  border: 0px solid #f4f4f4;
  border-radius: 30px;
  height: 40px;
  width: 18rem;
  padding: 0px 10px 0px 10px;
}

button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #4d8ab2;
  box-shadow: -0.2rem 0.2rem 0.6rem 0.2rem #4d8ab231;
  border: 0px;
}

.search-bar {
  margin: 2rem 1rem 2rem 1rem;
}
.searchBtn{
  font-size: 2rem;
}

.circle {
  width: 5.1rem;
  height: 5.1rem;
  margin: 0.5rem 0.3rem 0.5rem 0.3rem;
  border-radius: 100%;
}

.category-list {
  overflow-x: auto;

  .work-related, .shopping, .entertainment, .finance, .family, .health {
    text-align: center;
  }
}

  .category-list::-webkit-scrollbar {
    display: none;
  }

  .image {
    width: 5.1rem;
    height: 5.1rem;
    display: block;
    border-radius: 50px;
}

.single-task {
  background-color: #fff;
  width: 22rem;
  height: 6rem;
  margin: 2rem auto;
  position: relative;
  border-left: 1.2rem solid #FFB23F;
  box-shadow: 0.2rem 0.2rem 0.6rem -0.3rem #00000031,
              -10px 0px 10px -10px #FFB23F;
}

span {
  color: #ffb23f;
}

span {
  color: #ffb23f;
}

a.router-link {
  text-decoration: none;
  color: black;
}

.single-link{
  text-decoration: none;
  color: #000;
}

.add-button{
  font-size: 2rem;
}

.overlay {
  position: relative;
  border-radius: 50px;
}

.overlay::after {
  content: "";
  position: absolute;
  border-radius: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000080; /* Adjust the overlay color and transparency as needed */
  z-index: 1; /* Increase the z-index value to place the overlay above the image */
}

/* .active {
  position: relative;
}

.active  {
  position: relative;
  z-index: 0;
} */

</style>