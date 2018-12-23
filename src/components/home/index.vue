<template>
    <div class="home">
        <scroll ref="scroll" class="home_content" :data="hotScenicList">
            <div>
                <article class="slider_navlist">
                    <slider :items="adList" cname="slider"/>
                    <section class="list">
                        <div v-for="item in navList" class="item" :key="item.tagId" @click="jumpNavList(item.tagId)">
                            <!-- <img :src="item.img" :alt="item.tagName"> -->
                            <img src="../../assets/img/index/nature.png" :alt="item.tagName" @load="loadImage">
                            <h4>{{ item.tagName }}</h4>
                        </div>
                    </section>
                </article>
                <div class="list_mar_top">
                    <section class="hot_content">
                        <div class="hot">热门</div>
                        <slider :options="options" :items="ticketList" cname="hot_slider">
                            <template slot="item" slot-scope="props">
                                <h6>{{props.title}}</h6>
                                <div class="price">
                                    <span><i>￥</i>{{props.price}}</span>
                                    <!-- <em>￥32</em> -->
                                </div>
                                <div class="hot_img">
                                    <img src="../../assets/img/index/nature_mini.png" alt="">
                                    <!-- <img src='../../assets/indexSlider/'+{{props.tagId}}+'.png' alt=""> -->
                                    <!-- <img :src=`../../assets/index/${props.tagId}.png`> -->
                                </div>
                            </template>
                        </slider>
                    </section>
                    <section class="scenic_spots">
                        <div class="hot">景区景点</div>
                        <list :items="hotScenicList"/> 
                    </section>
                </div>
            </div>
            <footor/>
            <div class="loading_container" v-show="!(ticketList.length&&hotScenicList.length)">
                <loading></loading>
            </div>
        </scroll>
    </div>
</template>
<script>
import Slider from "../base/slider.vue"
import List from "../base/list.vue"
import Footor from "../base/footer.vue"
import Scroll from "../base/scroll.vue"
import Loading from "../base/loading/loading.vue"

export default {
    components: {
        Slider,
        List,
        Footor,
        Scroll,
        Loading
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
            }],
            ticketList:[{
                "img" : "",
                "tagId" : 1,
                "price" : 150.0,
                "title" : "龙虎山参观票",
                "tagName" : "人文"
                }, {
                "img" : "2",
                "tagId" : 2,
                "price" : 170.0,
                "title" : "涠洲岛参观票",
                "tagName" : "自然"
                }, {
                "img" : "3",
                "tagId" : 3,
                "price" : 170.0,
                "title" : "涠洲岛参观票",
                "tagName" : "漂流"
                }, {
                "img" : "3",
                "tagId" : 3,
                "price" : 150.0,
                "title" : "龙虎山参观票",
                "tagName" : "漂流"
                }, {
                "img" : "3",
                "tagId" : 1,
                "price" : 500.0,
                "title" : "武当山参观票",
                "tagName" : "人文"
            }],
            hotScenicList:[{
                "img" : "3",
                "title" : "1asd",
                "price" : "100"
                }, {
                "img" : "3",
                "title" : "12",
                "price" : "100"
                }, {
                "img" : "2",
                "title" : "2",
                "price" : "100"
                }, {
                "img" : "",
                "title" : "22",
                "price" : "100"
            }],
            options: {
                slidesPerView: 2.4,
                spaceBetween: 30,
                freeMode: true,
            }
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
                this.ticketList=res.data.value.ticketList;
                this.hotScenicList=res.data.value.hotScenicList;
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
        jumpNavList(tagId){
            this.$router.push({
                path:'/navList',
                query:{
                    types:tagId
                }
            })
        },
        loadImage(){
            if (!this.checkloaded) {
                this.checkloaded = true
                setTimeout(() => {
                    this.$refs.scroll.refresh()
                }, 20)
            }
        }
    }
}
</script>
<style>
    .home{
        /* margin-bottom: 88px; */
        position: fixed;
        width: 100%;
        bottom: 44px;
        top: 0;
    }
    .home_content{
        height: 100%;
        overflow: hidden;
    }
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
    .slider_navlist .list{
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
    .slider_navlist .list .item{
        margin-top:20px;
        text-align: center;
    }
    .slider_navlist .list img{
        width:44px;
        height: 44px;
    }
    .slider_navlist .list h4{
        font-size: 13px;
        color:#5E6776;
        margin-top: 6px;
    }
    .list_mar_top{
        margin-top:79px;
    }
    .hot_content{
        background-color: #fff;
    }
    .scenic_spots{
        background-color: #fff;
    }
    .hot_content .hot,.scenic_spots .hot{
        font-size: 18px;
        font-weight: bold;
        text-align: left;
        padding:40px 5% 20px;
    }
    .hot_slider{
        position: relative;
    }
    .hot_slider .swiper-container{
        box-sizing: border-box;
        padding: 0 5%;
    }
    .hot_slider .swiper-container .swiper-wrapper .swiper-slide{
        width:140px !important;
        margin-right: 10px !important;
    }
    .hot_slider .swiper-container .swiper-slide img{
        width: 140px;
        height: 104px;
        display: block;
        border: 1px solid #fafafa;
        border-radius: 6px;
    }
    .hot_slider h6{
        font-size:14px;
        color:#484848;
        font-weight:bold;
        text-align: left;
        padding:10px 0;
        width:100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .hot_slider .price span{
        margin-top:10px;
    }
    .hot_slider .swiper-container .swiper-slide .hot_img img {
        display:block;
        width:38px;
        height:23px;
        background-size: 100%;
        position: absolute;
        left: -2px;
        top:0;
        border:0;
    }
    .loading_container{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
