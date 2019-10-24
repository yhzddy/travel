<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch :cities="cities"></CitySearch>
        <CityList 
            :cities="cities" 
            :hot="hotCities"
            :letter="letter"
            ></CityList>
        <CityAlphabet 
            :cities="cities" 
            @change="handleLetterChange"
        ></CityAlphabet>
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
            hotCities:[],
            letter:''
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
        },
        handleLetterChange (letter){
             this.letter = letter
        }
    }

}
</script>

<style lang="stylus" scoped>

</style>