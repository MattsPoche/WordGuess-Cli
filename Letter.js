function  Letter(c) {
    this.c = c;
    this.guessed = false;
    this.getLetter = function() {
        if(this.guessed)
            return c;
        return "_";
    }
    this.makeGuess = function(g) {
        if(g === this.c)
            this.guessed = true;
    }
}

module.exports = Letter;