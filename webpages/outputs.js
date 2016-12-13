function setPieTheme(){
    Highcharts.createElement('link', {
       href: 'https://fonts.googleapis.com/css?family=Signika:400,700',
       rel: 'stylesheet',
       type: 'text/css'
    }, null, document.getElementsByTagName('head')[0]);

    // Add the background image to the container
    Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
       proceed.call(this);
       this.container.style.background = 'url(http://www.highcharts.com/samples/graphics/sand.png)';
    });


    Highcharts.theme = {
       colors: ['#f45b5b', '#8085e9', '#8d4654', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
          '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
       chart: {
          backgroundColor: null,
          style: {
             fontFamily: 'Signika, serif'
          }
       },
       title: {
          style: {
             color: 'black',
             fontSize: '16px',
             fontWeight: 'bold'
          }
       },
       subtitle: {
          style: {
             color: 'black'
          }
       },
       tooltip: {
          borderWidth: 0
       },
       legend: {
          itemStyle: {
             fontWeight: 'bold',
             fontSize: '13px'
          }
       },
       xAxis: {
          labels: {
             style: {
                color: '#6e6e70'
             }
          }
       },
       yAxis: {
          labels: {
             style: {
                color: '#6e6e70'
             }
          }
       },
       plotOptions: {
          series: {
             shadow: true
          },
          candlestick: {
             lineColor: '#404048'
          },
          map: {
             shadow: false
          }
       },

       // Highstock specific
       navigator: {
          xAxis: {
             gridLineColor: '#D0D0D8'
          }
       },
       rangeSelector: {
          buttonTheme: {
             fill: 'white',
             stroke: '#C0C0C8',
             'stroke-width': 1,
             states: {
                select: {
                   fill: '#D0D0D8'
                }
             }
          }
       },
       scrollbar: {
          trackBorderColor: '#C0C0C8'
       },

       // General
       background2: '#E0E0E8'

    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);
}



function showDomestic(){

    var colors = Highcharts.getOptions().colors,
    categories = ['Yes','No'],
    data = [{
        y: 13.24,
        color: colors[0],
        drilldown: {
            name: 'Yes',
            categories: ['No','Yes'],
            data: [0.03, 13.21],
            color: colors[0]
        }
    }, {
        y: 86.76,
        color: colors[1],
        drilldown: {
            name: 'No',
            categories: ['No','Yes'],
            data: [3.64, 83.12],
            color: colors[1]
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
    Highcharts.chart('container2', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Domestic Case Arrest Chances'
    },
    yAxis: {
        title: {
            text: 'Percentage'
        }
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%']
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    series: [{
        name: 'Domestic',
        data: browserData,
        size: '60%',
        dataLabels: {
            formatter: function () {
                return this.y > 5 ? this.point.name : null;
            },
            color: '#ffffff',
            distance: -30
        }
    }, {
        name: 'Arrest',
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
            formatter: function () {
                // display only if larger than 1
                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
            }
        }
    }]
    });
}


function showTimeOfDay() {

    var colors = Highcharts.getOptions().colors,
        categories = ['Morning', 'Afternoon', 'Evening', 'Night'],
        data = [{
            y: 19.54,
            color: colors[0],
            drilldown: {
                name: 'Morning',
                categories: ['No','Yes'],
                data: [0.59, 18.95],
                color: colors[0]
            }
        }, {
            y: 30.66,
            color: colors[1],
            drilldown: {
                name: 'Afternoon',
                categories: ['No','Yes'],
                data: [0.69, 29.95],
                color: colors[1]
            }
        }, {
            y: 17.06,
            color: colors[2],
            drilldown: {
                name: 'Evening',
                categories: ['No','Yes'],
                data: [1.64, 15.42],
                color: colors[2]
            }
        }, {
            y: 32.74,
            color: colors[3],
            drilldown: {
                name: 'Night',
                categories: ['No','Yes'],
                data: [0.74, 32.00],
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

    // Create the chart
    Highcharts.chart('container3', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Time of Day Arrest Chances'
        },
        yAxis: {
            title: {
                text: 'Percentage'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Time of Day',
            data: browserData,
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: '#ffffff',
                distance: -30
            }
        }, {
            name: 'Arrest',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
                }
            }
        }]
    });
}

