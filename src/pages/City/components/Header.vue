<template>
  <div class="header">城市选择
      <router-link to="/">
        <div class="iconfont iconfanhui back-icon"></div>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .header
        position:relative
        overflow:hidden
        height: $headerHeight
        line-height :$headerHeight
        text-align :center
        color:#fff
        background:$bgColor
        font-size :.32rem
        .back-icon
            position:absolute
            width:.64rem
            top:0
            left:0
            text-align: center
            font-size: .4rem
            color: #fff
</style>