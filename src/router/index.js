import Vue from 'vue'
import Router from 'vue-router'
// import How from '../components/HelloWorld.vue'
import Home from '../pages/Home/Home.vue'
import City from '../pages/City/City.vue'
import detail from '../pages/Detail/Detail.vue'



Vue.use(Router)

const routes =[
    {path:'/',name:'Home',component:Home},
    {path:'/city',name:'City',component:City},
    {path:'/detail/:id',name:'Detail',component:detail},

]


export default new Router({
    routes
})

