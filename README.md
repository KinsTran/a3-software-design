# Y Scale Log Chart
An API for creating **Line Charts with log scaling on the Y axis** using d3 calls

## Data preparation
Data must be passed in with the form **(time, value)**. Make sure your times are properly formatted! ([d3.timeParse()](https://github.com/d3/d3-time-format/blob/master/README.md#timeParse))

## Usage details
First, initialize the data using the above in whatever date format of your choosing. Then, begin the chart using `var chartName = yScaleLogChart()`. You can then assign _attributes_ to the chart with the other methods

## Methods
### `yScaleLogChart()`
The initial constructor. Creates a **chart** object to use with d3's call function. 

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

## PSA:
This library is incomplete and bug-ridden. If an error occurs, it may be because of the library and not an error on the user's part. Please report any errors to **kinstran@uw.edu**.