<template>
    <div class="navListDetail_position">
        <Heador>
            <img @click="back" src="../../assets/img/header/arrow.png" alt="">
            <h4>门票预定</h4>
        </Heador>
        <div class="navlist_navListDetail">
            <scroll ref="scroll" class="navlist_content" :data="adList">
                <div>
                    <article class="slider_navListDetail">
                        <slider :items="adList" cname="slider"/>
                        <section class="list">
                            <h5>崖下库景点</h5>
                            <div class="time">09:00-17:00</div>
                            <div class="address">浙江省温州市永嘉县大若岩镇</div>
                        </section>
                    </article>
                    <div class="navListDetail_content">
                        <div class="navListDetail_content_tab">
                            <div class="navListDetail_content_tab_item" :class="{'Ticket_active':Ticket}" @click="navListDetailTicket">
                                <span class="navListDetail_content_tab_link">购票</span>
                            </div>
                            <div class="navListDetail_content_tab_item" :class="{'Instruction_active':Instruction}" @click="bookingInstruction">
                                <span class="navListDetail_content_tab_link">预订须知</span>
                            </div>
                            <div class="navListDetail_content_tab_item" :class="{'Policy_active':Policy}" @click="preferentialPolicy">
                                <span class="navListDetail_content_tab_link">优惠政策</span>
                            </div>
                            <div class="navListDetail_content_tab_item" :class="{'ScenicArea_active':ScenicArea}" @click="introductionToScenicArea">
                                <span class="navListDetail_content_tab_link">景区介绍</span>
                            </div>
                        </div>
                        
                        <div v-if="Ticket" class="navListDetail_ticket_list" v-for="item in ticketList" :key="item.tagId">
                            <div class="navListDetail_ticket_list_left">
                                <h5>{{item.title}}</h5>
                                <p>{{item.dec}}</p>
                                <span @click="getDetail">查看详情</span>
                            </div>
                            <div class="navListDetail_ticket_list_right">
                                <div>
                                    <span><i>￥</i>{{item.price}}</span>
                                    <!-- <em>￥54</em> -->
                                </div>
                                <button>预订</button>
                            </div>
                        </div>
                        <div v-else-if="Instruction">
                            777788
                        </div>
                        <div v-else-if="Policy">
                            11111
                        </div>
                        <div v-else-if="ScenicArea">
                            33333
                        </div>
                    </div>
                    

                </div>
                <div class="loading_container" v-show="!adList.length">
                    <loading></loading>
                </div>
            </scroll>
            <!-- 点击查看详情弹出层 -->
            <div id="detail_mask" v-show="boxshow">
                <transition name="detail_mask_content">
                    <div class="detail_mask_box">
                            <div class="detail_mask_box_title">
                                <h5>楠溪江风景区成人票</h5>
                                <span @click="close"><img src="../../assets/img/navListDetail/close.png" alt=""></span>
                            </div>
                            <!-- <scroll ref="scroll" class="navlist_content" :data="Details">
                                <div>
                                    <p v-for="item in Details" :key="item.detail">{{item.detail}}</p>
                                </div>
                            </scroll> -->
                            <p v-for="item in Details" :key="item.detail">{{item.detail}}</p>
                    </div>
                </transition>
                <!-- 弹出层遮罩层 -->
                <transition name="mask">
                    <div class="cover" @click="close"></div>
                </transition>
            </div>
        </div>
        <Footor/>
    </div>
</template>
<script>
import Heador from '../base/header.vue'
import Slider from "../base/slider.vue"
import Footor from "../base/footer.vue"
import Scroll from "../base/scroll.vue"
import Loading from "../base/loading/loading.vue"

