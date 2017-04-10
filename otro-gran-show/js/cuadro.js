var ancho = window.innerWidth;
var altura = window.innerHeight;
$(function() {
  $(document).ready(function() {
      window.addEventListener('load', function () {
        var cc = document.getElementById('container-center')
        cc.style.height=(altura-112)+ 'px';
        var boton_none = document.querySelectorAll('.highcharts-button')
        var highcharts_container = document.getElementsByClassName('highcharts-container')
        var svg_item = document.getElementsByClassName('highcharts-root')
        var g = document.body.getElementsByClassName('highcharts-series-group')

        for (var i = 0; i < svg_item.length; i++) {
            svg_item[i].style.fontFamily = "Montserrat";
        }

        for (var i = 0; i < boton_none.length; i++) {
            highcharts_container[i].lastChild.lastChild.innerHTML = '';
            boton_none[i].innerHTML = '';
        }

        for (var i = 0; i < g.length; i++) {
            g[i].style.width = '100%'
            g[i].style.height = '500px'
        }

        for (var i = 0; i < highcharts_container.length; i++) {
            highcharts_container[i].style.width = '100%'
            highcharts_container[i].style.height = 'auto'
        }
      }, true)
  })
})
