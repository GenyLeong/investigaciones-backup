var ancho = window.innerWidth;
var altura = window.innerHeight;
(function($) {
  var contenedor = document.getElementById('contenedor');
      var contenido = document.getElementById('contenido');
    $(document).ready(function() {
          window.addEventListener('load', function () {
            contenido.style.display="block";
            contenedor.style.display="none";
            var portada = document.getElementById("portada")
            portada.style.height=(altura-48)+ 'px';
            if (ancho<768){
              document.getElementById("botones").classList.remove('v-center');
              document.getElementById("botones").classList.add('text-center');
            }
            navegador();
            // secciones();
            var myFunction =  function () {
              var nav = document.getElementById("navegador")
              var alto = $(".container-fluid-portada").outerHeight()
              if ($(window).scrollTop() > alto) {
                $('nav').show();
              } else {
                $('nav').hide();
              }
            }
            $(window).on('scroll', myFunction);
            $('.popup').click(function(event) {
              var width  = 650,
                  height = 450,
                  left   = ($(window).width()  - width)  / 2,
                  top    = ($(window).height() - height) / 2,
                  url    = this.href,
                  opts   = 'status=1' +
                           ',width='  + width  +
                           ',height=' + height +
                           ',top='    + top    +
                           ',left='   + left;
                  window.open(url, 'twitter', opts);
                  return false;
            });
            }, true)
})
})(jQuery)
function navegador() {
    var elemento = document.createElement("div");
    var porhacer = document.getElementById("navegador");
    if (ancho < 768) {
        elemento.className = "hidden-sm hidden-md hidden-lg";
        elemento.innerHTML = '<div class="navbar-header v-center"><a class="navbar-brand" href="#"><img class="img-responsive" src="images/logo_nav.png" alt="logoweb"></a><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><span class="sr-only">Desplegar navegación</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse navbar-ex1-collapse"><ul class="nav navbar-nav text-center"><li id="content_boton"><a href="index.html#content">¿Y cómo lo hacen?</a></li><li id="content_estadisticas_boton"><a href="estadisticas.html#content_estadisticas">¿Cuál es el negocio?</a></li><li id="content_resumen_boton"><a href="resumen.html#content_resumen">Sepa usted</a></li></ul></div>'
        porhacer.appendChild(elemento);
        var ex = porhacer.lastChild;
    }
}
function secciones(){
  var content_boton= document.querySelectorAll('#content_boton')
  var content_estadisticas_boton= document.querySelectorAll('#content_estadisticas_boton')
  var content_resumen_boton= document.querySelectorAll('#content_resumen_boton')
  for (var c = 0; c < content_boton.length; c++) {
  content_boton[c].addEventListener('click', function(e){
    e.preventDefault()
    location.href='./index.html#content';
  })
  }
  for (var c = 0; c < content_boton.length; c++) {
  content_estadisticas_boton[c].addEventListener('click', function(e){
    e.preventDefault()
    location.href='./estadisticas.html#content_estadisticas';
  })
  }
  for (var c = 0; c < content_boton.length; c++) {
  content_resumen_boton[c].addEventListener('click', function(e){
    e.preventDefault()
    location.href='./resumen.html#content_resumen';
  })
  }
}
