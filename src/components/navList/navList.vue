<template>
    <div>
        <Heador>
            <img @click="back" src="../../assets/img/header/arrow.png" alt="">
            <h4>漂流</h4>
        </Heador>
        <div class="navlist">
            <List cname="panel_img" img_box="img_box" :items="tagTypeList"/>
        </div>
        <Footor/>
    </div>
</template>
<script>
import Heador from '../base/header.vue'
import List from '../base/list.vue'
import Footor from "../base/footer.vue"

export default {
    components:{
        Heador,
        List,
        Footor
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
        }
    }
}
</script>
<style>
    .navlist{
        border-top:1px solid #F5F5F6;
        background-color: #fff;
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
</style>


