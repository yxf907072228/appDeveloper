var path = require('path')
var express = require('express')
var app = express()
app.get('/echart.js', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, './echarts.min.js'), (err) => {
        if (err) {
            console.error(err)
        }
    })
})

app.get('/charts.js', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, './libs/charts.js'), (err) => {
        if (err) {
            console.error(err)
        }
    })
})

app.get('/pie.js', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, './libs/pie1.js'), (err) => {
        if (err) {
            console.error(err)
        }
    })
})
app.get('/bar.js', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, './libs/bar1.js'), (err) => {
        if (err) {
            console.error(err)
        }
    })
})

app.get('/line.js', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, './libs/line1.js'), (err) => {
        if (err) {
            console.error(err)
        }
    })
})


app.listen(8000, '0.0.0.0', function () {
    console.log('http://localhost:8000')
})