//Write a javascript function to square numbers from 1 to 6. Display the
//results as unordered list with such statement for all the 6 numbers. ‘ The
//square of 1 is 1’ (2mks) 

function squareNumbers() {
    var results = [];

    for (var i = 1; i <= 6; i++) {
        var square = i * i;
        var statement = "The square of " + i + " is " + square;
        results.push(statement);
    }

    return results;
}

// Call the function and log the results
var squares = squareNumbers();
squares.forEach(function(item) {
    console.log(item);
});