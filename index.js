myEach(collection, callback) {
// Parameter(s):
// a collection (either an object or an array)
// a callback function

// Behavior:
// Iterates over the collection of elements, passing each element in turn to the callback function. 

// Return value:
// The original, unmodified collection
    return collection
}

// Example myEach function calls:

// myEach([1, 2, 3], alert);
// => alerts each number in turn and returns the original collection

// myEach({one: 1, two: 2, three: 3}, alert);
// => alerts each number value in turn and returns the original collection

myMap(collection, callback) {
    // Parameter(s):
    // a collection (either an object or an array)
    // a callback function

    // Behavior:
    // Produces a new array of values by mapping each value in collection 
    // through a transformation function, callback. 

    // Return value:
    // A new array (the original array is unmodified)
    return newArray
}

// Example myMap function calls:

// myMap([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]

// myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// => [3, 6, 9]

myReduce(collection, callback, acc) {
    // Parameter(s):

    // a collection (either an object or an array)
    // a callback function
    // a starting value for the accumulator (optional)

    // Behavior:
    // Reduce iterates through a collection of values and boils it down into a single value. acc (short for 
    //  accumulator) starts at the value that's passed in as an argument, and with each successive step is 
    //  updated to the return value of callback. If a start value is not passed to myReduce, the first value 
    //  in the collection should be used as the start value.
    // The callback is passed three arguments: the current value of acc, the current element/value in our 
    //  iteration, and a reference to the entire collection.

    // Hint: For the case when a start value for the accumulator is not passed in as an argument, think about 
    //  how you'll need to adjust your function to account for the fact that the first element of the 
    //  collection has already been accounted for.

    // Return value:
    // A single value (original collection is unmodified)
    return total
}

// Example myReduce calls:

// myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
// => 16

// myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });
// => 6