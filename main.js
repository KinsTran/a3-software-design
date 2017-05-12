"use strict"
$(function() {
    d3.csv("data/sp500.csv", function(error, data) {

        var formatDate = d3.timeParse("%b %Y");
        var myChart = yScaleLogChart()
            .xValue(function(d) { return formatDate(d.date); })
            .yValue(function(d) { return +d.price; })
            
        var chartWrapper = d3.select("#vis")
                        .datum(data) 
                        .call(myChart); 
    })
})