const getParams = function(repeater){
    let params = {}
    let { data } = repeater
    data.map((item)=>{
        if(item.value){
            params[item.key.text] = item.value.text
        }
    })
    return params
}
export default {
    getParams
}