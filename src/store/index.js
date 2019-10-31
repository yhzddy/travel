import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

//actions是异步的 调用的是mutations的方法


export default new Vuex.Store({
    state:state,
    actions:{
        changeCity(ctx,city){
            //ctx 上下文 city传入的参数
            // eslint-disable-next-line 
            ctx.commit('changeCity',city)
        }
    },
    mutations:mutations
    // getters:{
    //     doubleCity (state) {
    //         return state.city + ' ' +state.city
    //     }
    // }


})