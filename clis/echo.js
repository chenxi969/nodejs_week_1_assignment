#!/usr/bin/env node --use-strict

require('./helper')
let fs = require('fs').promise

function* echo() {

    console.log(process.argv.slice(2).join(" "))

}

module.exports = echo
