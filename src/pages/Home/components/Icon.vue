<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div 
                    class="icon" 
                    v-for="item in page" 
                    :key="item.id">
                    <div class="icon-img">
                        <img class="icon-imgcontent" :src="item.imgUrl" alt="图标">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>

    </div>
</template>

<script>
export default {
    name:'HomeIcon',
    data () {
        return {
            swiperOption: {
                     pagination: '.swiper-pagination',    //页码器
                     loop:true                            //前后拉动
            },
            iconList:[
                {
                    id:'0001',
                    imgUrl: require("@/assets/img/ace00878a52d9702.png"),
                    desc:'热门景点'
                },
                {
                    id:'0002',
                    imgUrl: require("@/assets/img/86cbcfc533330d02.png"),
                    desc:'滑雪季'
                },
                {
                    id:'0003',
                    imgUrl: require("@/assets/img/83f636bd75ae6302.png"),
                    desc:'泡温泉'
                },
                {
                    id:'0004',
                    imgUrl: require("@/assets/img/b1ea3c8c7fb6db02.png"),
                    desc:'动植物园'
                },
                {
                    id:'0005',
                    imgUrl: require("@/assets/img/569d3c096e542502.png"),
                    desc:'一日游'
                },
                {
                    id:'0006',
                    imgUrl: require("@/assets/img/b1ea3c8c7fb6db02.png"),
                    desc:'必游榜单'
                },
                {
                    id:'0007',
                    imgUrl: require("@/assets/img/2640cab202c41b02.png"),
                    desc:'自然风光'
                },
                {
                    id:'0008',
                    imgUrl: require("@/assets/img/4bd370f3eb1acd02.png"),
                    desc:'全部'
                },
                {
                    id:'0009',
                    imgUrl: require("@/assets/img/4bd370f3eb1acd02.png"),
                    desc:'全部'
                },
            ],
        }
    },
    computed:{
        pages () {
            const pages =[]     //书
            this.iconList.forEach((item,index)=> {
                const page = Math.floor(index/8)     //页码   //循环图标数组，判断该item属于第几页，该页如果不存在则先给空数组，并给该页添加对象
                if(!pages[page]){
                    pages[page] = []
                }
                 pages[page].push(item)
            })
            return pages
        }
    }
    
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'  
    .icons >>> .swiper-container
        height:0
        overflow:hidden
        padding-bottom:50%
    .icons
        margin-top :.1rem
        .icon
            position:relative
            overflow:hidden
            float:left
            width:25%
            height:0
            padding-bottom:25%
            .icon-img
                position:absolute
                top:0
                left:0
                right:0
                bottom .44rem
                box-sizing :border-box
                padding :.1rem
                .icon-imgcontent
                    display:block
                    margin: 0 auto
                    height :100%
            .icon-desc
                position:absolute
                bottom:0
                left:0
                right:0
                height:.44rem
                line-height: .44rem
                text-align: center
                color: $darkTextColor
                overflow:hidden    //这三个属性 可以将溢出文本省略
                text-overflow:ellipsis //显示省略符号来代表被修剪的文本。
                white-space: nowrap //文本不会换行
                

            

</style>