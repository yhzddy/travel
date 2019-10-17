<template>
<div class="header">
    <div class="header-left">
        <div class="iconfont iconfanhui back-icon"></div>
    </div>
    <div class="header-input">
        <i class="iconfont iconsousuo"></i>        
        输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
        <div class="header-right">
            {{city}}
            <i class="iconfont iconjiantou2 arrow-icon"></i>
        </div>
    </router-link>
</div>

</template>

<script>
export default {
    name:'HomeHeader',
    props:{
        city:String
    }
}


</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'  
      //styl文件做背景全局变量  @是一种快捷写法 @代表src目录
  .header
      display:flex
      line-height: $headerHeight
      background: $bgColor
      color: #fff
      .header-left
          width: .64rem
          float: left
          .back-icon
            text-align: center
            font-size: .4rem
      .header-input
          flex: 1
          height: .62rem //这里不加height会冲突，该元素的lintheght与上边的会冲突
          line-height: .62rem
          margin-top: .12rem
          margin-left: .2rem
          padding-left: .2rem
          background: #fff
          border-radius: .1rem
          color: #ccc
       .header-right
          width: 1.24rem
          float: left
          text-align: center
          color: #fff
          .arrow-icon
            margin-left: -.04rem
            font-size: .24rem

//  1rem = html font-size = 50px   设计给的像素是苹果7的2倍尺寸 用rem布局 量出86px  86/2=43px   43/50=0.86rem
</style>

