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
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      }
    },
    mounted () {
      this.getHomeInfo()
    },
    methods:{
      getHomeInfo(){
        axios.get('/api/index.json').then(this.getHomeInfoSuss)

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
    }
}
</script>

<style scoped>

</style>