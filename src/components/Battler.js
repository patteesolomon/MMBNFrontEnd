
//import chips from chipsdatamodel
class Battler {
    constructor(name, chips = [], hp) {
        this.name = name;
        this.chips = chips;
        this.hp = hp;
        this.pa = false;
    }
    setPa(e)
    {
        this.pa = e;
    }
    getPa()
    {
        return this.pa;
    }
    chipAdd(chip)
    {
        this.chips.push(chip);
    }
    chipRemove(chip)
    {
        this.chips.splice(chip, 1);
    }
    chipUse(chip)
    {
        this.chipRemove(chip);
        return this.chips[chip];
    }
    getName()
    {
        return this.name;
    }
    getHp()
    {
        return this.hp;
    }
    getChips() {
        return this.chips;
    }
    setHp(hp)
    {
        this.hp = hp;
    }
}

module.exports = Battler;