import echarts from 'echarts/dist/echarts.js' 
export default function(group){
    var myChart = echarts.init(group.box);
        // 指定图表的配置项和数据 违规、异常、攻击、漏洞
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color:['#bd53ffc9','#07cdffd1','#09e813c7','#fd7512d6','#ffe303b5'],
            legend: {
                show:true,
                
                bottom:5,
                data:[
                    {name:'违规',icon:'circle',textStyle:{color:'#bd53ffc9'}},
                    {name:'异常',icon:'circle',textStyle:{color:'#07cdffd1'}},
                    {name:'攻击',icon:'circle',textStyle:{color:'#09e813c7'}},
                    {name:'漏洞',icon:'circle',textStyle:{color:'#fd7512d6'}}
                ]
            },
            grid:{
                top:20
            },
            series: [
                {
                    name:'告警',
                    type:'pie',
         
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'违规'},
                        {value:310, name:'异常'},
                        {value:234, name:'攻击'},
                        {value:135, name:'漏洞'}
                        
                    ]
                }
            ]
        };
        

        // 使用刚指定的配置项和数据显示图表。
        
        myChart.setOption(option); 
}