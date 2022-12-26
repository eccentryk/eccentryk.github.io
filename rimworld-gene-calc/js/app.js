
function loadGenes() {
    $.getJSON( "data/genes.json", function( data ) {
		var items = [];
		var test = "<p>Hello, testing js, name: " + data[0].name + "</p>";
		$( "body" ).append( test );
	});
}

function init() {
    var script = document.createElement('script');
	document.head.appendChild(script); 
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
	script.onload = function(){
		//$( "body" ).append( "<p>Hello, testing js</p>" );
		loadGenes();
	}
}
