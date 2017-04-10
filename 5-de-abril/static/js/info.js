var ancho = window.innerWidth;
var altura = window.innerHeight;


function resizebg(){
    if (ancho<769){
    document.getElementById("changebg").src = "static/images/info-mb.jpg";
}
else{
     document.getElementById("changebg").src = "static/images/info.jpg";
}
}


$(document).ready(function() {
    resizebg()
    
}),$(window).load(function() {
    $("#contenedor").hide(), $("#contenido").css({
        display: "block"        
    })
}),$(window).resize(function() {
    resizebg()
});

