module.exports = function(server){
    var io = require('socket.io')(server);
    io.on('connection', (socket)=>{
        console.log('connection')
        socket.emit('欢迎加入!')
        socket.on('disconnect',()=>{
            console.log('disconnect')
        })
        socket.on('message',(message)=>{
            console.log('message', message)
        })
    })

  /*   var WebSocketServer = require('websocket').server;
    wsServer = new WebSocketServer({
        httpServer: server,
        // You should not use autoAcceptConnections for production
        // applications, as it defeats all standard cross-origin protection
        // facilities built into the protocol and the browser.  You should
        // *always* verify the connection's origin and decide whether or not
        // to accept it.
        autoAcceptConnections: false
    });
    wsServer.on('request', function(request) {
        console.log
        ('connection')
        var connection = request.accept('whiteboard-example', request.origin);
        connection.sendUTF(JSON.stringify({
            msg:"initCommands",
            data: {}
        }))
        connection.on('message',(message)=>{
            console.log('message',message)
        })
    }) */
}