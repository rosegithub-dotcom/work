// Write a program to display the current day and time in the following format.
//Sample Output : Today is : Tuesday. Current time is : 10 AM : 30 : 38.


function getCurrentDayAndTime() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12

    var formattedTime = hours + ' ' + period + ' : ' + minutes + ' : ' + seconds;

    return 'Today is : ' + days[currentTime.getDay()] + '. Current time is : ' + formattedTime;
}

// Display the current day and time
console.log(getCurrentDayAndTime());