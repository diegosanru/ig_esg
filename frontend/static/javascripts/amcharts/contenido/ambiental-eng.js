AmCharts.theme = AmCharts.themes.light;

if (typeof AmCharts !== 'undefined') {
    var chart1 = AmCharts.makeChart("chart1", {
        "type": "serial",
        "theme": "none",
        "titles": [
            {
                "text": "Energy Consumption (kWhs)",
                "size": 15,
                "useHTML": true
            },
            {
                "text": "(thousands)",
                "size": 13
            }
        ],
        "dataProvider": [
            
            {
                "year": "2023",
                "alcance1": 2465,
                "color": "#F5BA3D"
            },
            {
                "year": "2024",
                "alcance1": 2566,
                "color": "#F5BA3D"
            },
            {
                "year": "Entregas 2024",
                "alcance1": 18106,
                "color": "#2B2B2B"
            }
        ],
        "valueAxes": [
            {
                "axisAlpha": 1,
                "gridAlpha": 0,
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
                "balloonText": "[[value]]",
                "fillAlphas": 1,
                "lineAlpha": 0,
                "title": "",
                "type": "column",
                "valueField": "alcance1",
                "fillColorsField": "color",
                "lineColor": "#F5BA3D",
                "fillColors": "#F5BA3D"
            }
        ],
        "categoryField": "year",
        "categoryAxis": {
            "axisAlpha": 1,
            "gridAlpha": 0
        },
        "export": {
            "enabled": true
        },

    });

    var chart6 = AmCharts.makeChart("chart6", {
        "type": "serial",
        "theme": "none",
        "titles": [
            {
                "text": "Water Consumption (m³)",
                "size": 15,
                "useHTML": true
            },
            {
                "text": "(thousands)",
                "size": 13
            }
        ],
        "dataProvider": [
            
            {
                "year": "2023",
                "alcance1": 3000,
                "color": "#3DB7B0"
            },
            {
                "year": "2024",
                "alcance1": 3000,
                "color": "#3DB7B0"
            },
            {
                "year": "Entregas 2024",
                "alcance1": 15000,
                "color": "#2B2B2B"
            }
        ],
        "valueAxes": [
            {
                "axisAlpha": 1,
                "gridAlpha": 0,
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
                "balloonText": "[[value]]",
                "fillAlphas": 1,
                "lineAlpha": 0,
                "title": "",
                "type": "column",
                "valueField": "alcance1",
                "fillColorsField": "color",
                "lineColor": "#F5BA3D",
                "fillColors": "#F5BA3D"
            }
        ],
        "categoryField": "year",
        "categoryAxis": {
            "axisAlpha": 1,
            "gridAlpha": 0
        },
        "export": {
            "enabled": true
        },

    });

    var chart7 = AmCharts.makeChart("chart7", {
        "type": "serial",
        "theme": "none",
        "titles": [
            {
                "text": "Scope 2 (tCO2e)",
                "size": 15,
                "textAlign": "center",
                "useHTML": true
            }
        ],
        "dataProvider": [
            
            {
                "year": "2023",
                "alcance1": 697,
                "color": "#13406B",
            },
            {
                "year": "2024",
                "alcance1": 752,
                "color": "#13406B",
            },
            {
                "year": "Entregas 2024",
                "alcance1": 329,
                "color": "#2B2B2B",
            }
        ],
        "valueAxes": [
            {
                "axisAlpha": 1,
                "gridAlpha": 0,
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
                "balloonText": "[[value]]",
                "fillAlphas": 1,
                "lineAlpha": 0,
                "title": "",
                "type": "column",
                "valueField": "alcance1",
                "fillColorsField": "color",
                "lineColor": "#F5BA3D",
                "fillColors": "#F5BA3D"
            }
        ],
        "categoryField": "year",
        "categoryAxis": {
            "axisAlpha": 1,
            "gridAlpha": 0
        },
        "export": {
            "enabled": true
        },

    });

    var chart8 = AmCharts.makeChart("chart8", {
        "type": "serial",
        "theme": "none",
        "titles": [
            {
                "text": "Scope 3 (tCO2e)",
                "textAlign": "center",
                "size": 15,
                "useHTML": true
            }
        ],
        "dataProvider": [
            
            {
                "year": "2023",
                "alcance1": 282,
                "color": "#13406B",
            },
            {
                "year": "2024",
                "alcance1": 347,
                "color": "#13406B",
            },
            {
                "year": "Entregas 2024",
                "alcance1": 7037,
                "color": "#2B2B2B",
            }
        ],
        "valueAxes": [
            {
                "axisAlpha": 1,
                "gridAlpha": 0,
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
                "balloonText": "[[value]]",
                "fillAlphas": 1,
                "lineAlpha": 0,
                "title": "",
                "type": "column",
                "valueField": "alcance1",
                "fillColorsField": "color",
                "lineColor": "#F5BA3D",
                "fillColors": "#F5BA3D"
            }
        ],
        "categoryField": "year",
        "categoryAxis": {
            "axisAlpha": 1,
            "gridAlpha": 0
        },
        "export": {
            "enabled": true
        },

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
        "colors": ["#F5BA3D", "#79B928"],
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
        "colors": ["#F5BA3D", "#79B928"],
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
        "colors": ["#F5BA3D", "#79B928"],
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
        "colors": ["#F5BA3D", "#79B928"],
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

