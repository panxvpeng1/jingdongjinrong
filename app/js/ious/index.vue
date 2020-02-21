<template>
    <div>
        <Header/>
        <Islider/>
        <Welfare/>
        <More/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
import Header from '../public/header.vue'
import Islider from './islider.vue'
import Footer from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Welfare from './welfare.vue'
import More from './more.vue'
export default {
    components:{
        Header,
        Islider,
        Welfare,
        More,
        Footer,
        Navbar,
    }
}
</script>

<style lang="scss" module>
@import '../../css/element';
</style>