function crimesAtTime() {
        // Create the chart
        // Radialize the colors
        Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
            return {
                radialGradient: {
                    cx: 0.5,
                    cy: 0.3,
                    r: 0.7
                },
                stops: [
                    [0, color],
                    [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                ]
            };
        });
    var chartref = Highcharts.chart('container', {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Time-based Split - drilldown Crime-Based Split'
            },
            subtitle: {
                text: 'Click the slices to view crimes.'
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}: {point.y:.1f}%'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
            series: [{
                name: 'Time of Day',
                colorByPoint: true,
                data: [{
                    name: 'Morning',
                    y: 19.83319833198332,
                    drilldown: 'Morning'
                }, {
                    name: 'Afternoon',
                    y: 30.82530825308253,
                    drilldown: 'Afternoon'
                }, {
                    name: 'Evening',
                    y: 17.173171731717318,
                    drilldown: 'Evening'
                }, {
                    name: 'Night',
                    y: 32.16832168321683,
                    drilldown: 'Night'
                }]
            }],
            drilldown: {
                series: [{
                    name: 'Morning',
                    id: 'Morning',
                    data: [
                        ['CRIM SEXUAL ASSAULT', 0.2621892804921091] ,
                        ['ROBBERY', 2.374829829072757] ,
                        ['OTHER OFFENSE', 9.327887863661573] ,
                        ['PROSTITUTION', 1.7496092371300358] ,
                        ['THEFT', 21.791962890132606] ,
                        ['BATTERY', 15.761609438814096] ,
                        ['CRIMINAL TRESPASS', 2.768113749810921] ,
                        ['ASSAULT', 6.942973831492965] ,
                        ['OFFENSE INVOLVING CHILDREN', 0.42857863157363985] ,
                        ['PUBLIC PEACE VIOLATION', 0.5294206625321434] ,
                        ['DECEPTIVE PRACTICE', 3.433671154137044] ,
                        ['KIDNAPPING', 0.22689456965663288] ,
                        ['WEAPONS VIOLATION', 0.952957192557858] ,
                        ['INTERFERENCE WITH PUBLIC OFFICER', 0.07058942167095245] ,
                        ['ARSON', 0.13109464024605455] ,
                        ['MOTOR VEHICLE THEFT', 5.178238289719155] ,
                        ['OBSCENITY', 0.01008420309585035] ,
                        ['STALKING', 0.06554732012302728] ,
                        ['INTIMIDATION', 0.07563152321887762] ,
                        ['NARCOTICS', 9.620329753441233] ,
                        ['OTHER NARCOTIC VIOLATION', 0.0] ,
                        ['CRIMINAL DAMAGE', 9.569908737961981] ,
                        ['BURGLARY', 7.195078908889225] ,
                        ['HOMICIDE', 0.8117783492159532] ,
                        ['SEX OFFENSE', 0.5647153733676196] ,
                        ['PUBLIC INDECENCY', 0.005042101547925175] ,
                        ['LIQUOR LAW VIOLATION', 0.07058942167095245] ,
                        ['GAMBLING', 0.0806736247668028] 
                    ]
                }, {
                    name: 'Afternoon',
                    id: 'Afternoon',
                    data: [
                        ['CRIM SEXUAL ASSAULT', 0.24655312246553124] ,
                        ['ROBBERY', 2.913219789132198] ,
                        ['OTHER OFFENSE', 7.182481751824818] ,
                        ['PROSTITUTION', 0.38280616382806165] ,
                        ['THEFT', 22.536901865369018] ,
                        ['BATTERY', 19.464720194647203] ,
                        ['CRIMINAL TRESPASS', 2.913219789132198] ,
                        ['ASSAULT', 7.78264395782644] ,
                        ['OFFENSE INVOLVING CHILDREN', 0.5482562854825629] ,
                        ['PUBLIC PEACE VIOLATION', 0.5093268450932684] ,
                        ['DECEPTIVE PRACTICE', 3.6982968369829683] ,
                        ['KIDNAPPING', 0.28872668288726683] ,
                        ['WEAPONS VIOLATION', 0.7429034874290349] ,
                        ['INTERFERENCE WITH PUBLIC OFFICER', 0.055150040551500405] ,
                        ['ARSON', 0.08759124087591241] ,
                        ['MOTOR VEHICLE THEFT', 3.6561232765612326] ,
                        ['OBSCENITY', 0.006488240064882401] ,
                        ['STALKING', 0.042173560421735604] ,
                        ['INTIMIDATION', 0.07137064071370641] ,
                        ['NARCOTICS', 12.139497161394972] ,
                        ['OTHER NARCOTIC VIOLATION', 0.0032441200324412004] ,
                        ['CRIMINAL DAMAGE', 8.869424168694241] ,
                        ['BURGLARY', 4.087591240875913] ,
                        ['HOMICIDE', 0.9375506893755069] ,
                        ['SEX OFFENSE', 0.42173560421735606] ,
                        ['PUBLIC INDECENCY', 0.0] ,
                        ['LIQUOR LAW VIOLATION', 0.21086780210867803] ,
                        ['GAMBLING', 0.20113544201135442]
                    ]
                }, {
                    name: 'Evening',
                    id: 'Evening',
                    data: [
                        ['CRIM SEXUAL ASSAULT', 0.2445699644791242] ,
                        ['ROBBERY', 2.91737029057241] ,
                        ['OTHER OFFENSE', 6.987713270832121] ,
                        ['PROSTITUTION', 1.7236359401385897] ,
                        ['THEFT', 17.084958947184536] ,
                        ['BATTERY', 18.849356548069647] ,
                        ['CRIMINAL TRESPASS', 3.1735864438362547] ,
                        ['ASSAULT', 6.778081872707157] ,
                        ['OFFENSE INVOLVING CHILDREN', 0.4891399289582484] ,
                        ['PUBLIC PEACE VIOLATION', 0.518255400920049] ,
                        ['DECEPTIVE PRACTICE', 1.8284516392010715] ,
                        ['KIDNAPPING', 0.3144470971874454] ,
                        ['WEAPONS VIOLATION', 0.8734641588540151] ,
                        ['INTERFERENCE WITH PUBLIC OFFICER', 0.06405403831596111] ,
                        ['ARSON', 0.1222849822395621] ,
                        ['MOTOR VEHICLE THEFT', 4.757468118558202] ,
                        ['OBSCENITY', 0.0] ,
                        ['STALKING', 0.040761660746520705] ,
                        ['INTIMIDATION', 0.0757002271006813] ,
                        ['NARCOTICS', 14.109357712688524] ,
                        ['OTHER NARCOTIC VIOLATION', 0.0] ,
                        ['CRIMINAL DAMAGE', 12.799161474407502] ,
                        ['BURGLARY', 3.9189425260583475] ,
                        ['HOMICIDE', 0.9899260467012171] ,
                        ['SEX OFFENSE', 0.34938566354160605] ,
                        ['PUBLIC INDECENCY', 0.0] ,
                        ['LIQUOR LAW VIOLATION', 0.5706632504512898] ,
                        ['GAMBLING', 0.41926279624992724]
                    ]
                }, {
                    name: 'Night',
                    id: 'Night',
                    data: [
                        ['CRIM SEXUAL ASSAULT', 0.4973887092762994] ,
                        ['ROBBERY', 4.641258393434469] ,
                        ['OTHER OFFENSE', 5.788361104202934] ,
                        ['PROSTITUTION', 2.1170106938572495] ,
                        ['THEFT', 14.132056702312857] ,
                        ['BATTERY', 22.45710022382492] ,
                        ['CRIMINAL TRESPASS', 2.8320069634419296] ,
                        ['ASSAULT', 5.235016165133051] ,
                        ['OFFENSE INVOLVING CHILDREN', 0.385476249689132] ,
                        ['PUBLIC PEACE VIOLATION', 0.4134543645859239] ,
                        ['DECEPTIVE PRACTICE', 1.8931857746829146] ,
                        ['KIDNAPPING', 0.040412832628699324] ,
                        ['WEAPONS VIOLATION', 0.9357125093260383] ,
                        ['INTERFERENCE WITH PUBLIC OFFICER', 0.07149962695846804] ,
                        ['ARSON', 0.4258890823178314] ,
                        ['MOTOR VEHICLE THEFT', 6.313727928376026] ,
                        ['OBSCENITY', 0.0031086794329768714] ,
                        ['STALKING', 0.0217607560308381] ,
                        ['INTIMIDATION', 0.0435215120616762] ,
                        ['NARCOTICS', 9.985078338721712] ,
                        ['OTHER NARCOTIC VIOLATION', 0.006217358865953743] ,
                        ['CRIMINAL DAMAGE', 15.13305147973141] ,
                        ['BURGLARY', 3.935588162148719] ,
                        ['HOMICIDE', 1.7284257647351404] ,
                        ['SEX OFFENSE', 0.3885849291221089] ,
                        ['PUBLIC INDECENCY', 0.0031086794329768714] ,
                        ['LIQUOR LAW VIOLATION', 0.4538671972146232] ,
                        ['GAMBLING', 0.11812981845312111]
                    ]
                }]
            }
        });
    chartref.setSize(undefined,686)
}
