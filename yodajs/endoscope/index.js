var _ = require('lodash')

var Registry = require('./registry')

module.exports = new Registry()

;['Counter'/*, 'Enum', 'Histogram'*/].forEach(it=> {
    module.exports[it] = require(`./metric/${_.camelCase(it)}`)
})
