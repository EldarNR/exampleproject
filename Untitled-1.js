console.log("Сколько вы уже посмотрели фильмов? ");

const numberofFilms = {
    1: "Один",
    2: "Два",
    3: "Три",
    4: "Четыре",
    5: "Пять",
}

const person = +prompt("Введите число от 1 до 5");

if(person === "1" ){
    console.log(numberofFilms[1]);
}
else if(person === "2" ){
    console.log(numberofFilms[2]);
}
else if(person === "3" ){
    console.log(numberofFilms[3]);
}
else if(person === "4" ){
    console.log(numberofFilms[4]);
}
else if(person === "5" ){
    console.log(numberofFilms[5]);
}
else {
    console.log("Вы ввели некорректное значение");
}
return person;
