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
const getDatas= function(repeater){
    let params = {}
    let { data } = repeater
    data.map((item)=>{
        if(item.value){
            params[item.key.text] = item.value.text.split(',')
        }
    })
    return params
}

export default {
    getParams,
    getDatas
}