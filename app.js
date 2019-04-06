var express = require('express');
var app = express();


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'animals_db'
});
 
connection.connect();
 
app.get('/animals.json', function(req, res){
	connection.query('SELECT * FROM animals', function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});
});

app.listen(3001, function(){
	console.log('listening on 3001');
});