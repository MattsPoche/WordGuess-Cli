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
    this.init = function() {
        for(let i = 0; i < this.word.length; i++){
            this.letters.push(new Letter(this.word[i]));
        }
    }
}

module.exports = Word;