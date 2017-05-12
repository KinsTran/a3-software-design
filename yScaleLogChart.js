"use strict"

// Code from https://bl.ocks.org/mbostock/3883245 and https://bl.ocks.org/curran/66d926fe73211fd650ec HEAVILY used

function yScaleLogChart() {
  // Set default values
  var margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50
  }
  var width = 900; 
  var height = 560; 
  var xScale = d3.scaleTime().rangeRound([0, width]);
  var yScale = d3.scaleLog().range([height, 0]);
  var xAxis = d3.axisBottom().scale(xScale).tickSize(6, 0);
  var yAxis = d3.axisLeft(yScale)
  var xValue = function(d){return d[0]} // Values by default are set to first two values in array
  var yValue = function(d){return d[1]}
  var color = "#228b22" // This one is more arbitrary than the other defaults: I just like dark green
  var lineWidth = 1.5 

  function myChart(selection) { // selection = element, data = dataset
    selection.each(function(data) {
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
          .range([height, 0]);

      // Select the svg element, if it exists.
      var svg = d3.select(this).selectAll("svg").data([data]);

      // Otherwise, create the skeletal chart.
      var gEnter = svg.enter().append("svg").append("g"); // Only occurs if there is an svg that must be appended
      gEnter.append("path").attr("class", "area");
      gEnter.append("path").attr("class", "line");
      gEnter.append("g").attr("class", "x axis");


      // Update the outer dimensions.
      svg.attr("width", width)
          .attr("height", height);

      // Update the inner dimensions.
      var g = svg.select("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // Update the area path.
      g.select(".area")
          .attr("d", area.y0(yScale.range()[0]));

      // Update the line path.
      g.select(".line")
          .attr("d", line);

      // Update the x-axis.
      g.select(".x.axis")
          .attr("transform", "translate(0," + yScale.range()[0] + ")")
          .call(xAxis);

        // Update the x-axis.
      g.select(".y.axis")
          .attr("transform", "translate(" + xScale.range()[0] + ", 0)")
          .call(yAxis);
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

// The other parameters are optional, however these two are REQUIRED
  myChart.xValue = function(_) {
    if (!arguments.length) return xValue;
    xValue = _;
    return chart;
  };

  myChart.yValue = function(_) {
    if (!arguments.length) return yValue;
    yValue = _;
    return chart;
  };

  return myChart;
};