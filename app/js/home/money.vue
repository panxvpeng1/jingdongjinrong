<template>
<Panel :title="title" :class="$style.panel">
    <section :class="$style.content">  
        <dl :class="$style.item" v-for="item in items" :key="item.title">
            <dt>{{item.title}}<span>{{item.sub}}</span></dt>
            <dd :class="$style.d1">{{item.ratel}}</dd>
            <dd :class="$style.d2">{{item.text}}</dd>
        </dl>
    </section>
</Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
    components:{
        Panel,
    },
    data(){
        return{
            title:'理财精选',
            items:[
                {
                    title:'定期理财',
                    sub:'理财首选',
                    ratel:'5.60%',
                    text:'历史年化回报率'
                },
                {
                    title:'小白理财',
                    sub:'理财首选',
                    ratel:'4.22%',
                    text:'7日年化收益率'
                },
                {
                    title:'月月盈',
                    sub:'养老保障',
                    ratel:'5%',
                    text:'七日年化收益率'
                },
                {
                    title:'小白基金',
                    sub:'天天赚钱',
                    ratel:'4.27%',
                    text:'7日年化收益率'
                }
            ]
        }
    }
}
</script>

<style lang="scss" module>
@import '../../css/element';
.panel{
 
    @include panel;
    .content{
        
        @include list(row);
        justify-content: space-around;
        box-sizing: border-box;
        .item{
            &:nth-child(2n+1){
                border-right: 1px solid #bbb;
            }
            &:nth-child(1){
                border-bottom: 1px solid #bbb;
            }
            &:nth-child(2){
                border-bottom: 1px solid #bbb;
            }
            padding: 20px;
            padding-bottom: 30px;
            box-sizing: border-box;
            text-align: center;
            width: 50%;
            dt{
                font-size: 30px;color: #333;
                span{
                    position: relative;
                    top: -3px;
                    padding:3px;
                    box-sizing: border-box;
                    display: inline-block;
                    font-size: 14px;
                    margin-left: 20px;
                    color: red;
                    border: 1px solid #3c3c3c;
                    background: rgb(226, 226, 164)
                }
            }
            .d1{
                padding:10px 0 10px 0;
                font-size: 40px;
                color: rgb(85, 226, 30);
            }
            .d2{
                color: 000;
                font-size: 25px;
            }

        }
    }
}
</style>