import echarts from 'echarts/dist/echarts.js' 
export default function(group){
    var myChart = echarts.init(group.box);
        // 指定图表的配置项和数据
        var option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '3%',
                
                containLabel: true
            },
            yAxis : [
                {
                    type : 'category',
                    data : ['木马攻击', '漏洞利用', '恶意文件传播', '其他攻击', '木马深度分析'],
                    axisTick: {
                        alignWithLabel: true
                    },
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
            xAxis : [
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
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        
        myChart.setOption(option); 
}