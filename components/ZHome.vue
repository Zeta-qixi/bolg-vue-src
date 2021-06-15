<template>

  <div id="home">
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
          <a href="#">AtriBot</a>
          <a href="#">Minecraft</a>
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
<style>
#home{
  height: 100vh;
  min-height: 500px;
  background: url(../assets/bg.jpg) no-repeat center;
  background-attachment: fixed;
}
#home .inner-width{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}
#home .content{
  width: 100%;
  color: #fff;
}
.content h1{
  font-size: 60px;
  margin-bottom: 50px;
}

#home .content h1::after{
  content: "Gamer";
}

#home .content .icon a{
  color: #fff;
  font-size: 21px;
  margin: 0 10px;
  transition: .3s linear;
  text-decoration : none ;
}
#home .content .icon a:hover{
  color: rgb(111, 111, 255);
}
#home .content .buttons{
  margin-top: 60px;
}
#home .content .buttons a{
  display: inline-block;
  margin: 15px 30px;
  padding: 14px 0;
  width: 150px;
  border: 1px solid;
  border-radius: 5px;
  border-color: #e0f9ff54;
  background: #e0f9ff54;
  font-size: 18px;
  font-weight: 700;
  color: #fff34e;

  transition: .2s linear;
}
#home .content .buttons a:hover{
  background-color: #fff34eb0;
  border-color: #fff34e;
  color:rgba(255, 255, 255, 0.9);
}
</style>