AmCharts.theme = AmCharts.themes.light;

if (typeof AmCharts !== 'undefined') {
    var chart1 = AmCharts.makeChart("chart1", {
        "type": "serial",
        "theme": "none",
        "titles": [
            {
                "text": "Consumo Energético (MWh)",
                "size": 15,
                "useHTML": true
            },
            {
                "text": "",
                "size": 13
            }
        ],
        "dataProvider": [
            
            {
                "year": "2023",
                "alcance1": 2465,
                "color": "#17C3B2"
            },
            {
                "year": "2024",
                "alcance1": 21412,
                "color": "#2B2B2B"
            },
            {
                "year": "2025",
                "alcance1": 36691,
                "color": "#0E2E52"
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
                "text": "Consumo Hídrico (m³)",
                "size": 15,
                "useHTML": true
            },
            {
                "text": "",
                "size": 13
            }
        ],
        "dataProvider": [
            
            {
                "year": "2023",
                "alcance1": 2942,
                "color": "#17C3B2"
            },
            {
                "year": "2024",
                "alcance1": 34807,
                "color": "#2B2B2B"
            },
            {
                "year": "2025",
                "alcance1": 118750,
                "color": "#0E2E52"
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
                "text": "Alcance 2 (tCO2e)",
                "size": 15,
                "textAlign": "center",
                "useHTML": true
            }
        ],
        "dataProvider": [
            
            {
                "year": "2023",
                "alcance1": 697,
                "color": "#17C3B2",
            },
            {
                "year": "2024",
                "alcance1": 1081,
                "color": "#2B2B2B",
            },
            {
                "year": "2025",
                "alcance1": 1216,
                "color": "#0E2E52",
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
                "text": "Alcance 3 (tCO2e)",
                "textAlign": "center",
                "size": 15,
                "useHTML": true
            }
        ],
        "dataProvider": [
            
            {
                "year": "2023",
                "alcance1": 282,
                "color": "#17C3B2",
            },
            {
                "year": "2024",
                "alcance1": 7384,
                "color": "#2B2B2B",
            },
            {
                "year": "2025",
                "alcance1": 16307,
                "color": "#0E2E52",
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

}

