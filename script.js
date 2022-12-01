'use strict';

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?",'');
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    generes : [],
    privat : false
};
const a = prompt('Один из последних просмотренных фильмов?',"");
const b = prompt('На сколько оцениете его?', "");
const c = prompt('Один из последних просмотренных фильмов?',"");
const d = prompt('На сколько оцениете его?', "");

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);