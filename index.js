#!/usr/bin/env node

var http = require('http');

var request = http.get('http://www.stusselig.com/quote/random', function(response){
  	response.setEncoding('utf8');

	var chunks = [];
	response.on('data', function(chunk) {
		chunks.push(chunk);
	});

	response.on('end', function() {
		var body = chunks.join();

		try {
			console.log(JSON.parse(body).text);
		} catch(e) {
			console.log(e);
		}
	});
});

request.on('error', function(e) {
	console.log(e);
});

