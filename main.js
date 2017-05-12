"use strict"
$(function() {

})
// Outline of how to render in outside classes
var myChart = chart().param1(value1).param2(value2);

var chartWrapper = d3.select('#vis')
                .datum([dataSet]) 
                .call(myChart); 

