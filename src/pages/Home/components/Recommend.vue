<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <router-link 
                :to="'/detail/' + item.id" 
                tag="li" 
                class="item" 
                v-for="item in list" 
                :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props:{
        list: Array
    },
    data () {
        return{
        //     recommendList:[
        //     {
        //         id:'0001',
        //         imgUrl:'https://imgs.qunarzz.com/sight/p0/1603/8f/8fff2332dff679ec90.water.jpg_224x148_d9a5b20a.jpg',
        //         title:'普陀山',
        //         desc:'海天佛国 观音道场 ——普陀山',
        //     },
        //     {
        //         id:'0002',
        //         imgUrl:'https://imgs.qunarzz.com/sight/p0/1603/8f/8fff2332dff679ec90.water.jpg_224x148_d9a5b20a.jpg',
        //         title:'普陀山',
        //         desc:'海天佛国 观音道场 ——普陀山',
        //     },
        //     {
        //         id:'0003',
        //         imgUrl:'https://imgs.qunarzz.com/sight/p0/1603/8f/8fff2332dff679ec90.water.jpg_224x148_d9a5b20a.jpg',
        //         title:'普陀山',
        //         desc:'海天佛国 观音道场 ——普陀山',
        //     },
        //     {
        //         id:'0004',
        //         imgUrl:'https://imgs.qunarzz.com/sight/p0/1603/8f/8fff2332dff679ec90.water.jpg_224x148_d9a5b20a.jpg',
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
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item
        overflow:hidden
        display: flex
        height: 1.9rem
        .item-img
            width :1.7rem
            height:1.7rem
            padding: .1rem 
        .item-info
            felx:1
            padding: .1rem
            min-width :0
            .item-title
                line-height: .54rem
                font-sight: .32rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #ccc
                ellipsis()
            .item-button
                background:#ff9390
                padding: .1rem
                border-radius :.06rem
                margin-top: .16rem
                color: #fff
                line-height: .44rem



</style>