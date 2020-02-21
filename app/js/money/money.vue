<template>
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content">
            <div>
                <h4>月度理财</h4>
                <p>预期年化收益率4.50%</p>
                <span><a href="#">去赚钱 &gt;</a></span>
            </div>
            <div>
                <h4>季度理财</h4>
                <p>预期年化收益率4.50%</p>
                <span><a href="#">去赚钱 &gt;</a></span>
            </div>
            <div>
                <h4>一年理财</h4>
                <p>预期年化收益率4.50%</p>
                <span><a href="#">去赚钱 &gt;</a></span>
            </div>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
export default {
    components:{
        Panel,
    }
}
</script>

<style lang="scss" module>
@import '../../css/element';
.panel{
    @include panel;
    .content{
        @include list;
        div{
            position: relative;
            box-sizing: border-box;
            padding:10px 0 10px 140px;
            &:nth-child(1){
            background: #fff url('//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76') no-repeat;
            background-position: 20px center ;
            background-size: 80px;
            }
            &:nth-child(2){
            background: #fff url('//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76') no-repeat;
            background-position: 20px center ;
            background-size: 80px;
            }
            &:nth-child(3){
            background: #fff url('//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76') no-repeat;
            background-position: 20px center ;
            background-size: 80px;
            }
            h4{
                display: inline-block;
                color: #333;
                font-size: 32px;
                height: 50px;
                line-height: 50px;
            }
            p{  height: 50px;
                line-height: 50px;
                color: #666;
                font-size: 28px;
            }
            span{  
                color: #666;
                font-size: 28px;
                position: absolute;
                right: 20px;
                top: 30px;
                a{
                    text-decoration: none;
                    color:#66f;
                }
            }
        }
    }
}
</style>