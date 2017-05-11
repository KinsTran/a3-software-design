// Outline of how to render in outside classes
/*var myChart = chart().param1(value1).param2(value2);

var chartWrapper = d3.select('#my-div')
                .datum([dataSet]) 
                .call(myChart); 
*/

// https://bl.ocks.org/mbostock/3883245 and https://bl.ocks.org/curran/66d926fe73211fd650ec used heavily

function yScaleLogChart() {
  // Set defaults
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

  return myChart;
};