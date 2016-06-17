#!/usr/bin/env node

var program = require('commander');
var data = require('./data.json');

program
	.option('-n, --number <n>', 'Number of quotes to print', parseInt)
	.parse(process.argv);

var count = program.number || 1;

var result = [];
while(data.length > 0 && count > 0) {
	var index = Math.floor(data.length * Math.random());
	var quote = data.splice(index, 1)[0];
	result.push(quote);
	count--;
}

result.forEach(function(r) {
	console.log(r);
});

