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

app.use('/', (req, res, next) => {
    res.sendFile(path.resolve('./index.html'));
});

const server = app.listen(3000)
createSocketServer(server)