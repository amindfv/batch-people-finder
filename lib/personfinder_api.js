var sys = require('sys')
	jsontoxml = require('jsontoxml'),
	http = require('http'),
	xml2js = require('xml2js');

var key = 'punsOMMYMAI27tk';
var subdomain = 'rhok1.com';

// Person Finder Search API
exports.Search = function(params, callback){
	var options = {
		host: 'googlepersonfinder.appspot.com', // needs a subdomaain prefix ("rhok")
		port: 80,
		path: '/api/search?key=' + key + '&subdomain=' + subdomain + '&q=' + params,
		method: 'POST'         // shouldn't this be GET?
	};

	var parser = new xml2js.Parser();
	parser.addListener('end', function(result){

		// do the message analysis here...
		return callback(result);
	});

	var request = http.request(options, function(response){
		response.setEncoding('utf8');

		var body = '';
		response.on('data', function(chunk){
			body += chunk;
			//return callback(body);
			parser.parseString(body);
		});

		request.on('error', function(error){
			// do some error handling here
		});

		request.write('here is the xml');            //where is this writing to?
		request.end();
	});

};



// Uploading data into PersonFinder
exports.Upload = function(params, callback){
	var options = {
	   host:  '.googlepersonfinder.appspot.com' // subdomain + this url // needs to be https?
	   port: 80,
	   path: '/api/write?key=' + key,
	   method: 'POST'
	};
	
	var request = http.request(options, function(response) {
	   resource.on('data', function (chunk) {
	      // handle return data?
       }
       
       //where do we make sure the IDs have the appropriate subdomain "prefix"?
       req.write
	   
};