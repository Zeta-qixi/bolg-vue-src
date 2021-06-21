
<template>

  <div id="homepage">
    <div class="inner-width">
      <div class="content">
        <h1>Hi I`m </h1>
        <div class="icon">
              
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-github"></a>

        <a href="#" class="fa fa-weixin"></a>
        <a href="#" class="fa fa-steam"></a>
        </div>

        <div class="buttons">
          <a href="/">AtriBot</a>
          
          <router-link to="/about">about</router-link>
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
    data() {
    return {

    }
  }
}
</script>
<style scoped>
@import "../assets/HomePage/1.css";
</style>