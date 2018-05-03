

var crypto = require('crypto');

const express = require('express')
const path = require('path')
const fs = require('fs')
var Busboy = require('busboy');
const app = express()
const os = require('os')
const createSocketServer = require('./server-socket')
app.use(express.static(path.resolve(__dirname,'../node_modules'),{index:false}))
app.post('/upload', (req, res, next) => {
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        console.log('File [' + fieldname + ']: filename: ' + filename);
        var saveTo = path.join(os.tmpDir(), path.basename(fieldname));
        file.pipe(fs.createWriteStream('D:/111/' + filename));
        file.on('data', function (data) {
            console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
        });
        file.on('end', function () {
            console.log('File [' + fieldname + '] Finished');
        });
    });

    busboy.on('finish', function(){
        next()
    })

    req.pipe(busboy);

})

app.get('/event_source', function (req, res, next) {
    // 当res.white的数据data 以\n\n结束时 就默认该次消息发送完成，触发onmessage方法，以\r\n不会触发onmessage方法
   /*  res.header({
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    });
    setInterval(function () {
        res.write("data: " + Date.now() + "\n\n");
    }, 1000); */

    /* res.write("event: myChatEvent\r\n"); //自定义事件
    res.write("retry: 10000\r\n"); // 指定通信的最大间隔时间
    res.write("data: start~~\n\n");
    res.end(); // 不加end不会认为本次数据传输结束 会导致不会有下一次请求 */

    
    //iframe 长连接
    res.header({
        "Content-Type": "text/html",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    });
    setInterval(function () {
        res.write("<span name='info'>"+Date.now()+"</span>" + "\n\n");
    }, 1000);  
   
     
});

 

app.use('/', (req, res, next) => {
    res.sendFile(path.resolve('./index.html'));
});

const server = app.listen(3000)
//服务器程序
var crypto = require('crypto');
var WS = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
require('net').createServer(function(o){
    var key;
    o.on('data',function(e){
        if(!key){
            //握手
            key = e.toString().match(/Sec-WebSocket-Key: (.+)/)[1];
            key = crypto.createHash('sha1').update(key + WS).digest('base64');
            o.write('HTTP/1.1 101 Switching Protocols\r\n');
            o.write('Upgrade: websocket\r\n');
            o.write('Connection: Upgrade\r\n');
            o.write('Sec-WebSocket-Accept: ' + key + '\r\n');
            o.write('\r\n');
        }else{
            console.log(e);
            
        o.pipe(o);
        };
    });

    o.write('hello\r\n');

 
        
  
}).listen(4000);