function showDayType(){

    var colors = Highcharts.getOptions().colors,
    categories = ['Weekend','Weekday'],
    data = [{
        y: 27.62,
        color: colors[0],
        drilldown: {
            name: 'Weekend',
            categories: ['No','Yes'],
            data: [1.74, 25.88],
            color: colors[0]
        }
    }, {
        y: 72.38,
        color: colors[1],
        drilldown: {
            name: 'Weekday',
            categories: ['No','Yes'],
            data: [1.93, 70.45],
            color: colors[1]
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
    Highcharts.chart('container4', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Day Type Arrest Chances'
    },
    yAxis: {
        title: {
            text: 'Percentage'
        }
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%']
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    series: [{
        name: 'Day Type',
        data: browserData,
        size: '60%',
        dataLabels: {
            formatter: function () {
                return this.y > 5 ? this.point.name : null;
            },
            color: '#ffffff',
            distance: -30
        }
    }, {
        name: 'Arrest',
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
            formatter: function () {
                // display only if larger than 1
                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
            }
        }
    }]
    });
}



function setColumnDarkUnica(){
        Highcharts.createElement('link', {
           href: 'https://fonts.googleapis.com/css?family=Monteserra',
           rel: 'stylesheet',
           type: 'text/css'
        }, null, document.getElementsByTagName('head')[0]);

        Highcharts.theme = {
           colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
              '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
           chart: {
              backgroundColor: {
                 linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                 stops: [
                    [0, '#2a2a2b'],
                    [1, '#3e3e40']
                 ]
              },
              style: {
                 fontFamily: '\'Monteserra\', sans-serif'
              },
              plotBorderColor: '#606063'
           },
           title: {
              style: {
                 color: '#E0E0E3',
                 textTransform: 'uppercase',
                 fontSize: '20px'
              }
           },
           subtitle: {
              style: {
                 color: '#E0E0E3',
                 textTransform: 'uppercase'
              }
           },
           xAxis: {
              gridLineColor: '#707073',
              labels: {
                 style: {
                    color: '#E0E0E3'
                 }
              },
              lineColor: '#707073',
              minorGridLineColor: '#505053',
              tickColor: '#707073',
              title: {
                 style: {
                    color: '#A0A0A3'

                 }
              }
           },
           yAxis: {
              gridLineColor: '#707073',
              labels: {
                 style: {
                    color: '#E0E0E3'
                 }
              },
              lineColor: '#707073',
              minorGridLineColor: '#505053',
              tickColor: '#707073',
              tickWidth: 1,
              title: {
                 style: {
                    color: '#A0A0A3'
                 }
              }
           },
           tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              style: {
                 color: '#F0F0F0'
              }
           },
           plotOptions: {
              series: {
                 dataLabels: {
                    color: '#B0B0B3'
                 },
                 marker: {
                    lineColor: '#333'
                 }
              },
              boxplot: {
                 fillColor: '#505053'
              },
              candlestick: {
                 lineColor: 'white'
              },
              errorbar: {
                 color: 'white'
              }
           },
           legend: {
              itemStyle: {
                 color: '#E0E0E3'
              },
              itemHoverStyle: {
                 color: '#FFF'
              },
              itemHiddenStyle: {
                 color: '#606063'
              }
           },
           credits: {
              style: {
                 color: '#666'
              }
           },
           labels: {
              style: {
                 color: '#707073'
              }
           },

           drilldown: {
              activeAxisLabelStyle: {
                 color: '#F0F0F3'
              },
              activeDataLabelStyle: {
                 color: '#F0F0F3'
              }
           },

           navigation: {
              buttonOptions: {
                 symbolStroke: '#DDDDDD',
                 theme: {
                    fill: '#505053'
                 }
              }
           },

           // scroll charts
           rangeSelector: {
              buttonTheme: {
                 fill: '#505053',
                 stroke: '#000000',
                 style: {
                    color: '#CCC'
                 },
                 states: {
                    hover: {
                       fill: '#707073',
                       stroke: '#000000',
                       style: {
                          color: 'white'
                       }
                    },
                    select: {
                       fill: '#000003',
                       stroke: '#000000',
                       style: {
                          color: 'white'
                       }
                    }
                 }
              },
              inputBoxBorderColor: '#505053',
              inputStyle: {
                 backgroundColor: '#333',
                 color: 'silver'
              },
              labelStyle: {
                 color: 'silver'
              }
           },

           navigator: {
              handles: {
                 backgroundColor: '#666',
                 borderColor: '#AAA'
              },
              outlineColor: '#CCC',
              maskFill: 'rgba(255,255,255,0.1)',
              series: {
                 color: '#7798BF',
                 lineColor: '#A6C7ED'
              },
              xAxis: {
                 gridLineColor: '#505053'
              }
           },

           scrollbar: {
              barBackgroundColor: '#808083',
              barBorderColor: '#808083',
              buttonArrowColor: '#CCC',
              buttonBackgroundColor: '#606063',
              buttonBorderColor: '#606063',
              rifleColor: '#FFF',
              trackBackgroundColor: '#404043',
              trackBorderColor: '#404043'
           },

           // special colors for some of the
           legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
           background2: '#505053',
           dataLabelsColor: '#B0B0B3',
           textColor: '#C0C0C0',
           contrastTextColor: '#F0F0F3',
           maskColor: 'rgba(255,255,255,0.3)'
        };

        // Apply the theme
        Highcharts.setOptions(Highcharts.theme);
}


