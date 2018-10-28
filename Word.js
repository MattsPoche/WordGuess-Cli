let Letter = require("./Letter");

function Word(word) {
    this.word = word;
    this.letters = [];
    this.getWord = function() {
        let str = "";
        this.letters.forEach(element => {
            str += element.getLetter();
        });
        return str;
    }
    this.wordGuess = function(g){
        this.letters.forEach(element => {
            element.makeGuess(g);
        });
    }
    this.init = function() {//this function runs when Word is instanciated. adds new Letters to the letters array from word
        for(let i = 0; i < this.word.length; i++){
            this.letters.push(new Letter(this.word[i]));
        }
    }
    this.checkWord = function() {//returns false if any letters have not been guessed correctly otherwise true
        //this code does not work with foreach?
        //return false; causes foreach to exit. the code continues running and always returns true :(
        for(let i = 0; i < this.letters.length; i++){
            if(!this.letters[i].guessed)
                return false;
        }
        return true;
    }
    this.init();
}

module.exports = Word;