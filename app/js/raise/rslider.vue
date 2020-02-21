<template>
    <Panel :class="$style.panel">
        <section :class="$style.content">
            <swiper :options="options">
                <swiper-slide>赶紧买  快！</swiper-slide>
                <swiper-slide>买到就是赚到</swiper-slide>
                <swiper-slide>我才不买呢 真香！</swiper-slide>
            </swiper>
        </section>     
    </Panel>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import Panel from '../core/panel.vue';
    export default {
        components: {
            swiper,
            swiperSlide,
            Panel
        },
        data(){
            return{
                options: {
                    autoplay:true,
                    loop:true,
                    
                }
            }
            
        }
    }
</script>
<style lang="scss" module>
@import '../../css/element';
.panel{
    margin-top: 140px;
    margin-bottom: 17px;
    padding-bottom: 10px;
    @include panel;
    >h4{
        height: 0;
        
    }
    .content{
        overflow:hidden;
        
        color:#333;
        padding-left:178px;
        background:url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left center no-repeat;
        // padding-left: 170px;
        background-size: 150px;
    }
}

</style>
<style lang="css">
.swiper-slide{
    line-height: 50px;
    height: 50px;
    font-size: 35px;
    text-align: center !important;
}
</style>