//STEP 1
window.console.log("Step 1");
var movies = ["Titanic", "Forrest Gump", "Manhattan", "Blood Diamond", "Gladiator"];
window.console.log(movies[1]);

//STEP 2
window.console.log("Step 2");
var movies = new Array(5);
movies[0] = "Titanic";
movies[1] = "Forrest Gump";
movies[2] = "Manhattan";
movies[3] = "Blood Diamond";
movies[4] = "Gladiator";
window.console.log(movies[0]);

//STEP 3
window.console.log("Step 3");
var movies = new Array(5);
movies[0] = "Titanic";
movies[1] = "Forrest Gump";
movies[2] = "Manhattan";
movies[3] = "Blood Diamond";
movies[4] = "Gladiator";

movies.splice(2, 0, "Cast Away")
window.console.log(movies.length);

//STEP 4
window.console.log("Step 4");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Forrest Gump";
movies[2] = "Manhattan";
movies[3] = "Blood Diamond";
movies[4] = "Gladiator";
movies.shift();
window.console.log(movies);

//STEP 5
window.console.log("Step 5");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Forrest Gump";
movies[2] = "Manhattan";
movies[3] = "Blood Diamond";
movies[4] = "Gladiator";
movies[5] = "Cast Away";
movies[6] = "Harry Potter";

for (var i = 0; i < movies.length; i++) {
	window.console.log(movies[i]);
}

//STEP 6
window.console.log("Step 6");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Forrest Gump";
movies[2] = "Manhattan";
movies[3] = "Blood Diamond";
movies[4] = "Gladiator";
movies[5] = "Cast Away";
movies[6] = "Harry Potter";

for (var i in movies) {
	window.console.log(movies[i]);
}

//STEP 7
window.console.log("Step 7");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Forrest Gump";
movies[2] = "Manhattan";
movies[3] = "Blood Diamond";
movies[4] = "Gladiator";
movies[5] = "Cast Away";
movies[6] = "Harry Potter";

movies.sort();
for (var i in movies) {
	window.console.log(movies[i]);
}


//STEP 8
window.console.log("Step 8");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Forrest Gump";
movies[2] = "Manhattan";
movies[3] = "Blood Diamond";
movies[4] = "Gladiator";
movies[5] = "Cast Away";
movies[6] = "Harry Potter";


var leastFavMovies = [];
leastFavMovies[0] = "Kalank";
leastFavMovies[1] = "Panipat";
leastFavMovies[2] = "Tashan";

window.console.log('  ');
window.console.log('Movies I like:');
window.console.log('  ');
for (var i = 0; i < movies.length; i++) {
	window.console.log(movies[i]);
}
window.console.log('  ');
window.console.log('Movies I regret watching:');
window.console.log('  ');
for (var i = 0; i < leastFavMovies.length; i++) {
	window.console.log(leastFavMovies[i]);
}

//STEP 9

window.console.log("Step 9");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Forrest Gump";
movies[2] = "Manhattan";
movies[3] = "Blood Diamond";
movies[4] = "Gladiator";
movies[5] = "Cast Away";
movies[6] = "Harry Potter";

var leastFavMovies = [];
leastFavMovies[0] = "Kalank";
leastFavMovies[1] = "Panipat";
leastFavMovies[2] = "Tashan";


movies = movies.concat(leastFavMovies);
movies.sort().reverse();

for (var i = 0; i < movies.length; i++) {
	window.console.log(movies[i]);
}

//STEP 10

window.console.log("Step 10");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Forrest Gump";
movies[2] = "Manhattan";
movies[3] = "Blood Diamond";
movies[4] = "Gladiator";
movies[5] = "Cast Away";
movies[6] = "Harry Potter";

var leastFavMovies = [];
leastFavMovies[0] = "Kalank";
leastFavMovies[1] = "Panipat";
leastFavMovies[2] = "Tashan";


movies = movies.concat(leastFavMovies);
movies.sort().reverse();

window.console.log(movies.pop());