function init() {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    $( "body" ).append( "<p>Hello, testing js</p>" );
}

$(document).ready(function(){
    //init
    init();
});