"use strict"
// Outline of how to render in outside classes
/*var myChart = chart().param1(value1).param2(value2);

var chartWrapper = d3.select('#my-div')
                .datum([dataSet]) 
                .call(myChart); 
*/

// Code from https://bl.ocks.org/mbostock/3883245 and https://bl.ocks.org/curran/66d926fe73211fd650ec used heavily

function yScaleLogChart() {
  // Set arbitrary default values
  var margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50
  }
  var width = 900; 
  var height = 560; 
  var x = d3.scaleTime().rangeRound([0, width]);
  var y = d3.scaleLog().rangeRound([height, 0]);
  var color = "#228b22" 
  var lineWidth = 1.5 

  function myChart(selection) { // selection = element, data = dataset
    selection.each(function(data) {
      var svg = d3.select(this).selectAll("svg").data([data])
      // Convert data to standard representation greedily;
      // this is needed for nondeterministic accessors.
      data = data.map(function(d, i) {
        return [xValue.call(data, d, i), yValue.call(data, d, i)];
      });

      // Update the x-scale.
      xScale.domain(d3.extent(data, function(d) { return d[0]; }))
          .rangeRound([0, width]);

      // Update the y-scale.
      yScale.domain([0, d3.max(data, function(d) { return d[1]; })])
          .rangeRound([height, 0]);
    })
  }

  myChart.margin = function(value) {
    if(!arguments.length) {
      return margin;
    }
    margin = value;
    return myChart;
  }

  myChart.width = function(value) {
    if (!arguments.length) {
      return width;
    }
    width = value;
    return myChart;
  };

  myChart.height = function(value) {
    if (!arguments.length) {
      return height;
    }
    height = value;
    return myChart;
  };

  myChart.color = function(value) {
    if(!arguments.length) {
      return color;
    }
    color = value;
    return myChart;
  }

  myChart.lineWidth = function(value) {
    if(!arguments.length) {
      return lineWidth;
    }
    lineWidth = value;
    return myChart
  }

  // Accessor functions that DO NOT update, but will return a value if given appropriate input
  function X(d) { // POSSIBLY REMOVE
    return xScale(d[0]);
  }

  function Y(d) {
    return yScale(d[1]);
  }

  return myChart;
};