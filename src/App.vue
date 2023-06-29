<template>
  <router-view/>
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
  background-color: #ffffff;
  min-height: 100vh;
}
*,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>
