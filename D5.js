/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/
/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]
//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
let test  = "Test string"

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let sum = 10 + 20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
let random = function(){
  return Math.floor(Math.random() * 21)
}

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let me = {
  name:"??ron",
  surname:"Hajnal",
  age:24,
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
me.skill = ["HTML","CSS","JS"]

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.g
   */

me.skill.pop()

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
const dice = function(){
  return Math.floor(Math.random() * 6) + 1
}

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
const whoIsBigger = function(a, b){
  if (a > b){
    return a
  }
  else return b
}

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
const splitMe = function(string){
  return string.split(" ") 
}
/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
const deleteOne = function(string, boolean){
  if(boolean){
    return string.slice(1,string.length)
  }
  else
  return string.slice(0,-2)
}

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
const onlyLetters = function(string){
  return string.replace(/[0-9]/g,'')
  }

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
const isThisAnEmail = function(email) {
  return /\S+@\S+\.\S+/.test(email)
}


/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
const whatDayIsIt = function() {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[new Date().getDay()]
}

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
const rollTheDices = function(n){
  let sumOfDiceRolls = 0
  for (let i = 0; i<n;i++){
    sumOfDiceRolls += dice()
  }
  return sumOfDiceRolls
}

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date .
*/
const howManyDays = function(inputdate){
  let today = new Date()
  console.log(today)
  let startingDate = new Date(inputdate)
  console.log(startingDate)
  let difference = today.getTime() - startingDate.getTime()
  let differenceInDays = Math.round(difference/(1000*24*3600))
  return differenceInDays
}

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
const isTodayMyBirthday = function(inputdate){
  let today = new Date()
  let birthDayDate = new Date(inputdate)
  return birthDayDate.getDate() == today.getDate() &&  birthDayDate.getMonth() == today.getMonth() &&  birthDayDate.getFullYear() == today.getFullYear()
}

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
const deleteProp = function(object,property){
  let objectWithProprety = object
  delete objectWithProprety[`${property}`]
  return objectWithProprety
}

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

const olderMovie = function(){
  let oldestMovie = [
  {Title: "placeholder",
  Year: "9999",
  imdbID: "placeholder",
  Type: "placeholder",
  Poster:
    "placeholder",
},]
  for (let i = 0; i<movies.length; i++)
  if (parseInt(oldestMovie[0].Year) > parseInt(movies[i].Year)){
    oldestMovie.splice(0,1,movies[i])
  }
  return oldestMovie
}
console.log(olderMovie())

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

  const countMovies = function(){
   return movies.length
  }

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
let arrayOfTitles = []
let moviesCopy = [...movies]
  const onlyTheTitles = function(movies){
       for (let i = 0; i < moviesCopy.length; i++){
      arrayOfTitles.push(moviesCopy[i].Title)
      }
    return arrayOfTitles
  }

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
let moviesOfThisMillenium = []
const onlyInThisMillennium = function(){
  for (let i = 0; i < moviesCopy.length; i++){
    if (moviesCopy[i].Year>2000){
      moviesOfThisMillenium.push(moviesCopy[i])
    }
    }
  return moviesOfThisMillenium
}

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
const getMovieById = function(id){
  for (let i = 0; i < movies.length;i++){
    if(id === movies[i].imdbID)
      return movies[i]
    }
}

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
const sumAllTheYears = function(){
  let sumOfAllYears = 0
  for (let i = 0; i < movies.length;i++){
    sumOfAllYears +=parseInt(movies[i].Year)
  }
  return sumOfAllYears
}

console.log(sumAllTheYears())
/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
const searchByTitle = function(title){
  for (let i = 0; i < movies.length;i++){
    if(movies[i].Title.includes(title))
      return movies[i]
    }
}
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
const searchAndDivide = function(string){
  let dividedResults = {
    match: [],
    unmatch: [],
  }
    for (let i = 0; i < movies.length; i++)
    if (movies[i].Title.includes(string)){
      dividedResults.match.push(movies[i])
    }
    else dividedResults.unmatch.push(movies[i])
  return dividedResults
}

//seachbytitle for search and divide logic
/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
moviesWithoutGivenIndex = []
const removeIndex = function(index){
  let copyOfMovies = [...movies]
  for (let i = 0; i<movies.length;i++){
    if (movies[index] !== movies[i])
    moviesWithoutGivenIndex.push(copyOfMovies[i])
  }
  return moviesWithoutGivenIndex
}

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/


/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* const tree = function(n) {
  for ( let i = 0; i < n ; i++ ) {
      let star = '*';
      let space = ' ';
      for ( let j = 1; j <= i; j++ ) {
          star = star + '**';            
      }         
      let spacesBefore = space.repeat(n-i-1);
      star = spacesBefore + star;
      console.log(star);
  }
}

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
/*const isItPrime = function (n) {
  for(var i = 2; i < n; i++)
    if(n % i === 0) return false;
  return n > 1;
}

console.log(isItPrime(1))*/