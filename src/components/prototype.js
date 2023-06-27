const Battler = require("./Battler");

class Game {
    constructor(name, playersAtOnce = [](Battler), score, scoreUnit) {
        this.name = name;
        this.playersAtOnce = playersAtOnce;
        this.score = score;
        this.scoreUnit = scoreUnit;
    }
    scoreCall() {
        this.score += this.scoreUnit;
        console.log(this.playersAtOnce[0].name); //test
    }
    scoreReset() {
        this.score = 0;
    }
    scoreSet(score) {
        this.score = score;
    }
}



module.exports = Game;
