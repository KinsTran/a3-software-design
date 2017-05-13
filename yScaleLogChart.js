"use strict"

// Code from https://bl.ocks.org/mbostock/3883245 and https://bl.ocks.org/curran/66d926fe73211fd650ec HEAVILY used

function yScaleLogChart() {
  // Set default values
  var margin = {
      top: 50,
      right: 20,
      bottom: 100,
      left: 100
  }
  var width = 900; 
  var height = 560; 
  var xScale = d3.scaleTime().rangeRound([0, width]);
  var yScale = d3.scaleLog().range([height, 0]);
  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yScale).ticks(20, "") // https://bl.ocks.org/mbostock/5537697 for log scale ticks
  var xValue = function(d){return d[0]} // Values by default are set to first two values in array
  var yValue = function(d){return d[1]}
  var color = "#228b22" // This one is more arbitrary than the other defaults: I just like dark green
  var line = d3.line().x(X).y(Y)  // Alternatively you can think of it as being dark green to represent money since many line charts plot time vs money
  var lineWidth = 1.5 
  var title = ""
  var xAxisTitle = ""
  var yAxisTitle = ""

  function myChart(selection) { // selection = element, data = dataset
    selection.each(function(data) {
      // Convert data to standard representation greedily;
      // this is needed for nondeterministic accessors.
      data = data.map(function(d, i) { // Maps every x,y pair into an array
        return [xValue.call(data, d, i), yValue.call(data, d, i)];
      });
      
      // Update the x-scale.
      xScale.domain(d3.extent(data, function(d) { return d[0]; }))
          .rangeRound([0, width - margin.left - margin.right]);

      // Update the y-scale.
      yScale.domain([d3.min(data, function(d) {return d[1] / 2}), d3.max(data, function(d) { return d[1]; })]) // Makes sure graph is always scaled to minimum and maximums of the graph
          .range([height - margin.top - margin.bottom, 0]) // If I scaled to just minimum, it would be potentially misleading: if I always scaled to 0.1, the graph would at times be too big
          // Compromise by scaling to d[1] / 2, to show more of the graph, indicating it's log, while still cutting out some unneccesary portion
      // Select the svg element, if it exists.
      var svg = d3.select(this).selectAll("svg").data([data]).enter().append("svg")
      // Otherwise, create the skeletal chart.
      var gEnter = svg.append("g"); // Only occurs if there is an svg that must be appended
      gEnter.append("path").attr("class", "line");
      gEnter.append("g").attr("class", "x axis");
      gEnter.append("g").attr("class", "y axis");

      gEnter.append("text").attr("class", "title")
            .attr("transform", "translate(" + width / 3 + ", -20)")
            .style("text-anchor", "middle")
            .text(title)

      gEnter.append("text").attr("class", "title")
            .attr("transform", "translate(" + width / 3 + ","  + (height - margin.bottom) + ")")
            .style("text-anchor", "middle")
            .text(xAxisTitle)

      gEnter.append("text").attr("class", "title")
            .attr("transform", "rotate(-90) translate(" + -(height / 3) + ", -40)")
            .style("text-anchor", "middle")
            .text(yAxisTitle)

      // Update the outer dimensions.
      svg.attr("width", width)
          .attr("height", height)

      // Update the inner dimensions.
      var g = svg.select("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

      // Update the line path.
      g.select(".line")
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", lineWidth)
        .attr("d", line)

      // Update the x-axis.
      g.select(".x.axis")
          .attr("transform", "translate(0," + yScale.range()[0] + ")")
          .call(xAxis)

        // Update the y-axis.
      g.select(".y.axis")
          .call(yAxis)
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

  myChart.title = function(value) {
    if(!arguments.length) {
      return title;
    }
    title = value;
    return myChart;
  }

  myChart.xAxisTitle = function(value) {
    if(!arguments.length) {
      return xAxisTitle;
    }
    xAxisTitle = value;
    return myChart;
  }

  myChart.yAxisTitle = function(value) {
    if(!arguments.length) {
      return yAxisTitle;
    }
    yAxisTitle = value;
    return myChart;
  }

// The other parameters are optional, however these two are REQUIRED if there are more than two values in array
  myChart.xValue = function(value) { // Probably better to think of them as columns
    if (!arguments.length) return xValue;
    xValue = value;
    return myChart;
  };

  myChart.yValue = function(value) {
    if (!arguments.length) return yValue;
    yValue = value;
    return myChart;
  };

  // The x-accessor for the path generator; xScale ∘ xValue.
  function X(d) {
    return xScale(d[0]);
  }

  // The x-accessor for the path generator; yScale ∘ yValue.
  function Y(d) {
    return yScale(d[1]);
  }

  return myChart;
};