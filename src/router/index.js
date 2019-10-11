import Vue from 'vue'
import Router from 'vue-router'
// import How from '../components/HelloWorld.vue'
import Home from '../pages/Home/Home.vue'


Vue.use(Router)

const routes =[
    {path:'/',component:Home},
]


export default new Router({
    routes
})

