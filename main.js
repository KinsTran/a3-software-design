"use strict"
$(function() {
    d3.csv("data/sp500.csv", function(error, data) {

        var myChart = yScaleLogChart();

        var chartWrapper = d3.select('#vis')
                        .datum(data) 
                        .call(myChart); 

/*var chart = timeSeriesChart()
          .x(function(d) { return formatDate.parse(d.date); })
          .y(function(d) { return +d.price; });

      var formatDate = d3.time.format("%b %Y");
    
      d3.csv("sp500.csv", function(data) {
        d3.select("#example")
            .datum(data)
            .call(chart);
      });
*/
    })
})