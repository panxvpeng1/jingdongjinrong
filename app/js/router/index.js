import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../home/index.vue';
Vue.use(VueRouter);
export default new VueRouter({
    routes:[{
        name:'home',
        path:'/',
        component:Home
    }]
})