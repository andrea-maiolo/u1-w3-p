/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: 
  name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = { name: "Andrea", surname: "Maiolo", age: 29 };

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

if (me.age) {
  delete me.age;
}

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills",
   contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["HTML", "CSS", "JavaScript"];

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.unshift("Python");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
  return Math.ceil(Math.random() * 6);
};

// console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "sono uguali";
  }
};

console.log(whoIsBigger(25, 85));
console.log(whoIsBigger(9, 2));
console.log(whoIsBigger(5, 5));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
  fai le prime lettere uppercase
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (string) {
  let myArr = string.split("");
  myArr[0] = myArr[0].toUpperCase();
  for (let i = 0; i < myArr.length; i++) {
    const ele = myArr[i];
    if (ele === " ") {
      myArr[i + 1] = myArr[i + 1].toUpperCase();
    }
  }
  return myArr.join("");
};

console.log(splitMe("I love coding"));
console.log(splitMe("ciao io sono una stringa"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (string, boolean) {
  if (boolean) {
    string = string.slice(1);
    return string;
  } else {
    string = string.slice(0, string.length - 1);
    return string;
  }
};

console.log(deleteOne("hello", true));
console.log(deleteOne("hello", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (string) {
  let result = [];
  const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < string.length; i++) {
    const ele = string[i];
    if (!numArray.includes(ele)) {
      result.push(ele);
    }
  }
  return result.join("");
};

//con regexp e replace
const onlyLetters2 = function (string) {
  //tutte le cifre in maniera globale
  let myRegex = /\d/g;
  let result = string.replace(myRegex, "");
  return result;
};

console.log(onlyLetters("I have 4 dogs"));
console.log(onlyLetters("i have 45 dogs and 78 cats"));
console.log(onlyLetters2("I have 4 dogs"));
console.log(onlyLetters2("i have 45 dogs and 78 cats"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true
   se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (string) {
  if (string.includes("@") && string.indexOf("@") > 0 && string.indexOf("@") < string.indexOf(".")) {
    return true;
  } else {
    return false;
  }
};

console.log(isThisAnEmail("andrea@gmail.com"));
console.log(isThisAnEmail("@andrea.gmail.com"));
console.log(isThisAnEmail("andrea#gmailcom"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function () {
  const arrDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const indexToCheck = currentDate.getDay();
  return arrDays[indexToCheck];
};

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, 
  e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti 
  i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (num) {
  const myObj = { sum: 0, values: [] };

  for (let i = 0; i < num; i++) {
    let currentValue = dice();
    myObj.sum += currentValue;
    myObj.values.push(currentValue);
  }
  return myObj;
};

console.log(rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function (date) {
  const currentDate = new Date();
  let dateFormat = new Date(date);
  let differenceInMilliseconds = currentDate - dateFormat;
  let sec = differenceInMilliseconds / 1000;
  let min = sec / 60;
  let hours = min / 60;
  let days = hours / 24;
  return Math.floor(days);
};

console.log(howManyDays("2022-04-11"));
console.log(howManyDays("2025-03-27"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function () {
  const currentDate = new Date();
  // const myBday = new Date("03-28");
  const myBday = new Date("04-03");

  if (currentDate.getMonth() + 1 == myBday.getMonth() + 1 && currentDate.getDate() == myBday.getDate()) {
    return true;
  } else {
    return false;
  }
};

console.log(isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto 
  fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = function (obj, string) {
  const objCopy = structuredClone(obj);
  if (objCopy[string]) {
    delete objCopy[string];
    return objCopy;
  }
};

console.log(deleteProp(movies[9], "Title"));
console.log(deleteProp(movies[0], "imdbID"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function (array) {
  let years = [];
  for (let i = 0; i < array.length; i++) {
    const movie = array[i];
    years.push(movie.Year);
  }
  let sorted = years.sort();
  let newestMovieYear = sorted[sorted.length - 1];

  for (let j = 0; j < array.length; j++) {
    const ele = array[j];
    if (ele.Year === newestMovieYear) {
      return array[j];
    }
  }
};

console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function (array) {
  return array.length;
};

console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film 
  contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function (array) {
  let onlyYears = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    onlyYears.push(element.Year);
  }
  return onlyYears;
};

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel 
  millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function (array) {
  const nineteenHundreds = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.Year < 2000) {
      nineteenHundreds.push(element);
    }
  }
  return nineteenHundreds;
};

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti
  gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function (array) {
  let sumYears = 0;
  for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    sumYears += parseInt(ele.Year);
  }
  return sumYears;
};

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e
   ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (string) {
  return movies.filter((movie) => movie.Title.toLowerCase().includes(string.toLowerCase()));
};

console.log("searh by title", searchByTitle("Avengers: Infinity War"));
console.log("searh by title", searchByTitle("OF"));
console.log("searh by title", searchByTitle("inity"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e 
  ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono 
  la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function (string) {
  const myObj = { match: [], unmatch: [] };
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.Title.toLowerCase().includes(string.toLowerCase())) {
      myObj.match.push(movie);
    } else {
      myObj.unmatch.push(movie);
    }
  }
  return myObj;
};

console.log("search and divide", searchAndDivide("the"));
console.log("search and divide", searchAndDivide("avenger"));
console.log("search and divide", searchAndDivide("flies"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e 
  ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function (num) {
  const moviesCopy = structuredClone(movies);
  moviesCopy.splice(num, 1);
  return moviesCopy;
};

console.log(removeIndex(0));
console.log(removeIndex(8));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const getContainer = function () {
  let result = document.getElementById("container");
  return result;
};

console.log(getContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const getAllTd = function () {
  let allTd = document.getElementsByTagName("td");
  return allTd;
};

console.log(getAllTd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printAllTd = function () {
  let allTd = document.getElementsByTagName("td");
  for (let i = 0; i < allTd.length; i++) {
    const ele = allTd[i];
    console.log(ele.innerText);
  }
};

printAllTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const bgLink = function () {
  let allLinks = document.getElementsByTagName("a");
  for (let i = 0; i < allLinks.length; i++) {
    const element = allLinks[i];
    element.style.backgroundColor = "red";
  }
};

bgLink();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addOne = function () {
  let myList = document.getElementById("myList");
  let newLi = document.createElement("li");
  newLi.innerText = "Sono stato aggiunto da JS";
  myList.appendChild(newLi);
};

addOne();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const svuota = function () {
  let myList = document.getElementById("myList");
  let allLi = document.querySelectorAll("#myList li");
  console.log(allLi);

  allLi.forEach((ele) => {
    myList.removeChild(ele);
  });
};

svuota();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addTest = function () {
  let allTr = document.getElementsByTagName("tr");
  for (let i = 0; i < allTr.length; i++) {
    const ele = allTr[i];
    ele.classList.add("test");
  }
};

addTest();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come
  parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = function (num) {
  let myArr = [];
  for (let i = 0; i < num; i++) {
    let currentPrint = "*";
    myArr.push(currentPrint);
  }
};

halfTree(3);
halfTree(9);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
