<template>
  <div>
      <Panel :cname="$style.panel" :title="title">
          <section :class="$style.content">
              <div :class="$style.item">
                  <h4>下载APP</h4>
                  <p>送888元礼包</p>
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
              </div>
              <div :class="$style.item">
                  <ul>
                      <li>
                          <h4>领128元新...</h4>
                          <p>立即开通</p>
                          <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
                      </li>
                      <li>
                          <h4>打白条</h4>
                          <p>享免息</p>
                          <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
                      </li>
                  </ul>
              </div>
          </section>
      </Panel>
  </div>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
    components:{
        Panel,
    },
    data(){
        return {
            title:"新手特权",
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
        .item{
            width: 50%;
            box-sizing: border-box;
            text-align: center;
            padding: 32px 20px;
            h4{
                font-size: 30px;
            }
            p{  padding: 20px 0 20px 0;
                color: #bbb;
                font-size: 25px;
            }
            &:first-child{
                border-right: 1px solid #bbb;
                img{
                    width: 150px;
                }
            }
            &:last-child{
                text-align: left;
                padding-left: 40px;
                padding-top: 0;
                li{
                    padding: 40px 0 0 0;
                   height: 100px;
                   position: relative;
                    &:first-child{
                        border-bottom:1px solid #bbb;
                        img{
                            position: absolute;
                            right: 0;
                            top: 10px;
                        }
                    }
                    &:last-child{
                        img{
                            position: absolute;
                            right: 0;
                            top: 25px;
                        }
                    }
                }
            }
        }
    }
}
</style>