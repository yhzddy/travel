<template>
  <div class="list" ref="wrapper">
    <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" 
                        v-for="item in hot" 
                        :key="item.id"
                        @click="handelCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <!-- v-for="(item,key) in cities" 循环cities对象属性 key：value的形式输出 key是key value是item -->
            <div class="area" 
                v-for="(item,key) in cities" 
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list" 
                    v-for="inneritem in item" 
                    :key="inneritem.id"
                    @click="handelCityClick(inneritem.name)">
                    <div class="item border-bottom">{{inneritem.name}}</div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'CityList',
    computed:{
        ...mapState({
            currentCity:'city'
        })
    },
    props:{
        cities:Object,
        hot:Array,
        letter:String
    },
    methods:{
        handelCityClick(city){
            // this.$store.dispatch('changeCity',city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity']) //简写
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{ mouseWheel: true, click: true, tap: true })
    },
    watch: {
        //监听点击字母值
        letter (){
            if(this.letter){
                // 当 ref 和 v-for 一起使用的时候，你得到的引用将会是一个包含了对应数据源的这些子组件的数组。
                const element = this.$refs[this.letter][0]  //调用数组 动态产生的dom元素 要用到数组  
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'

    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        position:absolute
        top:1.78rem
        left :0
        right:0
        bottom:0
        overflow:hidden
        .title
            line-height :.54rem
            background:#eee
            padding-left :.2rem
            color: #666
            font-size: .26rem
        .button-list
            overflow:hidden
            padding:.1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width:33.33%
            .button
                margin:.1rem
                padding:.1rem 0
                text-align : center
                border: .02rem solid #ccc
                border-radius : .06rem
        .item-list
            .item
                line-height :.76rem
                color: #666
                padding-left : .2rem
</style>