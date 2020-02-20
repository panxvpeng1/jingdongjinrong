<template>
    <div>
        <Header/>
        <Mslider/>
        <Adev/>
        <Recommended/>
        <Money/>
        <Adb/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
import Header from '../public/header.vue'
import Mslider from './mslider.vue'
import Adev from './adev.vue'
import Recommended from './recommended.vue'
import Footer from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Money from './money.vue'
import Adb from './adb.vue'
export default {
    name:'money',
    components:{
        Header,
        Mslider,
        Adev,
        Recommended,
        Money,
        Adb,
        Footer,
        Navbar,
    }
}
</script>

<style lang="scss" module>
    @import '../../css/reset.scss';
</style>