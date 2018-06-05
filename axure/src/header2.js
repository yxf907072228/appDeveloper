import utils from './utils.js'
 
export default function(group){
    console.log('头部容器',group.box)
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
 
 
    <div class="header-title" style="     position: absolute;
    color: #fff;
    font-weight: 900;
    left: 50%;
    margin-left: -200px;
    top: -14px;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    width: 400px;
    background-size: 100%;
    background-image: url('data:image/svg+xml;base64,PHN2ZyBpZD0ibG9nb+WvueivneahhiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjYxOSIgaGVpZ2h0PSIxMDgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEsIC5jbHMtMiwgLmNscy0zIHsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KCiAgICAgIC5jbHMtMSB7CiAgICAgICAgb3BhY2l0eTogMC43NTsKICAgICAgICBmaWxsOiB1cmwoI2xpbmVhci1ncmFkaWVudCk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiwgLmNscy0zIHsKICAgICAgICBmaWxsOiAjNTVmM2ZkOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbHRlcjogdXJsKCNmaWx0ZXIpOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbHRlcjogdXJsKCNmaWx0ZXItMik7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjExMTAiIHkxPSIxODQiIHgyPSIxMTEwIiB5Mj0iMTEwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzE1NDY1YSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwOTIzMjkiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJmaWx0ZXIiIHg9Ijc5OCIgeT0iOTciIHdpZHRoPSI2MTkiIGhlaWdodD0iMTA0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgcmVzdWx0PSJibHVyIiBzdGREZXZpYXRpb249IjMuMzMzIiBpbj0iU291cmNlQWxwaGEiLz4KICAgICAgPGZlQ29tcG9zaXRlIHJlc3VsdD0iY29tcG9zaXRlIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSByZXN1bHQ9ImNvbXBvc2l0ZS0yIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSByZXN1bHQ9ImNvbXBvc2l0ZS0zIi8+CiAgICAgIDxmZUZsb29kIHJlc3VsdD0iZmxvb2QiIGZsb29kLWNvbG9yPSIjMDA2MGZlIiBmbG9vZC1vcGFjaXR5PSIwLjMiLz4KICAgICAgPGZlQ29tcG9zaXRlIHJlc3VsdD0iY29tcG9zaXRlLTQiIG9wZXJhdG9yPSJpbiIgaW4yPSJjb21wb3NpdGUtMyIvPgogICAgICA8ZmVCbGVuZCByZXN1bHQ9ImJsZW5kIiBtb2RlPSJzY3JlZW4iIGluMj0iU291cmNlR3JhcGhpYyIvPgogICAgICA8ZmVCbGVuZCByZXN1bHQ9ImJsZW5kLTIiIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgICA8L2ZpbHRlcj4KICAgIDxmaWx0ZXIgaWQ9ImZpbHRlci0yIiB4PSIxMDc0IiB5PSIxNjgiIHdpZHRoPSI1OSIgaGVpZ2h0PSIzNyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHJlc3VsdD0iYmx1ciIgc3RkRGV2aWF0aW9uPSIzLjMzMyIgaW49IlNvdXJjZUFscGhhIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSByZXN1bHQ9ImNvbXBvc2l0ZSIvPgogICAgICA8ZmVDb21wb3NpdGUgcmVzdWx0PSJjb21wb3NpdGUtMiIvPgogICAgICA8ZmVDb21wb3NpdGUgcmVzdWx0PSJjb21wb3NpdGUtMyIvPgogICAgICA8ZmVGbG9vZCByZXN1bHQ9ImZsb29kIiBmbG9vZC1jb2xvcj0iIzAwNjBmZSIgZmxvb2Qtb3BhY2l0eT0iMC4zIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSByZXN1bHQ9ImNvbXBvc2l0ZS00IiBvcGVyYXRvcj0iaW4iIGluMj0iY29tcG9zaXRlLTMiLz4KICAgICAgPGZlQmxlbmQgcmVzdWx0PSJibGVuZCIgbW9kZT0ic2NyZWVuIiBpbjI9IlNvdXJjZUdyYXBoaWMiLz4KICAgICAgPGZlQmxlbmQgcmVzdWx0PSJibGVuZC0yIiBpbj0iU291cmNlR3JhcGhpYyIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSJMT0dP5qGG6IOM5pmvIiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMzU5LDE1M2wtMTc0LDMxLTM0LTEzSDEwNDZsLTMyLDEzTDg1NywxNTFhNjUuMDU5LDY1LjA1OSwwLDAsMC0xNC0yMmMtOS4wNTctOS41MjEtMjUtMTgtMjUtMThsNTg0LTFzLTE2LjgzLDcuMzM0LTI3LDE4QzEzNjQuNjcsMTM4LjgzMywxMzU5LDE1MywxMzU5LDE1M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03OTggLTk3KSIvPgogIDxwYXRoIGlkPSJMT0dP6L655qGGIiBjbGFzcz0iY2xzLTIiIGQ9Ik0xMzk0LDExMXMtMTMuNCw2LjQxLTIxLDE1YTg1LjAzNSw4NS4wMzUsMCwwLDAtMTUsMjRsLTE3MiwzMi0zNC0xM0gxMDQ2bC0zMywxM0w4NjAsMTUwYTcxLjg2OCw3MS44NjgsMCwwLDAtMTMuNTEzLTIwLjUxNEM4MzcuMjQxLDExOS43NDEsODIxLDExMSw4MjEsMTExaC05czIwLjc4Miw5LjcwNiwyOS45LDE5Ljc4N0E2Mi42NDcsNjIuNjQ3LDAsMCwxLDg1NSwxNTNsMTYwLDM0LDMzLTEzaDEwMmwzNCwxMywxNzgtMzRhOTYuMSw5Ni4xLDAsMCwxLDE0LTI0YzcuNTItOS4yNCwyNy0xOCwyNy0xOGgtOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03OTggLTk3KSIvPgogIDxwYXRoIGlkPSLlsI/mlrnlnZciIGNsYXNzPSJjbHMtMyIgZD0iTTEwODgsMTgyaDMxbC02LDloLTE5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc5OCAtOTcpIi8+Cjwvc3ZnPgo=');
     " >${params.title || '标题文字'}</div>
    <ul style="list-style: none; display: block;line-height: 50px;padding: 0px;margin: 0px;position: absolute;right: 80px;">
        <li style="font-weight: bolder;width: 50px;float: left;color: #51ade4;" onMouseOver="this.style.color='rgb(59, 76, 210)'" onMouseOut="this.style.color='#51ade4'">1天</li>
        <li style="font-weight: bolder;width: 50px;float: left;color: #51ade4;" onMouseOver="this.style.color='rgb(59, 76, 210)'" onMouseOut="this.style.color='#51ade4'">7天</li>
        <li style="font-weight: bolder;width: 50px;float: left;color: #51ade4;" onMouseOver="this.style.color='rgb(59, 76, 210)'" onMouseOut="this.style.color='#51ade4'">14天</li>
        <li style="font-weight: bolder;width: 50px;float: left;color: #51ade4;" onMouseOver="this.style.color='rgb(59, 76, 210)'" onMouseOut="this.style.color='#51ade4'">30天</li>
    </ul>
 
    <div class="header-date" style="position: absolute;right: 5px;top:7px;font-size: 14px;color: #fff;font-weight: bolder; "></div>
    <div class="header-clock" style="position: absolute;right: 5px;top: 20px;font-size: 14px;color: #fff;font-weight: bolder; ">tuesday</div>
    
    `
    let weeks = ['Monday' ,'Tuesday' ,'Wednesday','Thursday','Friday','Saturday','Sunday']
    let clock = group.box.querySelector('.header-clock');
    let date =  group.box.querySelector('.header-date');
 
    
    window.setInterval(()=>{
        let nDate=new Date()
        clock.innerHTML=formatStr(nDate.getHours()) +' : '+ formatStr(nDate.getMinutes()) +' : ' + formatStr(nDate.getSeconds())
        date.innerHTML = formatStr(nDate.getFullYear()) +'-'+ formatStr(nDate.getMonth()+1) +'-' + formatStr(nDate.getDate())
      //  week.innerHTML = weeks[nDate.getDay()].toLocaleUpperCase()
    },1000)
    function formatStr(n){
        let s = n+''
        return s.length<2?(0+s):s
    }
      
}