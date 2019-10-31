<template>
    <div>
        <router-link 
            tag="div" 
            to="/" 
            class="header-abs"
            v-show="showAbs"
        >
            <div class="iconfont iconfanhui header-abs-back"></div>
        </router-link>
        <div 
            class="header-fixed" 
            v-show="!showAbs"
            :style="opacityStyle"
        >
            <router-link to="/">
                <div class="iconfont iconfanhui header-fixed-back"></div>
            </router-link>
            景点详情
        </div>

    </div>
</template>

<script>

export default {
    name: 'DetailHeader',
    data () {
        return{
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll (){
            //document.documentElement.scrollTop 获取当前页面的滚动条纵坐标位置
            const top =document.documentElement.scrollTop
            if( top >50 ){
                let opacity = top / 140
                opacity = opacity > 1 ? 1:opacity
                this.opacityStyle = {
                    opacity
                }
                // this.opacityStyle.opacity = opacity  这样也可以
                this.showAbs = false
            } else {
                this.showAbs =true
            }
        }
    },
    activated () {
        //给window绑定一个scroll事件，一旦他被执行，对应的handleScroll会被执行
        window.addEventListener('scroll',this.handleScroll)
    },
    //离开该页面的生命周期函数， 给全局事件函数解绑
    deactivated() {
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'

    .header-abs
        position:absolute
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        line-height: .8rem
        border-radius : .4rem
        text-align :center
        background:rgba(0,0,0, .8)
        .header-abs-back
            color:#fff
            font-size :.4rem
    .header-fixed
        z-index:2
        position:fixed
        top:0
        left:0
        right:0
        height: $headerHeight
        line-height :$headerHeight
        text-align :center
        color:#fff
        background:$bgColor
        font-size :.32rem
        .header-fixed-back
            position:absolute
            width:.64rem
            top:0
            left:0
            text-align: center
            font-size: .4rem
            color: #fff
</style>