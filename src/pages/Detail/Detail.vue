<template>
    <div>
        <DetailBanner></DetailBanner>
        <DetailHeader></DetailHeader>
        <div class="content">
            <DetailList :list = "list"></DetailList>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'



export default {
    name: 'Detail',
    components:{
        DetailBanner:DetailBanner,
        DetailHeader:DetailHeader,
        DetailList:DetailList
    },
    data () {
        return{
            list:[{
                title:'成人票',
                children:[{
                    title:'成人三联票'
                },{
                    title:'成人五联票'
                }]
            },{
                title:'学生票',
                children:[{
                    title:'学生一联票'
                },{
                    title:'学生二联票'
                }]
            },{
                title:'儿童票'
            },{
                title:'特惠票'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height:50rem

</style>