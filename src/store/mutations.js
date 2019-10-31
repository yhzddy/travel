export default{
    //store对象的state，传入的city
    changeCity(state,city){
        state.city = city
        try{
            localStorage.city = city
        } catch (e) {
            // eslint-disable-next-line
            console.log(localStorage.city)
        }
    }
}