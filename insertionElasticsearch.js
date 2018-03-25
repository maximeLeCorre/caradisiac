var elasticsearch = require('elasticsearch');
var fs = require("fs");

//Initialize elasticsearch connexion
var elasticsearchClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

function insertionElasticSearch(){
	
	//Load the json file to insert
    var json = JSON.parse(fs.readFileSync("./car.json","UTF8"));
	
    var request = {body:[]};
	
	//Foreach item in the car.json we add it to the bulk request
    for(var i = 0; i < json.length; i++){    
        request.body.push({ index:  { _index: 'caradisiac', _type: 'car', _id: i } });
        request.body.push( json[i] );
    }
    elasticsearchClient.bulk(request);
}

insertionElasticSearch();
