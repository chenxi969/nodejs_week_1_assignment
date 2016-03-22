#!/usr/bin/env node --use-strict

require('./helper')
let fs = require('fs').promise

function* cat() {
    // Use 'yield' in here
    // Your implementation here
    let filename = process.argv[2]
    let file_fd = yield fs.open(filename, 'a+')
    let mtime = Math.round((new Date()).getTime() / 1000);
    yield fs.futimes(file_fd, mtime, mtime)

}

module.exports = cat
