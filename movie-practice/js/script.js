'use strict'

let numberOfFilms = prompt('how many films did you watch?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt('The latest movie what you saw?', ''),
      b = prompt('What a grade of it', ''),
      c = prompt('The latest movie what you saw?', ''),
      d = prompt('What a grade of it', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);