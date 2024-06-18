//13. Write a JavaScript program that accept two integers and display thelarger.(2mks)

function displayLargerNumber(num1, num2) {
    if (num1 > num2) {
        return "The larger number is: " + num1;
    } else if (num2 > num1) {
        return "The larger number is: " + num2;
    } else {
        return "Both numbers are equal.";
    }
}

// Test the function
var number1 = 10;
var number2 = 20;

console.log(displayLargerNumber(number1, number2)); 