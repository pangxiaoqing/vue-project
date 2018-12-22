<template>
    <div class="list_mar_top">
        <section class="hot_content">
            <div class="hot">热门</div>
            <Slider :options="options" :items="ticketList" cname="hot_slider">
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
            </Slider>
        </section>
        <section class="scenic_spots">
            <div class="hot">景区景点</div>
            <List :items="hotScenicList"/> 
        </section>
    </div>
</template>

<script>
import Slider from "../base/slider.vue"
import List from "../base/list.vue"

export default {
    components:{
        Slider,
        List
    },
    data(){
        return{
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
                slidesPerView: 2.3,
                spaceBetween: 30,
                freeMode: true,
            },
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
                this.ticketList=res.data.value.ticketList;
                this.hotScenicList=res.data.value.hotScenicList;
                
            }).catch(()=>{})
        }
    }
}
</script>
<style>
    .list_mar_top{
        margin-top:79px;
    }
    .hot_content{
        background-color: #fff;
    }
    .scenic_spots{
        background-color: #fff;
        margin-bottom: 88px;
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
</style>


