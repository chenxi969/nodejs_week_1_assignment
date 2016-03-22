#!/usr/bin/env node --use-strict

require('./helper')
let fs = require('fs').promise
let path = require('path')
let co = require('co')

function* ls() {
    // Use 'yield' in here
    // Your implementation here
    let filename = process.argv[2]
    let is_recur = process.argv[3] || ''
    let rootPath = path.join(__dirname, filename)
    let filePaths = []
    if(is_recur == '-R'){
    	filePaths = yield ls_r(rootPath)
    }
    else{
        filePaths = yield ls_not_r(rootPath)
    }
    for (let file of filePaths){
        process.stdout.write(file + '\n')
    }
    
}

function* ls_not_r(rootPath){
    let fileNames = yield fs.readdir(rootPath)
    let ret = []
    for (let fileName of fileNames){
    	let filePath = path.join(rootPath, fileName)
    	let stat = yield fs.stat(filePath)
    	if(!stat.isDirectory()){
                ret.push(fileName)	
    		//process.stdout.write(fileName + '\n')
    	}
    }
    return ret
}

ls_r = co.wrap(ls_r)

function* ls_r(rootPath){
    //console.log(rootPath)
    let stat = yield fs.stat(rootPath)
    if(!stat.isDirectory()){
        //console.log("is a file")
        //console.log(rootPath)
        return [rootPath]
    }
    else{
        let fileNames = yield fs.readdir(rootPath)
        // Sub-directory case
        let lsPromises = []
        for (let fileName of fileNames) {
        // ...
            let filePath = path.join(rootPath, fileName)
            //console.log(filePath)
            let promise = ls_r(filePath)
            lsPromises.push(promise)
        }
        // The resulting array needs to be flattened
        let results = yield Promise.all(lsPromises)
        //console.log(results)
        let ret = []
        for (let result of results) {
            ret = ret.concat(result)
        }
        //console.log(ret)
        return ret
    }
}


module.exports = ls
