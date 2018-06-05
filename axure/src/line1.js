import echarts from 'echarts/dist/echarts.js' 
import utils from './utils.js'
import config from './config.js'
export default function(group){
    
    var myChart = echarts.init(group.box);
    let params = utils.getParams(group.repeater[0])
    let datas = utils.getDatas(group.repeater[1])
    const colors = getColor(params.colors)
    console.log(datas)
    function getColor(color){
        if(color&&color.length){
            return color.split(',')
        }else{
            return config.color
        }
    }

    function getLegendData(){
        return Object.keys(datas).map((key,index)=>{
            return {name: key,icon:'circle',textStyle:{color:colors[index]}}
        })
    }

    function getSeries(){
        return Object.keys(datas).map((key,index)=>{
            return {
                name:key,
                type:'line',
                data:datas[key]
            }
        })
    }

        // 指定图表的配置项和数据
        var option = {
                   color:colors,
                   tooltip: {
                       trigger: 'axis'
                   },
                   legend: {
                       data:getLegendData(),
                       textStyle:{
                           fontSize:12
                           
                       },
                       itemWidth:6,
                       top:10
                   },
                   grid: {
                       left: '3%',
                       right: '4%',
                       bottom: '3%',
                       containLabel: true
                   },
                  
                   xAxis : [
                       {
                           type : 'category',
                           data : params.xAxis?params.xAxis.split(','):[],
                           axisLine: {
                               show: false
                           },
                           axisTick: {
                               show: false
                           },
                           axisLabel: {
                               textStyle: {
                                   color: '#ddd'
                               }
                           }
                       }
                   ],
                   yAxis :  {
                           type : 'value',
                           axisLine: {
                               show: false
                           },
                           axisTick: {
                               show: false
                           },
                           axisLabel: {
                               textStyle: {
                                   color: '#ddd'
                               }
                           }
                       }
                   ,
                   series: getSeries()
               };  

        

               console.log(option)

        myChart.setOption(option);
}