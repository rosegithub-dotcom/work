//Write a JavaScript function that takes a string which has lower and upper
//case letters as a parameter and converts upper case letters to lower case, and
//lower case letters to upper case. (2mk)

function toggleCase(str) {
    var toggledStr = '';

    for (var i = 0; i < str.length; i++) {
        var char = str[i];

        if (char === char.toUpperCase()) {
            toggledStr += char.toLowerCase();
        } else if (char === char.toLowerCase()) {
            toggledStr += char.toUpperCase();
        } else {
            toggledStr += char;
        }
    }

    return toggledStr;
}

// Test the function
var inputString = "Hello World";
var toggledString = toggleCase(inputString);
console.log(toggledString);  