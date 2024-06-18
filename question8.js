//Write a JavaScript function that takes in a parameter &#39;n&#39; and returns the first
//&#39;n&#39; elements of the array. (2mks)

function getFirstNElements(array, n) {
    // Use slice to get the first n elements
    var firstNElements = array.slice(0, n);
    
    return firstNElements;
}

// Test the function
var arr = [1, 2, 3, 4, 5];
var n = 3;
var result = getFirstNElements(arr, n);
console.log(result);  // Should log [1, 2, 3]