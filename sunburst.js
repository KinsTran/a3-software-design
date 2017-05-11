// Outline of how to render in outside classes
/*var myChart = chart().param1(value1).param2(value2);

var chartWrapper = d3.select('#my-div')
                .datum([dataSet]) 
                .call(myChart); 
*/

// Information on sunburst from https://bl.ocks.org/mbostock/4063423

// Skeleton
function sunburst() {
  var width = 720, // default width
      height = 80; // default height

  function mySunburst(selection) { // selection = element, data = dataset
    // generate chart here, using `width` and `height`
  }

  mySunburst.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return my;
  };

  mySunburst.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return my;
  };

  return mySunburst;
};