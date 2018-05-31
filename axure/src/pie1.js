     
import echarts from 'echarts/dist/echarts.js'

(function(){
    window.$axure.internal(function($ax){
        let repeat , box;
        $ax('*').each(function(diagramObject, elementId) {
            if ($ax.public.fn.IsRepeater(diagramObject.type)) {
                repeat = $('#'+elementId)
            }else if(diagramObject.friendlyType == '矩形' ||  diagramObject.friendlyType == 'Rectangle'){
                box =  $('#'+elementId)
            }
           
        })

        var myChart = echarts.init(box[0]);
        // 指定图表的配置项和数据
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            color:['#f3f70e80','#f3f70efc','#f3f70e52'],
            legend: {
                right: 10,
                data:[{name:"忽略告警",icon:"circle"},{name:"确定告警",icon:"circle"},{name:"疑似告警",icon:"circle"}],
                textStyle:{
                    color:'#fff'
                }
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
                    data : ['11-9','11-21','11-23','11-25'],
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
            yAxis : [
                {
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
            ],
            series : [
              
                {
                    name:'忽略告警',
                    type:'bar',
                    stack: '1',
                    data:[3, 2, 2, 2],
                    itemStyle:{
                        borderColor:'yellow'
                    }
                },{
                    name:'确定告警',
                    type:'bar',
                    stack: '1',
                    data:[3, 1,2, 2],
                    itemStyle:{
                        borderColor:'yellow'
                    }
                },
                {
                    name:'疑似告警',
                    type:'bar',
                    stack: '1',
                    data:[5, 2, 5, 4],
                    itemStyle:{
                        borderColor:'yellow'
                    }
                },
                {
                    name:'忽略告警',
                    type:'bar',
                    stack: '2',
                    data:[3, 1, 4, 4],
                    itemStyle:{
                        borderColor:'yellow'
                    }
                },
                {
                    name:'确定告警',
                    type:'bar',
                    stack: '2',
                    data:[1, 3, 5, 5],
                    itemStyle:{
                        borderColor:'yellow'
                    }
                },
                {
                    name:'疑似告警',
                    type:'bar',
                    stack: '2',
                    data:[2, 3, 3, 2],
                    itemStyle:{
                        borderColor:'yellow'
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        
        myChart.setOption(option); 
    })

 
})()