var ancho = window.innerWidth;
var altura = window.innerHeight;

function maquina(e, n, a, i) {
    var t = n.length,
        r = document.getElementById(e),
        o = 0,
        s = setInterval(function() {
            r.innerHTML = r.innerHTML.substr(0, r.innerHTML.length - 1) + n.charAt(o) + "_", o >= t ? (clearInterval(s), r.innerHTML = r.innerHTML.substr(0, t), i && i()) : o++
        }, a)
}

function bounce() {
    $(".btn-indice").addClass("zoomIn");
}

function video() {
    var alt_video = document.getElementsByClassName('altura_video')
    var altura_desc = document.getElementsByClassName('altura_desc')
    for (var i = 0; i < alt_video.length; i++) {
        altura_desc[i].style.height = alt_video[i].offsetHeight + "px";
        if (ancho < 600) {
            altura_desc[i].style.height = ""
        }
    };
}

var show =  function () {
          var alto = $(".slider").outerHeight()
          var rowh = $(".row-h").outerHeight()
          if (altura>768){
              if ($(window).scrollTop() > alto + rowh+40) {
                  $('.social-bar-lr').fadeIn(1000);
                  $('.social-bar-lr').css({
                    display: 'block !important'
                  });

                } else {
                  $('.social-bar-lr').css({
                    display: 'none'
                  })
                }
          }

          else{
              if ($(window).scrollTop() > alto + rowh-200) {
                  $('.social-bar-lr').fadeIn(1000);
                  $('.social-bar-lr').css({
                    display: 'block !important'
                  });

                } else {
                  $('.social-bar-lr').css({
                    display: 'none'
                  })
                }
          }
          
}

$(document).ready(function() {
    var e = $(window).height();
    // $("#slide-out").css({
    //     height: e + "px"
    // })
    $("#side-bottom").css({
      position:'absolute',
      bottom: 0
    })
    maquina("maquinas", texto[0], 160)
    $(window).on('scroll', show);
    if (ancho < 420) {
        $('.button-collapse').sideNav({
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });
    } else {
        $('.button-collapse').sideNav({
            menuWidth: 400, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });
    }

    $('.collapsible-header').click(function() {
        $(".collapsible-body").toggle();
    })
    $('.dropdown-button').dropdown({});

    $('.smooth').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });

    $("#contenedor").css({
        height: ancho + "px"
    })

    $('.slider').slider({
        full_width: false,
        interval: 4000,
        transition: 800
    });
}), $(window).load(function() {

    // $("#contenedor").hide(), $("#contenido").css({
    //     display: "block"        
    // }), 
    console.log("ready"), setTimeout(bounce, 8000), video()
}), $(window).resize(function() {
  var e = $(window).height();
    // $("#slide-out").css({
    //     height: e + "px"
    // })
    $("#side-bottom").css({
      position: 'absolute',
      bottom: 0
    })
});

var texto = ["La historia contada por sus protagonistas"];
