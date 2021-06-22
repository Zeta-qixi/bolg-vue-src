<template>
    <div id = 'app'>
      <div class="container">
   
        <div class="container-led">
          <div class="led"></div>
        </div>
        

        <div class="controler">
         	
          <div class="rgb r"></div>
          <div class="rgb g"></div>
          <div class="rgb b"></div>
      
        </div>

      </div>
    </div>
</template>

<script>

</script>

<style scoped>
#app{
  margin: auto;
  height: 100vh;
  width: 100vw;
 
  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
  margin-top: 30px;
  height: 80%;
  width: 70%;


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container-led{
  flex: 1;
  width: 100%;
}
.led{
  height: 70%;
  width: 70%;
  margin: 7% auto;
  box-shadow: 0 0 50px #f00;
  border-radius: 50%;
  background-color: rgb(255, 0, 0);
}
.controler{
  flex: 1;
  width: 90%;

  border-radius: 3%;
  margin: 15px auto 0 auto;
  display: flex;
  
  align-items: center;
  justify-content:space-around;
  border: 5px aliceblue solid;
  background-color: aliceblue;
  border-radius: 10%;
  box-shadow: -5px -5px 50px hsla(0, 0%, 4%, 0.6) inset;  
}

.rgb{
  height: 80%;
  width: 20px;
  text-align: center;
  border-radius: 10px;
  
  
}
.controler .r{
  background-color:red;
}
.controler .g{
  background-color:green;
}
.controler .b{
  background-color:blue;
}
</style>