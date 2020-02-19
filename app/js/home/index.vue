<template>
   <div>
      <Heador/>
      <Slider/>
      <Novice/>
      <Borrow/>
      <Money/>
      <Help/>
      <Lift/>
      <Product/>
      <Footer/>
      <Navbar/>

   </div>
</template>

<script>
import Heador from '../public/header.vue';
import Slider from './hslider.vue';
import Novice from './novice.vue';
import Borrow from './borrow.vue';
import Money from './money.vue';
import Help from './help.vue';
import Lift from './lift.vue';
import Product from './product.vue';
import Footer from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
export default {
    name:'home',
    components:{
        Heador,
        Slider,
        Novice,
        Borrow,
        Money,
        Help,
        Lift,
        Product,
        Footer,
        Navbar
    }
}
</script>

<style lang="scss" module>
@import '../../css/reset.scss'
</style>