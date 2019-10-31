<template>
  <div id="app">
    <!-- <a href='/dd'>dd </a> -->
    <!-- <router-link  to="/">新品</router-link> -->
    <!-- 除了Detail其他的页面都做缓存 -->
    <keep-alive exclude="Detail">
       <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
