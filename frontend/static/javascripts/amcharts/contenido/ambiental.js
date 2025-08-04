AmCharts.theme = AmCharts.themes.light;

if (typeof AmCharts !== 'undefined') {
    var chart1 = AmCharts.makeChart("chart1", {
        "type": "serial",
        "theme": "none",
        "titles": [
            {
                "text": "Emisiones CO\u2082 equivalente (miles ton CO\u2082eq)",
                "size": 15,
                "useHTML": true
            }
        ],
        "dataProvider": [
            {
                "year": "2018",
                "alcance1": 2378,
                "alcance2": 377,
                "alcances1y2": 2755
            },
            {
                "year": "2019",
                "alcance1": 1813,
                "alcance2": 424,
                "alcances1y2": 2237
            },
            {
                "year": "2020",
                "alcance1": 962,
                "alcance2": 422,
                "alcances1y2": 1384
            },
            {
                "year": "2021",
                "alcance1": 1945,
                "alcance2": 482,
                "alcances1y2": 2427
            },
            {
                "year": "2022",
                "alcance1": 856,
                "alcance2": 391,
                "alcances1y2": 1247
            },
            {
                "year": "2023",
                "alcance1": 550,
                "alcance2": 484,
                "alcances1y2": 1034
            }
        ],
        "valueAxes": [
            {
                "axisAlpha": 1,
                "gridAlpha": 0.1,
                "labelsEnabled": true,
                "labelFunction": function (valueText, date, valueAxis) {
                    return valueText;
                },
                "minimum": "0",
                "autoGridCount": false,
                "gridCount": 5
            }
        ],
        "graphs": [
            {
                "balloonText": "Emisiones directas de GEI (Alcance 1):[[value]]",
                "fillAlphas": 1,
                "lineAlpha": 0,
                "title": "Emisiones directas de GEI (Alcance 1)",
                "type": "column",
                "valueField": "alcance1",
                "color": "#314597",
                "lineColor": "#314597",
                "fillColors": "#314597"
            },
            {
                "balloonText": "Emisiones indirectas de GEI al generar energía (Alcance 2):[[value]]",
                "fillAlphas": 1,
                "lineAlpha": 0,
                "title": "Emisiones indirectas de GEI al generar energía (Alcance 2)",
                "type": "column",
                "valueField": "alcance2",
                "color": "#2892EC",
                "lineColor": "#2892EC",
                "fillColors": "#2892EC"
            },
            {
                "balloonText": "Total de emisiones de GEI (Alcances 1 y 2):[[value]]",
                "fillAlphas": 1,
                "lineAlpha": 0,
                "title": "Total de emisiones de GEI (Alcances 1 y 2)",
                "type": "column",
                "valueField": "alcances1y2",
                "color": "#232323",
                "lineColor": "#232323",
                "fillColors": "#232323"
            }
        ],
        "categoryField": "year",
        "categoryAxis": {
            "axisAlpha": 1,
            "gridAlpha": 0.1
        },
        "legend": {
            "position": "bottom",
            "align": "center"
        },
        "export": {
            "enabled": true
        }
    });


    if (locale == "es") {
        var peso_total_de_residuos = ['2022', '2023'];
        var residuos_peligrosos = ['2022', '2023'];
        var residuos_de_reciclaje = ['2022', '2023'];
        var residuos_a_eliminar = ['2022', '2023'];
    } else {
        var peso_total_de_residuos = ['2022', '2023'];
        var residuos_peligrosos = ['2022', '2023'];
        var residuos_de_reciclaje = ['2022', '2023'];
        var residuos_a_eliminar = ['2022', '2023'];
    }

    var chart2 = AmCharts.makeChart("chart2", {
        "titles": [
            {
                "text": "Peso total de residuos",
                "size": 15,
                "color": "#000000",
                "marginBottom": 10
            },
        ],
        "colors": ["#314597", "#79B928"],
        "fontSize": 14,
        "balloonText": "[[activo]] <br> <b>[[value]] toneladas</b>",
        "color": "#000000",
        "legend": {
            "align": "center",
            "markerType": "circle",
            "labelText": "",
            "valueText": "[[activo]]",
            "maxColumns": 2,
            "spacing": 10,
            "markerLabelGap": -6,

        },
        "dataProvider": [
            {
                "activo": peso_total_de_residuos[0],
                "valor": 7013,
                "valorFormatted": "7,013"

            }, {
                "activo": peso_total_de_residuos[1],
                "valor": 6785,
                "valorFormatted": "6,785"

            }
        ],
        "labelText": "[[valorFormatted]]",
        "labelFunction": function (data) {
            // Formatea el valor con comas
            return data.value.toLocaleString("en-US");
        },
        "labelRadius": -30,
        "outlineAlpha": 0.8,
        "outlineThickness": 2,
        "theme": "light",
        "titleField": "activo",
        "type": "pie",
        "valueField": "valor"
    });

    var chart3 = AmCharts.makeChart("chart3", {
        "titles": [
            {
                "text": "Residuos peligrosos",
                "size": 15,
                "color": "#000000"
            },
        ],
        "colors": ["#314597", "#79B928"],
        "fontSize": 14,
        "balloonText": "[[activo]] <br> <b>[[value]] toneladas</b>",
        "color": "#000000",
        "legend": {
            "align": "center",
            "markerType": "circle",
            "labelText": "",
            "valueText": "[[activo]]",
            "maxColumns": 2,
            "spacing": 10,
            "markerLabelGap": -6,

        },
        "dataProvider": [
            {
                "activo": residuos_peligrosos[0],
                "valor": 1077,
                "valorFormatted": "1,077"

            }, {
                "activo": residuos_peligrosos[1],
                "valor": 1069,
                "valorFormatted": "1,069"

            }
        ],
        "labelText": "[[valorFormatted]]",
        "labelFunction": function (data) {
            // Formatea el valor con comas
            return data.value.toLocaleString("en-US");
        },
        "labelRadius": -30,
        "outlineAlpha": 0.8,
        "outlineThickness": 2,
        "theme": "light",
        "titleField": "activo",
        "type": "pie",
        "valueField": "valor"
    });

    var chart4 = AmCharts.makeChart("chart4", {
        "titles": [
            {
                "text": "Residuos de reciclaje",
                "size": 15,
                "color": "#000000"
            },
        ],
        "colors": ["#314597", "#79B928"],
        "fontSize": 14,
        "balloonText": "[[activo]] <br> <b>[[value]] toneladas</b>",
        "color": "#000000",
        "legend": {
            "align": "center",
            "markerType": "circle",
            "labelText": "",
            "valueText": "[[activo]]",
            "maxColumns": 2,
            "spacing": 10,
            "markerLabelGap": -6,

        },
        "dataProvider": [
            {
                "activo": residuos_de_reciclaje[0],
                "valor": 2105,
                "valorFormatted": "2,105"

            }, {
                "activo": residuos_de_reciclaje[1],
                "valor": 2525,
                "valorFormatted": "2,525"
            }
        ],
        "labelText": "[[valorFormatted]]",
        "labelFunction": function (data) {
            // Formatea el valor con comas
            return data.value.toLocaleString("en-US");
        },
        "labelRadius": -30,
        "outlineAlpha": 0.8,
        "outlineThickness": 2,
        "theme": "light",
        "titleField": "activo",
        "type": "pie",
        "valueField": "valor"
    });


    var chart5 = AmCharts.makeChart("chart5", {
        "titles": [
            {
                "text": "Residuos a eliminar",
                "size": 15,
                "color": "#000000"
            },
        ],
        "colors": ["#314597", "#79B928"],
        "fontSize": 14,
        "balloonText": "[[activo]] <b>[[value]] toneladas</b>",
        "color": "#000000",
        "legend": {
            "align": "center",
            "markerType": "circle",
            "labelText": "",
            "valueText": "[[activo]]",
            "maxColumns": 2,
            "spacing": 10,
            "markerLabelGap": -6,

        },
        "dataProvider": [
            {
                "activo": residuos_a_eliminar[0],
                "valor": 4908,
                "valorFormatted": "4,908"

            }, {
                "activo": residuos_a_eliminar[1],
                "valor": 4005,
                "valorFormatted": "4,005"

            }
        ],
        "labelText": "[[valorFormatted]]",
        "labelFunction": function (data) {
            // Formatea el valor con comas
            return data.value.toLocaleString("en-US");
        },
        "labelRadius": -30,
        "outlineAlpha": 0.8,
        "outlineThickness": 2,
        "theme": "light",
        "titleField": "activo",
        "type": "pie",
        "valueField": "valor"
    });
}

