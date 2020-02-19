<template>
    <Panel :class="$style.panel" title="生活服务">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items" :key="item.src">
                <router-link :to="{name:item.href}">
                    <img :src="item.src" alt="">
                    <p>{{item.title}}</p>
                    <p :class="$style.p2"><a href="#">{{item.tip}}</a></p>
                </router-link>
            </div>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
export default {
    components:{
        Panel,
    },
    data(){
        return{
            items:[
                {
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135',
                    href:'home',
                    title:'惠加油',
                    tip:' '
                },{
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132',
                    href:'home',
                    title:'小白信用',
                    tip:'全部升级'
                },{
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135',
                    href:'home',
                    title:'信用卡还款',
                    tip:' '
                },{
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135',
                    href:'home',
                    title:'卡转让',
                    tip:' '
                },{
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135',
                    href:'home',
                    title:'定期还款',
                    tip:' '
                }
            ]
        }
    }

}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    @include panel;
    .content{
        @include list(row);
        justify-content: space-around;
        padding-bottom: 20px;
        margin-bottom: 20px;
        a{
            text-decoration: none;
            color: #3f3f3f;
            font-size: 24px;
        }
        .item{
            .p2{
                a{
                    color: #37f;
                }
                
            }
            text-align: center;
            line-height: 40px;
            img{
                width: 90px;
                
            }
        }
    }

}
</style>