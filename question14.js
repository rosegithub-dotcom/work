//Write a JavaScript forloop that will iterate from 0 to 15. For each iteration, it
//will check if the current number is odd or even, and display a message to thescreen. (3mks)

for (var i = 0; i <= 15; i++) {
    if (i === 0) {
        console.log(i + " is even");
    } else if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}