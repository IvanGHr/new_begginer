'use strict'

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('how many films did you watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('how many films did you watch?', '')
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

function rememberMyFilms () {
	for (let i = 0; i < 2; i++) {
		const a = prompt('The latest movie what you saw?', ''),
			b = prompt('What a grade of it', '')

		if (a != '' && b != '' && a != null && b != null && a.length < 50) {
			personalMovieDB.movies[a] = b
		} else {
			i--
		}
	}
}

rememberMyFilms();

function detectPersonalLevel () {
	if (personalMovieDB.count < 10) {
		alert('To little movies')
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		alert('You are classic viewer')
	} else if (personalMovieDB.count > 30) {
		alert('You are cinephile')
	} else {
		alert('Error')
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (hidden == false) {
		console.log(personalMovieDB)
	}
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number of ${i}`,'');
	}
}

writeYourGenres();

console.log(personalMovieDB);