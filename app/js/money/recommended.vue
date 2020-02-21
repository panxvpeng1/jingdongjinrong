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
            title:'精选推荐',
            items:[
                {
                    title:'定期理财',
                    sub:'90天可质押',
                    ratel:'5.50%',
                    text:'历史年化结算利率'
                },
                {
                    title:'固收理财',
                    sub:'理财首选',
                    ratel:'5.80%',
                    text:'综合年化收益率'
                },
                {
                    title:'基智账户',
                    sub:'组合投资',
                    ratel:'8%-10%',
                    text:'止盈年化收益率'
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
                text-align: center;
                font-size: 28px;color: #333;
                span{
                    text-align: center;
                    vertical-align: 3px;
                    height:30px;
                    line-height: 30px;
                    position: relative;
                    padding: 0 5px 0 5px;    
                    display: inline-block;
                    font-size: 16px;
                    margin-left: 20px;
                    color: red;
                    border: 1px solid #3c3c3c;
                    background: rgb(226, 226, 164);
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