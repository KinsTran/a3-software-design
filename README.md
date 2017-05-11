# Treemap
An API for creating **Treemap charts** using d3 calls, which show off 

## Setup
When data is passed to the Treemap function, it must be **properly formatted**. Data must be _nested_ (d3.nest().key(function(d) {return d.key}).entries(data)), before grabbing the _root node_ (d3.hierarchy(values: nestedData), function(d) {return d.values}) to pass in.

## Treemap()
The initial constructor. Creates a **Treemap** object to use with d3's call function. 




**PSA:** This library is incomplete and bug-ridden. If an error occurs, it may be because of the library and not an error on the user's part.