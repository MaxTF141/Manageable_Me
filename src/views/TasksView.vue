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
      <div class="category-list gap-2">
        <div class="work-related d-inline-flex flex-column align-items-center">
          <div class="circle c1"></div>
          <h4>Work-related</h4>
        </div>
        <div class="shopping d-inline-flex flex-column align-items-center">
          <div class="circle c2"></div>
          <h4>Shopping</h4>
        </div>
        <div class="family d-inline-flex flex-column align-items-center">
          <div class="circle c3"></div>
          <h4>Family and Household</h4>
        </div>
        <div class="health d-inline-flex flex-column align-items-center">
          <div class="circle c4"></div>
          <h4>Health and Fitness</h4>
        </div>
        <div class="entertainment d-inline-flex flex-column align-items-center">
          <div class="circle c5"></div>
          <h4>Social and Entertainment</h4>
        </div>
        <div class="finance d-inline-flex flex-column align-items-center flex-wrap">
          <div class="circle c6"></div>
          <h4>Financial Management</h4>
        </div>
      </div>
    </div>
    <div class="tasks-list">
      <div class="task-heading d-flex justify-content-between align-items-center m-3">
        <h2 class="">Your Tasks</h2>
        <button><Icon class="add-button" icon="uil:plus" color="white" /></button>
      </div>
      <div v-for="task in tasks" :key="task.TaskID" class="single-task mx-auto ">
        <router-link class="single-link d-flex flex-column justify-content-between p-2 h-100" :to="{name: 'tasks', params: {id: task.TaskID}}">
        <h3 class="">{{ task.TaskTitle }}</h3>
        <h4>Progress: <span>78%</span></h4>
        <div class="icon-list d-flex justify-content-between gap-5">
          <div class="due-date d-flex align-items-end">
            <Icon icon="fluent-mdl2:date-time" color="#ffb23f" style="font-size: 1.3rem;"/>
            <h4>{{ formatDate(task.DueDate) }}</h4>
          </div>
          <div class="subtasks d-flex align-items-end">
            <Icon icon="mdi:subtasks" color="#ffb23f" style="font-size: 1.4rem;"/>
            <h4>{{ getSubtaskCount(task) }}</h4>
          </div>
        </div>
      </router-link>
      </div>
      <div class="single-task mx-auto">

      </div>
      <div class="single-task mx-auto">

      </div>
      <div class="single-task mx-auto">

      </div>
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
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    subtasks() {
      console.log(this.$store.state.subtasks)
      return this.$store.state.subtasks
    }
  },
  mounted(){
    this.$store.dispatch('getTasks');
    this.$store.dispatch('getSubtasks')
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
  display: flex;
  overflow-x: auto;

  .work-related, .shopping, .entertainment, .finance, .family, .health {
    text-align: center;
  }
}

  .category-list::-webkit-scrollbar {
    display: none;
  }

.c1 {
  background-image: url('https://i.postimg.cc/L5bQh4F0/undraw-Working-remotely-re-6b3a-1.png');
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid #FFB23F;
  box-shadow: 0.2rem 0.2rem 0.6rem -0.1rem #00000031;

}
.c2 {
  background-image: url('https://i.postimg.cc/7Lks5QjD/undraw-empty-cart-co35.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid #FFB23F;
  box-shadow: 0.2rem 0.2rem 0.6rem -0.1rem #00000031;
}
.c3 {
  background-image: url('https://i.postimg.cc/hvj3Sz6d/undraw-family-vg76.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid #FFB23F;
  box-shadow: 0.2rem 0.2rem 0.6rem -0.1rem #00000031;
}
.c4 {
  background-image: url('https://i.postimg.cc/qMNZSK8f/undraw-Personal-trainer-re-cnua.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid #FFB23F;
  box-shadow: 0.2rem 0.2rem 0.6rem -0.1rem #00000031;
}
.c5 {
  background-image: url('https://i.postimg.cc/13675ZCJ/undraw-Having-fun-re-vj4h.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid #FFB23F;
  box-shadow: 0.2rem 0.2rem 0.6rem -0.1rem #00000031;
}
.c6  {
  background-image: url('https://i.postimg.cc/sf6NTmG9/undraw-Investing-re-bov7.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid #FFB23F;
  box-shadow: 0.2rem 0.2rem 0.6rem -0.1rem #00000031;
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
</style>