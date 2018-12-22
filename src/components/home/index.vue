<template>
    <div>
        <HSlider/>
        <HomeList/>
        <Footor/>
    </div>
</template>
<script>
import HSlider from "./hslider.vue"
import HomeList from "./homeList.vue"
import Footor from "../base/footer.vue"

export default {
    components:{
        HSlider,
        HomeList,
        Footor
    }
}
</script>
<style>

</style>
