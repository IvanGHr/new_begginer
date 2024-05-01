'use strict'

let numberOfFilms = +prompt('how many films did you watch?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('The latest movie what you saw?', ''),
		  b = prompt('What a grade of it', '')

    if (
			a != '' &&
			b != '' &&
			a != null &&
			b != null &&
			a.length < 50
		) {
			personalMovieDB.movies[a] = b
		} else {
			i--;
		}
};

if (personalMovieDB.count < 10) {
    alert('To little movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('You are classic viewer');
} else if (personalMovieDB.count > 30) {
    alert('You are cinephile')
} else {
    alert('Error')
};

console.log(personalMovieDB);