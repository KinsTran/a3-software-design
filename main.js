"use strict"
$(function() {
    d3.csv("data/sp500.csv", function(error, data) {

        var formatDate = d3.timeParse("%b %Y");
        var myChart = yScaleLogChart()
            .xValue(function(d) { return formatDate(d.date); })
            .yValue(function(d) { return +d.price; })
            .width(600)
            .height(200)
            .color("#AAA")
            .lineWidth(4)
            .xAxisLabel("X Axis")
            .yAxisLabel("Y Axis")
            
        var chartWrapper = d3.select("#vis")
                        .datum(data) 
                        .call(myChart); 
    })
})