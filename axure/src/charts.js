
import echarts from 'echarts/dist/echarts.js' 
import line1 from './line1'
import bar1 from './bar1'
import map1 from './map1'


(function () {
    let groups ={} , box={}, repeaters={}
    const chartTypes=['schart-bar1','schart-line1','schart-map1']
    window.$axure.internal(function ($ax) {
        initChartsData($ax)
        console.log(groups, box, repeaters)
        renderCharts()
    })

    function initChartsData($ax){
        $ax('*').each(function (diagramObject, elementId) {
            
            if(chartTypes.indexOf(diagramObject.label)!=-1){
                
                let {friendlyType:type, objs} = diagramObject
                switch(type){
                    case '组合':
                        let group = groups[diagramObject.id]={
                            label: diagramObject.label,
                            domId:elementId
                        }
                        objs.map((item)=>{
                            if(item.friendlyType=='中继器'){
                                group.repeater = item.id
                            }else if(item.friendlyType=='矩形'){
                                group.box = item.id
                            }
                        })

                    ;break;
                    case '中继器':
                        diagramObject.domId = elementId
                        repeaters[diagramObject.id] = diagramObject
                    ;break;
                    case '矩形':
                        box[diagramObject.id] = document.querySelector(`#${elementId}`)
                    ;break;
                }
            }
            /* if ($ax.public.fn.IsRepeater(diagramObject.type)) {
                repeat = $('#' + elementId)
            } else if (diagramObject.friendlyType == '矩形' || diagramObject.friendlyType == 'Rectangle') {
                box = $('#' + elementId)
            } */

        })
    }

    function renderCharts(){
        Object.keys(groups).map((key)=>{
            let group = groups[key]
            group.box = box[group.box]
            group.repeater = repeaters[group.repeater]
            renderChart(group)
        })

        
    }

    function renderChart(group){
        switch (group.label){
            case 'schart-line1':
             line1(group)
            ;break;
            case 'schart-bar1':
             bar1(group)
            ;break;
            case 'schart-map1':
             map1(group)
            ;break;
        }
    }


})()