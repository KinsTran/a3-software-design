// Outline of how to render in outside classes
/*var myChart = chart().param1(value1).param2(value2);

var chartWrapper = d3.select('#my-div')
                .datum([dataSet]) 
                .call(myChart); 
*/

function yScaleLogChart() {
  // Set defaults
  var margin = {
      top: 40,
      right: 10,
      bottom: 10,
      left: 10
  }
  var width = 800; 
  var height = 800; 
  var colorScale = d3.scaleOrdinal(d3.schemeCategory10) // Sets to preset scale from D3 as default

  function myChart(selection) { // selection = element, data = dataset
    selection.each(function(data) {
      var svg = d3.select(this).selectAll("svg").data([data])

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

  myChart.colors = function(value) {
    if(!arguments.length) {
      return colorScale.range();
    }
    colorScale.range(value);
    return myChart
  }

  myChart.categories = function(value) {
    if(!arguments.length) {
      return colorScale.domain();
    }
    colorScale.domain(value);
    return myChart
  }

  return myChart;
};