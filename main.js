"use strict"
$(function() {
    d3.csv("data/sp500.csv", function(error, data) {
        
        var myChart = yScaleLogChart();

        var chartWrapper = d3.select('#vis')
                        .datum([dataSet]) 
                        .call(myChart); 

    })
})