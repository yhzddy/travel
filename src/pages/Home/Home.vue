<template>
<div id="home">
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icon></home-icon>
  <home-recommend></home-recommend>
  <home-weekend></home-weekend>
</div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'





export default {
    name:'home',
    components:{
            HomeHeader:HomeHeader,
            HomeSwiper:HomeSwiper,
            HomeIcon:HomeIcon,
            HomeRecommend:HomeRecommend,
            HomeWeekend:HomeWeekend
    }
}
</script>

<style scoped>

</style>