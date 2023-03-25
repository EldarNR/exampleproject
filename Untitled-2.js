const question = +prompt("How many you watching films?", "");

const personalMovieDB = {
    count:{
        
    },
    movies:{
        "logan":"8.1",
        "titanic":"7.5",
        "intstellar":"9.5",
    },
    actors:{

    },
    genres:[],
    private:false,
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
b = prompt("На сколько вы оцените его?", ""),
c = a,
d = b;

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);