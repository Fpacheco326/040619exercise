$('#update_animal').submit(function(e) {

    e.preventDefault(); 

    var ci = $( "#update_animal input[name='animal_id']" ).val();

    var cn = $( "#update_animal input[name='animal_name']" ).val();

	$.ajax({
		url: '/animals-update/' + ci,
		method: 'GET',
		data: {animal_name : cn}
	}).then(function(message){
		getanimals();
	});

});