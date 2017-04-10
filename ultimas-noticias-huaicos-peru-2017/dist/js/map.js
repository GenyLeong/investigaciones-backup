$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "pe-ic",
            "code":"IC",
            "value": 4215,
            "value1":96968,
            "value2":0,
            "value3":60,
            "value4":0,
            "value5":409,
            "value6":2,
            "value7":0
        },
        {
            "hc-key": "pe-cs",
            "code":"CS",
            "value": 109,
            "value1":1565,
            "value2":8,
            "value3":0,
            "value4":1,
            "value5":8,
            "value6":0,
            "value7":0
        },
        {
            "hc-key": "pe-uc",
            "code": "UC",
            "value": 490,
            "value1":7003,
            "value2":2,
            "value3":0,
            "value4":0,
            "value5":9,
            "value6":0,
            "value7":0
        },
        {
            "hc-key": "pe-md",
            "code": "MD",
            "value": 257,
            "value1":7443,
            "value2":0,
            "value3":0,
            "value4":0,
            "value5":0,
            "value6":0,
            "value7":0
        },
        {
            "hc-key": "pe-sm",
            "code":"SM",
            "value": 133,
            "value1":3325,
            "value2":1,
            "value3":0,
            "value4":0,
            "value5":0,
            "value6":0,
            "value7":0
        },
        {
            "hc-key": "pe-am",
            "code":"AM",
            "value": 138,
            "value1":304,
            "value2":0,
            "value3":0,
            "value4":0,
            "value5":15,
            "value6":0,
            "value7":0
        },
        {
            "hc-key": "pe-lo",
            "code":"LO",
            "value": 198,
            "value1":68411,
            "value2":0,
            "value3":0,
            "value4":0,
            "value5":1,
            "value6":0,
            "value7":0
        },
        {
            "hc-key": "pe-ay",
            "code":"AY",
            "value": 1073,
            "value1":6189,
            "value2":9,
            "value3":6,
            "value4":0,
            "value5":96,
            "value6":0,
            "value7":0
        },
        {
            "hc-key": "pe-lr",
            "code":"LR",
            "value": 10711,
            "value1":30685,
            "value2":12,
            "value3":46,
            "value4":1,
            "value5":1673,
            "value6":14,
            "value7":4
        },
        {
            "hc-key": "pe-hv",
            "code":"HV",
            "value": 2887,
            "value1":23007,
            "value2":6,
            "value3":2,
            "value4":0,
            "value5":320,
            "value6":5,
            "value7":2
        },
        {
            "hc-key": "pe-ju",
            "code":"JU",
            "value": 598,
            "value1":642,
            "value2":2,
            "value3":25,
            "value4":1,
            "value5":135,
            "value6":0,
            "value7":0
        },
        // {
        //     "hc-key": "pe-lr",
        //     "value": 11
        // },
        {
            "hc-key": "pe-lb",
            "code":"LB",
            "value": 52212,
            "value1":145156,
            "value2":3,
            "value3":4,
            "value4":0,
            "value5":5561,
            "value6":3,
            "value7":6
        },
        {
            "hc-key": "pe-tu",
            "code":"TU",
            "value": 948,
            "value1":35370,
            "value2":0,
            "value3":0,
            "value4":0,
            "value5":38,
            "value6":0,
            "value7":0
        },
        {
            "hc-key": "pe-ap",
            "code":"AP",
            "value": 366,
            "value1":669,
            "value2":0,
            "value3":1,
            "value4":0,
            "value5":38,
            "value6":1,
            "value7":0
        },
        {
            "hc-key": "pe-ar",
            "code":"AR",
            "value": 3988,
            "value1":49223,
            "value2":17,
            "value3":30,
            "value4":5,
            "value5":650,
            "value6":4,
            "value7":0
        },
        {
            "hc-key": "pe-pu",
            "code":"PU",
            "value": 25,
            "value1":238,
            "value2":1,
            "value3":0,
            "value4":0,
            "value5":1,
            "value6":0,
            "value7":0
        },
        {
            "hc-key": "pe-mq",
            "code":"MQ",
            "value": 231,
            "value1":5180,
            "value2":1,
            "value3":2,
            "value4":0,
            "value5":12,
            "value6":0,
            "value7":0
        },
        {
            "hc-key": "pe-ta",
            "code":"TA",
            "value": 46,
            "value1":5155,
            "value2":1,
            "value3":0,
            "value4":0,
            "value5":88,
            "value6":0,
            "value7":0
        },
        {
            "hc-key": "pe-an",
            "code":"AN",
            "value": 20923,
            "value1":53487,
            "value2":8,
            "value3":125,
            "value4":4,
            "value5":2438,
            "value6":11,
            "value7":0
        },
        {
            "hc-key": "pe-cj",
            "code":"CJ",
            "value": 1377,
            "value1":8383,
            "value2":7,
            "value3":1,
            "value4":2,
            "value5":93,
            "value6":0,
            "value7":0
        },
        {
            "hc-key": "pe-hc",
            "code":"HC",
            "value": 937,
            "value1":2422,
            "value2":1,
            "value3":2,
            "value4":0,
            "value5":15,
            "value6":0,
            "value7":0
        },
        // {
        //     "hc-key": "pe-ca",
        //     "value": 22
        // },
        {
            "hc-key": "pe-ll",
            "code":"LL",
            "value": 19869,
            "value1":110356,
            "value2":13,
            "value3":38,
            "value4":4,
            "value5":3335,
            "value6":6,
            "value7":0
        },
        {
            "hc-key": "pe-pa",
            "code":"PA",
            "value": 136,
            "value1": 1981,
            "value2":1,
            "value3":0,
            "value4":1,
            "value5":22,
            "value6":1,
            "value7":1
        },
        {
            "hc-key": "pe-pi",
            "code":"PI",
            "value": 27981,
            "value1":287336,
            "value2":8,
            "value3":11,
            "value4":0,
            "value5":3312,
            "value6":1,
            "value7":0
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {
        title : {
            text : 'Mapa de damnificados 2017',
            align: 'left',
            floating: true,
            y: 500
        },

        subtitle : {
            text : 'Fuente: <a href="http://sinpad.indeci.gob.pe/PortalSINPAD/">SINPAD</a>',
            align: 'left',
            floating: true,
            y: 520
        },

        // mapNavigation: {
        //     enabled: true,
        //     buttonOptions: {
        //         verticalAlign: 'middle',
        //         x:45,
        //         y:150
        //     }
        // },

        // colorAxis: {
        //     min: 0,
        //     minColor: '#EEB4B4',
        //     maxColor: '#D14747'
        // },
       colorAxis: {
                min: 0,
                minColor: '#EEB4B4',
                maxColor: '#D14747',
                dataClasses: [{
                    from: 0,
                    to: 100
                }, {
                    from: 100,
                    to: 500
                }, {
                    from: 500,
                    to: 1000
                }, {
                    from: 1000,
                    to: 5000
                },{
                    from: 5000
                }]
        },
        series : [{
            data : data,
            mapData: Highcharts.maps['countries/pe/pe-all'],
           joinBy: ['postal-code', 'code'],
            states: {
                hover: {
                    color: '#EFF0F1'
                }
            },
            dataLabels: {
                enabled: true,
                color:'#ffffff',
                format: '{point.name}'
            },
              tooltip: {
                padding: 14,
                shared: true,
                useHTML: true,
                split: true,
                distance: 10,               
                headerFormat: '<p></p><p></p><p></p><p><b style="font-size:21px;font-weight:bold">{point.key}: </b></p><br><br><br><p></p>',
                pointFormat: '<p style="font-size:16px;" >'+ 'Personas damnificadas: ' + '{point.value} </p><br>' +
                                '<p style="font-size:16px;margin-top:14px;">'+ 'Personas afectadas: '+ '{point.value1}</p> <br>' + 
                                '<p style="font-size:16px;margin-top:14px;">' + 'Personas fallecidas: '+' {point.value2}</p> <br>' + 
                                '<p style="font-size:16px;margin-top:14px;">' + 'Personas heridas: '+ '{point.value3}</p> <br>'+
                                '<p style="font-size:16px;margin-top:14px;">' + 'Personas desaparecidas: '+ '{point.value4}</p> <br>'+
                                '<p style="font-size:16px;color:#c00101">'+ 'Viviendas colapsadas: ' + '{point.value5} </p><br>'+
                                '<p style="font-size:16px;margin-top:14px;color:#c00101">' + 'Escuelas colapsadas: '+ '{point.value6}</p> <br>'+
                                '<p style="font-size:16px;margin-top:14px;color:#c00101">' + 'Establecimientos de salud colapsados: '+ '{point.value7}</p><br>' 
                // footerFormat: '</table>'
           },
        }]
    });
        var boton_none = document.querySelectorAll('.highcharts-button')
        var highcharts_container = document.getElementsByClassName('highcharts-container')
        var svg_item = document.getElementsByClassName('highcharts-root')
        var g = document.body.getElementsByClassName('highcharts-series-group')
        var legend = document.getElementsByClassName('highcharts-legend')

        boton_none[0].innerHTML = '';
        var elemento = document.createElement("g");
        elemento.innerHTML='<text x="392" class="highcharts-credits" text-anchor="center" style="color:#999999;font-size:9px;fill:#999999;" y="595">Mapas de damnificados:</text>'

        legend[0].appendChild(elemento);
        // for (var i = 0; i < boton_none.length; i++) {
        //     highcharts_container[i].lastChild.lastChild.innerHTML = '';
        //     boton_none[i].innerHTML = '';
        // }
        // var tooltip = document.querySelector('.highcharts-data-labels')
        // tooltip.addEventListener("mouseover", mouseOver); 
        
        g[0].onmouseover = function(){
            // document.querySelector('.highcharts-tooltip').lastChild.firstChild.style.marginBottom="21px";
            // document.querySelector('.highcharts-tooltip').setAttribute('width', 500);
            document.querySelector('.highcharts-tooltip').lastChild.firstChild.setAttribute('y', '25');
            document.querySelector('.highcharts-tooltip').lastChild.childNodes[6].setAttribute('y', '130');
            console.log('hola')
        };

        for (var i = 0; i < g.length; i++) {
            g[i].style.width = '100%'
            g[i].style.height = '500px'
        }

        for (var i = 0; i < svg_item.length; i++) {
            svg_item[i].style.fontFamily = "Noticia Text";
        }

        for (var i = 0; i < highcharts_container.length; i++) {
            highcharts_container[i].style.width = '100%'
            highcharts_container[i].style.height = 'auto'
        }
});