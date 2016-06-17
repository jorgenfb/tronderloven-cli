#!/usr/bin/env node

var data = require('./data.json');

function randomQuote() {
	var index = Math.floor(data.length * Math.random());
	return data[index];
}

console.log(randomQuote());
