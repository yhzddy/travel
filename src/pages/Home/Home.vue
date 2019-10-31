<template>
<div id="home">
  <home-header></home-header>
  <home-swiper :list= "swiperList"></home-swiper>
  <home-icon :list= "iconList"></home-icon>
  <home-recommend :list = "recommendList"></home-recommend>
  <home-weekend :list = "weekendList"></home-weekend>
</div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'





export default {
    name:'home',
    components:{
            HomeHeader:HomeHeader,
            HomeSwiper:HomeSwiper,
            HomeIcon:HomeIcon,
            HomeRecommend:HomeRecommend,
            HomeWeekend:HomeWeekend
    },
    data () {
      return {
        lastCity:'',
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      }
    },
    computed:{
      ...mapState(['city'])
    },
    methods:{
      getHomeInfo(){
        axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSuss)

      },
      getHomeInfoSuss(res){
        res = res.data
        if(res.ret && res.data){
          this.swiperList = res.data.swiperList
          this.iconList = res.data.iconList
          this.recommendList = res.data.recommendList
          this.weekendList = res.data.weekendList
        }
      }
    },
    mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated () {
      if(this.lastCity !==this.city){
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }
}
</script>

<style scoped>

</style>