export default {
    components:{
        Heador,
        Slider,
        Footor,
        Scroll,
        Loading
    },
    data(){
        return {
            Ticket:true,
            Instruction:false,
            Policy:false,
            ScenicArea:false,
            boxshow:false,
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
            ticketList:[{
                "img" : "",
                "tagId" : 1,
                "price" : 150.0,
                "title" : "龙虎山参观票",
                "tagName" : "人文",
                "dec":"关于制定天云寺门票价格的情况说明仑区深化关于制定天云寺门票价格的情况说明仑区深化"
                }, {
                "img" : "2",
                "tagId" : 2,
                "price" : 170.0,
                "title" : "涠洲岛参观票",
                "tagName" : "自然",
                "dec":"关于制定天云寺门票价格的情况说明仑区深化关于制定天云寺门票价格的情况说明仑区深化"
                }, {
                "img" : "3",
                "tagId" : 3,
                "price" : 170.0,
                "title" : "涠洲岛参观票",
                "tagName" : "漂流",
                "dec":"关于制定天云寺门票价格的情况说明仑区深化关于制定天云寺门票价格的情况说明仑区深化"
                }, {
                "img" : "3",
                "tagId" : 3,
                "price" : 150.0,
                "title" : "龙虎山参观票",
                "tagName" : "漂流",
                "dec":"关于制定天云寺门票价格的情况说明仑区深化关于制定天云寺门票价格的情况说明仑区深化"
                }, {
                "img" : "3",
                "tagId" : 1,
                "price" : 500.0,
                "title" : "武当山参观票",
                "tagName" : "人文",
                "dec":"关于制定天云寺门票价格的情况说明仑区深化关于制定天云寺门票价格的情况说明仑区深化"
            }],
            Details:[{
                detail:"王思聪开车前15天（不含）以上退票的，不收取退票费；票面乘车站开车时间前48小时以上的按票价，王思聪开车前15天（不含）以上退票的，不收取退票费；票面乘车站开车时间前48小时以上的按票价王思聪开车前15天（不含）以上退票的，不收取退票费；票面乘车站开车时间前48小时以上的按票价王思聪开车前15天（不含）以上退票的，不收取退票费；票面乘车站开车时间前48小时以上的按票价王思聪开车前15天（不含）以上退票的，不收取退票费；票面乘车站开车时间前48小时以上的按票价王思聪开车前15天（不含）以上退票的，不收取退票费；票面乘车站开车时间前48小时以上的按票价王思聪开车前15天（不含）以上退票的，不收取退票费；票面乘车站开车时间前48小时以上的按票价，王思聪开车前15天（不含）以上退票的，不收取退票费；票面乘车站开车时间前48小时以上的按票价王思聪开车前15天（不含）以上退票的，不收取退票费；票面乘车站开车时间前48小时以上的按票价王思聪开车前15天（不含）以上退票的，不收取退票费；票面乘车站开车时间前48小时以上的按票价王思聪开车前15天（不含）以上退票的，不收取退票费；票面乘车站开车时间前48小时以上的按票价王思聪开车前15天（不含）以上退票的，不收取退票费；票面乘车站开车时间前48小时以上的按票价"
            }]
        }
    },
    created(){
        // this.getList();
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        navListDetailTicket(){
            this.Ticket=true;
            this.Instruction=false;
            this.Policy=false;
            this.ScenicArea=false;
        },
        bookingInstruction(){
            this.Ticket=false;
            this.Instruction=true;
            this.Policy=false;
            this.ScenicArea=false;
        },
        preferentialPolicy(){
            this.Ticket=false;
            this.Instruction=false;
            this.Policy=true;
            this.ScenicArea=false;
        },
        introductionToScenicArea(){
            this.Ticket=false;
            this.Instruction=false;
            this.Policy=false;
            this.ScenicArea=true;
        },
        getDetail(){
            this.boxshow=true;
        },
        close(){
            this.boxshow=false;
        }
    }
}
</script>
<style>
    .navListDetail_position{
        position: relative;
    }
    .navlist_navListDetail{
        border-top:1px solid #F5F5F6;
        position: fixed;
        top:44px;
        bottom:49px;
        width:100%;
    }
    .navlist_content{
        height: 100%;
        overflow: hidden;
    }
    .loading_container{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }
    /* slider */
    .slider_navListDetail img{
        width:100%;
        height: 186px;
    }
    .swiper-pagination-bullet{
      background: #fff !important;
      opacity: 0 !important;
    }
    .swiper-pagination-bullet-active {
        opacity: 0 !important;
        background: #fff !important;
    }
    .slider_navListDetail{
        position: relative;
    }
    .slider_navListDetail .list{
        width: 90%;
        position: absolute;
        top:184px;
        z-index: 999;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background:#fff;
        padding:16px 5%;
        text-align: left;
    }
    .slider_navListDetail .list h5{
        font-size:16px;
        color:#484848;
        font-weight: bold;
    }
    .slider_navListDetail .list .time{
        height: 20px;
        line-height: 20px;
        padding:10px 0;
        font-size: 14px;
        color:#6C6C6C;
        background:url("../../assets/img/navListDetail/time.png") no-repeat left center;
        background-size:16px 16px;
        padding-left: 20px;
    }
    .slider_navListDetail .list .address{
        height:20px;
        line-height: 20px;
        font-size:14px;
        color:#6C6C6C;
        background:url("../../assets/img/navListDetail/address.png") no-repeat left center;
        background-size:13px 16px;
        padding-left:20px;
    }
    /* 切换 */
    .navListDetail_content{
        margin-top:114px;
        background-color:#fff;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    .navListDetail_content_tab{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        border-bottom: 1px solid #F5F5F6;
        padding:0 5%;
        width:90%;
        height: 44px;
        line-height: 44px;
    }
    .navListDetail_content_tab_item{
        flex:1;
        text-align: center;
        margin:0 12px;
    }
    .navListDetail_content_tab_item span{
        display: inline-block;
        color: #767679;
    }
    .Ticket_active span,.Instruction_active span,.Policy_active span,.ScenicArea_active span{
        color:#40B1FF;
        border-bottom:2px solid #40B1FF;
    }
    /* 切换内容 */
    .navListDetail_ticket_list{
        padding:20px 5%;
        width:90%;
        border:1px solid #F5F5F6;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        border:1px solid #F5F5F6;
    }
    .navListDetail_ticket_list_left{
        width:60%;
        position: relative;
        height: 72px;
    }
    .navListDetail_ticket_list_left h5{
        font-size:16px;
        color: #484848;
        padding-bottom: 10px;
        font-weight: bold;
    }
    .navListDetail_ticket_list_left p{
        font-size: 12px;
        color: #878789;
        height: 32px;
        line-height: 16px;
        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      
    }
    .navListDetail_ticket_list_left span{
        color:#878789;
        font-size: 12px;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .navListDetail_ticket_list_right{
        width:30%;
        text-align: center;
    }
    .navListDetail_ticket_list_right div{
        margin-bottom: 10px;
        display: flex;
        justify-content: flex-start;
        padding-left: 10px;
    }
    .navListDetail_ticket_list_right div span{
        font-size: 12px;
        color: #FF6245;
        font-weight: bold;
    }
    .navListDetail_ticket_list_right div span i{
        font-size: 10px;
    }
    .navListDetail_ticket_list_right div em{
        font-size: 12px;
        color:#878789;
        padding-left: 10px;
        text-decoration: line-through;
    }
    .navListDetail_ticket_list_right button{
        width:60px;
        height: 24px;
        background-color: #FF6245;
        border-radius: 6px;
        color:#fff;
        font-size: 14px;
        line-height: 24px;
        border:0px;
        background-color:transparent;
        background:url("../../assets/img/navListDetail/button.png") no-repeat center center;
        background-size: 60px 24px;
    }
    /* 弹出层 */
    .detail_mask_content-leave-active,.detail_mask_content-enter-active{
        tramsition:all 1s ease;
    }
    .detail_mask_content-leave-active,.detail_mask_content-enter{
        height:0px !important;
    }
    .detail_mask_content-leave,.detail_mask_content-enter-active{
        height: 473px;
    }
    .detail_mask_box{
        position:absolute;
        width:100%;
        height:473px;
        bottom:0;
        left: 0;
        background-color:#fff;
        cursor:pointer;
        z-Index:99999;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    .detail_mask_box div.detail_mask_box_title{
        height:44px;
        line-height: 44px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border-bottom: 1px solid #EEF1F0;
        text-align: center;
        position: relative;
    }
    .detail_mask_box div.detail_mask_box_title h5{
        font-size:16px;
        color:#484848;
    }
    .detail_mask_box div.detail_mask_box_title span{
        width: 26px;
        height: 40px;
        position: absolute;
        top: 2px;
        right: 10px;
    }
    .detail_mask_box div.detail_mask_box_title span img{
        width:14px;
        height: 14px;
    }
    .detail_mask_box p{
        font-size: 14px;
        color:#6C6C6C;
        margin:10px 5% 0;
        width:90%;
        line-height: 22px;
        text-align: justify;
        height: 418px;
        overflow-y: scroll;
    }
    .cover{
        position:absolute;
        left:0px;
        top:0px;
        background:rgba(0, 0, 0, 0.6);
        width:100%;
        height:100%;
        filter:alpha(opacity=60);  /*设置透明度为60%*/
        opacity:0.6;  /*非IE浏览器下设置透明度为60%*/
        z-Index:9999; 
    }
</style>


