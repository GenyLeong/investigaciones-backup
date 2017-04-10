$(function() {
  $(document).ready(function() {
      window.addEventListener('load', function () {
        var colors = Highcharts.getOptions().colors,
            categories = ['Periodisticos', 'Espéctaculos', 'Novelas/Produc.', 'Deportes'],
            data = [{
                y: 39.5,
                color: '#C00101',
                drilldown: {
                    name: 'Periodísticos',
                    categories: ['90 segundos','90 segundos matinal','90 segundos mediodía', '90 segundos FDS', 'Reporte Semanal', 'Punto Final', 'Alto al crimen', 'Sin medias tintas'],
                    data: [5, 15, 5, 4 ,2.5, 3, 1, 1],
                    color: colors[0]
                }
            }, {
                y: 52.5,
                color: '#FF0097',
                drilldown: {
                    name: 'Espectáculos',
                    categories: ['7 deseos', 'Latina Espectáculos', 'Amor Amor Amor', 'Yo Soy', 'La noche es mía', 'Enchufe tv'],
                    data: [3, 17.5, 15, 10, 5, 2],
                    color: colors[1]
                }
            }, {
                y: 20,
                color: '#FF5001',
                drilldown: {
                    name: 'Novelas/Prod',
                    categories: ['Elif', 'Se robó mi vida', 'Hasta que te conocí', 'Tengo algo que decirte'],
                    data: [5, 5, 5, 5],
                    color: colors[2]
                }
            }, {
                y: 1,
                color: '#F7C600',
                drilldown: {
                    name: 'Deportes',
                    categories: ['BP12'],
                    data: [1],
                    color: colors[3]
                }
            }],
            browserData = [],
            versionsData = [],
            i,
            j,
            dataLen = data.length,
            drillDataLen,
            brightness;

        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
            // add version data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                brightness = 0.2 - (j / drillDataLen) / 5;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }

        var donut_1 = Highcharts.chart('container', {
            chart: {
                type: 'pie',
                backgroundColor: '#FEFCFA'
            },
            title: {
                text: 'Distribución de los programas en <h2>Latina </h2> (Canal 2 señal abierta)',
            },
            subtitle: {
                text: '<h3><b>Organizado por cantidad de horas semanales</b></h3>'
            },
            yAxis: {
                title: {
                    text: 'Total %'
                }
            },
            legend: {
                layout: 'vertical',
                floating: true,
                align: 'right',
                verticalAlign: 'bottom',
                x: -100,
                y: 18,
                labelFormatter: function() {
                    return this.name + ': ' + this.y + ' horas';
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%'],
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>'
                    }
                }
            },
            tooltip: {
                valueSuffix: ' horas'
            },
            series: [{
                name: 'Tiempo',
                data: browserData,
                size: '50%',
                dataLabels: {
                    enabled: false,
                    formatter: function() {
                        return this.y > 5 ? +this.point.name : null;
                    },
                },
                showInLegend: true,
            }, {
                name: 'Tiempo',
                data: versionsData,
                size: '60%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + ' horas' : null;
                    }
                }
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 767
                    },
                    chartOptions: {
                        plotOptions: {
                            pie: {
                                shadow: false,
                                center: ['50%', '50%'],
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: false,
                                    format: '<b>{point.name}</b>'
                                }
                            }
                        },
                        series: [{
                            name: 'Tiempo',
                            data: browserData,
                            size: '40%',
                            dataLabels: {
                                enabled: true,
                                formatter: function() {
                                    return this.y > 5 ? +this.point.name : null;
                                },
                                distance: -1
                            },
                            showInLegend: true,
                        }],
                        legend: {
                            layout: 'vertical',
                            x: 10,
                            // y: 20,
                            align: 'center',
                            verticalAlign: 'bottom',
                            labelFormatter: function() {
                                return this.name + ': ' + this.y + ' horas';
                            }
                        }
                    }
                }]
            }
        });

        var colors = Highcharts.getOptions().colors,
            categories = ['Periodisticos', 'Espéctaculos', 'Novelas/Produc.', 'Deportes'],
            data = [{
                y: 28.5,
                color: '#C00101',
                drilldown: {
                    name: 'Periodísticos',
                    categories: ['AN Matinal', 'AN Medio Día', 'AN Central', 'AN FDS', 'Cuarto Poder', 'Domingo al día'],
                    data: [10, 5, 5,4, 2, 2.5],
                    color: colors[0]
                }
            }, {
                y: 22,
                color: '#FF0097',
                drilldown: {
                    name: 'Espectáculos',
                    categories: ['Al aire', 'Esto es guerra', 'El gran show', 'Estas en todas', 'América Espéctaculos', 'Amigos y rivales', 'Mathi Nait', 'El reventonazo de la Chola', 'Habla bien'],
                    data: [1, 7.5, 1.5, 2, 5, 1, 1, 2, 1],
                    color: colors[1]
                }
            }, {
                y: 29,
                color: '#FF5001',
                drilldown: {
                    name: 'Novelas/Prod',
                    categories: ['Al fondo hay sitio', 'Mis tres marías', 'Tres veces Ana', 'Brusko', 'Camino hacia el destino', 'Cinescape', 'TEC', 'Dr.Vet', 'Dr.TV'],
                    data: [5, 5, 5, 5, 5, 1, 1, 1, 1],
                    color: colors[2]
                }
            }, {
                y: 2,
                color: '#F7C600',
                drilldown: {
                    name: 'Deportes',
                    categories: ['América Deportes', 'Fútbol en América'],
                    data: [1, 1],
                    color: colors[3]
                }
            }],
            browserData = [],
            versionsData = [],
            i,
            j,
            dataLen = data.length,
            drillDataLen,
            brightness;


        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {

            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });

            // add version data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                brightness = 0.2 - (j / drillDataLen) / 5;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }

        var donut_2 = Highcharts.chart('container-1', {
            chart: {
                type: 'pie',
                backgroundColor: '#FEFCFA'
            },
            title: {
                text: 'Distribución de los programas en <h2>América </h2> (Canal 4 señal abierta)',
            },
            subtitle: {
                text: '<h3><b>Organizado por cantidad de horas semanales</b></h3>',
            },
            yAxis: {
                title: {
                    text: ' horas'
                }
            },
            legend: {
                layout: 'vertical',
                floating: true,
                align: 'right',
                verticalAlign: 'bottom',
                x: -100,
                y: 18,
                labelFormatter: function() {
                    return this.name + ': ' + this.y + ' horas';
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%'],
                    allowPointSelect: true,
                    cursor: 'pointer',
                    y: -300,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.y:.1f} horas'
                    }
                }
            },
            tooltip: {
                valueSuffix: ' horas'
            },
            series: [{
                name: 'Tiempo',
                data: browserData,
                size: '50%',
                dataLabels: {
                    enabled: false,
                    formatter: function() {
                        return this.y > 5 ? +this.point.name : null;
                    },
                },
                showInLegend: true
            }, {
                name: 'Tiempo',
                data: versionsData,
                size: '60%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + ' horas' : null;
                    }
                }
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 767
                    },
                    chartOptions: {
                        plotOptions: {
                            pie: {
                                shadow: false,
                                center: ['50%', '50%'],
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: false,
                                    format: '<b>{point.name}</b>'
                                }
                            }
                        },
                        series: [{
                            name: 'Tiempo',
                            data: browserData,
                            size: '40%',
                            dataLabels: {
                                enabled: true,
                                formatter: function() {
                                    return this.y > 5 ? +this.point.name : null;
                                },
                                distance: -1
                            },
                            showInLegend: true,
                        }],
                        legend: {
                            layout: 'vertical',
                            x: 10,
                            y: 20,
                            align: 'center',
                            verticalAlign: 'bottom',
                            labelFormatter: function() {
                                return this.name + ': ' + this.y + ' horas';
                            }
                        }
                    }
                }]
            }
        });

        var colors = Highcharts.getOptions().colors,
            categories = ['Periodisticos', 'Espéctaculos', 'Novelas/Produc.', 'Deportes'],
            data = [{
                y: 35,
                color: '#C00101',
                drilldown: {
                    name: 'Periodísticos',
                    categories: ['Buenos Días Perú', '24 horas MD', '24 horas Central', '24 horas sábado', 'El Dominical', 'Panorama'],
                    data: [15, 7.5, 7.5, 1, 1.5, 2.5],
                    color: colors[0]
                }
            }, {
                y: 17.5,
                color: '#FF0097',
                drilldown: {
                    name: 'Espectaculos',
                    categories: ['La Batería', 'Panamericana Espectáculos', 'Sábado con Andrés', 'Al sexto día'],
                    data: [7.5, 5, 3, 2],
                    color: colors[1]
                }
            }, {
                y: 1,
                color: '#FF5001',
                drilldown: {
                    name: 'Novelas/Prod',
                    categories: ['Volverte a ver'],
                    data: [1],
                    color: colors[2]
                }
            }, {
                y: 1,
                color: '#DBB721',
                drilldown: {
                    name: 'Deportes',
                    categories: ['Teledeportes'],
                    data: [1],
                    color: colors[3]
                }
            }],
            browserData = [],
            versionsData = [],
            i,
            j,
            dataLen = data.length,
            drillDataLen,
            brightness;


        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {

            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });

            // add version data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                brightness = 0.2 - (j / drillDataLen) / 8;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }

        var donut_3 = Highcharts.chart('container-2', {
            chart: {
                type: 'pie',
                backgroundColor: '#FEFCFA'
            },
            title: {
                text: 'Distribución de los programas en Panamericana (Canal 5 señal abierta)',
            },
            subtitle: {
                text: '<h3><b>Organizado por cantidad de horas semanales</b></h3>'
            },
            yAxis: {
                title: {
                    text: 'Total horas'
                }
            },
            legend: {
                layout: 'vertical',
                floating: true,
                align: 'right',
                verticalAlign: 'bottom',
                x: -100,
                y: 18,
                labelFormatter: function() {
                    return this.name + ': ' + this.y + ' horas';
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%'],
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.y:.1f} horas'
                    }
                }
            },
            tooltip: {
                valueSuffix: ' horas'
            },
            series: [{
                name: 'Tiempo',
                data: browserData,
                size: '50%',
                dataLabels: {
                    enabled: false,
                    formatter: function() {
                        return this.y > 5 ? +this.point.name : null;
                    },
                    color: '#FEFCFA',
                },
                showInLegend: true
            }, {
                name: 'Tiempo',
                data: versionsData,
                size: '60%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + ' horas' : null;
                    }
                }
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 767
                    },
                    chartOptions: {
                        plotOptions: {
                            pie: {
                                shadow: false,
                                center: ['50%', '50%'],
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: false,
                                    format: '<b>{point.name}</b>'
                                }
                            }
                        },
                        series: [{
                            name: 'Tiempo',
                            data: browserData,
                            size: '40%',
                            dataLabels: {
                                enabled: true,
                                formatter: function() {
                                    return this.y > 5 ? +this.point.name : null;
                                },
                                distance: -1
                            },
                            showInLegend: true,
                        }],
                        legend: {
                            layout: 'vertical',
                            x: 10,
                            y: 20,
                            align: 'center',
                            verticalAlign: 'bottom',
                            labelFormatter: function() {
                                return this.name + ': ' + this.y + ' horas';
                            }
                        }
                    }
                }]
            }
        });

        var colors = Highcharts.getOptions().colors,
            categories = ['Periodisticos', 'Espéctaculos'],
            data = [{
                y: 20,
                color: '#C00101',
                drilldown: {
                    name: 'Periodísticos',
                    categories: ['ATV Noticias matinal', 'ATV Noticias central', 'ATV Noticias fin de semana', 'Día D', 'Nunca más'],
                    data: [10, 5, 1.5, 2, 1.5],
                    color: colors[0]
                }
            }, {
                y: 26.5,
                color: '#FF0097',
                drilldown: {
                    name: 'Espectaculos',
                    categories: ['Hola A Todos', 'Combate', 'Fábrica de sueños', 'De Película'],
                    data: [12.5, 10, 3, 1],
                    color: colors[1],
                }
            }],
            browserData = [],
            versionsData = [],
            i,
            j,
            dataLen = data.length,
            drillDataLen,
            brightness;


        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {

            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });

            // add version data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                brightness = 0.2 - (j / drillDataLen) / 5;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }

        // Create the chart
        var donut_4 = Highcharts.chart('container-3', {
            chart: {
                type: 'pie',
                backgroundColor: '#FEFCFA'
            },
            title: {
                text: 'Distribución de los programas en ATV (Canal 9 señal abierta)',
            },
            subtitle: {
                text: '<h3><b>Organizado por cantidad de horas semanales</b></h3>'
            },
            yAxis: {
                title: {
                    text: 'horas'
                }
            },
            legend: {
                layout: 'vertical',
                floating: true,
                align: 'right',
                verticalAlign: 'bottom',
                x: -100,
                y: 18,
                labelFormatter: function() {
                    return this.name + ': ' + this.y + ' horas';
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%'],
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.y:.1f} horas'
                    }
                }
            },
            tooltip: {
                valueSuffix: ' horas'
            },
            series: [{
                name: 'Programas',
                data: browserData,
                size: '50%',
                dataLabels: {
                    enabled: false,
                    formatter: function() {
                        return this.y > 5 ? +this.point.name : null;
                    },
                    color: '#FEFCFA',
                },
                showInLegend: true,
            }, {
                name: 'Tiempo',
                data: versionsData,
                size: '60%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + ' horas' : null;
                    }
                }
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 767
                    },
                    chartOptions: {
                        plotOptions: {
                            pie: {
                                shadow: false,
                                center: ['50%', '50%'],
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: false,
                                    format: '<b>{point.name}</b>'
                                }
                            }
                        },
                        series: [{
                            name: 'Tiempo',
                            data: browserData,
                            size: '40%',
                            dataLabels: {
                                enabled: true,
                                formatter: function() {
                                    return this.y > 5 ? +this.point.name : null;
                                },
                                distance: -2
                            },
                            showInLegend: true,
                        }],
                        legend: {
                            layout: 'vertical',
                            x: 10,
                            y: 20,
                            align: 'center',
                            verticalAlign: 'bottom',
                            labelFormatter: function() {
                                return this.name + ': ' + this.y + ' horas';
                            }
                        }
                    }
                }]
            }
        });

        var barra_1 = Highcharts.chart('container-4', {
            chart: {
                type: 'column',
                backgroundColor: '#FEFCFA'
            },
            title: {
                text: '<h1>Análisis del rating en canales de TV abierta</h1><br><p style="font-weight:bold">Lunes 06-06-2016</p><br><h3>Distribuido por sector socioeconómico</h3>',
            },
            xAxis: {
                categories: ['Esto es Guerra:El origen de la lucha', 'Yo Soy', 'Amor Amor Amor', 'Al aire', 'La noche es mía', 'Combate', 'Reto de campeones', 'La Batería']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Rating'
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.x + '</b><br/>' + '<span style="font-size:14px">' + this.series.name + ': ' + this.y + '</span><br/>' + '<span style="font-size:16px; font-weight:700">Total: ' + (this.point.stackTotal / 3).toFixed(2) + '</span>';
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'AB',
                data: [14.63, 10.1, 6.86, 6.83, 11.15, 4.42, 4.77, 5.17],
                color: '#C00101'
            }, {
                name: 'C',
                data: [20.76, 12.58, 11.18, 6.2, 7.95, 7.42, 9.1, 5.22],
                color: '#F4D027'
            }, {
                name: 'D',
                data: [25.6, 6.2, 7.26, 10.9, 4.2, 7.22, 6.17, 3.1],
                color: '#FF0097'
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        xAxis: {
                          labels: {
                              formatter: function () {
                                  return this.value.charAt(0);
                              }
                          }
                      },
                        legend: {
                            y: -50
                        }
                    }
                }]
            }
        });

        var barra_2 = Highcharts.chart('container-5', {
          chart: {
              type: 'column',
              backgroundColor: '#FEFCFA'
          },
            title: {
                  text: '<h1>Análisis del rating general en canales de TV abierta</h1><br><p style="font-weight:bold">Jueves 24-11-2016</p><br><h3>Distribuido por canales</h3>',
              },
          xAxis: {
              categories: ['Al fondo hay sitio', 'Esto es guerra', 'El regreso de Lucas', 'Se robo mi vida', 'Yo Soy', 'Una parte de mi', 'Elif', 'América Noticias', 'Primera edición', 'Amor Amor Amor', 'Amigos y rivales', '90 central', 'Sin senos no hay paraíso', 'Combate']
          },
          yAxis: {
              allowDecimals: false,
              min: 0,
              title: {
                  text: 'Total Rating'
              }
          },
          tooltip: {
              formatter: function () {
                  return '<b>' + this.x + '</b><br/>' +
                      this.series.name + '<br/>' +
                      'Total: ' + this.point.stackTotal;
              }
          },
          plotOptions: {
              column: {
                      stacking: 'normal',
                      dataLabels: {
                          enabled: false
                      }
                  }
          },
          series: [{
              name: 'Latina TV',
              data: ['', '', '', 13.4, 12.5, 12.4, 10.8, '', '', 10.0, '', 8.9],
              color: '#FF0097'
          }, {
              name: 'América TV',
              data: [23.9, 18.3, 16.7, '', '', '', '', 10.2, 10.0, '', 9.7],
              color: '#FF5001'
          }, {
              name: 'Andina TV',
              data: ['', '', '', '', '', '', '', '', '', '', '', '', 7.9, 7.9],
              color: '#00BD8D'
          }],
          responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                          xAxis: {
                          labels: {
                              formatter: function () {
                                  return this.value.charAt(0);
                              }
                          }
                      },
                        legend: {
                            y: -50
                        }
                    }
                }]
            }
        });

        var barra_3 = Highcharts.chart('container-6', {
            chart: {
                type: 'column',
                backgroundColor: '#FEFCFA'
            },
            title: {
                text: '<h1>Análisis del rating en canales de TV abierta</h1><br><p style="font-weight:bold">Sábado 10-09-2016</p><br><h3>Distribuido por sector socioeconómico</h3>',
            },
            xAxis: {
                categories: ['El gran show', 'El reventonazo de la Chola', 'El valor de la verdad', 'Estás en todas', 'La rosa de Guadalupe', 'Yo Soy fds', 'América Noticias fds', 'Mathi Nait', 'Fabrica de sueños']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Rating'
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.x + '</b><br/>' + '<span style="font-size:14px">' + this.series.name + ': ' + this.y + '</span><br/>' + '<span style="font-size:16px; font-weight:700">Total: ' + (this.point.stackTotal / 3).toFixed(2) + '</span>';
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'AB',
                data: [18.75, 8.15, 15.4, 9.4, 6.45, 12.05, 5.7, 7.45, 1.93],
                color: '#C00101'
            }, {
                name: 'C',
                data: [16.11, 15.3, 9.38, 7.67, 9.85, 8.42, 8.62, 6.25, 8.6],
                color: '#F4D027'
            }, {
                name: 'D',
                data: [17.8, 16.27, 9.78, 10.6, 10, 6.8, 9.17, 6.1, 9.05],
                color: '#FF0097'
            }]
        });

        var barra_4 = Highcharts.chart('container-7', {
            chart: {
                zoomType: 'x',
                backgroundColor: '#FEFCFA'
            },
            title: {
                text: 'Porcentaje de gente que consume TV en el Perú',
            },
            subtitle: {
                text: '<h3><b>Comparación del año 2013-2014</b></h3><br>Fuente: INEI',
            },
            xAxis: {
                categories: ['Amazonas', 'Ancash', 'Apurimac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Cusco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Lima Metropolitana', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martin', 'Tacna', 'Tumbes', 'Ucayali']
            },
            yAxis: {
                title: {
                    text: 'Porcentaje(%)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true
                },
                column: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true
                }
            },
            series: [{
                name: '2013',
                data: [61.0, 82.6, 62.4, 93.1, 63.5, 56.9, 79.3, 61.0, 60.9, 94.4, 82.3, 83.8, 88.7, 95.8, 95.9, 63.7, 86.9, 89.6, 73.5, 81.8, 64.9, 72.9, 91.5, 93.2, 79.3],
                color: '#7B126C',
                type: 'column'
            }, {
                name: '2014',
                data: [77.8, 92.8, 92.7, 72.9, 63.5, 80.6, 75.5, 87.2, 86.2, 65.6, 96.2, 96.2, 90.3, 81.7, 82.8, 93.3, 62.9, 56.3, 74.4, 54.4, 64.1, 92.5, 61.9, 81.8, 59.5].reverse(),
                color: '#F4D027',
                type: 'line'
            }]
        });

        var barra_5 = Highcharts.chart('container-8', {
            chart: {
                type: 'line',
                backgroundColor: '#FEFCFA'
            },
            title: {
                text: 'Inversión publicitaria de Cencosud en TV nacional',
            },
            subtitle: {
                text: '<h3><b>Muestra de paquete publicitario de un mes. Sujeto a variaciones.</b></h3>',
            },
            legend: {
                align: 'right',
                verticalAlign: 'middle',
                layout: 'vertical'
            },
            xAxis: {
                categories: ['Sin senos no hay paraíso', '24 horas: edición central', 'El gran show', 'Al Fondo Hay Sitio', 'Reporte Semanal', 'Yo Soy fds', ],
            },
            yAxis: {
                title: {
                    text: 'Total neto dólares'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080',
                }]
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: true
                }
            },
            tooltip: {
                shared: true,
                useHTML: true,
                valuePrefix: 'S/.',
                headerFormat: '<b style="text-transform: uppercase;">{point.key}</b><br>',
                pointFormat: '{series.name}: ' + '<b>{point.y}</b>',
            },
            series: [{
                name: 'LATINA TV',
                data: [3562.02, 4365.95, '', '', '', ''].reverse(),
                color: '#FF0097'
            }, {
                name: 'ANDINA TV',
                data: ['', '', '', '', '', 4536.00].reverse(),
                color: '#00BD8D'
            }, {
                name: 'AMERICA TV',
                data: ['', '', 6020.02, 8338.34, '', ''].reverse(),
                color: '#FF5001'
            }, {
                name: 'PANAMERICANA TV',
                data: ['', '', '', '', 1263.72, ''].reverse(),
                color: '#DE0017'
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                      xAxis: {
                        labels: {
                            formatter: function () {
                                return this.value.charAt(0);
                            }
                        }
                    },
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal'
                        }
                    }
                }]
            }
        });

        var boton_none = document.querySelectorAll('.highcharts-button')
        var highcharts_container = document.getElementsByClassName('highcharts-container')
        var svg_item = document.getElementsByClassName('highcharts-root')
        var g = document.body.getElementsByClassName('highcharts-series-group')
        var tv_altura = document.body.getElementsByClassName('tv_altura')
        if (ancho<768){
          tv_altura[0].classList.remove('v-center');
        }

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
