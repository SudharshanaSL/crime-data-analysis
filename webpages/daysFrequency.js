function setColumnDrillDownDarkUnica(){
      Highcharts.createElement('link', {
         href: 'https://fonts.googleapis.com/css?family=Monteserrat',
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
               fontFamily: '\'Monteserrat\', sans-serif'
            },
            plotBorderColor: '#606063'
         },
         title: {
            style: {
               color: '#E0E0E3',
               textTransform: 'uppercase',
               fontSize: '25px'
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

function daysFrequency() {
    // Create the chart
    var chartref = Highcharts.chart('container2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Crime Split based on Day of Week'
        },
        subtitle: {
            text: 'Click to view Crime Split on that day'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total percentage of Crimes'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.2f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:15px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Days',
            colorByPoint: true,
            data: [
                  { name:'OBSCENITY',y:0.003932595316278978,drilldown:'OBSCENITY'},
                  { name:'PUBLIC PEACE VIOLATION',y:0.5151699864325462,drilldown:'PUBLIC PEACE VIOLATION'},
                  { name:'OTHER NARCOTIC VIOLATION',y:0.001966297658139489,drilldown:'OTHER NARCOTIC VIOLATION'},
                  { name:'ROBBERY',y:3.126413276441788,drilldown:'ROBBERY'},
                  { name:'THEFT',y:18.75651336099259,drilldown:'THEFT'},
                  { name:'MOTOR VEHICLE THEFT',y:6.325579566234737,drilldown:'MOTOR VEHICLE THEFT'},
                  { name:'CRIM SEXUAL ASSAULT',y:0.37359655504650296,drilldown:'CRIM SEXUAL ASSAULT'},
                  { name:'CRIMINAL DAMAGE',y:11.095817684881137,drilldown:'CRIMINAL DAMAGE'},
                  { name:'HOMICIDE',y:2.267141199834831,drilldown:'HOMICIDE'},
                  { name:'CRIMINAL TRESPASS',y:2.701692982283658,drilldown:'CRIMINAL TRESPASS'},
                  { name:'KIDNAPPING',y:0.2320231236604597,drilldown:'KIDNAPPING'},
                  { name:'GAMBLING',y:0.19662976581394892,drilldown:'GAMBLING'},
                  { name:'PUBLIC INDECENCY',y:0.001966297658139489,drilldown:'PUBLIC INDECENCY'},
                  { name:'ARSON',y:0.22612423068604126,drilldown:'ARSON'},
                  { name:'STALKING',y:0.027528167213952848,drilldown:'STALKING'},
                  { name:'OTHER OFFENSE',y:6.720805395520774,drilldown:'OTHER OFFENSE'},
                  { name:'BURGLARY',y:4.799732583518493,drilldown:'BURGLARY'},
                  { name:'OFFENSE INVOLVING CHILDREN',y:0.49943960516743025,drilldown:'OFFENSE INVOLVING CHILDREN'},
                  { name:'WEAPONS VIOLATION',y:0.8376428023674224,drilldown:'WEAPONS VIOLATION'},
                  { name:'SEX OFFENSE',y:0.4247202941581297,drilldown:'SEX OFFENSE'},
                  { name:'ASSAULT',y:6.738502074444029,drilldown:'ASSAULT'},
                  { name:'BATTERY',y:19.5587628055135,drilldown:'BATTERY'},
                  { name:'NARCOTICS',y:10.051713628409068,drilldown:'NARCOTICS'},
                  { name:'PROSTITUTION',y:1.2800597754488074,drilldown:'PROSTITUTION'},
                  { name:'LIQUOR LAW VIOLATION',y:0.2910120534046444,drilldown:'LIQUOR LAW VIOLATION'},
                  { name:'DECEPTIVE PRACTICE',y:2.8196708417720275,drilldown:'DECEPTIVE PRACTICE'},
                  { name:'INTIMIDATION',y:0.051123739111626716,drilldown:'INTIMIDATION'},
                  { name:'INTERFERENCE WITH PUBLIC OFFICER',y:0.07471931100930058,drilldown:'INTERFERENCE WITH PUBLIC OFFICER'}
            ]
        }],
        drilldown: {
            series: [
                  {name:"OBSCENITY",
                  id:"OBSCENITY",
                  data:[
                  ['Thursday', 0.0] ,
                  ['Monday', 0.0] ,
                  ['Friday', 100.0] ,
                  ['Wednesday', 0.0] ,
                  ['Saturday', 0.0] ,
                  ['Sunday', 0.0] ,
                  ['Tuesday', 0.0] ,
                  ]},
                  {name:"PUBLIC PEACE VIOLATION",
                  id:"PUBLIC PEACE VIOLATION",
                  data:[
                  ['Thursday', 16.412213740458014] ,
                  ['Monday', 11.83206106870229] ,
                  ['Friday', 14.885496183206106] ,
                  ['Wednesday', 16.030534351145036] ,
                  ['Saturday', 13.740458015267174] ,
                  ['Sunday', 11.068702290076335] ,
                  ['Tuesday', 16.030534351145036] ,
                  ]},
                  {name:"OTHER NARCOTIC VIOLATION",
                  id:"OTHER NARCOTIC VIOLATION",
                  data:[
                  ['Thursday', 0.0] ,
                  ['Monday', 0.0] ,
                  ['Friday', 0.0] ,
                  ['Wednesday', 100.0] ,
                  ['Saturday', 0.0] ,
                  ['Sunday', 0.0] ,
                  ['Tuesday', 0.0] ,
                  ]},
                  {name:"ROBBERY",
                  id:"ROBBERY",
                  data:[
                  ['Thursday', 15.09433962264151] ,
                  ['Monday', 13.39622641509434] ,
                  ['Friday', 12.767295597484276] ,
                  ['Wednesday', 13.773584905660377] ,
                  ['Saturday', 17.169811320754718] ,
                  ['Sunday', 13.836477987421384] ,
                  ['Tuesday', 13.962264150943396] ,
                  ]},
                  {name:"THEFT",
                  id:"THEFT",
                  data:[
                  ['Thursday', 15.295104308627739] ,
                  ['Monday', 13.71212915399937] ,
                  ['Friday', 15.892651221302023] ,
                  ['Wednesday', 14.854806583499318] ,
                  ['Saturday', 14.141943599958067] ,
                  ['Sunday', 11.636439878393961] ,
                  ['Tuesday', 14.46692525421952] ,
                  ]},
                  {name:"MOTOR VEHICLE THEFT",
                  id:"MOTOR VEHICLE THEFT",
                  data:[
                  ['Thursday', 13.926018029219769] ,
                  ['Monday', 13.304320795772458] ,
                  ['Friday', 14.019272614236867] ,
                  ['Wednesday', 13.894933167547403] ,
                  ['Saturday', 15.418091389493316] ,
                  ['Sunday', 15.418091389493316] ,
                  ['Tuesday', 14.019272614236867] ,
                  ]},
                  {name:"CRIM SEXUAL ASSAULT",
                  id:"CRIM SEXUAL ASSAULT",
                  data:[
                  ['Thursday', 16.842105263157894] ,
                  ['Monday', 15.789473684210526] ,
                  ['Friday', 14.736842105263158] ,
                  ['Wednesday', 13.68421052631579] ,
                  ['Saturday', 13.157894736842104] ,
                  ['Sunday', 15.26315789473684] ,
                  ['Tuesday', 10.526315789473683] ,
                  ]},
                  {name:"CRIMINAL DAMAGE",
                  id:"CRIMINAL DAMAGE",
                  data:[
                  ['Thursday', 13.857877015771752] ,
                  ['Monday', 14.602161970583023] ,
                  ['Friday', 14.035087719298245] ,
                  ['Wednesday', 14.42495126705653] ,
                  ['Saturday', 14.885699096225412] ,
                  ['Sunday', 14.495835548467127] ,
                  ['Tuesday', 13.69838738259791] ,
                  ]},
                  {name:"HOMICIDE",
                  id:"HOMICIDE",
                  data:[
                  ['Thursday', 13.009540329575023] ,
                  ['Monday', 13.443191673894189] ,
                  ['Friday', 13.18300086730269] ,
                  ['Wednesday', 12.836079791847355] ,
                  ['Saturday', 17.606244579358197] ,
                  ['Sunday', 18.21335646140503] ,
                  ['Tuesday', 11.70858629661752] ,
                  ]},
                  {name:"CRIMINAL TRESPASS",
                  id:"CRIMINAL TRESPASS",
                  data:[
                  ['Thursday', 13.682678311499272] ,
                  ['Monday', 14.992721979621543] ,
                  ['Friday', 16.01164483260553] ,
                  ['Wednesday', 14.264919941775837] ,
                  ['Saturday', 12.154294032023289] ,
                  ['Sunday', 12.154294032023289] ,
                  ['Tuesday', 16.739446870451236] ,
                  ]},
                  {name:"KIDNAPPING",
                  id:"KIDNAPPING",
                  data:[
                  ['Thursday', 10.16949152542373] ,
                  ['Monday', 12.711864406779661] ,
                  ['Friday', 23.728813559322035] ,
                  ['Wednesday', 8.474576271186441] ,
                  ['Saturday', 21.186440677966104] ,
                  ['Sunday', 17.796610169491526] ,
                  ['Tuesday', 5.932203389830509] ,
                  ]},
                  {name:"GAMBLING",
                  id:"GAMBLING",
                  data:[
                  ['Thursday', 8.0] ,
                  ['Monday', 13.0] ,
                  ['Friday', 23.0] ,
                  ['Wednesday', 16.0] ,
                  ['Saturday', 8.0] ,
                  ['Sunday', 12.0] ,
                  ['Tuesday', 20.0] ,
                  ]},
                  {name:"PUBLIC INDECENCY",
                  id:"PUBLIC INDECENCY",
                  data:[
                  ['Thursday', 0.0] ,
                  ['Monday', 0.0] ,
                  ['Friday', 0.0] ,
                  ['Wednesday', 0.0] ,
                  ['Saturday', 0.0] ,
                  ['Sunday', 0.0] ,
                  ['Tuesday', 100.0] ,
                  ]},
                  {name:"ARSON",
                  id:"ARSON",
                  data:[
                  ['Thursday', 17.391304347826086] ,
                  ['Monday', 13.043478260869565] ,
                  ['Friday', 11.304347826086955] ,
                  ['Wednesday', 14.782608695652172] ,
                  ['Saturday', 13.043478260869565] ,
                  ['Sunday', 10.43478260869565] ,
                  ['Tuesday', 19.999999999999996] ,
                  ]},
                  {name:"STALKING",
                  id:"STALKING",
                  data:[
                  ['Thursday', 14.285714285714285] ,
                  ['Monday', 21.428571428571427] ,
                  ['Friday', 28.57142857142857] ,
                  ['Wednesday', 7.142857142857142] ,
                  ['Saturday', 0.0] ,
                  ['Sunday', 14.285714285714285] ,
                  ['Tuesday', 14.285714285714285] ,
                  ]},
                  {name:"OTHER OFFENSE",
                  id:"OTHER OFFENSE",
                  data:[
                  ['Thursday', 13.545933294324167] ,
                  ['Monday', 14.452896430661205] ,
                  ['Friday', 14.628437682855472] ,
                  ['Wednesday', 16.062024575775308] ,
                  ['Saturday', 13.077823288472791] ,
                  ['Sunday', 11.966062024575775] ,
                  ['Tuesday', 16.266822703335283] ,
                  ]},
                  {name:"BURGLARY",
                  id:"BURGLARY",
                  data:[
                  ['Thursday', 16.509627201966406] ,
                  ['Monday', 15.157722244981565] ,
                  ['Friday', 13.928717738631708] ,
                  ['Wednesday', 14.952888160589922] ,
                  ['Saturday', 11.224907824662024] ,
                  ['Sunday', 12.617779598525194] ,
                  ['Tuesday', 15.608357230643179] ,
                  ]},
                  {name:"OFFENSE INVOLVING CHILDREN",
                  id:"OFFENSE INVOLVING CHILDREN",
                  data:[
                  ['Thursday', 14.960629921259843] ,
                  ['Monday', 14.960629921259843] ,
                  ['Friday', 17.322834645669293] ,
                  ['Wednesday', 13.779527559055119] ,
                  ['Saturday', 13.385826771653543] ,
                  ['Sunday', 10.236220472440944] ,
                  ['Tuesday', 15.354330708661417] ,
                  ]},
                  {name:"WEAPONS VIOLATION",
                  id:"WEAPONS VIOLATION",
                  data:[
                  ['Thursday', 12.67605633802817] ,
                  ['Monday', 14.084507042253522] ,
                  ['Friday', 16.19718309859155] ,
                  ['Wednesday', 16.901408450704228] ,
                  ['Saturday', 11.971830985915494] ,
                  ['Sunday', 9.389671361502348] ,
                  ['Tuesday', 18.779342723004696] ,
                  ]},
                  {name:"SEX OFFENSE",
                  id:"SEX OFFENSE",
                  data:[
                  ['Thursday', 17.59259259259259] ,
                  ['Monday', 14.814814814814813] ,
                  ['Friday', 11.574074074074073] ,
                  ['Wednesday', 14.351851851851851] ,
                  ['Saturday', 14.351851851851851] ,
                  ['Sunday', 11.574074074074073] ,
                  ['Tuesday', 15.74074074074074] ,
                  ]},
                  {name:"ASSAULT",
                  id:"ASSAULT",
                  data:[
                  ['Thursday', 14.998540997957395] ,
                  ['Monday', 14.998540997957395] ,
                  ['Friday', 12.926758097461335] ,
                  ['Wednesday', 17.216224102713742] ,
                  ['Saturday', 12.226437117011963] ,
                  ['Sunday', 11.905456667639333] ,
                  ['Tuesday', 15.728042019258826] ,
                  ]},
                  {name:"BATTERY",
                  id:"BATTERY",
                  data:[
                  ['Thursday', 13.02905398612647] ,
                  ['Monday', 14.89896451191314] ,
                  ['Friday', 13.682517341912135] ,
                  ['Wednesday', 15.049763747863677] ,
                  ['Saturday', 14.758218558359305] ,
                  ['Sunday', 14.004222378606615] ,
                  ['Tuesday', 14.577259475218659] ,
                  ]},
                  {name:"NARCOTICS",
                  id:"NARCOTICS",
                  data:[
                  ['Thursday', 15.316901408450702] ,
                  ['Monday', 15.47339593114241] ,
                  ['Friday', 14.553990610328638] ,
                  ['Wednesday', 13.634585289514865] ,
                  ['Saturday', 15.082159624413144] ,
                  ['Sunday', 11.091549295774646] ,
                  ['Tuesday', 14.847417840375586] ,
                  ]},
                  {name:"PROSTITUTION",
                  id:"PROSTITUTION",
                  data:[
                  ['Thursday', 14.285714285714286] ,
                  ['Monday', 10.44546850998464] ,
                  ['Friday', 14.90015360983103] ,
                  ['Wednesday', 16.129032258064516] ,
                  ['Saturday', 16.589861751152075] ,
                  ['Sunday', 13.36405529953917] ,
                  ['Tuesday', 14.285714285714286] ,
                  ]},
                  {name:"LIQUOR LAW VIOLATION",
                  id:"LIQUOR LAW VIOLATION",
                  data:[
                  ['Thursday', 17.56756756756757] ,
                  ['Monday', 14.864864864864865] ,
                  ['Friday', 14.18918918918919] ,
                  ['Wednesday', 14.18918918918919] ,
                  ['Saturday', 9.45945945945946] ,
                  ['Sunday', 12.837837837837839] ,
                  ['Tuesday', 16.89189189189189] ,
                  ]},
                  {name:"DECEPTIVE PRACTICE",
                  id:"DECEPTIVE PRACTICE",
                  data:[
                  ['Thursday', 14.295676429567644] ,
                  ['Monday', 15.829846582984658] ,
                  ['Friday', 17.224546722454672] ,
                  ['Wednesday', 15.481171548117155] ,
                  ['Saturday', 13.319386331938633] ,
                  ['Sunday', 7.461645746164574] ,
                  ['Tuesday', 16.387726638772666] ,
                  ]},
                  {name:"INTIMIDATION",
                  id:"INTIMIDATION",
                  data:[
                  ['Thursday', 11.538461538461538] ,
                  ['Monday', 7.692307692307692] ,
                  ['Friday', 15.384615384615383] ,
                  ['Wednesday', 23.076923076923077] ,
                  ['Saturday', 11.538461538461538] ,
                  ['Sunday', 19.23076923076923] ,
                  ['Tuesday', 11.538461538461538] ,
                  ]},
                  {name:"INTERFERENCE WITH PUBLIC OFFICER",
                  id:"INTERFERENCE WITH PUBLIC OFFICER",
                  data:[
                  ['Thursday', 10.526315789473685] ,
                  ['Monday', 18.42105263157895] ,
                  ['Friday', 7.894736842105263] ,
                  ['Wednesday', 18.42105263157895] ,
                  ['Saturday', 18.42105263157895] ,
                  ['Sunday', 5.2631578947368425] ,
                  ['Tuesday', 21.05263157894737] ,
                  ]}
            ]
        }
    });
   chartref.setSize(undefined,802)
}


function setSandSignika(){

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


function dayDonut() {

    var colors = Highcharts.getOptions().colors,
        categories = ['Weekday','Weekend'],
        data = [{
            y: 58.42,
            color: colors[0],
            drilldown: {
                name: 'Weekday',
                categories: ['Monday',  'Tuesday', 'Wednesday','Thursday'],
                data: [14.45,14.76,14.85,14.36],
                color: colors[0]
            }
        }, {
            y: 41.58,
            color: colors[1],
            drilldown: {
                name: 'Weekend',
                categories: ["Friday","Saturday","Sunday"],
                data: [14.49,14.27,12.82],
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
    Highcharts.chart('container3', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Crime rate on Days'
        },
        yAxis: {
            title: {
                text: 'Crime Percentage'
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
            name: 'Type of Day',
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
            name: 'Day',
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