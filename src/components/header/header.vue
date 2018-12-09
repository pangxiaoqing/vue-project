
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
    height:44px;
    text-align: center;
    color:$color-theme;
    font-size:0;
    .icon{
        display:inline-block;
        vertical-align: top;
        margin-top:6px;
        width:30px;
        height:32px;
        margin-right:9px;
        // @include bg-image('logo');
        background-size: 30px 32px;
        background-image: url("logo@2x.png");
    }
    .text{
        display: inline-block;
        vertical-align: top;
        line-height: 44px;
        font-size:$font-size-large;
        font-weight: bold;
    }
    .mine{
        position: absolute;
        top:0;
        right:0;
        .icon-mine{
            display: block;
            margin-top:10px;
            margin-right: 10px;
            color:$color-theme;
            background: url("user.png") no-repeat;
            background-size:30px 30px;
            width:30px;
            height:30px;
        }
    }
}

</style>


