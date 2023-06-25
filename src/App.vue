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
  #app {
    background-color: #f4f4f4;
    min-height: 100vh;
  }
  /* #home {
  } */


</style>
