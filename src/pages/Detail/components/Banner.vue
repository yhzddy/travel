<template>
<div>
    <div class="banner" @click= "handelBannerClick">
        <img  class="banner-img" :src= "bannerImg">
        <div class="banner-info">
            <div class="banner-title">{{sightName}}</div>
            <div class="banner-number">
                <i class="banner-icon iconfont icontupian"></i>
                {{bannerImgs.length}}</div>
        </div>
    </div>
    <CommonFade>
        <CommonGallary 
            :imgs= "bannerImgs" 
            v-if= "showGallary" 
            @close= "handelGallaryClose"
        >
        </CommonGallary>
    </CommonFade>
</div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary.vue'
import CommonFade from '@/common/fade/Fade.vue'


export default {
    name: 'Banner',
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
    },
    data () {
        return{
            showGallary:false
        }
    },
    methods:{
        handelBannerClick(){
            this.showGallary = true
        },
        handelGallaryClose(){
            this.showGallary = false
        }
    },
    components:{
        CommonGallary:CommonGallary,
        CommonFade:CommonFade
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position:relative
        overflow:hidden
        height:0
        padding-bottom:55%
        .banner-img
            width:100%
        .banner-info
            display:flex
            position:absolute
            left:0
            right:0
            bottom:0
            line-height: 0.6rem
            color: #fff
            background-image:linear-gradient(top,rgba(0,0,0,0), rgba(0,0,0,0.8))
            .banner-title
                flex:1
                font-size :0.32rem
                padding: 0 0.2rem
            .banner-number
                margin-top: 0.14rem
                padding:0 0.4rem
                height: 0.32rem
                line-height: .4rem
                border-radius:.2rem
                background: rgba(0,0,0, .8)
                font-size :0.24rem
                .banner-icon
                    font-size :0.24rem

</style>