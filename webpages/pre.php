<html>
<head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script type="text/javascript" src="jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="loadAnalysis.js"></script>
    <script type="text/javascript" src="crimesAtTime.js"></script>
    <script type="text/javascript" src="timeAtCrimes.js"></script>
    <script type="text/javascript" src="daysFrequency.js"></script>
    <script src="https://code.highcharts.com/modules/data.js"></script>
    <script src="https://code.highcharts.com/modules/drilldown.js"></script>
</head>
<body>
<br>
<hr>
<center>
    <h1 style="color:blue">Original Data - 99999 rows</h1>
</center>
<hr>
<br>
<div id="container" style="margin: 0 auto"></div>
<div id="container1" style="margin: 0 auto"></div>
<br>
<hr>
<center>
    <h1 style="color:blue">Modified Data - 50857 rows</h1>
</center>
<hr>
<br>
<div id="container2"  style="margin: 0 auto"></div>
<div id="container3"  style="margin: 0 auto"></div>
<script type="text/javascript">
$(loadAll)
</script>
</body>
</html>