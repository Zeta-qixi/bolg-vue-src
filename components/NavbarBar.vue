<template>
  <div id="index" class="bar_">
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
<style>
#index{
  position: fixed;
  background-color: rgba(152, 255, 233, 0.6);
  width: 100%;
  padding: 30px 0;
  top:0;
  z-index: 100;
  transition: .3s linear;
}
#index .inner-width{
  display: flex;
  align-self: center;
  justify-content: space-between;
}


.logo{

  width: 32px;
  height: 30px;
  background-image: url("../assets/chess-fff.png");
  background-size: contain;
}
.menu-toggler{
  background: none;
  width: 40px;
  border: none;
  cursor: pointer;
  position: relative;
  outline: none;
  z-index: 999;
  display: none;
}
.menu-toggler span{
  display: block;
  height: 3px;
  background: #fff;
  margin: 6px 0;
  position: relative;
}
.navbar-meun a{
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin-left: 30px;
  transition: .2s linear;
  
}
.navbar-meun a:hover{
  color: #686868;
}
</style>