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


function timeAtCrimes() {
    function showThis() {
     
    var title_activities = "Crime Types",
        source_activities = "",
        link_activities = "http://www.highcharts.com",
        credits_databasis_str_activities = "",
        activities_category_names = ['CRIM SEXUAL ASSAULT', 'ROBBERY', 'OTHER OFFENSE', 'PROSTITUTION', 'THEFT', 'BATTERY', 'CRIMINAL TRESPASS', 'ASSAULT', 'OFFENSE INVOLVING CHILDREN', 'PUBLIC PEACE VIOLATION', 'DECEPTIVE PRACTICE', 'KIDNAPPING', 'WEAPONS VIOLATION', 'INTERFERENCE WITH PUBLIC OFFICER', 'ARSON', 'MOTOR VEHICLE THEFT', 'OBSCENITY', 'STALKING', 'INTIMIDATION', 'NARCOTICS', 'OTHER NARCOTIC VIOLATION', 'CRIMINAL DAMAGE', 'BURGLARY', 'HOMICIDE', 'SEX OFFENSE', 'PUBLIC INDECENCY', 'LIQUOR LAW VIOLATION', 'GAMBLING'],
        activities_category_data = [{
                        y:0.33, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[0], 
                            data:[
                                ['Morning', 15.757575757575756] ,
                                ['Evening', 12.727272727272727] ,
                                ['Afternoon', 23.030303030303028] ,
                                ['Night', 48.484848484848484] 
                            ]
                        }
                    }, 

                    {
                        y:3.363, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[1], 
                            data:[
                                ['Morning', 14.005352363960748] ,
                                ['Evening', 14.897413024085637] ,
                                ['Afternoon', 26.70234909307166] ,
                                ['Night', 44.39488551888195]
                            ]
                        }
                    }, 

                    {
                        y:7.126, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[2], 
                            data:[
                                ['Morning', 25.96126859388156] ,
                                ['Evening', 16.839741790625876] ,
                                ['Afternoon', 31.069323603704742] ,
                                ['Night', 26.12966601178782]
                            ]
                        }
                    }, 

                    {
                        y:1.442, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[3], 
                            data:[
                                ['Morning', 24.06380027739251] ,
                                ['Evening', 20.527045769764218] ,
                                ['Afternoon', 8.183079056865465] ,
                                ['Night', 47.22607489597781]
                            ]
                        }
                    }, 

                    {
                        y:18.749, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[4], 
                            data:[
                                ['Morning', 23.051896101125394] ,
                                ['Evening', 15.64883460451224] ,
                                ['Afternoon', 37.0526428076164] ,
                                ['Night', 24.24662648674596] 
                            ]
                        }
                    }, 
                    {
                        y:19.587, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[5], 
                            data:[
                                ['Morning', 15.959565017613723] ,
                                ['Evening', 16.52626742226987] ,
                                ['Afternoon', 30.632562413845918] ,
                                ['Night', 36.88160514627049] 
                            ]
                        }
                    }, 

                    {
                        y:2.903, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[6], 
                            data:[
                                ['Morning', 18.911470892180503] ,
                                ['Evening', 18.773682397519806] ,
                                ['Afternoon', 30.933517051326213] ,
                                ['Night', 31.381329658973474]
                            ]
                        }
                    }, 
                    {
                        y:6.624, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[7], 
                            data:[
                                ['Morning', 20.78804347826087] ,
                                ['Evening', 17.572463768115945] ,
                                ['Afternoon', 36.216787439613526] ,
                                ['Night', 25.422705314009665]
                            ]
                        }
                    }, 

                    {
                        y:0.462, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[8], 
                            data:[
                                ['Morning', 18.3982683982684] ,
                                ['Evening', 18.18181818181818] ,
                                ['Afternoon', 36.58008658008658] ,
                                ['Night', 26.839826839826838] 
                            ]
                        }
                    }, 
                    {
                        y:0.484, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[9], 
                            data:[
                                ['Morning', 21.694214876033058] ,
                                ['Evening', 18.388429752066116] ,
                                ['Afternoon', 32.43801652892562] ,
                                ['Night', 27.479338842975206]
                            ]
                        }
                    }, 

                    {
                        y:2.744, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[10], 
                            data:[
                                ['Morning', 24.817784256559765] ,
                                ['Evening', 11.443148688046646] ,
                                ['Afternoon', 41.54518950437318] ,
                                ['Night', 22.193877551020407] 
                            ]
                        }
                    }, 
                    {
                        y:0.201, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[11], 
                            data:[
                                ['Morning', 22.388059701492534] ,
                                ['Evening', 26.865671641791042] ,
                                ['Afternoon', 44.27860696517413] ,
                                ['Night', 6.467661691542288]
                            ]
                        }
                    }, 

                    {
                        y:0.869, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[12], 
                            data:[
                                ['Morning', 21.74913693901036] ,
                                ['Evening', 17.261219792865365] ,
                                ['Afternoon', 26.352128883774455] ,
                                ['Night', 34.63751438434983]
                            ]
                        }
                    }, 
                    {
                        y:0.065, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[13], 
                            data:[
                                ['Morning', 21.538461538461537] ,
                                ['Evening', 16.923076923076923] ,
                                ['Afternoon', 26.153846153846153] ,
                                ['Night', 35.38461538461539]
                            ]
                        }
                    }, 

                    {
                        y:0.211, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[14], 
                            data:[
                                ['Morning', 12.322274881516588] ,
                                ['Evening', 9.95260663507109] ,
                                ['Afternoon', 12.796208530805687] ,
                                ['Night', 64.92890995260665]
                            ]
                        }
                    }, 

                    {
                        y:5.002, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[15], 
                            data:[
                                ['Morning', 20.531787285085965] ,
                                ['Evening', 16.333466613354656] ,
                                ['Afternoon', 22.530987604958014] ,
                                ['Night', 40.60375849660136] 
                            ]
                        }
                    }, 

                    {
                        y:0.005, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[16], 
                            data:[
                                ['Morning', 40.0] ,
                                ['Evening', 0.0] ,
                                ['Afternoon', 40.0] ,
                                ['Night', 20.0] 
                            ]
                        }
                    }, 
                    {
                        y:0.040, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[17], 
                            data:[
                                ['Morning', 32.5] ,
                                ['Evening', 17.5] ,
                                ['Afternoon', 32.5] ,
                                ['Night', 17.5]
                            ]
                        }
                    }, 

                    {
                        y:0.064, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[18], 
                            data:[
                                ['Morning', 23.4375] ,
                                ['Evening', 20.3125] ,
                                ['Afternoon', 34.375] ,
                                ['Night', 21.875] 
                            ]
                        }
                    }, 
                    {
                        y:11.285, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[19], 
                            data:[
                                ['Morning', 16.90739920248117] ,
                                ['Evening', 21.470979175897206] ,
                                ['Afternoon', 33.15906070004431] ,
                                ['Night', 28.462560921577314]
                            ]
                        }
                    }, 
                    {
                        y:0.003, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[20], 
                            data:[
                                ['Morning', 0.0] ,
                                ['Evening', 0.0] ,
                                ['Afternoon', 33.333333333333336] ,
                                ['Night', 66.66666666666667] 
                            ]
                        }
                    }, 
                    {
                        y:11.698, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[21], 
                            data:[
                                ['Morning', 16.224995725765087] ,
                                ['Evening', 18.789536672935544] ,
                                ['Afternoon', 23.37151649854676] ,
                                ['Night', 41.61395110275261]
                            ]
                        }
                    }, 
                    {
                        y:4.626, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[22], 
                            data:[
                                ['Morning', 30.847384349329875] ,
                                ['Evening', 14.54820579334198] ,
                                ['Afternoon', 27.237354085603116] ,
                                ['Night', 27.367055771725035] 
                            ]
                        }
                    }, 
                    {
                        y:1.176, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[23], 
                            data:[
                                ['Morning', 13.690476190476192] ,
                                ['Evening', 14.45578231292517] ,
                                ['Afternoon', 24.57482993197279] ,
                                ['Night', 47.27891156462585]
                            ]
                        }
                    }, 
                    {
                        y:0.427, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[24], 
                            data:[
                                ['Morning', 26.22950819672131] ,
                                ['Evening', 14.051522248243558] ,
                                ['Afternoon', 30.444964871194376] ,
                                ['Night', 29.274004683840747]
                            ]
                        }
                    }, 
                    {
                        y:0.002, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[25], 
                            data:[
                                ['Morning', 50.0] ,
                                ['Evening', 0.0] ,
                                ['Afternoon', 0.0] ,
                                ['Night', 50.0]
                            ]
                        }
                    }, 
                    {
                        y:0.323, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[26], 
                            data:[
                                ['Morning', 4.3343653250774] ,
                                ['Evening', 30.340557275541794] ,
                                ['Afternoon', 20.123839009287927] ,
                                ['Night', 45.20123839009288] 
                            ]
                        }
                    }, 
                    {
                        y:0.188, 
                        drilldown:{
                            name:"Time Split - "+activities_category_names[27], 
                            data:[
                                ['Morning', 8.51063829787234] ,
                                ['Evening', 38.29787234042553] ,
                                ['Afternoon', 32.97872340425532] ,
                                ['Night', 20.21276595744681] 
                            ]
                        }
                    } 
            ]
    var colors = Highcharts.getOptions().colors,
            categories = activities_category_names,
            name = 'Crime Types',
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
                text: 'Click on bar to get Time-Of-Day based split'
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: null
                },
                max: 20
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
                                   text: "Types of Crimes"
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
                        s += 'Click to return to Crime Types';
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
    } //end
    showThis()
}