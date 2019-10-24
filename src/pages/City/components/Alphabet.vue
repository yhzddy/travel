<template>
  <ul class="list">
      <li 
        class="item" 
         v-for="item in letters" 
         :key="item" 
         :ref="item"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
         @click="handleLetterClick"
      >
         {{item}}
      </li>
  </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props:{
        cities:Object
    },
    computed:{
        letters (){
            const letters = []
            for (let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    data () {
        return {
            touchStatus:false,
            startY:0,
            time:null
        }
    },
    updated (){
        // 当页面的数据被更新的时候，同时页面完成了对自己的渲染，该钩子就会执行
        this.startY = this.$refs['A'][0].offsetTop
    },
    mounted() {},
    methods:{
        handleLetterClick (e){
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart (){
            this.touchStatus=true
        },
        handleTouchMove (e){
            if (this.touchStatus) {
                if(this.time){
                    clearTimeout(this.time)
                }
                this.time = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 89
                    const index = Math.floor((touchY - this.startY)/20)
                    if(index >=0 && index<this.letters.length){
                         this.$emit('change',this.letters[index])
                    }
                }, 16);
            }
        },
        handleTouchEnd (){
            this.touchStatus=false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'

    .list
        display:flex
        flex-direction:column
        justify-content:center
        position:absolute
        top:1.58rem
        right:0
        bottom:0
        width:.4rem
        .item
            text-align : center
            line-height :.4rem
            color: $bgColor
</style>