<template>
<div>
  <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名和拼音">
  </div>
      <!-- keyword有值的话，显示搜索内容 -->
  <div 
    class="search-content" 
    ref="search"
    v-show="keyword"
    >
      <ul>
          <li class="search-item border-bottom"
          v-for="item in list" 
          :key="item.id"
          @click="handelCityClick(item.name)">
              {{item.name}}
          </li>
          <li v-show="hasNoData" class="search-item border-bottom">
              没有找到匹配数据
          </li>
      </ul>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'


export default {
    name: 'CitySearch',
    props:{
        cities:Object
    },
    data () {
        return{
            keyword:'',
            list:[],
            time:null
        }
    },
    //有逻辑运算的话尽量放在computed 计算属性内，保证模板的简洁
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    watch: {
        //搜索
        keyword (){
            // 做一个节流函数
            if(this.time){
                clearTimeout(this.time)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.time= setTimeout(() => {
                const result =[]
                for (let i in this.cities){
                    this.cities[i].forEach((value) => {
                        // 如果要检索的字符串值没有出现，则该方法返回 -1。  indexOf() 方法对大小写敏感！
                        if (value.spell.indexOf(this.keyword) > -1 ||
                        value.name.indexOf(this.keyword) > -1){
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 100);
        }
    },
    methods:{
        // handelCityClick(city){
        //     this.$store.dispatch('changeCity',city)
        //     this.$router.push('/')
        // }
        handelCityClick(city){
            // this.$store.dispatch('changeCity',city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity']) //简写
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.search,{ mouseWheel: true, click: true, tap: true })
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl' 
    .search
        height:.72rem
        padding:0.1rem
        background:$bgColor
        .search-input
            box-sizing:border-box
            width:100%
            padding:0.1rem
            height:.62rem
            line-height:.62rem
            text-align : center
            border-radius : .06rem
            color: #666
    .search-content
        z-index:1
        overflow:hidden
        top:1.72rem
        position:absolute
        left:0
        right:0
        bottom:0
        background:#eee
        .search-item
            line-height: .62rem
            padding-left : .2rem
            background:#fff
            color:#666
</style>