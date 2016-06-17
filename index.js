#!/usr/bin/env node

var program = require('commander');
var data = require('./data.json');
var readline = require('readline');

program
	.option('-n, --number <n>', 'Number of quotes to print', parseInt)
	.option('-i, --interactive', 'Start interactive mode, press enter for next quote')
	.parse(process.argv);

if (program.interactive) {
	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	function randomQuote() {
		var index = Math.floor(data.length * Math.random());
		return data[index];
	}

	function ask() {
		rl.question(randomQuote(), function() {
			ask();
		});
	}

	ask();

} else {
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
}

