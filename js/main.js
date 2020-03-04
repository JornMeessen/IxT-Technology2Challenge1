 window.onload = function() {
         document.getElementById("chartMeter").innerHTML = chartMeter(); 
         document.getElementById("chartTable").innerHTML = chartTable();
         document.getElementById("donutchart").innerHTML = donutChart();
      }

      //google charts meter
        function chartMeter(){

        google.charts.load('current', {'packages':['gauge']});
        google.charts.setOnLoadCallback(drawChart);

          function drawChart() {

            var data = google.visualization.arrayToDataTable([
              ['Label', 'Value'],
              ['Fuel', 80],
            ]);

            var options = {
              height: 200,
              redFrom: 90, redTo: 100,
              yellowFrom:75, yellowTo: 90,
              minorTicks: 5,
              chartArea:{width:"100%",height:"100%"},
            };

            var chart = new google.visualization.Gauge(document.getElementById('chartMeter'));

            chart.draw(data, options);

            setInterval(function() {
              data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
              chart.draw(data, options);
            }, 13000);
          }

        };

      //google charts table
        function chartTable(){
      
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ['month',  'Drink', 'Hot meals', 'Cold meals'],
            ['January',  8.4, 7.9, 7.9],
            ['February', 6.9, 6.5, 7.9],
            ['March', 6.5, 6.4, 7.9],
          ]);

          var options = {
            isStacked: true,
            height: 300,
            width: '100%',
            enableInteractivity: false,
            legend: 'none',
            backgroundColor: 'none',
            hAxis: { textPosition: 'none'},           
            chartArea:{width:"80%",height: "100%", top: 0, left: 'auto', right: 'auto', bottom: 0},
          };

          var chart = new google.visualization.SteppedAreaChart(document.getElementById('chartTable'));

          chart.draw(data, options);
        }

        };

    //google donutchart
    	function donutChart(){

    	google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['activity', 'persentage'],
          ['Work',     40],
          ['Eat',      10],
          ['Leisure',  20],
          ['Sleep',    50]
        ]);

        var options = {
          pieHole: 0.4,
          legend: 'none',
          width: '100%',
          height: 200,
          backgroundColor: 'none',
          enableInteractivity: false,
          chartArea:{width:"90%",height:"80%", top: 0, left: 'auto', right: 'auto', bottom: 0},
          pieSliceBorderColor: 'none',
          fontSize: 15,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
 

      	};


(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

