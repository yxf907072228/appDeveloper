import echarts from 'echarts/dist/echarts.js' 
export default function(group){
    var myChart = echarts.init(group.box);
        // 指定图表的配置项和数据
        var option = {
                   color:['red','orange','yellow','#00f6ff','green'],
                   tooltip: {
                       trigger: 'axis'
                   },
                   legend: {
                       data:[{name:'邮件营销',icon:'emptyCircle'},{name:'联盟广告',icon:'emptyCircle'},{name:'视频广告',icon:'emptyCircle'},{name:'直接访问',icon:'emptyCircle'},{name:'搜索引擎',icon:'emptyCircle'}],
                       textStyle:{
                           fontSize:12,
                           color:'#fff'
                       },
                       itemWidth:8,
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
                   series: [
                       {
                           name:'邮件营销',
                           type:'line',
                           stack: '总量',
                           data:[120, 132, 101, 134, 90, 230, 210]
                       },
                       {
                           name:'联盟广告',
                           type:'line',
                           stack: '总量',
                           data:[220, 182, 191, 234, 290, 330, 310]
                       },
                       {
                           name:'视频广告',
                           type:'line',
                           stack: '总量',
                           data:[150, 232, 201, 154, 190, 330, 410]
                       },
                       {
                           name:'直接访问',
                           type:'line',
                           stack: '总量',
                           data:[320, 332, 301, 334, 390, 330, 320]
                       },
                       {
                           name:'搜索引擎',
                           type:'line',
                           stack: '总量',
                           data:[820, 932, 901, 934, 1290, 1330, 1320]
                       }
                   ]
               };  

        


        myChart.setOption(option);
}