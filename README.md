# Caradisiac

**Build an api that get the list of cars with the higher rate and the higher volume (car boot)**

The api

* must listen port `9292`
* must provide endpoint `/populate` to index records to Elasticsearch
* must provide endpoint `/cars` that return list of cars with the higher car boot volume

## Prerequisites

First of all if you need to have Node.js and elasticsearch on your computer

* [Node.js](https://nodejs.org/en/)
* [elasticsearch](https://www.elastic.co/fr/downloads/elasticsearch)

## Installing

Open a commander console at the project root and run the command :

* npm install

* npm install https://github.com/92bondstreet/node-car-api.git
[node-car-api](https://github.com/92bondstreet/node-car-api)

## Utilisation

First of all launch elasticsearch

In the project root folder :
	In a commmander console launch the server with : "node server.js"
	

### Usage:

In a console commander use "node insertionElasticsearch" to insert the car.json file in elasticsearch 

In a browser use http://localhost:9292/cars to get a json which contains the 10 cars with the higher car boot volume

In a browser use http://localhost:9292/populate/{request}
	
	the request must be the follwing :
		{
			"brand": "xxx",
			"image": "xxx",
			"model": "xxx",
			"volume": xxx,
			"uuid": "xxx",
			"name": "xxx"
		}
		
	xxx replaced by what you want to insert

## Authors

* **Yassine AZZOUT** - *Initial work* - [caradisiac](https://github.com/92bondstreet/caradisiac)