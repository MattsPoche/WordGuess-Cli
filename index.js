const Word = require("./Word");
const inquirer = require("inquirer");

const words = ["ten",
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

let remainingGuesses = 20;

//Math.floor(Math.random() * (max - min + 1) ) + min;
let random = Math.floor(Math.random()*(words.length)); //random word
//instanciate new word 
let guessWord = new Word(words[random]);

function input() {
    inquirer.prompt([
        {
            name: "guess",
            message: `The secret word is: ${guessWord.getWord()} \nYou have ${remainingGuesses} guesses remaining\nTry to guess a letter:`
        }
    ]).then(function(answer) {
        if(answer.guess.length === 1){
            guessWord.wordGuess(answer.guess);
            remainingGuesses--;
        }else{
            console.log("Guesses must be a single character only");
        }
        if(remainingGuesses > 0 && !guessWord.checkWord()){
            input();
        }else{
            gameOver();
        }
    });
}

function gameOver() {
    console.log("The secret word is: "+guessWord.word);
    if(guessWord.checkWord()){
        console.log("You won!");
    }else{
        console.log("You lose!");
    }
}

input();