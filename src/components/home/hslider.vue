<template>
    <article class="slider_navlist">
        <Slider :items="adList" cname="slider"/>
        <section class="list">
            <div v-for="item in navList" class="item" :key="item.tagId" @click="jump(item.tagId)">
                <!-- <img :src="item.img" :alt="item.tagName"> -->
                <img src="../../assets/img/index/nature.png" :alt="item.tagName">
                <h4>{{ item.tagName }}</h4>
            </div>
        </section>
    </article>
</template>

<script>
import Slider from "../base/slider.vue"

export default {
    components: {
        Slider,
    },
    data() {
        return {
            adList: [{
                "adImg" : "../../assets/img/img.jpg",
                "adUrl" : "http://www.jxlhs.com.cn/"
                }, {
                "adImg" : "../../assets/img/img.jpg",
                "adUrl" : "http://www.jxlhs.com.cn/"
                }, {
                "adImg" : "../../assets/img/img.jpg",
                "adUrl" : "http://www.jxlhs.com.cn/"
            }],
            navList:[{
                "tagId" : 1,
                "tagName" : "人文"
                }, {
                "tagId" : 2,
                "tagName" : "自然"
                }, {
                "tagId" : 3,
                "tagName" : "漂流"
            }]
        }
    },
    created(){
        // this.getSlider();
    },
    mounted(){

    },
    methods:{
        getSlider(){
            this.axios.get('/ticket/home').then((res)=>{
                this.adList=res.data.value.adList;
                this.navList=res.data.value.navList;
                // console.log(this.hotScenicList);
                // for(var key in this.navList){
                //     if(this.navList[key].tagId == "1"){
                //         this.navList[key][img]="../../assets/index/humanities.png";
                //     }
                //     if(this.navList[key].tagId == "2"){
                //         this.navList[key][img]="../../assets/index/nature.png";
                //     }
                //     if(this.navList[key].tagId == "3"){
                //         this.navList[key][img]="../../assets/index/drifting.png";
                //     }
                // }
                // console.log(this.navList);
            }).catch(()=>{})
        },
        jump(tagId){
            this.$router.push({
                path:'/navList',
                query:{
                    types:tagId
                }
            })
        }
    }
}
</script>

<style>
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
        bottom: 16px !important;
    }
    .slider_navlist{
        position: relative;
    }
    .slider img{
        width:100%;
        height: 160px;
    }
    .list{
        width: 100%;
        position: absolute;
        top:156px;
        z-index: 999;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        background:#fff;
    }
    .list .item{
        margin-top:20px;
        text-align: center;
    }
    .list img{
        width:44px;
        height: 44px;
    }
    .list h4{
        font-size: 13px;
        color:#5E6776;
        margin-top: 6px;
    }
</style>
