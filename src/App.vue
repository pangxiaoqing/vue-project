<template>
  <div id="app" @touchmove.prevent>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style>
@import "./assets/css/reset.css";

#app{
  background: #F5F5F6;
}
#app img{
  margin:0;
  padding:0;
  border:none;
}
/* .app_content{
  flex:1;
  overflow-y:auto;
} */
</style>
