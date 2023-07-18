<template>
  <router-view class="page"></router-view>
  <NavBar />
</template>

<script>

import NavBar from '@/components/NavBarComponent.vue'
export default {
    components: {
      NavBar
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');
#app {
  background-color: #f5f5f5;
  min-height: 100vh;
}
*,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
#task, #single-task, #notes, #profile{
  margin-bottom: 94px;
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

</style>
