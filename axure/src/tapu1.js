import echarts from 'echarts/dist/echarts.js' 
export default function(group){
    var myChart = echarts.init(group.box);
        // 指定图表的配置项和数据 违规、异常、攻击、漏洞
        var option = {
            title: {
                text: 'IT资产安全事件统计',
                textStyle:{
                    color:"#fff"
                }
            },
            color:['#3398dbb8'],
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series : [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    data: [{
                        name: '资产1',
                        x: 300,
                        y: 300
                    }, {
                        name: '资产2',
                        x: 800,
                        y: 300
                    }, {
                        name: '资产3',
                        x: 550,
                        y: 100
                    }, {
                        name: '资产4',
                        x: 550,
                        y: 500
                    }],
                    // links: [],
                    links: [{
                        source: 0,
                        target: 1,
                        symbolSize: [5, 20],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        lineStyle: {
                            normal: {
                                curveness: 0.2
                            }
                        }
                    }, {
                        source: '节点2',
                        target: '节点1',
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        lineStyle: {
                            normal: { curveness: 0.2 }
                        }
                    }, {
                        source: '资产1',
                        target: '资产3'
                    }, {
                        source: '资产2',
                        target: '资产3'
                    }, {
                        source: '资产2',
                        target: '资产4'
                    }, {
                        source: '资产1',
                        target: '资产4'
                    }],
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        }
                    }
                }
            ]
        };
        

        // 使用刚指定的配置项和数据显示图表。
        
        myChart.setOption(option); 
}