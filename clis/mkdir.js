#!/usr/bin/env node --use-strict

require('./helper')
let fs = require('fs').promise
let path = require('path')

function* mkdir() {
    // Use 'yield' in here
    // Your implementation here
    let filename = process.argv[2]
    let rootPath = path.join(__dirname, filename)
    let fileNames = yield fs.mkdir(rootPath)
  
}

module.exports = mkdir
