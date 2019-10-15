<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide v-for="item of imgList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination" @click="swiperChange"></div>
        </swiper>
    </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
           pagination: '.swiper-pagination',    //页码器
           loop:true                            //前后拉动
        },
        imgList: [{
            id:1,
            imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/1f11f4bb9dd8530ca4fc555ec5f2dd04.jpg_890x330_1446461b.jpg'
        },{
            id:2,
            imgUrl:'https://imgs.qunarzz.com/piao/fusion/1609/72/0ecfb6185eef8f02.jpg_890x330_7e0538e4.jpg'
        }]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper  // 计算属性 获取当前的swiper对象
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了 这里就可以使用swiper对象去调用swiper官网中的方法
    //   console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(0, 1000, false)
    },
    methods:{
        swiperChange:function () {
             // eslint-disable-next-line
            console.log(this.swiper)
            this.swiper.slideTo(this.swiper.activeIndex, 1000, false)  
        }
    }
  }
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff 

.wrapper
    width:100%
    height:0
    padding-bottom :37.06%
    overflow :hidden
    background: #eee
    .swiper-img
        width: 100%
</style>