function showDistricts() {
     
    var title_activities = "Crime Types",
        source_activities = "",
        link_activities = "http://www.highcharts.com",
        credits_databasis_str_activities = "",
        activities_category_names = ['14', '24', '4', '10', '16', '19', '3', '15', '9', '5', '17', '18', '7', '12', '1', '2', '11', '25', '20', '6', '22', '8'],
        activities_category_data = [
                { y: 4.53, drilldown:{ name:'Arrest Chances -  14 ', data:[ ['false', 0.0 ] , ['true', 4.53 ] ] } }, 
                { y: 3.00, drilldown:{ name:'Arrest Chances -  24 ', data:[ ['false', 0.01 ] , ['true', 2.99 ] ] } }, 
                { y: 5.27, drilldown:{ name:'Arrest Chances -  4 ', data:[ ['false', 0.0 ] , ['true', 5.27 ] ] } }, 
                { y: 4.16, drilldown:{ name:'Arrest Chances -  10 ', data:[ ['false', 0.0 ] , ['true', 4.16 ] ] } }, 
                { y: 3.16, drilldown:{ name:'Arrest Chances -  16 ', data:[ ['false', 0.0 ] , ['true', 3.16 ] ] } }, 
                { y: 4.88, drilldown:{ name:'Arrest Chances -  19 ', data:[ ['false', 0.0 ] , ['true', 4.88 ] ] } }, 
                { y: 4.79, drilldown:{ name:'Arrest Chances -  3 ', data:[ ['false', 0.0 ] , ['true', 4.79 ] ] } }, 
                { y: 4.54, drilldown:{ name:'Arrest Chances -  15 ', data:[ ['false', 1.85 ] , ['true', 2.69 ] ] } }, 
                { y: 5.11, drilldown:{ name:'Arrest Chances -  9 ', data:[ ['false', 0.03 ] , ['true', 5.08 ] ] } }, 
                { y: 4.03, drilldown:{ name:'Arrest Chances -  5 ', data:[ ['false', 0.0 ] , ['true', 4.03 ] ] } }, 
                { y: 2.95, drilldown:{ name:'Arrest Chances -  17 ', data:[ ['false', 0.0 ] , ['true', 2.95 ] ] } }, 
                { y: 4.62, drilldown:{ name:'Arrest Chances -  18 ', data:[ ['false', 0.01 ] , ['true', 4.61 ] ] } }, 
                { y: 5.66, drilldown:{ name:'Arrest Chances -  7 ', data:[ ['false', 0.0 ] , ['true', 5.66 ] ] } }, 
                { y: 5.05, drilldown:{ name:'Arrest Chances -  12 ', data:[ ['false', 0.0 ] , ['true', 5.05 ] ] } }, 
                { y: 2.99, drilldown:{ name:'Arrest Chances -  1 ', data:[ ['false', 0.0 ] , ['true', 2.99 ] ] } }, 
                { y: 6.48, drilldown:{ name:'Arrest Chances -  2 ', data:[ ['false', 0.0 ] , ['true', 6.48 ] ] } }, 
                { y: 6.54, drilldown:{ name:'Arrest Chances -  11 ', data:[ ['false', 1.79 ] , ['true', 4.75 ] ] } }, 
                { y: 5.78, drilldown:{ name:'Arrest Chances -  25 ', data:[ ['false', 0.0 ] , ['true', 5.78 ] ] } }, 
                { y: 1.87, drilldown:{ name:'Arrest Chances -  20 ', data:[ ['false', 0.0 ] , ['true', 1.87 ] ] } }, 
                { y: 5.12, drilldown:{ name:'Arrest Chances -  6 ', data:[ ['false', 0.0 ] , ['true', 5.12 ] ] } }, 
                { y: 3.14, drilldown:{ name:'Arrest Chances -  22 ', data:[ ['false', 0.0 ] , ['true', 3.14 ] ] } }, 
                { y: 6.33, drilldown:{ name:'Arrest Chances -  8 ', data:[ ['false', 0.0 ] , ['true', 6.33 ] ] } }
            ]
    var colors = Highcharts.getOptions().colors,
            categories = activities_category_names,
            name = 'Cases in a District',
            data = activities_category_data
    
    function setChart(chart, options) {

            var max = chart.series.length;
            for (var i = 0; i < max; i++) {
              chart.series[0].remove(false);
            }

            chart.xAxis[0].setCategories(options.categories, false);
            
            chart.addSeries({
                type: options.type,
                name: options.name,
                data: options.data,
                color: colors[0]
            }, false);

            
            //chart.options.spacingRight = 35; //not working
            //chart.yAxis.title = "Test"; //not working
            chart.redraw();
        }
    
        var chart = new Highcharts.Chart({
            chart: {
              renderTo: 'container1',
              type: 'bar',
              spacingRight: 15
              //spacingLeft: 15
            },
            title: {
                text: title_activities
            },
            subtitle: {
                text: 'Click on bar to know chances of Arrest in that District'
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: null
                },
                max: 8
            },
            plotOptions: {
                bar: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function() {
                                var drilldown = this.drilldown;
                                
                                this.series.chart.setTitle({
                                       text: drilldown.name
                                });

                                var options = {
                                    'name': drilldown.name,
                                    'categories': drilldown.categories,
                                    'data': drilldown.data,
                                    'type': 'pie'
                                };
                                
                                setChart(this.series.chart, options);
                            }
                        }
                    }
                },
                pie: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function() {
                              this.series.chart.setTitle({
                                   text: "Arrest Chances"
                               });
                              var options = {
                                    'name': name,
                                    'categories': categories,
                                    'data': data,
                                    'type': 'bar'
                                };
                                
                                setChart(this.series.chart, options);
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        color: colors[0],
                        connectorColor: colors[0],
                        distance: 15,
                        formatter: function() {
                            var label_String = this.point.name;

                            if (label_String.length > 16) {
                              label_String = label_String.substring(0,16) + "..."
                            };
                            return '<b>'+ label_String +'</b>: '+ this.y;
                        }
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    var point = this.point,
                        s = ""

                    if (point.drilldown) {
                        s += this.x +':<b>'+ this.y +' %</b><br/>';
                        s += 'Click to view '+ point.category +' details';
                    } else {
                        s += point.name +':<b>'+ this.y +'%</b><br/>';
                        s += 'Click to return to Districts';
                    }
                    return s;
                }
            },
            series: [{
                type: 'bar',
                name: name,
                data: data
            }],
            exporting: {
                enabled: false
            }
        })
    chart.setSize(undefined,1027)
}

function loadAll() {
    setColumnDarkUnica()
    showDistricts()
    setPieTheme()
    showDomestic()
    showTimeOfDay()
    showDayType()
}