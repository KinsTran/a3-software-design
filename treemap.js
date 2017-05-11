// Outline of how to render in outside classes
/*var myChart = chart().param1(value1).param2(value2);

var chartWrapper = d3.select('#my-div')
                .datum([dataSet]) 
                .call(myChart); 
*/

// Information on treemap from https://bl.ocks.org/mbostock/4063582

// Skeleton
function treemap() {
  // Set defaults
  var width = 800; 
  var height = 800; 

  function myTreemap(selection) { // selection = element, data = dataset
    selection.each(function(data) {

    })
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

  return myTreemap;
};