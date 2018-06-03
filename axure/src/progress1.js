import echarts from 'echarts/dist/echarts.js' 
export default function(group){
    var myChart = echarts.init(group.box);

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color:['blue','#c7c3c34f','transparent'],
        title: {
            text: '天气情况统计',
            left: 'center',
            bottom:'10%',
            textStyle:{
                fontSize:12,
                color:'#fff'
            }
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                startAngle:180,
                radius: ['70%', '100%'],
                center:['50%','60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                data:[
                    {value:10, name:'10%',label: {
                    normal: {
                        show: true,
                        position: 'center',
                        padding: [0, 0, 20, 0],
                        textStyle: {
                           // fontSize: '100',
                            fontWeight: 'bold',
                            color: '#fff'
                        }
                    }
                }},
                    {value:90, name:'邮件营销'},
                    {value:100, name:'联盟广告'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}

/* app.title = '环形图';


 */