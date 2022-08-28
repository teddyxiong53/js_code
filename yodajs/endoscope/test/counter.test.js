var bootstrap = require('./bootstrap')
var endoscope = require('../index')

var exporter = bootstrap.exporter((it)=> {
    console.log(`name:${it.name} labels:[${JSON.stringify(it.labels)}] value:${it.value}`)
})
endoscope.addExporter(exporter)

var metric = new endoscope.Counter('counter1', {
    labels: ['method', 'url']
})
metric.inc({
    method: 'POST',
    url: '/api'
})
metric.inc({
    method: 'POST',
    url: '/api2'
})
metric.inc({
    method: 'POST',
    url: '/api'
})
endoscope.removeExporter(exporter)
