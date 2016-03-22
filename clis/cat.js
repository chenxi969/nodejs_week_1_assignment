#!/usr/bin/env node --use-strict

require('./helper')
let fs = require('fs').promise

function* cat() {
    // Use 'yield' in here
    // Your implementation here
    let filename = process.argv[2]
    let content = yield fs.readFile(filename, 'utf8')
    process.stdout.write(content)
}

module.exports = cat
