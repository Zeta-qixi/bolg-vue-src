<template>

<div>
  <navbar/>
  <router-view class="main-router"></router-view>
</div>
</template>

<script>

import Navbar from './components/NavbarBar.vue'




export default {
  name: 'App',
  components: {
    Navbar,

  }
}
</script>