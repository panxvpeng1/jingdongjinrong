<template>
  <Navbar>
      <ul>
          <li v-for="item in items" :key="item.src">
            <router-link :to="{name:item.href}">
              <img :src="item.src" alt="">
              <p>{{item.title}}</p>
            </router-link>
          </li>
      </ul>
  </Navbar>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66',
                title:'首页',
                href:'home'
                },
                {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66',
                title:'理财',
                href:'money'
                },
                {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66',
                title:'白条',
                href:'ious'
                },
                {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66',
                title:'众筹',
                href:'raise'
                },
                {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66',
                title:'我的',
                href:'my'
                },
            ]
        }
    }
}
</script>

<style lang="scss" module>
Navbar{
    padding: 10px 0 10px 0;
    background: #fff;
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    ul{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        li{
            flex: 1;
            text-align: center;
            
            a{
                text-decoration: none;
                color: black;
                img{
                    width:50px
                }
                p{
                    font-size: 25px;
                    line-height: 40px;
                    height: 40px;
                }
            }
        }
    }
}
</style>