//Write a JS function that checks if a variable is an array or not, log “Is Array”
//if true and “Not Array” if false. (2mks)

function checkArray(variable) {
    if (Array.isArray(variable)) {
        console.log("Is Array");
    } else {
        console.log("Not Array");
    }
}

// Test the function
checkArray([1, 2, 3, 4, 5]);  // Should log "Is Array"
checkArray("hello rose");    // Should log "Not Array"
checkArray(123);        // Should log "Not Array"