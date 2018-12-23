<template>
    <section class="header">
        <slot/>
    </section>
</template>

<script>
export default {
    
}
</script>

<style>
    .header{
        width:90%;
        height:44px;
        line-height: 44px;
        background-color:#fff;
        padding:0 5%;
        text-align: center;
        position: fixed;
    }
    .header img{
        width:24px;
        height:24px;
        position: absolute;
        left:4%;
        top:12px;
    }
    .header h4{
        font-size:18px;
        color:#333335;
    }
</style>



