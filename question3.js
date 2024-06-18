//Write a javascript function that takes in a temperature value in fahrenheit
//and returns its equivalent in celsius. Hint To convert temperatures in
//degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9). 

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

var fahrenheitValue = 68; // Change this to any Fahrenheit temperature you want to convert
var celsiusValue = fahrenheitToCelsius(fahrenheitValue);
console.log(fahrenheitValue + "°F is equal to " + celsiusValue.toFixed(2) + "°C");