let defaultCity = '上海'
try{
    if(localStorage.city){
        defaultCity = localStorage.city
    }
} catch (e) {
    // eslint-disable-next-line
    console.log(localStorage.city)
}


export default {
    city: defaultCity
}