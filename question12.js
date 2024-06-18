//12. Write a program to reverse a word. Hint. for example Washington should be
//notgnihsaW, Hello should be olleH (2mks)

function reverseWord(word) {
    var reversedWord = '';

    // Iterate through the word from the end to the beginning
    for (var i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    return reversedWord;
}

// Test the function
var word1 = "Washington";
var word2 = "Hello";

console.log(reverseWord(word1));  // Should log "notgnihsaW"
console.log(reverseWord(word2));  // Should log "olleH"