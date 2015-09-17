// when click on photo something happens
//hide photo
//show data

//document.getelementbyclassname
// use var lastClicked and set to block

var pets;
var lastClicked;

window.addEventListener('onload', init());

function init(){
	// on page load, we want to ask our JSON file for all the pets
	$.ajax({
	    url: './data/daria.json',
	    type: 'GET',
	    failure: function(err){
	    	return console.log ("There was an issue getting the data");
	    },
	    success: function(response) {
	      console.log('the response from our JSON is -- >');
	      console.log(response);
	      pets = response.pets;
	      console.log(pets);
	    }
	});	
}

var divsToTarget = document.getElementsByClassName('span3');

console.log(divsToTarget);

for(var i=0; i<divsToTarget.length;i++){
	divsToTarget[i].addEventListener('click',showStats);
}

function showStats(event){
	console.log(event);
	console.log(event.target);
	event.target.style.display = "none";
	var parentDiv = event.target.parentNode;
	var targetedId = parentDiv.id;
	console.log(targetedId);
	parentDiv.innerHTML = '<h1>'+pets[targetedId].name+'</h1>' +
	'<h4>'+pets[targetedId].born+'-'+pets[targetedId].died+'</h4>'  
	+'<h4>'+pets[targetedId].weight+'</h4>' +'<h4>'+pets[targetedId].breed+'</h4>' +
	'<p>'+'Lives with: '+pets[targetedId].curentowner+'</p>'
}


