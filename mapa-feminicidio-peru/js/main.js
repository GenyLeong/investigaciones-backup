/**
 * Created by luis on 04/03/16.
 */

$(function(){
    loadMap();
});

function parse(str)
{
    str = $.trim(str);
    str = str.toUpperCase();
    return normalize(str);
}

var normalize = (function() {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÇç",
        to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuucc",
        mapping = {};

    for(var i = 0, j = from.length; i < j; i++ )
        mapping[ from.charAt( i ) ] = to.charAt( i );

    return function( str ) {
        var ret = [];
        for( var i = 0, j = str.length; i < j; i++ ) {
            var c = str.charAt( i );
            if( mapping.hasOwnProperty( str.charAt( i ) ) )
                ret.push( mapping[ c ] );
            else
                ret.push( c );
        }
        return ret.join( '' );
    }

})();

var departments = [], provinces = [];
var csv_data;
function loadMap()
{
    $.ajax({
        url: "data/feminicidios.csv",
        async: true,
        success: function (csvd) {
            csv_data = $.csv.toArrays(csvd);
            i=0;
            for(var row in csv_data) {
                if(i!=0){
                    var department = parse(csv_data[row][2]);
                    //console.log(department);
                    if(typeof departments[department] == 'undefined'){
                        departments[department] = 1;
                    }else{
                        departments[department] = departments[department]+1;
                    }
                    var province = parse(csv_data[row][3]);
                    if(typeof provinces[province] == 'undefined'){
                        provinces[province] = 1;
                    }else{
                        provinces[province] = provinces[province]+1;
                    }
                }
                i++;
            }
        },
        dataType: "text",
        complete: function () {
            highMaps();
            loadCSV();
        }
    });
}

function highMaps(){
    var data = Highcharts.geojson(Highcharts.maps["countries/pe/pe-all"]),
    small = $('#map').width() < 200;

    $.each(data, function (i) {
        this.drilldown = this.properties.name;
        this.value = (typeof departments[this.properties.name] !='undefined')?departments[this.properties.name]:0;
    });

    $('#map').highcharts('Map', {
        chart : {
            height: 550,
            events: {
                drilldown: function (e) {
                    if (!e.seriesOptions) {
                        var chart = this,
                            mapKey = e.point.drilldown,
                            fail = setTimeout(function () {
                                if (!Highcharts.maps[mapKey]) {
                                    chart.showLoading('<i class="icon-frown"></i> Failed loading ' + e.point.name);
                                    fail = setTimeout(function () {
                                        chart.hideLoading();
                                    }, 1000);
                                }
                            }, 3000);

                        chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>');

                        var provdata = Highcharts.geojson(Highcharts.maps['countries/pe/pe-provinces']);
                        new_data = [];

                        $.each(provdata, function (i) {
                            if(this.properties.FIRST_NOMB==mapKey){
                                this.value = (typeof provinces[this.properties.name] !='undefined')?
                                    provinces[this.properties.name]:0;
                                new_data.push(this);
                            }
                        });

                        chart.hideLoading();
                        clearTimeout(fail);
                        chart.addSeriesAsDrilldown(e.point, {
                            name: e.point.name,
                            data: new_data,
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}'
                            }
                        });
                    }
                    this.setTitle(null, {
                    	text: mapKey
                    });
                },
                drillup: function () {
                    this.setTitle(null, { text: 'PERÚ' });
                }
            }
        },

        title : {
            text : 'Mapa de Feminicidios en el Perú'
        },

        subtitle: {
            text: 'PERÚ',
            floating: true,
            align: 'left',
            y: 50,
            style: {
                fontSize: '16px'
            }
        },

        legend: small ? {} : {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom'
        },

        colorAxis: {
            min: 0,
            minColor: '#E6E7E8',
            maxColor: '#FF7A0D'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        plotOptions: {
            map: {
                states: {
                    hover: {
                        color: '#E83D0C'
                    }
                }
            }
        },
        series : [{
            data : data,
            name: 'PERÚ',
            dataLabels: {
                enabled: true,
                format: '{point.properties.id}'
            }
        }],
        drilldown: {
            //series: drilldownSeries,
            activeDataLabelStyle: {
                color: '#FFFFFF',
                textDecoration: 'none',
                textShadow: '0 0 3px #000000'
            },
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    x: 0,
                    y: 60
                }
            }
        }
    });
}

function loadCSV()
{
    csv_data.splice(0, 1);


    $('#feminicidio_table tfoot th').each( function (i) {
        if(i!=0){
            var title = $(this).text();
            $(this).html( '<input type="text" placeholder="'+title+'" class="form-control input-sm"/>' );
        }
    } );

    var table = $('#feminicidio_table').DataTable({
        data: csv_data,
        pageLength: 50,
        paging: true,
        lengthChange: false,
        searching: true,
        ordering: true,
        sDom: 'ltipr',
        language: {
                sProcessing: "Procesando...",
                sLengthMenu: "Mostrar _MENU_ registros",
                sZeroRecords: "No se encontraron resultados",
                sEmptyTable: "Ningún dato disponible en esta tabla",
                sInfo: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
                sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
                sInfoPostFix: "",
                sSearch: "Buscar:",
                sUrl: "",
                sInfoThousands: ",",
                sLoadingRecords: "Cargando...",
                oPaginate: {
                    sFirst: "Primero",
                    sLast: "Último",
                    sNext: "<span class='glyphicon glyphicon-chevron-right'></span>",
                    sPrevious: "<span class='glyphicon glyphicon-chevron-left'></span>"
                },
                oAria: {
                    sSortAscending: ": Activar para ordenar la columna de manera ascendente",
                    sSortDescending: ": Activar para ordenar la columna de manera descendente"
                }
        }
    });
    table.columns().every( function () {
        var that = this;
        $('input',this.footer()).on( 'keyup change', function () {
            if (that.search() !== this.value) {
                that.search(this.value).draw();
            }
        } );
    } );

    $('#feminicidio_table tfoot tr').insertBefore($('#feminicidio_table thead tr'))


}