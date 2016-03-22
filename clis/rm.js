#!/usr/bin/env node --use-strict

require('./helper')
let fs = require('fs').promise
let path = require('path')

function* rm() {
    // Use 'yield' in here
    // Your implementation here
    let filename = process.argv[2]
    let rootPath = path.join(__dirname, filename)
    let stat = yield fs.stat(rootPath)
    if(stat.isDirectory()){
    	// rm dir
    	yield fs.rmdir(rootPath)
    }
    else{
    	// rm file
    	yield fs.unlink(rootPath)
    }
  
}

module.exports = rm
