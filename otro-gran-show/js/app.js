var map;

(function() {
    $(document).ready(function() {
        window.addEventListener('load', function () {
            var mapCenter = [-74.9919444444, -9.18875] // lng, lat
            var mapOptions = {
                element: document.getElementById('map-canvas'),
                responsive: true,
                geographyConfig: {
                    dataUrl: 'data/peru_topo.json',
                    popupTemplate: function(geography, data) {
                        return [
                            "<div class=\"hoverinfo\">",
                                "<table>",
                                    "<thead>",
                                        "<tr>",
                                            "<th colspan=\"2\">",
                                            geography.properties.name,
                                            "</th>",
                                        "</tr>",
                                    "</thead>",
                                    "<tbody>",
                                        "<tr>",
                                            "<td>",
                                                "<div class='watcher'>",
                                                data.watcher + '<span> %</span>',
                                            "</td>",
                                        "</tr>",
                                    "</tbody>",
                                "</table>",
                            "</div>",
                        ].join('');
                    },
                    borderWidth: 2,
                    borderColor: '#15050E',
                    popupOnHover: true,
                    highlightOnHover: true,
                    highlightFillColor: '#15050E',
                    highlightBorderColor: '#15050E',
                    highlightBorderWidth: 1
                },
                scope: 'peru',
                setProjection: function(element) {
                    var projection = d3.geo.mercator()
                        .center(mapCenter)
                        .scale(4 * element.offsetWidth)
                        .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

                    var path = d3.geo.path()
                        .projection(projection);

                    return { path: path, projection: projection };
                }
            }

            var mapData;
            var mapFills = {
                defaultFill: "#7B126C",
                level1: "#CAA1C4", //  0 - 25
                level2: "#AF72A6", // 25 - 50
                level3: "#954389", // 50 - 75
                level4: "#7A146B", // 75 - 100
            };

            var statsURL = "data/personastv.json";
            var jqxhr = $.getJSON( statsURL, function(data) {
                    // Getting data period
                    $(".period-begin").text(data.period[0]);
                    $(".period-end").text(data.period[1]);
                    $(".period").removeClass('hiddendiv');

                    // Gettings mapData
                    mapData = data.stats;

                    // Hover on Lima Metropolitana will
                    // show Lima Department stats
                    // mapData["PE.LP"] = mapData["PE.LR"];

                    // Creating Filling Scale
                    keys = Object.keys(mapData);
                    watcher = keys.map(function(key){ return mapData[key]["watcher"]; });
                    // attempted = keys.map(function(key){ return mapData[key]["attempted"]; });

                    minF = Math.min(watcher);
                    maxF = Math.max(watcher);

                    // minA = Math.min(attempted);
                    // maxA = Math.max(attempted);

                    legend = "watcher";
                    // legend = "attempted";

                    keys.forEach(function (key) {
                        if (mapData[key][legend] <= 50) {
                            mapData[key]["fillKey"] = "level1";
                        }
                        else if (50 < mapData[key][legend] && mapData[key][legend] <= 60) {
                            mapData[key]["fillKey"] = "level2";
                        }
                        else if (60 < mapData[key][legend] && mapData[key][legend] <= 75) {
                            mapData[key]["fillKey"] = "level3";
                        }
                        else if (75 < mapData[key][legend] && mapData[key][legend] <= 100) {
                            mapData[key]["fillKey"] = "level4";
                        }
                    });

                    mapOptions.data = mapData;
                    mapOptions.fills = mapFills
                });

            map = new Datamap(mapOptions);

            window.addEventListener('resize', function() { map.resize(); });
        });
    });
})();
