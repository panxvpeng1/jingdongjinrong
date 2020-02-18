<template>
   <div>
      <Heador/>
      <Slider/>
      <Novice/>
      <Footer/>
   </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footer from '../public/footer.vue'
import Slider from './hslider.vue'
import Novice from './novice.vue'
export default {
    name:'home',
    components:{
        Heador,
        Slider,
        Novice,
Footer,
    }
}
</script>

<style lang="scss" module>
@import '../../css/reset.scss'
</style>