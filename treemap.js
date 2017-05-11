// Outline of how to render in outside classes
/*var myChart = chart().param1(value1).param2(value2);

var chartWrapper = d3.select('#my-div')
                .datum([dataSet]) 
                .call(myChart); 
*/

// Information on treemap from https://bl.ocks.org/mbostock/4063582

function treemap() {
  // Set defaults
  var width = 800; 
  var height = 800; 
  var colorScale = d3.scaleOrdinal(d3.schemeCategory10) // Sets to preset scale from D3 as default

  function myTreemap(selection) { // selection = element, data = dataset
    selection.each(function(data) {
      var svg = d3.select(this).selectAll("svg").data([data])
      
    })
  }

  myTreemap.margin = function(value) {
    if(!arguments.length) {
      return margin;
    }
    margin = value;
    return myTreemap;
  }

  myTreemap.width = function(value) {
    if (!arguments.length) {
      return width;
    }
    width = value;
    return myTreemap;
  };

  myTreemap.height = function(value) {
    if (!arguments.length) {
      return height;
    }
    height = value;
    return myTreemap;
  };

  myTreemap.colors = function(value) {
    if(!arguments.length) {
      return colorScale.range();
    }
    colorScale.range(value);
    return myTreemap
  }

  myTreemap.categories = function(value) {
    if(!arguments.length) {
      return colorScale.domain();
    }
    colorScale.domain(value);
    return myTreemap
  }

  return myTreemap;
};