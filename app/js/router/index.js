import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../home/index.vue';
import Money from '../money/index.vue';
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {
            name:'home',
            path:'/',
            component:Home
        },
        {
            name:'money',
            path:'/money',
            component:Money 
        },

]
})