<template>
    <div>
        <Header/>
        <Rslider/>
        <Daily/>
        <In/>
        <More/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
import Header from '../public/header.vue'
import Rslider from './rslider.vue'
import More from './more.vue'
import Footer from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Daily from './daily.vue'
import In from './in.vue'
export default {
    name:'money',
    components:{
        Header,
        Rslider,
        More,
        Daily,
        In,
        Footer,
        Navbar,
    }
}
</script>

<style lang="scss" module>
    @import '../../css/reset.scss';
</style>