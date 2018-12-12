
<template>
    <div class="header">
        <div class="icon"></div>
        <h1 class="text">xiaoqingpang</h1>
        <router-link tag="div" class="mine" to="/user">
        <i class="icon-mine"></i>
        </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="scss">
@import "@/assets/css/variable.scss";
@import "@/assets/css/mixin.scss";
.header{
    position: relative;
    height:88px;
    text-align: center;
    color:$color-theme;
    font-size:0;
    .icon{
        background-repeat: no-repeat;
        display: inline-block;
        vertical-align: top;
        margin-top: 12px;
        width: 60px;
        height: 64px;
        margin-right: 9px;
        background-size: 60px 64px;
        background-image: url("logo@2x.png");
    }
    .text{
        display: inline-block;
        vertical-align: top;
        line-height: 88px;
        font-size:$font-size-large;
        font-weight: bold;
    }
    .mine{
        position: absolute;
        top:0;
        right:0;
        .icon-mine{
            display: block;
            margin-top:20px;
            margin-right: 20px;
            color:$color-theme;
            background: url("user.png") no-repeat;
            background-size:60px 60px;
            width:60px;
            height:60px;
        }
    }
}

</style>


