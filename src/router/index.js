import Vue from 'vue'
import Router from 'vue-router'
// import How from '../components/HelloWorld.vue'
import Home from '../pages/Home/Home.vue'
import City from '../pages/City/City.vue'


Vue.use(Router)

const routes =[
    {path:'/',name:Home,component:Home},
    {path:'/city',name:City,component:City},
]


export default new Router({
    routes
})

