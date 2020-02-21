<template>
    <Panel title="" :class="$style.panel">
        <Slider :items="items"/>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
import Slider from '../core/slider.vue';
export default {
    components:{
        Panel,
        Slider,
    },
    data(){
        return{
            items:[
                {
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400',
                    herf:'https://storage.jd.com/bk.jd.com/static/m/bcm_act.html?applyChannel=MOBILE-OPEN2&sid=&qingfrom=pcurl/?from=jrad_1830098'
                },{
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t10405/120/2592801005/36022/d8f57852/59f97c14Nfb960073.png?width=750&height=400',
                    href:'home'
                },{
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400',
                    href:'home'
                }
            ]
        }
    }
}
</script>

<style lang="scss" module>
@import '../../css/element';
.panel{
    margin-top: 120px;
    @include panel;
    >h4{
        display: none;
    }
}

</style>