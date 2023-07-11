<template>
  <header class="sticky-bottom">
    <nav>
      <ul class="nav d-flex justify-content-around ">
        <router-link to="/"><Icon class="icon" icon="ci:list-checklist" color="#4d8ab2" /></router-link>
        <router-link to="/notes"><Icon class="icon" icon="tabler:notes" color="#4d8ab2" /></router-link>
        <router-link to="/profile"><Icon class="icon" icon="iconamoon:profile-circle-fill" color="#4d8ab2" /></router-link>
      </ul>
    </nav>
  </header>
</template>
<script>
import { Icon } from '@iconify/vue';
export default {
  components: {
		Icon
	}
}
</script>
<style scoped>
  header {
    width: 100vw;
  }

  nav {
    background-color: #fff;
    padding: 0;
  }

  ul {
    background-color: #fff;
  }

  li {
    padding-bottom: 30px;
  }

  nav a {
    color: #2c3e50;
    padding: 30px;
    text-decoration: none;
  }

  nav a.router-link-exact-active {
    border-top: 2px solid #4d8ab2;
  }

  .icon {
    font-size: 2rem;
  }
</style>