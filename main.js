"use strict"
$(function() {
    d3.csv("data/sp500.csv", function(error, data) {

        var formatDate = d3.time.format("%b %Y");
        var myChart = yScaleLogChart()
            .xValue(function(d) { return formatDate.parse(d.date); })
            .yValue(function(d) { return +d.price; });;
        console.log(data)
        var chartWrapper = d3.select('#vis')
                        .datum(data) 
                        .call(myChart); 
    })
})