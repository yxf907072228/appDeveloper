import utils from './utils.js'
 
export default function(group){
    console.log('头部容器',group.box,group.repeater)
 
    let params = utils.getParams(group.repeater[0])

     Object.assign(group.box.style,{
        'background-color': '#08274c94',
        'border-bottom':' 1px solid #66666640',
      //  'width': '100%',
      //  'min-width': '800px',
        'height': '50px',
        'position': 'relative',
        'overflow': 'hidden',
        'display': 'block'
    }) 
    
    
  
    group.box.innerHTML=`
 
    <span class="header-logo" style="position: absolute;color: #666; font-weight: 900; left: 5px;top: 5px;">${params.logo || 'logo'}</span>
    <span class="header-title" style="position: absolute;color: #fff;font-weight: 900; left: 5px;bottom: 5px;font-size: 18px;">${params.title || '标题文字'}</span>
    <ul style="list-style: none; display: block;line-height: 50px;padding: 0px;margin: 0px;position: absolute;right: 220px;">
        <li style="font-weight: bolder;width: 50px;float: left;color: #51ade4;" onMouseOver="this.style.color='rgb(59, 76, 210)'" onMouseOut="this.style.color='#51ade4'">1天</li>
        <li style="font-weight: bolder;width: 50px;float: left;color: #51ade4;" onMouseOver="this.style.color='rgb(59, 76, 210)'" onMouseOut="this.style.color='#51ade4'">7天</li>
        <li style="font-weight: bolder;width: 50px;float: left;color: #51ade4;" onMouseOver="this.style.color='rgb(59, 76, 210)'" onMouseOut="this.style.color='#51ade4'">14天</li>
        <li style="font-weight: bolder;width: 50px;float: left;color: #51ade4;" onMouseOver="this.style.color='rgb(59, 76, 210)'" onMouseOut="this.style.color='#51ade4'">30天</li>
    </ul>
    <div class="header-clock" style="position: absolute;right: 100px;font-size: 30px;color: #fff;font-weight: bolder;line-height: 50px;"></div>
    <div class="header-date" style="position: absolute;right: 5px;top:7px;font-size: 13px;color: #fff;font-weight: bolder; "></div>
    <div class="header-week" style="position: absolute;right: 5px;bottom:7px;font-size: 14px;color: #fff;font-weight: bolder; ">tuesday</div>
    
    `
    let weeks = ['Monday' ,'Tuesday' ,'Wednesday','Thursday','Friday','Saturday','Sunday']
    let clock = group.box.querySelector('.header-clock');
    let date =  group.box.querySelector('.header-date');
    let week =  group.box.querySelector('.header-week');
    
    window.setInterval(()=>{
        let nDate=new Date()
        clock.innerHTML=formatStr(nDate.getHours()) +':'+ formatStr(nDate.getMinutes()) +':' + formatStr(nDate.getSeconds())
        date.innerHTML = formatStr(nDate.getFullYear()) +'-'+ formatStr(nDate.getMonth()+1) +'-' + formatStr(nDate.getDate())
        week.innerHTML = weeks[nDate.getDay()].toLocaleUpperCase()
    },1000)
    function formatStr(n){
        let s = n+''
        return s.length<2?(0+s):s
    }
      
}