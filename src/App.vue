<template>
  <div id="app" @touchmove.prevent>
    <!-- <heador></heador> -->
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <!-- <router-view></router-view> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
// import Heador from 'components/header/heador.vue'
// import HelloWorld from 'components/HelloWorld'

export default {
  name:'App'
  // components:{
  //   Heador
  // }
}
</script>

<style lang="scss">
@import "assets/css/reset.scss";

// $color:red;
// #app {
//   background-color: $color;
// }
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }


// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
