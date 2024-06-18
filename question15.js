//15. Write a JavaScript program to get the difference between a given number
//and 13, if the number is greater than 13 return double the absolutedifference. (3mks)

function getDifference(number) {
    var difference = Math.abs(number - 13);

    if (number > 13) {
        return 2 * difference;
    } else {
        return difference;
    }
}

// Test the function
var num1 = 15;
var num2 = 10;

console.log(getDifference(num1));  // Should log 4 (double the absolute difference)
console.log(getDifference(num2));  // Should log 3 (absolute difference)