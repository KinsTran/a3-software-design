// Outline of how to render in outside classes
/*var myChart = chart().param1(value1).param2(value2);

var chartWrapper = d3.select('#my-div')
                .datum([dataSet]) 
                .call(myChart); 
*/

// Information on sunburst from https://bl.ocks.org/mbostock/4063423

// Initiation of chart
var chartWrapper = d3.select('#my-div').datum([dataSet]).call(myChart); 

// Update a chart parameter and the data (on some event handler)
myChart.param1(newValue);
chartWrapper.datum([newDataSet]).call(myChart);

var 