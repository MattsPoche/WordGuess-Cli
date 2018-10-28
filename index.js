let Word = require("./Word");
let inquirer = require("inquirer");

let words = ["ten",
"ground",
"plough",
"sore",
"second",
"first",
"awful",
"boy",
"illustrious",
"vacation",
"succeed",
"flippant"];

//Math.floor(Math.random() * (max - min + 1) ) + min;
let random = Math.floor(Math.random()*(words.length)); //random word
//instanciate new word 
let guessWord = new Word(words[random]);
//init method creates an array of Letters using the random word
guessWord.init();

input();

function input() {
    inquirer.prompt([
        {
            name: "guess",
            message: `The secret word is: ${guessWord.getWord()} \nTry to guess a letter:`
        }
    ]).then(function(answer) {
        guessWord.wordGuess(answer.guess);
        input();
    });
}