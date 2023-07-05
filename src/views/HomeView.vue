<template>
  <section id="task" class=" d-flex justify-content-center flex-column">
    <header>
      <h1>Hey, Max</h1>
      <div class="search-bar d-flex justify-content-center gap-2 align-items-center">
        <input type="search" placeholder="Search your tasks">
        <button><Icon class="searchBtn" icon="ic:sharp-search" color="#ffff" /></button>
      </div>
    </header>
    <div class="categories">
      <h2>Categories</h2>
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
      <h2>Your Tasks</h2>
      <div class="single-task mx-auto d-flex flex-column justify-content-between">
        <h3 class="pt-3 ps-4">Research Accommodations</h3>
        <div class="icon-list d-flex justify-content-between w-75 gap-5 ps-4">
          <div class="subtasks d-flex align-items-end">
            <Icon icon="mdi:subtasks" color="#ffb23f" style="font-size: 1.5rem;"/>
            <h4>6</h4>
          </div>
          <div class="due-date d-flex align-items-end">
            <Icon icon="fluent-mdl2:date-time" color="#ffb23f" style="font-size: 1.5rem;"/>
            <h4>30 Jun 2023</h4>
          </div>
        </div>
        <div class="progress d-flex justify-content-between">
          <h5 class="ps-1 pb-5">Your progress</h5>
          <h5><span class="pe-1 pb-2">78%</span></h5>
        </div>
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
  margin: 2rem 0 1rem 1rem;
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
  box-shadow: 0.2rem 0.2rem 0.6rem -0.1rem #00000031;
}

.single-task::before {
  content: '';
  width: 20.8rem;
  height: 0.2rem;
  background-color: #9B9B9B;
  position: absolute;
  bottom: 0;
}
.single-task::after {
  content: '';
  width: 14.96rem;
  height: 0.2rem;
  background-color: #FFB23F;
  position: absolute;
  bottom: 0;
}

span {
  color: #ffb23f;
}

.progress {
  background-color: #fff;
}
</style>