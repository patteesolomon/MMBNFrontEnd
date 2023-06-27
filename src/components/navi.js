const Battler = require("./Battler");
const Chip = require("./Chip");

class Navi extends Battler{
    constructor(b = Battler, pdata, catchP, friends = [])
    {
        super(b.name, b.chips, b.hp);
        this.name = b.name;
        this.chips = b.chips;
        this.hp = b.hp;
        this.pa = b.pa;
        this.pdata = pdata;
        this.catchP = catchP;
        this.friends = friends;
    }
}

module.exports = Navi;