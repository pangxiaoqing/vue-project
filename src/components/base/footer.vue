<template>
    <div class="tab">
        <router-link class="tab_item" tag="div" to="/index">
            <!-- <img src="../../assets/index/home_active.png" alt=""> -->
            <div class="tab_link" v-bind:class="{ 'tab_home_active': tabHomeActive, 'tab_home': tabHome }">首页</div>
        </router-link>
        <router-link class="tab_item" tag="div" to="/navList">
            <!-- <img src="../../assets/index/list.png" alt=""> -->
            <div class="tab_link" v-bind:class="{ 'tab_list_active': tabListActive, 'tab_list': tabHome }">订单</div>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tabHomeActive:true,
            tabHome:false,
            tabListActive:false,
            tabHome:true
        }
    }
}
</script>

<style>
    .tab{
        height:49px;
        line-height:49px;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position:fixed;
        bottom: 0;
    }
    .tab_item{
        text-align: center;
        font-size:12px;
    }
    .tab_link{
        height:49px;
        line-height:49px;
        background-size:24px 24px;
        background-repeat: no-repeat;
        padding-top: 10px;
        margin-top: 18px;
    }
    .tab_home,.tab_list{
        color:#8C8C8C;
        background-image: url("../../assets/img/footer/home.png");
    }
    .tab_list{
        background-image: url("../../assets/img/footer/list.png");
    }
    .tab_home_active,.tab_list_active{
        color:#40B1FF;
        background-image:url("../../assets/img/footer/home_active.png");
    }
    .tab_list_active{
        background-image:url("../../assets/img/footer/list_active.png");
    }
</style>


