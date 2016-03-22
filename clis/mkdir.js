#!/usr/bin/env node --use-strict

require('./helper')
let fs = require('fs').promise
let path = require('path')

function* mkdir() {
    // Use 'yield' in here
    // Your implementation here
    let filenames = process.argv[2].split('/')
    console.log(filenames)
    let rootPath = __dirname
    for(let file of filenames){
    	if(file == '.' || file == ''){continue; }
    	rootPath = path.join(rootPath, file)
    	yield fs.mkdir(rootPath)
    }

    
  
}

module.exports = mkdir
