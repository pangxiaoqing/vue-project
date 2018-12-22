<template>
<div class="list_item">
    <div :class="[panelClass,cname]" v-for="item in items" :key="item.title">
        <div :class="[scenic_spots_list_img,img_box]">
            <!-- <img :src="item.img" alt=""> -->
            <img src="../../assets/img/img.jpg" alt="">
        </div>
        <div class="scenic_spots_list_content">
            <h6>{{item.title}}</h6>
            <div class="price">
                <span><i>￥</i>{{item.price}}</span> 
                <!-- <em>￥32</em> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        cname: {
            type: String,
            default: "",
        },
        img_box: {
            type: String,
            default: "",
        },
        items: {
            type: Array,
            default() {
                return []
            },
        },
    },
    data() {
        return {
            panelClass: "scenic_spots_list",
            scenic_spots_list_img:"scenic_spots_list_img",
        }
    },
}
</script>

<style>
    .list_item{
        width:90%;
        padding:0 5%;
    }
    .scenic_spots_list{
        display:flex;
        justify-content: flex-start;
        flex-direction: row;
        align-items: center;
        padding-bottom:20px;
        box-sizing: border-box;
    }
    .scenic_spots_list_img{
        width:90px;
        height:90px;
    }
    .scenic_spots_list_img img{
        width:90px;
        height:90px;
        background-size: 90px 90px;
        border-radius:6px;
    }
    .scenic_spots_list_content{
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        text-align: left;
        height: 90px;
        overflow: hidden;
    }
    .scenic_spots_list_content h6{
        font-size:14px;
        color:#484848;
        font-weight:bold;
        text-align: left;
        padding:10px 0 45px;
        width:100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .price{
        font-size: 12px;
        text-align: left;
    }
    .price span{
        color: #FF6245;
        font-weight: bold;
        font-size: 14px;
    }
    .price span i{
        font-size: 10px;
        font-style: normal;
        font-weight: normal;
    }
    .price em{
        font-size: 12px;
        font-style: normal;
        text-decoration: line-through;
        padding-left: 10px;
        color:#878789;
    }
</style>



