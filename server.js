var express = require('express');
var app = express();
var elasticsearch = require('elasticsearch');
var fs = require("fs");

app.get('/', function(req, res) {
	res.send('Hello - Use /populate/{your json to insert} Or /cars to get 10 cars with the higher car boot volume');
});

app.listen(9292);
console.log('Listening on port 9292...');

app.get('/populate/:car', function(req, res) {
	
	//Open a connexion to elasticSearch
	var elasticsearchClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
	});
	
	console.log(req.params.car)
	
	body = req.params.car;
	
	//Insert the data
	elasticsearchClient.index({  
		index: 'caradisiac',
		type: 'car',
		body
	},function(err,resp,status) {
		console.log(resp);
	});
	
	//Was to validate that the data is well inserted
	/*
	elasticsearchClient.count({
		index: 'caradisiac'
	}, function (error, response) {
		var count = response.count;
		console.log(count);
	});*/
});


app.get('/cars', function(req, res) {


   //Open a connexion to elasticSearch
	var elasticsearchClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
	});

	//10 first cars with the higher car boot volume 
	elasticsearchClient.search({
		index: 'caradisiac',
		type: 'car',
		body: {
        "from" : 0, "size" : 10, 
      	"query": {
      		match_all:{} 
      	},
          "sort": [
                { "volume":   { "order": "desc" }}
          	]
      }
	}, function (error, response) {
		res.send(response.hits);
	});


});
