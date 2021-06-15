<template>

<div>
  <navbar/>
  <z-home/>
</div>
</template>

<script>

import Navbar from './components/NavbarBar.vue'
import ZHome from './components/ZHome.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    ZHome
  }
}
</script>