# Y Scale Log Chart
An API for creating **Line Charts with log scaling on the Y axis** using d3 calls.

## yScaleLogChart()
The initial constructor. Creates a **chart** object to use with d3's call function. 

## yScaleLogChart().margin(value)
Specifies margins. Expects an **object** with four values, all assigned to numbers: _top, right, bottom, and left_. If no value is provided, returns the current margins.

## yScaleLogChart().width(value)
Specifies the width of the chart, expects a single _number_. If no value is provided, instead returns the current width.

## yScaleLogChart().height(value)
Specifies the height of the chart, expects a single _number_. If no value is provided, instead returns the current height.

## yScaleLogChart().colors
Specifies what colors to use, expects an _array of colors_. If no value is provided, returns the current color scheme, which is defaulted to d3.schemeCategory10.

**PSA:** This library is incomplete and bug-ridden. If an error occurs, it may be because of the library and not an error on the user's part.