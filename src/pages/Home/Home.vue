<template>
<div id="home">
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icon></home-icon>
</div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'



export default {
    name:'home',
    components:{
            HomeHeader:HomeHeader,
            HomeSwiper:HomeSwiper,
            HomeIcon:HomeIcon
    }
}
</script>

<style scoped>

</style>