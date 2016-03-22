#!/usr/bin/env node --use-strict

require('./helper')
let fs = require('fs').promise
let path = require('path')

function* rm() {
    // Use 'yield' in here
    // Your implementation here
    let srcname = process.argv[2]
    let dstname = process.argv[3]
    let srcPath = path.join(__dirname, srcname)
    let dstPath = path.join(__dirname, dstname)
    yield fs.link(srcPath, dstPath)
  
}

module.exports = rm
