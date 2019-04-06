function getanimals(){
	$('div').empty();

	$.ajax({
		url: '/animals.json',
		method: 'GET'
	}).then(function(animals){
		for (var animalIndex in animals){
		

			var p = $('<p>');
				p.text(`id: ${animals[animalIndex].id}, animal name: ${animals[animalIndex].animal_name}`)

				var a = $('<a>'); 
				a.text('delete'); 
				a.attr('href', '/animals-delete?animal_id=' + animals[animalIndex].id)
			

				p.append(a);




			$('div').prepend(p);
		}
	})
}
