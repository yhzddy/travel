<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="item in list" :key="item.id">
                <div class="item-img-wrapper">
                 <img class="item-img" :src="item.imgUrl" alt="">
                 </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props:{
        list: Array
    },
    data () {
        return{
        //     recommendList:[
        //     {
        //         id:'0001',
        //         imgUrl:require("@/assets/img/week1.jpg"),
        //         title:'北京温泉榜',
        //         desc:'细数北京温泉，温暖你的冬天',
        //     },
        //     {
        //         id:'0002',
        //         imgUrl:require("@/assets/img/week1.jpg"),
        //         title:'普陀山',
        //         desc:'海天佛国 观音道场 ——普陀山',
        //     },
        //     {
        //         id:'0003',
        //         imgUrl:require("@/assets/img/week1.jpg"),
        //         title:'普陀山',
        //         desc:'海天佛国 观音道场 ——普陀山',
        //     },
        //     {
        //         id:'0004',
        //         imgUrl:require("@/assets/img/week1.jpg"),
        //         title:'普陀山',
        //         desc:'海天佛国 观音道场 ——普陀山',
        //     },
        // ]
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/mixins.styl'
    .recommend-title
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        height:0
        overflow:hidden
        padding-bottom :37.09%
        .item-img
            width:100%
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-sight: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
</style>