<template>
<div id="home">
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icon></home-icon>
  <home-recommend></home-recommend>
</div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'




export default {
    name:'home',
    components:{
            HomeHeader:HomeHeader,
            HomeSwiper:HomeSwiper,
            HomeIcon:HomeIcon,
            HomeRecommend:HomeRecommend
    }
}
</script>

<style scoped>

</style>