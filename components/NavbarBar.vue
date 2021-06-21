<template>
  <div id="navbar" class="bar_">
    <div class="inner-width">
      <a href="/" class="logo"></a>
      <button class="menu-toggler">
        <span></span><span></span><span></span>
      </button>
      <div class="navbar-meun" >
        <a  v-for="item in meun" :key="item.name" :href="item.url">{{item.name}} </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      meun:[
        {name: "Home", url:"home"},
        {name: "About", url:"about"},
        {name: "Work", url:"work"},
        {name: "Other", url:"other"},

        ]
    }
  }
}
</script>
<style scoped>
@import "../assets/NavbarBar/1.css";
</style>