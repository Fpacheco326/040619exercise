var methodOverride = require('method-override')


var bodyParser = require('body-parser')
var express = require('express');
var app = express();


	app.use(methodOverride('_method'))

app.use(express.static("public"));

	app.use(bodyParser.urlencoded({ extended: false }))
	 

	app.use(bodyParser.json())


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


app.post('/animals-insert', function(req, res){
	connection.query('INSERT INTO animals (animal_name) VALUES (?)', [req.body.animal_name],function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json({
	  	message: 'success'
	  });
	});
});

app.delete('/animals-delete', function(req, res){
	connection.query('DELETE FROM animals WHERE id = (?)', [req.body.animal_id],function (error, results, fields) {
	  
	  res.redirect('/');
	
	});
});


	app.put('/animals-update/:id', function(req, res){
		connection.query('UPDATE animals SET animal_name = (?) WHERE id = (?)', [req.body.animal_name, req.params.id],function (error, results, fields) {
		  
		  res.redirect('/');
		
		});
	});

app.get('*', function(req, res){
	res.redirect('/')
});

app.listen(3001, function(){
	console.log('listening on 3001');
});






