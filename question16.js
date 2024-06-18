//Create an object to store the following information about your favorite
//movie: title (a string), duration (a number), and star (an object of name,
//country and age strings). Create a function to log the movie information like
//so: &quot;Puff the Magic Dragon lasts for 30 minutes. Star: Puff is 45 years oldborn in Uganda.&quot; (2mks)

// Create an object to store movie information
var favoriteMovie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    star: {
        name: "Puff",
        country: "Uganda",
        age: 45
    }
};

// Create a function to log the movie information
function logMovieInfo(movie) {
    var starInfo = movie.star.name + " is " + movie.star.age + " years old born in " + movie.star.country + ".";
    console.log(movie.title + " lasts for " + movie.duration + " minutes. Star: " + starInfo);
}

// Call the function to log the movie information
logMovieInfo(favoriteMovie);