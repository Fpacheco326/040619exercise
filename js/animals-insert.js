$('#insert_animal').submit(function(e) {

    e.preventDefault(); 
    var cn = $( "#insert_animal input[name='animal_name']" ).val();

	$.ajax({
		url: '/animals-insert',
		method: 'GET',
		data: {animal_name : cn}
	}).then(function(message){
		getanimals();
	});

});