<template>
    <div>
        <Heador>
            <img @click="back" src="../../assets/img/header/arrow.png" alt="">
            <h4>漂流</h4>
        </Heador>
        <div class="navlist">
            <scroll ref="scroll" class="navlist_content" :data="tagTypeList">
                <List cname="panel_img" img_box="img_box" :items="tagTypeList" @jump="jumpNavListDetail"/>
                <div class="loading_container" v-show="!tagTypeList.length">
                    <loading></loading>
                </div>
            </scroll>
        </div>
        <Footor/>
    </div>
</template>
<script>
import Heador from '../base/header.vue'
import List from '../base/list.vue'
import Footor from "../base/footer.vue"
import Scroll from "../base/scroll.vue"
import Loading from "../base/loading/loading.vue"

export default {
    components:{
        Heador,
        List,
        Footor,
        Scroll,
        Loading
    },
    data(){
        return {
            types:this.$route.query.types,
            tagTypeList:[
                {
                    "img": "../../assets/img/img.png",
                    "tagId": 2,
                    "price": 190,
                    "id": 1,
                    "tagName": "自然",
                    "UUid": 1,
                    "title": "龙虎山景区"
                },
                {
                    "img": "../../assets/img/img.png",
                    "tagId": 2,
                    "price": 190,
                    "id": 1,
                    "tagName": "自然",
                    "UUid": 1,
                    "title": "龙虎山景区"
                },
                {
                    "img": "../../assets/img/img.png",
                    "tagId": 2,
                    "price": 190,
                    "id": 1,
                    "tagName": "自然",
                    "UUid": 1,
                    "title": "龙虎山景区"
                },
                {
                    "img": "../../assets/img/img.png",
                    "tagId": 2,
                    "price": 190,
                    "id": 1,
                    "tagName": "自然",
                    "UUid": 1,
                    "title": "龙虎山景区"
                },
                {
                    "img": "../../assets/img/img.png",
                    "tagId": 2,
                    "price": 190,
                    "id": 1,
                    "tagName": "自然",
                    "UUid": 1,
                    "title": "龙虎山景区"
                },
                {
                    "img": "../../assets/img/img.png",
                    "tagId": 2,
                    "price": 190,
                    "id": 1,
                    "tagName": "自然",
                    "UUid": 1,
                    "title": "龙虎山景区"
                },
                {
                    "img": "../../assets/img/img.png",
                    "tagId": 2,
                    "price": 190,
                    "id": 1,
                    "tagName": "自然",
                    "UUid": 1,
                    "title": "龙虎山景区"
                },
                {
                    "img": "../../assets/img/img.png",
                    "tagId": 2,
                    "price": 190,
                    "id": 1,
                    "tagName": "自然",
                    "UUid": 1,
                    "title": "龙虎山景区"
                },
                {
                    "img": "../../assets/img/img.png",
                    "tagId": 2,
                    "price": 190,
                    "id": 1,
                    "tagName": "自然",
                    "UUid": 1,
                    "title": "龙虎山景区"
                },
                {
                    "img": "../../assets/img/img.png",
                    "tagId": 2,
                    "price": 190,
                    "id": 1,
                    "tagName": "自然",
                    "UUid": 1,
                    "title": "龙虎山景区"
                },
                {
                    "img": "../../assets/img/img.png",
                    "tagId": 2,
                    "price": 190,
                    "id": 1,
                    "tagName": "自然",
                    "UUid": 1,
                    "title": "龙虎山景区"
                },
                {
                    "img": "../../assets/img/img.png",
                    "tagId": 2,
                    "price": 180,
                    "id": 1,
                    "tagName": "自然",
                    "UUid": 1,
                    "title": "龙虎山景区"
                }
            ]
        }
    },
    created(){
        // this.getList();
    },
    methods:{
        getList(){
            this.axios.get('/ticket/home/type/info?types='+this.types).then((res)=>{
                console.log(res);
                this.tagTypeList=res.data.value.tagTypeList;
                console.log(this.tagTypeList);
            })

        },
        back(){
            this.$router.go(-1);
        },
        jumpNavListDetail(){
            this.$router.push({
                path:'/navListDetail'
            })
        }
    }
}
</script>
<style>
    .navlist{
        border-top:1px solid #F5F5F6;
        background-color: #fff;
        position: fixed;
        top:44px;
        bottom:49px;
        width:100%;
    }
    .navlist_content{
        height: 100%;
        overflow: hidden;
    }
    .navlist .panel_img{
        padding:16px 0;
        border-bottom: 1px solid #F5F5F6;
    }
    .panel_img .img_box{
        width:120px;
    }
    .panel_img .img_box img{
        width:120px;
        background-size: 120px 90px;
    }
    .loading_container{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }
</style>


