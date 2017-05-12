# Y Scale Log Chart
An API for creating **Line Charts with log scaling on the Y axis** using d3 calls

## References
Most of the code is lifted from https://bl.ocks.org/mbostock/3883245 and https://bl.ocks.org/curran/66d926fe73211fd650ec.

## Data preparation
Data must be passed in with the form **(time, value)**. Make sure your times are properly formatted! ([d3.timeParse()](https://github.com/d3/d3-time-format/blob/master/README.md#timeParse))

## Usage details
First, **copy paste the following** into your head:
```
<script src="https://d3js.org/d3.v4.js"></script> // Only if you are not already using d3
<script src="yScaleLogChart.js"></script>
```

Then, initialize the data using the above data preparation technique in whatever date format of your choosing. After that, begin the chart using `var chartName = yScaleLogChart().xValue(function).yValue(function)`. The xValue and yValue functions are only required **if the data passed in has more than just the two values of interest**. You can then assign _attributes_ to the chart with the other methods.

## Methods
### `yScaleLogChart()`
The initial constructor. Creates a **chart** object to use with d3's call function. 

### `chartName().xValue(function)`
What to plot for the _x value_ of the line graph. Takes in a _function_ of the form `function(d) {return d.xValue}`, where d.xValue is the variable of choice. If no value is given, returns the current xValue to be plotted. Expects the values to be plotted to be in **time** form. By default, takes in the values from the first slot of given array.

### `chartName().yValue(function)`
What to plot for the _y value_ of the line graph. Takes in a _function_ of the form `function(d) {return d.yValue}`, where d.yValue is the variable of choice. If no value is given, returns the current yValue to be plotted.  Expects the values to be plotted to be **numbers**. By default, takes in the values from the second slot of given array.

### `chartName().margin(value)`
Specifies margins. Expects an **object** with four values, all assigned to numbers: _top, right, bottom, and left_. If no value is provided, returns the current margins.

### `chartName().width(value)`
Specifies the width of the chart, expects a single _integer_. If no value is provided, instead returns the current width.

### `chartName().height(value)`
Specifies the height of the chart, expects a single _integer_. If no value is provided, instead returns the current height.

### `chartName().color`
Specifies what colors to use, expects an _array of colors_. If no value is provided, returns the current color scheme, which is defaulted to _#228b22_, forest green.

### `chartName().lineWidth`
Specifies the width of the line drawn, expects a single _integer_. If no value is provided, returns the current lineWidth.