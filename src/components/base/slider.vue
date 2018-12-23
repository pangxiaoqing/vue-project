<template>
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.img">
                <!-- <img :src="item.img" alt=""> -->
                <!-- <img v-lazy="item.img" alt=""> -->
                <img src="../../assets/img/img.jpg" alt="">
                <slot name="item" :price="item.price" :title="item.title" :tagId="item.tagId" />
            </swiper-slide>
            <div v-if="options.pagination" slot="pagination" class="swiper-pagination"/>
        </swiper> 
    </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"

export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        cname: {
            type: String,
            default: "",
        },
        options: {
            type: Object,
            default() {
                return {
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper 
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper 
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                    notNextTick: false,
                }
            },
        },
        items: {
            type: Array,
            default() {
                return []
            },
        },
    },
}
</script>

<style>
  @import "swiper/dist/css/swiper.css";
 
  .swiper-pagination-bullet{
      background: #fff;
      opacity: 0.6;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #007aff;
  }
</style>
