import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//actions是异步的 调用的是mutations的方法

export default new Vuex.Store({
    state:{
        city:'北京'
    },
    actions:{
        changeCity(ctx,city){
            //ctx 上下文 city传入的参数
            // eslint-disable-next-line 
            ctx.commit('changeCity',city)
        }
    },
    mutations:{
        //store对象的state，传入的city
        changeCity(state,city){
            state.city = city
        }
    }


})