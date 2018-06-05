import utils from './utils.js'
export default function(group){
    console.log('头部容器',group.box,group.repeater)
    let params = utils.getParams(group.repeater[0])
    
     Object.assign(group.box.style,{
        'background-color': '#08274c94',
        'border-bottom':' 1px solid #66666640',
      //  'width': '100%',
      //  'min-width': '800px',
        
        'position': 'relative',
        'overflow': 'hidden',
        'display': 'block'
    }) 
    
    
  
    group.box.innerHTML=`
 
     
    <div class="panel-header" style="    height: 35px;
    line-height: 35px;
    background-color: #25254cba;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    text-align: left;
    padding-left: 5px;
    color: #fff;
    font-weight: bolder; ">${params.title || '默认标题'}</div>
    
    `
    
      
}