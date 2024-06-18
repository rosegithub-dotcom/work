//Write a JavaScript function that accepts a string as a parameter and converts
//the first letter of each word of the string in upper case. (2mks)

function capitalizeFirstLetterOfEachWord(str) {
    // Split the string into an array of words
    var words = str.split(' ');

    // Iterate through the array and capitalize the first letter of each word
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the capitalized words back into a string
    var capitalizedStr = words.join(' ');

    return capitalizedStr;
}

// Test the function
var inputString = "hello world";
var capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
console.log(capitalizedString);  // Should log "Hello World"