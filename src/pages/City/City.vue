<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CityList :cities="cities" :hot="hotCities"></CityList>
        <CityAlphabet :cities="cities"></CityAlphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'



export default {
    name: 'City',
    data () {
        return{
            cities:{},
            hotCities:[]
        }
    },
    components:{
        CityHeader:CityHeader,
        CitySearch:CitySearch,
        CityList:CityList,
        CityAlphabet:CityAlphabet
    },
    mounted() {
        this.getCityInfo()
    },
    methods: {
        getCityInfo (){
            axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res){
            res= res.data
            if(res.ret && res.data ){
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        }
    }

}
</script>

<style lang="stylus" scoped>

</style>